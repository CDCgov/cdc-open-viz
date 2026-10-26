import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import {
  assertVisualizationRendered,
  openAccordion,
  performAndAssert,
  waitForEditor,
  waitForPresence
} from '@cdc/core/helpers/testing'
import CdcMap from '../CdcMap'
import CdcMapComponent from '../CdcMapComponent'
import { createNewMapConfig } from '../helpers/createNewMapConfig'
import base from './_mock/equal-number.json'

const makeConfig = () =>
  createNewMapConfig({
    ...base,
    general: { ...base.general, navigationTarget: '_self' },
    table: { ...base.table, expanded: true, forceDisplay: true },
    locationLinks: { selector: { enabled: true, position: 'below', information: '' } },
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
    const selectorStyles = getComputedStyle(canvasElement.querySelector('.map-location-selector')!)
    expect(selectorStyles.borderTopWidth).toBe('1px')
    expect(selectorStyles.borderTopStyle).toBe('solid')
    expect(selectorStyles.paddingTop).toBe(getComputedStyle(document.documentElement).fontSize)
    expect(canvasElement.querySelector('.map-location-selector a')).toBeNull()
    await userEvent.selectOptions(select, 'US-AL')
    expect(select).toHaveFocus()
    const link = within(canvasElement.querySelector('.map-location-selector') as HTMLElement).getByRole('link')
    expect(link).toHaveAttribute('target', '_self')
    expect(link).toHaveTextContent('Learn more about Alabama »')
    expect(link).not.toHaveTextContent('new window')
    expect(link).toHaveAttribute('href', `${window.location.origin}/al`)
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
    expect(canvas.getByText('No link available for Alaska.')).toBeVisible()
    const module = canvasElement.querySelector('.map-location-selector')!
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
      c.locationLinks.selector.information = 'Supporting information'
      c.general.displayAsHex = true
      c.locationLinks.selector.position = 'above'
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
    const module = canvasElement.querySelector('.map-location-selector') as HTMLElement
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
    expect(within(module).getByRole('link')).toHaveFocus()
  }
}

export const InteractivityEditor: Story = {
  args: {
    config: (() => {
      const c = makeConfig()
      c.locationLinks.selector.enabled = false
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
    const selectorControls = canvas.getByRole('region', { name: 'Location selector settings' })
    expect(within(selectorControls).getByRole('heading', { name: 'Location selector' })).toBeVisible()
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
      () => !!canvasElement.querySelector('.map-location-selector'),
      () => userEvent.click(canvas.getByLabelText('Show location selector')),
      (_, after) => after
    )
    const select = canvas.getByLabelText('Select a location for more information')
    await userEvent.selectOptions(select, 'US-AL')
    const alaskaState = canvasElement.querySelector('g.geo-group[id="Alaska"]') as HTMLElement
    const highlight = canvas.getByLabelText('Highlight selected location on map')
    const normalStateStroke = getComputedStyle(state.querySelector('.single-geo')!).stroke
    expect(highlight).not.toBeChecked()
    expect(getComputedStyle(alaskaState).opacity).toBe('1')
    for (const enabled of [true, false]) {
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
    for (const content of ['Supporting information', '']) {
      await performAndAssert(
        'Edit location information',
        () => canvasElement.querySelector('.map-location-selector__information')?.textContent ?? '',
        async () => {
          const input = canvas.getByLabelText('Location information')
          await userEvent.click(input)
          await userEvent.keyboard('{End}' + '{Backspace}'.repeat(40))
          if (content) await userEvent.type(input, content)
        },
        (_, after) => after === content
      )
      expect(select).toHaveValue('US-AL')
      expect(canvasElement.querySelectorAll('.map-location-selector a')).toHaveLength(1)
    }
    await userEvent.selectOptions(select, 'US-AK')
    const messageInput = canvas.getByLabelText('No-link message')
    await performAndAssert(
      'Customize the no-link message',
      () => canvasElement.querySelector('.map-location-selector__result')?.textContent,
      async () => {
        await userEvent.clear(messageInput)
        await userEvent.type(messageInput, 'A report is not yet available.')
      },
      (_, after) => after === 'A report is not yet available.'
    )
    await performAndAssert(
      'Hide the no-link message',
      () => canvasElement.querySelector('.map-location-selector__result')?.textContent,
      async () => {
        await userEvent.click(canvas.getByLabelText('No-link message'))
        await userEvent.keyboard('{End}' + '{Backspace}'.repeat(40))
      },
      (_, after) => after === ''
    )
    expect(select).toHaveValue('US-AK')
    await userEvent.selectOptions(select, 'US-AL')
    const alaska = canvasElement.querySelector('g.geo-group[id="Alaska"]') as HTMLElement
    await userEvent.hover(alaska)
    await userEvent.click(alaska)
    expect(select).toHaveValue('US-AL')
    expect(canvasElement.querySelector('.map-location-selector a')).toHaveTextContent('Alabama')
    await userEvent.unhover(alaska)
    await performAndAssert(
      'Change target',
      () => canvasElement.querySelector('.map-location-selector a')?.getAttribute('target'),
      () => userEvent.selectOptions(canvas.getByLabelText('Open links in'), '_blank'),
      (_, after) => after === '_blank'
    )
    const tableLink = canvasElement.querySelector('td .table-link') as HTMLElement
    expect(tableLink.title).toContain('new window')
    const originalOpen = window.open
    const open = fn(() => null)
    window.open = open
    try {
      await userEvent.click(tableLink)
      tableLink.focus()
      await userEvent.keyboard('{Enter}')
      expect(open.mock.calls).toEqual([
        [`${window.location.origin}/al`, '_blank'],
        [`${window.location.origin}/al`, '_blank']
      ])
      expect(args.navigationHandler).not.toHaveBeenCalled()
    } finally {
      window.open = originalOpen
    }
    await performAndAssert(
      'Move above map',
      () =>
        canvasElement
          .querySelector('.map-location-selector')!
          .compareDocumentPosition(canvasElement.querySelector('.map-container')!),
      () => userEvent.selectOptions(canvas.getByLabelText('Position'), 'above'),
      (_, after) => !!(after & Node.DOCUMENT_POSITION_FOLLOWING)
    )
    const movedSelector = canvas.getByLabelText('Select a location for more information')
    expect(movedSelector).toHaveValue('')
    await userEvent.selectOptions(movedSelector, 'US-AL')
    for (const [label, value, getOutput] of [
      [
        'Selector label',
        'Choose place',
        () => canvasElement.querySelector('.map-location-selector label')?.textContent
      ],
      [
        'Placeholder text',
        'Choose an option',
        () => canvasElement.querySelector('.map-location-selector option[value=""]')?.textContent
      ],
      [
        'Link text',
        'Read about {{location}} »',
        () => canvasElement.querySelector('.map-location-selector a')?.textContent
      ]
    ] as const) {
      await performAndAssert(
        label,
        getOutput,
        async () => {
          const input = canvas.getByLabelText(label)
          await userEvent.clear(input)
          await userEvent.type(input, value.replace(/\{/g, '{{'))
        },
        (_, after) => !!after?.startsWith(value.replace('{{location}}', 'Alabama'))
      )
    }
    await performAndAssert(
      'Clear URL column while retaining the selector',
      () => canvasElement.querySelector('.map-location-selector a')?.textContent ?? '',
      () => userEvent.selectOptions(canvas.getByLabelText('Link URL column'), ''),
      (_, after) => after === ''
    )
    for (const label of [
      'Open links in',
      'Clicking a map location opens its link',
      'Show links in the data table',
      'Link text',
      'No-link message'
    ]) {
      expect(canvas.queryByLabelText(label)).toBeNull()
    }
    expect(canvas.getByLabelText('Choose place')).toHaveValue('US-AL')
    expect(canvas.getByLabelText('Show location selector')).toBeChecked()
    expect(canvas.getByLabelText('Location information')).toBeVisible()
    expect(canvasElement.querySelector('.map-location-selector__result')).toBeEmptyDOMElement()
    expect(canvasElement.querySelectorAll('td .table-link')).toHaveLength(0)
    await performAndAssert(
      'Restore URL column and previous selector settings',
      () => canvasElement.querySelector('.map-location-selector a')?.textContent ?? '',
      () => userEvent.selectOptions(canvas.getByLabelText('Link URL column'), 'URL'),
      (_, after) => after.startsWith('Read about Alabama')
    )
    expect(within(selectorControls).getByLabelText('Link text')).toBeVisible()
    expect(within(selectorControls).getByLabelText('No-link message')).toBeVisible()
    expect(canvas.getByLabelText('Show location selector')).toBeChecked()
    expect(canvas.getByLabelText('Show links in the data table')).toBeChecked()
    expect(canvas.getByLabelText('Clicking a map location opens its link')).not.toBeChecked()
    expect(canvas.getByLabelText('Position')).toHaveValue('above')
    expect(canvas.getByLabelText('Open links in')).toHaveValue('_blank')
    expect(canvas.getByLabelText('Choose place')).toBeVisible()
    expect(canvasElement.querySelector('.map-location-selector option')).toHaveTextContent('Choose an option')
    await userEvent.selectOptions(canvas.getByLabelText('Choose place'), 'US-AL')
    expect(canvasElement.querySelector('.map-location-selector a')).toHaveTextContent('Read about Alabama »')
  }
}

export const PlaybackOptions: Story = {
  args: {
    config: (() => {
      const c = makeConfig()
      c.general.showSidebar = false
      c.locationLinks.selector.information = 'Current rate: {{rate}}'
      c.enableMarkupVariables = true
      c.markupVariables = [{ name: 'rate', tag: '{{rate}}', columnName: 'Rate', conditions: [] }]
      c.locationLinks.selector.highlightSelectedLocation = true
      c.timePlayback = { enabled: true, column: 'Year' }
      c.data = [
        { STATE: 'AL', Rate: 10, Year: 2021, URL: '/old' },
        { STATE: 'CA', Rate: 20, Year: 2021, URL: '' },
        { STATE: 'AL', Rate: 30, Year: 2022, URL: '/new' },
        { STATE: 'NY', Rate: 40, Year: 2022, URL: '' }
      ]
      return c
    })()
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const canvas = within(canvasElement)
    const select = canvas.getByLabelText('Select a location for more information')
    await userEvent.selectOptions(select, 'US-AL')
    expect(canvasElement.querySelector('.map-location-selector a')).toHaveAttribute(
      'href',
      `${window.location.origin}/new`
    )
    expect(canvasElement.querySelector('.map-location-selector__information')).toHaveTextContent('Current rate: 30')
    await performAndAssert(
      'Follow previous playback frame',
      () => canvasElement.querySelector('.map-location-selector a')?.getAttribute('href'),
      () => userEvent.click(canvas.getByRole('button', { name: /previous/i })),
      (_, after) => after?.endsWith('/old')
    )
    expect(canvasElement.querySelector('.map-location-selector__information')).toHaveTextContent('Current rate: 10')
    expect(select).toHaveValue('US-AL')
    expect(within(select).queryByRole('option', { name: 'New York' })).toBeNull()
    await userEvent.selectOptions(select, 'US-CA')
    await performAndAssert(
      'Reset when location leaves frame',
      () => (select as HTMLSelectElement).value,
      () => userEvent.click(canvas.getByRole('button', { name: /next/i })),
      (_, after) => after === ''
    )
    expect(canvasElement.querySelector('.map-location-selector [aria-live]')).toBeEmptyDOMElement()
    expect(getComputedStyle(canvasElement.querySelector('g.geo-group[id="Alabama"]')!).opacity).toBe('1')
  }
}

export const IndependentWorldMaps: Story = {
  args: {
    config: (() => {
      const c = makeConfig()
      c.locationLinks.selector.information = 'Supporting information'
      c.general.geoType = 'world'
      c.locationLinks.selector.highlightSelectedLocation = true
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
    await waitForPresence('.map-location-selector select', canvasElement)
    await waitForPresence('.cdc-open-viz-module + .cdc-open-viz-module .map-location-selector select', canvasElement)
    const selects = within(canvasElement).getAllByLabelText('Select a location for more information')
    expect(selects).toHaveLength(2)
    expect(selects[0].id).not.toBe(selects[1].id)
    expect(within(selects[0]).getAllByRole('option', { name: 'Same label' })).toHaveLength(2)
    expect(within(selects[0]).queryByRole('option', { name: 'Hidden' })).toBeNull()
    await userEvent.selectOptions(selects[0], 'CAN')
    expect(selects[1]).toHaveValue('')
    const modules = canvasElement.querySelectorAll('.map-location-selector')
    expect(modules[0].querySelector('.map-location-selector__information')).toHaveTextContent('Supporting information')
    expect(modules[1].querySelector('.map-location-selector__information')).toBeNull()
    await waitForPresence('.selected-location-outline', canvasElement)
    const maps = canvasElement.querySelectorAll('.cdc-open-viz-module')
    expect(getComputedStyle(maps[0].querySelector('[data-country-code="MEX"]')!.parentElement!).opacity).toBe('0.5')
    expect(getComputedStyle(maps[1].querySelector('[data-country-code="MEX"]')!.parentElement!).opacity).toBe('1')
    expect(maps[1].querySelector('.selected-location-outline')).toBeNull()
    expect(maps[0].querySelector('[data-country-code="FRA"]')).not.toBeVisible()

    for (const module of canvasElement.querySelectorAll('.map-location-selector')) {
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
    await waitForPresence('.map-location-selector select', canvasElement)
    expect(within(canvasElement).getByLabelText('Select a location for more information')).toBeDisabled()
    expect(canvasElement.querySelector('.map-location-selector [aria-live]')).toBeEmptyDOMElement()
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
      await waitForPresence('.map-location-selector select', example)
      if (territories) await waitForPresence('.territories', example)
      const content = example.querySelector('.cove-visualization__content-section') as HTMLElement
      const selector = example.querySelector('.map-location-selector') as HTMLElement
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
    expect(canvasElement.querySelector('.map-location-selector')).toBeNull()
    await openAccordion(canvas, 'Type')
    expect(canvas.getByText('Navigation Behavior')).toBeVisible()
    await openAccordion(canvas, 'Columns')
    expect(canvasElement.querySelector('.navigate select')).toBeVisible()
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
  config.locationLinks.selector.information =
    '<p>Long supplementary information with an unbroken value: ' +
    'LongValue'.repeat(35) +
    '</p><ul><li>Details</li></ul>'
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
      await waitForPresence('.map-location-selector select', example)
      const select = within(example).getByLabelText('Select a location for more information')
      await userEvent.selectOptions(select, 'US-AL')
      expect(select).toHaveFocus()
      const module = example.querySelector('.map-location-selector') as HTMLElement
      const info = module.querySelector('.map-location-selector__information') as HTMLElement
      expect(info).toHaveTextContent('Long supplementary information')
      expect(module.scrollWidth).toBeLessThanOrEqual(module.clientWidth)
      expect(info.scrollWidth).toBeLessThanOrEqual(info.clientWidth)
      expect(within(module).getAllByRole('link')).toHaveLength(1)
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
      c.locationLinks.selector.highlightSelectedLocation = true
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
      c.locationLinks.selector.enabled = false
      delete c.locationLinks.selector.information
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
      () => !!canvasElement.querySelector('.map-location-selector'),
      () => userEvent.click(canvas.getByLabelText('Show location selector')),
      (_, after) => after
    )
    const select = canvas.getByLabelText('Select a location for more information')
    await userEvent.selectOptions(select, 'US-AL')
    expect(canvas.getByLabelText('Location information')).toHaveValue('')
    await performAndAssert(
      'Author details without links',
      () => canvasElement.querySelector('.map-location-selector__information')?.textContent ?? '',
      () => userEvent.type(canvas.getByLabelText('Location information'), 'Supporting information'),
      (_, after) => after === 'Supporting information'
    )
    const alaska = () => canvasElement.querySelector('[data-geo-id="US-AK"]')!
    await performAndAssert(
      'Highlight state without links',
      () => getComputedStyle(alaska()).opacity,
      () => userEvent.click(canvas.getByLabelText('Highlight selected location on map')),
      (_, after) => after === '0.5'
    )
    expect(canvasElement.querySelector('.selected-state-outline')).toBeInTheDocument()
    await performAndAssert(
      'Add links to the existing selection',
      () => !!canvasElement.querySelector('.map-location-selector a'),
      () => userEvent.selectOptions(canvas.getByLabelText('Link URL column'), 'URL'),
      (_, after) => after
    )
    expect(select).toHaveValue('US-AL')
    expect(canvas.queryByLabelText('Show links in the data table')).toBeNull()
    expect(canvas.getByLabelText('Link text')).toBeVisible()
    expect(canvas.getByLabelText('No-link message')).toBeVisible()
    await performAndAssert(
      'Hide selector while keeping map links configured',
      () => !!canvasElement.querySelector('.map-location-selector'),
      () => userEvent.click(canvas.getByLabelText('Show location selector')),
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
      locationLinks: {
        selector: { enabled: true, information: 'Supporting information', highlightSelectedLocation: true }
      },
      data: [{ STATE: 'Canada', Rate: 40 }]
    } as any)
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const select = within(canvasElement).getByLabelText('Select a location for more information')
    await userEvent.selectOptions(select, 'CAN')
    expect(canvasElement.querySelector('.map-location-selector__information')).toHaveTextContent(
      'Supporting information'
    )
    await waitForPresence('.selected-location-outline', canvasElement)
    expect(getComputedStyle(canvasElement.querySelector('[data-country-code="MEX"]')!.parentElement!).opacity).toBe(
      '0.5'
    )
    expect(getComputedStyle(canvasElement.querySelector('[data-country-code="CAN"]')!.parentElement!).opacity).toBe('1')
    expect(canvasElement.querySelector('.map-location-selector a')).toBeNull()
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
  args: { config: makeWorldHighlightConfig(), isEditor: true },
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
      () => userEvent.click(canvas.getByLabelText('Show location selector')),
      (_, after) => !after
    )
    expect(opacity('MEX')).toBe('1')
  }
}

export const WorldHighlightPlayback: Story = {
  args: {
    config: (() => {
      const c = makeWorldHighlightConfig()
      c.locationLinks.selector.highlightSelectedLocation = true
      c.timePlayback = { enabled: true, column: 'Year' }
      c.data = [
        { STATE: 'Canada', Rate: 40, Year: 2021, URL: '/old' },
        { STATE: 'Mexico', Rate: 50, Year: 2021, URL: '' },
        { STATE: 'Canada', Rate: 60, Year: 2022, URL: '/new' },
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
      () => canvasElement.querySelector('.map-location-selector a')?.getAttribute('href'),
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
      c.locationLinks.selector.highlightSelectedLocation = true
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
        { name: 'location', tag: '{{location}}', sourceType: 'metadata', metadataKey: 'Name', conditions: [] }
      ]
      config.data = [
        { STATE: 'AL', Rate: 10 },
        { STATE: 'Alabama', Rate: 15 },
        { STATE: 'AK', Rate: 20 }
      ]
      config.dataMetadata = { Name: 'Outside selector' }
      config.general.subtext = 'Rate: {{rate}} / {{location}}'
      config.locationLinks.selector.information =
        '<strong>{{location}} rate: {{rate}}</strong><ul><li>Supporting details</li></ul>'
      config.locationLinks.selector.linkText = '{{location}}: {{rate}}'
      config.locationLinks.selector.noLinkMessage = 'No report for {{location}}: {{rate}}'
      config.data[0].URL = '/al'
      return config
    })()
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const select = within(canvasElement).getByLabelText('Select a location for more information')
    expect(canvasElement.querySelector('.map-location-selector__information')).toBeNull()
    for (const id of ['US-AL', 'US-AK']) {
      await userEvent.selectOptions(select, id)
      const info = canvasElement.querySelector('.map-location-selector__information')!
      expect(info).toHaveClass('cove-prose')
      expect(info.querySelector('strong')).toHaveTextContent(
        id === 'US-AL' ? 'Alabama rate: 10 and 15' : 'Alaska rate: 20'
      )
      expect(canvasElement.querySelector('.subtext.cove-prose')).toHaveTextContent(
        'Rate: 10, 15, and 20 / Outside selector'
      )
      expect(info.querySelector('li')).toHaveTextContent('Supporting details')
      expect(canvasElement.querySelector('.map-location-selector__result')).toHaveTextContent(
        id === 'US-AL' ? 'Alabama: 10 and 15' : 'No report for Alaska: 20'
      )
    }
  }
}

const makeYearFilterConfig = () => {
  const config = makeConfig()
  config.locationLinks.selector.position = 'above'
  config.locationLinks.selector.highlightSelectedLocation = true
  config.locationLinks.selector.information = '{{location}}: {{cases}} cases in {{year}}'
  config.enableMarkupVariables = true
  config.markupVariables = [
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
    { STATE: 'Alabama', Rate: 30, Year: '2026', URL: '/alabama-2026' }
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
    const information = () => canvasElement.querySelector('.map-location-selector__information')?.textContent ?? ''
    const link = () => canvasElement.querySelector('.map-location-selector a')
    const alabama = () => canvasElement.querySelector('[data-geo-id="US-AL"]')!
    await performAndAssert(
      'Select Alaska for 2024',
      information,
      () => userEvent.selectOptions(select, 'US-AK'),
      (_, after) => after === 'Alaska: 3 cases in 2024'
    )
    expect(link()).toHaveAttribute('href', `${window.location.origin}/alaska-2024`)
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
      expect(link()).toHaveAttribute('href', `${window.location.origin}/alaska-${year}`)
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
      config.locationLinks.selector.position = 'below'
      return config
    })()
  }
}
