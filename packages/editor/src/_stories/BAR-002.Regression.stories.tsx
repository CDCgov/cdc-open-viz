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

// Source regression: docs/qa/regression-scripts/configure-multi-series-bar-data-series.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Charts/Bar Chart',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type Canvas = ReturnType<typeof within>
type User = ReturnType<typeof userEvent.setup>

const CSV = `Quarter,Cases,Hospitalizations,Deaths,Cases Label
Q1,120,80,12,C-120
Q2,180,110,18,C-180
Q3,150,95,15,C-150
Q4,220,140,22,C-220`

const QUARTERS = ['Q1', 'Q2', 'Q3', 'Q4']
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

const chartBody = (root: HTMLElement) => {
  const body = root.querySelector<HTMLElement>('.cove-visualization__body')
  expect(body, 'Expected rendered chart body').toBeTruthy()
  return body!
}

const barGroups = (root: HTMLElement) =>
  Array.from(chartBody(root).querySelectorAll<SVGGElement>('g[class*="bar-group-"]'))

const barPaths = (root: HTMLElement) =>
  barGroups(root).flatMap(group =>
    Array.from(group.querySelectorAll<SVGPathElement>('path[data-tooltip-id^="cdc-open-viz-tooltip-"]'))
  )

const geometry = (root: HTMLElement) =>
  barPaths(root).map(path => {
    const bounds = path.getBBox()
    return {
      data: path.getAttribute('d') || '',
      width: bounds.width,
      height: bounds.height
    }
  })

const validGeometry = (items: ReturnType<typeof geometry>, expectedCount: number) =>
  items.length === expectedCount &&
  items.every(
    item =>
      item.data.length > 0 &&
      !/NaN|undefined|null/.test(item.data) &&
      Number.isFinite(item.width) &&
      Number.isFinite(item.height) &&
      item.width > 0 &&
      item.height > 0
  )

const legendItems = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<HTMLElement>('.legend-container .legend-item[class*="legend-text--"]'))

const isRendered = (element: HTMLElement) => {
  const style = getComputedStyle(element)
  const bounds = element.getBoundingClientRect()
  return style.display !== 'none' && style.visibility !== 'hidden' && bounds.width > 0 && bounds.height > 0
}

const legendLabels = (root: HTMLElement) =>
  legendItems(root)
    .filter(isRendered)
    .map(item => normalize(item.textContent))

const seriesHandles = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<HTMLElement>('[data-rfd-draggable-id^="draggableFilter-"]'))

const seriesOrder = (root: HTMLElement) =>
  seriesHandles(root).map(handle => handle.getAttribute('data-rfd-draggable-id')!.replace('draggableFilter-', ''))

const seriesHandle = (root: HTMLElement, dataKey: string) => {
  const handle = root.querySelector<HTMLElement>(`[data-rfd-draggable-id="draggableFilter-${dataKey}"]`)
  expect(handle, `Expected series item ${dataKey}`).toBeTruthy()
  return handle!
}

const openSeries = async (root: HTMLElement, dataKey: string, user: User) => {
  const item = seriesHandle(root, dataKey)
  const button = within(item).getByRole('button', { name: new RegExp(dataKey) })
  if (button.getAttribute('aria-expanded') !== 'true') await user.click(button)
  await waitFor(() => expect(button).toHaveAttribute('aria-expanded', 'true'))
  return item
}

const moveSeriesWithKeyboard = async (root: HTMLElement, dataKey: string, direction: 'up' | 'down') => {
  const handle = seriesHandle(root, dataKey)
  handle.focus()
  fireEvent.keyDown(handle, { key: ' ', code: 'Space', keyCode: 32 })
  fireEvent.keyUp(handle, { key: ' ', code: 'Space', keyCode: 32 })
  const activeElement = root.ownerDocument.activeElement || handle
  fireEvent.keyDown(activeElement, {
    key: direction === 'up' ? 'ArrowUp' : 'ArrowDown',
    code: direction === 'up' ? 'ArrowUp' : 'ArrowDown',
    keyCode: direction === 'up' ? 38 : 40
  })
  fireEvent.keyUp(activeElement, {
    key: direction === 'up' ? 'ArrowUp' : 'ArrowDown',
    code: direction === 'up' ? 'ArrowUp' : 'ArrowDown',
    keyCode: direction === 'up' ? 38 : 40
  })
  fireEvent.keyDown(root.ownerDocument.activeElement || handle, { key: ' ', code: 'Space', keyCode: 32 })
  fireEvent.keyUp(root.ownerDocument.activeElement || handle, { key: ' ', code: 'Space', keyCode: 32 })
}

const seriesNameInput = (item: HTMLElement) => {
  const label = Array.from(item.querySelectorAll<HTMLLabelElement>('label')).find(
    candidate => normalize(candidate.textContent) === 'Series Name'
  )
  const input = label?.nextElementSibling as HTMLInputElement | null
  expect(input, 'Expected Series Name input').toBeTruthy()
  return input!
}

const showInTooltipControl = (item: HTMLElement) => {
  const input = item.querySelector<HTMLInputElement>('input[name^="series-tooltip--"]')
  const control = input?.closest('.input-group')?.querySelector<HTMLElement>('.cove-input__checkbox--small')
  expect(input, 'Expected Show In Tooltip checkbox').toBeTruthy()
  expect(control, 'Expected Show In Tooltip control').toBeTruthy()
  return { input: input!, control: control! }
}

const barLabels = (root: HTMLElement) =>
  barGroups(root).flatMap(group =>
    Array.from(group.querySelectorAll<SVGTextElement>('text'), text => normalize(text.textContent)).filter(Boolean)
  )

const renderedCategoryOrder = (root: HTMLElement) =>
  Array.from(chartBody(root).querySelectorAll<SVGTextElement>('.bottom-axis .vx-axis-tick text'))
    .filter(element => QUARTERS.includes(normalize(element.textContent)))
    .sort((left, right) => left.getBoundingClientRect().left - right.getBoundingClientRect().left)
    .map(element => normalize(element.textContent))

const visibleTooltipText = (root: HTMLElement) =>
  normalize(
    Array.from(root.querySelectorAll<HTMLElement>('.tooltip')).find(
      tooltip => normalize(tooltip.textContent) && isRendered(tooltip)
    )?.textContent
  )

export const BAR002: Story = {
  name: 'BAR-002 — Configure multi-series Bar Data Series',
  args: { config: {} },
  parameters: { test: { timeout: 30000 } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    const originalConsoleError = console.error
    const consoleErrors: string[] = []
    const unhandledRejections: unknown[] = []
    const windowErrors: unknown[] = []
    const onConsoleError = (...args: unknown[]) => {
      consoleErrors.push(args.map(String).join(' '))
      originalConsoleError(...args)
    }
    const onRejection = (event: PromiseRejectionEvent) => unhandledRejections.push(event.reason)
    const onWindowError = (event: ErrorEvent) => windowErrors.push(event.error ?? event.message)

    console.error = onConsoleError
    window.addEventListener('unhandledrejection', onRejection)
    window.addEventListener('error', onWindowError)

    try {
      await user.click(await canvas.findByRole('button', { name: 'Bar' }))
      await user.click(canvas.getByText('2. Import Data'))
      const upload = canvasElement.querySelector<HTMLInputElement>('input[type="file"]')
      expect(upload, 'Expected Data Import file input').toBeTruthy()
      await user.upload(upload!, new File([CSV], 'bar-data-series.csv', { type: 'text/csv' }))

      expect(await canvas.findByText('Data Preview')).toBeVisible()
      await waitFor(() => expect(canvasElement.querySelectorAll('table.data-table tbody tr')).toHaveLength(4))
      for (const heading of ['Quarter', 'Cases', 'Hospitalizations', 'Deaths', 'Cases Label']) {
        expect(canvasElement.querySelector(`table.data-table th[title="${heading}"]`)).toBeVisible()
      }
      const previewRows = Array.from(canvasElement.querySelectorAll<HTMLElement>('table.data-table tbody tr'))
      expect(
        previewRows.map(row => Array.from(row.querySelectorAll('td'), cell => normalize(cell.textContent)))
      ).toEqual([
        ['Q1', '120', '80', '12', 'C-120'],
        ['Q2', '180', '110', '18', 'C-180'],
        ['Q3', '150', '95', '15', 'C-150'],
        ['Q4', '220', '140', '22', 'C-220']
      ])

      const vertical = canvas.getByRole('button', { name: /^Vertical/ })
      await user.click(vertical)
      expect(vertical).toHaveClass('active')
      const yesSeries = canvas.getByRole('button', { name: 'Yes', exact: true })
      const noSeries = canvas.getByRole('button', { name: 'No', exact: true })
      await performAndAssert(
        'Yes is the active multiple-series selection',
        () => ({ yes: yesSeries.style.backgroundColor, no: noSeries.style.backgroundColor }),
        () => user.click(yesSeries),
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

      await assertAlertNavigation(canvasElement, 'Data Series', 'Add Data Series', 'data-series', user)
      const addSeries = canvas.getByRole('combobox', { name: /^Add Data Series/ }) as HTMLSelectElement
      await waitForOptionsToPopulate(addSeries)
      await performAndAssert(
        'Cases leaves only Data Key missing',
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
      await user.selectOptions(dataKey, 'Quarter')
      await waitForAbsence('.chart-required-fields-alerts', canvasElement)
      await assertVisualizationRendered(canvasElement)

      await openSection(canvas, canvasElement, 'Data Series')
      await performAndAssert(
        'Hospitalizations renders eight valid bars and two named legends',
        () => ({ bars: geometry(canvasElement), legends: legendLabels(canvasElement) }),
        () => user.selectOptions(addSeries, 'Hospitalizations'),
        (before, after) =>
          validGeometry(before.bars, 4) &&
          validGeometry(after.bars, 8) &&
          after.legends.join('|') === 'Cases|Hospitalizations'
      )

      await performAndAssert(
        'Deaths adds a third series with twelve valid bars',
        () => ({ bars: geometry(canvasElement), legends: legendLabels(canvasElement) }),
        () => user.selectOptions(addSeries, 'Deaths'),
        (before, after) =>
          validGeometry(before.bars, 8) &&
          validGeometry(after.bars, 12) &&
          after.legends.join('|') === 'Cases|Hospitalizations|Deaths'
      )
      const deathsItem = await openSeries(canvasElement, 'Deaths', user)
      await performAndAssert(
        'Removing Deaths restores two-series output',
        () => ({ bars: geometry(canvasElement), legends: legendLabels(canvasElement) }),
        () => user.click(within(deathsItem).getByRole('button', { name: 'Remove' })),
        (before, after) =>
          validGeometry(before.bars, 12) &&
          validGeometry(after.bars, 8) &&
          after.legends.join('|') === 'Cases|Hospitalizations'
      )

      await performAndAssert(
        'Keyboard reorder moves Hospitalizations before Cases in authoring and output',
        () => ({
          authored: seriesOrder(canvasElement),
          legends: legendLabels(canvasElement),
          bars: geometry(canvasElement)
        }),
        () => moveSeriesWithKeyboard(canvasElement, 'Hospitalizations', 'up'),
        (before, after) =>
          before.authored.join('|') === 'Cases|Hospitalizations' &&
          before.legends.join('|') === 'Cases|Hospitalizations' &&
          after.authored.join('|') === 'Hospitalizations|Cases' &&
          after.legends.join('|') === 'Hospitalizations|Cases' &&
          validGeometry(after.bars, 8)
      )

      let casesItem = await openSeries(canvasElement, 'Cases', user)
      const nameInput = seriesNameInput(casesItem)
      await performAndAssert(
        'Series Name updates legend and Bar tooltip source',
        () => ({
          legends: legendLabels(canvasElement),
          tooltips: barPaths(canvasElement).map(path => path.dataset.tooltipHtml)
        }),
        async () => {
          await user.clear(nameInput)
          await user.type(nameInput, 'Reported Cases')
        },
        (before, after) =>
          before.legends.includes('Cases') &&
          after.legends.join('|') === 'Hospitalizations|Reported Cases' &&
          after.tooltips.some(tooltip => tooltip?.includes('Reported Cases:')) &&
          validGeometry(geometry(canvasElement), 8)
      )

      casesItem = seriesHandle(canvasElement, 'Cases')
      const valueLabel = within(casesItem).getByRole('combobox', { name: /^Value label column/ })
      const baselineGeometry = geometry(canvasElement).map(item => item.data)
      await performAndAssert(
        'Cases Label renders exact labels only for Reported Cases',
        () => ({ labels: barLabels(canvasElement), paths: geometry(canvasElement).map(item => item.data) }),
        () => user.selectOptions(valueLabel, 'column:Cases Label'),
        (_before, after) =>
          after.labels.join('|') === 'C-120|C-180|C-150|C-220' && after.paths.join('|') === baselineGeometry.join('|')
      )
      await performAndAssert(
        'Numeric renders only Cases values without changing geometry',
        () => ({ labels: barLabels(canvasElement), paths: geometry(canvasElement).map(item => item.data) }),
        () => user.selectOptions(valueLabel, 'numeric'),
        (_before, after) =>
          after.labels.join('|') === '120|180|150|220' && after.paths.join('|') === baselineGeometry.join('|')
      )
      await performAndAssert(
        'None removes all Bar value labels without changing geometry',
        () => ({ labels: barLabels(canvasElement), paths: geometry(canvasElement).map(item => item.data) }),
        () => user.selectOptions(valueLabel, 'none'),
        (_before, after) => after.labels.length === 0 && after.paths.join('|') === baselineGeometry.join('|')
      )

      const casesBar = barPaths(canvasElement).find(path => path.dataset.tooltipHtml?.includes('Reported Cases:'))
      expect(casesBar, 'Expected a Reported Cases Bar path').toBeTruthy()
      await user.hover(casesBar!)
      await waitFor(() => expect(visibleTooltipText(canvasElement)).toContain('Reported Cases'))
      expect(visibleTooltipText(canvasElement)).toContain('Hospitalizations')
      await user.unhover(casesBar!)

      const tooltipControl = showInTooltipControl(casesItem)
      expect(tooltipControl.input).toBeChecked()
      await user.click(tooltipControl.control)
      await user.hover(casesBar!)
      await waitFor(() => expect(visibleTooltipText(canvasElement)).not.toContain('Reported Cases'))
      expect(visibleTooltipText(canvasElement)).toContain('Hospitalizations')
      await user.unhover(casesBar!)
      await user.click(tooltipControl.control)
      await user.hover(casesBar!)
      await waitFor(() => expect(visibleTooltipText(canvasElement)).toContain('Reported Cases'))
      expect(visibleTooltipText(canvasElement)).toContain('Hospitalizations')
      await user.unhover(casesBar!)

      expect(canvas.queryByLabelText('Rank by Value')).toBeNull()
      const hospitalizationsItem = await openSeries(canvasElement, 'Hospitalizations', user)
      await performAndAssert(
        'Removing Hospitalizations reveals single-series Rank by Value',
        () => ({ bars: geometry(canvasElement), legends: legendLabels(canvasElement) }),
        () => user.click(within(hospitalizationsItem).getByRole('button', { name: 'Remove' })),
        (before, after) =>
          validGeometry(before.bars, 8) && validGeometry(after.bars, 4) && after.legends.join('|') === 'Reported Cases'
      )

      const rankByValue = canvas.getByLabelText('Rank by Value') as HTMLSelectElement
      await performAndAssert(
        'Ascending ranks Quarter labels by Cases',
        () => renderedCategoryOrder(canvasElement),
        () => user.selectOptions(rankByValue, 'asc'),
        (before, after) =>
          before.join('|') === 'Q1|Q2|Q3|Q4' &&
          after.join('|') === 'Q1|Q3|Q2|Q4' &&
          validGeometry(geometry(canvasElement), 4)
      )
      await performAndAssert(
        'Descending reverses the Cases ranking',
        () => renderedCategoryOrder(canvasElement),
        () => user.selectOptions(rankByValue, 'desc'),
        (before, after) =>
          before.join('|') === 'Q1|Q3|Q2|Q4' &&
          after.join('|') === 'Q4|Q2|Q3|Q1' &&
          validGeometry(geometry(canvasElement), 4)
      )

      expect(consoleErrors, `Unexpected console errors:\n${consoleErrors.join('\n')}`).toEqual([])
      expect(unhandledRejections, 'Unexpected unhandled rejections').toEqual([])
      expect(windowErrors, 'Unexpected window errors').toEqual([])
    } finally {
      console.error = originalConsoleError
      window.removeEventListener('unhandledrejection', onRejection)
      window.removeEventListener('error', onWindowError)
    }
  }
}
