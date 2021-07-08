import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import {Color, colorToCss} from '../common/color-generator'
import {ArtPlaque, Artwork} from '../meta'
import artworkLibrary from '../library'
import style 
  from '../canvas-template/style.css'

const randomColorPeriod = (): number => {
  const x = .5 - Math.random()
  return x**2
}

const Polygonous: FunctionalComponent = () => {
  const sides = 7
  const baseLength = 1/sides
  let drawRecursions = 0
  let animationFrames = 30
  let growFactor = 1
  const turnAngle = 2*Math.PI / sides
  const center = [0, 0]
  const color: Color = new Uint8Array([0, 0, 0])
  const colorPeriods: number[] = [randomColorPeriod(), randomColorPeriod(), randomColorPeriod()]
  const rotateIncrement = -0.598

  const init = (ctx: CanvasRenderingContext2D): void => {
    center[0] = Math.floor(ctx.canvas.width / 2)
    center[1] = Math.floor(ctx.canvas.height / 2)
    const maxRadius = Math.sqrt(center[0]**2 + center[1]**2)
    const growBase = 1 / Math.cos(Math.PI/sides)
    while (drawRecursions++) {
      const length = baseLength * growBase**drawRecursions - baseLength
      if (length > maxRadius) break
    }
    animationFrames = Math.floor( (baseLength * growBase**drawRecursions - baseLength) - (baseLength * growBase**( drawRecursions - 1) - baseLength) ) * 4
    const growLength = baseLength * growBase**2 - baseLength
    const lengthRatio = (baseLength + growLength) / baseLength
    const growRatio = animationFrames * ( lengthRatio**( 1 / animationFrames**2 ) - 1 )
    growFactor = (1 + growRatio/animationFrames) ** animationFrames
  }

  const drawBisectionators = (ctx: CanvasRenderingContext2D, sideLength: number, frameCount: number, generation: number, recursionsLeft: number): void => {
    const timePoint = sideLength - frameCount // @todo why does the color jump each loop?
    let direction = generation%2 === 0 ? 0 : turnAngle/2
    let x = generation%2 === 0 ? center[0] - sideLength / 2 : center[0]
    const apothem = sideLength / ( 2*Math.tan(Math.PI/sides) )
    const circumradius = Math.sqrt(apothem**2 + (sideLength/2)**2)
    let y = generation%2 === 0 ? center[1] - apothem : center[1] - circumradius
    for (let i=0; i<3; i++) {
      color[i] = 128 + 127*Math.sin(timePoint * colorPeriods[i])
    }
    if (recursionsLeft) {
      drawBisectionators(
        ctx,
        sideLength / Math.cos(Math.PI/sides),
        frameCount,
        generation+1,
        recursionsLeft-1
      )
    }
    ctx.strokeStyle = colorToCss(color)
    ctx.beginPath()
    ctx.moveTo(x, y)
    for (let i=0; i<sides; i++) {
      x += sideLength * Math.cos(direction)
      y += sideLength * Math.sin(direction)
      ctx.lineTo(x, y)
      direction += turnAngle
    }
    ctx.stroke()
  }

  const draw = (ctx: CanvasRenderingContext2D, frameCount: number): void => {
    const frameNumber = frameCount % animationFrames
    const sideLength = baseLength * Math.pow(growFactor, frameNumber)
    drawBisectionators(ctx, sideLength, frameCount, 0, drawRecursions)
    if (rotateIncrement) {
      // @todo matrixify
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
