import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import {Color, colorToCss} from '../common/color-generator'
import {ArtPlaque, Artwork} from '../meta'
import artworkLibrary from '../library'
import style from '../canvas-template/style.css'

const Polygonous: FunctionalComponent = () => {
  const sides = 7
  const drawRecursions = 60
  let baseLength = 0
  let growPeriod = 0
  const center = [0, 0]
  const color: Color = new Uint8Array([128, 128, 128])
  const colorPeriods: number[] = [Math.random()/13, Math.random()/13, Math.random()/13]
  const rotateIncrement = -0.598
  const angle = Math.PI * 2 / sides

  const init = (ctx: CanvasRenderingContext2D): void => {
    baseLength = Math.min(ctx.canvas.width, ctx.canvas.height) / sides * 6
    growPeriod = Math.round(baseLength / Math.cos(Math.PI/sides) / Math.cos(Math.PI/sides) - baseLength)
    center[0] = ctx.canvas.width / 2
    center[1] = ctx.canvas.height / 2
  }

  const drawBisectionals = (ctx: CanvasRenderingContext2D, sideLength: number, x: number, y: number, direction: number, frameCount: number, generation: number, recursionsLeft: number): void => {
    const timePoint = frameCount + 4 * generation
    for (let i=0; i<3; i++) {
      color[i] = 128 + 127*Math.sin(timePoint * colorPeriods[i])
    }
    ctx.strokeStyle = colorToCss(color)
    ctx.beginPath()
    ctx.moveTo(x, y)
    for (let i=0; i<sides; i++) {
      x += sideLength * Math.cos(direction)
      y += sideLength * Math.sin(direction)
      ctx.lineTo(x, y)
      direction += angle
    }
    ctx.stroke()
    x += sideLength / 2 * Math.cos(direction)
    y += sideLength / 2 * Math.sin(direction)
    if (recursionsLeft) {
      drawBisectionals(
        ctx,
        sideLength*Math.cos(Math.PI/sides),
        x,
        y,
        direction+angle/2,
        frameCount,
        generation+1,
        recursionsLeft-1
      )
    }
  }

  const draw = (ctx: CanvasRenderingContext2D, frameCount: number): void => {
    const sideLength = baseLength + (frameCount % growPeriod)
    const apothem = sideLength / ( 2 * Math.tan(Math.PI / sides) )
    const x = (ctx.canvas.width - sideLength) / 2
    const y = (ctx.canvas.height) / 2 - apothem
    drawBisectionals(ctx, sideLength, x, y, 0, frameCount, 0, drawRecursions)
    if (rotateIncrement) {
      ctx.translate(center[0], center[1])
      ctx.rotate(rotateIncrement)
      ctx.translate(-center[0], -center[1])
    }
  }

  const art: Artwork = artworkLibrary['polygonous']
  return (
    <section class={style.canvas_frame}>
      <Helmet><title>{art.title}</title></Helmet>
      <div class="d-none"><ArtPlaque art={art} /></div>
      <Canvas init={init} onResize={init} draw={draw} />
    </section>
  )
}

export default Polygonous
