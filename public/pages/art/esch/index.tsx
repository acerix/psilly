import { createRef, FunctionalComponent } from 'preact'
import WebGL2 from '../common/webgl2'
import { ArtPlaque, Artwork } from '../meta'
import artworkLibrary from '../library'
import styles from '../canvas-template/style.module.css'

import fragmentShaderSource from './fragment.js'
import vertexShaderSource from './vertex.js'
import GridOverlay from '../common/grid-overlay'

// @todo https://www.math.univ-toulouse.fr/~cheritat/AppletsDivers/Escher/

// function mul(a,b) {
//   return {re:a.re*b.re-a.im*b.im, im:a.im*b.re+a.re*b.im};
// }

// function mulbis(a,b) {
//   return {re:a.re*b.re+a.im*b.im, im:a.im*b.re-a.re*b.im};
// }

// function add(a,b) {
//   return {re:a.re+b.re, im:a.im+b.im};
// }

// function sub(a,b) {
//   return {re:a.re-b.re, im:a.im-b.im};
// }

// function conj(a) {
//   return {re:a.re, im:-a.im};
// }

// function Norm(a) {
//   return a.re*a.re+a.im*a.im;
// }

// function div(a,b) {
//   var d=Norm(b);
//   return {re:(a.re*b.re+a.im*b.im)/d, im:(a.im*b.re-a.re*b.im)/d};
// }

// function abs(a) {
//   return Math.sqrt(Norm(a));
// }

// function complex(x,y=0) {
//   return {re:x, im:y};
// }

// function arg(z) {
//   return Math.atan2(z.im,z.re);
// }

// function neg(z) {
//   return {re:-z.re,im:-z.im};
// }

// function ooo(t) {
//   return {re:Math.cos(t), im:Math.sin(t)};
// }

// function exp(t) {
//   var r=Math.exp(t);
//   return {re:r*Math.cos(t),im:r*Math.sin(t)};
// }

// function copy(z) {
//   return {re:z.re, im:z.im};
// }

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

const Esch: FunctionalComponent = () => {
  const ref = createRef<HTMLElement>()
  let shaderProgram: WebGLProgram
  let timeUniform: WebGLUniformLocation | null
  let translateUniform: WebGLUniformLocation | null
  let scaleUniform: WebGLUniformLocation | null
  const translate = [0, 0]
  const scale = [1, 1]
  let maxRadius = 1

  const bindBuffers = (
    gl: WebGL2RenderingContext,
    program: WebGLProgram,
  ): void => {
    const positionAttrib = gl.getAttribLocation(program, 'a_position')
    const vertices = new Float32Array([
      +1, +1, +0, -1, +1, +0, +1, -1, +0, -1, -1, +0,
    ])
    const vertexBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
    gl.vertexAttribPointer(positionAttrib, 3, gl.FLOAT, false, 0, 0)
    gl.bindBuffer(gl.ARRAY_BUFFER, null) // unbind
    gl.enableVertexAttribArray(positionAttrib)
    timeUniform = gl.getUniformLocation(program, 'u_time')
    translateUniform = gl.getUniformLocation(program, 'u_translate')
    scaleUniform = gl.getUniformLocation(program, 'u_scale')
  }

  const init = (ctx: WebGL2RenderingContext): void => {
    maxRadius = Math.sqrt(ctx.canvas.width ** 2 + ctx.canvas.height ** 2)
    translate[0] = -ctx.canvas.width / 2
    translate[1] = -ctx.canvas.height / 2
    scale[0] = scale[1] = 2 / maxRadius
    shaderProgram = initProgram(ctx)
    bindBuffers(ctx, shaderProgram)
  }

  const onResize = (ctx: WebGL2RenderingContext): void => {
    ctx.viewport(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.clear(ctx.COLOR_BUFFER_BIT)
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

  const draw = (ctx: WebGL2RenderingContext, frameCount: number): void => {
    ctx.uniform1f(timeUniform, frameCount)
    ctx.uniform2f(translateUniform, translate[0], translate[1])
    ctx.uniform2f(scaleUniform, scale[0], scale[1])
    ctx.drawArrays(ctx.TRIANGLE_STRIP, 0, 4)
  }

  const art: Artwork = artworkLibrary['esch']
  return (
    <section ref={ref} class={styles.canvas_frame}>
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

export default Esch
