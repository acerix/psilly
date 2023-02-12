import { FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import ColorGenerator, { Color, colorToCss } from '../common/color-generator'
import { ArtPlaque, Artwork } from '../meta'
import artworkLibrary from '../library'
import styles from '../canvas-template/style.module.css'

class DevelopSnake {
  position = new Int16Array([0, 0])
  direction = 0
  colorGenerator = ColorGenerator({
    mutate: (color: Color): void => {
      for (let i = 0; i < 3; i++) {
        if (Math.random() > 0.5) {
          const d = 1 - 2 * Math.floor(Math.random() * 2)
          color[i] = (color[i] + 256 + d) % 256
        }
      }
    },
  })
}

const Develop: FunctionalComponent = () => {
  const snakeLength = 1
  const snakes: DevelopSnake[] = []

  const init = (ctx: CanvasRenderingContext2D): void => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    resize(ctx)
  }

  const resize = (ctx: CanvasRenderingContext2D): void => {
    const maxSnakes =
      4 * Math.floor(Math.sqrt(ctx.canvas.width * ctx.canvas.height))
    while (maxSnakes > snakes.length) {
      snakes.push(new DevelopSnake())
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
      if (snake.direction === 0) snake.position[1] -= snakeLength
      else if (snake.direction === 1) snake.position[0] += snakeLength
      else if (snake.direction === 2) snake.position[1] += snakeLength
      else if (snake.direction === 3) snake.position[0] -= snakeLength
      snake.direction = Math.floor(Math.random() * 4)
      const [w, h] = [
        ctx.canvas.width + snakeLength,
        ctx.canvas.height + snakeLength,
      ]
      if (snake.position[0] < 0) snake.position[0] += w
      if (snake.position[1] < 0) snake.position[1] += h
      snake.position[0] %= w
      snake.position[1] %= h
      const [x2, y2] = snake.position
      // don't draw snakes teleporting across
      if (
        Math.abs((x1 % w) - x2) > snakeLength ||
        Math.abs((y1 % h) - y2) > snakeLength
      ) {
        continue
      }
      ctx.lineTo(snake.position[0], snake.position[1])
      ctx.stroke()
    }
  }

  const art: Artwork = artworkLibrary['develop']
  return (
    <section class={styles.canvas_frame}>
      <Helmet>
        <title>{art.title}</title>
        <meta name="description" content={art.description} />
      </Helmet>
      <div class="d-none">
        <ArtPlaque art={art} />
      </div>
      <Canvas init={init} onResize={init} draw={draw} />
    </section>
  )
}

export default Develop
