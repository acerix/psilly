import { FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'

interface HighnessProps {
  highness: string
}

const Highness: FunctionalComponent<HighnessProps> = (props: HighnessProps) => {
  const { highness } = props
  return (
    <section class="container py-5">
      <Helmet title="Your Highness" />
      <h1>Your Highness</h1>
      {highness === 'high' && <p>Hi High, I'm Dud.</p>}
      <p>
        I understand you identify as <em>{highness}</em> and fully support you
        in this endeavor.
      </p>
      {highness === 'sober' && (
        <div>
          <p>
            If you could use some help, try{' '}
            <span style="color:black;background:black;">love</span>.
          </p>
        </div>
      )}
      {highness === 'high' && (
        <div>
          <p>
            If you want to get higher, ask yourself "
            <span style="color:black;background:black;">what is higher?</span>".
          </p>
        </div>
      )}
      {highness === 'too high' && (
        <div>
          <audio controls>
            <source src="/help.flac" type="audio/flac">
              <a href="/help.flac" target="_blank">
                Help!
              </a>
            </source>
          </audio>
          <p>
            A slow, calm chat may help you relax, try{' '}
            <a
              href="https://chat.tripsit.me/chat/?a=1#sanctuary"
              target="_blank"
              rel="noreferrer">
              TripSit
            </a>
            .
          </p>
        </div>
      )}
    </section>
  )
}

export default Highness
