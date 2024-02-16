import React from 'react'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '../ui/Icon'
import { CheckBox, TextField } from './Inputs'
import type { Table } from '@cdc/core/types/Table'
import MultiSelect from '../MultiSelect'
import { UpdateFieldFunc } from '../../types/UpdateFieldFunc'
import { Visualization } from '../../types/Visualization'

interface DataTableProps {
  config: Visualization
  updateField: UpdateFieldFunc<string | boolean | string[] | number>
  isDashboard: boolean
  columns: string[]
}

const DataTable: React.FC<DataTableProps> = ({ config, updateField, isDashboard, columns }) => {
  const isLoadedFromUrl = config.dataKey?.includes('http://') || config?.dataKey?.includes('https://')
  return (
    <>
      <TextField
        value={config.table.label}
        updateField={updateField}
        section='table'
        fieldName='label'
        id='tableLabel'
        label='Data Table Title'
        placeholder='Data Table'
        tooltip={
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>Label is required for Data Table for 508 Compliance</p>
            </Tooltip.Content>
          </Tooltip>
        }
      />
      <CheckBox
        value={config.table.show}
        fieldName='show'
        label='Show Data Table'
        section='table'
        updateField={updateField}
        className='column-heading'
        tooltip={
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>Hiding the data table may affect accessibility. An alternate form of accessing visualization data is a 508 requirement.</p>
            </Tooltip.Content>
          </Tooltip>
        }
      />
      {config.visualizationType !== 'Box Plot' && (
        <CheckBox
          value={config.table.showVertical}
          fieldName='showVertical'
          label='Show Vertical Data'
          section='table'
          updateField={updateField}
          className='column-heading'
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>This will draw the data table with vertical data instead of horizontal.</p>
              </Tooltip.Content>
            </Tooltip>
          }
        />
      )}
      <TextField value={config.table.indexLabel} section='table' fieldName='indexLabel' label='Index Column Header' updateField={updateField} />
      <TextField
        value={config.table.caption}
        updateField={updateField}
        section='table'
        type='textarea'
        fieldName='caption'
        label='Screen Reader Description'
        placeholder=' Data table'
        tooltip={
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>Enter a description of the data table to be read by screen readers.</p>
            </Tooltip.Content>
          </Tooltip>
        }
      />
      <CheckBox value={config.table.limitHeight} section='table' fieldName='limitHeight' label='Limit Table Height' updateField={updateField} />
      {config.type !== 'table' && (
        <CheckBox
          value={config.table.customTableConfig}
          fieldName='customTableConfig'
          label='Customize Table Config'
          section='table'
          updateField={updateField}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>This will display all available columns in the data set. It will not show any columns where all of the column cells are null.</p>
              </Tooltip.Content>
            </Tooltip>
          }
        />
      )}
      {config.table.customTableConfig && <MultiSelect options={columns.map(c => ({ label: c, value: c }))} fieldName='excludeColumns' label='Exclude Columns' section='table' updateField={updateField} />}
      {config.table.limitHeight && <TextField value={config.table.height} section='table' fieldName='height' label='Data Table Height' type='number' min={0} max={500} placeholder='Height(px)' updateField={updateField} />}
      <CheckBox value={config.table.expanded} fieldName='expanded' label='Expanded by Default' section='table' updateField={updateField} />
      {isDashboard && config.type !== 'table' && <CheckBox value={config.table.showDataTableLink} fieldName='showDataTableLink' label='Show Data Table Name & Link' section='table' updateField={updateField} />}
      {isLoadedFromUrl && <CheckBox value={config.table.showDownloadUrl} fieldName='showDownloadUrl' label='Show URL to Automatically Updated Data' section='table' updateField={updateField} />}
      <CheckBox value={config.table.download} fieldName='download' label='Show Download CSV Link' section='table' updateField={updateField} />
      {config.type !== 'table' && <CheckBox value={config.table.showDownloadImgButton} fieldName='showDownloadImgButton' label='Display Image Button' section='table' updateField={updateField} />}
      <label>
        <span className='edit-label column-heading'>Table Cell Min Width</span>
        <input type='number' value={config.table.cellMinWidth ? config.table.cellMinWidth : 0} onChange={e => updateField('table', null, 'cellMinWidth', e.target.value)} />
      </label>
    </>
  )
}

export default DataTable
