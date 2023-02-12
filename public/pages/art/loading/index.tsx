import { FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import { ArtPlaque, Artwork } from '../meta'
import artworkLibrary from '../library'
import styles from '../canvas-template/style.module.css'

import LoadingScreen from '../common/loading-screen'

const Loading: FunctionalComponent = () => {
  const draw = (ctx: CanvasRenderingContext2D, frameCount: number): void => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    const leftMargin = 10
    const fontSize = ctx.canvas.width >> 4
    const topMargin = Math.ceil(leftMargin / 2 + fontSize)
    ctx.font = `${fontSize}px sans`
    ctx.fillStyle = 'brown'
    ctx.fillText('Loading... is... done!', leftMargin, topMargin)
    ctx.fillText(String(frameCount), leftMargin, topMargin + fontSize)
  }

  const art: Artwork = artworkLibrary['canvas-template']
  return (
    <section class={styles.canvas_frame}>
      <Helmet title={art.title} />
      <div class="d-none">
        <ArtPlaque art={art} />
      </div>
      <LoadingScreen />
      <Canvas draw={draw} />
    </section>
  )
}

export default Loading
