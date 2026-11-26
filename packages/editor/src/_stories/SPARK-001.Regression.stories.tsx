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
  title: 'Regression Tests/Charts',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type Canvas = ReturnType<typeof within>
type User = ReturnType<typeof userEvent.setup>

const CSV = `Time Period,Outreach Participants,Group
01/01/2016,10,A
02/01/2016,14,B
03/01/2016,12,A
04/01/2016,18,B
05/01/2016,17,A
06/01/2016,25,B`

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

const pasteText = async (user: User, input: HTMLElement, value: string) => {
  await user.clear(input)
  await user.click(input)
  await user.paste(value)
}

const getSparklineState = (root: HTMLElement) => {
  const sparkline = root.querySelector<SVGSVGElement>('svg.sparkline')
  const line = sparkline?.querySelector<SVGPathElement>('.sparkline-group > path[marker-end]')
  const arrow = sparkline?.querySelector<SVGMarkerElement>('marker#arrow--0')

  return {
    path: line?.getAttribute('d') || '',
    pointCount: (line?.getAttribute('d')?.match(/[ML]/g) || []).length,
    stroke: line?.getAttribute('stroke') || '',
    arrowFill: arrow?.getAttribute('fill') || '',
    ticks: Array.from(sparkline?.querySelectorAll<SVGTextElement>('.visx-axis-tick text') || []).map(label =>
      normalize(label.textContent)
    )
  }
}

const getFilterRows = (root: HTMLElement) =>
  Array.from(
    accordionButton(root, 'Filters')
      ?.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')
      ?.querySelectorAll<HTMLElement>('.grouped-list .series-item') || []
  )

const getFilterRow = (root: HTMLElement) => {
  const rows = getFilterRows(root)
  expect(rows, 'Expected exactly one authored filter').toHaveLength(1)
  return rows[0]
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
  name: 'CHART-002 — Sparkline',
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
      for (const heading of ['Time Period', 'Outreach Participants', 'Group']) {
        expect(canvasElement.querySelector(`table.data-table th[title="${heading}"]`)).toBeVisible()
      }
      const previewRows = canvasElement.querySelectorAll<HTMLElement>('table.data-table tbody tr')
      expect(normalize(previewRows[0].textContent)).toContain('01/01/2016')
      expect(normalize(previewRows[0].textContent)).toContain('10')
      expect(normalize(previewRows[0].textContent)).toContain('A')
      expect(normalize(previewRows[5].textContent)).toContain('06/01/2016')
      expect(normalize(previewRows[5].textContent)).toContain('25')
      expect(normalize(previewRows[5].textContent)).toContain('B')

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
      await pasteText(
        user,
        canvas.getByLabelText(/Message/, { selector: 'textarea' }),
        '<strong>Monthly outreach</strong> participation'
      )
      await pasteText(
        user,
        canvas.getByLabelText(/Subtext\/Citation/),
        '<em>Source</em>: regression <sub>fixture</sub>'
      )

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

      const baselineState = getSparklineState(canvasElement)
      expect(baselineState.path).toMatch(/^M.+L/)
      expect(baselineState.pointCount).toBe(6)
      expect(baselineState.stroke).not.toBe('')
      expect(baselineState.arrowFill).toBe(baselineState.stroke)
      expect(baselineState.ticks).toEqual(['01/01/2016', '06/01/2016'])

      const tickLabels = Array.from(sparkline.querySelectorAll<SVGTextElement>('.visx-axis-tick text')).map(label =>
        normalize(label.textContent)
      )
      expect(tickLabels).toEqual(['01/01/2016', '06/01/2016'])
      expect(canvas.getByRole('heading', { name: 'Outreach Trend' })).toBeVisible()
      const message = canvasElement.querySelector<HTMLElement>('section.introText.cove-prose')
      const subtext = canvasElement.querySelector<HTMLElement>('.subtext.cove-prose')
      expect(normalize(message?.textContent)).toBe('Monthly outreach participation')
      expect(message).toBeVisible()
      expect(message?.querySelector('strong')).toHaveTextContent('Monthly outreach')
      expect(normalize(subtext?.textContent)).toBe('Source: regression fixture')
      expect(subtext).toBeVisible()
      expect(subtext?.querySelector('em')).toHaveTextContent('Source')
      expect(subtext?.querySelector('sub')).toHaveTextContent('fixture')
      for (const textField of [message, subtext]) expect(textField?.textContent).not.toContain('<')
      expect(canvasElement.querySelector('.legend-container')).not.toBeInTheDocument()
      expect(canvasElement.querySelector('.data-table-container')).not.toBeInTheDocument()

      // Filters: exact HTML, A/B data geometry, endpoint dates, and series color stability.
      await openSection(canvas, canvasElement, 'Filters')
      await user.click(canvas.getByRole('button', { name: /^Add Filter/ }))
      await waitFor(() => expect(getFilterRows(canvasElement)).toHaveLength(1))
      const filterColumn = within(getFilterRow(canvasElement)).getByRole('combobox', {
        name: /^Filter$/
      }) as HTMLSelectElement
      await waitForOptionsToPopulate(filterColumn)
      await performAndAssert(
        'Group filter defaults to A with exact dates, changed geometry, and stable colors',
        () => getSparklineState(canvasElement),
        () => user.selectOptions(filterColumn, 'Group'),
        (before, after) =>
          before.path === baselineState.path &&
          after.path !== baselineState.path &&
          after.path.match(/^M.+L/) !== null &&
          after.pointCount === 3 &&
          after.ticks[0] === '01/01/2016' &&
          after.ticks[1] === '05/01/2016' &&
          after.stroke === baselineState.stroke &&
          after.arrowFill === baselineState.arrowFill &&
          after.arrowFill === after.stroke
      )

      await pasteText(
        user,
        canvas.getByLabelText(/^Filter intro text/, { selector: 'textarea' }),
        '<strong>Choose a group</strong>'
      )
      await pasteText(
        user,
        within(getFilterRow(canvasElement)).getByLabelText(/^Note/, { selector: 'textarea' }),
        '<em>Alternating months</em>'
      )
      await waitFor(() => {
        const filterIntro = canvasElement.querySelector<HTMLElement>('.filters-section__intro-text.cove-prose')
        const filterNote = canvasElement.querySelector<HTMLElement>('.filters-section__note-text.cove-prose')
        expect(normalize(filterIntro?.textContent)).toBe('Choose a group')
        expect(filterIntro).toBeVisible()
        expect(filterIntro?.querySelector('strong')).toHaveTextContent('Choose a group')
        expect(normalize(filterNote?.textContent)).toBe('Alternating months')
        expect(filterNote).toBeVisible()
        expect(filterNote?.querySelector('em')).toHaveTextContent('Alternating months')
        expect(filterIntro?.textContent).not.toContain('<')
        expect(filterNote?.textContent).not.toContain('<')
      })

      // TODO: Restore the accessible-name query after unlabeled filters fall back to their column name.
      const runtimeGroupFilter = canvasElement.querySelector<HTMLSelectElement>('#filter-0')
      expect(runtimeGroupFilter).toBeInTheDocument()
      expect(runtimeGroupFilter).toHaveValue('A')
      const groupAState = getSparklineState(canvasElement)
      await performAndAssert(
        'Runtime Group B filter updates geometry and dates without changing series color',
        () => getSparklineState(canvasElement),
        () => user.selectOptions(runtimeGroupFilter, 'B'),
        (before, after) =>
          before.path === groupAState.path &&
          after.path !== before.path &&
          after.path !== baselineState.path &&
          after.path.match(/^M.+L/) !== null &&
          after.pointCount === 3 &&
          after.ticks[0] === '02/01/2016' &&
          after.ticks[1] === '06/01/2016' &&
          after.stroke === baselineState.stroke &&
          after.arrowFill === baselineState.arrowFill &&
          after.arrowFill === after.stroke
      )

      await performAndAssert(
        'Removing the filter restores full geometry, dates, and series color',
        () => getSparklineState(canvasElement),
        () => user.click(within(getFilterRow(canvasElement)).getByRole('button', { name: /^Remove$/ })),
        (before, after) =>
          before.ticks[0] === '02/01/2016' &&
          before.ticks[1] === '06/01/2016' &&
          after.path === baselineState.path &&
          after.pointCount === 6 &&
          after.ticks[0] === '01/01/2016' &&
          after.ticks[1] === '06/01/2016' &&
          after.stroke === baselineState.stroke &&
          after.arrowFill === baselineState.arrowFill &&
          after.arrowFill === after.stroke
      )
      await waitFor(() => expect(getFilterRows(canvasElement)).toHaveLength(0))

      // Visual: Spark-specific background controls change and restore rendered output.
      await openSection(canvas, canvasElement, 'General')
      await performAndAssert(
        'Legacy title treatment exposes Sparkline background controls',
        () => ({
          smallTitle: Boolean(canvasElement.querySelector('.cove-title--small')),
          legacyTitle: Boolean(canvasElement.querySelector('.cove-visualization__header')),
          backgroundControl: Boolean(canvas.queryByLabelText('Use Theme Background Color')),
          hideBackgroundControl: Boolean(canvas.queryByLabelText('Hide Background Color'))
        }),
        () => user.selectOptions(canvas.getByRole('combobox', { name: /^Title Style/ }), 'legacy'),
        (before, after) =>
          before.smallTitle &&
          !before.legacyTitle &&
          !before.backgroundControl &&
          !before.hideBackgroundControl &&
          !after.smallTitle &&
          after.legacyTitle &&
          after.backgroundControl &&
          after.hideBackgroundControl
      )
      await openSection(canvas, canvasElement, 'Visual')
      const getBackgroundState = () => {
        const body = canvasElement.querySelector<HTMLElement>('.cove-visualization__body.sparkline')
        expect(body, 'Expected rendered Sparkline body').toBeTruthy()
        return {
          hasBackground: body!.classList.contains('component--has-background'),
          hidesBackground: body!.classList.contains('component--hide-background-color'),
          color: getComputedStyle(body!).backgroundColor
        }
      }
      const initialBackgroundColor = getBackgroundState().color
      await performAndAssert(
        'Theme background applies to the rendered Sparkline body',
        getBackgroundState,
        () => user.click(canvas.getByLabelText('Use Theme Background Color')),
        (before, after) =>
          !before.hasBackground &&
          after.hasBackground &&
          !after.hidesBackground &&
          after.color !== before.color &&
          after.color !== 'rgba(0, 0, 0, 0)'
      )
      const themeBackgroundColor = getBackgroundState().color
      await performAndAssert(
        'Hide Background Color makes the rendered Sparkline body transparent',
        getBackgroundState,
        () => user.click(canvas.getByLabelText('Hide Background Color')),
        (before, after) =>
          before.hasBackground &&
          !before.hidesBackground &&
          after.hasBackground &&
          after.hidesBackground &&
          after.color === 'rgba(0, 0, 0, 0)'
      )
      await performAndAssert(
        'Showing the background restores the selected theme treatment',
        getBackgroundState,
        () => user.click(canvas.getByLabelText('Hide Background Color')),
        (before, after) =>
          before.hidesBackground &&
          after.hasBackground &&
          !after.hidesBackground &&
          after.color === themeBackgroundColor
      )
      await performAndAssert(
        'Disabling theme background restores the Sparkline default treatment',
        getBackgroundState,
        () => user.click(canvas.getByLabelText('Use Theme Background Color')),
        (before, after) =>
          before.hasBackground &&
          !after.hasBackground &&
          !after.hidesBackground &&
          after.color === initialBackgroundColor
      )

      expect(canvasElement.querySelector('input[name="animate"]')).not.toBeInTheDocument()
      expect(canvas.queryByText(/^Animate Visualization$/)).not.toBeInTheDocument()

      await openSection(canvas, canvasElement, 'General')
      await performAndAssert(
        'Small title treatment restores the original Sparkline presentation',
        () => ({
          smallTitle: Boolean(canvasElement.querySelector('.cove-title--small')),
          legacyTitle: Boolean(canvasElement.querySelector('.cove-visualization__header'))
        }),
        () => user.selectOptions(canvas.getByRole('combobox', { name: /^Title Style/ }), 'small'),
        (before, after) => !before.smallTitle && before.legacyTitle && after.smallTitle && !after.legacyTitle
      )

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
