import { CheckBox, Select } from '../Inputs'

type StyleTreatmentValue = 'legacy' | 'tp5'

type StyleTreatmentSectionProps = {
  styleTreatment: StyleTreatmentValue
  onStyleTreatmentChange: (value: StyleTreatmentValue) => void
  showStyleTreatment?: boolean
  showLegacyControls?: boolean
  border?: boolean
  borderColorTheme?: boolean
  accent?: boolean
  updateField: Function
}

const StyleTreatmentSection = ({
  styleTreatment,
  onStyleTreatmentChange,
  showStyleTreatment = true,
  showLegacyControls = true,
  border,
  borderColorTheme,
  accent,
  updateField
}: StyleTreatmentSectionProps) => {
  return (
    <div className='cove-accordion__panel-section checkbox-group'>
      {showStyleTreatment && (
        <Select
          label='Style Treatment'
          fieldName='styleTreatment'
          value={styleTreatment}
          style={{ width: '100%' }}
          options={[
            { label: 'Legacy', value: 'legacy' },
            { label: 'TP5', value: 'tp5' }
          ]}
          onChange={event => onStyleTreatmentChange(event.target.value as StyleTreatmentValue)}
        />
      )}
      {showLegacyControls && styleTreatment === 'legacy' && (
        <>
          <CheckBox
            value={border}
            section='visual'
            fieldName='border'
            label='Display Border'
            updateField={updateField}
          />
          <CheckBox
            value={borderColorTheme}
            section='visual'
            fieldName='borderColorTheme'
            label='Use Border Color Theme'
            updateField={updateField}
          />
          <CheckBox
            value={accent}
            section='visual'
            fieldName='accent'
            label='Use Accent Style'
            updateField={updateField}
          />
        </>
      )}
    </div>
  )
}

export default StyleTreatmentSection
