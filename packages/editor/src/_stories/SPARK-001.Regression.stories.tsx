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

// Source regression: docs/qa/regression-scripts/build-and-configure-a-sparkline.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Misc Scripts/Chart Scripts',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type Canvas = ReturnType<typeof within>
type User = ReturnType<typeof userEvent.setup>

const CSV = `Time Period,Outreach Participants
01/01/2016,10
02/01/2016,14
03/01/2016,12
04/01/2016,18
05/01/2016,17
06/01/2016,25`

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

const replaceText = async (user: User, input: HTMLElement, value: string) => {
  await user.clear(input)
  await user.type(input, value)
}

const getRequiredAlerts = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<HTMLElement>('.chart-required-fields-alerts .alert-info'))

const expectRequiredFields = (root: HTMLElement, expected: Array<{ section: string; field: string }>) => {
  const alerts = getRequiredAlerts(root)
  expect(alerts).toHaveLength(expected.length)
  expected.forEach(({ section, field }) => {
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

const assertAlertNavigation = async (root: HTMLElement, section: string, field: string, target: string, user: User) => {
  const canvas = within(root)
  const action = canvas.getByRole('button', { name: `Open ${section} and focus ${field}` })

  await performAndAssert(
    `The ${field} alert opens ${section} and focuses its required control`,
    () => ({
      expanded: root.querySelector(`[data-required-field-section="${target}"]`)?.getAttribute('aria-expanded'),
      focused: root.ownerDocument.activeElement?.getAttribute('data-required-field-control')
    }),
    () => user.click(action),
    (_before, after) => after.expanded === 'true' && after.focused === target
  )
}

const requiredAlertText = (root: HTMLElement) =>
  getRequiredAlerts(root)
    .map(alert => normalize(alert.textContent))
    .join('|')

export const SPARK001: Story = {
  name: 'SPARK-001 — Build and configure a Sparkline',
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
      // Choose Line and import deterministic local data.
      await user.click(await canvas.findByRole('button', { name: 'Line' }))
      expect(canvas.getByText('2. Import Data')).toBeVisible()
      await user.click(canvas.getByText('2. Import Data'))

      const upload = canvasElement.querySelector<HTMLInputElement>('input[type="file"]')
      expect(upload, 'Expected Data Import file input').toBeTruthy()
      await user.upload(upload!, new File([CSV], 'sparkline-regression.csv', { type: 'text/csv' }))

      expect(await canvas.findByText('Data Preview')).toBeVisible()
      await waitFor(() => expect(canvasElement.querySelectorAll('table.data-table tbody tr')).toHaveLength(6))
      for (const heading of ['Time Period', 'Outreach Participants']) {
        expect(canvasElement.querySelector(`table.data-table th[title="${heading}"]`)).toBeVisible()
      }
      const previewRows = canvasElement.querySelectorAll<HTMLElement>('table.data-table tbody tr')
      expect(normalize(previewRows[0].textContent)).toContain('01/01/2016')
      expect(normalize(previewRows[0].textContent)).toContain('10')
      expect(normalize(previewRows[5].textContent)).toContain('06/01/2016')
      expect(normalize(previewRows[5].textContent)).toContain('25')

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

      // Both alerts provide accessible navigation to their required controls.
      await assertAlertNavigation(canvasElement, 'Data Series', 'Add Data Series', 'data-series', user)
      await assertAlertNavigation(canvasElement, 'Date/Category Axis', 'Data Key', 'date-category-axis', user)

      // Follow the documented order: convert to Spark Line before adding the series.
      await openSection(canvas, canvasElement, 'General')
      const chartType = canvas.getByRole('combobox', { name: /^Chart Type/ }) as HTMLSelectElement
      await performAndAssert(
        'Spark Line removes unsupported Legend and Data Table sections',
        () => ({
          legend: Boolean(accordionButton(canvasElement, 'Legend')),
          dataTable: Boolean(accordionButton(canvasElement, 'Data Table')),
          sparklineRoot: Boolean(canvasElement.querySelector('.type-sparkline'))
        }),
        () => user.selectOptions(chartType, 'Spark Line'),
        (before, after) => before.legend && before.dataTable && !after.legend && !after.dataTable && after.sparklineRoot
      )
      expect(chartType).toHaveValue('Spark Line')

      await replaceText(user, canvas.getByRole('textbox', { name: /^Title/ }), 'Outreach Trend')
      await replaceText(
        user,
        canvas.getByLabelText(/Message/, { selector: 'textarea' }),
        'Monthly outreach participation'
      )
      await replaceText(user, canvas.getByLabelText(/Subtext\/Citation/), 'Source: regression fixture')

      // Add the series only after conversion; Data Key remains the sole requirement.
      await assertAlertNavigation(canvasElement, 'Data Series', 'Add Data Series', 'data-series', user)
      const dataSeries = canvas.getByRole('combobox', { name: /^Add Data Series/ }) as HTMLSelectElement
      await waitForOptionsToPopulate(dataSeries)
      await performAndAssert(
        'Adding Outreach Participants leaves only Data Key missing',
        () => ({
          alerts: requiredAlertText(canvasElement),
          sparkline: Boolean(canvasElement.querySelector('svg.sparkline'))
        }),
        () => user.selectOptions(dataSeries, 'Outreach Participants'),
        (before, after) =>
          before.alerts.includes('Add Data Series') &&
          before.alerts.includes('Data Key') &&
          !after.alerts.includes('Add Data Series') &&
          after.alerts.includes('Data Key') &&
          !after.sparkline
      )
      expectRequiredFields(canvasElement, [{ section: 'Date/Category Axis', field: 'Data Key' }])

      // Configure the date axis in its visible top-to-bottom order.
      await assertAlertNavigation(canvasElement, 'Date/Category Axis', 'Data Key', 'date-category-axis', user)
      const scalingType = canvas.getByRole('combobox', { name: /^Data Scaling Type/ }) as HTMLSelectElement
      await performAndAssert(
        'Date scaling reveals date-format controls',
        () => Boolean(canvas.queryByRole('textbox', { name: /^Date Parse Format/ })),
        () => user.selectOptions(scalingType, 'date'),
        (before, after) => !before && after
      )
      const dataKey = canvas.getByRole('combobox', { name: /^Data Key/ }) as HTMLSelectElement
      await waitForOptionsToPopulate(dataKey)
      await performAndAssert(
        'Selecting Time Period resolves requirements and renders one Sparkline',
        () => ({
          alerts: getRequiredAlerts(canvasElement).length,
          sparklines: canvasElement.querySelectorAll('svg.sparkline').length
        }),
        () => user.selectOptions(dataKey, 'Time Period'),
        (before, after) =>
          before.alerts === 1 && before.sparklines === 0 && after.alerts === 0 && after.sparklines === 1
      )
      const parseFormat = canvas.getByRole('textbox', { name: /^Date Parse Format/ })
      const displayFormat = canvas.getByRole('textbox', { name: /^AXIS DATE DISPLAY FORMAT/i })
      await performAndAssert(
        'Date formats render the exact imported endpoint dates',
        () =>
          Array.from(canvasElement.querySelectorAll<SVGTextElement>('svg.sparkline .visx-axis-tick text')).map(label =>
            normalize(label.textContent)
          ),
        async () => {
          await replaceText(user, parseFormat, '%m/%d/%Y')
          expect(parseFormat).toHaveValue('%m/%d/%Y')
          await replaceText(user, displayFormat, '%m/%d/%Y')
          expect(displayFormat).toHaveValue('%m/%d/%Y')
        },
        (_before, after) => after.length === 2 && after[0] === '01/01/2016' && after[1] === '06/01/2016'
      )

      await waitForAbsence('.chart-required-fields-alerts', canvasElement)
      await assertVisualizationRendered(canvasElement)

      // Verify the complete rendered Sparkline rather than only its editor controls.
      const sparkline = canvas.getByRole('img', {
        name: 'Spark Line chart with the title: Outreach Trend'
      }) as SVGSVGElement
      expect(sparkline).toHaveClass('sparkline')
      expect(sparkline).toHaveAttribute('height', '100')
      expect(canvasElement.querySelector('.cove-visualization.type-chart.type-sparkline')).toBeVisible()

      const groups = sparkline.querySelectorAll<SVGGElement>('.sparkline-group')
      expect(groups).toHaveLength(1)
      const line = groups[0].querySelector<SVGPathElement>('path')
      expect(line, 'Expected the Sparkline path').toBeTruthy()
      expect(line!.getAttribute('d')).toMatch(/^M.+L/)
      expect(line).toHaveAttribute('marker-end', 'url(#arrow--0)')
      expect(sparkline.querySelector('marker#arrow--0')).toBeInTheDocument()

      const tickLabels = Array.from(sparkline.querySelectorAll<SVGTextElement>('.visx-axis-tick text')).map(label =>
        normalize(label.textContent)
      )
      expect(tickLabels).toEqual(['01/01/2016', '06/01/2016'])
      expect(canvas.getByRole('heading', { name: 'Outreach Trend' })).toBeVisible()
      expect(canvasElement.querySelector('.introText')).toHaveTextContent('Monthly outreach participation')
      expect(canvasElement.querySelector('.subtext')).toHaveTextContent('Source: regression fixture')
      expect(canvasElement.querySelector('.legend-container')).not.toBeInTheDocument()
      expect(canvasElement.querySelector('.data-table-container')).not.toBeInTheDocument()

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
