import { FunctionalComponent, h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
// import DOMPurify from 'dompurify'


const JamulusStatus: FunctionalComponent = () => {
  const [statusHTML, setStatusHTML] = useState<string>('Loading...')

  useEffect(() => {
    let timeoutID: NodeJS.Timeout

    const refresh = (): void => {
      fetch('https://psilly.com/jam/jamulus-status.html')
        .then(data => setStatusHTML(data.toString() || 'Error fetching server status'))
        .catch((error: string) => {
          setStatusHTML(`<p>Error: ${error}</p>`)
        })
      timeoutID = setTimeout(refresh, 1<<14)
    }
    refresh()

    return (): void => {
      window.clearTimeout(timeoutID)
    }
  }, [])

  //__html: DOMPurify.sanitize(statusHTML)
  return <div dangerouslySetInnerHTML={{
    __html: statusHTML
  }} />
}

export default JamulusStatus