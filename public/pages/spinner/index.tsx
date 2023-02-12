import { FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'
import styles from './style.module.css'

const Spinner: FunctionalComponent = () => {
  return (
    <section class={styles.spinner}>
      <Helmet title="Please wait while your desires are loaded..." />
      <div>
        <div>𓂸</div>
      </div>
    </section>
  )
}

export default Spinner
