import type { Meta, StoryObj } from '@storybook/react-vite'
import { Markdown } from '@storybook/addon-docs/blocks'
import { expect, spyOn, userEvent, waitFor, within } from 'storybook/test'
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

// Source regression: docs/qa/regression-scripts/build-and-configure-a-data-bite.md

const MISC_SCRIPT_DOCS = `# Miscellaneous regression scripts

Named regressions for visualization types outside maps, charts, and dashboards.

## Coverage

- **DB-001 — Data Bite:** Builds and configures a Data Bite, including value functions, comparisons, filters, trend mappings, colors, static and dynamic images, and markup variables.
- **TABLE-001 — Columns Section:** Exercises Data Table column selection, labels, formatting, ordering, and visible output.
- **TABLE-002 — Data Table Section:** Exercises table presentation, searching, sorting, sizing, and supporting accessibility settings.
- **TABLE-003 — Filters Section:** Exercises Data Table filter creation, updates, removal, and rendered results.
- **MARKUP-001 — General Section:** Exercises Markup Include titles and general presentation settings.
- **MARKUP-002 — Content Editor:** Exercises authored markup content and its rendered output.
- **MARKUP-003 — Visual Section:** Exercises Markup Include visual styling controls and observable presentation changes.
- **MISC-001 — Data Table Empty-Editor Workflow:** Chooses Data Table, imports a CSV, completes data description, and verifies finished table output.
- **MISC-002 — Markup Include Empty-Editor Workflow:** Chooses Markup Include, authors a title and inline content, and verifies rendered output.
- **MISC-003 — Data Table Dashboard Embedding:** Verifies a configured table inside a dashboard.
- **MISC-004 — Data Bite Dashboard Embedding:** Verifies configured Data Bite content inside a dashboard.
- **MISC-005 — Markup Include Dashboard Embedding:** Verifies configured Markup Include content inside a dashboard.
- **MISC-006 — Save and Reload Markup Configuration:** Serializes and reloads a Markup Include configuration while preserving output.`

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Misc/Data Bite',
  component: CdcEditor,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: () => <Markdown>{MISC_SCRIPT_DOCS}</Markdown>,
      description: { component: MISC_SCRIPT_DOCS }
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type Canvas = ReturnType<typeof within>
type User = ReturnType<typeof userEvent.setup>

const CSV = `Category,Current,Previous,Status,Report Date,Optional,Function Value,Mode Value
Total,1234,1200,High,2026-01-15,Present,10,10
Other,5678,6000,Low,2026-02-20,,4,2
Zero,0,0,Stable,2026-03-01,Zero,1,2`

const DEFAULT_IMAGE =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20"%3E%3Crect width="20" height="20" fill="%23005ea8"/%3E%3C/svg%3E'
const MATCHED_IMAGE =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20"%3E%3Ccircle cx="10" cy="10" r="10" fill="%23f45b53"/%3E%3C/svg%3E'

const normalize = (value: string | null | undefined) => value?.replace(/\s+/g, ' ').trim() || ''
const metric = (root: HTMLElement) => normalize(root.querySelector('.cdc-callout__value, .bite-value')?.textContent)
const renderedMessage = (root: HTMLElement) =>
  normalize(root.querySelector('.cdc-callout__content p.mb-0, .bite-text')?.textContent)

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

const pasteText = async (user: User, input: HTMLElement, value: string) => {
  await user.clear(input)
  await user.click(input)
  await user.paste(value)
}

export const DB001: Story = {
  name: 'DB-001 — Build and configure a Data Bite',
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
      await user.click(await canvas.findByRole('button', { name: 'Data Bite' }))
      await user.click(canvas.getByText('2. Import Data'))
      const upload = canvasElement.querySelector<HTMLInputElement>('input[type="file"]')
      expect(upload, 'Expected Data Import file input').toBeTruthy()
      await user.upload(upload!, new File([CSV], 'data-bite-regression.csv', { type: 'text/csv' }))
      expect(await canvas.findByText('Data Preview')).toBeVisible()
      for (const heading of [
        'Category',
        'Current',
        'Previous',
        'Status',
        'Report Date',
        'Optional',
        'Function Value',
        'Mode Value'
      ]) {
        expect(canvasElement.querySelector(`table.data-table th[title="${heading}"]`)).toBeVisible()
      }
      const previewRows = canvasElement.querySelectorAll('table.data-table tbody tr')
      expect(previewRows).toHaveLength(3)
      expect(normalize(previewRows[0].textContent)).toContain('Total')
      expect(normalize(previewRows[0].textContent)).toContain('1234')
      expect(normalize(previewRows[1].textContent)).toContain('Other')
      expect(normalize(previewRows[2].textContent)).toContain('Stable')

      const vertical = canvas.getByRole('button', { name: /^Vertical/ })
      await user.click(vertical)
      expect(vertical).toHaveClass('active')
      await user.click(canvas.getByRole('button', { name: 'No', exact: true }))
      await user.click(await canvas.findByRole('button', { name: 'Configure your visualization' }))
      await waitForEditor(canvas)
      for (const section of ['General', 'Data', 'Visual', 'Data-Driven Colors', 'Markup Variables']) {
        expect(accordionButton(canvasElement, section)).toBeVisible()
      }
      expect(canvas.queryByRole('button', { name: /^Images?$/ })).not.toBeInTheDocument()

      // Required fields first so every General assertion targets rendered output.
      await openSection(canvas, canvasElement, 'Data')
      const dataColumn = canvas.getByLabelText('Data Column') as HTMLSelectElement
      const dataFunction = canvas.getByLabelText('Data Function') as HTMLSelectElement
      await waitForOptionsToPopulate(dataColumn)
      await user.selectOptions(dataColumn, 'Current')
      await user.selectOptions(dataFunction, 'Pass Through')
      await waitForPresence('.cdc-callout__value', canvasElement)
      await assertVisualizationRendered(canvasElement)
      expect(metric(canvasElement)).toBe('1,234%')

      // General.
      await openSection(canvas, canvasElement, 'General')
      const style = canvas.getByLabelText('Data Bite Style') as HTMLSelectElement
      expect(style).toHaveValue('tp5')
      await replaceText(canvas.getByLabelText('Title'), 'Data Bite Regression')
      expect(await canvas.findByText('Data Bite Regression')).toBeVisible()
      await performAndAssert(
        'Show Title changes rendered title',
        () => Boolean(canvas.queryByText('Data Bite Regression')),
        () => user.click(canvas.getByLabelText('Show Title')),
        (before, after) => before && !after
      )
      await user.click(canvas.getByLabelText('Show Title'))

      // Supported HTML is parsed semantically across all three General text fields.
      const tp5Root = canvasElement.querySelector<HTMLElement>('.bite__style--tp5')!
      expect(tp5Root).toBeVisible()

      await performAndAssert(
        'Title parses supported HTML',
        () => {
          const title = tp5Root.querySelector<HTMLElement>('.cdc-callout__heading')
          return {
            text: normalize(title?.textContent),
            strong: normalize(title?.querySelector(':scope > span > strong')?.textContent),
            emphasis: normalize(title?.querySelector(':scope > span > em')?.textContent)
          }
        },
        () => pasteText(user, canvas.getByLabelText('Title'), '<strong>Data Bite</strong> <em>Regression</em>'),
        (before, after) =>
          !before.strong &&
          !before.emphasis &&
          after.text === 'Data Bite Regression' &&
          after.strong === 'Data Bite' &&
          after.emphasis === 'Regression'
      )
      expect(tp5Root.querySelector('.cdc-callout__heading')).toBeVisible()

      await performAndAssert(
        'Message parses supported HTML',
        () => {
          const message = tp5Root.querySelector<HTMLElement>('.cdc-callout__content > p:first-child')
          return {
            text: normalize(message?.textContent),
            superscript: normalize(message?.querySelector(':scope > sup')?.textContent),
            strong: normalize(message?.querySelector(':scope > strong')?.textContent)
          }
        },
        () =>
          pasteText(
            user,
            canvas.getByLabelText(/Message/, { selector: 'textarea' }),
            'Current<sup>1</sup> <strong>report value</strong>'
          ),
        (_before, after) =>
          after.text === 'Current1 report value' && after.superscript === '1' && after.strong === 'report value'
      )
      expect(tp5Root.querySelector('.cdc-callout__content > p:first-child')).toBeVisible()

      await performAndAssert(
        'Subtext parses supported HTML',
        () => {
          const subtext = tp5Root.querySelector<HTMLElement>('.cdc-callout__content > .bite-subtext')
          return {
            text: normalize(subtext?.textContent),
            emphasis: normalize(subtext?.querySelector(':scope > em')?.textContent),
            subscript: normalize(subtext?.querySelector(':scope > sub')?.textContent)
          }
        },
        () => pasteText(user, canvas.getByLabelText(/Subtext\/Citation/), '<em>Source</em><sub>2026</sub>'),
        (_before, after) => after.text === 'Source2026' && after.emphasis === 'Source' && after.subscript === '2026'
      )
      expect(tp5Root.querySelector('.cdc-callout__content > .bite-subtext')).toBeVisible()

      // Data aggregation, formatting, zero handling, and filter restoration.
      await openSection(canvas, canvasElement, 'Data')
      const suffix = canvas.getByLabelText('Suffix')
      await replaceText(suffix, '')
      const aggregateExpectations = [
        ['Count', 'Function Value', '3'],
        ['Max', 'Function Value', '10'],
        ['Mean (Average)', 'Function Value', '5'],
        ['Median', 'Function Value', '4'],
        ['Min', 'Function Value', '1'],
        ['Mode', 'Mode Value', '2'],
        ['Pass Through', 'Current', '1,234'],
        ['Range', 'Function Value', '1 - 10'],
        ['Sum', 'Function Value', '15']
      ] as const
      const functionOptions = Array.from(dataFunction.options)
        .filter(option => option.value)
        .map(option => ({ label: option.textContent?.trim(), value: option.value }))
      expect(functionOptions.map(option => option.value).sort()).toEqual(
        aggregateExpectations.map(([dataFunctionName]) => dataFunctionName).sort()
      )
      for (const option of functionOptions) expect(option.label).toBe(option.value)
      for (const [dataFunctionName, dataColumnName, expectedMetric] of aggregateExpectations) {
        await performAndAssert(
          `${dataFunctionName} calculates selected numeric values`,
          () => ({
            selectedColumn: dataColumn.value,
            selectedFunction: dataFunction.value,
            renderedMetric: metric(canvasElement)
          }),
          async () => {
            await user.selectOptions(dataColumn, dataColumnName)
            await user.selectOptions(dataFunction, dataFunctionName)
          },
          (_before, after) =>
            after.selectedColumn === dataColumnName &&
            after.selectedFunction === dataFunctionName &&
            after.renderedMetric === expectedMetric
        )
      }
      await user.selectOptions(dataColumn, 'Current')
      await user.selectOptions(dataFunction, 'Sum')
      await waitFor(() => expect(metric(canvasElement)).toBe('6,912'))
      const prefix = canvas.getByLabelText('Prefix')
      await replaceText(prefix, '$')
      await replaceText(suffix, ' total')
      await waitFor(() => expect(metric(canvasElement)).toBe('$6,912 total'))
      await replaceText(canvas.getByLabelText('Round'), '2')
      await waitFor(() => expect(metric(canvasElement)).toBe('$6,912.00 total'))
      await user.click(canvas.getByLabelText('Add commas'))
      await waitFor(() => expect(metric(canvasElement)).toBe('$6912.00 total'))
      await user.click(canvas.getByLabelText('Add commas'))
      await user.selectOptions(dataFunction, 'Mean (Average)')
      expect(metric(canvasElement)).toBe('$2,304.00 total')
      await user.click(canvas.getByLabelText('Ignore Zeros'))
      await waitFor(() => expect(metric(canvasElement)).toBe('$3,456.00 total'))

      const unfilteredMetric = metric(canvasElement)
      await user.click(canvas.getByRole('button', { name: 'Add Filter' }))
      await user.selectOptions(await canvas.findByLabelText('Column Name'), 'Category')
      const filterValue = canvas.getByLabelText('Column Value') as HTMLSelectElement
      await waitForOptionsToPopulate(filterValue)
      await user.selectOptions(filterValue, 'Other')
      await waitFor(() => expect(metric(canvasElement)).toBe('$5,678.00 total'))
      await user.click(canvas.getByRole('button', { name: 'Remove' }))
      await waitFor(() => expect(metric(canvasElement)).toBe(unfilteredMetric))
      expect(canvas.getByText('There are currently no filters.')).toBeVisible()

      // Trends: down, up, flat, categorical mapping, custom mapping scoping, validation.
      await replaceText(canvas.getByLabelText('Prefix'), '')
      await replaceText(canvas.getByLabelText('Suffix'), '')
      await replaceText(canvas.getByLabelText('Round'), '0')
      await user.selectOptions(dataFunction, 'Mean (Average)')
      const trendMode = canvas.getByLabelText('Trend Mode') as HTMLSelectElement
      await user.selectOptions(trendMode, 'numeric')
      const trendColumn = await canvas.findByLabelText(/Trend Column/)
      await user.selectOptions(trendColumn, 'Previous')
      expect(await canvas.findByRole('img', { name: 'Trend down' })).toBeVisible()
      await replaceText(canvas.getByLabelText('Down Label'), 'Decreasing')
      await waitFor(() =>
        expect(normalize(canvasElement.querySelector('.cove-trend-arrow__label')?.textContent)).toBe('Decreasing')
      )
      const threshold = canvas.getByLabelText(/Threshold/) as HTMLInputElement
      await performAndAssert(
        'Numeric threshold hides the down arrow',
        () => Boolean(canvasElement.querySelector('.cove-trend-arrow')),
        () => replaceText(threshold, '1000'),
        (before, after) => before && !after
      )
      const highThreshold = canvas.getByLabelText(/Threshold/) as HTMLInputElement
      await user.type(highThreshold, '0', { initialSelectionStart: 0, initialSelectionEnd: highThreshold.value.length })
      await waitFor(() => expect(canvas.getByLabelText(/Threshold/)).toHaveValue(0))

      await user.selectOptions(canvas.getByLabelText('Data Column'), 'Previous')
      await user.selectOptions(canvas.getByLabelText(/Trend Column/), 'Current')
      expect(await canvas.findByRole('img', { name: 'Trend up' })).toBeVisible()
      await replaceText(canvas.getByLabelText('Up Label'), 'Increasing')
      await waitFor(() =>
        expect(normalize(canvasElement.querySelector('.cove-trend-arrow__label')?.textContent)).toBe('Increasing')
      )

      await user.selectOptions(canvas.getByLabelText('Data Column'), 'Current')
      await user.selectOptions(canvas.getByLabelText(/Trend Column/), 'Current')
      await user.click(canvas.getByLabelText('Show indicator for no change'))
      expect(await canvas.findByRole('img', { name: 'Trend flat' })).toBeVisible()
      await replaceText(canvas.getByLabelText('No Change Label'), 'Stable')
      await replaceText(canvas.getByLabelText('Trend description'), 'Compared with prior period')

      await user.selectOptions(canvas.getByLabelText('Data Function'), 'Count')
      expect(
        await canvas.findByText('Numeric mode only supports Sum, Mean (Average), Median, Min, and Max.')
      ).toBeVisible()
      expect(canvas.queryByLabelText(/Trend Column/)).not.toBeInTheDocument()
      await user.selectOptions(canvas.getByLabelText('Trend Mode'), '')
      await user.selectOptions(canvas.getByLabelText('Data Function'), 'Pass Through')
      await user.selectOptions(canvas.getByLabelText('Trend Mode'), 'categorical')
      const categoricalColumn = await canvas.findByLabelText(/Trend Column/)
      await user.selectOptions(categoricalColumn, 'Status')
      await user.click(canvas.getByRole('button', { name: 'Add Filter' }))
      await user.selectOptions(await canvas.findByLabelText('Column Name'), 'Status')
      const categoricalFilterValue = canvas.getByLabelText('Column Value') as HTMLSelectElement
      await waitForOptionsToPopulate(categoricalFilterValue)
      await user.selectOptions(categoricalFilterValue, 'High')
      await user.selectOptions(canvas.getByLabelText('Data Function'), 'Mean (Average)')
      const trendRows = () => Array.from(canvasElement.querySelectorAll<HTMLElement>('.cove-accordion__panel-row'))
      const highTrendRow = () =>
        trendRows().find(row => normalize(row.querySelector('.cove-accordion__panel-col')?.textContent) === 'High')!
      expect(highTrendRow()).toBeTruthy()
      await user.selectOptions(within(highTrendRow()).getByRole('combobox'), 'down')
      expect(canvas.getByLabelText('Data Function')).toHaveValue('Mean (Average)')
      expect(canvas.getByLabelText('Trend Mode')).toHaveValue('categorical')
      expect(canvas.getByLabelText(/Trend Column/)).toHaveValue('Status')
      expect(canvas.getByLabelText('Column Name')).toHaveValue('Status')
      expect(canvas.getByLabelText('Column Value')).toHaveValue('High')
      expect(within(highTrendRow()).getByRole('combobox')).toHaveValue('down')
      await user.click(canvas.getByRole('button', { name: 'Add Trend Mapping' }))
      const customTrendInput = await canvas.findByPlaceholderText('Enter value')
      await user.type(customTrendInput, 'Custom trend')
      const customTrendRow = customTrendInput.closest('.cove-accordion__panel-row') as HTMLElement
      await user.click(within(customTrendRow).getByTitle('Remove mapping'))
      await waitForAbsence('input[placeholder="Enter value"]', canvasElement)
      expect(highTrendRow()).toBeInTheDocument()
      await user.selectOptions(trendMode, '')

      // TP5 Visual output.
      await openSection(canvas, canvasElement, 'Visual')
      await user.click(canvas.getByLabelText('Use White Background Style'))
      expect(canvasElement.querySelector('.cove-visualization__body')).toHaveClass('white-background-style')
      expect(canvasElement.querySelector('.cdc-callout__flag')).not.toBeInTheDocument()
      await user.click(canvas.getByLabelText('Value Above Message'))
      expect(canvasElement.querySelector('.cove-visualization__body')).toHaveClass('use-wrap')
      expect(canvasElement.querySelector('.cdc-callout__body')).toHaveClass('cdc-callout__body--content-below')
      const circle = canvas.getByLabelText('Circle Styling')
      await user.selectOptions(circle, 'light')
      expect(canvasElement.querySelector('.cdc-callout__value-circle')).toHaveClass('cdc-callout__value-circle--light')
      await replaceText(canvas.getByLabelText('Circle Font Size'), '20')
      await waitFor(() =>
        expect(getComputedStyle(canvasElement.querySelector<HTMLElement>('.cdc-callout__value')!).fontSize).toBe('20px')
      )
      await user.selectOptions(circle, 'dark')
      expect(canvasElement.querySelector('.cdc-callout__value-circle')).toHaveClass('cdc-callout__value-circle--dark')
      await user.selectOptions(circle, 'off')
      expect(canvasElement.querySelector('.cdc-callout__value-circle')).not.toBeInTheDocument()

      // Data-driven mapped color, custom active color, and scoped custom removal.
      await openSection(canvas, canvasElement, 'Data-Driven Colors')
      await user.selectOptions(canvas.getByLabelText(/Color Column/), 'Status')
      const colorRows = () => Array.from(canvasElement.querySelectorAll<HTMLElement>('.cove-accordion__panel-row'))
      const highColorRow = () =>
        colorRows().find(row => normalize(row.querySelector('.cove-accordion__panel-col')?.textContent) === 'High')!
      await user.click(within(highColorRow()).getByRole('button', { name: 'Select color' }))
      await user.click(canvas.getByRole('option', { name: '#f45b53' }))
      const callout = canvasElement.querySelector<HTMLElement>('.cdc-callout')!
      await waitFor(() => expect(getComputedStyle(callout).backgroundColor).toBe('rgb(244, 91, 83)'))
      expect(callout).toHaveClass('cdc-callout--data-color')

      await user.click(within(highColorRow()).getByRole('button', { name: '#f45b53' }))
      await user.click(canvas.getByRole('option', { name: 'None' }))
      await user.click(canvas.getByRole('button', { name: 'Add Color Mapping' }))
      const customColorInput = await canvas.findByPlaceholderText('Enter value')
      await user.type(customColorInput, 'Custom status')
      const customColorRow = customColorInput.closest('.cove-accordion__panel-row') as HTMLElement
      expect(within(customColorRow).getByRole('button', { name: '#d7f2ed' })).toBeVisible()
      await user.click(within(customColorRow).getByTitle('Remove mapping'))
      await waitForAbsence('input[placeholder="Enter value"]', canvasElement)
      expect(
        colorRows().some(row => normalize(row.querySelector('.cove-accordion__panel-col')?.textContent) === 'High')
      ).toBe(true)
      expect(callout).not.toHaveClass('cdc-callout--data-color')

      // Standard Visual: every setting changes rendered output.
      await openSection(canvas, canvasElement, 'General')
      await user.selectOptions(style, 'title')
      expect(await canvas.findByRole('button', { name: /^Image$/ })).toBeVisible()
      expect(canvas.queryByRole('button', { name: 'Data-Driven Colors' })).not.toBeInTheDocument()
      await openSection(canvas, canvasElement, 'Visual')
      await replaceText(canvas.getByLabelText('Bite Font Size'), '42')
      await waitFor(() =>
        expect((canvasElement.querySelector('.bite-value') as HTMLElement).style.fontSize).toBe('42px')
      )
      await user.selectOptions(canvas.getByLabelText('Overall Font Size'), 'large')
      expect(canvasElement.querySelector('.cove-visualization.type-data-bite')).toHaveClass('font-large')
      const themePalette = Array.from(canvasElement.querySelectorAll('.color-palette')).find(palette =>
        palette.querySelector('button.theme-purple')
      )!
      await user.click(themePalette.querySelector('button.theme-purple') as HTMLElement)
      expect(canvasElement.querySelector('.cove-visualization.type-data-bite')).toHaveClass('theme-purple')
      const body = canvasElement.querySelector<HTMLElement>('.cove-visualization__body')!
      await user.click(canvas.getByLabelText('Display Border'))
      expect(body).toHaveClass('no-borders')
      await user.click(canvas.getByLabelText('Display Border'))
      expect(body).not.toHaveClass('no-borders')
      await user.click(canvas.getByLabelText('Use Border Color Theme'))
      expect(body).toHaveClass('component--has-border-color-theme')
      await user.click(canvas.getByLabelText('Use Accent Style'))
      expect(body).toHaveClass('component--has-accent')
      await user.click(canvas.getByLabelText('Use Theme Background Color'))
      expect(body).toHaveClass('component--has-background')
      await user.click(canvas.getByLabelText('Hide Background Color'))
      expect(body).toHaveClass('component--hide-background-color')

      // Images: none, static, matching one-condition rule, two-condition match, and fallback.
      await openSection(canvas, canvasElement, 'Image')
      const display = canvas.getByLabelText('Image Display Type')
      expect(canvasElement.querySelector('.bite-image')).not.toBeInTheDocument()
      await user.selectOptions(display, 'static')
      await replaceText(canvas.getByLabelText('Image URL'), DEFAULT_IMAGE)
      await replaceText(canvas.getByLabelText('Alt Text'), 'Static regression image')
      expect(await canvas.findByRole('img', { name: 'Static regression image' })).toHaveAttribute('src', DEFAULT_IMAGE)
      await user.selectOptions(canvas.getByLabelText('Image/Graphic Position'), 'Bottom')
      expect(canvasElement.querySelector('.bite')).toHaveClass('bite-bottom')

      await user.selectOptions(display, 'dynamic')
      await replaceText(canvas.getByLabelText('Image URL (default)'), DEFAULT_IMAGE)
      await replaceText(canvas.getByLabelText('Alt Text (default)'), 'Default regression image')
      await user.click(canvas.getByRole('button', { name: 'Add Dynamic Image' }))
      const imageRule = () => canvas.getByText('Image #1').closest('fieldset') as HTMLFieldSetElement
      await user.selectOptions(imageRule().querySelectorAll('select')[0], '<')
      await user.type(imageRule().querySelectorAll('input[type="number"]')[0], '999999')
      await user.type(imageRule().querySelectorAll<HTMLInputElement>('input[type="text"]')[0], MATCHED_IMAGE)
      await user.type(
        imageRule().querySelectorAll<HTMLInputElement>('input[type="text"]')[1],
        'Matched regression image'
      )
      expect(imageRule().querySelectorAll('select')[0]).toHaveValue('<')
      expect(imageRule().querySelectorAll<HTMLInputElement>('input[type="number"]')[0]).toHaveValue(999999)
      expect(imageRule().querySelectorAll<HTMLInputElement>('input[type="text"]')[0]).toHaveValue(MATCHED_IMAGE)
      expect(imageRule().querySelectorAll<HTMLInputElement>('input[type="text"]')[1]).toHaveValue(
        'Matched regression image'
      )
      await user.selectOptions(imageRule().querySelectorAll('select')[1], 'and')
      expect(imageRule().querySelectorAll('input[type="number"]')).toHaveLength(2)
      await user.selectOptions(imageRule().querySelectorAll('select')[2], '<')
      await user.type(imageRule().querySelectorAll('input[type="number"]')[1], '5000')
      await replaceText(imageRule().querySelectorAll('input[type="number"]')[1], '1000')
      expect(await canvas.findByRole('img', { name: 'Default regression image' })).toHaveAttribute('src', DEFAULT_IMAGE)
      await user.click(within(imageRule()).getByRole('button', { name: 'Remove' }))
      expect(canvas.getByText('There are currently no dynamic images.')).toBeVisible()

      // Markup: number formatting, conditions, date localization, null handling, close/edit, add/delete.
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
      await pasteText(
        user,
        canvas.getByLabelText(/Message/, { selector: 'textarea' }),
        'Reported value: {{reported-value}}'
      )
      await waitFor(() => expect(renderedMessage(canvasElement)).toBe('Reported value: 1234'))

      await openSection(canvas, canvasElement, 'Markup Variables')
      await user.click(within(variable()).getByRole('button', { name: 'Formatting Options' }))
      await user.click(within(variable()).getByLabelText('Format numbers with commas'))
      await waitFor(() => expect(renderedMessage(canvasElement)).toBe('Reported value: 1,234'))
      await user.type(within(variable()).getByLabelText('Round to decimal point'), '2')
      await waitFor(() => expect(renderedMessage(canvasElement)).toBe('Reported value: 1,234.00'))
      expect(within(variable()).getByLabelText('Hide section when value is null')).toBeVisible()
      await user.click(within(variable()).getByRole('button', { name: 'Conditions' }))
      await user.click(within(variable()).getByRole('button', { name: /Add Condition/ }))
      await user.selectOptions(within(variable()).getByLabelText('Column'), 'Category')
      await user.selectOptions(within(variable()).getByLabelText('Value'), 'Other')
      await waitFor(() => expect(renderedMessage(canvasElement)).toBe('Reported value: 5,678.00'))
      await user.click(within(variable()).getByRole('button', { name: 'Remove Condition' }))

      await user.click(within(variable()).getByRole('button', { name: 'Basic Settings' }))
      await user.selectOptions(variableColumn(), 'Report Date')
      await user.click(within(variable()).getByRole('button', { name: 'Formatting Options' }))
      await replaceText(within(variable()).getByLabelText('Date Parse Format'), '%Y-%m-%d')
      await replaceText(within(variable()).getByLabelText('Date Display Format'), '%B %-d, %Y')
      expect(canvas.getByLabelText('Enable Markup Variables')).toBeChecked()
      expect(within(variable()).getByLabelText('Source')).toHaveValue('column')
      expect(variableColumn()).toHaveValue('Report Date')
      expect(within(variable()).getByLabelText('Tag (auto-generated)')).toHaveValue('{{report-date}}')
      await openSection(canvas, canvasElement, 'General')
      await pasteText(
        user,
        canvas.getByLabelText(/Message/, { selector: 'textarea' }),
        'Reported value: {{report-date}}'
      )
      await waitFor(() => expect(renderedMessage(canvasElement)).toBe('Reported value: January 15, 2026'))
      await user.selectOptions(canvas.getByLabelText(/Language for dates and numbers/), 'es-MX')
      await waitFor(() => expect(renderedMessage(canvasElement)).toBe('Reported value: enero 15, 2026'))
      await user.selectOptions(canvas.getByLabelText(/Language for dates and numbers/), 'en-US')
      await waitFor(() => expect(renderedMessage(canvasElement)).toBe('Reported value: January 15, 2026'))

      await openSection(canvas, canvasElement, 'Markup Variables')
      await user.click(within(variable()).getByRole('button', { name: 'Basic Settings' }))
      await user.selectOptions(variableColumn(), 'Optional')
      expect(within(variable()).getByLabelText('Tag (auto-generated)')).toHaveValue('{{optional}}')
      await openSection(canvas, canvasElement, 'General')
      await pasteText(user, canvas.getByLabelText(/Message/, { selector: 'textarea' }), 'Reported value: {{optional}}')
      await waitFor(() => expect(renderedMessage(canvasElement)).toBe('Reported value: Present'))
      await openSection(canvas, canvasElement, 'Markup Variables')
      await user.click(within(variable()).getByRole('button', { name: 'Conditions' }))
      await user.click(within(variable()).getByRole('button', { name: /Add Condition/ }))
      await user.selectOptions(within(variable()).getByLabelText('Column'), 'Category')
      await user.selectOptions(within(variable()).getByLabelText('Value'), 'Other')
      await user.click(within(variable()).getByRole('button', { name: 'Formatting Options' }))
      await user.click(within(variable()).getByLabelText('Hide section when value is null'))
      await waitFor(() => expect(renderedMessage(canvasElement)).toBe('Reported value:'))

      await user.click(within(variable()).getByRole('button', { name: 'Close' }))
      expect(within(variable()).getByRole('button', { name: 'Edit' })).toBeVisible()
      await user.click(within(variable()).getByRole('button', { name: 'Edit' }))
      expect(within(variable()).getByRole('button', { name: 'Close' })).toBeVisible()
      await user.click(canvas.getByRole('button', { name: /Add Variable/ }))
      expect(canvasElement.querySelectorAll('.variable-item')).toHaveLength(2)
      const unnamed = canvas.getByText('Unnamed Variable').closest('.variable-item') as HTMLElement
      const confirmDelete = spyOn(window, 'confirm').mockReturnValue(true)
      await user.click(within(unnamed).getByRole('button', { name: 'Delete Variable' }))
      await waitFor(() => expect(canvasElement.querySelectorAll('.variable-item')).toHaveLength(1))
      expect(confirmDelete).toHaveBeenCalledWith('Are you sure you want to delete the variable "Unnamed Variable"?')
      confirmDelete.mockRestore()
      expect(canvas.queryByText('Unnamed Variable')).not.toBeInTheDocument()

      // Advanced Editor applies a rendered change.
      const advancedToggle = canvasElement.querySelector<HTMLElement>('.advanced-toggle-link')
      expect(advancedToggle).toBeVisible()
      await user.click(advancedToggle!)
      expect(canvas.getByRole('link', { name: /Get Help with Data Bite/ })).toBeVisible()
      await user.dblClick(canvasElement.querySelector('#title_display') as HTMLElement)
      await replaceText(canvasElement.querySelector('#title_textarea') as HTMLTextAreaElement, 'Advanced Data Bite')
      await user.keyboard('{Enter}')
      await user.click(canvas.getByRole('button', { name: 'Apply Configuration Changes' }))
      expect(canvas.getByRole('heading', { name: 'Advanced Data Bite' })).toBeVisible()

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
