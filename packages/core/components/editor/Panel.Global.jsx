import React from 'react'

// Components
import Accordion from '../ui/Accordion'
import ColorPicker from '../ui/ColorPicker'
import InputCheckbox from '../input/InputCheckbox'
import InputSelect from '../input/InputSelect'
import InputText from '../input/InputText'

const optionsObj = {
  default: 'Default',
  theme: 'Theme Color',
  none: 'None'
}

const accentOptions = {
  none: 'None',
  top: 'Top',
  right: 'Right',
  bottom: 'Bottom',
  left: 'Left'
}

const PanelGlobal = (
  <Accordion.Section label="Component">
    <InputText type="text" configField={[ 'tooltip', 'content' ]} label="Tooltip"/>
    <InputSelect configField={[ 'tooltip', 'position' ]} options={{ bottom: 'Bottom', left: 'Left' }} label="Tooltip Position" initialDisabled/>
    <InputSelect configField={[ 'visual', 'border' ]} options={optionsObj} label="Border"/>
    <InputSelect configField={[ 'visual', 'accent' ]} options={accentOptions} label="Border Accent"/>
    <InputSelect configField={[ 'visual', 'background' ]} options={optionsObj} label="Background Color"/>
    <InputCheckbox configField={[ 'visual', 'shadow' ]} label="Show Dropshadow"/>
    <ColorPicker label="Theme Color" tooltip="Select the theme color for the component" colorTooltip/>
  </Accordion.Section>
)

export default PanelGlobal
