import React from 'react'

// Hooks
import { useVisConfig } from '@cdc/core/hooks/store/useVisConfig'

// Components - Core
import Accordion from '@cdc/core/components/ui/Accordion'
import AlertBox from '@cdc/core/components/ui/AlertBox'
import Icon from '@cdc/core/components/ui/Icon'
import InputText from '@cdc/core/components/input/InputText'
import PanelGlobal from '@cdc/core/components/editor/Panel.Global'

const EditorPanels = () => {
  // Store Selectors
  const { config } = useVisConfig()

  const panelGeneral = (
    <Accordion.Section label='General'>
      <InputText label='Title' configField='title' placeholder='Markup Include Title' />
      <InputText label='Source URL' configField='srcUrl' placeholder='https://www.example.com/file.html' />
      {config.srcUrl === '' && (
        <AlertBox type='info'>
          <Icon display='info' /> Need a preview? Set the <strong>Source URL</strong> as <code>#example</code> to use example markup data.
        </AlertBox>
      )}
    </Accordion.Section>
  )

  return (
    <>
      <Accordion>
        {panelGeneral}
        {PanelGlobal}
      </Accordion>
    </>
  )
}

export default EditorPanels
