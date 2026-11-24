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

// Source regression: docs/qa/regression-scripts/area-chart-categorical-y-axis-and-ordered-filtering.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Charts/Scripts/Area Chart',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type Canvas = ReturnType<typeof within>
type User = ReturnType<typeof userEvent.setup>

const CSV = `Quarter,Region,Cases
Q1,East,12
Q2,West,15
Q3,East,18
Q4,West,22`

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

const areaGeometry = (root: HTMLElement) => {
  const paths = Array.from(root.querySelectorAll<SVGPathElement>('g.area-chart > path'))
  const path = paths[0]
  const bounds = path?.getBBox()
  return {
    count: paths.length,
    data: path?.getAttribute('d') || '',
    length: path?.getTotalLength() || 0,
    width: bounds?.width || 0,
    height: bounds?.height || 0
  }
}

const isValidAreaGeometry = (geometry: ReturnType<typeof areaGeometry>) =>
  geometry.count === 1 &&
  geometry.length > 0 &&
  geometry.width > 0 &&
  geometry.height > 0 &&
  geometry.data.length > 0 &&
  !/NaN|undefined|null/.test(geometry.data)

const categoricalBands = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<SVGGElement>('g.stack.vertical')).map(band => {
    const shape = band.querySelector<SVGPathElement>('path')
    const label = band.querySelector<SVGTextElement>('text')
    const shapeBounds = shape?.getBBox()
    const labelBounds = label?.getBBox()
    return {
      label: normalize(label?.textContent),
      visible: Boolean(
        shapeBounds &&
          shapeBounds.width > 0 &&
          shapeBounds.height > 0 &&
          labelBounds &&
          labelBounds.width > 0 &&
          labelBounds.height > 0
      )
    }
  })

const axisCategoryRows = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<HTMLElement>('.edit-block')).filter(row =>
    /^Axis Category \d+$/.test(normalize(row.querySelector('p')?.textContent))
  )

const inputForVisibleLabel = (row: HTMLElement, label: string) => {
  const labelText = within(row).getByText(label, { exact: true })
  const input = labelText.closest('label')?.querySelector<HTMLInputElement>('input')
  expect(input, `Expected input for ${label}`).toBeTruthy()
  return input!
}

const filterRows = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<HTMLElement>('[data-rfd-draggable-id^="filter-"]'))

const filterOrderValues = (filterRow: HTMLElement) =>
  Array.from(filterRow.querySelectorAll<HTMLElement>('[data-rfd-draggable-id^="draggableFilter-"]')).map(item =>
    normalize(item.textContent)
  )

const moveFilterValueWithKeyboard = async (
  filterRow: HTMLElement,
  label: string,
  direction: 'up' | 'down',
  user: User
) => {
  let dragHandle = Array.from(
    filterRow.querySelectorAll<HTMLElement>('[data-rfd-draggable-id^="draggableFilter-"]')
  ).find(item => normalize(item.textContent) === label)
  expect(dragHandle, `Expected filter order item ${label}`).toBeTruthy()
  const nestedDragArea = dragHandle!.closest('.sort-list')?.parentElement
  expect(nestedDragArea, 'Expected nested filter-order drag area').toBeTruthy()
  await user.hover(nestedDragArea!)
  await waitFor(() => expect(filterRow).not.toHaveAttribute('data-rfd-drag-handle-draggable-id'))
  dragHandle = Array.from(filterRow.querySelectorAll<HTMLElement>('[data-rfd-draggable-id^="draggableFilter-"]')).find(
    item => normalize(item.textContent) === label
  )
  expect(dragHandle, `Expected nested filter order handle ${label}`).toBeTruthy()
  dragHandle!.focus()
  fireEvent.keyDown(dragHandle!, { key: ' ', code: 'Space', keyCode: 32 })
  fireEvent.keyDown(document.activeElement || dragHandle!, {
    key: direction === 'up' ? 'ArrowUp' : 'ArrowDown',
    code: direction === 'up' ? 'ArrowUp' : 'ArrowDown',
    keyCode: direction === 'up' ? 38 : 40
  })
  fireEvent.keyDown(document.activeElement || dragHandle!, { key: ' ', code: 'Space', keyCode: 32 })
}

export const AREA002: Story = {
  name: 'AREA-002 — Categorical Y axis and ordered filtering',
  args: { config: {} },
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
      await user.click(await canvas.findByRole('button', { name: 'Area Chart' }))
      await user.click(canvas.getByText('2. Import Data'))
      const upload = canvasElement.querySelector<HTMLInputElement>('input[type="file"]')
      expect(upload, 'Expected Data Import file input').toBeTruthy()
      await user.upload(upload!, new File([CSV], 'area-chart-categorical-axis.csv', { type: 'text/csv' }))

      expect(await canvas.findByText('Data Preview')).toBeVisible()
      await waitFor(() => expect(canvasElement.querySelectorAll('table.data-table tbody tr')).toHaveLength(4))
      for (const heading of ['Quarter', 'Region', 'Cases']) {
        expect(canvasElement.querySelector(`table.data-table th[title="${heading}"]`)).toBeVisible()
      }
      const previewRows = Array.from(canvasElement.querySelectorAll<HTMLElement>('table.data-table tbody tr'))
      expect(
        previewRows.map(row => Array.from(row.querySelectorAll('td'), cell => normalize(cell.textContent)))
      ).toEqual([
        ['Q1', 'East', '12'],
        ['Q2', 'West', '15'],
        ['Q3', 'East', '18'],
        ['Q4', 'West', '22']
      ])

      await user.click(canvas.getByRole('button', { name: /^Vertical/ }))
      await user.click(canvas.getByRole('button', { name: 'No', exact: true }))
      await user.click(await canvas.findByRole('button', { name: 'Configure your visualization' }))
      await waitForEditor(canvas)
      await waitForPresence('.chart-required-fields-alerts .alert-info', canvasElement)
      expectRequiredFields(canvasElement, [
        { section: 'Data Series', field: 'Add Data Series' },
        { section: 'Date/Category Axis', field: 'Data Key' }
      ])
      expect(canvasElement.querySelector('.cove-visualization__body')).toBeNull()

      await assertAlertNavigation(canvasElement, 'Data Series', 'Add Data Series', 'data-series', user)
      const dataSeries = canvas.getByRole('combobox', { name: /^Add Data Series/ }) as HTMLSelectElement
      await waitForOptionsToPopulate(dataSeries)
      await performAndAssert(
        'Cases leaves only Data Key missing',
        () => ({ alerts: requiredAlertText(canvasElement), geometry: areaGeometry(canvasElement) }),
        () => user.selectOptions(dataSeries, 'Cases'),
        (before, after) =>
          before.alerts.includes('Add Data Series') &&
          before.alerts.includes('Data Key') &&
          !after.alerts.includes('Add Data Series') &&
          after.alerts.includes('Data Key') &&
          after.geometry.count === 0
      )

      await assertAlertNavigation(canvasElement, 'Date/Category Axis', 'Data Key', 'date-category-axis', user)
      const dataKey = canvas.getByRole('combobox', { name: /^Data Key/ }) as HTMLSelectElement
      await waitForOptionsToPopulate(dataKey)
      await performAndAssert(
        'Quarter renders one valid Area path',
        () => ({ alerts: getRequiredAlerts(canvasElement).length, geometry: areaGeometry(canvasElement) }),
        () => user.selectOptions(dataKey, 'Quarter'),
        (before, after) => before.alerts === 1 && after.alerts === 0 && isValidAreaGeometry(after.geometry)
      )
      await waitForAbsence('.chart-required-fields-alerts', canvasElement)
      await assertVisualizationRendered(canvasElement)

      await openSection(canvas, canvasElement, 'Left Value Axis')
      const axisType = canvas.getByLabelText(/^Axis Type/) as HTMLSelectElement
      await performAndAssert(
        'Categorical Axis Type replaces numeric Y ticks',
        () => ({
          numericTicks: canvasElement.querySelectorAll('.left-axis .vx-axis-tick text').length,
          addCategory: Boolean(canvas.queryByRole('button', { name: 'Add Axis Category' }))
        }),
        () => user.selectOptions(axisType, 'categorical'),
        (before, after) =>
          before.numericTicks > 0 && after.numericTicks === 0 && !before.addCategory && after.addCategory
      )

      await user.click(canvas.getByRole('button', { name: 'Add Axis Category' }))
      await openSection(canvas, canvasElement, 'Left Value Axis')
      await user.click(canvas.getByRole('button', { name: 'Add Axis Category' }))
      await openSection(canvas, canvasElement, 'Left Value Axis')
      await waitFor(() => expect(axisCategoryRows(canvasElement)).toHaveLength(2))
      const categories = axisCategoryRows(canvasElement)
      const firstHeight = inputForVisibleLabel(categories[0], 'Category Height')
      const secondHeight = inputForVisibleLabel(categories[1], 'Category Height')
      const firstLabel = inputForVisibleLabel(categories[0], 'Label')
      const secondLabel = inputForVisibleLabel(categories[1], 'Label')
      await user.clear(firstHeight)
      await user.type(firstHeight, '15')
      expect(firstHeight).toHaveValue(15)
      expect(secondHeight).toHaveValue(null)
      await waitFor(() => expect(categoricalBands(canvasElement).every(band => band.visible)).toBe(true))
      await user.clear(firstLabel)
      await user.type(firstLabel, 'Low')
      await waitFor(() => expect(categoricalBands(canvasElement).map(band => band.label)).toEqual(['Low', 'Label 2']))
      await user.clear(secondLabel)
      await user.type(secondLabel, 'High')
      await waitFor(() => {
        expect(categoricalBands(canvasElement)).toEqual([
          { label: 'Low', visible: true },
          { label: 'High', visible: true }
        ])
        expect(isValidAreaGeometry(areaGeometry(canvasElement))).toBe(true)
      })

      await openSection(canvas, canvasElement, 'Filters')
      await user.click(canvas.getByRole('button', { name: /^Add Filter/ }))
      await waitFor(() => expect(filterRows(canvasElement)).toHaveLength(1))
      const filterRow = filterRows(canvasElement)[0]
      const filterColumn = within(filterRow).getByRole('combobox', { name: /^Filter$/ }) as HTMLSelectElement
      await waitForOptionsToPopulate(filterColumn)
      await user.selectOptions(filterColumn, 'Region')
      const labelInput = within(filterRow).getByLabelText('Label')
      await user.type(labelInput, 'Region')
      const filterOrder = within(filterRow).getByLabelText('Filter Order')
      await user.selectOptions(filterOrder, 'cust')
      await waitFor(() => expect(filterOrderValues(filterRow)).toEqual(['East', 'West']))

      const eastPath = areaGeometry(canvasElement).data
      await performAndAssert(
        'Custom filter order moves West before East and activates West',
        () => ({ order: filterOrderValues(filterRow), geometry: areaGeometry(canvasElement) }),
        () => moveFilterValueWithKeyboard(filterRow, 'West', 'up', user),
        (before, after) =>
          before.order.join('|') === 'East|West' &&
          after.order.join('|') === 'West|East' &&
          isValidAreaGeometry(after.geometry) &&
          after.geometry.data !== eastPath
      )

      const runtimeFilter = canvas.getByRole('combobox', { name: 'Filter by Region' }) as HTMLSelectElement
      expect(Array.from(runtimeFilter.options, option => option.textContent)).toEqual(['West', 'East'])
      expect(runtimeFilter).toHaveValue('West')
      const westPath = areaGeometry(canvasElement).data

      await performAndAssert(
        'East renders different valid Area geometry',
        () => areaGeometry(canvasElement),
        () => user.selectOptions(runtimeFilter, 'East'),
        (before, after) => before.data === westPath && isValidAreaGeometry(after) && after.data !== before.data
      )
      await performAndAssert(
        'West restores its valid Area geometry',
        () => areaGeometry(canvasElement),
        () => user.selectOptions(runtimeFilter, 'West'),
        (before, after) => isValidAreaGeometry(before) && isValidAreaGeometry(after) && after.data === westPath
      )

      expect(categoricalBands(canvasElement)).toEqual([
        { label: 'Low', visible: true },
        { label: 'High', visible: true }
      ])
      expect(unhandledRejections, 'Unexpected unhandled rejections').toEqual([])
      expect(windowErrors, 'Unexpected window errors').toEqual([])
    } finally {
      window.removeEventListener('unhandledrejection', onRejection)
      window.removeEventListener('error', onWindowError)
    }
  }
}
