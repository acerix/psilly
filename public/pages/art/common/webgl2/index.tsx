import { FunctionalComponent, createRef } from 'preact'
import { useEffect, useRef } from 'preact/hooks'

type GetContextFunction = (webGL2: HTMLCanvasElement) => WebGL2RenderingContext

type InitFunction = (ctx: WebGL2RenderingContext) => void

type ReadyFunction = (whenReady: VoidFunction) => void

type DrawFunction = (ctx: WebGL2RenderingContext, frameCount: number) => void

type ResizeFunction = (ctx: WebGL2RenderingContext) => void

interface WebGL2Options {
  contextType?: string
  framesPerSecond?: number
}

interface WebGL2Props {
  getContext?: GetContextFunction
  init?: InitFunction
  ready?: ReadyFunction
  draw: DrawFunction
  onResize?: ResizeFunction
  framesPerSecond?: number
  options?: WebGL2Options
}

const defaultContextOptions = {
  alpha: false,
  depth: false,
  preserveDrawingBuffer: true,
}

export const WebGL2: FunctionalComponent<WebGL2Props> = (
  props: WebGL2Props,
) => {
  const { getContext, init, ready, draw, onResize, framesPerSecond, ...rest } =
    props
  const frameMilliseconds = framesPerSecond ? 1000 / framesPerSecond : undefined
  const ref = createRef()
  const pausedRef = useRef(false)
  let frame = 0

  // Pause animation when window is not focused
  useEffect(() => {
    const handleBlur = (): void => {
      pausedRef.current = true
    }
    window.addEventListener('blur', handleBlur)
    const handleFocus = (): void => {
      pausedRef.current = false
    }
    window.addEventListener('focus', handleFocus)
    return (): void => {
      window.removeEventListener('blur', handleBlur)
      window.removeEventListener('focus', handleFocus)
    }
  }, [])

  // Update canvas dimensions when window is resized
  useEffect(() => {
    const canvas = ref.current as HTMLCanvasElement
    const ctx = getContext
      ? getContext(canvas)
      : (canvas.getContext(
          'webgl2',
          defaultContextOptions,
        ) as WebGL2RenderingContext)
    const handleResize = (): void => {
      ctx.canvas.width = window.innerWidth
      ctx.canvas.height = window.innerHeight
      if (onResize) onResize(ctx)
    }
    window.addEventListener('resize', handleResize)
    setTimeout(handleResize, 128)
    return (): void => {
      window.removeEventListener('resize', handleResize)
    }
  }, [ref, getContext, onResize])

  // Set fullscreen on click
  useEffect(() => {
    const setFullscreen = (): void => {
      if (!document.fullscreenElement) {
        document.body.requestFullscreen().catch((err) => {
          console.error('Fullscreen fail', err)
        })
      }
    }
    window.addEventListener('click', setFullscreen)
    return (): void => {
      window.removeEventListener('click', setFullscreen)
    }
  }, [ref])

  // Start render loop
  useEffect(() => {
    const canvas = ref.current as HTMLCanvasElement
    let loopCallbackID: number

    const ctx = getContext
      ? getContext(canvas)
      : (canvas.getContext(
          'webgl2',
          defaultContextOptions,
        ) as WebGL2RenderingContext)
    if (!ctx) {
      alert('Error getting context. WebGL2 is required.')
      window.location.href = 'https://get.webgl.org/webgl2/'
      return
    }

    if (init) init(ctx)

    const render = (): void => {
      if (pausedRef.current) {
        loopCallbackID = window.setTimeout(render, 128)
        return
      }
      frame++
      if (frameMilliseconds) {
        loopCallbackID = window.setTimeout(render, frameMilliseconds)
      } else {
        loopCallbackID = window.requestAnimationFrame(render)
      }
      draw(ctx, frame)
    }

    const whenReady = (): void => {
      loopCallbackID = window.setTimeout(render, 0)
    }

    if (ready === undefined) whenReady()
    else ready(whenReady)

    return (): void => {
      if (frameMilliseconds) {
        window.clearTimeout(loopCallbackID)
      } else {
        window.cancelAnimationFrame(loopCallbackID)
      }
    }
  }, [ref, draw, frame, frameMilliseconds, getContext, init, ready])

  return <canvas ref={ref} {...rest} />
}

export default WebGL2
