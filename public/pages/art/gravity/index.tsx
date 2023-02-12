import { createRef, FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'
import WebGL2 from '../common/webgl2'
import { ArtPlaque, Artwork } from '../meta'
import artworkLibrary from '../library'
import styles from '../canvas-template/style.module.css'

import fragmentShaderSource from './fragment.js'
import vertexShaderSource from './vertex.js'
import GridOverlay from '../common/grid-overlay'

const initShader = (
  gl: WebGL2RenderingContext,
  type: number,
  source: string,
): WebGLShader => {
  const shader = gl.createShader(type)
  if (!shader) {
    throw 'Missing shader'
  }
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw gl.getShaderInfoLog(shader)
  }
  return shader
}

const initProgram = (gl: WebGL2RenderingContext): WebGLProgram => {
  const program = gl.createProgram()
  if (!program) {
    throw 'Missing program'
  }
  const fragmentShaderSource =
    document.getElementById('fragmentShader')?.textContent
  if (!fragmentShaderSource) {
    throw 'Missing fragmentShaderSource'
  }
  const fragmentShader = initShader(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentShaderSource,
  )
  gl.attachShader(program, fragmentShader)
  const vertexShaderSource =
    document.getElementById('vertexShader')?.textContent
  if (!vertexShaderSource) {
    throw 'Missing vertexShaderSource'
  }
  const vertexShader = initShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
  gl.attachShader(program, vertexShader)
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw gl.getProgramInfoLog(program) ?? 'Error from getProgramParameter'
  }
  gl.useProgram(program)
  return program
}

const Gravity: FunctionalComponent = () => {
  const ref = createRef<HTMLElement>()
  let shaderProgram: WebGLProgram
  let timeUniform: WebGLUniformLocation | null
  let translateUniform: WebGLUniformLocation | null
  let scaleUniform: WebGLUniformLocation | null
  const translate = [0, 0]
  const scale = [1, 1]

  const bindBuffers = (
    gl: WebGL2RenderingContext,
    program: WebGLProgram,
  ): void => {
    const positionAttrib = gl.getAttribLocation(program, 'a_position')

    // sphere

    const latitudeBands = 30
    const longitudeBands = 30
    const radius = 3
    const normals = []
    const textureCoords = []
    const vertexPositions = []

    for (let latNumber = 0; latNumber <= latitudeBands; latNumber++) {
      const theta = (latNumber * Math.PI) / latitudeBands
      const sinTheta = Math.sin(theta)
      const cosTheta = Math.cos(theta)

      for (let longNumber = 0; longNumber <= longitudeBands; longNumber++) {
        const phi = (longNumber * 2 * Math.PI) / longitudeBands
        const sinPhi = Math.sin(phi)
        const cosPhi = Math.cos(phi)

        const x = cosPhi * sinTheta
        const y = cosTheta
        const z = sinPhi * sinTheta
        const u = 1 - longNumber / longitudeBands
        const v = 1 - latNumber / latitudeBands

        normals.push(x)
        normals.push(y)
        normals.push(z)
        textureCoords.push(u)
        textureCoords.push(v)
        vertexPositions.push(radius * x)
        vertexPositions.push(radius * y)
        vertexPositions.push(radius * z)
      }
    }

    const vertexTextureCoordBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexTextureCoordBuffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(textureCoords),
      gl.STATIC_DRAW,
    )
    // vertexTextureCoordBuffer.itemSize = 2
    // vertexTextureCoordBuffer.numItems = textureCoords.length / 2

    //const vertexPositionBuffer = gl.createBuffer()
    // gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositions)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(vertexPositions),
      gl.STATIC_DRAW,
    )
    // vertexPositionBuffer.itemSize = 3
    // vertexPositionBuffer.numItems = vertexPositions.length / 3

    // const vertexBuffer = gl.createBuffer()
    // gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
    // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)
    // gl.vertexAttribPointer(positionAttrib, 3, gl.FLOAT, false, 0, 0)
    gl.bindBuffer(gl.ARRAY_BUFFER, null) // unbind
    gl.enableVertexAttribArray(positionAttrib)
    timeUniform = gl.getUniformLocation(program, 'u_time')
    translateUniform = gl.getUniformLocation(program, 'u_translate')
    scaleUniform = gl.getUniformLocation(program, 'u_scale')
  }

  const init = (ctx: WebGL2RenderingContext): void => {
    translate[0] = -ctx.canvas.width / 2
    translate[1] = -ctx.canvas.height / 2
    shaderProgram = initProgram(ctx)
    bindBuffers(ctx, shaderProgram)
  }

  const onResize = (ctx: WebGL2RenderingContext): void => {
    ctx.viewport(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.clear(ctx.COLOR_BUFFER_BIT)
    draw(ctx, -1)
  }

  const setTranslate = (x: number, y: number): void => {
    translate[0] = x
    translate[1] = y
  }

  const setScale = (x: number, y: number): void => {
    scale[0] = x
    scale[1] = y
    setTranslate(0, 0)
  }

  const draw = (ctx: WebGL2RenderingContext, frame: number): void => {
    //console.log('draw', frame, ctx)
    ctx.uniform1f(timeUniform, frame)
    ctx.uniform2f(translateUniform, translate[0], translate[1])
    ctx.uniform2f(scaleUniform, scale[0], scale[1])
  }

  const art: Artwork = artworkLibrary['gravity']
  return (
    <section ref={ref} class={styles.canvas_frame}>
      <Helmet>
        <title>{art.title}</title>
        <meta name="description" content={art.description} />
      </Helmet>
      <div class="d-none">
        <ArtPlaque art={art} />
      </div>
      <div
        class="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        id="shaders"
        aria-labelledby="shadersLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="shadersLabel">
            Shaders
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="parameterPanel"
            aria-label="Close"
          />
        </div>
        <div class="offcanvas-body">
          <form>
            <div class="mb-3">
              <label for="vertexShader">Vertex Shader</label>
              <textarea class="form-control" id="vertexShader" rows={6}>
                {vertexShaderSource}
              </textarea>
            </div>
            <div class="mb-3">
              <label for="fragmentShader">Fragment Shader</label>
              <textarea class="form-control" id="fragmentShader" rows={20}>
                {fragmentShaderSource}
              </textarea>
            </div>
          </form>
        </div>
      </div>
      <div style="display:none;">
        <GridOverlay setTranslate={setTranslate} setScale={setScale} />
      </div>
      <WebGL2 init={init} onResize={onResize} draw={draw} />
    </section>
  )
}

export default Gravity
