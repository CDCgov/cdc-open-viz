import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, userEvent, waitFor, within } from 'storybook/test'
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

// Source regression: docs/qa/regression-scripts/build-and-configure-a-horizontal-stacked-bar-chart.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Chart Scripts/Horizontal Bar',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type Canvas = ReturnType<typeof within>
type User = ReturnType<typeof userEvent.setup>

const CSV = `Region,Cases,Hospitalizations
North Coastal Region,62,38
Central Plains,45,55
Southern Metro,71,29`

const HEADINGS = ['Region', 'Cases', 'Hospitalizations']
const EXPECTED_ROWS = [
  ['North Coastal Region', '62', '38'],
  ['Central Plains', '45', '55'],
  ['Southern Metro', '71', '29']
]

const POINTS = EXPECTED_ROWS.flatMap(([category, cases, hospitalizations]) => [
  { category, series: 'Cases', value: cases },
  { category, series: 'Hospitalizations', value: hospitalizations }
])

const normalize = (value: string | null | undefined) => value?.replace(/\s+/g, ' ').trim() || ''
const approximatelyEqual = (left: number, right: number, tolerance = 0.5) => Math.abs(left - right) < tolerance

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
  await user.type(control, value)
}

const chartBody = (root: HTMLElement) => {
  const body = root.querySelector<HTMLElement>('.cove-visualization__body')
  expect(body, 'Expected rendered Horizontal Bar chart body').toBeTruthy()
  return body!
}

const segmentPaths = (root: HTMLElement) =>
  Array.from(
    chartBody(root).querySelectorAll<SVGPathElement>(
      'g[id^="barStack"].stack.horizontal > path[data-tooltip-id^="cdc-open-viz-tooltip-"][data-tooltip-html]'
    )
  )

const tooltipRows = (target: Element) => {
  const html = target.getAttribute('data-tooltip-html') || ''
  const body = new DOMParser().parseFromString(html, 'text/html').body
  return Array.from(body.querySelectorAll('li'), row => normalize(row.textContent)).filter(Boolean)
}

const segmentFor = (root: HTMLElement, category: string, series: string, value: string) =>
  segmentPaths(root).find(path => {
    const rows = tooltipRows(path)
    return rows[0] === category && rows.length === 2 && rows[1] === `${series}: ${value}`
  })

const geometry = (path: SVGPathElement) => {
  const bounds = path.getBBox()
  const data = path.getAttribute('d') || ''
  return { data, x: bounds.x, y: bounds.y, width: bounds.width, height: bounds.height }
}

const semanticGeometry = (root: HTMLElement) =>
  POINTS.map(point => {
    const path = segmentFor(root, point.category, point.series, point.value)
    expect(path, `Expected ${point.category} ${point.series}: ${point.value}`).toBeTruthy()
    return { ...point, ...geometry(path!) }
  })

const validSegments = (segments: ReturnType<typeof semanticGeometry>) =>
  segments.length === POINTS.length &&
  segments.every(
    segment =>
      segment.data.length > 0 &&
      !/NaN|undefined|null/.test(segment.data) &&
      Number.isFinite(segment.x) &&
      Number.isFinite(segment.y) &&
      Number.isFinite(segment.width) &&
      Number.isFinite(segment.height) &&
      segment.width > 0 &&
      segment.height > 0
  )

const stackState = (root: HTMLElement) => {
  const segments = semanticGeometry(root)
  const stacks = EXPECTED_ROWS.map(([category]) => {
    const members = segments.filter(segment => segment.category === category).sort((left, right) => left.x - right.x)
    const start = Math.min(...members.map(member => member.x))
    const end = Math.max(...members.map(member => member.x + member.width))
    return { category, members, start, end, y: members[0]?.y, height: members[0]?.height, width: end - start }
  })
  return { segments, stacks }
}

const hasValidStacks = (state: ReturnType<typeof stackState>) =>
  validSegments(state.segments) &&
  state.stacks.length === 3 &&
  state.stacks.every(stack => {
    if (stack.members.length !== 2) return false
    const [left, right] = stack.members
    const cases = stack.members.find(member => member.series === 'Cases')!
    const hospitalizations = stack.members.find(member => member.series === 'Hospitalizations')!
    return (
      approximatelyEqual(left.x + left.width, right.x) &&
      approximatelyEqual(left.y, right.y) &&
      approximatelyEqual(left.height, right.height) &&
      approximatelyEqual(
        cases.width / hospitalizations.width,
        Number(cases.value) / Number(hospitalizations.value),
        0.05
      )
    )
  }) &&
  state.stacks.every(stack => approximatelyEqual(stack.start, state.stacks[0].start)) &&
  state.stacks.every(stack => approximatelyEqual(stack.end, state.stacks[0].end))

const legendLabels = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<HTMLElement>('.legend-container .legend-item[class*="legend-text--"]'))
    .filter(item => item.getClientRects().length > 0)
    .map(item => normalize(item.textContent))

const exactAxisLabels = (root: HTMLElement) =>
  Array.from(chartBody(root).querySelectorAll<SVGTextElement>('.left-axis .vx-axis-tick text'))
    .filter(label => label.getClientRects().length > 0)
    .map(label => normalize(label.textContent))

const categoryRowsAlign = (root: HTMLElement) => {
  const tickCenters = new Map(
    Array.from(chartBody(root).querySelectorAll<SVGTextElement>('.left-axis .vx-axis-tick text'))
      .filter(label => label.getClientRects().length > 0)
      .map(label => {
        const bounds = label.getBoundingClientRect()
        return [normalize(label.textContent), bounds.top + bounds.height / 2]
      })
  )

  return EXPECTED_ROWS.every(([category]) => {
    const tickCenter = tickCenters.get(category)
    const members = POINTS.filter(point => point.category === category).map(point =>
      segmentFor(root, point.category, point.series, point.value)
    )
    return (
      tickCenter !== undefined &&
      members.every(path => {
        if (!path) return false
        const bounds = path.getBoundingClientRect()
        return approximatelyEqual(bounds.top + bounds.height / 2, tickCenter, 1)
      })
    )
  })
}

const visibleLine = (line: SVGLineElement) => {
  const style = getComputedStyle(line)
  const x1 = Number(line.getAttribute('x1'))
  const x2 = Number(line.getAttribute('x2'))
  const y1 = Number(line.getAttribute('y1'))
  const y2 = Number(line.getAttribute('y2'))
  return style.display !== 'none' && style.visibility !== 'hidden' && (x1 !== x2 || y1 !== y2)
}

const bottomAxisState = (root: HTMLElement) => {
  const body = chartBody(root)
  return {
    lines: Array.from(body.querySelectorAll<SVGLineElement>('.bottom-axis > line')).filter(visibleLine).length,
    ticks: Array.from(body.querySelectorAll<SVGLineElement>('.bottom-axis .vx-axis-tick > line')).filter(visibleLine)
      .length,
    labels: Array.from(body.querySelectorAll<SVGTextElement>('.bottom-axis .vx-axis-tick text'))
      .filter(label => label.getClientRects().length > 0)
      .map(label => normalize(label.textContent))
  }
}

const groupValue = (path: SVGPathElement, expected: string) => {
  const group = path.parentElement
  const text = Array.from(group?.querySelectorAll<SVGTextElement>('text') || []).find(
    candidate => normalize(candidate.textContent) === expected
  )
  const visible = Boolean(text && text.getClientRects().length > 0)
  const segmentBounds = path.getBoundingClientRect()
  const textBounds = text?.getBoundingClientRect()
  const contained = Boolean(
    visible &&
      textBounds &&
      textBounds.left >= segmentBounds.left - 1 &&
      textBounds.right <= segmentBounds.right + 1 &&
      textBounds.top >= segmentBounds.top - 1 &&
      textBounds.bottom <= segmentBounds.bottom + 1
  )
  return { text: normalize(text?.textContent), visible, contained }
}

const rowGaps = (state: ReturnType<typeof stackState>) => {
  const rows = [...state.stacks].sort((left, right) => left.y - right.y)
  return rows.slice(1).map((row, index) => row.y - (rows[index].y + rows[index].height))
}

const renderedTable = (root: HTMLElement) => {
  const table = root.querySelector<HTMLTableElement>('.cove-visualization__body table.data-table')
  expect(table, 'Expected rendered Horizontal Bar data table').toBeTruthy()
  return table!
}

const renderedTableHeadings = (root: HTMLElement) =>
  Array.from(renderedTable(root).querySelectorAll('thead th'), heading =>
    normalize(heading.querySelector(':scope > span:first-child')?.textContent)
  )

const renderedTableRecords = (root: HTMLElement) => {
  const table = renderedTable(root)
  const headings = renderedTableHeadings(root)
  return Array.from(table.querySelectorAll('tbody tr')).map(row =>
    Object.fromEntries(
      Array.from(row.querySelectorAll('td'), (cell, index) => [headings[index], normalize(cell.textContent)])
    )
  )
}

const expectedRecords = EXPECTED_ROWS.map(row =>
  Object.fromEntries(HEADINGS.map((heading, index) => [heading, row[index]]))
)

const visibleTooltipRows = (root: HTMLElement) => {
  const tooltip = Array.from(root.querySelectorAll<HTMLElement>('.tooltip')).find(
    candidate => candidate.getClientRects().length > 0
  )
  return Array.from(tooltip?.querySelectorAll<HTMLElement>('li') || [], row => normalize(row.textContent)).filter(
    Boolean
  )
}

const numericAxisLabels = (labels: string[]) => labels.map(label => Number(label.replaceAll(',', '')))

export const HBAR001: Story = {
  name: 'HBAR-001 — Build and configure a Horizontal Stacked Bar Chart',
  args: { config: {} },
  parameters: { test: { timeout: 120000 } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    await user.click(await canvas.findByRole('button', { name: 'Horizontal Bar (Stacked)' }))
    await user.click(canvas.getByText('2. Import Data'))
    const upload = canvasElement.querySelector<HTMLInputElement>('input[type="file"]')
    expect(upload, 'Expected Data Import file input').toBeTruthy()
    await user.upload(upload!, new File([CSV], 'horizontal-stacked-bar-regression.csv', { type: 'text/csv' }))

    expect(await canvas.findByText('Data Preview')).toBeVisible()
    await waitFor(() => expect(canvasElement.querySelectorAll('table.data-table tbody tr')).toHaveLength(3))
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
    const yesSeries = canvas.getByRole('button', { name: 'Yes', exact: true })
    const noSeries = canvas.getByRole('button', { name: 'No', exact: true })
    await performAndAssert(
      'Yes becomes the visibly selected multiple-series choice',
      () => ({ yes: getComputedStyle(yesSeries).backgroundColor, no: getComputedStyle(noSeries).backgroundColor }),
      async () => {
        await user.click(yesSeries)
        await user.unhover(yesSeries)
      },
      (before, after) => before.yes === before.no && after.yes !== after.no && after.yes !== before.yes
    )
    const singleRow = canvas.getByRole('button', { name: /^Single Row/ })
    await user.click(singleRow)
    expect(singleRow).toHaveClass('active')

    await user.click(await canvas.findByRole('button', { name: 'Configure your visualization' }))
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
    const addSeries = canvas.getByRole('combobox', { name: /^Add Data Series/ }) as HTMLSelectElement
    await waitForOptionsToPopulate(addSeries)
    await performAndAssert(
      'Adding Cases leaves only Data Key missing',
      () => requiredAlertText(canvasElement),
      () => user.selectOptions(addSeries, 'Cases'),
      (before, after) =>
        before.includes('Add Data Series') &&
        before.includes('Data Key') &&
        !after.includes('Add Data Series') &&
        after.includes('Data Key')
    )

    await assertAlertNavigation(canvasElement, 'Date/Category Axis', 'Data Key', 'date-category-axis', user)
    const dataKey = canvas.getByRole('combobox', { name: /^Data Key/ }) as HTMLSelectElement
    await waitForOptionsToPopulate(dataKey)
    await user.selectOptions(dataKey, 'Region')
    await waitForAbsence('.chart-required-fields-alerts', canvasElement)
    await assertVisualizationRendered(canvasElement)
    await waitFor(() => expect(segmentPaths(canvasElement)).toHaveLength(3))

    await openSection(canvas, canvasElement, 'Data Series')
    await user.selectOptions(canvas.getByRole('combobox', { name: /^Add Data Series/ }), 'Hospitalizations')
    await waitFor(() => expect(segmentPaths(canvasElement)).toHaveLength(6))
    await waitFor(() => expect(hasValidStacks(stackState(canvasElement))).toBe(true))
    expect(legendLabels(canvasElement)).toEqual(['Cases', 'Hospitalizations'])
    expect(categoryRowsAlign(canvasElement)).toBe(true)

    await openSection(canvas, canvasElement, 'General')
    expect(
      within(sectionPanel(canvasElement, 'General')).getByRole('combobox', { name: /^Chart Subtype/ })
    ).toHaveValue('stacked')
    expect(within(sectionPanel(canvasElement, 'General')).getByRole('combobox', { name: /^Orientation/ })).toHaveValue(
      'horizontal'
    )
    expect(bottomAxisState(canvasElement).lines).toBe(0)
    expect(bottomAxisState(canvasElement).ticks).toBe(0)
    expect(exactAxisLabels(canvasElement)).toEqual(EXPECTED_ROWS.map(row => row[0]))

    const displayNumbers = within(sectionPanel(canvasElement, 'General')).getByRole('checkbox', {
      name: /^Display Numbers on Bar/
    })
    await performAndAssert(
      'Display Numbers renders every value in its owning semantic segment',
      () =>
        POINTS.map(point => {
          const path = segmentFor(canvasElement, point.category, point.series, point.value)!
          return groupValue(path, point.value)
        }),
      () => user.click(displayNumbers),
      (before, after) =>
        before.every(value => !value.visible) &&
        after.map(value => value.text).join('|') === POINTS.map(point => point.value).join('|') &&
        after.every(value => value.visible && value.contained)
    )
    await performAndAssert(
      'Hiding Display Numbers makes every segment value invisible',
      () =>
        POINTS.map(point =>
          groupValue(segmentFor(canvasElement, point.category, point.series, point.value)!, point.value)
        ),
      () => user.click(displayNumbers),
      (before, after) => before.every(value => value.visible) && after.every(value => !value.visible)
    )

    await openSection(canvas, canvasElement, 'Value Axis')
    const valuePanel = within(sectionPanel(canvasElement, 'Value Axis'))
    const hideAxis = valuePanel.getByRole('checkbox', { name: /^Hide Axis$/ })
    const hideTicks = valuePanel.getByRole('checkbox', { name: /^Hide Ticks$/ })
    await performAndAssert(
      'Showing the numeric axis and ticks creates meaningful bottom-axis structure',
      () => bottomAxisState(canvasElement),
      async () => {
        await user.click(hideAxis)
        await user.click(hideTicks)
      },
      (before, after) =>
        before.lines === 0 &&
        before.ticks === 0 &&
        after.lines > 0 &&
        after.ticks > 0 &&
        after.labels.length > 1 &&
        new Set(after.labels).size > 1 &&
        numericAxisLabels(after.labels).every(Number.isFinite) &&
        exactAxisLabels(canvasElement).join('|') === EXPECTED_ROWS.map(row => row[0]).join('|')
    )
    const axisMax = valuePanel.getByRole('spinbutton', { name: /^axis max value$/i })
    await performAndAssert(
      'Axis maximum 200 proportionally contracts every stack',
      () => ({ stacks: stackState(canvasElement), value: (axisMax as HTMLInputElement).value }),
      () => replaceText(user, axisMax, '200'),
      (before, after) => {
        if (!hasValidStacks(before.stacks) || !hasValidStacks(after.stacks)) return false
        const ratios = after.stacks.stacks.map((stack, index) => stack.width / before.stacks.stacks[index].width)
        const numericLabels = numericAxisLabels(bottomAxisState(canvasElement).labels)
        return (
          after.value === '200' &&
          ratios.every(ratio => approximatelyEqual(ratio, 0.5, 0.03)) &&
          numericLabels.length > 1 &&
          numericLabels.every(Number.isFinite) &&
          numericLabels.includes(200) &&
          exactAxisLabels(canvasElement).join('|') === EXPECTED_ROWS.map(row => row[0]).join('|') &&
          categoryRowsAlign(canvasElement)
        )
      }
    )

    await openSection(canvas, canvasElement, 'Visual')
    const barSpace = within(sectionPanel(canvasElement, 'Visual')).getByRole('spinbutton', { name: /^Bar Space$/ })
    expect(barSpace).toHaveValue(15)
    await performAndAssert(
      'Bar Space 5 contracts uniform gaps without changing segment X geometry',
      () => ({ stacks: stackState(canvasElement), value: (barSpace as HTMLInputElement).value }),
      () => replaceText(user, barSpace, '5'),
      (before, after) => {
        const beforeGaps = rowGaps(before.stacks)
        const afterGaps = rowGaps(after.stacks)
        return (
          before.value === '15' &&
          after.value === '5' &&
          hasValidStacks(after.stacks) &&
          beforeGaps.length === 2 &&
          afterGaps.length === 2 &&
          approximatelyEqual(beforeGaps[0], beforeGaps[1]) &&
          approximatelyEqual(afterGaps[0], afterGaps[1]) &&
          afterGaps.every(gap => gap >= 0) &&
          afterGaps[0] < beforeGaps[0] &&
          before.stacks.segments.every(
            (segment, index) =>
              approximatelyEqual(segment.x, after.stacks.segments[index].x) &&
              approximatelyEqual(segment.width, after.stacks.segments[index].width)
          )
        )
      }
    )

    const northCases = segmentFor(canvasElement, 'North Coastal Region', 'Cases', '62')
    expect(northCases, 'Expected North Coastal Region Cases segment').toBeTruthy()
    const northCasesBounds = northCases!.getBoundingClientRect()
    fireEvent.mouseOver(northCases!, {
      clientX: northCasesBounds.left + northCasesBounds.width / 2,
      clientY: northCasesBounds.top + northCasesBounds.height / 2
    })
    await waitFor(() => {
      const rows = visibleTooltipRows(canvasElement)
      expect(rows).toEqual(['North Coastal Region', 'Cases: 62', 'Hospitalizations: 38'])
      expect(new Set(rows).size).toBe(rows.length)
    })
    fireEvent.mouseOut(northCases!)

    const tableContainer = canvasElement.querySelector<HTMLElement>('.data-table-container')
    expect(tableContainer).toBeVisible()
    await user.click(within(tableContainer!).getByRole('button', { name: /Data Table/ }))
    await waitFor(() => expect(renderedTable(canvasElement)).toBeVisible())
    expect(renderedTableHeadings(canvasElement)).toEqual(HEADINGS)
    expect(renderedTableRecords(canvasElement).sort((a, b) => a.Region.localeCompare(b.Region))).toEqual(
      [...expectedRecords].sort((a, b) => a.Region.localeCompare(b.Region))
    )
    expect(hasValidStacks(stackState(canvasElement))).toBe(true)
  }
}
