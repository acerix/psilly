import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import ColorGenerator, {Color, colorToCss, randomColorPeriod} from '../common/color-generator'
import {ArtPlaque, Artwork} from '../meta'
import artworkLibrary from '../library'
import style from './style.css'

// function hindex2xy(hindex: number, N: number) {
//   const positions = [
//   /* 0: */ [0, 0],
//     /* 1: */ [0, 1],
//     /* 2: */ [1, 1],
//     /* 3: */ [1, 0]
//   ]

//   const tmp = positions[last2bits(hindex)]
//   let t = 0
//   hindex = (hindex >>> 2)

//   let x = tmp[0]
//   let y = tmp[1]

//   for (let n = 4; n <= N; n *= 2) {
//     const n2 = n / 2

//     switch (last2bits(hindex)) {
//     case 0: /* left-bottom */
//       t = x; x = y; y = t
//       break

//     case 1: /* left-upper */
//       // x = x
//       y = y + n2
//       break

//     case 2: /* right-upper */
//       x = x + n2
//       y = y + n2
//       break

//     case 3: /* right-bottom */
//       t = y
//       y = (n2-1) - x
//       x = (n2-1) - t
//       x = x + n2
//       break
//     }

//     hindex = (hindex >>> 2)
//   }

//   return [x, y]

//   function last2bits(x: number) { return (x & 3) }
// }

class ChillbertSnake {
  position = new Int16Array([0, 0])
  direction = 0
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
  const maxSnakes = 32
  const snakeLength = 16
  const snakes: ChillbertSnake[] = []
  // let hilbertSize = 4
  
  const init = (ctx: CanvasRenderingContext2D): void => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.lineWidth = 8
    while (maxSnakes > snakes.length) {
      snakes.push(new ChillbertSnake())
    }
    for (const snake of snakes) {
      snake.position[0] = Math.floor(Math.random() * ctx.canvas.width)
      snake.position[1] = Math.floor(Math.random() * ctx.canvas.height)
      snake.direction = Math.floor(Math.random() * 4)
    }
  }

  const draw = (ctx: CanvasRenderingContext2D): void => {
    for (const snake of snakes) {
      ctx.strokeStyle = colorToCss(snake.colorGenerator.next().value as Color)
      ctx.beginPath()
      ctx.moveTo(snake.position[0], snake.position[1])
      const [x1, y1] = snake.position
      if (snake.direction===0) snake.position[1] -= snakeLength
      else if (snake.direction===1) snake.position[0] += snakeLength
      else if (snake.direction===2) snake.position[1] += snakeLength
      else if (snake.direction===3) snake.position[0] -= snakeLength
      snake.direction = Math.floor(Math.random() * 4)
      const [w, h] = [ctx.canvas.width+snakeLength, ctx.canvas.height+snakeLength]
      if (snake.position[0] < 0) snake.position[0] += w
      if (snake.position[1] < 0) snake.position[1] += h
      snake.position[0] %= w
      snake.position[1] %= h
      const [x2, y2] = snake.position
      // don't draw snakes teleporting across
      if (Math.abs(x1%w - x2) > snakeLength || Math.abs(y1%h - y2) > snakeLength) {
        continue
      }
      ctx.lineTo(snake.position[0], snake.position[1])
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