import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import {
  assertVisualizationRendered,
  openAccordion,
  performAndAssert,
  waitForEditor,
  waitForPresence
} from '@cdc/core/helpers/testing'
import Filters from '@cdc/core/components/Filters'
import CdcMap from '../CdcMap'
import CdcMapComponent from '../CdcMapComponent'
import { createDefaultBubbleLayer } from '../helpers/bubbleLayers'
import { createNewMapConfig } from '../helpers/createNewMapConfig'
import base from './_mock/equal-number.json'

const makeConfig = () =>
  createNewMapConfig({
    ...base,
    general: { ...base.general, navigationTarget: '_self' },
    table: { ...base.table, expanded: true, forceDisplay: true },
    locationHighlighter: {
      enabled: true,
      position: 'below',
      details: '<a href="{{url}}" target="_self">Learn more about {{location}} »</a>'
    },
    enableMarkupVariables: true,
    markupVariables: [{ name: 'url', tag: '{{url}}', columnName: 'URL', selectionMode: 'first', conditions: [] }],
    data: base.data.map(row => ({ ...row, URL: ['Alabama', 'AL'].includes(row.STATE) ? '/al' : '' }))
  } as any)
const meta: Meta<typeof CdcMap> = { title: 'Components/Templates/Map/Location Links', component: CdcMap }
export default meta
type Story = StoryObj<typeof CdcMap>

export const Selection: Story = {
  args: { config: makeConfig(), navigationHandler: fn() },
  play: async ({ canvasElement, args }) => {
    await assertVisualizationRendered(canvasElement)
    const canvas = within(canvasElement)
    const select = canvas.getByLabelText('Select a location for more information')
    const selectorStyles = getComputedStyle(canvasElement.querySelector('.map-location-highlighter')!)
    expect(selectorStyles.borderTopWidth).toBe('1px')
    expect(selectorStyles.borderTopStyle).toBe('solid')
    expect(selectorStyles.paddingTop).toBe(getComputedStyle(document.documentElement).fontSize)
    expect(canvasElement.querySelector('.map-location-highlighter a')).toBeNull()
    await userEvent.selectOptions(select, 'US-AL')
    expect(select).toHaveFocus()
    const link = within(canvasElement.querySelector('.map-location-highlighter') as HTMLElement).getByRole('link')
    expect(link).toHaveAttribute('target', '_self')
    expect(link).toHaveTextContent('Learn more about Alabama »')
    expect(link).not.toHaveTextContent('new window')
    expect(link).toHaveAttribute('href', '/al')
    const observeClick = fn((event: MouseEvent) => {
      const wasPrevented = event.defaultPrevented
      // Keep the test on this page while verifying native link behavior.
      event.preventDefault()
      expect(wasPrevented).toBe(false)
    })
    document.addEventListener('click', observeClick, { once: true })
    await userEvent.click(link)
    expect(observeClick).toHaveBeenCalledOnce()
    expect(args.navigationHandler).not.toHaveBeenCalled()
    await userEvent.selectOptions(select, 'US-AK')
    expect(canvasElement.querySelector('.map-location-highlighter__details')).toHaveTextContent('Alaska')
    const module = canvasElement.querySelector('.map-location-highlighter')!
    const map = canvasElement.querySelector('.map-container')!
    expect(map.compareDocumentPosition(module) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    const bodyWrap = canvasElement.querySelector('.cove-visualization__body-wrap')!
    expect(module.parentElement).toBe(bodyWrap)
    expect(module.nextElementSibling).toBe(canvasElement.querySelector('.cove-visualization__body-footer-section'))
    const sectionGap = parseFloat(getComputedStyle(bodyWrap).rowGap)
    expect(
      module.getBoundingClientRect().top - module.previousElementSibling!.getBoundingClientRect().bottom
    ).toBeCloseTo(sectionGap, 0)
  }
}

export const AboveHexMobile: Story = {
  args: {
    config: (() => {
      const c = makeConfig()
      c.locationHighlighter.details = 'Supporting information <a href="/report">Report</a>'
      c.general.displayAsHex = true
      c.locationHighlighter.position = 'above'
      return c
    })()
  },
  render: args => (
    <div style={{ width: 360, maxWidth: '100%' }}>
      <CdcMap {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const select = within(canvasElement).getByRole('combobox', { name: 'Select a location for more information' })
    await userEvent.selectOptions(select, 'US-AL')
    const module = canvasElement.querySelector('.map-location-highlighter') as HTMLElement
    const map = canvasElement.querySelector('.map-container')!
    expect(module.compareDocumentPosition(map) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    const content = canvasElement.querySelector('.cove-visualization__content-section')!
    const bodyWrap = canvasElement.querySelector('.cove-visualization__body-wrap')!
    expect(module.parentElement).toBe(bodyWrap)
    expect(module.nextElementSibling).toBe(content)
    const sectionGap = parseFloat(getComputedStyle(bodyWrap).rowGap)
    expect(content.getBoundingClientRect().top - module.getBoundingClientRect().bottom).toBeCloseTo(sectionGap, 0)
    expect(module.scrollWidth).toBeLessThanOrEqual(module.clientWidth)
    await userEvent.tab()
    expect(within(module).getByRole('button', { name: 'Reset' })).toHaveFocus()
    await userEvent.tab()
    expect(within(module).getByRole('link')).toHaveFocus()
  }
}

export const InteractivityEditor: Story = {
  args: {
    config: (() => {
      const c = makeConfig()
      c.locationHighlighter.enabled = false
      delete c.locationHighlighter.highlightSelectedLocation
      return c
    })(),
    isEditor: true,
    navigationHandler: fn()
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await performAndAssert(
      'Open Interactivity groups',
      () => {
        const panel = canvasElement.querySelector('[aria-label="Location link settings"]')?.closest('.accordion__panel')
        return panel ? getComputedStyle(panel).opacity : '0'
      },
      () => openAccordion(canvas, 'Interactivity'),
      (_, after) => after === '1'
    )
    await waitForPresence('g.geo-group[id="Alabama"]', canvasElement)
    const linkControls = canvas.getByRole('region', { name: 'Location link settings' })
    expect(within(linkControls).getByRole('heading', { name: 'Location links' })).toBeVisible()
    const selectorControls = canvas.getByRole('region', { name: 'Location highlighter settings' })
    expect(within(selectorControls).getByRole('heading', { name: 'Location highlighter' })).toBeVisible()
    const highlighterToggle = within(selectorControls).getByLabelText('Show location highlighter')
    const helpTarget = highlighterToggle.closest('label')!.querySelector('.cove-tooltip--target')!
    const helpText =
      'Let visitors choose a location from a dropdown to highlight it on the map and view information about it.'
    await performAndAssert(
      'Explain the location highlighter toggle',
      () => {
        const tooltip = canvas.queryByText(helpText)?.closest('.cove-tooltip__content')
        return (
          !!tooltip &&
          getComputedStyle(tooltip).visibility === 'visible' &&
          Number(getComputedStyle(tooltip).opacity) > 0
        )
      },
      () => userEvent.hover(helpTarget),
      (_, after) => after
    )
    expect(canvas.getByText(helpText)).toBeVisible()
    await userEvent.unhover(helpTarget)

    expect(linkControls.compareDocumentPosition(selectorControls) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(canvas.queryByRole('heading', { name: 'Tooltips' })).toBeNull()
    expect(getComputedStyle(linkControls).borderTopWidth).toBe('1px')
    for (const checkbox of within(linkControls).getAllByRole('checkbox')) {
      expect(getComputedStyle(checkbox.closest('label')!).borderLeftWidth).toBe('0px')
    }
    expect(canvas.queryByText('Show the data table to enable its link control.')).toBeNull()
    const state = canvasElement.querySelector('g.geo-group[id="Alabama"]') as HTMLElement
    await performAndAssert(
      'Enable direct links',
      () => getComputedStyle(state).cursor,
      () => userEvent.click(canvas.getByLabelText('Clicking a map location opens its link')),
      (_, after) => after === 'pointer'
    )
    await performAndAssert(
      'Disable direct links',
      () => getComputedStyle(state).cursor,
      () => userEvent.click(canvas.getByLabelText('Clicking a map location opens its link')),
      (_, after) => after !== 'pointer'
    )
    await performAndAssert(
      'Hide table links',
      () => canvasElement.querySelectorAll('td .table-link').length,
      () => userEvent.click(canvas.getByLabelText('Show links in the data table')),
      (before, after) => before > 0 && after === 0
    )
    await performAndAssert(
      'Show table links',
      () => canvasElement.querySelectorAll('td .table-link').length,
      () => userEvent.click(canvas.getByLabelText('Show links in the data table')),
      (_, after) => after > 0
    )
    await performAndAssert(
      'Enable selector',
      () => !!canvasElement.querySelector('.map-location-highlighter'),
      () => userEvent.click(canvas.getByLabelText('Show location highlighter')),
      (_, after) => after
    )
    const select = canvas.getByLabelText('Select a location for more information')
    const normalStateStroke = getComputedStyle(state.querySelector('.single-geo')!).stroke
    await userEvent.selectOptions(select, 'US-AL')
    const alaskaState = canvasElement.querySelector('g.geo-group[id="Alaska"]') as HTMLElement
    const highlight = canvas.getByLabelText('Highlight selected location on map')
    expect(highlight).toBeChecked()
    expect(getComputedStyle(alaskaState).opacity).toBe('0.5')
    for (const enabled of [false, true]) {
      await performAndAssert(
        `${enabled ? 'Enable' : 'Disable'} selected-state highlighting`,
        () => getComputedStyle(alaskaState).opacity,
        () => userEvent.click(highlight),
        (_, after) => after === (enabled ? '0.5' : '1')
      )
      expect(getComputedStyle(state).opacity).toBe('1')
      expect(getComputedStyle(state.querySelector('.single-geo')!).stroke).toBe(
        enabled ? 'rgb(0, 0, 0)' : normalStateStroke
      )
      expect(select).toHaveValue('US-AL')
    }
    const presence = canvas.getByLabelText('Show locations with a value in')
    await performAndAssert(
      'Include only locations with URL values',
      () =>
        Array.from(select.querySelectorAll('option'))
          .map(option => option.value)
          .join(','),
      () => userEvent.selectOptions(presence, 'URL'),
      (_, after) => after === ',US-AL'
    )
    expect(select).toHaveValue('US-AL')
    expect(canvasElement.querySelectorAll('[data-geo-id]')).not.toHaveLength(1)
    await performAndAssert(
      'Clear presence column',
      () => select.querySelectorAll('option').length,
      () => userEvent.selectOptions(presence, ''),
      (_, after) => after > 2
    )
    await userEvent.selectOptions(select, 'US-AK')
    await performAndAssert(
      'Clear excluded selection and highlighting',
      () => !!canvasElement.querySelector('.selected-state-outline'),
      () => userEvent.selectOptions(presence, 'URL'),
      (_, after) => !after
    )
    expect(select).toHaveValue('')
    expect(canvasElement.querySelector('.map-location-highlighter__details')).toBeNull()
    expect(getComputedStyle(state).opacity).toBe('1')
    await userEvent.selectOptions(presence, '')
    await userEvent.selectOptions(select, 'US-AL')
    await performAndAssert(
      'Change map and table link target',
      () => canvasElement.querySelector('td .table-link')?.getAttribute('title') ?? '',
      () => userEvent.selectOptions(canvas.getByLabelText('Open links in'), '_blank'),
      (_, after) => after.includes('new window')
    )
    expect(canvasElement.querySelector('.map-location-highlighter a')).toHaveAttribute('target', '_self')
    await performAndAssert(
      'Move above map',
      () =>
        canvasElement
          .querySelector('.map-location-highlighter')!
          .compareDocumentPosition(canvasElement.querySelector('.map-container')!),
      () => userEvent.selectOptions(canvas.getByLabelText('Position'), 'above'),
      (_, after) => !!(after & Node.DOCUMENT_POSITION_FOLLOWING)
    )
    for (const [label, value, selector] of [
      ['Dropdown label', 'Choose place', '.map-location-highlighter label'],
      ['Placeholder text', 'Choose an option', '.map-location-highlighter option[value=""]'],
      ['Location details', 'Authored details', '.map-location-highlighter__details']
    ]) {
      await userEvent.selectOptions(canvasElement.querySelector('.map-location-highlighter select')!, 'US-AL')
      await performAndAssert(
        label,
        () => canvasElement.querySelector(selector)?.textContent ?? '',
        async () => {
          const input = canvas.getByLabelText(label)
          await userEvent.clear(input)
          await userEvent.type(input, value)
        },
        (_, after) => after === value
      )
    }
    await performAndAssert(
      'Clear navigation URL column',
      () => canvasElement.querySelectorAll('td .table-link').length,
      () => userEvent.selectOptions(canvas.getByLabelText('Link URL column'), ''),
      (_, after) => after === 0
    )
    expect(canvasElement.querySelector('.map-location-highlighter__details')).toHaveTextContent('Authored details')
    expect(canvas.getByLabelText('Choose place')).toHaveValue('US-AL')
    expect(canvas.queryByLabelText('Link text')).toBeNull()
    expect(canvas.queryByLabelText('No-link message')).toBeNull()
  }
}

export const PlaybackOptions: Story = {
  args: {
    config: (() => {
      const c = makeConfig()
      c.general.showSidebar = false
      c.locationHighlighter.details = 'Current rate: {{rate}}<a href="{{url}}">Report</a>'
      c.enableMarkupVariables = true
      c.markupVariables = [
        { name: 'rate', tag: '{{rate}}', columnName: 'Rate', conditions: [] },
        { name: 'url', tag: '{{url}}', columnName: 'URL', selectionMode: 'first', conditions: [] }
      ]
      c.locationHighlighter.highlightSelectedLocation = true
      c.locationHighlighter.filterColumn = 'Presence'
      c.timePlayback = { enabled: true, column: 'Year' }
      c.data = [
        { STATE: 'AL', Rate: 10, Year: 2021, Presence: true, URL: '/old' },
        { STATE: 'CA', Rate: 20, Year: 2021, Presence: true, URL: '' },
        { STATE: 'AL', Rate: 30, Year: 2022, Presence: true, URL: '/new' },
        { STATE: 'NY', Rate: 40, Year: 2022, Presence: true, URL: '' },
        { STATE: 'CA', Rate: 21, Year: 2022, Presence: '', URL: '' }
      ]
      return c
    })()
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const canvas = within(canvasElement)
    const select = canvas.getByLabelText('Select a location for more information')
    await userEvent.selectOptions(select, 'US-AL')
    expect(canvasElement.querySelector('.map-location-highlighter a')).toHaveAttribute('href', '/new')
    expect(canvasElement.querySelector('.map-location-highlighter__details')).toHaveTextContent('Current rate: 30')
    await performAndAssert(
      'Follow previous playback frame',
      () => canvasElement.querySelector('.map-location-highlighter a')?.getAttribute('href'),
      () => userEvent.click(canvas.getByRole('button', { name: /previous/i })),
      (_, after) => after?.endsWith('/old')
    )
    expect(canvasElement.querySelector('.map-location-highlighter__details')).toHaveTextContent('Current rate: 10')
    expect(select).toHaveValue('US-AL')
    expect(within(select).queryByRole('option', { name: 'New York' })).toBeNull()
    await userEvent.selectOptions(select, 'US-CA')
    await performAndAssert(
      'Reset when location leaves frame',
      () => (select as HTMLSelectElement).value,
      () => userEvent.click(canvas.getByRole('button', { name: /next/i })),
      (_, after) => after === ''
    )
    expect(canvasElement.querySelector('.map-location-highlighter [aria-live]')).toBeEmptyDOMElement()
    expect(getComputedStyle(canvasElement.querySelector('g.geo-group[id="Alabama"]')!).opacity).toBe('1')
  }
}

export const IndependentWorldMaps: Story = {
  args: {
    config: (() => {
      const c = makeConfig()
      c.locationHighlighter.details = 'Supporting information'
      c.general.geoType = 'world'
      c.locationHighlighter.highlightSelectedLocation = true
      c.general.showSidebar = false
      c.general.countriesPicked = [
        { iso: 'CAN', name: 'Canada' },
        { iso: 'MEX', name: 'Mexico' }
      ]
      c.general.hideUnselectedCountries = true
      c.columns.geo.displayColumn = 'Display'
      c.data = [
        { STATE: 'Canada', Display: 'Same label', Rate: 10, URL: '/ca' },
        { STATE: 'Mexico', Display: 'Same label', Rate: 20, URL: '' },
        { STATE: 'France', Display: 'Hidden', Rate: 30, URL: '/fr' }
      ]
      return c
    })()
  },
  render: args => (
    <div style={{ width: 740, maxWidth: '100%' }}>
      <CdcMap {...args} />
      <CdcMap {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    await waitForPresence('.map-location-highlighter select', canvasElement)
    await waitForPresence('.cdc-open-viz-module + .cdc-open-viz-module .map-location-highlighter select', canvasElement)
    const selects = within(canvasElement).getAllByLabelText('Select a location for more information')
    expect(selects).toHaveLength(2)
    expect(selects[0].id).not.toBe(selects[1].id)
    expect(within(selects[0]).getAllByRole('option', { name: 'Same label' })).toHaveLength(2)
    expect(within(selects[0]).queryByRole('option', { name: 'Hidden' })).toBeNull()
    await userEvent.selectOptions(selects[0], 'CAN')
    expect(selects[1]).toHaveValue('')
    const modules = canvasElement.querySelectorAll('.map-location-highlighter')
    expect(modules[0].querySelector('.map-location-highlighter__details')).toHaveTextContent('Supporting information')
    expect(modules[1].querySelector('.map-location-highlighter__details')).toBeNull()
    await waitForPresence('.selected-location-outline', canvasElement)
    const maps = canvasElement.querySelectorAll('.cdc-open-viz-module')
    expect(getComputedStyle(maps[0].querySelector('[data-country-code="MEX"]')!.parentElement!).opacity).toBe('0.5')
    expect(getComputedStyle(maps[1].querySelector('[data-country-code="MEX"]')!.parentElement!).opacity).toBe('1')
    expect(maps[1].querySelector('.selected-location-outline')).toBeNull()
    expect(maps[0].querySelector('[data-country-code="FRA"]')).not.toBeVisible()

    for (const module of canvasElement.querySelectorAll('.map-location-highlighter')) {
      expect(module.scrollWidth).toBeLessThanOrEqual(module.clientWidth)
    }
  }
}

export const EmptySelector: Story = {
  args: {
    config: (() => {
      const c = makeConfig()
      c.data = []
      return c
    })()
  },
  play: async ({ canvasElement }) => {
    await waitForPresence('.map-location-highlighter select', canvasElement)
    expect(within(canvasElement).getByLabelText('Select a location for more information')).toBeDisabled()
    expect(canvasElement.querySelector('.map-location-highlighter [aria-live]')).toBeEmptyDOMElement()
  }
}

const spacingCases = [false, true].flatMap(territories =>
  [false, true].flatMap(subtext =>
    [false, true].map(table => {
      const config = makeConfig()
      config.data = config.data.filter(row => ['AL', 'AK', 'Alabama', 'Alaska'].includes(row.STATE))
      config.general.territoriesAlwaysShow = territories
      config.general.subtext = subtext ? 'Supporting map text' : ''
      config.general.showDownloadImgButton = false
      config.general.showDownloadPdfButton = false
      config.general.showSidebar = false
      config.table.forceDisplay = table
      config.table.showDataTableLink = false
      return { territories, subtext, table, config }
    })
  )
)

export const BelowSelectorSpacing: Story = {
  render: () => (
    <div style={{ width: 740, maxWidth: '100%' }}>
      {spacingCases.map(({ territories, subtext, table, config }, index) => (
        <div key={index} data-spacing-case={index}>
          <h3>{`Territories: ${territories}; subtext: ${subtext}; table: ${table}`}</h3>
          <CdcMap config={config} />
        </div>
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    for (const [index, { territories, subtext, table }] of spacingCases.entries()) {
      const example = canvasElement.querySelector(`[data-spacing-case="${index}"]`) as HTMLElement
      await waitForPresence('.map-location-highlighter select', example)
      if (territories) await waitForPresence('.territories', example)
      const content = example.querySelector('.cove-visualization__content-section') as HTMLElement
      const selector = example.querySelector('.map-location-highlighter') as HTMLElement
      const nextSection = selector.nextElementSibling as HTMLElement
      const gap = parseFloat(getComputedStyle(content.parentElement!).rowGap)
      expect(!!example.querySelector('.territories')).toBe(territories)
      expect(!!example.querySelector('.data-table-container')).toBe(table)
      expect(!!example.querySelector('.cove-visualization__body-subtext-section')).toBe(subtext)
      expect(selector.parentElement).toBe(content.parentElement)
      const previousSection = example.querySelector('.cove-visualization__body-subtext-section') ?? content
      expect(previousSection.nextElementSibling).toBe(selector)
      expect(nextSection).toBe(example.querySelector('.cove-visualization__body-footer-section'))
      expect(selector.getBoundingClientRect().top - previousSection.getBoundingClientRect().bottom).toBeCloseTo(gap, 0)
      expect(getComputedStyle(selector).marginBottom).toBe('0px')
      expect(getComputedStyle(nextSection).paddingTop).toBe('0px')
      if (table) {
        const firstContent = nextSection.firstElementChild as HTMLElement
        expect(firstContent.getBoundingClientRect().top - selector.getBoundingClientRect().bottom).toBeCloseTo(gap, 0)
      }
      if (subtext && table) {
        const footer = example.querySelector('.cove-visualization__body-footer-section') as HTMLElement
        expect(getComputedStyle(footer).paddingTop).toBe('0px')
      }
    }
  }
}

export const NavigationCompatibility: Story = {
  args: {
    config: (() => {
      const c = makeConfig()
      c.general.type = 'navigation'
      return c
    })(),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await waitForPresence('.navigation-menu', canvasElement)
    expect(canvasElement.querySelector('.map-location-highlighter')).toBeNull()
    await performAndAssert(
      'Open Type to show Navigation Behavior',
      () => canvas.queryByText('Navigation Behavior')?.checkVisibility({ checkOpacity: true }) ?? false,
      () => openAccordion(canvas, 'Type'),
      (_, after) => after
    )
    expect(canvas.getByText('Navigation Behavior')).toBeVisible()
    await performAndAssert(
      'Open Columns to show the Navigation control',
      () => canvas.queryByRole('combobox', { name: 'Navigation', exact: true }) !== null,
      () => openAccordion(canvas, 'Columns'),
      (_, after) => after
    )
    expect(canvas.getByRole('combobox', { name: 'Navigation', exact: true })).toBeVisible()
    const original = window.open
    const open = fn(() => null)
    window.open = open
    try {
      await userEvent.click(canvas.getByRole('button', { name: 'Go', exact: true }))
      expect(open).toHaveBeenCalledWith(`${window.location.origin}/al`, '_blank')
    } finally {
      window.open = original
    }
  }
}

const longInformationConfig = () => {
  const config = makeConfig()
  config.locationHighlighter.details =
    '<p>Long supplementary information with an unbroken value: ' +
    'LongValue'.repeat(35) +
    '</p><ul><li>Details</li></ul><a href="/report">Report</a>'
  return config
}

export const AuthoredInformationWrapping: Story = {
  render: () => (
    <>
      {[360, 740].map(width => (
        <div key={width} data-information-width={width} style={{ width, maxWidth: '100%' }}>
          <CdcMap config={longInformationConfig()} />
        </div>
      ))}
    </>
  ),
  play: async ({ canvasElement }) => {
    for (const example of canvasElement.querySelectorAll<HTMLElement>('[data-information-width]')) {
      await waitForPresence('.map-location-highlighter select', example)
      const select = within(example).getByLabelText('Select a location for more information')
      await userEvent.selectOptions(select, 'US-AL')
      expect(select).toHaveFocus()
      const module = example.querySelector('.map-location-highlighter') as HTMLElement
      const info = module.querySelector('.map-location-highlighter__details') as HTMLElement
      expect(info).toHaveTextContent('Long supplementary information')
      expect(module.scrollWidth).toBeLessThanOrEqual(module.clientWidth)
      expect(info.scrollWidth).toBeLessThanOrEqual(info.clientWidth)
      expect(within(module).getAllByRole('link')).toHaveLength(1)
      await userEvent.tab()
      expect(within(module).getByRole('button', { name: 'Reset' })).toHaveFocus()
      await userEvent.tab()
      expect(within(module).getByRole('link')).toHaveFocus()
    }
  }
}

export const HighlightSelectedState: Story = {
  args: {
    config: (() => {
      const c = makeConfig()
      c.general.geoBorderColor = 'white'
      c.data.push({ STATE: 'PR', Rate: 15, URL: '' })
      c.locationHighlighter.highlightSelectedLocation = true
      return c
    })()
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const select = within(canvasElement).getByLabelText('Select a location for more information')
    await waitForPresence('g.geo-group[data-geo-id="US-AL"]', canvasElement)
    const alabama = canvasElement.querySelector('g.geo-group[data-geo-id="US-AL"]') as HTMLElement
    const alaska = canvasElement.querySelector('g.geo-group[data-geo-id="US-AK"]') as HTMLElement
    const alabamaShape = alabama.querySelector('.single-geo')!
    const normalStroke = getComputedStyle(alabamaShape).stroke
    const normalStrokeWidth = getComputedStyle(alabamaShape).strokeWidth
    expect(getComputedStyle(alaska).opacity).toBe('1')
    await performAndAssert(
      'Highlight selected state',
      () => getComputedStyle(alaska).opacity,
      () => userEvent.selectOptions(select, 'US-AL'),
      (_, after) => after === '0.5'
    )
    expect(getComputedStyle(alabama).opacity).toBe('1')
    expect(getComputedStyle(alabamaShape).stroke).toBe('rgb(0, 0, 0)')
    expect(getComputedStyle(alabamaShape).strokeWidth).toBe(normalStrokeWidth)
    const outline = canvasElement.querySelector('.selected-state-outline')!
    expect(outline).toHaveAttribute('d', alabamaShape.getAttribute('d'))
    expect(getComputedStyle(outline).stroke).toBe('rgb(0, 0, 0)')
    expect(getComputedStyle(outline).opacity).toBe('1')
    expect(getComputedStyle(outline).pointerEvents).toBe('none')
    for (const shape of canvasElement.querySelectorAll('.geo-group .single-geo')) {
      expect(shape.compareDocumentPosition(outline) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    }
    await performAndAssert(
      'Keep Arizona borders above faded neighbors',
      () => canvasElement.querySelector('.selected-state-outline')?.getAttribute('d'),
      () => userEvent.selectOptions(select, 'US-AZ'),
      (_, after) => after === canvasElement.querySelector('[data-geo-id="US-AZ"] .single-geo')?.getAttribute('d')
    )

    const territory = canvasElement.querySelector('g[data-geo-id="US-PR"]') as HTMLElement
    expect(getComputedStyle(territory).opacity).toBe('0.5')
    const territoryShape = territory.querySelector('path, polygon')!
    expect(getComputedStyle(territoryShape).opacity).toBe('1')
    await performAndAssert(
      'Highlight a territory',
      () => getComputedStyle(territory).opacity,
      () => userEvent.selectOptions(select, 'US-PR'),
      (_, after) => after === '1'
    )
    expect(getComputedStyle(territoryShape).stroke).toBe('rgb(0, 0, 0)')
    const territorySvg = territory.closest('svg')!
    if (territorySvg.classList.contains('territory-wrapper--hex')) {
      expect(territory.querySelector('.selected-territory-outline')).toBeNull()
      expect(territorySvg.style.zIndex).toBe('')
      expect(territorySvg.style.position).toBe('')
    } else {
      expect(territory.querySelector('.selected-territory-outline')).toHaveAttribute('pointer-events', 'none')
      expect(territorySvg.style.zIndex).toBe('1')
      expect(territorySvg.style.position).toBe('relative')
    }
    expect(canvasElement.querySelector('.selected-state-outline')).toBeNull()
    expect(getComputedStyle(alabamaShape).stroke).toBe(normalStroke)
    await performAndAssert(
      'Highlight a state without a link',
      () => getComputedStyle(alabama).opacity,
      () => userEvent.selectOptions(select, 'US-AK'),
      (_, after) => after === '0.5'
    )
    expect(getComputedStyle(alaska).opacity).toBe('1')
    await performAndAssert(
      'Clear selected-state highlighting',
      () => getComputedStyle(alabama).opacity,
      () => userEvent.selectOptions(select, ''),
      (_, after) => after === '1'
    )
    expect(getComputedStyle(alaska).opacity).toBe('1')
    expect(getComputedStyle(alabamaShape).stroke).toBe(normalStroke)
    expect(getComputedStyle(alaska.querySelector('.single-geo')!).stroke).toBe(normalStroke)
    expect(canvasElement.querySelector('.selected-state-outline')).toBeNull()
  }
}

export const HighlightSelectedHexState: Story = {
  ...HighlightSelectedState,
  args: {
    config: (() => {
      const c = structuredClone(HighlightSelectedState.args!.config)
      c.general.displayAsHex = true
      return c
    })()
  }
}

export const SelectorWithoutUrlEditor: Story = {
  args: {
    config: (() => {
      const c = makeConfig()
      c.columns.navigate.name = ''
      c.locationHighlighter.enabled = false
      delete c.locationHighlighter.details
      c.table.forceDisplay = false
      return c
    })(),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Interactivity')
    expect(canvas.queryByLabelText('Open links in')).toBeNull()
    await performAndAssert(
      'Enable selector without links',
      () => !!canvasElement.querySelector('.map-location-highlighter'),
      () => userEvent.click(canvas.getByLabelText('Show location highlighter')),
      (_, after) => after
    )
    const select = canvas.getByLabelText('Select a location for more information')
    await userEvent.selectOptions(select, 'US-AL')
    expect(canvas.getByLabelText('Location details')).toHaveValue('')
    await performAndAssert(
      'Author details without links',
      () => canvasElement.querySelector('.map-location-highlighter__details')?.textContent ?? '',
      () => userEvent.type(canvas.getByLabelText('Location details'), 'Supporting information'),
      (_, after) => after === 'Supporting information'
    )
    const alaska = () => canvasElement.querySelector('[data-geo-id="US-AK"]')!
    expect(canvas.getByLabelText('Highlight selected location on map')).toBeChecked()
    expect(getComputedStyle(alaska()).opacity).toBe('0.5')
    expect(canvasElement.querySelector('.selected-state-outline')).toBeInTheDocument()
    await userEvent.selectOptions(canvas.getByLabelText('Link URL column'), 'URL')
    expect(select).toHaveValue('US-AL')
    expect(canvasElement.querySelector('.map-location-highlighter a')).toBeNull()
    expect(canvas.queryByLabelText('Show links in the data table')).toBeNull()
    await performAndAssert(
      'Hide selector while keeping map links configured',
      () => !!canvasElement.querySelector('.map-location-highlighter'),
      () => userEvent.click(canvas.getByLabelText('Show location highlighter')),
      (_, after) => !after
    )
    expect(getComputedStyle(alaska()).opacity).toBe('1')
    expect(canvasElement.querySelector('.selected-state-outline')).toBeNull()
    expect(canvas.queryByLabelText('Link text')).toBeNull()
    expect(canvas.getByLabelText('Clicking a map location opens its link')).toBeVisible()
    await performAndAssert(
      'Enable map links without selector or table',
      () => getComputedStyle(canvasElement.querySelector('[data-geo-id="US-AL"]')!).cursor,
      () => userEvent.click(canvas.getByLabelText('Clicking a map location opens its link')),
      (_, after) => after === 'pointer'
    )
  }
}

export const WorldSelectorWithoutUrl: Story = {
  args: {
    config: createNewMapConfig({
      ...makeConfig(),
      general: { ...makeConfig().general, geoType: 'world' },
      columns: { ...makeConfig().columns, navigate: { name: '' } },
      locationHighlighter: { enabled: true, details: 'Supporting information', highlightSelectedLocation: true },
      data: [{ STATE: 'Canada', Rate: 40 }]
    } as any)
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const select = within(canvasElement).getByLabelText('Select a location for more information')
    await userEvent.selectOptions(select, 'CAN')
    expect(canvasElement.querySelector('.map-location-highlighter__details')).toHaveTextContent(
      'Supporting information'
    )
    await waitForPresence('.selected-location-outline', canvasElement)
    expect(getComputedStyle(canvasElement.querySelector('[data-country-code="MEX"]')!.parentElement!).opacity).toBe(
      '0.5'
    )
    expect(getComputedStyle(canvasElement.querySelector('[data-country-code="CAN"]')!.parentElement!).opacity).toBe('1')
    expect(canvasElement.querySelector('.map-location-highlighter a')).toBeNull()
    expect(within(canvasElement).queryByText('No link available for Alaska.')).toBeNull()
  }
}

const makeWorldHighlightConfig = () => {
  const c = makeConfig()
  c.general.geoType = 'world'
  c.general.allowMapZoom = true
  c.general.geoBorderColor = 'white'
  c.general.showSidebar = false
  c.data = [
    { STATE: 'Canada', Rate: 40, URL: '/canada' },
    { STATE: 'Mexico', Rate: 50, URL: '' },
    { STATE: 'United States', Rate: 60, URL: '/us' }
  ]
  return c
}

export const WorldHighlightEditor: Story = {
  args: {
    config: (() => {
      const c = makeWorldHighlightConfig()
      // Exercise an authored opt-out independently of the default-on setting.
      c.locationHighlighter.highlightSelectedLocation = false
      return c
    })(),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Interactivity')
    await waitForPresence('[data-country-code="CAN"]', canvasElement)
    const select = canvas.getByLabelText('Select a location for more information')
    const country = (iso: string) => canvasElement.querySelector(`[data-country-code="${iso}"]`)!
    const opacity = (iso: string) => getComputedStyle(country(iso).parentElement!).opacity
    const outline = () => canvasElement.querySelector('.selected-location-outline')
    const highlight = canvas.getByLabelText('Highlight selected location on map')
    expect(highlight).not.toBeChecked()
    await userEvent.selectOptions(select, 'CAN')
    expect(opacity('MEX')).toBe('1')
    await performAndAssert(
      'Enable country highlighting',
      () => opacity('MEX'),
      () => userEvent.click(highlight),
      (_, after) => after === '0.5'
    )
    expect(opacity('CAN')).toBe('1')
    expect(getComputedStyle(country('CAN')).stroke).toBe('rgb(0, 0, 0)')
    expect(outline()).toHaveAttribute('d', country('CAN').getAttribute('d'))
    expect(getComputedStyle(outline()!).stroke).toBe('rgb(0, 0, 0)')
    expect(getComputedStyle(outline()!).pointerEvents).toBe('none')
    for (const path of canvasElement.querySelectorAll('[data-country-code]')) {
      expect(path.compareDocumentPosition(outline()!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    }
    const originalWidth = Number(outline()!.getAttribute('stroke-width'))
    await performAndAssert(
      'Scale highlighted outline with zoom',
      () => Number(outline()!.getAttribute('stroke-width')),
      () => userEvent.click(canvas.getByRole('button', { name: 'Zoom In', exact: true })),
      (_, after) => Math.abs(after - originalWidth / 1.5) < 0.0001
    )
    expect(outline()).toHaveAttribute('stroke-width', country('CAN').getAttribute('stroke-width'))
    await performAndAssert(
      'Disable country highlighting',
      () => opacity('MEX'),
      () => userEvent.click(highlight),
      (_, after) => after === '1'
    )
    expect(outline()).toBeNull()
    expect(getComputedStyle(country('CAN')).stroke).toBe('rgb(255, 255, 255)')
    await userEvent.click(highlight)
    await performAndAssert(
      'Highlight a country without a link',
      () => outline()?.getAttribute('d'),
      () => userEvent.selectOptions(select, 'MEX'),
      (_, after) => after === country('MEX').getAttribute('d')
    )
    expect(opacity('CAN')).toBe('0.5')
    expect(opacity('MEX')).toBe('1')
    await performAndAssert(
      'Clear country highlighting',
      () => !!outline(),
      () => userEvent.selectOptions(select, ''),
      (_, after) => !after
    )
    expect(opacity('CAN')).toBe('1')
    expect(opacity('MEX')).toBe('1')
    await userEvent.selectOptions(select, 'CAN')
    await performAndAssert(
      'Hide selector and clear country highlighting',
      () => !!outline(),
      () => userEvent.click(canvas.getByLabelText('Show location highlighter')),
      (_, after) => !after
    )
    expect(opacity('MEX')).toBe('1')
  }
}

export const WorldHighlightPlayback: Story = {
  args: {
    config: (() => {
      const c = makeWorldHighlightConfig()
      c.locationHighlighter.highlightSelectedLocation = true
      c.locationHighlighter.filterColumn = 'Presence'
      c.timePlayback = { enabled: true, column: 'Year' }
      c.data = [
        { STATE: 'Canada', Rate: 40, Year: 2021, Presence: true, URL: '/old' },
        { STATE: 'Mexico', Rate: 50, Year: 2021, Presence: true, URL: '' },
        { STATE: 'Canada', Rate: 60, Year: 2022, Presence: true, URL: '/new' },
        { STATE: 'France', Rate: 70, Year: 2022, URL: '' }
      ]
      return c
    })()
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('[data-country-code="CAN"]', canvasElement)
    const select = canvas.getByLabelText('Select a location for more information')
    const outline = () => canvasElement.querySelector('.selected-location-outline')
    await userEvent.selectOptions(select, 'CAN')
    await waitForPresence('.selected-location-outline', canvasElement)
    await performAndAssert(
      'Preserve country highlight across playback frames',
      () => canvasElement.querySelector('.map-location-highlighter a')?.getAttribute('href'),
      () => userEvent.click(canvas.getByRole('button', { name: /previous/i })),
      (_, after) => after?.endsWith('/old')
    )
    expect(select).toHaveValue('CAN')
    expect(outline()).toBeInTheDocument()
    await userEvent.selectOptions(select, 'MEX')
    await performAndAssert(
      'Clear highlight when country leaves the active data',
      () => !!outline(),
      () => userEvent.click(canvas.getByRole('button', { name: /next/i })),
      (_, after) => !after
    )
    expect(select).toHaveValue('')
    expect(getComputedStyle(canvasElement.querySelector('[data-country-code="CAN"]')!.parentElement!).opacity).toBe('1')
  }
}

export const DashboardAndSelectorHighlighting: Story = {
  args: {
    config: (() => {
      const c = makeConfig()
      c.general.displayStateLabels = true
      c.locationHighlighter.highlightSelectedLocation = true
      c.data = [
        { STATE: 'Alabama', Rate: 10, URL: '/al' },
        { STATE: 'Alaska', Rate: 20, URL: '' },
        { STATE: 'Puerto Rico', Rate: 30, URL: '' },
        { STATE: 'District of Columbia', Rate: 40, URL: '' }
      ]
      return c
    })()
  },
  render: args => (
    <div>
      <CdcMapComponent {...({ ...args, isDashboard: true, setSharedFilterValue: 'Alabama' } as any)} />
      <CdcMapComponent {...({ ...args, isDashboard: true, setSharedFilterValue: 'Puerto Rico' } as any)} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    await waitForPresence('.cdc-open-viz-module + .cdc-open-viz-module [data-geo-id="US-PR"]', canvasElement)
    const maps = canvasElement.querySelectorAll<HTMLElement>('.cdc-open-viz-module')
    const location = (map: number, id: string) => maps[map].querySelector(`[data-geo-id="${id}"]`)!
    const opacity = (map: number, id: string) => getComputedStyle(location(map, id)).opacity
    expect(opacity(0, 'US-AL')).toBe('1')
    expect(opacity(0, 'US-AK')).toBe('0.5')
    expect(opacity(0, 'US-PR')).toBe('0.5')
    for (const name of ['Missouri', 'Wisconsin']) {
      const missingState = maps[0].querySelector(`[data-name="${name}"] .geo-group`)!
      expect(getComputedStyle(missingState).opacity).toBe('0.5')
    }

    expect(getComputedStyle(maps[0].querySelector('.dc-callout')!).opacity).toBe('0.5')
    expect(opacity(1, 'US-PR')).toBe('1')
    expect(opacity(1, 'US-AL')).toBe('0.5')
    const normalStroke = getComputedStyle(location(0, 'US-AK')).stroke
    const select = within(maps[0]).getByLabelText('Select a location for more information')
    await performAndAssert(
      'Give dropdown highlighting precedence over the dashboard',
      () => opacity(0, 'US-AL'),
      () => userEvent.selectOptions(select, 'US-AK'),
      (_, after) => after === '0.5'
    )
    expect(opacity(0, 'US-AK')).toBe('1')
    expect(getComputedStyle(location(0, 'US-AL')).stroke).toBe(normalStroke)
    expect(getComputedStyle(location(0, 'US-AK')).stroke).toBe('rgb(0, 0, 0)')
    expect(opacity(1, 'US-PR')).toBe('1')
    await performAndAssert(
      'Give a selected territory precedence over the dashboard',
      () => opacity(0, 'US-PR'),
      () => userEvent.selectOptions(select, 'US-PR'),
      (_, after) => after === '1'
    )
    expect(opacity(0, 'US-AL')).toBe('0.5')
    await performAndAssert(
      'Apply dropdown precedence to the DC label',
      () => getComputedStyle(maps[0].querySelector('.dc-callout')!).opacity,
      () => userEvent.selectOptions(select, 'US-DC'),
      (_, after) => after === '1'
    )
    await performAndAssert(
      'Restore dashboard-only highlighting after clearing the dropdown',
      () => opacity(0, 'US-AL'),
      () => userEvent.selectOptions(select, ''),
      (_, after) => after === '1'
    )
    expect(opacity(0, 'US-AK')).toBe('0.5')
    for (const name of ['Missouri', 'Wisconsin']) {
      expect(getComputedStyle(maps[0].querySelector(`[data-name="${name}"] .geo-group`)!).opacity).toBe('0.5')
    }
  }
}

export const InformationMarkupVariables: Story = {
  args: {
    config: (() => {
      const config = makeConfig()
      config.enableMarkupVariables = true
      config.markupVariables = [
        { name: 'rate', tag: '{{rate}}', columnName: 'Rate', conditions: [], selectionMode: 'all' },
        { name: 'url', tag: '{{url}}', columnName: 'URL', conditions: [], selectionMode: 'first' },
        { name: 'location', tag: '{{location}}', sourceType: 'metadata', metadataKey: 'Name', conditions: [] }
      ]
      config.data = [
        { STATE: 'AL', Rate: 10 },
        { STATE: 'Alabama', Rate: 15 },
        { STATE: 'AK', Rate: 20 }
      ]
      config.dataMetadata = { Name: 'Outside selector' }
      config.general.subtext = 'Rate: {{rate}} / {{location}}'
      config.locationHighlighter.details =
        '<strong>{{location}} rate: {{rate}}</strong><ul><li>Supporting details</li></ul><a href="{{url}}">{{location}}: {{rate}}</a>'
      config.data[0].URL = '/al'
      return config
    })()
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const select = within(canvasElement).getByLabelText('Select a location for more information')
    expect(canvasElement.querySelector('.map-location-highlighter__details')).toBeNull()
    for (const id of ['US-AL', 'US-AK']) {
      await userEvent.selectOptions(select, id)
      const info = canvasElement.querySelector('.map-location-highlighter__details')!
      expect(info).toHaveClass('cove-prose')
      expect(info.querySelector('strong')).toHaveTextContent(
        id === 'US-AL' ? 'Alabama rate: 10 and 15' : 'Alaska rate: 20'
      )
      expect(canvasElement.querySelector('.subtext.cove-prose')).toHaveTextContent(
        'Rate: 10, 15, and 20 / Outside selector'
      )
      expect(info.querySelector('li')).toHaveTextContent('Supporting details')
      expect(canvasElement.querySelector('.map-location-highlighter__result')).toHaveTextContent(
        id === 'US-AL' ? 'Alabama: 10 and 15' : 'Alaska: 20'
      )
    }
  }
}

const makeYearFilterConfig = () => {
  const config = makeConfig()
  config.locationHighlighter.position = 'above'
  config.locationHighlighter.highlightSelectedLocation = true
  config.locationHighlighter.details = '<a href="{{url}}">{{location}}: {{cases}} cases in {{year}}</a>'
  config.locationHighlighter.filterColumn = 'URL'
  config.enableMarkupVariables = true
  config.markupVariables = [
    { name: 'url', tag: '{{url}}', columnName: 'URL', conditions: [], selectionMode: 'first' },
    { name: 'cases', tag: '{{cases}}', columnName: 'Rate', conditions: [], sourceType: 'column', outputType: 'value' },
    { name: 'year', tag: '{{year}}', columnName: 'Year', conditions: [], sourceType: 'column', outputType: 'value' }
  ]
  config.filters = [
    {
      columnName: 'Year',
      filterStyle: 'tab-simple',
      active: '2024',
      values: [],
      orderedValues: ['2024', '2025', '2026'],
      order: 'asc',
      id: 1234
    }
  ]
  config.data = [
    { STATE: 'Alaska', Rate: 3, Year: '2024', URL: '/alaska-2024' },
    { STATE: 'Alabama', Rate: 10, Year: '2024', URL: '/alabama-2024' },
    { STATE: 'Alaska', Rate: 7, Year: '2025', URL: '/alaska-2025' },
    { STATE: 'Alabama', Rate: 20, Year: '2025', URL: '/alabama-2025' },
    { STATE: 'Alabama', Rate: 30, Year: '2026', URL: '/alabama-2026' },
    { STATE: 'Alaska', Rate: 8, Year: '2026', URL: '  ' }
  ]
  return config
}

export const YearFilterSelection: Story = {
  args: { config: makeYearFilterConfig() },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const canvas = within(canvasElement)
    await waitForPresence('[data-geo-id="US-AL"]', canvasElement)
    const select = canvas.getByLabelText('Select a location for more information')
    const information = () => canvasElement.querySelector('.map-location-highlighter__details')?.textContent ?? ''
    const link = () => canvasElement.querySelector('.map-location-highlighter a')
    const alabama = () => canvasElement.querySelector('[data-geo-id="US-AL"]')!
    await performAndAssert(
      'Select Alaska for 2024',
      information,
      () => userEvent.selectOptions(select, 'US-AK'),
      (_, after) => after === 'Alaska: 3 cases in 2024'
    )
    expect(link()).toHaveAttribute('href', '/alaska-2024')
    expect(getComputedStyle(alabama()).opacity).toBe('0.5')
    for (const [year, cases] of [
      ['2025', '7'],
      ['2024', '3'],
      ['2025', '7']
    ]) {
      await performAndAssert(
        `Keep Alaska selected when switching to ${year}`,
        information,
        () => userEvent.click(canvas.getByRole('button', { name: year, exact: true })),
        (_, after) => after === `Alaska: ${cases} cases in ${year}`
      )
      expect(select).toHaveValue('US-AK')
      expect(link()).toHaveAttribute('href', `/alaska-${year}`)
      expect(canvasElement.querySelector('.selected-state-outline')).toBeInTheDocument()
      expect(getComputedStyle(alabama()).opacity).toBe('0.5')
      const table = within(canvasElement.querySelector('.data-table-container') as HTMLElement)
      expect(table.getByRole('row', { name: new RegExp(`Alaska.*${cases}`) })).toBeVisible()
    }
    await performAndAssert(
      'Clear Alaska when the completed year data excludes it',
      () => !!canvasElement.querySelector('.selected-state-outline'),
      () => userEvent.click(canvas.getByRole('button', { name: '2026', exact: true })),
      (_, after) => !after
    )
    expect(select).toHaveValue('')
    expect(information()).toBe('')
    expect(link()).toBeNull()
    expect(canvasElement.querySelector('.selected-state-outline')).toBeNull()
    expect(getComputedStyle(alabama()).opacity).toBe('1')
    await performAndAssert(
      'Return to a year with Alaska without restoring a cleared selection',
      () => !!within(select).queryByRole('option', { name: 'Alaska', exact: true }),
      () => userEvent.click(canvas.getByRole('button', { name: '2024', exact: true })),
      (_, after) => after
    )
    expect(select).toHaveValue('')
    expect(information()).toBe('')
  }
}

export const BelowYearFilterSelection: Story = {
  ...YearFilterSelection,
  args: {
    config: (() => {
      const config = makeYearFilterConfig()
      config.locationHighlighter.position = 'below'
      return config
    })()
  }
}

export const HighlightOverlays: Story = {
  args: {
    config: (() => {
      const c = makeConfig()
      c.locationHighlighter.highlightSelectedLocation = true
      c.general.displayStateLabels = true
      c.data.push({ STATE: 'New York City', Rate: 15, URL: '' }, { STATE: 'PR', Rate: 15, URL: '' })
      c.data = c.data.map(row => ({ ...row, Latitude: 40.7, Longitude: -74 }))
      c.bubble.layers = [
        createDefaultBubbleLayer({
          columns: { geo: { name: 'STATE' }, primary: { name: 'Rate' } },
          opacity: 0.8,
          extraBubbleBorder: true
        }),
        createDefaultBubbleLayer({
          locationSource: 'latitude-longitude',
          columns: {
            geo: { name: 'STATE' },
            primary: { name: 'Rate' },
            latitude: { name: 'Latitude' },
            longitude: { name: 'Longitude' }
          },
          opacity: 0.6,
          extraBubbleBorder: true
        })
      ]
      const topology = {
        type: 'Topology',
        objects: {
          overlay: {
            type: 'GeometryCollection',
            geometries: [{ type: 'LineString', arcs: [0], properties: { name: 'Test overlay' } }]
          }
        },
        arcs: [
          [
            [-100, 30],
            [-90, 40]
          ]
        ]
      }
      c.map.layers = [
        {
          namespace: 'overlay',
          url: `data:application/json,${encodeURIComponent(JSON.stringify(topology))}`,
          stroke: '#000000',
          strokeWidth: 2,
          fillOpacity: 0.7
        }
      ]
      return c
    })()
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('.geo-point', canvasElement)
    await waitForPresence('.bubble--coordinate', canvasElement)
    await waitForPresence('.custom-map-layer', canvasElement)
    const select = within(canvasElement).getByLabelText('Select a location for more information')
    const city = canvasElement.querySelector('.geo-point')!
    const overlay = canvasElement.querySelector('.custom-map-layer')!.parentElement!
    const stateBubble = canvasElement.querySelector('circle.bubble[data-bubble-layer-index="0"]')!
    const coordinateBubble = canvasElement.querySelector('.bubble--coordinate')!
    const territory = canvasElement.querySelector('g[data-geo-id="US-PR"]')!
    const territoryBubble = territory.querySelector('.territory-bubble')!
    await performAndAssert(
      'Fade city and overlays with a state selection',
      () => getComputedStyle(city).opacity,
      () => userEvent.selectOptions(select, 'US-AL'),
      (_, after) => after === '0.5'
    )
    expect(getComputedStyle(overlay).opacity).toBe('0.5')
    expect(getComputedStyle(coordinateBubble.parentElement!).opacity).toBe('0.5')
    expect(coordinateBubble).toHaveAttribute('fill-opacity', '0.6')
    expect(stateBubble).toHaveAttribute('fill-opacity', '0.8')
    const selectedBubble = canvasElement.querySelector('g[data-geo-id="US-AL"]')
    expect(getComputedStyle(selectedBubble!).opacity).toBe('1')
    // Territory markers inherit their container fade, without an additional marker fade.
    expect(getComputedStyle(territory).opacity).toBe('0.5')
    expect(getComputedStyle(territoryBubble).opacity).toBe('1')
    expect(territoryBubble).toHaveAttribute('fill-opacity', '0.8')
    for (const bubble of canvasElement.querySelectorAll('circle.bubble[data-bubble-layer-index="0"]')) {
      if (bubble.classList.contains('territory-bubble')) continue
      const html = bubble.getAttribute('data-tooltip-html') || ''
      expect(getComputedStyle(bubble.parentElement!).opacity).toBe(html.includes('Alabama') ? '1' : '0.5')
    }
    await performAndAssert(
      'Restore overlay opacity when the selection clears',
      () => getComputedStyle(city).opacity,
      () => userEvent.selectOptions(select, ''),
      (_, after) => after === '1'
    )
    expect(getComputedStyle(overlay).opacity).toBe('1')
    expect(getComputedStyle(coordinateBubble.parentElement!).opacity).toBe('1')
    expect(getComputedStyle(territory).opacity).toBe('1')
    expect(canvasElement.querySelector('.selected-state-outline')).toBeNull()
    await userEvent.selectOptions(select, 'US-PR')
    const territoryOutline = territory.querySelector('.selected-territory-outline')!
    expect(territoryOutline).toHaveAttribute('pointer-events', 'none')
    expect(territoryBubble.compareDocumentPosition(territoryOutline) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(getComputedStyle(territory.closest('svg')!).zIndex).toBe('1')
    await userEvent.selectOptions(select, '')
    expect(territory.querySelector('.selected-territory-outline')).toBeNull()
  }
}

export const CitySelection: Story = {
  args: {
    config: (() => {
      const c = makeConfig()
      c.columns.geo.displayColumn = 'Display'
      c.locationHighlighter.filterColumn = 'URL'
      c.locationHighlighter.details = '<strong>{{location}}: {{rates}}</strong><a href="{{url}}">Report</a>'
      c.markupVariables.push({
        name: 'rates',
        tag: '{{rates}}',
        columnName: 'Rate',
        selectionMode: 'all',
        conditions: []
      })
      c.filters = [
        { columnName: 'Period', label: 'Period', filterStyle: 'dropdown', active: '2025', values: ['2025', '2026'] }
      ]
      c.data = [
        { STATE: 'New York', Display: 'New York State', Rate: 100, URL: '/state', Period: '2025' },
        { STATE: 'new york city', Display: 'NYC', Rate: 10, URL: '/city', Period: '2025' },
        { STATE: 'New York City', Display: 'NYC', Rate: 15, URL: '/city', Period: '2025' },
        { STATE: 'Boston', Display: 'Boston', Rate: 5, URL: '/boston', Period: '2025' },
        { STATE: 'New York', Display: 'New York State', Rate: 200, URL: '/state', Period: '2026' },
        { STATE: 'New York City', Display: 'NYC', Rate: 20, URL: '', Period: '2026' },
        { STATE: 'Boston', Display: 'Boston', Rate: 6, URL: '/boston', Period: '2026' }
      ]
      return c
    })(),
    isEditor: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Interactivity')
    await waitForPresence('[data-city-id="NEW YORK CITY"]', canvasElement)
    const select = canvas.getByLabelText('Select a location for more information')
    expect(within(select).getByRole('option', { name: 'NYC' })).toHaveValue('NEW YORK CITY')
    const city = () => canvasElement.querySelector('[data-city-id="NEW YORK CITY"]')!
    const boston = () => canvasElement.querySelector('[data-city-id="BOSTON"]')!
    const state = () => canvasElement.querySelector('[data-geo-id="US-NY"]')!
    const info = () => canvasElement.querySelector('.map-location-highlighter__details')!
    await performAndAssert(
      'Select and highlight NYC independently of New York State',
      () => getComputedStyle(state()).opacity,
      () => userEvent.selectOptions(select, 'NEW YORK CITY'),
      (_, after) => after === '0.5'
    )
    expect(getComputedStyle(city()).opacity).toBe('1')
    expect(getComputedStyle(boston()).opacity).toBe('0.5')
    expect(city().querySelector('path, circle, polygon')).toHaveAttribute('stroke', '#000000')
    expect(city().querySelector('path, circle, polygon')).toHaveAttribute('stroke-width', '3px')
    expect(canvasElement.querySelector('.selected-state-outline')).toBeNull()
    expect(info()).toHaveTextContent('NYC: 10 or 15')
    expect(info().querySelector('a')).toHaveAttribute('href', '/city')
    await performAndAssert(
      'Select the state without selecting its city',
      () => getComputedStyle(city()).opacity,
      () => userEvent.selectOptions(select, 'US-NY'),
      (_, after) => after === '0.5'
    )
    expect(getComputedStyle(state()).opacity).toBe('1')
    expect(info()).toHaveTextContent('New York State: 100')
    expect(info().querySelector('a')).toHaveAttribute('href', '/state')
    await userEvent.selectOptions(select, 'NEW YORK CITY')
    const highlight = canvas.getByLabelText('Highlight selected location on map')
    await performAndAssert(
      'Keep city information available when highlighting is off',
      () => getComputedStyle(state()).opacity,
      () => userEvent.click(highlight),
      (_, after) => after === '1'
    )
    expect(select).toHaveValue('NEW YORK CITY')
    expect(info()).toHaveTextContent('NYC: 10 or 15')
    expect(city().querySelector('path, circle, polygon')).toHaveAttribute('stroke-width', '2px')
    await userEvent.click(highlight)
    await performAndAssert(
      'Clear city selection when its presence value becomes empty',
      () => (select as HTMLSelectElement).value,
      () => userEvent.selectOptions(canvas.getByLabelText('Period'), '2026'),
      (_, after) => after === ''
    )
    expect(info()).toBeNull()
    expect(getComputedStyle(city()).opacity).toBe('1')
    expect(getComputedStyle(state()).opacity).toBe('1')
    expect(within(select).queryByRole('option', { name: 'NYC' })).toBeNull()
  }
}

export const SelectorNoteAndReset: Story = {
  render: () => (
    <>
      {[
        { geoType: 'us', location: 'Alabama', id: 'US-AL', width: 740 },
        { geoType: 'us', location: 'New York City', id: 'NEW YORK CITY', width: 360 },
        { geoType: 'world', location: 'Canada', id: 'CAN', width: 360 }
      ].map(({ geoType, location, id, width }) => {
        const c = makeConfig()
        c.general.geoType = geoType as any
        c.locationHighlighter.note = 'Choose a <strong>location</strong> for details.'
        c.locationHighlighter.resetButtonLabel = 'Clear selection'
        c.filters = [
          {
            columnName: 'Group',
            label: 'Group',
            filterStyle: 'dropdown',
            active: 'A',
            values: ['A', 'B'],
            note: 'Choose a <strong>group</strong>.'
          }
        ]
        c.data = [
          { STATE: location, Rate: 10, URL: '/report', Group: 'A' },
          { STATE: location, Rate: 20, URL: '/other', Group: 'B' }
        ]
        return (
          <div key={id} data-reset-location={id} style={{ width, maxWidth: '100%' }}>
            <CdcMap config={c} />
          </div>
        )
      })}
    </>
  ),
  play: async ({ canvasElement }) => {
    for (const example of canvasElement.querySelectorAll<HTMLElement>('[data-reset-location]')) {
      await assertVisualizationRendered(example)
      const canvas = within(example)
      const module = example.querySelector('.map-location-highlighter') as HTMLElement
      const selector = within(module)
      const select = selector.getByRole('combobox')
      const note = module.querySelector('.filters-section__note-text')!
      const filterNote = example.querySelector('.filters-section .filters-section__note-text')!
      expect(select).toHaveAccessibleDescription('Choose a location for details.')
      expect(note.querySelector('strong')).toHaveTextContent('location')
      for (const property of ['fontSize', 'fontWeight', 'lineHeight', 'maxWidth', 'marginBottom'] as const) {
        expect(getComputedStyle(note)[property]).toBe(getComputedStyle(filterNote)[property])
      }
      expect(selector.queryByRole('button', { name: 'Clear selection' })).toBeNull()
      const id = example.dataset.resetLocation!
      if (id === 'CAN') await userEvent.click(canvas.getByRole('button', { name: 'Zoom In', exact: true }))
      await userEvent.selectOptions(select, id)
      const reset = selector.getByRole('button', { name: 'Clear selection' })
      expect(module.querySelector('.map-location-highlighter__details')).toBeInTheDocument()
      expect(module.scrollWidth).toBeLessThanOrEqual(module.clientWidth)
      expect(reset.getBoundingClientRect().right).toBeLessThanOrEqual(module.getBoundingClientRect().right)
      await userEvent.tab()
      expect(reset).toHaveFocus()
      await performAndAssert(
        'Reset only the location selection',
        () => (select as HTMLSelectElement).value,
        () => userEvent.keyboard('{Enter}'),
        (_, after) => after === ''
      )
      expect(select).toHaveFocus()
      expect(note).toBeVisible()
      expect(selector.queryByRole('button', { name: 'Clear selection' })).toBeNull()
      expect(module.querySelector('.map-location-highlighter__details')).toBeNull()
      expect(example.querySelector('.selected-state-outline, .selected-location-outline')).toBeNull()
      expect(canvas.getByRole('combobox', { name: 'Filter by Group' })).toHaveValue('A')
      if (id === 'CAN') {
        const country = example.querySelector('[data-country-code="CAN"]')!
        expect(Number(country.getAttribute('stroke-width'))).toBeCloseTo(0.9 / 1.5)
      }
    }
  }
}

export const SelectorNoteAndResetEditor: Story = {
  args: { config: makeConfig(), isEditor: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Interactivity')
    const editor = within(canvas.getByRole('region', { name: 'Location highlighter settings' }))
    const module = canvasElement.querySelector('.map-location-highlighter') as HTMLElement
    const select = within(module).getByRole('combobox')
    expect(editor.getByLabelText('Show reset button')).toBeChecked()
    expect(editor.getByLabelText('Reset button label')).toHaveValue('Reset')
    const noteInput = editor.getByLabelText('Note')
    expect(getComputedStyle(noteInput).minHeight).toBe('50px')
    await performAndAssert(
      'Author location guidance',
      () => module.querySelector('.filters-section__note-text')?.textContent || '',
      () => userEvent.type(noteInput, 'Helpful selector note'),
      (_, after) => after === 'Helpful selector note'
    )
    await userEvent.selectOptions(select, 'US-AL')
    const label = editor.getByLabelText('Reset button label')
    await userEvent.clear(label)
    expect(within(module).getByRole('button', { name: 'Reset' })).toBeVisible()
    await performAndAssert(
      'Customize the reset button label',
      () => module.querySelector('.map-location-highlighter__controls button')?.textContent || '',
      () => userEvent.type(label, 'Start over'),
      (_, after) => after === 'Start over'
    )
    await performAndAssert(
      'Disable the optional location reset control',
      () => !!within(module).queryByRole('button', { name: 'Start over' }),
      () => userEvent.click(editor.getByLabelText('Show reset button')),
      (_, after) => !after
    )
    expect(editor.queryByLabelText('Reset button label')).toBeNull()
    expect(select).toHaveValue('US-AL')
    await userEvent.click(editor.getByLabelText('Show reset button'))
    expect(editor.getByLabelText('Reset button label')).toHaveValue('Start over')
    await userEvent.click(within(module).getByRole('button', { name: 'Start over' }))
    expect(select).toHaveValue('')
    expect(select).toHaveFocus()
  }
}

export const SelectorContentSizing: Story = {
  render: () => (
    <>
      {[
        { name: 'none', note: '', width: 740 },
        { name: 'short', note: 'Choose a place.', width: 740 },
        { name: 'long-label', note: '', width: 740 },
        {
          name: 'long-label-note',
          note: 'Choose a location to read detailed information and follow links to the latest reports for that location.',
          width: 740
        },
        {
          name: 'long',
          note: 'Choose a location to read detailed information and follow links to the latest reports for that location.',
          width: 740
        },
        {
          name: 'mobile',
          note: 'Choose a location to read detailed information and follow links to the latest reports for that location.',
          width: 360
        }
      ].map(({ name, note, width }) => {
        const c = makeConfig()
        c.data = [
          { STATE: 'Alabama', Rate: 10, URL: '/al' },
          { STATE: 'Massachusetts', Rate: 20, URL: '/ma' }
        ]
        c.locationHighlighter.dropdownLabel = name.startsWith('long-label')
          ? 'Select a location to view the latest reports and detailed information. '.repeat(4)
          : 'Location'
        c.locationHighlighter.note = note
        c.filters = []
        const filterConfig = {
          ...c,
          filters: [
            {
              columnName: 'STATE',
              label: 'Location',
              filterStyle: 'dropdown',
              active: 'Alabama',
              values: ['Alabama', 'Massachusetts'],
              note
            }
          ]
        }
        return (
          <div key={name} data-selector-sizing={name} style={{ width, maxWidth: '100%' }}>
            <div className='cove-visualization'>
              <Filters config={filterConfig as any} setFilters={() => {}} dimensions={[width, 400]} />
            </div>
            <CdcMap config={c} />
          </div>
        )
      })}
    </>
  ),
  play: async ({ canvasElement }) => {
    const widths: Record<string, number> = {}
    for (const example of canvasElement.querySelectorAll<HTMLElement>('[data-selector-sizing]')) {
      await assertVisualizationRendered(example)
      await waitForPresence('.map-location-highlighter option[value="US-MA"]', example)
      const module = example.querySelector('.map-location-highlighter') as HTMLElement
      const select = within(module).getByRole('combobox')
      const name = example.dataset.selectorSizing!
      await document.fonts.ready
      const width = select.getBoundingClientRect().width
      widths[name] = width
      const filter = example.querySelector('.filters-section select')!
      if (name !== 'mobile') expect(width).toBeCloseTo(filter.getBoundingClientRect().width, 0)
      expect(width).toBeLessThanOrEqual(module.clientWidth)
      await userEvent.selectOptions(select, 'US-AL')
      const reset = within(module).getByRole('button', { name: 'Reset' })
      expect(select.getBoundingClientRect().width).toBeCloseTo(width, 0)
      expect(module.scrollWidth).toBeLessThanOrEqual(module.clientWidth)
      if (name.startsWith('long-label')) {
        const label = module.querySelector('label')!
        expect(label.getBoundingClientRect().width).toBeGreaterThan(width + 50)
        expect(label.getBoundingClientRect().bottom).toBeLessThanOrEqual(select.getBoundingClientRect().top)
        expect(Math.abs(reset.getBoundingClientRect().top - select.getBoundingClientRect().top)).toBeLessThan(5)
      }
      if (name !== 'mobile')
        expect(reset.getBoundingClientRect().left).toBeGreaterThanOrEqual(select.getBoundingClientRect().right)
      else expect(reset.getBoundingClientRect().top).toBeGreaterThanOrEqual(select.getBoundingClientRect().bottom)
    }
    expect(widths.short).toBeCloseTo(widths.none, 0)
    expect(widths.long).toBeGreaterThan(widths.none + 50)
    expect(widths.long).toBeLessThanOrEqual(30 * parseFloat(getComputedStyle(document.documentElement).fontSize))
    expect(widths.mobile).toBeLessThan(widths.long)
  }
}

export const HighlightForegroundOrder: Story = {
  args: {
    config: (() => {
      const c = structuredClone(HighlightOverlays.args!.config)
      c.data = c.data.filter(row => !['RI', 'CT'].includes(row.STATE))
      c.data.push({ STATE: 'Rhode Island', Rate: 25, URL: '' }, { STATE: 'Connecticut', Rate: 30, URL: '' })
      c.bubble.layers[0].placeOverLabels = true
      c.bubble.layers.push(
        createDefaultBubbleLayer({
          columns: { geo: { name: 'STATE' }, primary: { name: 'Rate' } },
          placeOverLabels: true,
          minBubbleSize: 20,
          maxBubbleSize: 30,
          opacity: 0.7
        })
      )
      return c
    })()
  },
  render: args => (
    <CdcMapComponent {...({ ...args, isDashboard: true, setSharedFilterValue: 'Rhode Island' } as any)} />
  ),
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('.custom-map-layer', canvasElement)
    const select = within(canvasElement).getByLabelText('Select a location for more information')
    const outline = () => canvasElement.querySelector('.selected-state-outline')!
    const assertAbove = (front: Element, back: Element) => {
      expect(back.compareDocumentPosition(front) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    }
    const checkState = (id: string, name: string) => {
      expect(outline()).toHaveAttribute(
        'd',
        canvasElement.querySelector(`[data-geo-id="${id}"] .single-geo`)!.getAttribute('d')
      )
      expect(outline()).toHaveAttribute('pointer-events', 'none')
      const foregroundBubbles = Array.from(canvasElement.querySelectorAll('circle.bubble')).filter(
        bubble =>
          !bubble.classList.contains('territory-bubble') && getComputedStyle(bubble.parentElement!).opacity === '1'
      )
      expect(foregroundBubbles).toHaveLength(2)
      expect(foregroundBubbles.map(bubble => bubble.getAttribute('data-bubble-layer-index'))).toEqual(['0', '2'])
      expect(foregroundBubbles.map(bubble => bubble.getAttribute('fill-opacity'))).toEqual(['0.8', '0.7'])
      for (const bubble of foregroundBubbles) {
        expect(bubble.getAttribute('data-tooltip-html')).toContain(name)
        assertAbove(bubble, canvasElement.querySelector('.custom-map-layer')!)
        assertAbove(outline(), bubble)
      }
      for (const marker of canvasElement.querySelectorAll('.geo-point, .bubble--coordinate'))
        assertAbove(outline(), marker)
      const label = Array.from(canvasElement.querySelectorAll('text')).find(text => text.textContent === id.slice(3))!
      expect(label).toBeVisible()
      assertAbove(label, foregroundBubbles[1])
    }
    checkState('US-RI', 'Rhode Island')
    await performAndAssert(
      'Move dropdown highlight above dashboard highlight',
      () => outline().getAttribute('d'),
      () => userEvent.selectOptions(select, 'US-CT'),
      (_, after) => after === canvasElement.querySelector('[data-geo-id="US-CT"] .single-geo')!.getAttribute('d')
    )
    checkState('US-CT', 'Connecticut')
    await performAndAssert(
      'Bring selected city above every bubble',
      () => getComputedStyle(canvasElement.querySelector('[data-city-id="NEW YORK CITY"]')!).opacity,
      () => userEvent.selectOptions(select, 'NEW YORK CITY'),
      () => getComputedStyle(canvasElement.querySelector('[data-city-id="NEW YORK CITY"]')!).opacity === '1'
    )
    const city = canvasElement.querySelector('[data-city-id="NEW YORK CITY"]')!
    for (const bubble of canvasElement.querySelectorAll('circle.bubble:not(.territory-bubble)'))
      assertAbove(city, bubble)
    expect(outline()).toBeNull()
    await performAndAssert(
      'Restore dashboard foreground after clearing selector',
      () => outline()?.getAttribute('d'),
      () => userEvent.selectOptions(select, ''),
      (_, after) => after === canvasElement.querySelector('[data-geo-id="US-RI"] .single-geo')!.getAttribute('d')
    )
    checkState('US-RI', 'Rhode Island')
  }
}
