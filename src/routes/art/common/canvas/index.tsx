import { FunctionalComponent, createRef, h } from 'preact'
import { useEffect } from 'preact/hooks'

type InitFunction = (ctx: CanvasRenderingContext2D) => void

type DrawFunction = (ctx: CanvasRenderingContext2D, frameCount: number) => void

type ResizeFunction = (ctx: CanvasRenderingContext2D) => void

interface CanvasOptions {
  contextType?: string;
  framesPerSecond?: number;
}

interface CanvasProps {
  init?: InitFunction;
  draw: DrawFunction;
  onResize?: ResizeFunction;
  options?: CanvasOptions;
  framesPerSecond?: number;
}

const Canvas: FunctionalComponent<CanvasProps> = (props: CanvasProps) => {
  const { init, draw, onResize, options, ...rest } = props
  const ref = createRef()
  const contextType = options?.contextType || '2d'
  const frameMilliseconds = options?.framesPerSecond ? 1000 / options.framesPerSecond : undefined

  useEffect(() => {
    const canvas = ref.current as HTMLCanvasElement
    const ctx = canvas.getContext(contextType) as CanvasRenderingContext2D
    let paused = false
    let frameCount = 0
    let renderCallbackID: number

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
      frameCount++
      draw(ctx, frameCount)
      if (frameMilliseconds) {
        renderCallbackID = window.setTimeout(render, frameMilliseconds)
      }
      else {
        renderCallbackID = window.requestAnimationFrame(render)
      }
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
  }, [init, draw, onResize, ref, contextType, frameMilliseconds])

  return <canvas ref={ref} {...rest} />
}

export default Canvas