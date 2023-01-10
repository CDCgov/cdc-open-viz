import React from 'react'
import Accordion from './ui/Accordion'
import InputCheckbox from './inputs/InputCheckbox'
import InputSelect from './inputs/InputSelect'

const EditorPanelGlobal = () => {
  return (
    <Accordion.Section label="Global">
      <InputCheckbox configField={['config', 'visual', 'border']} label="Display Border"/>
      <InputCheckbox configField={['config', 'visual', 'borderColorTheme']} label="Use Theme Border Color" />
      <InputCheckbox configField={['config', 'visual', 'accent']} label="Use Accent Style" />
      <InputSelect configField={['config', 'visual', 'background']} options={['Default', 'Theme Color', 'Transparent']} label="Background Color" />
    </Accordion.Section>
  )
}

export default EditorPanelGlobal
