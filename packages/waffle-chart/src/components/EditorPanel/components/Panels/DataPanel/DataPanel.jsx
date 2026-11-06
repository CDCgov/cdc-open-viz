import { useContext, useEffect } from 'react'

import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import { useDataColumns } from '@cdc/core/hooks/useDataColumns'

import { DATA_FUNCTIONS, DATA_OPERATORS } from '../../../../../CdcWaffleChart'
import ConfigContext from '../../../../../ConfigContext'
import DataPointFilters from './DataPointFilters'
import TrendIndicator from './TrendIndicator'

const DataPanel = () => {
  const { config, updateConfig, data, editorData } = useContext(ConfigContext)
  const updateField = updateFieldFactory(config, updateConfig, true)
  const columnSourceData = Array.isArray(editorData) && editorData.length ? editorData : data
  const columns = useDataColumns(columnSourceData)
  const inputSelectStyle = condition => (condition ? { backgroundColor: '#ffd2d2', color: '#d8000c' } : {})

  useEffect(() => {
    //Verify comparate data type
    let operators = ['<', '>', '<=', '>=']
    if (config.dataConditionalComparate !== '') {
      if (operators.indexOf(config.dataConditionalOperator) > -1 && isNaN(config.dataConditionalComparate)) {
        updateConfig({ ...config, invalidComparate: true })
      } else {
        if (config.invalidComparate) {
          updateConfig({ ...config, invalidComparate: false })
        }
      }
    } else {
      updateConfig({ ...config, invalidComparate: false })
    }
  }, [config.dataConditionalOperator, config.dataConditionalComparate])

  return (
    <>
      <h4 style={{ fontWeight: '600' }}>Numerator</h4>
      <div className='cove-accordion__panel-section'>
        <div className='cove-input-group'>
          <Select
            style={inputSelectStyle(!config.dataColumn)}
            value={config.dataColumn || ''}
            fieldName='dataColumn'
            label='Data Column'
            updateField={updateField}
            initial='Select'
            options={columns}
          />
        </div>

        <div className='cove-input-group'>
          <Select
            style={inputSelectStyle(!config.dataFunction)}
            value={config.dataFunction || ''}
            fieldName='dataFunction'
            label='Data Function'
            updateField={updateField}
            initial='Select'
            options={DATA_FUNCTIONS}
          />
        </div>

        <div className='cove-input-group'>
          <label>
            <span className='edit-label cove-input__label'>Data Conditional</span>
          </label>
          <div className='cove-accordion__panel-row cove-accordion__small-inputs'>
            <div className='cove-accordion__panel-col'>
              <Select
                value={config.dataConditionalColumn || ''}
                fieldName='dataConditionalColumn'
                updateField={updateField}
                initial='Select'
                options={columns}
              />
            </div>
            <div className='cove-accordion__panel-col'>
              <Select
                value={config.dataConditionalOperator || ''}
                fieldName='dataConditionalOperator'
                updateField={updateField}
                initial='Select'
                options={DATA_OPERATORS}
              />
            </div>
            <div className='cove-accordion__panel-col'>
              <TextField
                value={config.dataConditionalComparate}
                fieldName={'dataConditionalComparate'}
                updateField={updateField}
                className={config.invalidComparate ? 'cove-accordion__input-error' : ''}
                style={{ minHeight: '2rem' }}
              />
            </div>
          </div>
        </div>

        {config.invalidComparate && (
          <div className='cove-accordion__panel-error'>
            Non-numerical comparate values can only be used with = or ≠.
          </div>
        )}
      </div>
      <div className='cove-accordion__panel-row align-center'>
        <div className='cove-accordion__panel-col'>
          <h4 style={{ fontWeight: '600' }}>Denominator</h4>
        </div>
        <div className='cove-accordion__panel-col'>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <label className='cove-accordion__panel-label--inline'>Select from data</label>
            <CheckBox value={config.customDenom} fieldName='customDenom' updateField={updateField} />
          </div>
        </div>
      </div>
      <div className='cove-accordion__panel-section'>
        {!config.customDenom && (
          <div className='cove-accordion__panel-row align-center'>
            <div className='cove-accordion__panel-col'>
              <TextField value={config.dataDenom} fieldName='dataDenom' updateField={updateField} />
            </div>
            <div className='cove-accordion__panel-col' style={{ display: 'flex', alignItems: 'center' }}>
              <label className='cove-accordion__panel-label--muted'>default (100)</label>
            </div>
          </div>
        )}
        {config.customDenom && (
          <>
            <Select
              value={config.dataDenomColumn || ''}
              fieldName='dataDenomColumn'
              label='Data Column'
              updateField={updateField}
              initial='Select'
              options={columns}
            />
            <Select
              value={config.dataDenomFunction || ''}
              fieldName='dataDenomFunction'
              label='Data Function'
              updateField={updateField}
              initial='Select'
              options={DATA_FUNCTIONS}
            />
          </>
        )}
      </div>
      <ul className='column-edit'>
        <li className='three-col'>
          <div style={{ marginRight: '1rem' }}>
            <TextField value={config.prefix} fieldName='prefix' label='Prefix' updateField={updateField} />
          </div>
          <div style={{ marginRight: '1rem' }}>
            <TextField value={config.suffix} fieldName='suffix' label='Suffix' updateField={updateField} />
          </div>
          <div>
            <TextField
              type='number'
              value={config.roundToPlace}
              fieldName='roundToPlace'
              label='Round'
              updateField={updateField}
            />
          </div>
        </li>
      </ul>
      <CheckBox
        value={config.dataFormat?.commas ?? false}
        section='dataFormat'
        fieldName='commas'
        label='Add commas'
        updateField={updateField}
      />
      <>
        <hr className='cove-accordion__divider' />
        <div className='cove-accordion__panel-section reverse-labels'>
          <TextField
            value={config.valueDescription}
            label='Value Descriptor'
            fieldName='valueDescription'
            updateField={updateField}
            placeholder='e.g., out of'
          />
          <CheckBox
            value={config.showPercent}
            label='Show Percentage'
            fieldName='showPercent'
            updateField={updateField}
          />
          <CheckBox
            label='Show Denominator'
            value={config.showDenominator}
            fieldName='showDenominator'
            updateField={updateField}
          />
        </div>
      </>
      <TrendIndicator columns={columns} />
      <DataPointFilters columns={columns} columnSourceData={columnSourceData} />
    </>
  )
}

export default DataPanel
