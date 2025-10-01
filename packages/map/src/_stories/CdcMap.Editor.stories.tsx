import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent, expect } from 'storybook/test'
import CdcMap from '../CdcMap'
import usaStateGradientConfig from './_mock/usa-state-gradient.json'
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
