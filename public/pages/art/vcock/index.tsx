import { FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import { Color, colorToCss } from '../common/color-generator'
import { ArtPlaque, Artwork } from '../meta'
import artworkLibrary from '../library'
import styles from '../canvas-template/style.module.css'

//import { Beep, BeepSequence } from 'beepody/dist/tsc/beepody'
import { useReducer } from 'preact/hooks'

const BALL_COUNT = 90
const BALL_RADIUS = 16
const BALL_SPACE = 56 / BALL_COUNT
const TAU = 2 * Math.PI

export function* SpectrumGenerator(): Generator<Color> {
  const color: Color = new Uint8Array([255, 0, 0])
  const hueMax = 90
  yield color
  for (let hue = 1; hue < hueMax; hue++) {
    if (hue < 16) {
      color[1] += 0x11
    } else if (hue < 31) {
      color[0] -= 0x11
    } else if (hue < 46) {
      color[2] += 0x11
    } else if (hue < 61) {
      color[1] -= 0x11
    } else if (hue < 76) {
      color[0] += 0x11
    } else {
      color[2] -= 0x11
    }
    yield color
  }
}

export interface VCockState {
  animate: boolean
}

export const initialState: VCockState = {
  animate: true,
}

export const reducer = (
  state: VCockState,
  action: { type: string },
): VCockState => {
  switch (action.type) {
    case 'start':
      return {
        ...state,
        animate: true,
      }
    case 'stop':
      return {
        ...state,
        animate: false,
      }
    default:
      throw `Undefined action "action.type"`
  }
}

const Vcock: FunctionalComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  void dispatch
  const colorGenerator = SpectrumGenerator()
  const ballColors: string[] = []

  for (let i = 0; i < BALL_COUNT; i++) {
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
    for (let i = 0; i < BALL_COUNT; i++) {
      ctx.fillStyle = ballColors[i]
      ctx.beginPath()
      const p = ((frameCount / 60) * TAU * (i + BALL_COUNT)) / BALL_COUNT
      const s = -Math.cos(p)
      const v = BALL_RADIUS * i * BALL_SPACE
      const y =
        ctx.canvas.height -
        v -
        (2 * BALL_RADIUS) / Math.SQRT2 -
        Math.abs(Math.sin(p) * 16 * Math.sqrt(i + 8))
      const x = ctx.canvas.width / 2 + v * s
      ctx.arc(x, y, BALL_RADIUS, 0, TAU, true)
      ctx.fill()
    }
  }

  let beeping = false
  //const beepTimers: NodeJS.Timer[] = []
  const beep = (): void => {
    // if (beeping) {
    //   dispatch({type: 'stop'})
    //   for (const t of beepTimers) {
    //     clearInterval(t)
    //   }
    // }
    // else {
    //   dispatch({type: 'start'})
    //   // const time = 0
    //   for (let i=0; i<BALL_COUNT; i++) {
    //     const bs = new BeepSequence([new Beep()])
    //     const p = i * 1000 + 2000
    //     console.log(bs, p)
    //     // beepTimers.push(
    //     //   setInterval(() => playBeepSequence(bs), p)
    //     // )
    //   }
    // }
    beeping = !beeping
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('click', beep)
  }

  const art: Artwork = artworkLibrary['vcock']
  return (
    <section class={styles.canvas_frame}>
      <Helmet title={art.title} />
      <div class="d-none">
        <ArtPlaque art={art} />
      </div>
      <Canvas draw={draw} animate={state.animate} />
    </section>
  )
}

export default Vcock
