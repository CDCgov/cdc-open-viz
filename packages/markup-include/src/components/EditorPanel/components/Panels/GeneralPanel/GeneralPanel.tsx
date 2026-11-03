import { useContext } from 'react'
import { Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import ConfigContext from '../../../../../ConfigContext'

const GeneralPanel = () => {
  const { config, updateConfig } = useContext(ConfigContext)
  const { contentEditor } = config || {}
  const isTp5Style = contentEditor?.style === 'tp5'
  const updateField = updateFieldFactory(config, updateConfig, true)

  return (
    <>
      <Select
        value={contentEditor?.style || 'default'}
        section='contentEditor'
        fieldName='style'
        label='Style'
        updateField={updateField}
        options={[
          { value: 'default', label: 'Default' },
          { value: 'tp5', label: 'TP5' }
        ]}
      />
      <TextField
        value={contentEditor?.title || ''}
        section='contentEditor'
        fieldName='title'
        label='Title'
        placeholder='Markup Include Title'
        updateField={updateField}
      />
      {!isTp5Style && (
        <Select
          value={contentEditor?.titleStyle || 'small'}
          section='contentEditor'
          fieldName='titleStyle'
          label='Title Style'
          updateField={updateField}
          options={[
            { value: 'small', label: 'Small (h3)' },
            { value: 'large', label: 'Large (h2)' },
            { value: 'legacy', label: 'Legacy' }
          ]}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>Choose the visual style for the title.</p>
                <p>
                  Consider heading order on your page when selecting the title style. For 508 reasons, ensure your page
                  follows a proper heading order.
                </p>
              </Tooltip.Content>
            </Tooltip>
          }
        />
      )}
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

export default GeneralPanel
