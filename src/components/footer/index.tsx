import { FunctionalComponent, h } from 'preact'
import style from './style.css'

function getYear (): number {
    return new Date().getFullYear()
}

const Footer: FunctionalComponent = () => {
    return (
        <footer class={style.footer}>
            <p>© {getYear()} Psilly Corporation. Psilly™ is a trademark of Psilly Corporation. All Rights Reserved.</p>
            <a target="_blank" rel="noreferrer" href="https://github.com/acerix/psilly">&lt;sauce/&gt;</a>
        </footer>
    )
}

export default Footer
