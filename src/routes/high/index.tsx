import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'

const High: FunctionalComponent = () => {
  return (
    <section class="container py-5">
      <Helmet title="Your Highness" />
      <h1>Your Highness</h1>
      <p>Hi High, I'm Dud</p>
    </section>
  )
}

export default High
