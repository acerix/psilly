import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import style from './style.css'

const GoldenAngleDonut: FunctionalComponent = () => {

  return (
    <section class={style.golden_angle_donut}>
      <Helmet title="Golden Angle Donut" />
      <Canvas />
    </section>
  )
}

export default GoldenAngleDonut
