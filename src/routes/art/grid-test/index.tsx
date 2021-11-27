import {createRef, FunctionalComponent, h} from 'preact'
import Helmet from 'react-helmet'
import { useEffect } from 'preact/hooks'
// import {JridOverlay} from 'jrid'
// import {JridOverlay} from '../../../../node_modules/jrid/src/jrid'
import WebGL2 from '../common/webgl2'
import {ArtPlaque, Artwork} from '../meta'
import artworkLibrary from '../library'
import style from '../canvas-template/style.css'
import fragmentShaderSource from './fragment.js'
import vertexShaderSource from './vertex.js'
import Canvas, { CanvasMethods } from '../common/canvas'

const logBase = 10
const zoomFactor = logBase**(1/13)
const microZoomFactor = zoomFactor**(1/32)
const minimumJridSpacing = 24
const μ = .9
const translateFactor = 16
let free = true

export const axisLabelFormat = (coefficient: number, exponent: number): string => {
  if (coefficient === 0) return '0'
  // simple notation for small exponents
  if (exponent < 5) {
    // @todo i18n eg. toLocaleString
    if (exponent >= 0) {
      // 1...10,000
      return `${coefficient}${'0'.repeat(exponent)}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    if (exponent > -5) {
      // 0...0.0001
      return (coefficient*logBase**exponent).toFixed(-exponent)
    }
  }
  // pseudoscientific notation, eg. 5×⏨42 for 5*10^42
  return `${coefficient}×⏨${exponent}`
}

type TranslateFunction = (x: number, y: number) => void

type ScaleFunction = (x: number, y: number) => void

export interface JridOverlayProps {
  canvasMethodRefs?: CanvasMethods;
  setTranslate?: TranslateFunction;
  setScale?: ScaleFunction;
  initialScale?: number;
}

export const JridOverlay: FunctionalComponent<JridOverlayProps> = (props: JridOverlayProps) => {
  const { setTranslate, setScale, ...rest } = props
  const ref = createRef()
  const canvasCenter = [0, 0]
  const translate = [0, 0]
  const scale = [1, 1]
  const velocity = [0, 0]
  const fontSize = 12
  const axisLabelMargin = 4
  const xLabelOffset = [-2, 10]
  const yLabelOffset = [-axisLabelMargin, -axisLabelMargin]
  let contextHeight = 0

  const init = (ctx: CanvasRenderingContext2D): void => {
    const initialScale = rest.initialScale ?? 16/ctx.canvas.width
    scale[0] = scale[1] = initialScale
    if (setScale) {
      setScale(scale[0], scale[1])
    }
    draw(ctx)
  }

  const onResize = (ctx: CanvasRenderingContext2D): void => {

    // line styles
    ctx.strokeStyle = '#999'
    ctx.lineWidth = 1
    
    // text styles
    ctx.fillStyle = '#999'
    ctx.textAlign = 'right'
    ctx.font = `${fontSize}px monospace`

    contextHeight = ctx.canvas.height
    const halfWidth = ctx.canvas.width/2
    const halfHeight = ctx.canvas.height/2
    if (canvasCenter[0] === 0) {
      // initially translate (0,0) to center of canvas
      canvasCenter[0] = halfWidth
      canvasCenter[1] = halfHeight
      translate[0] = -canvasCenter[0]
      translate[1] = -canvasCenter[1]
    }
    else {
      // adjust translation by difference in canvas size
      const dx = halfWidth - canvasCenter[0]
      const dy = halfHeight - canvasCenter[1]
      translate[0] -= dx
      translate[1] -= dy
      canvasCenter[0] = halfWidth
      canvasCenter[1] = halfHeight
    }
    draw(ctx)
  }

  const render = (): void => {
    void(0)
  }

  const draw = (ctx: CanvasRenderingContext2D): void => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    // slow down due to friction
    velocity[0] *= μ
    velocity[1] *= μ

    // glide
    if (free) {
      translate[0] += velocity[0]
      translate[1] -= velocity[1]
    }
    
    // exponent for axis labels ⏨(n+x)
    const powerX = Math.ceil(Math.log10(minimumJridSpacing * scale[0]))
    const powerY = Math.ceil(Math.log10(minimumJridSpacing * scale[1]))
    const factorX = 10**powerX
    const factorY = 10**powerY

    // set space between lines
    const spaceX = factorX / scale[0]
    const spaceY = factorY / scale[1]

    // get first lines by rounding up
    const xIndexOffset = Math.ceil(translate[0] * scale[0] / factorX)
    const yIndexOffset = Math.ceil(translate[1] * scale[1] / factorY) 
    const firstXValue = xIndexOffset * factorX
    const firstYValue = yIndexOffset * factorY
    const firstXPosition = firstXValue / scale[0] - translate[0]
    const firstYPosition = translate[1] - firstYValue / scale[1]
    
    // lines to write labels on
    const xLineCount = Math.floor(ctx.canvas.width / spaceX)
    const yLineCount = Math.floor(ctx.canvas.height / spaceY)
    const xMiddleLineIndex = Math.floor(xLineCount / 2)
    const yMiddleLineIndex = Math.floor(yLineCount / 2)

    ctx.beginPath()
    // draw x-axis Jrid lines
    for (let i=0; i<=xLineCount; i++) {
      const x = firstXPosition + i * spaceX
      ctx.moveTo(x, 0)
      ctx.lineTo(x, ctx.canvas.height)
      // draw y-axis labels up the middle line
      if (i === xMiddleLineIndex) {
        for (let j=0; j<=yLineCount; j++) {
          const label = axisLabelFormat(j + yIndexOffset, powerY)
          const y = firstYPosition + ctx.canvas.height - j * spaceY
          ctx.fillText(label, x + yLabelOffset[0], y + yLabelOffset[1])
        }
      }
    }
    // draw y-axis Jrid lines
    for (let i=0; i<=yLineCount; i++) {
      const y = firstYPosition + ctx.canvas.height - i * spaceY
      ctx.moveTo(0, y)
      ctx.lineTo(ctx.canvas.width, y)
      // draw x-axis labels below the middle line
      if (i === yMiddleLineIndex) {
        for (let j=0; j<=xLineCount; j++) {
          const label = axisLabelFormat(j + xIndexOffset, powerX)
          const x = firstXPosition + j * spaceX

          // rotate: to avoid overlap with long labels and small Jrid
          // @todo better to rotate once then draw all labels?
          ctx.save()
          ctx.translate(x + xLabelOffset[0], y + xLabelOffset[1])
          ctx.rotate(-Math.PI/6)
          ctx.fillText(label, 0, 0)
          ctx.restore()

          // without rotate:
          // ctx.fillText(label, x + xLabelOffset[0], y + xLabelOffset[1])

        }
      }
    }
    ctx.stroke()

    // update position of main canvas
    if (setTranslate) {
      setTranslate(translate[0], translate[1])
    }
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const canvasEl = ref.current.base as HTMLCanvasElement
    let mouseDown = 0
    let renderCallbackID: number
    const lastMousePosition = [0, 0]
    const lastTouch1Position = [-1, -1]
    const lastTouch2Position = [-1, -1]

    const handleMouseDown = (event: MouseEvent): boolean => {
      mouseDown |= (1<<event.button)
      lastMousePosition[0] = event.clientX
      lastMousePosition[1] = event.clientY
      velocity[0] = velocity[1] = 0
      free = !(mouseDown&1)
      event.preventDefault()
      return false
    }
    canvasEl.addEventListener('mousedown', handleMouseDown)

    const handleMouseUp = (event: MouseEvent): boolean => {
      mouseDown ^= (1<<event.button)
      event.preventDefault()
      free = !(mouseDown&1)
      return false
    }
    canvasEl.addEventListener('mouseup', handleMouseUp)

    const handleContextMenu = (event: MouseEvent): boolean => {
      event.preventDefault()
      return false
    }
    canvasEl.addEventListener('contextmenu', handleContextMenu)

    const handleMouseMove = (event: MouseEvent): void => {
      const dx = lastMousePosition[0] - event.clientX
      const dy = lastMousePosition[1] - event.clientY
      const flingFactor = 4
      // left-clicked, translate
      if (mouseDown&1) {
        velocity[0] = dx * flingFactor
        velocity[1] = dy * flingFactor
        translate[0] += dx
        translate[1] -= dy
        if (setTranslate) {
          setTranslate(translate[0], translate[1])
          render()
        }
      }
      // middle-clicked, scale all axes
      if (mouseDown&2) {
        const f = microZoomFactor**-dy
        scale[0] *= f
        scale[1] *= f
        if (setScale) {
          setScale(scale[0], scale[1])
          render()
        } 
      }
      // right-clicked, scale individual axes
      if (mouseDown&4) {
        const zoomTo = [
          (lastMousePosition[0] + translate[0]) * scale[0],
          (contextHeight - lastMousePosition[1] + translate[1]) * scale[1]
        ]
        const zoomLastPosition = [
          zoomTo[0] / scale[0] - translate[0],
          zoomTo[1] / scale[1] - translate[1]
        ]
        scale[0] *= microZoomFactor**dx
        scale[1] *= microZoomFactor**-dy
        if (setScale) {
          setScale(scale[0], scale[1])
        }
        const zoomToPosition = [
          zoomTo[0] / scale[0] - translate[0],
          zoomTo[1] / scale[1] - translate[1]
        ]
        translate[0] -= zoomLastPosition[0] - zoomToPosition[0] - dx
        translate[1] += zoomToPosition[1] - zoomLastPosition[1] - dy
        if (setTranslate) {
          setTranslate(translate[0], translate[1])
        }
        render()
      }
      lastMousePosition[0] = event.clientX
      lastMousePosition[1] = event.clientY
    }
    canvasEl.addEventListener('mousemove', handleMouseMove)

    const handleTouchDown = (event: TouchEvent): boolean => {
      lastTouch1Position[0] = event.touches[0].pageX
      lastTouch1Position[1] = event.touches[0].pageY
      velocity[0] = velocity[1] = 0
      free = false
      return false
    }
    canvasEl.addEventListener('touchstart', handleTouchDown)

    const handleTouchUp = (event: TouchEvent): boolean => {
      void(event)
      lastTouch1Position[0] = lastTouch1Position[1] = -1
      free = true
      return false
    }
    canvasEl.addEventListener('touchend', handleTouchUp)

    const handleTouchMove = (event: TouchEvent): void => {
      if (lastTouch1Position[0] > -1) {
        if (event.touches.length===1) {
          const dx = lastTouch1Position[0] - event.touches[0].pageX
          const dy = lastTouch1Position[1] - event.touches[0].pageY
          velocity[0] = dx
          velocity[1] = dy
          translate[0] += dx
          translate[1] -= dy
          lastTouch2Position[0] = lastTouch2Position[1] = -1
          if (setTranslate) {
            setTranslate(translate[0], translate[1])
            render()
          }
        }
        else {
          if (lastTouch2Position[0] > -1) {
            const x1 = event.touches[0].pageX
            const y1 = event.touches[0].pageY
            const x2 = event.touches[1].pageX
            const y2 = event.touches[1].pageY
            const q1 = (lastTouch1Position[0] - lastTouch2Position[0])**2 + (lastTouch1Position[1] - lastTouch2Position[1])**2
            const q2 = (x1 - x2)**2 + (y1 - y2)**2
            const zoomModifier = q1 / q2
            const touchMidpoint = [
              (x1 + x2) / 2,
              (y1 + y2) / 2
            ]
            const zoomTo = [
              (touchMidpoint[0] + translate[0]) * scale[0],
              (contextHeight - touchMidpoint[1] + translate[1]) * scale[1]
            ]
            const zoomLastPosition = [
              zoomTo[0] / scale[0] - translate[0],
              zoomTo[1] / scale[1] - translate[1]
            ]
            scale[0] *= zoomModifier
            scale[1] *= zoomModifier
            if (setScale) {
              setScale(scale[0], scale[1])
            }
            const zoomToPosition = [
              zoomTo[0] / scale[0] - translate[0],
              zoomTo[1] / scale[1] - translate[1]
            ]
            translate[0] -= zoomLastPosition[0] - zoomToPosition[0]
            translate[1] += zoomToPosition[1] - zoomLastPosition[1]
            if (setTranslate) {
              setTranslate(translate[0], translate[1])
            }
            render()
          }
          lastTouch2Position[0] = event.touches[1].pageX
          lastTouch2Position[1] = event.touches[1].pageY
        }
      }
      lastTouch1Position[0] = event.touches[0].pageX
      lastTouch1Position[1] = event.touches[0].pageY
    }
    canvasEl.addEventListener('touchmove', handleTouchMove)

    const handleWheel = (event: WheelEvent): void => {
      const zoomModifier = event.deltaY > 0 ? zoomFactor : 1/zoomFactor
      const zoomTo = [
        (lastMousePosition[0] + translate[0]) * scale[0],
        (contextHeight - lastMousePosition[1] + translate[1]) * scale[1]
      ]
      const zoomLastPosition = [
        zoomTo[0] / scale[0] - translate[0],
        zoomTo[1] / scale[1] - translate[1]
      ]
      scale[0] *= zoomModifier
      scale[1] *= zoomModifier
      if (setScale) {
        setScale(scale[0], scale[1])
      }
      const zoomToPosition = [
        zoomTo[0] / scale[0] - translate[0],
        zoomTo[1] / scale[1] - translate[1]
      ]
      translate[0] -= zoomLastPosition[0] - zoomToPosition[0]
      translate[1] += zoomToPosition[1] - zoomLastPosition[1]
      if (setTranslate) {
        setTranslate(translate[0], translate[1])
      }
      render()
    }
    canvasEl.addEventListener('wheel', handleWheel)

    const handleKeyDown = (event: KeyboardEvent): void => {
      switch (event.code) {
  
      case 'KeyW':
      case 'ArrowUp':
      case 'Numpad8':
        translate[1] -= translateFactor * zoomFactor
        break
            
      case 'KeyS':
      case 'ArrowDown':
      case 'Numpad2':
        translate[1] += translateFactor * zoomFactor
        break
             
      case 'KeyA':
      case 'ArrowLeft':
      case 'Numpad4':
        translate[0] += translateFactor * zoomFactor
        break
            
      case 'KeyD':
      case 'ArrowRight':
      case 'Numpad6':
        translate[0] -= translateFactor * zoomFactor
        break

      case 'KeyE':
      case 'Numpad9':
        translate[1] -= translateFactor * zoomFactor
        translate[0] -= translateFactor * zoomFactor
        break
            
      case 'KeyC':
      case 'Numpad3':
        translate[1] += translateFactor * zoomFactor
        translate[0] -= translateFactor * zoomFactor
        break
              
      case 'KeyZ':
      case 'Numpad1':
        translate[0] += translateFactor * zoomFactor
        translate[1] += translateFactor * zoomFactor
        break
            
      case 'KeyQ':
      case 'Numpad7':
        translate[0] += translateFactor * zoomFactor
        translate[1] -= translateFactor * zoomFactor
        break

      case 'Space':
      case 'KeyO':
      case 'Numpad5':
        translate[0] = -canvasCenter[0]
        translate[1] = -canvasCenter[1]
        break
    
      case 'KeyX':
      case 'Numpad0':
        translate[0] = translate[1] = 0
        break

      case 'NumpadSubtract':
      case 'Minus':
        scale[0] *= zoomFactor
        scale[1] *= zoomFactor
        if (setScale) {
          setScale(scale[0], scale[1])
          render()
        } 
        break
 
      case 'NumpadAdd':
      case 'Equal':
        scale[0] /= zoomFactor
        scale[1] /= zoomFactor
        if (setScale) {
          setScale(scale[0], scale[1])
          render()
        } 
        break

      case 'NumpadDivide':
      case 'BracketRight':
        scale[0] /= logBase
        scale[1] /= logBase
        if (setScale) {
          setScale(scale[0], scale[1])
          render()
        }
        break
    
      case 'NumpadMultiply':
      case 'BracketLeft':
        scale[0] *= logBase
        scale[1] *= logBase
        if (setScale) {
          setScale(scale[0], scale[1])
          render()
        } 
        break
  
      case 'Period':
      case 'NumpadDecimal':
        {
          const initialScale = rest.initialScale ?? 8/canvasCenter[0]
          scale[0] = scale[1] = initialScale
          if (setScale) {
            setScale(scale[0], scale[1])
          }
        }
        break
        

      case 'Escape':
      case 'Backspace':
        window.location.reload()
        break
                
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return (): void => {
      window.cancelAnimationFrame(renderCallbackID)
      canvasEl.removeEventListener('mousedown', handleMouseDown)
      canvasEl.removeEventListener('mouseup', handleMouseUp)
      canvasEl.removeEventListener('contextmenu', handleContextMenu)
      canvasEl.removeEventListener('mousemove', handleMouseMove)
      canvasEl.removeEventListener('touchstart', handleTouchDown)
      canvasEl.removeEventListener('touchend', handleTouchUp)
      canvasEl.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('keydown', handleKeyDown)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref])

  return (
    <div className="jrid">
      <Canvas 
        ref={ref}
        init={init}
        onResize={onResize}
        draw={draw}
        animate={true}
        {...rest}
      />
    </div>
  )
}

const initShader = (gl: WebGL2RenderingContext, type: number, source: string): WebGLShader => {
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

const GridTestTemplate: FunctionalComponent = () => {
  const ref = createRef<HTMLElement>()
  let shaderProgram: WebGLProgram
  let timeUniform: WebGLUniformLocation|null
  let translateUniform: WebGLUniformLocation|null
  let scaleUniform: WebGLUniformLocation|null
  const translate = [0, 0]
  const scale = [1, 1]

  const bindBuffers = (gl: WebGL2RenderingContext, program: WebGLProgram): void => {
    const positionAttrib = gl.getAttribLocation(program, 'a_position')
    const vertices = new Float32Array([
      +1, +1, +0,
      -1, +1, +0,
      +1, -1, +0,
      -1, -1, +0
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
    translate[0] = -ctx.canvas.width/2
    translate[1] = -ctx.canvas.height/2
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

  const draw = (ctx: WebGL2RenderingContext, frameCount: number): void => {
    ctx.uniform1f(timeUniform, frameCount)
    ctx.uniform2f(translateUniform, translate[0], translate[1])
    ctx.uniform2f(scaleUniform, scale[0], scale[1])
    ctx.drawArrays(ctx.TRIANGLE_STRIP, 0, 4)
  }

  const art: Artwork = artworkLibrary['grid-test']
  return (
    <section ref={ref} class={style.canvas_frame}>
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
      <JridOverlay setTranslate={setTranslate} setScale={setScale} />
      <WebGL2 init={init} onResize={onResize} draw={draw} />
    </section>
  )
}

export default GridTestTemplate
