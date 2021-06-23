import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'

const Join: FunctionalComponent = () => {
  return (
    <section class="container py-5">
      <Helmet title="Join Psilly" />
      <h1>Become a Member</h1>
      <p>Psilly is a non-profit which relies on it's membership for support. Join us today and become a part of the psychedelic revolution.</p>
      <h2>Join</h2>
      <p>Sorry, registration is currently closed. Please check back in a few days.</p>
    </section>
  )
}

export default Join
