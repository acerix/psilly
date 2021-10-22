import { FunctionalComponent, h } from 'preact'
import { Route, Router } from 'preact-router'
import Helmet from 'react-helmet'

import Home from '../routes/home'
import About from '../routes/about'
import Bylaws from '../routes/bylaws'
import FAQ from '../routes/faq'
import Contact from '../routes/contact'
import Join from '../routes/join'
import Donate from '../routes/donate'
import Highness from '../routes/highness'
import Experiments from '../routes/experiments'
import Art from '../routes/art'
import Polygonous from '../routes/art/polygonous'
import Meld from '../routes/art/meld'
import Circle from '../routes/art/circle'
import Squibbo from '../routes/art/squibbo'
import GoldenAngleDonut from '../routes/art/golden-angle-donut'
import Falls from '../routes/art/falls'
import Chillbert from '../routes/art/chillbert'
import Develop from '../routes/art/develop'
import Quadingle from '../routes/art/quadingle'
import OhBézier from '../routes/art/oh-bezier'
import TotallyModularFormBro from '../routes/art/totally-modular-form-bro'
import Untilted from '../routes/art/untilted'
import Lemnisgo from '../routes/art/lemnisgo'
import Hyperbollick from '../routes/art/hyperbollick'
import CanvasTemplate from '../routes/art/canvas-template'
import WebGLTemplate from '../routes/art/webgl-template'
import Loading from '../routes/art/loading'
import GridTest from '../routes/art/grid-test'
import Chat from '../routes/chat'
import Jam from '../routes/jam'
import Page from '../routes/page'
import Blog from '../routes/blog'
import Spinner from '../routes/spinner'

import NotFound from '../routes/not-found'
import Header from './header'
import Footer from './footer'
import Sequins from '../routes/art/common/sequins'

const App: FunctionalComponent = () => {
  return (
    <div>
      <Helmet
        htmlAttributes={{lang: "en-CA"}}
        title="A page with no name" titleTemplate="%s 🍄 Psilly"
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
            "name": "Psilly",
            "legalName" : "Psilly Corporation",
            "url": "https://psilly.com",
            "logo": "https://psilly.com/assets/Psilly-logo.png",
            "foundingDate": "2006",
            "founders": [
              {
              "@type": "Person",
              "name": "Dylan Ferris"
              }
            ],
            "email": "support@psilly.com"
          }`}
        ]}
      />
      <Header />
      <main>
        <Sequins />
        <Router>
          <Home path="/" />
          <About path="/about/" />
          <Bylaws path="/bylaws/" />
          <FAQ path="/faq/" />
          <Contact path="/contact/" />
          <Join path="/join/" />
          <Donate path="/donate/" />
          <Highness path="/sober/" highness="sober" />
          <Highness path="/high/" highness="high" />
          <Highness path="/toohigh/" highness="too high" />
          <Experiments path="/experiments/" />
          <Art path="/art/" />
          <Polygonous path="/art/polygonous/" />
          <Meld path="/art/meld/" />
          <Circle path="/art/circle/" />
          <Squibbo path="/art/squibbo/" />
          <GoldenAngleDonut path="/art/golden-angle-donut/" />
          <Falls path="/art/falls/" />
          <Chillbert path="/art/chillbert/" />
          <Develop path="/art/develop/" />
          <Quadingle path="/art/quadingle/" />
          <OhBézier path="/art/oh-bezier/" />
          <TotallyModularFormBro path="/art/totally-modular-form-bro/" />
          <Untilted path="/art/untilted/" />
          <Lemnisgo path="/art/lemnisgo/" />
          <Hyperbollick path="/art/hyperbollick/" />
          <Hyperbollick path="/art/eye-of-newt/" />
          <CanvasTemplate path="/art/canvas-template/" />
          <WebGLTemplate path="/art/webgl-template/" />
          <Loading path="/art/loading/" />
          <GridTest path="/art/grid-test/" />
          <Chat path="/chat/" />
          <Jam path="/jam/" />
          <Spinner path="/spin/" />
          <NotFound path="/404/" />
          <Route path="/blog/:post/" component={Blog} />
          <Route path="/page/:page/" component={Page} />
          <Route path="/:page/" component={Page} />
          <NotFound default />
        </Router>
      </main>
      <Footer />
    </div>
  )
}

export default App
