import { CheckBox, Select } from '../Inputs'
import { UpdateFieldFunc } from '../../../types/UpdateFieldFunc'
import { SharedTp5VisualOptions } from '../../../types/SharedTp5VisualOptions'

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
  return (
    <div className='checkbox-group'>
      <Select
        value={config.tp5Visual?.calloutStyle || 'callout'}
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
