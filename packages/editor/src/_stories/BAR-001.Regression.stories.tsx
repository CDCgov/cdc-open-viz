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

// Source regression: docs/qa/regression-scripts/build-and-configure-a-multi-series-bar-chart.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Charts/Bar Chart',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type Canvas = ReturnType<typeof within>
type User = ReturnType<typeof userEvent.setup>

const CSV = `Quarter,Cases,Hospitalizations
Q1,120,80
Q2,180,110
Q3,150,95
Q4,220,140`

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

const regularBarGroups = (root: HTMLElement) =>
  Array.from(chartBody(root).querySelectorAll<SVGGElement>('g[class*="bar-group-"]'))

const stackedBarGroups = (root: HTMLElement) =>
  Array.from(chartBody(root).querySelectorAll<SVGGElement>('g[id^="barStack"]'))

const barPaths = (groups: SVGGElement[]) =>
  groups.flatMap(group =>
    Array.from(group.querySelectorAll<SVGPathElement>('path[data-tooltip-id^="cdc-open-viz-tooltip-"]'))
  )

const pathGeometry = (paths: SVGPathElement[]) =>
  paths.map(path => {
    const bounds = path.getBBox()
    const data = path.getAttribute('d') || ''
    const quadraticYValues = Array.from(
      data.matchAll(/Q\s*-?\d+(?:\.\d+)?\s*,\s*(-?\d+(?:\.\d+)?)\s+-?\d+(?:\.\d+)?\s*,\s*(-?\d+(?:\.\d+)?)/g),
      match => [Number(match[1]), Number(match[2])]
    ).flat()
    return {
      data,
      x: bounds.x,
      y: bounds.y,
      width: bounds.width,
      height: bounds.height,
      quadraticCount: (data.match(/Q/g) || []).length,
      quadraticYValues
    }
  })

const validGeometry = (geometry: ReturnType<typeof pathGeometry>, expectedCount = 8) =>
  geometry.length === expectedCount &&
  geometry.every(
    bar =>
      bar.data.length > 0 &&
      !/NaN|undefined|null/.test(bar.data) &&
      Number.isFinite(bar.width) &&
      Number.isFinite(bar.height) &&
      bar.width > 0 &&
      bar.height > 0
  )

const regularState = (root: HTMLElement) => {
  const groups = regularBarGroups(root)
  return {
    groupCount: groups.length,
    orientations: groups.map(group => (group.classList.contains('horizontal') ? 'horizontal' : 'vertical')),
    geometry: pathGeometry(barPaths(groups)),
    stackedCount: stackedBarGroups(root).length,
    bottomAxisLines: chartBody(root).querySelectorAll('.bottom-axis > line').length,
    bottomAxisTicks: chartBody(root).querySelectorAll('.bottom-axis .vx-axis-tick > line').length,
    leftAxisLines: chartBody(root).querySelectorAll('.left-axis > line').length
  }
}

const stackedState = (root: HTMLElement) => {
  const groups = stackedBarGroups(root)
  return {
    groupCount: groups.length,
    orientations: groups.map(group => (group.classList.contains('horizontal') ? 'horizontal' : 'vertical')),
    geometry: pathGeometry(barPaths(groups)),
    regularCount: regularBarGroups(root).length
  }
}

const legendItems = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<HTMLElement>('.legend-container .legend-item[class*="legend-text--"]'))

const legendLabels = (root: HTMLElement) => legendItems(root).map(item => normalize(item.textContent))

const geometryData = (geometry: ReturnType<typeof pathGeometry>) => geometry.map(bar => bar.data)

const approximatelyEqual = (left: number, right: number) => Math.abs(left - right) < 0.5

const hasSpatialStacks = (geometry: ReturnType<typeof pathGeometry>) => {
  const stacks = new Map<string, (typeof geometry)[number][]>()
  geometry.forEach(bar => {
    const key = bar.x.toFixed(2)
    stacks.set(key, [...(stacks.get(key) || []), bar])
  })
  return (
    stacks.size === 4 &&
    Array.from(stacks.values()).every(stack => {
      if (stack.length !== 2) return false
      const [top, bottom] = [...stack].sort((left, right) => left.y - right.y)
      return approximatelyEqual(top.y + top.height, bottom.y)
    })
  )
}

const hasTopOnlyRounding = (bar: ReturnType<typeof pathGeometry>[number]) =>
  bar.quadraticCount === 2 &&
  bar.quadraticYValues.length === 4 &&
  bar.quadraticYValues.some(value => approximatelyEqual(value, bar.y)) &&
  bar.quadraticYValues.every(value => value < bar.y + bar.height / 2)

const hasFullRounding = (bar: ReturnType<typeof pathGeometry>[number]) =>
  bar.quadraticCount === 4 &&
  bar.quadraticYValues.some(value => approximatelyEqual(value, bar.y)) &&
  bar.quadraticYValues.some(value => approximatelyEqual(value, bar.y + bar.height))

export const BAR001: Story = {
  name: 'BAR-001 — Build and configure a multi-series Bar Chart',
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
      await user.upload(upload!, new File([CSV], 'multi-series-bar-chart.csv', { type: 'text/csv' }))

      expect(await canvas.findByText('Data Preview')).toBeVisible()
      await waitFor(() => expect(canvasElement.querySelectorAll('table.data-table tbody tr')).toHaveLength(4))
      for (const heading of ['Quarter', 'Cases', 'Hospitalizations']) {
        expect(canvasElement.querySelector(`table.data-table th[title="${heading}"]`)).toBeVisible()
      }
      const previewRows = Array.from(canvasElement.querySelectorAll<HTMLElement>('table.data-table tbody tr'))
      expect(
        previewRows.map(row => Array.from(row.querySelectorAll('td'), cell => normalize(cell.textContent)))
      ).toEqual([
        ['Q1', '120', '80'],
        ['Q2', '180', '110'],
        ['Q3', '150', '95'],
        ['Q4', '220', '140']
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
      expect(canvasElement.querySelector('.cove-visualization__body')).toBeNull()

      await assertAlertNavigation(canvasElement, 'Data Series', 'Add Data Series', 'data-series', user)
      const firstSeries = canvas.getByRole('combobox', { name: /^Add Data Series/ }) as HTMLSelectElement
      await waitForOptionsToPopulate(firstSeries)
      await performAndAssert(
        'Adding Cases leaves only Data Key missing',
        () => ({
          alerts: requiredAlertText(canvasElement),
          chart: canvasElement.querySelector('.cove-visualization__body')
        }),
        () => user.selectOptions(firstSeries, 'Cases'),
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
        'Quarter resolves requirements and renders four valid grouped bars',
        () => ({
          alerts: getRequiredAlerts(canvasElement).length,
          groups: canvasElement.querySelectorAll('g[class*="bar-group-"]').length
        }),
        () => user.selectOptions(dataKey, 'Quarter'),
        (before, after) => before.alerts === 1 && after.alerts === 0 && after.groups === 4
      )
      await waitForAbsence('.chart-required-fields-alerts', canvasElement)
      await assertVisualizationRendered(canvasElement)

      await openSection(canvas, canvasElement, 'Data Series')
      const secondSeries = canvas.getByRole('combobox', { name: /^Add Data Series/ }) as HTMLSelectElement
      await waitForOptionsToPopulate(secondSeries)
      await performAndAssert(
        'Hospitalizations renders two named series and eight meaningful grouped bars',
        () => ({ state: regularState(canvasElement), labels: legendLabels(canvasElement) }),
        () => user.selectOptions(secondSeries, 'Hospitalizations'),
        (before, after) =>
          before.state.geometry.length === 4 &&
          after.state.groupCount === 4 &&
          after.state.stackedCount === 0 &&
          validGeometry(after.state.geometry) &&
          after.labels.length === 2 &&
          after.labels.includes('Cases') &&
          after.labels.includes('Hospitalizations')
      )
      expect(legendItems(canvasElement)).toHaveLength(2)
      for (const item of legendItems(canvasElement)) expect(item).toBeVisible()

      await openSection(canvas, canvasElement, 'General')
      const subtype = canvas.getByLabelText('Chart Subtype') as HTMLSelectElement
      expect(Array.from(subtype.options, option => option.value)).toEqual(
        expect.arrayContaining(['regular', 'stacked'])
      )
      await performAndAssert(
        'Stacked replaces grouped structure while retaining eight bars',
        () => ({ regular: regularState(canvasElement), stacked: stackedState(canvasElement) }),
        () => user.selectOptions(subtype, 'stacked'),
        (before, after) =>
          before.regular.groupCount === 4 &&
          before.stacked.groupCount === 0 &&
          after.stacked.groupCount === 8 &&
          after.stacked.regularCount === 0 &&
          after.stacked.orientations.every(orientation => orientation === 'vertical') &&
          validGeometry(after.stacked.geometry) &&
          hasSpatialStacks(after.stacked.geometry)
      )
      await performAndAssert(
        'Standard restores grouped structure while retaining eight bars',
        () => ({ regular: regularState(canvasElement), stacked: stackedState(canvasElement) }),
        () => user.selectOptions(subtype, 'regular'),
        (before, after) =>
          before.stacked.groupCount === 8 &&
          after.stacked.groupCount === 0 &&
          after.regular.groupCount === 4 &&
          after.regular.orientations.every(orientation => orientation === 'vertical') &&
          validGeometry(after.regular.geometry)
      )

      const orientation = canvas.getByLabelText('Orientation') as HTMLSelectElement
      expect(Array.from(orientation.options, option => option.value)).toEqual(['vertical', 'horizontal'])
      await performAndAssert(
        'Horizontal changes bar and axis structure',
        () => regularState(canvasElement),
        () => user.selectOptions(orientation, 'horizontal'),
        (before, after) =>
          before.orientations.every(value => value === 'vertical') &&
          after.groupCount === 4 &&
          after.orientations.every(value => value === 'horizontal') &&
          validGeometry(after.geometry) &&
          after.geometry.every(bar => bar.width > bar.height) &&
          after.bottomAxisLines === 0 &&
          after.bottomAxisTicks === 0 &&
          after.leftAxisLines > 0
      )
      await performAndAssert(
        'Vertical restores bar and axis structure',
        () => regularState(canvasElement),
        () => user.selectOptions(orientation, 'vertical'),
        (before, after) =>
          before.orientations.every(value => value === 'horizontal') &&
          after.groupCount === 4 &&
          after.orientations.every(value => value === 'vertical') &&
          validGeometry(after.geometry) &&
          after.geometry.every(bar => bar.height > bar.width) &&
          after.bottomAxisLines > 0 &&
          after.bottomAxisTicks > 0 &&
          after.leftAxisLines === 0
      )

      const barStyle = canvas.getByLabelText(/bar style/i) as HTMLSelectElement
      expect(Array.from(barStyle.options, option => option.value)).toEqual(expect.arrayContaining(['flat', 'rounded']))
      await performAndAssert(
        'Rounded replaces Flat rectangles with curved paths',
        () => regularState(canvasElement).geometry,
        () => user.selectOptions(barStyle, 'rounded'),
        (before, after) =>
          validGeometry(before) &&
          validGeometry(after) &&
          before.every(bar => bar.quadraticCount === 0) &&
          after.every(hasTopOnlyRounding) &&
          geometryData(after).join('|') !== geometryData(before).join('|')
      )

      const tipRounding = canvas.getByLabelText(/tip rounding/i) as HTMLSelectElement
      const standardTop = geometryData(regularState(canvasElement).geometry)
      await performAndAssert(
        'Full rounds both ends of every regular Bar',
        () => regularState(canvasElement).geometry,
        () => user.selectOptions(tipRounding, 'full'),
        (before, after) =>
          validGeometry(after) &&
          before.every(hasTopOnlyRounding) &&
          after.every(hasFullRounding) &&
          geometryData(after).join('|') !== geometryData(before).join('|')
      )
      await performAndAssert(
        'Top restores positive-end-only rounding',
        () => regularState(canvasElement).geometry,
        () => user.selectOptions(tipRounding, 'top'),
        (_before, after) =>
          validGeometry(after) &&
          after.every(hasTopOnlyRounding) &&
          geometryData(after).join('|') === standardTop.join('|')
      )

      const roundingStyle = canvas.getByLabelText(/rounding style/i) as HTMLSelectElement
      await performAndAssert(
        'Shallow produces distinct valid rounded geometry',
        () => regularState(canvasElement).geometry,
        () => user.selectOptions(roundingStyle, 'shallow'),
        (before, after) =>
          validGeometry(after) &&
          after.every(hasTopOnlyRounding) &&
          geometryData(after).join('|') !== geometryData(before).join('|')
      )
      const shallow = geometryData(regularState(canvasElement).geometry)
      await performAndAssert(
        'Finger produces distinct valid rounded geometry',
        () => regularState(canvasElement).geometry,
        () => user.selectOptions(roundingStyle, 'finger'),
        (_before, after) =>
          validGeometry(after) &&
          after.every(hasTopOnlyRounding) &&
          geometryData(after).join('|') !== shallow.join('|') &&
          geometryData(after).join('|') !== standardTop.join('|')
      )
      await performAndAssert(
        'Standard restores the original rounded geometry',
        () => regularState(canvasElement).geometry,
        () => user.selectOptions(roundingStyle, 'standard'),
        (_before, after) =>
          validGeometry(after) &&
          after.every(hasTopOnlyRounding) &&
          geometryData(after).join('|') === standardTop.join('|')
      )

      expect(legendLabels(canvasElement)).toEqual(expect.arrayContaining(['Cases', 'Hospitalizations']))
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
