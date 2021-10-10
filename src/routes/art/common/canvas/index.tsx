import { FunctionalComponent, createRef, h } from 'preact'
import { useEffect } from 'preact/hooks'

type GetContextFunction = (canvas: HTMLCanvasElement) => CanvasRenderingContext2D

type InitFunction = (ctx: CanvasRenderingContext2D) => void

type ReadyFunction = (whenReady: VoidFunction) => void

type DrawFunction = (ctx: CanvasRenderingContext2D, frameCount: number) => void

type ResizeFunction = (ctx: CanvasRenderingContext2D) => void

type RenderFunction = () => void

export interface CanvasOptions {
  contextType?: string;
  framesPerSecond?: number;
}

export interface CanvasMethods {
  render: RenderFunction;
}

export interface CanvasProps {
  getContext?: GetContextFunction;
  init?: InitFunction;
  ready?: ReadyFunction;
  draw: DrawFunction;
  onResize?: ResizeFunction;
  animate?: boolean;
  framesPerSecond?: number;
  options?: CanvasOptions;
  canvasMethodRefs?: CanvasMethods;
}

export const Canvas: FunctionalComponent<CanvasProps> = (props: CanvasProps) => {
  const { getContext, init, ready, draw, onResize, animate, framesPerSecond, ...rest } = props
  const ref = createRef()
  const frameMilliseconds = framesPerSecond ? 1000 / framesPerSecond : undefined

  useEffect(() => {
    const canvas = ref.current as HTMLCanvasElement
    let paused = false
    let frameCount = -1
    let loopCallbackID: number
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
        document.body.requestFullscreen().catch(err => {
          console.error('Fullscreen fail:', err)
          // console.error(`Fullscreen fail: ${err.message} (${err.name})`)
        })
      }
    }
    window.addEventListener('click', setFullscreen)

    if (init) init(ctx)

    const render = (): void => {
      draw(ctx, frameCount++)
    }

    const loop = (): void => {
      if (paused) {
        setTimeout(loop, 128)
        return
      }
      frameCount++
      if (frameMilliseconds) {
        loopCallbackID = window.setTimeout(loop, frameMilliseconds)
      }
      else {
        loopCallbackID = window.requestAnimationFrame(loop)
      }
      draw(ctx, frameCount)
    }

    // expose methods to parent
    // @todo seems parents calling their children's methods is react antipattern, better way?
    if (props.canvasMethodRefs) {
      props.canvasMethodRefs.render = render
    }

    const whenReady = (): void => {
      if (animate===false) {
        setTimeout(render)
      }
      else {
        setTimeout(loop)
      }
    }

    if (ready===undefined) whenReady()
    else ready(whenReady)

    return (): void => {
      if (frameMilliseconds) {
        window.clearTimeout(loopCallbackID)
      }
      else {
        window.cancelAnimationFrame(loopCallbackID)
      }
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('blur', handleBlur)
      window.removeEventListener('focus', handleFocus)
      window.removeEventListener('click', setFullscreen)
    }

  }, [getContext, init, ready, draw, onResize, ref, props.canvasMethodRefs, animate, frameMilliseconds])

  return <canvas ref={ref} {...rest} />
}

export default Canvas
