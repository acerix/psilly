import { FunctionalComponent, h } from 'preact'
import { Route, Router } from 'preact-router'
import Helmet from 'react-helmet'

import Home from '../routes/home'
import About from '../routes/about'
import Bylaws from '../routes/bylaws'
import Contact from '../routes/contact'
import Art from '../routes/art'
import Polygons from '../routes/art/polygons'
import NotFound from '../routes/not-found'
import Header from './header'
import Footer from './footer'

const App: FunctionalComponent = () => {
  return (
    <div>
      <Helmet
        htmlAttributes={{lang: "en-CA", amp: undefined}}
        title="Untitled" titleTemplate="%s 🍄 Psilly"
        titleAttributes={{itemprop: "name", lang: "en-CA"}}
        meta={[
          {name: "description", content: "Psilly is an online community dedicated to psychedelic research, therapy, harm-reduction, and advocacy. We deliver peace of mind through exceptional care and avant-garde advocacy of psychotropic therapies."}
        ]}
        link={[
          {rel: "canonical", href: "https://psilly.com/"},
        ]}
        script={[
          {type: "application/ld+json", innerHTML: `{ "@context": "http://schema.org" }`}
        ]}
      />
      <Header />
      <main>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/bylaws" component={Bylaws} />
          <Route path="/contact" component={Contact} />
          <Route path="/art" component={Art} />
          <Route path="/art/polygons" component={Polygons} />
          <NotFound default />
        </Router>
      </main>
      <Footer />
    </div>
  )
}

export default App
