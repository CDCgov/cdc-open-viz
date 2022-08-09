import React from 'react'

// Context
import { useConfigContext } from '@cdc/core/context/ConfigContext'

// Components - Core
import Accordion from '@cdc/core/components/ui/Accordion'
import AlertBox from '@cdc/core/components/ui/AlertBox'
import ColorPicker from '@cdc/core/components/ui/ColorPicker'
import EditorPanelGlobal from '@cdc/core/components/EditorPanelGlobal'
import Icon from '@cdc/core/components/ui/Icon'
import InputText from '@cdc/core/components/inputs/InputText'

const themeColors = [ 'theme-blue', 'theme-purple', 'theme-brown', 'theme-teal', 'theme-pink', 'theme-orange', 'theme-slate', 'theme-indigo', 'theme-cyan', 'theme-green', 'theme-amber' ]

const EditorPanels = () => {
  const { config } = useConfigContext()

  const panelGeneral = (
    <Accordion.Section label="General">
      <InputText label="Title" configField="title" placeholder="Markup Include Title"/>
      <InputText label="Source URL" configField="srcUrl" placeholder="https://www.example.com/file.html"/>
      {config.srcUrl === '' &&
        <AlertBox type="info">
          <Icon display="info"/> Need a preview? Set the <strong>Source URL</strong> as <code>#example</code> to use example markup data.
        </AlertBox>
      }
    </Accordion.Section>
  )

  const panelVisual = (
    <Accordion.Section label="Visual">
      <ColorPicker label="Theme Colors" colors={themeColors} tooltip="Select the theme color for the component" colorTooltip/>
    </Accordion.Section>
  )

  return (
    <>
      {EditorPanelGlobal()}
      {panelGeneral}
      {panelVisual}
    </>
  )
}

export default EditorPanels
