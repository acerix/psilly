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
      <p>Psilly rejects our corporatocracy and the concept of profit. Any surplus is invested in our mission to turn on the World.</p>
      <h2>Governance</h2>
      <p>Psilly is managed by an elected Board of Directors, chosen by and from our membership. The Board meets monthly, and publishes agendas of upcoming meetings and minutes of past meetings publicly.</p>
      <h2>Corporate By-laws</h2>
      <p>
        <Link href="/bylaws/">
        Psilly By-laws
        </Link>
      </p>
      <h2>Is this Psilly?</h2>
      <p>This is most defiantly Psilly. You either know what Psilly is already or it can't be explained to you with mere words. <Link href="/page/shrooms/">Psilly Simon</Link> may have an answer.</p>
      <h2>Become a Psillable</h2>
      <p>There is no objective test for psillability, you will know when you are ready. It has little to do with rhyme, or even so-called reason, the main ingredient is 🌈. </p>
    </section>
  )
}

export default About
