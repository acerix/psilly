import { FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import ColorGenerator, {
  Color,
  randomColorPeriod,
} from '../common/color-generator'
import { ArtPlaque, Artwork } from '../meta'
import artworkLibrary from '../library'
import styles from '../canvas-template/style.module.css'

import LoadingScreen from '../common/loading-screen'

// Maps an integer t in space of size 2^n to a coordinate on the Hilbert Curve
// @todo "mortonToHilbert"? http://threadlocalmutex.com/?p=205
export const hilbertCoordinate = (t: number, n?: number): [number, number] => {
  if (n === undefined) n = Math.ceil(Math.log2(t + 1) / 2)
  const s = [(n & 1) === 1, false]
  const p: [number, number] = [0, 0]

  for (let i = n - 1; i !== -1; i--) {
    // copy the current bits into [a, b]
    const x = 1 << (i << 1)
    const a = (t & (x << 1)) !== 0
    const b = (t & x) !== 0

    // update position
    const d = a !== s[+!b]
    const m = 1 << i
    if (d) p[0] |= m
    if (d !== b) p[1] |= m

    // update state
    s[0] = s[0] !== !(a || b)
    s[1] = s[1] !== (a && b)
  }

  return p
}

type MemoizedHilbertCurves = {
  [key: number]: Array<[number, number]>
}
const memoizedHilbertCurves: MemoizedHilbertCurves = {}

export const hilbertCurve = (n: number): Array<[number, number]> => {
  if (n in memoizedHilbertCurves) return memoizedHilbertCurves[n]
  const points: Array<[number, number]> = []
  for (let i = 0; i < 1 << (2 * n); ++i) {
    points.push(hilbertCoordinate(i, n))
  }
  memoizedHilbertCurves[n] = points
  return points
}

export function* HilbertCurveGenerator(): Generator<[number, number]> {
  for (let i = 0; ; i++) {
    yield hilbertCoordinate(i)
  }
}

// Maps a coordinate on the Hilbert Curve back to it's integer index
export const hilbertIndex = (p: [number, number]): number => {
  // a very naive approach; just iterate until found
  const g = HilbertCurveGenerator()
  for (let i = 0; ; i++) {
    const t = g.next().value as [number, number]
    if (t[0] === p[0] && t[1] === p[1]) return i
  }

  // @todo something like https://people.sc.fsu.edu/~jburkardt/c_src/hilbert_curve/hilbert_curve.c

  // const n = 2**m
  // const m = 4
  // const d = 0
  // let rx = false
  // let ry = false

  // for (let s=n/2; s>0; s/=2) {
  //   rx = ( p[0] & s ) > 0
  //   ry = ( p[1] & s ) > 0
  //   d = d + s * s * ( ( 3 * rx ) ^ ry )
  //   rot ( s, p[0], p[1], rx, ry )
  // }

  // return d
}

class ChillbertSnake {
  position = 0
  negative = Math.random() < 0.5
  speed = Math.ceil(64 * Math.random())
  colorPeriods: number[] = [
    randomColorPeriod(),
    randomColorPeriod(),
    randomColorPeriod(),
  ]
  colorGenerator = ColorGenerator({
    mutate: (color: Color, iterationCount: number): void => {
      for (let i = 0; i < 3; i++) {
        color[i] = Math.round(
          128 + 127 * Math.sin(iterationCount * this.colorPeriods[i]),
        )
      }
    },
  })
}

const Chillbert: FunctionalComponent = () => {
  const snakes: ChillbertSnake[] = []
  let coodinates: Array<[number, number]> = []
  let pixel: ImageData

  const init = (ctx: CanvasRenderingContext2D): void => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    // ctx.lineWidth = 2
    const spaceSize = Math.max(ctx.canvas.width, ctx.canvas.height)
    const hilbertRank = Math.ceil(Math.log2(spaceSize))
    coodinates = hilbertCurve(hilbertRank)
    const maxSnakes = Math.floor(
      Math.sqrt(ctx.canvas.width * ctx.canvas.height) / 16,
    )
    snakes.length = 0
    while (maxSnakes > snakes.length) {
      snakes.push(new ChillbertSnake())
    }
    for (const snake of snakes) {
      snake.position = Math.floor(Math.random() * coodinates.length)
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
      for (let i = 0; i < snake.speed; i++) {
        snake.position = snake.position + (snake.negative ? -1 : 1)
        snake.position &= coodinates.length - 1
        // ctx.lineTo(...hilbertSpace[snake.position & (hilbertSpace.length-1)])
        ctx.putImageData(
          pixel,
          ...coodinates[snake.position & (coodinates.length - 1)],
        )
      }
      // ctx.stroke()
    }
  }

  const art: Artwork = artworkLibrary['chillbert']
  return (
    <section class={styles.canvas_frame}>
      <Helmet title={art.title} />
      <div class="d-none">
        <ArtPlaque art={art} />
      </div>
      <LoadingScreen />
      <Canvas init={init} onResize={init} draw={draw} />
    </section>
  )
}

export default Chillbert
