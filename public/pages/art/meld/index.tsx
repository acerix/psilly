import { FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'
import WebGL2 from '../common/webgl2'
import { ArtPlaque, Artwork } from '../meta'
import artworkLibrary from '../library'
import styles from '../canvas-template/style.module.css'

import fragmentShaderSource from './fragment.js'
import vertexShaderSource from './vertex.js'
import { useEffect } from 'preact/hooks'

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

const Meld: FunctionalComponent = () => {
  let shaderProgram: WebGLProgram
  let timeUniform: WebGLUniformLocation | null
  let translateUniform: WebGLUniformLocation | null
  const translate = [0, 0]
  let frameOffset = 0

  const bindBuffers = (
    ctx: WebGL2RenderingContext,
    program: WebGLProgram,
  ): void => {
    const positionAttrib = ctx.getAttribLocation(program, 'a_position')
    const vertices = new Float32Array([
      +1, +1, +0, -1, +1, +0, +1, -1, +0, -1, -1, +0,
    ])
    const vertexBuffer = ctx.createBuffer()
    ctx.bindBuffer(ctx.ARRAY_BUFFER, vertexBuffer)
    ctx.bufferData(ctx.ARRAY_BUFFER, vertices, ctx.STATIC_DRAW)
    ctx.vertexAttribPointer(positionAttrib, 3, ctx.FLOAT, false, 0, 0)
    ctx.bindBuffer(ctx.ARRAY_BUFFER, null) // unbind
    ctx.enableVertexAttribArray(positionAttrib)
    timeUniform = ctx.getUniformLocation(program, 'u_time')
    translateUniform = ctx.getUniformLocation(program, 'u_translate')
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
  }

  const draw = (ctx: WebGL2RenderingContext, frameCount: number): void => {
    ctx.uniform1f(timeUniform, frameCount + frameOffset)
    ctx.uniform2f(translateUniform, translate[0], translate[1])
    ctx.drawArrays(ctx.TRIANGLE_STRIP, 0, 4)
  }

  useEffect(() => {
    const lastMousePosition = [-1, -1]
    const lastTouch1Position = [-1, -1]

    const handleMouseMove = (event: MouseEvent): void => {
      if (lastMousePosition[0] > -1) {
        const dx = lastMousePosition[0] - event.clientX
        const dy = lastMousePosition[1] - event.clientY
        translate[0] += dx
        translate[1] -= dy
        frameOffset += dy
      }
      lastMousePosition[0] = event.clientX
      lastMousePosition[1] = event.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    const handleTouchMove = (event: TouchEvent): void => {
      if (lastTouch1Position[0] > -1) {
        const dx = lastTouch1Position[0] - event.touches[0].pageX
        const dy = lastTouch1Position[1] - event.touches[0].pageY
        translate[0] += dx
        translate[1] -= dy
        frameOffset += dy
      }
      lastTouch1Position[0] = event.touches[0].pageX
      lastTouch1Position[1] = event.touches[0].pageY
    }
    window.addEventListener('touchmove', handleTouchMove)

    return (): void => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  const art: Artwork = artworkLibrary['meld']
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

export default Meld
