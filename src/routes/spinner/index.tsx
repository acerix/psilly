import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import style from './style.css'

const Spinner: FunctionalComponent = () => {
  return (
    <section class={style.spinner}>
      <Helmet title="Please wait while I load your desires..." />
      <div><div>⬡</div></div>
    </section>
  )
}

export default Spinner
