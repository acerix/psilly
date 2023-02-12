import { FunctionalComponent } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import styles from './style.module.css'

export interface NowWidgetProps {
  style: string
  time: Date
}

const NowWidget = (props: NowWidgetProps) => {
  const { style, time } = props
  const seconds: number = time.getTime() / 1000

  return (
    <time dateTime={time.toISOString()} class={style}>
      {seconds.toFixed(3)}
    </time>
  )
}

const Now: FunctionalComponent = () => {
  const [time, setTime] = useState<Date>(new Date())

  useEffect(() => {
    let renderCallbackID: number

    const refresh = (): void => {
      renderCallbackID = window.requestAnimationFrame(refresh)
      setTime(new Date())
    }

    refresh()

    return (): void => {
      window.cancelAnimationFrame(renderCallbackID)
    }
  })

  return <NowWidget style={styles.now} time={time} />
}

export default Now
