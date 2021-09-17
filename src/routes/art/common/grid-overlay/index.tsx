import { FunctionalComponent, h } from 'preact'
import { useEffect } from 'preact/hooks'
import Canvas from '../../common/canvas'
import style from './style.css'

export const axisLabelFormat = (d:number, n: number): string => {
  if (n === 0) {
    return d.toString()
  }
  else if (n === 1) {
    return `${d}0`
  }
  return `${d}⏨${n}`
}

type TranslateFunction = (x: number, y: number) => void

type ScaleFunction = (x: number, y: number) => void

export interface GridOverlayProps {
  setTranslate?: TranslateFunction;
  setScale?: ScaleFunction;
}

const zoomFactor = 10**(1/13)
const microZoomFactor = zoomFactor**(1/32)

export const GridOverlay: FunctionalComponent<GridOverlayProps> = (props: GridOverlayProps) => {
  const { setTranslate, setScale, ...rest } = props
  // const ref = createRef<HTMLElement>()
  // const inputRef = createRef<HTMLInputElement>()
  const translate = [0, 0]
  const scale = [1, 1]
  // const gridIncrements = [
  //   [1, 1],
  //   [1, 1]
  // ]

  const init = (ctx: CanvasRenderingContext2D): void => {
    ctx.fillStyle = '#999' // font
    ctx.strokeStyle = '#999'
    ctx.lineWidth = 1
    ctx.font = '16px Arial'
    translate[0] = -ctx.canvas.width/2
    translate[1] = -ctx.canvas.height/2
    scale[0] = scale[1] = 1/64
  }

  const draw = (ctx: CanvasRenderingContext2D): void => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    // @todo use logs, so grid lines are always 1, 2, 3, etc, times some ⏨n
    const n = Math.floor(ctx.canvas.width/10000)

    // space between grid lines in pixes
    const s = 64

    // starting point
    const x = -translate[0] // * scale[0]
    const y = translate[1] // * scale[1]
    const firstX = x - (Math.floor(x / s) * s)
    const firstY = y - (Math.floor(y / s) * s)

    // draw grid
    ctx.beginPath()
    for (let d=0; d<ctx.canvas.width; d+=s) {
      ctx.moveTo(firstX+d, 0)
      ctx.lineTo(firstX+d, ctx.canvas.height)
    }
    for (let d=0; d<ctx.canvas.height; d+=s) {
      ctx.moveTo(0, firstY+d)
      ctx.lineTo(ctx.canvas.width, firstY+d)
    }
    ctx.stroke()

    // fudge for maximized devs window
    const offsetX = 15
    const offsetY = 7

    // label axis
    for (let d=0; d<ctx.canvas.width; d+=s) {
      ctx.textAlign = 'center'
      const v = d / s - offsetX
      const label = axisLabelFormat(v, n)
      ctx.fillText(label, firstX+d, y+24)
    }
    for (let d=0; d<ctx.canvas.height; d+=s) {
      ctx.textAlign = 'right'
      const v = -d / s + offsetY
      const label = axisLabelFormat(v, n)
      ctx.fillText(label, x-12, firstY+d+6)
    }

  }

  useEffect(() => {
    // const element = ref.current as HTMLElement
    let paused = false
    let mouseDown = 0
    let renderCallbackID: number
    const lastMousePosition = [0, 0]
    // let position = 0
    // let velocity = 4
    // let acceleration = 0
    
    const handleBlur = (): void => {
      paused = true
    }
    window.addEventListener('blur', handleBlur)

    const handleFocus = (): void => {
      paused = false
      console.log('focus!', paused)
    }
    window.addEventListener('focus', handleFocus)

    const handleMouseDown = (event: MouseEvent): boolean => {
      mouseDown |= (1<<event.button)
      lastMousePosition[0] = event.clientX
      lastMousePosition[1] = event.clientY
      event.preventDefault()
      return false
    }
    window.addEventListener('mousedown', handleMouseDown)

    const handleMouseUp = (event: MouseEvent): boolean => {
      mouseDown ^= (1<<event.button)
      event.preventDefault()
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
      // left-clicked, translate
      if (mouseDown&1) {
        translate[0] += dx
        translate[1] -= dy
        if (setTranslate) setTranslate(translate[0], translate[1])
      }
      // middle-clicked, scale all axes
      if (mouseDown&2) {
        const f = dx + dy > 0 ? microZoomFactor : 1 / microZoomFactor
        scale[0] *= f
        scale[1] *= f
        if (setScale) setScale(scale[0], scale[1])
      }
      // right-clicked, scale individual axes
      if (mouseDown&4) {
        if (dx) scale[0] *= dx > 0 ? microZoomFactor : 1 / microZoomFactor
        if (dy) scale[1] *= dy > 0 ? microZoomFactor : 1 / microZoomFactor
        if (setScale) setScale(scale[0], scale[1])
      }
      lastMousePosition[0] = event.clientX
      lastMousePosition[1] = event.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    const handleTouchDown = (event: TouchEvent): boolean => {
      lastMousePosition[0] = event.touches[0].pageX
      lastMousePosition[1] = event.touches[0].pageY
      return false
    }
    window.addEventListener('touchstart', handleTouchDown)

    const handleTouchUp = (event: TouchEvent): boolean => {
      void(event)
      return false
    }
    window.addEventListener('touchend', handleTouchUp)

    const handleTouchMove = (event: TouchEvent): void => {
      const dx = lastMousePosition[0] - event.touches[0].pageX
      const dy = lastMousePosition[1] - event.touches[0].pageY
      translate[0] += dx
      translate[1] -= dy
      if (setTranslate) setTranslate(translate[0], translate[1])
      lastMousePosition[0] = event.touches[0].pageX
      lastMousePosition[1] = event.touches[0].pageY
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
      if (setScale) setScale(scale[0], scale[1])
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
      window.removeEventListener('blur', handleBlur)
      window.removeEventListener('focus', handleFocus)
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
      <Canvas init={init} onResize={init} draw={draw} />
    </div>
  )
}

export default GridOverlay
