import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import { Link } from 'preact-router/match'

const NotFound: FunctionalComponent = () => {
  return (
    <section class="container py-5">
      <Helmet title="Page Not Found" />
      <h1>Page Not Found — Error 404</h1>
      <p>Sorry, we couldn't find the page you're looking for.</p>
      <Link href="/">
          Back to Home
      </Link>
    </section>
  )
}

export default NotFound
