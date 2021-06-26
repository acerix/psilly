import { FunctionalComponent, createRef, h } from 'preact'
import { useEffect } from 'preact/hooks'

export type InitFunction = (ctx: CanvasRenderingContext2D) => void

export type DrawFunction = (ctx: CanvasRenderingContext2D, frameCount: number) => void

interface CanvasOptions {
  contextType: string;
}

export interface CanvasProps {
  init?: InitFunction;
  draw: DrawFunction;
  options?: CanvasOptions;
}

const Canvas: FunctionalComponent<CanvasProps> = (props: CanvasProps) => {
  const { init, draw, options, ...rest } = props
  const ref = createRef()
  const contextType = options?.contextType || '2d'

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext(contextType)
    let paused = false
    let frameCount = 0
    let animationFrameId: number

    const handleResize = (): void => {
      ctx.canvas.width = window.innerWidth
      ctx.canvas.height = window.innerHeight
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
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [init, draw, ref, contextType])

  return <canvas ref={ref} {...rest} />
}

export default Canvas
