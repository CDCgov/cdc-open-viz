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

// Source regression: docs/qa/regression-scripts/build-and-configure-a-waffle-chart.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Charts/Scripts',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type Canvas = ReturnType<typeof within>

const CSV = `Region,Year,Participants,Report Date,Optional
North,2024,20,2026-01-15,Present
South,2024,15,2026-02-20,
North,2025,10,2026-03-01,Zero
West,2025,15,2026-04-10,`

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

const replaceText = async (input: HTMLElement, value: string) => {
  await userEvent.clear(input)
  if (value) await userEvent.type(input, value)
}

const pasteText = async (user: ReturnType<typeof userEvent.setup>, input: HTMLElement, value: string) => {
  await user.clear(input)
  await user.click(input)
  await user.paste(value)
}

const metric = (root: HTMLElement) => normalize(root.querySelector('.cove-waffle-chart__data--primary')?.textContent)

const waffleNodes = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<SVGElement>('.cove-waffle-chart .cdc-waffle-chart__node'))

const filledNodeCount = (root: HTMLElement) =>
  waffleNodes(root).filter(node => Number(node.getAttribute('fill-opacity')) === 1).length

const expectMetricAndNodes = async (root: HTMLElement, expectedMetric: string, expectedFilled: number) => {
  await waitFor(() => {
    expect(metric(root)).toBe(expectedMetric)
    expect(filledNodeCount(root)).toBe(expectedFilled)
  })
}

const filterRows = (root: HTMLElement) =>
  Array.from(root.querySelectorAll<HTMLFieldSetElement>('.filters-list fieldset.edit-block'))

const filterSelect = (row: HTMLFieldSetElement, label: string) =>
  within(row).getByRole('combobox', { name: label }) as HTMLSelectElement

export const WAFFLE001: Story = {
  name: 'CHART-004 — Waffle Chart',
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
      // Chooser and deterministic Data Import.
      await user.click(await canvas.findByRole('button', { name: 'Waffle Chart' }))
      await user.click(canvas.getByText('2. Import Data'))
      const upload = canvasElement.querySelector<HTMLInputElement>('input[type="file"]')
      expect(upload, 'Expected Data Import file input').toBeTruthy()
      await user.upload(upload!, new File([CSV], 'waffle-chart-regression.csv', { type: 'text/csv' }))

      expect(await canvas.findByText('Data Preview')).toBeVisible()
      for (const heading of ['Region', 'Year', 'Participants', 'Report Date', 'Optional']) {
        expect(canvasElement.querySelector(`table.data-table th[title="${heading}"]`)).toBeVisible()
      }
      const previewRows = canvasElement.querySelectorAll('table.data-table tbody tr')
      expect(previewRows).toHaveLength(4)
      expect(
        Array.from(previewRows, row => Array.from(row.querySelectorAll('td'), cell => normalize(cell.textContent)))
      ).toEqual([
        ['North', '2024', '20', '2026-01-15', 'Present'],
        ['South', '2024', '15', '2026-02-20', ''],
        ['North', '2025', '10', '2026-03-01', 'Zero'],
        ['West', '2025', '15', '2026-04-10', '']
      ])

      const vertical = canvas.getByRole('button', { name: /^Vertical/ })
      await user.click(vertical)
      expect(vertical).toHaveClass('active')
      const noSeries = canvas.getByRole('button', { name: 'No', exact: true })
      const yesSeries = canvas.getByRole('button', { name: 'Yes', exact: true })
      await performAndAssert(
        'No is the active multiple-series selection',
        () => ({ no: noSeries.style.backgroundColor, yes: yesSeries.style.backgroundColor }),
        async () => {
          await user.click(noSeries)
          await user.tab()
        },
        (_before, after) => after.no === 'rgb(1, 93, 170)' && after.yes === 'rgb(0, 52, 93)'
      )

      await user.click(await canvas.findByRole('button', { name: 'Configure your visualization' }))
      await waitForEditor(canvas)
      for (const section of ['General', 'Data', 'Chart Settings', 'Visual', 'Markup Variables']) {
        expect(accordionButton(canvasElement, section)).toBeVisible()
      }

      // TP5 Waffle Visual treatment is reversible and changes rendered output.
      await openSection(canvas, canvasElement, 'Visual')
      const tp5WhiteBackground = canvas.getByLabelText('Use White Background Style')
      const tp5VisualState = () => {
        const callout = canvasElement.querySelector<HTMLElement>('.cdc-callout')
        return {
          whiteBackground: Boolean(canvasElement.querySelector('.type-waffle-chart.white-background-style')),
          dataCallout: Boolean(callout?.classList.contains('cdc-callout--data')),
          flag: Boolean(callout?.querySelector('.cdc-callout__flag'))
        }
      }
      await performAndAssert(
        'TP5 Waffle enables white background style',
        tp5VisualState,
        () => user.click(tp5WhiteBackground),
        (before, after) =>
          !before.whiteBackground &&
          before.dataCallout &&
          before.flag &&
          after.whiteBackground &&
          !after.dataCallout &&
          !after.flag
      )
      await performAndAssert(
        'TP5 Waffle restores the data callout style',
        tp5VisualState,
        () => user.click(tp5WhiteBackground),
        (before, after) =>
          before.whiteBackground &&
          !before.dataCallout &&
          !before.flag &&
          !after.whiteBackground &&
          after.dataCallout &&
          after.flag
      )

      // Use standard Waffle before asserting authorable theme colors.
      await openSection(canvas, canvasElement, 'General')
      const chartType = canvas.getByLabelText('Chart Type') as HTMLSelectElement
      expect(chartType).toHaveValue('TP5 Waffle')
      await performAndAssert(
        'Standard Waffle renders nodes',
        () => ({ type: chartType.value, nodes: waffleNodes(canvasElement).length }),
        () => user.selectOptions(chartType, 'Waffle'),
        (_before, after) => after.type === 'Waffle' && after.nodes === 100
      )

      // Required Data setup establishes the deterministic 60% baseline.
      await openSection(canvas, canvasElement, 'Data')
      const dataColumn = canvas.getByLabelText('Data Column') as HTMLSelectElement
      const dataFunction = canvas.getByLabelText('Data Function') as HTMLSelectElement
      await waitForOptionsToPopulate(dataColumn)
      await user.selectOptions(dataColumn, 'Participants')
      await user.selectOptions(dataFunction, 'Sum')
      await waitForPresence('.cove-waffle-chart__data--primary', canvasElement)
      await assertVisualizationRendered(canvasElement)
      await expectMetricAndNodes(canvasElement, '60%', 60)

      // Numerator functions and every conditional operator produce exact metrics and node counts.
      const numeratorFunctions = [
        ['Count', '4%', 4],
        ['Max', '20%', 20],
        ['Mean (Average)', '15%', 15],
        ['Median', '15%', 15],
        ['Min', '10%', 10],
        ['Sum', '60%', 60]
      ] as const
      for (const [functionName, expectedMetric, expectedFilled] of numeratorFunctions) {
        await performAndAssert(
          `${functionName} calculates the exact Waffle numerator`,
          () => ({
            functionName: dataFunction.value,
            metric: metric(canvasElement),
            filled: filledNodeCount(canvasElement)
          }),
          () => user.selectOptions(dataFunction, functionName),
          (_before, after) =>
            after.functionName === functionName && after.metric === expectedMetric && after.filled === expectedFilled
        )
      }

      const conditionalColumn = canvasElement.querySelector<HTMLSelectElement>('select[name="dataConditionalColumn"]')!
      const conditionalOperator = canvasElement.querySelector<HTMLSelectElement>(
        'select[name="dataConditionalOperator"]'
      )!
      const conditionalComparison = canvasElement.querySelector<HTMLInputElement>(
        'input[name="null-null-dataConditionalComparate"]'
      )!
      const numeratorConditions = [
        ['Year', '=', '2024', '35%', 35],
        ['Year', '≠', '2024', '25%', 25],
        ['Participants', '<', '15', '10%', 10],
        ['Participants', '<=', '15', '40%', 40],
        ['Participants', '>', '15', '20%', 20],
        ['Participants', '>=', '15', '50%', 50],
        ['Participants', '=', '10', '10%', 10],
        ['Participants', '≠', '10', '50%', 50]
      ] as const
      for (const [column, operator, comparison, expectedMetric, expectedFilled] of numeratorConditions) {
        await performAndAssert(
          `${column} ${operator} ${comparison} calculates the exact Waffle numerator`,
          () => ({
            column: conditionalColumn.value,
            operator: conditionalOperator.value,
            comparison: conditionalComparison.value,
            metric: metric(canvasElement),
            filled: filledNodeCount(canvasElement)
          }),
          async () => {
            await user.selectOptions(conditionalColumn, column)
            await user.selectOptions(conditionalOperator, operator)
            await replaceText(conditionalComparison, comparison)
          },
          (_before, after) =>
            after.column === column &&
            after.operator === operator &&
            after.comparison === comparison &&
            after.metric === expectedMetric &&
            after.filled === expectedFilled
        )
      }
      await user.selectOptions(conditionalColumn, '')
      await replaceText(conditionalComparison, '')
      await user.selectOptions(dataFunction, 'Sum')
      await expectMetricAndNodes(canvasElement, '60%', 60)

      // Supported HTML is parsed semantically across all three General fields.
      await openSection(canvas, canvasElement, 'General')
      await pasteText(user, canvas.getByLabelText('Title'), '<strong>Waffle</strong> <em>Regression</em>')
      await pasteText(
        user,
        canvas.getByLabelText(/Message/, { selector: 'textarea' }),
        'Participants<sup>1</sup> <strong>within target</strong>'
      )
      await pasteText(user, canvas.getByLabelText(/Subtext\/Citation/), '<em>Source</em><sub>2026</sub>')

      await waitFor(() => {
        const title = canvasElement.querySelector<HTMLElement>('.cove-visualization__header h2')
        const message = canvasElement.querySelector<HTMLElement>('.cove-waffle-chart__data--text')
        const subtext = canvasElement.querySelector<HTMLElement>('.cove-waffle-chart__subtext')
        expect(normalize(title?.textContent)).toBe('Waffle Regression')
        expect(title?.querySelector('strong')).toHaveTextContent('Waffle')
        expect(title?.querySelector('em')).toHaveTextContent('Regression')
        expect(normalize(message?.textContent)).toBe('Participants1 within target')
        expect(message?.querySelector('sup')).toHaveTextContent('1')
        expect(message?.querySelector('strong')).toHaveTextContent('within target')
        expect(normalize(subtext?.textContent)).toBe('Source2026')
        expect(subtext?.querySelector('em')).toHaveTextContent('Source')
        expect(subtext?.querySelector('sub')).toHaveTextContent('2026')
        for (const element of [title, message, subtext]) expect(element?.textContent).not.toContain('<')
      })

      // Formatting changes and restores the exact rendered metric.
      await openSection(canvas, canvasElement, 'Data')
      await replaceText(canvas.getByLabelText('Prefix'), '~')
      await replaceText(canvas.getByLabelText('Suffix'), ' percent')
      await replaceText(canvas.getByLabelText('Round'), '1')
      await waitFor(() => expect(metric(canvasElement)).toBe('~60.0 percent'))

      await replaceText(canvas.getByLabelText('Prefix'), '')
      await replaceText(canvas.getByLabelText('Suffix'), '%')
      await replaceText(canvas.getByLabelText('Round'), '0')
      await expectMetricAndNodes(canvasElement, '60%', 60)

      // Two-filter lifecycle: add Region then Year, remove Year then Region.
      await user.click(canvas.getByRole('button', { name: 'Add Filter' }))
      await waitFor(() => expect(filterRows(canvasElement)).toHaveLength(1))
      let rows = filterRows(canvasElement)
      const regionColumn = filterSelect(rows[0], 'Column')
      await waitForOptionsToPopulate(regionColumn)
      await user.selectOptions(regionColumn, 'Region')
      const regionValue = filterSelect(rows[0], 'Column Value')
      await waitForOptionsToPopulate(regionValue)
      await user.selectOptions(regionValue, 'North')
      await expectMetricAndNodes(canvasElement, '30%', 30)

      await user.click(canvas.getByRole('button', { name: 'Add Filter' }))
      await waitFor(() => expect(filterRows(canvasElement)).toHaveLength(2))
      rows = filterRows(canvasElement)
      const yearColumn = filterSelect(rows[1], 'Column')
      await waitForOptionsToPopulate(yearColumn)
      await user.selectOptions(yearColumn, 'Year')
      const yearValue = filterSelect(rows[1], 'Column Value')
      await waitForOptionsToPopulate(yearValue)
      await user.selectOptions(yearValue, '2024')
      await expectMetricAndNodes(canvasElement, '20%', 20)

      await user.click(within(filterRows(canvasElement)[1]).getByRole('button', { name: 'Remove' }))
      await waitFor(() => expect(filterRows(canvasElement)).toHaveLength(1))
      await expectMetricAndNodes(canvasElement, '30%', 30)
      await user.click(within(filterRows(canvasElement)[0]).getByRole('button', { name: 'Remove' }))
      await waitFor(() => expect(filterRows(canvasElement)).toHaveLength(0))
      await expectMetricAndNodes(canvasElement, '60%', 60)

      // Representative chart settings change rendered structure and layout.
      await openSection(canvas, canvasElement, 'Chart Settings')
      await performAndAssert(
        'Square shape renders rectangles',
        () => ({
          rects: canvasElement.querySelectorAll('.cove-waffle-chart rect.cdc-waffle-chart__node').length,
          circles: canvasElement.querySelectorAll('.cove-waffle-chart circle.cdc-waffle-chart__node').length
        }),
        () => user.selectOptions(canvas.getByLabelText('Shape'), 'square'),
        (before, after) => before.rects === 0 && before.circles === 100 && after.rects === 100 && after.circles === 0
      )
      await performAndAssert(
        'Vertical layout changes the rendered Waffle class',
        () => Boolean(canvasElement.querySelector('.cove-waffle-chart--verical')),
        () => user.selectOptions(canvas.getByLabelText('Layout'), 'vertical'),
        (before, after) => !before && after
      )

      // Exact theme color and every standard Visual checkbox, each restored after verification.
      await openSection(canvas, canvasElement, 'Visual')
      await performAndAssert(
        'Purple theme sets exact node fill',
        () => waffleNodes(canvasElement).map(node => node.getAttribute('fill')?.toLowerCase()),
        () => user.click(canvas.getByRole('button', { name: 'theme-purple' })),
        (before, after) =>
          before.some(fill => fill !== '#712177') && after.length === 100 && after.every(fill => fill === '#712177')
      )

      const body = canvasElement.querySelector<HTMLElement>('.cove-visualization__body')
      expect(body).toBeTruthy()
      const assertReversibleVisualCheckbox = async (label: string, className: string, initiallyPresent = false) => {
        const checkbox = canvas.getByLabelText(label)
        const hasClass = () => body!.classList.contains(className)
        expect(hasClass(), `${label} should start ${initiallyPresent ? 'enabled' : 'disabled'}`).toBe(initiallyPresent)
        await performAndAssert(
          `${label} toggles rendered treatment`,
          hasClass,
          () => user.click(checkbox),
          (before, after) => before === initiallyPresent && after === !initiallyPresent
        )
        await performAndAssert(
          `${label} restores rendered treatment`,
          hasClass,
          () => user.click(checkbox),
          (before, after) => before === !initiallyPresent && after === initiallyPresent
        )
      }

      await assertReversibleVisualCheckbox('Display Border', 'component--has-legacy-border', true)
      expect(body).not.toHaveClass('no-borders')
      await assertReversibleVisualCheckbox('Use Border Color Theme', 'component--has-border-color-theme')
      await assertReversibleVisualCheckbox('Use Accent Style', 'component--has-accent')
      await assertReversibleVisualCheckbox('Use Theme Background Color', 'component--has-background')
      await assertReversibleVisualCheckbox('Hide Background Color', 'component--hide-background-color')

      // Shared Markup Variables lifecycle, formatting, conditions, locale, and null handling.
      await openSection(canvas, canvasElement, 'Markup Variables')
      await user.click(canvas.getByLabelText('Enable Markup Variables'))
      await user.click(canvas.getByRole('button', { name: /Add Variable/ }))
      const variable = () => canvasElement.querySelector('.variable-item') as HTMLElement
      const variableColumn = () => variable().querySelector('select[name="columnName"]') as HTMLSelectElement
      await user.click(within(variable()).getByRole('button', { name: 'Basic Settings' }))
      await user.selectOptions(variableColumn(), 'Participants')
      await replaceText(within(variable()).getByLabelText('Variable Name'), 'Participant Total')
      await waitFor(() =>
        expect(within(variable()).getByLabelText('Tag (auto-generated)')).toHaveValue('{{participant-total}}')
      )
      await user.click(within(variable()).getByRole('button', { name: 'Conditions' }))
      await user.selectOptions(variable().querySelector('select[name="selectionMode"]') as HTMLSelectElement, 'no')
      await openSection(canvas, canvasElement, 'General')
      await pasteText(
        user,
        canvas.getByLabelText(/Message/, { selector: 'textarea' }),
        'Participants: {{participant-total}}'
      )
      await waitFor(() =>
        expect(normalize(canvasElement.querySelector('.cove-waffle-chart__data--text')?.textContent)).toContain(
          'Participants: 20'
        )
      )

      await openSection(canvas, canvasElement, 'Markup Variables')
      await user.click(within(variable()).getByRole('button', { name: 'Formatting Options' }))
      await user.click(within(variable()).getByLabelText('Format numbers with commas'))
      await user.type(within(variable()).getByRole('spinbutton'), '2')
      await waitFor(() =>
        expect(normalize(canvasElement.querySelector('.cove-waffle-chart__data--text')?.textContent)).toContain(
          'Participants: 20.00'
        )
      )
      expect(within(variable()).getByLabelText('Hide section when value is null')).toBeVisible()
      await user.click(within(variable()).getByRole('button', { name: 'Conditions' }))
      await user.click(within(variable()).getByRole('button', { name: /Add Condition/ }))
      await user.selectOptions(within(variable()).getByLabelText('Column'), 'Region')
      await user.selectOptions(within(variable()).getByLabelText('Value'), 'South')
      await waitFor(() =>
        expect(normalize(canvasElement.querySelector('.cove-waffle-chart__data--text')?.textContent)).toContain(
          'Participants: 15.00'
        )
      )
      await user.click(within(variable()).getByRole('button', { name: 'Remove Condition' }))

      await user.click(within(variable()).getByRole('button', { name: 'Basic Settings' }))
      await user.selectOptions(variableColumn(), 'Report Date')
      await user.click(within(variable()).getByRole('button', { name: 'Formatting Options' }))
      await replaceText(within(variable()).getByLabelText('Date Parse Format'), '%Y-%m-%d')
      await replaceText(within(variable()).getByLabelText('Date Display Format'), '%B %-d, %Y')
      await openSection(canvas, canvasElement, 'General')
      await pasteText(user, canvas.getByLabelText(/Message/, { selector: 'textarea' }), 'Report: {{report-date}}')
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
      await pasteText(user, canvas.getByLabelText(/Message/, { selector: 'textarea' }), 'Optional: {{optional}}')
      await waitFor(() =>
        expect(normalize(canvasElement.querySelector('.cove-waffle-chart__data--text')?.textContent)).toContain(
          'Optional: Present'
        )
      )
      await openSection(canvas, canvasElement, 'Markup Variables')
      await user.click(within(variable()).getByRole('button', { name: 'Conditions' }))
      await user.click(within(variable()).getByRole('button', { name: /Add Condition/ }))
      await user.selectOptions(within(variable()).getByLabelText('Column'), 'Region')
      await user.selectOptions(within(variable()).getByLabelText('Value'), 'South')
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
