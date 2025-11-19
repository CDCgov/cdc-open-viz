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
    dataKey?: string
    dataValue?: string
    contrastCheck?: boolean
    patternSize?: number
  }

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
        return 8
    }
  }

  // Get unique values from a specific data field for dropdown options
  const getDataValueOptions = (dataKey: string) => {
    if (!dataKey || !Array.isArray(transformedData) || transformedData.length === 0) {
      return []
    }

    const uniqueValues = Array.from(new Set(transformedData.map(row => row[dataKey])))
      .filter(val => val !== undefined && val !== null && val !== '')
      .sort()

    return uniqueValues.map(value => ({ value: String(value), label: String(value) }))
  }

  const getFieldOptions = () => {
    if (!Array.isArray(transformedData) || transformedData.length === 0) return []

    const firstRow = transformedData[0] || {}
    return Object.keys(firstRow).map(key => ({ value: key, label: key }))
  }

  // Checks contrast and logs warning if needed
  const checkAndLogContrast = (patternColor: string, backgroundColor: string, dataValue: string, dataKey: string): boolean => {
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
    console.log('performContrastCheck called:', { patternKey, patternColor })

    if (!patternColor || patternColor === '') {
      console.log('No pattern color, returning true')
      return true
    }

    // Get the actual bar colors that the pattern will be overlaid on
    let seriesColors: string[] = []

    if (config.customColors && config.customColors.length > 0) {
      // Use custom colors if available
      seriesColors = config.customColors
      console.log('Using custom colors:', seriesColors)
    } else {
      // Use the same color generation logic as the chart
      try {
        const colorScale = getColorScale(config)
        // Get colors for all series labels (not keys!)
        const seriesLabels = config.runtime?.seriesLabelsAll || []
        seriesColors = seriesLabels.map(label => colorScale(label)).filter(color => color !== null)
        console.log('Generated series colors:', seriesColors, 'from labels:', seriesLabels)
      } catch (error) {
        console.log('Error getting color scale:', error)
        return true
      }
    }

    if (seriesColors.length === 0) {
      console.log('No series colors found, returning true')
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

    console.log('Contrast check results:', { allContrastsPass, contrastResults })
    return allContrastsPass
  }

  const fieldOptions = getFieldOptions()
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
    const defaultDataKey = fieldOptions.length > 0 ? fieldOptions[0].value : ''

    const newPatterns = {
      ...currentPatterns,
      [newPatternKey]: {
        label: newPatternKey,
        color: defaultColor,
        shape: 'circles' as const,
        dataKey: defaultDataKey,
        dataValue: '',
        patternSize: 8, // Default pattern size
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
    delete newPatterns[patternKey]

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
    console.log('reviewColorContrast - Before check:', { patternKey, color: pattern?.color })

    if (pattern?.color) {
      pattern.contrastCheck = performContrastCheck(patternKey, pattern.color)
      console.log('reviewColorContrast - After performContrastCheck:', pattern.contrastCheck)
    }

    // Update error message based on whether all patterns pass contrast checks
    const allPatterns = Object.values(updatedConfig.legend.patterns || {})
    console.log('reviewColorContrast - All patterns:', allPatterns.map((p: any) => ({
      color: p.color,
      contrastCheck: p.contrastCheck
    })))

    const allPatternsPass = allPatterns.every((p: any) => p.contrastCheck !== false)
    console.log('reviewColorContrast - allPatternsPass:', allPatternsPass)

    const errorMsg = allPatternsPass ? '' : 'One or more patterns do not pass the WCAG 2.1 contrast ratio of 3:1.'
    // Set error message AFTER spreading runtime to avoid it being overwritten
    updatedConfig.runtime.editorErrorMessage = errorMsg
    console.log('reviewColorContrast - Final error message set:', errorMsg, 'Runtime object:', updatedConfig.runtime)
  }

  const handlePatternUpdate = (patternKey: string, field: string, value: any) => {
    const updatedPattern = {
      ...(legendCfg.patterns?.[patternKey] || {}),
      [field]: value
    }

    // Clear dataValue if dataKey is being cleared or set to 'Select'
    if (field === 'dataKey' && (value === 'Select' || value === '')) {
      updatedPattern.dataValue = ''
    }

    const newPatterns = {
      ...(legendCfg.patterns || {}),
      [patternKey]: updatedPattern
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

    // Perform contrast check whenever color changes (even if cleared)
    if (field === 'color') {
      reviewColorContrast(updatedConfig, patternKey)
    }

    console.log('handlePatternUpdate - About to call updateConfig with runtime.editorErrorMessage:', updatedConfig.runtime?.editorErrorMessage)
    updateConfig(updatedConfig)
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
          const dataValueOptions = p.dataKey ? getDataValueOptions(p.dataKey) : []

          return (
            <Accordion allowZeroExpanded key={`pattern-accordion-${index}`}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    {p.dataKey && p.dataValue ? `${p.dataKey}: ${p.dataValue}` : `Pattern ${index + 1}`}
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
                    value={p.dataKey || ''}
                    onChange={e => handlePatternUpdate(patternKey, 'dataKey', e.target.value)}
                  >
                    <option value=''>-- Select Data Key --</option>
                    {fieldOptions.map((option, index) => (
                      <option value={option.value} key={index}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  {p.dataKey && (
                    <>
                      <label htmlFor={`pattern-datavalue-${patternKey}`}>
                        Data Value:
                        <input
                          type='text'
                          id={`pattern-datavalue-${patternKey}`}
                          value={p.dataValue || ''}
                          onChange={e => handlePatternUpdate(patternKey, 'dataValue', e.target.value)}
                          placeholder='Enter data value'
                        />
                      </label>
                    </>
                  )}

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
                    value={getPatternSizeText(p.patternSize || 8)}
                    onChange={e =>
                      handlePatternUpdate(patternKey, 'patternSize', getPatternSizeNumeric(e.target.value))
                    }
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
                        value={p.color || ''}
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
