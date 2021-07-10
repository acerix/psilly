import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import {ArtPlaque, Artwork} from '../meta'
import artworkLibrary from '../library'
import style from './style.css'

class ChillbertSnake {
  direction = 0
}

const Chillbert: FunctionalComponent = () => {
  const snakes = [ChillbertSnake]
  
  const init = (ctx: CanvasRenderingContext2D): void => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    // snakes.push(new ChillbertSnake())
  }

  const draw = (ctx: CanvasRenderingContext2D, frameCount: number): void => {
    for (const snake of snakes) {
      console.log(ctx, frameCount, snake)
    }
  }

  const art: Artwork = artworkLibrary['chillbert']
  return (
    <section class={style.canvas_frame}>
      <Helmet><title>{art.title}</title></Helmet>
      <div class="d-none"><ArtPlaque art={art} /></div>
      <Canvas init={init} draw={draw} />
    </section>
  )
}

export default Chillbert
