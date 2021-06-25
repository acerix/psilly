import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import style from './style.css'

const Circle: FunctionalComponent = () => {

  return (
    <section class={style.circle}>
      <Helmet title="Circle" />
      <iframe src="https://psilly.com/experiments/circle.html" />
    </section>
  )
}

export default Circle
