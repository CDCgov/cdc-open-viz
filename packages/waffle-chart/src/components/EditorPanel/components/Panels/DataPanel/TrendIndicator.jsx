import { useContext, useMemo } from 'react'

import { CheckBox, Select, TextField } from '@cdc/core/components/EditorPanel/Inputs'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import { NUMERIC_TREND_ELIGIBLE_FUNCTIONS } from '@cdc/core/helpers/dataAggregation'
import { TREND_ARROW_TYPE_LABELS, TREND_ARROW_TYPES } from '@cdc/core/helpers/constants'
import { TREND_MODE_CATEGORICAL, TREND_MODE_NUMERIC } from '@cdc/core/helpers/trendIndicator'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'

import ConfigContext from '../../../../../ConfigContext'

const TrendIndicator = ({ columns }) => {
  const { config, updateConfig, data, editorData } = useContext(ConfigContext)
  const updateField = updateFieldFactory(config, updateConfig, true)
  const supportsTrendIndicator = config.visualizationType === 'TP5 Waffle' || config.visualizationType === 'TP5 Gauge'
  const trendMode = config.trendIndicator?.mode || ''
  const trendMappings = config.trendIndicator?.mappings || []
  const isNumericModeEligible = NUMERIC_TREND_ELIGIBLE_FUNCTIONS.has(config.dataFunction)
  const trendColumnValues = useMemo(() => {
    const trendColumn = config.trendIndicator?.column
    if (!trendColumn) return []

    const trendSourceData = Array.isArray(editorData) && editorData.length ? editorData : data
    const uniqueValues = new Set()
    trendSourceData?.forEach(row => {
      const value = row?.[trendColumn]
      if (value !== undefined && value !== null) {
        uniqueValues.add(String(value))
      }
    })

    return Array.from(uniqueValues).sort()
  }, [editorData, data, config.trendIndicator?.column])

  const setTrendMode = mode => {
    updateConfig({
      ...config,
      trendIndicator: {
        ...config.trendIndicator,
        mode: mode || null
      }
    })
  }

  const updateTrendMapping = (sourceValue, arrowType) => {
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

  if (!supportsTrendIndicator) return null

  return (
    <>
      <hr className='cove-accordion__divider' />
      <div className='checkbox-group'>
        <h4 style={{ fontWeight: '600', marginTop: 0 }}>Trend Indicator</h4>
        <Select
          value={trendMode}
          label='Trend Mode'
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>
                  Choose Categorical if the column containing historical data has labels like "increasing", or Numeric
                  if the historical data is numeric.
                </p>
              </Tooltip.Content>
            </Tooltip>
          }
          options={[
            { value: '', label: 'Off' },
            { value: TREND_MODE_CATEGORICAL, label: 'Categorical' },
            { value: TREND_MODE_NUMERIC, label: 'Numeric' }
          ]}
          onChange={e => setTrendMode(e.target.value)}
        />
        {trendMode === TREND_MODE_NUMERIC && !isNumericModeEligible && (
          <p className='cove-accordion__panel-error' style={{ marginBottom: '0.5rem' }}>
            Numeric mode only supports Sum, Mean (Average), Median, Min, and Max.
          </p>
        )}
        {trendMode && !(trendMode === TREND_MODE_NUMERIC && !isNumericModeEligible) && (
          <>
            <Select
              value={config.trendIndicator?.column || ''}
              section='trendIndicator'
              fieldName='column'
              label={trendMode === TREND_MODE_NUMERIC ? 'Trend Numerator Column' : 'Trend Column'}
              tooltip={
                trendMode === TREND_MODE_NUMERIC ? (
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p>
                        Choose the column that contains past numerator data for your metric. It will be run through the
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
                <span className='subtext' style={{ marginBottom: '0.75rem' }}>
                  In categorical mode, arrows appear only when filters resolve to exactly one row.
                </span>
                {trendColumnValues.map(sourceValue => {
                  const selectedArrowType =
                    trendMappings.find(mapping => mapping.sourceValue === sourceValue)?.arrowType || ''
                  return (
                    <div className='cove-accordion__panel-row align-center mb-2' key={sourceValue}>
                      <div className='cove-accordion__panel-col flex-grow'>{sourceValue}</div>
                      <div className='cove-accordion__panel-col flex-grow'>
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
                    </div>
                  )
                })}
              </>
            )}
            {trendMode === TREND_MODE_NUMERIC && (
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
                        An arrow is shown when the current displayed percentage differs from the historical displayed
                        percentage by more than this many percentage points.
                      </p>
                    </Tooltip.Content>
                  </Tooltip>
                }
              />
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
        )}
      </div>
    </>
  )
}

export default TrendIndicator
