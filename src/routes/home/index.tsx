import { FunctionalComponent, h } from 'preact'
import { useEffect } from 'preact/hooks'
import style from './style.css'

const Home: FunctionalComponent = () => {
    useEffect(() => {
      document.title = 'Welcome to Psilly!'
    }, [])
    return (
        <div class={style.home}>
            <h1>Welcome to psilly pspace</h1>
            <p>Please enjoy your stay.</p>
        </div>
    )
}

export default Home
