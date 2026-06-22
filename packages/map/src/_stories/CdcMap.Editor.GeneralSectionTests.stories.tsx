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
      const titleElement = canvasElement.querySelector('.cove-title, .map-title')
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
    // Verifies: Title element visibility is controlled by showTitle
    // ==========================================================================
    const generalAccordion = canvasElement.querySelector('[aria-expanded="true"]')?.closest('.accordion__item')
    const showTitleLabel = Array.from(generalAccordion?.querySelectorAll('label') || []).find(label =>
      label.textContent?.includes('Show Title')
    )
    const showTitleCheckbox = showTitleLabel?.querySelector('input[type="checkbox"]') as HTMLInputElement
    expect(showTitleCheckbox).toBeTruthy()

    const getTitleVisibility = () => {
      const titleElement = canvasElement.querySelector('.cove-title, header.cove-visualization__header')
      return {
        isPresent: Boolean(titleElement)
      }
    }

    // Test config has showTitle: true, so title starts visible (present in DOM)
    await performAndAssert(
      'Show Title → Hide',
      getTitleVisibility,
      async () => {
        await userEvent.click(showTitleCheckbox)
      },
      (before, after) => before.isPresent && !after.isPresent
    )

    await performAndAssert(
      'Show Title → Show',
      getTitleVisibility,
      async () => {
        await userEvent.click(showTitleCheckbox)
      },
      (before, after) => !before.isPresent && after.isPresent
    )

    // ==========================================================================
    // TEST: Super Title field
    // Verifies: Super title text appears in the Title component
    // ==========================================================================
    const superTitleInput = canvas.getByLabelText(/Super Title/i) as HTMLInputElement
    expect(superTitleInput).toBeTruthy()

    const getSuperTitleVisual = () => {
      const titleElement = canvasElement.querySelector('.cove-title, .map-title')
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
    // TEST: Title Style dropdown
    // Verifies: Changing title style changes the heading element (h2/h3) used
    // ==========================================================================
    const titleStyleSelect = canvas.getByLabelText(/Title Style/i) as HTMLSelectElement
    expect(titleStyleSelect).toBeTruthy()

    const getTitleStyleVisual = () => {
      const coveTitleElement = canvasElement.querySelector('.cove-title')
      const legacyTitleElement = canvasElement.querySelector('header.cove-visualization__header')

      // For modern titles, check for h2 (large) or h3 (small) elements
      const hasH2 = Boolean(coveTitleElement?.querySelector('h2'))
      const hasH3 = Boolean(coveTitleElement?.querySelector('h3'))

      return {
        hasCoveTitle: Boolean(coveTitleElement),
        hasLegacyTitle: Boolean(legacyTitleElement),
        isSmall: hasH3,
        isLarge: hasH2
      }
    }

    // Current config has titleStyle: 'small'
    // Test: Change to 'large'
    await performAndAssert(
      'Title Style → Change to Large',
      getTitleStyleVisual,
      async () => {
        await userEvent.selectOptions(titleStyleSelect, 'large')
      },
      (before, after) => before.isSmall && after.isLarge && after.hasCoveTitle && !after.hasLegacyTitle
    )

    // Test: Change to 'legacy'
    await performAndAssert(
      'Title Style → Change to Legacy',
      getTitleStyleVisual,
      async () => {
        await userEvent.selectOptions(titleStyleSelect, 'legacy')
      },
      (before, after) => before.hasCoveTitle && !after.hasCoveTitle && after.hasLegacyTitle
    )

    // Test: Change back to 'small'
    await performAndAssert(
      'Title Style → Change back to Small',
      getTitleStyleVisual,
      async () => {
        await userEvent.selectOptions(titleStyleSelect, 'small')
      },
      (before, after) => before.hasLegacyTitle && !after.hasLegacyTitle && after.isSmall && after.hasCoveTitle
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
