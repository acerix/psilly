import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import style from './style.css'

const Polygons: FunctionalComponent = () => {
  return (
    <section class={style.polygons}>
      <Helmet title="Polygons" />
      <canvas id="canvas" />
    </section>
  )
}

export default Polygons
