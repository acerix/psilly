import { FunctionalComponent, createRef, h } from 'preact'
import { useEffect } from 'preact/hooks'

type GetContextFunction = (canvas: HTMLCanvasElement) => CanvasRenderingContext2D

type InitFunction = (ctx: CanvasRenderingContext2D) => void

type DrawFunction = (ctx: CanvasRenderingContext2D, frameCount: number) => void

type ResizeFunction = (ctx: CanvasRenderingContext2D) => void

interface CanvasOptions {
  contextType?: string;
  framesPerSecond?: number;
}

interface CanvasProps {
  getContext?: GetContextFunction;
  init?: InitFunction;
  draw: DrawFunction;
  onResize?: ResizeFunction;
  framesPerSecond?: number;
  options?: CanvasOptions;
}

const Canvas: FunctionalComponent<CanvasProps> = (props: CanvasProps) => {
  const { getContext, init, draw, onResize, framesPerSecond, ...rest } = props
  const ref = createRef()
  const frameMilliseconds = framesPerSecond ? 1000 / framesPerSecond : undefined

  useEffect(() => {
    const canvas = ref.current as HTMLCanvasElement
    let paused = false
    let frameCount = 0
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

    if (init) init(ctx)

    const render = (): void => {
      if (paused) {
        setTimeout(render, 128)
        return
      }
      if (frameMilliseconds) {
        renderCallbackID = window.setTimeout(render, frameMilliseconds)
      }
      else {
        renderCallbackID = window.requestAnimationFrame(render)
      }
      frameCount++
      draw(ctx, frameCount)
    }
    render()

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
    }
  }, [getContext, init, draw, onResize, ref, frameMilliseconds])

  return <canvas ref={ref} {...rest} />
}

export default Canvas