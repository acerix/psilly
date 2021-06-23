import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'

const Contact: FunctionalComponent = () => {
  return (
    <section class="container py-5">
      <Helmet title="Contact Psilly" />
      <h1>Contact Psilly</h1>
      <p>Got an idea for psilly? A qualm? Whatever it is, I'd love to hear it! Reach out at <a href="mailto:dylan@psilly.com">dylan@psilly.com</a>.</p>
      <h2>Buying Psilly</h2>
      <p>If you are looking to purchase the Psilly™ brand name or the domain name psilly.com, please note that both are <strong>not for sale</strong>.</p>
    </section>
  )
}

export default Contact
