import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, fn, userEvent, within } from 'storybook/test'
import {
  assertVisualizationRendered,
  openAccordion,
  performAndAssert,
  waitForAbsence,
  waitForEditor,
  waitForOptionsToPopulate,
  waitForPresence
} from '@cdc/core/helpers/testing'
import worldConfigJson from '../../../map/examples/gallery/world.json?raw'
import CdcEditor from '../CdcEditor'

// Source regression: docs/qa/regression-scripts/world-map-regression.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Map Scripts',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>

const WORLD_DATA_URL = 'packages/map/examples/gallery/world.json'
const ROUND_ONE_LABELS = ['0 - 19.2', '19.3 - 40.4', '40.5 - 59.6', '59.7 - 77.8', '77.9 - 99.0']
const ROUND_ZERO_LABELS = ['0 - 19', '19 - 40', '40 - 60', '60 - 78', '78 - 99']

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
    const sections = Array.from(
      canvasElement.querySelectorAll<HTMLElement>('.editor-panel [data-accordion-component="AccordionItemButton"]')
    )
      .map(section => section.textContent?.replace(/\s+/g, ' ').trim())
      .filter(Boolean)
    throw new Error(`Editor accordion "${name}" was not found. Available sections: ${sections.join(', ')}`)
  }
  if (button.getAttribute('aria-expanded') !== 'true') await openAccordion(canvas, name)
  expect(button).toHaveAttribute('aria-expanded', 'true')
  return button.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
}

const getCheckbox = (scope: HTMLElement, label: string) => {
  const checkbox = Array.from(scope.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')).find(input =>
    input.closest('label')?.textContent?.includes(label)
  )
  expect(checkbox, `Expected a checkbox labeled ${label}`).toBeTruthy()
  return checkbox!
}

const getSelectByLabel = (scope: HTMLElement, label: string) => {
  const select = Array.from(scope.querySelectorAll<HTMLSelectElement>('select')).find(element =>
    element.closest('label')?.textContent?.replace(/\s+/g, ' ').includes(label)
  )
  expect(select, `Expected a select labeled ${label}`).toBeTruthy()
  return select!
}

const getCountryPath = (canvasElement: HTMLElement, code: string) => {
  const path = canvasElement.querySelector<SVGPathElement>(`path[data-country-code="${code}"]`)
  expect(path, `Expected a rendered world geography for ${code}`).toBeTruthy()
  return path!
}

const getCountryGroup = (canvasElement: HTMLElement, code: string) => getCountryPath(canvasElement, code).parentElement!

const getCountryTooltipHtml = (canvasElement: HTMLElement, code: string) =>
  getCountryGroup(canvasElement, code).getAttribute('data-tooltip-html') || ''

const getCountryFill = (canvasElement: HTMLElement, code: string) =>
  getComputedStyle(getCountryPath(canvasElement, code)).fill

const getVisibleTooltip = (canvasElement: HTMLElement) =>
  Array.from(canvasElement.querySelectorAll<HTMLElement>('.tooltip-test')).find(element => {
    const style = getComputedStyle(element)
    return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0'
  })

const getLegendText = (canvasElement: HTMLElement) =>
  Array.from(canvasElement.querySelectorAll<SVGTextElement>('[aria-label="Map Legend"] svg text'))
    .map(label => label.textContent?.trim() || '')
    .filter(label => label && label !== 'No data')

const getNumericLegendColors = (canvasElement: HTMLElement) =>
  Array.from(canvasElement.querySelectorAll<SVGElement>('[aria-label="Map Legend"] svg g.visx-group rect[fill]'))
    .map(swatch => getComputedStyle(swatch).fill)
    .filter(color => /^rgba?\(/.test(color) && !isGray(color))

const getSpecialLegendButton = (canvasElement: HTMLElement) => {
  return Array.from(canvasElement.querySelectorAll<HTMLButtonElement>('.legend-container__li-btn')).find(item =>
    item.textContent?.includes('Special Category 5')
  )
}

const getSpecialLegendColor = (canvasElement: HTMLElement) => {
  const buttonShape = getSpecialLegendButton(canvasElement)?.querySelector<HTMLElement>('.legend-item')
  if (buttonShape) return getComputedStyle(buttonShape).backgroundColor

  const gradientShape = Array.from(
    canvasElement.querySelectorAll<SVGRectElement>('[aria-label="Map Legend"] svg rect[fill]')
  ).find(rect => getComputedStyle(rect).fill === 'rgb(180, 180, 180)')
  expect(gradientShape, 'Expected Special Category 5 gradient swatch').toBeTruthy()
  return getComputedStyle(gradientShape!).fill
}

const getTable = (canvasElement: HTMLElement) => {
  const table = canvasElement.querySelector<HTMLTableElement>('.data-table-container table.data-table')
  expect(table).toBeTruthy()
  return table!
}

const getTableRow = (canvasElement: HTMLElement, country: string) => {
  const row = within(getTable(canvasElement)).getByText(country).closest('tr')
  expect(row, `Expected a data-table row for ${country}`).toBeTruthy()
  return row!
}

const isGray = (color: string) => {
  const channels = color.match(/\d+/g)?.slice(0, 3).map(Number)
  return channels?.length === 3 && Math.max(...channels) - Math.min(...channels) <= 3
}

const setNumberInput = (input: HTMLInputElement, value: string) => {
  const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set
  setter?.call(input, value)
  fireEvent.input(input, { target: { value } })
  fireEvent.change(input, { target: { value } })
  fireEvent.blur(input)
}

export const MAP003: Story = {
  name: 'World Numeric Map Regressions',
  args: { config: {} },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    const originalFetch = window.fetch
    const originalOpen = window.open
    const originalConsoleError = console.error
    const consoleErrors: unknown[][] = []
    const unhandledRejections: unknown[] = []
    const fixtureFetches: string[] = []
    const openMock = fn(() => null)
    const recordConsoleError = (...args: unknown[]) => {
      consoleErrors.push(args)
    }
    const recordUnhandledRejection = (event: PromiseRejectionEvent) => unhandledRejections.push(event.reason)

    window.fetch = (input, init) => {
      const requestUrl = input instanceof Request ? input.url : String(input)
      const pathname = new URL(requestUrl, window.location.origin).pathname
      if (pathname === `/${WORLD_DATA_URL}`) {
        fixtureFetches.push(pathname)
        return Promise.resolve(
          new Response(worldConfigJson, { status: 200, headers: { 'Content-Type': 'application/json' } })
        )
      }
      return originalFetch(input, init)
    }
    window.open = openMock
    console.error = recordConsoleError
    window.addEventListener('unhandledrejection', recordUnhandledRejection)

    try {
      await user.click(await canvas.findByRole('button', { name: 'World' }))
      expect(canvas.getByText('2. Import Data')).toBeVisible()
      await user.click(canvas.getByText('2. Import Data'))
      await user.click(await canvas.findByText('Load from URL'))

      const urlInput = await canvas.findByLabelText('Load data from external URL')
      await user.type(urlInput, WORLD_DATA_URL)
      const keepUrl = canvas.getByLabelText(/Always load from URL/)
      expect(keepUrl).not.toBeChecked()
      await user.click(canvas.getByRole('button', { name: 'Save & Load' }))
      expect(fixtureFetches).toEqual([`/${WORLD_DATA_URL}`])

      expect(await canvas.findByText('Data Preview')).toBeVisible()
      const previewHeadings = Array.from(canvasElement.querySelectorAll<HTMLElement>('table.data-table th[title]')).map(
        heading => heading.getAttribute('title')
      )
      expect(previewHeadings).toEqual(['Country', 'Rate', 'URL', 'Category'])
      expect(canvas.getByText('Page 1 of 10')).toBeVisible()
      expect(canvasElement.querySelectorAll('table.data-table tbody tr')).toHaveLength(25)
      for (let page = 2; page <= 10; page += 1) {
        await user.click(canvas.getByTitle('Next Page'))
        await expect(canvas.findByText(`Page ${page} of 10`)).resolves.toBeVisible()
        expect(canvasElement.querySelectorAll('table.data-table tbody tr')).toHaveLength(page === 10 ? 23 : 25)
      }

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

      await user.click(canvas.getByRole('button', { name: 'Configure your visualization' }))
      await waitForEditor(canvas)
      const typeAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'Type')
      expect(within(typeAccordion).getByRole('button', { name: /^World/ })).toHaveClass('active')
      const mapType = within(typeAccordion)
        .getAllByLabelText(/Map Type/, { selector: 'select' })
        .find(select => Array.from((select as HTMLSelectElement).options).some(option => option.value === 'navigation'))
      expect(mapType).toHaveValue('data')
      expect(within(typeAccordion).getByRole('radio', { name: /Numeric\/Quantitative/ })).toBeChecked()

      let columnsAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'Columns')
      const geographySelect = columnsAccordion.querySelector<HTMLSelectElement>(
        '[data-required-field-control="map-geography"]'
      )!
      expect(geographySelect).toBeTruthy()
      await waitForOptionsToPopulate(geographySelect)
      await user.selectOptions(geographySelect, 'Country')
      expect(canvas.queryByRole('button', { name: 'Open Columns and focus Geography' })).not.toBeInTheDocument()

      const dataSelect = columnsAccordion.querySelector<HTMLSelectElement>(
        '[data-required-field-control="map-data-column"]'
      )!
      expect(dataSelect).toBeTruthy()
      await waitForOptionsToPopulate(dataSelect)
      await performAndAssert(
        'Rate renders the five-class world map',
        () => getLegendText(canvasElement),
        async () => user.selectOptions(dataSelect, 'Rate'),
        (_before, after) => after.length === 5
      )
      await waitForPresence('path[data-country-code="AFG"]', canvasElement)
      expect(getCountryTooltipHtml(canvasElement, 'AFG')).toContain('Rate: 10')
      await waitForAbsence('.map-required-fields-alerts', canvasElement)
      await assertVisualizationRendered(canvasElement)
      expect(
        canvasElement.querySelector('path[data-country-code="CIV"]'),
        "Expected the accented Côte d'Ivoire fixture row to render as the CIV world geography"
      ).toBeTruthy()
      expect(getCountryTooltipHtml(canvasElement, 'CIV')).toMatch(/Côte d'ivoire/i)

      columnsAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'Columns')
      const dataSection = columnsAccordion.querySelector<HTMLElement>(
        '[data-required-field-subsection="map-data-section"]'
      )!
      expect(dataSection).toBeTruthy()
      if (dataSection.getAttribute('aria-expanded') !== 'true') await user.click(dataSection)
      const dataPanel = dataSection.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
      const roundInput = within(dataPanel).getByLabelText('Round') as HTMLInputElement
      await performAndAssert(
        'Round one renders exact decimal ranges and value',
        () => ({ labels: getLegendText(canvasElement), tooltip: getCountryTooltipHtml(canvasElement, 'AFG') }),
        async () => setNumberInput(roundInput, '1'),
        (_before, after) =>
          after.labels.join('|') === ROUND_ONE_LABELS.join('|') && after.tooltip.includes('Rate: 10.0')
      )
      await performAndAssert(
        'Round zero restores exact integer ranges and value',
        () => ({ labels: getLegendText(canvasElement), tooltip: getCountryTooltipHtml(canvasElement, 'AFG') }),
        async () => setNumberInput(roundInput, '0'),
        (_before, after) =>
          after.labels.join('|') === ROUND_ZERO_LABELS.join('|') &&
          after.tooltip.includes('Rate: 10') &&
          !after.tooltip.includes('Rate: 10.0')
      )
      const commaCheckbox = getCheckbox(dataPanel, 'Add Commas to Numbers')
      expect(commaCheckbox).not.toBeChecked()
      await performAndAssert(
        'Comma formatting preserves the fixture value',
        () => getCountryTooltipHtml(canvasElement, 'AFG'),
        async () => user.click(commaCheckbox),
        (_before, after) => after.includes('Rate: 10') && !after.includes('Rate: 1,0')
      )
      expect(commaCheckbox).toBeChecked()

      columnsAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'Columns')
      await user.click(within(columnsAccordion).getByRole('button', { name: 'Add Special Class' }))
      const specialButton = within(columnsAccordion).getByRole('button', { name: 'Special Class 1' })
      await user.click(specialButton)
      const specialItem = specialButton.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
      await user.selectOptions(getSelectByLabel(specialItem, 'Data Key'), 'Category')
      const specialValue = getSelectByLabel(specialItem, 'Value')
      await waitForOptionsToPopulate(specialValue)
      await user.selectOptions(specialValue, 'Category 5')
      const specialLabel = within(specialItem).getByLabelText('Label')
      await performAndAssert(
        'Special class label renders in the gradient legend',
        () => canvasElement.querySelector('[aria-label="Map Legend"]')?.textContent || '',
        async () => user.type(specialLabel, 'Special Category 5'),
        (_before, after) => after.replace(/\s+/g, '').includes('SpecialCategory5')
      )
      await waitForPresence('[aria-label="Map Legend"] svg rect[fill="#b4b4b4"]', canvasElement)
      const specialColor = getSpecialLegendColor(canvasElement)
      expect(isGray(specialColor)).toBe(true)
      expect(getCountryFill(canvasElement, 'ARG')).toBe(specialColor)

      columnsAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'Columns')
      await user.click(within(columnsAccordion).getByRole('button', { name: 'Add Column' }))
      const newColumnButton = within(columnsAccordion).getByRole('button', { name: 'New Column' })
      await user.click(newColumnButton)
      let additionalItem = newColumnButton.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
      const additionalSelect = getSelectByLabel(additionalItem, 'Column')
      await waitForOptionsToPopulate(additionalSelect)
      await user.selectOptions(additionalSelect, 'Category')
      const additionalLabel = within(additionalItem).getByLabelText('Label')
      await performAndAssert(
        'Additional Category label updates the column editor',
        () => within(columnsAccordion).queryByRole('button', { name: 'Category' })?.textContent || '',
        async () => {
          await user.clear(additionalLabel)
          await user.type(additionalLabel, 'Category')
        },
        (_before, after) => after.trim() === 'Category'
      )
      additionalItem = within(columnsAccordion)
        .getByRole('button', { name: 'Category' })
        .closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
      await user.click(getCheckbox(additionalItem, 'Show in Data Table'))
      await user.click(getCheckbox(additionalItem, 'Show in Tooltips'))
      expect(getCountryTooltipHtml(canvasElement, 'AFG')).toContain('Category: Category 1')
      expect(getCountryTooltipHtml(canvasElement, 'CIV')).toContain('Category: Special Category 5')
      const afghanistan = getCountryGroup(canvasElement, 'AFG')
      await performAndAssert(
        'Afghanistan hover exposes geography, rate, and additional column',
        () => getVisibleTooltip(canvasElement)?.textContent || '',
        async () => user.hover(afghanistan),
        (_before, after) =>
          after.includes('Afghanistan') && after.includes('Rate: 10') && after.includes('Category: Category 1')
      )
      await user.unhover(afghanistan)
      const coteDIvoire = getCountryGroup(canvasElement, 'CIV')
      await performAndAssert(
        "Côte d'Ivoire hover exposes the accented geography and additional column",
        () => getVisibleTooltip(canvasElement)?.textContent || '',
        async () => user.hover(coteDIvoire),
        (_before, after) =>
          /Côte d'ivoire/i.test(after) && after.includes('Rate: 56') && after.includes('Category: Special Category 5')
      )
      await user.unhover(coteDIvoire)

      const generalAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'General')
      const titleInput = within(generalAccordion).getByRole('textbox', { name: /^Title/ })
      await performAndAssert(
        'Title markup renders strong text',
        () => canvasElement.querySelector('.cove-title h3 strong')?.textContent || '',
        async () => user.type(titleInput, '<strong>World rate regression</strong>'),
        (_before, after) => after === 'World rate regression'
      )

      const legendAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'Legend')
      const legendTitle = within(legendAccordion).getByLabelText('Legend Title')
      const legendDescription = within(legendAccordion).getByLabelText('Legend Description')
      await performAndAssert(
        'Legend title markup renders strong text',
        () => canvasElement.querySelector('[aria-label="Map Legend"] h3 strong')?.textContent || '',
        async () => user.type(legendTitle, '<strong>World rate ranges</strong>'),
        (_before, after) => after === 'World rate ranges'
      )
      await performAndAssert(
        'Legend description markup renders emphasized text',
        () => canvasElement.querySelector('[aria-label="Map Legend"] p em')?.textContent || '',
        async () => user.type(legendDescription, '<em>Five quantile classes plus special category</em>'),
        (_before, after) => after === 'Five quantile classes plus special category'
      )
      expect(canvasElement.querySelector('[aria-label="Map Legend"]')?.textContent).not.toMatch(/<(strong|em)\b/i)
      const unifiedLegend = getCheckbox(legendAccordion, 'Unified Legend')
      await user.click(unifiedLegend)
      expect(unifiedLegend).toBeChecked()
      const unifiedLegendText = canvasElement.querySelector('[aria-label="Map Legend"]')?.textContent || ''
      for (const label of getLegendText(canvasElement)) expect(unifiedLegendText).toContain(label)
      expect(unifiedLegendText.replace(/\s+/g, '')).toContain('SpecialCategory5')

      const dataTableAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'Data Table')
      expect(getCheckbox(dataTableAccordion, 'Show Data Table')).toBeChecked()
      const tableTitle = dataTableAccordion.querySelector<HTMLInputElement>('#dataTableTitle')!
      const captionInput = Array.from(dataTableAccordion.querySelectorAll<HTMLTextAreaElement>('textarea')).find(
        textarea => textarea.closest('label')?.textContent?.includes('Screen Reader Description')
      )!
      expect(tableTitle).toBeTruthy()
      expect(captionInput).toBeTruthy()
      await performAndAssert(
        'Data table title updates the rendered heading',
        () => canvasElement.querySelector('.data-table-heading')?.textContent?.trim() || '',
        async () => {
          await user.clear(tableTitle)
          await user.type(tableTitle, 'World rate data')
        },
        (_before, after) => after.includes('World rate data')
      )
      await performAndAssert(
        'Screen reader description updates the table caption',
        () => canvasElement.querySelector('.data-table-container table.data-table caption')?.textContent?.trim() || '',
        async () => user.type(captionInput, 'Country rates and categories'),
        (_before, after) => after.includes('Country rates and categories')
      )
      const expandedCheckbox = getCheckbox(dataTableAccordion, 'Map loads with data table expanded')
      if (!expandedCheckbox.checked) await user.click(expandedCheckbox)
      const searchCheckbox = getCheckbox(dataTableAccordion, 'Enable Search')
      if (!searchCheckbox.checked) await user.click(searchCheckbox)
      const tableHeading = canvasElement.querySelector<HTMLElement>('.data-table-heading')!
      expect(tableHeading).toHaveTextContent('World rate data')
      if (tableHeading.classList.contains('collapsed')) await user.click(tableHeading)
      expect(tableHeading).not.toHaveClass('collapsed')
      await waitForPresence('.data-table-container table.data-table', canvasElement)
      const table = getTable(canvasElement)
      expect(table).toBeVisible()
      expect(table.querySelector('caption')).toHaveTextContent('Country rates and categories')
      for (const heading of ['Location', 'Rate', 'Category']) {
        expect(within(table).getByRole('columnheader', { name: new RegExp(heading) })).toBeVisible()
      }
      const tableSearch = canvas.getByRole('searchbox', { name: 'Filter table rows' })
      await user.type(tableSearch, 'Afghanistan')
      expect(within(table).getByText('Afghanistan')).toBeVisible()
      expect(within(table).queryByText('Argentina')).not.toBeInTheDocument()
      const afghanistanRow = within(table).getByText('Afghanistan').closest('tr')!
      expect(afghanistanRow).toHaveTextContent('10')
      expect(afghanistanRow).toHaveTextContent('Category 1')
      expect(commaCheckbox).toBeChecked()
      await user.clear(tableSearch)
      expect(within(table).getByText('Argentina')).toBeVisible()

      const interactivityAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'Interactivity')
      const urlColumn = within(interactivityAccordion).getByLabelText('Link URL column')
      await user.selectOptions(urlColumn, 'URL')
      await user.selectOptions(within(interactivityAccordion).getByLabelText('Open links in'), '_blank')
      const mapLinks = within(interactivityAccordion).getByLabelText('Clicking a map location opens its link')
      const tableLinks = within(interactivityAccordion).getByLabelText('Show links in the data table')
      if (!(mapLinks as HTMLInputElement).checked) await user.click(mapLinks)
      if (!(tableLinks as HTMLInputElement).checked) await user.click(tableLinks)
      const tableLink = within(table).getByRole('link', { name: 'Afghanistan' })
      await user.click(tableLink)
      expect(openMock).toHaveBeenLastCalledWith('https://www.cdc.gov/', '_blank')
      openMock.mockClear()
      await user.click(getCountryGroup(canvasElement, 'AFG'))
      expect(openMock).toHaveBeenCalledTimes(1)
      expect(openMock).toHaveBeenLastCalledWith('https://www.cdc.gov/', '_blank')

      const filtersAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'Filters')
      await user.click(within(filtersAccordion).getByRole('button', { name: 'Add Filter' }))
      const filterItem = within(filtersAccordion)
        .getByRole('button', { name: /Filter 1$/ })
        .closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
      await user.selectOptions(within(filterItem).getByRole('combobox', { name: 'Filter' }), 'Country')
      const filterDefault = Array.from(filterItem.querySelectorAll('label'))
        .find(label => label.textContent?.includes('Filter Default Value (Country)'))
        ?.querySelector('select')
      expect(filterDefault).toBeTruthy()
      await user.selectOptions(filterDefault, 'Canada')
      const filterLabel = within(filterItem).getByLabelText('Label')
      await user.type(filterLabel, 'Country')
      expect(getCheckbox(filterItem, 'Show Filter')).toBeChecked()
      const runtimeFilter = await canvas.findByLabelText('Filter by Country')
      expect(runtimeFilter).toHaveValue('Canada')
      expect(getTableRow(canvasElement, 'Canada')).toHaveTextContent('89')
      expect(getTableRow(canvasElement, 'Canada')).toHaveTextContent('Category 3')
      expect(getTable(canvasElement)).not.toHaveTextContent('Argentina')
      const canada = getCountryGroup(canvasElement, 'CAN')
      await performAndAssert(
        'Canada filter renders its exact details',
        () => getVisibleTooltip(canvasElement)?.textContent || '',
        async () => user.hover(canada),
        (_before, after) =>
          after.includes('Canada') && after.includes('Rate: 89') && after.includes('Category: Category 3')
      )
      await user.unhover(canada)
      expect(canvasElement.querySelector('[aria-label="Map Legend"]')?.textContent).toBe(unifiedLegendText)
      await user.selectOptions(runtimeFilter, 'Argentina')
      expect(runtimeFilter).toHaveValue('Argentina')
      expect(getTableRow(canvasElement, 'Argentina')).toHaveTextContent('23')
      expect(getTableRow(canvasElement, 'Argentina')).toHaveTextContent('Special Category 5')
      expect(getTable(canvasElement)).not.toHaveTextContent('Canada')
      await performAndAssert(
        'Argentina filter preserves special-class details',
        () => ({
          tooltip: getVisibleTooltip(canvasElement)?.textContent || '',
          fill: getCountryFill(canvasElement, 'ARG')
        }),
        async () => user.hover(getCountryGroup(canvasElement, 'ARG')),
        (_before, after) =>
          after.tooltip.includes('Argentina') &&
          after.tooltip.includes('Rate: 23') &&
          after.tooltip.includes('Category: Special Category 5') &&
          isGray(after.fill)
      )
      await user.unhover(getCountryGroup(canvasElement, 'ARG'))
      expect(canvasElement.querySelector('[aria-label="Map Legend"]')?.textContent).toBe(unifiedLegendText)

      const currentInteractivityAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'Interactivity')
      const currentMapLinks = within(currentInteractivityAccordion).getByLabelText(
        'Clicking a map location opens its link'
      )
      expect(currentMapLinks).toBeChecked()
      await user.click(currentMapLinks)
      expect(currentMapLinks).not.toBeChecked()
      const detailDisplay = getSelectByLabel(currentInteractivityAccordion, 'Detail displays on')
      await user.selectOptions(detailDisplay, 'click')
      await user.click(getCountryGroup(canvasElement, 'ARG'))
      const modal = await waitForPresence('.modal-content', canvasElement)
      expect(modal).toHaveTextContent('Argentina')
      expect(modal).toHaveTextContent('Rate: 23')
      expect(modal).toHaveTextContent('Category: Special Category 5')
      await user.click(canvasElement.querySelector<HTMLElement>('.modal-close')!)
      await waitForAbsence('.modal-content', canvasElement)
      expect(openMock).toHaveBeenCalledTimes(1)
      await user.selectOptions(detailDisplay, 'hover')
      await user.click(getCountryGroup(canvasElement, 'ARG'))
      expect(canvasElement.querySelector('.modal-content')).not.toBeInTheDocument()
      expect(openMock).toHaveBeenCalledTimes(1)
      await user.unhover(getCountryGroup(canvasElement, 'ARG'))
      await performAndAssert(
        'Restored hover renders current Argentina details',
        () => getVisibleTooltip(canvasElement)?.textContent || '',
        async () => user.hover(getCountryGroup(canvasElement, 'ARG')),
        (_before, after) =>
          after.includes('Argentina') && after.includes('Rate: 23') && after.includes('Category: Special Category 5')
      )
      await user.unhover(getCountryGroup(canvasElement, 'ARG'))

      const visualAccordion = await ensureEditorAccordionOpen(canvas, canvasElement, 'Visual')
      const borderSelect = getSelectByLabel(visualAccordion, 'Geo Border Color')
      await performAndAssert(
        'World boundaries change to white',
        () => ['ARG', 'CAN'].map(code => getComputedStyle(getCountryPath(canvasElement, code)).stroke),
        async () => user.selectOptions(borderSelect, 'sameAsBackground'),
        (before, after) =>
          before.some(stroke => stroke !== 'rgb(255, 255, 255)') &&
          after.every(stroke => stroke === 'rgb(255, 255, 255)')
      )
      await user.selectOptions(canvas.getByLabelText('Filter by Country'), 'Canada')
      const canadaFillBeforeReverse = getCountryFill(canvasElement, 'CAN')
      const numericColorsBeforeReverse = getNumericLegendColors(canvasElement)
      expect(
        numericColorsBeforeReverse,
        `Expected five numeric legend colors: ${numericColorsBeforeReverse.join(', ')}`
      ).toHaveLength(5)
      const specialFillBeforeReverse = getSpecialLegendColor(canvasElement)
      const reversePaletteCheckbox = visualAccordion.querySelector<HTMLInputElement>('input[name*="isReversed"]')!
      expect(reversePaletteCheckbox).toBeTruthy()
      expect(reversePaletteCheckbox).not.toBeChecked()
      await performAndAssert(
        'Reversing the palette updates all numeric swatches and Canada',
        () => ({
          checked: reversePaletteCheckbox.checked,
          colors: getNumericLegendColors(canvasElement),
          canadaFill: getCountryFill(canvasElement, 'CAN')
        }),
        async () => user.click(reversePaletteCheckbox.parentElement!),
        (_before, after) =>
          after.checked &&
          after.canadaFill !== canadaFillBeforeReverse &&
          after.colors.join('|') === [...numericColorsBeforeReverse].reverse().join('|') &&
          after.canadaFill === after.colors.at(-1)
      )
      expect(getSpecialLegendColor(canvasElement)).toBe(specialFillBeforeReverse)

      await user.selectOptions(canvas.getByLabelText('Filter by Country'), 'Argentina')
      expect(isGray(getCountryFill(canvasElement, 'ARG'))).toBe(true)
      const opacityInput = within(visualAccordion).getByLabelText('Tooltip Opacity (%)') as HTMLInputElement
      setNumberInput(opacityInput, '60')
      await performAndAssert(
        'Argentina tooltip renders at 60 percent opacity',
        () => {
          const tooltip = getVisibleTooltip(canvasElement)
          return {
            text: tooltip?.textContent || '',
            background: tooltip ? getComputedStyle(tooltip).backgroundColor : ''
          }
        },
        async () => user.hover(getCountryGroup(canvasElement, 'ARG')),
        (_before, after) =>
          after.text.includes('Argentina') &&
          after.text.includes('Rate: 23') &&
          after.text.includes('Category: Special Category 5') &&
          after.background === 'rgba(255, 255, 255, 0.6)'
      )

      const unexpectedConsoleErrors = consoleErrors
        .map(args => args.map(value => String(value)).join(' '))
        .filter(message => {
          const isKnownControlledInputWarning =
            message.includes('A component is changing an uncontrolled input to be controlled') &&
            message.includes('packages/core/components/EditorPanel/Inputs.tsx')
          const isKnownWorldOptionKeyWarning =
            message.includes('Warning: Encountered two children with the same key') &&
            message.includes('packages/core/components/MultiSelect/MultiSelect.tsx')
          const isKnownWorldGeoPropWarning =
            message.includes('Warning: React does not recognize the') &&
            message.includes('packages/map/src/components/Geo.tsx') &&
            (message.includes('additionalData') || message.includes('geoData'))
          return !isKnownControlledInputWarning && !isKnownWorldOptionKeyWarning && !isKnownWorldGeoPropWarning
        })
      expect(unexpectedConsoleErrors).toEqual([])
      expect(unhandledRejections).toEqual([])
    } finally {
      window.fetch = originalFetch
      window.open = originalOpen
      console.error = originalConsoleError
      window.removeEventListener('unhandledrejection', recordUnhandledRejection)
    }
  }
}
