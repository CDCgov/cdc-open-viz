import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import {
  assertVisualizationRendered,
  openAccordion,
  performAndAssert,
  waitForAbsence,
  waitForEditor,
  waitForOptionsToPopulate
} from '@cdc/core/helpers/testing'
import CdcEditor from '../CdcEditor'

// Source regression: docs/qa/regression-scripts/configure-an-open-circle-special-line.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Chart Scripts/Line Chart',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type Canvas = ReturnType<typeof within>
type User = ReturnType<typeof userEvent.setup>

const CSV = `Date,Observed,Goal,Status
2026-03-01,40,35,final
2026-03-08,44,38,provisional
2026-03-15,42,41,final
2026-03-22,49,45,provisional
2026-03-29,52,48,final`

const HEADINGS = ['Date', 'Observed', 'Goal', 'Status']
const EXPECTED_ROWS = [
  ['2026-03-01', '40', '35', 'final'],
  ['2026-03-08', '44', '38', 'provisional'],
  ['2026-03-15', '42', '41', 'final'],
  ['2026-03-22', '49', '45', 'provisional'],
  ['2026-03-29', '52', '48', 'final']
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

const replaceText = async (user: User, control: HTMLElement, value: string) => {
  await user.clear(control)
  await user.type(control, value)
}

const linePaths = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<SVGPathElement>('g.line-chart-group path.visx-linepath'))

const pathVertices = (data: string) =>
  Array.from(data.matchAll(/[ML]\s*(-?\d*\.?\d+(?:e[+-]?\d+)?)\s*[, ]\s*(-?\d*\.?\d+(?:e[+-]?\d+)?)/gi), match => ({
    x: Number(match[1]),
    y: Number(match[2])
  }))

const pathState = (root: HTMLElement) =>
  linePaths(root).map(path => {
    const data = path.getAttribute('d') || ''
    const length = path.getTotalLength()
    return {
      data,
      stroke: path.getAttribute('stroke') || '',
      effectiveStroke: getComputedStyle(path).stroke,
      dash: path.getAttribute('stroke-dasharray') || '',
      length,
      moves: (data.match(/M/g) || []).length,
      lines: (data.match(/L/g) || []).length,
      vertices: pathVertices(data)
    }
  })

const expectValidBaselinePaths = (state: ReturnType<typeof pathState>) => {
  expect(state).toHaveLength(2)
  state.forEach(path => {
    expect(path.data).not.toMatch(/NaN|undefined|null/)
    expect(path.stroke).not.toMatch(/^(|none|transparent)$/)
    expect(path.dash).toBe('0')
    expect(Number.isFinite(path.length)).toBe(true)
    expect(path.length).toBeGreaterThan(0)
    expect(path.moves).toBe(1)
    expect(path.lines).toBe(4)
    expect(path.vertices).toHaveLength(5)
    expect(path.vertices.every(vertex => Number.isFinite(vertex.x) && Number.isFinite(vertex.y))).toBe(true)
  })
}

const pathIdentity = (root: HTMLElement) => pathState(root).map(({ data, stroke, dash }) => ({ data, stroke, dash }))

const effectCircleState = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<SVGCircleElement>('.line-chart-group > g > circle'))
    .map(circle => ({
      cx: Number(circle.getAttribute('cx')),
      cy: Number(circle.getAttribute('cy')),
      r: Number(circle.getAttribute('r')),
      fill: circle.getAttribute('fill') || '',
      stroke: circle.getAttribute('stroke') || ''
    }))
    .sort((a, b) => a.cx - b.cx)

const specialLegendState = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<HTMLElement>('.legend-preliminary')).map(item => ({
    glyph: normalize(item.querySelector('span')?.textContent),
    label: normalize(item.querySelector('p')?.textContent)
  }))

const seriesLegendStroke = (root: HTMLElement, series: string) => {
  const legend = root.querySelector<HTMLElement>('[aria-label="legend"]')
  expect(legend, 'Expected rendered Line legend').toBeTruthy()
  const item = within(legend!).getByRole('button', { name: series, exact: true })
  const line = item.querySelector<SVGLineElement>('line')
  const marker = item.querySelector<HTMLElement>('.legend-item')
  expect(line || marker, `Expected ${series} rendered legend marker`).toBeTruthy()
  const stroke = line ? getComputedStyle(line).stroke : getComputedStyle(marker!).backgroundColor
  expect(stroke).not.toMatch(/^(|none|transparent)$/)
  return stroke
}

const effectEditorToggles = (root: HTMLElement) =>
  within(root)
    .queryAllByRole('button', { name: /Effect Data 1/ })
    .filter(button => button.getAttribute('data-accordion-component') === 'AccordionItemButton')

const effectEditor = (root: HTMLElement) => {
  const toggles = effectEditorToggles(root)
  expect(toggles).toHaveLength(1)
  const toggle = toggles[0]
  const editor = toggle.closest<HTMLElement>('.accordion')
  expect(editor, 'Expected Effect Data 1 accordion').toBeTruthy()
  return { toggle, editor: editor!, scope: within(editor!) }
}

const hasEffectEditor = (root: HTMLElement) => effectEditorToggles(root).length > 0

const expectEffectCircles = (
  circles: ReturnType<typeof effectCircleState>,
  expectedRadius: number,
  expectedStroke: string,
  expectedVertices: Array<{ x: number; y: number }>
) => {
  expect(circles).toHaveLength(2)
  expect(new Set(circles.map(circle => `${circle.cx},${circle.cy}`)).size).toBe(2)
  circles.forEach((circle, index) => {
    expect(Number.isFinite(circle.cx)).toBe(true)
    expect(Number.isFinite(circle.cy)).toBe(true)
    expect(circle.r).toBe(expectedRadius)
    expect(circle.fill).toBe('#fff')
    expect(circle.stroke).toBe(expectedStroke)
    expect(circle.cx).toBeCloseTo(expectedVertices[index].x, 4)
    expect(circle.cy).toBeCloseTo(expectedVertices[index].y, 4)
  })
}

export const LINE002: Story = {
  name: 'LINE-002 — Configure an open-circle Special Line',
  args: { config: {} },
  parameters: { test: { timeout: 120000 } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    await user.click(await canvas.findByRole('button', { name: 'Line' }))
    await user.click(canvas.getByText('2. Import Data'))
    const upload = canvasElement.querySelector<HTMLInputElement>('input[type="file"]')
    expect(upload, 'Expected Data Import file input').toBeTruthy()
    await user.upload(upload!, new File([CSV], 'line-open-circle-regression.csv', { type: 'text/csv' }))

    expect(await canvas.findByText('Data Preview')).toBeVisible()
    await waitFor(() => expect(canvasElement.querySelectorAll('table.data-table tbody tr')).toHaveLength(5))
    HEADINGS.forEach(heading =>
      expect(canvasElement.querySelector(`table.data-table th[title="${heading}"]`)).toBeVisible()
    )
    const previewRows = Array.from(canvasElement.querySelectorAll<HTMLElement>('table.data-table tbody tr'))
    expect(previewRows.map(row => Array.from(row.querySelectorAll('td'), cell => normalize(cell.textContent)))).toEqual(
      EXPECTED_ROWS
    )

    await user.click(canvas.getByRole('button', { name: /^Vertical/ }))
    await user.click(canvas.getByRole('button', { name: 'Yes', exact: true }))
    await user.click(canvas.getByRole('button', { name: /^Single Row/ }))
    await user.click(await canvas.findByRole('button', { name: 'Configure your visualization' }))
    await waitForEditor(canvas)

    await openSection(canvas, canvasElement, 'Data Series')
    let addSeries = canvas.getByRole('combobox', { name: /^Add Data Series/ }) as HTMLSelectElement
    await waitForOptionsToPopulate(addSeries)
    await user.selectOptions(addSeries, 'Observed')
    addSeries = canvas.getByRole('combobox', { name: /^Add Data Series/ }) as HTMLSelectElement
    await waitForOptionsToPopulate(addSeries)
    await user.selectOptions(addSeries, 'Goal')

    await openSection(canvas, canvasElement, 'Date/Category Axis')
    const axisPanel = within(sectionPanel(canvasElement, 'Date/Category Axis'))
    await user.selectOptions(axisPanel.getByRole('combobox', { name: /^Data Scaling Type/ }), 'date-time')
    const dataKey = axisPanel.getByRole('combobox', { name: /^Data Key/ }) as HTMLSelectElement
    await waitForOptionsToPopulate(dataKey)
    await user.selectOptions(dataKey, 'Date')
    await replaceText(user, axisPanel.getByRole('textbox', { name: /^Date Parse Format/i }), '%Y-%m-%d')
    await replaceText(user, axisPanel.getByRole('textbox', { name: /^AXIS DATE DISPLAY FORMAT/i }), '%Y-%m-%d')
    await replaceText(user, axisPanel.getByRole('textbox', { name: /^HOVER DATE DISPLAY FORMAT/i }), '%Y-%m-%d')
    await waitForAbsence('.chart-required-fields-alerts', canvasElement)
    await assertVisualizationRendered(canvasElement)
    await waitFor(() => expect(linePaths(canvasElement)).toHaveLength(2))

    const baselinePaths = pathState(canvasElement)
    expectValidBaselinePaths(baselinePaths)
    const observedLegendStroke = seriesLegendStroke(canvasElement, 'Observed')
    const goalLegendStroke = seriesLegendStroke(canvasElement, 'Goal')
    expect(observedLegendStroke).not.toBe(goalLegendStroke)
    const observedPath = baselinePaths.find(path => path.effectiveStroke === observedLegendStroke)
    const goalPath = baselinePaths.find(path => path.effectiveStroke === goalLegendStroke)
    expect(observedPath, 'Expected Observed path matched by legend stroke').toBeTruthy()
    expect(goalPath, 'Expected Goal path matched by legend stroke').toBeTruthy()
    expect(observedPath).not.toBe(goalPath)
    const observedStroke = observedPath!.stroke
    const goalStroke = goalPath!.stroke
    expect(observedStroke).not.toBe(goalStroke)
    const baselinePathIdentity = pathIdentityFromState(baselinePaths)
    expect(effectCircleState(canvasElement)).toEqual([])
    expect(specialLegendState(canvasElement)).toEqual([])

    await openSection(canvas, canvasElement, 'Data Series')
    const dataSeriesPanel = within(sectionPanel(canvasElement, 'Data Series'))
    await performAndAssert(
      'Adding a Special Line reveals Effect Data 1 without changing line output',
      () => ({ paths: pathIdentity(canvasElement), effectPresent: hasEffectEditor(canvasElement) }),
      () => user.click(dataSeriesPanel.getByRole('button', { name: 'Add Special Line' })),
      (before, after) =>
        !before.effectPresent && after.effectPresent && JSON.stringify(after.paths) === JSON.stringify(before.paths)
    )

    let effect = effectEditor(canvasElement)
    if (effect.toggle.getAttribute('aria-expanded') !== 'true') await openAccordion(effect.scope, 'Effect Data 1')
    effect = effectEditor(canvasElement)
    await user.click(effect.scope.getByRole('button', { name: 'Expand', exact: true }))
    await user.click(within(effect.scope.getByRole('list')).getByRole('option', { name: 'Observed', exact: true }))
    await user.selectOptions(effect.scope.getByLabelText('COLUMN WITH CONFIGURATION VALUE'), 'Status')
    await replaceText(user, effect.scope.getByLabelText(/VALUE TO TRIGGER/), 'provisional')

    effect = effectEditor(canvasElement)
    const provisionalVertices = [observedPath!.vertices[1], observedPath!.vertices[3]]
    await performAndAssert(
      'Open Circles marks only provisional Observed vertices without restyling either line',
      () => ({ circles: effectCircleState(canvasElement), paths: pathIdentity(canvasElement) }),
      () => user.selectOptions(effect.scope.getByLabelText('Style', { exact: true }), 'Open Circles'),
      (before, after) =>
        before.circles.length === 0 &&
        after.circles.length === 2 &&
        after.circles.every(circle => circle.stroke === observedStroke && circle.stroke !== goalStroke) &&
        JSON.stringify(after.paths) === JSON.stringify(baselinePathIdentity),
      () => expectEffectCircles(effectCircleState(canvasElement), 6, observedStroke, provisionalVertices)
    )
    expect(pathIdentity(canvasElement)).toEqual(baselinePathIdentity)
    effect = effectEditor(canvasElement)
    expect(effect.scope.getByLabelText(/circle size/i)).toBeVisible()
    expect(effect.scope.getByLabelText('Label', { exact: true })).toBeVisible()
    expect(effect.scope.queryByLabelText('Apply style to')).not.toBeInTheDocument()
    expect(effect.scope.queryByLabelText('Line Weight')).not.toBeInTheDocument()

    await performAndAssert(
      'Authored Special Line label appears with the open-circle legend glyph',
      () => specialLegendState(canvasElement),
      () => replaceText(user, effect.scope.getByLabelText('Label', { exact: true }), 'Provisional observations'),
      (_before, after) => after.length === 1 && after[0].glyph === '◯' && after[0].label === 'Provisional observations'
    )

    effect = effectEditor(canvasElement)
    const centersBeforeResize = effectCircleState(canvasElement).map(({ cx, cy }) => ({ cx, cy }))
    await performAndAssert(
      'Circle size changes from 6 to 9 without moving markers or changing lines',
      () => ({ circles: effectCircleState(canvasElement), paths: pathIdentity(canvasElement) }),
      () => replaceText(user, effect.scope.getByLabelText(/circle size/i), '9'),
      (before, after) =>
        before.circles.every(circle => circle.r === 6) &&
        after.circles.every(circle => circle.r === 9) &&
        JSON.stringify(after.circles.map(({ cx, cy }) => ({ cx, cy }))) === JSON.stringify(centersBeforeResize) &&
        JSON.stringify(after.paths) === JSON.stringify(baselinePathIdentity),
      () => expectEffectCircles(effectCircleState(canvasElement), 9, observedStroke, provisionalVertices)
    )

    effect = effectEditor(canvasElement)
    const effectActions = effect.editor.querySelector<HTMLElement>('.series-item__panel-actions')
    expect(effectActions, 'Expected Special Line actions').toBeTruthy()
    const removeEffect = within(effectActions!).getByRole('button', { name: 'Remove' })
    await performAndAssert(
      'Removing the Special Line clears markers and legend without changing paths',
      () => ({
        circles: effectCircleState(canvasElement),
        legend: specialLegendState(canvasElement),
        paths: pathIdentity(canvasElement),
        effectPresent: hasEffectEditor(canvasElement)
      }),
      () => user.click(removeEffect),
      (before, after) =>
        before.circles.length === 2 &&
        before.legend.length === 1 &&
        before.legend[0].glyph === '◯' &&
        before.legend[0].label === 'Provisional observations' &&
        before.effectPresent &&
        after.circles.length === 0 &&
        after.legend.length === 0 &&
        !after.effectPresent &&
        JSON.stringify(after.paths) === JSON.stringify(baselinePathIdentity)
    )
    expect(pathIdentity(canvasElement)).toEqual(baselinePathIdentity)
  }
}

const pathIdentityFromState = (state: ReturnType<typeof pathState>) =>
  state.map(({ data, stroke, dash }) => ({ data, stroke, dash }))
