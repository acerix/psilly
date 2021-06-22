import { FunctionalComponent, h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import style from './style.css'

const Art: FunctionalComponent = () => {
    useEffect(() => {
      document.title = 'Digital Art Exhibits'
    }, [])
    return (
        <div class={style.art}>
            <h1>Digital Art Exhibits</h1>
            <ul>
                <li>
                    <a href="/art/polygons">
                        Polygons
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Art
