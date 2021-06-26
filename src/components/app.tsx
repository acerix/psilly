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
import Art from '../routes/art'
import CanvasTemplate from '../routes/art/canvas-template'
import Polygonous from '../routes/art/polygonous'
import Meld from '../routes/art/meld'
import Circle from '../routes/art/circle'
import Scribble from '../routes/art/scribble'
import GoldenAngleDonut from '../routes/art/golden-angle-donut'
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
              "addressLocality": "Ottawa, Ontario, Canada",
            }
          }`}
        ]}
      />
      <Header />
      <main>
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Bylaws path="/bylaws" />
          <Contact path="/contact" />
          <Join path="/join" />
          <Donate path="/donate" />
          <Route path="/page/:page" component={Page} />
          <Highness path="/sober" highness="sober" />
          <Highness path="/high" highness="high" />
          <Highness path="/toohigh" highness="too high" />
          <Art path="/art" />
          <CanvasTemplate path="/art/canvas-template" />
          <Polygonous path="/art/polygonous" />
          <Meld path="/art/meld" />
          <Circle path="/art/circle" />
          <Scribble path="/art/scribble" />
          <GoldenAngleDonut path="/art/golden-angle-donut" />
          <Chat path="/chat" />
          <Spinner path="/spin" />
          <NotFound default />
        </Router>
      </main>
      <Footer />
    </div>
  )
}

export default App
