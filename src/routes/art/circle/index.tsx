import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import style from '../canvas-template/style.css'

const Circle: FunctionalComponent = () => {

  return (
    <section class={style.canvas_frame}>
      <Helmet title="Circle" />
      <iframe src="https://psilly.com/experiments/circle.html" />
    </section>
  )
}

export default Circle
