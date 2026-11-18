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

// Source regression: docs/qa/regression-scripts/build-and-configure-a-waffle-chart.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Misc Scripts/Waffle Chart Scripts',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type Canvas = ReturnType<typeof within>

const CSV = `Region,Year,Participants
North,2024,20
South,2024,15
North,2025,10
West,2025,15`

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
  name: 'WAFFLE-001 — Build and configure a Waffle Chart',
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
      for (const heading of ['Region', 'Year', 'Participants']) {
        expect(canvasElement.querySelector(`table.data-table th[title="${heading}"]`)).toBeVisible()
      }
      const previewRows = canvasElement.querySelectorAll('table.data-table tbody tr')
      expect(previewRows).toHaveLength(4)
      expect(
        Array.from(previewRows, row => Array.from(row.querySelectorAll('td'), cell => normalize(cell.textContent)))
      ).toEqual([
        ['North', '2024', '20'],
        ['South', '2024', '15'],
        ['North', '2025', '10'],
        ['West', '2025', '15']
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

      // Exact theme color and reversible accent treatment.
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
      await performAndAssert(
        'Accent treatment appears',
        () => body!.classList.contains('component--has-accent'),
        () => user.click(canvas.getByLabelText('Use Accent Style')),
        (before, after) => !before && after
      )
      await performAndAssert(
        'Accent treatment restores',
        () => body!.classList.contains('component--has-accent'),
        () => user.click(canvas.getByLabelText('Use Accent Style')),
        (before, after) => before && !after
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
