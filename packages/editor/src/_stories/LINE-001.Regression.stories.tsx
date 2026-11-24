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

// Source regression: docs/qa/regression-scripts/build-and-configure-a-line-chart.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Charts/Scripts/Line Chart',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type Canvas = ReturnType<typeof within>
type User = ReturnType<typeof userEvent.setup>

const CSV = `Date,Observed,Goal
2026-01-01,12,15
2026-01-08,18,17
2026-01-15,,19
2026-01-22,25,21
2026-01-29,,23
2026-02-05,30,25`

const HEADINGS = ['Date', 'Observed', 'Goal']
const EXPECTED_ROWS = [
  ['2026-01-01', '12', '15'],
  ['2026-01-08', '18', '17'],
  ['2026-01-15', '', '19'],
  ['2026-01-22', '25', '21'],
  ['2026-01-29', '', '23'],
  ['2026-02-05', '30', '25']
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

const requiredAlerts = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<HTMLElement>('.chart-required-fields-alerts .alert-info'))

const requiredAlertText = (root: HTMLElement) =>
  requiredAlerts(root)
    .map(alert => normalize(alert.textContent))
    .join('|')

const expectRequiredFields = (root: HTMLElement) => {
  const expected = [
    { section: 'Data Series', field: 'Add Data Series' },
    { section: 'Date/Category Axis', field: 'Data Key' }
  ]
  expect(requiredAlerts(root)).toHaveLength(expected.length)
  expected.forEach(({ section, field }) => {
    const alert = requiredAlerts(root).find(candidate => candidate.textContent?.includes(`Missing field: ${field}.`))
    expect(alert, `Expected missing-field alert for ${field}`).toBeTruthy()
    expect(within(alert!).getByRole('button', { name: `Open ${section} and focus ${field}` })).toBeVisible()
  })
}

const assertRequiredNavigation = async (
  root: HTMLElement,
  section: string,
  field: string,
  target: string,
  user: User
) => {
  const action = within(root).getByRole('button', { name: `Open ${section} and focus ${field}` })
  await performAndAssert(
    `${field} guidance opens and focuses ${section}`,
    () => ({
      expanded: root.querySelector(`[data-required-field-section="${target}"]`)?.getAttribute('aria-expanded'),
      focused: root.ownerDocument.activeElement?.getAttribute('data-required-field-control')
    }),
    () => user.click(action),
    (_before, after) => after.expanded === 'true' && after.focused === target
  )
}

const linePaths = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<SVGPathElement>('g.line-chart-group path.visx-linepath'))

const pathState = (root: HTMLElement) =>
  linePaths(root).map(path => {
    const data = path.getAttribute('d') || ''
    const style = getComputedStyle(path)
    return {
      data,
      stroke: path.getAttribute('stroke') || '',
      effectiveStroke: style.stroke,
      strokeOpacity: Number(style.strokeOpacity || path.getAttribute('stroke-opacity') || 1),
      moves: (data.match(/M/g) || []).length,
      lines: (data.match(/L/g) || []).length,
      length: path.getTotalLength()
    }
  })

const expectValidLinePaths = (root: HTMLElement) => {
  const paths = pathState(root)
  expect(paths).toHaveLength(2)
  paths.forEach(path => {
    expect(path.data).not.toMatch(/NaN|undefined|null/)
    expect(path.stroke).not.toBe('')
    expect(path.effectiveStroke).not.toMatch(/^(none|transparent|rgba\([^)]*,\s*0\s*\))$/)
    expect(path.strokeOpacity).toBeGreaterThan(0)
    expect(Number.isFinite(path.length)).toBe(true)
    expect(path.length).toBeGreaterThan(0)
  })
  expect(paths.map(path => ({ moves: path.moves, lines: path.lines }))).toEqual([
    { moves: 3, lines: 1 },
    { moves: 1, lines: 5 }
  ])
}

const ordinaryGlyphGroups = (root: HTMLElement) =>
  Array.from(
    root.querySelectorAll<SVGGElement>(
      '.line-chart-group g.visx-glyph-group, .line-chart-group g.visx-glyph-group-hidden'
    )
  ).filter(group => group.querySelector('[fill-opacity]'))

const glyphShape = (group: SVGGElement) => group.querySelector<SVGGraphicsElement>('[fill-opacity]')!

const translateCoordinates = (transform: string) => {
  const match = transform.match(/^translate\(\s*(-?[\d.]+)(?:px)?(?:,|\s)\s*(-?[\d.]+)(?:px)?\s*\)$/)
  return match ? { x: Number(match[1]), y: Number(match[2]) } : { x: Number.NaN, y: Number.NaN }
}

const effectiveFillOpacity = (shape: SVGGraphicsElement) => {
  const inline = shape.style.fillOpacity
  const value = inline || getComputedStyle(shape).fillOpacity || shape.getAttribute('fill-opacity') || '1'
  return Number(value)
}

const ordinaryGlyphState = (root: HTMLElement) =>
  ordinaryGlyphGroups(root).map(group => {
    const shape = glyphShape(group)
    const bounds = shape.getBBox()
    const transform = group.getAttribute('transform') || ''
    return {
      seriesIndex: Number(group.dataset.seriesindex),
      tag: shape.tagName.toLowerCase(),
      shapeClass: shape.getAttribute('class') || '',
      shapePath: shape.getAttribute('d') || '',
      transform,
      coordinates: translateCoordinates(transform),
      fill: shape.getAttribute('fill') || '',
      fillOpacity: effectiveFillOpacity(shape),
      bounds: { x: bounds.x, y: bounds.y, width: bounds.width, height: bounds.height }
    }
  })

const hasValidOrdinaryGlyphs = (state: ReturnType<typeof ordinaryGlyphState>) =>
  state.length === 10 &&
  state.every(
    glyph =>
      [0, 1].includes(glyph.seriesIndex) &&
      glyph.transform.startsWith('translate(') &&
      !/NaN|undefined|null/.test(glyph.transform) &&
      Number.isFinite(glyph.coordinates.x) &&
      Number.isFinite(glyph.coordinates.y) &&
      glyph.fill &&
      Object.values(glyph.bounds).every(Number.isFinite) &&
      glyph.bounds.width > 0 &&
      glyph.bounds.height > 0
  )

const legendLabels = (root: HTMLElement) =>
  within(root)
    .getAllByRole('button')
    .filter(button => button.closest('[aria-label="legend"]') && button.getClientRects().length > 0)
    .map(button => normalize(button.textContent))

const tooltipGlyphFor = (root: HTMLElement, transform: string) => {
  const group = Array.from(root.querySelectorAll<SVGGElement>('.glyph-tooltip-group g.visx-glyph-circle')).find(
    candidate => candidate.getAttribute('transform') === transform
  )
  expect(group, `Expected tooltip glyph at ${transform}`).toBeTruthy()
  return group!
}

const visibleTooltipRows = (root: HTMLElement) => {
  const tooltip = Array.from(root.querySelectorAll<HTMLElement>('.tooltip')).find(
    candidate => normalize(candidate.textContent) && candidate.getClientRects().length > 0
  )
  return Array.from(tooltip?.querySelectorAll<HTMLElement>('li') || [], row => normalize(row.textContent))
}

const renderedTable = (root: HTMLElement) => {
  const table = root.querySelector<HTMLTableElement>('.cove-visualization__body table.data-table')
  expect(table, 'Expected rendered Line data table').toBeTruthy()
  return table!
}

const renderedTableHeadings = (root: HTMLElement) =>
  Array.from(renderedTable(root).querySelectorAll('thead th'), heading =>
    normalize(heading.querySelector(':scope > span:first-child')?.textContent)
  )

const renderedTableRecords = (root: HTMLElement) => {
  const headings = renderedTableHeadings(root)
  return Array.from(renderedTable(root).querySelectorAll('tbody tr')).map(row => {
    const values = Array.from(row.querySelectorAll('td'), cell => normalize(cell.textContent))
    return Object.fromEntries(headings.map((heading, index) => [heading, values[index]]))
  })
}

const EXPECTED_RENDERED_RECORDS = [
  { Date: 'February 5, 2026', Observed: '30', Goal: '25' },
  { Date: 'January 29, 2026', Observed: 'N/A', Goal: '23' },
  { Date: 'January 22, 2026', Observed: '25', Goal: '21' },
  { Date: 'January 15, 2026', Observed: 'N/A', Goal: '19' },
  { Date: 'January 8, 2026', Observed: '18', Goal: '17' },
  { Date: 'January 1, 2026', Observed: '12', Goal: '15' }
]

const dateAxisLabels = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<SVGTextElement>('.bottom-axis .vx-axis-tick text'))
    .filter(label => label.getClientRects().length > 0)
    .map(label => normalize(label.textContent))

export const LINE001: Story = {
  name: 'LINE-001 — Build and configure a Line Chart',
  args: { config: {} },
  parameters: { test: { timeout: 120000 } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    await user.click(await canvas.findByRole('button', { name: 'Line' }))
    await user.click(canvas.getByText('2. Import Data'))
    const upload = canvasElement.querySelector<HTMLInputElement>('input[type="file"]')
    expect(upload, 'Expected Data Import file input').toBeTruthy()
    await user.upload(upload!, new File([CSV], 'line-chart-regression.csv', { type: 'text/csv' }))

    expect(await canvas.findByText('Data Preview')).toBeVisible()
    await waitFor(() => expect(canvasElement.querySelectorAll('table.data-table tbody tr')).toHaveLength(6))
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
    await user.click(yesSeries)
    expect(yesSeries.style.backgroundColor).toBe('rgb(1, 93, 170)')
    const singleRow = canvas.getByRole('button', { name: /^Single Row/ })
    await user.click(singleRow)
    expect(singleRow).toHaveClass('active')

    const configure = await canvas.findByRole('button', { name: 'Configure your visualization' })
    expect(configure).toBeVisible()
    expect(configure).toBeEnabled()
    await user.click(configure)
    await waitForEditor(canvas)
    await waitForPresence('.chart-required-fields-alerts .alert-info', canvasElement)
    expectRequiredFields(canvasElement)
    expect(canvasElement.querySelector('.cove-visualization__body')).toBeNull()
    await assertRequiredNavigation(canvasElement, 'Data Series', 'Add Data Series', 'data-series', user)
    await assertRequiredNavigation(canvasElement, 'Date/Category Axis', 'Data Key', 'date-category-axis', user)

    await assertRequiredNavigation(canvasElement, 'Data Series', 'Add Data Series', 'data-series', user)
    const addSeries = canvas.getByRole('combobox', { name: /^Add Data Series/ }) as HTMLSelectElement
    await waitForOptionsToPopulate(addSeries)
    await performAndAssert(
      'Adding Observed leaves only Data Key missing',
      () => requiredAlertText(canvasElement),
      () => user.selectOptions(addSeries, 'Observed'),
      (before, after) =>
        before.includes('Add Data Series') &&
        before.includes('Data Key') &&
        !after.includes('Add Data Series') &&
        after.includes('Data Key')
    )
    await user.selectOptions(addSeries, 'Goal')
    for (const series of ['Observed', 'Goal']) {
      const seriesHeading = within(sectionPanel(canvasElement, 'Data Series'))
        .getAllByRole('button', { name: `move ${series}` })
        .find(button => button.getAttribute('data-accordion-component') === 'AccordionItemButton')
      expect(seriesHeading, `Expected retained ${series} series`).toBeVisible()
    }

    await assertRequiredNavigation(canvasElement, 'Date/Category Axis', 'Data Key', 'date-category-axis', user)
    const axisPanel = within(sectionPanel(canvasElement, 'Date/Category Axis'))
    const scalingType = axisPanel.getByRole('combobox', { name: /^Data Scaling Type/ }) as HTMLSelectElement
    await user.selectOptions(scalingType, 'date-time')
    const dataKey = axisPanel.getByRole('combobox', { name: /^Data Key/ }) as HTMLSelectElement
    await waitForOptionsToPopulate(dataKey)
    await user.selectOptions(dataKey, 'Date')
    await replaceText(user, axisPanel.getByRole('textbox', { name: /^Date Parse Format/i }), '%Y-%m-%d')
    await replaceText(user, axisPanel.getByRole('textbox', { name: /^AXIS DATE DISPLAY FORMAT/i }), '%Y-%m-%d')
    await replaceText(user, axisPanel.getByRole('textbox', { name: /^HOVER DATE DISPLAY FORMAT/i }), '%Y-%m-%d')
    await waitForAbsence('.chart-required-fields-alerts', canvasElement)
    await assertVisualizationRendered(canvasElement)
    await waitFor(() => expect(linePaths(canvasElement)).toHaveLength(2))
    expectValidLinePaths(canvasElement)
    await waitFor(() => {
      const labels = dateAxisLabels(canvasElement)
      expect(labels.length).toBeGreaterThan(0)
      labels.forEach(label => expect(label).toMatch(/^\d{4}-\d{2}-\d{2}$/))
      expect(labels).toContain('2026-01-01')
      expect(labels).toContain('2026-02-05')
    })
    expect(legendLabels(canvasElement)).toEqual(['Observed', 'Goal'])

    await openSection(canvas, canvasElement, 'Visual')
    const visualPanel = within(sectionPanel(canvasElement, 'Visual'))
    const symbols = visualPanel.getByRole('combobox', { name: /^Line Datapoint Symbols/ })
    const style = visualPanel.getByRole('combobox', { name: /^Line Datapoint Style/ })
    const color = visualPanel.getByRole('combobox', { name: /^Line Datapoint Color/ })
    await user.selectOptions(symbols, 'standard')
    await performAndAssert(
      'Always Show renders ten valid series-specific standard glyphs',
      () => ordinaryGlyphState(canvasElement),
      () => user.selectOptions(style, 'always show'),
      (_before, after) =>
        hasValidOrdinaryGlyphs(after) &&
        after.every(glyph => glyph.fillOpacity === 1) &&
        after.filter(glyph => glyph.seriesIndex === 0).every(glyph => glyph.shapeClass === 'visx-glyph-circle') &&
        after.filter(glyph => glyph.seriesIndex === 1).every(glyph => glyph.shapeClass === 'visx-glyph-square')
    )

    const sameLineGlyphs = ordinaryGlyphState(canvasElement)
    const lineStateBeforeColor = pathState(canvasElement)
    sameLineGlyphs.forEach(glyph => expect(glyph.fill).toBe(lineStateBeforeColor[glyph.seriesIndex].stroke))
    const observedPath = lineStateBeforeColor.find(path => path.stroke === sameLineGlyphs[0].fill)
    const goalPath = lineStateBeforeColor.find(
      path => path.stroke === sameLineGlyphs.find(glyph => glyph.seriesIndex === 1)!.fill
    )
    expect(observedPath).toMatchObject({ moves: 3, lines: 1 })
    expect(goalPath).toMatchObject({ moves: 1, lines: 5 })
    await performAndAssert(
      'Lighter than Line changes point fills without changing line geometry or strokes',
      () => ({ glyphs: ordinaryGlyphState(canvasElement), paths: pathState(canvasElement) }),
      () => user.selectOptions(color, 'Lighter than Line'),
      (before, after) => {
        const afterByIdentity = new Map(
          after.glyphs.map(glyph => [`${glyph.seriesIndex}|${glyph.transform}`, glyph] as const)
        )
        return (
          hasValidOrdinaryGlyphs(after.glyphs) &&
          before.glyphs.every(glyph => {
            const paired = afterByIdentity.get(`${glyph.seriesIndex}|${glyph.transform}`)
            return paired && paired.fill !== glyph.fill && paired.transform === glyph.transform
          }) &&
          before.paths.map(path => path.data).join('|') === after.paths.map(path => path.data).join('|') &&
          before.paths.map(path => path.stroke).join('|') === after.paths.map(path => path.stroke).join('|')
        )
      }
    )

    await performAndAssert(
      'Hover style hides every ordinary authored glyph',
      () => ordinaryGlyphState(canvasElement),
      () => user.selectOptions(style, 'hover'),
      (_before, after) => hasValidOrdinaryGlyphs(after) && after.every(glyph => glyph.fillOpacity === 0)
    )
    const firstObserved = ordinaryGlyphState(canvasElement).find(glyph => glyph.seriesIndex === 0)!
    const tooltipTarget = tooltipGlyphFor(canvasElement, firstObserved.transform)
    const tooltipShape = tooltipTarget.querySelector<SVGGraphicsElement>('[fill-opacity]')!
    fireEvent.mouseOver(tooltipShape)
    await waitFor(() => {
      expect(effectiveFillOpacity(tooltipShape)).toBe(1)
      expect(visibleTooltipRows(canvasElement)).toEqual(['2026-01-01', 'Observed: 12', 'Goal: 15'])
    })
    fireEvent.mouseOut(tooltipShape)
    await waitFor(() => {
      expect(effectiveFillOpacity(tooltipShape)).toBe(0)
      expect(visibleTooltipRows(canvasElement)).toEqual([])
    })

    const tableContainer = canvasElement.querySelector<HTMLElement>('.data-table-container')
    expect(tableContainer).toBeVisible()
    await user.click(within(tableContainer!).getByRole('button', { name: /Data Table/ }))
    await waitFor(() => expect(renderedTable(canvasElement)).toBeVisible())
    expect(renderedTableHeadings(canvasElement)).toEqual(HEADINGS)
    expect(renderedTableRecords(canvasElement)).toEqual(EXPECTED_RENDERED_RECORDS)
    expect(renderedTableRecords(canvasElement).filter(record => record.Observed === 'N/A')).toHaveLength(2)
    expectValidLinePaths(canvasElement)
    expect(legendLabels(canvasElement)).toEqual(['Observed', 'Goal'])
  }
}
