import React from 'react'
import Accordion from './ui/Accordion'
import InputCheckbox from './inputs/InputCheckbox'

const EditorPanelGlobal = () => {
  return (
    <Accordion.Section label="Global">
      <InputCheckbox label="Display Border"/>
      <InputCheckbox label="Accent Style"/>
      <InputCheckbox label="Use Theme Background Color"/>
      <InputCheckbox label="Hide Background Color"/>
    </Accordion.Section>
  )
}

export default EditorPanelGlobal
