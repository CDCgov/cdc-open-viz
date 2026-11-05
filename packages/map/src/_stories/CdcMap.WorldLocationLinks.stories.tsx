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
import { createDefaultBubbleLayer } from '../helpers/bubbleLayers'
import { CompletesRequiredColumns, CompletesRequiredNavigationColumns } from './CdcMap.RequiredFields.stories'

const makeConfig = () =>
  createNewMapConfig({
    type: 'map',
    general: { type: 'data', geoType: 'world', navigationTarget: '_self', showSidebar: true },
    columns: {
      geo: { name: 'Country', label: 'Country', dataTable: true },
      primary: { name: 'Rate', label: 'Rate', dataTable: true, tooltip: true },
      navigate: { name: 'URL' }
    },
    locationHighlighter: { enabled: true, details: '<a href="{{url}}" target="_blank">Report for {{location}}</a>' },
    enableMarkupVariables: true,
    markupVariables: [{ name: 'url', tag: '{{url}}', columnName: 'URL', selectionMode: 'first', conditions: [] }],
    table: { expanded: true, forceDisplay: true },
    data: [
      { Country: 'Canada', Rate: 10, URL: '/canada' },
      { Country: 'Mexico', Rate: 20, URL: '/mexico' }
    ]
  } as any)

const meta: Meta<typeof CdcMap> = { title: 'Components/Templates/Map/World Location Links', component: CdcMap }
export default meta
type Story = StoryObj<typeof CdcMap>

export const EditorAndLinks: Story = {
  args: { config: makeConfig(), isEditor: true, navigationHandler: fn() },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await waitForEditor(canvas)
    await openAccordion(canvas, 'Interactivity')
    await waitForPresence('[data-country-code="CAN"]', canvasElement)
    const canada = () => canvasElement.querySelector('[data-country-code="CAN"]')!.parentElement!
    const select = canvas.getByLabelText('Select a location for more information')
    expect(canvas.getByLabelText('Highlight selected location on map')).toBeChecked()
    await userEvent.click(canada())
    expect(args.navigationHandler).not.toHaveBeenCalled()
    await performAndAssert(
      'Enable direct world-map links',
      () => getComputedStyle(canada()).cursor,
      () => userEvent.click(canvas.getByLabelText('Clicking a map location opens its link')),
      (_, after) => after === 'pointer'
    )
    await userEvent.click(canada())
    expect(args.navigationHandler).toHaveBeenCalledWith('/canada')
    await userEvent.selectOptions(select, 'CAN')
    const module = () => canvasElement.querySelector('.map-location-highlighter')!
    const link = within(module() as HTMLElement).getByRole('link', { name: 'Report for Canada' })
    expect(link).toHaveAttribute('href', '/canada')
    expect(link).toHaveAttribute('target', '_blank')
    const content = canvasElement.querySelector('.cove-visualization__content-section')!
    expect(module().compareDocumentPosition(content) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    await performAndAssert(
      'Move the world selector below the map',
      () => module().compareDocumentPosition(content) & Node.DOCUMENT_POSITION_FOLLOWING,
      () =>
        userEvent.selectOptions(canvasElement.querySelector('select[name="locationHighlighterPosition"]')!, 'below'),
      (_, after) => !after
    )
    expect(canvas.getByLabelText('Select a location for more information')).toHaveValue('')
    expect(canvasElement.querySelector('.selected-location-outline')).toBeNull()
    const original = window.open
    const open = fn(() => null)
    window.open = open
    try {
      for (const target of ['_self', '_blank']) {
        await userEvent.selectOptions(canvas.getByLabelText('Open links in'), target)
        const table = canvasElement.querySelector('table')!
        const tableLink = within(table).getByRole('link', { name: 'Canada' })
        await userEvent.click(tableLink)
        expect(open).toHaveBeenLastCalledWith(`${window.location.origin}/canada`, target)
        tableLink.focus()
        await userEvent.keyboard('{Enter}')
        expect(open).toHaveBeenLastCalledWith(`${window.location.origin}/canada`, target)
      }
      await performAndAssert(
        'Disable world table links independently',
        () => canvasElement.querySelectorAll('td .table-link').length,
        () => userEvent.click(canvas.getByLabelText('Show links in the data table')),
        (_, after) => after === 0
      )
      await userEvent.click(canada())
      expect(args.navigationHandler).toHaveBeenLastCalledWith('/canada')
      await userEvent.selectOptions(canvas.getByLabelText(/Detail displays on/), 'click')
      await userEvent.click(canvas.getByLabelText('Clicking a map location opens its link'))
      await userEvent.click(canada())
      await waitForPresence('.modal-content .navigation-link', canvasElement)
      await userEvent.click(canvasElement.querySelector('.modal-content .navigation-link')!)
      expect(args.navigationHandler).toHaveBeenLastCalledWith('/canada')
    } finally {
      window.open = original
    }
  }
}

export const FilteredInformation: Story = {
  args: {
    config: (() => {
      const c = makeConfig()
      c.locationHighlighter.position = 'below'
      c.locationHighlighter.filterColumn = 'URL'
      c.locationHighlighter.details = '<strong>{{location}}: {{rate}}</strong><a href="{{url}}">Report</a>'
      c.markupVariables.push({ name: 'rate', tag: '{{rate}}', columnName: 'Rate', conditions: [] })
      c.filters = [
        { columnName: 'Period', label: 'Period', filterStyle: 'dropdown', active: '2025', values: ['2025', '2026'] }
      ]
      c.data = [
        { Country: 'Canada', Rate: 10, Period: '2025', URL: '/old' },
        { Country: 'canada', Rate: 15, Period: '2025', URL: '/old' },
        { Country: 'Mexico', Rate: 20, Period: '2025', URL: '/mexico' },
        { Country: 'Canada', Rate: 30, Period: '2026', URL: '/new' },
        { Country: 'Mexico', Rate: 40, Period: '2026', URL: '' }
      ]
      return c
    })()
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    const canvas = within(canvasElement)
    const select = canvas.getByLabelText('Select a location for more information')
    const info = () => canvasElement.querySelector('.map-location-highlighter__details')!
    await userEvent.selectOptions(select, 'CAN')
    expect(info()).toHaveTextContent('Canada: 10 and 15')
    expect(info().querySelector('a')).toHaveAttribute('href', '/old')
    await performAndAssert(
      'Update world selection details with ordinary filters',
      () => info()?.textContent,
      () => userEvent.selectOptions(canvas.getByLabelText('Period'), '2026'),
      (_, after) => after?.includes('Canada: 30')
    )
    expect(select).toHaveValue('CAN')
    expect(info().querySelector('a')).toHaveAttribute('href', '/new')
    expect(within(select).queryByRole('option', { name: 'Mexico' })).toBeNull()
    await userEvent.selectOptions(canvas.getByLabelText('Period'), '2025')
    await userEvent.selectOptions(select, 'MEX')
    await performAndAssert(
      'Clear world selection when its presence column becomes empty',
      () => select.getAttribute('value') || (select as HTMLSelectElement).value,
      () => userEvent.selectOptions(canvas.getByLabelText('Period'), '2026'),
      (_, after) => after === ''
    )
    expect(info()).toBeNull()
    expect(canvasElement.querySelector('.selected-location-outline')).toBeNull()
  }
}

export const WorldOverlays: Story = {
  args: {
    config: (() => {
      const c = makeConfig()
      c.data.push({ Country: 'New York City', Rate: 15, URL: '' })
      c.data = c.data.map(row => ({ ...row, Latitude: 40.7, Longitude: -74 }))
      c.bubble.layers = [
        createDefaultBubbleLayer({
          columns: { geo: { name: 'Country' }, primary: { name: 'Rate' } },
          opacity: 0.8,
          extraBubbleBorder: true
        }),
        createDefaultBubbleLayer({
          locationSource: 'latitude-longitude',
          columns: {
            geo: { name: 'Country' },
            primary: { name: 'Rate' },
            latitude: { name: 'Latitude' },
            longitude: { name: 'Longitude' }
          },
          opacity: 0.6,
          extraBubbleBorder: true
        })
      ]
      return c
    })()
  },
  play: async ({ canvasElement }) => {
    await assertVisualizationRendered(canvasElement)
    await waitForPresence('.geo-point', canvasElement)
    await waitForPresence('.bubble--coordinate', canvasElement)
    const canvas = within(canvasElement)
    const select = canvas.getByLabelText('Select a location for more information')
    expect(within(select).getByRole('option', { name: 'New York City' })).toHaveValue('NEW YORK CITY')
    const city = canvasElement.querySelector('.geo-point')!
    const canadaBubble = () => canvasElement.querySelector('circle.country--Canada')!
    const mexicoBubble = () => canvasElement.querySelector('circle.country--Mexico')!
    await performAndAssert(
      'Fade world overlays with selection',
      () => getComputedStyle(city).opacity,
      () => userEvent.selectOptions(select, 'CAN'),
      (_, after) => after === '0.5'
    )
    expect(getComputedStyle(canadaBubble().parentElement!).opacity).toBe('1')
    expect(getComputedStyle(mexicoBubble().parentElement!).opacity).toBe('0.5')
    expect(canadaBubble()).toHaveAttribute('fill-opacity', '0.8')
    for (const bubble of canvasElement.querySelectorAll('.bubble--coordinate')) {
      expect(getComputedStyle(bubble.parentElement!).opacity).toBe('0.5')
      expect(bubble).toHaveAttribute('fill-opacity', '0.6')
    }
    await performAndAssert(
      'Highlight the selected world city marker independently of countries',
      () => getComputedStyle(city).opacity,
      () => userEvent.selectOptions(select, 'NEW YORK CITY'),
      (_, after) => after === '1'
    )
    expect(city.querySelector('path, circle, polygon')).toHaveAttribute('stroke', '#000000')
    expect(canvasElement.querySelector('.map-location-highlighter__details')).toHaveTextContent(
      'Report for New York City'
    )
    expect(canvasElement.querySelector('.selected-location-outline')).toBeNull()
    expect(getComputedStyle(canadaBubble().parentElement!).opacity).toBe('0.5')
    expect(getComputedStyle(canvasElement.querySelector('[data-country-code="USA"]')!.parentElement!).opacity).toBe(
      '0.5'
    )
    await performAndAssert(
      'Restore world overlays after clearing selection',
      () => getComputedStyle(mexicoBubble().parentElement!).opacity,
      () => userEvent.selectOptions(select, ''),
      (_, after) => after === '1'
    )
    expect(getComputedStyle(mexicoBubble().parentElement!).opacity).toBe('1')
  }
}

const worldRequiredConfig = (config: any) => ({
  ...structuredClone(config),
  general: { ...config.general, geoType: 'world' },
  data: [{ STATE: 'Canada', Rate: 10, URL: '/canada' }]
})

export const WorldRequiredDataColumns: Story = {
  ...CompletesRequiredColumns,
  args: { ...CompletesRequiredColumns.args, config: worldRequiredConfig(CompletesRequiredColumns.args!.config) }
}
export const WorldRequiredNavigationColumns: Story = {
  ...CompletesRequiredNavigationColumns,
  args: {
    ...CompletesRequiredNavigationColumns.args,
    config: worldRequiredConfig(CompletesRequiredNavigationColumns.args!.config)
  }
}
