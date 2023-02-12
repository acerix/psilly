import { FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'

const PGPKey = [
  '-----BEGIN PGP PUBLIC KEY BLOCK-----',
  'xjMEYTkdshYJKwYBBAHaRw8BAQdAL4uZNaylbe7fVitfUjE2TYWl3nePkUEFwPaTOSGK30LNH0R5',
  'bGFuIEZlcnJpcyA8ZHlsYW5AcHNpbGx5LmNvbT7CkQQTFggAORYhBBR8EBhihyLIuHF7sBk/zk6K',
  'w/jCBQJhOR2zBQkNKGiAAhsDBQsJCAcCBhUICQoLAgUWAgMBAAAKCRAZP85OisP4woGtAP960TYA',
  '2VOvm2Ns71AQJNGzVy5cjakk/+2U8qFWGaPB0wD+OhNK3XgxJcfOFNeZLh9ksSIXHsuh2ZWaH7dV',
  'vCBK5w3OOARhOR2zEgorBgEEAZdVAQUBAQdA4X+xw6ofrlf2QauIGqETpgu743vBPRCAeKpfSW56',
  'uzMDAQgHwn4EGBYIACYWIQQUfBAYYociyLhxe7AZP85OisP4wgUCYTkdswUJDShogAIbDAAKCRAZ',
  'P85OisP4whGXAQCdIMK6bbPQcwfeYTB/O0pZGuEAJn9YAuxjKfTRdNSlKAD+MHMBYYwbHrePMdfN',
  '2K9G73xfTyAJsnYw1Yn6HTX9NAQ=',
  '=jV+n',
  '-----END PGP PUBLIC KEY BLOCK-----',
].join('\n')

const Contact: FunctionalComponent = () => {
  return (
    <section class="container py-5">
      <Helmet title="Contact Psilly" />
      <h1>Contact Psilly</h1>
      <p>
        Got a funky idea for psilly? Reach out at{' '}
        <a href="mailto:dylan@psilly.com">dylan@psilly.com</a>.
      </p>
      <p>
        Note: Psilly is not for sale and does not participate in business
        partnerships, any such inquiries will be ignored.
      </p>
      <h2>Please Guard Paranoia</h2>
      <p>Encryption's cool.</p>
      <pre class="font-monospace mb-3" id="pgp">
        {PGPKey}
      </pre>
    </section>
  )
}

export default Contact
