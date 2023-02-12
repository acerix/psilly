import { FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'
import { ArtIndex } from './meta'

const Art: FunctionalComponent = () => {
  return (
    <section class="container py-5">
      <Helmet title="Web Art Exhibition" />
      <h1>Web Art</h1>
      <ArtIndex />
      <h2>Artchive</h2>
      <p>
        Older art experiments are under <a href="/experiments/">experiments</a>.
      </p>
    </section>
  )
}

export default Art
