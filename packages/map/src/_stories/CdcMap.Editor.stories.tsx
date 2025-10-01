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
