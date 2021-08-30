import { FunctionalComponent, h } from 'preact'
import { Route, Router } from 'preact-router'
import Helmet from 'react-helmet'

import Home from '../routes/home'
import About from '../routes/about'
import Bylaws from '../routes/bylaws'
import Contact from '../routes/contact'
import Join from '../routes/join'
import Donate from '../routes/donate'
import Highness from '../routes/highness'
import Page from '../routes/page'
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
import CanvasTemplate from '../routes/art/canvas-template'
import WebGLTemplate from '../routes/art/webgl-template'
import Loading from '../routes/art/loading'
import Chat from '../routes/chat'
import Jam from '../routes/jam'
import Spinner from '../routes/spinner'

import NotFound from '../routes/not-found'
import Header from './header'
import Footer from './footer'
import Sequins from '../routes/art/common/sequins'

const App: FunctionalComponent = () => {
  return (
    <div>
      <Helmet
        htmlAttributes={{lang: "en-CA", amp: undefined}}
        title="A page with no name" titleTemplate="%s 🍄 Psilly"
        titleAttributes={{itemprop: "name", lang: "en-CA"}}
        meta={[
          {name: "description", content: "Psilly (PSI) is an online community dedicated to psychedelic research, therapy, harm-reduction, and advocacy. We deliver peace of mind through exceptional care and avant-garde advocacy of psychotropic therapies."}
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
          <Contact path="/contact/" />
          <Join path="/join/" />
          <Donate path="/donate/" />
          <Route path="/page/:page/" component={Page} />
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
          <CanvasTemplate path="/art/canvas-template/" />
          <WebGLTemplate path="/art/webgl-template/" />
          <Loading path="/art/loading/" />
          <Chat path="/chat/" />
          <Jam path="/jam/" />
          <Spinner path="/spin/" />
          <NotFound path="/404/" />
          <NotFound default />
        </Router>
      </main>
      <Footer />
    </div>
  )
}

export default App
