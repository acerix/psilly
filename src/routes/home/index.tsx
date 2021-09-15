import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import { Link } from 'preact-router/match'

const Home: FunctionalComponent = () => {
  return (
    <section class="container">
      <Helmet title="Psilly Belongs You" />
      <div class="px-4 pt-5 my-5 text-center border-bottom">
        <h1 class="h4 fw-bold">🍄 Psilly Belongs You 🍄</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">Enjoy your pstay!</p>
          <p class="mb-4">How are you feeling?</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <Link class="btn btn-outline-secondary btn-lg px-4 me-sm-3" href="/sober/">
              Not high
            </Link>
            <Link class="btn btn-outline-warning btn-lg px-4 me-sm-3" href="/high/">
              High enough
            </Link>
            <Link class="btn btn-outline-danger btn-lg px-4" href="/toohigh/">
              Too high
            </Link>
          </div>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <Link class="btn btn-outline-primary btn-lg px-4 me-sm-3" href="/join/">
              Join
            </Link>
            <Link class="btn btn-outline-success btn-lg px-4 me-sm-3" href="/donate/">
              Donate
            </Link>
          </div>
        </div>
        <div class="overflow-hidden">
          <div class="container">
            <Link href="/art/polygonous/">
              <img src="/assets/art/thumbnails/polygonous.webp" width={300} height={185} class="img-fluid border rounded-3 shadow-lg" alt="Polygonous Thumbnail" loading="lazy" />
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
            <p>Our teams of leading expert scientists and researchers have verified with over 98.89% probability that you should drop acid tonight.  Whoops, that was the <a href="/page/acid/">acid</a> talking.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div>
            <h3 class="fw-bold mb-0">Psychedelic Mushrooms</h3>
            <p>If you are looking for information on cultivation or consumption of species like <em>psilocybe cubensis</em>, this ain't the place!  Seriously, we are not some kind of <a href="https://erowid.org/plants/mushrooms/mushrooms.shtml">reputable psychedelic information resource</a>. Also, chocolate.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div>
            <h3 class="fw-bold mb-0">Psychotropic Pscience</h3>
            <p>Psilly is a non-profit research and educational organization dedicated to developing medical, legal, and cultural contexts for people to benefit from the careful uses of psychedelics, as well as plain-ol' gettin' high.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div>
            <h3 class="fw-bold mb-0">Psychotomimetic Pstocks</h3>
            <p>Why are you <a href="/page/read/">reading</a> this when you probably have a better idea what I mean than I do. What, are you trying to PSYK it TO the man? PSI, please...</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div>
            <h3 class="fw-bold mb-0 text-break">Dimethyltryptamine, Darling</h3>
            <p>A mystical experience that gives you a real, nourishing, and felt sense of the <a href="/page/life/">interconnectedness of life</a>, and can be profoundly transformative.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div>
            <h3 class="fw-bold mb-0">Quantum Psychedelics</h3>
            <p>And a new philosophy emerged called quantum physics, which suggests that the individual's function is to inform and be informed. You really exist only when you're in a field sharing and exchanging information. You create the realities you inhabit.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
