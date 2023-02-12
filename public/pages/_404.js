import Helmet from 'react-helmet'

const NotFound = () => (
  <section class="container py-5">
    <Helmet title="Page Not Found" />
    <h1>Thing Not Found — Error 404</h1>
    <p>Sorry, the thing you are looking for is not a thing.</p>
    <a href="/">Country roads, take me home</a>
  </section>
)

export default NotFound
