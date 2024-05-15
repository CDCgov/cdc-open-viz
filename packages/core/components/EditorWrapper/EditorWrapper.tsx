import React from 'react'
import { Visualization } from '../../types/Visualization'
import { ViewPort } from '../../types/ViewPort'
import './editor-wrapper.style.css'
import { Accordion } from 'react-accessible-accordion'

type StandAloneComponentProps = {
  visualizationKey: string
  config: Visualization
  setConfig: Function
  configUrl: string
  setEditing: Function
  hostname: string
  viewport?: ViewPort
}

type EditorProps = {
  component: React.JSXElementConstructor<StandAloneComponentProps>
  type: string
  visualizationKey: string
  visualizationConfig: Visualization
  updateConfig: Function
  viewport?: ViewPort
}

const EditorWrapper: React.FC<React.PropsWithChildren<EditorProps>> = ({ children, visualizationKey, visualizationConfig, type, component: Component, updateConfig, viewport }) => {
  const [displayPanel, setDisplayPanel] = React.useState(true)
  return (
    <>
      <div className='editor-wrapper'>
        <button className={`editor-toggle ${displayPanel ? '' : 'collapsed'}`} title={displayPanel ? `Collapse Editor` : `Expand Editor`} onClick={() => setDisplayPanel(!displayPanel)} />
        <section className={`${displayPanel ? '' : 'hidden'} editor-panel cove`}>
          <div aria-level={2} role='heading' className='heading-2'>
            Configure {type}
          </div>
          <section>
            <Accordion allowZeroExpanded={true}>{children}</Accordion>
          </section>
        </section>
        <div className='preview-wrapper'>
          <Component visualizationKey={visualizationKey} config={visualizationConfig} setConfig={updateConfig} configUrl={undefined} setEditing={undefined} hostname={undefined} viewport={viewport} />
        </div>
      </div>
    </>
  )
}

export default EditorWrapper
