import { createRef, FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'
import WebGL2 from '../common/webgl2'
import { ArtPlaque, Artwork } from '../meta'
import artworkLibrary from '../library'
import styles from '../canvas-template/style.module.css'

import fragmentShaderSource from './fragment.js'
import vertexShaderSource from './vertex.js'
import GridOverlay from '../common/grid-overlay'
import { useEffect } from 'preact/hooks'
import Out from '../common/out'

const windowSupport = typeof window !== 'undefined'
const motionSupport = windowSupport && !!window.DeviceMotionEvent
const orientationSupport = windowSupport && !!window.DeviceOrientationEvent

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

const Untilted: FunctionalComponent = () => {
  const ref = createRef<HTMLElement>()
  const outRef = createRef<HTMLPreElement>()
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

  useEffect(() => {
    if (!windowSupport) return

    const outElement = outRef.current as HTMLElement

    const log = (...stuff: string[]): void => {
      console.log(...stuff)
      outElement.innerHTML = `${stuff.join(' ')}\n`
    }

    const handleDeviceOrientation = (
      event: DeviceOrientationEvent,
    ): boolean => {
      log(
        `(${+event.absolute}, ${event.alpha ?? '?'}, ${event.beta ?? '?'}, ${
          event.gamma ?? '?'
        })`,
      )
      event.preventDefault()
      return false
    }
    window.addEventListener('deviceorientation', handleDeviceOrientation)

    const handleDeviceMotion = (event: DeviceMotionEvent): boolean => {
      log(
        `(${event.acceleration ? event.acceleration.x ?? '?' : '?'}, ${
          event.accelerationIncludingGravity
            ? event.accelerationIncludingGravity.x ?? '?'
            : '?'
        }, ${event.interval}, ${
          event.rotationRate ? event.rotationRate.alpha ?? '?' : '?'
        })`,
      )
      event.preventDefault()
      return false
    }
    window.addEventListener('devicemotion', handleDeviceMotion)

    log(`init ➜ ${Math.random()}`)

    if (!motionSupport) alert('Error: Motion not available')
    if (!orientationSupport) alert('Error: Orientation not available')

    return (): void => {
      window.removeEventListener('deviceorientation', handleDeviceOrientation)
      window.removeEventListener('devicemotion', handleDeviceMotion)
    }
  }, [])

  const art: Artwork = artworkLibrary['untilted']
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
      <Out outRef={outRef} />
      <WebGL2 init={init} onResize={onResize} draw={draw} />
    </section>
  )
}

export default Untilted
