import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import style from '../canvas-template/style.css'

const Scribble: FunctionalComponent = () => {
  const STROKES_PER_FRAME = 16
  const position = [0, 0]
  // const color = 2^23

  const init = (ctx: CanvasRenderingContext2D): void => {
    position[0] = ctx.canvas.width / 2
    position[1] = ctx.canvas.height / 2
  }

  const draw = (ctx: CanvasRenderingContext2D): void => {
    ctx.beginPath()
    ctx.moveTo(position[0], position[1])
    for (let i=0; i<STROKES_PER_FRAME; i++) {
      position[0] = Math.random()*ctx.canvas.width
      position[1] = Math.random()*ctx.canvas.height
      ctx.lineTo(position[0], position[1])
    }
    ctx.stroke()
  }

  return (
    <section class={style.canvas_frame}>
      <Helmet title="Scribble" />
      <Canvas init={init} draw={draw} />
    </section>
  )
}

export default Scribble
