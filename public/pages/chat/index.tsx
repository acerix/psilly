import { FunctionalComponent, createRef } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import Helmet from 'react-helmet'
import styles from './style.module.css'

interface ChatItemProps {
  item: string
}

const ChatItem: FunctionalComponent<ChatItemProps> = (props: ChatItemProps) => {
  const { item } = props
  const color = item.substr(-6)
  const message = item.substr(0, item.length - 6)
  return <li style={{ color: `#${color}` }}>{message}</li>
}

const Chat: FunctionalComponent = () => {
  const ref = createRef<HTMLElement>()
  const inputRef = createRef<HTMLInputElement>()
  const statusRef = createRef<HTMLParagraphElement>()
  const [items, setItems] = useState<string[]>([])
  const chatFetchAborter = new AbortController()

  useEffect(() => {
    const element = ref.current as HTMLElement
    const inputElement = inputRef.current as HTMLInputElement
    const statusElement = statusRef.current as HTMLParagraphElement
    const refreshMs = 128
    const terminalVelocity = 256
    let alive = true
    let paused = false
    let connected = false
    let mouseDown = 0
    let mouseLeftDownY = 0
    let lastMessage = ''
    let renderCallbackID: number
    let renderTimeoutID: ReturnType<typeof setTimeout>
    let updateTimeoutID: ReturnType<typeof setTimeout>
    let position = 0
    let velocity = 0.5 - Math.random()
    let acceleration = (0.5 - Math.random()) / 8
    let free = true

    const handleBlur = (): void => {
      paused = true
    }
    window.addEventListener('blur', handleBlur)

    const handleFocus = (): void => {
      paused = false
    }
    window.addEventListener('focus', handleFocus)

    const handleMouseDown = (event: MouseEvent): boolean => {
      mouseDown |= 1 << event.button
      if (event.button === 0) {
        mouseLeftDownY = event.clientY
      }
      event.preventDefault()
      return false
    }
    window.addEventListener('mousedown', handleMouseDown)

    const handleMouseUp = (event: MouseEvent): boolean => {
      mouseDown ^= 1 << event.button
      if (event.button === 0) {
        acceleration = 0
        velocity *= 2 // flick
      }
      inputElement.focus()
      event.preventDefault()
      return false
    }
    window.addEventListener('mouseup', handleMouseUp)

    const handleContextMenu = (event: MouseEvent): boolean => {
      event.preventDefault()
      return false
    }
    window.addEventListener('contextmenu', handleContextMenu)

    const handleMouseMove = (event: MouseEvent): void => {
      if (mouseDown & 1) {
        velocity = event.clientY - mouseLeftDownY
        mouseLeftDownY = event.clientY
        position += velocity
        element.style.backgroundPosition = `0 ${position}px`
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    const handleTouchDown = (event: TouchEvent): boolean => {
      void event
      free = false
      mouseLeftDownY = event.touches[0].pageY
      return false
    }
    window.addEventListener('touchstart', handleTouchDown)

    const handleTouchUp = (event: TouchEvent): boolean => {
      void event
      free = true
      acceleration = 0
      velocity *= 2 // flick
      return false
    }
    window.addEventListener('touchend', handleTouchUp)

    const handleTouchMove = (event: TouchEvent): void => {
      if (event.touches.length === 1) {
        velocity = event.touches[0].pageY - mouseLeftDownY
        mouseLeftDownY = event.touches[0].pageY
        position += velocity
        element.style.backgroundPosition = `0 ${position}px`
      }
    }
    window.addEventListener('touchmove', handleTouchMove)

    const draw = (): void => {
      if (!(mouseDown & 1) && free) {
        velocity += acceleration
        position += velocity
        // dampen
        if (
          Math.abs(velocity) > terminalVelocity &&
          velocity * acceleration >= 0
        ) {
          acceleration = (-velocity * Math.random()) / 128
        }
        element.style.backgroundPosition = `0 ${position}px`
      }
    }

    const render = (): void => {
      if (paused) {
        renderTimeoutID = setTimeout(render, 512)
      } else {
        renderCallbackID = window.requestAnimationFrame(render)
        draw()
      }
    }
    render()

    const update = (): void => {
      if (paused) {
        if (alive) updateTimeoutID = setTimeout(update, refreshMs)
        return
      }
      let params = '?r'
      if (lastMessage !== inputElement.value) {
        params += `&s=${encodeURIComponent(inputElement.value)}`
        lastMessage = inputElement.value
      }
      fetch(
        `https://psilly.com/experiments/ajax/chatter_chat.pill${params}`,
        chatFetchAborter,
      )
        .then((res) => res.json())
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        .then((data) => setItems(data || []))
        .then(() => {
          if (!alive) return
          if (!connected) {
            connected = true
            statusElement.innerText = ''
            statusElement.style.display = 'none'
          }
        })
        .then(() => {
          if (alive) updateTimeoutID = setTimeout(update, 1028)
        })
        .catch((err) => {
          if (!alive) return
          connected = false
          statusElement.innerText = err as string
          statusElement.style.display = 'block'
          console.error(err)
          alert(
            'Error connecting to server.\nYou may have lost your connection, or perhaps you dislike cookies?\nRefresh the page, with cookies enabled, to try again.',
          )
          location.reload()
        })
    }
    update()

    statusElement.innerText = 'Connecting...'
    inputElement.focus()

    return (): void => {
      alive = false
      window.cancelAnimationFrame(renderCallbackID)
      chatFetchAborter.abort()
      clearTimeout(renderTimeoutID)
      clearTimeout(updateTimeoutID)
      window.removeEventListener('blur', handleBlur)
      window.removeEventListener('focus', handleFocus)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('contextmenu', handleContextMenu)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchstart', handleTouchDown)
      window.removeEventListener('touchend', handleTouchUp)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  return (
    <section ref={ref} class={styles.chat}>
      <Helmet title="Chatter" />
      <input ref={inputRef} autofocus />
      <ul class="output">
        {items.map((item) => (
          <ChatItem item={item} key={item} />
        ))}
      </ul>
      <p ref={statusRef} class="text-center">
        A colourful ape input aggregator.
      </p>
    </section>
  )
}

export default Chat
