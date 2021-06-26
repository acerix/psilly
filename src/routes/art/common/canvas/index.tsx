import { FunctionalComponent, createRef, h } from 'preact'
import { useEffect } from 'preact/hooks'

export interface DrawProps {
  ctx: CanvasRenderingContext2D;
  frameCount: number;
}

export type DrawFunction = (props: DrawProps) => void

interface CanvasOptions {
  contextType: string;
}

export interface CanvasProps {
  draw: DrawFunction;
  options?: CanvasOptions;
}

const Canvas: FunctionalComponent<CanvasProps> = (props: CanvasProps) => {
  const { draw, options, ...rest } = props
  const ref = createRef()
  const contextType = options?.contextType || '2d'

  useEffect((): void => {
    const canvas = ref.current
    const ctx = canvas.getContext(contextType)
    let frameCount = 0
    let animationFrameId: number

    const handleResize = (): void => {
      ctx.canvas.width = window.innerWidth
      ctx.canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    const render = (): void => {
      frameCount++
      // draw(ctx, frameCount)
      console.log(ctx, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
      console.log(animationFrameId)
    }
    render()

    //     return () => {
    //       window.removeEventListener('resize', handleResize)
    //       window.cancelAnimationFrame(animationFrameId)
    //     }
  }, [draw, ref, contextType])

  return <canvas ref={ref} {...rest} />
}

export default Canvas