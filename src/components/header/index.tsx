import { FunctionalComponent, h } from 'preact'
import { useState } from 'preact/hooks'
import { Link } from 'preact-router/match'

const Header: FunctionalComponent = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)

/*
  constructor(props) {
    super(props)
    this.state = {
      menu: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu })
  }

  render() {
  const show = (this.state.menu) ? "show" : ""

*/
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
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-menu" aria-controls="nav-menu" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
            <span class="navbar-toggler-icon" />
          </button>
          <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="nav-menu">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                <Link class="nav-link" href="/" activeClassName="active">
                  Home
                </Link>
              </li>
              <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                <Link class="nav-link" href="/art/" activeClassName="active">
                  Art
                </Link>
              </li>
              <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                <Link class="nav-link" href="/page/listen" activeClassName="active">
                  Listen
                </Link>
              </li>
              <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                <Link class="nav-link" href="/page/watch" activeClassName="active">
                  Watch
                </Link>
              </li>
              <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                <Link class="nav-link" href="/page/read" activeClassName="active">
                  Read
                </Link>
              </li>
              <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                <Link class="nav-link" href="/page/play" activeClassName="active">
                  Play
                </Link>
              </li>
              <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                <Link class="nav-link" href="/page/talk" activeClassName="active">
                  Talk
                </Link>
              </li>
              <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                <Link class="nav-link" href="/chat" activeClassName="active">
                  Chat
                </Link>
              </li>
              <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                <Link class="nav-link" href="/about" activeClassName="active">
                  About
                </Link>
              </li>
              <li class="nav-item" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                <Link class="nav-link" href="/contact" activeClassName="active">
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
