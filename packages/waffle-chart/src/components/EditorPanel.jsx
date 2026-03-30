import React, { useEffect, useMemo, memo, useContext } from 'react'

import ConfigContext from '../ConfigContext'

import { EditorPanel as BaseEditorPanel } from '@cdc/core/components/EditorPanel/EditorPanel'
import AdvancedEditor from '@cdc/core/components/AdvancedEditor'
import Accordion from '@cdc/core/components/ui/Accordion'
import Button from '@cdc/core/components/elements/Button'
import Icon from '@cdc/core/components/ui/Icon'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import { TextField, Select, CheckBox } from '@cdc/core/components/EditorPanel/Inputs'
import { updateFieldFactory } from '@cdc/core/helpers/updateFieldFactory'
import { useFilterManagement } from '@cdc/core/hooks/useFilterManagement'
import { useDataColumns } from '@cdc/core/hooks/useDataColumns'
import { VisualSection } from '@cdc/core/components/EditorPanel/sections/VisualSection'
import PanelMarkup from '@cdc/core/components/EditorPanel/components/PanelMarkup'

import '@cdc/core/components/EditorPanel/editor.scss'
import WarningImage from '../images/warning.svg'

import { DATA_OPERATORS, DATA_FUNCTIONS } from '../CdcWaffleChart'
import { TREND_ARROW_TYPE_LABELS, TREND_ARROW_TYPES } from '@cdc/core/helpers/constants'
import { TREND_MODE_CATEGORICAL, TREND_MODE_NUMERIC } from '@cdc/core/helpers/trendIndicator'
import { NUMERIC_TREND_ELIGIBLE_FUNCTIONS } from '@cdc/core/helpers/dataAggregation'

const EditorPanel = memo(props => {
  const { config, updateConfig, loading, data, editorData, setParentConfig, isDashboard } = useContext(ConfigContext)
  const { showConfigConfirm } = props
  const inputSelectStyle = condition => (condition ? { backgroundColor: '#ffd2d2', color: '#d8000c' } : {})

  const updateField = updateFieldFactory(config, updateConfig, true)

  // Filters
  const { addNewFilter, removeFilter, updateFilterProp, getFilterColumnValues } = useFilterManagement(
    config,
    updateConfig,
    data
  )

  useEffect(() => {
    //Verify comparate data type
    let operators = ['<', '>', '<=', '>=']
    if (config.dataConditionalComparate !== '') {
      if (operators.indexOf(config.dataConditionalOperator) > -1 && isNaN(config.dataConditionalComparate)) {
        updateConfig({ ...config, invalidComparate: true })
      } else {
        if (config.invalidComparate) {
          updateConfig({ ...config, invalidComparate: false })
        }
      }
    } else {
      updateConfig({ ...config, invalidComparate: false })
    }
  }, [config.dataConditionalOperator, config.dataConditionalComparate])

  // Extract column names from data with memoization (replaces getColumns)
  const columns = useDataColumns(data)
  //visualizationType

  const approvedWaffleChartOptions = [
    { value: 'Waffle', label: 'Waffle' },
    { value: 'TP5 Waffle', label: 'TP5 Style Waffle' },
    { value: 'Gauge', label: 'Gauge' },
    { value: 'TP5 Gauge', label: 'TP5 Style Gauge' }
  ]

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

  const editorContent = (
    <Accordion>
      <Accordion.Section title='General'>
        <Select
          value={config.visualizationType}
          fieldName='visualizationType'
          label='Chart Type'
          updateField={updateField}
          options={approvedWaffleChartOptions}
        />
        <TextField
          value={config.title}
          fieldName='title'
          label='Title'
          placeholder='Chart Title'
          updateField={updateField}
        />
        <CheckBox label='show title' value={config.showTitle} fieldName='showTitle' updateField={updateField} />
        <TextField
          type='textarea'
          value={config.content}
          fieldName='content'
          label='Message'
          updateField={updateField}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>
                  Enter the message text for the visualization. The following HTML tags are supported: strong, em, sup,
                  and sub.
                </p>
              </Tooltip.Content>
            </Tooltip>
          }
        />

        <TextField
          value={config.subtext}
          fieldName='subtext'
          label='Subtext/Citation'
          placeholder='Chart Subtext or Citation'
          updateField={updateField}
          tooltip={
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>
                  Enter supporting text to display below the data visualization, if applicable. The following HTML tags
                  are supported: strong, em, sup, and sub.
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
                  Change the language (locale) for this visualization to alter the way dates and numbers are formatted.
                </p>
              </Tooltip.Content>
            </Tooltip>
          }
        />
      </Accordion.Section>

      <Accordion.Section
        icon={!config.dataColumn || !config.dataFunction ? <WarningImage width='15' className='warning-icon' /> : ''}
        title='Data'
      >
        <h4 style={{ fontWeight: '600' }}>Numerator</h4>
        <div className='cove-accordion__panel-section'>
          <div className='cove-input-group'>
            <Select
              style={inputSelectStyle(!config.dataColumn)}
              value={config.dataColumn || ''}
              fieldName='dataColumn'
              label='Data Column'
              updateField={updateField}
              initial='Select'
              options={columns}
            />
          </div>

          <div className='cove-input-group'>
            <Select
              style={inputSelectStyle(!config.dataFunction)}
              value={config.dataFunction || ''}
              fieldName='dataFunction'
              label='Data Function'
              updateField={updateField}
              initial='Select'
              options={DATA_FUNCTIONS}
            />
          </div>

          <div className='cove-input-group'>
            <label>
              <span className='edit-label cove-input__label'>Data Conditional</span>
            </label>
            <div className='cove-accordion__panel-row cove-accordion__small-inputs'>
              <div className='cove-accordion__panel-col'>
                <Select
                  value={config.dataConditionalColumn || ''}
                  fieldName='dataConditionalColumn'
                  updateField={updateField}
                  initial='Select'
                  options={columns}
                />
              </div>
              <div className='cove-accordion__panel-col'>
                <Select
                  value={config.dataConditionalOperator || ''}
                  fieldName='dataConditionalOperator'
                  updateField={updateField}
                  initial='Select'
                  options={DATA_OPERATORS}
                />
              </div>
              <div className='cove-accordion__panel-col'>
                <TextField
                  value={config.dataConditionalComparate}
                  fieldName={'dataConditionalComparate'}
                  updateField={updateField}
                  className={config.invalidComparate ? 'cove-accordion__input-error' : ''}
                  style={{ minHeight: '2rem' }}
                />
              </div>
            </div>
          </div>

          {config.invalidComparate && (
            <div className='cove-accordion__panel-error'>
              Non-numerical comparate values can only be used with = or ≠.
            </div>
          )}
        </div>
        <div className='cove-accordion__panel-row align-center'>
          <div className='cove-accordion__panel-col'>
            <h4 style={{ fontWeight: '600' }}>Denominator</h4>
          </div>
          <div className='cove-accordion__panel-col'>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <label className='cove-accordion__panel-label--inline'>Select from data</label>
              <CheckBox value={config.customDenom} fieldName='customDenom' updateField={updateField} />
            </div>
          </div>
        </div>
        <div className='cove-accordion__panel-section'>
          {!config.customDenom && (
            <div className='cove-accordion__panel-row align-center'>
              <div className='cove-accordion__panel-col'>
                <TextField value={config.dataDenom} fieldName='dataDenom' updateField={updateField} />
              </div>
              <div className='cove-accordion__panel-col' style={{ display: 'flex', alignItems: 'center' }}>
                <label className='cove-accordion__panel-label--muted'>default (100)</label>
              </div>
            </div>
          )}
          {config.customDenom && (
            <>
              <Select
                value={config.dataDenomColumn || ''}
                fieldName='dataDenomColumn'
                label='Data Column'
                updateField={updateField}
                initial='Select'
                options={columns}
              />
              <Select
                value={config.dataDenomFunction || ''}
                fieldName='dataDenomFunction'
                label='Data Function'
                updateField={updateField}
                initial='Select'
                options={DATA_FUNCTIONS}
              />
            </>
          )}
        </div>
        <ul className='column-edit'>
          <li className='three-col'>
            <div style={{ marginRight: '1rem' }}>
              <TextField value={config.prefix} fieldName='prefix' label='Prefix' updateField={updateField} />
            </div>
            <div style={{ marginRight: '1rem' }}>
              <TextField value={config.suffix} fieldName='suffix' label='Suffix' updateField={updateField} />
            </div>
            <div>
              <TextField
                type='number'
                value={config.roundToPlace}
                fieldName='roundToPlace'
                label='Round'
                updateField={updateField}
              />
            </div>
          </li>
        </ul>
        <>
          <hr className='cove-accordion__divider' />
          <div className='cove-accordion__panel-section reverse-labels'>
            <TextField
              value={config.valueDescription}
              label='Value Descriptor'
              fieldName='valueDescription'
              updateField={updateField}
              placeholder='e.g., out of'
            />
            <CheckBox
              value={config.showPercent}
              label='Show Percentage'
              fieldName='showPercent'
              updateField={updateField}
            />
            <CheckBox
              label='Show Denominator'
              value={config.showDenominator}
              fieldName='showDenominator'
              updateField={updateField}
            />
          </div>
        </>
        <hr className='cove-accordion__divider' />
        <div className='checkbox-group'>
          <h4 style={{ fontWeight: '600', marginTop: 0 }}>Trend Indicator</h4>
          <Select
            value={trendMode}
            label='Trend Mode'
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
                label={trendMode === TREND_MODE_NUMERIC ? 'Historical Numerator Column' : 'Trend Column'}
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
              <TextField
                value={config.trendIndicator?.trendLabel || ''}
                section='trendIndicator'
                fieldName='trendLabel'
                label='Trend Label'
                placeholder='(compared to one year prior)'
                updateField={updateField}
              />
            </>
          )}
        </div>
        <label style={{ marginBottom: '1rem' }}>
          <span className='edit-label'>
            Data Point Filters
            <Tooltip style={{ textTransform: 'none' }}>
              <Tooltip.Target>
                <Icon display='question' style={{ marginLeft: '0.5rem' }} />
              </Tooltip.Target>
              <Tooltip.Content>
                <p>
                  To refine the highlighted data point, specify one or more filters (e.g., "Male" and "Female" for a
                  column called "Sex").
                </p>
              </Tooltip.Content>
            </Tooltip>
          </span>
        </label>

        {config.filters && (
          <ul className='filters-list' style={{ paddingLeft: 0, marginBottom: '1rem' }}>
            {config.filters.map((filter, index) => (
              <fieldset className='edit-block' key={index}>
                <button
                  type='button'
                  className='remove-column'
                  onClick={() => {
                    removeFilter(index)
                  }}
                >
                  Remove
                </button>
                <Select
                  label='Column'
                  value={filter.columnName || ''}
                  options={columns}
                  initial='- Select Option -'
                  onChange={e => {
                    updateFilterProp('columnName', index, e.target.value)
                  }}
                />
                <Select
                  label='Column Value'
                  value={filter.columnValue || ''}
                  options={getFilterColumnValues(index)}
                  initial='- Select Option -'
                  onChange={e => {
                    updateFilterProp('columnValue', index, e.target.value)
                  }}
                />
              </fieldset>
            ))}
          </ul>
        )}
        <Button onClick={addNewFilter} fluid>
          Add Filter
        </Button>
      </Accordion.Section>
      {config.visualizationType !== 'Gauge' && config.visualizationType !== 'TP5 Gauge' && (
        <Accordion.Section title='Chart Settings'>
          <Select
            value={config.shape}
            fieldName='shape'
            label='Shape'
            updateField={updateField}
            options={['circle', 'square', 'person']}
          />
          {config.visualizationType !== 'TP5 Waffle' && (
            <>
              <div
                className='cove-accordion__panel-row cove-accordion__small-inputs'
                style={{ marginTop: '1rem', marginBottom: '1rem' }}
              >
                <div className='cove-accordion__panel-col'>
                  <TextField
                    type='number'
                    value={config.nodeWidth}
                    fieldName='nodeWidth'
                    label='Width'
                    updateField={updateField}
                  />
                </div>
                <div className='cove-accordion__panel-col'>
                  <TextField
                    type='number'
                    value={config.nodeSpacer}
                    fieldName='nodeSpacer'
                    label='Spacer'
                    updateField={updateField}
                  />
                </div>
              </div>

              <div className='cove-input-group'>
                <Select
                  value={config.orientation}
                  fieldName='orientation'
                  label='Layout'
                  updateField={updateField}
                  options={['horizontal', 'vertical']}
                />
              </div>

              <div className='cove-input-group'>
                <label>
                  <span className='edit-label column-heading cove-input__label'>Data Point Font Size</span>
                </label>
                <div className='cove-accordion__panel-row cove-accordion__small-inputs align-center'>
                  <div className='cove-accordion__panel-col'>
                    <TextField type='number' value={config.fontSize} fieldName='fontSize' updateField={updateField} />
                  </div>
                  <div className='cove-accordion__panel-col' style={{ display: 'flex', alignItems: 'center' }}>
                    <label className='accordion__panel-label--muted'> default (50px)</label>
                  </div>
                </div>
              </div>
            </>
          )}
        </Accordion.Section>
      )}

      {/* Visual section for TP5 style */}
      {(config.visualizationType === 'TP5 Waffle' || config.visualizationType === 'TP5 Gauge') && (
        <Accordion.Section title='Visual'>
          <CheckBox
            value={config.visual?.whiteBackground}
            section='visual'
            fieldName='whiteBackground'
            label='Use White Background Style'
            updateField={updateField}
          />
          {config.visualizationType === 'TP5 Gauge' && (
            <CheckBox
              value={config.visual?.useWrap}
              section='visual'
              fieldName='useWrap'
              label='Value Above Message'
              updateField={updateField}
            />
          )}
        </Accordion.Section>
      )}

      {/* Visual section for other styles */}
      {config.visualizationType !== 'TP5 Waffle' && config.visualizationType !== 'TP5 Gauge' && (
        <Accordion.Section title='Visual'>
          <VisualSection
            config={config}
            updateField={updateField}
            updateConfig={updateConfig}
            beforeCheckboxes={
              <Select
                value={config.overallFontSize}
                fieldName='overallFontSize'
                label='Overall Font Size'
                updateField={updateField}
                options={['small', 'medium', 'large']}
              />
            }
          />
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
  )

  return (
    <BaseEditorPanel
      config={config}
      updateConfig={updateConfig}
      loading={loading}
      setParentConfig={setParentConfig}
      isDashboard={isDashboard}
      title='Configure Waffle Chart'
    >
      {({ convertStateToConfig }) => (
        <>
          {editorContent}
          <AdvancedEditor loadConfig={updateConfig} config={config} convertStateToConfig={convertStateToConfig} />
        </>
      )}
    </BaseEditorPanel>
  )
})

export default EditorPanel
