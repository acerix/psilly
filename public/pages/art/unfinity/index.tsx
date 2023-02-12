import { FunctionalComponent } from 'preact'
import { useEffect, useState } from 'preact/hooks'

export interface UnfinityWidgetProps {
  time: Date
}

const UnfinityWidget = (props: UnfinityWidgetProps) => {
  const { time } = props
  const criyb: number = Math.E / time.getTime() ** Math.PI
  return <time dateTime={time.toISOString()}>{criyb}</time>
}

const Unfinity: FunctionalComponent = () => {
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

  return <UnfinityWidget time={time} />
}

export default Unfinity
