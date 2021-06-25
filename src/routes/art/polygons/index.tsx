import { FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
// import 'three-elements'
import style from './style.css'

const Polygons: FunctionalComponent = () => {

  return (
    <section class={style.polygons}>
      <Helmet title="Polygons" />
      <iframe src="https://psilly.com/experiments/polygons.html" />
    </section>
  )
  /*
  return (
    <section class={style.polygons}>
      <Helmet title="Polygons" />
      <three-game autorender>
        <three-scene background-color="#000">
          <three-mesh scale="4" tick="object.rotation.x = object.rotation.y += 0.013">
            <three-dodecahedron-buffer-geometry />
            <three-mesh-standard-material
              color="green"
              metalness="0.88"
              roughness="0.69"
            />
          </three-mesh>
          <three-ambient-light intensity="0.3" />
          <three-directional-light
            intensity="0.7"
            position="21, 42, 69"
            cast-shadow
          />
        </three-scene>
      </three-game>
    </section>
  )
  */
}

export default Polygons
