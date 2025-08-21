import { useContext, FC } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import Button from '@cdc/core/components/elements/Button'
import Alert from '@cdc/core/components/Alert'
import ConfigContext from '../../../../ConfigContext'
import { ChartContext } from '../../../../types/ChartContext'
import { PanelProps } from '../PanelProps'
import { checkColorContrast, getColorContrast } from '@cdc/core/helpers/cove/accessibility'
import { getColorScale } from '../../../../helpers/getColorScale'
import _ from 'lodash'

const PanelPatternSettings: FC<PanelProps> = props => {
  const { config, updateConfig, transformedData } = useContext<ChartContext>(ConfigContext)

  type LegendPattern = {
    label?: string
    color?: string
    shape?: 'circles' | 'lines' | 'diagonalLines' | 'waves'
    contrastCheck?: boolean
  }

  // Safe legend reference with defaults to avoid crashes when legend is undefined
  const legendCfg = (config.legend || { patterns: {}, patternSize: 8, patternField: '' }) as {
    patterns: Record<string, LegendPattern>
    patternSize: number
    patternField: string
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
        return 8
    }
  }

  // Get unique values from the pattern field for dropdown options
  const getPatternFieldOptions = () => {
    if (!legendCfg.patternField || !Array.isArray(transformedData) || transformedData.length === 0) {
      return []
    }

    const uniqueValues = Array.from(new Set(transformedData.map(row => row[legendCfg.patternField])))
      .filter(val => val !== undefined && val !== null && val !== '')
      .sort()

    return uniqueValues.map(value => ({ value, label: value }))
  }

  const getFieldOptions = () => {
    if (!Array.isArray(transformedData) || transformedData.length === 0) return []

    const firstRow = transformedData[0] || {}
    return Object.keys(firstRow).map(key => ({ value: key, label: key }))
  }

  // Checks contrast and logs warning if needed
  const checkAndLogContrast = (fill: string, patternColor: string, dataValue: string, dataKey: string): boolean => {
    if (!fill || !patternColor) return true // Default to true if colors are missing

    const contrastCheck = checkColorContrast(fill, patternColor)

    if (!contrastCheck) {
      console.error(
        `COVE: pattern contrast check failed for ${dataValue} in ${dataKey} with:
      pattern color: ${patternColor}
      background color: ${fill}
      contrast: ${getColorContrast(fill, patternColor)}`
      )
    }

    return contrastCheck
  }

  // Perform contrast check for a specific pattern against actual bar colors
  const performContrastCheck = (patternKey: string, patternColor: string) => {
    if (!patternColor || patternColor === '') return true

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
      const contrastPasses = checkAndLogContrast(barColor, patternColor, patternKey, `series-${index}`)
      const contrastRatio = getColorContrast(barColor, patternColor)

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
  const patternFieldOptions = getPatternFieldOptions()
  const currentPatterns: Record<string, LegendPattern> = legendCfg.patterns || {}

  // Check if all patterns pass contrast requirements
  const checkPatternContrasts = () => {
    return Object.values(currentPatterns).every(pattern => pattern.contrastCheck !== false)
  }

  const handleAddPattern = () => {
    const currentPatterns = legendCfg.patterns || {}

    // For charts, we'll add a default pattern that users can configure
    const newPatternKey = `Pattern${Object.keys(currentPatterns).length + 1}`
    const defaultColor = '#000000'

    const newPatterns = {
      ...currentPatterns,
      [newPatternKey]: {
        label: newPatternKey,
        color: defaultColor,
        shape: 'circles',
        contrastCheck: performContrastCheck(newPatternKey, defaultColor)
      }
    }

    updateConfig({
      ...config,
      legend: {
        ...(config.legend || {}),
        patterns: newPatterns
      }
    })
  }

  const handleRemovePattern = (patternKey: string) => {
    const newPatterns = { ...(legendCfg.patterns || {}) }
    delete newPatterns[patternKey]

    updateConfig({
      ...config,
      legend: {
        ...(config.legend || {}),
        patterns: newPatterns
      }
    })
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

  const handlePatternUpdate = (patternKey: string, field: string, value: any) => {
    const updatedPattern = {
      ...(legendCfg.patterns?.[patternKey] || {}),
      [field]: value
    }

    // Perform contrast check if color is being updated
    if (field === 'color') {
      updatedPattern.contrastCheck = performContrastCheck(patternKey, value)
    }

    const newPatterns = {
      ...(legendCfg.patterns || {}),
      [patternKey]: updatedPattern
    }

    updateConfig({
      ...config,
      legend: {
        ...(config.legend || {}),
        patterns: newPatterns
      }
    })
  }

  const handlePatternFieldChange = (value: string) => {
    updateConfig({
      ...config,
      legend: {
        ...(config.legend || {}),
        patternField: value,
        patterns: {}
      }
    })
  }

  const handlePatternSizeChange = (value: string) => {
    const numericSize = getPatternSizeNumeric(value)
    updateConfig({
      ...config,
      legend: {
        ...(config.legend || {}),
        patternSize: numericSize
      }
    })
  }

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
            <br />
          </>
        )}

        {/* Individual Pattern Configurations */}
        {Object.entries(currentPatterns).map(([patternKey, pattern], index) => {
          const p: LegendPattern = pattern || {}

          return (
            <Accordion allowZeroExpanded key={`pattern-accordion-${index}`}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    {legendCfg.patternField ? `${legendCfg.patternField}: ${patternKey}` : 'Select Column'}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {p.contrastCheck ?? true ? (
                    <Alert type='success' message='This pattern passes contrast checks' showCloseButton={false} />
                  ) : (
                    <Alert
                      type='danger'
                      message='Error: <a href="https://webaim.org/resources/contrastchecker/" target="_blank"> Review Color Contrast</a>'
                      showCloseButton={false}
                    />
                  )}

                  <label htmlFor={`pattern-datakey-${patternKey}`}>Data Key:</label>
                  <select
                    id={`pattern-datakey-${patternKey}`}
                    value={legendCfg.patternField || 'Select'}
                    onChange={e => handlePatternFieldChange(e.target.value)}
                  >
                    <option value='Select'>Select</option>
                    {fieldOptions.map((option, index) => (
                      <option value={option.value} key={index}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  <label htmlFor={`pattern-datavalue-${patternKey}`}>
                    Data Value:
                    <input
                      type='text'
                      id={`pattern-datavalue-${patternKey}`}
                      value={patternKey}
                      onChange={e => handlePatternKeyChange(patternKey, e.target.value)}
                    />
                  </label>

                  <label htmlFor={`pattern-label-${patternKey}`}>
                    Label (optional):
                    <input
                      type='text'
                      id={`pattern-label-${patternKey}`}
                      value={p.label || ''}
                      onChange={e => handlePatternUpdate(patternKey, 'label', e.target.value)}
                    />
                  </label>

                  <label htmlFor={`pattern-type-${patternKey}`}>Pattern Type:</label>
                  <select
                    id={`pattern-type-${patternKey}`}
                    value={p.shape || 'circles'}
                    onChange={e => handlePatternUpdate(patternKey, 'shape', e.target.value)}
                  >
                    {patternTypes.map((patternType, index) => (
                      <option value={patternType.value} key={index}>
                        {patternType.label}
                      </option>
                    ))}
                  </select>

                  <label htmlFor={`pattern-size-${patternKey}`}>Pattern Size:</label>
                  <select
                    id={`pattern-size-${patternKey}`}
                    value={getPatternSizeText(legendCfg.patternSize || 8)}
                    onChange={e => handlePatternSizeChange(e.target.value)}
                  >
                    {patternSizes.map((size, index) => (
                      <option value={size.value} key={index}>
                        {size.label}
                      </option>
                    ))}
                  </select>

                  <div className='mt-3'>
                    <label htmlFor={`pattern-color-${patternKey}`}>
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
                            If this setting is used, it is the responsibility of the visualization author to verify the
                            visualization colors meet WCAG 3:1 contrast ratios.
                          </p>
                        </Tooltip.Content>
                      </Tooltip>
                      <input
                        type='text'
                        value={p.color || '#666666'}
                        id={`pattern-color-${patternKey}`}
                        onChange={e => handlePatternUpdate(patternKey, 'color', e.target.value)}
                        placeholder='#666666'
                      />
                    </label>
                  </div>

                  <Button onClick={() => handleRemovePattern(patternKey)} className='btn btn-danger'>
                    Remove Pattern
                  </Button>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          )
        })}

        {/* Add Pattern Button */}
        <button className='btn btn-primary full-width mt-2' onClick={handleAddPattern}>
          Add Pattern
        </button>

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
