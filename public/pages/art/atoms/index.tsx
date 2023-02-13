import { FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import { ArtPlaque, Artwork } from '../meta'
import artworkLibrary from '../library'
import styles from '../canvas-template/style.module.css'
import Atom, { collideAtom, createAtom, drawAtom } from './atom'
import Electron, { createElectron } from './electron'
import ColorGenerator, { Color, colorToCss } from '../common/color-generator'
import { drawParticle, moveParticle, wrapParticle } from './particle'
import elements from './elements'

const MAX_PROTONS = elements.length - 1

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
    for (let c = 0; c < 32; c++) {
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
    ctx.font = '12px monospace'
  }

  const draw = (ctx: CanvasRenderingContext2D): void => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    for (const [index, atom] of Object.entries(atoms)) {
      if (atom.protons === 0) {
        // remove consumed atom
        atoms.splice(+index, 1)
      }
      if (atom.protons > MAX_PROTONS) {
        // explode if too many protons
        atoms.splice(+index, 1)
        for (let c = 0; c < atom.electrons; c++) {
          electrons.push(createElectron(atom.position.x, atom.position.y))
        }
      }
    }
    for (const atom of atoms) {
      if (atom.protons === 0 || atom.protons > MAX_PROTONS) continue
      drawAtom(ctx, atom)
      moveParticle(atom)
      wrapParticle(ctx, atom)
      collideAtom(atom, atoms, electrons)
    }
    for (const electron of electrons) {
      drawParticle(ctx, electron)
      moveParticle(electron)
      wrapParticle(ctx, electron)
    }
    // randomly replenish particles
    while (atoms.length < 69 && Math.random() > 0.99) {
      atoms.push(
        createAtom(
          Math.random() * ctx.canvas.width,
          Math.random() * ctx.canvas.height,
        ),
      )
    }
    while (electrons.length < 420 && Math.random() > 0.97) {
      electrons.push(
        createElectron(
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
      <Canvas init={init} draw={draw} />
    </section>
  )
}

export default Atoms
