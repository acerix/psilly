import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'

const Home: FunctionalComponent = () => {
  return (
    <section class="container py-5">
      <Helmet title="Welcome!" />
      <h1>Welcome to pSilly pSpace</h1>
      <p>Hope you enjoy your stay!</p>
    </section>
  )
}

export default Home
