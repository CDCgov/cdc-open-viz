import { useContext, FC } from 'react'
import { Draggable } from '@hello-pangea/dnd'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion'
import GroupedList from '@cdc/core/components/EditorPanel/GroupedList'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import Button from '@cdc/core/components/elements/Button'
import Alert from '@cdc/core/components/Alert'
import { Select } from '@cdc/core/components/EditorPanel/Inputs'
import ConfigContext from '../../../../ConfigContext'
import { ChartContext } from '../../../../types/ChartContext'
import { type LegendPattern } from '../../../../types/ChartConfig'
import { PanelProps } from '../PanelProps'
import { checkColorContrast, getColorContrast } from '@cdc/core/helpers/cove/accessibility'
import { getColorScale } from '../../../../helpers/getColorScale'
import { sanitizeToSvgId } from '@cdc/core/helpers/cove/string'
import {
  ensurePatternColumnConfig,
  findColumnConfigKey,
  isPortionPatternSupported,
  removeUnusedPatternColumnConfig,
  type ChartColumns
} from '../../../BarChart/helpers/portionPattern'

const PanelPatternSettings: FC<PanelProps> = props => {
  const { config, updateConfig, transformedData } = useContext<ChartContext>(ConfigContext)
  if (config.visualizationType === 'HeatMap') return null

  // Safe legend reference with defaults to avoid crashes when legend is undefined
  const legendCfg = (config.legend || { patterns: {} }) as {
    patterns: Record<string, LegendPattern>
  }

  const patternTypes = [
    { value: 'circles', label: 'Circles' },
    { value: 'lines', label: 'Horizontal Lines' },
    { value: 'diagonalLines', label: 'Diagonal Lines' },
    { value: 'waves', label: 'Waves' }
  ]

  const patternSizes = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' }
  ]

  // Convert numeric size to text and vice versa
  const getPatternSizeText = (numericSize: number): string => {
    if (numericSize <= 6) return 'small'
    if (numericSize <= 12) return 'medium'
    return 'large'
  }

  const getPatternSizeNumeric = (textSize: string): number => {
    switch (textSize) {
      case 'small':
        return 6
      case 'medium':
        return 10
      case 'large':
        return 16
      default:
        return 10
    }
  }

  const getFieldOptions = () => {
    if (!Array.isArray(transformedData) || transformedData.length === 0) return []

    const firstRow = transformedData[0] || {}
    return Object.keys(firstRow).map(key => ({ value: key, label: key }))
  }

  // Checks contrast and logs warning if needed
  const checkAndLogContrast = (
    patternColor: string,
    backgroundColor: string,
    dataValue: string,
    dataKey: string
  ): boolean => {
    if (!backgroundColor || !patternColor) return true // Default to true if colors are missing

    const contrastCheck = checkColorContrast(patternColor, backgroundColor)

    if (!contrastCheck) {
      console.error(
        `COVE: pattern contrast check failed for ${dataValue} in ${dataKey} with:
      pattern color: ${patternColor}
      background color: ${backgroundColor}
      contrast: ${getColorContrast(patternColor, backgroundColor)}`
      )
    }

    return contrastCheck
  }

  // Perform contrast check for a specific pattern against actual bar colors
  const performContrastCheck = (patternKey: string, patternColor: string) => {
    if (!patternColor || patternColor === '') {
      return true
    }

    // Get the actual bar colors that the pattern will be overlaid on
    let seriesColors: string[] = []

    if (config.customColors && config.customColors.length > 0) {
      // Use custom colors if available
      seriesColors = config.customColors
    } else {
      // Use the same color generation logic as the chart
      try {
        const colorScale = getColorScale(config)
        // Get colors for all series labels (not keys!)
        const seriesLabels = config.runtime?.seriesLabelsAll || []
        seriesColors = seriesLabels.map(label => colorScale(label)).filter(color => color !== null)
      } catch (error) {
        return true
      }
    }

    if (seriesColors.length === 0) {
      return true
    }

    // Check contrast against all series colors (bars that the pattern will overlay)
    // Pattern should have good contrast against ALL bar colors it will appear on
    let allContrastsPass = true
    const contrastResults: Array<{ color: string; passes: boolean; ratio: number | false }> = []

    seriesColors.forEach((barColor, index) => {
      const contrastPasses = checkAndLogContrast(patternColor, barColor, patternKey, `series-${index}`)
      const contrastRatio = getColorContrast(patternColor, barColor)

      contrastResults.push({
        color: barColor,
        passes: contrastPasses,
        ratio: contrastRatio
      })

      if (!contrastPasses) {
        allContrastsPass = false
      }
    })

    return allContrastsPass
  }

  const fieldOptions = getFieldOptions()
  const currentPatterns: Record<string, LegendPattern> = legendCfg.patterns || {}
  const protectedColumnNames = [
    ...(config.series || []).map(series => series.dataKey),
    config.xAxis?.dataKey,
    config.yAxis?.dataKey
  ]

  const portionPatternsSupported = isPortionPatternSupported(config)
  const eligibleTargetKeys = portionPatternsSupported
    ? config.visualizationType === 'Combo'
      ? (config.series || []).filter(series => series.type === 'Bar').map(series => series.dataKey)
      : (config.series || []).map(series => series.dataKey)
    : []
  const eligibleTargetOptions = eligibleTargetKeys.map(dataKey => ({
    value: dataKey,
    label: config.runtime?.seriesLabels?.[dataKey] || dataKey
  }))

  const getAvailableTargetOptions = (patternKey: string) => {
    const targetsUsedByOtherPatterns = new Set(
      Object.entries(currentPatterns)
        .filter(([key, pattern]) => key !== patternKey && pattern.application === 'portion')
        .map(([, pattern]) => pattern.dataKey)
        .filter(Boolean)
    )

    return eligibleTargetOptions.filter(option => !targetsUsedByOtherPatterns.has(option.value))
  }

  const handlePatternReorder = (sourceIndex: number, destinationIndex: number) => {
    const patternEntries = Object.entries(currentPatterns)
    const [movedPattern] = patternEntries.splice(sourceIndex, 1)
    patternEntries.splice(destinationIndex, 0, movedPattern)

    const newPatterns = Object.fromEntries(patternEntries)
    updateConfig({
      ...config,
      legend: {
        ...config.legend,
        patterns: newPatterns
      }
    })
  }

  // Check if all patterns pass contrast requirements
  const checkPatternContrasts = () => {
    return Object.values(currentPatterns).every(pattern => pattern.contrastCheck !== false)
  }

  const handleAddPattern = () => {
    const currentPatterns = legendCfg.patterns || {}

    // For charts, we'll add a default pattern that users can configure
    let nextPatternNumber = 1
    while (Object.prototype.hasOwnProperty.call(currentPatterns, `Pattern${nextPatternNumber}`)) {
      nextPatternNumber += 1
    }
    const newPatternKey = `Pattern${nextPatternNumber}`
    const defaultColor = '#1c1d1f'
    const defaultDataKey = fieldOptions.length > 0 ? fieldOptions[0].value : ''

    const newPatterns = {
      ...currentPatterns,
      [newPatternKey]: {
        label: newPatternKey,
        color: defaultColor,
        shape: 'diagonalLines',
        dataKey: defaultDataKey,
        dataValue: '',
        patternSize: 10, // Default pattern size
        contrastCheck: performContrastCheck(newPatternKey, defaultColor)
      }
    }

    const updatedConfig = {
      ...config,
      legend: {
        ...(config.legend || {}),
        patterns: newPatterns
      },
      runtime: {
        ...config.runtime
      }
    }

    // Check if all patterns pass and set error message
    const allPatternsPass = Object.values(newPatterns).every((p: any) => p.contrastCheck !== false)
    updatedConfig.runtime.editorErrorMessage = allPatternsPass
      ? ''
      : 'One or more patterns do not pass the WCAG 2.1 contrast ratio of 3:1.'

    updateConfig(updatedConfig)
  }

  const handleRemovePattern = (patternKey: string) => {
    const newPatterns = { ...(legendCfg.patterns || {}) }
    const removedPattern = newPatterns[patternKey]
    delete newPatterns[patternKey]
    const columns =
      removedPattern?.application === 'portion'
        ? removeUnusedPatternColumnConfig({
            columns: { ...(config.columns || {}) },
            columnName: removedPattern.patternValueKey,
            patterns: newPatterns,
            protectedColumnNames
          })
        : config.columns

    const updatedConfig = {
      ...config,
      columns,
      legend: {
        ...(config.legend || {}),
        patterns: newPatterns
      },
      runtime: {
        ...config.runtime
      }
    }

    // Check if all remaining patterns pass and clear error message if needed
    const allPatternsPass = Object.values(newPatterns).every((p: any) => p.contrastCheck !== false)
    if (allPatternsPass || Object.keys(newPatterns).length === 0) {
      updatedConfig.runtime.editorErrorMessage = ''
    }

    updateConfig(updatedConfig)
  }

  const handlePatternKeyChange = (oldKey: string, newKey: string) => {
    if (newKey === oldKey || !newKey.trim()) return

    const currentPatterns = legendCfg.patterns || {}
    const patternData = currentPatterns[oldKey]

    if (!patternData) return

    // Create new patterns object with updated key
    const newPatterns = { ...currentPatterns }
    delete newPatterns[oldKey]
    newPatterns[newKey] = patternData

    updateConfig({
      ...config,
      legend: {
        ...(config.legend || {}),
        patterns: newPatterns
      }
    })
  }

  const reviewColorContrast = (updatedConfig: any, patternKey: string) => {
    // Re-check the contrast for the updated pattern
    const pattern = updatedConfig.legend.patterns[patternKey]

    if (pattern?.color) {
      pattern.contrastCheck = performContrastCheck(patternKey, pattern.color)
    }

    // Update error message based on whether all patterns pass contrast checks
    const allPatterns = Object.values(updatedConfig.legend.patterns || {})

    const allPatternsPass = allPatterns.every((p: any) => p.contrastCheck !== false)

    const errorMsg = allPatternsPass ? '' : 'One or more patterns do not pass the WCAG 2.1 contrast ratio of 3:1.'
    // Set error message AFTER spreading runtime to avoid it being overwritten
    updatedConfig.runtime.editorErrorMessage = errorMsg
  }

  const handlePatternUpdate = (patternKey: string, field: string, value: any) => {
    if (
      field === 'dataKey' &&
      legendCfg.patterns?.[patternKey]?.application === 'portion' &&
      Object.entries(legendCfg.patterns || {}).some(
        ([key, pattern]) => key !== patternKey && pattern.application === 'portion' && pattern.dataKey === value
      )
    ) {
      return
    }

    const updatedPattern = {
      ...(legendCfg.patterns?.[patternKey] || {}),
      [field]: value
    }

    const newPatterns = {
      ...(legendCfg.patterns || {}),
      [patternKey]: updatedPattern
    }

    let columns: ChartColumns = { ...(config.columns || {}) }
    if (field === 'patternValueKey') {
      const previousColumnName = legendCfg.patterns?.[patternKey]?.patternValueKey
      if (previousColumnName !== value) {
        columns = removeUnusedPatternColumnConfig({
          columns,
          columnName: previousColumnName,
          patterns: newPatterns,
          protectedColumnNames
        })
      }
      columns = ensurePatternColumnConfig(columns, value)
    }

    const updatedConfig = {
      ...config,
      columns,
      legend: {
        ...(config.legend || {}),
        patterns: newPatterns
      },
      runtime: {
        ...config.runtime
      }
    }

    // Perform contrast check whenever color changes (even if cleared)
    if (field === 'color') {
      reviewColorContrast(updatedConfig, patternKey)
    }

    updateConfig(updatedConfig)
  }

  const handleApplicationUpdate = (patternKey: string, application: 'value' | 'portion') => {
    const currentPattern = legendCfg.patterns?.[patternKey] || {}
    const availableTargets = getAvailableTargetOptions(patternKey)
    const dataKey =
      application === 'portion' && !availableTargets.some(option => option.value === currentPattern.dataKey)
        ? availableTargets[0]?.value || ''
        : currentPattern.dataKey

    const updatedPattern: LegendPattern = {
      ...currentPattern,
      application,
      dataKey
    }

    if (application === 'portion') {
      updatedPattern.placement = currentPattern.placement === 'start' ? 'start' : 'end'
      updatedPattern.patternValueKey = currentPattern.patternValueKey || ''
    }

    const newPatterns = {
      ...(legendCfg.patterns || {}),
      [patternKey]: updatedPattern
    }
    let columns: ChartColumns = { ...(config.columns || {}) }

    if (application === 'portion') {
      columns = ensurePatternColumnConfig(columns, updatedPattern.patternValueKey)
    } else if (currentPattern.application === 'portion') {
      columns = removeUnusedPatternColumnConfig({
        columns,
        columnName: currentPattern.patternValueKey,
        patterns: newPatterns,
        protectedColumnNames
      })
    }

    updateConfig({
      ...config,
      columns,
      legend: {
        ...(config.legend || {}),
        patterns: newPatterns
      }
    })
  }

  if (config.visualizationType === 'Warming Stripes' || config.visualizationType === 'Radar') return

  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>Pattern Settings</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        {Object.keys(currentPatterns).length > 0 && (
          <>
            <Alert
              type={checkPatternContrasts() ? 'success' : 'danger'}
              message='Pattern colors must comply with <a href="https://www.w3.org/TR/WCAG21/">WCAG 2.1</a> 3:1 contrast ratio.'
              showCloseButton={false}
            />
          </>
        )}

        <GroupedList
          items={Object.entries(currentPatterns)}
          label='Pattern'
          droppableId='chart-patterns-order'
          onDragEnd={({ source, destination }) => {
            if (!destination || source.index === destination.index) return
            handlePatternReorder(source.index, destination.index)
          }}
          renderItem={([patternKey, pattern], index) => {
            const p: LegendPattern = pattern || {}
            const domPatternKey = `${sanitizeToSvgId(patternKey)}-${index}`

            return (
              <Draggable
                key={`pattern-${patternKey}-${index}`}
                draggableId={`pattern-${patternKey}-${index}`}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={snapshot.isDragging ? 'currently-dragging' : ''}
                    style={provided.draggableProps.style}
                  >
                    <Accordion allowZeroExpanded preExpanded={['panel']}>
                      <AccordionItem uuid='panel' className='series-item series-item--chart'>
                        <AccordionItemHeading className='series-item__title'>
                          <AccordionItemButton className='accordion__button'>
                            <Icon display='move' size={15} style={{ cursor: 'default' }} />
                            {p.application === 'portion' && p.dataKey
                              ? `${p.dataKey}: Portion`
                              : p.dataKey && p.dataValue
                              ? `${p.dataKey}: ${p.dataValue}`
                              : p.dataValue
                              ? `All Series: ${p.dataValue}`
                              : `Pattern ${index + 1}`}
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <div className='series-item__panel-actions'>
                            <Button
                              type='button'
                              variant='danger'
                              size='sm'
                              className='grouped-list__remove'
                              onClick={() => handleRemovePattern(patternKey)}
                            >
                              Remove Pattern
                            </Button>
                          </div>
                          {p.contrastCheck ?? true ? (
                            <Alert
                              type='success'
                              message='This pattern passes contrast checks'
                              showCloseButton={false}
                            />
                          ) : (
                            <Alert
                              type='danger'
                              message='Error: <a href="https://webaim.org/resources/contrastchecker/" target="_blank"> Review Color Contrast</a>'
                              showCloseButton={false}
                            />
                          )}

                          <Select
                            label='Pattern Application'
                            value={p.application || 'value'}
                            options={[
                              { value: 'value', label: 'Match a data value' },
                              { value: 'portion', label: 'Cover a portion of a bar' }
                            ]}
                            fieldName={`pattern-application-${domPatternKey}`}
                            updateField={(section, subsection, fieldName, value) =>
                              handleApplicationUpdate(patternKey, value as 'value' | 'portion')
                            }
                          />

                          {p.application === 'portion' && !portionPatternsSupported && (
                            <Alert
                              type='danger'
                              message='Portion patterns are supported only for regular Bar and Combo charts with linear axes and without lollipops.'
                              showCloseButton={false}
                            />
                          )}

                          {(p.application || 'value') === 'value' ? (
                            <>
                              <Select
                                label='Data Key'
                                value={p.dataKey || ''}
                                options={fieldOptions}
                                initial='Select Data Key'
                                fieldName={`pattern-datakey-${domPatternKey}`}
                                updateField={(section, subsection, fieldName, value) =>
                                  handlePatternUpdate(patternKey, 'dataKey', value)
                                }
                              />

                              <label htmlFor={`pattern-datavalue-${domPatternKey}`}>
                                Data Value
                                <input
                                  type='text'
                                  id={`pattern-datavalue-${domPatternKey}`}
                                  value={p.dataValue || ''}
                                  onChange={e => handlePatternUpdate(patternKey, 'dataValue', e.target.value)}
                                  placeholder='Enter data value'
                                />
                              </label>
                            </>
                          ) : (
                            <>
                              <Select
                                label='Target Bar Series'
                                value={p.dataKey || ''}
                                options={getAvailableTargetOptions(patternKey)}
                                initial='Select Target Bar Series'
                                fieldName={`pattern-target-series-${domPatternKey}`}
                                updateField={(section, subsection, fieldName, value) =>
                                  handlePatternUpdate(patternKey, 'dataKey', value)
                                }
                              />

                              <Select
                                label='Pattern Value Column'
                                tooltip={
                                  <Tooltip style={{ textTransform: 'none' }}>
                                    <Tooltip.Target>
                                      <Icon display='question' style={{ marginLeft: '0.5rem' }} />
                                    </Tooltip.Target>
                                    <Tooltip.Content>
                                      <p>
                                        Select the data column containing the absolute portion amount for each bar. For
                                        a row to receive an overlay, its value must be numeric, greater than zero, and
                                        no greater than the corresponding value in the Target Bar Series. Use
                                        quantities, not percentages.
                                      </p>
                                    </Tooltip.Content>
                                  </Tooltip>
                                }
                                value={p.patternValueKey || ''}
                                options={fieldOptions}
                                initial='Select Pattern Value Column'
                                fieldName={`pattern-value-key-${domPatternKey}`}
                                updateField={(section, subsection, fieldName, value) =>
                                  handlePatternUpdate(patternKey, 'patternValueKey', value)
                                }
                              />

                              {p.patternValueKey && findColumnConfigKey(config.columns || {}, p.patternValueKey) && (
                                <div
                                  className='border rounded p-2 mt-2 small'
                                  data-testid='portion-pattern-column-note'
                                >
                                  <strong>Note:</strong> Configure this pattern&apos;s tooltip and data table settings
                                  in Columns.
                                </div>
                              )}

                              <Select
                                label='Placement'
                                value={p.placement === 'start' ? 'start' : 'end'}
                                options={[
                                  { value: 'start', label: 'Beginning' },
                                  { value: 'end', label: 'End' }
                                ]}
                                fieldName={`pattern-placement-${domPatternKey}`}
                                updateField={(section, subsection, fieldName, value) =>
                                  handlePatternUpdate(patternKey, 'placement', value)
                                }
                              />
                            </>
                          )}

                          <label htmlFor={`pattern-label-${domPatternKey}`}>
                            Label (optional)
                            <input
                              type='text'
                              id={`pattern-label-${domPatternKey}`}
                              value={p.label || ''}
                              onChange={e => handlePatternUpdate(patternKey, 'label', e.target.value)}
                            />
                          </label>

                          <Select
                            label='Pattern Type'
                            value={p.shape || 'circles'}
                            options={patternTypes}
                            fieldName={`pattern-type-${domPatternKey}`}
                            updateField={(section, subsection, fieldName, value) =>
                              handlePatternUpdate(patternKey, 'shape', value)
                            }
                          />

                          <Select
                            label='Pattern Size'
                            value={getPatternSizeText(p.patternSize || 10)}
                            options={patternSizes}
                            fieldName={`pattern-size-${domPatternKey}`}
                            updateField={(section, subsection, fieldName, value) =>
                              handlePatternUpdate(patternKey, 'patternSize', getPatternSizeNumeric(value))
                            }
                          />

                          <div className='mt-3'>
                            <label htmlFor={`pattern-color-${domPatternKey}`}>
                              Pattern Color
                              <Tooltip style={{ textTransform: 'none' }}>
                                <Tooltip.Target>
                                  <Icon
                                    display='question'
                                    style={{ marginLeft: '0.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}
                                  />
                                </Tooltip.Target>
                                <Tooltip.Content>
                                  <p>
                                    If this setting is used, it is the responsibility of the visualization author to
                                    verify the visualization colors meet WCAG 3:1 contrast ratios.
                                  </p>
                                </Tooltip.Content>
                              </Tooltip>
                              <input
                                type='text'
                                value={p.color || ''}
                                id={`pattern-color-${domPatternKey}`}
                                onChange={e => handlePatternUpdate(patternKey, 'color', e.target.value)}
                                placeholder='#666666'
                              />
                            </label>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </Accordion>
                  </div>
                )}
              </Draggable>
            )
          }}
        />

        {/* Add Pattern Button */}
        <Button variant='editor-primary' onClick={handleAddPattern}>
          Add Pattern
        </Button>

        {Object.keys(currentPatterns).length === 0 && (
          <p style={{ color: '#666', fontStyle: 'italic' }}>
            No patterns configured. Use "Add Pattern" to create pattern configurations.
          </p>
        )}
      </AccordionItemPanel>
    </AccordionItem>
  )
}
export default PanelPatternSettings
