import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import ColorGenerator, {Color, randomColorPeriod} from '../common/color-generator'
import {ArtPlaque, Artwork} from '../meta'
import artworkLibrary from '../library'
import style from '../canvas-template/style.css'
import LoadingScreen from '../common/loading-screen'

// Maps an integer t in space of size 2^n to a coordinate on the Hilbert Curve
export const hilbertCoordinate = (t: number, n?: number): [number, number] => {
  if (n === undefined) n = Math.ceil(Math.log2(t+1)/2)
  const s = [(n&1)===1, false]
  const p: [number, number] = [0, 0]

  for (let i=n-1; i!==-1; i--) {

    // copy the current bits into [a, b]
    const x = 1<<(i<<1)
    const a = (t & (x<<1)) !== 0
    const b = (t & x) !== 0

    // update position
    const d = a !== s[+!b]
    const m = 1<<i
    if (d) p[0] |= m
    if (d !== b) p[1] |= m

    // update state
    s[0] = s[0] !== !(a||b)
    s[1] = s[1] !== (a&&b)

  }

  return p
}

export const hilbertCurve = (n: number): Array<[number, number]> => {
  const points: Array<[number, number]> = []
  for (let i=0; i<1<<2*n; ++i) {
    points.push(hilbertCoordinate(i, n))
  }
  return points
}

export function* HilbertCurveGenerator(): Generator<[number, number]> {
  for (let i=0;; i++) {
    yield hilbertCoordinate(i)
  }
}

// Maps a coordinate on the Hilbert Curve back to it's integer index
export const hilbertIndex = (p: [number, number]): number => {
  // a very naive approach for now; just iterate until found
  // @todo we can be better!
  const g = HilbertCurveGenerator()
  for (let i=0;; i++) {
    const t = g.next().value as [number, number]
    if (t[0]===p[0]&&t[1]===p[1]) return i
  }
}

class ChillbertSnake {
  position = 0
  negative = Math.random() < 0.5
  speed = Math.ceil(64 * Math.random())
  colorPeriods: number[] = [randomColorPeriod(), randomColorPeriod(), randomColorPeriod()]
  colorGenerator = ColorGenerator({
    mutate: (color: Color, iterationCount: number): void => {
      for (let i=0; i<3; i++) {
        color[i] = Math.round(128 + 127*Math.sin(iterationCount * this.colorPeriods[i]))
      }
    }
  })
}

const Chillbert: FunctionalComponent = () => {
  const snakes: ChillbertSnake[] = []
  let hilbertSpace: Array<[number, number]> = []
  let pixel: ImageData
  
  const init = (ctx: CanvasRenderingContext2D): void => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    // ctx.lineWidth = 2
    const spaceSize = Math.max(ctx.canvas.width, ctx.canvas.height)
    const hilbertRank = Math.ceil(Math.log2(spaceSize))
    hilbertSpace = hilbertCurve(hilbertRank)
    const maxSnakes = Math.floor(Math.sqrt(ctx.canvas.width * ctx.canvas.height) / 16)
    while (maxSnakes > snakes.length) {
      snakes.push(new ChillbertSnake())
    }
    for (const snake of snakes) {
      snake.position = Math.floor(Math.random() * hilbertSpace.length)
    }
    pixel = ctx.createImageData(1, 1)
    pixel.data[3] = 255
  }

  const draw = (ctx: CanvasRenderingContext2D): void => {
    for (const snake of snakes) {
      // ctx.strokeStyle = colorToCss(snake.colorGenerator.next().value as Color)
      // ctx.beginPath()
      // ctx.moveTo(...hilbertSpace[snake.position])
      const color = snake.colorGenerator.next().value as Color
      pixel.data[0] = color[0]
      pixel.data[1] = color[1]
      pixel.data[2] = color[2]
      for (let i=0; i<snake.speed; i++) {
        snake.position = snake.position + (snake.negative ? -1 : 1)
        snake.position &= hilbertSpace.length - 1
        // ctx.lineTo(...hilbertSpace[snake.position & (hilbertSpace.length-1)])
        ctx.putImageData(pixel, ...hilbertSpace[snake.position & (hilbertSpace.length-1)])
      }
      // ctx.stroke()
    }
  }

  const art: Artwork = artworkLibrary['chillbert']
  return (
    <section class={style.canvas_frame}>
      <Helmet><title>{art.title}</title></Helmet>
      <div class="d-none"><ArtPlaque art={art} /></div>
      <LoadingScreen />
      <Canvas init={init} onResize={init} draw={draw} />
    </section>
  )
}

export default Chillbert
