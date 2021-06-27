import { FunctionalComponent, createRef, h } from 'preact'
import { useEffect } from 'preact/hooks'

type SuccessFunction = (element: HTMLElement) => void

interface SequinsProps {
  sequins?: number[];
  success?: SuccessFunction;
}

const Sequins: FunctionalComponent<SequinsProps> = (props: SequinsProps) => {
  const ref = createRef()

  useEffect(() => {
    const element = ref.current
    const sequins = props?.sequins || [38,38,40,40,37,39,37,39,66,65]
    const success = props?.success || function(element: HTMLElement): void {
      element.innerHTML = atob('PGRpdiBjbGFzcz0iYWxlcnQgYWxlcnQtc3VjY2VzcyB0ZXh0LWRhcmsiIHJvbGU9ImFsZXJ0Ij5Hb2QgbW9kZSBlbmFibGVkPC9kaXY+')
      window.setTimeout(
        () => {
          element.innerHTML = ''
        },
        4096
      )
    }
    const buffer = new Array(sequins.length)

    const handleKeyDown = (event: KeyboardEvent): void => {
      buffer.shift()
      buffer.push(event.which)
      if (sequins.every((v, i) => v === buffer[i])) success(element)
    }
    window.addEventListener('keydown', handleKeyDown)

    return (): void => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [props, ref])

  return <div ref={ref} />
}

export default Sequins
