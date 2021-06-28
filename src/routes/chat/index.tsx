import { FunctionalComponent, createRef, h } from 'preact'
import { useEffect } from 'preact/hooks'
import Helmet from 'react-helmet'
import style from './style.css'

const Chat: FunctionalComponent = () => {
  const ref = createRef()

  useEffect(() => {
    const element = ref.current as HTMLElement
    let paused = false
    let renderCallbackID: number
    let position = 0
    let velocity = 1
    const acceleration = 1

    const handleBlur = (): void => {
      paused = true
    }
    window.addEventListener('blur', handleBlur)

    const handleFocus = (): void => {
      paused = false
    }
    window.addEventListener('focus', handleFocus)

    const draw = (): void => {
      velocity += acceleration
      position += velocity
      // if (Math.abs(v)>32 && v*a>=0) a = 0 - v * Math.random() * 0.01
      element.style.backgroundPosition = `0 ${position}px`
    }

    const render = (): void => {
      if (paused) {
        setTimeout(render, 128)
        return
      }
      draw()
      renderCallbackID = window.requestAnimationFrame(render)
    }
    render()

    return (): void => {
      window.cancelAnimationFrame(renderCallbackID)
      window.removeEventListener('blur', handleBlur)
      window.removeEventListener('focus', handleFocus)
    }
  }, [ref])


  return (
    <section ref={ref} class={style.chat}>
      <Helmet title="Chatter" />
      <input autofocus />
    </section>
  )
}

export default Chat
