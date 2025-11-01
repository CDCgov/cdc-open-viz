import Tooltip from '../ui/Tooltip'
import Icon from '../ui/Icon'
import { Select, TextField } from './Inputs'
import { BaseVisualizationConfig } from '../../types/BaseVisualizationConfig'
import { UpdateFieldFunc } from '../../types/UpdateFieldFunc'
import { Column } from '../../types/Column'
import _ from 'lodash'
import React, { useState } from 'react'
import FieldSetWrapper from './FieldSetWrapper'

interface ColumnsEditorProps {
  config: Partial<BaseVisualizationConfig>
  updateField: UpdateFieldFunc<string | boolean | string[] | number | Column | Record<string, Partial<Column>>>
  deleteColumn: (colName: string) => void
}

type OpenControls = [Record<string, boolean>, Function] // useState type

const FieldSet: React.FC<ColumnsEditorProps & { colKey: string; controls: OpenControls }> = ({
  config,
  deleteColumn,
  updateField,
  colKey,
  controls
}) => {
  const [openControls, setOpenControls] = controls

  const editColumn = (key, value) => {
    if (key === 'dataTable' && value === true) {
      const newColumns = _.cloneDeep(config.columns) // must pass new columns object to trigger re-render of DataTableEditor
      newColumns[colKey] = { ...newColumns[colKey], dataTable: value }
      updateField(null, null, 'columns', newColumns)
    } else {
      updateField('columns', colKey, key, value)
    }
  }

  const changeName = value => {
    const newColumns = _.cloneDeep(config.columns)
    const currentCol = config.columns[colKey]
    const newColumn = { ...currentCol, name: value, label: value }
    if (newColumn.dataTable === undefined) {
      newColumn.dataTable = true
    }
    if (value !== colKey) {
      newColumns[value] = newColumn
      delete newColumns[colKey]
      const newControls = { ..._.cloneDeep(openControls), [value]: true }
      delete newControls[colKey]
      setOpenControls(newControls)
    }
    updateField(null, null, 'columns', newColumns)
  }

  const getColumns = () => {
    const columns: string[] = config.data.flatMap(row => {
      return Object.keys(row).map(columnName => columnName)
    })
    const configuredColumns = Object.values(config.columns).map(col => col.name)
    const cols = _.uniq(columns).filter(key => {
      if (config.table.groupBy === key) return false
      if (configuredColumns.includes(key)) return false
      return true
    })
    if (config.columns[colKey]?.name) cols.push(config.columns[colKey].name)
    return cols
  }

  const colName = config.columns[colKey]?.name

  return (
    <FieldSetWrapper
      fieldName={colName}
      fieldKey={colKey}
      fieldType='Column'
      controls={controls}
      deleteField={() => deleteColumn(colKey)}
    >
      <Select
        label='Column'
        value={config.columns[colKey]?.name}
        fieldName='name'
        section={'columns'}
        initial={'-Select-'}
        options={getColumns()}
        updateField={(_section, _subsection, _fieldName, value) => changeName(value)}
      />
      {config.type !== 'table' && (
        <Select
          label='Associate to Series'
          value={config.columns[colKey]?.series}
          fieldName={'series'}
          section='columns'
          initial={'Select series'}
          options={config.series?.map(series => series.dataKey) || []}
          updateField={(_section, _subsection, _fieldName, value) => editColumn('series', value)}
        />
      )}

      <TextField
        value={config.columns[colKey].label}
        section='columns'
        subsection={colKey}
        fieldName='label'
        label='Label'
        updateField={updateField}
      />
      <ul className='column-edit'>
        <li className='three-col'>
          <TextField
            value={config.columns[colKey].prefix}
            section='columns'
            subsection={colKey}
            fieldName='prefix'
            label='Prefix'
            updateField={updateField}
          />
          <TextField
            value={config.columns[colKey].suffix}
            section='columns'
            subsection={colKey}
            fieldName='suffix'
            label='Suffix'
            updateField={updateField}
          />
          <TextField
            type='number'
            value={config.columns[colKey].roundToPlace}
            section='columns'
            subsection={colKey}
            fieldName='roundToPlace'
            label='Round'
            updateField={updateField}
          />
        </li>
        <li>
          <label className='checkbox'>
            <input
              type='checkbox'
              checked={config.columns[colKey].commas}
              onChange={event => {
                editColumn('commas', event.target.checked)
              }}
            />
            <span className='edit-label'>Add Commas to Numbers</span>
          </label>
        </li>
        <li>
          {config.table.showVertical && (
            <label className='checkbox'>
              <input
                type='checkbox'
                checked={config.columns[colKey].dataTable ?? true}
                onChange={event => {
                  editColumn('dataTable', event.target.checked)
                }}
              />
              <span className='edit-label'>Show in Data Table</span>
            </label>
          )}
        </li>
        {config.visualizationType === 'Pie' && (
          <li>
            <label className='checkbox'>
              <input
                type='checkbox'
                checked={config.columns[colKey].showInViz}
                onChange={event => {
                  editColumn('showInViz', event.target.checked)
                }}
              />
              <span className='edit-label'>Show in Visualization</span>
            </label>
          </li>
        )}
        {config.type !== 'table' && (
          <li>
            <label className='checkbox'>
              <input
                type='checkbox'
                checked={config.columns[colKey].tooltips || false}
                onChange={event => {
                  updateField('columns', colKey, 'tooltips', event.target.checked)
                }}
              />
              <span className='edit-label'>Show in tooltip</span>
            </label>
          </li>
        )}

        {config.visualizationType === 'Forest Plot' && (
          <>
            <li>
              <label className='checkbox'>
                <input
                  type='checkbox'
                  checked={config.columns[colKey].forestPlot || false}
                  onChange={event => {
                    editColumn('forestPlot', event.target.checked)
                  }}
                />
                <span className='edit-label'>Show in Forest Plot</span>
              </label>
            </li>
            <li>
              <label className='checkbox'>
                <input
                  type='checkbox'
                  checked={config.columns[colKey].forestPlotAlignRight || false}
                  onChange={event => {
                    editColumn('forestPlotAlignRight', event.target.checked)
                  }}
                />
                <span className='edit-label'>Align Right</span>
              </label>
            </li>

            {!config.columns[colKey].forestPlotAlignRight && (
              <li>
                <label className='text'>
                  <span className='edit-label'>Forest Plot Starting Point</span>
                  <input
                    type='number'
                    value={config.columns[colKey].forestPlotStartingPoint || 0}
                    onChange={event => {
                      editColumn('forestPlotStartingPoint', event.target.value)
                    }}
                  />
                </label>
              </li>
            )}
          </>
        )}
      </ul>
      <label>
        <span className='edit-label column-heading'>Order</span>
        <input
          onWheel={e => e.currentTarget.blur()}
          type='number'
          min='1'
          value={config.columns[colKey].order}
          onChange={e => updateField('columns', colKey, 'order', parseInt(e.target.value))}
        />
      </label>
    </FieldSetWrapper>
  )
}

const ColumnsEditor: React.FC<ColumnsEditorProps> = ({ config, updateField, deleteColumn }) => {
  const openControls = useState({})
  const additionalColumns = Object.keys(config.columns)

  // just adds a new column but not set to any data yet
  const addColumnConfig = number => {
    const columnKey = `additionalColumn${number}`
    const newColumn: Column = {
      label: 'New Column',
      dataTable: true,
      tooltips: false,
      prefix: '',
      suffix: '',
      forestPlot: false,
      startingPoint: '0',
      forestPlotAlignRight: false,
      roundToPlace: 0,
      commas: false,
      showInViz: false,
      forestPlotStartingPoint: 0
    }
    const [controls, setControls] = openControls
    setControls({ ...controls, [columnKey]: true })
    updateField('columns', null, columnKey, newColumn)
  }

  return (
    <>
      {'navigation' !== config.type && (
        <fieldset>
          <label>
            <span className='edit-label'>
              Configurations
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>You can specify additional columns to display in tooltips and / or the supporting data table.</p>
                </Tooltip.Content>
              </Tooltip>
            </span>
          </label>
          {additionalColumns.map((val, i) => (
            <FieldSet
              key={val + i}
              controls={openControls}
              config={config}
              deleteColumn={deleteColumn}
              updateField={updateField}
              colKey={val}
            />
          ))}
          <button
            className={'btn btn-primary'}
            onClick={event => {
              event.preventDefault()
              addColumnConfig(additionalColumns.length + 1)
            }}
          >
            Add Configuration
          </button>
        </fieldset>
      )}
      {'category' === config.legend?.type && (
        <fieldset>
          <label>
            <span className='edit-label'>
              Additional Category
              <Tooltip style={{ textTransform: 'none' }}>
                <Tooltip.Target>
                  <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                </Tooltip.Target>
                <Tooltip.Content>
                  <p>You can provide additional categories to ensure they appear in the legend</p>
                </Tooltip.Content>
              </Tooltip>
            </span>
          </label>
          {config.legend.additionalCategories &&
            config.legend.additionalCategories.map((colKey, i) => (
              <fieldset className='edit-block' key={colKey}>
                <button
                  className='remove-column'
                  onClick={event => {
                    event.preventDefault()
                    const updatedAdditionaCategories = [...config.legend.additionalCategories]
                    updatedAdditionaCategories.splice(i, 1)
                    updateField('legend', null, 'additionalCategories', updatedAdditionaCategories)
                  }}
                >
                  Remove
                </button>
                <TextField
                  value={colKey}
                  label='Category'
                  section='legend'
                  subsection={null}
                  fieldName='additionalCategories'
                  updateField={(section, subsection, fieldName, value) => {
                    const updatedAdditionaCategories = [...config.legend.additionalCategories]
                    updatedAdditionaCategories[i] = value
                    updateField(section, subsection, fieldName, updatedAdditionaCategories)
                  }}
                />
              </fieldset>
            ))}
          <button
            className={'btn btn-primary full-width'}
            onClick={event => {
              event.preventDefault()
              const updatedAdditionaCategories = [...(config.legend.additionalCategories || [])]
              updatedAdditionaCategories.push('')
              updateField('legend', null, 'additionalCategories', updatedAdditionaCategories)
            }}
          >
            Add Category
          </button>
        </fieldset>
      )}
    </>
  )
}

export default ColumnsEditor
