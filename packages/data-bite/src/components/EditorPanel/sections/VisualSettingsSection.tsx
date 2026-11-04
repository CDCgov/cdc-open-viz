import { useContext } from 'react'

import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import { Tp5VisualSection } from '@cdc/core/components/EditorPanel/sections/Tp5VisualSection'
import { VisualSection } from '@cdc/core/components/EditorPanel/sections/VisualSection'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'

import Context from '../../../context'

type VisualSettingsSectionProps = {
  variant: 'tp5' | 'standard'
}

const VisualSettingsSection = ({ variant }: VisualSettingsSectionProps) => {
  const { config, updateConfig } = useContext(Context)
  const updateField = updateFieldFactory(config, updateConfig, true)

  if (variant === 'tp5') {
    return (
      <>
        <Tp5VisualSection config={config} updateField={updateField} />
        <CheckBox
          value={config.visual?.useWrap}
          section='visual'
          fieldName='useWrap'
          label='Value Above Message'
          updateField={updateField}
        />
        {/* TODO: Uncomment when ready to release Display Border feature
        <CheckBox
          value={config.visual?.border}
          section='visual'
          fieldName='border'
          label='Display Border'
          updateField={updateField}
        />
        */}
      </>
    )
  }

  return (
    <VisualSection
      config={config}
      updateField={updateField}
      updateConfig={updateConfig}
      themeSelectorPosition='after'
      beforeCheckboxes={
        <>
          <TextField
            type='number'
            value={config.biteFontSize}
            fieldName='biteFontSize'
            label='Bite Font Size'
            updateField={updateField}
            min={17}
            max={65}
          />
          <Select
            value={config.fontSize}
            fieldName='fontSize'
            label='Overall Font Size'
            updateField={updateField}
            options={['small', 'medium', 'large']}
          />
        </>
      }
    />
  )
}

export default VisualSettingsSection
