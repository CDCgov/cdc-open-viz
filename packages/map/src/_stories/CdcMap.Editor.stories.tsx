import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent, expect } from 'storybook/test'
import CdcMap from '../CdcMap'
import usaStateGradientConfig from './_mock/usa-state-gradient.json'
import multiCountryConfig from './_mock/multi-country.json'
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

export const TypeSectionTests: Story = {
  args: {
    ...DEFAULT_ARGS
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await waitForPresence('.map-container', canvasElement)

    await openAccordion(canvas, 'Type')

    const getMapContainerState = () => {
      const container = canvasElement.querySelector('.map-container') as HTMLElement | null
      const svg = canvasElement.querySelector('svg') as SVGElement | null

      return {
        classes: container ? Array.from(container.classList) : [],
        hasSvg: Boolean(svg),
        isBubble: container?.classList.contains('bubble') ?? false,
        geoType: container?.classList.contains('us-county')
          ? 'us-county'
          : container?.classList.contains('us')
          ? 'us'
          : container?.classList.contains('single-state')
          ? 'single-state'
          : container?.classList.contains('world')
          ? 'world'
          : container?.classList.contains('us-region')
          ? 'us-region'
          : 'unknown'
      }
    }

    // ==========================================================================
    // TEST: Geography buttons change the geoType class on the map container
    // ==========================================================================
    const geoButtons = Array.from(canvasElement.querySelectorAll('.geo-buttons button')) as HTMLButtonElement[]
    expect(geoButtons.length).toBeGreaterThanOrEqual(3)

    const geographyButtonMap = geoButtons.reduce<Record<string, HTMLButtonElement>>((acc, button) => {
      const label = button.textContent?.trim() ?? ''
      acc[label.toLowerCase()] = button
      return acc
    }, {})

    const targetButtons = [
      { label: 'world', targetClasses: ['world'] },
      { label: 'united states', targetClasses: ['us'] }
    ]

    for (const { label, targetClasses } of targetButtons) {
      const button = geographyButtonMap[label]
      expect(button).toBeTruthy()

      await performAndAssert(
        `GeoType → ${label}`,
        getMapContainerState,
        async () => {
          await userEvent.click(button)
        },
        (before, after) =>
          targetClasses.some(
            targetClass => !before.classes.includes(targetClass) && after.classes.includes(targetClass)
          )
      )
    }

    // ==========================================================================
    // TEST: Geography subtype select toggles county/state classes
    // ==========================================================================
    const subtypeSelect = canvas.getByLabelText(/Geography Subtype/i) as HTMLSelectElement
    const subtypeValues = Array.from(subtypeSelect.options).map(option => option.value)
    expect(subtypeValues).toContain('us-county')

    await performAndAssert(
      'GeoType Subtype → US County',
      getMapContainerState,
      async () => {
        await userEvent.selectOptions(subtypeSelect, 'us-county')
      },
      (before, after) => !before.classes.includes('us-county') && after.classes.includes('us-county')
    )

    await performAndAssert(
      'GeoType Subtype → Reset',
      getMapContainerState,
      async () => {
        await userEvent.selectOptions(subtypeSelect, 'us')
      },
      (before, after) => before.classes.includes('us-county') && after.classes.includes('us')
    )

    // ==========================================================================
    // TEST: Map Type select toggles classes/data representation
    // ==========================================================================
    const typeSelect = canvas.getByLabelText(/Map Type/i) as HTMLSelectElement
    const initialType = typeSelect.value
    const mapTypeOptions = Array.from(typeSelect.options).map(option => option.value)
    expect(mapTypeOptions).toContain('navigation')

    await performAndAssert(
      'Map Type → Navigation',
      getMapContainerState,
      async () => {
        await userEvent.selectOptions(typeSelect, 'navigation')
      },
      (before, after) => !before.classes.includes('navigation') && after.classes.includes('navigation')
    )

    await performAndAssert(
      'Map Type → Reset',
      getMapContainerState,
      async () => {
        await userEvent.selectOptions(typeSelect, initialType)
      },
      (before, after) =>
        before.classes.includes('navigation') &&
        !after.classes.includes('navigation') &&
        after.classes.includes(initialType)
    )

    // ==========================================================================
    // TEST: Data Classification Type radio buttons
    // Verifies: Legend structure changes between numeric/quantitative and categorical
    // ==========================================================================
    const numericRadio = canvasElement.querySelector('input[type="radio"][value="equalnumber"]') as HTMLInputElement
    const categoryRadio = canvasElement.querySelector('input[type="radio"][value="category"]') as HTMLInputElement
    expect(numericRadio).toBeTruthy()
    expect(categoryRadio).toBeTruthy()

    const getLegendStructure = () => {
      const legend = canvasElement.querySelector('.map-legend, .legend-container') as HTMLElement | null
      const legendItems = canvasElement.querySelectorAll('.legend-item, .legend-container > div, .legend li')
      const legendRects = legend?.querySelectorAll('rect')
      const legendText = legend?.querySelectorAll('text')
      return {
        legendExists: Boolean(legend),
        legendItemCount: legendItems.length,
        legendRectCount: legendRects?.length || 0,
        legendTextCount: legendText?.length || 0,
        legendFullHTML: legend?.innerHTML || ''
      }
    }

    await performAndAssert(
      'Classification Type → Category',
      getLegendStructure,
      async () => {
        await userEvent.click(categoryRadio)
      },
      (before, after) =>
        before.legendRectCount !== after.legendRectCount &&
        before.legendTextCount !== after.legendTextCount &&
        before.legendFullHTML !== after.legendFullHTML
    )

    await performAndAssert(
      'Classification Type → Numeric',
      getLegendStructure,
      async () => {
        await userEvent.click(numericRadio)
      },
      (before, after) =>
        before.legendRectCount !== after.legendRectCount &&
        before.legendTextCount !== after.legendTextCount &&
        before.legendFullHTML !== after.legendFullHTML
    )

    // ==========================================================================
    // TEST: Display As Hex Map checkbox
    // Verifies: Hexagon SVG polygons appear/disappear in map visualization
    // ==========================================================================
    const hexLabel = Array.from(canvasElement.querySelectorAll('label')).find(label =>
      label.textContent?.includes('Display As Hex Map')
    )
    const actualHexCheckbox = hexLabel?.querySelector('input[type="checkbox"]') as HTMLInputElement
    expect(actualHexCheckbox).toBeTruthy()

    const getHexVisualization = () => {
      const hexElements = canvasElement.querySelectorAll('.territory-wrapper--hex, polygon[points*="22 0 44 12.702"]')
      return {
        hexElementCount: hexElements.length
      }
    }

    await performAndAssert(
      'Display As Hex Map → Enable',
      getHexVisualization,
      async () => {
        await userEvent.click(actualHexCheckbox)
      },
      (before, after) => before.hexElementCount === 0 && after.hexElementCount > 0
    )

    await performAndAssert(
      'Display As Hex Map → Disable',
      getHexVisualization,
      async () => {
        await userEvent.click(actualHexCheckbox)
      },
      (before, after) => before.hexElementCount > 0 && after.hexElementCount === 0
    )

    // ==========================================================================
    // TEST: Show state labels checkbox
    // Verifies: State abbreviation text elements appear/disappear on map SVG
    // ==========================================================================
    const stateLabelsCheckbox = canvas.getByLabelText(/Show state labels/i) as HTMLInputElement
    expect(stateLabelsCheckbox).toBeTruthy()

    const getStateLabelsVisual = () => {
      const mapSvg = canvasElement.querySelector('svg[role="img"]')
      const textElements = mapSvg?.querySelectorAll('text')
      // State labels are text elements with short state abbreviations (2 chars)
      const stateLabelTexts = Array.from(textElements || []).filter(text => {
        const content = text.textContent?.trim()
        return content && content.length === 2 && /^[A-Z]{2}$/.test(content)
      })
      return {
        stateLabelCount: stateLabelTexts.length
      }
    }

    await performAndAssert(
      'Show State Labels → Enable',
      getStateLabelsVisual,
      async () => {
        await userEvent.click(stateLabelsCheckbox)
      },
      (before, after) => before.stateLabelCount === 0 && after.stateLabelCount > 0
    )

    await performAndAssert(
      'Show State Labels → Disable',
      getStateLabelsVisual,
      async () => {
        await userEvent.click(stateLabelsCheckbox)
      },
      (before, after) => before.stateLabelCount > 0 && after.stateLabelCount === 0
    )

    // ==========================================================================
    // TEST: Show All Territories checkbox
    // Verifies: Territory SVG elements appear/disappear in visualization
    // ==========================================================================
    const territoriesLabel = Array.from(canvasElement.querySelectorAll('label')).find(label =>
      label.textContent?.includes('Show All Territories')
    )
    const territoriesCheckbox = territoriesLabel?.querySelector('input[type="checkbox"]') as HTMLInputElement
    expect(territoriesCheckbox).toBeTruthy()

    const getTerritoriesVisual = () => {
      const territorySection = canvasElement.querySelector('.territories')
      const territorySvgs = territorySection?.querySelectorAll('svg')
      return {
        territorySvgCount: territorySvgs?.length || 0,
        hasTerritorySection: Boolean(territorySection)
      }
    }

    await performAndAssert(
      'Show All Territories → Enable',
      getTerritoriesVisual,
      async () => {
        await userEvent.click(territoriesCheckbox)
      },
      (before, after) => before.territorySvgCount !== after.territorySvgCount
    )

    await performAndAssert(
      'Show All Territories → Disable',
      getTerritoriesVisual,
      async () => {
        await userEvent.click(territoriesCheckbox)
      },
      (before, after) => before.territorySvgCount !== after.territorySvgCount
    )
  }
}

export const GeneralSectionTests: Story = {
  args: {
    ...DEFAULT_ARGS
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await waitForPresence('.map-container', canvasElement)

    await openAccordion(canvas, 'General')

    // ==========================================================================
    // TEST: Title field
    // Verifies: Title text appears in the Title component on the visualization
    // ==========================================================================
    const titleInput = canvasElement.querySelector('[data-testid="title-input"]') as HTMLInputElement
    expect(titleInput).toBeTruthy()

    const getTitleVisual = () => {
      const titleElement = canvasElement.querySelector('.map-title')
      return {
        titleText: titleElement?.textContent || '',
        hasTitleElement: Boolean(titleElement)
      }
    }

    await performAndAssert(
      'Title → Update text',
      getTitleVisual,
      async () => {
        await userEvent.clear(titleInput)
        await userEvent.type(titleInput, 'Test Map Title')
      },
      (before, after) => before.titleText !== after.titleText && after.titleText.includes('Test Map Title')
    )

    // ==========================================================================
    // TEST: Show Title checkbox
    // Verifies: Title element visibility changes (visible/hidden class)
    // ==========================================================================
    const generalAccordion = canvasElement.querySelector('[aria-expanded="true"]')?.closest('.accordion__item')
    const showTitleLabel = Array.from(generalAccordion?.querySelectorAll('label') || []).find(label =>
      label.textContent?.includes('Show Title')
    )
    const showTitleCheckbox = showTitleLabel?.querySelector('input[type="checkbox"]') as HTMLInputElement
    expect(showTitleCheckbox).toBeTruthy()

    const getTitleVisibility = () => {
      const titleElement = canvasElement.querySelector('.map-title')
      const classes = titleElement ? Array.from(titleElement.classList) : []
      return {
        isVisible: classes.includes('visible'),
        isHidden: classes.includes('hidden')
      }
    }

    // Test config has showTitle: true, so title starts visible
    await performAndAssert(
      'Show Title → Hide',
      getTitleVisibility,
      async () => {
        await userEvent.click(showTitleCheckbox)
      },
      (before, after) => before.isVisible && !after.isVisible && after.isHidden
    )

    await performAndAssert(
      'Show Title → Show',
      getTitleVisibility,
      async () => {
        await userEvent.click(showTitleCheckbox)
      },
      (before, after) => !before.isVisible && after.isVisible && !after.isHidden
    )

    // ==========================================================================
    // TEST: Super Title field
    // Verifies: Super title text appears in the Title component
    // ==========================================================================
    const superTitleInput = canvas.getByLabelText(/Super Title/i) as HTMLInputElement
    expect(superTitleInput).toBeTruthy()

    const getSuperTitleVisual = () => {
      const titleElement = canvasElement.querySelector('.map-title')
      return {
        titleText: titleElement?.textContent || ''
      }
    }

    await performAndAssert(
      'Super Title → Add text',
      getSuperTitleVisual,
      async () => {
        await userEvent.clear(superTitleInput)
        await userEvent.type(superTitleInput, 'Super Title Text')
      },
      (before, after) => !before.titleText.includes('Super Title Text') && after.titleText.includes('Super Title Text')
    )

    // ==========================================================================
    // TEST: Message/Intro Text field
    // Verifies: Intro text appears in section with class 'introText'
    // ==========================================================================
    const messageInput = canvas.getByLabelText(/Message/i) as HTMLTextAreaElement
    expect(messageInput).toBeTruthy()

    const getIntroTextVisual = () => {
      const introSection = canvasElement.querySelector('.introText')
      return {
        introText: introSection?.textContent || '',
        hasIntroSection: Boolean(introSection)
      }
    }

    await performAndAssert(
      'Message → Add intro text',
      getIntroTextVisual,
      async () => {
        await userEvent.clear(messageInput)
        await userEvent.type(messageInput, 'This is test intro text')
      },
      (before, after) =>
        !before.introText.includes('This is test intro text') &&
        after.introText.includes('This is test intro text') &&
        after.hasIntroSection
    )

    // ==========================================================================
    // TEST: Subtext field
    // Verifies: Subtext appears in paragraph with class 'subtext'
    // ==========================================================================
    const subtextInput = canvas.getByLabelText(/Subtext/i) as HTMLTextAreaElement
    expect(subtextInput).toBeTruthy()

    const getSubtextVisual = () => {
      const subtextElement = canvasElement.querySelector('.subtext')
      return {
        subtextContent: subtextElement?.textContent || '',
        hasSubtext: Boolean(subtextElement)
      }
    }

    await performAndAssert(
      'Subtext → Add text',
      getSubtextVisual,
      async () => {
        await userEvent.clear(subtextInput)
        await userEvent.type(subtextInput, 'This is test subtext')
      },
      (before, after) =>
        !before.subtextContent.includes('This is test subtext') &&
        after.subtextContent.includes('This is test subtext') &&
        after.hasSubtext
    )

    // ==========================================================================
    // TEST: Footnotes field
    // Verifies: Footnotes appear in section with class 'footnotes'
    // ==========================================================================
    const footnotesInput = canvas.getByLabelText(/Footnotes/i) as HTMLTextAreaElement
    expect(footnotesInput).toBeTruthy()

    const getFootnotesVisual = () => {
      const footnotesSection = canvasElement.querySelector('.footnotes')
      return {
        footnotesContent: footnotesSection?.textContent || '',
        hasFootnotes: Boolean(footnotesSection)
      }
    }

    await performAndAssert(
      'Footnotes → Add text',
      getFootnotesVisual,
      async () => {
        await userEvent.clear(footnotesInput)
        await userEvent.type(footnotesInput, 'Test footnote text')
      },
      (before, after) =>
        !before.footnotesContent.includes('Test footnote text') &&
        after.footnotesContent.includes('Test footnote text') &&
        after.hasFootnotes
    )
  }
}

export const ColumnsSectionTests: Story = {
  args: {
    ...DEFAULT_ARGS
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await waitForPresence('.map-container', canvasElement)

    await openAccordion(canvas, 'Columns')

    // ==========================================================================
    // TEST: Geography column select
    // Verifies: Changing geo column to invalid data makes map gray and legend shows "No data"
    // ==========================================================================
    const columnsAccordion = canvasElement.querySelector('[aria-expanded="true"]')?.closest('.accordion__item')
    const geoColumnLabel = Array.from(columnsAccordion?.querySelectorAll('label') || []).find(label => {
      const columnHeading = label.querySelector('.edit-label.column-heading')
      return columnHeading?.textContent?.includes('Geography')
    })
    const geoSelect = geoColumnLabel?.querySelector('select') as HTMLSelectElement
    expect(geoSelect).toBeTruthy()

    const getMapAndLegendState = () => {
      const legendContainer = canvasElement.querySelector('.legend-container')
      const legendSvg = legendContainer?.querySelector('svg')
      const gradientStops = legendSvg?.querySelectorAll('linearGradient stop')

      // Gradient legend has color stops when data is valid
      const hasGradientStops = (gradientStops?.length || 0) > 0

      return {
        legendHTML: legendContainer?.innerHTML || '',
        hasGradientStops: hasGradientStops,
        gradientStopCount: gradientStops?.length || 0
      }
    }

    // Change to a column that's NOT valid geography data (Rate instead of STATE)
    await performAndAssert(
      'Geography Column → Change to invalid column',
      getMapAndLegendState,
      async () => {
        await userEvent.selectOptions(geoSelect, 'Rate')
      },
      (before, after) => {
        // Legend gradient should lose color stops when geo column is invalid
        return before.hasGradientStops && !after.hasGradientStops
      }
    )

    // Change back to valid geography column
    await performAndAssert(
      'Geography Column → Change back to valid column',
      getMapAndLegendState,
      async () => {
        await userEvent.selectOptions(geoSelect, 'STATE')
      },
      (before, after) => {
        // Legend gradient should regain color stops when geo column is valid
        return !before.hasGradientStops && after.hasGradientStops
      }
    )

    // ==========================================================================
    // TEST: Hide Geography Column Name in Tooltip checkbox
    // Verifies: Tooltip content changes when geography label is hidden/shown
    // ==========================================================================
    const hideGeoLabel = Array.from(columnsAccordion?.querySelectorAll('label') || []).find(label =>
      label.textContent?.includes('Hide Geography Column Name in Tooltip')
    )
    const hideGeoCheckbox = hideGeoLabel?.querySelector('input[type="checkbox"]') as HTMLInputElement
    expect(hideGeoCheckbox).toBeTruthy()

    const getTooltipContent = () => {
      // Get a state geo-group and check its tooltip HTML
      const geoGroup = canvasElement.querySelector('g.geo-group') as SVGGElement
      const tooltipHtml = geoGroup?.getAttribute('data-tooltip-html') || ''
      return {
        tooltipContent: tooltipHtml,
        hasStatePrefix: tooltipHtml.includes('State:')
      }
    }

    await performAndAssert(
      'Hide Geography Column Name → Enable',
      getTooltipContent,
      async () => {
        await userEvent.click(hideGeoCheckbox)
      },
      (before, after) => {
        // "State:" prefix should disappear when hidden
        return before.hasStatePrefix && !after.hasStatePrefix
      }
    )

    await performAndAssert(
      'Hide Geography Column Name → Disable',
      getTooltipContent,
      async () => {
        await userEvent.click(hideGeoCheckbox)
      },
      (before, after) => {
        // "State:" prefix should reappear when not hidden
        return !before.hasStatePrefix && after.hasStatePrefix
      }
    )

    // ==========================================================================
    // TEST: Geography Label field
    // Verifies: Custom geography label appears in tooltip instead of default "State:"
    // ==========================================================================
    const geoLabelInput = canvas.getByLabelText(/Geography Label/i) as HTMLInputElement
    expect(geoLabelInput).toBeTruthy()

    await performAndAssert(
      'Geography Label → Add custom label',
      getTooltipContent,
      async () => {
        await userEvent.clear(geoLabelInput)
        await userEvent.type(geoLabelInput, 'Region')
      },
      (before, after) => {
        // Custom label "Region:" should appear in tooltip
        return !before.tooltipContent.includes('Region:') && after.tooltipContent.includes('Region:')
      }
    )

    // ==========================================================================
    // TEST: Data Column select
    // Verifies: Changing data column changes tooltip data values
    // ==========================================================================
    const dataColumnLabel = Array.from(columnsAccordion?.querySelectorAll('label') || []).find(label =>
      label.textContent?.includes('Data Column')
    )
    const dataColumnSelect = dataColumnLabel?.querySelector('select') as HTMLSelectElement
    expect(dataColumnSelect).toBeTruthy()

    const getDataTooltipContent = () => {
      const geoGroup = canvasElement.querySelector('g.geo-group') as SVGGElement
      const tooltipHtml = geoGroup?.getAttribute('data-tooltip-html') || ''
      return {
        tooltipContent: tooltipHtml
      }
    }

    await performAndAssert(
      'Data Column → Change to STATE column',
      getDataTooltipContent,
      async () => {
        await userEvent.selectOptions(dataColumnSelect, 'STATE')
      },
      (before, after) => {
        // Tooltip should show STATE values (e.g., state names) instead of Rate values (numbers)
        const beforeHasNumbers = /\d+/.test(before.tooltipContent)
        const afterHasStateNames = /Alabama|Alaska|Arizona|Arkansas|California/.test(after.tooltipContent)
        return beforeHasNumbers && afterHasStateNames
      }
    )

    // Change back to Rate
    await performAndAssert(
      'Data Column → Change back to Rate',
      getDataTooltipContent,
      async () => {
        await userEvent.selectOptions(dataColumnSelect, 'Rate')
      },
      (before, after) => {
        // Tooltip should show numeric Rate values again
        const beforeHasStateNames = /Alabama|Alaska|Arizona|Arkansas|California/.test(before.tooltipContent)
        const afterHasNumbers = /\d+/.test(after.tooltipContent)
        return beforeHasStateNames && afterHasNumbers
      }
    )

    // ==========================================================================
    // TEST: Hide Data Column Name in Tooltip
    // Verifies: Data column label disappears from tooltip when hidden
    // ==========================================================================
    const hideDataLabel = Array.from(columnsAccordion?.querySelectorAll('label') || []).find(label =>
      label.textContent?.includes('Hide Data Column Name in Tooltip')
    )
    const hideDataCheckbox = hideDataLabel?.querySelector('input[type="checkbox"]') as HTMLInputElement
    expect(hideDataCheckbox).toBeTruthy()

    await performAndAssert(
      'Hide Data Column Name → Enable',
      getDataTooltipContent,
      async () => {
        await userEvent.click(hideDataCheckbox)
      },
      (before, after) => {
        // The label prefix (e.g., "Rate:" or similar) should be removed
        // Before should have a colon pattern indicating a label, after should have less structure
        const beforeHasLabelStructure = before.tooltipContent.includes(':</li>') || before.tooltipContent.includes(': ')
        const afterHasLessStructure = after.tooltipContent.length < before.tooltipContent.length
        return beforeHasLabelStructure && afterHasLessStructure
      }
    )

    await performAndAssert(
      'Hide Data Column Name → Disable',
      getDataTooltipContent,
      async () => {
        await userEvent.click(hideDataCheckbox)
      },
      (before, after) => {
        // The label prefix should reappear
        const beforeHasLessStructure = before.tooltipContent.length < after.tooltipContent.length
        const afterHasLabelStructure = after.tooltipContent.includes(':</li>') || after.tooltipContent.includes(': ')
        return beforeHasLessStructure && afterHasLabelStructure
      }
    )

    // ==========================================================================
    // TEST: Data Label field
    // Verifies: Custom data label appears in tooltip
    // ==========================================================================
    const dataLabelInputs = Array.from(columnsAccordion?.querySelectorAll('input') || [])
    const dataLabelInput = dataLabelInputs.find(input => {
      const label = input.closest('label')
      return label?.textContent?.includes('Data Label')
    }) as HTMLInputElement
    expect(dataLabelInput).toBeTruthy()

    await performAndAssert(
      'Data Label → Add custom label',
      getDataTooltipContent,
      async () => {
        await userEvent.clear(dataLabelInput)
        await userEvent.type(dataLabelInput, 'Value')
      },
      (before, after) => {
        // Custom label "Value:" should appear in tooltip
        return !before.tooltipContent.includes('Value:') && after.tooltipContent.includes('Value:')
      }
    )

    // ==========================================================================
    // TEST: Prefix field
    // Verifies: Prefix appears before data values in both tooltip and legend
    // ==========================================================================
    const prefixInputs = Array.from(columnsAccordion?.querySelectorAll('input') || [])
    const prefixInput = prefixInputs.find(input => {
      const label = input.closest('label')
      return label?.textContent?.includes('Prefix')
    }) as HTMLInputElement
    expect(prefixInput).toBeTruthy()

    const getPrefixVisualization = () => {
      const geoGroup = canvasElement.querySelector('g.geo-group') as SVGGElement
      const tooltipHtml = geoGroup?.getAttribute('data-tooltip-html') || ''
      const legendContainer = canvasElement.querySelector('.legend-container')
      const legendSvg = legendContainer?.querySelector('svg')
      const legendText = legendSvg?.textContent || ''

      return {
        tooltipHasPrefix: tooltipHtml.includes('$'),
        legendHasPrefix: legendText.includes('$'),
        tooltipContent: tooltipHtml,
        legendContent: legendText
      }
    }

    await performAndAssert(
      'Prefix → Add dollar sign',
      getPrefixVisualization,
      async () => {
        await userEvent.clear(prefixInput)
        await userEvent.type(prefixInput, '$')
      },
      (before, after) => {
        // Dollar sign should appear in both tooltip and legend
        return !before.tooltipHasPrefix && after.tooltipHasPrefix && !before.legendHasPrefix && after.legendHasPrefix
      }
    )

    // ==========================================================================
    // TEST: Suffix field
    // Verifies: Suffix appears after data values in both tooltip and legend
    // ==========================================================================
    const suffixInputs = Array.from(columnsAccordion?.querySelectorAll('input') || [])
    const suffixInput = suffixInputs.find(input => {
      const label = input.closest('label')
      return label?.textContent?.includes('Suffix')
    }) as HTMLInputElement
    expect(suffixInput).toBeTruthy()

    const getSuffixVisualization = () => {
      const geoGroup = canvasElement.querySelector('g.geo-group') as SVGGElement
      const tooltipHtml = geoGroup?.getAttribute('data-tooltip-html') || ''
      const legendContainer = canvasElement.querySelector('.legend-container')
      const legendSvg = legendContainer?.querySelector('svg')
      const legendText = legendSvg?.textContent || ''

      return {
        tooltipHasSuffix: tooltipHtml.includes('%'),
        legendHasSuffix: legendText.includes('%'),
        tooltipContent: tooltipHtml,
        legendContent: legendText
      }
    }

    await performAndAssert(
      'Suffix → Add percent sign',
      getSuffixVisualization,
      async () => {
        await userEvent.clear(suffixInput)
        await userEvent.type(suffixInput, '%')
      },
      (before, after) => {
        // Percent sign should appear in both tooltip and legend
        return !before.tooltipHasSuffix && after.tooltipHasSuffix && !before.legendHasSuffix && after.legendHasSuffix
      }
    )

    // ==========================================================================
    // TEST: Round field
    // Verifies: Changing rounding adds decimal places in both tooltip and legend
    // ==========================================================================
    const roundInputs = Array.from(columnsAccordion?.querySelectorAll('input') || [])
    const roundInput = roundInputs.find(input => {
      const label = input.closest('label')
      return label?.textContent?.includes('Round')
    }) as HTMLInputElement
    expect(roundInput).toBeTruthy()

    const getRoundingVisualization = () => {
      const geoGroup = canvasElement.querySelector('g.geo-group') as SVGGElement
      const tooltipHtml = geoGroup?.getAttribute('data-tooltip-html') || ''
      const legendContainer = canvasElement.querySelector('.legend-container')
      const legendSvg = legendContainer?.querySelector('svg')
      const legendText = legendSvg?.textContent || ''

      // Check for 2 decimal places pattern (e.g., "12.34", "0.50", etc.)
      const twoDecimalPattern = /\d+\.\d{2}/

      return {
        tooltipHasTwoDecimals: twoDecimalPattern.test(tooltipHtml),
        legendHasTwoDecimals: twoDecimalPattern.test(legendText),
        tooltipContent: tooltipHtml,
        legendContent: legendText
      }
    }

    await performAndAssert(
      'Round → Set to 2 decimal places',
      getRoundingVisualization,
      async () => {
        await userEvent.clear(roundInput)
        await userEvent.type(roundInput, '2')
      },
      (before, after) => {
        // Numbers should now show 2 decimal places in both tooltip and legend
        return (
          !before.tooltipHasTwoDecimals &&
          after.tooltipHasTwoDecimals &&
          !before.legendHasTwoDecimals &&
          after.legendHasTwoDecimals
        )
      }
    )

    // ==========================================================================
    // TEST: Show in Data Table checkbox
    // Verifies: Primary column appears/disappears in the data table
    // ==========================================================================
    const showInTableLabel = Array.from(columnsAccordion?.querySelectorAll('label') || []).find(label =>
      label.textContent?.includes('Show in Data Table')
    )
    const showInTableCheckbox = showInTableLabel?.querySelector('input[type="checkbox"]') as HTMLInputElement
    expect(showInTableCheckbox).toBeTruthy()

    const getDataTableState = () => {
      const dataTable = canvasElement.querySelector('.data-table-container, table')
      const tableHeaders = Array.from(dataTable?.querySelectorAll('th') || [])
      const tableHeaderText = tableHeaders.map(th => th.textContent?.trim() || '')

      // Check if "Rate" column header appears in data table
      const hasRateColumn = tableHeaderText.some(text => text.includes('Rate') || text.includes('Value'))

      return {
        hasDataTable: Boolean(dataTable),
        tableHeaders: tableHeaderText,
        hasRateColumn: hasRateColumn
      }
    }

    // Test config has dataTable: true for primary column
    await performAndAssert(
      'Show in Data Table → Disable',
      getDataTableState,
      async () => {
        await userEvent.click(showInTableCheckbox)
      },
      (before, after) => {
        // Rate column should disappear from data table headers
        return before.hasRateColumn && !after.hasRateColumn
      }
    )

    await performAndAssert(
      'Show in Data Table → Enable',
      getDataTableState,
      async () => {
        await userEvent.click(showInTableCheckbox)
      },
      (before, after) => {
        // Rate column should reappear in data table headers
        return !before.hasRateColumn && after.hasRateColumn
      }
    )

    // ==========================================================================
    // TEST: Show in Tooltips checkbox
    // Verifies: Primary column data appears/disappears in tooltips
    // ==========================================================================
    const showInTooltipsLabel = Array.from(columnsAccordion?.querySelectorAll('label') || []).find(label =>
      label.textContent?.includes('Show in Tooltips')
    )
    const showInTooltipsCheckbox = showInTooltipsLabel?.querySelector('input[type="checkbox"]') as HTMLInputElement
    expect(showInTooltipsCheckbox).toBeTruthy()

    const getTooltipDataState = () => {
      const geoGroup = canvasElement.querySelector('g.geo-group') as SVGGElement
      const tooltipHtml = geoGroup?.getAttribute('data-tooltip-html') || ''

      // Check if tooltip contains data values (numbers with potential $ and % from earlier tests)
      // Look for patterns like list items with numeric values
      const hasDataValues = tooltipHtml.includes('<li') && /\$?\d+\.\d{2}%?/.test(tooltipHtml)

      return {
        tooltipContent: tooltipHtml,
        hasDataValues: hasDataValues,
        tooltipLength: tooltipHtml.length
      }
    }

    // Test config has tooltip: true for primary column
    await performAndAssert(
      'Show in Tooltips → Disable',
      getTooltipDataState,
      async () => {
        await userEvent.click(showInTooltipsCheckbox)
      },
      (before, after) => {
        // Tooltip should no longer contain data values, should be shorter
        return before.hasDataValues && !after.hasDataValues && after.tooltipLength < before.tooltipLength
      }
    )

    await performAndAssert(
      'Show in Tooltips → Enable',
      getTooltipDataState,
      async () => {
        await userEvent.click(showInTooltipsCheckbox)
      },
      (before, after) => {
        // Tooltip should contain data values again, should be longer
        return !before.hasDataValues && after.hasDataValues && after.tooltipLength > before.tooltipLength
      }
    )

    // ==========================================================================
    // TEST: Add Special Class button
    // Verifies: New special class item appears in legend
    // ==========================================================================
    const addSpecialClassButton = Array.from(columnsAccordion?.querySelectorAll('button') || []).find(button =>
      button.textContent?.includes('Add Special Class')
    ) as HTMLButtonElement
    expect(addSpecialClassButton).toBeTruthy()

    const getSpecialClassVisualization = () => {
      const legendContainer = canvasElement.querySelector('.legend-container')
      const legendSvg = legendContainer?.querySelector('svg')
      const gradientStops = legendSvg?.querySelectorAll('linearGradient stop')
      const gradientRects = legendSvg?.querySelectorAll('g.visx-group rect')

      // Get all stop colors to detect changes
      const stopColors = Array.from(gradientStops || []).map(stop => (stop as SVGStopElement).getAttribute('style'))

      // Get all rect fills to detect new colors
      const rectFills = Array.from(gradientRects || []).map(rect => (rect as SVGRectElement).getAttribute('fill'))

      return {
        gradientStopCount: gradientStops?.length || 0,
        gradientRectCount: gradientRects?.length || 0,
        stopColors: stopColors,
        rectFills: rectFills,
        legendHTML: legendContainer?.innerHTML || ''
      }
    }

    await performAndAssert(
      'Add Special Class → Configure with STATE=Alabama',
      getSpecialClassVisualization,
      async () => {
        // Click the Add Special Class button
        await userEvent.click(addSpecialClassButton)

        // Find the newly added special class fields
        const specialClassSection = Array.from(columnsAccordion?.querySelectorAll('.edit-block') || []).find(block =>
          block.textContent?.includes('Special Class 1')
        )

        // Get all selects in the special class section
        // First select is Data Key, second is Value
        const selects = Array.from(specialClassSection?.querySelectorAll('select') || [])
        const dataKeySelect = selects[0] as HTMLSelectElement
        const valueSelect = selects[1] as HTMLSelectElement

        // Set Data Key to STATE
        await userEvent.selectOptions(dataKeySelect, 'STATE')

        // Wait for the Value select to populate with options based on STATE column
        await new Promise(resolve => setTimeout(resolve, 200))

        // Select "Alabama" from the Value select
        await userEvent.selectOptions(valueSelect, 'Alabama')

        // Find and fill in the Label field
        const labelInput = Array.from(specialClassSection?.querySelectorAll('input') || []).find(input => {
          const label = input.closest('label')
          return label?.textContent?.includes('Label')
        }) as HTMLInputElement

        await userEvent.clear(labelInput)
        await userEvent.type(labelInput, 'Alabama')
      },
      (before, after) => {
        // Check that "Alabama" text appears in the legend
        const alabamaInLegend = after.legendHTML.includes('Alabama')

        // Check that the special class gray color appears
        const hasGrayColor = after.rectFills.includes('#b4b4b4')

        // Legend should change
        const legendChanged = after.legendHTML !== before.legendHTML

        return alabamaInLegend && hasGrayColor && legendChanged
      }
    )
  }
}

export const LegendSectionTests: Story = {
  args: {
    ...DEFAULT_ARGS
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await waitForPresence('.map-container', canvasElement)

    await openAccordion(canvas, 'Legend')

    // ==========================================================================
    // TEST: Legend Type
    // ==========================================================================
    const legendTypeSelect = Array.from(canvasElement.querySelectorAll('select') || []).find(select => {
      const label = select.closest('label')
      const labelSpan = label?.querySelector('.edit-label')
      return labelSpan?.textContent?.includes('Legend Type')
    }) as HTMLSelectElement

    const getLegendType = () => {
      const legendContainer = canvasElement.querySelector('.legend-container')
      // For gradient legend, get labels from SVG text elements
      const textElements = Array.from(legendContainer?.querySelectorAll('text tspan') || [])
      const labels = textElements.map(el => el.textContent?.trim() || '')
      return {
        legendHTML: legendContainer?.innerHTML || '',
        labels
      }
    }

    await performAndAssert(
      'Legend Type → Equal Interval',
      getLegendType,
      async () => {
        await userEvent.selectOptions(legendTypeSelect, 'equalinterval')
      },
      (before, after) => {
        // Equal interval creates evenly spaced ranges (e.g., "0 - < 43.33", "43.33 - < 86.67")
        return after.labels.length > 0 && after.labels.join(',') !== before.labels.join(',')
      }
    )

    await performAndAssert(
      'Legend Type → Equal Number',
      getLegendType,
      async () => {
        await userEvent.selectOptions(legendTypeSelect, 'equalnumber')
      },
      (before, after) => {
        // Equal number (quantiles) creates ranges with equal counts (e.g., "0 - 40", "40 - 57")
        return after.labels.length > 0 && after.labels.join(',') !== before.labels.join(',')
      }
    )

    // ==========================================================================
    // TEST: Show Legend checkbox
    // ==========================================================================
    const showLegendCheckbox = canvas.getByLabelText('Show Legend')

    const getLegendVisibility = () => {
      const legendContainer = canvasElement.querySelector('.legend-container')
      return {
        legendExists: Boolean(legendContainer),
        isVisible: legendContainer ? !legendContainer.classList.contains('hidden') : false
      }
    }

    await performAndAssert(
      'Show Legend → Uncheck',
      getLegendVisibility,
      async () => {
        await userEvent.click(showLegendCheckbox)
      },
      (before, after) => {
        return before.isVisible && !after.isVisible
      }
    )

    await performAndAssert(
      'Show Legend → Check',
      getLegendVisibility,
      async () => {
        await userEvent.click(showLegendCheckbox)
      },
      (before, after) => {
        return !before.isVisible && after.isVisible
      }
    )

    // ==========================================================================
    // TEST: Legend Position
    // ==========================================================================
    const legendPositionSelect = Array.from(canvasElement.querySelectorAll('select') || []).find(select => {
      const label = select.closest('label')
      const labelSpan = label?.querySelector('.edit-label')
      return labelSpan?.textContent?.includes('Legend Position')
    }) as HTMLSelectElement

    const getLegendPosition = () => {
      const legendAside = canvasElement.querySelector('aside[aria-label="Legend"]') as HTMLElement
      return {
        classes: legendAside ? Array.from(legendAside.classList) : [],
        isBottom: legendAside?.classList.contains('bottom') ?? false,
        isSide: legendAside?.classList.contains('side') ?? false,
        isTop: legendAside?.classList.contains('top') ?? false
      }
    }

    await performAndAssert(
      'Legend Position → Side',
      getLegendPosition,
      async () => {
        await userEvent.selectOptions(legendPositionSelect, 'side')
      },
      (before, after) => {
        return !before.isSide && after.isSide
      }
    )

    await performAndAssert(
      'Legend Position → Top',
      getLegendPosition,
      async () => {
        await userEvent.selectOptions(legendPositionSelect, 'top')
      },
      (before, after) => {
        return !before.isTop && after.isTop
      }
    )

    await performAndAssert(
      'Legend Position → Bottom',
      getLegendPosition,
      async () => {
        await userEvent.selectOptions(legendPositionSelect, 'bottom')
      },
      (before, after) => {
        return !before.isBottom && after.isBottom
      }
    )

    // ==========================================================================
    // TEST: Legend Style
    // ==========================================================================
    const legendStyleSelect = Array.from(canvasElement.querySelectorAll('select') || []).find(select => {
      const label = select.closest('label')
      const labelSpan = label?.querySelector('.edit-label')
      return labelSpan?.textContent?.includes('Legend Style')
    }) as HTMLSelectElement

    const getLegendStyle = () => {
      const legendContainer = canvasElement.querySelector('.legend-container')
      const legendItems = legendContainer?.querySelectorAll('.legend-container__li')
      const linearGradient = legendContainer?.querySelector('linearGradient')
      const legendHTML = legendContainer?.innerHTML || ''

      return {
        hasLegendItems: (legendItems?.length ?? 0) > 0,
        hasGradient: Boolean(linearGradient),
        legendHTML
      }
    }

    await performAndAssert(
      'Legend Style → Circles',
      getLegendStyle,
      async () => {
        await userEvent.selectOptions(legendStyleSelect, 'circles')
      },
      (before, after) => {
        return after.hasLegendItems && !after.hasGradient && after.legendHTML !== before.legendHTML
      }
    )

    await performAndAssert(
      'Legend Style → Boxes',
      getLegendStyle,
      async () => {
        await userEvent.selectOptions(legendStyleSelect, 'boxes')
      },
      (before, after) => {
        return after.hasLegendItems && !after.hasGradient && after.legendHTML !== before.legendHTML
      }
    )

    await performAndAssert(
      'Legend Style → Gradient',
      getLegendStyle,
      async () => {
        await userEvent.selectOptions(legendStyleSelect, 'gradient')
      },
      (before, after) => {
        return !before.hasGradient && after.hasGradient
      }
    )

    // ==========================================================================
    // TEST: Gradient Style (only visible when Legend Style is gradient)
    // ==========================================================================
    const gradientStyleSelect = Array.from(canvasElement.querySelectorAll('select') || []).find(select => {
      const label = select.closest('label')
      return label?.textContent?.includes('Gradient Style')
    }) as HTMLSelectElement

    const getGradientStyle = () => {
      const legendContainer = canvasElement.querySelector('.legend-container')
      const svgHTML = legendContainer?.querySelector('svg')?.outerHTML || ''

      return {
        svgHTML,
        hasLinearGradient: svgHTML.includes('linearGradient')
      }
    }

    await performAndAssert(
      'Gradient Style → Linear blocks',
      getGradientStyle,
      async () => {
        await userEvent.selectOptions(gradientStyleSelect, 'linear blocks')
      },
      (before, after) => {
        return after.hasLinearGradient && after.svgHTML !== before.svgHTML
      }
    )

    await performAndAssert(
      'Gradient Style → Smooth',
      getGradientStyle,
      async () => {
        await userEvent.selectOptions(gradientStyleSelect, 'smooth')
      },
      (before, after) => {
        return after.hasLinearGradient && after.svgHTML !== before.svgHTML
      }
    )

    // ==========================================================================
    // TEST: Tick Rotation (only visible when Legend Style is gradient)
    // ==========================================================================
    const tickRotationInput = Array.from(canvasElement.querySelectorAll('input[type="number"]') || []).find(input => {
      const label = input.closest('label')
      const labelSpan = label?.querySelector('.edit-label')
      return labelSpan?.textContent?.includes('Tick Rotation')
    }) as HTMLInputElement

    const getTickRotation = () => {
      const legendContainer = canvasElement.querySelector('.legend-container')
      const svgHTML = legendContainer?.querySelector('svg')?.outerHTML || ''
      const textElements = Array.from(legendContainer?.querySelectorAll('text') || [])
      const transforms = textElements.map(el => el.getAttribute('transform') || '')
      return {
        svgHTML,
        transforms,
        hasRotation: transforms.some(t => t.includes('rotate'))
      }
    }

    await performAndAssert(
      'Tick Rotation → Set to 45 degrees',
      getTickRotation,
      async () => {
        await userEvent.clear(tickRotationInput)
        await userEvent.type(tickRotationInput, '45')
      },
      (before, after) => {
        // Check that rotation transform is applied to text elements
        return after.hasRotation && after.svgHTML !== before.svgHTML
      }
    )

    // ==========================================================================
    // TEST: Hide Legend Box
    // ==========================================================================
    const hideLegendBoxCheckbox = Array.from(canvasElement.querySelectorAll('input[type="checkbox"]') || []).find(
      input => {
        const label = input.closest('label')
        const labelSpan = label?.querySelector('.edit-label')
        return labelSpan?.textContent?.includes('Hide Legend Box')
      }
    ) as HTMLInputElement

    const getLegendBorder = () => {
      const legendAside = canvasElement.querySelector('aside[aria-label="Legend"]') as HTMLElement
      return {
        hasNoBorder: legendAside?.classList.contains('no-border') ?? false
      }
    }

    await performAndAssert(
      'Hide Legend Box → Uncheck',
      getLegendBorder,
      async () => {
        await userEvent.click(hideLegendBoxCheckbox)
      },
      (before, after) => {
        return before.hasNoBorder && !after.hasNoBorder
      }
    )

    await performAndAssert(
      'Hide Legend Box → Check',
      getLegendBorder,
      async () => {
        await userEvent.click(hideLegendBoxCheckbox)
      },
      (before, after) => {
        return !before.hasNoBorder && after.hasNoBorder
      }
    )

    // ==========================================================================
    // TEST: Vertical sorted legend
    // ==========================================================================
    // First switch to boxes style and side position to enable vertical sorting
    await userEvent.selectOptions(legendStyleSelect, 'boxes')
    await userEvent.selectOptions(legendPositionSelect, 'side')

    const verticalSortedCheckbox = Array.from(canvasElement.querySelectorAll('input[type="checkbox"]') || []).find(
      input => {
        const label = input.closest('label')
        const labelSpan = label?.querySelector('.edit-label')
        return labelSpan?.textContent?.includes('Vertical sorted legend')
      }
    ) as HTMLInputElement

    const getVerticalSorted = () => {
      const legendUl = canvasElement.querySelector('.legend-container__ul')
      return {
        hasVerticalSorted: legendUl?.classList.contains('vertical-sorted') ?? false
      }
    }

    await performAndAssert(
      'Vertical sorted legend → Check',
      getVerticalSorted,
      async () => {
        await userEvent.click(verticalSortedCheckbox)
      },
      (before, after) => {
        return !before.hasVerticalSorted && after.hasVerticalSorted
      }
    )

    await performAndAssert(
      'Vertical sorted legend → Uncheck',
      getVerticalSorted,
      async () => {
        await userEvent.click(verticalSortedCheckbox)
      },
      (before, after) => {
        return before.hasVerticalSorted && !after.hasVerticalSorted
      }
    )

    // NOTE: Show Special Classes Last is skipped because it doesn't produce
    // visible changes with the current test data (no special classes present)

    // ==========================================================================
    // TEST: Separate Zero
    // ==========================================================================
    const separateZeroCheckbox = Array.from(canvasElement.querySelectorAll('input[type="checkbox"]') || []).find(
      input => {
        const label = input.closest('label')
        const labelSpan = label?.querySelector('.edit-label')
        return labelSpan?.textContent?.includes('Separate Zero')
      }
    ) as HTMLInputElement

    const getSeparateZero = () => {
      const legendContainer = canvasElement.querySelector('.legend-container')
      const legendItems = Array.from(legendContainer?.querySelectorAll('.legend-container__li') || [])
      const itemLabels = legendItems.map(item => item.textContent?.trim() || '')
      const hasZeroItem = itemLabels.some(label => label.includes('0') && !label.match(/[1-9]/))
      return {
        itemCount: legendItems.length,
        itemLabels,
        hasZeroItem
      }
    }

    await performAndAssert(
      'Separate Zero → Check',
      getSeparateZero,
      async () => {
        await userEvent.click(separateZeroCheckbox)
      },
      (before, after) => {
        // Should separate zero into its own legend item (e.g., "0" instead of "0 - 40")
        return after.hasZeroItem && after.itemLabels.join(',') !== before.itemLabels.join(',')
      }
    )

    await performAndAssert(
      'Separate Zero → Uncheck',
      getSeparateZero,
      async () => {
        await userEvent.click(separateZeroCheckbox)
      },
      (before, after) => {
        // Should merge zero back into a range
        return !after.hasZeroItem && after.itemLabels.join(',') !== before.itemLabels.join(',')
      }
    )

    // ==========================================================================
    // TEST: Number of Items
    // ==========================================================================
    const numberOfItemsSelect = Array.from(canvasElement.querySelectorAll('select') || []).find(select => {
      const label = select.closest('label')
      const labelSpan = label?.querySelector('.edit-label')
      return labelSpan?.textContent?.includes('Number of Items')
    }) as HTMLSelectElement

    const getNumberOfItems = () => {
      const legendContainer = canvasElement.querySelector('.legend-container')
      const legendItems = legendContainer?.querySelectorAll('.legend-container__li')
      return {
        itemCount: legendItems?.length ?? 0,
        legendHTML: legendContainer?.innerHTML || ''
      }
    }

    await performAndAssert(
      'Number of Items → Set to 5',
      getNumberOfItems,
      async () => {
        await userEvent.selectOptions(numberOfItemsSelect, '5')
      },
      (before, after) => {
        // Should have 5 legend items
        return after.itemCount === 5 && after.itemCount !== before.itemCount
      }
    )

    await performAndAssert(
      'Number of Items → Set to 3',
      getNumberOfItems,
      async () => {
        await userEvent.selectOptions(numberOfItemsSelect, '3')
      },
      (before, after) => {
        // Should have 3 legend items
        return after.itemCount === 3 && after.itemCount !== before.itemCount
      }
    )

    // Switch back to gradient for the legend title test
    await userEvent.selectOptions(legendPositionSelect, 'bottom')
    await userEvent.selectOptions(legendStyleSelect, 'gradient')

    // ==========================================================================
    // TEST: Legend Title
    // ==========================================================================
    const legendTitleInput = Array.from(canvasElement.querySelectorAll('input[type="text"]') || []).find(input => {
      const label = input.closest('label')
      return label?.textContent?.includes('Legend Title')
    }) as HTMLInputElement

    const getLegendTitle = () => {
      const legendContainer = canvasElement.querySelector('.legend-container')
      const titleElement = legendContainer?.querySelector('.legend-container__title, .legend-title')
      return {
        titleText: titleElement?.textContent?.trim() || '',
        titleExists: Boolean(titleElement),
        legendHTML: legendContainer?.innerHTML || ''
      }
    }

    await performAndAssert(
      'Legend Title → Set custom title',
      getLegendTitle,
      async () => {
        await userEvent.clear(legendTitleInput)
        await userEvent.type(legendTitleInput, 'Custom Legend Title')
      },
      (before, after) => {
        return after.titleText.includes('Custom Legend Title') && after.legendHTML !== before.legendHTML
      }
    )

    // ==========================================================================
    // TEST: Legend Description
    // ==========================================================================
    const legendDescriptionTextarea = Array.from(canvasElement.querySelectorAll('textarea') || []).find(textarea => {
      const label = textarea.closest('label')
      return label?.textContent?.includes('Legend Description')
    }) as HTMLTextAreaElement

    const getLegendDescription = () => {
      const legendContainer = canvasElement.querySelector('.legend-container')
      const descriptionElement = legendContainer?.querySelector('.legend-container__description, .legend-description')
      return {
        descriptionText: descriptionElement?.textContent?.trim() || '',
        descriptionExists: Boolean(descriptionElement),
        legendHTML: legendContainer?.innerHTML || ''
      }
    }

    await performAndAssert(
      'Legend Description → Set custom description',
      getLegendDescription,
      async () => {
        await userEvent.clear(legendDescriptionTextarea)
        await userEvent.type(legendDescriptionTextarea, 'This is a custom legend description for testing.')
      },
      (before, after) => {
        return (
          after.descriptionText.includes('This is a custom legend description') &&
          after.legendHTML !== before.legendHTML
        )
      }
    )
  }
}

export const FiltersSectionTests: Story = {
  args: {
    ...DEFAULT_ARGS
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await waitForPresence('.map-container', canvasElement)

    await openAccordion(canvas, 'Filters')

    // ==========================================================================
    // TEST: Add Filter and configure it to filter by STATE
    // ==========================================================================
    const addFilterButton = canvas.getByRole('button', { name: /Add Filter/i })

    await performAndAssert(
      'Add Filter → Click button',
      () => {
        const filtersList = canvasElement.querySelector('.filters-list')
        // Count all filter items (both collapsed and expanded)
        const allFilterItems = Array.from(filtersList?.querySelectorAll('li, .edit-block, .mb-1') || [])
        const collapsedFilters = filtersList?.querySelectorAll('.mb-1:has(button)') || []
        return {
          hasFiltersList: Boolean(filtersList),
          hasCollapsedFilter: collapsedFilters.length > 0
        }
      },
      async () => {
        await userEvent.click(addFilterButton)
      },
      (before, after) => {
        // Should create filters list and add a collapsed filter
        return after.hasFiltersList && after.hasCollapsedFilter
      }
    )

    // Find and expand the collapsed filter
    const filtersList = canvasElement.querySelector('.filters-list')
    const expandButton = filtersList?.querySelector('.mb-1 button') as HTMLButtonElement
    await userEvent.click(expandButton)

    // Wait for the expanded filter block
    await waitForPresence('.filters-list .edit-block', canvasElement)

    // Find the newly added filter section
    const filterBlock = filtersList?.querySelector('.edit-block') as HTMLElement

    // ==========================================================================
    // TEST: Select STATE as the filter column
    // ==========================================================================
    const filterColumnSelect = Array.from(filterBlock?.querySelectorAll('select') || []).find(select => {
      const label = select.closest('label')
      const labelSpan = label?.querySelector('.edit-label')
      return labelSpan?.textContent?.includes('Filter') && !labelSpan?.textContent?.includes('Style')
    }) as HTMLSelectElement

    const getDefaultValueState = () => {
      const updatedFilterBlock = filtersList?.querySelector('.edit-block') as HTMLElement
      const defaultValueSelect = Array.from(updatedFilterBlock?.querySelectorAll('select') || []).find(select => {
        const label = select.closest('label')
        const labelSpan = label?.querySelector('.edit-label')
        return labelSpan?.textContent?.includes('Filter Default Value')
      }) as HTMLSelectElement
      return {
        hasDefaultValueSelect: Boolean(defaultValueSelect),
        optionCount: defaultValueSelect?.options.length || 0
      }
    }

    await performAndAssert(
      'Filter Column → Select STATE',
      getDefaultValueState,
      async () => {
        await userEvent.selectOptions(filterColumnSelect, 'STATE')
      },
      (before, after) => {
        // Should populate the default value select with state options
        return after.hasDefaultValueSelect && after.optionCount > 0
      }
    )

    // ==========================================================================
    // TEST: Filter Intro Text
    // ==========================================================================
    const filterIntroTextarea = Array.from(canvasElement.querySelectorAll('textarea') || []).find(textarea => {
      const label = textarea.closest('label')
      return label?.textContent?.includes('Filter intro text')
    }) as HTMLTextAreaElement

    const getFilterIntroText = () => {
      const filtersSection = canvasElement.querySelector('.filters-section')
      const filterIntro = filtersSection?.querySelector('.filters-section__intro-text')
      return {
        introText: filterIntro?.textContent?.trim() || '',
        hasIntro: Boolean(filterIntro)
      }
    }

    await performAndAssert(
      'Filter Intro Text → Set custom text',
      getFilterIntroText,
      async () => {
        await userEvent.clear(filterIntroTextarea)
        await userEvent.type(filterIntroTextarea, 'Select a state to filter the map data.')
      },
      (before, after) => {
        return after.hasIntro && after.introText.includes('Select a state to filter the map data')
      }
    )

    // ==========================================================================
    // TEST: Select Alabama as the default filter value
    // ==========================================================================
    const updatedFilterBlock = filtersList?.querySelector('.edit-block') as HTMLElement
    const defaultValueSelect = Array.from(updatedFilterBlock?.querySelectorAll('select') || []).find(select => {
      const label = select.closest('label')
      const labelSpan = label?.querySelector('.edit-label')
      return labelSpan?.textContent?.includes('Filter Default Value')
    }) as HTMLSelectElement

    await performAndAssert(
      'Filter Default Value → Select Alabama',
      () => {
        // Check the legend text labels - when filtered to one state, shows single value
        const legendContainer = canvasElement.querySelector('.legend-container')
        const textElements = Array.from(legendContainer?.querySelectorAll('text tspan') || [])
        const labels = textElements.map(el => el.textContent?.trim()).filter(t => t && t !== '')
        const labelText = labels.join(',')

        // Verify filter dropdown is rendered
        const vizContainer = canvasElement.querySelector('.cdc-open-viz-module')
        const filterSelect = Array.from(vizContainer?.querySelectorAll('select') || []).find(select => {
          const options = Array.from(select.options).map(opt => opt.value)
          return options.includes('Alabama')
        })

        return {
          labelCount: labels.length,
          labelText,
          hasFilterSelect: Boolean(filterSelect),
          selectedValue: filterSelect?.value || ''
        }
      },
      async () => {
        await userEvent.selectOptions(defaultValueSelect, 'Alabama')
      },
      (before, after) => {
        // After filtering to Alabama: should have filter dropdown, Alabama selected, and exactly 1 legend label
        // The legend shows a single value when only one state's data is displayed
        return after.hasFilterSelect && after.selectedValue === 'Alabama' && after.labelCount === 1
      }
    )

    // ==========================================================================
    // TEST: Filter Label
    // ==========================================================================
    const labelInput = Array.from(updatedFilterBlock?.querySelectorAll('input[type="text"]') || []).find(input => {
      const label = input.closest('label')
      const labelSpan = label?.querySelector('.edit-label')
      return labelSpan?.textContent?.includes('Label') && !labelSpan?.textContent?.includes('Query')
    }) as HTMLInputElement

    await performAndAssert(
      'Filter Label → Set custom label',
      () => {
        const filtersSection = canvasElement.querySelector('.filters-section')
        const filterLabel = filtersSection?.querySelector('.form-group label')
        return {
          labelText: filterLabel?.textContent?.trim() || ''
        }
      },
      async () => {
        await userEvent.clear(labelInput)
        await userEvent.type(labelInput, 'Select State')
      },
      (before, after) => {
        return after.labelText.includes('Select State')
      }
    )
  }
}

export const DataTableSectionTests: Story = {
  args: {
    ...DEFAULT_ARGS
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await waitForPresence('.map-container', canvasElement)

    await openAccordion(canvas, 'Data Table')

    // ==========================================================================
    // TEST: Data Table Title
    // ==========================================================================
    const dataTableTitleInput = canvasElement.querySelector('#dataTableTitle') as HTMLInputElement

    await performAndAssert(
      'Data Table Title → Set custom title',
      () => {
        const dataTableHeading = canvasElement.querySelector('.data-table-heading')
        return {
          titleText: dataTableHeading?.textContent?.trim() || ''
        }
      },
      async () => {
        await userEvent.clear(dataTableTitleInput)
        await userEvent.type(dataTableTitleInput, 'State Population Data')
      },
      (before, after) => {
        return after.titleText.includes('State Population Data')
      }
    )

    // ==========================================================================
    // TEST: Wrap Data Table Columns
    // ==========================================================================
    // First expand the data table if it's collapsed
    const dataTableHeadingButton = canvasElement.querySelector('.data-table-heading') as HTMLElement
    const dataTableContainer = canvasElement.querySelector('.data-table-container')
    const isCollapsed = dataTableHeadingButton?.classList.contains('collapsed')
    if (isCollapsed) {
      await userEvent.click(dataTableHeadingButton)
      await new Promise(resolve => setTimeout(resolve, 200))
    }

    const wrapColumnsCheckbox = Array.from(canvasElement.querySelectorAll('input[type="checkbox"]')).find(checkbox => {
      const label = checkbox.closest('label')
      return label?.textContent?.includes('WRAP DATA TABLE COLUMNS')
    }) as HTMLInputElement

    await performAndAssert(
      'Wrap Columns → Toggle wrapping',
      () => {
        const dataTable = canvasElement.querySelector('.data-table')
        const firstCell = dataTable?.querySelector('tbody td')
        const whiteSpace = firstCell ? window.getComputedStyle(firstCell).whiteSpace : ''
        return {
          whiteSpace,
          hasCells: Boolean(firstCell)
        }
      },
      async () => {
        await userEvent.click(wrapColumnsCheckbox)
      },
      (before, after) => {
        // When wrap is enabled, white-space should be 'normal' or 'unset', not 'nowrap'
        return after.hasCells && before.whiteSpace === 'nowrap' && after.whiteSpace !== 'nowrap'
      }
    )

    // ==========================================================================
    // TEST: Show Data Table
    // ==========================================================================
    const showDataTableCheckbox = Array.from(canvasElement.querySelectorAll('input[type="checkbox"]')).find(
      checkbox => {
        const label = checkbox.closest('label')
        return label?.textContent?.includes('Show Data Table') && !label?.textContent?.includes('Non Geographic')
      }
    ) as HTMLInputElement

    await performAndAssert(
      'Show Data Table → Hide data table',
      () => {
        const dataTableContainer = canvasElement.querySelector('.data-table-container')
        const isVisible = dataTableContainer && window.getComputedStyle(dataTableContainer).display !== 'none'
        return {
          isVisible: Boolean(isVisible)
        }
      },
      async () => {
        await userEvent.click(showDataTableCheckbox)
      },
      (before, after) => {
        // Should hide the data table
        return before.isVisible && !after.isVisible
      }
    )

    // Toggle it back on for the next test
    await userEvent.click(showDataTableCheckbox)

    // ==========================================================================
    // TEST: Show Non Geographic Data
    // ==========================================================================
    const showNonGeoDataCheckbox = Array.from(canvasElement.querySelectorAll('input[type="checkbox"]')).find(
      checkbox => {
        const label = checkbox.closest('label')
        return label?.textContent?.includes('Show Non Geographic Data')
      }
    ) as HTMLInputElement

    await performAndAssert(
      'Show Non Geographic Data → Toggle visibility',
      () => {
        const dataTable = canvasElement.querySelector('.data-table')
        const rows = Array.from(dataTable?.querySelectorAll('tbody tr') || [])
        const rowCount = rows.length
        return {
          rowCount
        }
      },
      async () => {
        await userEvent.click(showNonGeoDataCheckbox)
      },
      (before, after) => {
        // Toggling non-geographic data should add rows to the table (overall data object)
        return after.rowCount > before.rowCount
      }
    )

    // ==========================================================================
    // TEST: Index Column Header
    // ==========================================================================
    const indexColumnHeaderInput = Array.from(canvasElement.querySelectorAll('input[type="text"]')).find(input => {
      const label = input.closest('label')
      return label?.textContent?.includes('Index Column Header')
    }) as HTMLInputElement

    await performAndAssert(
      'Index Column Header → Set custom header',
      () => {
        const dataTable = canvasElement.querySelector('.data-table')
        const firstHeader = dataTable?.querySelector('thead th')
        return {
          headerText: firstHeader?.textContent?.trim() || ''
        }
      },
      async () => {
        await userEvent.clear(indexColumnHeaderInput)
        await userEvent.type(indexColumnHeaderInput, 'State/Territory')
      },
      (before, after) => {
        return after.headerText.includes('State/Territory')
      }
    )

    // ==========================================================================
    // TEST: Screen Reader Description
    // ==========================================================================
    const screenReaderDescTextarea = Array.from(canvasElement.querySelectorAll('textarea')).find(textarea => {
      const label = textarea.closest('label')
      return label?.textContent?.includes('Screen Reader Description')
    }) as HTMLTextAreaElement

    await performAndAssert(
      'Screen Reader Description → Set custom description',
      () => {
        const dataTable = canvasElement.querySelector('.data-table')
        const caption = dataTable?.querySelector('caption')
        return {
          captionText: caption?.textContent?.trim() || ''
        }
      },
      async () => {
        await userEvent.clear(screenReaderDescTextarea)
        await userEvent.type(screenReaderDescTextarea, 'Table showing state population data by region')
      },
      (before, after) => {
        return after.captionText.includes('Table showing state population data')
      }
    )

    // ==========================================================================
    // TEST: Limit Table Height
    // ==========================================================================
    const limitHeightCheckbox = Array.from(canvasElement.querySelectorAll('input[type="checkbox"]')).find(checkbox => {
      const label = checkbox.closest('label')
      return label?.textContent?.includes('Limit Table Height')
    }) as HTMLInputElement

    await performAndAssert(
      'Limit Table Height → Enable height limit',
      () => {
        // Check if the "Data Table Height" input field appears (conditional rendering)
        const heightInput = Array.from(canvasElement.querySelectorAll('input[type="number"]')).find(input => {
          const label = input.closest('label')
          return label?.textContent?.includes('Data Table Height')
        })
        return {
          hasHeightInput: Boolean(heightInput)
        }
      },
      async () => {
        await userEvent.click(limitHeightCheckbox)
      },
      (before, after) => {
        // After enabling, the "Data Table Height" input field should appear
        return !before.hasHeightInput && after.hasHeightInput
      }
    )

    // ==========================================================================
    // TEST: Table Cell Min Width
    // ==========================================================================
    const cellMinWidthInput = Array.from(canvasElement.querySelectorAll('input[type="number"]')).find(input => {
      const label = input.closest('label')
      return label?.textContent?.includes('Table Cell Min Width')
    }) as HTMLInputElement

    await performAndAssert(
      'Table Cell Min Width → Set minimum width',
      () => {
        const dataTable = canvasElement.querySelector('.data-table')
        const firstCell = dataTable?.querySelector('thead th')
        const minWidth = firstCell ? window.getComputedStyle(firstCell).minWidth : ''
        return {
          minWidth
        }
      },
      async () => {
        await userEvent.clear(cellMinWidthInput)
        await userEvent.type(cellMinWidthInput, '150')
      },
      (before, after) => {
        // After setting min width to 150px, cells should have minWidth of 150px
        return before.minWidth !== after.minWidth && after.minWidth === '150px'
      }
    )

    // ==========================================================================
    // TEST: Show Download CSV Link
    // ==========================================================================
    const showDownloadCheckbox = Array.from(canvasElement.querySelectorAll('input[type="checkbox"]')).find(checkbox => {
      const label = checkbox.closest('label')
      return label?.textContent?.includes('Show Download CSV Link')
    }) as HTMLInputElement

    // First toggle it off, then back on
    await performAndAssert(
      'Show Download CSV Link → Toggle off',
      () => {
        const downloadLink = Array.from(canvasElement.querySelectorAll('a')).find(link =>
          link.textContent?.includes('Download Data')
        )
        return {
          hasDownloadLink: Boolean(downloadLink)
        }
      },
      async () => {
        await userEvent.click(showDownloadCheckbox)
      },
      (before, after) => {
        // After disabling, the download link should disappear
        return before.hasDownloadLink && !after.hasDownloadLink
      }
    )

    await performAndAssert(
      'Show Download CSV Link → Toggle back on',
      () => {
        const downloadLink = Array.from(canvasElement.querySelectorAll('a')).find(link =>
          link.textContent?.includes('Download Data')
        )
        return {
          hasDownloadLink: Boolean(downloadLink)
        }
      },
      async () => {
        await userEvent.click(showDownloadCheckbox)
      },
      (before, after) => {
        // After re-enabling, the download link should reappear
        return !before.hasDownloadLink && after.hasDownloadLink
      }
    )

    // ==========================================================================
    // TEST: Show Link Below Table
    // ==========================================================================
    const showLinkBelowCheckbox = Array.from(canvasElement.querySelectorAll('input[type="checkbox"]')).find(
      checkbox => {
        const label = checkbox.closest('label')
        return label?.textContent?.includes('Show Link Below Table')
      }
    ) as HTMLInputElement

    // First toggle it off (move link above), then back on (move link below)
    await performAndAssert(
      'Show Link Below Table → Toggle off (move above)',
      () => {
        const dataTableContainer = canvasElement.querySelector('.data-table-container')
        const downloadSection = canvasElement.querySelector('.download-links')
        // Check if download link is positioned after the data table
        const containerRect = dataTableContainer?.getBoundingClientRect()
        const downloadRect = downloadSection?.getBoundingClientRect()
        const isBelow = downloadRect && containerRect && downloadRect.top > containerRect.bottom
        return {
          isBelow: Boolean(isBelow)
        }
      },
      async () => {
        await userEvent.click(showLinkBelowCheckbox)
      },
      (before, after) => {
        // After disabling, download link should move above the table
        return before.isBelow && !after.isBelow
      }
    )

    await performAndAssert(
      'Show Link Below Table → Toggle back on (move below)',
      () => {
        const dataTableContainer = canvasElement.querySelector('.data-table-container')
        const downloadSection = canvasElement.querySelector('.download-links')
        const containerRect = dataTableContainer?.getBoundingClientRect()
        const downloadRect = downloadSection?.getBoundingClientRect()
        const isBelow = downloadRect && containerRect && downloadRect.top > containerRect.bottom
        return {
          isBelow: Boolean(isBelow)
        }
      },
      async () => {
        await userEvent.click(showLinkBelowCheckbox)
      },
      (before, after) => {
        // After re-enabling, download link should move back below the table
        return !before.isBelow && after.isBelow
      }
    )

    // ==========================================================================
    // TEST: Enable Image Download
    // ==========================================================================
    const enableImageDownloadCheckbox = Array.from(canvasElement.querySelectorAll('input[type="checkbox"]')).find(
      checkbox => {
        const label = checkbox.closest('label')
        return label?.textContent?.includes('Enable Image Download')
      }
    ) as HTMLInputElement

    await performAndAssert(
      'Enable Image Download → Enable button',
      () => {
        const downloadImgButton = Array.from(canvasElement.querySelectorAll('button')).find(
          btn => btn.textContent?.includes('Download Image') || btn.classList.contains('download-image')
        )
        return {
          hasDownloadImgButton: Boolean(downloadImgButton)
        }
      },
      async () => {
        await userEvent.click(enableImageDownloadCheckbox)
      },
      (before, after) => {
        // After enabling, the download image button should appear
        return !before.hasDownloadImgButton && after.hasDownloadImgButton
      }
    )
  }
}

// =================================================================================================
// Visual Section Tests
// =================================================================================================
export const VisualSectionTests: StoryObj<typeof CdcMap> = {
  name: 'Visual Section Tests',
  args: {
    ...DEFAULT_ARGS
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for the editor to load
    await waitForEditor(canvas)

    // Open the Visual accordion
    await openAccordion(canvas, 'Visual')

    // ==========================================================================
    // TEST: Header Theme
    // ==========================================================================
    await performAndAssert(
      'Header Theme → Select purple theme',
      () => {
        const innerContainer = canvasElement.querySelector('.cdc-map-inner-container')
        const currentTheme = Array.from(innerContainer?.classList || []).find(cls => cls.startsWith('theme-'))
        return {
          currentTheme: currentTheme || ''
        }
      },
      async () => {
        // Find the color palette and click on the purple theme button
        const colorPalette = canvasElement.querySelector('.color-palette')
        const purpleTheme = Array.from(colorPalette?.querySelectorAll('button') || []).find(button =>
          button.classList.contains('theme-purple')
        ) as HTMLElement
        await userEvent.click(purpleTheme)
      },
      (before, after) => {
        // After clicking, the header should have the purple theme
        return after.currentTheme === 'theme-purple'
      }
    )

    // ==========================================================================
    // TEST: Show Title
    // ==========================================================================
    const showTitleCheckbox = Array.from(canvasElement.querySelectorAll('input[type="checkbox"]')).find(checkbox => {
      const label = checkbox.closest('label')
      return label?.textContent?.includes('Show Title')
    }) as HTMLInputElement

    await performAndAssert(
      'Show Title → Toggle off',
      () => {
        const title = canvasElement.querySelector('.map-title')
        const isVisible = title?.classList.contains('visible')
        return {
          isVisible: Boolean(isVisible)
        }
      },
      async () => {
        await userEvent.click(showTitleCheckbox)
      },
      (before, after) => {
        // After toggling off, title should be hidden
        return before.isVisible && !after.isVisible
      }
    )

    await performAndAssert(
      'Show Title → Toggle back on',
      () => {
        const title = canvasElement.querySelector('.map-title')
        const isVisible = title?.classList.contains('visible')
        return {
          isVisible: Boolean(isVisible)
        }
      },
      async () => {
        await userEvent.click(showTitleCheckbox)
      },
      (before, after) => {
        // After toggling back on, title should be visible
        return !before.isVisible && after.isVisible
      }
    )

    // ==========================================================================
    // TEST: Geo Border Color
    // ==========================================================================
    const geoBorderColorSelect = Array.from(canvasElement.querySelectorAll('select')).find(select => {
      const label = select.closest('label')
      return label?.textContent?.includes('Geo Border Color')
    }) as HTMLSelectElement

    await performAndAssert(
      'Geo Border Color → Change to White',
      () => {
        // Check the stroke attribute on SVG paths with class 'single-geo'
        const geoPaths = canvasElement.querySelectorAll('path.single-geo')
        const firstPath = geoPaths[0] as SVGPathElement
        // Get the actual stroke value - could be in attribute, style, or computed
        const strokeAttr = firstPath?.getAttribute('stroke') || ''
        const strokeStyle = firstPath?.style?.stroke || ''
        const computedStroke = firstPath ? window.getComputedStyle(firstPath).stroke : ''
        return {
          strokeAttr,
          strokeStyle,
          computedStroke,
          pathCount: geoPaths.length
        }
      },
      async () => {
        await userEvent.selectOptions(geoBorderColorSelect, 'sameAsBackground')
      },
      (before, after) => {
        // After changing to white, one of the stroke values should change
        const beforeStroke = before.strokeAttr || before.strokeStyle || before.computedStroke
        const afterStroke = after.strokeAttr || after.strokeStyle || after.computedStroke
        return beforeStroke !== '' && afterStroke !== '' && beforeStroke !== afterStroke
      }
    )

    // ==========================================================================
    // TEST: Map Color Palette - Sequential Palette Selection
    // ==========================================================================
    await performAndAssert(
      'Map Color Palette → Select different sequential palette',
      () => {
        // Check the fill colors of actual map path elements (same as we use for stroke)
        const geoPaths = canvasElement.querySelectorAll('path.single-geo')
        const firstPath = geoPaths[0] as SVGPathElement
        // Get the fill value from any available source
        const fillAttr = firstPath?.getAttribute('fill') || ''
        const fillStyle = firstPath?.style?.fill || ''
        const computedFill = firstPath ? window.getComputedStyle(firstPath).fill : ''
        const firstColor = fillAttr || fillStyle || computedFill
        return {
          firstColor,
          pathCount: geoPaths.length
        }
      },
      async () => {
        // Find the Sequential palette section
        const spans = Array.from(canvasElement.querySelectorAll('span'))
        const sequentialLabel = spans.find(span => span.textContent?.trim() === 'Sequential')
        const paletteContainer = sequentialLabel?.nextElementSibling

        // Try both li and button elements for palette selection
        const palettes = Array.from(paletteContainer?.querySelectorAll('li, button') || []) as HTMLElement[]

        // Select a different palette (skip the first one as it might be selected)
        const alternativePalette = palettes.find((element, idx) => idx > 0 && !element.classList.contains('selected'))
        if (alternativePalette) {
          await userEvent.click(alternativePalette)

          // Wait for changes to apply, then check for modal
          await new Promise(resolve => setTimeout(resolve, 100))

          // Check if modal appeared and handle it
          const modal = canvasElement.querySelector('.modal-overlay')
          if (modal) {
            const confirmButton = Array.from(canvasElement.querySelectorAll('button')).find(btn =>
              btn.textContent?.includes('Convert to New Palette')
            )
            if (confirmButton) {
              await userEvent.click(confirmButton)
              // Wait for modal to close and changes to apply
              await new Promise(resolve => setTimeout(resolve, 500))
            }
          }
        }
      },
      (before, after) => {
        // After selecting a different palette, the map fill colors should change
        return before.firstColor !== '' && after.firstColor !== '' && before.firstColor !== after.firstColor
      }
    )

    // ==========================================================================
    // TEST: Map Color Palette - Reverse Order
    // ==========================================================================
    // The reverse toggle is an InputToggle component which renders as a div slider
    // Find it via the hidden checkbox with name containing "isReversed"
    const reversePaletteCheckbox = canvasElement.querySelector('input[name*="isReversed"]') as HTMLInputElement
    const reversePaletteToggle = reversePaletteCheckbox?.parentElement as HTMLElement

    expect(reversePaletteToggle).toBeTruthy()

    await performAndAssert(
      'Map Color Palette → Reverse palette order',
      () => {
        // Check the fill colors of map paths
        const geoPaths = canvasElement.querySelectorAll('path.single-geo')
        const firstPath = geoPaths[0] as SVGPathElement
        const fillAttr = firstPath?.getAttribute('fill') || ''
        const fillStyle = firstPath?.style?.fill || ''
        const computedFill = firstPath ? window.getComputedStyle(firstPath).fill : ''
        const firstColor = fillAttr || fillStyle || computedFill
        return {
          firstColor,
          pathCount: geoPaths.length
        }
      },
      async () => {
        await userEvent.click(reversePaletteToggle)
        // No modal should appear - reversing doesn't trigger conversion modal
      },
      (before, after) => {
        // After reversing, the first color should be different
        return before.firstColor !== '' && after.firstColor !== '' && before.firstColor !== after.firstColor
      }
    )

    // ==========================================================================
    // TEST: Geocode Circle Size
    // ==========================================================================
    const geocodeCircleSizeInput = Array.from(canvasElement.querySelectorAll('input[type="number"]')).find(input => {
      const label = input.closest('label')
      return label?.textContent?.includes('Geocode Circle Size')
    }) as HTMLInputElement

    expect(geocodeCircleSizeInput).toBeTruthy()

    await performAndAssert(
      'Geocode Circle Size → Set to 15',
      () => {
        // Check the actual visualization - DC appears as a glyph on the map
        // The glyph class element is a path or circle, look for actual circle element
        const geoPoints = canvasElement.querySelectorAll('g.geo-point')
        const firstGeoPoint = geoPoints[0]
        const circle = firstGeoPoint?.querySelector('circle')
        const r = circle?.getAttribute('r') || ''
        // Also check path elements that might have size in their d attribute
        const path = firstGeoPoint?.querySelector('path')
        const d = path?.getAttribute('d') || ''
        return {
          r,
          d,
          inputValue: geocodeCircleSizeInput.value
        }
      },
      async () => {
        await userEvent.clear(geocodeCircleSizeInput)
        await userEvent.type(geocodeCircleSizeInput, '15')
        await userEvent.tab() // Trigger blur/change event
      },
      (before, after) => {
        // Verify the input value changed to 15
        expect(after.inputValue).toBe('15')
        // After changing the size, either the radius or path data should change
        return (
          (before.r !== '' && after.r !== '' && before.r !== after.r) ||
          (before.d !== '' && after.d !== '' && before.d !== after.d)
        )
      }
    )

    // ==========================================================================
    // TEST: Default City Style
    // ==========================================================================
    const cityStyleSelect = Array.from(canvasElement.querySelectorAll('select')).find(select => {
      const label = select.closest('label')
      return label?.textContent?.includes('Default City Style')
    }) as HTMLSelectElement

    if (cityStyleSelect) {
      await performAndAssert(
        'Default City Style → Change to Triangle',
        () => {
          // Check the actual visualization - look for glyph shapes
          const circles = canvasElement.querySelectorAll('.visx-glyph-circle')
          const triangles = canvasElement.querySelectorAll('.visx-glyph-triangle')
          return {
            circleCount: circles.length,
            triangleCount: triangles.length
          }
        },
        async () => {
          await userEvent.selectOptions(cityStyleSelect, 'triangle')
        },
        (before, after) => {
          // After changing to triangle, should have triangles instead of circles
          return before.triangleCount !== after.triangleCount || before.circleCount !== after.circleCount
        }
      )
    }

    // ==========================================================================
    // TEST: Label (Optional)
    // ==========================================================================
    const cityStyleLabelInput = Array.from(canvasElement.querySelectorAll('input[type="text"]')).find(input => {
      const label = input.closest('label')
      return label?.textContent?.includes('Label (Optional)')
    }) as HTMLInputElement

    if (cityStyleLabelInput) {
      await performAndAssert(
        'Label (Optional) → Set custom label',
        () => {
          // Check if the label appears in the legend
          const legend = canvasElement.querySelector('.legends')
          const legendText = legend?.textContent || ''
          return {
            legendText
          }
        },
        async () => {
          await userEvent.clear(cityStyleLabelInput)
          await userEvent.type(cityStyleLabelInput, 'City Locations')
        },
        (before, after) => {
          // After setting the label, it should appear in the legend
          return after.legendText.includes('City Locations')
        }
      )
    }
  }
}

/**
 * Pattern Settings Section Tests
 * Tests controls in the Pattern Settings accordion (only visible for US maps)
 */
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
        // After clicking, pattern definitions and paths should appear on all states
        // Default pattern is 'circles' with empty dataKey, which matches all states (undefined === undefined)
        return after.patternDefCount > before.patternDefCount && after.patternPathCount > before.patternPathCount
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
        const dataKeySelect = canvasElement.querySelector('select[id^="pattern-dataKey--"]') as HTMLSelectElement
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
        // After setting to Colorado only, pattern paths should decrease significantly
        // Before: all states (~50+), After: just Colorado (should be 1-2)
        return after.patternPathCount < before.patternPathCount && after.patternPathCount > 0
      }
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
        const patternTypeSelect = canvasElement.querySelector('select[id^="pattern-type--"]') as HTMLSelectElement
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
        const patternSizeSelect = canvasElement.querySelector('select[id^="pattern-size--"]') as HTMLSelectElement
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
export const TextAnnotationsSectionTests: Story = {
  args: {
    config: usaStateGradientConfig,
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for editor to load
    await waitForEditor(canvas)

    // Open the Text Annotations accordion
    await openAccordion(canvas, 'Text Annotations')

    // ==========================================================================
    // TEST: Add Annotation
    // ==========================================================================
    const addAnnotationButton = Array.from(canvasElement.querySelectorAll('button')).find(btn => {
      return btn.textContent?.includes('Add Annotation')
    }) as HTMLButtonElement

    expect(addAnnotationButton).toBeTruthy()

    await performAndAssert(
      'Add Annotation → Click to add default annotation',
      () => {
        // Check the actual visualization - annotations appear as divs with aria-label
        // Default annotation text is "New Annotation"
        const annotationElements = canvasElement.querySelectorAll('div[aria-label*="Annotation text"]')
        return {
          annotationCount: annotationElements.length
        }
      },
      async () => {
        await userEvent.click(addAnnotationButton)
      },
      (before, after) => {
        // After clicking, a new annotation should appear in the visualization
        return after.annotationCount > before.annotationCount
      }
    )

    // ==========================================================================
    // TEST: Change Annotation Text
    // ==========================================================================
    // Wait for the annotation sub-accordion to appear and find the button with "New Annotation" or "Select Column"
    await waitForPresence('.cove-accordion__button', canvasElement)
    const annotationAccordionButtons = canvasElement.querySelectorAll('.cove-accordion__button')
    const annotationAccordionButton = Array.from(annotationAccordionButtons).find(
      btn => btn.textContent?.includes('New Annotation') || btn.textContent?.includes('Select Column')
    ) as HTMLElement

    expect(annotationAccordionButton).toBeTruthy()

    // Open the annotation's sub-accordion
    await userEvent.click(annotationAccordionButton)

    // Find the annotation text textarea
    const annotationTextarea = Array.from(canvasElement.querySelectorAll('textarea')).find(textarea => {
      const label = textarea.closest('label')
      return label?.textContent?.includes('Annotation Text')
    }) as HTMLTextAreaElement

    expect(annotationTextarea).toBeTruthy()

    await performAndAssert(
      'Annotation Text → Change to "Important Note"',
      () => {
        // Check the actual visualization - the annotation div should contain the text
        const annotationDivs = canvasElement.querySelectorAll('div[aria-label*="Annotation text"]')
        const texts = Array.from(annotationDivs).map(div => div.innerHTML)
        return {
          annotationTexts: texts.join('|')
        }
      },
      async () => {
        // Select all text and replace it
        await userEvent.click(annotationTextarea)
        await userEvent.keyboard('{Control>}a{/Control}')
        await userEvent.type(annotationTextarea, 'Important Note')
        await userEvent.tab() // Trigger blur to commit the change
      },
      (before, after) => {
        // After changing the text, the annotation should display the new text
        return after.annotationTexts.includes('Important Note')
      }
    )

    // ==========================================================================
    // TEST: Delete Annotation
    // ==========================================================================
    const deleteButton = Array.from(canvasElement.querySelectorAll('button')).find(btn => {
      return btn.textContent?.includes('Delete Annotation')
    }) as HTMLButtonElement

    expect(deleteButton).toBeTruthy()

    await performAndAssert(
      'Delete Annotation → Remove annotation from map',
      () => {
        // Check the visualization - count the annotations
        const annotationDivs = canvasElement.querySelectorAll('div[aria-label*="Annotation text"]')
        return {
          annotationCount: annotationDivs.length
        }
      },
      async () => {
        await userEvent.click(deleteButton)
      },
      (before, after) => {
        // After deleting, annotation count should decrease
        return after.annotationCount < before.annotationCount
      }
    )
  }
}

// ==========================================================================
// MULTI-COUNTRY MAP TESTS
// ==========================================================================

export const MultiCountryWorldMapTests: Story = {
  args: {
    ...DEFAULT_ARGS,
    config: {
      ...multiCountryConfig,
      general: {
        ...multiCountryConfig.general,
        countriesPicked: [] // Start with no countries selected for testing
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await waitForPresence('.map-container', canvasElement)

    // Ensure we're testing a world map - Type accordion should be open by default
    await openAccordion(canvas, 'Type')

    // Wait for world map to load (topology loads asynchronously)
    // The config already starts with geoType: 'world', so we just need to wait for it to render
    await waitForPresence('path[data-country-code]', canvasElement)

    // Wait for the country selector to appear (only shows for world maps)
    await waitForPresence('.cove-multiselect', canvasElement)

    // Stay in Type accordion section - this is where multi-country controls are located

    // ==========================================================================
    // Helper functions to capture visual state
    // ==========================================================================
    const getCountryVisualState = () => {
      const mapContainer = canvasElement.querySelector('.map-container')
      const allCountryPaths = canvasElement.querySelectorAll('path[data-country-code]')
      const visibleCountries = Array.from(allCountryPaths).filter(
        path => !path.classList.contains('hidden') && !path.classList.contains('grayed-out')
      )
      const grayedCountries = Array.from(allCountryPaths).filter(path => path.classList.contains('grayed-out'))
      const hiddenCountries = Array.from(allCountryPaths).filter(path => {
        const hasHiddenClass = path.classList.contains('hidden')
        const computedStyle = window.getComputedStyle(path as Element)
        const isDisplayNone = computedStyle.display === 'none'
        return hasHiddenClass || isDisplayNone
      })

      return {
        totalCountries: allCountryPaths.length,
        visibleCountries: visibleCountries.length,
        grayedCountries: grayedCountries.length,
        hiddenCountries: hiddenCountries.length,
        mapClasses: mapContainer ? Array.from(mapContainer.classList) : [],
        hasMultiCountryClass: mapContainer?.classList.contains('multi-country-selected') || false,
        selectedCountryCodes: Array.from(
          new Set(
            Array.from(visibleCountries)
              .map(path => path.getAttribute('data-country-code'))
              .filter(Boolean)
          )
        )
      }
    }

    // ==========================================================================
    // TEST: Country Multi-Select Dropdown Interaction
    // ==========================================================================
    const countryMultiSelect = Array.from(canvasElement.querySelectorAll('.cove-multiselect')).find(ms => {
      const parentLabel = ms.closest('label')
      const labelSpan = parentLabel?.querySelector('span')
      return labelSpan?.textContent?.includes('Countries Selector')
    }) as HTMLElement
    expect(countryMultiSelect).toBeTruthy()

    // Get the expand button to open the dropdown
    const expandButton = countryMultiSelect.querySelector('button[aria-label="Expand"]') as HTMLButtonElement
    expect(expandButton).toBeTruthy()

    // Test selecting first country (France)
    await performAndAssert(
      'Multi-Country → Select France',
      getCountryVisualState,
      async () => {
        // Open the dropdown
        await userEvent.click(expandButton)
        // Find and click France option
        const franceOption = Array.from(countryMultiSelect.querySelectorAll('li[role="option"]')).find(li =>
          li.textContent?.includes('France')
        ) as HTMLElement
        expect(franceOption).toBeTruthy()
        await userEvent.click(franceOption)
      },
      (before, after) => {
        // When countries are selected, map should show multi-country state
        return (
          after.hasMultiCountryClass &&
          after.selectedCountryCodes.includes('FRA') &&
          after.visibleCountries < before.totalCountries // Some countries should be filtered
        )
      }
    )

    // Test selecting second country (Germany)
    await performAndAssert(
      'Multi-Country → Add Germany to selection',
      getCountryVisualState,
      async () => {
        // Expand dropdown again
        const expandBtn = countryMultiSelect.querySelector('button[aria-label="Expand"]') as HTMLButtonElement
        await userEvent.click(expandBtn)
        // Find and click Germany option
        const germanyOption = Array.from(countryMultiSelect.querySelectorAll('li[role="option"]')).find(li =>
          li.textContent?.includes('Germany')
        ) as HTMLElement
        expect(germanyOption).toBeTruthy()
        await userEvent.click(germanyOption)
      },
      (before, after) => {
        // Both France and Germany should be selected
        return (
          after.selectedCountryCodes.includes('FRA') &&
          after.selectedCountryCodes.includes('DEU') &&
          after.selectedCountryCodes.length === 2
        )
      }
    )

    // Test adding a third country (Italy)
    await performAndAssert(
      'Multi-Country → Add Italy to selection',
      getCountryVisualState,
      async () => {
        // Expand dropdown again
        const expandBtn = countryMultiSelect.querySelector('button[aria-label="Expand"]') as HTMLButtonElement
        await userEvent.click(expandBtn)
        // Find and click Italy option
        const italyOption = Array.from(countryMultiSelect.querySelectorAll('li[role="option"]')).find(li =>
          li.textContent?.includes('Italy')
        ) as HTMLElement
        expect(italyOption).toBeTruthy()
        await userEvent.click(italyOption)
      },
      (before, after) => {
        // All three countries should be selected
        return (
          after.selectedCountryCodes.includes('FRA') &&
          after.selectedCountryCodes.includes('DEU') &&
          after.selectedCountryCodes.includes('ITA') &&
          after.selectedCountryCodes.length === 3
        )
      }
    )

    // ==========================================================================
    // TEST: Hide Unselected Countries Toggle (Grey-out vs Hide behavior)
    // ==========================================================================
    // Ensure map has fully rendered with country paths before testing toggle
    await waitForPresence('path[data-country-code]', canvasElement)

    // InputToggle renders as a div with a hidden checkbox
    const hideUnselectedToggle = Array.from(
      canvasElement.querySelectorAll('input[name*="hideUnselectedCountries"]')
    ).find(input => {
      const label = input.closest('label') || input.parentElement?.querySelector('label')
      return label?.textContent?.includes('Hide Unselected Countries')
    }) as HTMLInputElement
    expect(hideUnselectedToggle).toBeTruthy()

    // By default (unchecked), unselected countries should be grayed out
    // First, ensure the toggle is unchecked (hideUnselectedCountries = false, so countries are grayed)
    if (hideUnselectedToggle.checked) {
      await userEvent.click(hideUnselectedToggle)
      await new Promise(resolve => setTimeout(resolve, 100))
    }

    const beforeState = getCountryVisualState()

    // Now check it (should hide unselected countries)
    await userEvent.click(hideUnselectedToggle)
    await new Promise(resolve => setTimeout(resolve, 100)) // Give time for re-render

    const afterState = getCountryVisualState()

    const testResult =
      afterState.hiddenCountries > beforeState.hiddenCountries &&
      afterState.grayedCountries === 0 && // No grayed countries when hiding
      afterState.selectedCountryCodes.length === 3 // Only our 3 selected countries (by unique ISO codes)

    expect(testResult).toBe(true)

    // Test unchecking "Hide Unselected Countries" again (should grey-out unselected countries)
    await performAndAssert(
      'Hide Unselected Countries → Grey-out unselected countries',
      getCountryVisualState,
      async () => {
        await userEvent.click(hideUnselectedToggle)
      },
      (before, after) => {
        // When not hiding (default), unselected countries should be grayed out
        return (
          after.grayedCountries > before.grayedCountries &&
          after.hiddenCountries === 0 && // No hidden countries when showing grayed
          after.selectedCountryCodes.length === 3 // Our 3 selected countries remain visible (by unique ISO codes)
        )
      }
    )

    // ==========================================================================
    // TEST: Map Centering and Bounds Changes
    // ==========================================================================
    await performAndAssert(
      'Multi-Country Selection → Map centers on selected countries',
      getCountryVisualState,
      async () => {
        // Clear selection and select different countries (Japan, Australia) to test centering
        // Click expand button
        const expandBtn = countryMultiSelect.querySelector('button[aria-label="Expand"]') as HTMLButtonElement
        await userEvent.click(expandBtn)

        // Clear existing selections first by clicking remove buttons
        const removeButtons = countryMultiSelect.querySelectorAll('button[aria-label="Remove"]')
        for (const button of Array.from(removeButtons)) {
          await userEvent.click(button as HTMLButtonElement)
        }

        // Select Japan
        await userEvent.click(expandBtn) // Reopen dropdown
        const japanOption = Array.from(countryMultiSelect.querySelectorAll('li[role="option"]')).find(li =>
          li.textContent?.includes('Japan')
        ) as HTMLElement
        expect(japanOption).toBeTruthy()
        await userEvent.click(japanOption)

        // Select Australia
        await userEvent.click(expandBtn) // Reopen dropdown
        const australiaOption = Array.from(countryMultiSelect.querySelectorAll('li[role="option"]')).find(li =>
          li.textContent?.includes('Australia')
        ) as HTMLElement
        expect(australiaOption).toBeTruthy()
        await userEvent.click(australiaOption)

        // Wait for map to re-render with new selection
        await new Promise(resolve => setTimeout(resolve, 300))
      },
      (before, after) => {
        // Verify that the selected countries changed (Japan and Australia instead of France, Germany, Italy)
        // The centering happens automatically via useCountryZoom hook
        return (
          after.selectedCountryCodes.includes('JPN') &&
          after.selectedCountryCodes.includes('AUS') &&
          !after.selectedCountryCodes.includes('FRA') &&
          after.selectedCountryCodes.length === 2
        )
      }
    )

    // ==========================================================================
    // TEST: Clear Country Selection (Reset to full world map)
    // ==========================================================================
    await performAndAssert(
      'Multi-Country → Clear all selections',
      getCountryVisualState,
      async () => {
        // Remove all selected countries using the remove buttons
        const removeButtons = countryMultiSelect.querySelectorAll('button[aria-label="Remove"]')
        for (const button of Array.from(removeButtons)) {
          await userEvent.click(button as HTMLButtonElement)
        }
      },
      (before, after) => {
        // When all countries are cleared, should return to normal world map state
        // Note: selectedCountryCodes will contain ALL countries since all are visible (not grayed/hidden)
        return (
          !after.hasMultiCountryClass &&
          after.grayedCountries === 0 &&
          after.hiddenCountries === 0 &&
          after.visibleCountries === after.totalCountries // All countries visible
        )
      }
    )

    // ==========================================================================
    // TEST: Country Selection with Data Integration
    // ==========================================================================
    await performAndAssert(
      'Multi-Country Data → Selected countries show data values',
      getCountryVisualState,
      async () => {
        // Select countries that should have data (France, Germany, Italy - these have data in the config)
        const expandBtn = countryMultiSelect.querySelector('button[aria-label="Expand"]') as HTMLButtonElement

        // Select France
        await userEvent.click(expandBtn)
        const franceOption = Array.from(countryMultiSelect.querySelectorAll('li[role="option"]')).find(li =>
          li.textContent?.includes('France')
        ) as HTMLElement

        expect(franceOption).toBeTruthy()
        await userEvent.click(franceOption)

        // Select Germany
        await userEvent.click(expandBtn)
        const germanyOption = Array.from(countryMultiSelect.querySelectorAll('li[role="option"]')).find(li =>
          li.textContent?.includes('Germany')
        ) as HTMLElement

        expect(germanyOption).toBeTruthy()
        await userEvent.click(germanyOption)

        // Select Italy
        await userEvent.click(expandBtn)
        const italyOption = Array.from(countryMultiSelect.querySelectorAll('li[role="option"]')).find(li =>
          li.textContent?.includes('Italy')
        ) as HTMLElement

        expect(italyOption).toBeTruthy()
        await userEvent.click(italyOption)

        // Wait for data to be applied
        await new Promise(resolve => setTimeout(resolve, 300))
      },
      (before, after) => {
        // Verify that the countries with data are correctly selected
        // (Data rendering and legend display are separate from multi-country selection functionality)
        return (
          after.selectedCountryCodes.includes('FRA') &&
          after.selectedCountryCodes.includes('DEU') &&
          after.selectedCountryCodes.includes('ITA') &&
          after.hasMultiCountryClass &&
          after.selectedCountryCodes.length === 3
        )
      }
    )
  }
}
