import { FunctionalComponent, h } from 'preact'
import { useEffect } from 'preact/hooks'
import style from './style.css'

const Contact: FunctionalComponent = () => {
    useEffect(() => {
      document.title = 'Contact Psilly'
    }, [])
    return (
        <div class={style.contact}>
            <h1>Contact Psilly</h1>
            <p>Got an idea for psilly? A qualm? Whatever it is, I'd love to hear it! Reach out at <a href="mailto:dylan@psilly.com">dylan@psilly.com</a>.</p>
            <h2>Buying Psilly</h2>
            <p>If you are looking to purchase the Psilly™ brand name or the domain name psilly.com, please note that both are <strong>not for sale</strong>. Please <strong>do not</strong> contact us with sales inquiries or offers.</p>
        </div>
    )
}

export default Contact
