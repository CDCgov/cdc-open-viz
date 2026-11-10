import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, userEvent, within } from 'storybook/test'
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

// Source regression: docs/qa/regression-scripts/us-regional-map-regression.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Map Scripts',
  component: CdcEditor,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof CdcEditor>

const EXPECTED_LEGEND_ORDER = ['0', '12', '14', '20', '25', '26', '27', '28', '30']
const REGION_VALUES = {
  'Region 1': '20',
  'Region 2': '27',
  'Region 3': '26',
  'Region 4': '30',
  'Region 5': '14',
  'Region 6': '25',
  'Region 7': '0',
  'Region 8': '14',
  'Region 9': '28',
  'Region 10': '12'
} as const
const REGION_NAMES = Object.keys(REGION_VALUES) as Array<keyof typeof REGION_VALUES>

const getEditorAccordionButton = (canvasElement: HTMLElement, name: string) =>
  Array.from(canvasElement.querySelectorAll<HTMLElement>('[data-accordion-component="AccordionItemButton"]')).find(
    button => {
      const buttonName = button.textContent?.replace(/\s+/g, ' ').trim().toLowerCase()
      return buttonName === name.toLowerCase() && button.closest('.editor-panel')
    }
  )

const ensureEditorAccordionOpen = async (
  canvas: ReturnType<typeof within>,
  canvasElement: HTMLElement,
  name: string
) => {
  const button = getEditorAccordionButton(canvasElement, name)
  if (!button) {
    const availableSections = Array.from(
      canvasElement.querySelectorAll<HTMLElement>('.editor-panel [data-accordion-component="AccordionItemButton"]')
    )
      .map(section => section.textContent?.replace(/\s+/g, ' ').trim())
      .filter(Boolean)
    throw new Error(`Editor accordion "${name}" was not found. Available sections: ${availableSections.join(', ')}`)
  }
  if (button.getAttribute('aria-expanded') !== 'true') await openAccordion(canvas, name)
  expect(button).toHaveAttribute('aria-expanded', 'true')
  return button.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
}

const getColumnSelect = (columnsAccordion: HTMLElement, target: 'map-geography' | 'map-data-column') => {
  const select = columnsAccordion.querySelector<HTMLSelectElement>(`[data-required-field-control="${target}"]`)
  expect(select).toBeTruthy()
  return select!
}

const findRegionGroup = (canvasElement: HTMLElement, regionName: string) => {
  const escapedName = regionName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const exactHeading = new RegExp(`>\\s*${escapedName}\\s*<`, 'i')
  return Array.from(canvasElement.querySelectorAll<SVGGElement>('.map-container g.geo-group')).find(group =>
    exactHeading.test(group.getAttribute('data-tooltip-html') || '')
  )
}

const getRegionGroup = (canvasElement: HTMLElement, regionName: string) => {
  const group = findRegionGroup(canvasElement, regionName)
  expect(group, `Expected a rendered geography group for ${regionName}`).toBeTruthy()
  return group!
}

const getVisibleTooltip = (canvasElement: HTMLElement) =>
  Array.from(canvasElement.querySelectorAll<HTMLElement>('.tooltip-test')).find(element => {
    const style = getComputedStyle(element)
    return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0'
  })

const getLegendButtons = (canvasElement: HTMLElement) =>
  Array.from(canvasElement.querySelectorAll<HTMLButtonElement>('.legend-container__li-btn[aria-label^="Legend item "]'))

const getLegendOrder = (canvasElement: HTMLElement) =>
  getLegendButtons(canvasElement).length
    ? getLegendButtons(canvasElement).map(
        button =>
          button
            .getAttribute('aria-label')
            ?.replace(/^Legend item /, '')
            .replace(/ - Click to disable$/, '') || ''
      )
    : Array.from(canvasElement.querySelectorAll<SVGTextElement>('[aria-label="Map Legend"] svg text')).map(
        label => label.textContent?.trim() || ''
      )

const getLegendButton = (canvasElement: HTMLElement, label: string) => {
  const button = getLegendButtons(canvasElement).find(
    item => item.getAttribute('aria-label') === `Legend item ${label} - Click to disable`
  )
  expect(button, `Expected a legend button for ${label}`).toBeTruthy()
  return button!
}

const getLegendColor = (canvasElement: HTMLElement, label: string) => {
  const buttons = getLegendButtons(canvasElement)
  if (!buttons.length) {
    const labelIndex = getLegendOrder(canvasElement).indexOf(label)
    const blocks = Array.from(
      canvasElement.querySelectorAll<SVGElement>('[aria-label="Map Legend"] svg g.visx-group rect[fill]')
    )
    expect(labelIndex).toBeGreaterThanOrEqual(0)
    expect(blocks[labelIndex], `Expected a gradient legend swatch for ${label}`).toBeTruthy()
    return getComputedStyle(blocks[labelIndex]).fill
  }
  const shape = getLegendButton(canvasElement, label).querySelector<HTMLElement>('.legend-item')
  expect(shape, `Expected a legend swatch for ${label}`).toBeTruthy()
  return getComputedStyle(shape!).backgroundColor
}

const getRegionFill = (canvasElement: HTMLElement, regionName: string) =>
  getComputedStyle(getRegionGroup(canvasElement, regionName).querySelector<SVGPathElement>('path.single-geo')!).fill

const getAllRegionFills = (canvasElement: HTMLElement) =>
  Object.fromEntries(REGION_NAMES.map(region => [region, getRegionFill(canvasElement, region)]))

const getRegionLegendMismatches = (canvasElement: HTMLElement) =>
  REGION_NAMES.map(region => ({
    region,
    value: REGION_VALUES[region],
    fill: getRegionFill(canvasElement, region),
    legend: getLegendColor(canvasElement, REGION_VALUES[region])
  })).filter(({ fill, legend }) => fill !== legend)

const getCheckbox = (scope: HTMLElement, label: string) => {
  const checkbox = Array.from(scope.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')).find(input =>
    input.closest('label')?.textContent?.includes(label)
  )
  expect(checkbox).toBeTruthy()
  return checkbox!
}

const getSelectByLabel = (scope: HTMLElement, label: string) => {
  const select = Array.from(scope.querySelectorAll<HTMLSelectElement>('select')).find(element =>
    element.closest('label')?.querySelector('.edit-label')?.textContent?.includes(label)
  )
  expect(select, `Expected a select labeled ${label}`).toBeTruthy()
  return select!
}

export const MAP002: Story = {
  name: 'US Regional Map Regression',
  args: {
    config: {}
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    const consoleErrors: unknown[][] = []
    const unhandledRejections: unknown[] = []
    const originalConsoleError = console.error
    const recordConsoleError = (...args: unknown[]) => {
      consoleErrors.push(args)
      originalConsoleError(...args)
    }
    const recordUnhandledRejection = (event: PromiseRejectionEvent) => unhandledRejections.push(event.reason)

    console.error = recordConsoleError
    window.addEventListener('unhandledrejection', recordUnhandledRejection)

    try {
      const mapButton = await canvas.findByRole('button', { name: 'United States (HHS Regions)' })
      await user.click(mapButton)
      expect(canvas.getByText('2. Import Data')).toBeVisible()

      await user.click(canvas.getByText('2. Import Data'))
      const sampleDataButton = await canvas.findByRole('button', { name: 'United States: Region' })
      await user.click(sampleDataButton)

      expect(await canvas.findByText('Data Preview')).toBeVisible()
      for (const heading of ['Current Week Positivity', 'State', 'Change']) {
        expect(canvasElement.querySelector(`table.data-table th[title="${heading}"]`)).toBeVisible()
      }
      expect(canvasElement.querySelectorAll('table.data-table tbody tr')).toHaveLength(10)

      const verticalButton = canvas.getByRole('button', { name: /^Vertical/ })
      await user.click(verticalButton)
      expect(verticalButton).toHaveClass('active')

      const noSeriesButton = canvas.getByRole('button', { name: 'No', exact: true })
      const yesSeriesButton = canvas.getByRole('button', { name: 'Yes', exact: true })
      await performAndAssert(
        'No is the active multiple-series selection',
        () => ({ no: noSeriesButton.style.backgroundColor, yes: yesSeriesButton.style.backgroundColor }),
        async () => {
          await user.click(noSeriesButton)
          await user.tab()
        },
        (_before, after) => after.no === 'rgb(1, 93, 170)' && after.yes === 'rgb(0, 52, 93)'
      )

      await user.click(await canvas.findByRole('button', { name: 'Configure your visualization' }))
      await waitForEditor(canvas)

      const typeAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'Type')
      const regionTypeButton = within(typeAccordion).getByRole('button', { name: /U\.S\. Region/ })
      expect(regionTypeButton).toHaveClass('active')
      const mapTypeSelect = within(typeAccordion)
        .getAllByLabelText(/Map Type/, { selector: 'select' })
        .find(select => Array.from((select as HTMLSelectElement).options).some(option => option.value === 'navigation'))
      expect(mapTypeSelect).toHaveValue('data')
      const categoricalRadio = typeAccordion.querySelector<HTMLInputElement>('input[type="radio"][value="category"]')!
      expect(categoricalRadio).toBeTruthy()
      await user.click(categoricalRadio)
      expect(categoricalRadio).toBeChecked()

      let columnsAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'Columns')
      const geographySelect = getColumnSelect(columnsAccordion, 'map-geography')
      await waitForOptionsToPopulate(geographySelect)
      await user.selectOptions(geographySelect, 'State')
      expect(canvas.queryByRole('button', { name: 'Open Columns and focus Geography' })).not.toBeInTheDocument()

      const dataColumnSelect = getColumnSelect(columnsAccordion, 'map-data-column')
      await waitForOptionsToPopulate(dataColumnSelect)
      await performAndAssert(
        'Categorical data column renders all regional values',
        () => ({
          regionNames: REGION_NAMES.filter(region => findRegionGroup(canvasElement, region)),
          legendOrder: getLegendOrder(canvasElement),
          region1Tooltip: findRegionGroup(canvasElement, 'Region 1')?.getAttribute('data-tooltip-html') || ''
        }),
        async () => user.selectOptions(dataColumnSelect, 'Current Week Positivity'),
        (_before, after) =>
          after.regionNames.join('|') === REGION_NAMES.join('|') &&
          after.legendOrder.join('|') === EXPECTED_LEGEND_ORDER.join('|') &&
          after.region1Tooltip.includes('Current Week Positivity: 20')
      )
      await waitForAbsence('.map-required-fields-alerts', canvasElement)
      await waitForPresence('.map-container', canvasElement)
      await assertVisualizationRendered(canvasElement)

      columnsAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'Columns')
      const dataSectionToggle = columnsAccordion.querySelector<HTMLElement>(
        '[data-required-field-subsection="map-data-section"]'
      )!
      expect(dataSectionToggle).toBeTruthy()
      if (dataSectionToggle.getAttribute('aria-expanded') !== 'true') await user.click(dataSectionToggle)
      const dataLabelInput = (await waitForPresence('#input-columns-primary-label', canvasElement)) as HTMLInputElement
      await performAndAssert(
        'Data label updates rendered region details and table heading',
        () => getRegionGroup(canvasElement, 'Region 1').getAttribute('data-tooltip-html') || '',
        async () => {
          await user.clear(dataLabelInput)
          await user.type(dataLabelInput, 'positivity')
        },
        (before, after) =>
          before.includes('Current Week Positivity: 20') &&
          after.includes('positivity: 20') &&
          !after.includes('Current Week Positivity')
      )

      columnsAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'Columns')
      await user.click(within(columnsAccordion).getByRole('button', { name: 'Add Column' }))
      const newColumnButton = within(columnsAccordion).getByRole('button', { name: 'New Column' })
      await user.click(newColumnButton)
      let additionalColumn = newColumnButton.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
      const additionalColumnSelect = additionalColumn.querySelector<HTMLSelectElement>('select')!
      expect(additionalColumnSelect).toBeTruthy()
      await waitForOptionsToPopulate(additionalColumnSelect)
      await user.selectOptions(additionalColumnSelect, 'Change')

      const additionalLabelInput = within(additionalColumn).getByLabelText('Label') as HTMLInputElement
      await performAndAssert(
        'Additional Change label updates the column editor',
        () => within(columnsAccordion).queryByRole('button', { name: 'Change' })?.textContent || '',
        async () => {
          await user.clear(additionalLabelInput)
          await user.type(additionalLabelInput, 'Change')
        },
        (_before, after) => after.trim() === 'Change'
      )

      additionalColumn = within(columnsAccordion)
        .getByRole('button', { name: 'Change' })
        .closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
      const showInDataTable = getCheckbox(additionalColumn, 'Show in Data Table')
      const showInTooltips = getCheckbox(additionalColumn, 'Show in Tooltips')

      await performAndAssert(
        'Additional Change column appears in the data table',
        () =>
          Array.from(canvasElement.querySelectorAll('.data-table-container th')).map(header =>
            header.textContent?.trim()
          ),
        async () => user.click(showInDataTable),
        (before, after) => !before.includes('Change') && after.some(header => header?.includes('Change'))
      )
      await performAndAssert(
        'Additional Change column appears in region details',
        () => getRegionGroup(canvasElement, 'Region 2').getAttribute('data-tooltip-html') || '',
        async () => user.click(showInTooltips),
        (before, after) =>
          !before.includes('Change: -0.5') && after.includes('positivity: 27') && after.includes('Change: -0.5')
      )
      expect(getRegionGroup(canvasElement, 'Region 7')).toHaveAttribute(
        'data-tooltip-html',
        expect.stringContaining('positivity: 0')
      )
      expect(getRegionGroup(canvasElement, 'Region 7')).toHaveAttribute(
        'data-tooltip-html',
        expect.stringContaining('Change: 0')
      )

      const dataTableAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'Data Table')
      expect(getCheckbox(dataTableAccordion, 'Show Data Table')).toBeChecked()
      const dataTableHeading = canvasElement.querySelector<HTMLElement>('.data-table-heading')
      expect(dataTableHeading).toBeTruthy()
      if (dataTableHeading!.classList.contains('collapsed')) {
        await performAndAssert(
          'Supporting data table expands',
          () => ({
            collapsed: dataTableHeading!.classList.contains('collapsed'),
            hidden: canvasElement.querySelector<HTMLTableElement>('.data-table-container table')?.hidden
          }),
          async () => user.click(dataTableHeading!),
          (before, after) => before.collapsed && !after.collapsed && after.hidden === false
        )
      }
      const supportingTable = canvasElement.querySelector<HTMLTableElement>('.data-table-container table.data-table')!
      expect(supportingTable).toBeVisible()
      expect(within(supportingTable).getByRole('columnheader', { name: /positivity/ })).toBeVisible()
      expect(within(supportingTable).getByRole('columnheader', { name: /Change/ })).toBeVisible()
      const tableRows = Array.from(supportingTable.querySelectorAll('tbody tr'))
      expect(tableRows).toHaveLength(10)
      const region2Row = tableRows.find(row => row.textContent?.includes('Region 2'))!
      const region7Row = tableRows.find(row => row.textContent?.includes('Region 7'))!
      expect(region2Row).toBeTruthy()
      expect(region7Row).toBeTruthy()
      expect(Array.from(region2Row.querySelectorAll('td')).map(cell => cell.textContent?.trim())).toEqual([
        expect.stringContaining('Region 2'),
        '27',
        '-0.5'
      ])
      expect(Array.from(region7Row.querySelectorAll('td')).map(cell => cell.textContent?.trim())).toEqual([
        expect.stringContaining('Region 7'),
        '0',
        '0'
      ])

      const generalAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'General')
      const titleInput = generalAccordion.querySelector<HTMLInputElement>('[data-testid="title-input"]')!
      const superTitleInput = generalAccordion.querySelector<HTMLInputElement>('#input-general-none-superTitle')!
      const messageInput = generalAccordion.querySelector<HTMLTextAreaElement>('#input-general-none-introText')!
      const subtextInput = generalAccordion.querySelector<HTMLTextAreaElement>('#input-general-none-subtext')!
      const footnotesInput = generalAccordion.querySelector<HTMLTextAreaElement>('#input-general-none-footnotes')!

      await performAndAssert(
        'Title markup renders strong text',
        () => canvasElement.querySelector('.cove-title h3 strong')?.textContent || '',
        async () => {
          await user.clear(titleInput)
          await user.type(titleInput, '<strong>Regional positivity</strong>')
        },
        (_before, after) => after === 'Regional positivity'
      )
      await performAndAssert(
        'Super title markup renders emphasized text',
        () => canvasElement.querySelector('.cove-title > sup em')?.textContent || '',
        async () => {
          await user.clear(superTitleInput)
          await user.type(superTitleInput, '<em>United States HHS regions</em>')
        },
        (_before, after) => after === 'United States HHS regions'
      )
      await performAndAssert(
        'Message markup renders a CDC guidance link',
        () => {
          const link = canvasElement.querySelector<HTMLAnchorElement>('.introText a')
          return { text: link?.textContent || '', href: link?.href || '' }
        },
        async () => {
          await user.clear(messageInput)
          await user.type(messageInput, '<a href="https://www.cdc.gov/">View CDC positivity guidance</a>')
        },
        (_before, after) => after.text === 'View CDC positivity guidance' && after.href === 'https://www.cdc.gov/'
      )
      const guidanceLink = canvas.getByRole('link', { name: 'View CDC positivity guidance' })
      guidanceLink.focus()
      expect(guidanceLink).toHaveFocus()
      await performAndAssert(
        'Subtext markup renders subscript text',
        () => ({
          fullText: canvasElement.querySelector('.subtext')?.textContent || '',
          subscript: canvasElement.querySelector('.subtext sub')?.textContent || ''
        }),
        async () => {
          await user.clear(subtextInput)
          await user.type(subtextInput, 'Weekly regional values<sub>reported</sub>')
        },
        (_before, after) => after.fullText === 'Weekly regional valuesreported' && after.subscript === 'reported'
      )
      await performAndAssert(
        'Footnote markup renders superscript text',
        () => ({
          fullText: canvasElement.querySelector('.footnotes')?.textContent || '',
          superscript: canvasElement.querySelector('.footnotes sup')?.textContent || ''
        }),
        async () => {
          await user.clear(footnotesInput)
          await user.type(footnotesInput, 'Bundled fixture<sup>1</sup>')
        },
        (_before, after) => after.fullText === 'Bundled fixture1' && after.superscript === '1'
      )
      for (const selector of ['.cove-title', '.introText', '.subtext', '.footnotes']) {
        expect(canvasElement.querySelector(selector)?.textContent).not.toMatch(/<(strong|em|a|sub|sup)\b/i)
      }

      const legendAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'Legend')
      const legendStyleSelect = getSelectByLabel(legendAccordion, 'Legend Style')
      await performAndAssert(
        'Categorical legend uses keyboard-operable boxes',
        () => ({
          style: legendStyleSelect.value,
          order: getLegendOrder(canvasElement),
          buttonCount: getLegendButtons(canvasElement).length
        }),
        async () => user.selectOptions(legendStyleSelect, 'boxes'),
        (_before, after) =>
          after.style === 'boxes' &&
          after.buttonCount === 9 &&
          after.order.join('|') === EXPECTED_LEGEND_ORDER.join('|')
      )
      const legendTitleInput = within(legendAccordion).getByLabelText('Legend Title')
      const legendDescriptionInput = within(legendAccordion).getByLabelText('Legend Description')
      await performAndAssert(
        'Legend title markup renders strong text',
        () => canvasElement.querySelector('[aria-label="Map Legend"] h3 strong')?.textContent || '',
        async () => {
          await user.clear(legendTitleInput)
          await user.type(legendTitleInput, '<strong>Current week positivity</strong>')
        },
        (_before, after) => after === 'Current week positivity'
      )
      await performAndAssert(
        'Legend description markup renders emphasized text',
        () => canvasElement.querySelector('[aria-label="Map Legend"] p em')?.textContent || '',
        async () => {
          await user.clear(legendDescriptionInput)
          await user.type(legendDescriptionInput, '<em>Values from lowest to highest</em>')
        },
        (_before, after) => after === 'Values from lowest to highest'
      )
      expect(canvasElement.querySelector('[aria-label="Map Legend"]')?.textContent).not.toMatch(/<(strong|em)\b/i)

      const categorySortSelect = getSelectByLabel(legendAccordion, 'Category Sort')
      await performAndAssert(
        'Category sort exposes the authored order',
        () => ({
          mode: categorySortSelect.value,
          order: getLegendOrder(canvasElement),
          dragCount: canvasElement.querySelectorAll('.sort-list li').length
        }),
        async () => user.selectOptions(categorySortSelect, 'custom'),
        (_before, after) =>
          after.mode === 'custom' && after.dragCount === 9 && after.order.join('|') === EXPECTED_LEGEND_ORDER.join('|')
      )

      const moveCategoryWithKeyboard = async (label: string, direction: 'up' | 'down', positions: number) => {
        const dragHandle = Array.from(canvasElement.querySelectorAll<HTMLElement>('.sort-list li > div')).find(
          item => item.textContent?.trim() === label
        )!
        expect(dragHandle).toBeTruthy()
        dragHandle.focus()
        fireEvent.keyDown(dragHandle, { key: ' ', code: 'Space', keyCode: 32 })
        for (let index = 0; index < positions; index += 1) {
          fireEvent.keyDown(document.activeElement || dragHandle, {
            key: direction === 'up' ? 'ArrowUp' : 'ArrowDown',
            code: direction === 'up' ? 'ArrowUp' : 'ArrowDown',
            keyCode: direction === 'up' ? 38 : 40
          })
        }
        fireEvent.keyDown(document.activeElement || dragHandle, { key: ' ', code: 'Space', keyCode: 32 })
      }

      await performAndAssert(
        'Custom category order moves 30 before 0',
        () => getLegendOrder(canvasElement),
        async () => moveCategoryWithKeyboard('30', 'up', 8),
        (before, after) =>
          before.join('|') === EXPECTED_LEGEND_ORDER.join('|') && after.slice(0, 2).join('|') === '30|0'
      )
      await performAndAssert(
        'Custom category order restores ascending values',
        () => getLegendOrder(canvasElement),
        async () => moveCategoryWithKeyboard('30', 'down', 8),
        (before, after) => before[0] === '30' && after.join('|') === EXPECTED_LEGEND_ORDER.join('|')
      )

      await performAndAssert(
        'Every regional fill settles to its legend swatch',
        () => getRegionLegendMismatches(canvasElement),
        async () => {},
        (_before, after) => after.length === 0
      )

      let region2 = getRegionGroup(canvasElement, 'Region 2')
      await performAndAssert(
        'Hover displays Region 2 details',
        () => getVisibleTooltip(canvasElement)?.textContent || '',
        async () => user.hover(region2),
        (_before, after) =>
          after.toLowerCase().includes('region 2') && after.includes('positivity: 27') && after.includes('Change: -0.5')
      )
      await performAndAssert(
        'Region 2 hover details close',
        () => getVisibleTooltip(canvasElement)?.textContent || '',
        async () => user.unhover(region2),
        (before, after) => before.toLowerCase().includes('region 2') && after === ''
      )

      const fillsBeforeIsolation = getAllRegionFills(canvasElement)
      const fourteenLegendButton = getLegendButton(canvasElement, '14')
      fourteenLegendButton.focus()
      await performAndAssert(
        'Keyboard legend isolation emphasizes both 14 regions',
        () => ({
          fills: getAllRegionFills(canvasElement),
          showAll: Boolean(canvas.queryByRole('button', { name: 'Show All' }))
        }),
        async () => user.keyboard('{Enter}'),
        (_before, after) =>
          after.showAll &&
          REGION_NAMES.every(region =>
            REGION_VALUES[region] === '14'
              ? after.fills[region] === fillsBeforeIsolation[region]
              : after.fills[region] !== fillsBeforeIsolation[region]
          )
      )
      await performAndAssert(
        'Show All restores all regional fills',
        () => ({
          fills: getAllRegionFills(canvasElement),
          showAll: Boolean(canvas.queryByRole('button', { name: 'Show All' }))
        }),
        async () => user.click(canvas.getByRole('button', { name: 'Show All' })),
        (_before, after) =>
          !after.showAll && REGION_NAMES.every(region => after.fills[region] === fillsBeforeIsolation[region])
      )

      const interactivityAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'Interactivity')
      const detailDisplaySelect = getSelectByLabel(interactivityAccordion, 'Detail displays on')
      expect(detailDisplaySelect).toHaveValue('hover')
      await performAndAssert(
        'Click detail mode removes the hover tooltip',
        () => ({
          mode: detailDisplaySelect.value,
          hasVisibleTooltip: Boolean(getVisibleTooltip(canvasElement)),
          hasClickLabel: Boolean(interactivityAccordion.querySelector('input[name="tooltips-null-linkLabel"]'))
        }),
        async () => user.selectOptions(detailDisplaySelect, 'click'),
        (before, after) =>
          before.mode === 'hover' &&
          !before.hasClickLabel &&
          after.mode === 'click' &&
          !after.hasVisibleTooltip &&
          after.hasClickLabel
      )
      region2 = getRegionGroup(canvasElement, 'Region 2')
      await user.hover(region2)
      expect(getVisibleTooltip(canvasElement)).toBeUndefined()
      await performAndAssert(
        'Click detail mode opens Region 2 modal details',
        () => canvasElement.querySelector('.modal-content')?.textContent || '',
        async () => user.click(region2),
        (_before, after) =>
          after.toLowerCase().includes('region 2') && after.includes('positivity: 27') && after.includes('Change: -0.5')
      )
      const modalClose = canvasElement.querySelector<HTMLElement>('.modal-close')
      expect(modalClose).toBeTruthy()
      expect(modalClose).toBeVisible()
      await performAndAssert(
        'Region 2 click modal closes without stale details',
        () => canvasElement.querySelector('.modal-content')?.textContent || '',
        async () => user.click(modalClose!),
        (before, after) => before.toLowerCase().includes('region 2') && after === ''
      )
      await user.selectOptions(detailDisplaySelect, 'hover')
      region2 = getRegionGroup(canvasElement, 'Region 2')
      await user.click(region2)
      expect(canvasElement.querySelector('.modal-content')).not.toBeInTheDocument()
      await user.unhover(region2)
      await performAndAssert(
        'Hover details return after restoring hover mode',
        () => getVisibleTooltip(canvasElement)?.textContent || '',
        async () => user.hover(region2),
        (_before, after) =>
          after.toLowerCase().includes('region 2') && after.includes('positivity: 27') && after.includes('Change: -0.5')
      )
      await user.unhover(region2)

      const visualAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'Visual')
      const geoBorderColorSelect = getSelectByLabel(visualAccordion, 'Geo Border Color')
      await performAndAssert(
        'Regional boundary color changes to white',
        () => ({
          strokes: REGION_NAMES.map(
            region =>
              getComputedStyle(getRegionGroup(canvasElement, region).querySelector<SVGPathElement>('path.single-geo')!)
                .stroke
          ),
          fills: getAllRegionFills(canvasElement)
        }),
        async () => user.selectOptions(geoBorderColorSelect, 'sameAsBackground'),
        (before, after) =>
          before.strokes.some(stroke => stroke !== 'rgb(255, 255, 255)') &&
          after.strokes.every(stroke => stroke === 'rgb(255, 255, 255)') &&
          REGION_NAMES.every(region => after.fills[region] !== '')
      )

      const paletteToggleGroup = Array.from(visualAccordion.querySelectorAll<HTMLElement>('.input-group')).find(group =>
        group.textContent?.includes('Use selected palette in reverse order')
      )!
      const paletteToggle = paletteToggleGroup.querySelector<HTMLElement>('.cove-input__slider--small')!
      expect(paletteToggle).toBeTruthy()
      const colorsBeforeReverse = EXPECTED_LEGEND_ORDER.map(label => getLegendColor(canvasElement, label))
      await performAndAssert(
        'Reverse palette changes region and legend colors without changing authored order',
        () => ({
          order: getLegendOrder(canvasElement),
          colors: EXPECTED_LEGEND_ORDER.map(label => getLegendColor(canvasElement, label)),
          region2: getRegionFill(canvasElement, 'Region 2')
        }),
        async () => user.click(paletteToggle),
        (before, after) =>
          before.order.join('|') === EXPECTED_LEGEND_ORDER.join('|') &&
          after.order.join('|') === EXPECTED_LEGEND_ORDER.join('|') &&
          after.colors.slice(1).join('|') === colorsBeforeReverse.slice(1).reverse().join('|') &&
          after.colors[0] !== colorsBeforeReverse[0] &&
          before.region2 !== after.region2
      )
      await performAndAssert(
        'Every reversed regional fill settles to its legend swatch',
        () => getRegionLegendMismatches(canvasElement),
        async () => {},
        (_before, after) => after.length === 0
      )

      const tooltipOpacityInput = within(visualAccordion).getByLabelText('Tooltip Opacity (%)') as HTMLInputElement
      await performAndAssert(
        'Tooltip opacity renders at 60 percent',
        () => {
          const tooltip = getVisibleTooltip(canvasElement)
          return {
            text: tooltip?.textContent || '',
            background: tooltip ? getComputedStyle(tooltip).backgroundColor : ''
          }
        },
        async () => {
          await user.clear(tooltipOpacityInput)
          await user.type(tooltipOpacityInput, '60')
          await user.tab()
          await user.hover(region2)
        },
        (_before, after) =>
          after.text.toLowerCase().includes('region 2') &&
          after.text.includes('positivity: 27') &&
          after.text.includes('Change: -0.5') &&
          after.background === 'rgba(255, 255, 255, 0.6)'
      )

      expect(getLegendOrder(canvasElement)).toEqual(EXPECTED_LEGEND_ORDER)
      const unexpectedConsoleErrors = consoleErrors
        .map(args => args.map(value => String(value)).join(' '))
        .filter(
          message =>
            !message.includes('A component is changing an uncontrolled input to be controlled') ||
            !message.includes('packages/core/components/EditorPanel/Inputs.tsx')
        )
      expect(unexpectedConsoleErrors).toEqual([])
      expect(unhandledRejections).toEqual([])
    } finally {
      console.error = originalConsoleError
      window.removeEventListener('unhandledrejection', recordUnhandledRejection)
    }
  }
}
