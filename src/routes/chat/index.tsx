import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'

const Chat: FunctionalComponent = () => {
  return (
    <section class="container py-5">
      <Helmet title="Chatter" />
      <h1>Psilly Chatter Next Generation</h1>
      <p>Looks like you found the new version of Psilly Chatter! It's coming soon, I swear!</p>
      <p><a href="/experiments/chatter.pill" target="_blank">Legacy Chatter</a></p>
    </section>
  )
}

export default Chat
