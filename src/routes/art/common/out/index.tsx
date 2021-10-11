import { RefObject, FunctionalComponent, createRef, h } from 'preact'
import style from './style.css'

export interface OutProps {
  outRef?: RefObject<HTMLPreElement>;
  out?: string;
}

export const Out: FunctionalComponent<OutProps> = (props: OutProps) => {
  const { outRef, out } = props
  const ref = outRef ?? createRef()
  return <pre class={style.out} ref={ref}>{ out }</pre>
}

export default Out
