import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent, expect } from 'storybook/test'
import CdcMap from '../CdcMap'
import usaStateGradientConfig from './_mock/usa-state-gradient.json'
import multiCountryConfig from './_mock/multi-country.json'
import wastewaterMapSmallMultiplesConfig from './_mock/small_multiples/wastewater-map-small-multiples.json'
import { performAndAssert, waitForEditor, waitForPresence, openAccordion } from '@cdc/core/helpers/testing'

type Story = StoryObj<typeof CdcMap>

const mapMeta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Editor Tests',
  component: CdcMap,
  parameters: {
    layout: 'fullscreen'
  }
}

export default mapMeta

const DEFAULT_ARGS = {
  isEditor: true,
  config: usaStateGradientConfig
}

export const PatternSettingsSectionTests: Story = {
  args: {
    config: usaStateGradientConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for editor to load
    await waitForEditor(canvas)

    // ==========================================================================
    // TEST: Wait for Pattern Settings accordion to load (US topo JSON)
    // ==========================================================================
    let patternSettingsButton: HTMLElement | null = null

    await performAndAssert(
      'Pattern Settings → Wait for accordion to appear',
      () => {
        // Check if Pattern Settings accordion exists
        const buttons = Array.from(canvasElement.querySelectorAll('.accordion__button'))
        const button = buttons.find(btn => btn.textContent?.includes('Pattern Settings')) as HTMLElement
        if (button) {
          patternSettingsButton = button
        }
        return {
          accordionExists: !!button
        }
      },
      async () => {
        // No action needed - just let performAndAssert's built-in polling wait for the accordion
      },
      (before, after) => {
        // After waiting, the accordion should exist
        return after.accordionExists
      }
    )

    // ==========================================================================
    // TEST: Open Pattern Settings accordion and verify controls appear
    // ==========================================================================
    await performAndAssert(
      'Pattern Settings → Open accordion',
      () => {
        // Check if the accordion panel is expanded (aria-expanded attribute)
        const isExpanded = patternSettingsButton.getAttribute('aria-expanded') === 'true'
        // Also check if the Add Geo Pattern button is visible
        const buttons = Array.from(canvasElement.querySelectorAll('button'))
        const addPatternButton = buttons.find(btn => btn.textContent?.includes('Add Geo Pattern'))
        return {
          isExpanded,
          hasAddButton: !!addPatternButton
        }
      },
      async () => {
        await userEvent.click(patternSettingsButton)
      },
      (before, after) => {
        // After clicking, accordion should be expanded and button should be visible
        return !before.isExpanded && after.isExpanded && after.hasAddButton
      }
    )

    // ==========================================================================
    // TEST: Add a geo pattern and verify pattern appears on map
    // ==========================================================================
    await performAndAssert(
      'Pattern Settings → Add geo pattern',
      () => {
        // Look for pattern elements in ALL SVGs (there might be multiple)
        // Pattern definitions are <pattern> elements, and they're used by paths with fill="url(#...)"
        const allSvgs = canvasElement.querySelectorAll('svg')
        let patternDefCount = 0
        let patternPathCount = 0

        allSvgs.forEach(svg => {
          const patternDefs = svg.querySelectorAll('pattern')
          patternDefCount += patternDefs.length

          const allPaths = Array.from(svg.querySelectorAll('path'))
          const patternPaths = allPaths.filter(path => {
            const fill = path.getAttribute('fill')
            return fill && fill.startsWith('url(#')
          })
          patternPathCount += patternPaths.length
        })

        return {
          patternDefCount,
          patternPathCount,
          svgCount: allSvgs.length
        }
      },
      async () => {
        // Click "Add Geo Pattern" button
        const buttons = Array.from(canvasElement.querySelectorAll('button'))
        const addPatternButton = buttons.find(btn => btn.textContent?.includes('Add Geo Pattern'))
        if (!addPatternButton) {
          throw new Error('Add Geo Pattern button not found')
        }
        await userEvent.click(addPatternButton)
      },
      (before, after) => {
        // After clicking, at minimum a new pattern definition should be created.
        // Pattern paths may remain unchanged until dataKey/dataValue are configured.
        return after.patternDefCount > before.patternDefCount
      }
    )

    // ==========================================================================
    // TEST: Change pattern color to #111
    // ==========================================================================
    // First, open the pattern accordion
    let patternAccordionButton: HTMLElement | null = null
    await performAndAssert(
      'Pattern Settings → Open pattern accordion',
      () => {
        const allButtons = Array.from(canvasElement.querySelectorAll('.accordion__button'))
        const button = allButtons.find(btn => btn.textContent?.includes('Select Column')) as HTMLElement
        if (button) {
          patternAccordionButton = button
        }
        return {
          isExpanded: button ? button.getAttribute('aria-expanded') === 'true' : false
        }
      },
      async () => {
        if (!patternAccordionButton) {
          throw new Error('Pattern accordion not found')
        }
        await userEvent.click(patternAccordionButton)
      },
      (before, after) => {
        return !before.isExpanded && after.isExpanded
      }
    )

    // Now change the pattern color
    await performAndAssert(
      'Pattern Settings → Change pattern color to #111',
      () => {
        // Check pattern color in the SVG - look for circle elements inside pattern definitions
        const allSvgs = canvasElement.querySelectorAll('svg')
        let patternCircleColors: string[] = []

        allSvgs.forEach(svg => {
          const patterns = svg.querySelectorAll('pattern')
          patterns.forEach(pattern => {
            const circles = pattern.querySelectorAll('circle')
            circles.forEach(circle => {
              const fill = circle.getAttribute('fill')
              if (fill) patternCircleColors.push(fill)
            })
          })
        })

        return {
          patternColors: patternCircleColors
        }
      },
      async () => {
        // Find the pattern color input and change it to #111
        const input = canvasElement.querySelector('input[name="patternColor"]') as HTMLInputElement
        if (!input) {
          throw new Error('Pattern color input not found')
        }
        await userEvent.clear(input)
        // Use paste to enter the entire value at once, avoiding intermediate contrast check warnings
        await userEvent.paste('#111')
        // Blur to commit the change
        await userEvent.tab()
      },
      (before, after) => {
        // Pattern circles should now have fill color #111
        return after.patternColors.some(color => color === '#111')
      }
    )

    // ==========================================================================
    // TEST: Set dataKey to STATE and dataValue to Colorado
    // ==========================================================================
    await performAndAssert(
      'Pattern Settings → Set dataKey/dataValue to STATE/Colorado',
      () => {
        // Count pattern paths (paths with fill="url(#...)")
        const allSvgs = canvasElement.querySelectorAll('svg')
        let patternPathCount = 0

        allSvgs.forEach(svg => {
          const allPaths = Array.from(svg.querySelectorAll('path'))
          const patternPaths = allPaths.filter(path => {
            const fill = path.getAttribute('fill')
            return fill && fill.startsWith('url(#')
          })
          patternPathCount += patternPaths.length
        })

        return {
          patternPathCount
        }
      },
      async () => {
        // Select "STATE" from the dataKey dropdown
        const dataKeySelect = canvasElement.querySelector('select[name^="pattern-dataKey--"]') as HTMLSelectElement
        if (!dataKeySelect) {
          throw new Error('DataKey select not found')
        }
        await userEvent.selectOptions(dataKeySelect, 'STATE')

        // Type "Colorado" in the dataValue input
        const dataValueInput = canvasElement.querySelector('input[id^="pattern-dataValue--"]') as HTMLInputElement
        if (!dataValueInput) {
          throw new Error('DataValue input not found')
        }
        await userEvent.clear(dataValueInput)
        await userEvent.type(dataValueInput, 'Colorado')
        // Tab to commit the change
        await userEvent.tab()
      },
      (before, after) => {
        // After setting STATE/Colorado, at least one matching patterned path should appear.
        return after.patternPathCount > before.patternPathCount && after.patternPathCount > 0
      }
    )

    // ==========================================================================
    // TEST: Numeric dataValue matching and hover persistence
    // ==========================================================================
    await performAndAssert(
      'Pattern Settings → Set numeric dataKey/dataValue (Rate/55)',
      () => {
        const allSvgs = canvasElement.querySelectorAll('svg')
        let patternPathCount = 0

        allSvgs.forEach(svg => {
          const allPaths = Array.from(svg.querySelectorAll('path'))
          patternPathCount += allPaths.filter(path => path.getAttribute('fill')?.startsWith('url(#')).length
        })

        return { patternPathCount }
      },
      async () => {
        const dataKeySelect = canvasElement.querySelector('select[name^="pattern-dataKey--"]') as HTMLSelectElement
        const dataValueInput = canvasElement.querySelector('input[id^="pattern-dataValue--"]') as HTMLInputElement
        if (!dataKeySelect || !dataValueInput) throw new Error('Pattern data controls not found')

        await userEvent.selectOptions(dataKeySelect, 'Rate')
        await userEvent.clear(dataValueInput)
        await userEvent.type(dataValueInput, '55')
        await userEvent.tab()
      },
      (before, after) => after.patternPathCount > 0
    )

    await performAndAssert(
      'Pattern Settings → Broad match with blank dataKey (value 55)',
      () => {
        const allSvgs = canvasElement.querySelectorAll('svg')
        let patternPathCount = 0

        allSvgs.forEach(svg => {
          const allPaths = Array.from(svg.querySelectorAll('path'))
          patternPathCount += allPaths.filter(path => path.getAttribute('fill')?.startsWith('url(#')).length
        })

        return { patternPathCount }
      },
      async () => {
        const dataKeySelect = canvasElement.querySelector('select[name^="pattern-dataKey--"]') as HTMLSelectElement
        const dataValueInput = canvasElement.querySelector('input[id^="pattern-dataValue--"]') as HTMLInputElement
        if (!dataKeySelect || !dataValueInput) throw new Error('Pattern data controls not found')

        await userEvent.selectOptions(dataKeySelect, '')
        await userEvent.clear(dataValueInput)
        await userEvent.type(dataValueInput, '55')
        await userEvent.tab()
      },
      (before, after) => after.patternPathCount > 0
    )

    await performAndAssert(
      'Pattern Settings → Specific match beats broad match',
      () => {
        const allSvgs = canvasElement.querySelectorAll('svg')
        const patternTypeById: Record<string, 'lines' | 'circles' | 'waves' | 'unknown'> = {}
        const appliedRatePatternTypes = new Set<string>()

        allSvgs.forEach(svg => {
          const patterns = svg.querySelectorAll('pattern')
          patterns.forEach(pattern => {
            const patternId = pattern.getAttribute('id')
            if (!patternId) return

            if (pattern.querySelector('circle')) patternTypeById[patternId] = 'circles'
            else if (pattern.querySelector('line')) patternTypeById[patternId] = 'lines'
            else if (pattern.querySelector('path')) patternTypeById[patternId] = 'waves'
            else patternTypeById[patternId] = 'unknown'
          })

          const ratePatternNodes = Array.from(svg.querySelectorAll('path.pattern-geoKey--Rate')).filter(node =>
            node.getAttribute('fill')?.startsWith('url(#')
          )

          ratePatternNodes.forEach(node => {
            const fill = node.getAttribute('fill')
            const match = fill?.match(/^url\(#(.+)\)$/)
            const patternId = match?.[1]
            if (!patternId) return
            appliedRatePatternTypes.add(patternTypeById[patternId] || 'unknown')
          })
        })

        return {
          hasRateCircle: appliedRatePatternTypes.has('circles'),
          hasRateWave: appliedRatePatternTypes.has('waves')
        }
      },
      async () => {
        const firstDataKey = canvasElement.querySelector('select[name="pattern-dataKey--0"]') as HTMLSelectElement
        const firstDataValue = canvasElement.querySelector('input[id="pattern-dataValue--0"]') as HTMLInputElement
        const firstPatternType = canvasElement.querySelector('select[name="pattern-type--0"]') as HTMLSelectElement
        if (!firstDataKey || !firstDataValue || !firstPatternType) {
          throw new Error('First pattern controls not found')
        }
        await userEvent.selectOptions(firstDataKey, 'Rate')
        await userEvent.clear(firstDataValue)
        await userEvent.type(firstDataValue, '55')
        await userEvent.selectOptions(firstPatternType, 'circles')

        const buttons = Array.from(canvasElement.querySelectorAll('button'))
        const addPatternButton = buttons.find(btn => btn.textContent?.includes('Add Geo Pattern'))
        if (!addPatternButton) throw new Error('Add Geo Pattern button not found')
        await userEvent.click(addPatternButton)

        const accordionButtons = Array.from(canvasElement.querySelectorAll('.accordion__button'))
        const selectColumnButtons = accordionButtons.filter(btn => btn.textContent?.includes('Select Column'))
        const secondPatternAccordionButton = selectColumnButtons[selectColumnButtons.length - 1] as HTMLElement
        if (!secondPatternAccordionButton) throw new Error('Second pattern accordion not found')
        await userEvent.click(secondPatternAccordionButton)

        const secondDataKey = canvasElement.querySelector('select[name="pattern-dataKey--1"]') as HTMLSelectElement
        const secondDataValue = canvasElement.querySelector('input[id="pattern-dataValue--1"]') as HTMLInputElement
        const secondPatternType = canvasElement.querySelector('select[name="pattern-type--1"]') as HTMLSelectElement

        if (!secondDataKey || !secondDataValue || !secondPatternType) {
          throw new Error('Second pattern controls not found')
        }

        await userEvent.selectOptions(secondDataKey, '')
        await userEvent.clear(secondDataValue)
        await userEvent.type(secondDataValue, '55')
        await userEvent.selectOptions(secondPatternType, 'waves')
      },
      (before, after) => after.hasRateCircle && !after.hasRateWave
    )

    await performAndAssert(
      'Pattern Settings → Pattern remains after hover',
      () => {
        const allSvgs = canvasElement.querySelectorAll('svg')
        let patternPathCount = 0

        allSvgs.forEach(svg => {
          const allPaths = Array.from(svg.querySelectorAll('path'))
          patternPathCount += allPaths.filter(path => path.getAttribute('fill')?.startsWith('url(#')).length
        })

        return { patternPathCount }
      },
      async () => {
        const geoGroup = canvasElement.querySelector('.geo-group') as HTMLElement
        if (!geoGroup) throw new Error('Geo group not found for hover test')
        await userEvent.hover(geoGroup)
      },
      (before, after) => after.patternPathCount === before.patternPathCount && after.patternPathCount > 0
    )

    // ==========================================================================
    // TEST: Set label to "Colorado Pattern"
    // ==========================================================================
    await performAndAssert(
      'Pattern Settings → Set label to "Colorado Pattern"',
      () => {
        // Check if the label appears in the legend
        const legendText = canvasElement.textContent || ''
        return {
          hasLabelInLegend: legendText.includes('Colorado Pattern')
        }
      },
      async () => {
        // Find the label input - it's in a label element containing "Label (optional)"
        const labels = Array.from(canvasElement.querySelectorAll('label'))
        const labelElement = labels.find(l => l.textContent?.includes('Label (optional)'))
        const labelInput = labelElement?.querySelector('input[type="text"]') as HTMLInputElement

        if (!labelInput) {
          throw new Error('Label input not found')
        }
        await userEvent.clear(labelInput)
        await userEvent.type(labelInput, 'Colorado Pattern')
        await userEvent.tab()
      },
      (before, after) => {
        // After setting the label, it should appear in the legend
        return !before.hasLabelInLegend && after.hasLabelInLegend
      }
    )

    // ==========================================================================
    // TEST: Change pattern type to "lines"
    // ==========================================================================
    await performAndAssert(
      'Pattern Settings → Change pattern type to lines',
      () => {
        // Check what type of pattern elements exist - lines patterns have <line> elements
        const allSvgs = canvasElement.querySelectorAll('svg')
        let hasCirclePattern = false
        let hasLinePattern = false

        allSvgs.forEach(svg => {
          const patterns = svg.querySelectorAll('pattern')
          patterns.forEach(pattern => {
            if (pattern.querySelector('circle')) hasCirclePattern = true
            if (pattern.querySelector('line')) hasLinePattern = true
          })
        })

        return {
          hasCirclePattern,
          hasLinePattern
        }
      },
      async () => {
        // Find the pattern type dropdown and select "lines"
        const patternTypeSelect = canvasElement.querySelector('select[name^="pattern-type--"]') as HTMLSelectElement
        if (!patternTypeSelect) {
          throw new Error('Pattern type select not found')
        }
        await userEvent.selectOptions(patternTypeSelect, 'lines')
      },
      (before, after) => {
        // Before: has circle pattern, no line pattern
        // After: has line pattern (may or may not still have circle pattern from other elements)
        return before.hasCirclePattern && !before.hasLinePattern && after.hasLinePattern
      }
    )

    // ==========================================================================
    // TEST: Change pattern size to "large"
    // ==========================================================================
    await performAndAssert(
      'Pattern Settings → Change pattern size to large',
      () => {
        // Check the pattern element's width/height attributes
        const allSvgs = canvasElement.querySelectorAll('svg')
        let patternSizes: number[] = []

        allSvgs.forEach(svg => {
          const patterns = svg.querySelectorAll('pattern')
          patterns.forEach(pattern => {
            const width = pattern.getAttribute('width')
            if (width) patternSizes.push(parseFloat(width))
          })
        })

        return {
          patternSizes
        }
      },
      async () => {
        // Find the pattern size dropdown and select "large"
        const patternSizeSelect = canvasElement.querySelector('select[name^="pattern-size--"]') as HTMLSelectElement
        if (!patternSizeSelect) {
          throw new Error('Pattern size select not found')
        }
        await userEvent.selectOptions(patternSizeSelect, 'large')
      },
      (before, after) => {
        // After changing to large, pattern sizes should increase
        const beforeMax = Math.max(...before.patternSizes)
        const afterMax = Math.max(...after.patternSizes)
        return afterMax > beforeMax
      }
    )
  }
}

/**
 * Text Annotations Section Tests
 * Tests controls in the Text Annotations accordion
 */
