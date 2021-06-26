import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import style from '../canvas-template/style.css'

const Polygonous: FunctionalComponent = () => {

  return (
    <section class={style.canvas_frame}>
      <Helmet title="Polygonous" />
      <iframe src="https://psilly.com/experiments/polygons.html" />
    </section>
  )
}

export default Polygonous
