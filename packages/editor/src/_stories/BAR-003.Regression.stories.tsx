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
import CdcEditor from '../CdcEditor'

// Source regression: docs/qa/regression-scripts/configure-suppressed-isolated-bar.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Chart Scripts/Bar Chart',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type User = ReturnType<typeof userEvent.setup>

const CSV = `Quarter,Cases,Hospitalizations
Q1,120,80
Q2,ABC,110
Q3,150,95
Q4,220,140`

const EXPECTED_ROWS = [
  ['Q1', '120', '80'],
  ['Q2', 'ABC', '110'],
  ['Q3', '150', '95'],
  ['Q4', '220', '140']
]

const normalize = (value: string | null | undefined) => value?.replace(/\s+/g, ' ').trim() || ''
const approximatelyEqual = (left: number, right: number) => Math.abs(left - right) < 0.5

const getRequiredAlerts = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<HTMLElement>('.chart-required-fields-alerts .alert-info'))

const requiredAlertText = (root: HTMLElement) =>
  getRequiredAlerts(root)
    .map(alert => normalize(alert.textContent))
    .join('|')

const expectRequiredFields = (root: HTMLElement, expected: Array<{ section: string; field: string }>) => {
  const alerts = getRequiredAlerts(root)
  expect(alerts).toHaveLength(expected.length)
  expected.forEach(({ section, field }) => {
    const alert = alerts.find(candidate => candidate.textContent?.includes(`Missing field: ${field}.`))
    expect(alert, `Expected missing-field alert for ${field}`).toBeTruthy()
    expect(within(alert!).getByRole('button', { name: `Open ${section} and focus ${field}` })).toBeVisible()
  })
}

const assertAlertNavigation = async (root: HTMLElement, section: string, field: string, target: string, user: User) => {
  const action = within(root).getByRole('button', { name: `Open ${section} and focus ${field}` })
  const control = root.querySelector(`[data-required-field-control="${target}"]`)
  expect(control, `Expected required control for ${field}`).toBeTruthy()
  await performAndAssert(
    `The ${field} alert opens ${section} and focuses its required control`,
    () => ({
      expanded: root.querySelector(`[data-required-field-section="${target}"]`)?.getAttribute('aria-expanded'),
      focused: root.ownerDocument.activeElement === control
    }),
    () => user.click(action),
    (_before, after) => after.expanded === 'true' && after.focused
  )
}

const chartBody = (root: HTMLElement) => {
  const body = root.querySelector<HTMLElement>('.cove-visualization__body')
  expect(body, 'Expected rendered chart body').toBeTruthy()
  return body!
}

const tooltipIdentity = (path: SVGPathElement) => {
  const container = document.createElement('div')
  container.innerHTML = path.dataset.tooltipHtml || ''
  const category = normalize(container.querySelector('.tooltip-heading')?.textContent)
  const rows = Array.from(container.querySelectorAll('li'), item => normalize(item.textContent))
  const series = ['Cases', 'Hospitalizations'].find(candidate => rows.some(row => row.startsWith(`${candidate}:`)))
  expect(category, 'Expected Bar tooltip category heading').toMatch(/^Q[1-4]$/)
  expect(series, `Expected Bar tooltip series row for ${category}: ${rows.join('|')}`).toBeTruthy()
  return { category, series: series! }
}

const barState = (root: HTMLElement) =>
  Array.from(
    chartBody(root).querySelectorAll<SVGPathElement>(
      'g[class*="bar-group-"] path[data-tooltip-id^="cdc-open-viz-tooltip-"]'
    )
  ).map(path => {
    const bounds = path.getBBox()
    const identity = tooltipIdentity(path)
    return {
      ...identity,
      display: getComputedStyle(path).display,
      opacity: Number(getComputedStyle(path).opacity),
      x: bounds.x,
      y: bounds.y,
      width: bounds.width,
      height: bounds.height,
      bottom: bounds.y + bounds.height,
      data: path.getAttribute('d') || '',
      text: normalize(path.parentElement?.textContent)
    }
  })

type BarState = ReturnType<typeof barState>

const hasFiniteGeometry = (bar: BarState[number]) =>
  bar.data.length > 0 &&
  !/NaN|undefined|null/.test(bar.data) &&
  [bar.x, bar.y, bar.width, bar.height, bar.bottom].every(Number.isFinite) &&
  bar.width > 0 &&
  bar.height > 0

const validOrdinaryBar = (bar: BarState[number]) => bar.display !== 'none' && hasFiniteGeometry(bar) && bar.height > 3

const commonBaseline = (bars: BarState) => {
  const ordinary = bars.filter(validOrdinaryBar)
  expect(ordinary.length, 'Expected ordinary bars for baseline comparison').toBeGreaterThan(0)
  const baseline = ordinary[0].bottom
  expect(ordinary.every(bar => approximatelyEqual(bar.bottom, baseline))).toBe(true)
  return baseline
}

const suppressedCasesQ2 = (bars: BarState) =>
  bars.filter(bar => bar.series === 'Cases' && bar.category === 'Q2' && bar.text.includes('**'))

const suppressionLegendText = (root: HTMLElement) => {
  const item = root.querySelector<HTMLElement>('.legend-container .legend-preliminary')
  return item
    ? Array.from(item.children, child => normalize(child.textContent))
        .filter(Boolean)
        .join(' ')
    : ''
}

const seriesLegend = (canvas: ReturnType<typeof within>, name: string) =>
  canvas.getByRole('button', { name, exact: true })

export const BAR003: Story = {
  name: 'BAR-003 — Configure suppressed and isolated Bar data',
  args: { config: {} },
  parameters: { test: { timeout: 60000 } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    const originalConsoleError = console.error
    const consoleErrors: string[] = []
    const unhandledRejections: unknown[] = []
    const windowErrors: unknown[] = []
    const onConsoleError = (...args: unknown[]) => {
      consoleErrors.push(args.map(String).join(' '))
      originalConsoleError(...args)
    }
    const onRejection = (event: PromiseRejectionEvent) => unhandledRejections.push(event.reason)
    const onWindowError = (event: ErrorEvent) => windowErrors.push(event.error ?? event.message)

    console.error = onConsoleError
    window.addEventListener('unhandledrejection', onRejection)
    window.addEventListener('error', onWindowError)

    try {
      await user.click(await canvas.findByRole('button', { name: 'Bar' }))
      await user.click(canvas.getByText('2. Import Data'))
      const upload = canvasElement.querySelector<HTMLInputElement>('input[type="file"]')
      expect(upload, 'Expected Data Import file input').toBeTruthy()
      await user.upload(upload!, new File([CSV], 'suppressed-isolated-bar.csv', { type: 'text/csv' }))

      expect(await canvas.findByText('Data Preview')).toBeVisible()
      const previewTable = canvasElement.querySelector<HTMLTableElement>('table.data-table')
      expect(previewTable, 'Expected imported Data Preview table').toBeTruthy()
      const preview = within(previewTable!)
      await waitFor(() => expect(preview.getAllByRole('row', { hidden: true })).toHaveLength(5))
      for (const heading of ['Quarter', 'Cases', 'Hospitalizations']) {
        expect(preview.getByRole('columnheader', { name: heading, hidden: true })).toBeVisible()
      }
      const rows = preview.getAllByRole('row', { hidden: true }).slice(1)
      expect(
        rows.map(row =>
          within(row)
            .getAllByRole('cell', { hidden: true })
            .map(cell => normalize(cell.textContent))
        )
      ).toEqual(EXPECTED_ROWS)

      const vertical = canvas.getByRole('button', { name: /^Vertical/ })
      await user.click(vertical)
      expect(vertical).toHaveClass('active')
      const yesSeries = canvas.getByRole('button', { name: 'Yes', exact: true })
      await user.click(yesSeries)
      const singleRow = canvas.getByRole('button', { name: /^Single Row/ })
      await user.click(singleRow)

      await user.click(await canvas.findByRole('button', { name: 'Configure your visualization' }))
      await waitForEditor(canvas)
      await waitForPresence('.chart-required-fields-alerts .alert-info', canvasElement)
      expectRequiredFields(canvasElement, [
        { section: 'Data Series', field: 'Add Data Series' },
        { section: 'Date/Category Axis', field: 'Data Key' }
      ])
      expect(canvasElement.querySelector('.cove-visualization__body')).toBeNull()

      await assertAlertNavigation(canvasElement, 'Data Series', 'Add Data Series', 'data-series', user)
      const firstSeries = canvas.getByRole('combobox', { name: /^Add Data Series/ }) as HTMLSelectElement
      await waitForOptionsToPopulate(firstSeries)
      await user.selectOptions(firstSeries, 'Cases')
      expect(requiredAlertText(canvasElement)).not.toContain('Add Data Series')

      await assertAlertNavigation(canvasElement, 'Date/Category Axis', 'Data Key', 'date-category-axis', user)
      const dataKey = canvas.getByRole('combobox', { name: /^Data Key/ }) as HTMLSelectElement
      await waitForOptionsToPopulate(dataKey)
      await user.selectOptions(dataKey, 'Quarter')
      await waitForAbsence('.chart-required-fields-alerts', canvasElement)
      await assertVisualizationRendered(canvasElement)

      await openAccordion(canvas, 'Data Series')
      expect(canvas.getByRole('button', { name: 'Data Series', exact: true })).toHaveAttribute('aria-expanded', 'true')
      const secondSeries = canvas.getByRole('combobox', { name: /^Add Data Series/ }) as HTMLSelectElement
      await waitForOptionsToPopulate(secondSeries)
      await performAndAssert(
        'Chooser settings produce four vertical grouped categories and seven ordinary numeric bars',
        () => ({
          bars: barState(canvasElement),
          groups: Array.from(canvasElement.querySelectorAll<SVGGElement>('g[class*="bar-group-"]')).map(group =>
            group.classList.contains('vertical')
          ),
          stacked: canvasElement.querySelectorAll('g[id^="barStack"]').length
        }),
        () => user.selectOptions(secondSeries, 'Hospitalizations'),
        (before, after) =>
          before.bars.length === 4 &&
          after.bars.length === 8 &&
          after.groups.length === 4 &&
          after.groups.every(Boolean) &&
          after.stacked === 0 &&
          after.bars.filter(validOrdinaryBar).length === 7 &&
          after.bars.filter(bar => bar.series === 'Hospitalizations' && validOrdinaryBar(bar)).length === 4
      )

      await user.click(canvas.getByRole('button', { name: /Add Special Bar/ }))
      const suppressedButtonCandidate = canvas
        .getAllByRole('button', { name: /Suppressed Data/ })
        .find(button => button.getAttribute('data-accordion-component') === 'AccordionItemButton')
      expect(suppressedButtonCandidate, 'Expected Suppressed Data accordion button').toBeTruthy()
      const suppressedButton = suppressedButtonCandidate!
      await user.click(suppressedButton)
      expect(suppressedButton).toHaveAttribute('aria-expanded', 'true')
      const suppressedItem = suppressedButton.closest<HTMLElement>('.series-item')
      expect(suppressedItem, 'Expected scoped Suppressed Data editor').toBeTruthy()
      const suppressedControls = within(suppressedItem!)
      const suppressionSeries = suppressedControls.getByRole('combobox', {
        name: /^Add Data Series/
      }) as HTMLSelectElement
      const suppressionValue = suppressedControls.getByRole('textbox', {
        name: /Suppressed Data\s+Value/i
      }) as HTMLInputElement
      const suppressionSymbol = suppressedControls.getByRole('combobox', {
        name: /suppression symbol/i
      }) as HTMLSelectElement
      await waitForOptionsToPopulate(suppressionSeries)
      await waitForOptionsToPopulate(suppressionSymbol)
      await user.selectOptions(suppressionSeries, 'Cases')
      await user.clear(suppressionValue)
      await user.type(suppressionValue, 'ABC')
      await performAndAssert(
        'Cases Q2 suppression has finite baseline geometry, a marker, and a suppression legend',
        () => ({ bars: barState(canvasElement), legend: suppressionLegendText(canvasElement) }),
        () => user.selectOptions(suppressionSymbol, 'Double Asterisk'),
        (_before, after) => {
          const suppressed = suppressedCasesQ2(after.bars)
          const baseline = commonBaseline(after.bars)
          return (
            suppressed.length === 1 &&
            suppressed[0].display !== 'none' &&
            hasFiniteGeometry(suppressed[0]) &&
            approximatelyEqual(suppressed[0].height, 3) &&
            approximatelyEqual(suppressed[0].bottom, baseline) &&
            after.bars.filter(bar => bar.text.includes('**')).length === 1 &&
            after.bars.filter(bar => bar.series === 'Hospitalizations' && validOrdinaryBar(bar)).length === 4 &&
            after.legend === '** Suppressed'
          )
        }
      )

      const dataSeriesAccordion = canvas.getByRole('button', { name: 'Data Series', exact: true })
      await user.click(dataSeriesAccordion)
      expect(dataSeriesAccordion).toHaveAttribute('aria-expanded', 'false')
      await openAccordion(canvas, 'Legend')
      expect(canvas.getByRole('button', { name: 'Legend', exact: true })).toHaveAttribute('aria-expanded', 'true')
      const behavior = canvas.getByLabelText('Legend Behavior (When clicked)') as HTMLSelectElement
      await user.selectOptions(behavior, 'highlight')
      expect(behavior).toHaveValue('highlight')
      await performAndAssert(
        'Highlight behavior keeps every bar visible and de-emphasizes Hospitalizations',
        () => barState(canvasElement),
        () => user.click(seriesLegend(canvas, 'Cases')),
        (_before, after) =>
          after.filter(bar => bar.display !== 'none').length === 8 &&
          after.filter(bar => bar.series === 'Cases' && bar.opacity === 1).length === 4 &&
          after.filter(bar => bar.series === 'Hospitalizations' && bar.opacity === 0.2).length === 4
      )
      await performAndAssert(
        'Show All clears highlighted-series opacity',
        () => barState(canvasElement),
        () => user.click(canvas.getByRole('button', { name: 'Show All' })),
        (before, after) =>
          before.some(bar => bar.opacity === 0.2) &&
          after.length === 8 &&
          after.every(bar => bar.display !== 'none' && bar.opacity === 1)
      )
      await user.selectOptions(behavior, 'isolate')
      expect(behavior).toHaveValue('isolate')

      await user.click(canvas.getByRole('button', { name: 'Add Isolate Value' }))
      const isolateValue = canvas.getByRole('combobox', { name: 'Isolate Value' }) as HTMLSelectElement
      await waitForOptionsToPopulate(isolateValue)
      await performAndAssert(
        'Isolate Value handler selects Hospitalizations and hides Cases',
        () => barState(canvasElement),
        () => user.selectOptions(isolateValue, 'Hospitalizations'),
        (_before, after) =>
          after.filter(bar => bar.series === 'Hospitalizations' && bar.display !== 'none').length === 4 &&
          after.filter(bar => bar.series === 'Cases' && bar.display === 'none').length === 4
      )
      await performAndAssert(
        'Isolate Value handler explicitly selects Cases and preserves Cases Q2 suppression',
        () => barState(canvasElement),
        () => user.selectOptions(canvas.getByRole('combobox', { name: 'Isolate Value' }), 'Cases'),
        (_before, after) =>
          after.filter(bar => bar.series === 'Cases' && bar.display !== 'none').length === 4 &&
          after.filter(bar => bar.series === 'Hospitalizations' && bar.display === 'none').length === 4 &&
          suppressedCasesQ2(after).length === 1 &&
          suppressedCasesQ2(after)[0].display !== 'none'
      )
      expect(seriesLegend(canvas, 'Cases')).toHaveClass('highlighted')
      expect(seriesLegend(canvas, 'Hospitalizations')).toHaveClass('inactive')
      expect(canvas.getByRole('button', { name: 'Show All' })).toBeVisible()

      await performAndAssert(
        'Show All restores both series and the finite baseline-aligned Cases Q2 suppression',
        () => barState(canvasElement),
        () => user.click(canvas.getByRole('button', { name: 'Show All' })),
        (before, after) => {
          const suppressed = suppressedCasesQ2(after)
          const baseline = commonBaseline(after)
          return (
            before.filter(bar => bar.display !== 'none').length === 4 &&
            after.length === 8 &&
            after.every(bar => bar.display !== 'none') &&
            suppressed.length === 1 &&
            hasFiniteGeometry(suppressed[0]) &&
            approximatelyEqual(suppressed[0].height, 3) &&
            approximatelyEqual(suppressed[0].bottom, baseline)
          )
        }
      )
      expect(canvas.queryByRole('button', { name: 'Show All' })).not.toBeInTheDocument()
      expect(suppressionLegendText(canvasElement)).toBe('** Suppressed')
      expect(consoleErrors).toEqual([])
      expect(unhandledRejections).toEqual([])
      expect(windowErrors).toEqual([])
    } finally {
      console.error = originalConsoleError
      window.removeEventListener('unhandledrejection', onRejection)
      window.removeEventListener('error', onWindowError)
    }
  }
}
