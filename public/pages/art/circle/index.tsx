import { FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'
import { ArtPlaque, Artwork } from '../meta'
import artworkLibrary from '../library'
import styles from '../canvas-template/style.module.css'

const Circle: FunctionalComponent = () => {
  const art: Artwork = artworkLibrary['circle']
  return (
    <section class={styles.canvas_frame}>
      <Helmet>
        <title>{art.title}</title>
        <meta name="description" content={art.description} />
      </Helmet>
      <div class="d-none">
        <ArtPlaque art={art} />
      </div>
      <iframe src="https://psilly.com/experiments/circle.html" />
    </section>
  )
}

export default Circle
