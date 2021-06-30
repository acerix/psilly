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
  const ref = createRef()
  //const [items, setItems] = useState<ChatMessage[]>([])
  const [items, setItems] = useState<string[]>([])

  useEffect(() => {
    //const element = ref.current as HTMLElement
    let paused = false
    let renderCallbackID: number
    let position = 0
    let velocity = 1
    const acceleration = 0

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
      //element.style.backgroundPosition = `0 ${position}px`
      if (position === 69) console.log(draw)
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
      fetch('https://psilly.com/experiments/ajax/chatter_chat.pill')
        .then(res => res.json())
        //.then(res => res.map((v: string) => {'color': v.slice(-6), 'body': v.slice(0, -6)}))
        //.then(res => res.map((v: string) => [v.slice(-6), v.slice(0, -6)]))
        .then(data => setItems(data || []))
        .catch(err => console.error(err))
      setTimeout(update, 4096)
    }
    update()

    return (): void => {
      window.cancelAnimationFrame(renderCallbackID)
      window.removeEventListener('blur', handleBlur)
      window.removeEventListener('focus', handleFocus)
    }
  }, [])

  return (
    <section ref={ref} class={style.chat}>
      <Helmet title="Chatter" />
      <input autofocus />
      <ul class="output">
        {items.map(item => (
          <ChatItem item={item} key={item} />
        ))}
      </ul>
      <p class="text-center">Ya know, it could just be me, but I feel this chat room is missing something...</p>
    </section>
  )
}

export default Chat
