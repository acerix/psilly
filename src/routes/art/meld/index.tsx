import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import style from '../canvas-template/style.css'

const Meld: FunctionalComponent = () => {

  return (
    <section class={style.canvas_frame}>
      <Helmet title="Meld" />
      <iframe src="https://psilly.com/experiments/meld.html" />
    </section>
  )
}

export default Meld
