import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'

interface HighnessProps {
  highness: string;
}

const Highness: FunctionalComponent<HighnessProps> = (props: HighnessProps) => {
  const { highness } = props
  return (
    <section class="container py-5">
      <Helmet title="Your Highness" />
      <h1>Your Highness</h1>
      {highness==='high' && <p>Hi High, I'm Dud.</p>}
      <p>I understand you identify as <em>{highness}</em> and fully support you in this endeavor.</p>
      {highness==='sober' && <div><p>If you could use some help, try <a href="https://www.youtube.com/PsychedSubstance">PsychedSubstance</a>.</p></div>}
      {highness==='high' && <div><p>If you want to get higher, as yourself "<a href="https://www.youtube.com/PsychedSubstance">what is higher?</a>".</p></div>}
      {highness==='too high' && <div><p>If you could use some help, try this:</p><audio controls><source src="/help.flac" type="audio/flac"><a href="/help.flac" target="_blank">Help!</a></source></audio></div>}
    </section>
  )
}

export default Highness
