import { FunctionalComponent, h } from 'preact'
import { Route, Router } from 'preact-router'
import Helmet from 'react-helmet'

import Home from '../routes/home'
import About from '../routes/about'
import Bylaws from '../routes/bylaws'
import Contact from '../routes/contact'
import Join from '../routes/join'
import Donate from '../routes/donate'
import High from '../routes/high'
import Page from '../routes/page'
import Art from '../routes/art'
import Polygons from '../routes/art/polygons'
import Meld from '../routes/art/meld'
import Circle from '../routes/art/circle'
import Chat from '../routes/chat'
import Spinner from '../routes/spinner'

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
          {type: "application/ld+json", innerHTML: `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Psilly Corporation (PSI)",
            "email": "support@psilly.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "122 Barrette Street",
              "addressLocality": "Ottawa, Ontario, Canada",
              "postalCode": "K1L 8A1"
            }
          }`}
        ]}
      />
      <Header />
      <main>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/bylaws" component={Bylaws} />
          <Route path="/contact" component={Contact} />
          <Route path="/join" component={Join} />
          <Route path="/donate" component={Donate} />
          <Route path="/page/:page" component={Page} />
          <Route path="/sober" component={High} />
          <Route path="/high" component={High} />
          <Route path="/toohigh" component={High} />
          <Route path="/art" component={Art} />
          <Route path="/art/polygons" component={Polygons} />
          <Route path="/art/meld" component={Meld} />
          <Route path="/art/circle" component={Circle} />
          <Route path="/chat" component={Chat} />
          <Route path="/spin" component={Spinner} />
          <NotFound default />
        </Router>
      </main>
      <Footer />
    </div>
  )
}

export default App
