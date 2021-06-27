import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import ColorGenerator, {Color} from '../common/color-generator'
import style from '../canvas-template/style.css'

// const PHI = ( 1 + Math.sqrt(5) ) / 2
// const GOLDEN_ANGLE = 2*Math.PI / Math.pow(PHI, 2)

const Polygonous: FunctionalComponent = () => {
  const sides = 7
  let baseLength = 0
  const drawRecursions = 64
  const position = [0, 0]
  const center = [0, 0]
  const colorPeriods: number[] = [Math.random(), Math.random(), Math.random()]

  const init = (ctx: CanvasRenderingContext2D): void => {
    baseLength = Math.min(ctx.canvas.width, ctx.canvas.height) / sides * 8
    position[0] = (ctx.canvas.width - baseLength) / 2
    // const apothem = baseLength / 2 * Math.tan(Math.PI / sides)
    const apothem = baseLength / Math.sin(Math.PI / sides) * Math.cos(Math.PI / sides)
    position[1] = (ctx.canvas.height - apothem) / 2
    center[0] = ctx.canvas.width / 2
    center[1] = ctx.canvas.height / 2
  }
  const onResize = init

  const colorGenerator = ColorGenerator({
    mutate: (color: Color, iterationCount: number): void => {
      for (let i=0; i<3; i++) {
        color[i] = 128 + 127*Math.sin(colorPeriods[i] * iterationCount * .1)
      }
    }
  })

  const drawBisectionals = (ctx: CanvasRenderingContext2D, position: number[], direction: number, generation: number, recursionsLeft: number): void => {
    const angle = Math.PI * 2 / sides
    const length = baseLength / Math.pow(1 / Math.cos(Math.PI / sides), generation)
    ctx.beginPath()
    ctx.moveTo(position[0], position[1])
    for (let i=0; i<sides; i++) {
      position[0] += length * Math.cos(direction)
      position[1] += length * Math.sin(direction)
      ctx.lineTo(position[0], position[1])
      direction += angle
    }
    ctx.stroke()
    position[0] += length / 2 * Math.cos(direction)
    position[1] += length / 2 * Math.sin(direction)
    if (recursionsLeft) drawBisectionals(ctx, position, direction+angle/2, generation+1, recursionsLeft-1)
  }

  const draw = (ctx: CanvasRenderingContext2D): void => {
    ctx.strokeStyle = colorGenerator.next().value as string
    drawBisectionals(ctx, position.slice(), 0, 0, drawRecursions)
    ctx.translate(center[0], center[1])
    ctx.rotate(Math.PI / 256)
    ctx.translate(-center[0], -center[1])
  }

  return (
    <section class={style.canvas_frame}>
      <Helmet title="Bisectional Polygonous Girations" />
      <Canvas init={init} draw={draw} onResize={onResize} />
    </section>
  )
}

export default Polygonous
