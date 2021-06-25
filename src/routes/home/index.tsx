import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import { Link } from 'preact-router/match'

const Home: FunctionalComponent = () => {
  return (
    <section class="container">
      <Helmet title="Welcome!" />
      <div class="px-4 pt-5 my-5 text-center border-bottom">
        <h1 class="display-4 fw-bold">🍄 Psilly Belongs You 🍄</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">Please enjoy your stay!</p>
          <p class="mb-4">How are you feeling?</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <Link class="btn btn-outline-secondary btn-lg px-4 me-sm-3" href="/sober">
              I'm not high
            </Link>
            <Link class="btn btn-outline-warning btn-lg px-4 me-sm-3" href="/high">
              I'm high enough
            </Link>
            <Link class="btn btn-outline-danger btn-lg px-4" href="/toohigh">
              I'm too high
            </Link>
          </div>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <Link class="btn btn-outline-primary btn-lg px-4 me-sm-3" href="/join">
              Join
            </Link>
            <Link class="btn btn-outline-success btn-lg px-4 me-sm-3" href="/donate">
              Donate
            </Link>
          </div>
        </div>
        <div class="overflow-hidden">
          <div class="container px-5">
            <Link href="/art/polygons">
              <img src="/assets/art/thumbnails/polygons.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="polygons" loading="lazy" />
            </Link>
          </div>
        </div>
      </div>
      <h2 class="pb-2 border-bottom">Marketing Fluff</h2>
      <p>Please stop reading this page if you are a human or other conscious being.  The remaining text is only intended for autonomous consumption and may cause cognitive deterioration if interpreted by conscious, or even semi-conscious beings.</p>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        <div class="col d-flex align-items-start">
          <div>
            <h3 class="fw-bold mb-0">Exploitable Gullibility</h3>
            <p>97% of agents specializing in marketing will believe arbitrary statistics which could totally just be made up.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div>
            <h3 class="fw-bold mb-0">Redundancy at it's Best</h3>
            <p>Why <em>innovate</em> when you can <em>emulate</em>?<br />Let our team of experienced plagiarizers "copy-pasta" your way to victory.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div>
            <h3 class="fw-bold mb-0">Market Research</h3>
            <p>Our teams of leading expert scientists and researchers have verified with over 99.89% probability that you should drop acid tonight.  Whoops, that was the acid talking.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div>
            <h3 class="fw-bold mb-0">Psychedelic Mushrooms</h3>
            <p>If you are looking for information on cultivation or consumption of species like <em>psilocybe cubensis</em>, you've come to the wrong place!  Seriously, we are not some information resource, you should probably check out a reputable site like <a href="https://erowid.org/plants/mushrooms/mushrooms.shtml">Erowid</a>.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div>
            <h3 class="fw-bold mb-0">Psychotropic Science</h3>
            <p>Psilly is a non-profit research and educational organization that develops medical, legal, and cultural contexts for people to benefit from the careful uses of psychedelics.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div>
            <h3 class="fw-bold mb-0">Psychotomimetic Stocks</h3>
            <p>Why are you reading this when you probably have a better idea what I mean than I do. What, are you trying to PSYK it TO the man? PSI, please...</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div>
            <h3 class="fw-bold mb-0">Dimethyltryptamine, Darling</h3>
            <p>A mystical experience that gives you a real, nourishing, and felt sense of the interconnectedness of life, and can be profoundly transformative.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div>
            <h3 class="fw-bold mb-0">Quantum Psychedelics</h3>
            <p>And a new philosophy emerged called quantum physics, which suggest that the individual's function is to inform and be informed. You really exist only when you're in a field sharing and exchanging information. You create the realities you inhabit.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
