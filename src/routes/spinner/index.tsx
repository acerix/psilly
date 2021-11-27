import { FunctionalComponent, h } from 'preact'
import Helmet from 'preact-helmet'
import style from './style.css'

const Spinner: FunctionalComponent = () => {
  return (
    <section class={style.spinner}>
      <Helmet title="Please wait while your desires are loaded..." />
      <div><div>⬡</div></div>
    </section>
  )
}

export default Spinner
