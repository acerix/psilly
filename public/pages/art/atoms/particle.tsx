import Vec2 from './vec2'

interface Particle {
  position: Vec2
  velocity: Vec2
}

export function drawParticle(
  ctx: CanvasRenderingContext2D,
  particle: Particle,
) {
  ctx.beginPath()
  ctx.arc(particle.position.x, particle.position.y, 1, 0, 2 * Math.PI, false)
  ctx.fill()
}

export function moveParticle(particle: Particle) {
  particle.position.x += particle.velocity.x
  particle.position.y += particle.velocity.y
}

export function wrapParticle(
  ctx: CanvasRenderingContext2D,
  particle: Particle,
) {
  if (particle.position.x < 0 - 0.5) {
    particle.position.x += ctx.canvas.width
  } else if (particle.position.x > ctx.canvas.width + 0.5) {
    particle.position.x -= ctx.canvas.width
  }
  if (particle.position.y < 0 - 0.5) {
    particle.position.y += ctx.canvas.height
  } else if (particle.position.y > ctx.canvas.height + 0.5) {
    particle.position.y -= ctx.canvas.height
  }
}

export default Particle
