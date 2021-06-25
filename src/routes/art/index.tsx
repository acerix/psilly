import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'

const Art: FunctionalComponent = () => {
  return (
    <section class="container py-5">
      <Helmet title="Art" />
      <h1>Psilly Digital Art Exhibition</h1>
      <div class="row my-4">
        <div class="col-sm-6 col-md-4 mb-4">
          <div class="card">
            <a href="/art/polygons">
              <img src="/assets/art/thumbnails/polygons.png" class="card-img-top" alt="thumbnail" />
            </a>
            <div class="card-body">
              <h5 class="card-title">
                <strong><em>Polygons</em></strong>, 2013
              </h5>
              <p class="card-text"><strong>JavaScript on CanvasRenderingContext2D</strong></p>
              <p class="card-text">Explores the Euclidean nature of linear geometry, from the point of view of a conscious observer, emphasizing the dichotomy of transversal relationism in a post-reactivate triptonia.</p>
              <a href="/art/polygons" class="btn btn-primary">Experience</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 mb-4">
          <div class="card">
            <a href="/art/meld">
              <img src="/assets/art/thumbnails/meld.png" class="card-img-top" alt="thumbnail" />
            </a>
            <div class="card-body">
              <h5 class="card-title">
                <strong><em>Meld</em></strong>, 2016
              </h5>
              <p class="card-text"><strong>JavaScript on WebGLRenderingContext</strong></p>
              <p class="card-text">An examination of permatarian meldation.</p>
              <a href="/art/meld" class="btn btn-primary">Experience</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 mb-4">
          <div class="card">
            <a href="/art/circle">
              <img src="/assets/art/thumbnails/circle.png" class="card-img-top" alt="thumbnail" />
            </a>
            <div class="card-body">
              <h5 class="card-title">
                <strong><em>Circle</em></strong>, 2018
              </h5>
              <p class="card-text"><strong>JavaScript on WebGLRenderingContext</strong></p>
              <p class="card-text">A non-euclidean journey into the regular ellipse.</p>
              <a href="/art/circle" class="btn btn-primary">Experience</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 mb-4">
          <div class="card">
            <a href="/art/golden-angle-donut">
              <img src="/assets/art/thumbnails/golden-angle-donut.png" class="card-img-top" alt="thumbnail" />
            </a>
            <div class="card-body">
              <h5 class="card-title">
                <strong><em>Golden Angle Donut</em></strong>, 2016
              </h5>
              <p class="card-text"><strong>JavaScript on CanvasRenderingContext2D</strong></p>
              <p class="card-text">Draw a straight line, then starting from the end of that line, rotate by the golden angle and draw the same line in that direction.  Continue adding new lines until you have a tasty donut.</p>
              <a href="/art/golden-angle-donut" class="btn btn-primary">Experience</a>
            </div>
          </div>
        </div>
      </div>
      <h2>Artchive</h2>
      <p>Older exhibits may be found in <a href="https://psilly.com/experiments/">experiments</a>.</p>
    </section>
  )
}

export default Art
