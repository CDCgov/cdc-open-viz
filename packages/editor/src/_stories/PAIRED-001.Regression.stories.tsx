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

// Source regression: docs/qa/regression-scripts/build-and-configure-a-paired-bar-chart.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Chart Scripts/Paired Bar',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type Canvas = ReturnType<typeof within>
type User = ReturnType<typeof userEvent.setup>

const CSV = `Region,Reported,Expected
North,80,40
Central,50,70
South,65,30`

const HEADINGS = ['Region', 'Reported', 'Expected']
const EXPECTED_ROWS = [
  ['North', '80', '40'],
  ['Central', '50', '70'],
  ['South', '65', '30']
]

const POINTS = EXPECTED_ROWS.flatMap(([category, reported, expected]) => [
  { category, series: 'Reported', value: reported, side: 'group-1' },
  { category, series: 'Expected', value: expected, side: 'group-2' }
])

const normalize = (value: string | null | undefined) => value?.replace(/\s+/g, ' ').trim() || ''
const approximatelyEqual = (left: number, right: number, tolerance = 0.01) => Math.abs(left - right) <= tolerance

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

const pairedSvg = (root: HTMLElement) => root.querySelector<SVGSVGElement>('#cdc-visualization__paired-bar-chart')

const pairedBars = (root: HTMLElement) =>
  Array.from(pairedSvg(root)?.querySelectorAll<SVGRectElement>('rect.bar') || [])

const tooltipText = (bar: SVGRectElement) => {
  const body = new DOMParser().parseFromString(bar.getAttribute('data-tooltip-html') || '', 'text/html').body
  return normalize(body.textContent)
}

const expectedTooltip = (category: string, series: string, value: string) => `Region: ${category} ${series}: ${value}`

const expectedBarIdentities = POINTS.map(
  point => `${point.side}|${expectedTooltip(point.category, point.series, point.value)}`
).sort()

const barInventory = (root: HTMLElement) => {
  const identities = pairedBars(root)
    .map(bar => {
      const side = bar.classList.contains('group-1') ? 'group-1' : bar.classList.contains('group-2') ? 'group-2' : ''
      return `${side}|${tooltipText(bar)}`
    })
    .sort()
  return { total: identities.length, unique: new Set(identities).size, identities }
}

const hasExactBarInventory = (inventory: ReturnType<typeof barInventory>) =>
  inventory.total === POINTS.length &&
  inventory.unique === POINTS.length &&
  JSON.stringify(inventory.identities) === JSON.stringify(expectedBarIdentities)

const barFor = (root: HTMLElement, point: (typeof POINTS)[number]) =>
  pairedBars(root).find(
    bar =>
      bar.classList.contains(point.side) &&
      tooltipText(bar) === expectedTooltip(point.category, point.series, point.value)
  )

const semanticBars = (root: HTMLElement) =>
  POINTS.map(point => {
    const bar = barFor(root, point)
    expect(bar, `Expected ${point.category} ${point.series}: ${point.value}`).toBeTruthy()
    return {
      ...point,
      x: Number(bar!.getAttribute('x')),
      y: Number(bar!.getAttribute('y')),
      width: Number(bar!.getAttribute('width')),
      height: Number(bar!.getAttribute('height')),
      fill: normalize(bar!.getAttribute('fill')).toLowerCase(),
      strokeWidth: Number(bar!.getAttribute('stroke-width')),
      tooltip: tooltipText(bar!)
    }
  })

const geometry = (bars: ReturnType<typeof semanticBars>) =>
  bars.map(({ category, series, x, y, width, height }) => ({ category, series, x, y, width, height }))

const horizontalGeometry = (bars: ReturnType<typeof semanticBars>) =>
  bars.map(({ category, series, x, width }) => ({ category, series, x, width }))

const hasValidPairedGeometry = (bars: ReturnType<typeof semanticBars>) => {
  if (
    bars.length !== POINTS.length ||
    new Set(bars.map(bar => bar.tooltip)).size !== POINTS.length ||
    bars.some(
      bar =>
        ![bar.x, bar.y, bar.width, bar.height].every(Number.isFinite) ||
        bar.x < 0 ||
        bar.y < 0 ||
        bar.width <= 0 ||
        bar.height <= 0
    )
  )
    return false

  const pairs = EXPECTED_ROWS.map(([category]) => bars.filter(bar => bar.category === category))
  const seams = pairs.map(pair => {
    const reported = pair.find(bar => bar.series === 'Reported')!
    const expected = pair.find(bar => bar.series === 'Expected')!
    return { left: reported.x + reported.width, right: expected.x }
  })
  const ratios = bars.map(bar => bar.width / Number(bar.value))
  const rows = pairs.map(pair => {
    const reported = pair.find(bar => bar.series === 'Reported')!
    return { y: reported.y, height: reported.height, end: reported.y + reported.height }
  })
  const gaps = rows.slice(1).map((row, index) => row.y - rows[index].end)

  return (
    pairs.every(pair => {
      if (pair.length !== 2) return false
      const reported = pair.find(bar => bar.series === 'Reported')!
      const expected = pair.find(bar => bar.series === 'Expected')!
      return (
        approximatelyEqual(reported.y, expected.y) &&
        approximatelyEqual(reported.height, expected.height) &&
        reported.x < reported.x + reported.width &&
        approximatelyEqual(reported.x + reported.width, expected.x)
      )
    }) &&
    seams.every(seam => approximatelyEqual(seam.left, seam.right)) &&
    seams.every(seam => approximatelyEqual(seam.left, seams[0].left)) &&
    ratios.every(ratio => approximatelyEqual(ratio, ratios[0])) &&
    new Set(rows.map(row => row.y)).size === EXPECTED_ROWS.length &&
    rows.every(row => Number.isFinite(row.y) && Number.isFinite(row.end) && row.y >= 0) &&
    rows.slice(1).every((row, index) => row.y > rows[index].y && row.y >= rows[index].end) &&
    gaps.every(gap => Number.isFinite(gap) && gap >= 0)
  )
}

const legendLabels = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<HTMLElement>('.legend-container .legend-item[class*="legend-text--"]'))
    .filter(item => item.getClientRects().length > 0)
    .map(item => normalize(item.textContent))

const categoryLabelCount = (root: HTMLElement, category: string) =>
  Array.from(root.querySelectorAll<SVGTextElement>('svg text')).filter(
    label => label.getClientRects().length > 0 && normalize(label.textContent) === category
  ).length

const valueLabelState = (root: HTMLElement) =>
  POINTS.map(point => {
    const bar = barFor(root, point)
    const group = bar?.parentElement
    const label = Array.from(group?.querySelectorAll<SVGTextElement>('text') || []).find(
      text => normalize(text.textContent) === point.value
    )
    const pair = POINTS.filter(candidate => candidate.category === point.category)
    const reported = barFor(root, pair.find(candidate => candidate.series === 'Reported')!)
    const expected = barFor(root, pair.find(candidate => candidate.series === 'Expected')!)
    const leftSeam = reported ? Number(reported.getAttribute('x')) + Number(reported.getAttribute('width')) : NaN
    const rightSeam = expected ? Number(expected.getAttribute('x')) : NaN
    return {
      ...point,
      text: normalize(label?.textContent),
      visible: Boolean(label && label.getClientRects().length > 0),
      x: label ? Number(label.getAttribute('x')) : NaN,
      seam: approximatelyEqual(leftSeam, rightSeam) ? leftSeam : NaN
    }
  })

const hasExactVisibleValueLabels = (labels: ReturnType<typeof valueLabelState>) =>
  labels.length === POINTS.length &&
  labels.map(label => label.text).join('|') === POINTS.map(point => point.value).join('|') &&
  labels.every(
    label =>
      label.visible &&
      Number.isFinite(label.x) &&
      Number.isFinite(label.seam) &&
      (label.series === 'Reported' ? label.x < label.seam : label.x > label.seam)
  )

const rowGaps = (bars: ReturnType<typeof semanticBars>) => {
  const rows = EXPECTED_ROWS.map(([category]) => {
    const member = bars.find(bar => bar.category === category)!
    return { y: member.y, height: member.height }
  }).sort((left, right) => left.y - right.y)
  return rows.slice(1).map((row, index) => row.y - (rows[index].y + rows[index].height))
}

export const PAIRED001: Story = {
  name: 'PAIRED-001 — Build and configure a Paired Bar Chart',
  args: { config: {} },
  parameters: { test: { timeout: 120000 } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    await user.click(await canvas.findByRole('button', { name: 'Paired Bar' }))
    await user.click(canvas.getByText('2. Import Data'))
    const upload = canvasElement.querySelector<HTMLInputElement>('input[type="file"]')
    expect(upload, 'Expected Data Import file input').toBeTruthy()
    await user.upload(upload!, new File([CSV], 'paired-bar-regression.csv', { type: 'text/csv' }))

    expect(await canvas.findByText('Data Preview')).toBeVisible()
    await waitFor(() => expect(canvasElement.querySelectorAll('table.data-table tbody tr')).toHaveLength(3))
    HEADINGS.forEach(heading =>
      expect(canvasElement.querySelector(`table.data-table th[title="${heading}"]`)).toBeVisible()
    )
    const previewRows = Array.from(canvasElement.querySelectorAll<HTMLElement>('table.data-table tbody tr'))
    expect(previewRows.map(row => Array.from(row.querySelectorAll('td'), cell => normalize(cell.textContent)))).toEqual(
      EXPECTED_ROWS
    )

    expect(canvas.queryByRole('button', { name: 'Configure your visualization' })).toBeNull()

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

    const configure = await canvas.findByRole('button', { name: 'Configure your visualization' })
    expect(configure).toBeVisible()
    expect(configure).toBeEnabled()
    await user.click(configure)
    await waitForEditor(canvas)
    await waitForPresence('.chart-required-fields-alerts .alert-info', canvasElement)
    expectRequiredFields(canvasElement, [
      { section: 'Data Series', field: 'Exactly 2 Data Series' },
      { section: 'Date/Category Axis', field: 'Data Key' }
    ])
    expect(pairedSvg(canvasElement)).toBeNull()
    await assertAlertNavigation(canvasElement, 'Data Series', 'Exactly 2 Data Series', 'data-series', user)
    await assertAlertNavigation(canvasElement, 'Date/Category Axis', 'Data Key', 'date-category-axis', user)

    await assertAlertNavigation(canvasElement, 'Data Series', 'Exactly 2 Data Series', 'data-series', user)
    const addSeries = canvas.getByRole('combobox', { name: /^Add Data Series/ }) as HTMLSelectElement
    await waitForOptionsToPopulate(addSeries)
    await user.selectOptions(addSeries, 'Reported')

    await assertAlertNavigation(canvasElement, 'Date/Category Axis', 'Data Key', 'date-category-axis', user)
    const dataKey = canvas.getByRole('combobox', { name: /^Data Key/ }) as HTMLSelectElement
    await waitForOptionsToPopulate(dataKey)
    await performAndAssert(
      'Region leaves only the exactly-two-series requirement and rendering blocked',
      () => ({ required: requiredAlertText(canvasElement), rendered: Boolean(pairedSvg(canvasElement)) }),
      () => user.selectOptions(dataKey, 'Region'),
      (before, after) =>
        before.required.includes('Data Key') &&
        after.required.includes('Exactly 2 Data Series') &&
        !after.required.includes('Data Key') &&
        !after.rendered
    )
    expectRequiredFields(canvasElement, [{ section: 'Data Series', field: 'Exactly 2 Data Series' }])

    await assertAlertNavigation(canvasElement, 'Data Series', 'Exactly 2 Data Series', 'data-series', user)
    await user.selectOptions(canvas.getByRole('combobox', { name: /^Add Data Series/ }), 'Expected')
    await waitForAbsence('.chart-required-fields-alerts', canvasElement)
    await assertVisualizationRendered(canvasElement)
    await waitFor(() => expect(pairedBars(canvasElement)).toHaveLength(6))
    expect(hasExactBarInventory(barInventory(canvasElement))).toBe(true)
    await waitFor(() => expect(hasValidPairedGeometry(semanticBars(canvasElement))).toBe(true))
    expect(legendLabels(canvasElement)).toEqual(['Reported', 'Expected'])
    EXPECTED_ROWS.forEach(([category]) => expect(categoryLabelCount(canvasElement, category)).toBe(1))

    await openSection(canvas, canvasElement, 'General')
    const displayNumbers = within(sectionPanel(canvasElement, 'General')).getByRole('checkbox', {
      name: /^Display Numbers on Bar/
    })
    await performAndAssert(
      'Display Numbers renders all six values in their owning semantic bars',
      () => valueLabelState(canvasElement),
      () => user.click(displayNumbers),
      (before, after) => before.every(value => !value.visible) && hasExactVisibleValueLabels(after)
    )
    await performAndAssert(
      'Hiding Display Numbers removes all six values',
      () => valueLabelState(canvasElement),
      () => user.click(displayNumbers),
      (before, after) => before.every(value => value.visible) && after.every(value => !value.visible)
    )

    await openSection(canvas, canvasElement, 'Visual')
    const visual = within(sectionPanel(canvasElement, 'Visual'))
    const barSpace = visual.getByRole('spinbutton', { name: /^Bar Space$/ })
    expect(barSpace).toHaveValue(15)
    await performAndAssert(
      'Bar Space 5 contracts uniform row gaps while preserving horizontal geometry and seam alignment',
      () => ({ bars: semanticBars(canvasElement), value: (barSpace as HTMLInputElement).value }),
      () => replaceText(user, barSpace, '5'),
      (before, after) => {
        const beforeGaps = rowGaps(before.bars)
        const afterGaps = rowGaps(after.bars)
        return (
          before.value === '15' &&
          after.value === '5' &&
          beforeGaps.length === 2 &&
          afterGaps.length === 2 &&
          beforeGaps.every(gap => Number.isFinite(gap) && gap >= 0) &&
          afterGaps.every(gap => Number.isFinite(gap) && gap >= 0) &&
          approximatelyEqual(beforeGaps[0], beforeGaps[1]) &&
          approximatelyEqual(afterGaps[0], afterGaps[1]) &&
          beforeGaps.every((gap, index) => approximatelyEqual(gap - afterGaps[index], 10)) &&
          JSON.stringify(horizontalGeometry(before.bars)) === JSON.stringify(horizontalGeometry(after.bars)) &&
          hasExactBarInventory(barInventory(canvasElement)) &&
          hasValidPairedGeometry(after.bars)
        )
      }
    )

    const palette = visual.getByRole('button', { name: 'divergent_green_orange' })
    await performAndAssert(
      'Green-orange palette changes only the semantic side colors',
      () => semanticBars(canvasElement),
      () => user.click(palette),
      (before, after) =>
        after.filter(bar => bar.series === 'Reported').every(bar => bar.fill === '#3ea394') &&
        after.filter(bar => bar.series === 'Expected').every(bar => bar.fill === '#e27447') &&
        JSON.stringify(geometry(before)) === JSON.stringify(geometry(after)) &&
        before.map(bar => bar.tooltip).join('|') === after.map(bar => bar.tooltip).join('|') &&
        hasExactBarInventory(barInventory(canvasElement))
    )

    expect(legendLabels(canvasElement)).toEqual(['Reported', 'Expected'])
    EXPECTED_ROWS.forEach(([category]) => expect(categoryLabelCount(canvasElement, category)).toBe(1))
    expect(hasExactBarInventory(barInventory(canvasElement))).toBe(true)
    expect(hasValidPairedGeometry(semanticBars(canvasElement))).toBe(true)
  }
}
