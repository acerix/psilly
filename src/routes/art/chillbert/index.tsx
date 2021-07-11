import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import ColorGenerator, {Color, colorToCss, randomColorPeriod} from '../common/color-generator'
import {ArtPlaque, Artwork} from '../meta'
import artworkLibrary from '../library'
import style from './style.css'

type wtfIsTPL = {
  [key:string]: Array<[number,number,string]>;
}

const TPL: wtfIsTPL = {
  R: [[0, 1, 'U'], [1, 1, 'R'], [1, 0, 'R'], [0, 0, 'D']],
  L: [[1, 0, 'D'], [0, 0, 'L'], [0, 1, 'L'], [1, 1, 'U']],
  D: [[1, 0, 'L'], [1, 1, 'D'], [0, 1, 'D'], [0, 0, 'R']],
  U: [[0, 1, 'R'], [0, 0, 'U'], [1, 0, 'U'], [1, 1, 'L']]
}

const hilbert = (rank: number, size: number, dx = 0, dy = 0, dir = 'U'): Array<[number,number]> => {
  if (rank === 0) {
    return TPL[dir].map(p => [dx + p[0] * size, dy + p[1] * size])
  } 
  const arr: Array<[number,number]> = []
  const space = size / (Math.pow(2, rank + 1) - 1)
  const newSize = (size - space) / 2
  const d2 = newSize + space
  TPL[dir].forEach((t) => {
    // [].push.apply(arr, hilbert(rank - 1, newSize, dx + t[0] * d2, dy + t[1] * d2, t[2]))
    for (const c of hilbert(rank - 1, newSize, dx + t[0] * d2, dy + t[1] * d2, t[2])) {
      arr.push(c)
    }
  })
  return arr
}

class ChillbertSnake {
  position = 0
  negative = Math.random() < 0.5
  speed = Math.ceil(Math.random() * 5)
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
  let hilbertSpace: Array<[number,number]> = []
  const hilbertRank = 8
  
  const init = (ctx: CanvasRenderingContext2D): void => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    // ctx.lineWidth = 2
    const maxSnakes = Math.floor(Math.sqrt(ctx.canvas.width * ctx.canvas.height) / 16)
    while (maxSnakes > snakes.length) {
      snakes.push(new ChillbertSnake())
    }
    const spaceSize = Math.max(ctx.canvas.width, ctx.canvas.height)
    hilbertSpace = hilbert(hilbertRank, spaceSize, 1, 1)
    for (const snake of snakes) {
      snake.position = Math.floor(Math.random() * hilbertSpace.length)
    }
  }

  const draw = (ctx: CanvasRenderingContext2D): void => {
    for (const snake of snakes) {
      ctx.strokeStyle = colorToCss(snake.colorGenerator.next().value as Color)
      ctx.beginPath()
      ctx.moveTo(...hilbertSpace[snake.position])
      for (let i=0; i<snake.speed; i++) {
        snake.position = (snake.position + (snake.negative ? -1 : 1)) % hilbertSpace.length
        ctx.lineTo(...hilbertSpace[snake.position])
      }
      ctx.stroke()
    }
  }

  const art: Artwork = artworkLibrary['chillbert']
  return (
    <section class={style.canvas_frame}>
      <Helmet><title>{art.title}</title></Helmet>
      <div class="d-none"><ArtPlaque art={art} /></div>
      <Canvas init={init} onResize={init} draw={draw} />
    </section>
  )
}

export default Chillbert
