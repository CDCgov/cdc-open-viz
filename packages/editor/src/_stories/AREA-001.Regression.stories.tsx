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

// Source regression: docs/qa/regression-scripts/build-and-configure-an-area-chart.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Charts/Scripts/Area Chart',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type Canvas = ReturnType<typeof within>
type User = ReturnType<typeof userEvent.setup>

const CSV = `Quarter,Cases,Hospitalizations
Q1,12,3
Q2,18,5
Q3,15,4
Q4,22,7`

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
    expect(alert).toHaveTextContent(`Missing field: ${field}. More information`)
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

const areaPaths = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<SVGPathElement>('g.area-chart > path')).map(path => path.getAttribute('d') || '')

const isValidAreaPath = (path: string) => path.length > 0 && !/NaN|undefined|null/.test(path)

const legendItems = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<HTMLElement>('.legend-container .legend-item[class*="legend-text--"]'))

const legendLabels = (root: HTMLElement) => legendItems(root).map(item => normalize(item.textContent))

export const AREA001: Story = {
  name: 'AREA-001 — Build and configure an Area Chart',
  args: { config: {} },
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
      // Select Area Chart and import deterministic local data.
      await user.click(await canvas.findByRole('button', { name: 'Area Chart' }))
      expect(canvas.getByText('2. Import Data')).toBeVisible()
      await user.click(canvas.getByText('2. Import Data'))

      const upload = canvasElement.querySelector<HTMLInputElement>('input[type="file"]')
      expect(upload, 'Expected Data Import file input').toBeTruthy()
      await user.upload(upload!, new File([CSV], 'area-chart-regression.csv', { type: 'text/csv' }))

      expect(await canvas.findByText('Data Preview')).toBeVisible()
      await waitFor(() => expect(canvasElement.querySelectorAll('table.data-table tbody tr')).toHaveLength(4))
      for (const heading of ['Quarter', 'Cases', 'Hospitalizations']) {
        expect(canvasElement.querySelector(`table.data-table th[title="${heading}"]`)).toBeVisible()
      }
      const previewRows = Array.from(canvasElement.querySelectorAll<HTMLElement>('table.data-table tbody tr'))
      expect(
        previewRows.map(row => Array.from(row.querySelectorAll('td'), cell => normalize(cell.textContent)))
      ).toEqual([
        ['Q1', '12', '3'],
        ['Q2', '18', '5'],
        ['Q3', '15', '4'],
        ['Q4', '22', '7']
      ])

      const vertical = canvas.getByRole('button', { name: /^Vertical/ })
      await user.click(vertical)
      expect(vertical).toHaveClass('active')
      const noSeries = canvas.getByRole('button', { name: 'No', exact: true })
      const yesSeries = canvas.getByRole('button', { name: 'Yes', exact: true })
      await performAndAssert(
        'No is the active multiple-series selection',
        () => ({ no: noSeries.style.backgroundColor, yes: yesSeries.style.backgroundColor }),
        () => user.click(noSeries),
        (_before, after) => after.no === 'rgb(1, 93, 170)' && after.yes === 'rgb(0, 52, 93)'
      )

      await user.click(await canvas.findByRole('button', { name: 'Configure your visualization' }))
      await waitForEditor(canvas)
      await waitForPresence('.chart-required-fields-alerts .alert-info', canvasElement)
      expectRequiredFields(canvasElement, [
        { section: 'Data Series', field: 'Add Data Series' },
        { section: 'Date/Category Axis', field: 'Data Key' }
      ])
      expect(canvasElement.querySelector('.cove-visualization__body')).toBeNull()

      // Both alerts navigate accessibly to their required controls.
      await assertAlertNavigation(canvasElement, 'Data Series', 'Add Data Series', 'data-series', user)
      await assertAlertNavigation(canvasElement, 'Date/Category Axis', 'Data Key', 'date-category-axis', user)

      // Add the first series; Data Key remains the sole requirement.
      await assertAlertNavigation(canvasElement, 'Data Series', 'Add Data Series', 'data-series', user)
      const firstSeries = canvas.getByRole('combobox', { name: /^Add Data Series/ }) as HTMLSelectElement
      await waitForOptionsToPopulate(firstSeries)
      await performAndAssert(
        'Adding Cases leaves only Data Key missing',
        () => ({ alerts: requiredAlertText(canvasElement), areas: areaPaths(canvasElement).length }),
        () => user.selectOptions(firstSeries, 'Cases'),
        (before, after) =>
          before.alerts.includes('Add Data Series') &&
          before.alerts.includes('Data Key') &&
          !after.alerts.includes('Add Data Series') &&
          after.alerts.includes('Data Key') &&
          after.areas === 0
      )
      expectRequiredFields(canvasElement, [{ section: 'Date/Category Axis', field: 'Data Key' }])

      // Completing the category axis renders exactly one valid Area path.
      await assertAlertNavigation(canvasElement, 'Date/Category Axis', 'Data Key', 'date-category-axis', user)
      const dataKey = canvas.getByRole('combobox', { name: /^Data Key/ }) as HTMLSelectElement
      await waitForOptionsToPopulate(dataKey)
      await performAndAssert(
        'Selecting Quarter resolves requirements and renders one Area series',
        () => ({ alerts: getRequiredAlerts(canvasElement).length, paths: areaPaths(canvasElement) }),
        () => user.selectOptions(dataKey, 'Quarter'),
        (before, after) =>
          before.alerts === 1 && after.alerts === 0 && after.paths.length === 1 && isValidAreaPath(after.paths[0])
      )
      await waitForAbsence('.chart-required-fields-alerts', canvasElement)
      await assertVisualizationRendered(canvasElement)

      // Adding the second series produces a second path and named legend output.
      await openSection(canvas, canvasElement, 'Data Series')
      const secondSeries = canvas.getByRole('combobox', { name: /^Add Data Series/ }) as HTMLSelectElement
      await waitForOptionsToPopulate(secondSeries)
      await performAndAssert(
        'Adding Hospitalizations renders two Area series and two legend labels',
        () => ({ paths: areaPaths(canvasElement), labels: legendLabels(canvasElement) }),
        () => user.selectOptions(secondSeries, 'Hospitalizations'),
        (before, after) =>
          before.paths.length === 1 &&
          after.paths.length === 2 &&
          after.paths.every(isValidAreaPath) &&
          after.labels.length === 2 &&
          after.labels.includes('Cases') &&
          after.labels.includes('Hospitalizations')
      )
      expect(canvasElement.querySelector('.legend-container')).toBeVisible()
      expect(legendItems(canvasElement)).toHaveLength(2)
      for (const item of legendItems(canvasElement)) expect(item).toBeVisible()

      // The Area-specific curve control must change both rendered path geometries.
      await openSection(canvas, canvasElement, 'General')
      const lineType = canvas.getByRole('combobox', { name: /^Stacked Area Chart Line Type/ }) as HTMLSelectElement
      await waitForOptionsToPopulate(lineType)
      await performAndAssert(
        'Step curve changes both Area path geometries',
        () => areaPaths(canvasElement),
        () => user.selectOptions(lineType, 'Step'),
        (before, after) =>
          before.length === 2 &&
          after.length === 2 &&
          after.every(isValidAreaPath) &&
          after.every(path => !before.includes(path))
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
