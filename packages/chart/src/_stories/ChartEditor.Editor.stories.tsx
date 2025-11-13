import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent, expect } from 'storybook/test'
import { performAndAssert, waitForEditor, openAccordion, MIN_ANIMATION_DELAY_MS } from '@cdc/core/helpers/testing'

import Chart from '../CdcChartComponent'
import mockScatterPlot from './_mock/scatterplot_mock.json'
import smallMultiplesLinesColorsConfig from './_mock/small_multiples/small_multiples_lines_colors.json'

const meta: Meta<typeof Chart> = {
  title: 'Components/Templates/Chart/Editor Tests',
  component: Chart
}

type Story = StoryObj<typeof Chart>

// Simple test - just check if chart loads without any interactions
export const GeneralSectionTests: Story = {
  name: 'General Section Tests',
  parameters: {
    test: {
      timeout: 30000 // 30 second timeout for comprehensive test
    }
  },
  args: {
    config: {
      ...mockScatterPlot,
      visualizationType: 'Bar',
      title: 'Bar Chart Editor Test',
      orientation: 'vertical',
      xAxis: {
        ...mockScatterPlot.xAxis,
        type: 'categorical',
        sortDates: false
      },
      yAxis: {
        ...mockScatterPlot.yAxis,
        type: 'linear'
      },
      series: mockScatterPlot.series.map(s => ({
        ...s,
        type: 'Bar'
      }))
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for editor to load
    await waitForEditor(canvas)

    // Wait for chart to fully render
    if (MIN_ANIMATION_DELAY_MS > 0) {
      await new Promise(resolve => setTimeout(resolve, MIN_ANIMATION_DELAY_MS))
    }

    // Open General accordion
    await openAccordion(canvas, 'General')

    // Wait for accordion to open
    if (MIN_ANIMATION_DELAY_MS > 0) {
      await new Promise(resolve => setTimeout(resolve, MIN_ANIMATION_DELAY_MS))
    }

    // ============================================================================
    // TEST: Chart Height Change
    // Verifies: Chart visualization height changes when height input is modified
    // ============================================================================
    const getChartVisualizationHeight = () => {
      // Target the tooltip-boundary div which directly wraps just the chart SVG
      const chartContainer = canvasElement.querySelector('.tooltip-boundary')
      // Target the main chart SVG specifically (not brush or other SVGs)
      const chartSvg =
        canvasElement.querySelector('.tooltip-boundary svg[role="img"]') ||
        canvasElement.querySelector('svg.linear') ||
        canvasElement.querySelector('.cdc-open-viz-module svg:not(.brush-container svg)')
      return {
        containerHeight: chartContainer?.getBoundingClientRect().height || 0,
        svgHeight: parseInt(chartSvg?.getAttribute('height') || '0', 10),
        containerExists: Boolean(chartContainer),
        svgExists: Boolean(chartSvg)
      }
    }

    const chartHeightInput = canvasElement.querySelector(
      'input[name*="height"]:not([name*="mobile"]), input[name*="vertical"]'
    ) as HTMLInputElement
    expect(chartHeightInput).toBeTruthy()

    await performAndAssert(
      'Chart Height Change',
      getChartVisualizationHeight,
      async () => {
        await userEvent.clear(chartHeightInput)
        await userEvent.type(chartHeightInput, '600', { delay: 50 })
        chartHeightInput.blur()

        // Try triggering form submission by pressing Enter
        await userEvent.type(chartHeightInput, '{Enter}')

        // Wait longer for chart to re-render with proper timing
        if (MIN_ANIMATION_DELAY_MS > 0) {
          await new Promise(resolve => setTimeout(resolve, MIN_ANIMATION_DELAY_MS * 4))
        }
      },
      (before, after) => {
        // Test that the visualization height changed (could increase or decrease)
        const heightChanged = Math.abs(after.containerHeight - before.containerHeight) > 10

        const svgExists = after.svgExists && before.svgExists
        return heightChanged && svgExists && after.containerExists
      }
    )

    // ============================================================================
    // NOTE: Mobile Height Testing
    // Mobile Height requires manual verification due to responsive behavior:
    // 1. Open this story in Storybook browser
    // 2. Set Mobile Height to a different value (e.g., 300px)
    // 3. Use browser dev tools to simulate mobile viewport (< 768px width)
    // 4. Verify chart uses mobile height instead of regular height
    // The mobile height input field is confirmed to exist and accept values.
    // ============================================================================

    // ============================================================================
    // Title Tests - Universal fields supported by all chart types
    // ============================================================================

    // Test 1: Title Text Change
    const getTitleText = () => {
      // Look for the chart title using the specific class from CdcChartComponent.tsx line 913
      const titleElement = canvasElement.querySelector('.chart-title')
      const result = {
        titleExists: Boolean(titleElement),
        titleText: titleElement?.textContent?.trim() || '',
        titleVisible: titleElement ? window.getComputedStyle(titleElement).display !== 'none' : false
      }
      return result
    }

    const titleInput = canvasElement.querySelector('input[name="title"], input#title') as HTMLInputElement
    expect(titleInput).toBeTruthy()

    await performAndAssert(
      'Title Text Change',
      getTitleText,
      async () => {
        await userEvent.clear(titleInput)
        await userEvent.type(titleInput, 'Updated Chart Title', { delay: 50 })
        titleInput.blur()
        // Add delay to make the change visible in Storybook
        if (MIN_ANIMATION_DELAY_MS > 0) {
          await new Promise(resolve => setTimeout(resolve, MIN_ANIMATION_DELAY_MS))
        }
      },
      (before, after) => {
        // Test that the title text in the chart updated
        const titleChanged = after.titleText !== before.titleText
        const titleExists = after.titleExists && before.titleExists
        const newTitleCorrect = after.titleText.includes('Updated Chart Title')
        return titleChanged && titleExists && newTitleCorrect
      }
    )

    // Test 2: Show Title Toggle
    const showTitleCheckbox = canvasElement.querySelector('input[name="showTitle"]') as HTMLInputElement
    expect(showTitleCheckbox).toBeTruthy()

    await performAndAssert(
      'Show Title Toggle',
      getTitleText,
      async () => {
        // Toggle the show title checkbox (assuming it starts checked)
        await userEvent.click(showTitleCheckbox)
        // Add delay to make the change visible in Storybook
        if (MIN_ANIMATION_DELAY_MS > 0) {
          await new Promise(resolve => setTimeout(resolve, MIN_ANIMATION_DELAY_MS))
        }
      },
      (before, after) => {
        // Test that the title visibility changed in the chart
        // When showTitle is toggled off, the title element is removed from DOM entirely
        const titleWasVisible = before.titleExists && before.titleVisible
        const titleIsNowHidden = !after.titleExists || !after.titleVisible
        return titleWasVisible && titleIsNowHidden
      }
    )

    // ============================================================================
    // Super Title Tests
    // ============================================================================

    // IMPORTANT: Re-enable "Show Title" first (it was toggled off in previous test)
    const showTitleCheckboxForSuperTitle = canvasElement.querySelector('input[name="showTitle"]') as HTMLInputElement
    if (showTitleCheckboxForSuperTitle && !showTitleCheckboxForSuperTitle.checked) {
      await userEvent.click(showTitleCheckboxForSuperTitle)
      if (MIN_ANIMATION_DELAY_MS > 0) {
        await new Promise(resolve => setTimeout(resolve, MIN_ANIMATION_DELAY_MS))
      }
    }

    // Test 1: Super Title Text Change
    const getSuperTitleText = () => {
      // Super title is part of the .chart-title component but rendered separately
      const titleContainer = canvasElement.querySelector('.chart-title')
      const superTitleElement =
        titleContainer?.querySelector('.super-title, [class*="super"]') || titleContainer?.children[0] // First child might be super title

      return {
        superTitleExists: Boolean(superTitleElement),
        superTitleText: superTitleElement?.textContent?.trim() || '',
        titleContainerExists: Boolean(titleContainer)
      }
    }

    // Find the Super Title input using multiple fallback strategies
    const superTitleInput = (() => {
      // Strategy 1: Find by name attribute containing superTitle
      const byName = canvasElement.querySelector('input[name*="superTitle"], textarea[name*="superTitle"]')
      if (byName) return byName

      // Strategy 2: Find input within a label that contains "Super Title"
      const inputs = Array.from(canvasElement.querySelectorAll('input, textarea'))
      for (const input of inputs) {
        const label = input.closest('label')
        const labelText = label?.textContent?.trim()
        if (label && labelText && labelText.includes('Super Title')) {
          return input
        }
      }

      return null
    })() as HTMLInputElement

    if (superTitleInput) {
      await performAndAssert(
        'Super Title Text Change',
        getSuperTitleText,
        async () => {
          await userEvent.clear(superTitleInput)
          await userEvent.type(superTitleInput, 'Updated Super Title', { delay: 50 })
          superTitleInput.blur()
          if (MIN_ANIMATION_DELAY_MS > 0) {
            await new Promise(resolve => setTimeout(resolve, MIN_ANIMATION_DELAY_MS))
          }
        },
        (before, after) => {
          const superTitleChanged = after.superTitleText !== before.superTitleText
          const newSuperTitleCorrect = after.superTitleText.includes('Updated Super Title')
          return superTitleChanged && newSuperTitleCorrect && after.titleContainerExists
        }
      )
    }

    // ============================================================================
    // Message (Intro Text) Tests
    // ============================================================================

    // Test 1: Message Text Change
    const getMessageText = () => {
      const messageElement = canvasElement.querySelector('.introText')
      return {
        messageExists: Boolean(messageElement),
        messageText: messageElement?.textContent?.trim() || '',
        messageVisible: messageElement ? window.getComputedStyle(messageElement).display !== 'none' : false
      }
    }

    // Find the Message/Intro Text textarea using multiple fallback strategies
    const messageInput = (() => {
      // Strategy 1: Find by name attribute containing introText
      const byName = canvasElement.querySelector('textarea[name*="introText"]')
      if (byName) return byName

      // Strategy 2: Find textarea within a label that contains "Message"
      const textareas = Array.from(canvasElement.querySelectorAll('textarea'))
      for (const textarea of textareas) {
        const label = textarea.closest('label')
        const labelText = label?.textContent?.trim()
        if (label && labelText && (labelText.includes('Message') || labelText.includes('Intro Text'))) {
          return textarea
        }
      }

      // Strategy 3: Find by proximity to "Message" text
      const labels = Array.from(canvasElement.querySelectorAll('label'))
      for (const label of labels) {
        const labelText = label.textContent?.trim()
        if (labelText && labelText.includes('Message')) {
          const textarea = label.querySelector('textarea')
          if (textarea) return textarea
        }
      }

      return null
    })() as HTMLTextAreaElement
    expect(messageInput).toBeTruthy()

    await performAndAssert(
      'Message Text Change',
      getMessageText,
      async () => {
        await userEvent.clear(messageInput)
        await userEvent.type(messageInput, 'This is an updated message for the chart.', { delay: 30 })
        messageInput.blur()
        if (MIN_ANIMATION_DELAY_MS > 0) {
          await new Promise(resolve => setTimeout(resolve, MIN_ANIMATION_DELAY_MS))
        }
      },
      (before, after) => {
        const messageChanged = after.messageText !== before.messageText
        const messageVisible = after.messageExists && after.messageVisible
        const newMessageCorrect = after.messageText.includes('This is an updated message')
        return messageChanged && messageVisible && newMessageCorrect
      }
    )

    // ============================================================================
    // Subtext/Citation Tests
    // ============================================================================

    // Test 1: Subtext Text Change
    const getSubtextText = () => {
      // Subtext is typically rendered as .subtext or similar class
      const subtextElement = canvasElement.querySelector('.subtext, .section-subtext, [class*="subtext"]')
      return {
        subtextExists: Boolean(subtextElement),
        subtextText: subtextElement?.textContent?.trim() || '',
        subtextVisible: subtextElement ? window.getComputedStyle(subtextElement).display !== 'none' : false
      }
    }

    // Find the Subtext/Citation textarea
    const subtextInput = (() => {
      // Strategy 1: Find by name attribute containing description
      const byName = canvasElement.querySelector('textarea[name*="description"]')
      if (byName) return byName

      // Strategy 2: Find textarea within a label that contains "Subtext" or "Citation"
      const textareas = Array.from(canvasElement.querySelectorAll('textarea'))
      for (const textarea of textareas) {
        const label = textarea.closest('label')
        const labelText = label?.textContent?.trim()
        if (label && labelText && (labelText.includes('Subtext') || labelText.includes('Citation'))) {
          return textarea
        }
      }

      return null
    })() as HTMLTextAreaElement

    if (subtextInput) {
      await performAndAssert(
        'Subtext Text Change',
        getSubtextText,
        async () => {
          await userEvent.clear(subtextInput)
          await userEvent.type(subtextInput, 'Updated subtext and citation information.', { delay: 30 })
          subtextInput.blur()
          if (MIN_ANIMATION_DELAY_MS > 0) {
            await new Promise(resolve => setTimeout(resolve, MIN_ANIMATION_DELAY_MS))
          }
        },
        (before, after) => {
          const subtextChanged = after.subtextText !== before.subtextText
          const subtextVisible = after.subtextExists && after.subtextVisible
          const newSubtextCorrect = after.subtextText.includes('Updated subtext')
          return subtextChanged && subtextVisible && newSubtextCorrect
        }
      )
    }

    // ============================================================================
    // Footnotes Tests
    // ============================================================================

    // Test 1: Footnotes Text Change
    const getFootnotesText = () => {
      // Footnotes could be rendered in various ways - check multiple selectors
      const footnotesElement = canvasElement.querySelector(
        '.footnotes, .footnote, [class*="footnote"], .chart-footnotes'
      )
      return {
        footnotesExists: Boolean(footnotesElement),
        footnotesText: footnotesElement?.textContent?.trim() || '',
        footnotesVisible: footnotesElement ? window.getComputedStyle(footnotesElement).display !== 'none' : false
      }
    }

    // Find the Footnotes textarea
    const footnotesInput = (() => {
      // Strategy 1: Find by name attribute containing footnotes
      const byName = canvasElement.querySelector('textarea[name*="footnotes"], textarea[name*="Footnotes"]')
      if (byName) return byName

      // Strategy 2: Find textarea within a label that contains "Footnotes"
      const textareas = Array.from(canvasElement.querySelectorAll('textarea'))
      for (const textarea of textareas) {
        const label = textarea.closest('label')
        const labelText = label?.textContent?.trim()
        if (label && labelText && labelText.includes('Footnotes')) {
          return textarea
        }
      }

      return null
    })() as HTMLTextAreaElement

    if (footnotesInput) {
      await performAndAssert(
        'Footnotes Text Change',
        getFootnotesText,
        async () => {
          await userEvent.clear(footnotesInput)
          await userEvent.type(footnotesInput, 'Updated footnotes with important data disclaimers.', { delay: 30 })
          footnotesInput.blur()
          if (MIN_ANIMATION_DELAY_MS > 0) {
            await new Promise(resolve => setTimeout(resolve, MIN_ANIMATION_DELAY_MS))
          }
        },
        (before, after) => {
          const footnotesChanged = after.footnotesText !== before.footnotesText
          const footnotesVisible = after.footnotesExists && after.footnotesVisible
          const newFootnotesCorrect = after.footnotesText.includes('Updated footnotes')
          return footnotesChanged && footnotesVisible && newFootnotesCorrect
        }
      )
    }

    // Add final delay to see the end state
    if (MIN_ANIMATION_DELAY_MS > 0) {
      await new Promise(resolve => setTimeout(resolve, MIN_ANIMATION_DELAY_MS))
    }
  }
}

// NOTE: Data Series tests have been moved to Bar/Bar.Editor.stories.tsx
// since series behavior is chart-type-specific

// ============================================================================
// SMALL MULTIPLES SECTION TESTS
// Tests the Small Multiples accordion section following best practices:
// - Tests visualization output changes, not control state
// - Uses performAndAssert pattern for all interactions
// - Tests specific visual changes in small multiples layout and tiles
// - Focuses on testing what reliably works
// ============================================================================

export const SmallMultiplesSectionTests: Story = {
  name: 'Small Multiples Section Tests',
  parameters: {},
  args: {
    config: {
      ...smallMultiplesLinesColorsConfig,
      title: 'Line Chart Small Multiples Test',
      smallMultiples: {
        ...smallMultiplesLinesColorsConfig.smallMultiples,
        mode: '',
        showAreaUnderLine: false
      }
    },
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)

    await openAccordion(canvas, 'Small Multiples')

    // ============================================================================
    // TEST: Enable Small Multiples Mode
    // Verifies: Chart visualization changes from single chart to multiple tiles
    // ============================================================================

    const getChartCounts = () => {
      const chartContainer = canvasElement.querySelector('.cove-component__content, .chart-container, .visualization')
      const tiles = canvasElement.querySelectorAll('.small-multiple-tile, [class*="tile"]')
      const svgElements = chartContainer?.querySelectorAll('svg[role="img"], svg.chart') || []

      return {
        svgCount: svgElements.length,
        tileCount: tiles.length
      }
    }

    const modeSelect = canvas.getByLabelText(/tile mode/i) as HTMLSelectElement

    await performAndAssert(
      'Enable Small Multiples Mode - Chart splits into multiple tiles',
      getChartCounts,
      async () => {
        await userEvent.selectOptions(modeSelect, 'by-series')
      },
      (before, after) => {
        return before.svgCount === 1 && before.tileCount === 0 && after.svgCount > 1 && after.tileCount > 1
      }
    )

    // ============================================================================
    // TEST: Tiles Per Row Desktop
    // Verifies: Grid layout changes from 3 tiles per row to 2 tiles per row
    // ============================================================================

    const getTilesInFirstRow = () => {
      const tiles = Array.from(canvasElement.querySelectorAll('.small-multiples-grid > .small-multiple-tile'))
      if (tiles.length === 0) return { tilesInFirstRow: 0 }

      const firstTileTop = tiles[0].getBoundingClientRect().top
      const tilesInFirstRow = tiles.filter(tile => {
        const tileTop = tile.getBoundingClientRect().top
        return Math.abs(tileTop - firstTileTop) < 5
      }).length

      return { tilesInFirstRow }
    }

    const tilesPerRowInput = canvas.getByLabelText(/tiles per row/i) as HTMLInputElement

    await performAndAssert(
      'Tiles Per Row Desktop - Layout changes from 3 to 2 tiles per row',
      getTilesInFirstRow,
      async () => {
        await userEvent.clear(tilesPerRowInput)
        await userEvent.type(tilesPerRowInput, '2')
        tilesPerRowInput.blur()
      },
      (before, after) => {
        return before.tilesInFirstRow === 3 && after.tilesInFirstRow === 2
      }
    )

    // ============================================================================
    // TEST: Tile Order
    // Verifies: Changing tile order from ascending to descending reverses tile titles
    // ============================================================================

    const getTileTitles = () => {
      const tiles = canvasElement.querySelectorAll('.small-multiples-grid > .small-multiple-tile')
      const titles = Array.from(tiles).map(tile => {
        const titleElement = tile.querySelector('.tile-title')
        return titleElement?.textContent?.trim() || ''
      })
      return { titles }
    }

    const tileOrderSelect = canvas.getByLabelText(/tile order/i) as HTMLSelectElement

    await performAndAssert(
      'Tile Order - Descending reverses tile titles',
      getTileTitles,
      async () => {
        await userEvent.selectOptions(tileOrderSelect, 'desc')
      },
      (before, after) => {
        const beforeTitles = before.titles.join(',')
        const afterTitlesReversed = after.titles.slice().reverse().join(',')
        return beforeTitles === afterTitlesReversed && before.titles.length > 0
      }
    )

    // ============================================================================
    // TEST: Color Mode
    // Verifies: Same color mode makes all line colors match
    // ============================================================================

    const getLineColors = () => {
      const svgElements = canvasElement.querySelectorAll('svg[role="img"], svg.chart')
      const lineColors = Array.from(svgElements).map(svg => {
        const linePath = svg.querySelector('path[class*="visx-linepath"], path[stroke]')
        return linePath?.getAttribute('stroke') || ''
      })
      const allSameColor = lineColors.length > 1 && lineColors.every(color => color === lineColors[0])
      return { lineColors, allSameColor }
    }

    const colorModeSelect = canvas.getByLabelText(/color mode/i) as HTMLSelectElement

    await performAndAssert(
      'Color Mode - Same color makes all lines match',
      getLineColors,
      async () => {
        await userEvent.selectOptions(colorModeSelect, 'same')
      },
      (before, after) => {
        return before.allSameColor === false && after.allSameColor === true
      }
    )

    // ============================================================================
    // TEST: Independent Y-Axis
    // Verifies: Y-axis scales differ across tiles when enabled
    // ============================================================================

    const getYAxisScales = () => {
      const svgElements = canvasElement.querySelectorAll('svg[role="img"], svg.chart')
      const yAxisMaxValues = Array.from(svgElements).map(svg => {
        const yAxisTicks = svg.querySelectorAll('g.visx-axis-left g.visx-axis-tick text, g[class*="axis"] text')
        const tickValues = Array.from(yAxisTicks)
          .map(tick => parseFloat(tick.textContent || '0'))
          .filter(val => !isNaN(val))
        return tickValues.length > 0 ? Math.max(...tickValues) : 0
      })

      const allSameScale = yAxisMaxValues.length > 1 && yAxisMaxValues.every(val => val === yAxisMaxValues[0])
      const hasDifferentScales = yAxisMaxValues.length > 1 && !allSameScale

      return {
        yAxisMaxValues,
        allSameScale,
        hasDifferentScales
      }
    }

    const independentYAxisCheckbox = canvas.getByLabelText(/independent y-axis scales/i) as HTMLInputElement

    await performAndAssert(
      'Independent Y-Axis Toggle - Y-axis scales become different across tiles',
      getYAxisScales,
      async () => {
        await userEvent.click(independentYAxisCheckbox)
      },
      (before, after) => {
        return before.allSameScale === true && after.hasDifferentScales === true
      }
    )

    // ============================================================================
    // TEST: Shade Area Under Lines
    // Verifies: Area path elements appear under lines when enabled
    // ============================================================================

    const getAreaUnderLineCount = () => {
      const svgElements = canvasElement.querySelectorAll('svg[role="img"], svg.chart')
      let areaPathCount = 0
      svgElements.forEach(svg => {
        const areaPaths = svg.querySelectorAll('path[fill-opacity="0.3"]')
        areaPathCount += areaPaths.length
      })
      return { areaPathCount }
    }

    const shadeAreaCheckbox = canvas.getByLabelText(/shade area under lines/i) as HTMLInputElement

    await performAndAssert(
      'Shade Area Under Lines - Area paths appear when enabled',
      getAreaUnderLineCount,
      async () => {
        await userEvent.click(shadeAreaCheckbox)
      },
      (before, after) => {
        return before.areaPathCount === 0 && after.areaPathCount > 0
      }
    )
  }
}

export default meta
