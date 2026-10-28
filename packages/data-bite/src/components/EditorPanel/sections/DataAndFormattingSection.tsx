import { useContext } from 'react'

import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import { DATA_FUNCTIONS } from '@cdc/core/helpers/constants'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import { useDataColumns } from '@cdc/core/hooks/useDataColumns'

import Context from '../../../context'
import DataPointFiltersSection from './DataPointFiltersSection'
import TrendIndicatorSection from './TrendIndicatorSection'

const DataAndFormattingSection = () => {
  const { config, updateConfig, data, editorData } = useContext(Context)
  const updateField = updateFieldFactory(config, updateConfig, true)
  const columnSourceData = Array.isArray(editorData) && editorData.length ? editorData : data
  const columns = useDataColumns(columnSourceData)

  return (
    <>
      <ul className='column-edit'>
        <li className='two-col'>
          <Select
            value={config.dataColumn || ''}
            fieldName='dataColumn'
            label='Data Column'
            updateField={updateField}
            initial='Select'
            required={true}
            options={columns}
          />
          <Select
            value={config.dataFunction || ''}
            fieldName='dataFunction'
            label='Data Function'
            updateField={updateField}
            initial='Select'
            required={true}
            options={
              Array.isArray(DATA_FUNCTIONS) ? DATA_FUNCTIONS : DATA_FUNCTIONS ? Object.values(DATA_FUNCTIONS) : []
            }
          />
        </li>
      </ul>
      <span className='divider-heading'>Number Formatting</span>
      <ul className='column-edit'>
        <li className='three-col'>
          <TextField
            value={config.dataFormat.prefix}
            section='dataFormat'
            fieldName='prefix'
            label='Prefix'
            updateField={updateField}
          />
          <TextField
            value={config.dataFormat.suffix}
            section='dataFormat'
            fieldName='suffix'
            label='Suffix'
            updateField={updateField}
          />
          <TextField
            type='number'
            value={config.dataFormat.roundToPlace}
            section='dataFormat'
            fieldName='roundToPlace'
            label='Round'
            updateField={updateField}
            min='0'
            max='99'
          />
        </li>
      </ul>
      <CheckBox
        value={config.dataFormat.commas}
        section='dataFormat'
        fieldName='commas'
        label='Add commas'
        updateField={updateField}
      />
      <CheckBox
        value={config.dataFormat.ignoreZeros}
        section='dataFormat'
        fieldName='ignoreZeros'
        label='Ignore Zeros'
        updateField={updateField}
      />
      <hr className='accordion__divider' />
      <TrendIndicatorSection />
      <hr className='accordion__divider' />

      <DataPointFiltersSection />
    </>
  )
}

export default DataAndFormattingSection
