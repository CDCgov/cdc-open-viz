import React, { useMemo } from 'react'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '../ui/Icon'
import { CheckBox, TextField, Select } from './Inputs'
import MultiSelect from '../MultiSelect'
import { UpdateFieldFunc } from '../../types/UpdateFieldFunc'
import { Visualization } from '../../types/Visualization'
import _ from 'lodash'
import { Column } from '../../types/Column'

interface DataTableProps {
  config: Partial<Visualization>
  updateField: UpdateFieldFunc<string | boolean | string[] | number | Record<string, Partial<Column>>>
  isDashboard: boolean
  columns: string[]
}

const PLACEHOLDER = '-Select-'

const DataTableEditor: React.FC<DataTableProps> = ({ config, updateField, isDashboard, columns: dataColumns }) => {
  const isLoadedFromUrl = config.dataKey?.includes('http://') || config?.dataKey?.includes('https://')
  const excludedColumns = useMemo(() => {
    return Object.keys(config.columns)
      .map<[string, boolean]>(key => [key, config.columns[key].dataTable])
      .filter(([key, dataTable]) => !dataTable)
      .map(([key]) => key)
  }, [config.columns])

  const groupPivotColumns = useMemo(() => {
    const columns: string[] = config.data.flatMap(Object.keys)
    const cols = _.uniq(columns).filter(key => {
      return true
    })
    return cols
  }, [config.data])

  const changeGroupBy = (value: string) => {
    if (value === PLACEHOLDER) value = undefined
    updateField('table', null, 'groupBy', value)
  }

  const excludeColumns = (section, subSection, fieldName, excludedColNames: string[]) => {
    const newColumns = _.cloneDeep(config.columns)

    const colNames: string[] = []
    for (let colKey in newColumns) {
      const col = newColumns[colKey]
      colNames.push(col.name) // keep track of all column names
      if (excludedColNames.includes(col.name)) {
        // ensure all excluded columns are set to false
        newColumns[colKey].dataTable = false
      } else {
        newColumns[colKey].dataTable = true
      }
    }
    excludedColNames.forEach(colName => {
      if (!colNames.includes(colName)) {
        // make sure there is a column config to set to dataTable: false
        newColumns[colName] = { name: colName, dataTable: false }
      }
    })
    updateField(null, null, 'columns', newColumns)
  }

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
      {config.type !== 'table' && (
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
                <Icon
                  display='question'
                  style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>
                  Hiding the data table may affect accessibility. An alternate form of accessing visualization data is a
                  508 requirement.
                </p>
              </Tooltip.Content>
            </Tooltip>
          }
        />
      )}

      {config.visualizationType !== 'Box Plot' && config.type !== 'table' && (
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
                <Icon
                  display='question'
                  style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>This will draw the data table with vertical data instead of horizontal.</p>
              </Tooltip.Content>
            </Tooltip>
          }
        />
      )}

      {config.type !== 'table' && (
        <TextField
          value={config.table.indexLabel}
          section='table'
          fieldName='indexLabel'
          label='Index Column Header'
          updateField={updateField}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>
                  To comply with 508 standards, if the first column in the data table has no header, enter a brief one
                  here.
                </p>
              </Tooltip.Content>
            </Tooltip>
          }
        />
      )}
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
      <CheckBox
        value={config.table.limitHeight}
        section='table'
        fieldName='limitHeight'
        label=' Limit Table Height'
        updateField={updateField}
      />
      {config.table.limitHeight && (
        <TextField
          value={config.table.height}
          section='table'
          fieldName='height'
          label='Data Table Height'
          type='number'
          min={0}
          max={500}
          placeholder='Height(px)'
          updateField={updateField}
        />
      )}
      {config?.visualizationType !== 'Sankey' && (
        <MultiSelect
          key={excludedColumns.join('') + 'excluded'}
          options={dataColumns.map(c => ({ label: c, value: c }))}
          selected={excludedColumns}
          fieldName='dataTable'
          label='Exclude Columns'
          section='columns'
          updateField={excludeColumns}
        />
      )}
      <CheckBox
        value={config.table.collapsible}
        fieldName='collapsible'
        label=' Collapsible'
        section='table'
        updateField={updateField}
      />
      {config.table.collapsible !== false && (
        <CheckBox
          value={config.table.expanded}
          fieldName='expanded'
          label=' Expanded by Default'
          section='table'
          updateField={updateField}
        />
      )}
      {isDashboard && config.type !== 'table' && (
        <CheckBox
          value={config.table.showDataTableLink}
          fieldName='showDataTableLink'
          label='Show Data Table Name & Link'
          section='table'
          updateField={updateField}
        />
      )}
      {isLoadedFromUrl && (
        <CheckBox
          value={config.table.showDownloadUrl}
          fieldName='showDownloadUrl'
          label='Show URL to Automatically Updated Data'
          section='table'
          updateField={updateField}
        />
      )}
      {config.type !== 'table' && (
        <CheckBox
          value={config.table.showDownloadImgButton}
          fieldName='showDownloadImgButton'
          label='Display Image Button'
          section='table'
          updateField={updateField}
        />
      )}
      {config.type !== 'table' && (
        <CheckBox
          value={config.table.showDownloadLinkBelow}
          fieldName='showDownloadLinkBelow'
          label='Show Download Link Below Table'
          section='table'
          updateField={updateField}
        />
      )}
      <label>
        <span className='edit-label column-heading'>Table Cell Min Width</span>
        <input
          type='number'
          value={config.table.cellMinWidth ? config.table.cellMinWidth : 0}
          onChange={e => updateField('table', null, 'cellMinWidth', e.target.value)}
        />
      </label>
      {config?.visualizationType !== 'Sankey' && (
        <Select
          value={config.table.groupBy}
          fieldName={'groupBy'}
          section='table'
          label='Group By'
          updateField={(_section, _subSection, _fieldName, value) => changeGroupBy(value)}
          initial={PLACEHOLDER}
          options={groupPivotColumns.filter(
            col => col !== config.table.pivot?.columnName && !config.table.pivot?.valueColumns.includes(col)
          )}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>
                  Choose a column to use for grouping data rows. The selected column will not be shown in the data
                  table. You will only be able to choose a column which does not have a column configuration.
                </p>
              </Tooltip.Content>
            </Tooltip>
          }
        />
      )}
      <Select
        label='Pivot Column'
        tooltip={
          <Tooltip style={{ textTransform: 'none' }}>
            <Tooltip.Target>
              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
            </Tooltip.Target>
            <Tooltip.Content>
              <p>Select a Column whos data values will be pivoted to Column Values.</p>
            </Tooltip.Content>
          </Tooltip>
        }
        value={config.table.pivot?.columnName}
        options={groupPivotColumns.filter(
          col => col !== config.table.groupBy && !config.table.pivot?.valueColumns.includes(col)
        )}
        initial='-Select-'
        section='table'
        subsection='pivot'
        fieldName='columnName'
        updateField={updateField}
      />
      {config.table.pivot?.columnName && (
        <MultiSelect
          key={config.table.pivot?.columnName}
          options={groupPivotColumns
            .filter(col => col !== config.table.pivot?.columnName && col !== config.table.groupBy)
            .map(c => ({ label: c, value: c }))}
          selected={config.table.pivot?.valueColumns}
          label='Pivot Value Column(s) '
          section='table'
          subsection='pivot'
          fieldName='valueColumns'
          updateField={updateField}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>The column(s) whos values will be pivoted under the column selected as the Filter.</p>
              </Tooltip.Content>
            </Tooltip>
          }
        />
      )}
    </>
  )
}

export default DataTableEditor
