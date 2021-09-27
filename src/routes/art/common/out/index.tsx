import { FunctionalComponent, createRef, h } from 'preact'
import style from './style.css'

export interface OutProps {
  out?: string;
}

export const Out: FunctionalComponent<OutProps> = (props: OutProps) => {
  const { out } = props
  const ref = createRef()
  console.log('butt', out)
  return <pre class={style.out} ref={ref} />
}

export default Out
