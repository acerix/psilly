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
      <p>I understand you identify as <em>{highness}</em> and I fully support you in this endeavor.</p>
    </section>
  )
}

export default Highness
