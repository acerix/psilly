import { FunctionalComponent, createRef } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import styles from './style.module.css'

interface ParameterPanelProps {
  something: number
}

const ParameterPanel: FunctionalComponent<ParameterPanelProps> = (
  props: ParameterPanelProps,
) => {
  const ref = createRef()
  const [isPanelCollapsed, setIsPanelCollapsed] = useState(true)
  const handlePanelCollapse = (): void => setIsPanelCollapsed(!isPanelCollapsed)

  useEffect(() => {
    // const element = ref.current as HTMLElement
    console.log('ParameterPanel construct')

    return (): void => {
      console.log('ParameterPanel destruct')
    }
  }, [props, ref])

  return (
    <div ref={ref}>
      <button
        class={`btn ${styles.parameter_panel_toggle_button}`}
        type="button"
        data-bs-toggle="parameterPanel"
        aria-controls="panel"
        aria-label="Show Parameter Panel"
        aria-expanded={!isPanelCollapsed}
        onClick={handlePanelCollapse}>
        ⚙️
      </button>
      <div
        class={`offcanvas offcanvas-end ${
          isPanelCollapsed ? '' : ' show visible'
        }`}
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex={-1}
        id="panel"
        aria-labelledby="panelLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="panelLabel">
            Parameters
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="parameterPanel"
            aria-label="Close"
            onClick={handlePanelCollapse}
          />
        </div>
        <div class="offcanvas-body" />
      </div>
    </div>
  )
}

export default ParameterPanel
