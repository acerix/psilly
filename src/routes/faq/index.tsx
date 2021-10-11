import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import { Link } from 'preact-router/match'

const About: FunctionalComponent = () => {
  return (
    <section class="container py-5">
      <Helmet title="Frequently Asked Questions" />
      <h1>Frequently Asked Questions</h1>
      <h2>Is this Psilly?</h2>
      <p>This is most defiantly Psilly. You either know what Psilly is already or it can't be explained to you with mere words. <Link href="/page/shrooms/">Psilly Simon</Link> may have an answer. So else may <Link href="/page/psilosophy/">psilosophizing</Link>.</p>
      <h2>How Much to Buy Psilly?</h2>
      <p>The Psilly™ brand name, psilly.com domain name, and the Psilly Corporation itself are <strong>not for sale</strong>.</p>
      <h2>How Can I Join?</h2>
      <p><a href="/join/">Become a Member</a></p>
      <h2>How is pɛˈsɪli Pronounced?</h2>
      <p>Yes.</p>
    </section>
  )
}

export default About