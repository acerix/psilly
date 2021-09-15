import { createRef, FunctionalComponent, h } from 'preact'
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

export interface GridOverlayProps {
  onTranslate?: TranslateFunction;
}

export const GridOverlay: FunctionalComponent<GridOverlayProps> = (props: GridOverlayProps) => {
  const { onTranslate, ...rest } = props
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
    const y = -translate[1] // * scale[1]
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
      console.log('handleFocus', paused)
    }
    window.addEventListener('focus', handleFocus)

    const handleMouseDown = (event: MouseEvent): boolean => {
      mouseDown |= (1<<event.button)
      if (event.button===0) {
        lastMousePosition[0] = event.clientX
        lastMousePosition[1] = event.clientY
      }
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

    const handleMouseMove = (event: MouseEvent): void => {
      if (mouseDown&1) {
        const dx = lastMousePosition[0] - event.clientX
        const dy = lastMousePosition[1] - event.clientY
        translate[0] += dx
        translate[1] += dy
        lastMousePosition[0] = event.clientX
        lastMousePosition[1] = event.clientY
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    const handleWheel = (event: WheelEvent): void => {
      const zoomModifier = event.deltaY > 0 ? 1/2 : 22
      scale[0] *= zoomModifier
      scale[1] *= zoomModifier
      console.log(scale)
    }
    window.addEventListener('wheel', handleWheel)

    const handleTranslate = (): void => {
      if (onTranslate) onTranslate(1, 1)
    }
    handleTranslate()

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
