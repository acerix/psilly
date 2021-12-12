import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'

const Join: FunctionalComponent = () => {
  return (
    <section class="container py-5">
      <Helmet title="Join Psilly" />
      <h1>Become a Member</h1>
      <p>Psilly is a non-profit which relies on it's membership for support. Join us today and become a part of the psychedelic revolution.</p>
      <p><a class="btn btn-success" href="https://puff.psilly.com/apps/registration/">Apply for Membership</a></p>
    </section>
  )
}

export default Join
