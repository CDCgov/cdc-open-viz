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
  title: 'Regression Tests/Misc Scripts/Chart Scripts',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>

const CSV = `Category,Value,Alternate
Alpha,40,2500.25
Beta,30,1000.5
Gamma,20,750.25
Delta,10,500`

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

const getPiePaths = (canvasElement: HTMLElement) =>
  getPieSegments(canvasElement)
    .map(segment => segment.querySelector<SVGPathElement>('path')?.getAttribute('d'))
    .join('|')

const getRenderedCategories = (canvasElement: HTMLElement) =>
  getPieSegments(canvasElement)
    .map(
      segment =>
        Array.from(segment.classList)
          .find(className => className.startsWith('slice-'))
          ?.slice(6) || ''
    )
    .filter(Boolean)

const getTooltipText = (canvasElement: HTMLElement) => normalize(canvasElement.querySelector('.tooltip')?.textContent)

const hoverSegment = async (canvasElement: HTMLElement, category: string, user: ReturnType<typeof userEvent.setup>) => {
  const segment = canvasElement.querySelector<SVGGElement>(`svg.animated-pie g.slice-${category}`)
  expect(segment, `Expected rendered ${category} segment`).toBeTruthy()
  const path = segment!.querySelector<SVGPathElement>('path')
  expect(path, `Expected rendered path for ${category}`).toBeTruthy()
  const alternatePath = getPieSegments(canvasElement)
    .map(candidate => candidate.querySelector<SVGPathElement>('path'))
    .find(candidate => candidate && candidate !== path)
  expect(alternatePath, 'Expected another Pie segment to reset hover state').toBeTruthy()
  await user.hover(alternatePath!)
  const refreshedPath = canvasElement.querySelector<SVGPathElement>(`svg.animated-pie g.slice-${category} path`)
  expect(refreshedPath, `Expected refreshed path for ${category}`).toBeTruthy()
  await user.hover(refreshedPath!)
}

const getDataTable = (canvasElement: HTMLElement) =>
  canvasElement.querySelector<HTMLTableElement>('.data-table-container table.data-table')

const getDataTableRows = (canvasElement: HTMLElement) =>
  Array.from(getDataTable(canvasElement)?.querySelectorAll<HTMLElement>('tbody tr') || [])

const replaceText = async (input: HTMLElement, value: string, user: ReturnType<typeof userEvent.setup>) => {
  await user.clear(input)
  if (value) await user.type(input, value)
}

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
      expect(within(previewRows[0] as HTMLElement).getByText('2500.25')).toBeVisible()
      expect(within(previewRows[3] as HTMLElement).getByText('Delta')).toBeVisible()
      expect(within(previewRows[3] as HTMLElement).getByText('10')).toBeVisible()
      expect(within(previewRows[3] as HTMLElement).getByText('500')).toBeVisible()

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

      // General: rendered title and Pie structure.
      const titleInput = canvas.getByRole('textbox', { name: /^Title/ })
      await performAndAssert(
        'Title renders above the Pie',
        () => normalize(canvasElement.querySelector('.cove-title')?.textContent),
        () => replaceText(titleInput, 'Pie Settings Regression', user),
        (_before, after) => after === 'Pie Settings Regression'
      )
      const pieType = canvas.getByRole('combobox', { name: /^Pie Chart Type/ })
      await performAndAssert(
        'Donut moves every category label outside the chart',
        () => ({
          inside: canvasElement.querySelectorAll('.pie-label--inside').length,
          outside: canvasElement.querySelectorAll('.pie-label--outside').length
        }),
        () => user.selectOptions(pieType, 'Donut'),
        (before, after) =>
          before.inside + before.outside === 4 && before.inside > 0 && after.inside === 0 && after.outside === 4
      )
      await performAndAssert(
        'Regular Pie restores its collision-aware category labels',
        () => ({
          inside: canvasElement.querySelectorAll('.pie-label--inside').length,
          outside: canvasElement.querySelectorAll('.pie-label--outside').length
        }),
        () => user.selectOptions(canvas.getByRole('combobox', { name: /^Pie Chart Type/ }), 'Regular'),
        (before, after) =>
          before.inside === 0 &&
          before.outside === 4 &&
          after.inside + after.outside === 4 &&
          after.inside > 0 &&
          after.outside < 4
      )

      // Data Format: alternate geometry, data labeling, and number formatting.
      await openAccordion(canvas, 'Data Format')
      const alternateColumn = canvas.getByRole('combobox', { name: /^Data Column/ })
      await performAndAssert(
        'Alternate data changes rendered Pie geometry',
        () => getPiePaths(canvasElement),
        () => user.selectOptions(alternateColumn, 'Alternate'),
        (before, after) => Boolean(before) && Boolean(after) && before !== after
      )
      const dataLabel = canvas.getByRole('textbox', { name: /^Data Label/ })
      await performAndAssert(
        'Data Label changes the rendered data-table heading',
        () => normalize(getDataTable(canvasElement)?.textContent),
        () => replaceText(dataLabel, 'Alternate amount', user),
        (before, after) => !before.includes('Alternate amount') && after.includes('Alternate amount')
      )
      await performAndAssert(
        'Add commas toggle removes the rendered tooltip separator',
        () => getTooltipText(canvasElement),
        async () => {
          await user.click(canvas.getByRole('checkbox', { name: /^Add commas/ }))
          await hoverSegment(canvasElement, 'Alpha', user)
        },
        (_before, after) => after.includes('2500') && !after.includes('2,500')
      )
      await performAndAssert(
        'Add commas toggle restores the rendered tooltip separator',
        () => getTooltipText(canvasElement),
        async () => {
          await user.click(canvas.getByRole('checkbox', { name: /^Add commas/ }))
          await hoverSegment(canvasElement, 'Alpha', user)
        },
        (before, after) => before.includes('2500') && !before.includes('2,500') && after.includes('2,500')
      )
      const roundTo = canvas.getByRole('spinbutton', { name: 'Round to decimal point' })
      await performAndAssert(
        'Round to decimal point changes rendered percentage precision',
        () => normalize(getDataTable(canvasElement)?.textContent),
        () => replaceText(roundTo, '2', user),
        (before, after) => !before.includes('52.63%') && after.includes('52.63%')
      )
      await performAndAssert(
        'Prefix formats the rendered Pie tooltip value',
        () => getTooltipText(canvasElement),
        async () => {
          await user.type(canvas.getByRole('textbox', { name: /^Prefix/ }), '$')
          await waitFor(() => expect(normalize(getDataTable(canvasElement)?.textContent)).toContain('$'))
          await hoverSegment(canvasElement, 'Alpha', user)
          await waitFor(() => expect(getTooltipText(canvasElement)).toContain('Alternate amount: $2,500.25'))
        },
        (before, after) => !before.includes('$2,500.25') && after.includes('Alternate amount: $2,500.25')
      )
      await performAndAssert(
        'Suffix formats the rendered Pie tooltip value',
        () => getTooltipText(canvasElement),
        async () => {
          await user.type(canvas.getByRole('textbox', { name: /^Suffix/ }), ' cases')
          await waitFor(() => expect(normalize(getDataTable(canvasElement)?.textContent)).toContain('cases'))
          await hoverSegment(canvasElement, 'Alpha', user)
          await waitFor(() => expect(getTooltipText(canvasElement)).toContain('Alternate amount: $2,500.25 cases'))
        },
        (before, after) => !before.includes('2,500.25 cases') && after.includes('Alternate amount: $2,500.25 cases')
      )

      // Restore the exact-value fixture before category visibility checks.
      await replaceText(canvas.getByRole('textbox', { name: /^Prefix/ }), '', user)
      await waitFor(() => expect(normalize(getDataTable(canvasElement)?.textContent)).not.toContain('$'))
      await replaceText(canvas.getByRole('textbox', { name: /^Suffix/ }), '', user)
      await waitFor(() => expect(normalize(getDataTable(canvasElement)?.textContent)).not.toContain('cases'))
      await replaceText(canvas.getByRole('textbox', { name: /^Data Label/ }), 'Value', user)
      await waitFor(() => {
        const tableText = normalize(getDataTable(canvasElement)?.textContent)
        expect(tableText).toContain('Value')
        expect(tableText).not.toContain('Suffixed alternate')
      })
      const activeRoundTo = canvas.getByRole('spinbutton', { name: 'Round to decimal point' }) as HTMLInputElement
      await user.type(activeRoundTo, '0', {
        initialSelectionStart: 0,
        initialSelectionEnd: activeRoundTo.value.length
      })
      await waitFor(() => {
        const tableText = normalize(getDataTable(canvasElement)?.textContent)
        expect(tableText).toContain('53%')
        expect(tableText).not.toContain('52.63%')
      })
      await performAndAssert(
        'Value restores the exact 40/30/20/10 Pie',
        () => getPieSegments(canvasElement).map(segment => normalize(segment.textContent)),
        () => user.selectOptions(canvas.getByRole('combobox', { name: /^Data Column/ }), 'Value'),
        (_before, after) =>
          expectedSegments.every(({ category, percentage }) =>
            after.some(segment => segment.includes(category) && segment.includes(percentage))
          )
      )

      // Segments: data order remains stable; Gamma exclusion is reversible.
      await openAccordion(canvas, 'Segments')
      expect(canvas.getByRole('combobox', { name: /^Segment Order/ })).toHaveValue('data')
      expect(getRenderedCategories(canvasElement)).toEqual(['Alpha', 'Beta', 'Gamma', 'Delta'])
      await user.click(canvas.getByRole('checkbox', { name: /^Exclude one or more values/ }))
      const segmentsSection = canvas
        .getByRole('button', { name: 'Segments' })
        .closest<HTMLElement>('[data-accordion-component="AccordionItem"]')
      const addExclusion = segmentsSection?.querySelector<HTMLSelectElement>('select[name="visualizationType"]')
      expect(addExclusion, 'Expected Add Exclusion select in Segments').toBeTruthy()
      await performAndAssert(
        'Gamma exclusion removes only Gamma from Pie, legend, and table',
        () => ({
          categories: getRenderedCategories(canvasElement),
          legend: normalize(canvasElement.querySelector('.legend-container')?.textContent),
          table: normalize(getDataTable(canvasElement)?.textContent)
        }),
        () => user.selectOptions(addExclusion!, 'Gamma'),
        (before, after) =>
          before.categories.length === 4 &&
          after.categories.length === 3 &&
          ['Alpha', 'Beta', 'Delta'].every(category => after.categories.includes(category)) &&
          before.legend.includes('Gamma') &&
          !after.legend.includes('Gamma') &&
          ['Alpha', 'Beta', 'Delta'].every(category => after.legend.includes(category)) &&
          before.table.includes('Gamma') &&
          !after.table.includes('Gamma') &&
          ['Alpha', 'Beta', 'Delta'].every(category => after.table.includes(category))
      )
      await performAndAssert(
        'Disabling exclusions restores Gamma everywhere',
        () => ({
          categories: getRenderedCategories(canvasElement),
          legend: normalize(canvasElement.querySelector('.legend-container')?.textContent),
          table: normalize(getDataTable(canvasElement)?.textContent)
        }),
        () => user.click(canvas.getByRole('checkbox', { name: /^Exclude one or more values/ })),
        (before, after) =>
          before.categories.length === 3 &&
          after.categories.length === 4 &&
          expectedSegments.every(
            ({ category }) =>
              after.categories.includes(category) && after.legend.includes(category) && after.table.includes(category)
          )
      )

      // Legend: bottom placement, hide, and full restoration.
      await openAccordion(canvas, 'Legend')
      const hideLegend = canvas
        .getAllByRole('checkbox', { name: /^Hide Legend/ })
        .find(control => control.getAttribute('name') === 'hide')
      expect(hideLegend, 'Expected Hide Legend checkbox').toBeTruthy()
      await performAndAssert(
        'Right position establishes the regression baseline',
        () => Array.from(canvasElement.querySelector('.legend-container')?.classList || []),
        () => user.selectOptions(canvas.getByRole('combobox', { name: /^Position/ }), 'right'),
        (before, after) => !before.includes('right') && after.includes('right')
      )
      await performAndAssert(
        'Bottom position moves the rendered legend',
        () => Array.from(canvasElement.querySelector('.legend-container')?.classList || []),
        () => user.selectOptions(canvas.getByRole('combobox', { name: /^Position/ }), 'bottom'),
        (before, after) => before.includes('right') && after.includes('bottom') && !after.includes('right')
      )
      await performAndAssert(
        'Hide Legend removes the rendered legend',
        () => Boolean(canvasElement.querySelector('.legend-container')),
        () => user.click(hideLegend!),
        (before, after) => before && !after
      )
      await performAndAssert(
        'Showing the legend restores its bottom placement',
        () => ({
          present: Boolean(canvasElement.querySelector('.legend-container')),
          bottom: canvasElement.querySelector('.legend-container')?.classList.contains('bottom') || false
        }),
        () => user.click(hideLegend!),
        (before, after) => !before.present && after.present && after.bottom
      )
      await performAndAssert(
        'Right position restores the original rendered legend placement',
        () => Array.from(canvasElement.querySelector('.legend-container')?.classList || []),
        () => user.selectOptions(canvas.getByRole('combobox', { name: /^Position/ }), 'right'),
        (before, after) => before.includes('bottom') && after.includes('right') && !after.includes('bottom')
      )

      // Filters: Category=Beta is visible in every data-bearing output and removal restores all categories.
      await openAccordion(canvas, 'Filters')
      await user.click(canvas.getByRole('button', { name: /^Add Filter/ }))
      await performAndAssert(
        'Category filter initializes the first category',
        () => getRenderedCategories(canvasElement),
        () => user.selectOptions(canvas.getByRole('combobox', { name: /^Filter$/ }), 'Category'),
        (before, after) => before.length === 4 && after.length === 1 && after[0] === 'Alpha'
      )
      await performAndAssert(
        'Beta filter leaves only Beta in the rendered Pie and table',
        () => ({
          categories: getRenderedCategories(canvasElement),
          legend: normalize(canvasElement.querySelector('.legend-container')?.textContent),
          table: normalize(getDataTable(canvasElement)?.textContent)
        }),
        () => user.selectOptions(canvas.getByRole('combobox', { name: /^Filter Default Value \(Category\)/ }), 'Beta'),
        (before, after) =>
          before.categories.length === 1 &&
          before.categories[0] === 'Alpha' &&
          after.categories.length === 1 &&
          after.categories[0] === 'Beta' &&
          after.legend.includes('Beta') &&
          ['Alpha', 'Gamma', 'Delta'].every(category => !after.legend.includes(category)) &&
          after.table.includes('Beta') &&
          !after.table.includes('Alpha') &&
          !after.table.includes('Gamma') &&
          !after.table.includes('Delta')
      )
      await performAndAssert(
        'Removing the filter restores all four categories',
        () => ({
          categories: getRenderedCategories(canvasElement),
          legend: normalize(canvasElement.querySelector('.legend-container')?.textContent),
          table: normalize(getDataTable(canvasElement)?.textContent)
        }),
        () => user.click(canvas.getByRole('button', { name: /^Remove$/ })),
        (before, after) =>
          before.categories.length === 1 &&
          after.categories.length === 4 &&
          expectedSegments.every(
            ({ category }) =>
              after.categories.includes(category) && after.legend.includes(category) && after.table.includes(category)
          )
      )

      // Data Table: rendered visibility is reversible and exact category/percentage pairing survives.
      await openAccordion(canvas, 'Data Table')
      await performAndAssert(
        'Show Data Table hides the rendered table',
        () => Boolean(canvasElement.querySelector('.data-table-container')),
        () => user.click(canvas.getByRole('checkbox', { name: /^Show Data Table/ })),
        (before, after) => before && !after
      )
      await performAndAssert(
        'Show Data Table restores the rendered table',
        () => Boolean(getDataTable(canvasElement)),
        () => user.click(canvas.getByRole('checkbox', { name: /^Show Data Table/ })),
        (before, after) => !before && after
      )
      const restoredTable = getDataTable(canvasElement)
      expect(restoredTable).toBeVisible()
      for (const { category, percentage } of expectedSegments) {
        const row = getDataTableRows(canvasElement).find(candidate =>
          normalize(candidate.textContent).includes(category)
        )
        expect(row, `Expected restored data-table row for ${category}`).toBeTruthy()
        expect(row).toHaveTextContent(percentage)
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
