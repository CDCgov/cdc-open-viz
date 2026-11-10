import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, fn, userEvent, waitFor, within } from 'storybook/test'
import {
  assertVisualizationRendered,
  openAccordion,
  performAndAssert,
  waitForAbsence,
  waitForEditor,
  waitForOptionsToPopulate,
  waitForPresence
} from '@cdc/core/helpers/testing'
import countyTopo from '../../../map/src/components/UsaMap/data/cb_2019_us_county_20m.json'
import customLayerJson from '../../../map/examples/__data__/testing-layer.json?raw'
import CdcEditor from '../CdcEditor'

// Source regression: docs/qa/regression-scripts/county-map-regression.md

const meta: Meta<typeof CdcEditor> = {
  title: 'Regression Tests/Map Scripts',
  component: CdcEditor,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof CdcEditor>
type Config = Record<string, any>
type Canvas = ReturnType<typeof within>
type User = ReturnType<typeof userEvent.setup>

const LAYER_URL = '/examples/__data__/testing-layer.json'
const TOPOLOGY_ROOT = 'https://www.cdc.gov/TemplatePackage/contrib/data/county-topography/'
const TOPOLOGY_YEARS = ['2013', '2014', '2015', '2019', '2020', '2021', '2022'] as const
const TOPOLOGY_URLS = new Set(TOPOLOGY_YEARS.map(year => `${TOPOLOGY_ROOT}cb_${year}_us_county_20m.json`))

/*
 * Deterministic checkpoint ledger. Each entry is exercised before the final,
 * intentionally canonical county-highlighter assertion.
 *
 * 01-09 setup/import/mapping; 10-20 Type; 21-28 General; 29-40 Columns;
 * 41-59 Legend; 60-70 Filters; 71-72 Footnotes; 73-86 Data Table;
 * 87-90 Interactivity; 93-101 Visual; 102-103 Custom Layers;
 * 104-107 Patterns; 108-114 Markup Variables; 115 keyboard/accessibility.
 * Steps 91-92 are asserted last because current production eligibility is the
 * defect under test. Canvas-only pixel semantics remain explicit DOM-oracle
 * gaps; their corresponding authored configuration and redraw lifecycle are
 * still asserted here.
 */
const completed = new Set<string>()
const mark = (...ids: string[]) => ids.forEach(id => completed.add(id))
const REQUIRED = [
  '01-09',
  '10-20',
  '21-28',
  '29-40',
  '41-59',
  '60-70',
  '71-72',
  '73-86',
  '87-90',
  '93-101',
  '102-103',
  '104-107',
  '108-114',
  '115'
]

const normalize = (value: string | null | undefined) => value?.replace(/\s+/g, ' ').trim() || ''

const accordionButton = (root: HTMLElement, name: string) =>
  Array.from(root.querySelectorAll<HTMLElement>('[data-accordion-component="AccordionItemButton"]')).find(
    button => normalize(button.textContent).toLowerCase() === name.toLowerCase() && button.closest('.editor-panel')
  )

/** Re-query both the button and item after a click because editor state changes can remount the panel. */
const openSection = async (canvas: Canvas, root: HTMLElement, name: string) => {
  await waitFor(() => expect(accordionButton(root, name), `Missing editor accordion ${name}`).toBeTruthy())
  if (accordionButton(root, name)?.getAttribute('aria-expanded') !== 'true') await openAccordion(canvas, name)
  let current: HTMLElement | undefined
  await waitFor(() => {
    current = accordionButton(root, name)
    expect(current, `Missing rerendered editor accordion ${name}`).toHaveAttribute('aria-expanded', 'true')
  })
  return current!.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
}

const labeled = <T extends HTMLElement>(scope: HTMLElement, label: string, selector: string): T => {
  const candidates = Array.from(scope.querySelectorAll<T>(selector))
  const marker = Array.from(scope.querySelectorAll<HTMLElement>('*')).find(element =>
    Array.from(element.childNodes).some(
      child => child.nodeType === Node.TEXT_NODE && normalize(child.textContent) === label
    )
  )
  const markerControl = marker?.closest('label')?.querySelector<T>(selector)
  if (markerControl) return markerControl
  const labelTexts = (element: T) => {
    const wrapper = element.closest('label')
    const nodes = [
      wrapper,
      ...Array.from(wrapper?.querySelectorAll<HTMLElement>('.edit-label, .column-heading, span') || [])
    ]
    return nodes.flatMap(node =>
      Array.from(node?.childNodes || [])
        .filter(child => child.nodeType === Node.TEXT_NODE)
        .map(child => normalize(child.textContent))
        .filter(Boolean)
    )
  }
  const nearest =
    candidates.find(element => labelTexts(element).includes(label)) ||
    candidates.find(element => labelTexts(element).some(text => text.startsWith(label)))
  const exact =
    nearest ||
    candidates.find(element => {
      return Array.from(scope.querySelectorAll('label')).some(labelElement => {
        if (!labelElement.contains(element)) return false
        return normalize(labelElement.textContent) === label
      })
    })
  expect(exact, `Expected ${selector} labelled ${label}`).toBeTruthy()
  return exact!
}

const select = (scope: HTMLElement, label: string) => labeled<HTMLSelectElement>(scope, label, 'select')
const checkbox = (scope: HTMLElement, label: string) =>
  labeled<HTMLInputElement>(scope, label, 'input[type="checkbox"]')
const textControl = (scope: HTMLElement, label: string) =>
  labeled<HTMLInputElement | HTMLTextAreaElement>(scope, label, 'input, textarea')

const setText = async (user: User, scope: HTMLElement, label: string, value: string) => {
  const control = textControl(scope, label)
  await user.clear(control)
  fireEvent.change(control, { target: { value } })
  await user.tab()
}

const toggle = async (user: User, scope: HTMLElement, label: string, checked: boolean) => {
  const control = checkbox(scope, label)
  if (control.checked !== checked) await user.click(control)
  await waitFor(() => expect(checkbox(scope, label).checked).toBe(checked))
}

const mapCanvas = (root: HTMLElement) => {
  const element = root.querySelector<HTMLCanvasElement>('canvas.county-map-canvas[role="img"]:not(.d-none)')
  expect(element, 'Expected visible county Canvas').toBeTruthy()
  return element!
}

const canvasState = (root: HTMLElement) => {
  const element = mapCanvas(root)
  return {
    width: element.width,
    height: element.height,
    name: element.getAttribute('aria-label') || '',
    transform: element.getAttribute('data-zoom-transform') || '',
    scale: Number(element.getAttribute('data-zoom-scale') || '0')
  }
}

const legend = (root: HTMLElement) => root.querySelector<HTMLElement>('[aria-label="Map Legend"]')
const legendText = (root: HTMLElement) => normalize(legend(root)?.textContent)

const expandTable = async (root: HTMLElement, user: User) => {
  const heading = root.querySelector<HTMLElement>('.data-table-heading')
  expect(heading, 'Expected data-table heading').toBeTruthy()
  if (heading!.classList.contains('collapsed')) await user.click(heading!)
  return (await waitForPresence('.data-table-container table.data-table', root)) as HTMLTableElement
}

const waitConfig = async (read: () => Config, assertion: (config: Config) => void) => waitFor(() => assertion(read()))

const openNested = async (root: HTMLElement, parentName: string, itemName: string, user: User) => {
  const find = () => {
    const parent = accordionButton(root, parentName)?.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')
    const requiredTarget =
      parentName === 'Columns' && itemName === 'Geography'
        ? 'map-geography-section'
        : parentName === 'Columns' && itemName === 'Data'
        ? 'map-data-section'
        : ''
    if (requiredTarget) {
      return root.querySelector<HTMLElement>(`.editor-panel button[data-required-field-subsection="${requiredTarget}"]`)
    }
    const accordion = Array.from(
      parent?.querySelectorAll<HTMLElement>('[data-accordion-component="AccordionItemButton"]') || []
    ).find(button => normalize(button.textContent) === itemName)
    if (accordion) return accordion
    return Array.from(parent?.querySelectorAll<HTMLElement>('button[data-required-field-subsection]') || []).find(
      button => normalize(button.parentElement?.textContent) === itemName
    )
  }
  await waitFor(() => expect(find(), `Missing ${parentName} subsection ${itemName}`).toBeTruthy())
  if (find()!.getAttribute('aria-expanded') !== 'true') await user.click(find()!)
  await waitFor(() => expect(find()).toHaveAttribute('aria-expanded', 'true'))
  const current = find()!
  return (
    current.closest<HTMLElement>('[data-accordion-component="AccordionItem"], .column-section') ||
    current.parentElement!
  )
}

const configureCountyMap = async (canvas: Canvas, root: HTMLElement, user: User, read: () => Config) => {
  await user.click(await canvas.findByRole('button', { name: 'United States (State- or County-Level)' }))
  expect(canvas.getByText('2. Import Data')).toBeVisible()
  await user.click(canvas.getByText('2. Import Data'))
  await user.click(await canvas.findByRole('button', { name: 'United States: County Sample Data' }))

  expect(await canvas.findByText('Data Preview')).toBeVisible()
  for (const heading of [
    'FIPS Codes',
    'County',
    'Public Health Jurisdiction',
    'Percent Vaccinated',
    'Vaccination Coverage Group'
  ]) {
    expect(root.querySelector(`table.data-table th[title="${heading}"]`)).toBeVisible()
  }
  expect(canvas.getByText('Page 1 of 122')).toBeVisible()
  expect(root.querySelectorAll('table.data-table tbody tr')).toHaveLength(25)
  expect(root.querySelector('table.data-table tbody')?.textContent).toContain('02013')
  await waitConfig(read, config => {
    expect(config.data).toHaveLength(3047)
    expect(Math.ceil(config.data.length / 25)).toBe(122)
    expect(config.data.length % 25).toBe(22)
    expect(config.data.some(row => row['FIPS Codes'] === '01001')).toBe(true)
  })

  await user.click(canvas.getByRole('button', { name: /^Vertical/ }))
  expect(canvas.getByRole('button', { name: /^Vertical/ })).toHaveClass('active')
  await user.click(canvas.getByRole('button', { name: 'No', exact: true }))
  await user.click(canvas.getByRole('button', { name: 'Configure your visualization' }))
  await waitForEditor(canvas)

  let type = await openSection(canvas, root, 'Type')
  await user.selectOptions(select(type, 'Geography Subtype'), 'us-county')
  type = await openSection(canvas, root, 'Type')
  expect(checkbox(type, "Show Neighboring States' Data")).toBeVisible()
  expect(checkbox(type, 'Show HSA Boundaries')).toBeVisible()
  expect(select(type, 'County Census Year')).toBeVisible()

  let columns = await openSection(canvas, root, 'Columns')
  const geography = columns.querySelector<HTMLSelectElement>('[data-required-field-control="map-geography"]')!
  const data = columns.querySelector<HTMLSelectElement>('[data-required-field-control="map-data-column"]')!
  await waitForOptionsToPopulate(geography)
  await user.selectOptions(geography, 'FIPS Codes')
  columns = await openSection(canvas, root, 'Columns')
  const currentData = columns.querySelector<HTMLSelectElement>('[data-required-field-control="map-data-column"]')!
  await waitForOptionsToPopulate(currentData)
  await user.selectOptions(currentData, 'Percent Vaccinated')

  await waitForAbsence('.map-required-fields-alerts', root)
  await waitForPresence('canvas.county-map-canvas:not(.d-none)', root)
  await assertVisualizationRendered(root)
  await waitFor(() => {
    expect(canvasState(root).width).toBeGreaterThan(0)
    expect(canvasState(root).height).toBeGreaterThan(0)
    expect(canvasState(root).name).toBe('United States county map')
    expect(legendText(root)).not.toBe('')
  })
  await waitConfig(read, config => {
    expect(config.general.geoType).toBe('us-county')
    expect(config.columns.geo.name).toBe('FIPS Codes')
    expect(config.columns.primary.name).toBe('Percent Vaccinated')
  })
  const table = await expandTable(root, user)
  expect(table.textContent).toContain('Autauga')
  expect(table.textContent).toContain('34.13')
  expect(table.textContent).toContain('Baldwin')
  expect(table.textContent).toContain('37.55')
  mark('01-09')
}

const exerciseType = async (canvas: Canvas, root: HTMLElement, user: User, read: () => Config) => {
  for (const year of TOPOLOGY_YEARS.toReversed()) {
    const type = await openSection(canvas, root, 'Type')
    await user.selectOptions(select(type, 'County Census Year'), year)
    await waitConfig(read, config => expect(config.general.countyCensusYear).toBe(year))
    await waitFor(() => {
      expect(canvasState(root).width).toBeGreaterThan(0)
      expect(canvasState(root).height).toBeGreaterThan(0)
    })
  }
  let type = await openSection(canvas, root, 'Type')
  await user.selectOptions(select(type, 'County Census Year'), '2019')

  type = await openSection(canvas, root, 'Type')
  await toggle(user, type, "Show Neighboring States' Data", true)
  await waitConfig(read, config => expect(config.general.showNeighboringStates).toBe(true))
  type = await openSection(canvas, root, 'Type')
  await toggle(user, type, "Show Neighboring States' Data", false)

  type = await openSection(canvas, root, 'Type')
  await toggle(user, type, 'Show HSA Boundaries', true)
  let columns = await openSection(canvas, root, 'Columns')
  await user.selectOptions(select(columns, 'HSA Description Column'), 'Public Health Jurisdiction')
  await waitConfig(read, config => expect(config.columns.hsa.name).toBe('Public Health Jurisdiction'))
  type = await openSection(canvas, root, 'Type')
  await toggle(user, type, 'Show HSA Boundaries', false)
  columns = await openSection(canvas, root, 'Columns')
  expect(
    Array.from(columns.querySelectorAll('select')).some(item =>
      normalize(item.closest('label')?.textContent).startsWith('HSA Description Column')
    )
  ).toBe(false)

  type = await openSection(canvas, root, 'Type')
  const territories = Array.from(type.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')).find(input =>
    normalize(input.closest('label')?.textContent).includes('Show Available Territories')
  )
  expect(territories).toBeTruthy()
  if (territories!.checked) await user.click(territories!)
  type = await openSection(canvas, root, 'Type')
  const currentTerritories = Array.from(type.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')).find(input =>
    normalize(input.closest('label')?.textContent).includes('Show Available Territories')
  )!
  if (!currentTerritories.checked) await user.click(currentTerritories)
  await waitConfig(read, config => {
    expect(config.general.territoriesAlwaysShow).toBe(true)
    expect(config.migrations.showPuertoRico).toBe(false)
  })

  type = await openSection(canvas, root, 'Type')
  await user.selectOptions(select(type, 'Map Type'), 'us-geocode')
  columns = await openSection(canvas, root, 'Columns')
  await toggle(user, columns, 'Convert FIPS Codes to Geography Name', true)
  await waitConfig(read, config => expect(config.general.convertFipsCodes).toBe(true))
  columns = await openSection(canvas, root, 'Columns')
  await toggle(user, columns, 'Convert FIPS Codes to Geography Name', false)
  type = await openSection(canvas, root, 'Type')
  await user.selectOptions(select(type, 'Map Type'), 'data')
  await waitForPresence('canvas.county-map-canvas:not(.d-none)', root)
  expect(legendText(root)).not.toBe('')

  type = await openSection(canvas, root, 'Type')
  expect(
    Array.from(type.querySelectorAll('label')).some(label =>
      normalize(label.textContent).includes('Display Shapes on Hex Map')
    )
  ).toBe(true)
  expect(select(type, 'Filter Controlling County Census Year')).toHaveValue('')
  mark('10-20')
}

const exerciseGeneral = async (canvas: Canvas, root: HTMLElement, user: User, read: () => Config) => {
  let section = await openSection(canvas, root, 'General')
  await performAndAssert(
    'County title renders',
    () => normalize(root.querySelector('.cove-title')?.textContent),
    async () => setText(user, section, 'Title', 'County vaccination regression'),
    (_before, after) => after.includes('County vaccination regression')
  )
  section = await openSection(canvas, root, 'General')
  await setText(user, section, 'Super Title', 'County sample coverage')
  await waitFor(() =>
    expect(normalize(root.querySelector('.cove-title')?.textContent)).toContain('County sample coverage')
  )

  for (const [value, selector] of [
    ['large', '.cove-title h2'],
    ['legacy', 'header.cove-visualization__header h2'],
    ['small', '.cove-title h3']
  ] as const) {
    section = await openSection(canvas, root, 'General')
    await user.selectOptions(select(section, 'Title Style'), value)
    await waitFor(() => expect(root.querySelector(selector)).toHaveTextContent('County vaccination regression'))
  }
  section = await openSection(canvas, root, 'General')
  await toggle(user, section, 'Show Title', false)
  expect(root.querySelector('.cove-title')).not.toBeInTheDocument()
  section = await openSection(canvas, root, 'General')
  await toggle(user, section, 'Show Title', true)
  expect(normalize(root.querySelector('.cove-title')?.textContent)).toContain('County sample coverage')

  section = await openSection(canvas, root, 'General')
  await setText(user, section, 'Message', '<a href="https://www.cdc.gov/">County map guidance</a>')
  await waitFor(() => {
    const link = root.querySelector<HTMLAnchorElement>('a[href="https://www.cdc.gov/"]')
    expect(link).toHaveAccessibleName('County map guidance')
    expect(link?.closest('.cove-prose')?.textContent).not.toContain('<a')
  })
  section = await openSection(canvas, root, 'General')
  await setText(user, section, 'Subtext', 'Vaccination values are <em>sample data</em>.')
  await waitFor(() => expect(root.querySelector('.subtext em')).toHaveTextContent('sample data'))
  section = await openSection(canvas, root, 'General')
  await setText(user, section, 'Footnotes', 'General county note.<sup>1</sup>')
  await waitFor(() => expect(root.querySelector('.footnotes sup')).toHaveTextContent('1'))

  section = await openSection(canvas, root, 'General')
  await user.selectOptions(select(section, 'Language'), 'es-MX')
  await waitConfig(read, config => expect(config.locale).toBe('es-MX'))
  section = await openSection(canvas, root, 'General')
  await user.selectOptions(select(section, 'Language'), 'en-US')

  section = await openSection(canvas, root, 'General')
  await user.selectOptions(select(section, 'Alt Text Description'), 'static')
  section = await openSection(canvas, root, 'General')
  await setText(user, section, 'Description Text', 'County vaccination coverage varies across the sample counties.')
  await waitFor(() =>
    expect(canvasState(root).name).toBe(
      'United States county map with the title: County vaccination regression. County vaccination coverage varies across the sample counties.'
    )
  )
  section = await openSection(canvas, root, 'General')
  await user.selectOptions(select(section, 'Alt Text Description'), '')
  await waitConfig(read, config => expect(config.altText).toBeUndefined())
  section = await openSection(canvas, root, 'General')
  await user.selectOptions(select(section, 'Alt Text Description'), 'metadata')
  section = await openSection(canvas, root, 'General')
  expect(section).toHaveTextContent('No metadata fields are available.')
  expect(
    Array.from(section.querySelectorAll('select')).some(item =>
      normalize(item.closest('label')?.textContent).startsWith('Description Metadata Field')
    )
  ).toBe(false)
  await user.selectOptions(select(section, 'Alt Text Description'), 'static')
  section = await openSection(canvas, root, 'General')
  await setText(user, section, 'Description Text', 'County vaccination coverage varies across the sample counties.')
  await waitConfig(read, config =>
    expect(config.altText?.value).toBe('County vaccination coverage varies across the sample counties.')
  )
  mark('21-28')
}

const exerciseColumns = async (canvas: Canvas, root: HTMLElement, user: User, read: () => Config) => {
  await openSection(canvas, root, 'Columns')
  let geography = await openNested(root, 'Columns', 'Geography', user)
  await setText(user, geography, 'Geography Column Label', 'County FIPS')
  await setText(user, geography, 'Geography Label', 'County')
  await waitConfig(read, config => {
    expect(config.columns.geo.label).toBe('County FIPS')
    expect(config.general.geoLabelOverride).toBe('County')
  })
  geography = await openNested(root, 'Columns', 'Geography', user)
  await user.selectOptions(select(geography, 'Geography Display Column'), 'County')
  await waitConfig(read, config => {
    expect(config.columns.geo.displayColumn).toBe('County')
  })

  geography = await openNested(root, 'Columns', 'Geography', user)
  await toggle(user, geography, 'Hide Geography Column Name in Tooltip', true)
  geography = await openNested(root, 'Columns', 'Geography', user)
  await toggle(user, geography, 'Show in Tooltips', false)
  geography = await openNested(root, 'Columns', 'Geography', user)
  await toggle(user, geography, 'Show in Tooltips', true)
  geography = await openNested(root, 'Columns', 'Geography', user)
  await toggle(user, geography, 'Hide Geography Column Name in Tooltip', false)
  geography = await openNested(root, 'Columns', 'Geography', user)
  await toggle(user, geography, 'Show in Data Table', false)
  let table = await expandTable(root, user)
  expect(table.textContent).not.toContain('County FIPS')
  geography = await openNested(root, 'Columns', 'Geography', user)
  await toggle(user, geography, 'Show in Data Table', true)
  geography = await openNested(root, 'Columns', 'Geography', user)
  await setText(user, geography, 'Order', '2')
  await waitConfig(read, config => expect(config.columns.geo.order).toBe(2))
  geography = await openNested(root, 'Columns', 'Geography', user)
  await setText(user, geography, 'Order', '1')
  await waitConfig(read, config => expect(config.columns.geo.order).toBe(1))

  let data = await openNested(root, 'Columns', 'Data', user)
  await setText(user, data, 'Data Label', 'Vaccinated')
  await waitConfig(read, config => expect(config.columns.primary.label).toBe('Vaccinated'))
  data = await openNested(root, 'Columns', 'Data', user)
  await setText(user, data, 'Prefix', '~')
  await waitConfig(read, config => expect(config.columns.primary.prefix).toBe('~'))
  data = await openNested(root, 'Columns', 'Data', user)
  await setText(user, data, 'Suffix', '%')
  await waitConfig(read, config => expect(config.columns.primary.suffix).toBe('%'))
  data = await openNested(root, 'Columns', 'Data', user)
  await setText(user, data, 'Round', '1')
  await waitConfig(read, config =>
    expect(config.columns.primary).toMatchObject({ label: 'Vaccinated', prefix: '~', suffix: '%', roundToPlace: '1' })
  )
  data = await openNested(root, 'Columns', 'Data', user)
  await toggle(user, data, 'Add Commas to Numbers', true)
  data = await openNested(root, 'Columns', 'Data', user)
  await toggle(user, data, 'Hide Data Column Name in Tooltip', true)
  data = await openNested(root, 'Columns', 'Data', user)
  await toggle(user, data, 'Hide Data Column Name in Tooltip', false)
  data = await openNested(root, 'Columns', 'Data', user)
  await toggle(user, data, 'Show in Tooltips', false)
  data = await openNested(root, 'Columns', 'Data', user)
  await toggle(user, data, 'Show in Tooltips', true)
  data = await openNested(root, 'Columns', 'Data', user)
  await toggle(user, data, 'Show in Data Table', false)
  data = await openNested(root, 'Columns', 'Data', user)
  await toggle(user, data, 'Show in Data Table', true)
  data = await openNested(root, 'Columns', 'Data', user)
  await setText(user, data, 'Order', '1')
  await waitConfig(read, config => expect(config.columns.primary.order).toBe(1))
  data = await openNested(root, 'Columns', 'Data', user)
  await setText(user, data, 'Order', '2')
  await waitConfig(read, config => {
    expect(config.columns.primary).toMatchObject({
      label: 'Vaccinated',
      prefix: '~',
      suffix: '%',
      roundToPlace: '1',
      useCommas: true,
      order: 2
    })
  })
  table = await expandTable(root, user)
  expect(table.textContent).toMatch(/~34\.1%/)

  let columns = await openSection(canvas, root, 'Columns')
  expect(select(columns, 'Latitude Column')).toHaveValue('Select Option')
  expect(select(columns, 'Longitude Column')).toHaveValue('Select Option')
  await user.click(within(columns).getByRole('button', { name: 'Add Special Class' }))
  columns = await openSection(canvas, root, 'Columns')
  const specialButton = within(columns).getByRole('button', { name: 'Special Class 1' })
  await user.click(specialButton)
  let special = specialButton.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
  await user.selectOptions(select(special, 'Data Key'), 'Percent Vaccinated')
  columns = await openSection(canvas, root, 'Columns')
  const currentSpecialButton = within(columns).getByRole('button', { name: 'Special Class 1' })
  if (currentSpecialButton.getAttribute('aria-expanded') !== 'true') await user.click(currentSpecialButton)
  special = currentSpecialButton.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
  await user.selectOptions(select(special, 'Value'), '0')
  columns = await openSection(canvas, root, 'Columns')
  const valueButton = within(columns).getByRole('button', { name: '0' })
  if (valueButton.getAttribute('aria-expanded') !== 'true') await user.click(valueButton)
  special = valueButton.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
  await setText(user, special, 'Label', 'No reported location')
  await waitFor(() => expect(legendText(root)).toMatch(/No reported\s*location/))

  columns = await openSection(canvas, root, 'Columns')
  await user.click(within(columns).getByRole('button', { name: 'Add Column' }))
  columns = await openSection(canvas, root, 'Columns')
  let additionalButton = within(columns).getByRole('button', { name: 'New Column' })
  await user.click(additionalButton)
  let additional = additionalButton.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
  await user.selectOptions(select(additional, 'Column'), 'Public Health Jurisdiction')
  columns = await openSection(canvas, root, 'Columns')
  additionalButton = within(columns).getByRole('button', { name: 'Public Health Jurisdiction' })
  if (additionalButton.getAttribute('aria-expanded') !== 'true') await user.click(additionalButton)
  additional = additionalButton.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
  await setText(user, additional, 'Label', 'Jurisdiction')
  await waitConfig(read, config => {
    const extra = Object.values(config.columns).find(
      (column: any) => column?.name === 'Public Health Jurisdiction'
    ) as any
    expect(extra?.label).toBe('Jurisdiction')
  })
  columns = await openSection(canvas, root, 'Columns')
  additionalButton = within(columns).getByRole('button', { name: 'Jurisdiction' })
  if (additionalButton.getAttribute('aria-expanded') !== 'true') await user.click(additionalButton)
  additional = additionalButton.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
  await setText(user, additional, 'Prefix', '[')
  await waitConfig(read, config => {
    const extra = Object.values(config.columns).find(
      (column: any) => column?.name === 'Public Health Jurisdiction'
    ) as any
    expect(extra?.prefix).toBe('[')
  })
  columns = await openSection(canvas, root, 'Columns')
  additionalButton = within(columns).getByRole('button', { name: 'Jurisdiction' })
  if (additionalButton.getAttribute('aria-expanded') !== 'true') await user.click(additionalButton)
  additional = additionalButton.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
  await setText(user, additional, 'Suffix', ']')
  await waitConfig(read, config => {
    const extra = Object.values(config.columns).find(
      (column: any) => column?.name === 'Public Health Jurisdiction'
    ) as any
    expect(extra?.suffix).toBe(']')
  })
  columns = await openSection(canvas, root, 'Columns')
  additionalButton = within(columns).getByRole('button', { name: 'Jurisdiction' })
  if (additionalButton.getAttribute('aria-expanded') !== 'true') await user.click(additionalButton)
  additional = additionalButton.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
  await setText(user, additional, 'Round', '0')
  await waitConfig(read, config => {
    const extra = Object.values(config.columns).find(
      (column: any) => column?.name === 'Public Health Jurisdiction'
    ) as any
    expect(extra?.roundToPlace).toBe('0')
  })
  columns = await openSection(canvas, root, 'Columns')
  additionalButton = within(columns).getByRole('button', { name: 'Jurisdiction' })
  if (additionalButton.getAttribute('aria-expanded') !== 'true') await user.click(additionalButton)
  additional = additionalButton.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
  await setText(user, additional, 'Order', '3')
  await waitConfig(read, config => {
    const extra = Object.values(config.columns).find(
      (column: any) => column?.name === 'Public Health Jurisdiction'
    ) as any
    expect(extra).toMatchObject({ label: 'Jurisdiction', prefix: '[', suffix: ']', roundToPlace: '0', order: 3 })
  })
  columns = await openSection(canvas, root, 'Columns')
  additionalButton = within(columns).getByRole('button', { name: 'Jurisdiction' })
  if (additionalButton.getAttribute('aria-expanded') !== 'true') await user.click(additionalButton)
  additional = additionalButton.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
  await toggle(user, additional, 'Add Commas to Numbers', true)
  await toggle(user, additional, 'Show in Data Table', true)
  await toggle(user, additional, 'Show in Tooltips', true)
  await waitConfig(read, config => {
    const extra = Object.values(config.columns).find(
      (column: any) => column?.name === 'Public Health Jurisdiction'
    ) as any
    expect(extra).toMatchObject({ label: 'Jurisdiction', prefix: '[', suffix: ']', roundToPlace: '0', order: 3 })
  })
  table = await expandTable(root, user)
  expect(table.textContent).toContain('Jurisdiction')
  expect(table.textContent).toContain('AL')

  columns = await openSection(canvas, root, 'Columns')
  additionalButton = within(columns).getByRole('button', { name: 'Jurisdiction' })
  if (additionalButton.getAttribute('aria-expanded') !== 'true') await user.click(additionalButton)
  additional = additionalButton.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
  await user.click(within(additional).getByRole('button', { name: 'Remove' }))
  await waitFor(() => expect(accordionButton(root, 'Jurisdiction')).toBeUndefined())
  mark('29-40')
}

const exerciseLegend = async (canvas: Canvas, root: HTMLElement, user: User, read: () => Config) => {
  let section = await openSection(canvas, root, 'Legend')
  await user.selectOptions(select(section, 'Legend Type'), 'equalinterval')
  await waitConfig(read, config => expect(config.legend.type).toBe('equalinterval'))
  const intervalText = legendText(root)
  section = await openSection(canvas, root, 'Legend')
  await user.selectOptions(select(section, 'Legend Type'), 'manual')
  for (const value of ['20', '40', '60', '80']) {
    section = await openSection(canvas, root, 'Legend')
    await user.click(within(section).getByRole('button', { name: 'Add Breakpoint' }))
    section = await openSection(canvas, root, 'Legend')
    const buttons = within(section).getAllByRole('button', { name: /Breakpoint \d+(?::.*)?/ })
    const current = buttons.at(-1)!
    if (current.getAttribute('aria-expanded') !== 'true') await user.click(current)
    const item = current.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
    await setText(user, item, 'Upper Bound', value)
    await waitConfig(read, config => expect(config.legend.breakpoints).toContain(Number(value)))
  }
  await waitConfig(read, config => expect(config.legend.manualBreakpoints || config.legend.breakpoints).toBeTruthy())
  section = await openSection(canvas, root, 'Legend')
  expect(normalize(section.textContent)).toMatch(/20.*40.*60.*80/)
  await user.click(within(section).getByRole('button', { name: 'Clear' }))
  section = await openSection(canvas, root, 'Legend')
  await user.selectOptions(select(section, 'Legend Type'), 'equalnumber')
  await waitFor(() => expect(legendText(root)).not.toBe(intervalText))

  section = await openSection(canvas, root, 'Legend')
  await toggle(user, section, 'Show Legend', false)
  await waitFor(() => expect(legend(root)).not.toBeInTheDocument())
  section = await openSection(canvas, root, 'Legend')
  await toggle(user, section, 'Show Legend', true)
  await waitFor(() => expect(legend(root)).toBeVisible())

  for (const position of ['bottom', 'top', 'side']) {
    section = await openSection(canvas, root, 'Legend')
    await user.selectOptions(select(section, 'Legend Position'), position)
    await waitConfig(read, config => expect(config.legend.position).toBe(position))
  }
  for (const style of ['circles', 'boxes']) {
    section = await openSection(canvas, root, 'Legend')
    await user.selectOptions(select(section, 'Legend Style'), style)
    await waitConfig(read, config => expect(config.legend.style).toBe(style))
  }
  section = await openSection(canvas, root, 'Legend')
  await toggle(user, section, 'Single Column Legend', true)
  section = await openSection(canvas, root, 'Legend')
  await toggle(user, section, 'Vertical sorted legend', true)

  section = await openSection(canvas, root, 'Legend')
  await user.selectOptions(select(section, 'Legend Position'), 'bottom')
  section = await openSection(canvas, root, 'Legend')
  await toggle(user, section, 'Single Row Legend', true)
  section = await openSection(canvas, root, 'Legend')
  await user.selectOptions(select(section, 'Legend Style'), 'gradient')
  section = await openSection(canvas, root, 'Legend')
  await user.selectOptions(select(section, 'Gradient Style'), 'linear blocks')
  section = await openSection(canvas, root, 'Legend')
  await setText(user, section, 'Legend Separators', '1,3')
  await setText(user, section, 'Tick Rotation (Degrees)', '30')
  await waitConfig(read, config => {
    expect(config.legend.separators).toBe('1,3')
    expect(String(config.legend.tickRotation)).toBe('30')
  })
  section = await openSection(canvas, root, 'Legend')
  await user.selectOptions(select(section, 'Gradient Style'), 'smooth')
  section = await openSection(canvas, root, 'Legend')
  await user.selectOptions(select(section, 'Legend Style'), 'boxes')
  section = await openSection(canvas, root, 'Legend')
  await user.selectOptions(select(section, 'Legend Position'), 'side')

  section = await openSection(canvas, root, 'Legend')
  await toggle(user, section, 'Hide Legend Box', true)
  section = await openSection(canvas, root, 'Legend')
  await toggle(user, section, 'Hide Legend Box', false)
  for (const count of ['3', '8', '5']) {
    section = await openSection(canvas, root, 'Legend')
    await user.selectOptions(select(section, 'Number of Items'), count)
    await waitConfig(read, config => expect(String(config.legend.numberOfItems)).toBe(count))
  }
  section = await openSection(canvas, root, 'Legend')
  await toggle(user, section, 'Separate Zero', true)
  await waitFor(() => expect(legendText(root)).toMatch(/0/))
  section = await openSection(canvas, root, 'Legend')
  await toggle(user, section, 'Separate Zero', false)
  section = await openSection(canvas, root, 'Legend')
  await toggle(user, section, 'Show Special Classes Last', false)
  section = await openSection(canvas, root, 'Legend')
  await toggle(user, section, 'Show Special Classes Last', true)
  section = await openSection(canvas, root, 'Legend')
  await setText(user, section, 'Legend Title', 'Vaccination coverage')
  await waitConfig(read, config => expect(config.legend.title).toBe('Vaccination coverage'))
  section = await openSection(canvas, root, 'Legend')
  await setText(user, section, 'Legend Description', 'Percent of county population in the sample.')
  await waitFor(() => {
    expect(legendText(root)).toContain('Vaccination coverage')
    expect(legendText(root)).toContain('Percent of county population in the sample.')
  })

  let type = await openSection(canvas, root, 'Type')
  const categorical = type.querySelector<HTMLInputElement>('input[value="category"]')!
  await user.click(categorical)
  let columns = await openSection(canvas, root, 'Columns')
  await user.selectOptions(
    columns.querySelector<HTMLSelectElement>('[data-required-field-control="map-data-column"]')!,
    'Vaccination Coverage Group'
  )
  await waitFor(() => expect(legendText(root)).toContain('70% or More'))
  columns = await openSection(canvas, root, 'Columns')
  await user.click(within(columns).getByRole('button', { name: 'Add Category' }))
  let categoryInput: HTMLInputElement | null = null
  await waitFor(() => {
    categoryInput = root.querySelector<HTMLInputElement>('input[name="legend-null-additionalCategories"]')
    expect(categoryInput).toBeTruthy()
  })
  fireEvent.change(categoryInput!, { target: { value: 'Not reported' } })
  fireEvent.blur(categoryInput!)
  await waitConfig(read, config => expect(config.legend.additionalCategories).toContain('Not reported'))
  await waitFor(() => expect(legendText(root)).toContain('Not reported'))

  section = await openSection(canvas, root, 'Legend')
  await toggle(user, section, 'Include Non-Geographic Categories', false)
  expect(legendText(root)).not.toContain('No Data')
  section = await openSection(canvas, root, 'Legend')
  await toggle(user, section, 'Include Non-Geographic Categories', true)
  await waitFor(() => expect(legendText(root)).toContain('No Data'))
  section = await openSection(canvas, root, 'Legend')
  await user.selectOptions(select(section, 'Category Sort'), 'automatic')
  section = await openSection(canvas, root, 'Legend')
  await user.selectOptions(select(section, 'Category Sort'), 'custom')
  section = await openSection(canvas, root, 'Legend')
  expect(section).toHaveTextContent('Category Order')
  await user.selectOptions(select(section, 'Legend Group By :'), 'Public Health Jurisdiction')
  await waitConfig(read, config => expect(config.legend.groupBy).toBe('Public Health Jurisdiction'))
  section = await openSection(canvas, root, 'Legend')
  await user.selectOptions(select(section, 'Legend Group By :'), 'Select Option')
  for (const position of ['bottom', 'top', 'side']) {
    section = await openSection(canvas, root, 'Legend')
    await user.selectOptions(select(section, 'Legend Position'), position)
  }

  type = await openSection(canvas, root, 'Type')
  await user.click(type.querySelector<HTMLInputElement>('input[value="equalnumber"]')!)
  columns = await openSection(canvas, root, 'Columns')
  await user.selectOptions(
    columns.querySelector<HTMLSelectElement>('[data-required-field-control="map-data-column"]')!,
    'Percent Vaccinated'
  )
  section = await openSection(canvas, root, 'Legend')
  await user.selectOptions(select(section, 'Number of Items'), '5')
  mark('41-59')
}

const filterItems = (section: HTMLElement) =>
  Array.from(section.querySelectorAll<HTMLElement>('[data-accordion-component="AccordionItem"]')).filter(item =>
    Array.from(item.querySelectorAll('select')).some(element =>
      normalize(element.closest('label')?.textContent).startsWith('Filter Style')
    )
  )

const openFilterItem = async (canvas: Canvas, root: HTMLElement, user: User, index = 0) => {
  const section = await openSection(canvas, root, 'Filters')
  const item = filterItems(section)[index]
  expect(item, `Expected authored filter ${index + 1}`).toBeTruthy()
  const button = item.querySelector<HTMLElement>('[data-accordion-component="AccordionItemButton"]')!
  if (button.getAttribute('aria-expanded') !== 'true') await user.click(button)
  const current = await openSection(canvas, root, 'Filters')
  return filterItems(current)[index]
}

const exerciseFilters = async (canvas: Canvas, root: HTMLElement, user: User, read: () => Config) => {
  let section = await openSection(canvas, root, 'Filters')
  await toggle(user, section, 'Show State Dropdown', true)
  let state = await canvas.findByRole('combobox', { name: /Select Location/ })
  await user.selectOptions(state, '01')
  let county = await canvas.findByRole('combobox', { name: /Select County/ })
  expect(Array.from((county as HTMLSelectElement).options).map(option => option.value)).toContain('01001')
  await user.selectOptions(county, '01001')
  await user.selectOptions(county, 'All Counties')
  state = await canvas.findByRole('combobox', { name: /Select Location/ })
  await user.selectOptions(state, 'United States')

  section = await openSection(canvas, root, 'Filters')
  await setText(user, section, 'Filter intro text', 'Choose a jurisdiction.')
  await waitFor(() =>
    expect(root.querySelector('.filters-section__intro-text')).toHaveTextContent('Choose a jurisdiction.')
  )
  section = await openSection(canvas, root, 'Filters')
  await user.selectOptions(select(section, 'Filter Behavior'), 'Apply Button')
  await waitConfig(read, config => expect(config.filterBehavior).toBe('Apply Button'))
  section = await openSection(canvas, root, 'Filters')
  await user.selectOptions(select(section, 'Filter Behavior'), 'Filter Change')

  section = await openSection(canvas, root, 'Filters')
  await user.click(within(section).getByRole('button', { name: 'Add Filter' }))
  let item = await openFilterItem(canvas, root, user)
  await user.selectOptions(select(item, 'Filter'), 'Public Health Jurisdiction')
  item = await openFilterItem(canvas, root, user)
  await setText(user, item, 'Label', 'Jurisdiction')
  await setText(user, item, 'Note', 'Select a state abbreviation.')
  await waitConfig(read, config =>
    expect(config.filters[0]).toMatchObject({ label: 'Jurisdiction', note: 'Select a state abbreviation.' })
  )
  item = await openFilterItem(canvas, root, user)
  await user.selectOptions(select(item, 'Filter Default Value (Public Health Jurisdiction)'), 'AL')
  await waitFor(() => {
    const filter = root.querySelector('.cove-visualization__filters-section')
    expect(filter).toHaveTextContent('Jurisdiction')
    expect(filter).toHaveTextContent('Select a state abbreviation.')
  })

  for (const style of ['combobox', 'multi-select', 'pill', 'tab', 'tab-simple', 'tab bar']) {
    item = await openFilterItem(canvas, root, user)
    await user.selectOptions(select(item, 'Filter Style'), style)
    item = await openFilterItem(canvas, root, user)
    if (style === 'combobox') await user.selectOptions(select(item, 'Description Field'), 'County')
    if (style === 'multi-select') await setText(user, item, 'Select Limit', '2')
    await waitConfig(read, config => expect(config.filters[0].filterStyle).toBe(style))
  }

  item = await openFilterItem(canvas, root, user)
  await user.selectOptions(select(item, 'Filter Style'), 'nested-dropdown')
  item = await openFilterItem(canvas, root, user)
  await setText(user, item, 'Label', 'County by jurisdiction')
  await setText(user, item, 'Note', 'Choose a state, then county.')
  await waitConfig(read, config =>
    expect(config.filters[0]).toMatchObject({ label: 'County by jurisdiction', note: 'Choose a state, then county.' })
  )
  item = await openFilterItem(canvas, root, user)
  await user.selectOptions(select(item, 'Filter Grouping'), 'Public Health Jurisdiction')
  item = await openFilterItem(canvas, root, user)
  await user.selectOptions(select(item, 'Filter SubGrouping'), 'County')
  item = await openFilterItem(canvas, root, user)
  await user.selectOptions(select(item, 'Subgroup Description Field'), 'FIPS Codes')
  for (const order of ['asc', 'desc', 'cust']) {
    item = await openFilterItem(canvas, root, user)
    await user.selectOptions(select(item, 'Group Order'), order)
    item = await openFilterItem(canvas, root, user)
    await user.selectOptions(select(item, 'SubGrouping Order'), order)
  }
  item = await openFilterItem(canvas, root, user)
  await user.click(checkbox(item, 'Create query parameters'))
  item = await openFilterItem(canvas, root, user)
  let queryInputs = Array.from(item.querySelectorAll<HTMLInputElement>('input[type="text"]')).filter(input =>
    normalize(input.parentElement?.textContent).includes('Default Value Set By Query String Parameter')
  )
  expect(queryInputs).toHaveLength(2)
  fireEvent.change(queryInputs[0], { target: { value: 'state' } })
  await waitConfig(read, config => expect(config.filters[0].setByQueryParameter).toBe('state'))
  item = await openFilterItem(canvas, root, user)
  queryInputs = Array.from(item.querySelectorAll<HTMLInputElement>('input[type="text"]')).filter(input =>
    normalize(input.parentElement?.textContent).includes('Default Value Set By Query String Parameter')
  )
  fireEvent.change(queryInputs[1], { target: { value: 'county' } })
  await waitConfig(read, config => expect(config.filters[0].subGrouping.setByQueryParameter).toBe('county'))
  item = await openFilterItem(canvas, root, user)
  await toggle(user, item, 'Display subgrouping only', true)
  item = await openFilterItem(canvas, root, user)
  await toggle(user, item, 'Display subgrouping only', false)
  await waitConfig(read, config => {
    expect(config.filters[0].setByQueryParameter).toBe('state')
    expect(config.filters[0].subGrouping.setByQueryParameter).toBe('county')
  })
  window.history.replaceState(null, '', '?state=AL&county=Autauga%20County')
  expect(window.location.search).toBe('?state=AL&county=Autauga%20County')
  window.history.replaceState(null, '', window.location.pathname)

  item = await openFilterItem(canvas, root, user)
  await user.selectOptions(select(item, 'Filter Style'), 'dropdown')
  for (const order of ['asc', 'desc', 'cust', 'column']) {
    item = await openFilterItem(canvas, root, user)
    await user.selectOptions(select(item, 'Filter Order'), order)
    if (order === 'column') {
      item = await openFilterItem(canvas, root, user)
      await user.selectOptions(select(item, 'Order Column'), 'Public Health Jurisdiction')
    }
  }
  item = await openFilterItem(canvas, root, user)
  const query = textControl(item, 'Default Value Set By Query String Parameter')
  await user.clear(query)
  await user.type(query, 'jurisdiction')
  await user.tab()
  item = await openFilterItem(canvas, root, user)
  await toggle(user, item, 'Show Filter', false)
  expect(root.querySelector('.cove-visualization__filters-section')).not.toHaveTextContent('Jurisdiction')
  item = await openFilterItem(canvas, root, user)
  await toggle(user, item, 'Show Filter', true)

  section = await openSection(canvas, root, 'Legend')
  await toggle(user, section, 'Dynamic Legend Description', true)
  section = await openSection(canvas, root, 'Legend')
  expect(select(section, 'Filter Value')).toBeVisible()
  const dynamicDescription = Array.from(section.querySelectorAll<HTMLTextAreaElement>('textarea')).find(textarea =>
    normalize(textarea.closest('label')?.textContent).startsWith('Legend Description')
  )!
  await user.clear(dynamicDescription)
  await user.type(dynamicDescription, 'Alabama counties')
  await user.tab()
  section = await openSection(canvas, root, 'Legend')
  await toggle(user, section, 'Dynamic Legend Description', false)
  section = await openSection(canvas, root, 'Legend')
  await setText(user, section, 'Legend Description', 'Percent of county population in the sample.')
  await waitConfig(read, config =>
    expect(config.legend.description).toBe('Percent of county population in the sample.')
  )
  section = await openSection(canvas, root, 'Legend')
  await toggle(user, section, 'Unified Legend', false)
  section = await openSection(canvas, root, 'Legend')
  await toggle(user, section, 'Unified Legend', true)

  section = await openSection(canvas, root, 'Filters')
  await user.click(within(section).getByRole('button', { name: 'Add Filter' }))
  let child = await openFilterItem(canvas, root, user, 1)
  await user.selectOptions(select(child, 'Filter'), 'County')
  await waitConfig(read, config => expect(config.filters).toHaveLength(2))
  // Parent authoring is deterministic configuration even though drag ordering has no stable DOM oracle in jsdom.
  child = await openFilterItem(canvas, root, user, 1)
  expect(normalize(child.textContent)).toContain('Filter Parents')
  const removeChild = within(child).getByRole('button', { name: 'Remove' })
  await user.click(removeChild)
  await waitConfig(read, config => expect(config.filters).toHaveLength(1))

  item = await openFilterItem(canvas, root, user)
  await user.click(within(item).getByRole('button', { name: 'Remove' }))
  await waitConfig(read, config => expect(config.filters).toHaveLength(0))
  mark('60-70')
}

const exerciseFootnotes = async (canvas: Canvas, root: HTMLElement, user: User, read: () => Config) => {
  let section = await openSection(canvas, root, 'Footnotes')
  const dataset = select(section, 'Select a Footnote Dataset')
  expect(dataset.options).toHaveLength(1)
  await user.click(within(section).getByRole('button', { name: 'Add Static Footnote' }))
  section = await openSection(canvas, root, 'Footnotes')
  const noteButton = within(section)
    .getAllByRole('button', { name: /Static Footnote|Footnote 1/ })
    .find(button => button.hasAttribute('aria-expanded'))!
  expect(noteButton).toBeTruthy()
  if (noteButton.getAttribute('aria-expanded') !== 'true') await user.click(noteButton)
  let item = noteButton.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
  const symbol = Array.from(item.querySelectorAll<HTMLSelectElement>('select'))[0]
  if (symbol?.options.length > 1) await user.selectOptions(symbol, symbol.options[1].value)
  await setText(user, item, 'Text', 'Static county footnote')
  await waitConfig(read, config => {
    expect(config.footnotes.staticFootnotes).toHaveLength(1)
    expect(config.footnotes.staticFootnotes[0].text).toBe('Static county footnote')
  })
  mark('71-72')
}

type DownloadCapture = { blobs: Blob[]; anchors: { href: string; download: string }[] }

const exerciseDataTable = async (
  canvas: Canvas,
  root: HTMLElement,
  user: User,
  read: () => Config,
  downloads: DownloadCapture
) => {
  let section = await openSection(canvas, root, 'Data Table')
  await setText(user, section, 'Data Table Title', 'County sample table')
  await waitConfig(read, config => expect(config.table.label).toBe('County sample table'))
  section = await openSection(canvas, root, 'Data Table')
  await toggle(user, section, 'Show Data Table', false)
  expect(root.querySelector('.data-table-container')).not.toBeInTheDocument()
  section = await openSection(canvas, root, 'Data Table')
  await toggle(user, section, 'Show Data Table', true)
  let table = await expandTable(root, user)

  section = await openSection(canvas, root, 'Data Table')
  await toggle(user, section, 'WRAP DATA TABLE COLUMNS', true)
  section = await openSection(canvas, root, 'Data Table')
  await setText(user, section, 'Table Cell Min Width', '180')
  await waitConfig(read, config => {
    expect(config.table.wrapColumns).toBe(true)
    expect(String(config.table.cellMinWidth)).toBe('180')
  })
  section = await openSection(canvas, root, 'Data Table')
  await toggle(user, section, 'WRAP DATA TABLE COLUMNS', false)

  section = await openSection(canvas, root, 'Data Table')
  await toggle(user, section, 'Show Non Geographic Data', false)
  table = await expandTable(root, user)
  expect(table.textContent).not.toContain('Unknown County')
  section = await openSection(canvas, root, 'Data Table')
  await toggle(user, section, 'Show Non Geographic Data', true)

  section = await openSection(canvas, root, 'Data Table')
  await setText(user, section, 'Index Column Header', 'County location')
  await setText(user, section, 'Screen Reader Description', 'County vaccination sample data table.')
  await waitConfig(read, config => {
    expect(config.table.indexLabel).toBe('County location')
    expect(config.table.caption).toBe('County vaccination sample data table.')
  })
  table = await expandTable(root, user)
  expect(table.querySelector('caption')).toHaveTextContent('County vaccination sample data table.')
  expect(table.textContent).toContain('County location')

  section = await openSection(canvas, root, 'Data Table')
  await toggle(user, section, 'Limit Table Height', true)
  section = await openSection(canvas, root, 'Data Table')
  await setText(user, section, 'Data Table Height', '250')
  await waitConfig(read, config => expect(String(config.table.height)).toBe('250'))
  section = await openSection(canvas, root, 'Data Table')
  await toggle(user, section, 'Limit Table Height', false)
  section = await openSection(canvas, root, 'Data Table')
  await toggle(user, section, 'Fix First Column', true)
  table = await expandTable(root, user)
  expect(table).toHaveClass('data-table--sticky-first-column')
  section = await openSection(canvas, root, 'Data Table')
  await toggle(user, section, 'Fix First Column', false)

  section = await openSection(canvas, root, 'Data Table')
  await toggle(user, section, 'Map loads with data table expanded', true)
  section = await openSection(canvas, root, 'Data Table')
  await toggle(user, section, 'Show collapse below table', true)
  expect(root.querySelector('.data-table-container')).toBeVisible()

  section = await openSection(canvas, root, 'Data Table')
  await toggle(user, section, 'Enable Search', true)
  section = await openSection(canvas, root, 'Data Table')
  await setText(user, section, 'Search Placeholder Text', 'Find a county')
  await waitConfig(read, config => expect(config.table.searchPlaceholder).toBe('Find a county'))
  const search = canvas.getByRole('searchbox', { name: 'Filter table rows' })
  expect(search).toHaveAttribute('placeholder', 'Find a county')
  await user.type(search, 'Autauga')
  table = await expandTable(root, user)
  await waitFor(() => {
    expect(within(table).getByText(/Autauga/)).toBeVisible()
    expect(within(table).queryByText(/Baldwin/)).not.toBeInTheDocument()
  })

  section = await openSection(canvas, root, 'Data Table')
  await user.selectOptions(select(section, 'Default Sort Column'), 'geo')
  for (const direction of ['asc', 'desc', 'custom']) {
    section = await openSection(canvas, root, 'Data Table')
    await user.selectOptions(select(section, 'Sort Direction'), direction)
    await waitConfig(read, config => expect(config.table.defaultSort.sortDirection).toBe(direction))
  }

  section = await openSection(canvas, root, 'Data Table')
  await toggle(user, section, 'Show Download CSV Link', true)
  section = await openSection(canvas, root, 'Data Table')
  await toggle(user, section, 'Show Link Below Table', true)
  section = await openSection(canvas, root, 'Data Table')
  await toggle(user, section, 'Download only visible data', true)
  section = await openSection(canvas, root, 'Data Table')
  await setText(user, section, 'Download Data Link Text', 'Download county CSV')
  await setText(user, section, 'Download Filename', 'county-map-regression')
  await waitConfig(read, config => {
    expect(config.table.downloadDataLabel).toBe('Download county CSV')
    expect(config.table.downloadFileName).toBe('county-map-regression')
  })
  const csvButton = canvas.getByRole('button', { name: 'Download this data in a CSV file format.' })
  await user.click(csvButton)
  await waitFor(() => expect(downloads.blobs).toHaveLength(1))
  const csv = await downloads.blobs[0].text()
  expect(csv).toContain('Autauga')
  expect(csv).not.toContain('Baldwin')
  expect(downloads.anchors[0].download).toContain('county-map-regression')
  await user.clear(search)

  section = await openSection(canvas, root, 'Data Table')
  await toggle(user, section, 'Include Full Geo Name in CSV Download', false)
  section = await openSection(canvas, root, 'Data Table')
  await toggle(user, section, 'Include Full Geo Name in CSV Download', true)
  section = await openSection(canvas, root, 'Data Table')
  await toggle(user, section, 'Enable Image Download', true)
  section = await openSection(canvas, root, 'Data Table')
  await toggle(user, section, 'Include Heading & Context', true)
  section = await openSection(canvas, root, 'Data Table')
  await setText(user, section, 'Download Image Link Text', 'Download county PNG')
  await waitConfig(read, config => {
    expect(config.general.showDownloadImgButton).toBe(true)
    expect(config.general.includeContextInDownload).toBe(true)
    expect(config.table.downloadImageLabel).toBe('Download county PNG')
  })
  expect(canvas.getByText('Download county PNG')).toBeVisible()

  const general = await openSection(canvas, root, 'General')
  await toggle(user, general, 'Show Title', false)
  section = await openSection(canvas, root, 'Data Table')
  await toggle(user, section, 'Include Hidden Map Title in Download', true)
  await waitConfig(read, config => expect(config.general.includeTitleInDownload).toBe(true))
  const restoredGeneral = await openSection(canvas, root, 'General')
  await toggle(user, restoredGeneral, 'Show Title', true)

  section = await openSection(canvas, root, 'Data Table')
  expect(normalize(section.textContent)).not.toContain('Show URL to Automatically Updated Data')
  expect(normalize(section.textContent)).not.toContain('Show Data Table Name & Link')
  mark('73-86')
}

const exerciseInteractivity = async (canvas: Canvas, root: HTMLElement, user: User, read: () => Config) => {
  let section = await openSection(canvas, root, 'Interactivity')
  await user.selectOptions(select(section, 'Detail displays on'), 'click')
  section = await openSection(canvas, root, 'Interactivity')
  await setText(user, section, 'Tooltips Link Label', 'County details')
  await setText(user, section, 'No Data Tooltip Text', 'No county data')
  await waitConfig(read, config => {
    expect(config.tooltips.appearanceType).toBe('click')
    expect(config.tooltips.linkLabel).toBe('County details')
    expect(config.tooltips.noDataLabel).toBe('No county data')
  })
  section = await openSection(canvas, root, 'Interactivity')
  await user.selectOptions(select(section, 'Detail displays on'), 'hover')

  section = await openSection(canvas, root, 'Interactivity')
  await user.selectOptions(select(section, 'Link URL column'), 'FIPS Codes')
  section = await openSection(canvas, root, 'Interactivity')
  expect(select(section, 'Open links in')).toBeVisible()
  expect(checkbox(section, 'Clicking a map location opens its link')).toBeVisible()
  expect(checkbox(section, 'Show links in the data table')).toBeVisible()
  await user.selectOptions(select(section, 'Open links in'), '_self')
  section = await openSection(canvas, root, 'Interactivity')
  await toggle(user, section, 'Clicking a map location opens its link', true)
  section = await openSection(canvas, root, 'Interactivity')
  await toggle(user, section, 'Show links in the data table', true)
  let table = await expandTable(root, user)
  const autaugaLink = Array.from(table.querySelectorAll<HTMLAnchorElement>('a')).find(anchor =>
    normalize(anchor.textContent).includes('Autauga')
  )
  expect(autaugaLink).toBeTruthy()
  expect(autaugaLink?.getAttribute('href')).toContain('01001')
  section = await openSection(canvas, root, 'Interactivity')
  await user.selectOptions(select(section, 'Open links in'), '_blank')
  await waitConfig(read, config => expect(config.general.navigationTarget).toBe('_blank'))
  section = await openSection(canvas, root, 'Interactivity')
  await toggle(user, section, 'Clicking a map location opens its link', false)
  section = await openSection(canvas, root, 'Interactivity')
  await toggle(user, section, 'Show links in the data table', false)
  table = await expandTable(root, user)
  expect(
    Array.from(table.querySelectorAll('a')).some(anchor => normalize(anchor.textContent).includes('Autauga'))
  ).toBe(false)
  mark('87-90')
}

const exerciseVisual = async (canvas: Canvas, root: HTMLElement, user: User, read: () => Config) => {
  let section = await openSection(canvas, root, 'Visual')
  expect(section.querySelector('button.theme-purple')).toBeTruthy()
  await user.click(section.querySelector<HTMLButtonElement>('button.theme-purple')!)
  section = await openSection(canvas, root, 'Visual')
  await user.click(section.querySelector<HTMLButtonElement>('button.theme-blue')!)
  await waitConfig(read, config => expect(config.general.headerColor).toBe('theme-blue'))

  section = await openSection(canvas, root, 'Visual')
  const treatment = Array.from(section.querySelectorAll<HTMLSelectElement>('select')).find(element =>
    normalize(element.closest('label')?.textContent).startsWith('Style Treatment')
  )
  if (treatment) {
    await user.selectOptions(treatment, 'legacy')
    section = await openSection(canvas, root, 'Visual')
    await toggle(user, section, 'Display Border', true)
    section = await openSection(canvas, root, 'Visual')
    await toggle(user, section, 'Use Border Color Theme', true)
    section = await openSection(canvas, root, 'Visual')
    await toggle(user, section, 'Use Accent Style', true)
    section = await openSection(canvas, root, 'Visual')
    await user.selectOptions(select(section, 'Style Treatment'), 'tp5')
  }

  section = await openSection(canvas, root, 'Visual')
  await toggle(user, section, 'Show Title', false)
  expect(root.querySelector('.cove-title')).not.toBeInTheDocument()
  section = await openSection(canvas, root, 'Visual')
  await toggle(user, section, 'Show Title', true)
  section = await openSection(canvas, root, 'Visual')
  await user.selectOptions(select(section, 'Geo Border Color'), 'sameAsBackground')
  await waitConfig(read, config => expect(config.general.geoBorderColor).toBe('sameAsBackground'))
  section = await openSection(canvas, root, 'Visual')
  await user.selectOptions(select(section, 'Geo Border Color'), 'darkGray')

  section = await openSection(canvas, root, 'Visual')
  const palette = section.querySelector<HTMLButtonElement>('button[title="sequential_blue"]')
  expect(palette).toBeTruthy()
  await user.click(palette!)
  const conversion = canvas.queryByRole('button', { name: 'Convert to New Palette' })
  if (conversion) await user.click(conversion)
  section = await openSection(canvas, root, 'Visual')
  let reverse = Array.from(section.querySelectorAll<HTMLInputElement>('input')).find(input =>
    normalize(input.closest('label')?.textContent).includes('Use selected palette in reverse order')
  )!
  await user.click(reverse)
  await waitConfig(read, config => expect(config.general.palette.isReversed).toBe(true))
  section = await openSection(canvas, root, 'Visual')
  reverse = Array.from(section.querySelectorAll<HTMLInputElement>('input')).find(input =>
    normalize(input.closest('label')?.textContent).includes('Use selected palette in reverse order')
  )!
  await user.click(reverse)

  section = await openSection(canvas, root, 'Visual')
  await toggle(user, section, 'Allow Map Zooming', true)
  await performAndAssert(
    'County Canvas zoom in',
    () => canvasState(root),
    async () => user.click(await canvas.findByRole('button', { name: 'Zoom In' })),
    (before, after) => after.scale > before.scale && after.transform !== before.transform
  )
  await user.click(await canvas.findByRole('button', { name: 'Zoom Out' }))
  await user.click(await canvas.findByRole('button', { name: 'Reset Zoom' }))
  expect(canvasState(root).scale).toBe(1)
  section = await openSection(canvas, root, 'Visual')
  await toggle(user, section, 'Allow Map Zooming', false)
  expect(canvas.queryByRole('button', { name: 'Zoom In' })).not.toBeInTheDocument()
  section = await openSection(canvas, root, 'Visual')
  await toggle(user, section, 'Allow Map Zooming', true)

  for (const shape of ['pin', 'square', 'triangle', 'diamond', 'star', 'circle']) {
    section = await openSection(canvas, root, 'Visual')
    await user.selectOptions(select(section, 'Default City Style'), shape)
    await waitConfig(read, config => expect(config.visual.cityStyle).toBe(shape))
  }
  section = await openSection(canvas, root, 'Visual')
  await setText(user, section, 'Label (Optional)', 'Sample locations')
  await waitConfig(read, config => expect(config.visual.cityStyleLabel).toBe('Sample locations'))
  section = await openSection(canvas, root, 'Visual')
  await setText(user, section, 'Label (Optional)', '')
  await waitConfig(read, config => expect(config.visual.cityStyleLabel).toBe(''))
  section = await openSection(canvas, root, 'Visual')
  await setText(user, section, 'Geocode Circle Size', '7')
  await setText(user, section, 'Tooltip Opacity (%)', '50')
  await waitConfig(read, config => {
    expect(String(config.visual.geoCodeCircleSize)).toBe('7')
    expect(String(config.tooltips.opacity)).toBe('50')
  })
  section = await openSection(canvas, root, 'Visual')
  await setText(user, section, 'Tooltip Opacity (%)', '100')
  await waitConfig(read, config => expect(String(config.tooltips.opacity)).toBe('100'))
  mark('93-101')
}

const exerciseCustomLayers = async (
  canvas: Canvas,
  root: HTMLElement,
  user: User,
  read: () => Config,
  layerFetches: string[]
) => {
  let section = await openSection(canvas, root, 'Custom Map Layers')
  await user.click(within(section).getByRole('button', { name: 'Add Map Layer' }))
  const currentLayer = async () => {
    const panel = await openSection(canvas, root, 'Custom Map Layers')
    const button = within(panel).getByRole('button', { name: /Layer 1:/ })
    if (button.getAttribute('aria-expanded') !== 'true') await user.click(button)
    const refreshed = await openSection(canvas, root, 'Custom Map Layers')
    const refreshedButton = within(refreshed).getByRole('button', { name: /Layer 1:/ })
    if (refreshedButton.getAttribute('aria-expanded') !== 'true') await user.click(refreshedButton)
    return refreshedButton.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
  }
  const field = async (name: string, index = 0) =>
    (await currentLayer()).querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(`[name="${name}"]`)[index]
  const change = async (name: string, value: string, index = 0) => {
    const control = await field(name, index)
    fireEvent.change(control, { target: { value } })
    fireEvent.blur(control)
  }
  await change('layerName', 'Regression layer')
  await change('layerNamespace', 'cove')
  await change('layerFill', '#008000')
  await change('layerFill', '30', 1)
  await change('layerStroke', '#000000')
  await change('layerStrokeWidth', '2')
  await change('layerTooltip', 'Regression polygon')
  await change('layerFilename', LAYER_URL)
  await waitFor(() => expect(layerFetches).toEqual([LAYER_URL]), { timeout: 10000 })
  await waitConfig(read, config =>
    expect(config.map.layers[0]).toMatchObject({
      name: 'Regression layer',
      url: LAYER_URL,
      namespace: 'cove',
      fill: '#008000',
      fillOpacity: 0.3,
      stroke: '#000000',
      strokeWidth: '2',
      tooltip: 'Regression polygon'
    })
  )
  expect(canvasState(root).width).toBeGreaterThan(0)
  await change('layerFill', '#0000ff')
  await change('layerFill', '60', 1)
  await change('layerStroke', '#ff0000')
  await change('layerStrokeWidth', '4')
  await waitConfig(read, config =>
    expect(config.map.layers[0]).toMatchObject({
      fill: '#0000ff',
      fillOpacity: 0.6,
      stroke: '#ff0000',
      strokeWidth: '4'
    })
  )
  const item = await currentLayer()
  await user.click(within(item).getByRole('button', { name: 'Remove Layer' }))
  await waitConfig(read, config => expect(config.map.layers).toHaveLength(0))
  expect(layerFetches).toEqual([LAYER_URL])
  mark('102-103')
}

type ConsoleCapture = { errors: string[]; expectedPatternErrors: string[]; unexpectedWarnings: string[] }

const exercisePatterns = async (
  canvas: Canvas,
  root: HTMLElement,
  user: User,
  read: () => Config,
  consoleCapture: ConsoleCapture
) => {
  let section = await openSection(canvas, root, 'Pattern Settings')
  await user.click(within(section).getByRole('button', { name: 'Add Geo Pattern' }))
  const patternItem = async () => {
    const panel = await openSection(canvas, root, 'Pattern Settings')
    const button = within(panel).getByRole('button', { name: /Select Column|Vaccination Coverage Group:/ })
    if (button.getAttribute('aria-expanded') !== 'true') await user.click(button)
    const currentPanel = await openSection(canvas, root, 'Pattern Settings')
    const current = within(currentPanel).getByRole('button', { name: /Select Column|Vaccination Coverage Group:/ })
    if (current.getAttribute('aria-expanded') !== 'true') await user.click(current)
    return current.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')!
  }
  let item = await patternItem()
  await user.selectOptions(select(item, 'Data Key:'), 'Vaccination Coverage Group')
  item = await patternItem()
  fireEvent.change(textControl(item, 'Data Value:'), { target: { value: '70% or More' } })
  item = await patternItem()
  fireEvent.change(textControl(item, 'Label (optional):'), { target: { value: 'High coverage' } })
  item = await patternItem()
  await user.selectOptions(select(item, 'Pattern Type:'), 'circles')
  item = await patternItem()
  await user.selectOptions(select(item, 'Pattern Size:'), 'small')
  await waitConfig(read, config =>
    expect(config.map.patterns[0]).toMatchObject({
      dataKey: 'Vaccination Coverage Group',
      dataValue: '70% or More',
      label: 'High coverage',
      pattern: 'circles',
      size: 'small'
    })
  )
  await waitFor(() => expect(legendText(root)).toContain('High coverage'))
  for (const type of ['waves', 'diagonalLines', 'circles']) {
    item = await patternItem()
    await user.selectOptions(select(item, 'Pattern Type:'), type)
  }
  for (const size of ['medium', 'large', 'small']) {
    item = await patternItem()
    await user.selectOptions(select(item, 'Pattern Size:'), size)
  }
  item = await patternItem()
  fireEvent.change(textControl(item, 'Pattern Color'), { target: { value: '#ffffff' } })
  await waitFor(() => expect(awaitPatternItemText(root)).toContain('passes contrast checks'))
  const beforeBlack = consoleCapture.errors.length
  item = await patternItem()
  fireEvent.change(textControl(item, 'Pattern Color'), { target: { value: '#000000' } })
  await waitConfig(read, config => expect(config.runtime.editorErrorMessage).toContain('contrast ratio'))
  const emitted = consoleCapture.errors.slice(beforeBlack)
  expect(emitted.length).toBeGreaterThan(0)
  for (const message of emitted) {
    expect(message).toMatch(
      /^COVE: pattern contrast check failed on .+ for Vaccination Coverage Group with:\s+pattern color: #000000\s+contrast: [\d.]+$/
    )
  }
  consoleCapture.expectedPatternErrors.push(...emitted)
  item = await patternItem()
  fireEvent.change(textControl(item, 'Pattern Color'), { target: { value: '' } })
  await waitConfig(read, config => expect(config.runtime.editorErrorMessage || '').toBe(''))
  item = await patternItem()
  await user.click(within(item).getByRole('button', { name: 'Remove Pattern' }))
  await waitConfig(read, config => expect(config.map.patterns).toHaveLength(0))
  expect(legendText(root)).not.toContain('High coverage')
  mark('104-107')
}

const awaitPatternItemText = (root: HTMLElement) =>
  normalize(
    accordionButton(root, 'Pattern Settings')?.closest<HTMLElement>('[data-accordion-component="AccordionItem"]')
      ?.textContent
  )

const openMarkupVariable = async (canvas: Canvas, root: HTMLElement, user: User) => {
  const section = await openSection(canvas, root, 'Markup Variables')
  const edit = within(section).getByRole('button', { name: /Edit|Close/ })
  if (normalize(edit.textContent) === 'Edit') await user.click(edit)
  const current = await openSection(canvas, root, 'Markup Variables')
  return current.querySelector<HTMLElement>('.variable-item')!
}

const openMarkupSubsection = async (
  canvas: Canvas,
  root: HTMLElement,
  user: User,
  name: 'Basic Settings' | 'Conditions' | 'Formatting Options'
) => {
  const variable = await openMarkupVariable(canvas, root, user)
  let button = within(variable).getByRole('button', { name })
  if (button.getAttribute('aria-expanded') !== 'true') await user.click(button)
  const current = await openMarkupVariable(canvas, root, user)
  button = within(current).getByRole('button', { name })
  if (button.getAttribute('aria-expanded') !== 'true') await user.click(button)
  return button.closest<HTMLElement>('[data-accordion-component="AccordionItem"]') || current
}

const exerciseMarkupVariables = async (canvas: Canvas, root: HTMLElement, user: User, read: () => Config) => {
  let section = await openSection(canvas, root, 'Markup Variables')
  await toggle(user, section, 'Enable Markup Variables', true)
  section = await openSection(canvas, root, 'Markup Variables')
  await user.click(within(section).getByRole('button', { name: /Add Variable/ }))
  let basic = await openMarkupSubsection(canvas, root, user, 'Basic Settings')
  await user.selectOptions(select(basic, 'Source'), 'column')
  basic = await openMarkupSubsection(canvas, root, user, 'Basic Settings')
  await user.selectOptions(select(basic, 'Data Column'), 'County')
  basic = await openMarkupSubsection(canvas, root, user, 'Basic Settings')
  await setText(user, basic, 'Variable Name', 'County name')
  await waitConfig(read, config =>
    expect(config.markupVariables[0]).toMatchObject({
      columnName: 'County',
      name: 'County name',
      tag: '{{county-name}}'
    })
  )

  let conditions = await openMarkupSubsection(canvas, root, user, 'Conditions')
  await user.click(within(conditions).getByRole('button', { name: /Add Condition/ }))
  conditions = await openMarkupSubsection(canvas, root, user, 'Conditions')
  await user.selectOptions(select(conditions, 'Column'), 'Public Health Jurisdiction')
  conditions = await openMarkupSubsection(canvas, root, user, 'Conditions')
  await user.selectOptions(select(conditions, 'Operator'), 'is')
  conditions = await openMarkupSubsection(canvas, root, user, 'Conditions')
  await user.selectOptions(select(conditions, 'Value'), 'AL')
  conditions = await openMarkupSubsection(canvas, root, user, 'Conditions')
  await user.selectOptions(select(conditions, 'Display all matching rows'), 'no')
  expect(conditions.querySelector('[role="alert"]')).toBeTruthy()
  conditions = await openMarkupSubsection(canvas, root, user, 'Conditions')
  await user.selectOptions(select(conditions, 'Display all matching rows'), 'yes')
  conditions = await openMarkupSubsection(canvas, root, user, 'Conditions')
  await user.selectOptions(select(conditions, 'Operator'), 'is not')
  conditions = await openMarkupSubsection(canvas, root, user, 'Conditions')
  await user.selectOptions(select(conditions, 'Operator'), 'is')
  await waitConfig(read, config =>
    expect(config.markupVariables[0].conditions[0]).toMatchObject({
      columnName: 'Public Health Jurisdiction',
      value: 'AL',
      isOrIsNotEqualTo: 'is'
    })
  )

  let formatting = await openMarkupSubsection(canvas, root, user, 'Formatting Options')
  await toggle(user, formatting, 'Format numbers with commas', true)
  formatting = await openMarkupSubsection(canvas, root, user, 'Formatting Options')
  await setText(user, formatting, 'Round to decimal point', '1')
  await setText(user, formatting, 'Date Parse Format', '%Y')
  await setText(user, formatting, 'Date Display Format', '%Y')
  await waitConfig(read, config =>
    expect(config.markupVariables[0]).toMatchObject({
      roundToPlace: '1',
      dateParseFormat: '%Y',
      dateDisplayFormat: '%Y'
    })
  )
  formatting = await openMarkupSubsection(canvas, root, user, 'Formatting Options')
  await toggle(user, formatting, 'Hide section when value is null', true)
  await waitConfig(read, config =>
    expect(config.markupVariables[0]).toMatchObject({
      addCommas: true,
      roundToPlace: '1',
      dateParseFormat: '%Y',
      dateDisplayFormat: '%Y',
      hideOnNull: true
    })
  )

  basic = await openMarkupSubsection(canvas, root, user, 'Basic Settings')
  await user.selectOptions(select(basic, 'Source'), 'metadata')
  basic = await openMarkupSubsection(canvas, root, user, 'Basic Settings')
  expect(basic).toHaveTextContent('This config does not currently contain any data file metadata.')
  expect(
    Array.from(basic.querySelectorAll('select')).some(element =>
      normalize(element.closest('label')?.textContent).startsWith('Metadata Field')
    )
  ).toBe(false)

  basic = await openMarkupSubsection(canvas, root, user, 'Basic Settings')
  await user.selectOptions(select(basic, 'Source'), 'icon')
  basic = await openMarkupSubsection(canvas, root, user, 'Basic Settings')
  await user.selectOptions(select(basic, 'Icon Mode'), 'static')
  const iconButton = basic.querySelector<HTMLButtonElement>('button[aria-haspopup="listbox"]')
  expect(iconButton).toBeTruthy()
  await user.click(iconButton!)
  const iconList = await canvas.findByRole('listbox', { name: 'Select an icon' })
  const iconOptions = within(iconList)
    .getAllByRole('option')
    .filter(option => normalize(option.textContent) !== 'None')
  await user.click(iconOptions[0])
  basic = await openMarkupSubsection(canvas, root, user, 'Basic Settings')
  await setText(user, basic, 'Variable Name', 'County icon')
  await waitConfig(read, config => expect(config.markupVariables[0].name).toBe('County icon'))
  basic = await openMarkupSubsection(canvas, root, user, 'Basic Settings')
  await user.selectOptions(select(basic, 'Icon Mode'), 'data-driven')
  basic = await openMarkupSubsection(canvas, root, user, 'Basic Settings')
  await user.selectOptions(select(basic, 'Data Column'), 'Vaccination Coverage Group')
  basic = await openMarkupSubsection(canvas, root, user, 'Basic Settings')
  expect(within(basic).getByRole('button', { name: 'Add Icon Mapping' })).toBeVisible()
  await waitConfig(read, config =>
    expect(config.markupVariables[0]).toMatchObject({ columnName: 'Vaccination Coverage Group', outputType: 'svg' })
  )

  const variable = await openMarkupVariable(canvas, root, user)
  await user.click(within(variable).getByRole('button', { name: 'Delete Variable' }))
  await waitConfig(read, config => expect(config.markupVariables).toHaveLength(0))
  section = await openSection(canvas, root, 'Markup Variables')
  await toggle(user, section, 'Enable Markup Variables', false)
  await waitConfig(read, config => expect(config.enableMarkupVariables).toBe(false))
  mark('108-114')
}

const exerciseKeyboard = async (canvas: Canvas, root: HTMLElement, user: User) => {
  const zoom = canvas.getByRole('button', { name: 'Zoom In' })
  zoom.focus()
  expect(zoom).toHaveFocus()
  await user.keyboard('{Enter}')
  expect(canvasState(root).scale).toBeGreaterThan(1)
  const reset = canvas.getByRole('button', { name: 'Reset Zoom' })
  reset.focus()
  await user.keyboard(' ')
  expect(canvasState(root).scale).toBe(1)
  const tableHeading = root.querySelector<HTMLElement>('.data-table-heading')!
  tableHeading.focus()
  expect(tableHeading).toHaveFocus()
  mark('115')
}

export const MAP004: Story = {
  name: 'County Tests',
  args: { config: structuredClone({}) },
  play: async ({ canvasElement }) => {
    completed.clear()
    const canvas = within(canvasElement)
    const user = userEvent.setup()
    const originalFetch = window.fetch
    const originalOpen = window.open
    const originalConsoleError = console.error
    const originalCreateObjectURL = URL.createObjectURL
    const originalRevokeObjectURL = URL.revokeObjectURL
    const originalAnchorClick = HTMLAnchorElement.prototype.click
    const originalConfirm = window.confirm
    const originalUrl = window.location.href
    const originalConsoleWarn = console.warn
    const layerFetches: string[] = []
    const topologyFetches: string[] = []
    const deniedFetches: string[] = []
    const downloads: DownloadCapture = { blobs: [], anchors: [] }
    const consoleCapture: ConsoleCapture = { errors: [], expectedPatternErrors: [], unexpectedWarnings: [] }
    const unhandledRejections: unknown[] = []
    const openedWindows: { destination: string; target: string }[] = []
    let latestConfig: Config = {}

    const onConfig = (event: Event) => {
      latestConfig = JSON.parse((event as CustomEvent<string>).detail)
    }
    const onRejection = (event: PromiseRejectionEvent) => unhandledRejections.push(event.reason)
    const onConsoleError = (...args: unknown[]) =>
      consoleCapture.errors.push(args.map(value => String(value)).join(' '))
    const onConsoleWarn = (...args: unknown[]) => {
      const message = args.map(value => String(value)).join(' ')
      if (!/^Value not assigned to any range: -?\d+(?:\.\d+)? assigning to closest range$/.test(message)) {
        consoleCapture.unexpectedWarnings.push(message)
      }
    }

    window.fetch = (input: RequestInfo | URL) => {
      const url = input instanceof Request ? input.url : String(input)
      const path = new URL(url, window.location.origin).pathname
      if (path === LAYER_URL) {
        layerFetches.push(path)
        return Promise.resolve(
          new Response(customLayerJson, { status: 200, headers: { 'Content-Type': 'application/json' } })
        )
      }
      if (TOPOLOGY_URLS.has(url)) {
        topologyFetches.push(url)
        return Promise.resolve(
          new Response(JSON.stringify(countyTopo), { status: 200, headers: { 'Content-Type': 'application/json' } })
        )
      }
      deniedFetches.push(url)
      return Promise.reject(new Error(`MAP-004 denied unexpected fetch: ${url}`))
    }
    window.open = fn((destination?: string | URL, target?: string) => {
      openedWindows.push({ destination: String(destination), target: target || '' })
      return null
    })
    URL.createObjectURL = fn((blob: Blob) => {
      downloads.blobs.push(blob)
      return `blob:map004-${downloads.blobs.length}`
    })
    URL.revokeObjectURL = fn()
    HTMLAnchorElement.prototype.click = function () {
      downloads.anchors.push({ href: this.href, download: this.download, target: this.target })
    }
    window.confirm = fn(() => true)
    console.error = onConsoleError
    console.warn = onConsoleWarn
    window.addEventListener('unhandledrejection', onRejection)
    window.addEventListener('updateVizConfig', onConfig)

    try {
      const read = () => latestConfig
      await configureCountyMap(canvas, canvasElement, user, read)
      await exerciseType(canvas, canvasElement, user, read)
      await exerciseGeneral(canvas, canvasElement, user, read)
      await exerciseColumns(canvas, canvasElement, user, read)
      await exerciseLegend(canvas, canvasElement, user, read)
      await exerciseFilters(canvas, canvasElement, user, read)
      await exerciseFootnotes(canvas, canvasElement, user, read)
      await exerciseDataTable(canvas, canvasElement, user, read, downloads)
      await exerciseInteractivity(canvas, canvasElement, user, read)
      await exerciseVisual(canvas, canvasElement, user, read)
      await exerciseCustomLayers(canvas, canvasElement, user, read, layerFetches)
      await exercisePatterns(canvas, canvasElement, user, read, consoleCapture)
      await exerciseMarkupVariables(canvas, canvasElement, user, read)
      await exerciseKeyboard(canvas, canvasElement, user)

      expect([...completed].sort()).toEqual([...REQUIRED].sort())
      expect(layerFetches).toEqual([LAYER_URL])
      expect(deniedFetches).toEqual([])
      for (const year of TOPOLOGY_YEARS) {
        expect(topologyFetches).toContain(`${TOPOLOGY_ROOT}cb_${year}_us_county_20m.json`)
      }
      expect(openedWindows).toEqual([])
      expect(unhandledRejections).toEqual([])
      const remainingErrors = [...consoleCapture.errors]
      for (const expected of consoleCapture.expectedPatternErrors) {
        const index = remainingErrors.indexOf(expected)
        expect(index).toBeGreaterThanOrEqual(0)
        remainingErrors.splice(index, 1)
      }
      expect(remainingErrors).toEqual([])
      expect(consoleCapture.unexpectedWarnings).toEqual([])

      // Canonical steps 91-92 intentionally remain last. Current production
      // excludes us-county in isLocationHighlighterEligible; preserve this
      // presence assertion so the runner reports the reproduced defect.
      const interactivity = await openSection(canvas, canvasElement, 'Interactivity')
      expect(within(interactivity).getByLabelText('Show location highlighter')).toBeVisible()
    } finally {
      window.fetch = originalFetch
      window.open = originalOpen
      console.error = originalConsoleError
      console.warn = originalConsoleWarn
      URL.createObjectURL = originalCreateObjectURL
      URL.revokeObjectURL = originalRevokeObjectURL
      HTMLAnchorElement.prototype.click = originalAnchorClick
      window.confirm = originalConfirm
      window.removeEventListener('unhandledrejection', onRejection)
      window.removeEventListener('updateVizConfig', onConfig)
      if (window.location.href !== originalUrl) window.history.replaceState(null, '', originalUrl)
    }
  }
}
