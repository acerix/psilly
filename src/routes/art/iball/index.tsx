import { createRef, FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import {ArtPlaque, Artwork} from '../meta'
import artworkLibrary from '../library'
import style from '../canvas-template/style.css'
import LoadingScreen from '../common/loading-screen'
import { useEffect } from 'preact/hooks'

const SCLERA_RADIUS = 16
const PUPIL_RADIUS = 12
const PUPIL_TRAVEL_DISTANCE = SCLERA_RADIUS - PUPIL_RADIUS
const TAU = 2*Math.PI

const IBall: FunctionalComponent = () => {
  const ref = createRef()
  const canvasCenter = [0, 0]
  const eyeAttracter = [0, 0]
  const resolution = [19, 10]
  const eyes: number[][] = []

  const init = (ctx: CanvasRenderingContext2D): void => {
    eyeAttracter[0] = canvasCenter[0] = ctx.canvas.width/2
    eyeAttracter[1] = canvasCenter[1] = ctx.canvas.height/2
    resolution[0] = Math.floor(canvasCenter[0] / SCLERA_RADIUS)
    resolution[1] = Math.floor(canvasCenter[1] / SCLERA_RADIUS)
    eyes.length = 0
    for (let y=0; y<=resolution[1]; y++) {
      for (let x=0; x<=resolution[0]; x++) {
        eyes.push([
          x / resolution[0],
          y / resolution[1]
        ])
      }
    }
  }

  const draw = (ctx: CanvasRenderingContext2D, frameCount: number): void => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    for (const [x, y] of eyes) {
      const p = [
        canvasCenter[0] * x * 2,
        canvasCenter[1] * y * 2,
      ]

      // sclera
      ctx.fillStyle = 'white'
      ctx.beginPath()
      ctx.arc(
        p[0],
        p[1],
        SCLERA_RADIUS,
        0,
        TAU
      )
      ctx.fill()

      // pupil
      const lookOffset = [
        eyeAttracter[0] - p[0],
        eyeAttracter[1] - p[1]
      ]
      const attractorDistance = Math.sqrt(lookOffset[0]**2 + lookOffset[1]**2)
      if (attractorDistance > PUPIL_TRAVEL_DISTANCE) {
        const dv = PUPIL_TRAVEL_DISTANCE / attractorDistance
        lookOffset[0] *= dv
        lookOffset[1] *= dv
      }
      ctx.fillStyle = 'black'
      ctx.beginPath()
      ctx.arc(
        p[0] + lookOffset[0],
        p[1] + lookOffset[1],
        PUPIL_RADIUS,
        0,
        TAU
      )
      ctx.fill()
    }
  }

  useEffect(() => {
    const canvasEl = ref.current.base as HTMLCanvasElement

    const handleMouseMove = (event: MouseEvent): void => {
      eyeAttracter[0] = event.clientX
      eyeAttracter[1] = event.clientY
    }
    canvasEl.addEventListener('mousemove', handleMouseMove)

    const handleTouchMove = (event: TouchEvent): void => {

      eyeAttracter[0] = event.touches[0].pageX
      eyeAttracter[1] = event.touches[0].pageY
    }
    canvasEl.addEventListener('touchmove', handleTouchMove)

    return (): void => {
      canvasEl.removeEventListener('mousemove', handleMouseMove)
      canvasEl.removeEventListener('touchmove', handleTouchMove)
    }

  }, [ref])

  const art: Artwork = artworkLibrary['iball']
  return (
    <section class={style.canvas_frame}>
      <Helmet><title>{art.title}</title></Helmet>
      <div class="d-none"><ArtPlaque art={art} /></div>
      {process.env.NODE_ENV === 'production' && <LoadingScreen />}
      <Canvas ref={ref} init={init} onResize={init} draw={draw} />
    </section>
  )
}

export default IBall