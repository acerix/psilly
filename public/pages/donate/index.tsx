import { FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'

const Donate: FunctionalComponent = () => {
  return (
    <section class="container py-5">
      <Helmet title="Donate" />
      <h1>Donate</h1>
      <p>
        Psilly is a non-profit which relies on donations for support. Donate
        today to help push the psychedelic revolution forwards.
      </p>
      <p>
        We are not accepting online donations yet, please email{' '}
        <a href="mailto:donations@psilly.com">donations@psilly.com</a> if you
        would like to contribute.
      </p>
    </section>
  )
}

export default Donate
