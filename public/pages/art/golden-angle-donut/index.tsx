import { FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import ParameterPanel from '../common/parameter-panel'
import ColorGenerator, { Color, colorToCss } from '../common/color-generator'
import { ArtPlaque, Artwork } from '../meta'
import artworkLibrary from '../library'
import styles from '../canvas-template/style.module.css'

const STROKES_PER_FRAME = 8
const PHI = (1 + Math.sqrt(5)) / 2
const GOLDEN_ANGLE = (2 * Math.PI) / Math.pow(PHI, 2)

const GoldenAngleDonut: FunctionalComponent = () => {
  const colorGenerator = ColorGenerator()
  let lineLength = 0
  let direction = 0
  const position = [0, 0]

  const init = (ctx: CanvasRenderingContext2D): void => {
    lineLength = Math.min(ctx.canvas.width, ctx.canvas.height) * 0.92
    direction = 0
    position[0] = (ctx.canvas.width - lineLength) / 2
    position[1] = ctx.canvas.height / 2 - lineLength / 5
  }
  const onResize = init

  const draw = (ctx: CanvasRenderingContext2D): void => {
    ctx.strokeStyle = colorToCss(colorGenerator.next().value as Color)
    ctx.beginPath()
    ctx.moveTo(position[0], position[1])
    for (let i = 0; i < STROKES_PER_FRAME; i++) {
      position[0] += lineLength * Math.cos(direction)
      position[1] += lineLength * Math.sin(direction)
      ctx.lineTo(position[0], position[1])
      direction += GOLDEN_ANGLE
    }
    ctx.stroke()
  }

  const art: Artwork = artworkLibrary['golden-angle-donut']
  return (
    <section class={styles.canvas_frame}>
      <Canvas init={init} draw={draw} onResize={onResize} />
      <Helmet>
        <title>{art.title}</title>
        <meta name="description" content={art.description} />
      </Helmet>
      <div class="d-none">
        <ArtPlaque art={art} />
      </div>
      <ParameterPanel something={69} />
    </section>
  )
}

export default GoldenAngleDonut
