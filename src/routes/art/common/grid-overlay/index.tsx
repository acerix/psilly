import { FunctionalComponent, h } from 'preact'
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

const GridOverlay: FunctionalComponent = () => {
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
    const x = -translate[0]
    const y = -translate[1]
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

    // label axis
    for (let d=0; d<ctx.canvas.width; d+=s) {
      ctx.textAlign = 'center'
      const label = axisLabelFormat(d, n)
      ctx.fillText(label, firstX+d, y+24)
    }
    for (let d=0; d<ctx.canvas.height; d+=s) {
      ctx.textAlign = 'right'
      const label = axisLabelFormat(d, n)
      ctx.fillText(label, x-12, firstY+d+6)
    }

  }

  return (
    <div class={style.grid_overlay}>
      <Canvas init={init} onResize={init} draw={draw} />
    </div>
  )
}

export default GridOverlay
