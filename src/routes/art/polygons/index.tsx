import { FunctionalComponent, h } from 'preact'
import { useEffect } from 'preact/hooks'
import style from './style.css'

const Polygons: FunctionalComponent = () => {
    useEffect(() => {
      document.title = 'Polygons | Dylan Ferris 2021 | Digital Art Exhibit'
    }, [])
    return (
        <div class={style.polygons}>
            ⬡
        </div>
    )
}

export default Polygons
