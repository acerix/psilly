import Particle from './particle'

type Electron = Particle

export function createElectron(x: number, y: number): Electron {
  const speed = 8 - 4 * Math.random()
  const direction = Math.random() * 2 * Math.PI
  return {
    position: {
      x: x,
      y: y,
    },
    velocity: {
      x: speed * Math.sin(direction),
      y: speed * Math.cos(direction),
    },
  }
}

export default Electron
