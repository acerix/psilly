import { createRef, FunctionalComponent, h } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import {ArtPlaque, Artwork} from '../meta'
import artworkLibrary from '../library'
import style from '../canvas-template/style.css'
import LoadingScreen from '../common/loading-screen'
import { useEffect } from 'preact/hooks'

const RADIUS2 = 1024
const TAU = 2*Math.PI

const IBall: FunctionalComponent = () => {
  const ref = createRef()
  const canvasCenter = [0, 0]
  const resolution = [19, 10]
  const eyes: number[][] = []

  const init = (ctx: CanvasRenderingContext2D): void => {
    canvasCenter[0] = ctx.canvas.width/2
    canvasCenter[1] = ctx.canvas.height/2
    ctx.fillStyle = 'white'
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
    const radius = Math.sqrt(RADIUS2 * Math.sin(frameCount/60)**2)
    for (const [x, y] of eyes) {
      const p = [
        canvasCenter[0] * x * 2,
        canvasCenter[1] * y * 2,
      ]
      const direction = [
        p[0] - canvasCenter[0],
        p[1] - canvasCenter[1]
      ]
      direction[0] = direction[1] = 0
      // const dv = direction[0]**2 + direction[1]**2
      // direction[0] /= dv
      // direction[1] /= dv
      const lookOffset = [
        direction[0],
        direction[1]
      ]
      ctx.beginPath()
      ctx.arc(
        p[0] + lookOffset[0],
        p[1] + lookOffset[1],
        radius,
        0,
        TAU
      )
      ctx.fill()
    }
  }

  useEffect(() => {
    const canvasEl = ref.current as HTMLCanvasElement
    const eyeAttracter = [0, 0]

    const handleMouseMove = (event: MouseEvent): void => {
      console.log(event)
      eyeAttracter[0] = event.clientX
      eyeAttracter[1] = event.clientY
      // const dy = lastMousePosition[1] - event.clientY
      // const flingFactor = 4
      // // left-clicked, translate
      // if (mouseDown&1) {
      //   velocity[0] = dx * flingFactor
      //   velocity[1] = dy * flingFactor
      //   translate[0] += dx
      //   translate[1] -= dy
      //   if (setTranslate) {
      //     setTranslate(translate[0], translate[1])
      //     render()
      //   }
      // }
      // // middle-clicked, scale all axes
      // if (mouseDown&2) {
      //   const f = microZoomFactor**-dy
      //   scale[0] *= f
      //   scale[1] *= f
      //   if (setScale) {
      //     setScale(scale[0], scale[1])
      //     render()
      //   } 
      // }
      // // right-clicked, scale individual axes
      // if (mouseDown&4) {
      //   const zoomTo = [
      //     (lastMousePosition[0] + translate[0]) * scale[0],
      //     (contextHeight - lastMousePosition[1] + translate[1]) * scale[1]
      //   ]
      //   const zoomLastPosition = [
      //     zoomTo[0] / scale[0] - translate[0],
      //     zoomTo[1] / scale[1] - translate[1]
      //   ]
      //   scale[0] *= microZoomFactor**dx
      //   scale[1] *= microZoomFactor**-dy
      //   if (setScale) {
      //     setScale(scale[0], scale[1])
      //   }
      //   const zoomToPosition = [
      //     zoomTo[0] / scale[0] - translate[0],
      //     zoomTo[1] / scale[1] - translate[1]
      //   ]
      //   translate[0] -= zoomLastPosition[0] - zoomToPosition[0] - dx
      //   translate[1] += zoomToPosition[1] - zoomLastPosition[1] - dy
      //   if (setTranslate) {
      //     setTranslate(translate[0], translate[1])
      //   }
      //   render()
      // }
      // lastMousePosition[0] = event.clientX
      // lastMousePosition[1] = event.clientY
    }
    console.log(canvasEl)
    canvasEl.addEventListener('mousemove', handleMouseMove)

    const handleTouchMove = (event: TouchEvent): void => {
      console.log('touch me', event)
      // if (lastTouch1Position[0] > -1) {
      //   if (event.touches.length===1) {
      //     const dx = lastTouch1Position[0] - event.touches[0].pageX
      //     const dy = lastTouch1Position[1] - event.touches[0].pageY
      //     velocity[0] = dx
      //     velocity[1] = dy
      //     translate[0] += dx
      //     translate[1] -= dy
      //     lastTouch2Position[0] = lastTouch2Position[1] = -1
      //     if (setTranslate) {
      //       setTranslate(translate[0], translate[1])
      //       render()
      //     }
      //   }
      //   else {
      //     if (lastTouch2Position[0] > -1) {
      //       const x1 = event.touches[0].pageX
      //       const y1 = event.touches[0].pageY
      //       const x2 = event.touches[1].pageX
      //       const y2 = event.touches[1].pageY
      //       const q1 = (lastTouch1Position[0] - lastTouch2Position[0])**2 + (lastTouch1Position[1] - lastTouch2Position[1])**2
      //       const q2 = (x1 - x2)**2 + (y1 - y2)**2
      //       const zoomModifier = q1 / q2
      //       const touchMidpoint = [
      //         (x1 + x2) / 2,
      //         (y1 + y2) / 2
      //       ]
      //       const zoomTo = [
      //         (touchMidpoint[0] + translate[0]) * scale[0],
      //         (contextHeight - touchMidpoint[1] + translate[1]) * scale[1]
      //       ]
      //       const zoomLastPosition = [
      //         zoomTo[0] / scale[0] - translate[0],
      //         zoomTo[1] / scale[1] - translate[1]
      //       ]
      //       scale[0] *= zoomModifier
      //       scale[1] *= zoomModifier
      //       if (setScale) {
      //         setScale(scale[0], scale[1])
      //       }
      //       const zoomToPosition = [
      //         zoomTo[0] / scale[0] - translate[0],
      //         zoomTo[1] / scale[1] - translate[1]
      //       ]
      //       translate[0] -= zoomLastPosition[0] - zoomToPosition[0]
      //       translate[1] += zoomToPosition[1] - zoomLastPosition[1]
      //       if (setTranslate) {
      //         setTranslate(translate[0], translate[1])
      //       }
      //       render()
      //     }
      //     lastTouch2Position[0] = event.touches[1].pageX
      //     lastTouch2Position[1] = event.touches[1].pageY
      //   }
      // }
      // lastTouch1Position[0] = event.touches[0].pageX
      // lastTouch1Position[1] = event.touches[0].pageY
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