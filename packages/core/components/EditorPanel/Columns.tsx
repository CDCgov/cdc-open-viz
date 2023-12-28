import React, { memo } from 'react'
import TextField from './TextField'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import type { Table } from '@cdc/core/types/Table'
import type { Column } from '@cdc/core/types/Column'
import type { Series } from '@cdc/core/types/Series'

interface ColumnsProps {
  config: {
    type: string
    table: Table
    columns: Record<string, Column>
    visualizationType: string
    legend: {
      type: string
      additionalCategories: string[]
    }
    xAxis: {
      dataKey: string
    }
    data: Object[]
    series: Series
  }
  data?: any
  updateConfig: Function
  updateField: Function
}

const Columns: React.FC<ColumnsProps> = ({ config, data, updateConfig, updateField }) => {
  const additionalColumns = Object.keys(config.columns).filter(value => {
    const defaultCols = [config.xAxis.dataKey] // ['geo', 'navigate', 'primary', 'latitude', 'longitude']

    if (true === defaultCols.includes(value)) {
      return false
    }
    return true
  })

  // just adds a new column but not set to any data yet
  const addAdditionalColumn = number => {
    const columnKey = `additionalColumn${number}`

    updateConfig({
      ...config,
      columns: {
        ...config.columns,
        [columnKey]: {
          label: 'New Column',
          dataTable: false,
          tooltips: false,
          prefix: '',
          suffix: '',
          forestPlot: false,
          startingPoint: '0',
          forestPlotAlignRight: false
        }
      }
    })
  }

  const removeAdditionalColumn = columnName => {
    const newColumns = config.columns

    delete newColumns[columnName]

    updateConfig({
      ...config,
      columns: newColumns
    })
  }

  const editColumn = (addCol, columnName, setval) => {
    updateConfig({
      ...config,
      columns: {
        ...config.columns,
        [addCol]: {
          ...config.columns[addCol],
          [columnName]: setval
        }
      }
    })
  }

  const updateSeriesTooltip = (column, event) => {
    let updatedColumns = config.columns

    updatedColumns[column].tooltips = event

    updateConfig({
      ...config,
      columns: updatedColumns
    })
  }

  const ColumnsOptions = memo(({ config, data }: any) => {
    const columnsOptions = [
      <option value='' key={'Select Option'}>
        - Select Option -
      </option>
    ]

    if (config.data && config.series) {
      Object.keys(config.data?.[0] || []).map(colName => {
        // OMIT ANY COLUMNS THAT ARE IN DATA SERIES!
        const found = config?.series.some(series => series.dataKey === colName)
        if (colName !== config.xAxis.dataKey && !found) {
          // if not the index then add it
          return columnsOptions.push(
            <option value={colName} key={colName}>
              {colName}
            </option>
          )
        }
      })
    }

    // for pie charts
    if (!config.data && data) {
      if (!data[0]) return
      Object.keys(data[0]).map(colName => {
        // OMIT ANY COLUMNS THAT ARE IN DATA SERIES!
        const found = data.some(el => el.dataKey === colName)
        if (colName !== config.xAxis.dataKey && !found) {
          // if not the index then add it
          return columnsOptions.push(
            <option value={colName} key={colName}>
              {colName}
            </option>
          )
        }
      })
    }

    return <>{columnsOptions}</>
  })

  return (
    <>
      {'navigation' !== config.type && (
        <fieldset className='primary-fieldset edit-block'>
          <label>
            <span className='edit-label'>
              Additional Columns
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
          {additionalColumns.map(val => (
            <fieldset className='edit-block' key={val}>
              <button
                className='remove-column'
                onClick={event => {
                  event.preventDefault()
                  removeAdditionalColumn(val)
                }}
              >
                Remove
              </button>
              <label>
                <span className='edit-label column-heading'>Column</span>
                <select
                  value={config.columns[val] ? config.columns[val].name : ''}
                  onChange={event => {
                    editColumn(val, 'name', event.target.value)
                  }}
                >
                  <ColumnsOptions config={config} data={data} />
                </select>
              </label>
              <TextField value={config.columns[val].label} section='columns' subsection={val} fieldName='label' label='Label' updateField={updateField} />
              <ul className='column-edit'>
                <li className='three-col'>
                  <TextField value={config.columns[val].prefix} section='columns' subsection={val} fieldName='prefix' label='Prefix' updateField={updateField} />
                  <TextField value={config.columns[val].suffix} section='columns' subsection={val} fieldName='suffix' label='Suffix' updateField={updateField} />
                  <TextField type='number' value={config.columns[val].roundToPlace} section='columns' subsection={val} fieldName='roundToPlace' label='Round' updateField={updateField} />
                </li>
                <li>
                  <label className='checkbox'>
                    <input
                      type='checkbox'
                      checked={config.columns[val].commas}
                      onChange={event => {
                        editColumn(val, 'commas', event.target.checked)
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
                        checked={config.columns[val].dataTable}
                        onChange={event => {
                          editColumn(val, 'dataTable', event.target.checked)
                        }}
                      />
                      <span className='edit-label'>Show in Data Table</span>
                    </label>
                  )}
                </li>
                {/* disable for now */}

                <li>
                  <label className='checkbox'>
                    <input
                      type='checkbox'
                      checked={config.columns[val].tooltips || false}
                      onChange={event => {
                        updateSeriesTooltip(val, event.target.checked)
                      }}
                    />
                    <span className='edit-label'>Show in tooltip</span>
                  </label>
                </li>

                {config.visualizationType === 'Forest Plot' && (
                  <>
                    <li>
                      <label className='checkbox'>
                        <input
                          type='checkbox'
                          checked={config.columns[val].forestPlot || false}
                          onChange={event => {
                            editColumn(val, 'forestPlot', event.target.checked)
                          }}
                        />
                        <span className='edit-label'>Show in Forest Plot</span>
                      </label>
                    </li>
                    <li>
                      <label className='checkbox'>
                        <input
                          type='checkbox'
                          checked={config.columns[val].tooltips || false}
                          onChange={event => {
                            updateSeriesTooltip(val, event.target.checked)
                          }}
                        />
                        <span className='edit-label'>Show in tooltip</span>
                      </label>
                    </li>
                    <li>
                      <label className='checkbox'>
                        <input
                          type='checkbox'
                          checked={config.columns[val].forestPlotAlignRight || false}
                          onChange={event => {
                            editColumn(val, 'forestPlotAlignRight', event.target.checked)
                          }}
                        />
                        <span className='edit-label'>Align Right</span>
                      </label>
                    </li>

                    {!config.columns[val].forestPlotAlignRight && (
                      <li>
                        <label className='text'>
                          <span className='edit-label'>Forest Plot Starting Point</span>
                          <input
                            type='number'
                            value={config.columns[val].forestPlotStartingPoint || 0}
                            onChange={event => {
                              editColumn(val, 'forestPlotStartingPoint', event.target.value)
                            }}
                          />
                        </label>
                      </li>
                    )}
                  </>
                )}
              </ul>
            </fieldset>
          ))}
          <button
            className={'btn full-width'}
            onClick={event => {
              event.preventDefault()
              addAdditionalColumn(additionalColumns.length + 1)
            }}
          >
            Add Column
          </button>
        </fieldset>
      )}
      {'category' === config.legend.type && (
        <fieldset className='primary-fieldset edit-block'>
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
            config.legend.additionalCategories.map((val, i) => (
              <fieldset className='edit-block' key={val}>
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
                  value={val}
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
            className={'btn full-width'}
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

export default Columns
