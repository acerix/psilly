import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import {ArtPlaque, Artwork} from '../meta'
import artworkLibrary from '../library'
import style from '../canvas-template/style.css'

const Circle: FunctionalComponent = () => {

  const art: Artwork = artworkLibrary['circle']
  return (
    <section class={style.canvas_frame}>
      <Helmet><title>{art.title}</title></Helmet>
      <div class="d-none"><ArtPlaque art={art} /></div>
      <iframe src="https://psilly.com/experiments/circle.html" />
    </section>
  )
}

export default Circle
