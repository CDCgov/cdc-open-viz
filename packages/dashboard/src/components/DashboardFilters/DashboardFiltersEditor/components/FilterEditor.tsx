import _ from 'lodash'
import { APIFilter } from '../../../../types/APIFilter'
import { getVizRowColumnLocator } from '../../../../helpers/getVizRowColumnLocator'
import { Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import DataTransform from '@cdc/core/helpers/DataTransform'
import { useEffect, useMemo, useState } from 'react'
import { SharedFilter } from '../../../../types/SharedFilter'

import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import MultiSelect from '@cdc/core/components/MultiSelect'
import Loading from '@cdc/core/components/Loading'
import { DashboardConfig } from '../../../../types/DashboardConfig'
import { Visualization } from '@cdc/core/types/Visualization'
import { hasDashboardApplyBehavior } from '../../../../helpers/hasDashboardApplyBehavior'
import NestedDropDownDashboard from './NestedDropDownDashboard'
import { FILTER_STYLE } from '../../../../types/FilterStyles'
import { filterOrderOptions } from '@cdc/core/helpers/filterOrderOptions'
import FilterOrder from '@cdc/core/components/EditorPanel/VizFilterEditor/components/FilterOrder'

type FilterEditorProps = {
  config: DashboardConfig
  filter: SharedFilter
  filterIndex: number
  updateFilterProp: (name: keyof SharedFilter, value: any) => void
  toggleNestedQueryParameters: (checked: boolean) => void
}

const FilterEditor: React.FC<FilterEditorProps> = ({
  filter,
  filterIndex,
  config,
  updateFilterProp,
  toggleNestedQueryParameters
}) => {
  const [columns, setColumns] = useState<string[]>([])
  const [dataFiltersLoading, setDataFiltersLoading] = useState(false)
  const transform = new DataTransform()
  const filterStyles = Object.values(FILTER_STYLE)

  const parentFilters: string[] = (config.dashboard.sharedFilters || [])
    .filter(({ key, type }) => key !== filter.key && type !== 'datafilter')
    .map(({ key }) => key)

  const vizRowColumnLocator = getVizRowColumnLocator(config.rows)

  const getVizTitle = (viz, vizKey) => {
    let vizName = viz.general?.title || viz.title || vizKey
    if (viz.visualizationType === 'markup-include') {
      vizName = viz.contentEditor.title || vizKey
    }
    return vizName
  }

  const [usedByNameLookup, usedByOptions] = useMemo(() => {
    const nameLookup = {}
    const vizOptions = Object.keys(config.visualizations).filter(vizKey => {
      const vizLookup = vizRowColumnLocator[vizKey]
      if (!vizLookup) return false
      const viz = config.visualizations[vizKey] as Visualization
      if (viz.type === 'dashboardFilters') return false
      const vizName = getVizTitle(viz, vizKey)

      nameLookup[vizKey] = vizName
      const usesSharedFilter = viz.usesSharedFilter
      const rowIndex = vizLookup.row
      const dataConfiguredOnRow = config.rows[rowIndex].dataKey
      return filter.setBy !== vizKey && !usesSharedFilter && !dataConfiguredOnRow
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

  const useParameters = useMemo(() => {
    if (filter.subGrouping) return !!(filter.setByQueryParameter && filter.subGrouping?.setByQueryParameter)
    return !!filter.setByQueryParameter
  }, [config, filterIndex])

  const loadColumnData = async () => {
    // column data only needed for data filters
    if (!config.dashboard.sharedFilters.some(f => f.type === 'datafilter')) return
    const columns = {}
    const dataKeys = Object.keys(config.datasets)
    for (let i = 0; i < dataKeys.length; i++) {
      const dataKey = dataKeys[i]
      let _dataSet = config.datasets[dataKey]
      if (!_dataSet.data && _dataSet.dataUrl) {
        setDataFiltersLoading(true)
        let data = await fetchRemoteData(_dataSet.dataUrl)
        if (_dataSet.dataDescription) {
          try {
            data = transform.autoStandardize(data)
            data = transform.developerStandardize(data, _dataSet.dataDescription)
          } catch (e) {
            console.error(e)
            //Data not able to be standardized, leave as is
          } finally {
            _dataSet.data = data
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
    setDataFiltersLoading(false)
    setColumns(Object.keys(columns))
  }

  useEffect(() => {
    loadColumnData()
  }, [config.datasets, config.dashboard.sharedFilters])

  const updateAPIFilter = (key: keyof APIFilter, value: string | boolean) => {
    const filterClone = _.cloneDeep(filter)
    const _filter = filterClone.apiFilter || { apiEndpoint: '', valueSelector: '', textSelector: '' }
    const newAPIFilter: APIFilter = { ..._filter, [key]: value }
    updateFilterProp('apiFilter', newAPIFilter)
  }

  const updateLabel = (value: string) => {
    const duplicateLabels = config.dashboard.sharedFilters.filter(
      (filter, i) => filter.key === value && filterIndex !== i
    )
    // If there are duplicate labels, append the number of duplicates to the label similar functionality to duplicate file names
    updateFilterProp('key', duplicateLabels.length ? value + ` (${duplicateLabels.length})` : value)
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

  const selectFilterType = (type: string) => {
    updateFilterProp('type', type)
    if (type === 'datafilter') {
      loadColumnData()
    }
  }

  return (
    <>
      {dataFiltersLoading && <Loading />}
      <label>
        <span className='edit-label column-heading'>Filter Type: </span>
        <select
          defaultValue={filter.type || ''}
          onChange={e => selectFilterType(e.target.value)}
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
            <select
              value={filter.filterStyle || FILTER_STYLE.dropdown}
              onChange={e => updateFilterProp('filterStyle', e.target.value)}
            >
              {filterStyles.map(dataKey => (
                <option value={dataKey} key={`filter-style-select-item-${dataKey}`}>
                  {dataKey}
                </option>
              ))}
            </select>
          </label>
          {filter.filterStyle === FILTER_STYLE.dropdown && (
            <label>
              <span className='me-1'>Show Dropdown</span>
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
            updateField={(_section, _subSection, _key, value) => {
              updateLabel(value)
            }}
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

              <label>
                <input
                  type='checkbox'
                  checked={useParameters}
                  aria-label='Create query parameters'
                  disabled={!filter.apiFilter?.valueSelector && !filter.apiFilter?.subgroupValueSelector}
                  onChange={e => toggleNestedQueryParameters(e.target.checked)}
                />
                <span>
                  {' '}
                  Create query parameters{' '}
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>
                        Query parameters will be added to the URL which correspond to the respective value selector.
                      </p>
                    </Tooltip.Content>
                  </Tooltip>
                </span>
              </label>

              {!!parentFilters.length && (
                <label>
                  <span className='edit-label column-heading mt-1'>Parent Filter(s): </span>
                  <MultiSelect
                    label='Parent Filter(s): '
                    options={parentFilters.map(key => ({ value: key, label: key }))}
                    fieldName='parents'
                    selected={filter.parents}
                    updateField={(_section, _subsection, _fieldname, newItems) => {
                      updateFilterProp('parents', newItems)
                    }}
                  />
                </label>
              )}

              <label>
                <span className='edit-label column-heading mt-1'>
                  Used By: (optional)
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
                </span>
                <MultiSelect
                  options={usedByOptions.map(opt => ({
                    value: opt,
                    label: usedByNameLookup[opt]
                  }))}
                  fieldName='usedBy'
                  selected={filter.usedBy}
                  updateField={(_section, _subsection, _fieldname, newItems) => {
                    updateFilterProp('usedBy', newItems)
                  }}
                />
              </label>

              <TextField
                label='Reset Label: '
                value={filter.resetLabel || ''}
                updateField={(_section, _subSection, _key, value) => updateFilterProp('resetLabel', value)}
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

                  <Select
                    value={filter.defaultValue}
                    options={
                      filter.resetLabel
                        ? [filter.resetLabel, ...config.dashboard.sharedFilters[filterIndex].values]
                        : config.dashboard.sharedFilters[filterIndex].values
                    }
                    updateField={(_section, _subSection, _key, value) => updateFilterProp('defaultValue', value)}
                    label={'Filter Default Value'}
                    initial={'Select'}
                  />

                  <Select
                    value={filter.order || 'asc'}
                    options={filterOrderOptions}
                    updateField={(_section, _subSection, _key, value) => updateFilterProp('order', value)}
                    label={'Filter Order'}
                  />

                  {/* if custom order is set use react-dnd library to sort the values */}
                  {filter.order === 'cust' && (
                    <FilterOrder
                      orderedValues={filter.orderedValues || filter.values}
                      handleFilterOrder={(index1, index2) => {
                        const values = [...filter.values]
                        const [removed] = values.splice(index1, 1)
                        values.splice(index2, 0, removed)
                        updateFilterProp('orderedValues', values)
                      }}
                    />
                  )}

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
                <>
                  <NestedDropDownDashboard
                    filter={filter}
                    updateFilterProp={(name, value) => {
                      updateFilterProp(name, value)
                    }}
                    isDashboard={true}
                    config={config}
                  />
                  <label>
                    <input
                      type='checkbox'
                      checked={useParameters}
                      aria-label='Create query parameters'
                      disabled={!filter.columnName || !filter.subGrouping?.columnName}
                      onChange={e => toggleNestedQueryParameters(e.target.checked)}
                    />
                    <span>
                      {' '}
                      Create query parameters{' '}
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>
                            Query parameters will be added to the URL which correspond to the respective column name.
                          </p>
                        </Tooltip.Content>
                      </Tooltip>
                    </span>
                  </label>
                </>
              )}
              <Select
                label='Set By:'
                value={filter.setBy}
                options={Object.values(config.visualizations)
                  .filter(viz => viz.type !== 'dashboardFilters')
                  .map(viz => ({
                    value: viz.uid,
                    label: getVizTitle(viz, viz.type)
                  }))}
                updateField={(_section, _subSection, _key, value) => updateFilterProp('setBy', value)}
                initial='- Select Option -'
              />
              <label>
                <span className='edit-label column-heading mt-1'>
                  Used By: (optional)
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
                </span>
                <MultiSelect
                  options={usedByOptions.map(opt => ({
                    value: opt,
                    label: usedByNameLookup[opt]
                  }))}
                  fieldName='usedBy'
                  selected={filter.usedBy}
                  updateField={(_section, _subsection, _fieldname, newItems) => {
                    updateFilterProp('usedBy', newItems)
                  }}
                />
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

              {!isNestedDropDown && (
                <TextField
                  label='Default Value Set By Query String Parameter: '
                  value={filter.setByQueryParameter || ''}
                  updateField={(_section, _subSection, _key, value) => updateFilterProp('setByQueryParameter', value)}
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
