import { FunctionalComponent, h } from 'preact'
import { useEffect } from 'preact/hooks'
import Canvas, { CanvasMethods } from '../../common/canvas'
import style from './style.css'

export const axisLabelFormat = (d: number, n: number): string => {
  d = Math.round(d) // @todo shouldn't need to round!
  if (d === 0) return '0'
  if (n > -1 && n < 4) {
    return `${d}${'0'.repeat(n)}`
  }
  return `${d}⏨${n}`
}

type TranslateFunction = (x: number, y: number) => void

type ScaleFunction = (x: number, y: number) => void

export interface GridOverlayProps {
  canvasMethodRefs?: CanvasMethods;
  setTranslate?: TranslateFunction;
  setScale?: ScaleFunction;
}

const logBase = 10
const zoomFactor = logBase**(1/13)
const microZoomFactor = zoomFactor**(1/32)
const minimumGridSpacing = 64
const μ = .96
let free = true

export const GridOverlay: FunctionalComponent<GridOverlayProps> = (props: GridOverlayProps) => {
  const { setTranslate, setScale, ...rest } = props
  const canvasMethodRefs = {render() {console.log('rndr?')}}
  const translate = [0, 0]
  const scale = [1, 1]
  const velocity = [0, 0]
  const fontSize = 16

  const init = (ctx: CanvasRenderingContext2D): void => {
    ctx.strokeStyle = '#999' // lines
    ctx.fillStyle = '#ccc' // text
    ctx.lineWidth = 1
    ctx.font = `${fontSize}px monospace`
    translate[0] = -ctx.canvas.width/2
    translate[1] = -ctx.canvas.height/2
    scale[0] = scale[1] = 1/64
    draw(ctx)
  }

  const render = (): void => {
    if (canvasMethodRefs && 'render' in canvasMethodRefs) {
      canvasMethodRefs.render()
    }
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
    let powerX = 0
    let powerY = 0

    // space between grid lines in pixes
    let spacingX = minimumGridSpacing
    while (spacingX < minimumGridSpacing) {
      spacingX *= logBase
      powerX++
    }
    while (spacingX > minimumGridSpacing * logBase) {
      spacingX /= logBase
      powerX--
    }
    let spacingY = minimumGridSpacing
    while (spacingY < minimumGridSpacing) {
      spacingY *= logBase
      powerY++
    }
    while (spacingY > minimumGridSpacing * logBase) {
      spacingY /= logBase
      powerY--
    }
  
    // starting point
    const fX = scale[0] * 64
    const fY = scale[1] * 64
    const x = -translate[0] * fX
    const y = -translate[1] * fY
    spacingX *= fX
    spacingY *= fY

    const xLineCount = Math.floor(x / spacingX)
    const yLineCount = Math.floor(y / spacingY)
    const firstX = fX * ( x - (xLineCount * spacingX))
    const firstY = fY * (-y + (yLineCount * spacingY))
    // const xMiddleLine = Math.floor(xLineCount / 2) * spacingX
    // const yMiddleLine = Math.floor(yLineCount / 2) * spacingY

    // draw grid
    ctx.beginPath()
    for (let d=0; d<ctx.canvas.width; d+=spacingX) {
      const tX = firstX+d
      ctx.moveTo(tX, 0)
      ctx.lineTo(tX, ctx.canvas.height)
    }
    for (let d=ctx.canvas.height; d>=spacingY; d-=spacingY) {
      const tY = firstY+d
      ctx.moveTo(0, tY)
      ctx.lineTo(ctx.canvas.width, tY)
    }
    ctx.stroke()

    const labelXOffset = [0, 18]
    const labelYOffset = [-6, 60]

    const offsetX = Math.floor(x / spacingX)
    const offsetY = Math.floor((ctx.canvas.height - y + 16) / spacingY)

    // axis labels
    for (let d=0; d<ctx.canvas.width; d+=spacingX) {
      ctx.textAlign = 'center'
      const v = d / spacingX - offsetX
      const label = axisLabelFormat(v, powerX)
      const positionX = firstX+d+labelXOffset[0]
      const positionY = ctx.canvas.height-y+labelXOffset[1]
      // const positionY = ctx.canvas.height-yMiddleLine 
      ctx.fillText(label, positionX, positionY)
    }
    for (let d=0; d<ctx.canvas.height; d+=spacingY) {
      ctx.textAlign = 'right'
      const v = -d / spacingY + offsetY
      const label = axisLabelFormat(v, powerY)
      const positionX = x+labelYOffset[0]
      // const positionX = xMiddleLine
      const positionY = firstY+d+labelYOffset[1]
      ctx.fillText(label, positionX, positionY)
    }

    // update position of main canvas
    if (setTranslate) {
      setTranslate(translate[0], translate[1])
    }
  }

  useEffect(() => {
    let mouseDown = 0
    let renderCallbackID: number
    const lastMousePosition = [0, 0]

    const handleMouseDown = (event: MouseEvent): boolean => {
      mouseDown |= (1<<event.button)
      lastMousePosition[0] = event.clientX
      lastMousePosition[1] = event.clientY
      velocity[0] = velocity[1] = 0
      free = !(mouseDown&1)
      event.preventDefault()
      return false
    }
    window.addEventListener('mousedown', handleMouseDown)

    const handleMouseUp = (event: MouseEvent): boolean => {
      mouseDown ^= (1<<event.button)
      event.preventDefault()
      free = !(mouseDown&1)
      return false
    }
    window.addEventListener('mouseup', handleMouseUp)

    const handleContextMenu = (event: MouseEvent): boolean => {
      event.preventDefault()
      return false
    }
    window.addEventListener('contextmenu', handleContextMenu)

    // @todo interactions:
    // mousewheel zoom, position under cursor does not move
    // hold right click, drag to zoom axis
    // touch drag to translate
    // arrow keys translate, +- zoom, pgup/dwn big zoom?, esc params, home [0,0], a

    // @todo polynumber showcase: like art index but polys

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
        const f = dx + dy > 0 ? microZoomFactor : 1 / microZoomFactor
        scale[0] *= f
        scale[1] *= f
        if (setScale) {
          setScale(scale[0], scale[1])
          render()
        } 
      }
      // right-clicked, scale individual axes
      if (mouseDown&4) {
        if (dx) scale[0] *= dx > 0 ? microZoomFactor : 1 / microZoomFactor
        if (dy) scale[1] *= dy > 0 ? microZoomFactor : 1 / microZoomFactor
        if (setScale) {
          setScale(scale[0], scale[1])
          render()
        } 
      }
      lastMousePosition[0] = event.clientX
      lastMousePosition[1] = event.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    const handleTouchDown = (event: TouchEvent): boolean => {
      lastMousePosition[0] = event.touches[0].pageX
      lastMousePosition[1] = event.touches[0].pageY
      velocity[0] = velocity[1] = 0
      free = false
      return false
    }
    window.addEventListener('touchstart', handleTouchDown)

    const handleTouchUp = (event: TouchEvent): boolean => {
      void(event)
      free = true
      return false
    }
    window.addEventListener('touchend', handleTouchUp)

    const handleTouchMove = (event: TouchEvent): void => {
      if (event.touches.length===1) {
        const dx = lastMousePosition[0] - event.touches[0].pageX
        const dy = lastMousePosition[1] - event.touches[0].pageY
        velocity[0] = dx
        velocity[1] = dy
        translate[0] += dx
        translate[1] -= dy
        if (setTranslate) {
          setTranslate(translate[0], translate[1])
          render()
        }
        lastMousePosition[0] = event.touches[0].pageX
        lastMousePosition[1] = event.touches[0].pageY
      }
      else if (event.touches.length===2) {
        console.log(event.touches)
      }
      else {
        console.error('Insufficient holes')
      }
    }
    window.addEventListener('touchmove', handleTouchMove)

    const handleWheel = (event: WheelEvent): void => {
      const zoomModifier = event.deltaY > 0 ? zoomFactor : 1/zoomFactor
      // const zoomTo = [
      //   (lastMousePosition[0] + translate[0]) * scale[0],
      //   (lastMousePosition[1] + translate[1]) * scale[1]
      // ]
      scale[0] *= zoomModifier
      scale[1] *= zoomModifier
      if (setScale) {
        setScale(scale[0], scale[1])
        render()
      } 
      // if (setTranslate) {
      //   setTranslate(
      //     (zoomTo[0] / scale[0]) - translate[0],
      //     (zoomTo[1] / scale[1]) - translate[1]
      //   )
      // }
    }
    window.addEventListener('wheel', handleWheel)

    // const draw = (): void => {
    //   if (!(mouseDown&1)) {
    //     velocity += acceleration
    //     position += velocity
    //     if (Math.abs(velocity) > 32 && velocity * acceleration >= 0) {
    //       acceleration =  -velocity * Math.random() / 128
    //     }
    //     element.style.backgroundPosition = `0 ${position}px`
    //   }
    //   else {
    //     g = mouseLeftDownY
    //   }
    // }

    // const render = (): void => {
    //   if (paused) {
    //     setTimeout(render, 128)
    //     return
    //   }
    //   renderCallbackID = window.requestAnimationFrame(render)
    //   draw()
    // }
    // render()

    return (): void => {
      window.cancelAnimationFrame(renderCallbackID)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('contextmenu', handleContextMenu)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchstart', handleTouchDown)
      window.removeEventListener('touchend', handleTouchUp)
      window.removeEventListener('touchmove', handleTouchMove)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div class={style.grid_overlay} {...rest}>
      <Canvas canvasMethodRefs={canvasMethodRefs} init={init} onResize={init} draw={draw} animate={true} />
    </div>
  )
}

export default GridOverlay
