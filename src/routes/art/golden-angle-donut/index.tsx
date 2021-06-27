import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import ColorGenerator from '../common/color-generator'
import style from '../canvas-template/style.css'

const GoldenAngleDonut: FunctionalComponent = () => {
  const PHI = ( 1 + Math.sqrt(5) ) / 2
  const GOLDEN_ANGLE = 2*Math.PI / Math.pow(PHI, 2)
  const position = [0, 0]
  const colorGenerator = ColorGenerator()
  let lineLength = 0
  let direction = 0

  const init = (ctx: CanvasRenderingContext2D): void => {
    lineLength = Math.min(ctx.canvas.width, ctx.canvas.height) * 0.7
    direction = 0
    position[0] = ctx.canvas.width * 0.7
    position[1] = ctx.canvas.height * 0.4
  }

  const onResize = init

  const draw = (ctx: CanvasRenderingContext2D, frameCount: number): void => {
    ctx.strokeStyle = colorGenerator.next().value as string
    ctx.beginPath()
    ctx.moveTo(position[0], position[1])
    direction += GOLDEN_ANGLE
    position[0] += lineLength * Math.cos(direction + frameCount)
    position[1] += lineLength * Math.sin(direction)
    ctx.lineTo(position[0], position[1])
    ctx.stroke()
  }

  return (
    <section class={style.canvas_frame}>
      <Helmet title="Golden Angle Donut" />
      <Canvas init={init} draw={draw} onResize={onResize} />
    </section>
  )
}

export default GoldenAngleDonut
