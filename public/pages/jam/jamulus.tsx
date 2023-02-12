import { FunctionalComponent } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { PreactHTMLConverter } from 'preact-html-converter'

const JamulusStatus: FunctionalComponent = () => {
  const [statusHTML, setStatusHTML] = useState<string>('Loading...')
  const statusFetchAborter = new AbortController()

  useEffect(() => {
    let alive = true
    let timeoutID: ReturnType<typeof setTimeout>

    const refresh = (): void => {
      if (!alive) return
      fetch('https://psilly.com/jam/jamulus-status.html', statusFetchAborter)
        .then((data) => (alive ? data.text() : 'ded'))
        .then((html) => {
          if (alive) {
            setStatusHTML(html || '<p>Error fetching server status</p>')
            timeoutID = setTimeout(refresh, 1 << 14)
          }
        })
        .catch((error: string) => {
          if (alive) setStatusHTML(`<p>Error: ${error}</p>`)
        })
    }
    refresh()

    return (): void => {
      alive = false
      statusFetchAborter.abort()
      window.clearTimeout(timeoutID)
    }
  }, [])

  return (
    <div class="jamulus-status">
      {PreactHTMLConverter().convert(statusHTML)}
    </div>
  )
}

export default JamulusStatus
