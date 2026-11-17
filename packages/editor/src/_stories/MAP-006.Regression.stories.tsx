import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import {
  assertVisualizationRendered,
  openAccordion,
  performAndAssert,
  waitForAbsence,
  waitForEditor,
  waitForOptionsToPopulate,
  waitForPresence
} from '@cdc/core/helpers/testing'
import countyTopology from '../../../map/src/components/UsaMap/data/cb_2019_us_county_20m.json'
import CdcEditor from '../CdcEditor'

// Source regression: docs/qa/regression-scripts/build-a-single-state-map.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Map Scripts',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type Config = Record<string, any>
type Canvas = ReturnType<typeof within>

const TOPOLOGY_URL = 'https://www.cdc.gov/TemplatePackage/contrib/data/county-topography/cb_2019_us_county_20m.json'
const normalize = (value: string | null | undefined) => value?.replace(/\s+/g, ' ').trim() || ''

const accordionButton = (root: HTMLElement, name: string) =>
  Array.from(root.querySelectorAll<HTMLElement>('[data-accordion-component="AccordionItemButton"]')).find(
    button => normalize(button.textContent).toLowerCase() === name.toLowerCase() && button.closest('.editor-panel')
  )

const openSection = async (canvas: Canvas, root: HTMLElement, name: string) => {
  await waitFor(() => expect(accordionButton(root, name), `Missing editor accordion ${name}`).toBeTruthy())
  if (accordionButton(root, name)?.getAttribute('aria-expanded') !== 'true') await openAccordion(canvas, name)
  await waitFor(() => expect(accordionButton(root, name)).toHaveAttribute('aria-expanded', 'true'))
  return accordionButton(root, name)!.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
}

const labeled = <T extends HTMLElement>(scope: HTMLElement, label: string, selector: string): T => {
  const control = Array.from(scope.querySelectorAll<T>(selector)).find(element =>
    normalize(element.closest('label')?.textContent).startsWith(label)
  )
  expect(control, `Expected ${selector} labelled ${label}`).toBeTruthy()
  return control!
}

const counties = (root: HTMLElement) => Array.from(root.querySelectorAll<SVGGElement>('g.county'))
const unselectedStates = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<SVGGElement>('g.single-state.unselected'))

const county = (root: HTMLElement, fips: string, name: string) => {
  const group = root.querySelector<SVGGElement>(`g.county[data-geo-id="${fips}"]`)
  expect(group, `Expected rendered county ${name}`).toBeTruthy()
  return group!
}

const visibleTooltipText = (root: HTMLElement) => {
  const tooltip = Array.from(root.querySelectorAll<HTMLElement>('.tooltip-test')).find(element => {
    const style = getComputedStyle(element)
    return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0'
  })
  return normalize(tooltip?.textContent)
}

const tooltipText = (element: Element) => {
  const container = document.createElement('div')
  container.innerHTML = element.getAttribute('data-tooltip-html') || ''
  return normalize(Array.from(container.children, child => child.textContent).join(' '))
}

export const MAP006: Story = {
  name: 'MAP-006 — Build a single-state map',
  args: { config: {} },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    const originalConsoleError = console.error
    const originalFetch = window.fetch
    const consoleErrors: string[] = []
    const unexpectedRequests: string[] = []
    const unhandledRejections: unknown[] = []
    const windowErrors: unknown[] = []
    let topologyRequests = 0
    let latestConfig: Config = {}

    const onConfig = (event: Event) => {
      latestConfig = JSON.parse((event as CustomEvent<string>).detail)
    }
    const onConsoleError = (...args: unknown[]) => {
      consoleErrors.push(args.map(value => String(value)).join(' '))
      originalConsoleError(...args)
    }
    const onRejection = (event: PromiseRejectionEvent) => unhandledRejections.push(event.reason)
    const onWindowError = (event: ErrorEvent) => windowErrors.push(event.error ?? event.message)

    console.error = onConsoleError
    window.addEventListener('updateVizConfig', onConfig)
    window.addEventListener('unhandledrejection', onRejection)
    window.addEventListener('error', onWindowError)
    window.fetch = async input => {
      const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url
      if (url === TOPOLOGY_URL) {
        topologyRequests += 1
        return new Response(JSON.stringify(countyTopology), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        })
      }
      unexpectedRequests.push(url)
      throw new Error(`Unexpected network request in MAP-006: ${url}`)
    }

    try {
      await user.click(await canvas.findByRole('button', { name: 'U.S. State' }))
      expect(canvas.getByText('2. Import Data')).toBeVisible()
      await user.click(canvas.getByText('2. Import Data'))
      await user.click(await canvas.findByRole('button', { name: 'United States: County Sample Data' }))

      expect(await canvas.findByText('Data Preview')).toBeVisible()
      for (const heading of [
        'FIPS Codes',
        'County',
        'Public Health Jurisdiction',
        'Percent Vaccinated',
        'Vaccination Coverage Group'
      ]) {
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

      await user.click(await canvas.findByRole('button', { name: 'Configure your visualization' }))
      await waitForEditor(canvas)

      let typeSection = await openSection(canvas, canvasElement, 'Type')
      expect(within(typeSection).getByRole('button', { name: 'U.S. State' })).toHaveClass('active')
      const mapType = Array.from(typeSection.querySelectorAll<HTMLSelectElement>('select')).find(select =>
        Array.from(select.options).some(option => option.value === 'data')
      )
      expect(mapType).toHaveValue('data')
      expect(labeled<HTMLSelectElement>(typeSection, 'County Census Year', 'select')).toHaveValue('2019')
      const initialStateSelector = typeSection.querySelector<HTMLElement>('.cove-multiselect .selected')
      expect(initialStateSelector).toHaveTextContent('- Select -')
      expect(initialStateSelector?.querySelector('button[aria-label="Remove"]')).not.toBeInTheDocument()

      let columnsSection = await openSection(canvas, canvasElement, 'Columns')
      const geography = columnsSection.querySelector<HTMLSelectElement>(
        '[data-required-field-control="map-geography"]'
      )!
      await waitForOptionsToPopulate(geography)
      expect(geography).toHaveValue('FIPS Codes')

      const dataColumn = columnsSection.querySelector<HTMLSelectElement>(
        '[data-required-field-control="map-data-column"]'
      )!
      await waitForOptionsToPopulate(dataColumn)
      await waitForPresence('.map-required-fields-alerts', canvasElement)
      await user.selectOptions(dataColumn, 'Percent Vaccinated')
      await waitForAbsence('.map-required-fields-alerts', canvasElement)
      await waitFor(() => expect(latestConfig.columns.primary.name).toBe('Percent Vaccinated'))
      expect(canvas.getByText('No State Selected')).toBeVisible()

      typeSection = await openSection(canvas, canvasElement, 'Type')
      const stateMultiSelect = Array.from(typeSection.querySelectorAll<HTMLElement>('.cove-multiselect')).find(
        element => normalize(element.closest('label')?.textContent).startsWith('States Selector')
      )
      expect(stateMultiSelect).toBeTruthy()
      await user.click(stateMultiSelect!.querySelector<HTMLButtonElement>('button[aria-label="Expand"]')!)
      const alabamaOption = Array.from(stateMultiSelect!.querySelectorAll<HTMLElement>('li[role="option"]')).find(
        option => normalize(option.textContent) === 'Alabama'
      )
      expect(alabamaOption).toBeTruthy()
      await user.click(alabamaOption!)

      await waitFor(() => expect(latestConfig.general.statesPicked).toEqual([{ fipsCode: '01', stateName: 'Alabama' }]))
      const stateMap = await canvas.findByRole('img', { name: 'Alabama county map' })
      expect(stateMap).toBeVisible()
      await assertVisualizationRendered(canvasElement)
      await waitFor(() => expect(counties(canvasElement)).toHaveLength(67))
      expect(canvasElement.querySelectorAll('.legend-container linearGradient stop')).toHaveLength(5)
      const legendLabels = Array.from(canvasElement.querySelectorAll<SVGTextElement>('.legend-container svg text')).map(
        label => normalize(label.textContent)
      )
      expect(legendLabels).toHaveLength(5)
      for (const label of legendLabels) expect(label).toMatch(/\d/)

      const autauga = county(canvasElement, '01001', 'Autauga County')
      const baldwin = county(canvasElement, '01003', 'Baldwin County')
      expect(tooltipText(autauga)).toContain('County: Autauga Percent Vaccinated: 34.13')
      expect(tooltipText(autauga)).not.toContain('County: Autauga County')
      expect(tooltipText(baldwin)).toContain('County: Baldwin Percent Vaccinated: 37.55')
      expect(tooltipText(baldwin)).not.toContain('County: Baldwin County')

      await performAndAssert(
        'Autauga County hover shows its mapped vaccination value',
        () => visibleTooltipText(canvasElement),
        async () => user.hover(autauga),
        (_before, after) =>
          after.includes('County: Autauga') &&
          !after.includes('County: Autauga County') &&
          after.includes('Percent Vaccinated: 34.13')
      )
      await user.unhover(autauga)

      typeSection = await openSection(canvas, canvasElement, 'Type')
      const hideUnselected = labeled<HTMLInputElement>(typeSection, 'Hide Unselected States', 'input[type="checkbox"]')
      expect(hideUnselected).toBeChecked()
      expect(unselectedStates(canvasElement)).toHaveLength(0)

      await performAndAssert(
        'Unselected state outlines appear without removing Alabama counties',
        () => ({ outlines: unselectedStates(canvasElement).length, counties: counties(canvasElement).length }),
        async () => user.click(hideUnselected),
        (before, after) =>
          before.outlines === 0 && after.outlines > 0 && before.counties === 67 && after.counties === 67
      )
      for (const outline of unselectedStates(canvasElement)) {
        expect(getComputedStyle(outline).fill).toBe('rgb(211, 211, 211)')
        expect(getComputedStyle(outline).opacity).toBe('0.3')
      }

      typeSection = await openSection(canvas, canvasElement, 'Type')
      const activeHideUnselected = labeled<HTMLInputElement>(
        typeSection,
        'Hide Unselected States',
        'input[type="checkbox"]'
      )
      await performAndAssert(
        'Unselected state outlines hide without removing Alabama counties',
        () => ({ outlines: unselectedStates(canvasElement).length, counties: counties(canvasElement).length }),
        async () => user.click(activeHideUnselected),
        (before, after) =>
          before.outlines > 0 && after.outlines === 0 && before.counties === 67 && after.counties === 67
      )
      expect(activeHideUnselected).toBeChecked()
      await waitFor(() => expect(latestConfig.general.hideUnselectedStates).toBe(true))

      columnsSection = await openSection(canvas, canvasElement, 'Columns')
      expect(
        columnsSection.querySelector<HTMLSelectElement>('[data-required-field-control="map-geography"]')
      ).toHaveValue('FIPS Codes')
      expect(
        columnsSection.querySelector<HTMLSelectElement>('[data-required-field-control="map-data-column"]')
      ).toHaveValue('Percent Vaccinated')
      expect(latestConfig.general.statesPicked).toEqual([{ fipsCode: '01', stateName: 'Alabama' }])
      expect(topologyRequests).toBe(1)
      expect(unexpectedRequests).toEqual([])
      expect(consoleErrors).toEqual([])
      expect(unhandledRejections).toEqual([])
      expect(windowErrors).toEqual([])
    } finally {
      console.error = originalConsoleError
      window.fetch = originalFetch
      window.removeEventListener('updateVizConfig', onConfig)
      window.removeEventListener('unhandledrejection', onRejection)
      window.removeEventListener('error', onWindowError)
    }
  }
}
