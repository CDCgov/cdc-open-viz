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

// Source regression: docs/qa/regression-scripts/build-and-configure-a-scatter-plot.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Charts/Scatter Plot',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type Canvas = ReturnType<typeof within>
type User = ReturnType<typeof userEvent.setup>

const CSV = `Exposure,Observed,Reference
10,12,30
20,18,26
30,25,22
40,31,18
50,39,14
60,48,10`

const EXPECTED_ROWS = [
  ['10', '12', '30'],
  ['20', '18', '26'],
  ['30', '25', '22'],
  ['40', '31', '18'],
  ['50', '39', '14'],
  ['60', '48', '10']
]

const EXPECTED_OBSERVED = [
  '10|Observed|12',
  '20|Observed|18',
  '30|Observed|25',
  '40|Observed|31',
  '50|Observed|39',
  '60|Observed|48'
]

const EXPECTED_REFERENCE = [
  '10|Reference|30',
  '20|Reference|26',
  '30|Reference|22',
  '40|Reference|18',
  '50|Reference|14',
  '60|Reference|10'
]

const EXPECTED_ALL = [...EXPECTED_OBSERVED, ...EXPECTED_REFERENCE].sort()
const normalize = (value: string | null | undefined) => value?.replace(/\s+/g, ' ').trim() || ''

const requiredAlerts = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<HTMLElement>('.chart-required-fields-alerts .alert-info'))

const requiredAlertText = (root: HTMLElement) =>
  requiredAlerts(root)
    .map(alert => normalize(alert.textContent))
    .join('|')

const expectRequiredFields = (root: HTMLElement, expected: Array<{ section: string; field: string }>) => {
  const alerts = requiredAlerts(root)
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

const accordionButton = (root: HTMLElement, name: string) =>
  Array.from(root.querySelectorAll<HTMLElement>('[data-accordion-component="AccordionItemButton"]')).find(
    button => normalize(button.textContent).toLowerCase() === name.toLowerCase() && button.closest('.editor-panel')
  )

const openSection = async (canvas: Canvas, root: HTMLElement, name: string) => {
  await waitFor(() => expect(accordionButton(root, name), `Missing editor accordion ${name}`).toBeTruthy())
  if (accordionButton(root, name)?.getAttribute('aria-expanded') !== 'true') await openAccordion(canvas, name)
  await waitFor(() => expect(accordionButton(root, name)).toHaveAttribute('aria-expanded', 'true'))
}

const circles = (root: HTMLElement) => Array.from(root.querySelectorAll<SVGCircleElement>('g.scatter-plot > circle'))

const tooltipIdentity = (circle: SVGCircleElement) => {
  const container = document.createElement('div')
  container.innerHTML = circle.dataset.tooltipHtml || ''
  const heading = normalize(container.querySelector('.tooltip-heading')?.textContent)
  const body = Array.from(container.querySelectorAll('li'))
    .map(row => normalize(row.textContent))
    .find(row => row !== heading)
  expect(body, `Expected a series/value tooltip row in "${normalize(container.textContent)}"`).toBeTruthy()
  const xMatch = heading.match(/:\s*(-?[\d,.]+)$/)
  const seriesMatch = body!.match(/^(Observed|Reference):\s*(-?[\d,.]+)$/)
  expect(xMatch, `Expected numeric Exposure tooltip heading, received "${heading}"`).toBeTruthy()
  expect(seriesMatch, `Expected exact series/value tooltip row, received "${body}"`).toBeTruthy()
  return `${xMatch![1].replace(/,/g, '')}|${seriesMatch![1]}|${seriesMatch![2].replace(/,/g, '')}`
}

type PointState = {
  identity: string
  hasCoordinates: boolean
  cx: number
  cy: number
  radius: number
  fill: string
  fillOpacity: number
  visible: boolean
}

const isVisuallyPresent = (circle: SVGCircleElement) => {
  let element: Element | null = circle
  while (element) {
    const style = getComputedStyle(element)
    if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) return false
    element = element.parentElement
  }

  const fill = getComputedStyle(circle).fill || circle.getAttribute('fill') || ''
  const transparentFill =
    fill === '' ||
    /^(none|transparent)$/i.test(fill) ||
    /rgba?\([^)]*(?:,|\/)\s*0(?:\.0+)?\s*\)$/i.test(fill) ||
    /^#[\da-f]{6}00$/i.test(fill)
  return circle.getClientRects().length > 0 && !transparentFill
}

const pointState = (root: HTMLElement): PointState[] =>
  circles(root)
    .map(circle => {
      const style = getComputedStyle(circle)
      return {
        identity: tooltipIdentity(circle),
        hasCoordinates: circle.hasAttribute('cx') && circle.hasAttribute('cy'),
        cx: Number(circle.getAttribute('cx')),
        cy: Number(circle.getAttribute('cy')),
        radius: Number(circle.getAttribute('r')),
        fill: style.fill || circle.getAttribute('fill') || '',
        fillOpacity: Number(style.fillOpacity || circle.getAttribute('fill-opacity') || 1),
        visible: isVisuallyPresent(circle)
      }
    })
    .sort((a, b) => a.identity.localeCompare(b.identity))

const hasValidPoints = (points: PointState[], expectedIdentities: string[]) =>
  points.length === expectedIdentities.length &&
  new Set(points.map(point => point.identity)).size === expectedIdentities.length &&
  points
    .map(point => point.identity)
    .sort()
    .join('|') === expectedIdentities.slice().sort().join('|') &&
  points.every(
    point =>
      point.hasCoordinates &&
      Number.isFinite(point.cx) &&
      Number.isFinite(point.cy) &&
      point.radius === 4.5 &&
      Number.isFinite(point.fillOpacity) &&
      point.fillOpacity > 0 &&
      point.visible
  )

const legendLabels = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<HTMLElement>('.legend-container .legend-item[class*="legend-text--"]')).map(item =>
    normalize(item.textContent)
  )

export const SCATTER001: Story = {
  name: 'SCATTER-001 — Build and configure a Scatter Plot',
  args: { config: {} },
  parameters: { test: { timeout: 60000 } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    await user.click(await canvas.findByRole('button', { name: 'Scatter Plot' }))
    await user.click(canvas.getByText('2. Import Data'))
    const upload = canvasElement.querySelector<HTMLInputElement>('input[type="file"]')
    expect(upload, 'Expected Data Import file input').toBeTruthy()
    await user.upload(upload!, new File([CSV], 'scatter-plot-regression.csv', { type: 'text/csv' }))

    expect(await canvas.findByText('Data Preview')).toBeVisible()
    await waitFor(() => expect(canvasElement.querySelectorAll('table.data-table tbody tr')).toHaveLength(6))
    for (const heading of ['Exposure', 'Observed', 'Reference']) {
      expect(canvasElement.querySelector(`table.data-table th[title="${heading}"]`)).toBeVisible()
    }
    const previewRows = Array.from(canvasElement.querySelectorAll<HTMLElement>('table.data-table tbody tr'))
    expect(previewRows.map(row => Array.from(row.querySelectorAll('td'), cell => normalize(cell.textContent)))).toEqual(
      EXPECTED_ROWS
    )

    const configure = await canvas.findByRole('button', { name: 'Configure your visualization' })
    expect(configure).toBeVisible()
    expect(configure).toBeEnabled()
    expect(canvas.queryByText('Data Orientation')).toBeNull()
    expect(canvas.queryByText('Are there multiple series represented in your data?')).toBeNull()
    expect(canvas.queryByRole('button', { name: /^Single Row/ })).toBeNull()

    await user.click(configure)
    await waitForEditor(canvas)
    await waitForPresence('.chart-required-fields-alerts .alert-info', canvasElement)
    expectRequiredFields(canvasElement, [
      { section: 'Data Series', field: 'Add Data Series' },
      { section: 'Date/Category Axis', field: 'Data Key' }
    ])
    expect(canvasElement.querySelector('.cove-visualization__body')).toBeNull()

    await assertAlertNavigation(canvasElement, 'Data Series', 'Add Data Series', 'data-series', user)
    await assertAlertNavigation(canvasElement, 'Date/Category Axis', 'Data Key', 'date-category-axis', user)

    await assertAlertNavigation(canvasElement, 'Data Series', 'Add Data Series', 'data-series', user)
    const firstSeries = canvas.getByRole('combobox', { name: /^Add Data Series/ }) as HTMLSelectElement
    await waitForOptionsToPopulate(firstSeries)
    await performAndAssert(
      'Adding Observed leaves only Data Key missing and renders no points',
      () => ({
        alerts: requiredAlertText(canvasElement),
        bodyAbsent: !canvasElement.querySelector('.cove-visualization__body'),
        points: circles(canvasElement).length
      }),
      () => user.selectOptions(firstSeries, 'Observed'),
      (before, after) =>
        before.alerts.includes('Add Data Series') &&
        before.alerts.includes('Data Key') &&
        !after.alerts.includes('Add Data Series') &&
        after.alerts.includes('Data Key') &&
        after.bodyAbsent &&
        after.points === 0
    )
    expectRequiredFields(canvasElement, [{ section: 'Date/Category Axis', field: 'Data Key' }])

    await assertAlertNavigation(canvasElement, 'Date/Category Axis', 'Data Key', 'date-category-axis', user)
    const dataKey = canvas.getByRole('combobox', { name: /^Data Key/ }) as HTMLSelectElement
    await waitForOptionsToPopulate(dataKey)
    await performAndAssert(
      'Selecting Exposure renders six exact Observed points',
      () => ({ alerts: requiredAlerts(canvasElement).length, points: pointState(canvasElement) }),
      () => user.selectOptions(dataKey, 'Exposure'),
      (before, after) => before.alerts === 1 && after.alerts === 0 && hasValidPoints(after.points, EXPECTED_OBSERVED)
    )
    await waitForAbsence('.chart-required-fields-alerts', canvasElement)
    await assertVisualizationRendered(canvasElement)
    expect(hasValidPoints(pointState(canvasElement), EXPECTED_OBSERVED)).toBe(true)

    await openSection(canvas, canvasElement, 'Data Series')
    const secondSeries = canvas.getByRole('combobox', { name: /^Add Data Series/ }) as HTMLSelectElement
    await waitForOptionsToPopulate(secondSeries)
    await performAndAssert(
      'Adding Reference renders twelve exact points and the two-series legend',
      () => ({ points: pointState(canvasElement), legend: legendLabels(canvasElement) }),
      () => user.selectOptions(secondSeries, 'Reference'),
      (before, after) =>
        hasValidPoints(before.points, EXPECTED_OBSERVED) &&
        hasValidPoints(after.points, EXPECTED_ALL) &&
        after.legend.length === 2 &&
        after.legend.includes('Observed') &&
        after.legend.includes('Reference')
    )

    expect(hasValidPoints(pointState(canvasElement), EXPECTED_ALL)).toBe(true)
    expect(legendLabels(canvasElement).sort()).toEqual(['Observed', 'Reference'])
  }
}
