import { FunctionalComponent, createRef } from 'preact'
import { useEffect, useRef } from 'preact/hooks'

type GetContextFunction = (
  canvas: HTMLCanvasElement,
) => CanvasRenderingContext2D

type InitFunction = (ctx: CanvasRenderingContext2D) => void

type ReadyFunction = (whenReady: VoidFunction) => void

type DrawFunction = (ctx: CanvasRenderingContext2D, frameCount: number) => void

type ResizeFunction = (ctx: CanvasRenderingContext2D) => void

type RenderFunction = () => void

export interface CanvasOptions {
  contextType?: string
  framesPerSecond?: number
}

export interface CanvasMethods {
  render: RenderFunction
}

export interface CanvasProps {
  getContext?: GetContextFunction
  init?: InitFunction
  ready?: ReadyFunction
  draw: DrawFunction
  onResize?: ResizeFunction
  animate?: boolean
  framesPerSecond?: number
  options?: CanvasOptions
  canvasMethodRefs?: CanvasMethods
}

export const Canvas: FunctionalComponent<CanvasProps> = (
  props: CanvasProps,
) => {
  const {
    getContext,
    init,
    ready,
    draw,
    onResize,
    animate,
    framesPerSecond,
    ...rest
  } = props
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
      : (canvas.getContext('2d') as CanvasRenderingContext2D)
    const handleResize = (): void => {
      ctx.canvas.width = window.innerWidth
      ctx.canvas.height = window.innerHeight
      if (onResize) onResize(ctx)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
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
    const ctx = getContext
      ? getContext(canvas)
      : (canvas.getContext('2d') as CanvasRenderingContext2D)
    let loopCallbackID: number

    if (init) init(ctx)

    const render = (): void => {
      draw(ctx, frame++)
    }

    const loop = (): void => {
      if (pausedRef.current) {
        loopCallbackID = window.setTimeout(loop, 128)
        return
      }
      if (frameMilliseconds) {
        loopCallbackID = window.setTimeout(loop, frameMilliseconds)
      } else {
        loopCallbackID = requestAnimationFrame(loop)
      }
      draw(ctx, frame++)
    }

    // expose methods to parent
    // @todo seems parents calling their children's methods is react antipattern, better way?
    if (props.canvasMethodRefs) {
      props.canvasMethodRefs.render = render
    }

    const whenReady = (): void => {
      if (animate === false) {
        loopCallbackID = window.setTimeout(render)
      } else {
        loopCallbackID = window.setTimeout(loop)
      }
    }

    if (ready === undefined) whenReady()
    else ready(whenReady)

    return (): void => {
      if (frameMilliseconds) {
        window.clearTimeout(loopCallbackID)
      } else {
        cancelAnimationFrame(loopCallbackID)
      }
    }
  }, [
    ref,
    getContext,
    onResize,
    animate,
    draw,
    frame,
    frameMilliseconds,
    init,
    props.canvasMethodRefs,
    ready,
  ])

  return <canvas ref={ref} {...rest} />
}

export default Canvas
