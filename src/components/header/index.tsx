import { FunctionalComponent, h } from 'preact'
import { Link } from 'preact-router/match'
import style from './style.css'

const Header: FunctionalComponent = () => {
    return (
        <header class={style.header}>
            <h1><a href="https://psilly.com/">Psilly.com 🍄</a></h1>
            <p>Relax, get psilly...</p>
            <nav>
                <Link activeClassName={style.active} href="/">
                    Home
                </Link>
                <Link href="/page/listen">
                    Listen
                </Link>
                <Link href="/page/watch">
                    Watch
                </Link>
                <Link href="/page/read">
                    Read
                </Link>
                <Link href="/page/play">
                    Play
                </Link>
                <Link href="/page/talk">
                    Talk
                </Link>
                <Link activeClassName={style.active} href="/art">
                    Art (new)
                </Link>
                <Link href="/experiments/">
                    Art (archives)
                </Link>
                <Link activeClassName={style.active} href="/about">
                    About
                </Link>
                <Link activeClassName={style.active} href="/contact">
                    Contact
                </Link>
            </nav>
        </header>
    )
}

export default Header
