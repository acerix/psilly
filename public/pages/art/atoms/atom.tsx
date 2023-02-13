import Electron from './electron'
import elements from './elements'
import Particle from './particle'

interface Atom extends Particle {
  protons: number
  electrons: number
}

const TAU = 2 * Math.PI

let pot = 0

export function createAtom(x: number, y: number): Atom {
  const speed = 0.5 - Math.random()
  const direction = Math.random() * TAU
  return {
    position: {
      x: x,
      y: y,
    },
    velocity: {
      x: speed * Math.sin(direction),
      y: speed * Math.cos(direction),
    },
    protons: 1,
    electrons: 1,
  }
}

export function labelAtom(atom: Atom): string {
  if (!(atom.protons in elements)) {
    console.log(atom.protons)
  }
  const s = elements[atom.protons].symbol
  // const charge = atom.protons - atom.electrons
  // if (charge) {
  //   if (charge > 0) {
  //     s += '+'
  //   }
  //   s += charge
  // }
  return s
}

// convert int(0-255) to hex colour code
function chex(i: number) {
  return i.toString(16).padStart(2, '0')
}

export function fillStyleForAtom(atom: Atom): string {
  // neutral charge is white, red for positive, blue for negative
  const c = 16 * (atom.protons - atom.electrons)
  const r = c < 0 ? Math.max(255 + c, 0) : 255
  const b = c > 0 ? Math.max(255 - c, 0) : 255
  const g = Math.min(r, b)
  return `#${chex(r)}${chex(g)}${chex(b)}`
}

export function drawAtom(ctx: CanvasRenderingContext2D, atom: Atom) {
  pot += 0.004
  ctx.fillStyle = fillStyleForAtom(atom)
  ctx.beginPath()
  ctx.arc(atom.position.x, atom.position.y, atom.protons, 0, TAU, false)
  ctx.fill()
  ctx.fillText(
    labelAtom(atom),
    atom.position.x + atom.protons + 2,
    atom.position.y + 4,
  )
  ctx.fillStyle = '#bbe'
  for (let c = 0; c < atom.electrons; c++) {
    let x = atom.position.x
    let y = atom.position.y
    const s = 2 + Math.ceil((c - 2) / 8)
    switch (c) {
      case 0:
        x += 2 * atom.protons * Math.sin(pot)
        y += 2 * atom.protons * Math.cos(pot)
        break
      case 1:
        x -= 2 * atom.protons * Math.sin(pot)
        y -= 2 * atom.protons * Math.cos(pot)
        break
      case 2:
        x += 3 * atom.protons * Math.cos(pot + 2)
        y += 3 * atom.protons * Math.sin(pot + 2)
        break
      case 3:
        x -= 3 * atom.protons * Math.cos(pot + 2)
        y -= 3 * atom.protons * Math.sin(pot + 2)
        break
      case 4:
        x += 3 * atom.protons * Math.sin(pot + 2)
        y += 3 * atom.protons * Math.cos(pot + 2)
        break
      case 5:
        x -= 3 * atom.protons * Math.sin(pot + 2)
        y -= 3 * atom.protons * Math.cos(pot + 2)
        break
      case 6:
        x += 3 * atom.protons * Math.sin(pot + 2)
        break
      case 7:
        y -= 3 * atom.protons * Math.cos(pot + 2)
        break
      case 8:
        x -= 3 * atom.protons * Math.sin(pot + 2)
        break
      case 9:
        y += 3 * atom.protons * Math.cos(pot + 2)
        break
      default:
        switch (c % 8) {
          case 0:
            x += s * atom.protons * Math.sin(pot + c)
            y += s * atom.protons * Math.cos(pot + c)
            break
          case 1:
            x -= s * atom.protons * Math.sin(pot + c)
            y -= s * atom.protons * Math.cos(pot + c)
            break
          case 2:
            x += s * atom.protons * Math.cos(pot + c)
            y += s * atom.protons * Math.sin(pot + c)
            break
          case 3:
            x -= s * atom.protons * Math.cos(pot + c)
            y -= s * atom.protons * Math.sin(pot + c)
            break
          case 4:
            x += s * atom.protons * Math.sin(pot + c)
            break
          case 5:
            y += s * atom.protons * Math.cos(pot + c)
            break
          case 6:
            x += s * atom.protons * Math.cos(pot + c)
            break
          case 7:
            y += s * atom.protons * Math.sin(pot + c)
            break
        }
    }
    // as circle:
    // ctx.beginPath()
    // ctx.arc(x, y, 1, 0, TAU, false)
    // ctx.fill()

    // as square:
    ctx.fillRect(x - 1, y - 1, 2, 2)
  }
}

export function collideAtom(atom: Atom, atoms: Atom[], electrons: Electron[]) {
  for (const particle of atoms) {
    if (particle.protons === 0) continue
    if (particle !== atom) {
      // if touching, ie. distance between centres less than radiuses
      if (
        Math.pow(particle.position.x - atom.position.x, 2) +
          Math.pow(particle.position.y - atom.position.y, 2) <=
        Math.pow(particle.protons + atom.protons, 2)
      ) {
        // consume
        const weight = particle.protons / atom.protons
        atom.velocity.x += particle.velocity.x * weight
        atom.velocity.y += particle.velocity.y * weight
        atom.position.x = (particle.position.x + atom.position.x) / 2
        atom.position.y = (particle.position.y + atom.position.y) / 2
        atom.protons += particle.protons
        atom.electrons += particle.electrons
        particle.protons = 0
      }
    }
  }
  for (const [index, particle] of Object.entries(electrons)) {
    // if touching
    if (
      Math.pow(particle.position.x - atom.position.x, 2) +
        Math.pow(particle.position.y - atom.position.y, 2) <=
      Math.pow(atom.protons + 1, 2)
    ) {
      // consume
      electrons.splice(+index, 1)
      atom.electrons += 1
    }
  }
}

export default Atom
