import { FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import { ArtPlaque, Artwork } from '../meta'
import artworkLibrary from '../library'
import styles from '../canvas-template/style.module.css'
import Atom, { collideAtom, createAtom, drawAtom } from './atom'
import Electron, { collideElectron, createElectron } from './electron'
import ColorGenerator, { Color, colorToCss } from '../common/color-generator'
import { drawParticle, moveParticle, wrapParticle } from './particle'

const Atoms: FunctionalComponent = () => {
  let atoms: Atom[] = []
  let electrons: Electron[] = []

  const colorGenerator = ColorGenerator({
    mutate: (color: Color): void => {
      for (let i = 0; i < 3; i++) {
        if (Math.random() > 0.5) {
          const d = 1 - 2 * Math.floor(Math.random() * 2)
          color[i] = (color[i] + 256 + d) % 256
        }
      }
    },
  })

  const init = (ctx: CanvasRenderingContext2D): void => {
    atoms = []
    for (let c = 0; c < 16; c++) {
      atoms.push(
        createAtom(
          Math.random() * ctx.canvas.width,
          Math.random() * ctx.canvas.height,
        ),
      )
    }
    electrons = []
    for (let c = 0; c < 32; c++) {
      electrons.push(
        createElectron(
          Math.random() * ctx.canvas.width,
          Math.random() * ctx.canvas.height,
        ),
      )
    }
    ctx.strokeStyle = colorToCss(colorGenerator.next().value as Color)
    ctx.fillStyle = colorToCss(colorGenerator.next().value as Color)
  }

  const draw = (ctx: CanvasRenderingContext2D): void => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    for (const atom of atoms) {
      drawAtom(ctx, atom)
      moveParticle(atom)
      wrapParticle(ctx, atom)
      collideAtom(atom, atoms)
    }
    for (const electron of electrons) {
      drawParticle(ctx, electron)
      moveParticle(electron)
      wrapParticle(ctx, electron)
      collideElectron(electron, atoms)
    }
    if (Math.random() > 0.99) {
      atoms.push(
        createAtom(
          Math.random() * ctx.canvas.width,
          Math.random() * ctx.canvas.height,
        ),
      )
    }
  }

  const art: Artwork = artworkLibrary['atoms']
  return (
    <section class={styles.canvas_frame}>
      <Helmet title={art.title} />
      <div class="d-none">
        <ArtPlaque art={art} />
      </div>
      <Canvas init={init} onResize={init} draw={draw} />
    </section>
  )
}

export default Atoms
