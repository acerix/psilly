import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import {ArtPlaque, Artwork} from '../meta'
import artworkLibrary from '../library'
import style from '../canvas-template/style.css'

const Circle: FunctionalComponent = () => {

  const art: Artwork = artworkLibrary['circle']
  return (
    <section class={style.canvas_frame}>
      <Helmet>
        <title>{art.title}</title>
        <meta name="description" content={art.description} />
      </Helmet>
      <div class="d-none"><ArtPlaque art={art} /></div>
      <iframe src="https://falls.psilly.com/" />
    </section>
  )
}

export default Circle
