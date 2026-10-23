import { useContext } from 'react'

import { resolveAltTextDescription } from '@cdc/core/helpers/resolveAltTextDescription'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'

import ConfigContext from '../../../../context'
import type { MapContext } from '../../../../types/MapContext'

const GeneralSection = () => {
  const { config, setConfig } = useContext<MapContext>(ConfigContext)
  const general = config.general
  const updateField = updateFieldFactory(config, setConfig)
  const metadataKeys = Object.keys(config.dataMetadata || {})
  const hasMetadata = metadataKeys.length > 0
  const descType = config.altText?.type || ''
  const resolvedDescription = resolveAltTextDescription(config.altText, config.dataMetadata)

  const handleTitleStyleChange = (newTitleStyle: string) => {
    setConfig({
      ...config,
      general: {
        ...config.general,
        titleStyle: newTitleStyle
      },
      visual:
        newTitleStyle === 'legacy'
          ? config.visual
          : {
              ...config.visual,
              border: undefined,
              borderColorTheme: undefined,
              accent: undefined
            }
    })
  }

  return (
    <>
      <TextField
        value={general.title}
        data-testid='title-input'
        updateField={updateField}
        section='general'
        fieldName='title'
        id='title'
        label='Title'
        placeholder='Map Title'
        tooltip={
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>Title is required to set the name of the download file but can be hidden using the option below.</p>
            </Tooltip.Content>
          </Tooltip>
        }
      />
      <Select
        value={general.titleStyle}
        section='general'
        fieldName='titleStyle'
        label='Title Style'
        options={[
          { value: 'small', label: 'Small (h3)' },
          { value: 'large', label: 'Large (h2)' },
          { value: 'legacy', label: 'Legacy' }
        ]}
        onChange={event => handleTitleStyleChange(event.target.value)}
        tooltip={
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>
                Choose the visual style for the map title. Consider heading order on your page when selecting the title
                style. For 508 reasons, ensure your page follows a proper heading order.
              </p>
            </Tooltip.Content>
          </Tooltip>
        }
      />
      <CheckBox
        value={general.showTitle || false}
        section='general'
        subsection={null}
        fieldName='showTitle'
        label='Show Title'
        updateField={updateField}
      />
      <TextField
        value={general.superTitle || ''}
        updateField={updateField}
        section='general'
        fieldName='superTitle'
        label='Super Title'
        tooltip={
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>
                To keep the main title as short as possible, consider adding extra details in a super title, which
                displays in small font just above the main title in the visualization’s title bar. (If you hide the
                regular title, the super title does not display.)
              </p>
            </Tooltip.Content>
          </Tooltip>
        }
      />
      <TextField
        type='textarea'
        value={general.introText}
        updateField={updateField}
        section='general'
        fieldName='introText'
        label='Message'
        tooltip={
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>
                Explain how to use the map, introduce any special concepts, etc. This text displays above the
                visualization (and below the title bar, if displayed).
              </p>
            </Tooltip.Content>
          </Tooltip>
        }
      />
      <TextField
        type='textarea'
        value={general.subtext}
        updateField={updateField}
        section='general'
        fieldName='subtext'
        label='Subtext'
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
      <TextField
        type='textarea'
        value={general.footnotes}
        updateField={updateField}
        section='general'
        fieldName='footnotes'
        label='Footnotes'
        tooltip={
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>Use this text element for any supplemental information that should display below the data table.</p>
            </Tooltip.Content>
          </Tooltip>
        }
      />
      <Select
        value={config.locale}
        fieldName='locale'
        label='Language'
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
              <p>Choose a language to format dates and numbers and translate map labels.</p>
            </Tooltip.Content>
          </Tooltip>
        }
      />
      <Select
        value={descType}
        fieldName='altTextType'
        label='Alt Text Description'
        options={[
          { value: '', label: 'None' },
          { value: 'static', label: 'Static (manual text)' },
          { value: 'metadata', label: 'Data File Metadata' }
        ]}
        updateField={(_section, _subsection, _fieldName, value) => {
          if (value === '') {
            updateField(null, null, 'altText', undefined)
          } else {
            updateField(null, null, 'altText', { type: value as 'static' | 'metadata' })
          }
        }}
        tooltip={
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>
                Add a longer description for screen readers. The map title is always auto-generated. Use "Static" for
                manually written text, or "Data File Metadata" to pull it from a key in your data file.
              </p>
            </Tooltip.Content>
          </Tooltip>
        }
      />
      {descType === 'static' && (
        <TextField
          value={config.altText?.value || ''}
          fieldName='altTextValue'
          type='textarea'
          label='Description Text'
          placeholder='Longer interpretive description of map insights...'
          updateField={(_section, _subsection, _fieldName, value) => {
            updateField(null, null, 'altText', { ...config.altText, value })
          }}
        />
      )}
      {descType === 'metadata' &&
        (hasMetadata ? (
          <Select
            value={config.altText?.metadataKey || ''}
            fieldName='altTextMetadataKey'
            label='Description Metadata Field'
            options={[
              { value: '', label: 'Select Metadata Field...' },
              ...metadataKeys.map(key => ({
                value: key,
                label: `${key}: ${config.dataMetadata[key]}`
              }))
            ]}
            updateField={(_section, _subsection, _fieldName, value) => {
              updateField(null, null, 'altText', { ...config.altText, metadataKey: value })
            }}
          />
        ) : (
          <span className='subtext'>
            No metadata fields are available. Your data file must be a JSON object with a <code>data</code> array and
            sibling key-value pairs, for example: <code>{`{ "altDescription": "...", "data": [...] }`}</code>
          </span>
        ))}
      {resolvedDescription && (
        <div
          style={{
            marginTop: '1em',
            padding: '0.75em',
            background: '#f5f5f5',
            borderRadius: '4px',
            fontSize: '0.8em',
            textTransform: 'none'
          }}
        >
          <strong style={{ display: 'block', marginBottom: '0.25em' }}>Preview:</strong>
          <p data-testid='alt-text-desc-preview' style={{ margin: 0, fontStyle: 'italic' }}>
            {resolvedDescription}
          </p>
        </div>
      )}
    </>
  )
}

export default GeneralSection
