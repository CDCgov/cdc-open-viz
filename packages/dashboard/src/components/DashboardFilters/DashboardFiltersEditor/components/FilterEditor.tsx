import { Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import DataTransform from '@cdc/core/helpers/DataTransform'
import { useEffect, useMemo, useRef, useState } from 'react'
import { getSharedFilterTargetOptions } from '../../../../helpers/dashboardFilterTargets'
import { SharedFilter } from '../../../../types/SharedFilter'
import { APIFilter } from '../../../../types/APIFilter'

import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import MultiSelect from '@cdc/core/components/MultiSelect'
import Loading from '@cdc/core/components/Loading'
import { DashboardConfig } from '../../../../types/DashboardConfig'
import { hasDashboardApplyBehavior } from '../../../../helpers/hasDashboardApplyBehavior'
import APIModal from './APIModal'
import NestedDropDownDashboard from './NestedDropDownDashboard'
import { FILTER_STYLE } from '../../../../types/FilterStyles'
import { filterOrderOptions } from '@cdc/core/helpers/filterOrderOptions'
import { formatFileNameFilterValue } from '../../../../helpers/fileNameFilterFormatting'
import FilterOrder from '@cdc/core/components/EditorPanel/VizFilterEditor/components/FilterOrder'
import { useGlobalContext } from '@cdc/core/components/GlobalContext'
import Modal from '@cdc/core/components/ui/Modal'
import Button from '@cdc/core/components/elements/Button'
import { getDropdownStyles } from '@cdc/core/components/Filters/components/Dropdown'

type FileNameOptionsSourceStatus = 'idle' | 'loading' | 'valid' | 'empty' | 'invalid' | 'error'
const FILE_NAME_OPTIONS_WARNING_COLOR = '#d72f00'
type FileNameOptionRow = Record<string, string | number | boolean | null | undefined>

type FilterEditorProps = {
  config: DashboardConfig
  filter: SharedFilter
  filterIndex: number
  updateFilterProp: (name: keyof SharedFilter, value: any) => void
  toggleNestedQueryParameters: (checked: boolean) => void
  onNestedDragAreaHover?: (isHovering: boolean) => void
}

const FilterEditor: React.FC<FilterEditorProps> = ({
  filter,
  filterIndex,
  config,
  updateFilterProp,
  toggleNestedQueryParameters,
  onNestedDragAreaHover
}) => {
  const [columns, setColumns] = useState<string[]>([])
  const [dataFiltersLoading, setDataFiltersLoading] = useState(false)
  const [fileNameOptionFields, setFileNameOptionFields] = useState<string[]>([])
  const [fileNameOptionRows, setFileNameOptionRows] = useState<FileNameOptionRow[]>([])
  const [fileNameOptionsSourceStatus, setFileNameOptionsSourceStatus] = useState<FileNameOptionsSourceStatus>('idle')
  const [fileNameApiFilterDraft, setFileNameApiFilterDraft] = useState<Partial<APIFilter>>(filter.apiFilter || {})
  const fileNameApiFilterDraftRef = useRef<Partial<APIFilter>>(filter.apiFilter || {})

  const transform = new DataTransform()
  const filterStyles = Object.values(FILTER_STYLE)
  const isFileNameFilter = filter.type === 'urlfilter' && filter.filterBy === 'File Name'
  const isUrlFilter = filter.type === 'urlfilter'
  const filterStyleOptions = filterStyles.filter(style => {
    if (isUrlFilter && style === FILTER_STYLE.tabSimple) return false
    if (isFileNameFilter && style === FILTER_STYLE.multiSelect) return false
    return true
  })

  const parentFilters: string[] = (config.dashboard.sharedFilters || [])
    .filter(({ key }) => key !== filter.key)
    .map(({ key }) => key)

  const dataFilterParents: string[] = (config.dashboard.sharedFilters || [])
    .filter(({ key }) => key !== filter.key)
    .map(({ key }) => key)

  const getVizTitle = (viz, vizKey) => {
    let vizName = viz.general?.title || viz.title || vizKey
    if (viz.visualizationType === 'markup-include') {
      vizName = viz.contentEditor?.title || vizKey
    }
    return vizName
  }

  const [usedByNameLookup, usedByOptions] = useMemo(() => {
    const { nameLookup, options } = getSharedFilterTargetOptions(config, filter)
    return [nameLookup, options]
  }, [config, filter])

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
        let data = (await fetchRemoteData(_dataSet.dataUrl)).data
        if (_dataSet.dataDescription && data && data.length > 0) {
          try {
            data = transform.autoStandardize(data)
            data = transform.developerStandardize(data, _dataSet.dataDescription)
          } catch (e) {
            console.error(e)
            //Data not able to be standardized, leave as is
          } finally {
            _dataSet.data = data
          }
        } else if (data) {
          // If no dataDescription but we have data, store it directly
          _dataSet.data = data
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

  useEffect(() => {
    const nextDraft = filter.apiFilter || {}
    fileNameApiFilterDraftRef.current = nextDraft
    setFileNameApiFilterDraft(nextDraft)
  }, [filter.apiFilter, filter.key])

  useEffect(() => {
    const optionsSource = fileNameApiFilterDraft.apiEndpoint?.trim()
    if (filter.type !== 'urlfilter' || filter.filterBy !== 'File Name' || !optionsSource) {
      setFileNameOptionFields([])
      setFileNameOptionRows([])
      setFileNameOptionsSourceStatus('idle')
      return
    }

    let active = true
    const loadFields = async () => {
      setFileNameOptionsSourceStatus('loading')
      try {
        const { data } = await fetchRemoteData(optionsSource)
        if (!active) return
        if (!Array.isArray(data)) {
          setFileNameOptionFields([])
          setFileNameOptionRows([])
          setFileNameOptionsSourceStatus('invalid')
          return
        }

        const optionRows = data.filter(row => row && typeof row === 'object' && !Array.isArray(row))
        const fields = Array.from(
          optionRows.reduce((acc, row) => {
            Object.keys(row).forEach(fieldName => acc.add(fieldName))
            return acc
          }, new Set<string>())
        )

        setFileNameOptionFields(fields)
        setFileNameOptionRows(optionRows)
        setFileNameOptionsSourceStatus(fields.length ? 'valid' : 'empty')
      } catch (_error) {
        if (!active) return
        setFileNameOptionFields([])
        setFileNameOptionRows([])
        setFileNameOptionsSourceStatus('error')
      }
    }

    const timeout = window.setTimeout(loadFields, 300)
    return () => {
      active = false
      window.clearTimeout(timeout)
    }
  }, [fileNameApiFilterDraft.apiEndpoint, filter.filterBy, filter.type])

  const updateAPIFilter = (apiEndpoint, valueSelector, textSelector, subgroupValueSelector, subgroupTextSelector) => {
    const newAPIFilter = !isNestedDropdown
      ? {
          apiEndpoint,
          valueSelector,
          textSelector
        }
      : {
          apiEndpoint,
          valueSelector,
          textSelector,
          subgroupValueSelector,
          subgroupTextSelector
        }
    updateFilterProp('apiFilter', newAPIFilter)
    overlay.actions.toggleOverlay(false)
  }

  const updateFileNameAPIFilterProp = (name: string, value: string) => {
    const nextAPIFilter = {
      ...fileNameApiFilterDraftRef.current,
      [name]: value
    }
    fileNameApiFilterDraftRef.current = nextAPIFilter
    setFileNameApiFilterDraft(nextAPIFilter)
    updateFilterProp('apiFilter', nextAPIFilter)
  }

  const updateLabel = (value: string) => {
    const duplicateLabels = config.dashboard.sharedFilters.filter(
      (filter, i) => filter.key === value && filterIndex !== i
    )
    // If there are duplicate labels, append the number of duplicates to the label similar functionality to duplicate file names
    updateFilterProp('key', duplicateLabels.length ? value + ` (${duplicateLabels.length})` : value)
  }

  const isNestedDropdown = filter.filterStyle === FILTER_STYLE.nestedDropdown

  const { overlay } = useGlobalContext()

  const handleEditAPIValues = (filter, isNestedDropdown, updateAPIFilter) => {
    {
      overlay.actions.openOverlay(
        <Modal>
          <Modal.Content>
            <APIModal filter={filter} isNestedDropdown={isNestedDropdown} updateAPIFilter={updateAPIFilter} />
          </Modal.Content>
        </Modal>
      )
    }
  }

  const selectFilterType = (type: string) => {
    updateFilterProp('type', type)
    if (type === 'datafilter') {
      loadColumnData()
    }
  }

  const fileNameDatasetOptions = useMemo(
    () =>
      Object.keys(config.datasets || {})
        .filter(datasetKey => config.datasets[datasetKey].dataUrl)
        .map(datasetKey => ({
          value: datasetKey,
          label: config.datasets[datasetKey].dataUrl
        })),
    [config.datasets]
  )

  const fileNameTargets = filter.fileNameTargets || []

  const getDefaultFileNameTemplate = (datasetKey?: string) => {
    const dataUrl = datasetKey ? config.datasets?.[datasetKey]?.dataUrl : ''
    const urlWithoutQuery = dataUrl?.split(/[?#]/)[0] || ''
    const fileName = urlWithoutQuery.split('/').filter(Boolean).pop() || ''
    const extension = fileName.match(/\.([^/.]+)$/)?.[1]
    const fallbackTemplate = extension ? `\${value}.${extension}` : '${value}.json'
    if (!fileName || !extension || !fileNameOptionRows.length) return fallbackTemplate

    const valueSelector =
      filter.filterStyle === FILTER_STYLE.nestedDropdown
        ? fileNameApiFilterDraft.subgroupValueSelector
        : fileNameApiFilterDraft.valueSelector
    if (!valueSelector) return fallbackTemplate

    const candidates = Array.from(
      new Set(
        fileNameOptionRows
          .map(row => row[valueSelector])
          .filter((value): value is string | number => typeof value === 'string' || typeof value === 'number')
          .map(value => formatFileNameFilterValue(value, filter))
          .filter(Boolean)
      )
    ).sort((a, b) => b.length - a.length)

    const matches = candidates.filter(candidate => fileName.includes(candidate))
    if (matches.length !== 1) return fallbackTemplate

    return fileName.replace(matches[0], '${value}')
  }

  const updateFileNameTarget = (targetIndex: number, fieldName: 'datasetKey' | 'fileName', value: string) => {
    const nextTargets = [...fileNameTargets]
    const inferredFileName = fieldName === 'datasetKey' ? getDefaultFileNameTemplate(value) : undefined
    nextTargets[targetIndex] = {
      ...nextTargets[targetIndex],
      [fieldName]: value,
      ...(inferredFileName !== undefined ? { fileName: inferredFileName } : {})
    }
    updateFilterProp('fileNameTargets', nextTargets)
  }

  const addFileNameTarget = () => {
    const usedDatasetKeys = new Set(fileNameTargets.map(target => target.datasetKey))
    const firstUnusedDataset = fileNameDatasetOptions.find(option => !usedDatasetKeys.has(option.value))
    updateFilterProp('fileNameTargets', [
      ...fileNameTargets,
      { datasetKey: firstUnusedDataset?.value || '', fileName: getDefaultFileNameTemplate(firstUnusedDataset?.value) }
    ])
  }

  const removeFileNameTarget = (targetIndex: number) => {
    updateFilterProp(
      'fileNameTargets',
      fileNameTargets.filter((_target, index) => index !== targetIndex)
    )
  }

  const getFileNameFieldOptions = (selectedValue = '', includeUseValueField = false) => {
    const fieldOptions = fileNameOptionFields.map(fieldName => ({
      value: fieldName,
      label: fieldName
    }))
    const selectedValueNotFound = selectedValue && !fileNameOptionFields.includes(selectedValue)
    return [
      includeUseValueField
        ? { value: '', label: 'Use value field' }
        : { value: '', label: fileNameOptionFields.length ? '- Select Field -' : 'No fields loaded' },
      ...(selectedValueNotFound ? [{ value: selectedValue, label: `${selectedValue}` }] : []),
      ...fieldOptions
    ]
  }

  const isSavedFileNameFieldMissing = (fieldName?: string) =>
    !!fieldName &&
    fileNameOptionsSourceStatus !== 'idle' &&
    fileNameOptionsSourceStatus !== 'loading' &&
    fileNameOptionsSourceStatus !== 'error' &&
    !fileNameOptionFields.includes(fieldName)

  const fileNameOptionsSourceMessage = {
    idle: '',
    loading: 'Checking options file...',
    valid: 'Options file loaded. Choose fields below.',
    empty: 'The file loaded, but no fields were found.',
    invalid: 'The file loaded, but it was not a valid options list.',
    error: 'Fields could not be loaded. Check the file or URL and try again.'
  }[fileNameOptionsSourceStatus]

  const fileNameOptionsSourceMessageClass = {
    idle: '',
    loading: 'text-muted',
    valid: 'text-success',
    empty: '',
    invalid: '',
    error: 'text-danger'
  }[fileNameOptionsSourceStatus]
  const fileNameOptionsSourceMessageStyle =
    fileNameOptionsSourceStatus === 'empty' || fileNameOptionsSourceStatus === 'invalid'
      ? { color: FILE_NAME_OPTIONS_WARNING_COLOR }
      : undefined

  const fileNameFieldSelectDisabled = fileNameOptionFields.length === 0
  const fileNameFieldSelectStyle = {
    textTransform: 'none',
    ...(fileNameFieldSelectDisabled ? { cursor: 'not-allowed', backgroundColor: '#e9ecef' } : {})
  }

  return (
    <>
      {dataFiltersLoading && <Loading />}
      <Select
        label='Filter Type'
        value={filter.type || ''}
        options={[
          { value: '', label: '- Select Option -' },
          { value: 'urlfilter', label: 'URL' },
          { value: 'datafilter', label: 'Data' }
        ]}
        onChange={e => selectFilterType(e.target.value)}
        disabled={!!filter.type}
      />
      {filter.type !== undefined && (
        <>
          <Select
            label='Filter Style'
            value={filter.filterStyle || FILTER_STYLE.dropdown}
            options={filterStyleOptions}
            onChange={e => updateFilterProp('filterStyle', e.target.value)}
          />
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
            fieldName='key'
            value={filter.key}
            updateField={(_section, _subSection, _key, value) => {
              updateLabel(value)
            }}
          />
          <TextField
            type='textarea'
            className='filter-editor__compact-textarea'
            label='Note'
            fieldName='note'
            value={filter.note || ''}
            updateField={(_section, _subSection, _key, value) => updateFilterProp('note', value)}
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
                  <Select
                    label='Filter By'
                    value={filter.filterBy || ''}
                    options={[
                      { value: '', label: '- Select Option -' },
                      { value: 'Query String', label: 'Query String' },
                      { value: 'File Name', label: 'File Name' }
                    ]}
                    onChange={e => updateFilterProp('filterBy', e.target.value)}
                  />

                  {filter.filterBy === 'File Name' && (
                    <div className='border rounded bg-light p-2 my-2'>
                      <div className='edit-label column-heading mb-2'>Filter Options Source</div>
                      <label className='d-block'>
                        <span>
                          File or URL with options:{' '}
                          <Tooltip style={{ textTransform: 'none' }}>
                            <Tooltip.Target>
                              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>
                                Choose where the dropdown options come from. You can paste a full web address or use a
                                site path, like /path/to/filter-options.json.
                              </p>
                            </Tooltip.Content>
                          </Tooltip>
                        </span>
                        <div className='d-flex align-items-start gap-2'>
                          <textarea
                            aria-label='File or URL with options'
                            placeholder='/path/to/filter-options.json'
                            value={fileNameApiFilterDraft.apiEndpoint || ''}
                            rows={2}
                            onChange={e => updateFileNameAPIFilterProp('apiEndpoint', e.target.value)}
                            className='w-50'
                            style={{ minHeight: '1.5rem' }}
                          />
                          {isNestedDropdown && (
                            <Tooltip style={{ textTransform: 'none' }}>
                              <Tooltip.Target>
                                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                              </Tooltip.Target>
                              <Tooltip.Content>
                                <p>Your options file or URL should include both dropdown fields.</p>
                              </Tooltip.Content>
                            </Tooltip>
                          )}
                        </div>
                        {fileNameOptionsSourceMessage && (
                          <p
                            className={`${fileNameOptionsSourceMessageClass} mb-0 mt-1`}
                            style={fileNameOptionsSourceMessageStyle}
                          >
                            {fileNameOptionsSourceMessage}
                          </p>
                        )}
                      </label>
                      <label>
                        <span>Filter Value Field (Required)</span>
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>Value to use in the html option element</p>
                          </Tooltip.Content>
                        </Tooltip>
                        <select
                          aria-label='Value Selector'
                          className={`cove-form-select ${getDropdownStyles()}`}
                          value={fileNameApiFilterDraft.valueSelector || ''}
                          disabled={fileNameFieldSelectDisabled}
                          style={fileNameFieldSelectStyle}
                          onChange={e => updateFileNameAPIFilterProp('valueSelector', e.target.value)}
                        >
                          {getFileNameFieldOptions(fileNameApiFilterDraft.valueSelector).map(option => (
                            <option key={`value-selector-${option.value}`} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {isSavedFileNameFieldMissing(fileNameApiFilterDraft.valueSelector) && (
                          <p className='mb-0' style={{ color: FILE_NAME_OPTIONS_WARNING_COLOR }}>
                            This saved field was not found in the options file. It has been preserved.
                          </p>
                        )}
                      </label>
                      <label>
                        <span>Filter Display Field</span>
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>
                              Text to use in the html option element. If none is applied value selector will be used.
                            </p>
                          </Tooltip.Content>
                        </Tooltip>
                        <select
                          aria-label='Display Text Selector'
                          className={`cove-form-select ${getDropdownStyles()}`}
                          value={fileNameApiFilterDraft.textSelector || ''}
                          disabled={fileNameFieldSelectDisabled}
                          style={fileNameFieldSelectStyle}
                          onChange={e => updateFileNameAPIFilterProp('textSelector', e.target.value)}
                        >
                          {getFileNameFieldOptions(fileNameApiFilterDraft.textSelector, true).map(option => (
                            <option key={`text-selector-${option.value}`} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {isSavedFileNameFieldMissing(fileNameApiFilterDraft.textSelector) && (
                          <p className='mb-0' style={{ color: FILE_NAME_OPTIONS_WARNING_COLOR }}>
                            This saved field was not found in the options file. It has been preserved.
                          </p>
                        )}
                      </label>
                      {!isNestedDropdown && (
                        <label>
                          <span>Row Filter Field</span>
                          <Tooltip style={{ textTransform: 'none' }}>
                            <Tooltip.Target>
                              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>
                                Optional. Use this when there are multiple data sources within the same file. The value
                                of this field will be used to filter the rows of the data file.
                              </p>
                            </Tooltip.Content>
                          </Tooltip>
                          <select
                            aria-label='Row Filter Selector'
                            className={`cove-form-select ${getDropdownStyles()}`}
                            value={fileNameApiFilterDraft.filterSelector || ''}
                            disabled={fileNameFieldSelectDisabled}
                            style={fileNameFieldSelectStyle}
                            onChange={e => updateFileNameAPIFilterProp('filterSelector', e.target.value)}
                          >
                            {getFileNameFieldOptions(fileNameApiFilterDraft.filterSelector, true).map(option => (
                              <option key={`filter-selector-${option.value}`} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          {isSavedFileNameFieldMissing(fileNameApiFilterDraft.filterSelector) && (
                            <p className='mb-0' style={{ color: FILE_NAME_OPTIONS_WARNING_COLOR }}>
                              This saved field was not found in the options file. It has been preserved.
                            </p>
                          )}
                        </label>
                      )}

                      {isNestedDropdown && (
                        <>
                          <label>
                            <span>Subgroup Value Field (Required)</span>
                            <Tooltip style={{ textTransform: 'none' }}>
                              <Tooltip.Target>
                                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                              </Tooltip.Target>
                              <Tooltip.Content>
                                <p>Value to use in the html option element</p>
                              </Tooltip.Content>
                            </Tooltip>
                            <select
                              aria-label='Subgroup Value Selector'
                              className={`cove-form-select ${getDropdownStyles()}`}
                              value={fileNameApiFilterDraft.subgroupValueSelector || ''}
                              disabled={fileNameFieldSelectDisabled}
                              style={fileNameFieldSelectStyle}
                              onChange={e => updateFileNameAPIFilterProp('subgroupValueSelector', e.target.value)}
                            >
                              {getFileNameFieldOptions(fileNameApiFilterDraft.subgroupValueSelector).map(option => (
                                <option key={`subgroup-value-selector-${option.value}`} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                            {isSavedFileNameFieldMissing(fileNameApiFilterDraft.subgroupValueSelector) && (
                              <p className='mb-0' style={{ color: FILE_NAME_OPTIONS_WARNING_COLOR }}>
                                This saved field was not found in the options file. It has been preserved.
                              </p>
                            )}
                          </label>
                          <label>
                            <span>Subgroup Display Field</span>
                            <Tooltip style={{ textTransform: 'none' }}>
                              <Tooltip.Target>
                                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                              </Tooltip.Target>
                              <Tooltip.Content>
                                <p>
                                  Text to use in the html option element. If none is applied value selector will be
                                  used.
                                </p>
                              </Tooltip.Content>
                            </Tooltip>
                            <select
                              aria-label='Subgroup Display Text Selector'
                              className={`cove-form-select ${getDropdownStyles()}`}
                              value={fileNameApiFilterDraft.subgroupTextSelector || ''}
                              disabled={fileNameFieldSelectDisabled}
                              style={fileNameFieldSelectStyle}
                              onChange={e => updateFileNameAPIFilterProp('subgroupTextSelector', e.target.value)}
                            >
                              {getFileNameFieldOptions(fileNameApiFilterDraft.subgroupTextSelector, true).map(
                                option => (
                                  <option key={`subgroup-text-selector-${option.value}`} value={option.value}>
                                    {option.label}
                                  </option>
                                )
                              )}
                            </select>
                            {isSavedFileNameFieldMissing(fileNameApiFilterDraft.subgroupTextSelector) && (
                              <p className='mb-0' style={{ color: FILE_NAME_OPTIONS_WARNING_COLOR }}>
                                This saved field was not found in the options file. It has been preserved.
                              </p>
                            )}
                          </label>
                        </>
                      )}
                    </div>
                  )}

                  {filter.filterBy === 'Query String' && filter.usedBy && filter.usedBy.length > 0 && (
                    <div className='bg-info-subtle p-2 my-2' style={{ fontSize: '0.9em' }}>
                      <Icon display='info' style={{ marginRight: '0.5rem' }} />
                      Will apply to datasets used by selected targets
                    </div>
                  )}
                  {filter.filterBy === 'File Name' && (
                    <>
                      <div className='border rounded bg-light p-2 my-2'>
                        <div className='edit-label column-heading mb-2'>
                          Dataset Targets
                          <Tooltip style={{ textTransform: 'none' }}>
                            <Tooltip.Target>
                              <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                            </Tooltip.Target>
                            <Tooltip.Content>
                              <p>Select each dataset URL and the filename template this filter should request.</p>
                            </Tooltip.Content>
                          </Tooltip>
                        </div>
                        {fileNameTargets.map((target, targetIndex) => (
                          <div className='border rounded bg-white p-2 my-2' key={`file-name-target-${targetIndex}`}>
                            <Select
                              label='Dataset URL'
                              fieldName={`fileNameTargetDataset-${targetIndex}`}
                              value={target.datasetKey || ''}
                              options={[{ value: '', label: '- Select Option -' }, ...fileNameDatasetOptions]}
                              onChange={e => updateFileNameTarget(targetIndex, 'datasetKey', e.target.value)}
                              style={{ textTransform: 'none' }}
                            />
                            <TextField
                              label='File Name Template'
                              fieldName={`fileNameTargetTemplate-${targetIndex}`}
                              value={target.fileName || ''}
                              updateField={(_section, _subSection, _key, value) =>
                                updateFileNameTarget(targetIndex, 'fileName', value)
                              }
                              tooltip={
                                <Tooltip style={{ textTransform: 'none' }}>
                                  <Tooltip.Target>
                                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                  </Tooltip.Target>
                                  <Tooltip.Content>
                                    <p>
                                      Use <code>{'${value}'}</code> where the selected filter value should appear in the
                                      file name. It will be replaced with the selected option from the Filter Value
                                      Field above.
                                    </p>
                                  </Tooltip.Content>
                                </Tooltip>
                              }
                            />
                            <Button
                              type='button'
                              variant='danger'
                              size='sm'
                              className='mt-1'
                              onClick={() => removeFileNameTarget(targetIndex)}
                            >
                              Remove Target
                            </Button>
                          </div>
                        ))}
                        <Button type='button' variant='secondary' size='sm' onClick={addFileNameTarget}>
                          Add Target
                        </Button>

                        <Select
                          label='White Space Replacments'
                          value={filter.whitespaceReplacement || 'Keep Spaces'}
                          options={[
                            { value: 'Remove Spaces', label: 'Remove Spaces' },
                            { value: 'Replace With Underscore', label: 'Replace With Underscore' },
                            { value: 'Keep Spaces', label: 'Keep Spaces' }
                          ]}
                          onChange={e => updateFilterProp('whitespaceReplacement', e.target.value)}
                          tooltip={
                            <Tooltip style={{ textTransform: 'none' }}>
                              <Tooltip.Target>
                                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                              </Tooltip.Target>
                              <Tooltip.Content>
                                <p>{`Set how whitespace characters will be handled in the file request`}</p>
                              </Tooltip.Content>
                            </Tooltip>
                          }
                        />
                        <label>
                          <input
                            type='checkbox'
                            checked={!!filter.forceFileNameCapitalization}
                            aria-label='Force Capitalization'
                            onChange={e => updateFilterProp('forceFileNameCapitalization', e.target.checked)}
                          />
                          <span>
                            {' '}
                            Force Capitalization{' '}
                            <Tooltip style={{ textTransform: 'none' }}>
                              <Tooltip.Target>
                                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                              </Tooltip.Target>
                              <Tooltip.Content>
                                <p>
                                  Capitalizes the first letter of each space-separated word in the filename template and
                                  selected filter value before applying whitespace replacement. This preserves legacy
                                  File Name URL-filter behavior. Leave off when your template already matches the target
                                  filenames.
                                </p>
                              </Tooltip.Content>
                            </Tooltip>
                          </span>
                        </label>
                      </div>
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
              {filter.filterBy !== 'File Name' && (
                <div className='bg-secondary-subtle p-2 my-2'>
                  <label>
                    <span>API Endpoint: </span>
                    <textarea value={filter?.apiFilter?.apiEndpoint || ''} disabled />
                    {isNestedDropdown && (
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Your API Endpoint should return both value selector values.</p>
                        </Tooltip.Content>
                      </Tooltip>
                    )}
                  </label>
                  <div className={isNestedDropdown ? 'border border-dark p-1 my-1' : ''}>
                    <label>
                      <span>Value Selector: </span>
                      <input type='text' value={filter?.apiFilter?.valueSelector || ''} disabled />
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Value to use in the html option element</p>
                        </Tooltip.Content>
                      </Tooltip>
                      <div>{` * Required`}</div>
                    </label>
                    <label>
                      <span>Display Text Selector: </span>
                      <input type='text' value={filter?.apiFilter?.textSelector || ''} disabled />
                      <Tooltip style={{ textTransform: 'none' }}>
                        <Tooltip.Target>
                          <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                        </Tooltip.Target>
                        <Tooltip.Content>
                          <p>Text to use in the html option element. If none is applied value selector will be used.</p>
                        </Tooltip.Content>
                      </Tooltip>
                      <div>{` * Optional`}</div>
                    </label>
                  </div>

                  {isNestedDropdown && (
                    <div className={isNestedDropdown ? 'border border-dark p-1 my-1' : ''}>
                      <label>
                        <span>Subgroup Value Selector (Required)</span>
                        <input value={filter?.apiFilter?.subgroupValueSelector || ''} disabled />
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>Value to use in the html option element</p>
                          </Tooltip.Content>
                        </Tooltip>
                      </label>
                      <label>
                        <span>Subgroup Display Text Selector</span>
                        <input value={filter?.apiFilter?.subgroupTextSelector || ''} disabled />
                        <Tooltip style={{ textTransform: 'none' }}>
                          <Tooltip.Target>
                            <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                          </Tooltip.Target>
                          <Tooltip.Content>
                            <p>
                              Text to use in the html option element. If none is applied value selector will be used.
                            </p>
                          </Tooltip.Content>
                        </Tooltip>
                      </label>
                    </div>
                  )}

                  <Button
                    variant='primary'
                    className='mt-2'
                    onClick={() => handleEditAPIValues(filter, isNestedDropdown, updateAPIFilter)}
                  >
                    Edit API Values
                  </Button>
                </div>
              )}

              {filter.filterBy !== 'File Name' && (
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
              )}

              {isNestedDropdown && (
                <label>
                  <input
                    type='checkbox'
                    checked={!!filter.displaySubgroupingOnly}
                    aria-label='Display subgrouping only'
                    onChange={e => updateFilterProp('displaySubgroupingOnly', e.target.checked)}
                  />
                  <span> Display subgrouping only</span>
                </label>
              )}

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
                      {filter.filterBy === 'File Name' ? (
                        <p>
                          Select which visualizations or rows use this filter for shared-filter behavior. If none are
                          selected, shared-filter behavior is global. Filename URL rewrites are controlled by Dataset
                          Targets.
                        </p>
                      ) : (
                        <p>
                          Select if you would like specific visualizations or rows to use this filter. If none are
                          selected, the filter is treated as global.
                        </p>
                      )}
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
              {filter.filterBy === 'File Name' && (
                <label className='d-block'>
                  <input
                    type='checkbox'
                    checked={!filter.allowEmptyInitialState}
                    aria-label='Auto-select first option'
                    onChange={e => updateFilterProp('allowEmptyInitialState', !e.target.checked)}
                  />
                  <span>
                    {' '}
                    Auto-select first option{' '}
                    <Tooltip style={{ textTransform: 'none' }}>
                      <Tooltip.Target>
                        <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                      </Tooltip.Target>
                      <Tooltip.Content>
                        <p>
                          When enabled, the first File Name filter option is selected after options load. When disabled,
                          no option is selected until the user chooses one.
                        </p>
                      </Tooltip.Content>
                    </Tooltip>
                  </span>
                </label>
              )}
            </>
          )}

          {filter.type === 'datafilter' && (
            <>
              {filter.filterStyle !== FILTER_STYLE.nestedDropdown ? (
                <>
                  <Select
                    label='Filter'
                    value={filter.columnName || ''}
                    options={[
                      { value: '', label: '- Select Option -' },
                      ...columns.map(col => ({ value: col, label: col }))
                    ]}
                    onChange={e => {
                      updateFilterProp('columnName', e.target.value)
                    }}
                  />

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
                      onNestedDragAreaHover={onNestedDragAreaHover}
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
                    onNestedDragAreaHover={onNestedDragAreaHover}
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

                  <label>
                    <input
                      type='checkbox'
                      checked={!!filter.displaySubgroupingOnly}
                      aria-label='Display subgrouping only'
                      onChange={e => updateFilterProp('displaySubgroupingOnly', e.target.checked)}
                    />
                    <span> Display subgrouping only</span>
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
                        Select if you would like specific visualizations or rows to use this filter. If none are
                        selected, the filter is treated as global.
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
                <span className='edit-label column-heading mt-1'>Parent Filter(s): </span>
                <MultiSelect
                  label='Parent Filter(s): '
                  options={dataFilterParents.map(key => ({ value: key, label: key }))}
                  fieldName='parents'
                  selected={filter.parents}
                  updateField={(_section, _subsection, _fieldname, newItems) => {
                    updateFilterProp('parents', newItems)
                  }}
                />
              </label>

              {!isNestedDropdown && (
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
