import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import {Color, colorToCss} from '../common/color-generator'
import {ArtPlaque, Artwork} from '../meta'
import artworkLibrary from '../library'
import style from '../canvas-template/style.css'
// inspired by https://www.reddit.com/r/woahdude/comments/tbdjqx/eltit_gnitseretni_na/

const BALL_COUNT = 90
const BALL_RADIUS = 16
const BALL_SPACE = 56 / BALL_COUNT
const TAU = 2 * Math.PI

export function* SpectrumGenerator(): Generator<Color> {
  const color: Color = new Uint8Array([255, 0, 0])
  const hueMax = 90
  yield color
  for (let hue=1; hue<hueMax; hue++) {
    if (hue < 16) {
      color[1] += 0x11
    }
    else if (hue < 31) {
      color[0] -= 0x11
    }
    else if (hue < 46) {
      color[2] += 0x11
    }
    else if (hue < 61) {
      color[1] -= 0x11
    }
    else if (hue < 76) {
      color[0] += 0x11
    }
    else {
      color[2] -= 0x11
    }
    yield color
  }
}

const Vcock: FunctionalComponent = () => {
  const colorGenerator = SpectrumGenerator()
  const ballColors: string[] = []

  for (let i=0; i<BALL_COUNT; i++) {
    ballColors[i] = colorToCss(colorGenerator.next().value as Color)
  }

  const draw = (ctx: CanvasRenderingContext2D, frameCount: number): void => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    // Draw V
    ctx.strokeStyle = '#fff'
    const x = ctx.canvas.width / 2
    const y = ctx.canvas.height
    const y_zero = ctx.canvas.height - x
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(0, y_zero)
    ctx.moveTo(x, y)
    ctx.lineTo(ctx.canvas.width, y_zero)
    ctx.stroke()

    // Draw balls
    for (let i=0; i<BALL_COUNT; i++) {
      ctx.fillStyle = ballColors[i]
      ctx.beginPath()
      const p = frameCount * (i + 128) / 4096
      const s = -Math.cos(p)
      const v = BALL_RADIUS * i * BALL_SPACE
      const y = ctx.canvas.height - v - (2 * BALL_RADIUS / Math.SQRT2) - Math.abs(Math.sin(p) * 16 * Math.sqrt(i + 8))
      const x = ctx.canvas.width / 2 + v * s
      ctx.arc(x, y, BALL_RADIUS, 0, TAU, true)
      ctx.fill()
    }
    
  }

  const art: Artwork = artworkLibrary['vcock']
  return (
    <section class={style.canvas_frame}>
      <Helmet><title>{art.title}</title></Helmet>
      <div class="d-none"><ArtPlaque art={art} /></div>
      <Canvas draw={draw} />
    </section>
  )
}

export default Vcock
