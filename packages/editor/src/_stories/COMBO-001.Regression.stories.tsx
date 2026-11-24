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

// Source regression: docs/qa/regression-scripts/build-and-configure-a-combo-chart.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Charts/Scripts/Combo Chart',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type Canvas = ReturnType<typeof within>
type User = ReturnType<typeof userEvent.setup>

const CSV = `Quarter,Cases,Rate
Q1,120,1200
Q2,180,1600
Q3,150,1400
Q4,220,2000`

const EXPECTED_ROWS = [
  ['Q1', '120', '1200'],
  ['Q2', '180', '1600'],
  ['Q3', '150', '1400'],
  ['Q4', '220', '2000']
]
const EXPECTED_CASES = ['120', '180', '150', '220']
const EXPECTED_RATE = ['1200', '1600', '1400', '2000']

const normalize = (value: string | null | undefined) => value?.replace(/\s+/g, ' ').trim() || ''

const accordionButton = (root: HTMLElement, name: string) =>
  Array.from(root.querySelectorAll<HTMLElement>('[data-accordion-component="AccordionItemButton"]')).find(
    button => normalize(button.textContent).toLowerCase() === name.toLowerCase() && button.closest('.editor-panel')
  )

const openSection = async (canvas: Canvas, root: HTMLElement, name: string) => {
  await waitFor(() => expect(accordionButton(root, name), `Missing editor accordion ${name}`).toBeTruthy())
  if (accordionButton(root, name)?.getAttribute('aria-expanded') !== 'true') await openAccordion(canvas, name)
  await waitFor(() => expect(accordionButton(root, name)).toHaveAttribute('aria-expanded', 'true'))
}

const sectionPanel = (root: HTMLElement, name: string) => {
  const panel = accordionButton(root, name)
    ?.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')
    ?.querySelector<HTMLElement>('[data-accordion-component="AccordionItemPanel"]')
  expect(panel, `Missing open panel for ${name}`).toBeTruthy()
  return panel!
}

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
    `${field} guidance opens and focuses ${section}`,
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
  expect(body, 'Expected rendered Combo Chart body').toBeTruthy()
  return body!
}

const barPaths = (root: HTMLElement) =>
  Array.from(
    root.querySelectorAll<SVGPathElement>('g[class*="bar-group-"] path[data-tooltip-id^="cdc-open-viz-tooltip-"]')
  )

const linePaths = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<SVGPathElement>('g.line-chart-group path.visx-linepath'))

const semanticText = (root: Element) => {
  const rows = Array.from(root.querySelectorAll('li'), row => normalize(row.textContent)).filter(Boolean)
  return rows.length ? rows.join(' ') : normalize(root.textContent)
}

const tooltipText = (target: Element) => {
  const html = target.getAttribute('data-tooltip-html') || ''
  return semanticText(new DOMParser().parseFromString(html, 'text/html').body)
}

const hasExactSeriesValue = (text: string, series: string, value: string) =>
  new RegExp(`(?:^|\\s)${series}:\\s*${value}(?=\\s|$)`).test(normalize(text))

const seriesBarValues = (root: HTMLElement, series: string) =>
  barPaths(root).flatMap(path => {
    const match = tooltipText(path).match(new RegExp(`(?:^|\\s)${series}:\\s*([\\d,.-]+)(?=\\s|$)`))
    return match ? [match[1].replace(/,/g, '')] : []
  })

const exactBarTarget = (root: HTMLElement, quarter: string, series: string, value: string) =>
  barPaths(root).find(path => {
    const text = tooltipText(path)
    return text.startsWith(`${quarter} `) && hasExactSeriesValue(text, series, value)
  })

const validBars = (paths: SVGPathElement[], expectedCount: number) =>
  paths.length === expectedCount &&
  paths.every(path => {
    const bounds = path.getBBox()
    const data = path.getAttribute('d') || ''
    return (
      data.length > 0 &&
      !/NaN|undefined|null/.test(data) &&
      Number.isFinite(bounds.width) &&
      Number.isFinite(bounds.height) &&
      bounds.width > 0 &&
      bounds.height > 0
    )
  })

const validLine = (paths: SVGPathElement[]) =>
  paths.length === 1 &&
  Boolean(paths[0].getAttribute('d')) &&
  !/NaN|undefined|null/.test(paths[0].getAttribute('d') || '') &&
  paths[0].getTotalLength() > 0

const geometryState = (root: HTMLElement) => {
  const bars = barPaths(root)
  const lines = linePaths(root)
  return {
    barCount: bars.length,
    barsValid: validBars(bars, bars.length),
    casesValues: seriesBarValues(root, 'Cases'),
    rateValues: seriesBarValues(root, 'Rate'),
    lineCount: lines.length,
    lineValid: validLine(lines),
    lineData: lines[0]?.getAttribute('d') || ''
  }
}

const rightAxisState = (root: HTMLElement) => {
  const axis = chartBody(root).querySelector('.right-axis')
  const ticks = Array.from(chartBody(root).querySelectorAll<SVGTextElement>('.right-axis .vx-axis-tick text'))
    .filter(isRendered)
    .map(tick => normalize(tick.textContent))
  const numericTicks = ticks.map(tick => Number(tick.replace(/,/g, '')))
  return {
    present: Boolean(axis),
    visible: isRendered(axis),
    ticks,
    ticksMeaningful: ticks.length > 1 && numericTicks.every(Number.isFinite) && new Set(numericTicks).size > 1,
    title: normalize(
      chartBody(root).querySelector('.right-axis text.y-label')?.textContent ||
        root.querySelector('.y-axis-top-title--right')?.textContent
    )
  }
}

const legendLabels = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<HTMLElement>('.legend-container .legend-item[class*="legend-text--"]'))
    .filter(isRendered)
    .map(item => normalize(item.textContent))
    .filter(Boolean)

const expectExactLegend = (root: HTMLElement) => {
  const labels = legendLabels(root)
  expect(labels).toEqual(['Cases', 'Rate'])
  expect(new Set(labels).size).toBe(2)
}

const seriesToggle = (root: HTMLElement, name: string) =>
  within(sectionPanel(root, 'Data Series'))
    .getAllByRole('button', { name: `move ${name}` })
    .find(button => button.getAttribute('data-accordion-component') === 'AccordionItemButton')

const openSeries = async (root: HTMLElement, name: string, user: User) => {
  const toggle = seriesToggle(root, name)
  expect(toggle, `Expected ${name} series editor`).toBeTruthy()
  if (toggle?.getAttribute('aria-expanded') !== 'true') await user.click(toggle!)
  const item = toggle?.closest<HTMLElement>('.series-item')
  expect(item, `Expected ${name} series item`).toBeTruthy()
  return item!
}

const seriesSelect = (item: HTMLElement, labelText: string) => {
  const label = Array.from(item.querySelectorAll<HTMLLabelElement>('label')).find(candidate =>
    normalize(candidate.textContent).startsWith(labelText)
  )
  const select = label?.querySelector<HTMLSelectElement>('select')
  expect(select, `Expected ${labelText} select`).toBeTruthy()
  return select!
}

const optionalSeriesSelect = (item: HTMLElement, labelText: string) => {
  const label = Array.from(item.querySelectorAll<HTMLLabelElement>('label')).find(candidate =>
    normalize(candidate.textContent).startsWith(labelText)
  )
  return label?.querySelector<HTMLSelectElement>('select') || null
}

const seriesNameInput = (item: HTMLElement) => {
  const label = Array.from(item.querySelectorAll<HTMLLabelElement>('label')).find(
    candidate => normalize(candidate.textContent) === 'Series Name'
  )
  const input = label?.nextElementSibling as HTMLInputElement | null
  expect(input, 'Expected Series Name input').toBeTruthy()
  return input!
}

const replaceText = async (user: User, control: HTMLElement, value: string) => {
  await user.clear(control)
  await user.type(control, value)
}

const renderedTable = (root: HTMLElement) => {
  const table = chartBody(root).querySelector<HTMLElement>('table.data-table')
  expect(root.querySelector('.data-table-container'), 'Expected visible Combo data table container').toBeVisible()
  expect(table, 'Expected rendered Combo data table semantics').toBeTruthy()
  return table!
}

const renderedTableRows = (root: HTMLElement) =>
  Array.from(renderedTable(root).querySelectorAll<HTMLElement>('tbody tr')).map(row =>
    Array.from(row.querySelectorAll('td'), cell => normalize(cell.textContent))
  )

function isRendered(element: Element | null) {
  if (!element) return false
  const style = getComputedStyle(element)
  const bounds = element.getBoundingClientRect()
  return style.display !== 'none' && style.visibility !== 'hidden' && bounds.width > 0 && bounds.height > 0
}

const renderedTableHeadings = (root: HTMLElement) =>
  Array.from(renderedTable(root).querySelectorAll('thead th'), heading =>
    normalize(heading.querySelector(':scope > span:first-child')?.textContent)
  )

const isSolidLine = (path: SVGPathElement) => {
  const dash = path.getAttribute('stroke-dasharray')?.trim()
  if (dash === undefined || dash === '' || dash === 'none') return true
  const segments = dash.split(/[ ,]+/).map(Number)
  return segments.length > 0 && segments.every(segment => Number.isFinite(segment) && segment === 0)
}

const visibleTooltipText = (root: HTMLElement) =>
  semanticText(
    Array.from(root.querySelectorAll<HTMLElement>('.tooltip')).find(
      tooltip => semanticText(tooltip) && isRendered(tooltip)
    ) || root.ownerDocument.createElement('div')
  )

export const COMBO001: Story = {
  name: 'COMBO-001 — Build and configure a Combo Chart',
  args: { config: {} },
  parameters: { test: { timeout: 60000 } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    await user.click(await canvas.findByRole('button', { name: 'Combo Chart' }))
    await user.click(canvas.getByText('2. Import Data'))
    const upload = canvasElement.querySelector<HTMLInputElement>('input[type="file"]')
    expect(upload, 'Expected Data Import file input').toBeTruthy()
    await user.upload(upload!, new File([CSV], 'combo-chart-regression.csv', { type: 'text/csv' }))

    expect(await canvas.findByText('Data Preview')).toBeVisible()
    await waitFor(() => expect(canvasElement.querySelectorAll('table.data-table tbody tr')).toHaveLength(4))
    for (const heading of ['Quarter', 'Cases', 'Rate']) {
      expect(canvasElement.querySelector(`table.data-table th[title="${heading}"]`)).toBeVisible()
    }
    const previewRows = Array.from(canvasElement.querySelectorAll<HTMLElement>('table.data-table tbody tr'))
    expect(previewRows.map(row => Array.from(row.querySelectorAll('td'), cell => normalize(cell.textContent)))).toEqual(
      EXPECTED_ROWS
    )

    const vertical = canvas.getByRole('button', { name: /^Vertical/ })
    await user.click(vertical)
    expect(vertical).toHaveClass('active')
    const yes = canvas.getByRole('button', { name: 'Yes', exact: true })
    const no = canvas.getByRole('button', { name: 'No', exact: true })
    await performAndAssert(
      'Yes is the active multiple-series selection',
      () => ({ yes: yes.style.backgroundColor, no: no.style.backgroundColor }),
      () => user.click(yes),
      (_before, after) => after.yes === 'rgb(1, 93, 170)' && after.no === 'rgb(0, 52, 93)'
    )
    const singleRow = canvas.getByRole('button', { name: /^Single Row/ })
    const multipleRows = canvas.getByRole('button', { name: /^Multiple Rows/ })
    await performAndAssert(
      'Single Row is the active multi-series layout',
      () => ({ single: singleRow.className, multiple: multipleRows.className }),
      () => user.click(singleRow),
      (_before, after) => after.single.includes('active') && !after.multiple.includes('active')
    )

    await user.click(await canvas.findByRole('button', { name: 'Configure your visualization' }))
    await waitForEditor(canvas)
    await waitForPresence('.chart-required-fields-alerts .alert-info', canvasElement)
    expectRequiredFields(canvasElement, [
      { section: 'Data Series', field: 'Add Data Series' },
      { section: 'Date/Category Axis', field: 'Data Key' }
    ])
    expect(canvasElement.querySelector('.cove-visualization__body')).toBeNull()

    await assertAlertNavigation(canvasElement, 'Data Series', 'Add Data Series', 'data-series', user)
    const addCases = canvas.getByRole('combobox', { name: /^Add Data Series/ }) as HTMLSelectElement
    await waitForOptionsToPopulate(addCases)
    await performAndAssert(
      'Adding Cases leaves only Data Key missing',
      () => ({
        alerts: requiredAlertText(canvasElement),
        chart: canvasElement.querySelector('.cove-visualization__body')
      }),
      () => user.selectOptions(addCases, 'Cases'),
      (before, after) =>
        before.alerts.includes('Add Data Series') &&
        before.alerts.includes('Data Key') &&
        !after.alerts.includes('Add Data Series') &&
        after.alerts.includes('Data Key') &&
        after.chart === null
    )

    await assertAlertNavigation(canvasElement, 'Date/Category Axis', 'Data Key', 'date-category-axis', user)
    const dataKey = canvas.getByRole('combobox', { name: /^Data Key/ }) as HTMLSelectElement
    await waitForOptionsToPopulate(dataKey)
    await performAndAssert(
      'Quarter resolves requirements and renders four Cases bars only',
      () => ({ alerts: getRequiredAlerts(canvasElement).length, geometry: geometryState(canvasElement) }),
      () => user.selectOptions(dataKey, 'Quarter'),
      (before, after) =>
        before.alerts === 1 &&
        after.alerts === 0 &&
        after.geometry.barCount === 4 &&
        after.geometry.barsValid &&
        after.geometry.lineCount === 0
    )
    await waitForAbsence('.chart-required-fields-alerts', canvasElement)
    await assertVisualizationRendered(canvasElement)
    expect(rightAxisState(canvasElement).present).toBe(false)

    await openSection(canvas, canvasElement, 'Data Series')
    const addRate = canvas.getByRole('combobox', { name: /^Add Data Series/ }) as HTMLSelectElement
    await waitForOptionsToPopulate(addRate)
    await performAndAssert(
      'Rate initially adds a second Bar series',
      () => ({ geometry: geometryState(canvasElement), legend: legendLabels(canvasElement) }),
      () => user.selectOptions(addRate, 'Rate'),
      (before, after) =>
        before.geometry.barCount === 4 &&
        before.geometry.barsValid &&
        before.geometry.casesValues.join('|') === EXPECTED_CASES.join('|') &&
        before.geometry.rateValues.length === 0 &&
        after.geometry.barCount === 8 &&
        after.geometry.barsValid &&
        after.geometry.casesValues.join('|') === EXPECTED_CASES.join('|') &&
        after.geometry.rateValues.join('|') === EXPECTED_RATE.join('|') &&
        after.geometry.lineCount === 0 &&
        after.legend.join('|') === 'Cases|Rate' &&
        new Set(after.legend).size === 2
    )

    let rateItem = await openSeries(canvasElement, 'Rate', user)
    let seriesType = seriesSelect(rateItem, 'Series Type')
    expect(seriesType).toHaveValue('Bar')
    expect(optionalSeriesSelect(rateItem, 'Series Axis')).toBeNull()
    await performAndAssert(
      'Rate Line replaces its four bars with one meaningful path',
      () => geometryState(canvasElement),
      () => user.selectOptions(seriesType, 'Line'),
      (before, after) =>
        before.barCount === 8 &&
        before.barsValid &&
        before.casesValues.join('|') === EXPECTED_CASES.join('|') &&
        before.rateValues.join('|') === EXPECTED_RATE.join('|') &&
        after.barCount === 4 &&
        after.barsValid &&
        after.casesValues.join('|') === EXPECTED_CASES.join('|') &&
        after.rateValues.length === 0 &&
        after.lineCount === 1 &&
        after.lineValid
    )

    rateItem = await openSeries(canvasElement, 'Rate', user)
    let seriesAxis = seriesSelect(rateItem, 'Series Axis')
    expect(seriesAxis).toHaveValue('Left')
    await performAndAssert(
      'Rate Right rescales its line and creates a visible valid secondary axis',
      () => ({ geometry: geometryState(canvasElement), right: rightAxisState(canvasElement) }),
      () => user.selectOptions(seriesAxis, 'Right'),
      (before, after) =>
        !before.right.present &&
        before.geometry.lineData !== after.geometry.lineData &&
        after.geometry.lineValid &&
        after.right.present &&
        after.right.visible &&
        after.right.ticksMeaningful
    )

    rateItem = await openSeries(canvasElement, 'Rate', user)
    const rateName = seriesNameInput(rateItem)
    await performAndAssert(
      'Rate name updates its legend entry',
      () => legendLabels(canvasElement),
      () => replaceText(user, rateName, 'Rate per 1,000'),
      (before, after) =>
        before.join('|') === 'Cases|Rate' && after.join('|') === 'Cases|Rate per 1,000' && new Set(after).size === 2
    )
    rateItem = await openSeries(canvasElement, 'Rate', user)
    await performAndAssert(
      'Rate name restores the exact fixture legend entry',
      () => legendLabels(canvasElement),
      () => replaceText(user, seriesNameInput(rateItem), 'Rate'),
      (before, after) =>
        before.join('|') === 'Cases|Rate per 1,000' && after.join('|') === 'Cases|Rate' && new Set(after).size === 2
    )

    rateItem = await openSeries(canvasElement, 'Rate', user)
    const interpolation = seriesSelect(rateItem, 'Series Line Type')
    const linearPath = linePaths(canvasElement)[0].getAttribute('d')
    await performAndAssert(
      'Step interpolation changes Rate line geometry',
      () => linePaths(canvasElement)[0].getAttribute('d'),
      () => user.selectOptions(interpolation, 'curveStep'),
      (before, after) => before === linearPath && after !== before && Boolean(after)
    )
    await performAndAssert(
      'Linear interpolation restores Rate line geometry',
      () => linePaths(canvasElement)[0].getAttribute('d'),
      () => user.selectOptions(interpolation, 'curveLinear'),
      (_before, after) => after === linearPath
    )

    rateItem = await openSeries(canvasElement, 'Rate', user)
    seriesType = seriesSelect(rateItem, 'Series Type')
    await performAndAssert(
      'Medium Dashed renders the Rate dash pattern',
      () => linePaths(canvasElement)[0].getAttribute('stroke-dasharray'),
      () => user.selectOptions(seriesType, 'dashed-md'),
      (_before, after) => after === '10 5'
    )
    rateItem = await openSeries(canvasElement, 'Rate', user)
    seriesType = seriesSelect(rateItem, 'Series Type')
    expect(seriesType).toHaveValue('dashed-md')
    await performAndAssert(
      'Line restores a solid Rate path',
      () => ({
        dash: linePaths(canvasElement)[0].getAttribute('stroke-dasharray'),
        solid: isSolidLine(linePaths(canvasElement)[0])
      }),
      () => user.selectOptions(seriesType, 'Line'),
      (before, after) => before.dash === '10 5' && !before.solid && after.solid
    )
    rateItem = await openSeries(canvasElement, 'Rate', user)
    seriesType = seriesSelect(rateItem, 'Series Type')
    expect(seriesType).toHaveValue('Line')
    expect(isSolidLine(linePaths(canvasElement)[0])).toBe(true)

    await openSection(canvas, canvasElement, 'Right Value Axis')
    const rightLabel = canvasElement.querySelector<HTMLInputElement>('#input-yAxis-none-rightLabel')
    expect(rightLabel, 'Expected Right Value Axis label control').toBeTruthy()
    await performAndAssert(
      'Right-axis label renders exactly',
      () => rightAxisState(canvasElement).title,
      () => replaceText(user, rightLabel!, 'Rate per 1,000'),
      (_before, after) => after === 'Rate per 1,000'
    )

    expectExactLegend(canvasElement)
    await openSection(canvas, canvasElement, 'Data Table')
    const showDataTable = canvas.getByRole('checkbox', { name: /^Show Data Table/ })
    expect(showDataTable).toBeChecked()
    const dataTableContainer = canvasElement.querySelector<HTMLElement>('.data-table-container')
    expect(dataTableContainer).toBeVisible()
    const tableToggle = within(dataTableContainer!).getByRole('button', { name: /Data Table/ })
    await user.click(tableToggle)
    await waitFor(() => expect(chartBody(canvasElement).querySelector('table.data-table')).toBeVisible())
    const table = renderedTable(canvasElement)
    expect(renderedTableHeadings(canvasElement)).toEqual(['Quarter', 'Cases', 'Rate'])
    expect(renderedTableRows(canvasElement)).toEqual(EXPECTED_ROWS)

    const q1Cases = exactBarTarget(canvasElement, 'Q1', 'Cases', '120')
    expect(q1Cases, 'Expected Q1 Cases tooltip target').toBeTruthy()
    expect(hasExactSeriesValue(tooltipText(q1Cases!), 'Cases', '120')).toBe(true)
    expect(hasExactSeriesValue(tooltipText(q1Cases!), 'Cases', '1200')).toBe(false)
    await user.hover(q1Cases!)
    await waitFor(() => expect(visibleTooltipText(canvasElement)).toContain('Q1'))
    expect(hasExactSeriesValue(visibleTooltipText(canvasElement), 'Cases', '120')).toBe(true)
    expect(hasExactSeriesValue(visibleTooltipText(canvasElement), 'Cases', '1200')).toBe(false)
    await user.unhover(q1Cases!)

    await openSection(canvas, canvasElement, 'Data Series')
    rateItem = await openSeries(canvasElement, 'Rate', user)
    seriesType = seriesSelect(rateItem, 'Series Type')
    await performAndAssert(
      'Rate Bar restores eight bars and removes line and right axis',
      () => ({ geometry: geometryState(canvasElement), right: rightAxisState(canvasElement) }),
      () => user.selectOptions(seriesType, 'Bar'),
      (before, after) =>
        before.geometry.barCount === 4 &&
        before.geometry.barsValid &&
        before.geometry.lineCount === 1 &&
        before.geometry.lineValid &&
        before.right.present &&
        after.geometry.barCount === 8 &&
        after.geometry.barsValid &&
        after.geometry.casesValues.join('|') === EXPECTED_CASES.join('|') &&
        after.geometry.rateValues.join('|') === EXPECTED_RATE.join('|') &&
        after.geometry.lineCount === 0 &&
        !after.right.present
    )
    rateItem = await openSeries(canvasElement, 'Rate', user)
    expect(optionalSeriesSelect(rateItem, 'Series Axis')).toBeNull()
    seriesType = seriesSelect(rateItem, 'Series Type')
    await user.selectOptions(seriesType, 'Line')
    await waitFor(() => {
      expect(validBars(barPaths(canvasElement), 4)).toBe(true)
      expect(validLine(linePaths(canvasElement))).toBe(true)
      expect(rightAxisState(canvasElement).present).toBe(false)
    })
    rateItem = await openSeries(canvasElement, 'Rate', user)
    seriesAxis = seriesSelect(rateItem, 'Series Axis')
    expect(seriesAxis).toHaveValue('Left')
    await performAndAssert(
      'Final Rate Right restoration rescales the line and restores the visible labeled axis',
      () => ({ geometry: geometryState(canvasElement), right: rightAxisState(canvasElement) }),
      () => user.selectOptions(seriesAxis, 'Right'),
      (before, after) =>
        !before.right.present &&
        before.geometry.lineData !== after.geometry.lineData &&
        after.geometry.barCount === 4 &&
        after.geometry.barsValid &&
        after.geometry.casesValues.join('|') === EXPECTED_CASES.join('|') &&
        after.geometry.rateValues.length === 0 &&
        after.geometry.lineCount === 1 &&
        after.geometry.lineValid &&
        after.right.present &&
        after.right.visible &&
        after.right.ticksMeaningful &&
        after.right.title === 'Rate per 1,000'
    )

    expectExactLegend(canvasElement)
    expect(renderedTableHeadings(canvasElement)).toEqual(['Quarter', 'Cases', 'Rate'])
    expect(renderedTableRows(canvasElement)).toEqual(EXPECTED_ROWS)
    const finalQ1Cases = exactBarTarget(canvasElement, 'Q1', 'Cases', '120')
    expect(finalQ1Cases, 'Expected final Q1 Cases tooltip target').toBeTruthy()
    expect(hasExactSeriesValue(tooltipText(finalQ1Cases!), 'Cases', '120')).toBe(true)
    expect(hasExactSeriesValue(tooltipText(finalQ1Cases!), 'Cases', '1200')).toBe(false)
  }
}
