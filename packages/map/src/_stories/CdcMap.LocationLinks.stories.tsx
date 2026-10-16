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
import { createNewMapConfig } from '../helpers/createNewMapConfig'
import base from './_mock/equal-number.json'

const makeConfig = () =>
  createNewMapConfig({
    ...base,
    general: { ...base.general, navigationTarget: '_self' },
    table: { ...base.table, expanded: true, forceDisplay: true },
    locationLinks: { selector: { enabled: true } },
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
    expect(canvas.getByText('No link available for this location.')).toBeVisible()
    const module = canvasElement.querySelector('.map-location-selector')!
    const map = canvasElement.querySelector('.map-container')!
    expect(map.compareDocumentPosition(module) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    const sectionGap = getComputedStyle(canvasElement.querySelector('.cove-visualization__body-wrap')!).rowGap
    expect(getComputedStyle(module).marginTop).toBe(sectionGap)
    expect(getComputedStyle(module).marginBottom).toBe(getComputedStyle(document.documentElement).fontSize)
  }
}

export const AboveHexMobile: Story = {
  args: {
    config: (() => {
      const c = makeConfig()
      c.locationLinks.selector.showTooltipInformation = true
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
    const sectionGap = getComputedStyle(canvasElement.querySelector('.cove-visualization__body-wrap')!).rowGap
    expect(getComputedStyle(module).marginTop).toBe('0px')
    expect(getComputedStyle(module).marginBottom).toBe(sectionGap)
    const followingSection = canvasElement.querySelector('.cove-visualization__content-section')!.nextElementSibling!
    expect(getComputedStyle(followingSection).paddingTop).toBe('0px')
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
    await openAccordion(canvas, 'Interactivity')
    await waitForPresence('g.geo-group[id="Alabama"]', canvasElement)
    const linkControls = canvas.getByRole('region', { name: 'Location link settings' })
    expect(within(linkControls).queryByRole('heading')).toBeNull()
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
      () => userEvent.click(canvas.getByLabelText('Clicking a location opens its link')),
      (_, after) => after === 'pointer'
    )
    await performAndAssert(
      'Disable direct links',
      () => getComputedStyle(state).cursor,
      () => userEvent.click(canvas.getByLabelText('Clicking a location opens its link')),
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
    for (const enabled of [true, false]) {
      await performAndAssert(
        `${enabled ? 'Show' : 'Hide'} selector tooltip information`,
        () => canvasElement.querySelector('.map-location-selector__information')?.textContent ?? '',
        () => userEvent.click(canvas.getByLabelText('Show tooltip information')),
        (_, after) => (enabled ? after.includes('Rate') && !after.includes('State: Alabama') : after === '')
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
        'Read about {location} »',
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
        (_, after) => !!after?.startsWith(value.replace('{location}', 'Alabama'))
      )
    }
    await performAndAssert(
      'Clear URL column and suppress selector',
      () => !!canvasElement.querySelector('.map-location-selector'),
      () => userEvent.selectOptions(canvas.getByLabelText('Link URL column'), ''),
      (_, after) => !after
    )
    for (const label of [
      'Open links in',
      'Clicking a location opens its link',
      'Show links in the data table',
      'Show location selector',
      'Position',
      'Show tooltip information',
      'Selector label',
      'Placeholder text',
      'Link text',
      'No-link message'
    ]) {
      expect(within(linkControls).queryByLabelText(label)).toBeNull()
    }
    expect(canvasElement.querySelectorAll('td .table-link')).toHaveLength(0)
    await performAndAssert(
      'Restore URL column and previous selector settings',
      () => !!canvasElement.querySelector('.map-location-selector'),
      () => userEvent.selectOptions(canvas.getByLabelText('Link URL column'), 'URL'),
      (_, after) => after
    )
    expect(canvas.getByLabelText('Show location selector')).toBeChecked()
    expect(canvas.getByLabelText('Show links in the data table')).toBeChecked()
    expect(canvas.getByLabelText('Clicking a location opens its link')).not.toBeChecked()
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
      c.locationLinks.selector.showTooltipInformation = true
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
    await performAndAssert(
      'Follow previous playback frame',
      () => canvasElement.querySelector('.map-location-selector a')?.getAttribute('href'),
      () => userEvent.click(canvas.getByRole('button', { name: /previous/i })),
      (_, after) => after?.endsWith('/old')
    )
    expect(canvasElement.querySelector('.map-location-selector__information')).toHaveTextContent('10')
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
  }
}

export const IndependentWorldMaps: Story = {
  args: {
    config: (() => {
      const c = makeConfig()
      c.locationLinks.selector.showTooltipInformation = true
      c.general.geoType = 'world'
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
    expect(modules[0].querySelector('.map-location-selector__information')).toHaveTextContent('Rate: 10')
    expect(modules[0].querySelector('.tooltip-heading')).toBeNull()
    expect(modules[1].querySelector('.map-location-selector__information')).toBeNull()
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
      const nextSection = content.nextElementSibling as HTMLElement
      const gap = parseFloat(getComputedStyle(content.parentElement!).rowGap)
      const extra = parseFloat(getComputedStyle(document.documentElement).fontSize)
      expect(!!example.querySelector('.territories')).toBe(territories)
      expect(!!example.querySelector('.data-table-container')).toBe(table)
      expect(!!example.querySelector('.cove-visualization__body-subtext-section')).toBe(subtext)
      expect(getComputedStyle(selector).marginBottom).toBe(`${extra}px`)
      expect(getComputedStyle(nextSection).paddingTop).toBe('0px')
      if (subtext || table) {
        const firstContent = nextSection.firstElementChild as HTMLElement
        expect(firstContent.getBoundingClientRect().top - selector.getBoundingClientRect().bottom).toBeCloseTo(
          gap + extra,
          0
        )
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

const longTooltipConfig = () => {
  const config = makeConfig()
  config.locationLinks.selector.showTooltipInformation = true
  config.columns.primary.label = 'A long descriptive tooltip field label that wraps on narrow screens'
  config.columns.detail = { name: 'Detail', label: 'Details', tooltip: true } as any
  config.data = config.data.map(row => ({
    ...row,
    Detail: 'Long supplementary information with an unbroken value: ' + 'LongValue'.repeat(35)
  }))
  return config
}

export const TooltipInformationWrapping: Story = {
  render: () => (
    <>
      {[360, 740].map(width => (
        <div key={width} data-tooltip-width={width} style={{ width, maxWidth: '100%' }}>
          <CdcMap config={longTooltipConfig()} />
        </div>
      ))}
    </>
  ),
  play: async ({ canvasElement }) => {
    for (const example of canvasElement.querySelectorAll<HTMLElement>('[data-tooltip-width]')) {
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
