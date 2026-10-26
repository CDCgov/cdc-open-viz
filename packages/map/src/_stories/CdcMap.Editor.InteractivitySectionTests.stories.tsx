import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { openAccordion, performAndAssert, waitForEditor, waitForPresence } from '@cdc/core/helpers/testing'
import CdcMap from '../CdcMap'
import { createNewMapConfig } from '../helpers/createNewMapConfig'

type Story = StoryObj<typeof CdcMap>

const mapMeta: Meta<typeof CdcMap> = {
  title: 'Components/Templates/Map/Editor Tests',
  component: CdcMap,
  parameters: {
    layout: 'fullscreen'
  }
}

export default mapMeta

const interactivityConfig = createNewMapConfig({})
interactivityConfig.general = {
  ...interactivityConfig.general,
  title: 'Interactivity editor test',
  type: 'data',
  geoType: 'world',
  countriesPicked: [],
  hideUnselectedCountries: false,
  navigationTarget: '_blank'
}
interactivityConfig.columns.geo.name = 'Country'
interactivityConfig.columns.geo.label = 'Location'
interactivityConfig.columns.geo.tooltip = false
interactivityConfig.columns.geo.dataTable = true
interactivityConfig.columns.primary.name = 'Data'
interactivityConfig.columns.primary.label = 'Sample Data'
interactivityConfig.columns.primary.tooltip = true
interactivityConfig.columns.primary.dataTable = true
interactivityConfig.columns.navigate.name = 'URL'
interactivityConfig.tooltips = {
  ...interactivityConfig.tooltips,
  appearanceType: 'hover',
  linkLabel: 'Learn More',
  noDataLabel: 'No Data',
  opacity: 90
}
const interactivityData = [
  { Country: 'France', Data: 75.2, URL: 'https://example.com/france' },
  { Country: 'Germany', Data: 82.1, URL: 'https://example.com/germany' },
  { Country: 'Italy', Data: 68.9, URL: 'https://example.com/italy' }
]
interactivityConfig.data = interactivityData

const navigationHandler = fn()

const getVisibleTooltipState = (canvasElement: HTMLElement) => {
  const tooltip = Array.from(canvasElement.querySelectorAll<HTMLElement>('.tooltip-test')).find(element => {
    const style = getComputedStyle(element)
    return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0'
  })

  return {
    text: tooltip?.textContent || '',
    isVisible: Boolean(tooltip)
  }
}

const getDetailDisplaySelect = (interactivitySection: HTMLElement) => {
  const detailDisplayLabel = Array.from(interactivitySection.querySelectorAll('label')).find(label =>
    label.textContent?.includes('Detail displays on')
  )
  const select = detailDisplayLabel?.querySelector('select') as HTMLSelectElement | null
  expect(select).toBeTruthy()
  return select!
}

export const InteractivitySectionTests: Story = {
  args: {
    isEditor: true,
    config: interactivityConfig,
    navigationHandler
  },
  play: async ({ canvasElement }) => {
    navigationHandler.mockClear()

    const canvas = within(canvasElement)

    await waitForEditor(canvas)
    await waitForPresence('.map-container', canvasElement)
    const usa = (await waitForPresence('path[data-country-code="USA"]', canvasElement)) as SVGPathElement
    const france = (await waitForPresence('path[data-country-code="FRA"]', canvasElement)) as SVGPathElement
    await openAccordion(canvas, 'Interactivity')

    const interactivityButton = canvas
      .getAllByRole('button', { name: /^Interactivity$/i })
      .find(button => button.closest('[data-accordion-component="AccordionItem"], .accordion__item'))
    const interactivitySection = interactivityButton?.closest(
      '[data-accordion-component="AccordionItem"], .accordion__item'
    ) as HTMLElement
    expect(interactivitySection).toBeTruthy()

    const section = within(interactivitySection)
    const noDataInput = section.getByRole('textbox', { name: /No Data Tooltip Text/i })
    const getUsaTooltipMarkup = () => usa.closest('.geo-group')?.getAttribute('data-tooltip-html') || ''

    expect(interactivityData.some(row => row.Country === 'United States')).toBe(false)
    expect(getUsaTooltipMarkup()).toContain('No Data')

    await performAndAssert(
      'No Data Tooltip Text → Render custom text for a geography without data',
      getUsaTooltipMarkup,
      async () => {
        await userEvent.clear(noDataInput)
        await userEvent.type(noDataInput, 'Data unavailable')
      },
      (before, after) => before.includes('No Data') && after.includes('Data unavailable')
    )

    await performAndAssert(
      'Hover detail display → Show custom no-data tooltip',
      () => getVisibleTooltipState(canvasElement),
      async () => {
        await userEvent.hover(usa)
      },
      (_before, after) => after.isVisible && after.text.includes('Data unavailable')
    )

    const appearanceSelect = getDetailDisplaySelect(interactivitySection)

    await performAndAssert(
      'Detail display → Replace hover tooltip with click-modal controls',
      () => ({
        hasHoverTooltip: Boolean(canvasElement.querySelector('.tooltip-test')),
        hasLinkLabelInput: Boolean(section.queryByRole('textbox', { name: /Tooltips Link Label/i }))
      }),
      async () => {
        await userEvent.unhover(usa)
        await userEvent.selectOptions(appearanceSelect, 'click')
      },
      (before, after) => before.hasHoverTooltip && !after.hasHoverTooltip && after.hasLinkLabelInput
    )

    const linkLabelInput = section.getByRole('textbox', { name: /Tooltips Link Label/i })
    await userEvent.clear(linkLabelInput)
    await userEvent.type(linkLabelInput, 'View details')

    await performAndAssert(
      'Click detail display → Render modal with configured navigation label',
      () => Boolean(canvas.queryByRole('button', { name: 'View details', hidden: true })),
      async () => {
        await userEvent.click(france)
      },
      (before, after) => !before && after
    )
    expect(navigationHandler).not.toHaveBeenCalled()

    const closeModal = canvasElement.querySelector('.modal-close') as HTMLElement
    expect(closeModal).toBeTruthy()
    await userEvent.click(closeModal)

    await performAndAssert(
      'Detail display → Hide click-only controls when restoring hover mode',
      () => ({
        hasLinkLabelInput: Boolean(section.queryByRole('textbox', { name: /Tooltips Link Label/i })),
        hasModal: Boolean(canvasElement.querySelector('.modal-content')),
        hasHoverMarkup: Boolean(
          canvasElement
            .querySelector('path[data-country-code="USA"]')
            ?.closest('.geo-group')
            ?.getAttribute('data-tooltip-html')
            ?.includes('Data unavailable')
        )
      }),
      async () => {
        await userEvent.selectOptions(appearanceSelect, 'hover')
      },
      (before, after) => before.hasLinkLabelInput && !after.hasLinkLabelInput && !after.hasModal && after.hasHoverMarkup
    )
  }
}
