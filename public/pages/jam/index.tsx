import { FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'
import JamulusStatus from './jamulus'

const Jam: FunctionalComponent = () => {
  return (
    <section class="container py-5">
      <Helmet title="Jam" />
      <h1>Psilly Jams</h1>
      <p>I wanna jam it with you!</p>
      <p>
        Get an instrument hooked up and join our{' '}
        <a href="https://jamulus.io/">Jamulus</a> server. The server is in
        Montréal, so for best results, live near here. N'est-ce pas?
      </p>
      <pre>
        The server is "Psilly 🍄" (psilly.com:22124) on the "Any Genre 1"
        directory (anygenre1.jamulus.io:22124).
      </pre>
      <h2>Who's Jammin' Now?</h2>
      <div class="mb-2">
        <JamulusStatus />
      </div>
      <h2>Server Status</h2>
      <div class="list-group mb-3">
        <a
          class="list-group-item list-group-item-action"
          href="/jam/jamulus-status.html"
          target="_blank">
          HTML status
        </a>
        <a
          class="list-group-item list-group-item-action"
          href="https://explorer.jamulus.io/servers.php?query=psilly.com"
          target="_blank"
          rel="noreferrer">
          Jamulus.io Explorer Status
        </a>
      </div>
      <h2>Issues</h2>
      <p>
        Let me know of any trouble you have with the server, my email is{' '}
        <a href="mailto:dylan@psilly.com">dylan@psilly.com</a>.
      </p>
      <h2>Psilly Confiture</h2>
      <p>
        Psilly Jams are not necessarily preparations made by preserving
        psilocybe mushrooms with sugar; jam or marmalade, but they are{' '}
        <em>not necessarily not</em> as well.
      </p>
    </section>
  )
}

export default Jam
