import { FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import ColorGenerator, { Color, colorToCss } from '../common/color-generator'
import { ArtPlaque, Artwork } from '../meta'
import artworkLibrary from '../library'
import styles from '../canvas-template/style.module.css'

const STROKES_PER_FRAME = 32

const Squibbo: FunctionalComponent = () => {
  const position = [0, 0]

  const init = (ctx: CanvasRenderingContext2D): void => {
    position[0] = ctx.canvas.width / 2
    position[1] = ctx.canvas.height / 2
  }

  const colorGenerator = ColorGenerator({
    mutate: (color: Color): void => {
      for (let i = 0; i < 3; i++) {
        if (Math.random() > 0.5) {
          const d = 1 - 2 * Math.floor(Math.random() * 2)
          color[i] = (color[i] + 256 + d) % 256
        }
      }
    },
  })

  const draw = (ctx: CanvasRenderingContext2D): void => {
    ctx.strokeStyle = colorToCss(colorGenerator.next().value as Color)
    ctx.beginPath()
    ctx.moveTo(position[0], position[1])
    for (let i = 0; i < STROKES_PER_FRAME; i++) {
      position[0] = Math.random() * ctx.canvas.width
      position[1] = Math.random() * ctx.canvas.height
      ctx.lineTo(position[0], position[1])
    }
    ctx.stroke()
  }

  const art: Artwork = artworkLibrary['squibbo']
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

export default Squibbo
