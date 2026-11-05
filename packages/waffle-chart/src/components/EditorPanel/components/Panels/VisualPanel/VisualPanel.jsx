import { useContext } from 'react'

import { CheckBox, Select } from '@cdc/core/components/EditorPanel/Inputs'
import { Tp5VisualSection, VisualSection } from '@cdc/core/components/panels/VisualPanel'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'

import ConfigContext from '../../../../../ConfigContext'

const VisualPanel = ({ variant }) => {
  const { config, updateConfig } = useContext(ConfigContext)
  const updateField = updateFieldFactory(config, updateConfig, true)

  if (variant === 'tp5') {
    return (
      <>
        <Tp5VisualSection config={config} updateField={updateField} />
        {config.visualizationType === 'TP5 Gauge' && (
          <CheckBox
            value={config.visual?.useWrap}
            section='visual'
            fieldName='useWrap'
            label='Value Above Message'
            updateField={updateField}
          />
        )}
      </>
    )
  }

  return (
    <VisualSection
      config={config}
      updateField={updateField}
      updateConfig={updateConfig}
      beforeCheckboxes={
        <Select
          value={config.overallFontSize}
          fieldName='overallFontSize'
          label='Overall Font Size'
          updateField={updateField}
          options={['small', 'medium', 'large']}
        />
      }
    />
  )
}

export default VisualPanel
