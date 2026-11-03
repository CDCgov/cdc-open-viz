import { useContext } from 'react'

import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'

import ConfigContext from '../../../ConfigContext'

const APPROVED_WAFFLE_CHART_OPTIONS = [
  { value: 'Waffle', label: 'Waffle' },
  { value: 'TP5 Waffle', label: 'TP5 Style Waffle' },
  { value: 'Gauge', label: 'Gauge' },
  { value: 'TP5 Gauge', label: 'TP5 Style Gauge' }
]

const GeneralSection = () => {
  const { config, updateConfig } = useContext(ConfigContext)
  const updateField = updateFieldFactory(config, updateConfig, true)

  return (
    <>
      <Select
        value={config.visualizationType}
        fieldName='visualizationType'
        label='Chart Type'
        updateField={updateField}
        options={APPROVED_WAFFLE_CHART_OPTIONS}
      />
      <TextField
        value={config.title}
        fieldName='title'
        label='Title'
        placeholder='Chart Title'
        updateField={updateField}
      />
      <CheckBox label='show title' value={config.showTitle} fieldName='showTitle' updateField={updateField} />
      <TextField
        type='textarea'
        value={config.content}
        fieldName='content'
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
        placeholder='Chart Subtext or Citation'
        updateField={updateField}
        tooltip={
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>
                Enter supporting text to display below the data visualization, if applicable. The following HTML tags
                are supported: strong, em, sup, and sub.
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
