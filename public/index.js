import {
  LocationProvider,
  Router,
  Route,
  ErrorBoundary,
  hydrate,
  prerender as ssr,
} from 'preact-iso'
import Helmet from 'react-helmet'
import Header from './header'
import Footer from './footer'
import NotFound from './pages/_404'
import Home from './pages/home'
import About from './pages/about'
import Privacy from './pages/privacy'
import Terms from './pages/terms'
import Bylaws from './pages/bylaws'
import FAQ from './pages/faq'
import Contact from './pages/contact'
import Join from './pages/join'
import Donate from './pages/donate'
import Experiments from './pages/experiments'
import Chat from './pages/chat'
import Jam from './pages/jam'
import Spinner from './pages/spinner'
import Highness from './pages/highness'
import Art from './pages/art'
import Polygonous from './pages/art/polygonous'
import Meld from './pages/art/meld'
import Circle from './pages/art/circle'
import Squibbo from './pages/art/squibbo'
import GoldenAngleDonut from './pages/art/golden-angle-donut'
import Falls from './pages/art/falls'
import Chillbert from './pages/art/chillbert'
import Develop from './pages/art/develop'
import Quadingle from './pages/art/quadingle'
import OhBézier from './pages/art/oh-bezier'
import TotallyModularFormBro from './pages/art/totally-modular-form-bro'
import Untilted from './pages/art/untilted'
import Lemnisgo from './pages/art/lemnisgo'
import Hyperbollick from './pages/art/hyperbollick'
import Vcock from './pages/art/vcock'
import Gravity from './pages/art/gravity'
import EyeOfNewt from './pages/art/eye-of-newt'
import Atoms from './pages/art/atoms'
import IBall from './pages/art/iball'
import Esch from './pages/art/esch'
import CanvasTemplate from './pages/art/canvas-template'
import WebGLTemplate from './pages/art/webgl-template'
import Loading from './pages/art/loading'
import GridTest from './pages/art/grid-test'
import Page from './pages/page'
import Blog from './pages/blog'
import Sequins from './pages/art/common/sequins'

export function App() {
  return (
    <LocationProvider>
      <Helmet
        htmlAttributes={{ lang: 'en-CA' }}
        title="☯"
        titleTemplate="%s 🍄 Psilly"
        titleAttributes={{ itemProp: 'name', lang: 'en-CA' }}
        meta={[
          {
            name: 'description',
            content:
              'An online community dedicated to psychedelic research, therapy, harm-reduction, and advocacy. Psilly delivers peace of mind through exceptional care and avant-garde advocacy of psychotropic therapies.',
          },
        ]}
        link={[{ rel: 'canonical', href: 'https://psilly.com/' }]}>
        <script type="application/ld+json">{`
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Psilly",
            "legalName" : "Psilly Corporation",
            "url": "https://psilly.com",
            "logo": "https://psilly.com/assets/Psilly.png",
            "foundingDate": "2006",
            "founders": [
              {
              "@type": "Person",
              "name": "Dylan Ferris"
              }
            ],
            "email": "dylan@psilly.com"
        }
    `}</script>
      </Helmet>
      <div class="app">
        <Header />
        <ErrorBoundary>
          <main>
            <Sequins />
            <Router>
              <Route path="/" component={Home} />
              <Route path="/about/" component={About} />
              <Route path="/privacy/" component={Privacy} />
              <Route path="/terms/" component={Terms} />
              <Route path="/bylaws/" component={Bylaws} />
              <Route path="/faq/" component={FAQ} />
              <Route path="/contact/" component={Contact} />
              <Route path="/join/" component={Join} />
              <Route path="/donate/" component={Donate} />
              <Route path="/experiments/" component={Experiments} />
              <Route path="/chat/" component={Chat} />
              <Route path="/jam/" component={Jam} />
              <Route path="/spin/" component={Spinner} />
              <Route path="/sober/" component={Highness} highness="sober" />
              <Route path="/high/" component={Highness} highness="high" />
              <Route
                path="/toohigh/"
                component={Highness}
                highness="too high"
              />
              <Route path="/art/" component={Art} />
              <Route path="/art/polygonous/" component={Polygonous} />
              <Route path="/art/meld/" component={Meld} />
              <Route path="/art/circle/" component={Circle} />
              <Route path="/art/squibbo/" component={Squibbo} />
              <Route
                path="/art/golden-angle-donut/"
                component={GoldenAngleDonut}
              />
              <Route path="/art/falls/" component={Falls} />
              <Route path="/art/chillbert/" component={Chillbert} />
              <Route path="/art/develop/" component={Develop} />
              <Route path="/art/quadingle/" component={Quadingle} />
              <Route path="/art/oh-bezier/" component={OhBézier} />
              <Route
                path="/art/totally-modular-form-bro/"
                component={TotallyModularFormBro}
              />
              <Route path="/art/untilted/" component={Untilted} />
              <Route path="/art/lemnisgo/" component={Lemnisgo} />
              <Route path="/art/hyperbollick/" component={Hyperbollick} />
              <Route path="/art/vcock/" component={Vcock} />
              <Route path="/art/gravity/" component={Gravity} />
              <Route path="/art/iball/" component={IBall} />
              <Route path="/art/esch/" component={Esch} />
              <Route path="/art/eye-of-newt/" component={EyeOfNewt} />
              <Route path="/art/atoms/" component={Atoms} />
              <Route path="/art/canvas-template/" component={CanvasTemplate} />
              <Route path="/art/webgl-template/" component={WebGLTemplate} />
              <Route path="/art/loading/" component={Loading} />
              <Route path="/art/grid-test/" component={GridTest} />
              <Route path="/404/" component={NotFound} />
              <Route path="/blog/:post/" component={Blog} />
              <Route path="/page/:page/" component={Page} />
              <Route path="/:page/" component={Page} />
              <Route default component={NotFound} />
            </Router>
          </main>
        </ErrorBoundary>
        <Footer />
      </div>
    </LocationProvider>
  )
}

hydrate(<App />)

/**
 * @param {import("preact").JSX.IntrinsicAttributes} data
 */
export async function prerender(data) {
  return await ssr(<App {...data} />)
}
