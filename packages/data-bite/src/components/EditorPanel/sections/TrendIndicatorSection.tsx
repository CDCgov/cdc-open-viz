import { useContext, useMemo } from 'react'

import Button from '@cdc/core/components/elements/Button'
import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import { NUMERIC_TREND_ELIGIBLE_FUNCTIONS } from '@cdc/core/helpers/dataAggregation'
import { DATA_FUNCTION_PASSTHROUGH, TREND_ARROW_TYPE_LABELS, TREND_ARROW_TYPES } from '@cdc/core/helpers/constants'
import { TREND_MODE_CATEGORICAL, TREND_MODE_NUMERIC } from '@cdc/core/helpers/trendIndicator'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import { useDataColumns } from '@cdc/core/hooks/useDataColumns'

import Context from '../../../context'

type TrendDisplayEntry = {
  sourceValue: string
  fromData: boolean
  key: string
}

const TrendIndicatorSection = () => {
  const { config, updateConfig, data, editorData } = useContext(Context)
  const updateField = updateFieldFactory(config, updateConfig, true)
  const sourceData = Array.isArray(editorData) && editorData.length ? editorData : data
  const columns = useDataColumns(sourceData)
  const trendMode = config.trendIndicator?.mode || ''
  const trendMappings = config.trendIndicator?.mappings || []
  const isNumericModeEligible = NUMERIC_TREND_ELIGIBLE_FUNCTIONS.has(config.dataFunction)
  const isPassthroughFunction = config.dataFunction === DATA_FUNCTION_PASSTHROUGH

  const trendColumnValues = useMemo(() => {
    const trendColumn = config.trendIndicator?.column
    if (!trendColumn) return []

    const uniqueValues = new Set<string>()
    sourceData?.forEach(row => {
      const value = row?.[trendColumn]
      if (value !== undefined && value !== null) {
        uniqueValues.add(String(value))
      }
    })

    return Array.from(uniqueValues).sort()
  }, [sourceData, config.trendIndicator?.column])

  const trendDisplayList = useMemo<TrendDisplayEntry[]>(() => {
    const dataSet = new Set(trendColumnValues)
    const list = trendColumnValues.map(sourceValue => ({
      sourceValue,
      fromData: true,
      key: `data-${sourceValue}`
    }))

    trendMappings.forEach((mapping, index) => {
      if (!dataSet.has(mapping.sourceValue)) {
        list.push({ sourceValue: mapping.sourceValue, fromData: false, key: `custom-${index}` })
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
    const nextMappings = trendMappings.map(mapping =>
      mapping.sourceValue === oldValue ? { ...mapping, sourceValue: newValue } : mapping
    )
    updateConfig({
      ...config,
      trendIndicator: {
        ...config.trendIndicator,
        mappings: nextMappings
      }
    })
  }

  const removeTrendMapping = (sourceValue: string) => {
    const nextMappings = trendMappings.filter(mapping => mapping.sourceValue !== sourceValue)
    updateConfig({
      ...config,
      trendIndicator: {
        ...config.trendIndicator,
        mappings: nextMappings
      }
    })
  }

  return (
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
        onChange={event => setTrendMode(event.target.value)}
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
                        Choose the column that contains past data for your metric. It will be run through the same
                        function selected from the Data Function dropdown.
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
                            onChange={event => updateTrendMappingValue(sourceValue, event.target.value)}
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
                          onChange={event => updateTrendMapping(sourceValue, event.target.value)}
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
                <Button type='button' onClick={addCustomTrendMapping} className='btn btn-primary full-width mt-3'>
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
                            An arrow will be shown if the difference between the current value and the historical value
                            exceeds this threshold.
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
              <CheckBox
                value={config.trendIndicator?.showNoChangeArrows || false}
                section='trendIndicator'
                fieldName='showNoChangeArrows'
                label='Show indicator for no change'
                updateField={updateField}
              />
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
  )
}

export default TrendIndicatorSection
