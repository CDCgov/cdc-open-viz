import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, userEvent, waitFor, within } from 'storybook/test'
import {
  assertVisualizationRendered,
  openAccordion,
  performAndAssert,
  waitForEditor,
  waitForOptionsToPopulate
} from '@cdc/core/helpers/testing'
import CdcEditor from '../CdcEditor'

// Source regression: docs/qa/regression-scripts/build-and-configure-a-forecast-chart.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Charts/Scripts/Forecast Chart',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type Canvas = ReturnType<typeof within>
type User = ReturnType<typeof userEvent.setup>

const CSV = `Date,Stage,Lower 50%,Upper 50%,Lower 90%,Upper 90%
2026-01-01,Estimate,90,110,75,125
2026-01-08,Estimate,98,118,82,135
2026-01-15,Estimate,105,126,88,144
2026-01-22,Forecast,101,130,80,154
2026-01-29,Forecast,96,132,72,160
2026-02-05,Forecast,91,136,65,168`

const HEADINGS = ['Date', 'Stage', 'Lower 50%', 'Upper 50%', 'Lower 90%', 'Upper 90%']
const EXPECTED_ROWS = [
  ['2026-01-01', 'Estimate', '90', '110', '75', '125'],
  ['2026-01-08', 'Estimate', '98', '118', '82', '135'],
  ['2026-01-15', 'Estimate', '105', '126', '88', '144'],
  ['2026-01-22', 'Forecast', '101', '130', '80', '154'],
  ['2026-01-29', 'Forecast', '96', '132', '72', '160'],
  ['2026-02-05', 'Forecast', '91', '136', '65', '168']
]

const EXPECTED_KEYS = [
  'forecast-ci:Estimate:percentage%3A50',
  'forecast-ci:Forecast:percentage%3A50',
  'forecast-ci:Estimate:percentage%3A90',
  'forecast-ci:Forecast:percentage%3A90'
]

const EXPECTED_LEGEND = ['50% CI Estimate', '50% CI Forecast', '90% CI Estimate', '90% CI Forecast']
const EXPECTED_STAGE_FILLS = { Estimate: '#99bce1', Forecast: '#f7b99a' }

const normalize = (value: string | null | undefined) => value?.replace(/\s+/g, ' ').trim() || ''

const accordionButton = (root: HTMLElement, name: string) =>
  Array.from(root.querySelectorAll<HTMLElement>('[data-accordion-component="AccordionItemButton"]')).find(
    button => normalize(button.textContent).toLowerCase() === name.toLowerCase() && button.closest('.editor-panel')
  )

const openSection = async (canvas: Canvas, root: HTMLElement, name: string) => {
  await waitFor(() => expect(accordionButton(root, name), `Missing editor accordion ${name}`).toBeTruthy())
  if (accordionButton(root, name)?.getAttribute('aria-expanded') !== 'true') await openAccordion(canvas, name)
  await waitFor(() =>
    expect(accordionButton(root, name), `Expected ${name} accordion to be expanded`).toHaveAttribute(
      'aria-expanded',
      'true'
    )
  )
}

const sectionPanel = (root: HTMLElement, name: string) => {
  const panel = accordionButton(root, name)
    ?.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')
    ?.querySelector<HTMLElement>('[data-accordion-component="AccordionItemPanel"]')
  expect(panel, `Missing open panel for ${name}`).toBeTruthy()
  return panel!
}

const isRendered = (element: Element | null) => {
  if (!element) return false
  const style = getComputedStyle(element)
  const bounds = element.getBoundingClientRect()
  return style.display !== 'none' && style.visibility !== 'hidden' && bounds.width > 0 && bounds.height > 0
}

const replaceText = async (user: User, control: HTMLElement, value: string) => {
  await user.clear(control)
  await user.type(control, value)
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

const groupItem = (seriesItem: HTMLElement, groupNumber: number) => {
  const toggle = within(seriesItem)
    .getAllByRole('button')
    .find(
      button =>
        button.getAttribute('data-accordion-component') === 'AccordionItemButton' &&
        normalize(button.textContent).startsWith(`Group ${groupNumber}`)
    )
  expect(toggle, `Expected confidence interval Group ${groupNumber}`).toBeTruthy()
  const item = toggle?.closest<HTMLElement>('.series-item')
  expect(item, `Expected confidence interval Group ${groupNumber} item`).toBeTruthy()
  return { toggle: toggle!, item: item! }
}

const configureConfidenceGroup = async (
  root: HTMLElement,
  seriesItem: HTMLElement,
  groupNumber: number,
  lowValue: string,
  highValue: string,
  expectedIncompleteGroupCount: number,
  user: User
) => {
  const group = groupItem(seriesItem, groupNumber)
  if (group.toggle.getAttribute('aria-expanded') !== 'true') await user.click(group.toggle)
  const low = seriesSelect(group.item, 'Low Confidence Interval')
  const high = seriesSelect(group.item, 'High Confidence Interval')
  await waitForOptionsToPopulate(low)
  await waitForOptionsToPopulate(high)
  await user.selectOptions(low, lowValue)
  await waitFor(() => expect(forecastGroups(root)).toHaveLength(expectedIncompleteGroupCount))
  await user.selectOptions(high, highValue)
}

const forecastGroups = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<SVGGElement>('.forecasting-items g[data-forecast-legend-key]'))

const areaPath = (group: SVGGElement) => group.querySelector<SVGPathElement>('path[fill]')

const hasEffectiveVisibility = (path: SVGPathElement, group: SVGGElement) => {
  let element: Element | null = path
  while (element) {
    const style = getComputedStyle(element)
    if (
      style.display === 'none' ||
      style.visibility === 'hidden' ||
      style.visibility === 'collapse' ||
      Number(style.opacity || 1) <= 0
    ) {
      return false
    }
    if (element === group) break
    element = element.parentElement
  }
  return element === group
}

const groupState = (root: HTMLElement) =>
  forecastGroups(root).map(group => {
    const path = areaPath(group)
    const data = path?.getAttribute('d') || ''
    const fill = path?.getAttribute('fill')?.toLowerCase() || ''
    const bounds = path?.getBBox()
    const style = path ? getComputedStyle(path) : null
    const opacity = Number(style?.opacity || path?.getAttribute('opacity') || 1)
    const fillOpacity = Number(style?.fillOpacity || path?.getAttribute('fill-opacity') || 1)
    const effectiveFill = style?.fill || fill
    return {
      key: group.dataset.forecastLegendKey || '',
      active: group.dataset.forecastActive,
      data,
      fill,
      bounds: bounds ? { x: bounds.x, y: bounds.y, width: bounds.width, height: bounds.height } : null,
      valid: Boolean(
        path &&
          data &&
          !/NaN|undefined|null/.test(data) &&
          fill &&
          fill !== 'transparent' &&
          effectiveFill !== 'none' &&
          effectiveFill !== 'transparent' &&
          !/rgba\([^)]*,\s*0\s*\)$/.test(effectiveFill) &&
          hasEffectiveVisibility(path, group) &&
          opacity > 0 &&
          fillOpacity > 0 &&
          bounds &&
          Number.isFinite(bounds.width) &&
          Number.isFinite(bounds.height) &&
          bounds.width > 0 &&
          bounds.height > 0
      )
    }
  })

const expectForecastGroups = (root: HTMLElement, expectedKeys: string[]) => {
  const state = groupState(root)
  expect(state.map(group => group.key).sort()).toEqual([...expectedKeys].sort())
  expect(new Set(state.map(group => group.key)).size).toBe(expectedKeys.length)
  state.forEach(group => {
    expect(group.active).toBe('true')
    expect(group.valid, `Expected visible finite area geometry: ${JSON.stringify(group)}`).toBe(true)
  })
  const estimateFills = new Set(
    state.filter(group => group.key === 'Estimate' || group.key.includes(':Estimate:')).map(group => group.fill)
  )
  const forecastFills = new Set(
    state.filter(group => group.key === 'Forecast' || group.key.includes(':Forecast:')).map(group => group.fill)
  )
  expect(estimateFills.size).toBe(1)
  expect(forecastFills.size).toBe(1)
  expect([...estimateFills][0]).toBe(EXPECTED_STAGE_FILLS.Estimate)
  expect([...forecastFills][0]).toBe(EXPECTED_STAGE_FILLS.Forecast)
}

const expectNestedIntervals = (root: HTMLElement) => {
  const state = groupState(root)
  for (const stage of ['Estimate', 'Forecast']) {
    const inner = state.find(group => group.key === `forecast-ci:${stage}:percentage%3A50`)?.bounds
    const outer = state.find(group => group.key === `forecast-ci:${stage}:percentage%3A90`)?.bounds
    expect(inner, `Expected 50% ${stage} bounds`).toBeTruthy()
    expect(outer, `Expected 90% ${stage} bounds`).toBeTruthy()
    expect(inner!.x).toBeCloseTo(outer!.x, 1)
    expect(inner!.width).toBeCloseTo(outer!.width, 1)
    expect(inner!.y).toBeGreaterThanOrEqual(outer!.y)
    expect(inner!.y + inner!.height).toBeLessThanOrEqual(outer!.y + outer!.height)
    expect(inner!.height).toBeLessThan(outer!.height)
  }
}

const hasExactForecastState = (state: ReturnType<typeof groupState>) =>
  state.length === EXPECTED_KEYS.length &&
  new Set(state.map(group => group.key)).size === EXPECTED_KEYS.length &&
  [...state.map(group => group.key)].sort().join('|') === [...EXPECTED_KEYS].sort().join('|') &&
  state.every(group => group.active === 'true' && group.valid)

const dateAxisLabels = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<SVGTextElement>('.bottom-axis .vx-axis-tick text'))
    .filter(isRendered)
    .map(label => normalize(label.textContent))

const legendLabels = (root: HTMLElement) =>
  within(root)
    .getAllByRole('button')
    .filter(button => button.closest('[aria-label="legend"]') && isRendered(button))
    .map(button => normalize(button.textContent))

const showForecastTooltip = async (root: HTMLElement) => {
  const hitArea = root.querySelector<SVGRectElement>('.forecasting-items rect')
  expect(hitArea, 'Expected Forecast hover region').toBeTruthy()
  const bounds = hitArea!.getBoundingClientRect()
  const firstDate = Date.UTC(2026, 0, 1)
  const targetDate = Date.UTC(2026, 0, 22)
  const lastDate = Date.UTC(2026, 1, 5)
  const targetRatio = (targetDate - firstDate) / (lastDate - firstDate)
  fireEvent.mouseOut(hitArea!)
  await waitFor(() => expect(root.querySelector('.tooltip.cove-visualization')).toBeNull())
  fireEvent.mouseMove(hitArea!, {
    clientX: bounds.left + bounds.width * targetRatio,
    clientY: bounds.top + bounds.height * 0.5
  })
  await waitFor(() => expect(root.querySelector('.tooltip.cove-visualization')).toBeTruthy())
}

const tooltipRows = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<HTMLElement>('.tooltip.cove-visualization li'), row => normalize(row.textContent))

const addTooltipColumn = async (canvas: Canvas, root: HTMLElement, columnName: string, user: User) => {
  const columnSelects = () =>
    Array.from(sectionPanel(root, 'Columns').querySelectorAll<HTMLSelectElement>('select[name="name"]'))
  let selected = columnSelects().find(select => select.value === columnName)
  if (!selected) {
    await user.click(canvas.getByRole('button', { name: 'Add Configuration' }))
    const selects = columnSelects()
    const newSelect = selects[selects.length - 1]
    expect(newSelect, `Expected new column selector for ${columnName}`).toBeTruthy()
    await waitForOptionsToPopulate(newSelect)
    await user.selectOptions(newSelect, columnName)
    selected = columnSelects().find(select => select.value === columnName)
  }
  const item = selected?.closest<HTMLElement>('.series-item--chart')
  expect(item, `Expected ${columnName} column configuration`).toBeTruthy()
  const toggle = within(item!).getByRole('checkbox', { name: 'Show in tooltip' })
  if (!toggle.matches(':checked')) await user.click(toggle)
  expect(toggle).toBeChecked()
  expect(root).toContainElement(item!)
}

const renderedTable = (root: HTMLElement) => {
  const table = root.querySelector<HTMLTableElement>('.cove-visualization__body table.data-table')
  expect(table, 'Expected Forecast data table').toBeTruthy()
  return table!
}

const renderedTableHeadings = (root: HTMLElement) =>
  Array.from(renderedTable(root).querySelectorAll('thead th'), heading =>
    normalize(heading.querySelector(':scope > span:first-child')?.textContent)
  )

const renderedTableRows = (root: HTMLElement) =>
  Array.from(renderedTable(root).querySelectorAll('tbody tr')).map(row =>
    Array.from(row.querySelectorAll('td'), cell => normalize(cell.textContent))
  )

const renderedTableRecords = (root: HTMLElement) => {
  const headings = renderedTableHeadings(root)
  return renderedTableRows(root).map(row => {
    const record = Object.fromEntries(headings.map((heading, index) => [heading, row[index]]))
    record.Date = normalizeDisplayedDate(record.Date)
    return record
  })
}

const MONTHS = {
  January: '01',
  February: '02',
  March: '03',
  April: '04',
  May: '05',
  June: '06',
  July: '07',
  August: '08',
  September: '09',
  October: '10',
  November: '11',
  December: '12'
} as const

const normalizeDisplayedDate = (value: string) => {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value
  const match = value.match(
    /^(January|February|March|April|May|June|July|August|September|October|November|December) (\d{1,2}), (\d{4})$/
  )
  expect(match, `Expected ISO or long-form displayed date, received ${value}`).toBeTruthy()
  const [, month, day, year] = match!
  return `${year}-${MONTHS[month as keyof typeof MONTHS]}-${day.padStart(2, '0')}`
}

const expectedRecords = EXPECTED_ROWS.map(row =>
  Object.fromEntries(HEADINGS.map((heading, index) => [heading, row[index]]))
)

export const FORECAST001: Story = {
  name: 'FORECAST-001 — Build and configure a Forecast Chart',
  args: { config: {} },
  parameters: { test: { timeout: 120000 } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    await user.click(await canvas.findByRole('button', { name: 'Forecast Chart' }))
    await user.click(canvas.getByText('2. Import Data'))
    const upload = canvasElement.querySelector<HTMLInputElement>('input[type="file"]')
    expect(upload, 'Expected Data Import file input').toBeTruthy()
    await user.upload(upload!, new File([CSV], 'forecast-chart-regression.csv', { type: 'text/csv' }))

    expect(await canvas.findByText('Data Preview')).toBeVisible()
    await waitFor(() => expect(canvasElement.querySelectorAll('table.data-table tbody tr')).toHaveLength(6))
    HEADINGS.forEach(heading =>
      expect(canvasElement.querySelector(`table.data-table th[title="${heading}"]`)).toBeVisible()
    )
    const previewRows = Array.from(canvasElement.querySelectorAll<HTMLElement>('table.data-table tbody tr'))
    expect(previewRows.map(row => Array.from(row.querySelectorAll('td'), cell => normalize(cell.textContent)))).toEqual(
      EXPECTED_ROWS
    )

    const vertical = canvas.getByRole('button', { name: /^Vertical/ })
    await user.click(vertical)
    expect(vertical).toHaveClass('active')
    const noSeries = canvas.getByRole('button', { name: 'No', exact: true })
    const yesSeries = canvas.getByRole('button', { name: 'Yes', exact: true })
    await performAndAssert(
      'No becomes the visibly selected multiple-series choice',
      () => ({ no: getComputedStyle(noSeries).backgroundColor, yes: getComputedStyle(yesSeries).backgroundColor }),
      async () => {
        await user.click(noSeries)
        await user.unhover(noSeries)
      },
      (before, after) => before.no === before.yes && after.no !== after.yes && after.no !== before.no
    )

    await user.click(await canvas.findByRole('button', { name: 'Configure your visualization' }))
    await waitForEditor(canvas)
    expect(canvasElement.querySelector('.chart-required-fields-alerts')).toBeNull()
    await openSection(canvas, canvasElement, 'Data Series')
    expect(
      within(sectionPanel(canvasElement, 'Data Series')).getByText(/At least one series is required/)
    ).toBeVisible()
    expect(canvasElement.querySelectorAll('.chart-required-fields-alerts .alert-info')).toHaveLength(0)
    expect(forecastGroups(canvasElement)).toHaveLength(0)

    const addSeries = canvas.getByRole('combobox', { name: /^Add Data Series/ }) as HTMLSelectElement
    await waitForOptionsToPopulate(addSeries)
    await user.selectOptions(addSeries, 'Stage')
    await waitFor(() => expect(canvasElement).not.toHaveTextContent('At least one series is required'))
    const stageItem = await openSeries(canvasElement, 'Stage', user)
    const estimateColor = seriesSelect(stageItem, 'Estimate Series Color')
    const forecastColor = seriesSelect(stageItem, 'Forecast Series Color')
    await waitForOptionsToPopulate(estimateColor)
    await waitForOptionsToPopulate(forecastColor)
    expect(forecastGroups(canvasElement)).toHaveLength(0)

    await openSection(canvas, canvasElement, 'Date/Category Axis')
    const scalingType = canvas.getByRole('combobox', { name: /^Data Scaling Type/ }) as HTMLSelectElement
    await user.selectOptions(scalingType, 'date-time')
    const dataKey = canvas.getByRole('combobox', { name: /^Data Key/ }) as HTMLSelectElement
    await waitForOptionsToPopulate(dataKey)
    await user.selectOptions(dataKey, 'Date')
    await replaceText(user, canvas.getByRole('textbox', { name: /^Date Parse Format/i }), '%Y-%m-%d')
    await replaceText(user, canvas.getByRole('textbox', { name: /^AXIS DATE DISPLAY FORMAT/i }), '%Y-%m-%d')
    await replaceText(user, canvas.getByRole('textbox', { name: /^HOVER DATE DISPLAY FORMAT/i }), '%Y-%m-%d')
    expect(forecastGroups(canvasElement)).toHaveLength(0)
    await waitFor(() => {
      const labels = dateAxisLabels(canvasElement)
      expect(labels).toContain('2026-01-01')
      expect(labels).toContain('2026-02-05')
    })

    await openSection(canvas, canvasElement, 'Data Series')
    const openStageItem = await openSeries(canvasElement, 'Stage', user)
    const configuredEstimateColor = seriesSelect(openStageItem, 'Estimate Series Color')
    const configuredForecastColor = seriesSelect(openStageItem, 'Forecast Series Color')
    await user.selectOptions(configuredEstimateColor, 'sequential-blue')
    await user.selectOptions(configuredForecastColor, 'sequential-orange')
    expect(configuredEstimateColor).toHaveValue('sequential-blue')
    expect(configuredForecastColor).toHaveValue('sequential-orange')
    expect(forecastGroups(canvasElement)).toHaveLength(0)

    await user.click(within(openStageItem).getByRole('button', { name: 'Add Confidence Interval Group' }))
    await configureConfidenceGroup(canvasElement, openStageItem, 1, 'Lower 90%', 'Upper 90%', 0, user)
    await waitFor(() => {
      const state = groupState(canvasElement)
      expect(state).toHaveLength(2)
      expect(state.every(group => group.valid)).toBe(true)
    })
    expectForecastGroups(canvasElement, ['Estimate', 'Forecast'])

    await user.click(within(openStageItem).getByRole('button', { name: 'Add Confidence Interval Group' }))
    await configureConfidenceGroup(canvasElement, openStageItem, 2, 'Lower 50%', 'Upper 50%', 2, user)
    await assertVisualizationRendered(canvasElement)
    await waitFor(() => expect(hasExactForecastState(groupState(canvasElement))).toBe(true))
    expectForecastGroups(canvasElement, EXPECTED_KEYS)
    expectNestedIntervals(canvasElement)
    await waitFor(() => expect(legendLabels(canvasElement)).toEqual(EXPECTED_LEGEND))

    await openSection(canvas, canvasElement, 'Legend')
    const expandLegend = canvas.getByRole('checkbox', { name: /Expand Confidence Interval Legends/i })
    await performAndAssert(
      'Contract to stage-only forecast legend labels without removing bands',
      () => ({ labels: legendLabels(canvasElement), groups: groupState(canvasElement) }),
      () => user.click(expandLegend),
      (before, after) =>
        before.labels.join('|') === EXPECTED_LEGEND.join('|') &&
        after.labels.join('|') === 'Estimate|Forecast' &&
        hasExactForecastState(before.groups) &&
        hasExactForecastState(after.groups)
    )
    await performAndAssert(
      'Restore expanded confidence interval legend labels without removing bands',
      () => ({ labels: legendLabels(canvasElement), groups: groupState(canvasElement) }),
      () => user.click(canvas.getByRole('checkbox', { name: /Expand Confidence Interval Legends/i })),
      (before, after) =>
        before.labels.join('|') === 'Estimate|Forecast' &&
        after.labels.join('|') === EXPECTED_LEGEND.join('|') &&
        hasExactForecastState(before.groups) &&
        hasExactForecastState(after.groups)
    )

    await openSection(canvas, canvasElement, 'Columns')
    for (const column of ['Lower 50%', 'Upper 50%', 'Lower 90%', 'Upper 90%']) {
      await addTooltipColumn(canvas, canvasElement, column, user)
    }
    await showForecastTooltip(canvasElement)
    await waitFor(() => {
      const rows = tooltipRows(canvasElement)
      const expectedRows = [
        '2026-01-22',
        'Stage: Forecast',
        'Lower 50%: 101',
        'Upper 50%: 130',
        'Lower 90%: 80',
        'Upper 90%: 154'
      ]
      expectedRows.forEach(expected =>
        expect(
          rows.filter(row => row === expected),
          `Tooltip rows: ${JSON.stringify(rows)}`
        ).toHaveLength(1)
      )
    })

    const dataTableAccordion = accordionButton(canvasElement, 'Data Table')
    expect(dataTableAccordion, 'Expected Data Table editor accordion').toBeTruthy()
    if (dataTableAccordion?.getAttribute('aria-expanded') !== 'true') await user.click(dataTableAccordion!)
    await waitFor(() => expect(dataTableAccordion).toHaveAttribute('aria-expanded', 'true'))
    const tableContainer = canvasElement.querySelector<HTMLElement>('.data-table-container')
    expect(tableContainer).toBeVisible()
    await user.click(within(tableContainer!).getByRole('button', { name: /Data Table/ }))
    await waitFor(() => expect(renderedTable(canvasElement)).toBeVisible())
    expect([...renderedTableHeadings(canvasElement)].sort()).toEqual([...HEADINGS].sort())
    expect(renderedTableRecords(canvasElement).sort((a, b) => a.Date.localeCompare(b.Date))).toEqual(expectedRecords)
    expectForecastGroups(canvasElement, EXPECTED_KEYS)
  }
}
