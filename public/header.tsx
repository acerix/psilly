import { useState } from 'preact/hooks'

export default function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)
  const handleNavCollapse = (): void => setIsNavCollapsed(!isNavCollapsed)
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="/">
            Psilly.com{' '}
            <span role="img" aria-label="psychedelic mushroom">
              🍄
            </span>
          </a>
          <span class="navbar-text text-white">Relax, get psilly...</span>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav-menu"
            aria-controls="nav-menu"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}>
            <span class="navbar-toggler-icon" />
          </button>
          <div
            class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
            id="nav-menu">
            <ul class="navbar-nav ms-auto">
              <li
                class="nav-item"
                data-bs-toggle="collapse"
                data-bs-target="#nav-menu">
                <a
                  class="nav-link text-white"
                  href="https://puff.psilly.com/login"
                  onClick={handleNavCollapse}>
                  Login
                </a>
              </li>
              <li
                class="nav-item"
                data-bs-toggle="collapse"
                data-bs-target="#nav-menu">
                <a
                  class="nav-link text-white"
                  href="/art/"
                  onClick={handleNavCollapse}>
                  Art
                </a>
              </li>
              <li
                class="nav-item"
                data-bs-toggle="collapse"
                data-bs-target="#nav-menu">
                <a
                  class="nav-link text-white"
                  href="/listen/"
                  onClick={handleNavCollapse}>
                  Listen
                </a>
              </li>
              <li
                class="nav-item"
                data-bs-toggle="collapse"
                data-bs-target="#nav-menu">
                <a
                  class="nav-link text-white"
                  href="/watch/"
                  onClick={handleNavCollapse}>
                  Watch
                </a>
              </li>
              <li
                class="nav-item"
                data-bs-toggle="collapse"
                data-bs-target="#nav-menu">
                <a
                  class="nav-link text-white"
                  href="/read/"
                  onClick={handleNavCollapse}>
                  Read
                </a>
              </li>
              <li
                class="nav-item"
                data-bs-toggle="collapse"
                data-bs-target="#nav-menu">
                <a
                  class="nav-link text-white"
                  href="/play/"
                  onClick={handleNavCollapse}>
                  Play
                </a>
              </li>
              <li
                class="nav-item"
                data-bs-toggle="collapse"
                data-bs-target="#nav-menu">
                <a
                  class="nav-link text-white"
                  href="/talk/"
                  onClick={handleNavCollapse}>
                  Talk
                </a>
              </li>
              <li
                class="nav-item"
                data-bs-toggle="collapse"
                data-bs-target="#nav-menu">
                <a
                  class="nav-link text-white"
                  href="/chat/"
                  onClick={handleNavCollapse}>
                  Chat
                </a>
              </li>
              <li
                class="nav-item"
                data-bs-toggle="collapse"
                data-bs-target="#nav-menu">
                <a
                  class="nav-link text-white"
                  href="/jam/"
                  onClick={handleNavCollapse}>
                  Jam
                </a>
              </li>
              <li
                class="nav-item"
                data-bs-toggle="collapse"
                data-bs-target="#nav-menu">
                <a
                  class="nav-link text-white"
                  href="/faq/"
                  onClick={handleNavCollapse}>
                  FAQ
                </a>
              </li>
              <li
                class="nav-item"
                data-bs-toggle="collapse"
                data-bs-target="#nav-menu">
                <a
                  class="nav-link text-white"
                  href="/about/"
                  onClick={handleNavCollapse}>
                  About
                </a>
              </li>
              <li
                class="nav-item"
                data-bs-toggle="collapse"
                data-bs-target="#nav-menu">
                <a
                  class="nav-link text-white"
                  href="/contact/"
                  onClick={handleNavCollapse}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
