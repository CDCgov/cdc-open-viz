import { useContext, useMemo } from 'react'

import {
  DATA_FUNCTIONS,
  DATA_FUNCTION_PASSTHROUGH,
  DATA_OPERATORS,
  TREND_ARROW_TYPE_LABELS,
  TREND_ARROW_TYPES
} from '@cdc/core/helpers/constants'

// Context
import Context from '../../context'

// Components
import { EditorPanel as BaseEditorPanel } from '@cdc/core/components/EditorPanel/EditorPanel'
import '@cdc/core/components/EditorPanel/editor.scss'
import AdvancedEditor from '@cdc/core/components/AdvancedEditor'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import { useFilterManagement } from '@cdc/core/hooks/useFilterManagement'
import { useDataColumns } from '@cdc/core/hooks/useDataColumns'
import { useListManagement } from '@cdc/core/hooks/useListManagement'
import { BITE_LOCATIONS, IMAGE_POSITIONS } from '../../constants'
import { Select, TextField, CheckBox } from '@cdc/core/components/EditorPanel/Inputs'
import Button from '@cdc/core/components/elements/Button'
import PanelMarkup from '@cdc/core/components/EditorPanel/components/PanelMarkup'
import { VisualSection } from '@cdc/core/components/EditorPanel/sections/VisualSection'
import Accordion from '@cdc/core/components/ui/Accordion'
import { TREND_MODE_CATEGORICAL, TREND_MODE_NUMERIC } from '@cdc/core/helpers/trendIndicator'
import { NUMERIC_TREND_ELIGIBLE_FUNCTIONS } from '@cdc/core/helpers/dataAggregation'
import { DataColorSelector } from '@cdc/core/components/DataColorSelector'
import { DATA_COLOR_PRESETS } from '@cdc/core/helpers/dataColors'

type DataBiteEditorPanelProps = {
  // Add any props if needed
}

const EditorPanel: React.FC<DataBiteEditorPanelProps> = () => {
  const { config, updateConfig, loading, data, editorData, setParentConfig, isDashboard } = useContext(Context)

  const updateField = updateFieldFactory(config, updateConfig, true)
  const columnSourceData = Array.isArray(editorData) && editorData.length ? editorData : data

  // Filters -----------------------------------------------
  const { addNewFilter, removeFilter, updateFilterProp, getFilterColumnValues } = useFilterManagement(
    config,
    updateConfig,
    columnSourceData
  )

  // Extract column names from data with memoization (replaces getColumns)
  const columns = useDataColumns(columnSourceData)

  // Dynamic Images ----------------------------------------
  // Use standardized list management hook (Phase 2 improvement)
  const images = useListManagement({
    config,
    updateConfig,
    listPath: 'imageData.options',
    createItem: () => ({
      source: '',
      arguments: [{ operator: '', threshold: '' }],
      alt: '',
      secondArgument: false
    })
  })

  const trendMode = config.trendIndicator?.mode || ''
  const trendMappings = config.trendIndicator?.mappings || []
  const isNumericModeEligible = NUMERIC_TREND_ELIGIBLE_FUNCTIONS.has(config.dataFunction)
  const isPassthroughFunction = config.dataFunction === DATA_FUNCTION_PASSTHROUGH

  const trendColumnValues = useMemo(() => {
    const trendColumn = config.trendIndicator?.column
    if (!trendColumn) return []

    const trendSourceData = Array.isArray(editorData) && editorData.length ? editorData : data
    const uniqueValues = new Set<string>()
    trendSourceData?.forEach(row => {
      const value = row?.[trendColumn]
      if (value !== undefined && value !== null) {
        uniqueValues.add(String(value))
      }
    })

    return Array.from(uniqueValues).sort()
  }, [editorData, data, config.trendIndicator?.column])

  type TrendDisplayEntry = { sourceValue: string; fromData: boolean; key: string }

  const trendDisplayList = useMemo<TrendDisplayEntry[]>(() => {
    const dataSet = new Set(trendColumnValues)
    const list: TrendDisplayEntry[] = trendColumnValues.map(v => ({ sourceValue: v, fromData: true, key: `data-${v}` }))
    trendMappings.forEach((m, i) => {
      if (!dataSet.has(m.sourceValue)) {
        list.push({ sourceValue: m.sourceValue, fromData: false, key: `custom-${i}` })
      }
    })
    return list
  }, [trendColumnValues, trendMappings])

  const setTrendMode = (mode: string) => {
    updateConfig({
      ...config,
      trendIndicator: {
        ...config.trendIndicator,
        mode: mode || null
      }
    })
  }

  const updateTrendMapping = (sourceValue: string, arrowType: string) => {
    const nextMappings = [...trendMappings]
    const existingIndex = nextMappings.findIndex(mapping => mapping.sourceValue === sourceValue)

    if (!arrowType) {
      if (existingIndex > -1) {
        nextMappings.splice(existingIndex, 1)
      }
    } else {
      const nextMapping = { sourceValue, arrowType }
      if (existingIndex > -1) {
        nextMappings[existingIndex] = nextMapping
      } else {
        nextMappings.push(nextMapping)
      }
    }

    updateConfig({
      ...config,
      trendIndicator: {
        ...config.trendIndicator,
        mappings: nextMappings
      }
    })
  }

  const addCustomTrendMapping = () => {
    const nextMappings = [...trendMappings, { sourceValue: '', arrowType: TREND_ARROW_TYPES[0] }]
    updateConfig({
      ...config,
      trendIndicator: {
        ...config.trendIndicator,
        mappings: nextMappings
      }
    })
  }

  const updateTrendMappingValue = (oldValue: string, newValue: string) => {
    const nextMappings = trendMappings.map(m => (m.sourceValue === oldValue ? { ...m, sourceValue: newValue } : m))
    updateConfig({
      ...config,
      trendIndicator: {
        ...config.trendIndicator,
        mappings: nextMappings
      }
    })
  }

  const removeTrendMapping = (sourceValue: string) => {
    const nextMappings = trendMappings.filter(m => m.sourceValue !== sourceValue)
    updateConfig({
      ...config,
      trendIndicator: {
        ...config.trendIndicator,
        mappings: nextMappings
      }
    })
  }

  const dataColorMappings = config.dataColors?.mappings || []

  const dataColorValues = useMemo(() => {
    const colorColumn = config.dataColors?.column
    if (!colorColumn) return []

    const sourceData = Array.isArray(editorData) && editorData.length ? editorData : data
    const uniqueValues = new Set<string>()
    sourceData?.forEach(row => {
      const value = row?.[colorColumn]
      if (value !== undefined && value !== null) {
        uniqueValues.add(String(value))
      }
    })

    return Array.from(uniqueValues).sort()
  }, [editorData, data, config.dataColors?.column])

  type DataColorDisplayEntry = { sourceValue: string; fromData: boolean; key: string }

  const dataColorDisplayList = useMemo<DataColorDisplayEntry[]>(() => {
    const dataSet = new Set(dataColorValues)
    const list: DataColorDisplayEntry[] = dataColorValues.map(v => ({
      sourceValue: v,
      fromData: true,
      key: `data-${v}`
    }))
    dataColorMappings.forEach((m, i) => {
      if (!dataSet.has(m.sourceValue)) {
        list.push({ sourceValue: m.sourceValue, fromData: false, key: `custom-${i}` })
      }
    })
    return list
  }, [dataColorValues, dataColorMappings])

  const updateDataColorMapping = (sourceValue: string, color: string) => {
    const nextMappings = [...dataColorMappings]
    const existingIndex = nextMappings.findIndex(m => m.sourceValue === sourceValue)

    if (!color) {
      if (existingIndex > -1) {
        nextMappings.splice(existingIndex, 1)
      }
    } else {
      const nextMapping = { sourceValue, color }
      if (existingIndex > -1) {
        nextMappings[existingIndex] = nextMapping
      } else {
        nextMappings.push(nextMapping)
      }
    }

    updateConfig({
      ...config,
      dataColors: {
        ...config.dataColors,
        mappings: nextMappings
      }
    })
  }

  const addCustomDataColorMapping = () => {
    const nextMappings = [...dataColorMappings, { sourceValue: '', color: DATA_COLOR_PRESETS[0] }]
    updateConfig({
      ...config,
      dataColors: {
        ...config.dataColors,
        mappings: nextMappings
      }
    })
  }

  const updateDataColorMappingValue = (oldValue: string, newValue: string) => {
    const nextMappings = dataColorMappings.map(m => (m.sourceValue === oldValue ? { ...m, sourceValue: newValue } : m))
    updateConfig({
      ...config,
      dataColors: {
        ...config.dataColors,
        mappings: nextMappings
      }
    })
  }

  const removeDataColorMapping = (sourceValue: string) => {
    const nextMappings = dataColorMappings.filter(m => m.sourceValue !== sourceValue)
    updateConfig({
      ...config,
      dataColors: {
        ...config.dataColors,
        mappings: nextMappings
      }
    })
  }

  // Helper for removing second argument from dynamic image conditions
  const removeDynamicArgument = (index: number) => {
    const item = images.items[index]
    if (item?.arguments?.length > 1) {
      const updatedArguments = [...item.arguments]
      updatedArguments.pop()
      images.updateField(index, 'arguments', updatedArguments)
    }
  }

  return (
    <BaseEditorPanel
      config={config}
      updateConfig={updateConfig as (config: any) => void}
      loading={loading}
      setParentConfig={setParentConfig as ((config: any) => void) | undefined}
      isDashboard={isDashboard}
      title='Configure Data Bites'
    >
      {({ convertStateToConfig }) => (
        <>
          <Accordion>
            <Accordion.Section title='General'>
              <Select
                value={config.biteStyle}
                fieldName='biteStyle'
                label='Data Bite Style'
                updateField={updateField}
                options={Object.entries(BITE_LOCATIONS).map(([key, value]) => ({ value: key, label: value }))}
                initial='Select'
              />
              <TextField
                value={config.title}
                fieldName='title'
                label='Title'
                placeholder='Data Bite Title'
                updateField={updateField}
              />
              <CheckBox
                value={config.visual?.showTitle}
                section='visual'
                checked={config.visual?.showTitle}
                fieldName='showTitle'
                label='Show Title'
                updateField={updateField}
              />

              <TextField
                type='textarea'
                value={config.biteBody}
                fieldName='biteBody'
                label='Message'
                updateField={updateField}
                tooltip={
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>
                        Enter the message text for the visualization. The following HTML tags are supported: strong, em,
                        sup, and sub.
                      </p>
                    </Tooltip.Content>
                  </Tooltip>
                }
              />
              <TextField
                value={config.subtext}
                fieldName='subtext'
                label='Subtext/Citation'
                placeholder='Data Bite Subtext or Citation'
                updateField={updateField}
                tooltip={
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>
                        Enter supporting text to display below the data visualization, if applicable. The following HTML
                        tags are supported: strong, em, sup, and sub. You can also use markup variables like{' '}
                        {'{{variable-name}}'} to display dynamic data.
                      </p>
                    </Tooltip.Content>
                  </Tooltip>
                }
              />
              <Select
                value={config.locale}
                fieldName='locale'
                label='Language for dates and numbers'
                updateField={updateField}
                options={[
                  { value: 'en-US', label: 'English (en-US)' },
                  { value: 'es-MX', label: 'Spanish (es-MX)' }
                ]}
                tooltip={
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>
                        Change the language (locale) for this visualization to alter the way dates and numbers are
                        formatted.
                      </p>
                    </Tooltip.Content>
                  </Tooltip>
                }
              />
            </Accordion.Section>

            <Accordion.Section title='Data'>
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
                      Array.isArray(DATA_FUNCTIONS)
                        ? DATA_FUNCTIONS
                        : DATA_FUNCTIONS
                        ? Object.values(DATA_FUNCTIONS)
                        : []
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
              <div className='checkbox-group'>
                <span className='divider-heading' style={{ marginTop: 0 }}>
                  Trend Indicator
                </span>
                <Select
                  value={trendMode}
                  fieldName='mode'
                  label='Trend Mode'
                  options={[
                    { value: '', label: 'Off' },
                    { value: TREND_MODE_CATEGORICAL, label: 'Categorical' },
                    { value: TREND_MODE_NUMERIC, label: 'Numeric' }
                  ]}
                  onChange={e => setTrendMode(e.target.value)}
                />
                {trendMode &&
                  (trendMode === TREND_MODE_NUMERIC && !isNumericModeEligible ? (
                    <p className='cove-accordion__panel-error' style={{ marginBottom: '0.5rem' }}>
                      Numeric mode only supports Sum, Mean (Average), Median, Min, and Max.
                    </p>
                  ) : (
                    <>
                      <Select
                        value={config.trendIndicator?.column || ''}
                        section='trendIndicator'
                        fieldName='column'
                        label='Trend Column'
                        tooltip={
                          trendMode === TREND_MODE_NUMERIC ? (
                            <Tooltip style={{ textTransform: 'none' }}>
                              <Tooltip.Target>
                                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                              </Tooltip.Target>
                              <Tooltip.Content>
                                <p>
                                  Choose the column that contains past data for your metric. It will be run through the
                                  same function selected from the Data Function dropdown.
                                </p>
                              </Tooltip.Content>
                            </Tooltip>
                          ) : null
                        }
                        updateField={updateField}
                        initial='Select'
                        options={columns}
                      />
                      {trendMode === TREND_MODE_CATEGORICAL && (
                        <>
                          {!isPassthroughFunction && (
                            <span className='subtext' style={{ marginBottom: '0.75rem' }}>
                              In categorical mode, arrows appear only when filters resolve to exactly one row.
                            </span>
                          )}
                          {trendDisplayList.map(({ sourceValue, fromData, key }) => {
                            const selectedArrowType =
                              trendMappings.find(mapping => mapping.sourceValue === sourceValue)?.arrowType || ''

                            return (
                              <div className='cove-accordion__panel-row align-center mb-2' key={key}>
                                <div className='cove-accordion__panel-col' style={{ flex: '1 1 0', minWidth: 0 }}>
                                  {fromData ? (
                                    sourceValue
                                  ) : (
                                    <input
                                      type='text'
                                      value={sourceValue}
                                      placeholder='Enter value'
                                      style={{ width: '100%' }}
                                      onChange={e => updateTrendMappingValue(sourceValue, e.target.value)}
                                    />
                                  )}
                                </div>
                                <div className='cove-accordion__panel-col' style={{ flex: '1 1 0', minWidth: 0 }}>
                                  <Select
                                    label=''
                                    value={selectedArrowType}
                                    options={[
                                      { value: '', label: 'No Arrow' },
                                      ...TREND_ARROW_TYPES.map(arrowType => ({
                                        value: arrowType,
                                        label: TREND_ARROW_TYPE_LABELS[arrowType]
                                      }))
                                    ]}
                                    onChange={e => updateTrendMapping(sourceValue, e.target.value)}
                                  />
                                </div>
                                <div className='cove-accordion__panel-col' style={{ flex: '0 0 1.5rem' }}>
                                  {!fromData && (
                                    <button
                                      type='button'
                                      className='btn btn-danger'
                                      style={{ padding: '0.15rem 0.45rem', lineHeight: 1 }}
                                      title='Remove mapping'
                                      onClick={() => removeTrendMapping(sourceValue)}
                                    >
                                      −
                                    </button>
                                  )}
                                </div>
                              </div>
                            )
                          })}
                          <Button
                            type='button'
                            onClick={addCustomTrendMapping}
                            className='btn btn-primary full-width mt-3'
                          >
                            Add Trend Mapping
                          </Button>
                        </>
                      )}
                      {trendMode === TREND_MODE_NUMERIC && (
                        <ul className='column-edit'>
                          <li className='two-col'>
                            <TextField
                              type='number'
                              value={config.trendIndicator?.numericThreshold ?? 0}
                              section='trendIndicator'
                              fieldName='numericThreshold'
                              label='Threshold'
                              updateField={updateField}
                              min={0}
                              tooltip={
                                <Tooltip style={{ textTransform: 'none' }}>
                                  <Tooltip.Target>
                                    <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                  </Tooltip.Target>
                                  <Tooltip.Content>
                                    <p>
                                      An arrow will be shown if the difference between the current value and the
                                      historical value exceeds this threshold.
                                    </p>
                                  </Tooltip.Content>
                                </Tooltip>
                              }
                            />
                          </li>
                        </ul>
                      )}
                      <TextField
                        value={config.trendIndicator?.upLabel || ''}
                        section='trendIndicator'
                        fieldName='upLabel'
                        label='Up Label'
                        placeholder='Increasing'
                        updateField={updateField}
                      />
                      <TextField
                        value={config.trendIndicator?.downLabel || ''}
                        section='trendIndicator'
                        fieldName='downLabel'
                        label='Down Label'
                        placeholder='Decreasing'
                        updateField={updateField}
                      />
                      {trendMode === TREND_MODE_NUMERIC && (
                        <>
                          <CheckBox
                            value={config.trendIndicator?.showNoChangeArrows || false}
                            section='trendIndicator'
                            fieldName='showNoChangeArrows'
                            label='Show indicator for no change'
                            updateField={updateField}
                          />
                        </>
                      )}
                      {(trendMode === TREND_MODE_CATEGORICAL ||
                        (trendMode === TREND_MODE_NUMERIC && config.trendIndicator?.showNoChangeArrows)) && (
                        <TextField
                          value={config.trendIndicator?.noChangeLabel || ''}
                          section='trendIndicator'
                          fieldName='noChangeLabel'
                          label='No Change Label'
                          placeholder='No change'
                          updateField={updateField}
                        />
                      )}
                      <TextField
                        value={config.trendIndicator?.trendLabel || ''}
                        section='trendIndicator'
                        fieldName='trendLabel'
                        label='Trend description'
                        placeholder='(compared to one year prior)'
                        updateField={updateField}
                      />
                    </>
                  ))}
              </div>
              <hr className='accordion__divider' />

              <label style={{ marginBottom: '1rem' }}>
                <span className='edit-label'>
                  Data Point Filters
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>
                        To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for
                        a column called "Sex").
                      </p>
                    </Tooltip.Content>
                  </Tooltip>
                </span>
              </label>
              {config.filters && (
                <ul className='filters-list'>
                  {config.filters.map((filter: any, index: number) => (
                    <fieldset className='edit-block' key={index}>
                      <button
                        type='button'
                        className='btn btn-danger'
                        onClick={() => {
                          removeFilter(index)
                        }}
                      >
                        Remove
                      </button>
                      <Select
                        value={filter.columnName ? filter.columnName : ''}
                        fieldName='columnName'
                        label={'Column Name'}
                        updateField={(section, subsection, fieldName, value) =>
                          updateFilterProp(fieldName, index, value)
                        }
                        options={columns}
                        initial='- Select Option -'
                      />
                      <Select
                        value={filter.columnValue || ''}
                        fieldName='columnValue'
                        label='Column Value'
                        updateField={(section, subsection, fieldName, value) =>
                          updateFilterProp(fieldName, index, value)
                        }
                        options={Array.isArray(getFilterColumnValues(index)) ? getFilterColumnValues(index) : []}
                        initial='- Select Option -'
                      />
                    </fieldset>
                  ))}
                </ul>
              )}
              {(!config.filters || config.filters.length === 0) && (
                <div>
                  <fieldset className='edit-block'>
                    <p style={{ textAlign: 'center' }}>There are currently no filters.</p>
                  </fieldset>
                </div>
              )}
              <Button type='button' onClick={addNewFilter} className='btn btn-primary full-width mt-3'>
                Add Filter
              </Button>
            </Accordion.Section>

            {/* Visual section for TP5 style */}
            {config.biteStyle === 'tp5' && (
              <Accordion.Section title='Visual'>
                <CheckBox
                  value={config.visual?.whiteBackground}
                  section='visual'
                  fieldName='whiteBackground'
                  label='Use White Background Style'
                  updateField={updateField}
                />
                <CheckBox
                  value={config.visual?.useWrap}
                  section='visual'
                  fieldName='useWrap'
                  label='Value Above Message'
                  updateField={updateField}
                />
                {/* TODO: Uncomment when ready to release Display Border feature
              <CheckBox
                value={config.visual?.border}
                section='visual'
                fieldName='border'
                label='Display Border'
                updateField={updateField}
              />
              */}
              </Accordion.Section>
            )}

            {config.biteStyle === 'tp5' && (
              <Accordion.Section title='Data-Driven Colors'>
                <Select
                  value={config.dataColors?.column || ''}
                  section='dataColors'
                  fieldName='column'
                  label='Color Column'
                  updateField={updateField}
                  initial='Select'
                  options={columns}
                  tooltip={
                    <Tooltip style={{ textTransform: 'none' }}>
                      <Tooltip.Target>
                        <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                      </Tooltip.Target>
                      <Tooltip.Content>
                        <p>
                          Choose a column whose values determine the background color of this visualization. Map each
                          value to a color below. Text color adjusts automatically for contrast.
                        </p>
                      </Tooltip.Content>
                    </Tooltip>
                  }
                />
                {config.dataColors?.column && dataColorDisplayList.length > 0 && (
                  <div className='mt-2'>
                    {dataColorDisplayList.map(({ sourceValue, fromData, key }) => {
                      const selectedColor = dataColorMappings.find(m => m.sourceValue === sourceValue)?.color || ''

                      return (
                        <div className='cove-accordion__panel-row align-center mb-2' key={key}>
                          <div className='cove-accordion__panel-col' style={{ flex: '1 1 0', minWidth: 0 }}>
                            {fromData ? (
                              sourceValue
                            ) : (
                              <input
                                type='text'
                                value={sourceValue}
                                placeholder='Enter value'
                                style={{ width: '100%' }}
                                onChange={e => updateDataColorMappingValue(sourceValue, e.target.value)}
                              />
                            )}
                          </div>
                          <div className='cove-accordion__panel-col' style={{ flex: '0 0 4.5rem' }}>
                            <DataColorSelector
                              value={selectedColor}
                              onChange={color => updateDataColorMapping(sourceValue, color)}
                            />
                          </div>
                          <div className='cove-accordion__panel-col' style={{ flex: '0 0 1.5rem' }}>
                            {!fromData && (
                              <button
                                type='button'
                                className='btn btn-danger'
                                style={{ padding: '0.15rem 0.45rem', lineHeight: 1 }}
                                title='Remove mapping'
                                onClick={() => removeDataColorMapping(sourceValue)}
                              >
                                −
                              </button>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
                {config.dataColors?.column && (
                  <Button type='button' onClick={addCustomDataColorMapping} className='btn btn-primary full-width mt-3'>
                    Add Color Mapping
                  </Button>
                )}
              </Accordion.Section>
            )}

            {/* Visual section for other bite styles */}
            {config.biteStyle !== 'tp5' && (
              <Accordion.Section title='Visual'>
                <VisualSection
                  config={config}
                  updateField={updateField}
                  updateConfig={updateConfig}
                  themeSelectorPosition='after'
                  beforeCheckboxes={
                    <>
                      <TextField
                        type='number'
                        value={config.biteFontSize}
                        fieldName='biteFontSize'
                        label='Bite Font Size'
                        updateField={updateField}
                        min={17}
                        max={65}
                      />
                      <Select
                        value={config.fontSize}
                        fieldName='fontSize'
                        label='Overall Font Size'
                        updateField={updateField}
                        options={['small', 'medium', 'large']}
                      />
                    </>
                  }
                />
              </Accordion.Section>
            )}

            {['title', 'body', 'graphic'].includes(config.biteStyle) && (
              <Accordion.Section title={`Image${['dynamic'].includes(config.imageData.display) ? 's' : ''}`}>
                <Select
                  value={config.imageData.display || ''}
                  section='imageData'
                  fieldName='display'
                  label='Image Display Type'
                  updateField={updateField}
                  options={['none', 'static', 'dynamic']}
                />
                <Select
                  value={config.bitePosition || ''}
                  fieldName='bitePosition'
                  label='Image/Graphic Position'
                  updateField={updateField}
                  initial='Select'
                  options={IMAGE_POSITIONS}
                />
                {['static'].includes(config.imageData.display) && (
                  <>
                    <TextField
                      value={config.imageData.url}
                      section='imageData'
                      fieldName='url'
                      label='Image URL'
                      updateField={updateField}
                    />
                    <TextField
                      value={config.imageData.alt}
                      section='imageData'
                      fieldName='alt'
                      label='Alt Text'
                      updateField={updateField}
                    />
                  </>
                )}

                {['dynamic'].includes(config.imageData.display) && (
                  <>
                    <TextField
                      value={config.imageData.url || ''}
                      section='imageData'
                      fieldName='url'
                      label='Image URL (default)'
                      updateField={updateField}
                    />
                    <TextField
                      value={config.imageData.alt}
                      section='imageData'
                      fieldName='alt'
                      label='Alt Text (default)'
                      updateField={updateField}
                    />

                    <hr className='accordion__divider' />

                    {(!images.items || images.items.length === 0) && (
                      <p style={{ textAlign: 'center' }}>There are currently no dynamic images.</p>
                    )}
                    {images.items && images.items.length > 0 && (
                      <>
                        <ul>
                          {images.items.map((option: any, index: number) => (
                            <fieldset className='edit-block' key={index}>
                              <button
                                type='button'
                                className='remove-column'
                                onClick={() => {
                                  images.remove(index)
                                }}
                              >
                                Remove
                              </button>
                              <label>
                                <span className='edit-label column-heading'>
                                  <strong>{'Image #' + (index + 1)}</strong>
                                </span>

                                <div className='accordion__panel-row align-center'>
                                  <div className='accordion__panel-col flex-auto'>If Value</div>
                                  <div className='accordion__panel-col flex-auto'>
                                    <Select
                                      label=''
                                      value={option.arguments[0]?.operator || ''}
                                      options={DATA_OPERATORS}
                                      onChange={e => {
                                        images.updateNested(index, 'arguments', 0, 'operator', e.target.value)
                                      }}
                                    />
                                  </div>
                                  <div className='accordion__panel-col flex-grow flex-shrink'>
                                    <input
                                      type='number'
                                      value={option.arguments[0]?.threshold || ''}
                                      onChange={e => {
                                        images.updateNested(index, 'arguments', 0, 'threshold', e.target.value)
                                      }}
                                    />
                                  </div>
                                </div>

                                <div className='accordion__panel-row mb-2 align-center'>
                                  <div className='accordion__panel-col flex-grow'>
                                    <Select
                                      label=''
                                      value={option.secondArgument ? 'and' : 'then'}
                                      options={[
                                        { value: 'then', label: 'Then' },
                                        { value: 'and', label: 'And' }
                                      ]}
                                      onChange={e => {
                                        if ('then' === e.target.value) {
                                          images.updateField(index, 'secondArgument', false)
                                          removeDynamicArgument(index)
                                        }
                                        if ('and' === e.target.value) {
                                          images.updateField(index, 'secondArgument', true)
                                        }
                                      }}
                                    />
                                  </div>
                                </div>

                                {option.secondArgument && true === option.secondArgument && (
                                  <>
                                    <div className='accordion__panel-row align-center'>
                                      <div className='accordion__panel-col flex-auto'>If Value</div>
                                      <div className='accordion__panel-col flex-auto'>
                                        <Select
                                          label=''
                                          value={option.arguments[1]?.operator || ''}
                                          options={DATA_OPERATORS}
                                          onChange={e => {
                                            images.updateNested(index, 'arguments', 1, 'operator', e.target.value)
                                          }}
                                        />
                                      </div>
                                      <div className='accordion__panel-col flex-grow flex-shrink'>
                                        <input
                                          type='number'
                                          value={option.arguments[1]?.threshold || ''}
                                          onChange={e => {
                                            images.updateNested(index, 'arguments', 1, 'threshold', e.target.value)
                                          }}
                                        />
                                      </div>
                                    </div>
                                    <div className='accordion__panel-row mb-2 align-center text-center text-capitalize'>
                                      <div className='accordion__panel-col flex-grow'>Then</div>
                                    </div>
                                  </>
                                )}

                                <div className='accordion__panel-row mb-2 align-center'>
                                  <div className='accordion__panel-col flex-auto'>Show</div>
                                  <div className='accordion__panel-col flex-grow'>
                                    <input
                                      type='text'
                                      value={option.source || ''}
                                      onChange={e => {
                                        images.updateField(index, 'source', e.target.value)
                                      }}
                                    />
                                  </div>
                                </div>

                                <div className='accordion__panel-row mb-2 align-center'>
                                  <div className='accordion__panel-col flex-auto'>Alt Text</div>
                                  <div className='accordion__panel-col flex-grow'>
                                    <input
                                      type='text'
                                      value={option.alt || ''}
                                      onChange={e => {
                                        images.updateField(index, 'alt', e.target.value)
                                      }}
                                    />
                                  </div>
                                </div>
                              </label>
                            </fieldset>
                          ))}
                        </ul>
                      </>
                    )}
                    <button type='button' onClick={images.add} className='btn btn-primary full-width'>
                      Add Dynamic Image
                    </button>
                  </>
                )}
              </Accordion.Section>
            )}

            <Accordion.Section title='Markup Variables'>
              <PanelMarkup
                name='Markup Variables'
                markupVariables={config.markupVariables || []}
                data={data}
                editorData={editorData}
                enableMarkupVariables={config.enableMarkupVariables || false}
                onMarkupVariablesChange={variables => updateField(null, null, 'markupVariables', variables)}
                onToggleEnable={enabled => updateField(null, null, 'enableMarkupVariables', enabled)}
                withAccordion={false}
                dataMetadata={config.dataMetadata}
              />
            </Accordion.Section>
          </Accordion>
          <AdvancedEditor loadConfig={updateConfig} config={config} convertStateToConfig={convertStateToConfig} />
        </>
      )}
    </BaseEditorPanel>
  )
}

export default EditorPanel
