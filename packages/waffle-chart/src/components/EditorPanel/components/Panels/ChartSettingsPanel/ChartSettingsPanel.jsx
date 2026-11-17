import { useContext } from 'react'

import { Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'

import ConfigContext from '../../../../../ConfigContext'
import defaults from '../../../../../data/initial-state'

const ChartSettingsPanel = () => {
  const { config, updateConfig } = useContext(ConfigContext)
  const updateField = updateFieldFactory(config, updateConfig, true)
  const shape = ['circle', 'square', 'person'].includes(config.shape) ? config.shape : defaults.shape
  const orientation = ['horizontal', 'vertical'].includes(config.orientation)
    ? config.orientation
    : defaults.orientation

  return (
    <>
      <Select
        value={shape}
        fieldName='shape'
        label='Shape'
        updateField={updateField}
        options={['circle', 'square', 'person']}
      />
      {config.visualizationType !== 'TP5 Waffle' && (
        <>
          <div
            className='cove-accordion__panel-row cove-accordion__small-inputs'
            style={{ marginTop: '1rem', marginBottom: '1rem' }}
          >
            <div className='cove-accordion__panel-col'>
              <TextField
                type='number'
                value={config.nodeWidth ?? defaults.nodeWidth}
                fieldName='nodeWidth'
                label='Width'
                updateField={updateField}
              />
            </div>
            <div className='cove-accordion__panel-col'>
              <TextField
                type='number'
                value={config.nodeSpacer ?? defaults.nodeSpacer}
                fieldName='nodeSpacer'
                label='Spacer'
                updateField={updateField}
              />
            </div>
          </div>

          <div className='cove-input-group'>
            <Select
              value={orientation}
              fieldName='orientation'
              label='Layout'
              updateField={updateField}
              options={['horizontal', 'vertical']}
            />
          </div>

          <div className='cove-input-group'>
            <label>
              <span className='edit-label column-heading cove-input__label'>Data Point Font Size</span>
            </label>
            <div className='cove-accordion__panel-row cove-accordion__small-inputs align-center'>
              <div className='cove-accordion__panel-col'>
                <TextField
                  type='number'
                  value={config.fontSize ?? defaults.fontSize}
                  fieldName='fontSize'
                  updateField={updateField}
                />
              </div>
              <div className='cove-accordion__panel-col' style={{ display: 'flex', alignItems: 'center' }}>
                <label className='accordion__panel-label--muted'> default (50px)</label>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default ChartSettingsPanel
