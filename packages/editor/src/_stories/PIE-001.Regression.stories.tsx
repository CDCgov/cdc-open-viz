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

// Source regression: docs/qa/regression-scripts/build-and-configure-a-pie-chart.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Chart Scripts',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>

const CSV = `Category,Value,Alternate
Alpha,40,4000
Beta,30,3000
Gamma,20,2000
Delta,10,1000`

const normalize = (value: string | null | undefined) => value?.replace(/\s+/g, ' ').trim() || ''

const getRequiredAlerts = (canvasElement: HTMLElement) =>
  Array.from(canvasElement.querySelectorAll<HTMLElement>('.chart-required-fields-alerts .alert-info'))

const expectRequiredFields = (
  canvasElement: HTMLElement,
  expectedFields: Array<{ section: string; field: string }>
) => {
  const alerts = getRequiredAlerts(canvasElement)
  expect(alerts).toHaveLength(expectedFields.length)
  expectedFields.forEach(({ section, field }) => {
    const alert = alerts.find(candidate => candidate.textContent?.includes(`Missing field: ${field}.`))
    expect(alert, `Expected missing-field alert for ${field}`).toBeTruthy()
    expect(alert).toHaveTextContent(`Missing field: ${field}. More information`)
    expect(
      within(alert!).getByRole('button', {
        name: `Open ${section} and focus ${field}`
      })
    ).toBeVisible()
  })
}

const assertAlertNavigation = async (
  canvasElement: HTMLElement,
  section: string,
  field: string,
  target: string,
  user: ReturnType<typeof userEvent.setup>
) => {
  const canvas = within(canvasElement)
  const action = canvas.getByRole('button', { name: `Open ${section} and focus ${field}` })

  await performAndAssert(
    `The ${field} alert opens ${section} and focuses its required control`,
    () => ({
      expanded: canvasElement.querySelector(`[data-required-field-section="${target}"]`)?.getAttribute('aria-expanded'),
      focused: canvasElement.ownerDocument.activeElement?.getAttribute('data-required-field-control')
    }),
    () => user.click(action),
    (_before, after) => after.expanded === 'true' && after.focused === target
  )
}

const getPieSegments = (canvasElement: HTMLElement) =>
  Array.from(canvasElement.querySelectorAll<SVGGElement>('svg.animated-pie g[class*="slice-"]'))

const expectedSegments = [
  { category: 'Alpha', percentage: '40%' },
  { category: 'Beta', percentage: '30%' },
  { category: 'Gamma', percentage: '20%' },
  { category: 'Delta', percentage: '10%' }
]

export const PIE001: Story = {
  name: 'PIE-001 — Build and configure a Pie Chart',
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
      // Select Pie and import deterministic local data.
      await user.click(await canvas.findByRole('button', { name: 'Pie' }))
      expect(canvas.getByText('2. Import Data')).toBeVisible()
      await user.click(canvas.getByText('2. Import Data'))

      const upload = canvasElement.querySelector<HTMLInputElement>('input[type="file"]')
      expect(upload, 'Expected Data Import file input').toBeTruthy()
      await user.upload(upload!, new File([CSV], 'pie-chart-regression.csv', { type: 'text/csv' }))

      expect(await canvas.findByText('Data Preview')).toBeVisible()
      await waitFor(() => expect(canvasElement.querySelectorAll('table.data-table tbody tr')).toHaveLength(4))
      for (const heading of ['Category', 'Value', 'Alternate']) {
        expect(canvasElement.querySelector(`table.data-table th[title="${heading}"]`)).toBeVisible()
      }
      const previewRows = canvasElement.querySelectorAll('table.data-table tbody tr')
      expect(previewRows).toHaveLength(4)
      expect(within(previewRows[0] as HTMLElement).getByText('Alpha')).toBeVisible()
      expect(within(previewRows[0] as HTMLElement).getByText('40')).toBeVisible()
      expect(within(previewRows[0] as HTMLElement).getByText('4000')).toBeVisible()
      expect(within(previewRows[3] as HTMLElement).getByText('Delta')).toBeVisible()
      expect(within(previewRows[3] as HTMLElement).getByText('10')).toBeVisible()
      expect(within(previewRows[3] as HTMLElement).getByText('1000')).toBeVisible()

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
        { section: 'Data Format', field: 'Data Column' },
        { section: 'Segments', field: 'Segment Labels' }
      ])
      expect(canvasElement.querySelector('.cove-visualization__body')).toBeNull()

      // Follow the required-field guidance and complete Data Column first.
      await assertAlertNavigation(canvasElement, 'Data Format', 'Data Column', 'pie-data-column', user)
      const dataColumn = canvas.getByRole('combobox', { name: /^Data Column/ }) as HTMLSelectElement
      await waitForOptionsToPopulate(dataColumn)
      expect(Array.from(dataColumn.options).map(option => option.value)).toEqual(
        expect.arrayContaining(['Value', 'Alternate'])
      )
      await performAndAssert(
        'Selecting Value resolves only the Data Column requirement',
        () =>
          getRequiredAlerts(canvasElement)
            .map(alert => normalize(alert.textContent))
            .join('|'),
        () => user.selectOptions(dataColumn, 'Value'),
        (before, after) =>
          before.includes('Data Column') &&
          before.includes('Segment Labels') &&
          !after.includes('Data Column') &&
          after.includes('Segment Labels')
      )
      expectRequiredFields(canvasElement, [{ section: 'Segments', field: 'Segment Labels' }])

      // Complete Segment Labels; the final required selection must produce the Pie.
      await assertAlertNavigation(canvasElement, 'Segments', 'Segment Labels', 'pie-segments', user)
      const segmentLabels = canvas.getByRole('combobox', { name: /^Segment Labels/ }) as HTMLSelectElement
      await waitForOptionsToPopulate(segmentLabels)
      await performAndAssert(
        'Selecting Category renders four exact Pie segments',
        () => ({ alerts: getRequiredAlerts(canvasElement).length, segments: getPieSegments(canvasElement).length }),
        () => user.selectOptions(segmentLabels, 'Category'),
        (before, after) => before.alerts === 1 && before.segments === 0 && after.alerts === 0 && after.segments === 4
      )

      await waitForAbsence('.chart-required-fields-alerts', canvasElement)
      await assertVisualizationRendered(canvasElement)
      expect(canvas.getByRole('img')).toBeVisible()

      // The default Pie renders exact percentages, and its legend names every segment.
      for (const { category, percentage } of expectedSegments) {
        const segment = canvasElement.querySelector<SVGGElement>(`svg.animated-pie g.slice-${category}`)
        expect(segment, `Expected rendered ${category} segment`).toBeTruthy()
        expect(segment).toHaveTextContent(percentage)
      }
      const legend = canvasElement.querySelector<HTMLElement>('.legend-container')
      expect(legend).toBeVisible()
      for (const { category } of expectedSegments) expect(legend).toHaveTextContent(category)

      // Expand the rendered data table and verify its computed Pie percentages.
      const dataTableContainer = canvasElement.querySelector<HTMLElement>('.data-table-container')
      expect(dataTableContainer).toBeVisible()
      const tableToggle = within(dataTableContainer!).getByRole('button', { name: /Data Table/ })
      await user.click(tableToggle)
      const dataTable = await waitForPresence('.data-table-container table.data-table', canvasElement)
      expect(dataTable).toBeVisible()
      for (const { category, percentage } of expectedSegments) {
        const row = Array.from(dataTable.querySelectorAll<HTMLElement>('tbody tr')).find(candidate =>
          normalize(candidate.textContent).includes(category)
        )
        expect(row, `Expected data-table row for ${category}`).toBeTruthy()
        expect(row).toHaveTextContent(percentage)
      }

      // Expose paired category/percentage labels in the rendered Pie.
      await openAccordion(canvas, 'General')
      const displayLabels = canvas.getByRole('checkbox', { name: /^Display Category and Percentage Labels/ })
      await performAndAssert(
        'Category and percentage labels pair every segment with its exact percentage',
        () =>
          Array.from(canvasElement.querySelectorAll<SVGTextElement>('svg.animated-pie .pie-label')).map(label =>
            normalize(label.textContent)
          ),
        () => user.click(displayLabels),
        (before, after) =>
          before.length === 0 &&
          after.length === 4 &&
          expectedSegments.every(({ category, percentage }) =>
            after.some(label => label.includes(category) && label.includes(percentage))
          )
      )
      const pieLabels = Array.from(canvasElement.querySelectorAll<SVGTextElement>('svg.animated-pie .pie-label'))
      expect(pieLabels).toHaveLength(4)
      pieLabels.forEach(label => expect(label).toBeVisible())

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
