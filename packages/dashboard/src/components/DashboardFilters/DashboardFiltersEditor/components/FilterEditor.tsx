import _ from 'lodash'
import { APIFilter } from '../../../../types/APIFilter'
import { getVizRowColumnLocator } from '../../../../helpers/getVizRowColumnLocator'
import { TextField } from '@cdc/core/components/EditorPanel/Inputs'
import DataTransform from '@cdc/core/helpers/DataTransform'
import { useEffect, useMemo, useState } from 'react'
import { SharedFilter } from '../../../../types/SharedFilter'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import MultiSelect from '@cdc/core/components/MultiSelect'
import { DashboardConfig } from '../../../../types/DashboardConfig'
import { Visualization } from '@cdc/core/types/Visualization'
import { hasDashboardApplyBehavior } from '../../../../helpers/hasDashboardApplyBehavior'
import NestedDropDownDashboard from './NestedDropDownDashboard'
import { FILTER_STYLE } from '../../../../types/FilterStyles'

type FilterEditorProps = {
  config: DashboardConfig
  filter: SharedFilter
  updateFilterProp: (name: keyof SharedFilter, value: any) => void
}

const FilterEditor: React.FC<FilterEditorProps> = ({ filter, config, updateFilterProp }) => {
  const [columns, setColumns] = useState<string[]>([])
  const transform = new DataTransform()
  const filterStyles = ['dropdown', 'multi-select', 'nested-dropdown']

  const parentFilters: string[] = (config.dashboard.sharedFilters || [])
    .filter(({ key, type }) => key !== filter.key && type !== 'datafilter')
    .map(({ key }) => key)

  const vizRowColumnLocator = getVizRowColumnLocator(config.rows)

  const [usedByNameLookup, usedByOptions] = useMemo(() => {
    const nameLookup = {}
    const vizOptions = Object.keys(config.visualizations).filter(vizKey => {
      const vizLookup = vizRowColumnLocator[vizKey]
      if (!vizLookup) return false
      const viz = config.visualizations[vizKey] as Visualization
      if (viz.type === 'dashboardFilters') return false
      const vizName = viz.general?.title || viz.title || vizKey
      nameLookup[vizKey] = vizName
      const notAdded = !filter.usedBy || filter.usedBy.indexOf(vizKey) === -1
      const usesSharedFilter = viz.usesSharedFilter
      const rowIndex = vizLookup.row
      const dataConfiguredOnRow = config.rows[rowIndex].dataKey
      return filter.setBy !== vizKey && notAdded && !usesSharedFilter && !dataConfiguredOnRow
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

  const loadColumnData = async () => {
    const columns = {}
    const dataKeys = Object.keys(config.datasets)

    for (let i = 0; i < dataKeys.length; i++) {
      const dataKey = dataKeys[i]
      let _dataSet = config.datasets[dataKey]
      if (!_dataSet.data && _dataSet.dataUrl) {
        _dataSet = await fetchRemoteData(_dataSet.dataUrl)
        if (_dataSet.dataDescription) {
          try {
            _dataSet = transform.autoStandardize(_dataSet.data)
            _dataSet = transform.developerStandardize(_dataSet.data, _dataSet.dataDescription)
          } catch (e) {
            //Data not able to be standardized, leave as is
          }
        }
      }

      if (_dataSet.data) {
        _dataSet.data.forEach(row => {
          Object.keys(row).forEach(columnName => {
            columns[columnName] = true
          })
        })
      }
    }

    setColumns(Object.keys(columns))
  }

  useEffect(() => {
    loadColumnData()
  }, [config.datasets])

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
    updateFilterProp('apiFilter', newAPIFilter)
  }

  const handleFilterStyleChange = value => {
    updateFilterProp('filterStyle', value)
  }

  const isNestedDropDown = filter.filterStyle === FILTER_STYLE.nestedDropdown

  type APIInputProps = {
    isSubgroup?: boolean
  }
  const APIInputs: React.FC<APIInputProps> = ({ isSubgroup = false }) => {
    const textSelector = isSubgroup ? 'subgroupTextSelector' : 'textSelector'
    const valueSelector = isSubgroup ? 'subgroupValueSelector' : 'valueSelector'
    return (
      <>
        {!isSubgroup && (
          <TextField
            label='API Endpoint: '
            value={filter.apiFilter?.apiEndpoint}
            updateField={(_section, _subSection, _key, value) => updateAPIFilter('apiEndpoint', value)}
            tooltip={
              <>
                {isNestedDropDown && (
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>Your API Endpoint should return both value selector values.</p>
                    </Tooltip.Content>
                  </Tooltip>
                )}
              </>
            }
          />
        )}

        <div className={isNestedDropDown ? 'border border-dark p-1 my-1' : ''}>
          <TextField
            label={`${isSubgroup ? 'Subgroup ' : ''}Value Selector:`}
            value={filter?.apiFilter?.[valueSelector] || ''}
            updateField={(_section, _subSection, _key, value) => updateAPIFilter(valueSelector, value)}
            tooltip={
              <>
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>Value to use in the html option element</p>
                  </Tooltip.Content>
                </Tooltip>
                {` * Required`}
              </>
            }
          />

          <TextField
            label={`${isSubgroup ? 'Subgroup ' : ''}Display Text Selector:`}
            value={filter?.apiFilter?.[textSelector] || ''}
            updateField={(_section, _subSection, _key, value) => updateAPIFilter(textSelector, value)}
            tooltip={
              <>
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>Text to use in the html option element. If none is applied value selector will be used.</p>
                  </Tooltip.Content>
                </Tooltip>
                {` * Optional`}
              </>
            }
          />
        </div>
      </>
    )
  }

  return (
    <>
      <label>
        <span className='edit-label column-heading'>Filter Type: </span>
        <select
          defaultValue={filter.type || ''}
          onChange={e => updateFilterProp('type', e.target.value)}
          disabled={!!filter.type}
        >
          <option value=''>- Select Option -</option>
          <option value='urlfilter'>URL</option>
          <option value='datafilter'>Data</option>
        </select>
      </label>
      {filter.type !== undefined && (
        <>
          <label>
            <span className='edit-label column-heading'>Filter Style: </span>
            <select value={filter.filterStyle} onChange={e => handleFilterStyleChange(e.target.value)}>
              {filterStyles.map(dataKey => (
                <option value={dataKey} key={`filter-style-select-item-${dataKey}`}>
                  {dataKey}
                </option>
              ))}
            </select>
          </label>
          {filter.filterStyle === FILTER_STYLE.dropdown && (
            <label>
              <span className='mr-1'>Show Dropdown</span>
              <input
                type='checkbox'
                checked={filter.showDropdown}
                onChange={e => {
                  updateFilterProp('showDropdown', !filter.showDropdown)
                }}
              />
            </label>
          )}

          <TextField
            label='Label'
            value={filter.key}
            updateField={(_section, _subSection, _key, value) => updateFilterProp('key', value)}
          />
          {filter.filterStyle === FILTER_STYLE.multiSelect && (
            <TextField
              label='Select Limit'
              value={filter.selectLimit}
              updateField={(_section, _subSection, _field, value) => updateFilterProp('selectLimit', value)}
              type='number'
              tooltip={
                <Tooltip style={{ textTransform: 'none' }}>
                  <Tooltip.Target>
                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                  </Tooltip.Target>
                  <Tooltip.Content>
                    <p>The maximum number of items that can be selected.</p>
                  </Tooltip.Content>
                </Tooltip>
              }
            />
          )}

          {filter.type === 'urlfilter' && (
            <>
              {!hasDashboardApplyBehavior(config.visualizations) && (
                <>
                  <label>
                    <span className='edit-label column-heading'>URL to Filter: </span>
                    <select
                      defaultValue={filter.datasetKey || ''}
                      onChange={e => updateFilterProp('datasetKey', e.target.value)}
                    >
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
                    <select
                      defaultValue={filter.filterBy || ''}
                      onChange={e => updateFilterProp('filterBy', e.target.value)}
                    >
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
                      <TextField
                        label='File Name: '
                        value={filter.fileName || ''}
                        updateField={(_section, _subSection, _key, value) => updateFilterProp('fileName', value)}
                        tooltip={
                          <Tooltip style={{ textTransform: 'none' }}>
                            <Tooltip.Target>
                              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>{`Add \${query}\ to replace the filename with the active dropdown value.`}</p>
                            </Tooltip.Content>
                          </Tooltip>
                        }
                      />

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
                        <select
                          defaultValue={filter.whitespaceReplacement || 'Keep Spaces'}
                          onChange={e => updateFilterProp('whitespaceReplacement', e.target.value)}
                        >
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
                <TextField
                  label='Query string parameter'
                  value={filter.queryParameter}
                  updateField={(_section, _subSection, _key, value) => updateFilterProp('queryParameter', value)}
                />
              )}

              <APIInputs />

              {isNestedDropDown && <APIInputs isSubgroup={true} />}

              {!!parentFilters.length && (
                <MultiSelect
                  label='Parent Filter(s): '
                  options={parentFilters.map(key => ({ value: key, label: key }))}
                  fieldName='parents'
                  selected={filter.parents}
                  updateField={(_section, _subsection, _fieldname, newItems) => {
                    updateFilterProp('parents', newItems)
                  }}
                />
              )}

              <MultiSelect
                label='Used By: (optional)'
                tooltip={
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>
                        Select if you would like specific visualizations or rows to use this filter. Otherwise the
                        filter will be added to all api requests.
                      </p>
                    </Tooltip.Content>
                  </Tooltip>
                }
                options={[...usedByOptions, ...(filter.usedBy || [])].map(opt => ({
                  value: opt,
                  label: usedByNameLookup[opt]
                }))}
                fieldName='usedBy'
                selected={filter.usedBy}
                updateField={(_section, _subsection, _fieldname, newItems) => {
                  updateFilterProp('usedBy', newItems)
                }}
              />

              <TextField
                label='Reset Label: '
                value={filter.resetLabel || ''}
                updateField={(_section, _subSection, _key, value) => updateFilterProp('resetLabel', value)}
              />

              <TextField
                label='Default Value Set By Query String Parameter: '
                value={filter.setByQueryParameter || ''}
                updateField={(_section, _subSection, _key, value) => updateFilterProp('setByQueryParameter', value)}
              />
            </>
          )}

          {filter.type === 'datafilter' && (
            <>
              {filter.filterStyle !== FILTER_STYLE.nestedDropdown ? (
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
                    <span className='edit-label column-heading'>Show Dropdown</span>
                    <input
                      type='checkbox'
                      defaultChecked={filter.showDropdown === true}
                      onChange={e => {
                        updateFilterProp('showDropdown', !filter.showDropdown)
                      }}
                    />
                  </label>
                </>
              ) : (
                <NestedDropDownDashboard
                  filter={filter}
                  updateFilterProp={(name, value) => {
                    updateFilterProp(name, value)
                  }}
                  isDashboard={true}
                  config={config}
                />
              )}
              <label>
                <span className='edit-label column-heading'>Set By: </span>
                <select value={filter.setBy} onChange={e => updateFilterProp('setBy', e.target.value)}>
                  <option value=''>- Select Option -</option>
                  {Object.keys(config.visualizations)
                    .filter(vizKey => config.visualizations[vizKey].type !== 'dashboardFilters')
                    .map(vizKey => {
                      const viz = config.visualizations[vizKey] as Visualization
                      return (
                        <option value={vizKey} key={`set-by-select-item-${vizKey}`}>
                          {viz.general?.title || viz.title || vizKey}
                        </option>
                      )
                    })}
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
              <TextField
                label='Reset Label: '
                value={filter.resetLabel || ''}
                updateField={(_section, _subSection, _key, value) => updateFilterProp('resetLabel', value)}
              />

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

              <TextField
                label='Default Value Set By Query String Parameter: '
                value={filter.setByQueryParameter || ''}
                updateField={(_section, _subSection, _key, value) => updateFilterProp('setByQueryParameter', value)}
              />

              {filter.columnName && columnValues && (
                <FilterOrder
                  filter={{ ...filter, values: columnValues }}
                  updateFilterProp={(prop, index, value) => updateFilterProp(prop, value)}
                  handleFilterOrder={handleFilterOrder}
                />
              )}
            </>
          )}
        </>
      )}
    </>
  )
}

export default FilterEditor
