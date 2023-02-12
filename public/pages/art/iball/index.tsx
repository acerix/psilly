import { createRef, FunctionalComponent } from 'preact'
import Helmet from 'react-helmet'
import Canvas from '../common/canvas'
import { ArtPlaque, Artwork } from '../meta'
import artworkLibrary from '../library'
import styles from '../canvas-template/style.module.css'

import LoadingScreen from '../common/loading-screen'
import { useEffect } from 'preact/hooks'
// import * as faceapi from 'face-api.js' // @todo fix error on build... hack for now: find "e.replace(" in "node_modules/face-api.js/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js" and replace "e" with an empty string

const SCLERA_RADIUS = 32
const PUPIL_RADIUS = 24
const PUPIL_TRAVEL_DISTANCE = 6
const TAU = 2 * Math.PI

const IBall: FunctionalComponent = () => {
  const ref = createRef()
  const videoRef = createRef()
  const canvasCenter = [0, 0]
  const eyeAttracter = [0, 0]
  const resolution = [19, 10]
  const eyes: number[][] = []
  let attractorZDiv = 1

  const init = (ctx: CanvasRenderingContext2D): void => {
    eyeAttracter[0] = canvasCenter[0] = ctx.canvas.width / 2
    eyeAttracter[1] = canvasCenter[1] = ctx.canvas.height / 2
    resolution[0] = Math.floor(canvasCenter[0] / SCLERA_RADIUS)
    resolution[1] = Math.floor(canvasCenter[1] / SCLERA_RADIUS)
    eyes.length = 0
    for (let y = 0; y <= resolution[1]; y++) {
      for (let x = 0; x <= resolution[0]; x++) {
        eyes.push([x / resolution[0], y / resolution[1]])
      }
    }
  }

  const draw = (ctx: CanvasRenderingContext2D): void => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    for (const [x, y] of eyes) {
      const p = [canvasCenter[0] * x * 2, canvasCenter[1] * y * 2]

      // sclera
      ctx.fillStyle = 'white'
      ctx.beginPath()
      ctx.arc(p[0], p[1], SCLERA_RADIUS, 0, TAU)
      ctx.fill()

      // pupil
      const lookOffset = [eyeAttracter[0] - p[0], eyeAttracter[1] - p[1]]
      const attractorDistance = Math.sqrt(
        lookOffset[0] ** 2 + lookOffset[1] ** 2,
      )
      if (attractorDistance > PUPIL_TRAVEL_DISTANCE) {
        const dv = PUPIL_TRAVEL_DISTANCE / attractorDistance / attractorZDiv
        lookOffset[0] *= dv
        lookOffset[1] *= dv
      }
      ctx.fillStyle = 'black'
      ctx.beginPath()
      ctx.arc(p[0] + lookOffset[0], p[1] + lookOffset[1], PUPIL_RADIUS, 0, TAU)
      ctx.fill()
    }
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const canvasEl = ref.current.base as HTMLCanvasElement

    const handleMouseMove = (event: MouseEvent): void => {
      attractorZDiv = 1
      eyeAttracter[0] = event.clientX
      eyeAttracter[1] = event.clientY
    }
    canvasEl.addEventListener('mousemove', handleMouseMove)

    const handleTouchMove = (event: TouchEvent): void => {
      attractorZDiv = 1
      eyeAttracter[0] = event.touches[0].pageX
      eyeAttracter[1] = event.touches[0].pageY
    }
    canvasEl.addEventListener('touchmove', handleTouchMove)

    return (): void => {
      canvasEl.removeEventListener('mousemove', handleMouseMove)
      canvasEl.removeEventListener('touchmove', handleTouchMove)
    }
  }, [ref])

  /*
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const cam = videoRef.current as HTMLVideoElement
    if (typeof window === 'undefined') return

    // const faceapiOptions = new faceapi.TinyFaceDetectorOptions({ inputSize: 128, scoreThreshold: 0.5 })
    // const detectionNet = faceapi.nets.tinyFaceDetector
    const faceapiOptions = new faceapi.SsdMobilenetv1Options({ minConfidence: 0.5 })
    const detectionNet = faceapi.nets.ssdMobilenetv1
    
    const FACE_WEIGHTS_PATH = '/assets/face-weights' // 'https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights'
    const CAMERA_WIDTH = 640
    const CAMERA_HEIGHT = 480
    
    const loadNet = async () => {
      await detectionNet.load(FACE_WEIGHTS_PATH)
      return detectionNet
    }

    const initCamera = async (width: number, height: number) => {
      cam.width = width
      cam.height = height
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: 'user',
          width: width,
          height: height
        }
      })
      cam.srcObject = stream
      return new Promise((resolve) => {
        cam.onloadedmetadata = () => {
          resolve(cam)
        }
      })
    }

    const detectFace = async () => {
      const result = await faceapi.detectSingleFace(cam, faceapiOptions)
      if (typeof result !== 'undefined') {
        attractorZDiv = 65536/result.box.area
        eyeAttracter[0] = (canvasCenter[0] - result.box.x / CAMERA_WIDTH * canvasCenter[0]) * 2
        eyeAttracter[1] = result.box.y / CAMERA_HEIGHT * canvasCenter[1] * 2
      }
      void detectFace()
    }

    void loadNet().then(() => { return initCamera(CAMERA_WIDTH, CAMERA_HEIGHT) }).then(detectFace)
  }, [videoRef]) // eslint-disable-line react-hooks/exhaustive-deps
  */

  const art: Artwork = artworkLibrary['iball']
  return (
    <section class={styles.canvas_frame}>
      <Helmet title={art.title}>
        <meta name="description" content={art.description} />
      </Helmet>
      <div class="d-none">
        <ArtPlaque art={art} />
      </div>
      {process.env.NODE_ENV === 'production' && <LoadingScreen />}
      <video ref={videoRef} autoPlay muted playsInline />
      <Canvas ref={ref} init={init} onResize={init} draw={draw} />
    </section>
  )
}

export default IBall
