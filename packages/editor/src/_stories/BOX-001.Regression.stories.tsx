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

// Source regression: docs/qa/regression-scripts/build-and-configure-a-box-plot.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Charts/Scripts/Box Plot',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type Canvas = ReturnType<typeof within>
type User = ReturnType<typeof userEvent.setup>

const CSV = `Group,Score
Group A,10
Group A,11
Group A,12
Group A,13
Group A,14
Group A,15
Group A,16
Group A,17
Group A,40
Group B,20
Group B,21
Group B,22
Group B,23
Group B,24
Group B,25
Group B,26
Group B,27
Group B,28`

const EXPECTED_ROWS = [
  ['Group A', '10'],
  ['Group A', '11'],
  ['Group A', '12'],
  ['Group A', '13'],
  ['Group A', '14'],
  ['Group A', '15'],
  ['Group A', '16'],
  ['Group A', '17'],
  ['Group A', '40'],
  ['Group B', '20'],
  ['Group B', '21'],
  ['Group B', '22'],
  ['Group B', '23'],
  ['Group B', '24'],
  ['Group B', '25'],
  ['Group B', '26'],
  ['Group B', '27'],
  ['Group B', '28']
]

const normalize = (value: string | null | undefined) => value?.replace(/\s+/g, ' ').trim() || ''

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

const accordionButton = (root: HTMLElement, name: string) =>
  Array.from(root.querySelectorAll<HTMLElement>('[data-accordion-component="AccordionItemButton"]')).find(
    button => normalize(button.textContent).toLowerCase() === name.toLowerCase() && button.closest('.editor-panel')
  )

const openSection = async (canvas: Canvas, root: HTMLElement, name: string) => {
  await waitFor(() => expect(accordionButton(root, name), `Missing editor accordion ${name}`).toBeTruthy())
  if (accordionButton(root, name)?.getAttribute('aria-expanded') !== 'true') await openAccordion(canvas, name)
  await waitFor(() => expect(accordionButton(root, name)).toHaveAttribute('aria-expanded', 'true'))
}

const boxRectangles = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<SVGRectElement>('g.boxplot rect.visx-boxplot-box'))

const boxGeometry = (root: HTMLElement) =>
  boxRectangles(root).map(rectangle => {
    const bounds = rectangle.getBBox()
    const style = getComputedStyle(rectangle)
    return {
      displayed: style.display !== 'none' && style.visibility !== 'hidden',
      width: bounds.width,
      height: bounds.height
    }
  })

const hasTwoValidBoxes = (geometry: ReturnType<typeof boxGeometry>) =>
  geometry.length === 2 &&
  geometry.every(
    box => box.displayed && Number.isFinite(box.width) && Number.isFinite(box.height) && box.width > 0 && box.height > 0
  )

const outliers = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<SVGCircleElement>('g.boxplot circle.visx-boxplot-outlier'))

const boxTooltipTargets = (root: HTMLElement) =>
  Array.from(
    root.querySelectorAll<SVGRectElement>(
      'g.boxplot g.visx-boxplot > rect[data-tooltip-id^="cdc-open-viz-tooltip-"][data-tooltip-html]'
    )
  )

const isRendered = (element: HTMLElement) => {
  const style = getComputedStyle(element)
  const bounds = element.getBoundingClientRect()
  return style.display !== 'none' && style.visibility !== 'hidden' && bounds.width > 0 && bounds.height > 0
}

const visibleTooltipText = (root: HTMLElement) =>
  normalize(
    Array.from(root.querySelectorAll<HTMLElement>('.tooltip')).find(
      tooltip => normalize(tooltip.textContent) && isRendered(tooltip)
    )?.textContent
  )

export const BOX001: Story = {
  name: 'BOX-001 — Build and configure a Box Plot',
  args: { config: {} },
  parameters: { test: { timeout: 30000 } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    const unhandledRejections: unknown[] = []
    const windowErrors: unknown[] = []
    const onRejection = (event: PromiseRejectionEvent) => unhandledRejections.push(event.reason)
    const onWindowError = (event: ErrorEvent) => windowErrors.push(event.error ?? event.message)

    window.addEventListener('unhandledrejection', onRejection)
    window.addEventListener('error', onWindowError)

    try {
      await user.click(await canvas.findByRole('button', { name: 'Box Plot' }))
      await user.click(canvas.getByText('2. Import Data'))
      const upload = canvasElement.querySelector<HTMLInputElement>('input[type="file"]')
      expect(upload, 'Expected Data Import file input').toBeTruthy()
      await user.upload(upload!, new File([CSV], 'box-plot-regression.csv', { type: 'text/csv' }))

      expect(await canvas.findByText('Data Preview')).toBeVisible()
      await waitFor(() => expect(canvasElement.querySelectorAll('table.data-table tbody tr')).toHaveLength(18))
      for (const heading of ['Group', 'Score']) {
        expect(canvasElement.querySelector(`table.data-table th[title="${heading}"]`)).toBeVisible()
      }
      const previewRows = Array.from(canvasElement.querySelectorAll<HTMLElement>('table.data-table tbody tr'))
      expect(
        previewRows.map(row => Array.from(row.querySelectorAll('td'), cell => normalize(cell.textContent)))
      ).toEqual(EXPECTED_ROWS)

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
      const addSeries = canvas.getByRole('combobox', { name: /^Add Data Series/ }) as HTMLSelectElement
      await waitForOptionsToPopulate(addSeries)
      await performAndAssert(
        'Score leaves only Data Key missing and withholds the Box Plot',
        () => ({
          alerts: requiredAlertText(canvasElement),
          chart: canvasElement.querySelector('.cove-visualization__body')
        }),
        () => user.selectOptions(addSeries, 'Score'),
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
        'Group resolves requirements and renders two valid boxes',
        () => ({
          alerts: getRequiredAlerts(canvasElement).length,
          boxes: boxGeometry(canvasElement)
        }),
        () => user.selectOptions(dataKey, 'Group'),
        (before, after) => before.alerts === 1 && after.alerts === 0 && hasTwoValidBoxes(after.boxes)
      )
      await waitForAbsence('.chart-required-fields-alerts', canvasElement)
      await assertVisualizationRendered(canvasElement)

      expect(boxRectangles(canvasElement)).toHaveLength(2)
      for (const rectangle of boxRectangles(canvasElement)) expect(rectangle).toBeVisible()
      expect(hasTwoValidBoxes(boxGeometry(canvasElement))).toBe(true)
      expect(outliers(canvasElement)).toHaveLength(0)

      await openSection(canvas, canvasElement, 'Visual')
      const plotOutliers = canvas.getByRole('checkbox', { name: 'Plot Outliers' }) as HTMLInputElement
      expect(plotOutliers).not.toBeChecked()
      await performAndAssert(
        'Plot Outliers adds the one expected outlier without changing the two valid boxes',
        () => ({ boxes: boxGeometry(canvasElement), outliers: outliers(canvasElement).length }),
        () => user.click(plotOutliers),
        (before, after) =>
          hasTwoValidBoxes(before.boxes) &&
          before.outliers === 0 &&
          hasTwoValidBoxes(after.boxes) &&
          after.outliers === 1
      )
      expect(plotOutliers).toBeChecked()
      const renderedOutliers = outliers(canvasElement)
      expect(renderedOutliers).toHaveLength(1)
      expect(renderedOutliers[0]).toBeVisible()
      const outlierBounds = renderedOutliers[0].getBBox()
      expect(Number.isFinite(outlierBounds.x)).toBe(true)
      expect(Number.isFinite(outlierBounds.y)).toBe(true)
      expect(outlierBounds.width).toBeGreaterThan(0)
      expect(outlierBounds.height).toBeGreaterThan(0)

      const tooltipTargets = boxTooltipTargets(canvasElement)
      expect(tooltipTargets).toHaveLength(2)
      expect(tooltipTargets.filter(target => target.dataset.tooltipHtml?.includes('Group A'))).toHaveLength(1)
      expect(tooltipTargets.filter(target => target.dataset.tooltipHtml?.includes('Group B'))).toHaveLength(1)
      const groupATarget = tooltipTargets.find(target => target.dataset.tooltipHtml?.includes('Group A'))
      expect(groupATarget, 'Expected Group A Box Plot tooltip target').toBeTruthy()
      await user.hover(groupATarget!)
      await waitFor(() => expect(visibleTooltipText(canvasElement)).toContain('Group A'))
      expect(visibleTooltipText(canvasElement)).toBe(
        'Group A Key: Score Lower Quartile: 12 Upper Quartile: 16 Interquartile Range: 4 Median: 14'
      )
      await user.unhover(groupATarget!)

      expect(unhandledRejections, 'Unexpected unhandled rejections').toEqual([])
      expect(windowErrors, 'Unexpected window errors').toEqual([])
    } finally {
      window.removeEventListener('unhandledrejection', onRejection)
      window.removeEventListener('error', onWindowError)
    }
  }
}
