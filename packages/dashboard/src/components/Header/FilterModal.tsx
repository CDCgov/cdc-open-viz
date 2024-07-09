import { useContext, useEffect, useMemo, useState } from 'react'
import { MultiDashboardConfig } from '../../types/MultiDashboard'
import { SharedFilter } from '../../types/SharedFilter'
import { DashboardDispatchContext } from '../../DashboardContext'
import { useGlobalContext } from '@cdc/core/components/GlobalContext'
import { APIFilter } from '../../types/APIFilter'
import Modal from '@cdc/core/components/ui/Modal'
import { FilterBehavior } from './Header'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import Button from '@cdc/core/components/elements/Button'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import DataTransform from '@cdc/core/helpers/DataTransform'
import { getVizRowColumnLocator } from '../../helpers/getVizRowColumnLocator'
import _ from 'lodash'
import MultiSelect from '@cdc/core/components/MultiSelect'

type ModalProps = {
  config: MultiDashboardConfig
  filterState: SharedFilter
  index: number
  removeFilter: Function
}

const FilterModal: React.FC<ModalProps> = ({ config, filterState, index, removeFilter }) => {
  const { overlay } = useGlobalContext()
  const dispatch = useContext(DashboardDispatchContext)
  const [filter, setFilter] = useState<SharedFilter>(filterState)
  const [columns, setColumns] = useState<string[]>([])
  const transform = new DataTransform()

  const parentFilters: string[] = (config.dashboard.sharedFilters || []).filter(({ key, type }) => key !== filter.key && type !== 'datafilter').map(({ key }) => key)

  const vizRowColumnLocator = getVizRowColumnLocator(config.rows)

  const [usedByNameLookup, usedByOptions] = useMemo(() => {
    const nameLookup = {}
    const vizOptions = Object.keys(config.visualizations)
      .filter(vizKey => {
        const viz = vizRowColumnLocator[vizKey]
        if (!viz) return false
        const notAdded = !filter.usedBy || filter.usedBy.indexOf(vizKey) === -1
        const usesSharedFilter = config.visualizations[vizKey].usesSharedFilter
        const row = viz.row
        const dataConfiguredOnRow = config.rows[row].dataKey
        return filter.setBy !== vizKey && notAdded && !usesSharedFilter && !dataConfiguredOnRow
      })
      .map(vizKey => {
        const viz = config.visualizations[vizKey]
        const vizName = viz.general?.title || viz.title || vizKey
        nameLookup[vizKey] = vizName
        return vizKey
      })
    const rowOptions: number[] = []

    config.rows.forEach((row, rowIndex) => {
      if (!!row.dataKey) {
        nameLookup[rowIndex] = `Row ${rowIndex + 1}`
        rowOptions.push(rowIndex)
      }
    })

    const rowsNotSelected = rowOptions.filter(row => !filter.usedBy || filter.usedBy.indexOf(row.toString()) === -1)
    return [nameLookup, [...vizOptions, ...rowsNotSelected]]
  }, [config.visualizations, filter.usedBy, filter.setBy, vizRowColumnLocator])

  useEffect(() => {
    const runSetColumns = async () => {
      let columns = {}
      let dataKeys = Object.keys(config.datasets)

      for (let i = 0; i < dataKeys.length; i++) {
        let _dataSet = config.datasets[dataKeys[i]]
        if (!_dataSet.data && _dataSet.dataUrl) {
          config.datasets[dataKeys[i]].data = await fetchRemoteData(config.datasets[dataKeys[i]].dataUrl)
          _dataSet = config.datasets[dataKeys[i]]
          if (_dataSet.dataDescription) {
            try {
              config.datasets[dataKeys[i]].data = transform.autoStandardize(_dataSet.data)
              _dataSet = config.datasets[dataKeys[i]]
              config.datasets[dataKeys[i]].data = transform.developerStandardize(_dataSet.data, _dataSet.dataDescription)
              _dataSet = config.datasets[dataKeys[i]]
            } catch (e) {
              //Data not able to be standardized, leave as is
            }
          }
        }

        if (_dataSet.data) {
          config.datasets[dataKeys[i]].data.forEach(row => {
            Object.keys(row).forEach(columnName => (columns[columnName] = true))
          })
        }
      }

      setColumns(Object.keys(columns))
    }

    runSetColumns()
  }, [config.datasets])

  const saveChanges = () => {
    let tempConfig = { ...config.dashboard }
    tempConfig.sharedFilters[index] = filter

    dispatch({ type: 'UPDATE_CONFIG', payload: [{ ...config, dashboard: tempConfig }] })
    overlay?.actions.toggleOverlay()
  }

  const updateFilterProp = (name, value) => {
    const newFilter = { ..._.cloneDeep(filter), [name]: value }

    setFilter(newFilter)
  }

  const addFilterUsedBy = (filter, value) => {
    if (value === '') return
    if (!filter.usedBy) filter.usedBy = []
    filter.usedBy.push(value)
    updateFilterProp('usedBy', filter.usedBy)
  }

  const removeFilterUsedBy = (filter, value) => {
    let usedByIndex = filter.usedBy.indexOf(value)
    if (usedByIndex !== -1) {
      filter.usedBy.splice(usedByIndex, 1)
      updateFilterProp('usedBy', filter.usedBy)
    }
  }

  const updateAPIFilter = (key: keyof APIFilter, value: string | boolean) => {
    const filterClone = _.cloneDeep(filter)
    const _filter = filterClone.apiFilter || { apiEndpoint: '', valueSelector: '', textSelector: '' }
    const newAPIFilter: APIFilter = { ..._filter, [key]: value }
    setFilter({ ...filterClone, apiFilter: newAPIFilter })
  }

  return (
    <Modal>
      <Modal.Content>
        <h2 className='shared-filter-modal__title'>Dashboard Filter Settings</h2>
        <fieldset className='shared-filter-modal shared-filter-modal__fieldset' key={filter.columnName + index}>
          <label>
            <span className='edit-label column-heading'>Filter Type: </span>
            <select defaultValue={filter.type || ''} onChange={e => updateFilterProp('type', e.target.value)} disabled={!!filter.type}>
              <option value=''>- Select Option -</option>
              <option value='urlfilter'>URL</option>
              <option value='datafilter'>Data</option>
            </select>
          </label>
          {filter.type === 'urlfilter' && (
            <>
              <label>
                <span className='edit-label column-heading'>Label: </span>
                <input
                  type='text'
                  value={filter.key}
                  onChange={e => {
                    updateFilterProp('key', e.target.value)
                  }}
                />
              </label>
              {config.filterBehavior !== FilterBehavior.Apply && (
                <>
                  <label>
                    <span className='edit-label column-heading'>URL to Filter: </span>
                    <select defaultValue={filter.datasetKey || ''} onChange={e => updateFilterProp('datasetKey', e.target.value)}>
                      <option value=''>- Select Option -</option>
                      {Object.keys(config.datasets).map(datasetKey => {
                        if (config.datasets[datasetKey].dataUrl) {
                          return (
                            <option key={datasetKey} value={datasetKey}>
                              {config.datasets[datasetKey].dataUrl}
                            </option>
                          )
                        }
                        return null
                      })}
                    </select>
                  </label>
                  <label>
                    <span className='edit-label column-heading'>Filter By: </span>
                    <select defaultValue={filter.filterBy || ''} onChange={e => updateFilterProp('filterBy', e.target.value)}>
                      <option value=''>- Select Option -</option>
                      <option key={'query-string'} value={'Query String'}>
                        Query String
                      </option>
                      <option key={'file-name'} value={'File Name'}>
                        File Name
                      </option>
                    </select>
                  </label>
                  {filter.filterBy === 'File Name' && (
                    <>
                      <label>
                        <span className='edit-label column-heading'>
                          File Name:
                          <Tooltip style={{ textTransform: 'none' }}>
                            <Tooltip.Target>
                              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>{`Add \${query}\ to replace the filename with the active dropdown value.`}</p>
                            </Tooltip.Content>
                          </Tooltip>
                        </span>

                        <input type='text' defaultValue={filter.fileName || ''} onChange={e => updateFilterProp('fileName', e.target.value)} />
                      </label>

                      <label>
                        <span className='edit-label column-heading'>
                          White Space Replacments
                          <Tooltip style={{ textTransform: 'none' }}>
                            <Tooltip.Target>
                              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>{`Set how whitespace characters will be handled in the file request`}</p>
                            </Tooltip.Content>
                          </Tooltip>
                        </span>
                        <select defaultValue={filter.whitespaceReplacement || 'Keep Spaces'} onChange={e => updateFilterProp('whitespaceReplacement', e.target.value)}>
                          <option key={'remove-spaces'} value={'Remove Spaces'}>
                            Remove Spaces
                          </option>
                          <option key={'replace-with-underscore'} value={'Replace With Underscore'}>
                            Replace With Underscore
                          </option>
                          <option key={'keep-spaces'} value={'Keep Spaces'}>
                            Keep Spaces
                          </option>
                        </select>
                      </label>
                    </>
                  )}
                </>
              )}
              {filter.filterBy === 'Query String' && (
                <label>
                  <span className='edit-label column-heading'>Query string parameter</span> <input type='text' defaultValue={filter.queryParameter} onChange={e => updateFilterProp('queryParameter', e.target.value)} />
                </label>
              )}
              <label>
                <span className='edit-label column-heading'>Filter API Endpoint: </span>
                <input
                  type='text'
                  value={filter.apiFilter?.apiEndpoint}
                  onChange={e => {
                    updateAPIFilter('apiEndpoint', e.target.value)
                  }}
                />
              </label>
              <label>
                <span className='edit-label column-heading'>
                  Option Text Selector:
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>Text to use in the html option element. If none is applied value selector will be used.</p>
                    </Tooltip.Content>
                  </Tooltip>
                  {` * Optional`}
                </span>
                <input
                  type='text'
                  value={filter.apiFilter?.textSelector}
                  onChange={e => {
                    updateAPIFilter('textSelector', e.target.value)
                  }}
                />
              </label>
              <label>
                <span className='edit-label column-heading'>
                  Option Value Selector:
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>Value to use in the html option element</p>
                    </Tooltip.Content>
                  </Tooltip>
                  {` * Required`}
                </span>
                <input
                  type='text'
                  value={filter.apiFilter?.valueSelector}
                  onChange={e => {
                    updateAPIFilter('valueSelector', e.target.value)
                  }}
                />
              </label>
              {!!parentFilters.length && (
                <MultiSelect
                  label='Parent Filter(s): '
                  options={parentFilters.map(key => ({ value: key, label: key }))}
                  fieldName='parents'
                  selected={filter.parents}
                  updateField={(_section, _subsection, fieldname, newItems) => {
                    updateFilterProp(fieldname, newItems)
                  }}
                />
              )}

              <label>
                <span className='edit-label column-heading col-2'>Auto Load: </span>
                <input
                  type='checkbox'
                  checked={filter.apiFilter?.autoLoad}
                  onChange={e => {
                    updateAPIFilter('autoLoad', !filter.apiFilter?.autoLoad)
                  }}
                />
              </label>
              <label>
                <span className='edit-label column-heading'>Reset Label: </span>
                <input
                  type='text'
                  value={filter.resetLabel || ''}
                  onChange={e => {
                    updateFilterProp('resetLabel', e.target.value)
                  }}
                />
              </label>
              <label>
                <span className='edit-label column-heading'>Default Value: </span>
                <input
                  type='text'
                  value={filter.apiFilter?.defaultValue}
                  onChange={e => {
                    updateAPIFilter('defaultValue', e.target.value)
                  }}
                />
              </label>
              <label>
                <span className='edit-label column-heading'>Default Value Set By Query String Parameter: </span>
                <input
                  type='text'
                  value={filter.setByQueryParameter || ''}
                  onChange={e => {
                    updateFilterProp('setByQueryParameter', e.target.value)
                  }}
                />
              </label>
            </>
          )}
          {filter.type === 'datafilter' && (
            <>
              <label>
                <span className='edit-label column-heading'>Filter: </span>
                <select
                  value={filter.columnName}
                  onChange={e => {
                    updateFilterProp('columnName', e.target.value)
                  }}
                >
                  <option value=''>- Select Option -</option>
                  {columns.map(dataKey => (
                    <option value={dataKey} key={`filter-column-select-item-${dataKey}`}>
                      {dataKey}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span className='edit-label column-heading'>Label: </span>
                <input
                  type='text'
                  value={filter.key}
                  onChange={e => {
                    updateFilterProp('key', e.target.value)
                  }}
                />
              </label>
              <label>
                <span className='edit-label column-heading'>Show Dropdown</span>
                <input
                  type='checkbox'
                  defaultChecked={filter.showDropdown === true}
                  onChange={e => {
                    updateFilterProp('showDropdown', !filter.showDropdown)
                  }}
                />
              </label>

              <label>
                <span className='edit-label column-heading'>Set By: </span>
                <select value={filter.setBy} onChange={e => updateFilterProp('setBy', e.target.value)}>
                  <option value=''>- Select Option -</option>
                  {Object.keys(config.visualizations).map(vizKey => (
                    <option value={vizKey} key={`set-by-select-item-${vizKey}`}>
                      {config.visualizations[vizKey].general && config.visualizations[vizKey].general.title ? config.visualizations[vizKey].general.title : config.visualizations[vizKey].title || vizKey}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span className='edit-label column-heading'>Used By: </span>
                <ul>
                  {filter.usedBy &&
                    filter.usedBy.map(opt => (
                      <li key={`used-by-list-item-${opt}`}>
                        <span>{usedByNameLookup[opt] || opt}</span>{' '}
                        <button
                          onClick={e => {
                            e.preventDefault()
                            removeFilterUsedBy(filter, opt)
                          }}
                        >
                          X
                        </button>
                      </li>
                    ))}
                </ul>
                <select value='' onChange={e => addFilterUsedBy(filter, e.target.value)}>
                  <option value=''>- Select Option -</option>
                  {usedByOptions.map(opt => (
                    <option value={opt} key={`used-by-select-item-${opt}`}>
                      {usedByNameLookup[opt] || opt}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span className='edit-label column-heading'>Reset Label: </span>
                <input
                  type='text'
                  value={filter.resetLabel || ''}
                  onChange={e => {
                    updateFilterProp('resetLabel', e.target.value)
                  }}
                />
              </label>
              <label>
                <span className='edit-label column-heading'>Parent Filter: </span>
                <select
                  value={filter.parents || []}
                  onChange={e => {
                    updateFilterProp('parents', e.target.value)
                  }}
                >
                  <option value=''>Select a filter</option>
                  {config.dashboard.sharedFilters &&
                    config.dashboard.sharedFilters.map(sharedFilter => {
                      if (sharedFilter.key !== filter.key) {
                        return <option key={sharedFilter.key}>{sharedFilter.key}</option>
                      }
                    })}
                </select>
              </label>
              <label>
                <span className='edit-label column-heading'>Default Value Set By Query String Parameter: </span>
                <input
                  type='text'
                  value={filter.setByQueryParameter || ''}
                  onChange={e => {
                    updateFilterProp('setByQueryParameter', e.target.value)
                  }}
                />
              </label>
            </>
          )}
        </fieldset>

        <Button
          className='btn--remove warn'
          onClick={() => {
            removeFilter()
          }}
        >
          Remove Filter
        </Button>

        <div className='shared-filter-modal__right-buttons'>
          <Button className='btn--cancel muted' style={{ display: 'inline-block', marginRight: '1em' }} onClick={overlay?.actions.toggleOverlay}>
            Cancel
          </Button>

          <Button type='button' className='btn--submit success' style={{ display: 'inline-block' }} onClick={saveChanges}>
            Save
          </Button>
        </div>
      </Modal.Content>
    </Modal>
  )
}

export default FilterModal
