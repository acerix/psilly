import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import { Link } from 'preact-router/match'

const About: FunctionalComponent = () => {
  return (
    <section class="container py-5">
      <Helmet title="About The Psilly Corporation" />
      <h1>About Psilly</h1>
      <p>Psilly is an online community founded in 2006 which is dedicated to psychedelic research, therapy, harm-reduction, and advocacy.</p>
      <h2>Mission Statement</h2>
      <p>Our mission is to deliver peace of mind through exceptional care and avant-garde advocacy of psychotropic therapies.</p>
      <h2>Non-profit</h2>
      <p>Psilly rejects our corporatocracy and the concept of profit. Any surplus is reinvested in our mission to turn on the World.</p>
      <h2>Governance</h2>
      <p>Psilly is managed by an elected Board of Directors, chosen by and from our membership. The Board meets monthly, and publishes agendas of upcoming meetings and minutes of past meetings publicly.</p>
      <h2>Board of Directors</h2>
      <p>Executive Director &mdash; Dylan Ferris (2006-present)</p>
      <h2>Corporate By-laws</h2>
      <Link href="/bylaws">
        Psilly By-laws
      </Link>
    </section>
  )
}

export default About