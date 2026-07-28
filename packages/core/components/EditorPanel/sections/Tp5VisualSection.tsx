import { CheckBox, Select } from '../Inputs'
import { UpdateFieldFunc } from '../../../types/UpdateFieldFunc'
import { SharedTp5VisualOptions } from '../../../types/SharedTp5VisualOptions'
import HeaderThemeSelector from '../../HeaderThemeSelector/HeaderThemeSelector'

export interface Tp5VisualSectionConfig {
  tp5Visual?: SharedTp5VisualOptions
}

export interface Tp5VisualSectionProps<TConfig extends Tp5VisualSectionConfig = Tp5VisualSectionConfig> {
  config: TConfig
  updateField: UpdateFieldFunc<TConfig>
  showValueAboveMessage?: boolean
}

export const Tp5VisualSection = <TConfig extends Tp5VisualSectionConfig = Tp5VisualSectionConfig>({
  config,
  updateField,
  showValueAboveMessage = false
}: Tp5VisualSectionProps<TConfig>) => {
  const calloutStyle = config.tp5Visual?.calloutStyle || 'callout'
  const showColorThemeSelector = calloutStyle === 'thin-border' || calloutStyle === 'drop-shadow'
  const accentPosition = config.tp5Visual?.accentPosition === 'top' ? 'top' : 'left'

  return (
    <div className='checkbox-group'>
      <Select
        value={calloutStyle}
        section='tp5Visual'
        fieldName='calloutStyle'
        label='Callout Style'
        options={[
          { label: 'Callout', value: 'callout' },
          { label: 'Thin Border', value: 'thin-border' },
          { label: 'Drop Shadow', value: 'drop-shadow' }
        ]}
        updateField={updateField}
      />
      {showColorThemeSelector && (
        <HeaderThemeSelector
          headerColors={['cyan', 'blue']}
          selectedTheme={config.tp5Visual?.colorTheme || 'cyan'}
          onThemeSelect={colorTheme => updateField('tp5Visual', null, 'colorTheme', colorTheme as TConfig)}
          label='Color Theme'
          className='color-palette tp5-color-palette'
        />
      )}
      {calloutStyle === 'drop-shadow' && (
        <Select
          value={accentPosition}
          section='tp5Visual'
          fieldName='accentPosition'
          label='Accent Position'
          options={[
            { label: 'Left', value: 'left' },
            { label: 'Top', value: 'top' }
          ]}
          updateField={updateField}
        />
      )}
      {showValueAboveMessage && (
        <CheckBox
          value={config.tp5Visual?.valueAboveMessage}
          section='tp5Visual'
          fieldName='valueAboveMessage'
          label='Value Above Message'
          updateField={updateField}
        />
      )}
    </div>
  )
}

export default Tp5VisualSection
