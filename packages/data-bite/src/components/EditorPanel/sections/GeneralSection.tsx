import { useContext } from 'react'

import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'

import { BITE_LOCATIONS } from '../../../constants'
import Context from '../../../context'

const GeneralSection = () => {
  const { config, updateConfig } = useContext(Context)
  const updateField = updateFieldFactory(config, updateConfig, true)

  return (
    <>
      <Select
        value={config.biteStyle}
        fieldName='biteStyle'
        label='Data Bite Style'
        updateField={updateField}
        options={Object.entries(BITE_LOCATIONS).map(([key, value]) => ({ value: key, label: value }))}
        initial='Select'
      />
      <TextField
        value={config.title}
        fieldName='title'
        label='Title'
        placeholder='Data Bite Title'
        updateField={updateField}
      />
      <CheckBox
        value={config.visual?.showTitle}
        section='visual'
        checked={config.visual?.showTitle}
        fieldName='showTitle'
        label='Show Title'
        updateField={updateField}
      />

      <TextField
        type='textarea'
        value={config.biteBody}
        fieldName='biteBody'
        label='Message'
        updateField={updateField}
        tooltip={
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>
                Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup,
                and sub.
              </p>
            </Tooltip.Content>
          </Tooltip>
        }
      />
      <TextField
        value={config.subtext}
        fieldName='subtext'
        label='Subtext/Citation'
        placeholder='Data Bite Subtext or Citation'
        updateField={updateField}
        tooltip={
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>
                Enter supporting text to display below the data visualization, if applicable. The following HTML tags
                are supported: strong, em, sup, and sub. You can also use markup variables like {'{{variable-name}}'} to
                display dynamic data.
              </p>
            </Tooltip.Content>
          </Tooltip>
        }
      />
      <Select
        value={config.locale}
        fieldName='locale'
        label='Language for dates and numbers'
        updateField={updateField}
        options={[
          { value: 'en-US', label: 'English (en-US)' },
          { value: 'es-MX', label: 'Spanish (es-MX)' }
        ]}
        tooltip={
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>
                Change the language (locale) for this visualization to alter the way dates and numbers are formatted.
              </p>
            </Tooltip.Content>
          </Tooltip>
        }
      />
    </>
  )
}

export default GeneralSection
