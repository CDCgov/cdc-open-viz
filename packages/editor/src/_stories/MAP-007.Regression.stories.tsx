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

// Source regression: docs/qa/regression-scripts/build-a-multi-state-map.md

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
const EXPECTED_STATES = [
  { fipsCode: '01', stateName: 'Alabama' },
  { fipsCode: '12', stateName: 'Florida' },
  { fipsCode: '13', stateName: 'Georgia' },
  { fipsCode: '28', stateName: 'Mississippi' },
  { fipsCode: '53', stateName: 'Washington' },
  { fipsCode: '06', stateName: 'California' }
]
const EXPECTED_COUNTIES = { '01': 67, '06': 58, '12': 67, '13': 159, '28': 82, '53': 39 }
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

const renderedGeography = (root: HTMLElement) => {
  const groups = Array.from(root.querySelectorAll<SVGGElement>('g.county[data-geo-id]'))
  const prefixCounts = groups.reduce<Record<string, number>>((counts, group) => {
    const prefix = group.dataset.geoId!.slice(0, 2)
    counts[prefix] = (counts[prefix] || 0) + 1
    return counts
  }, {})
  return { total: groups.length, prefixCounts }
}

const selectedStateOutlines = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<SVGGElement>('g.single-state:not(.unselected)'))
const unselectedStateOutlines = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<SVGGElement>('g.single-state.unselected'))

export const MAP007: Story = {
  name: 'MAP-007 — Build a multi-state map',
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
      throw new Error(`Unexpected network request in MAP-007: ${url}`)
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
      expect(typeSection.querySelector<HTMLElement>('.cove-multiselect .selected')).toHaveTextContent('- Select -')

      const columnsSection = await openSection(canvas, canvasElement, 'Columns')
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

      await performAndAssert(
        'Selecting six states renders exactly their counties',
        () => ({ selected: latestConfig.general?.statesPicked || [], ...renderedGeography(canvasElement) }),
        async () => {
          for (const state of EXPECTED_STATES) {
            const currentMultiSelect = Array.from(
              canvasElement.querySelectorAll<HTMLElement>('.cove-multiselect')
            ).find(element => normalize(element.closest('label')?.textContent).startsWith('States Selector'))
            expect(currentMultiSelect).toBeTruthy()
            const toggle = currentMultiSelect!.querySelector<HTMLButtonElement>('button.expand')
            expect(toggle).toBeTruthy()
            if (toggle!.getAttribute('aria-label') === 'Expand') await user.click(toggle!)
            const option = await within(currentMultiSelect!).findByRole('option', { name: state.stateName })
            await user.click(option)
            const expectedSelection = EXPECTED_STATES.slice(0, EXPECTED_STATES.indexOf(state) + 1)
            await waitFor(() => expect(latestConfig.general.statesPicked).toEqual(expectedSelection))
          }
        },
        (_before, after) => after.selected.length === 6 && after.total === 472
      )

      await waitFor(() => expect(latestConfig.general.statesPicked).toEqual(EXPECTED_STATES))
      const stateMap = await canvas.findByRole('img', {
        name: 'Alabama, Florida, Georgia, Mississippi, Washington, California county map'
      })
      expect(stateMap).toBeVisible()
      await assertVisualizationRendered(canvasElement)
      await waitFor(() =>
        expect(renderedGeography(canvasElement)).toEqual({ total: 472, prefixCounts: EXPECTED_COUNTIES })
      )
      expect(Object.keys(renderedGeography(canvasElement).prefixCounts).sort()).toEqual([
        '01',
        '06',
        '12',
        '13',
        '28',
        '53'
      ])

      typeSection = await openSection(canvas, canvasElement, 'Type')
      const hideUnselected = labeled<HTMLInputElement>(typeSection, 'Hide Unselected States', 'input[type="checkbox"]')
      expect(hideUnselected).toBeChecked()
      expect(selectedStateOutlines(canvasElement)).toHaveLength(6)
      expect(unselectedStateOutlines(canvasElement)).toHaveLength(0)
      expect(typeSection.querySelectorAll('button[aria-label="Remove"]')).toHaveLength(6)

      expect(latestConfig.general.statesPicked).toEqual(EXPECTED_STATES)
      expect(latestConfig.general.hideUnselectedStates).toBe(true)
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
