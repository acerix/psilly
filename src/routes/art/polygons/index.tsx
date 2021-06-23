import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import style from './style.css'

const Polygons: FunctionalComponent = () => {
  return (
    <section class={style.polygons}>
      <Helmet title="Polygons" />
      <div id="canvas">⬡</div>
    </section>
  )
}

export default Polygons
