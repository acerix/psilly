import { FunctionalComponent, h } from 'preact'
import { useState } from 'preact/hooks'
import { Link } from 'preact-router/match'

const Header: FunctionalComponent = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)
  const handleNavCollapse = (): void => setIsNavCollapsed(!isNavCollapsed)
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar bg-primary">
        <div class="container">
          <a class="navbar-brand" href="https://psilly.com/">
            Psilly.com 🍄
          </a>
          <span class="navbar-text">
            Relax, get psilly...
          </span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-menu" aria-controls="nav-menu" aria-expanded={!isNavCollapsed} aria-label="Toggle navigation" onClick={handleNavCollapse}>
            <span class="navbar-toggler-icon" />
          </button>
          <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="nav-menu">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                <Link class="nav-link" href="/" activeClassName="active" onClick={handleNavCollapse}>
                  Home
                </Link>
              </li>
              <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                <Link class="nav-link" href="/art/" activeClassName="active" onClick={handleNavCollapse}>
                  Art
                </Link>
              </li>
              <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                <Link class="nav-link" href="/page/listen/" activeClassName="active" onClick={handleNavCollapse}>
                  Listen
                </Link>
              </li>
              <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                <Link class="nav-link" href="/page/watch/" activeClassName="active" onClick={handleNavCollapse}>
                  Watch
                </Link>
              </li>
              <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                <Link class="nav-link" href="/page/read/" activeClassName="active" onClick={handleNavCollapse}>
                  Read
                </Link>
              </li>
              <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                <Link class="nav-link" href="/page/play/" activeClassName="active" onClick={handleNavCollapse}>
                  Play
                </Link>
              </li>
              <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                <Link class="nav-link" href="/page/talk/" activeClassName="active" onClick={handleNavCollapse}>
                  Talk
                </Link>
              </li>
              <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                <Link class="nav-link" href="/chat/" activeClassName="active" onClick={handleNavCollapse}>
                  Chat
                </Link>
              </li>
              <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                <Link class="nav-link" href="/jam/" activeClassName="active" onClick={handleNavCollapse}>
                  Jam
                </Link>
              </li>
              <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                <Link class="nav-link" href="/about/" activeClassName="active" onClick={handleNavCollapse}>
                  About
                </Link>
              </li>
              <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                <Link class="nav-link" href="/contact/" activeClassName="active" onClick={handleNavCollapse}>
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
