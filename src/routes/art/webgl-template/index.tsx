import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import WebGL2 from '../common/webgl2'
import {ArtPlaque, Artwork} from '../meta'
import artworkLibrary from '../library'
import style from '../canvas-template/style.css'
import fragmentShaderSource from './fragment.js'
import vertexShaderSource from './vertex.js'
import LoadingScreen from '../common/loading-screen'


export const initShader = (gl: WebGL2RenderingContext, type: number, source: string): WebGLShader => {
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

export const initProgram = (gl: WebGL2RenderingContext): WebGLProgram => {
  const program = gl.createProgram()
  if (!program) {
    throw 'Missing program'
  }
  const fragmentShaderSource = document.getElementById('fragmentShader')?.textContent
  if (!fragmentShaderSource) {
    throw 'Missing fragmentShaderSource'
  }
  const fragmentShader = initShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
  gl.attachShader(program, fragmentShader)
  const vertexShaderSource = document.getElementById('vertexShader')?.textContent
  if (!vertexShaderSource) {
    throw 'Missing vertexShaderSource'
  }
  const vertexShader = initShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
  gl.attachShader(program, vertexShader)
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw gl.getProgramInfoLog(program)??'Error from getProgramParameter'
  }
  gl.useProgram(program)
  return program
}

export const bindBuffers = (gl: WebGL2RenderingContext, program: WebGLProgram): void => {
  const positionLocation = gl.getAttribLocation(program, 'a_position')
  const vertices = new Float32Array([
    1,  1,  0,
    -1,  1,  0,
    1, -1,  0,
    -1, -1,  0
  ])
  const vertexBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
  gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0)
  gl.bindBuffer(gl.ARRAY_BUFFER, null) // unbind
  gl.enableVertexAttribArray(positionLocation)
}

const WebGLTemplate: FunctionalComponent = () => {
  let shaderProgram: WebGLProgram

  // const getContext = (canvas: HTMLCanvasElement): WebGL2RenderingContext => {
  //   const ctx = canvas.getContext('webgl2', {
  //     alpha: false,
  //     depth: false,
  //     preserveDrawingBuffer: true
  //   })
  //   if (!ctx) {
  //     throw 'Missing context'
  //   }
  //   return ctx
  // }

  const init = (ctx: WebGL2RenderingContext): void => {
    shaderProgram = initProgram(ctx)
    bindBuffers(ctx, shaderProgram)
  }

  const onResize = (ctx: WebGL2RenderingContext): void => {
    ctx.viewport(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.clear(ctx.COLOR_BUFFER_BIT)
  }

  const draw = (ctx: WebGL2RenderingContext): void => {
    const randomLocation = ctx.getUniformLocation(shaderProgram, 'u_random')
    ctx.uniform1f(randomLocation, Math.random())
    ctx.drawArrays(ctx.TRIANGLE_STRIP, 0, 4)
  }

  const art: Artwork = artworkLibrary['webgl-template']
  return (
    <section class={style.canvas_frame}>
      <Helmet><title>{art.title}</title></Helmet>
      <div class="d-none"><ArtPlaque art={art} /></div>
      <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" id="shaders" aria-labelledby="shadersLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="shadersLabel">Shaders</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="parameterPanel" aria-label="Close" />
        </div>
        <div class="offcanvas-body">
          <form>
            <div class="mb-3">
              <label for="vertexShader">Vertex Shader</label>
              <textarea class="form-control" id="vertexShader" rows={6}>{vertexShaderSource}</textarea>
            </div>
            <div class="mb-3">
              <label for="fragmentShader">Fragment Shader</label>
              <textarea class="form-control" id="fragmentShader" rows={20}>{fragmentShaderSource}</textarea>
            </div>
          </form>
        </div>
      </div>
      <LoadingScreen />
      <WebGL2 init={init} onResize={onResize} draw={draw} />
    </section>
  )
}
// getContext={getContext} 

export default WebGLTemplate
