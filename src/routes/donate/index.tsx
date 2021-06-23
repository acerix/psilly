import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'

const Donate: FunctionalComponent = () => {
  return (
    <section class="container py-5">
      <Helmet title="Donate to Psilly" />
      <h1>Donate</h1>
      <p>Psilly is a non-profit which relies on it's membership for support. Donate today to help push the psychedelic revolution forwards.</p>
      <h2>Donate</h2>
      <p>Sorry, we are not currently accepting donations. Please check back in a few days.</p>
    </section>
  )
}

export default Donate
