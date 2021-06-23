import { FunctionalComponent, h } from 'preact'
import { Link } from 'preact-router/match'

const Header: FunctionalComponent = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
          <a class="navbar-brand" href="https://psilly.com/">
            Psilly.com 🍄
          </a>
          <span class="navbar-text">
            Relax, get psilly...
          </span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-menu" aria-controls="nav-menu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="nav-menu">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link class="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/page/listen">
                  Listen
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/page/watch">
                  Watch
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/page/read">
                  Read
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/page/play">
                  Play
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/page/talk">
                  Talk
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/art/">
                  Art
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
