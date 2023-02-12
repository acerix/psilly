import { createRef, FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'
import WebGL2 from '../common/webgl2'
import { ArtPlaque, Artwork } from '../meta'
import artworkLibrary from '../library'
import styles from '../canvas-template/style.module.css'

import fragmentShaderSource from './fragment.js'
import vertexShaderSource from './vertex.js'
import GridOverlay from '../common/grid-overlay'

export class ModularForm {
  // test case https://www.lmfdb.org/ModularForm/GL2/Q/holomorphic/1/12/a/a/1/1/
  // Level 1 → Weight 12 → Character orbit a → Newform orbit a → Embedding 1.1
  level = 1n
  weight = 0n

  // SL2Z
  S = [0, -1, 1, 0]
  U = [0, 1, -1, 0]
  R = [1, -1, 0, 1]
  T = [1, 1, 0, 1]
  E = [1, 0, 0, 1]
  I = [-1, 0, 0, -1]

  constructor(weight: bigint) {
    this.weight = weight
  }
  get label(): string {
    // https://www.lmfdb.org/ModularForm/GL2/Q/holomorphic/Labels
    return `${this.level}.${this.weight}.a.a.1.1`
  }
}

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

// https://davidlowryduda.com/static/Talks/Bowdoin19/visualizing_modular_forms.pdf
// https://maths.tcd.ie/~fellerc/2018-internship/docs/caelen-feller-report.pdf
// https://pdf.sciencedirectassets.com/272313/1-s2.0-S0747717111X0010X/1-s2.0-S0747717111001258/main.pdf
// https://github.com/mmasdeu/modularforms/blob/master/main.pdf
// http://www.few.vu.nl/~sdn249/modularforms16/SageMathIntro.pdf
// https://eclass.uoa.gr/modules/document/file.php/MATH154/%CE%A3%CE%B5%CE%BC%CE%B9%CE%BD%CE%AC%CF%81%CE%B9%CE%BF%202011/kulkarni-1991.pdf
// https://github.com/sagemath/sage/blob/824f9cccaf76f9e1d5009f2ec3edcd96d0111191/src/sage/modular/arithgroup/farey_symbol.pyx#L966
const TotallyModularFormBro: FunctionalComponent = () => {
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
    translate[0] = -ctx.canvas.width / 2
    translate[1] = -ctx.canvas.height / 2
    scale[0] = scale[1] = 1 / 64
    shaderProgram = initProgram(ctx)
    bindBuffers(ctx, shaderProgram)

    const mf = new ModularForm(12n)
    console.log(mf.label)
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
  }

  const draw = (ctx: WebGL2RenderingContext, frameCount: number): void => {
    ctx.uniform1f(timeUniform, frameCount)
    ctx.uniform2f(translateUniform, translate[0], translate[1])
    ctx.uniform2f(scaleUniform, scale[0], scale[1])
    ctx.drawArrays(ctx.TRIANGLE_STRIP, 0, 4)
  }

  const art: Artwork = artworkLibrary['totally-modular-form-bro']
  return (
    <section ref={ref} class={styles.canvas_frame}>
      <Helmet title={art.title} />
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
      <GridOverlay setTranslate={setTranslate} setScale={setScale} />
      <WebGL2 init={init} onResize={onResize} draw={draw} />
    </section>
  )
}

export default TotallyModularFormBro
