import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import {
  assertVisualizationRendered,
  openAccordion,
  performAndAssert,
  waitForEditor,
  waitForOptionsToPopulate,
  waitForPresence
} from '@cdc/core/helpers/testing'
import CdcEditor from '../CdcEditor'

// Source regression: docs/qa/regression-scripts/build-and-configure-a-bump-chart.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Charts/Bump Chart',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type Canvas = ReturnType<typeof within>
type User = ReturnType<typeof userEvent.setup>

const CSV = `Date,Alpha,Beta,Gamma,Note
2024-01-01,1,2,3,Opening
2024-02-01,2,1,3,Second
2024-03-01,3,1,2,Third
2024-04-01,2,3,1,Closing`

const EXPECTED_ROWS = [
  ['2024-01-01', '1', '2', '3', 'Opening'],
  ['2024-02-01', '2', '1', '3', 'Second'],
  ['2024-03-01', '3', '1', '2', 'Third'],
  ['2024-04-01', '2', '3', '1', 'Closing']
]

const EXPECTED_POINTS = EXPECTED_ROWS.flatMap(([date, alpha, beta, gamma]) => [
  { date, series: 'Alpha', rank: alpha },
  { date, series: 'Beta', rank: beta },
  { date, series: 'Gamma', rank: gamma }
])

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

const expectPanelInventory = (root: HTMLElement, name: string, labels: string[]) => {
  const panel = sectionPanel(root, name)
  const text = normalize(panel.textContent).toLowerCase()
  labels.forEach(label => expect(text, `${name} should expose ${label}`).toContain(label.toLowerCase()))
}

const linePaths = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<SVGPathElement>('g.line-chart-group path.visx-linepath'))

const bumpCircles = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<SVGCircleElement>('circle[data-tooltip-id$="-bump"][data-tooltip-html]'))

const assertBumpGeometry = (root: HTMLElement) => {
  const paths = linePaths(root)
  expect(paths).toHaveLength(3)
  paths.forEach(path => {
    expect(path.getAttribute('d')).toMatch(/^M.+L/)
    expect(path.getTotalLength()).toBeGreaterThan(0)
  })

  const circles = bumpCircles(root)
  expect(circles).toHaveLength(12)
  const matched = EXPECTED_POINTS.map(point => {
    const circle = circles.find(candidate => {
      const tooltip = candidate.dataset.tooltipHtml || ''
      return tooltip.includes(point.date) && tooltip.includes(`${point.series}: ${point.rank}`)
    })
    expect(circle, `Expected ${point.series} rank ${point.rank} on ${point.date}`).toBeTruthy()
    return { ...point, circle: circle! }
  })
  expect(new Set(matched.map(point => point.circle)).size).toBe(12)
  matched.forEach(({ rank, circle }) => {
    expect(circle).toHaveAttribute('r', '10')
    expect(circle.getAttribute('cx')).not.toBeNull()
    expect(circle.getAttribute('cy')).not.toBeNull()
    expect(Number.isFinite(Number(circle.getAttribute('cx')))).toBe(true)
    expect(Number.isFinite(Number(circle.getAttribute('cy')))).toBe(true)
    expect(circle.nextElementSibling?.tagName.toLowerCase()).toBe('text')
    expect(normalize(circle.nextElementSibling?.textContent)).toBe(rank)
  })
  for (const date of EXPECTED_ROWS.map(row => row[0])) {
    const rank1 = matched.find(point => point.date === date && point.rank === '1')!
    const rank3 = matched.find(point => point.date === date && point.rank === '3')!
    expect(Number(rank1.circle.getAttribute('cy'))).toBeLessThan(Number(rank3.circle.getAttribute('cy')))
  }
}

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

const visibleTooltipRows = (root: HTMLElement) => {
  const tooltip = Array.from(root.querySelectorAll<HTMLElement>('.tooltip')).find(
    candidate => normalize(candidate.textContent) && isRendered(candidate)
  )
  return Array.from(tooltip?.querySelectorAll<HTMLElement>('li') || [], row => normalize(row.textContent))
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

const replaceText = async (user: User, control: HTMLElement, value: string) => {
  await user.clear(control)
  if (value) await user.type(control, value)
}

const pasteText = async (user: User, control: HTMLElement, value: string) => {
  await user.clear(control)
  await user.click(control)
  await user.paste(value)
}

export const BUMP001: Story = {
  name: 'BUMP-001 — Build and configure a Bump Chart',
  args: { config: {} },
  parameters: { test: { timeout: 120000 } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()

    await user.click(await canvas.findByRole('button', { name: 'Line' }))
    await user.click(canvas.getByText('2. Import Data'))
    const upload = canvasElement.querySelector<HTMLInputElement>('input[type="file"]')
    expect(upload, 'Expected Data Import file input').toBeTruthy()
    await user.upload(upload!, new File([CSV], 'bump-chart-regression.csv', { type: 'text/csv' }))

    expect(await canvas.findByText('Data Preview')).toBeVisible()
    await waitFor(() => expect(canvasElement.querySelectorAll('table.data-table tbody tr')).toHaveLength(4))
    for (const heading of ['Date', 'Alpha', 'Beta', 'Gamma', 'Note']) {
      expect(canvasElement.querySelector(`table.data-table th[title="${heading}"]`)).toBeVisible()
    }
    const rows = Array.from(canvasElement.querySelectorAll<HTMLElement>('table.data-table tbody tr'))
    expect(rows.map(row => Array.from(row.querySelectorAll('td'), cell => normalize(cell.textContent)))).toEqual(
      EXPECTED_ROWS
    )

    const vertical = canvas.getByRole('button', { name: /^Vertical/ })
    await user.click(vertical)
    expect(vertical).toHaveClass('active')
    const yes = canvas.getByRole('button', { name: 'Yes', exact: true })
    await user.click(yes)
    expect(yes.style.backgroundColor).toBe('rgb(1, 93, 170)')
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
    await assertRequiredNavigation(canvasElement, 'Data Series', 'Add Data Series', 'data-series', user)
    await assertRequiredNavigation(canvasElement, 'Date/Category Axis', 'Data Key', 'date-category-axis', user)

    await openSection(canvas, canvasElement, 'General')
    const chartType = canvas.getByRole('combobox', { name: /^Chart Type/ }) as HTMLSelectElement
    await user.selectOptions(chartType, 'Bump Chart')
    expect(chartType).toHaveValue('Bump Chart')

    await openSection(canvas, canvasElement, 'Data Series')
    const addSeries = canvas.getByRole('combobox', { name: /^Add Data Series/ }) as HTMLSelectElement
    await waitForOptionsToPopulate(addSeries)
    await performAndAssert(
      'Adding Alpha leaves only Data Key missing',
      () => requiredAlertText(canvasElement),
      () => user.selectOptions(addSeries, 'Alpha'),
      (before, after) =>
        before.includes('Add Data Series') &&
        before.includes('Data Key') &&
        !after.includes('Add Data Series') &&
        after.includes('Data Key')
    )
    for (const series of ['Beta', 'Gamma']) await user.selectOptions(addSeries, series)
    for (const series of ['Alpha', 'Beta', 'Gamma']) {
      const seriesHeading = within(sectionPanel(canvasElement, 'Data Series'))
        .getAllByRole('button', { name: `move ${series}` })
        .find(button => button.getAttribute('data-accordion-component') === 'AccordionItemButton')
      expect(seriesHeading, `Expected retained ${series} series`).toBeVisible()
    }

    await openSection(canvas, canvasElement, 'Date/Category Axis')
    expect(canvas.getByRole('combobox', { name: /^Data Scaling Type/ })).toHaveValue('date-time')
    const dataKey = canvas.getByRole('combobox', { name: /^Data Key/ }) as HTMLSelectElement
    await waitForOptionsToPopulate(dataKey)
    await user.selectOptions(dataKey, 'Date')
    await replaceText(user, canvas.getByRole('textbox', { name: /^Date Parse Format/ }), '%Y-%m-%d')
    await replaceText(user, canvas.getByRole('textbox', { name: /^AXIS DATE DISPLAY FORMAT/i }), '%Y-%m-%d')
    await openSection(canvas, canvasElement, 'Columns')
    await user.click(canvas.getByRole('button', { name: 'Add Configuration' }))
    const columnSelects = canvas.getAllByRole('combobox', { name: /^Column$/ }) as HTMLSelectElement[]
    const noteColumn = columnSelects[columnSelects.length - 1]
    await waitForOptionsToPopulate(noteColumn)
    await user.selectOptions(noteColumn, 'Note')
    const noteColumnAfter = (canvas.getAllByRole('combobox', { name: /^Column$/ }) as HTMLSelectElement[]).find(
      select => select.value === 'Note'
    )
    const noteItem = noteColumnAfter?.closest<HTMLElement>('.series-item')
    expect(noteItem, 'Expected Note column configuration').toBeTruthy()
    const noteTooltip = within(noteItem!).getByRole('checkbox', { name: 'Show in tooltip' })
    if (!noteTooltip.matches(':checked')) await user.click(noteTooltip)

    await openSection(canvas, canvasElement, 'Date/Category Axis')
    await replaceText(user, canvas.getByRole('textbox', { name: /^HOVER DATE DISPLAY FORMAT/i }), '%Y-%m-%d')
    await waitFor(() => expect(bumpCircles(canvasElement)[0].dataset.tooltipHtml).toContain('2024-01-01'))

    await waitFor(() => expect(getRequiredAlerts(canvasElement)).toHaveLength(0))
    await assertVisualizationRendered(canvasElement)
    assertBumpGeometry(canvasElement)

    const alpha = bumpCircles(canvasElement).find(
      circle => circle.dataset.tooltipHtml?.includes('2024-01-01') && circle.dataset.tooltipHtml?.includes('Alpha: 1')
    )
    expect(alpha, 'Expected first Alpha rank node').toBeTruthy()
    await user.hover(alpha!)
    await waitFor(() => expect(visibleTooltipText(canvasElement)).toContain('Alpha'))
    expect(visibleTooltipRows(canvasElement)).toEqual(['Date: 2024-01-01', 'Alpha: 1', 'Note: Opening'])

    // Continue in the same editor session, in panel order. Working settings have
    // observable assertions; known broken/no-op controls are documented in the source script.
    await openSection(canvas, canvasElement, 'General')
    expectPanelInventory(canvasElement, 'General', [
      'Chart Type',
      'Chart Height',
      'Missing Data',
      'Title',
      'Title Style',
      'Show Title',
      'Super Title',
      'Message',
      'Subtext/Citation',
      'Footnotes',
      'Language for dates and numbers',
      'Alt Text Description'
    ])
    const title = canvas.getByRole('textbox', { name: /^Title/ })
    await performAndAssert(
      'Title renders exact authored text',
      () => normalize(canvasElement.querySelector('.cove-title')?.textContent),
      () => replaceText(user, title, 'Ranked outcomes'),
      (_before, after) => after === 'Ranked outcomes'
    )

    await openSection(canvas, canvasElement, 'Data Series')
    expectPanelInventory(canvasElement, 'Data Series', ['Add Data Series'])
    for (const series of ['Alpha', 'Beta', 'Gamma']) {
      const itemToggle = within(sectionPanel(canvasElement, 'Data Series'))
        .getAllByRole('button', { name: `move ${series}` })
        .find(button => button.getAttribute('data-accordion-component') === 'AccordionItemButton')
      expect(itemToggle, `Expected ${series} series editor`).toBeTruthy()
      if (itemToggle?.getAttribute('aria-expanded') !== 'true') await user.click(itemToggle!)
      expectPanelInventory(canvasElement, 'Data Series', [
        'Series Name',
        'Series Column Settings',
        'Label',
        'Prefix',
        'Suffix',
        'Round',
        'Add Commas to Numbers',
        'Show in Data Table',
        'Series Type',
        'Series Line Type',
        'Show in Tooltip'
      ])
    }

    const alphaToggle = within(sectionPanel(canvasElement, 'Data Series'))
      .getAllByRole('button', { name: 'move Alpha' })
      .find(button => button.getAttribute('data-accordion-component') === 'AccordionItemButton')!
    if (alphaToggle.getAttribute('aria-expanded') !== 'true') await user.click(alphaToggle)
    const alphaItem = alphaToggle.closest<HTMLElement>('.series-item')!
    const alphaName = alphaItem.querySelector<HTMLInputElement>('input[type="text"]')!
    await replaceText(user, alphaName, 'Alpha Rank')
    await waitFor(() =>
      expect(normalize(canvasElement.querySelector('.legend-container')?.textContent)).toContain('Alpha Rank')
    )
    await replaceText(user, alphaName, 'Alpha')
    await waitFor(() =>
      expect(normalize(canvasElement.querySelector('.legend-container')?.textContent)).toContain('Alpha')
    )

    const alphaPrefix = within(alphaItem).getByRole('textbox', { name: 'Prefix' })
    await replaceText(user, alphaPrefix, '#')
    await waitFor(() =>
      expect(
        Array.from(canvasElement.querySelectorAll('table.data-table tbody td'), cell => normalize(cell.textContent))
      ).toContain('#1')
    )

    const alphaTable = within(alphaItem).getByRole('checkbox', { name: 'Show in Data Table' })
    await user.click(alphaTable)
    await waitFor(() => expect(canvasElement.querySelector('table.data-table th[title="Alpha"]')).toBeNull())
    const currentAlphaTable = canvas
      .getAllByRole('checkbox', { name: 'Show in Data Table' })
      .find(control => control.id.includes('Alpha'))
    expect(currentAlphaTable, 'Expected current Alpha table checkbox').toBeTruthy()
    await user.click(currentAlphaTable!)
    expect(currentAlphaTable).toBeChecked()

    const currentAlphaToggle = within(sectionPanel(canvasElement, 'Data Series'))
      .getAllByRole('button', { name: 'move Alpha' })
      .find(button => button.getAttribute('data-accordion-component') === 'AccordionItemButton')!
    if (currentAlphaToggle.getAttribute('aria-expanded') !== 'true') await user.click(currentAlphaToggle)
    const alphaLineType = Array.from(
      currentAlphaToggle.closest<HTMLElement>('.series-item')!.querySelectorAll<HTMLSelectElement>('select')
    ).find(select => Array.from(select.options, option => option.value).includes('curveStep'))!
    expect(alphaLineType, 'Expected Alpha line interpolation control').toBeTruthy()
    const alphaPathBefore = linePaths(canvasElement)[0].getAttribute('d')
    await user.selectOptions(alphaLineType, 'curveStep')
    await waitFor(() => expect(linePaths(canvasElement)[0].getAttribute('d')).not.toBe(alphaPathBefore))
    await user.selectOptions(alphaLineType, 'curveLinear')
    await waitFor(() => expect(linePaths(canvasElement)[0].getAttribute('d')).toBe(alphaPathBefore))

    const gammaToggle = within(sectionPanel(canvasElement, 'Data Series'))
      .getAllByRole('button', { name: 'move Gamma' })
      .find(button => button.getAttribute('data-accordion-component') === 'AccordionItemButton')!
    if (gammaToggle.getAttribute('aria-expanded') !== 'true') await user.click(gammaToggle)
    await user.click(within(gammaToggle.closest<HTMLElement>('.series-item')!).getByRole('button', { name: 'Remove' }))
    await waitFor(() => {
      expect(linePaths(canvasElement)).toHaveLength(2)
      expect(bumpCircles(canvasElement)).toHaveLength(8)
    })
    await user.selectOptions(canvas.getByRole('combobox', { name: /^Add Data Series/ }), 'Gamma')
    await waitFor(() => assertBumpGeometry(canvasElement))

    await openSection(canvas, canvasElement, 'Left Value Axis')
    expectPanelInventory(canvasElement, 'Left Value Axis', [
      'Axis Type',
      'Label',
      'Number of ticks',
      'Tick rotation',
      'Show Gridlines',
      'Hide Axis',
      'Value Axis Domain',
      'axis max value',
      'axis min value',
      'Smallest axis maximum',
      'Add Padding'
    ])
    await openSection(canvas, canvasElement, 'Date/Category Axis')
    expectPanelInventory(canvasElement, 'Date/Category Axis', [
      'Data Scaling Type',
      'Manual Ticks',
      'Show dates newest to oldest',
      'Padding',
      'Data Key',
      'Date Parse Format',
      'AXIS DATE DISPLAY FORMAT',
      'DATA TABLE DATE DISPLAY FORMAT',
      'HOVER DATE DISPLAY FORMAT',
      'Limit by start and/or end dates',
      'Number of ticks',
      'Use Responsive Ticks',
      'Hide Axis',
      'Hide Ticks'
    ])
    const reverse = canvas.getByRole('checkbox', { name: 'Show dates newest to oldest' })
    const chronological = bumpCircles(canvasElement)
      .slice(0, 4)
      .map(circle => Number(circle.getAttribute('cx')))
    await user.click(reverse)
    await waitFor(() => {
      const reversed = bumpCircles(canvasElement)
        .slice(0, 4)
        .map(circle => Number(circle.getAttribute('cx')))
      expect(chronological[0]).toBeLessThan(chronological[3])
      expect(reversed[0]).toBeGreaterThan(reversed[3])
    })
    await user.click(reverse)
    await waitFor(() => {
      const restored = bumpCircles(canvasElement)
        .slice(0, 4)
        .map(circle => Number(circle.getAttribute('cx')))
      expect(restored).toEqual(chronological)
    })

    await openSection(canvas, canvasElement, 'Regions')
    expectPanelInventory(canvasElement, 'Regions', ['Add Region'])
    await user.click(canvas.getByRole('button', { name: 'Add Region' }))
    expectPanelInventory(canvasElement, 'Regions', [
      'Region Label',
      'Text Color',
      'Background',
      'Minimum Region Type',
      'Maximum Region Type'
    ])
    await performAndAssert(
      'Region authoring persists into its item heading',
      () => normalize(sectionPanel(canvasElement, 'Regions').textContent),
      () => replaceText(user, canvas.getByRole('textbox', { name: 'Region Label' }), 'Opening period'),
      (_before, after) => after.includes('Opening period')
    )
    await user.click(within(sectionPanel(canvasElement, 'Regions')).getByRole('button', { name: 'Remove' }))
    await waitFor(() => expect(within(sectionPanel(canvasElement, 'Regions')).queryByText('Opening period')).toBeNull())

    await openSection(canvas, canvasElement, 'Columns')
    expectPanelInventory(canvasElement, 'Columns', ['Add Configuration'])
    const noteToggle = within(sectionPanel(canvasElement, 'Columns'))
      .getAllByRole('button', { name: 'move Note' })
      .find(button => button.getAttribute('data-accordion-component') === 'AccordionItemButton')
    if (noteToggle?.getAttribute('aria-expanded') !== 'true') await user.click(noteToggle!)
    const configuredNoteColumn = (canvas.getAllByRole('combobox', { name: /^Column$/ }) as HTMLSelectElement[]).find(
      select => select.value === 'Note'
    )
    const configuredNoteItem = configuredNoteColumn?.closest<HTMLElement>('.series-item')
    expect(configuredNoteItem, 'Expected Note column editor').toBeTruthy()
    await replaceText(user, within(configuredNoteItem!).getByRole('textbox', { name: 'Label' }), 'Context')
    await waitFor(() => expect(bumpCircles(canvasElement)[0].dataset.tooltipHtml).toContain('Context: Opening'))

    await openSection(canvas, canvasElement, 'Legend')
    expectPanelInventory(canvasElement, 'Legend', [
      'Position',
      'Legend Style',
      'Legend Group By',
      'Legend Behavior',
      'Reverse Labels',
      'Hide Legend Box',
      'Single Row Legend',
      'Hide Legend',
      'Title',
      'Legend Description',
      'Unified Legend'
    ])
    const hide = canvas
      .getAllByRole('checkbox', { name: /^Hide Legend/ })
      .find(control => control.getAttribute('name') === 'hide')
    expect(hide, 'Expected Hide Legend checkbox').toBeTruthy()
    expect(canvasElement.querySelector('.legend-container')).toBeVisible()
    await user.click(hide!)
    await waitFor(() => expect(canvasElement.querySelector('.legend-container')).toBeNull())
    await user.click(hide!)
    await waitFor(() => expect(canvasElement.querySelector('.legend-container')).toBeVisible())

    await openSection(canvas, canvasElement, 'Filters')
    expectPanelInventory(canvasElement, 'Filters', ['Filter Behavior', 'Filter intro text', 'Add Filter'])
    await user.click(canvas.getByRole('button', { name: /^Add Filter/ }))
    expectPanelInventory(canvasElement, 'Filters', [
      'Filter Style',
      'Filter',
      'Label',
      'Note',
      'Filter Order',
      'Order by Data Column'
    ])
    const filter = canvas.getByRole('combobox', { name: /^Filter$/ }) as HTMLSelectElement
    await user.selectOptions(filter, 'Note')
    const filterItem = filter.closest<HTMLElement>('.series-item')
    await replaceText(user, within(filterItem!).getByRole('textbox', { name: 'Label' }), 'Note')
    expect(await canvas.findByRole('combobox', { name: 'Filter by Note' })).toBeVisible()
    await user.click(within(filterItem!).getByRole('button', { name: 'Remove' }))
    await waitFor(() => expect(canvas.queryByRole('combobox', { name: 'Filter by Note' })).toBeNull())

    await openSection(canvas, canvasElement, 'Footnotes')
    expectPanelInventory(canvasElement, 'Footnotes', ['Add Static Footnote'])
    await user.click(canvas.getByRole('button', { name: 'Add Static Footnote' }))
    const footnoteToggle = within(sectionPanel(canvasElement, 'Footnotes'))
      .getAllByRole('button', { name: /move Footnote 1/ })
      .find(button => button.getAttribute('data-accordion-component') === 'AccordionItemButton')
    await user.click(footnoteToggle!)
    const footnoteText = canvas.getByRole('textbox', { name: 'Text' })
    await replaceText(user, footnoteText, 'Rank source')
    expect(footnoteText).toHaveValue('Rank source')
    await user.click(within(sectionPanel(canvasElement, 'Footnotes')).getByRole('button', { name: 'Delete' }))
    await waitFor(() => expect(within(sectionPanel(canvasElement, 'Footnotes')).queryByText('Footnote 1')).toBeNull())

    await openSection(canvas, canvasElement, 'Visual')
    expectPanelInventory(canvasElement, 'Visual', [
      'Header Theme',
      'Chart Color Palette',
      'Use selected palette in reverse order',
      'Data Cutoff',
      'Bar Thickness',
      'Tooltip Opacity',
      'No Data Message'
    ])
    await openSection(canvas, canvasElement, 'Pattern Settings')
    expectPanelInventory(canvasElement, 'Pattern Settings', ['Add Pattern'])
    await user.click(canvas.getByRole('button', { name: /^Add Pattern/ }))
    await user.selectOptions(canvas.getByRole('combobox', { name: 'Data Key' }), 'Alpha')
    await replaceText(user, canvas.getByRole('textbox', { name: 'Data Value' }), '1')
    expect(within(sectionPanel(canvasElement, 'Pattern Settings')).getByText('Alpha: 1')).toBeVisible()
    await user.click(
      within(sectionPanel(canvasElement, 'Pattern Settings')).getByRole('button', { name: 'Remove Pattern' })
    )
    await waitFor(() =>
      expect(
        within(sectionPanel(canvasElement, 'Pattern Settings')).queryByRole('button', { name: 'Remove Pattern' })
      ).toBeNull()
    )

    await openSection(canvas, canvasElement, 'Data Table')
    expectPanelInventory(canvasElement, 'Data Table', [
      'Show Data Table',
      'Table Title',
      'Vertical',
      'Search',
      'Download'
    ])
    const show = canvas.getByRole('checkbox', { name: /^Show Data Table/ })
    expect(canvasElement.querySelector('.data-table-container')).toBeVisible()
    await user.click(show)
    await waitFor(() => expect(canvasElement.querySelector('.data-table-container')).toBeNull())
    await user.click(show)
    await waitFor(() => expect(canvasElement.querySelector('.data-table-container')).toBeVisible())

    await openSection(canvas, canvasElement, 'Text Annotations')
    expectPanelInventory(canvasElement, 'Text Annotations', [
      'Show Annotation Dropdown',
      'Mobile Annotations',
      'Add Annotation'
    ])
    await user.click(canvas.getByRole('button', { name: 'Add Annotation' }))
    const annotationText = canvas.getByLabelText('Annotation Text:')
    await replaceText(user, annotationText, 'Peak rank')
    await waitFor(() =>
      expect(canvasElement.querySelectorAll('[aria-label="Annotation text that reads: Peak rank"]')).toHaveLength(1)
    )
    await user.click(
      within(sectionPanel(canvasElement, 'Text Annotations')).getByRole('button', { name: 'Delete Annotation' })
    )
    await waitFor(() =>
      expect(canvasElement.querySelector('[aria-label="Annotation text that reads: Peak rank"]')).toBeNull()
    )

    await openSection(canvas, canvasElement, 'Markup Variables')
    expectPanelInventory(canvasElement, 'Markup Variables', ['Enable Markup Variables'])
    await user.click(canvas.getByRole('checkbox', { name: 'Enable Markup Variables' }))
    const addVariable = within(sectionPanel(canvasElement, 'Markup Variables')).getByRole('button', {
      name: /Add Variable/
    })
    await user.click(addVariable)
    const variable = canvasElement.querySelector<HTMLElement>('.variable-item')!
    const editVariable = within(variable).queryByRole('button', { name: 'Edit' })
    if (editVariable) await user.click(editVariable)
    const basicSettings = within(variable).getByRole('button', { name: 'Basic Settings' })
    if (basicSettings.getAttribute('aria-expanded') !== 'true') await user.click(basicSettings)
    await user.selectOptions(within(variable).getByLabelText('Data Column'), 'Note')
    await openSection(canvas, canvasElement, 'General')
    await pasteText(user, canvas.getByRole('textbox', { name: /^Title/ }), 'Rank {{note}}')
    await waitFor(() =>
      expect(normalize(canvasElement.querySelector('.cove-title')?.textContent)).toBe(
        'Rank Opening, Second, Third, or Closing'
      )
    )

    const advancedToggle = canvasElement.querySelector<HTMLElement>('.advanced-toggle-link')
    expect(advancedToggle).toBeVisible()
    await user.click(advancedToggle!)
    const apply = canvas.getByRole('button', { name: 'Apply Configuration Changes' })
    expect(apply).toBeVisible()
    expect(canvasElement.querySelector('.advanced-json-editor')).toBeVisible()
    await user.dblClick(canvasElement.querySelector('#title_display') as HTMLElement)
    await replaceText(user, canvasElement.querySelector('#title_textarea') as HTMLTextAreaElement, 'Advanced Bump')
    await user.keyboard('{Enter}')
    await user.click(apply)
    await waitFor(() =>
      expect(normalize(canvasElement.querySelector('.cove-title')?.textContent)).toBe('Advanced Bump')
    )
    await waitFor(() => assertBumpGeometry(canvasElement))
  }
}
