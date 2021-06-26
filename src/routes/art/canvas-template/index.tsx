import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import style from '../canvas-template/style.css'

const CanvasTemplate: FunctionalComponent = () => {

  const draw = (ctx: CanvasRenderingContext2D, frameCount: number): void => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#c00'
    ctx.beginPath()
    const canvasCenter = [ctx.canvas.width/2, ctx.canvas.height/2]
    const maxRadius = Math.sqrt(canvasCenter[0]**2 + canvasCenter[1]**2)
    ctx.arc(
      canvasCenter[0],
      canvasCenter[1],
      maxRadius*Math.sin(frameCount*.01)**2,
      0,
      2*Math.PI
    )
    ctx.fill()
  }

  return (
    <section class={style.canvas_frame}>
      <Helmet title="Canvas Template" />
      <Canvas draw={draw} />
    </section>
  )
}

export default CanvasTemplate
