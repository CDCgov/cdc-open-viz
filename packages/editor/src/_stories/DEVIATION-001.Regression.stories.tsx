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

// Source regression: docs/qa/regression-scripts/build-and-configure-a-deviation-bar-chart.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Chart Scripts/Deviation Bar',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type Canvas = ReturnType<typeof within>
type User = ReturnType<typeof userEvent.setup>

const CSV = `Category,Score
Below target,20
At target,50
Above target,80`

const EXPECTED_ROWS = [
  ['Below target', '20'],
  ['At target', '50'],
  ['Above target', '80']
]

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

const replaceText = async (user: User, control: HTMLElement, value: string) => {
  await user.clear(control)
  if (value) await user.type(control, value)
}

const deviationBars = (root: HTMLElement) =>
  Array.from(
    root.querySelectorAll<SVGForeignObjectElement>(
      '.cove-visualization__body svg foreignObject[data-tooltip-id^="cdc-open-viz-tooltip-"][data-tooltip-html]'
    )
  )

const tooltipText = (target: Element) =>
  normalize((target.getAttribute('data-tooltip-html') || '').replace(/<[^>]*>/g, ' '))

const deviationBar = (root: HTMLElement, category: string, value: string) =>
  deviationBars(root).find(target => {
    const text = tooltipText(target)
    return text.includes(category) && new RegExp(`(?:^|\\s)${value}(?:\\s|$)`).test(text)
  })

const barGroup = (bar: SVGForeignObjectElement) => bar.parentElement as SVGGElement

const deviationGroup = (root: HTMLElement) => deviationBars(root)[0]?.parentElement?.parentElement as SVGGElement | null

const targetLine = (root: HTMLElement) =>
  deviationGroup(root)?.querySelector<SVGLineElement>(':scope > line[stroke="#333"][stroke-width="2"]') || null

const barGeometry = (bar: SVGForeignObjectElement) => ({
  x: Number(bar.getAttribute('x')),
  y: Number(bar.getAttribute('y')),
  width: Number(bar.getAttribute('width')),
  height: Number(bar.getAttribute('height'))
})

const barDiv = (bar: SVGForeignObjectElement) => {
  const div = bar.querySelector<HTMLDivElement>('div')
  expect(div, 'Expected Deviation Bar visual element').toBeTruthy()
  return div!
}

const barColor = (bar: SVGForeignObjectElement) => getComputedStyle(barDiv(bar)).backgroundColor

const targetLabelElement = (root: HTMLElement, label: string) =>
  Array.from(deviationGroup(root)?.querySelectorAll<SVGTextElement>('text') || []).find(
    text => normalize(text.textContent) === label
  ) || null

const rowValueElement = (bar: SVGForeignObjectElement) =>
  barGroup(bar).querySelector<SVGTextElement>(':scope > svg > text')

const rowValueState = (bar: SVGForeignObjectElement) => {
  const label = rowValueElement(bar)
  return { text: normalize(label?.textContent), visible: isRendered(label) }
}

const legendLabels = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<HTMLElement>('.legend-container .legend-item[class*="legend-text--"]'))
    .map(item => normalize(item.textContent))
    .filter(Boolean)

const legendItem = (root: HTMLElement, label: string) =>
  Array.from(root.querySelectorAll<HTMLElement>('.legend-container .legend-item[class*="legend-text--"]')).find(
    item => normalize(item.textContent) === label
  ) || null

const legendSwatchColor = (root: HTMLElement, label: string) => {
  const item = legendItem(root, label)
  const solidShape = item?.querySelector<HTMLElement>('span.legend-item')
  if (solidShape) return getComputedStyle(solidShape).backgroundColor
  const svgShape = item?.querySelector<SVGElement>('.legend-shape-svg circle, .legend-shape-svg rect')
  if (svgShape) return getComputedStyle(svgShape).fill
  return ''
}

const isRendered = (element: Element | null) => {
  if (!element) return false
  const style = getComputedStyle(element)
  const bounds = element.getBoundingClientRect()
  return style.display !== 'none' && style.visibility !== 'hidden' && bounds.width > 0 && bounds.height > 0
}

const targetLineState = (root: HTMLElement) => {
  const line = targetLine(root)
  if (!line) return { visible: false, x: NaN, length: 0 }
  const style = getComputedStyle(line)
  const x1 = Number(line.getAttribute('x1'))
  const x2 = Number(line.getAttribute('x2'))
  const y1 = Number(line.getAttribute('y1'))
  const y2 = Number(line.getAttribute('y2'))
  return {
    visible:
      style.display !== 'none' &&
      style.visibility !== 'hidden' &&
      style.stroke !== 'none' &&
      style.stroke !== 'transparent' &&
      Number(style.strokeWidth.replace('px', '')) > 0,
    x: x1,
    length: Math.hypot(x2 - x1, y2 - y1)
  }
}

const cornerRadii = (bar: SVGForeignObjectElement) => {
  const style = getComputedStyle(barDiv(bar))
  return {
    topLeft: Number.parseFloat(style.borderTopLeftRadius) || 0,
    topRight: Number.parseFloat(style.borderTopRightRadius) || 0,
    bottomRight: Number.parseFloat(style.borderBottomRightRadius) || 0,
    bottomLeft: Number.parseFloat(style.borderBottomLeftRadius) || 0
  }
}

const legendState = (root: HTMLElement) => {
  const container = root.querySelector<HTMLElement>('.legend-container')
  return {
    visible: isRendered(container),
    labels: container && isRendered(container) ? legendLabels(root) : [],
    visibleItems: container
      ? Array.from(container.querySelectorAll<HTMLElement>('.legend-item[class*="legend-text--"]')).filter(item =>
          isRendered(item)
        ).length
      : 0
  }
}

const dataTableState = (root: HTMLElement) => {
  const container = root.querySelector<HTMLElement>('.data-table-container')
  return { visible: isRendered(container) }
}

const visibleTooltip = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<HTMLElement>('.tooltip')).find(
    tooltip => normalize(tooltip.textContent) && isRendered(tooltip)
  ) || null

const renderedTable = (root: HTMLElement) => {
  const table = root.querySelector<HTMLTableElement>('.cove-visualization__body table.data-table')
  expect(table, 'Expected rendered Deviation Bar data table').toBeTruthy()
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

const expectTargetGeometry = (root: HTMLElement) => {
  const below = deviationBar(root, 'Below target', '20')
  const at = deviationBar(root, 'At target', '50')
  const above = deviationBar(root, 'Above target', '80')
  expect(below, 'Expected below-target mark').toBeTruthy()
  expect(at, 'Expected at-target mark').toBeTruthy()
  expect(above, 'Expected above-target mark').toBeTruthy()
  const line = targetLine(root)
  expect(line, 'Expected Deviation target line').toBeTruthy()
  const targetX = Number(line!.getAttribute('x1'))
  expect(targetX).toBe(Number(line!.getAttribute('x2')))
  const belowGeometry = barGeometry(below!)
  const atGeometry = barGeometry(at!)
  const aboveGeometry = barGeometry(above!)
  for (const geometry of [belowGeometry, atGeometry, aboveGeometry]) {
    expect(Number.isFinite(geometry.x)).toBe(true)
    expect(Number.isFinite(geometry.y)).toBe(true)
    expect(Number.isFinite(geometry.width)).toBe(true)
    expect(Number.isFinite(geometry.height)).toBe(true)
    expect(geometry.height).toBeGreaterThan(0)
  }
  expect(belowGeometry.width).toBeGreaterThan(0)
  expect(belowGeometry.x + belowGeometry.width).toBeCloseTo(targetX, 4)
  expect(atGeometry.width).toBeCloseTo(0, 4)
  expect(atGeometry.x).toBeCloseTo(targetX, 4)
  expect(aboveGeometry.width).toBeGreaterThan(0)
  expect(aboveGeometry.x).toBeCloseTo(targetX, 4)
  expect(barColor(below!)).not.toBe(barColor(above!))
}

export const DEVIATION001: Story = {
  name: 'DEVIATION-001 — Build and configure a Deviation Bar chart',
  args: { config: {} },
  parameters: { test: { timeout: 90000 } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    await user.click(await canvas.findByRole('button', { name: 'Deviation Bar' }))
    await user.click(canvas.getByText('2. Import Data'))
    const upload = canvasElement.querySelector<HTMLInputElement>('input[type="file"]')
    expect(upload, 'Expected Data Import file input').toBeTruthy()
    await user.upload(upload!, new File([CSV], 'deviation-bar-regression.csv', { type: 'text/csv' }))

    expect(await canvas.findByText('Data Preview')).toBeVisible()
    await waitFor(() => expect(canvasElement.querySelectorAll('table.data-table tbody tr')).toHaveLength(3))
    for (const heading of ['Category', 'Score']) {
      expect(canvasElement.querySelector(`table.data-table th[title="${heading}"]`)).toBeVisible()
    }
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
      () => ({
        no: getComputedStyle(noSeries).backgroundColor,
        yes: getComputedStyle(yesSeries).backgroundColor,
        noVisible: isRendered(noSeries),
        yesVisible: isRendered(yesSeries)
      }),
      async () => {
        await user.click(noSeries)
        await user.unhover(noSeries)
      },
      (before, after) =>
        before.noVisible &&
        before.yesVisible &&
        before.no === before.yes &&
        after.noVisible &&
        after.yesVisible &&
        after.no !== after.yes &&
        after.no !== before.no &&
        after.yes === before.yes
    )

    await user.click(await canvas.findByRole('button', { name: 'Configure your visualization' }))
    await waitForEditor(canvas)
    await waitForPresence('.chart-required-fields-alerts .alert-info', canvasElement)
    expectRequiredFields(canvasElement, [
      { section: 'Data Series', field: 'Exactly 1 Data Series' },
      { section: 'Date/Category Axis', field: 'Data Key' }
    ])
    expect(canvasElement.querySelector('.cove-visualization__body')).toBeNull()
    expect(canvasElement).toHaveTextContent('Select exactly one data series for a deviation bar chart.')
    await assertAlertNavigation(canvasElement, 'Data Series', 'Exactly 1 Data Series', 'data-series', user)
    await assertAlertNavigation(canvasElement, 'Date/Category Axis', 'Data Key', 'date-category-axis', user)

    await assertAlertNavigation(canvasElement, 'Data Series', 'Exactly 1 Data Series', 'data-series', user)
    const addSeries = canvas.getByRole('combobox', { name: /^Add Data Series/ }) as HTMLSelectElement
    await waitForOptionsToPopulate(addSeries)
    await performAndAssert(
      'Adding Score leaves only Data Key missing',
      () => requiredAlertText(canvasElement),
      () => user.selectOptions(addSeries, 'Score'),
      (before, after) =>
        before.includes('Exactly 1 Data Series') &&
        before.includes('Data Key') &&
        !after.includes('Exactly 1 Data Series') &&
        after.includes('Data Key')
    )
    expectRequiredFields(canvasElement, [{ section: 'Date/Category Axis', field: 'Data Key' }])

    await assertAlertNavigation(canvasElement, 'Date/Category Axis', 'Data Key', 'date-category-axis', user)
    const dataKey = canvas.getByRole('combobox', { name: /^Data Key/ }) as HTMLSelectElement
    await waitForOptionsToPopulate(dataKey)
    await user.selectOptions(dataKey, 'Category')
    await waitForAbsence('.chart-required-fields-alerts', canvasElement)
    await assertVisualizationRendered(canvasElement)
    await waitFor(() => expect(deviationBars(canvasElement)).toHaveLength(3))

    await openSection(canvas, canvasElement, 'Value Axis')
    const deviationPoint = canvas.getByRole('spinbutton', { name: /^Deviation point$/i })
    await performAndAssert(
      'A nonzero target creates below, equal, and above geometry',
      () => deviationBars(canvasElement).map(barGeometry),
      () => replaceText(user, deviationPoint, '50'),
      (_before, after) => after.length === 3 && after.some(geometry => geometry.width === 0)
    )
    await waitFor(() => expectTargetGeometry(canvasElement))
    for (const [category, score] of EXPECTED_ROWS) {
      expect(tooltipText(deviationBar(canvasElement, category, score)!)).toContain(category)
      expect(tooltipText(deviationBar(canvasElement, category, score)!)).toMatch(
        new RegExp(`(?:^|\\s)${score}(?:\\s|$)`)
      )
    }

    const deviationLabel = canvas.getByRole('textbox', { name: /^Deviation point Label$/i })
    await performAndAssert(
      'Goal label updates the target and legend semantics',
      () => ({
        targetVisible: isRendered(targetLabelElement(canvasElement, 'Goal 50')),
        legend: legendLabels(canvasElement)
      }),
      () => replaceText(user, deviationLabel, 'Goal'),
      (_before, after) => after.targetVisible && after.legend.join('|') === ['Below Goal', 'Above Goal'].join('|')
    )
    const showTargetLabel = canvas.getByRole('checkbox', { name: /^Show Deviation point label$/i })
    const targetX = targetLineState(canvasElement).x
    await performAndAssert(
      'Hiding the target label retains the target line',
      () => ({
        labelVisible: isRendered(targetLabelElement(canvasElement, 'Goal 50')),
        line: targetLineState(canvasElement)
      }),
      () => user.click(showTargetLabel),
      (before, after) =>
        before.labelVisible &&
        !after.labelVisible &&
        before.line.visible &&
        before.line.length > 0 &&
        after.line.visible &&
        after.line.length > 0 &&
        before.line.x === targetX &&
        after.line.x === targetX
    )
    await performAndAssert(
      'Showing the target label restores Goal 50',
      () => isRendered(targetLabelElement(canvasElement, 'Goal 50')),
      () => user.click(showTargetLabel),
      (before, after) => !before && after
    )

    await openSection(canvas, canvasElement, 'General')
    const barStyle = canvas.getByLabelText(/bar style/i) as HTMLSelectElement
    await performAndAssert(
      'Rounded style gives each deviation direction a rounded outer end',
      () => ({
        below: cornerRadii(deviationBar(canvasElement, 'Below target', '20')!),
        above: cornerRadii(deviationBar(canvasElement, 'Above target', '80')!)
      }),
      () => user.selectOptions(barStyle, 'rounded'),
      (before, after) =>
        Object.values(before.below).every(radius => radius === 0) &&
        Object.values(before.above).every(radius => radius === 0) &&
        after.below.topLeft > 0 &&
        after.below.bottomLeft > 0 &&
        after.below.topRight === 0 &&
        after.below.bottomRight === 0 &&
        after.above.topLeft === 0 &&
        after.above.bottomLeft === 0 &&
        after.above.topRight > 0 &&
        after.above.bottomRight > 0
    )
    const displayNumbers = canvas.getByRole('checkbox', { name: /^Display Numbers on Bar$/i })
    await performAndAssert(
      'Number labels expose all values including the zero-width target mark',
      () => EXPECTED_ROWS.map(([category, score]) => rowValueState(deviationBar(canvasElement, category, score)!)),
      () => user.click(displayNumbers),
      (before, after) =>
        before.every(value => value.text === '' && !value.visible) &&
        after.map(value => value.text).join('|') === '20|50|80' &&
        after.every(value => value.visible)
    )

    await openSection(canvas, canvasElement, 'Visual')
    const barSpace = canvas.getByRole('spinbutton', { name: /^Bar Space$/i })
    await performAndAssert(
      'Reducing Bar Space contracts row positions without changing target-relative X geometry',
      () => deviationBars(canvasElement).map(barGeometry),
      () => replaceText(user, barSpace, '5'),
      (before, after) => {
        if (before.length !== 3 || after.length !== 3) return false
        const beforeGaps = before.slice(1).map((geometry, index) => geometry.y - before[index].y - before[index].height)
        const afterGaps = after.slice(1).map((geometry, index) => geometry.y - after[index].y - after[index].height)
        const uniform = (gaps: number[]) => Math.abs(gaps[0] - gaps[1]) < 0.5
        const stableXGeometry = before.every(
          (geometry, index) =>
            Math.abs(geometry.x - after[index].x) < 0.5 && Math.abs(geometry.width - after[index].width) < 0.5
        )
        return (
          uniform(beforeGaps) &&
          uniform(afterGaps) &&
          afterGaps[0] < beforeGaps[0] &&
          afterGaps[0] >= 0 &&
          stableXGeometry
        )
      }
    )
    expectTargetGeometry(canvasElement)

    const greenOrange = within(sectionPanel(canvasElement, 'Visual')).getByRole('button', {
      name: 'divergent_green_orange'
    })
    await performAndAssert(
      'Green/orange palette updates both target-relative colors',
      () => ({
        below: barColor(deviationBar(canvasElement, 'Below target', '20')!),
        above: barColor(deviationBar(canvasElement, 'Above target', '80')!)
      }),
      () => user.click(greenOrange!),
      (before, after) =>
        before.below !== after.below &&
        before.above !== after.above &&
        after.below === 'rgb(62, 163, 148)' &&
        after.above === 'rgb(226, 116, 71)'
    )
    await waitFor(() => {
      expect(legendSwatchColor(canvasElement, 'Below Goal')).toBe(
        barColor(deviationBar(canvasElement, 'Below target', '20')!)
      )
      expect(legendSwatchColor(canvasElement, 'Above Goal')).toBe(
        barColor(deviationBar(canvasElement, 'Above target', '80')!)
      )
    })

    const belowBar = deviationBar(canvasElement, 'Below target', '20')
    expect(belowBar, 'Expected hoverable below-target bar').toBeTruthy()
    await user.hover(belowBar!)
    await waitFor(() => {
      const tooltip = visibleTooltip(canvasElement)
      expect(tooltip).toBeTruthy()
      expect(normalize(tooltip?.textContent)).toContain('Below target')
      expect(normalize(tooltip?.textContent)).toMatch(/(?:^|\s)20(?:\s|$)/)
    })
    await user.unhover(belowBar!)

    await openSection(canvas, canvasElement, 'Legend')
    expect(legendLabels(canvasElement)).toEqual(['Below Goal', 'Above Goal'])
    const reverseLabels = canvas.getByRole('checkbox', { name: /^Reverse Labels$/i })
    await performAndAssert(
      'Reverse Labels reverses the semantic legend order',
      () => legendLabels(canvasElement),
      () => user.click(reverseLabels),
      (before, after) => before.join('|') === 'Below Goal|Above Goal' && after.join('|') === 'Above Goal|Below Goal'
    )
    const hideLegend = canvas
      .getAllByRole('checkbox', { name: /^Hide Legend/i })
      .find(control => control.getAttribute('name') === 'hide')
    expect(hideLegend, 'Expected Hide Legend checkbox').toBeTruthy()
    await performAndAssert(
      'Hide Legend makes the rendered legend non-visible',
      () => legendState(canvasElement),
      () => user.click(hideLegend!),
      (before, after) => before.visible && before.visibleItems === 2 && !after.visible && after.visibleItems === 0
    )
    await performAndAssert(
      'Showing the legend restores visible reversed Goal labels',
      () => legendState(canvasElement),
      () => user.click(hideLegend!),
      (before, after) =>
        !before.visible &&
        after.visible &&
        after.visibleItems === 2 &&
        after.labels.join('|') === 'Above Goal|Below Goal'
    )

    await openSection(canvas, canvasElement, 'Data Table')
    const showDataTable = canvas.getByRole('checkbox', { name: /^Show Data Table/i })
    expect(canvasElement.querySelector('.data-table-container')).toBeVisible()
    await performAndAssert(
      'Hiding the data table makes its supporting output non-visible',
      () => dataTableState(canvasElement),
      () => user.click(showDataTable),
      (before, after) => before.visible && !after.visible
    )
    const restoreDataTable = canvas.getByRole('checkbox', { name: /^Show Data Table/i })
    await performAndAssert(
      'Showing the data table restores visible supporting output',
      () => dataTableState(canvasElement),
      () => user.click(restoreDataTable),
      (before, after) => !before.visible && after.visible
    )
    const dataTableContainer = canvasElement.querySelector<HTMLElement>('.data-table-container')
    expect(dataTableContainer).toBeVisible()
    await user.click(within(dataTableContainer!).getByRole('button', { name: /Data Table/ }))
    await waitFor(() => expect(renderedTable(canvasElement)).toBeVisible())
    expect(renderedTableHeadings(canvasElement)).toEqual(['Category', 'Score'])
    expect(renderedTableRows(canvasElement)).toEqual(EXPECTED_ROWS)
    expectTargetGeometry(canvasElement)
  }
}
