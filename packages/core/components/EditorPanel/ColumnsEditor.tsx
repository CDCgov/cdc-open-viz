import { AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import Tooltip from '../ui/Tooltip'
import Icon from '../ui/Icon'
import { TextField } from './Inputs'
import { Visualization } from '../../types/Visualization'
import { UpdateFieldFunc } from '../../types/UpdateFieldFunc'
import { Column } from '../../types/Column'
import _ from 'lodash'

interface ColumnsEditorProps {
  config: Visualization
  updateField: UpdateFieldFunc<string | boolean | string[] | number | Column>
  deleteColumn: (colName: string) => void
}

const ColumnsEditor: React.FC<ColumnsEditorProps> = ({ config, updateField, deleteColumn }) => {
  const additionalColumns = Object.keys(config.columns).filter(value => {
    const dataKey = config.xAxis?.dataKey
    const defaultCols = dataKey ? [dataKey] : []

    if (true === defaultCols.includes(value)) {
      return false
    }
    return true
  })

  const editColumn = (addCol, columnName, setval) => {
    updateField('columns', addCol, columnName, setval)
  }

  // just adds a new column but not set to any data yet
  const addAdditionalColumn = number => {
    const columnKey = `additionalColumn${number}`
    const newColumn: Column = {
      label: 'New Column',
      dataTable: false,
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

    updateField('columns', null, columnKey, newColumn)
  }

  const getColumns = () => {
    const columns: string[] = config.data.flatMap(row => {
      return Object.keys(row).map(columnName => columnName)
    })

    const { lower, upper } = config.confidenceKeys || {}
    return _.uniq(columns).filter(key => {
      const keyIsPresentInSeries = config.series?.filter(series => series.dataKey === key).length > 0
      if (keyIsPresentInSeries || (config.confidenceKeys && Object.keys(config.confidenceKeys).includes(key) && (lower || upper) && key !== lower && key !== upper)) {
        return false
      }
      return true
    })
  }

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>Columns</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        {'navigation' !== config.type && (
          <fieldset className='primary-fieldset edit-block'>
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
            {additionalColumns.map(val => (
              <fieldset className='edit-block' key={val}>
                <button
                  className='remove-column'
                  onClick={event => {
                    event.preventDefault()
                    deleteColumn(val)
                  }}
                >
                  Remove
                </button>
                <label>
                  <span className='edit-label column-heading'>Column</span>
                  <select
                    value={config.columns[val] ? config.columns[val].name : undefined}
                    onChange={event => {
                      editColumn(val, 'name', event.target.value)
                    }}
                  >
                    {['-Select-', ...getColumns()].map(option => (
                      <option>{option}</option>
                    ))}
                  </select>
                </label>
                {config.type !== 'table' && (
                  <label>
                    <span className='edit-label column-heading'>Associate to Series</span>
                    <select
                      value={config.columns[val] ? config.columns[val].series : ''}
                      onChange={event => {
                        editColumn(val, 'series', event.target.value)
                      }}
                    >
                      <option value=''>Select series</option>
                      {(config.series || []).map(series => (
                        <option>{series.dataKey}</option>
                      ))}
                    </select>
                  </label>
                )}

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
                  {config.type !== 'table' && (
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
                  )}
                  {config.visualizationType === 'Pie' && (
                    <li>
                      <label className='checkbox'>
                        <input
                          type='checkbox'
                          checked={config.columns[val].showInViz}
                          onChange={event => {
                            editColumn(val, 'showInViz', event.target.checked)
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
                          checked={config.columns[val].tooltips || false}
                          onChange={event => {
                            updateField('columns', val, 'tooltips', event.target.checked)
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
              Add Column Configuration
            </button>
          </fieldset>
        )}
        {'category' === config.legend?.type && (
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
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default ColumnsEditor
