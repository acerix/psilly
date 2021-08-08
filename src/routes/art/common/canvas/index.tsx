import { FunctionalComponent, createRef, h } from 'preact'
import { useEffect } from 'preact/hooks'

type GetContextFunction = (canvas: HTMLCanvasElement) => CanvasRenderingContext2D

type InitFunction = (ctx: CanvasRenderingContext2D) => void

type ReadyFunction = (whenReady: VoidFunction) => void

type DrawFunction = (ctx: CanvasRenderingContext2D, frameCount: number) => void

type ResizeFunction = (ctx: CanvasRenderingContext2D) => void

interface CanvasOptions {
  contextType?: string;
  framesPerSecond?: number;
}

interface CanvasProps {
  getContext?: GetContextFunction;
  init?: InitFunction;
  ready?: ReadyFunction;
  draw: DrawFunction;
  onResize?: ResizeFunction;
  framesPerSecond?: number;
  options?: CanvasOptions;
}

const Canvas: FunctionalComponent<CanvasProps> = (props: CanvasProps) => {
  const { getContext, init, ready, draw, onResize, framesPerSecond, ...rest } = props
  const ref = createRef()
  const frameMilliseconds = framesPerSecond ? 1000 / framesPerSecond : undefined

  useEffect(() => {
    const canvas = ref.current as HTMLCanvasElement
    let paused = false
    let frameCount = -1
    let renderCallbackID: number
    const ctx = getContext ? getContext(canvas) : canvas.getContext('2d') as CanvasRenderingContext2D

    const handleResize = (): void => {
      ctx.canvas.width = window.innerWidth
      ctx.canvas.height = window.innerHeight
      if (onResize) onResize(ctx)
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    const handleBlur = (): void => {
      paused = true
    }
    window.addEventListener('blur', handleBlur)

    const handleFocus = (): void => {
      paused = false
    }
    window.addEventListener('focus', handleFocus)

    const setFullscreen = (): void => {
      if (!document.fullscreenElement) {
        canvas.requestFullscreen().catch(err => {
          console.log('No full!', err)
          // alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`)
        })
      }
    }
    window.addEventListener('click', setFullscreen)

    if (init) init(ctx)

    const render = (): void => {
      if (paused) {
        setTimeout(render, 128)
        return
      }
      frameCount++
      if (frameMilliseconds) {
        renderCallbackID = window.setTimeout(render, frameMilliseconds)
      }
      else {
        renderCallbackID = window.requestAnimationFrame(render)
      }
      draw(ctx, frameCount)
    }

    const whenReady = (): void => {
      setTimeout(render, 0)
    }

    if (ready===undefined) whenReady()
    else ready(whenReady)

    return (): void => {
      if (frameMilliseconds) {
        window.clearTimeout(renderCallbackID)
      }
      else {
        window.cancelAnimationFrame(renderCallbackID)
      }
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('blur', handleBlur)
      window.removeEventListener('focus', handleFocus)
      window.removeEventListener('click', setFullscreen)
    }

  }, [getContext, init, ready, draw, onResize, ref, frameMilliseconds])

  return <canvas ref={ref} {...rest} />
}

export default Canvas
