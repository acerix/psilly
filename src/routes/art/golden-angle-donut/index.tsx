import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import style from '../canvas-template/style.css'

const GoldenAngleDonut: FunctionalComponent = () => {
  const LINE_LENGTH = 512
  const PHI = ( 1 + Math.sqrt(5) ) / 2
  const GOLDEN_ANGLE = 2*Math.PI / Math.pow(PHI, 2)
  const position = [0, 0]
  let direction = 0
  // const color = 2^23

  const init = (ctx: CanvasRenderingContext2D): void => {
    position[0] = (ctx.canvas.width - LINE_LENGTH) / 2
    position[1] = (ctx.canvas.height - LINE_LENGTH/3) / 2
  }

  const draw = (ctx: CanvasRenderingContext2D, frameCount: number): void => {
    ctx.beginPath()
    ctx.moveTo(position[0], position[1])
    direction += GOLDEN_ANGLE
    position[0] += LINE_LENGTH * Math.cos(direction + frameCount)
    position[1] += LINE_LENGTH * Math.sin(direction)
    ctx.lineTo(position[0], position[1])
    ctx.stroke()
  }

  return (
    <section class={style.canvas_frame}>
      <Helmet title="Golden Angle Donut" />
      <Canvas init={init} draw={draw} />
    </section>
  )
}

export default GoldenAngleDonut
