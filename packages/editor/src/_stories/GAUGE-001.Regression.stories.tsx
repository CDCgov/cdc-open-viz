import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, spyOn, userEvent, waitFor, within } from 'storybook/test'
import {
  assertVisualizationRendered,
  openAccordion,
  performAndAssert,
  waitForEditor,
  waitForOptionsToPopulate,
  waitForPresence
} from '@cdc/core/helpers/testing'
import CdcEditor from '../CdcEditor'

// Source regression: docs/qa/regression-scripts/build-and-configure-a-gauge-chart.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Gauge Chart Scripts',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type Canvas = ReturnType<typeof within>

const CSV = `Category,Current,Previous,Denominator,Status,Report Date,Optional
Total,40,30,100,High,2026-01-15,Present
Other,20,15,100,Low,2026-02-20,
Zero,0,0,100,Stable,2026-03-01,Zero`

const normalize = (value: string | null | undefined) => value?.replace(/\s+/g, ' ').trim() || ''
const primaryText = (root: HTMLElement) =>
  normalize(root.querySelector('.cove-waffle-chart__data--primary')?.textContent)
const labeledSelect = (root: HTMLElement, name: string) =>
  Array.from(root.querySelectorAll('label'))
    .find(label => normalize(label.querySelector(':scope > .edit-label')?.textContent).startsWith(name))
    ?.querySelector('select') as HTMLSelectElement
const labeledInput = (root: HTMLElement, name: string) =>
  Array.from(root.querySelectorAll('label'))
    .find(label => normalize(label.querySelector(':scope > .edit-label')?.textContent).startsWith(name))
    ?.querySelector('input') as HTMLInputElement
const accordionButton = (root: HTMLElement, name: string) =>
  Array.from(root.querySelectorAll<HTMLElement>('[data-accordion-component="AccordionItemButton"]')).find(
    button => normalize(button.textContent).toLowerCase() === name.toLowerCase() && button.closest('.editor-panel')
  )
const openSection = async (canvas: Canvas, root: HTMLElement, name: string) => {
  await waitFor(() => expect(accordionButton(root, name), `Missing editor accordion ${name}`).toBeTruthy())
  if (accordionButton(root, name)?.getAttribute('aria-expanded') !== 'true') await openAccordion(canvas, name)
  await waitFor(() => expect(accordionButton(root, name)).toHaveAttribute('aria-expanded', 'true'))
}
const replaceText = async (input: HTMLElement, value: string) => {
  await userEvent.clear(input)
  if (value) await userEvent.type(input, value)
}
const pasteText = async (input: HTMLElement, value: string) => {
  await userEvent.clear(input)
  await userEvent.click(input)
  await userEvent.paste(value)
}

export const GAUGE001: Story = {
  name: 'GAUGE-001 — Build and configure a Gauge Chart',
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
      await user.click(await canvas.findByRole('button', { name: 'Gauge Chart' }))
      await user.click(canvas.getByText('2. Import Data'))
      const upload = canvasElement.querySelector<HTMLInputElement>('input[type="file"]')
      expect(upload).toBeTruthy()
      await user.upload(upload!, new File([CSV], 'gauge-regression.csv', { type: 'text/csv' }))
      expect(await canvas.findByText('Data Preview')).toBeVisible()
      for (const heading of ['Category', 'Current', 'Previous', 'Denominator', 'Status', 'Report Date', 'Optional']) {
        expect(canvasElement.querySelector(`table.data-table th[title="${heading}"]`)).toBeVisible()
      }
      await waitFor(() => expect(canvasElement.querySelectorAll('table.data-table tbody tr')).toHaveLength(3))
      const previewRows = canvasElement.querySelectorAll('table.data-table tbody tr')
      expect(normalize(previewRows[0].textContent)).toContain('Total')
      expect(normalize(previewRows[1].textContent)).toContain('Other')
      expect(normalize(previewRows[2].textContent)).toContain('Stable')

      const vertical = canvas.getByRole('button', { name: /^Vertical/ })
      await user.click(vertical)
      expect(vertical).toHaveClass('active')
      await user.click(canvas.getByRole('button', { name: 'No', exact: true }))
      await user.click(await canvas.findByRole('button', { name: 'Configure your visualization' }))
      await waitForEditor(canvas)
      for (const section of ['General', 'Data', 'Visual', 'Markup Variables']) {
        expect(accordionButton(canvasElement, section)).toBeVisible()
      }
      expect(accordionButton(canvasElement, 'Chart Settings')).toBeUndefined()

      await openSection(canvas, canvasElement, 'Data')
      const numerator = canvasElement.querySelector<HTMLSelectElement>('select[name="dataColumn"]')!
      const dataFunction = canvasElement.querySelector<HTMLSelectElement>('select[name="dataFunction"]')!
      await waitForOptionsToPopulate(numerator)
      await user.selectOptions(numerator, 'Current')
      await user.selectOptions(dataFunction, 'Sum')
      const done = canvas.queryByRole('button', { name: "I'm Done" })
      if (done) await user.click(done)
      await waitForPresence('.cove-gauge-chart', canvasElement)
      await assertVisualizationRendered(canvasElement)
      expect(primaryText(canvasElement)).toContain('60')

      // General
      await openSection(canvas, canvasElement, 'General')
      const chartType = canvas.getByLabelText(/Chart Type/) as HTMLSelectElement
      expect(chartType).toHaveValue('TP5 Gauge')
      await performAndAssert(
        'TP5 Gauge type changes rendered chart and restores',
        () => ({
          gauge: !!canvasElement.querySelector('.cove-gauge-chart'),
          waffle: !!canvasElement.querySelector('.cove-waffle-chart')
        }),
        async () => user.selectOptions(chartType, 'TP5 Waffle'),
        (before, after) => before.gauge && !before.waffle && !after.gauge && after.waffle
      )
      await user.selectOptions(canvas.getByLabelText(/Chart Type/), 'TP5 Gauge')
      await waitForPresence('.cove-gauge-chart', canvasElement)
      await replaceText(canvas.getByLabelText(/^Title$/, { selector: 'input' }), 'Gauge Regression')
      expect(await canvas.findByText('Gauge Regression')).toBeVisible()
      await performAndAssert(
        'Show title changes rendered heading',
        () => !!canvasElement.querySelector('.cdc-callout__heading'),
        () => user.click(canvas.getByLabelText(/show title/i)),
        (before, after) => before && !after
      )
      await user.click(canvas.getByLabelText(/show title/i))
      await performAndAssert(
        'Message renders',
        () =>
          normalize(
            canvasElement.querySelector('.cove-gauge-chart__content .cove-waffle-chart__data--text')?.textContent
          ),
        () => replaceText(canvas.getByLabelText(/Message/, { selector: 'textarea' }), 'Current gauge value'),
        (_before, after) => after === 'Current gauge value'
      )
      await performAndAssert(
        'Citation renders',
        () => normalize(canvasElement.querySelector('.cove-waffle-chart__subtext')?.textContent),
        () => replaceText(canvas.getByLabelText(/Subtext\/Citation/), 'Gauge citation'),
        (_before, after) => after === 'Gauge citation'
      )

      // Data calculation and validation.
      await openSection(canvas, canvasElement, 'Data')
      const getDataSelect = (name: string) => canvasElement.querySelector<HTMLSelectElement>(`select[name="${name}"]`)!
      await performAndAssert(
        'Mean changes numerator',
        () => primaryText(canvasElement),
        () => user.selectOptions(getDataSelect('dataFunction'), 'Mean (Average)'),
        (before, after) => before !== after && after.includes('20')
      )
      await user.selectOptions(getDataSelect('dataConditionalColumn'), 'Category')
      await user.selectOptions(getDataSelect('dataConditionalOperator'), '=')
      const comparate = canvasElement.querySelector<HTMLInputElement>(
        'input[name="null-null-dataConditionalComparate"]'
      )!
      await performAndAssert(
        'Text condition filters numerator',
        () => primaryText(canvasElement),
        () => replaceText(comparate, 'Total'),
        (before, after) => before !== after && after.includes('40')
      )
      await user.selectOptions(getDataSelect('dataConditionalColumn'), 'Current')
      await user.selectOptions(getDataSelect('dataConditionalOperator'), '>')
      await performAndAssert(
        'Numeric condition filters numerator',
        () => primaryText(canvasElement),
        () => replaceText(comparate, '30'),
        (_before, after) => after === '40%'
      )
      await replaceText(comparate, 'not-a-number')
      expect(await canvas.findByText('Non-numerical comparate values can only be used with = or ≠.')).toBeVisible()
      await user.selectOptions(getDataSelect('dataConditionalColumn'), '')
      await replaceText(comparate, '')
      await waitFor(() =>
        expect(
          canvas.queryByText('Non-numerical comparate values can only be used with = or ≠.')
        ).not.toBeInTheDocument()
      )

      const staticDenom = canvasElement.querySelector<HTMLInputElement>('input[name="null-null-dataDenom"]')!
      await performAndAssert(
        'Static denominator changes output',
        () => primaryText(canvasElement),
        () => replaceText(staticDenom, '200'),
        (before, after) => before !== after && after === '10%'
      )
      await user.click(canvasElement.querySelector<HTMLInputElement>('input[name="customDenom"]')!)
      const denomColumn = getDataSelect('dataDenomColumn')
      const denomFunction = getDataSelect('dataDenomFunction')
      await waitForOptionsToPopulate(denomColumn)
      await user.selectOptions(denomColumn, 'Denominator')
      await user.selectOptions(denomFunction, 'Sum')
      await waitFor(() => expect(primaryText(canvasElement)).toBe('7%'))

      await replaceText(canvas.getByLabelText('Prefix'), '$')
      await replaceText(canvas.getByLabelText('Suffix'), ' total')
      await replaceText(canvas.getByLabelText('Round'), '2')
      await waitFor(() => expect(primaryText(canvasElement)).toContain('$6.67 total'))
      await user.click(canvas.getByLabelText('Add commas'))
      expect(canvas.getByLabelText('Add commas')).not.toBeChecked()
      await replaceText(canvas.getByLabelText('Value Descriptor'), 'of all')
      await waitFor(() => expect(primaryText(canvasElement)).toContain('of all'))
      await user.click(canvas.getByLabelText('Show Percentage'))
      await waitFor(() => expect(primaryText(canvasElement)).toContain('$20.00 total'))
      expect(primaryText(canvasElement)).not.toContain('%')
      await user.click(canvas.getByLabelText('Show Denominator'))
      await waitFor(() => expect(primaryText(canvasElement)).toContain('300'))
      await user.click(canvas.getByLabelText('Show Denominator'))
      await waitFor(() => expect(primaryText(canvasElement)).not.toContain('300'))

      await user.selectOptions(getDataSelect('dataFunction'), 'Sum')
      const unfiltered = primaryText(canvasElement)
      await user.click(canvas.getByRole('button', { name: 'Add Filter' }))
      const filter = canvasElement.querySelector('fieldset.edit-block') as HTMLElement
      await user.selectOptions(filter.querySelectorAll('select')[0], 'Category')
      const filterValue = (canvasElement.querySelector('fieldset.edit-block') as HTMLElement).querySelectorAll(
        'select'
      )[1] as HTMLSelectElement
      await waitForOptionsToPopulate(filterValue)
      await user.selectOptions(filterValue, 'Other')
      await waitFor(() => expect(primaryText(canvasElement)).toBe('$20.00 total of all'))
      await user.click(canvas.getByRole('button', { name: 'Remove' }))
      await waitFor(() => expect(primaryText(canvasElement)).toBe(unfiltered))

      // Trends.
      await replaceText(canvas.getByLabelText('Prefix'), '')
      await replaceText(canvas.getByLabelText('Suffix'), '')
      await replaceText(canvas.getByLabelText('Round'), '0')
      await user.selectOptions(getDataSelect('dataFunction'), 'Mean (Average)')
      await user.selectOptions(labeledSelect(canvasElement, 'Trend Mode'), 'numeric')
      await waitFor(() => expect(getDataSelect('dataFunction')).toHaveValue('Mean (Average)'))
      await waitFor(() => expect(labeledSelect(canvasElement, 'Trend Mode')).toHaveValue('numeric'))
      await waitFor(() => expect(labeledSelect(canvasElement, 'Trend Numerator Column')).toBeTruthy())
      await user.selectOptions(labeledSelect(canvasElement, 'Trend Numerator Column'), 'Previous')
      expect(await canvas.findByRole('img', { name: 'Trend up' })).toBeVisible()
      await replaceText(labeledInput(canvasElement, 'Up Label'), 'Increasing')
      await waitFor(() =>
        expect(normalize(canvasElement.querySelector('.cove-trend-arrow__label')?.textContent)).toBe('Increasing')
      )
      await user.selectOptions(getDataSelect('dataColumn'), 'Previous')
      await waitFor(() => expect(primaryText(canvasElement)).toContain('15'))
      await user.selectOptions(labeledSelect(canvasElement, 'Trend Numerator Column'), 'Current')
      expect(await canvas.findByRole('img', { name: 'Trend down' })).toBeVisible()
      await replaceText(labeledInput(canvasElement, 'Down Label'), 'Decreasing')
      await waitFor(() =>
        expect(normalize(canvasElement.querySelector('.cove-trend-arrow__label')?.textContent)).toBe('Decreasing')
      )
      await performAndAssert(
        'Numeric threshold hides the down arrow',
        () => Boolean(canvasElement.querySelector('.cove-trend-arrow')),
        () => replaceText(labeledInput(canvasElement, 'Threshold'), '10'),
        (before, after) => before && !after
      )
      await user.selectOptions(getDataSelect('dataColumn'), 'Current')
      await waitFor(() => expect(primaryText(canvasElement)).toContain('20'))
      await user.selectOptions(labeledSelect(canvasElement, 'Trend Numerator Column'), 'Current')
      await user.click(canvas.getByLabelText('Show indicator for no change'))
      expect(await canvas.findByRole('img', { name: 'Trend flat' })).toBeVisible()
      await replaceText(labeledInput(canvasElement, 'No Change Label'), 'Stable')
      await waitFor(() =>
        expect(normalize(canvasElement.querySelector('.cove-trend-arrow__label')?.textContent)).toBe('Stable')
      )
      await replaceText(labeledInput(canvasElement, 'Trend description'), 'Compared with prior period')
      await waitFor(() =>
        expect(normalize(canvasElement.querySelector('.cove-waffle-chart__trend-footer-label')?.textContent)).toBe(
          'Compared with prior period'
        )
      )
      await user.selectOptions(getDataSelect('dataFunction'), 'Count')
      expect(
        await canvas.findByText('Numeric mode only supports Sum, Mean (Average), Median, Min, and Max.')
      ).toBeVisible()
      await user.selectOptions(labeledSelect(canvasElement, 'Trend Mode'), '')
      await user.selectOptions(getDataSelect('dataFunction'), 'Mean (Average)')
      await user.selectOptions(labeledSelect(canvasElement, 'Trend Mode'), 'categorical')
      await waitFor(() => expect(labeledSelect(canvasElement, 'Trend Column')).toBeTruthy())
      await user.selectOptions(labeledSelect(canvasElement, 'Trend Column'), 'Status')
      await user.click(canvas.getByRole('button', { name: 'Add Filter' }))
      const categoricalFilter = canvasElement.querySelector('fieldset.edit-block') as HTMLElement
      await user.selectOptions(categoricalFilter.querySelectorAll('select')[0], 'Status')
      const categoricalFilterValue = (
        canvasElement.querySelector('fieldset.edit-block') as HTMLElement
      ).querySelectorAll('select')[1] as HTMLSelectElement
      await waitForOptionsToPopulate(categoricalFilterValue)
      await user.selectOptions(categoricalFilterValue, 'High')
      await waitFor(() => expect(primaryText(canvasElement)).toContain('40'))
      const highTrendRow = Array.from(canvasElement.querySelectorAll<HTMLElement>('.cove-accordion__panel-row')).find(
        row => normalize(row.querySelector('.cove-accordion__panel-col')?.textContent) === 'High'
      )!
      expect(highTrendRow).toBeTruthy()
      await user.selectOptions(within(highTrendRow).getByRole('combobox'), 'down')
      await waitFor(() =>
        expect(normalize(canvasElement.querySelector('.cove-trend-arrow__label')?.textContent)).toBe('Decreasing')
      )
      await user.click(canvas.getByRole('button', { name: 'Remove' }))
      await user.selectOptions(labeledSelect(canvasElement, 'Trend Mode'), '')

      // TP5 Visual.
      await openSection(canvas, canvasElement, 'Visual')
      await user.click(canvas.getByLabelText('Use White Background Style'))
      expect(canvasElement.querySelector('.type-waffle-chart')).toHaveClass('white-background-style')
      expect(canvasElement.querySelector('.cdc-callout__flag')).not.toBeInTheDocument()
      await user.click(canvas.getByLabelText('Value Above Message'))
      expect(canvasElement.querySelector('.type-waffle-chart')).toHaveClass('use-wrap')

      // Shared Markup Variables lifecycle, formatting, locale, and null handling.
      await openSection(canvas, canvasElement, 'Markup Variables')
      await user.click(canvas.getByLabelText('Enable Markup Variables'))
      await user.click(canvas.getByRole('button', { name: /Add Variable/ }))
      const variable = () => canvasElement.querySelector('.variable-item') as HTMLElement
      const variableColumn = () => variable().querySelector('select[name="columnName"]') as HTMLSelectElement
      await user.click(within(variable()).getByRole('button', { name: 'Basic Settings' }))
      await user.selectOptions(variableColumn(), 'Current')
      await replaceText(within(variable()).getByLabelText('Variable Name'), 'Reported Value')
      await waitFor(() =>
        expect(within(variable()).getByLabelText('Tag (auto-generated)')).toHaveValue('{{reported-value}}')
      )
      await user.click(within(variable()).getByRole('button', { name: 'Conditions' }))
      await user.selectOptions(variable().querySelector('select[name="selectionMode"]') as HTMLSelectElement, 'no')
      await openSection(canvas, canvasElement, 'General')
      await pasteText(canvas.getByLabelText(/Message/, { selector: 'textarea' }), 'Reported value: {{reported-value}}')
      await waitFor(() =>
        expect(normalize(canvasElement.querySelector('.cove-waffle-chart__data--text')?.textContent)).toContain(
          'Reported value: 40'
        )
      )
      await openSection(canvas, canvasElement, 'Markup Variables')
      await user.click(within(variable()).getByRole('button', { name: 'Formatting Options' }))
      await user.click(within(variable()).getByLabelText('Format numbers with commas'))
      await user.type(within(variable()).getByRole('spinbutton'), '2')
      await waitFor(() =>
        expect(normalize(canvasElement.querySelector('.cove-waffle-chart__data--text')?.textContent)).toContain('40.00')
      )
      expect(within(variable()).getByLabelText('Hide section when value is null')).toBeVisible()
      await user.click(within(variable()).getByRole('button', { name: 'Conditions' }))
      await user.click(within(variable()).getByRole('button', { name: /Add Condition/ }))
      await user.selectOptions(within(variable()).getByLabelText('Column'), 'Category')
      await user.selectOptions(within(variable()).getByLabelText('Value'), 'Other')
      await waitFor(() =>
        expect(normalize(canvasElement.querySelector('.cove-waffle-chart__data--text')?.textContent)).toContain(
          'Reported value: 20.00'
        )
      )
      await user.click(within(variable()).getByRole('button', { name: 'Remove Condition' }))
      await user.click(within(variable()).getByRole('button', { name: 'Basic Settings' }))
      await user.selectOptions(variableColumn(), 'Report Date')
      await user.click(within(variable()).getByRole('button', { name: 'Formatting Options' }))
      await replaceText(within(variable()).getByLabelText('Date Parse Format'), '%Y-%m-%d')
      await replaceText(within(variable()).getByLabelText('Date Display Format'), '%B %-d, %Y')
      await openSection(canvas, canvasElement, 'General')
      await pasteText(canvas.getByLabelText(/Message/, { selector: 'textarea' }), 'Report date: {{report-date}}')
      await waitFor(() =>
        expect(normalize(canvasElement.querySelector('.cove-waffle-chart__data--text')?.textContent)).toContain(
          'January 15, 2026'
        )
      )
      await user.selectOptions(canvas.getByLabelText(/Language for dates and numbers/), 'es-MX')
      await waitFor(() =>
        expect(normalize(canvasElement.querySelector('.cove-waffle-chart__data--text')?.textContent)).toContain(
          'enero 15, 2026'
        )
      )
      await openSection(canvas, canvasElement, 'Markup Variables')
      await user.click(within(variable()).getByRole('button', { name: 'Basic Settings' }))
      await user.selectOptions(variableColumn(), 'Optional')
      expect(within(variable()).getByLabelText('Tag (auto-generated)')).toHaveValue('{{optional}}')
      await openSection(canvas, canvasElement, 'General')
      await pasteText(canvas.getByLabelText(/Message/, { selector: 'textarea' }), 'Optional: {{optional}}')
      await waitFor(() =>
        expect(normalize(canvasElement.querySelector('.cove-waffle-chart__data--text')?.textContent)).toContain(
          'Optional: Present'
        )
      )
      await openSection(canvas, canvasElement, 'Markup Variables')
      await user.click(within(variable()).getByRole('button', { name: 'Conditions' }))
      await user.click(within(variable()).getByRole('button', { name: /Add Condition/ }))
      await user.selectOptions(within(variable()).getByLabelText('Column'), 'Category')
      await user.selectOptions(within(variable()).getByLabelText('Value'), 'Other')
      await user.click(within(variable()).getByRole('button', { name: 'Formatting Options' }))
      const hideOnNull = within(variable()).getByLabelText('Hide section when value is null')
      await user.click(hideOnNull)
      expect(hideOnNull).toBeChecked()
      await waitFor(() =>
        expect(normalize(canvasElement.querySelector('.cove-waffle-chart__data--text')?.textContent)).toBe('Optional:')
      )
      await user.click(within(variable()).getByRole('button', { name: 'Close' }))
      await user.click(within(variable()).getByRole('button', { name: 'Edit' }))
      await user.click(canvas.getByRole('button', { name: /Add Variable/ }))
      const unnamed = canvas.getByText('Unnamed Variable').closest('.variable-item') as HTMLElement
      const confirmDelete = spyOn(window, 'confirm').mockReturnValue(true)
      try {
        await user.click(within(unnamed).getByRole('button', { name: 'Delete Variable' }))
        await waitFor(() => expect(canvasElement.querySelectorAll('.variable-item')).toHaveLength(1))
      } finally {
        confirmDelete.mockRestore()
      }

      // Advanced Editor.
      const advancedToggle = canvasElement.querySelector<HTMLElement>('.advanced-toggle-link')!
      await user.click(advancedToggle)
      expect(canvas.getByRole('link', { name: /Get Help with Waffle Chart/ })).toBeVisible()
      await user.dblClick(canvasElement.querySelector('#title_display') as HTMLElement)
      await replaceText(canvasElement.querySelector('#title_textarea') as HTMLTextAreaElement, 'Advanced Gauge')
      await user.keyboard('{Enter}')
      await user.click(canvas.getByRole('button', { name: 'Apply Configuration Changes' }))
      await waitFor(() =>
        expect(normalize(canvasElement.querySelector('.cdc-callout__heading')?.textContent)).toBe('Advanced Gauge')
      )

      const allowlistedWarnings = consoleErrors.filter(
        message =>
          (message.startsWith('Warning: A component is changing an uncontrolled input to be controlled.') &&
            message.includes('DataPanel')) ||
          (message.startsWith('Warning: An update to %s inside a test was not wrapped in act(...)') &&
            message.includes('json-edit-react'))
      )
      const unexpectedConsoleErrors = consoleErrors.filter(message => !allowlistedWarnings.includes(message))
      expect(unexpectedConsoleErrors, `Unexpected console errors:\n${unexpectedConsoleErrors.join('\n')}`).toEqual([])
      expect(unhandledRejections, 'Unexpected unhandled rejections').toEqual([])
      expect(windowErrors, 'Unexpected window errors').toEqual([])
    } finally {
      console.error = originalConsoleError
      window.removeEventListener('unhandledrejection', onRejection)
      window.removeEventListener('error', onWindowError)
    }
  }
}
