import { FunctionalComponent, h } from 'preact'
import { useEffect } from 'preact/hooks'
import { Link } from 'preact-router/match'
import style from './style.css'

const NotFound: FunctionalComponent = () => {
    useEffect(() => {
      document.title = 'Not Found'
    }, [])
    return (
        <div class={style.notfound}>
            <h1>Page Not Found &mdash; Error 404</h1>
            <p>Sorry, we couldn't find the page you're looking for.</p>
            <Link href="/">
                Back to Home
            </Link>
        </div>
    )
}

export default NotFound
