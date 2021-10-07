import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import { Link } from 'preact-router/match'

const NotFound: FunctionalComponent = () => {
  return (
    <section class="container py-5">
      <Helmet title="Page Not Found" />
      <h1>Thing Not Found — Error 404</h1>
      <p>Sorry, the thing you are looking for is not a thing.</p>
      <Link href="/">
          Country roads, take me home
      </Link>
    </section>
  )
}

export default NotFound
