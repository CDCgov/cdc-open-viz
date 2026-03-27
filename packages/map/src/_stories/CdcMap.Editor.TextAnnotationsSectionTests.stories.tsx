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
      btn => btn.textContent?.includes('New annotation') || btn.textContent?.includes('Select Column')
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

// ============================================================================
// SMALL MULTIPLES SECTION TESTS
// ============================================================================
