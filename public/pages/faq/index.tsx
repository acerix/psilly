import { FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'

const About: FunctionalComponent = () => {
  return (
    <section class="container py-5">
      <Helmet title="Frequently Asked Questions" />
      <h1>Frequently Asked Questions</h1>
      <h2>Is this Psilly?</h2>
      <p>
        This is most defiantly Psilly. You either know what Psilly is already or
        it can't be explained to you with mere words.{' '}
        <a href="/shrooms/">Psilly Simon</a> may have an answer. So else may{' '}
        <a href="/psilosophy/">psilosophizing</a>.
      </p>
      <h2>How Much to Buy Psilly?</h2>
      <p>
        The Psilly™ brand name, psilly.com domain name, and the Psilly
        Corporation itself are <strong>not for sale</strong>.
      </p>
      <h2>How to Join?</h2>
      <p>
        <a href="/join/">Become a Member</a>
      </p>
      <h2>How to Say Psilly?</h2>
      <p>pɛˈsɪli</p>
    </section>
  )
}

export default About
