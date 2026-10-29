import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import {
  assertVisualizationRendered,
  openAccordion,
  performAndAssert,
  waitForAbsence,
  waitForEditor,
  waitForOptionsToPopulate,
  waitForPresence
} from '@cdc/core/helpers/testing'
import CdcEditor from '../CdcEditor'

// Source regression: docs/qa/regression-scripts/build-a-standard-us-numeric-map.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Map',
  component: CdcEditor,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof CdcEditor>

const getEditorAccordionButton = (canvasElement: HTMLElement, name: string) =>
  Array.from(canvasElement.querySelectorAll<HTMLElement>('[data-accordion-component="AccordionItemButton"]')).find(
    button => {
      const buttonName = button.textContent?.replace(/\s+/g, ' ').trim().toLowerCase()
      return buttonName === name.toLowerCase() && button.closest('.editor-panel')
    }
  )

const ensureEditorAccordionOpen = async (
  canvas: ReturnType<typeof within>,
  canvasElement: HTMLElement,
  name: string
) => {
  const button = getEditorAccordionButton(canvasElement, name)
  if (!button) {
    const availableSections = Array.from(
      canvasElement.querySelectorAll<HTMLElement>('.editor-panel [data-accordion-component="AccordionItemButton"]')
    )
      .map(section => section.textContent?.replace(/\s+/g, ' ').trim())
      .filter(Boolean)
    throw new Error(`Editor accordion "${name}" was not found. Available sections: ${availableSections.join(', ')}`)
  }
  if (button?.getAttribute('aria-expanded') !== 'true') await openAccordion(canvas, name)
  expect(button).toHaveAttribute('aria-expanded', 'true')
  return button?.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')
}

const getColumnSelect = (columnsAccordion: HTMLElement, target: 'map-geography' | 'map-data-column') => {
  const select = columnsAccordion.querySelector<HTMLSelectElement>(`[data-required-field-control="${target}"]`)
  expect(select).toBeTruthy()
  return select!
}

const getGeographyGroup = (canvasElement: HTMLElement, name: string) => {
  const group = canvasElement.querySelector<SVGGElement>(`g[data-name="${name}"] > g.geo-group`)
  expect(group).toBeTruthy()
  return group!
}

const getAnnotationElements = (canvasElement: HTMLElement) =>
  Array.from(canvasElement.querySelectorAll<HTMLElement>('.map-container [aria-label^="Annotation text that reads:"]'))

const getVisibleTooltipText = (canvasElement: HTMLElement) => {
  const tooltip = Array.from(canvasElement.querySelectorAll<HTMLElement>('.tooltip-test')).find(element => {
    const style = getComputedStyle(element)
    return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0'
  })
  return tooltip?.textContent || ''
}

export const MAP001: Story = {
  name: 'MAP-001 — Build a standard US numeric map',
  args: {
    config: {}
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    const consoleErrors: unknown[][] = []
    const unhandledRejections: unknown[] = []
    const originalConsoleError = console.error
    const recordConsoleError = (...args: unknown[]) => {
      consoleErrors.push(args)
      originalConsoleError(...args)
    }
    const recordUnhandledRejection = (event: PromiseRejectionEvent) => unhandledRejections.push(event.reason)

    console.error = recordConsoleError
    window.addEventListener('unhandledrejection', recordUnhandledRejection)

    try {
      const mapButton = await canvas.findByRole('button', { name: 'United States (State- or County-Level)' })
      await user.click(mapButton)
      expect(canvas.getByText('2. Import Data')).toBeVisible()

      await user.click(canvas.getByText('2. Import Data'))
      const sampleDataButton = await canvas.findByRole('button', { name: 'United States: State Sample Data' })
      expect(sampleDataButton).toBeVisible()
      await user.click(sampleDataButton)

      expect(await canvas.findByText('Data Preview')).toBeVisible()
      for (const heading of ['STATE', 'Rate', 'Location', 'URL']) {
        expect(canvasElement.querySelector(`table.data-table th[title="${heading}"]`)).toBeVisible()
      }

      const verticalButton = canvas.getByRole('button', { name: /^Vertical/ })
      await user.click(verticalButton)
      expect(verticalButton).toHaveClass('active')

      const noSeriesButton = canvas.getByRole('button', { name: 'No', exact: true })
      const yesSeriesButton = canvas.getByRole('button', { name: 'Yes', exact: true })
      await performAndAssert(
        'No is the active multiple-series selection',
        () => ({ no: noSeriesButton.style.backgroundColor, yes: yesSeriesButton.style.backgroundColor }),
        async () => {
          await user.click(noSeriesButton)
          await user.tab()
        },
        (_before, after) => after.no === 'rgb(1, 93, 170)' && after.yes === 'rgb(0, 52, 93)'
      )

      const configureButton = await canvas.findByRole('button', { name: 'Configure your visualization' })
      await user.click(configureButton)

      await waitForEditor(canvas)
      for (const section of ['Type', 'General', 'Columns']) {
        expect(getEditorAccordionButton(canvasElement, section)).toBeVisible()
      }

      const typeAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'Type')
      expect(typeAccordion).toBeTruthy()
      const unitedStatesButton = within(typeAccordion!).getByRole('button', { name: /United States/ })
      expect(unitedStatesButton).toHaveClass('active')
      expect(within(typeAccordion!).getByLabelText('Geography Subtype')).toHaveValue('us')
      const mapTypeSelect = within(typeAccordion!)
        .getAllByLabelText(/Map Type/, { selector: 'select' })
        .find(select => Array.from((select as HTMLSelectElement).options).some(option => option.value === 'navigation'))
      expect(mapTypeSelect).toHaveValue('data')
      expect(within(typeAccordion!).getByRole('radio', { name: /Numeric\/Quantitative/ })).toBeChecked()

      const generalAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'General')
      const titleInput = within(generalAccordion!).getByRole('textbox', { name: /^Title/ }) as HTMLInputElement
      expect(titleInput).toHaveValue('')

      const annotationsAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'Text Annotations')
      expect(annotationsAccordion).toBeTruthy()
      expect(getAnnotationElements(canvasElement)).toHaveLength(0)
      expect(within(annotationsAccordion!).queryByRole('button', { name: /New annotation/ })).not.toBeInTheDocument()

      const columnsAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'Columns')
      expect(columnsAccordion).toBeTruthy()
      const geographySelect = getColumnSelect(columnsAccordion!, 'map-geography')
      await waitForOptionsToPopulate(geographySelect)
      await user.selectOptions(geographySelect, 'STATE')
      expect(geographySelect).toHaveValue('STATE')
      expect(canvas.queryByRole('button', { name: 'Open Columns and focus Geography' })).not.toBeInTheDocument()
      expect(canvas.getByRole('button', { name: 'Open Columns and focus Data Column' })).toBeVisible()

      const dataColumnSelect = getColumnSelect(columnsAccordion!, 'map-data-column')
      await waitForOptionsToPopulate(dataColumnSelect)
      await performAndAssert(
        'Map data column renders Rate values',
        () => ({
          alabamaTooltip: canvasElement
            .querySelector<SVGGElement>('g[data-name="Alabama"] > g.geo-group')
            ?.getAttribute('data-tooltip-html'),
          legendStops: canvasElement.querySelectorAll('.legend-container linearGradient stop').length
        }),
        async () => user.selectOptions(dataColumnSelect, 'Rate'),
        (_before, after) =>
          Boolean(after.alabamaTooltip?.includes('State: Alabama')) &&
          Boolean(after.alabamaTooltip?.includes('Rate: 130')) &&
          after.legendStops === 5
      )
      expect(dataColumnSelect).toHaveValue('Rate')
      await waitForAbsence('.map-required-fields-alerts', canvasElement)
      await waitForPresence('.map-container', canvasElement)
      await assertVisualizationRendered(canvasElement)
      expect(canvasElement.querySelector('.legend-container')).toBeVisible()

      const alabama = getGeographyGroup(canvasElement, 'Alabama')
      const alaska = getGeographyGroup(canvasElement, 'Alaska')
      expect(alabama.getAttribute('data-tooltip-html')).toContain('State: Alabama')
      expect(alabama.getAttribute('data-tooltip-html')).toContain('Rate: 130')
      expect(alaska.getAttribute('data-tooltip-html')).toContain('State: Alaska')
      expect(alaska.getAttribute('data-tooltip-html')).toContain('Rate: 40')
      expect(getComputedStyle(alabama).fill).not.toBe(getComputedStyle(alaska).fill)

      await performAndAssert(
        'Alabama hover shows its mapped Rate value',
        () => getVisibleTooltipText(canvasElement),
        async () => user.hover(alabama),
        (_before, after) => after.includes('State: Alabama') && after.includes('Rate: 130')
      )
      await performAndAssert(
        'Alabama tooltip hides after hover ends',
        () => getVisibleTooltipText(canvasElement),
        async () => user.unhover(alabama),
        (before, after) => before.includes('State: Alabama') && after === ''
      )

      await performAndAssert(
        'Alaska hover shows its mapped Rate value',
        () => getVisibleTooltipText(canvasElement),
        async () => user.hover(alaska),
        (_before, after) => after.includes('State: Alaska') && after.includes('Rate: 40')
      )
      await performAndAssert(
        'Alaska tooltip hides after hover ends',
        () => getVisibleTooltipText(canvasElement),
        async () => user.unhover(alaska),
        (before, after) => before.includes('State: Alaska') && after === ''
      )

      await ensureEditorAccordionOpen(canvas, canvasElement, 'General')
      await performAndAssert(
        'Map title appears in the visualization',
        () => canvasElement.querySelector('.cove-title, .map-title')?.textContent?.trim() || '',
        async () => {
          await user.clear(titleInput)
          await user.type(titleInput, 'Standard US Map Regression Test')
        },
        (_before, after) => after === 'Standard US Map Regression Test'
      )
      expect(canvas.getByRole('heading', { name: 'Standard US Map Regression Test' })).toBeVisible()

      const activeAnnotationsAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'Text Annotations')
      const addAnnotationButton = within(activeAnnotationsAccordion!).getByRole('button', { name: 'Add Annotation' })
      await performAndAssert(
        'First default annotation appears',
        () => getAnnotationElements(canvasElement).map(element => element.getAttribute('aria-label')),
        async () => user.click(addAnnotationButton),
        (before, after) =>
          before.length === 0 && after.length === 1 && after[0] === 'Annotation text that reads: New annotation'
      )

      const firstAnnotationButton = within(activeAnnotationsAccordion!).getByRole('button', { name: /New annotation/ })
      await user.click(firstAnnotationButton)
      const firstAnnotationItem = firstAnnotationButton.closest<HTMLElement>(
        '[data-accordion-component="AccordionItem"]'
      )
      const firstAnnotationText = within(firstAnnotationItem!).getByLabelText('Annotation Text:')
      await performAndAssert(
        'First annotation text replaces the default',
        () => getAnnotationElements(canvasElement).map(element => element.getAttribute('aria-label')),
        async () => {
          await user.clear(firstAnnotationText)
          await user.type(firstAnnotationText, 'First map annotation')
        },
        (_before, after) =>
          after.length === 1 &&
          after[0] === 'Annotation text that reads: First map annotation' &&
          !after.includes('Annotation text that reads: New annotation')
      )
      expect(getAnnotationElements(canvasElement)[0]).toHaveAttribute('tabindex', '0')

      await performAndAssert(
        'Second default annotation appears without changing the first',
        () => getAnnotationElements(canvasElement).map(element => element.getAttribute('aria-label')),
        async () => user.click(addAnnotationButton),
        (before, after) =>
          before.length === 1 &&
          before.includes('Annotation text that reads: First map annotation') &&
          after.length === 2 &&
          after.includes('Annotation text that reads: First map annotation') &&
          after.includes('Annotation text that reads: New annotation')
      )

      const secondAnnotationButton = within(activeAnnotationsAccordion!).getByRole('button', { name: /New annotation/ })
      await user.click(secondAnnotationButton)
      const secondAnnotationItem = secondAnnotationButton.closest<HTMLElement>(
        '[data-accordion-component="AccordionItem"]'
      )
      const secondAnnotationText = within(secondAnnotationItem!).getByLabelText('Annotation Text:')
      await performAndAssert(
        'Second annotation text replaces the default',
        () => getAnnotationElements(canvasElement).map(element => element.getAttribute('aria-label')),
        async () => {
          await user.clear(secondAnnotationText)
          await user.type(secondAnnotationText, 'Second map annotation')
        },
        (_before, after) =>
          after.length === 2 &&
          after.includes('Annotation text that reads: First map annotation') &&
          after.includes('Annotation text that reads: Second map annotation') &&
          !after.includes('Annotation text that reads: New annotation')
      )

      const finalAnnotations = getAnnotationElements(canvasElement)
      expect(finalAnnotations).toHaveLength(2)
      for (const annotation of finalAnnotations) expect(annotation).toHaveAttribute('tabindex', '0')
      expect(
        consoleErrors.map(args => args.map(value => String(value)).join(' ')),
        'Expected the editor workflow to emit no console errors'
      ).toEqual([])
      expect(unhandledRejections).toEqual([])
    } finally {
      console.error = originalConsoleError
      window.removeEventListener('unhandledrejection', recordUnhandledRejection)
    }
  }
}
