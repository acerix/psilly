import { FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import { ArtPlaque, Artwork } from '../meta'
import artworkLibrary from '../library'
import styles from '../canvas-template/style.module.css'

import LoadingScreen from '../common/loading-screen'

const CanvasTemplate: FunctionalComponent = () => {
  const canvasCenter = [0, 0]
  let maxRadiusSquared = 1

  const init = (ctx: CanvasRenderingContext2D): void => {
    canvasCenter[0] = ctx.canvas.width / 2
    canvasCenter[1] = ctx.canvas.height / 2
    maxRadiusSquared = canvasCenter[0] ** 2 + canvasCenter[1] ** 2
    ctx.fillStyle = 'purple'
  }

  const draw = (ctx: CanvasRenderingContext2D, frameCount: number): void => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.beginPath()
    ctx.arc(
      canvasCenter[0],
      canvasCenter[1],
      Math.sqrt(maxRadiusSquared * Math.sin(frameCount / 60) ** 2),
      0,
      2 * Math.PI,
    )
    ctx.fill()
  }

  const art: Artwork = artworkLibrary['canvas-template']
  return (
    <section class={styles.canvas_frame}>
      <Helmet>
        <title>{art.title}</title>
        <meta name="description" content={art.description} />
      </Helmet>
      <div class="d-none">
        <ArtPlaque art={art} />
      </div>
      <LoadingScreen />
      <Canvas init={init} onResize={init} draw={draw} />
    </section>
  )
}

export default CanvasTemplate
