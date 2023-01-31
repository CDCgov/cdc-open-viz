import Accordion from '../ui/Accordion'
import InputCheckbox from '../input/InputCheckbox'
import InputSelect from '../input/InputSelect'
import ColorPicker from '../ui/ColorPicker'

const optionsObj = {
  default: 'Default',
  theme: 'Theme Color',
  none: 'None'
}

const accentOptions = {
  default: 'None',
  top: 'Top',
  right: 'Right',
  bottom: 'Bottom',
  left: 'Left',
}

const EditorPanelGlobal = () => {
  return (
    <Accordion.Section label="Component">
      <InputSelect configField={[ 'visual', 'border' ]} options={optionsObj} label="Border"/>
      <InputSelect configField={[ 'visual', 'background' ]} options={optionsObj} label="Background Color"/>
      <InputSelect configField={[ 'visual', 'accent' ]} options={accentOptions} label="Accent Border"/>
      <InputCheckbox configField={[ 'visual', 'shadow' ]} label="Show Dropshadow"/>
      <ColorPicker label="Theme Color" tooltip="Select the theme color for the component" colorTooltip/>
    </Accordion.Section>
  )
}

export default EditorPanelGlobal
