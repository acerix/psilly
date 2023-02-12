import { FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'
import WebGL2 from '../common/webgl2'
import { ArtPlaque, Artwork } from '../meta'
import artworkLibrary from '../library'
import styles from '../canvas-template/style.module.css'

import fragmentShaderSource from './fragment.js'
import vertexShaderSource from './vertex.js'
// import { hilbertCurve } from '../chillbert'

const initShader = (
  ctx: WebGL2RenderingContext,
  type: number,
  source: string,
): WebGLShader => {
  const shader = ctx.createShader(type)
  if (!shader) {
    throw 'Missing shader'
  }
  ctx.shaderSource(shader, source)
  ctx.compileShader(shader)
  if (!ctx.getShaderParameter(shader, ctx.COMPILE_STATUS)) {
    throw ctx.getShaderInfoLog(shader)
  }
  return shader
}

const initProgram = (ctx: WebGL2RenderingContext): WebGLProgram => {
  const program = ctx.createProgram()
  if (!program) {
    throw 'Missing program'
  }
  const fragmentShaderSource =
    document.getElementById('fragmentShader')?.textContent
  if (!fragmentShaderSource) {
    throw 'Missing fragmentShaderSource'
  }
  const fragmentShader = initShader(
    ctx,
    ctx.FRAGMENT_SHADER,
    fragmentShaderSource,
  )
  ctx.attachShader(program, fragmentShader)
  const vertexShaderSource =
    document.getElementById('vertexShader')?.textContent
  if (!vertexShaderSource) {
    throw 'Missing vertexShaderSource'
  }
  const vertexShader = initShader(ctx, ctx.VERTEX_SHADER, vertexShaderSource)
  ctx.attachShader(program, vertexShader)
  ctx.linkProgram(program)
  if (!ctx.getProgramParameter(program, ctx.LINK_STATUS)) {
    throw ctx.getProgramInfoLog(program) ?? 'Error from getProgramParameter'
  }
  ctx.useProgram(program)
  return program
}

const hillbertTexture = (
  ctx: WebGL2RenderingContext,
  hilbertRank: number,
): WebGLTexture => {
  const size = 1 << (2 * hilbertRank)

  const texture = ctx.createTexture()
  if (!texture) throw 'Error creating texture'
  ctx.bindTexture(ctx.TEXTURE_2D, texture)
  ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_S, ctx.REPEAT)
  ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_T, ctx.REPEAT)
  ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MIN_FILTER, ctx.NEAREST)
  ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MAG_FILTER, ctx.NEAREST)
  ctx.texImage2D(
    ctx.TEXTURE_2D,
    0,
    ctx.RGBA,
    size,
    size,
    0,
    ctx.RGBA,
    ctx.UNSIGNED_BYTE,
    null,
  )

  // const hilbertSpace = hilbertCurve(hilbertRank)
  // console.log('size=', size, 'hilbertSpace=', hilbertSpace)
  const state = new Uint32Array(size)
  for (let i = 1; i < size; i++) {
    state[i] = +(Math.random() > 0.5)
  }
  // let i = 0
  // for (const n of hilbertSpace) {
  //   i++
  //   texture
  // }
  const rgba = new Uint8Array(size * size * 4)
  for (let i = 0; i < state.length; i++) {
    const ii = i * 4
    // rgba[ii + 0] = rgba[ii + 1] = rgba[ii + 2] = state[i] ? 255 : 0
    rgba[ii + 0] = rgba[ii + 1] = rgba[ii + 2] = Math.random() > 0.5 ? 255 : 0
    rgba[ii + 3] = 255
  }
  ctx.texSubImage2D(
    ctx.TEXTURE_2D,
    0,
    0,
    0,
    size,
    size,
    ctx.RGBA,
    ctx.UNSIGNED_BYTE,
    rgba,
  )
  // console.log(rgba)

  return texture
}

const Quadingle: FunctionalComponent = () => {
  let shaderProgram: WebGLProgram
  let timeUniform: WebGLUniformLocation | null
  let translateUniform: WebGLUniformLocation | null
  const translate = [0, 0]

  const bindBuffers = (
    ctx: WebGL2RenderingContext,
    program: WebGLProgram,
  ): void => {
    const positionAttrib = ctx.getAttribLocation(program, 'a_position')
    const curveAttrib = ctx.getAttribLocation(program, 'a_curve')

    const vertices = new Float32Array([+1, +1, -1, +1, +1, -1, -1, -1])
    const vertexBuffer = ctx.createBuffer()
    ctx.bindBuffer(ctx.ARRAY_BUFFER, vertexBuffer)
    ctx.bufferData(ctx.ARRAY_BUFFER, vertices, ctx.STATIC_DRAW)
    ctx.vertexAttribPointer(positionAttrib, 2, ctx.FLOAT, false, 0, 0)
    ctx.bindBuffer(ctx.ARRAY_BUFFER, null) // unbind
    ctx.enableVertexAttribArray(positionAttrib)

    // const curveData = new Float32Array([
    //   +1, +1,
    //   -1, +1,
    //   +1, -1,
    //   -1, -1
    // ])
    // const curveData = new Uint8Array([
    //   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    // ])
    const curveData = new Float32Array([1, 0, 0, 255, 255, 255, 255, 0])
    const curveBuffer = ctx.createBuffer()
    ctx.bindBuffer(ctx.ARRAY_BUFFER, curveBuffer)
    ctx.bufferData(ctx.ARRAY_BUFFER, curveData, ctx.STATIC_DRAW)
    ctx.vertexAttribPointer(curveAttrib, 2, ctx.FLOAT, false, 0, 0)
    ctx.bindBuffer(ctx.ARRAY_BUFFER, null) // unbind
    ctx.enableVertexAttribArray(curveAttrib)

    timeUniform = ctx.getUniformLocation(program, 'u_time')
    translateUniform = ctx.getUniformLocation(program, 'u_translate')

    // const hilbertRank = 4
    // const texture = hillbertTexture(ctx, hilbertRank)
    // console.log(texture)
  }

  const init = (ctx: WebGL2RenderingContext): void => {
    if (hillbertTexture.length === 3) console.log(hillbertTexture)
    translate[0] = -ctx.canvas.width / 2
    translate[1] = -ctx.canvas.height / 2
    shaderProgram = initProgram(ctx)
    bindBuffers(ctx, shaderProgram)

    // const spaceSize = Math.max(ctx.canvas.width, ctx.canvas.height) / 2
    // const hilbertRank = 2 // Math.ceil(Math.log2(spaceSize))
    // console.log('desired spaceSize=', spaceSize, 'r=', hilbertRank, Math.ceil(Math.log2(spaceSi
  }

  const onResize = (ctx: WebGL2RenderingContext): void => {
    ctx.viewport(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.clear(ctx.COLOR_BUFFER_BIT)
  }

  const draw = (ctx: WebGL2RenderingContext, frameCount: number): void => {
    ctx.uniform1i(timeUniform, frameCount)
    ctx.uniform2f(translateUniform, translate[0], translate[1])
    ctx.drawArrays(ctx.TRIANGLE_STRIP, 0, 4)
  }

  const art: Artwork = artworkLibrary['quadingle']
  return (
    <section class={styles.canvas_frame}>
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
      <WebGL2 init={init} onResize={onResize} draw={draw} />
    </section>
  )
}

export default Quadingle
