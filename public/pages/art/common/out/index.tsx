import { RefObject, FunctionalComponent, createRef } from 'preact'
import styles from './style.module.css'

export interface OutProps {
  outRef?: RefObject<HTMLPreElement>
  out?: string
}

export const Out: FunctionalComponent<OutProps> = (props: OutProps) => {
  const { outRef, out } = props
  const ref = outRef ?? createRef()
  return (
    <pre class={styles.out} ref={ref}>
      {out}
    </pre>
  )
}

export default Out
