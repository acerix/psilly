import { FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import { Color, colorToCss, randomColorPeriod } from '../common/color-generator'
import { ArtPlaque, Artwork } from '../meta'
import artworkLibrary from '../library'
import styles from '../canvas-template/style.module.css'

import { useEffect } from 'preact/hooks'

const logBase = 10
const zoomFactor = logBase ** (1 / 13)
const microZoomFactor = zoomFactor ** (1 / 32)
const μ = 0.96
let free = true

const Polygonous: FunctionalComponent = () => {
  const sides = 7
  const baseLength = 1 / sides
  let drawRecursions = 0
  let animationFrames = 30
  let growFactor = 1
  const turnAngle = (2 * Math.PI) / sides
  const color: Color = new Uint8Array([0, 0, 0])
  const colorPeriods: number[] = [
    randomColorPeriod(),
    randomColorPeriod(),
    randomColorPeriod(),
  ]
  const rotateIncrement = -0.598
  const translate = [0, 0]
  const scale = [1, 1]
  const velocity = [0, 0]

  const init = (ctx: CanvasRenderingContext2D): void => {
    translate[0] = Math.floor(ctx.canvas.width / 2)
    translate[1] = Math.floor(ctx.canvas.height / 2)
    const maxRadius = Math.sqrt(translate[0] ** 2 + translate[1] ** 2)
    const growBase = 1 / Math.cos(Math.PI / sides)
    while (drawRecursions++) {
      const length = baseLength * growBase ** drawRecursions - baseLength
      if (length > maxRadius) break
    }
    animationFrames =
      Math.floor(
        baseLength * growBase ** drawRecursions -
          baseLength -
          (baseLength * growBase ** (drawRecursions - 1) - baseLength),
      ) * 4
    const growLength = baseLength * growBase ** 2 - baseLength
    const lengthRatio = (baseLength + growLength) / baseLength
    const growRatio =
      animationFrames * (lengthRatio ** (1 / animationFrames ** 2) - 1)
    growFactor = (1 + growRatio / animationFrames) ** animationFrames
  }

  const drawBisectionators = (
    ctx: CanvasRenderingContext2D,
    sideLength: number,
    frameCount: number,
    generation: number,
    recursionsLeft: number,
  ): void => {
    const timePoint = sideLength - frameCount
    let direction = generation % 2 === 0 ? 0 : turnAngle / 2
    let x = generation % 2 === 0 ? translate[0] - sideLength / 2 : translate[0]
    const apothem = sideLength / (2 * Math.tan(Math.PI / sides))
    const circumradius = Math.sqrt(apothem ** 2 + (sideLength / 2) ** 2)
    let y =
      generation % 2 === 0
        ? translate[1] - apothem
        : translate[1] - circumradius
    if (recursionsLeft) {
      drawBisectionators(
        ctx,
        sideLength / Math.cos(Math.PI / sides),
        frameCount,
        generation + 1,
        recursionsLeft - 1,
      )
    }
    for (let i = 0; i < 3; i++) {
      color[i] = Math.round(128 + 127 * Math.sin(timePoint * colorPeriods[i]))
    }
    ctx.strokeStyle = colorToCss(color)
    ctx.beginPath()
    ctx.moveTo(x, y)
    for (let i = 0; i < sides; i++) {
      x += sideLength * Math.cos(direction)
      y += sideLength * Math.sin(direction)
      ctx.lineTo(x, y)
      direction += turnAngle
    }
    ctx.stroke()
  }

  const draw = (ctx: CanvasRenderingContext2D, frameCount: number): void => {
    const frameNumber = frameCount % animationFrames
    const sideLength = baseLength * Math.pow(growFactor, frameNumber)
    drawBisectionators(ctx, sideLength, frameCount, 0, drawRecursions)

    // slow down due to friction
    velocity[0] *= μ
    velocity[1] *= μ

    // glide
    if (free) {
      translate[0] += velocity[0]
      translate[1] -= velocity[1]
    }

    // tate
    if (rotateIncrement) {
      // @todo matrixify
      ctx.translate(translate[0], translate[1])
      ctx.rotate(rotateIncrement)
      ctx.translate(-translate[0], -translate[1])
    }
  }

  const setTranslate = (x: number, y: number): void => {
    translate[0] = x
    translate[1] = y
  }

  const setScale = (x: number, y: number): void => {
    scale[0] = x
    scale[1] = y
  }

  useEffect(() => {
    let mouseDown = 0
    let renderCallbackID: number
    const lastMousePosition = [0, 0]

    const handleMouseDown = (event: MouseEvent): boolean => {
      mouseDown |= 1 << event.button
      lastMousePosition[0] = event.clientX
      lastMousePosition[1] = event.clientY
      velocity[0] = velocity[1] = 0
      free = !(mouseDown & 1)
      event.preventDefault()
      return false
    }
    window.addEventListener('mousedown', handleMouseDown)

    const handleMouseUp = (event: MouseEvent): boolean => {
      mouseDown ^= 1 << event.button
      event.preventDefault()
      free = !(mouseDown & 1)
      return false
    }
    window.addEventListener('mouseup', handleMouseUp)

    const handleContextMenu = (event: MouseEvent): boolean => {
      event.preventDefault()
      return false
    }
    window.addEventListener('contextmenu', handleContextMenu)

    const handleMouseMove = (event: MouseEvent): void => {
      const dx = lastMousePosition[0] - event.clientX
      const dy = lastMousePosition[1] - event.clientY
      // left-clicked
      if (mouseDown & 1) {
        velocity[0] = dx
        velocity[1] = dy
        translate[0] += dx
        translate[1] -= dy
        if (setTranslate) {
          setTranslate(translate[0], translate[1])
        }
      }
      // middle-clicked, scale all axes
      if (mouseDown & 2) {
        const f = dx + dy > 0 ? microZoomFactor : 1 / microZoomFactor
        scale[0] *= f
        scale[1] *= f
        if (setScale) {
          setScale(scale[0], scale[1])
        }
      }
      // right-clicked, scale individual axes
      if (mouseDown & 4) {
        if (dx) scale[0] *= dx > 0 ? microZoomFactor : 1 / microZoomFactor
        if (dy) scale[1] *= dy > 0 ? microZoomFactor : 1 / microZoomFactor
        if (setScale) {
          setScale(scale[0], scale[1])
        }
      }
      lastMousePosition[0] = event.clientX
      lastMousePosition[1] = event.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    const handleTouchDown = (event: TouchEvent): boolean => {
      lastMousePosition[0] = event.touches[0].pageX
      lastMousePosition[1] = event.touches[0].pageY
      velocity[0] = velocity[1] = 0
      free = false
      return false
    }
    window.addEventListener('touchstart', handleTouchDown)

    const handleTouchUp = (event: TouchEvent): boolean => {
      void event
      free = true
      return false
    }
    window.addEventListener('touchend', handleTouchUp)

    const handleTouchMove = (event: TouchEvent): void => {
      if (event.touches.length === 1) {
        const dx = lastMousePosition[0] - event.touches[0].pageX
        const dy = lastMousePosition[1] - event.touches[0].pageY
        velocity[0] = dx
        velocity[1] = dy
        translate[0] += dx
        translate[1] -= dy
        if (setTranslate) {
          setTranslate(translate[0], translate[1])
        }
        lastMousePosition[0] = event.touches[0].pageX
        lastMousePosition[1] = event.touches[0].pageY
      } else if (event.touches.length === 2) {
        console.log(event.touches)
      } else {
        console.error('Insufficient holes')
      }
    }
    window.addEventListener('touchmove', handleTouchMove)

    const handleWheel = (event: WheelEvent): void => {
      const zoomModifier = event.deltaY > 0 ? zoomFactor : 1 / zoomFactor
      scale[0] *= zoomModifier
      scale[1] *= zoomModifier
      if (setScale) {
        setScale(scale[0], scale[1])
      }
    }
    window.addEventListener('wheel', handleWheel)

    return (): void => {
      window.cancelAnimationFrame(renderCallbackID)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('contextmenu', handleContextMenu)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchstart', handleTouchDown)
      window.removeEventListener('touchend', handleTouchUp)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  const art: Artwork = artworkLibrary['polygonous']
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

export default Polygonous
