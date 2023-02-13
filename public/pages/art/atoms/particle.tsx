import Vec2 from './vec2'

interface Particle {
  position: Vec2
  velocity: Vec2
}

export function drawParticle(
  ctx: CanvasRenderingContext2D,
  particle: Particle,
) {
  ctx.fillStyle = '#bbe'
  // ctx.beginPath()
  // ctx.arc(particle.position.x, particle.position.y, 1, 0, 2 * Math.PI, false)
  // ctx.fill()
  ctx.fillRect(particle.position.x - 1, particle.position.y - 1, 2, 2)
}

export function moveParticle(particle: Particle) {
  particle.position.x += particle.velocity.x
  particle.position.y += particle.velocity.y

  const uncertainty = (0.5 - Math.random()) / 16
  const cos = Math.cos(uncertainty)
  const sin = Math.sin(uncertainty)
  const x = particle.velocity.x * cos - particle.velocity.y * sin
  const y = particle.velocity.x * sin + particle.velocity.y * cos
  particle.velocity.x = x + uncertainty
  particle.velocity.y = y + uncertainty
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
