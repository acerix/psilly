import { FunctionalComponent, h } from 'preact'
import { Link } from 'preact-router/match'
import style from './style.css'

function getYear() {
    return new Date().getFullYear()
}

const Footer: FunctionalComponent = () => {

    return (
        <footer class={style.footer}>
            <p>© {getYear()} Psilly Corporation. Psilly™ is a trademark of Psilly Corporation. All Rights Reserved.</p>
            <a target="_blank" href="https://github.com/acerix/psilly">&lt;sauce/&gt;</a>
        </footer>
    )
}

export default Footer
