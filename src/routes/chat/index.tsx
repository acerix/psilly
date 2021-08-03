import { FunctionalComponent, createRef, h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import Helmet from 'react-helmet'
import style from './style.css'

// https://preactjs.com/repl/

// type ChatMessage = {
//   color: string;
//   body: string;
// }

interface ChatItemProps {
  item: string;
}

const ChatItem: FunctionalComponent<ChatItemProps> = (props: ChatItemProps) => {
  const { item } = props
  return (
    <li>{item}</li>
  )
  /*
  return (
    <li>{inner.color} {inner.body}</li>
  )
  */
}

const Chat: FunctionalComponent = () => {
  const ref = createRef<HTMLElement>()
  const inputRef = createRef<HTMLInputElement>()
  const statusRef = createRef<HTMLParagraphElement>()
  //const [items, setItems] = useState<ChatMessage[]>([])
  const [items, setItems] = useState<string[]>([])

  useEffect(() => {
    const element = ref.current as HTMLElement
    const inputElement = inputRef.current as HTMLInputElement
    const statusElement = statusRef.current as HTMLParagraphElement
    let paused = false
    let connected = false
    let mouseDown = 0
    let mouseLeftDownY = 0
    let g = 0
    let lastMessage = ''
    let renderCallbackID: number
    let position = 0
    let velocity = 1
    let acceleration = 0
    
    const handleBlur = (): void => {
      paused = true
    }
    window.addEventListener('blur', handleBlur)

    const handleFocus = (): void => {
      paused = false
    }
    window.addEventListener('focus', handleFocus)

    const handleMouseDown = (event: MouseEvent): boolean => {
      mouseDown |= (1<<event.button)
      if (event.button===0) {
        mouseLeftDownY = event.clientY
      }
      event.preventDefault()
      return false
    }
    window.addEventListener('mousedown', handleMouseDown)

    const handleMouseUp = (event: MouseEvent): boolean => {
      mouseDown ^= (1<<event.button)
      if (event.button===0) {
        position = event.clientY + mouseLeftDownY
        velocity = 0.06 * (position - g)
        acceleration = 0
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
      if (mouseDown&1) {
        const position = event.clientY + mouseLeftDownY
        element.style.backgroundPosition = `0 ${position}px`
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    const draw = (): void => {
      if (!(mouseDown&1)) {
        velocity += acceleration
        position += velocity
        if (Math.abs(velocity) > 32 && velocity * acceleration >= 0) {
          acceleration =  -velocity * Math.random() / 128
        }
        element.style.backgroundPosition = `0 ${position}px`
      }
      else {
        g = mouseLeftDownY
      }
    }

    const render = (): void => {
      if (paused) {
        setTimeout(render, 128)
        return
      }
      renderCallbackID = window.requestAnimationFrame(render)
      draw()
    }
    render()

    const update = (): void => {
      if (paused) {
        setTimeout(update, 4096)
        return
      }
      let params = ''
      if (lastMessage!==inputElement.value) {
        params = `?s=${encodeURIComponent(inputElement.value)}`
        lastMessage = inputElement.value
      }
      fetch(`https://psilly.com/experiments/ajax/chatter_chat.pill${params}`)
        .then(res => res.json())
        //.then(res => res.map((v: string) => {'color': v.slice(-6), 'body': v.slice(0, -6)}))
        //.then(res => res.map((v: string) => [v.slice(-6), v.slice(0, -6)]))
        .then(data => setItems(data || []))
        .then(() => {
          if (!connected) {
            connected = true
            statusElement.innerText = ''
            statusElement.style.display = 'none'
          }
        })
        .then(() => setTimeout(update, 128))
        .catch(err => {
          connected = false
          statusElement.innerText = err as string
          statusElement.style.display = 'block'
          console.error(err)
          alert('Error connecting to server. Check that your connection is working and that you have some disabled cookies like some kind of heathen.')
          location.reload()
        })
    }
    update()

    statusElement.innerText = 'Connecting...'

    return (): void => {
      window.cancelAnimationFrame(renderCallbackID)
      window.removeEventListener('blur', handleBlur)
      window.removeEventListener('focus', handleFocus)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('contextmenu', handleContextMenu)
      window.removeEventListener('mousemove', handleMouseMove)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section ref={ref} class={style.chat}>
      <Helmet title="Chatter" />
      <input ref={inputRef} autofocus />
      <ul class="output">
        {items.map(item => (
          <ChatItem item={item} key={item} />
        ))}
      </ul>
      <p ref={statusRef} class="text-center">A colourful ape input aggregator.</p>
    </section>
  )
}

export default Chat
