import { fireEvent, render, screen } from '@testing-library/react'
import LocationSelector from './LocationSelector'
import { createNewMapConfig } from '../helpers/createNewMapConfig'

const makeConfig = (target = '_self', selector = {}) =>
  createNewMapConfig({
    general: { type: 'data', geoType: 'us', navigationTarget: target },
    columns: { geo: { name: 'State' }, navigate: { name: 'URL' } },
    locationSelector: { enabled: true, ...selector }
  } as any)
const data = { 'US-AL': { URL: '/al' }, 'US-AK': {} }

describe('LocationSelector', () => {
  it('reports selection changes and clears the map selection when removed or unmounted', () => {
    const onSelectionChange = vi.fn()
    const config = makeConfig()
    const { rerender, unmount } = render(
      <LocationSelector config={config} runtimeData={data} onSelectionChange={onSelectionChange} />
    )
    expect(onSelectionChange).toHaveBeenLastCalledWith('')
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AL' } })
    expect(onSelectionChange).toHaveBeenLastCalledWith('US-AL')
    rerender(<LocationSelector config={config} runtimeData={{}} onSelectionChange={onSelectionChange} />)
    expect(onSelectionChange).toHaveBeenLastCalledWith('')
    rerender(<LocationSelector config={config} runtimeData={data} onSelectionChange={onSelectionChange} />)
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AK' } })
    expect(onSelectionChange).toHaveBeenLastCalledWith('US-AK')
    unmount()
    expect(onSelectionChange).toHaveBeenLastCalledWith('')
  })

  it.each(['Choose an option', ''])('uses a custom placeholder (%j) independently of the label', placeholder => {
    const config = makeConfig()
    config.locationSelector.placeholder = placeholder
    const { rerender } = render(<LocationSelector config={config} runtimeData={data} />)
    expect(screen.getByLabelText('Select a location for more information')).toHaveValue('')
    expect(screen.getByRole('option', { name: placeholder })).toHaveValue('')
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AL' } })
    config.locationSelector.placeholder = 'Pick one'
    rerender(<LocationSelector config={config} runtimeData={data} />)
    expect(screen.getByRole('combobox')).toHaveValue('US-AL')
    expect(screen.getByRole('option', { name: 'Pick one' })).toHaveValue('')
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '' } })
    expect(screen.queryByRole('link')).toBeNull()
  })
  it('preserves qualifying selections and clears information and highlighting when presence changes', () => {
    const config = makeConfig('_self', { filterColumn: 'URL', information: '{{location}} details' })
    const onSelectionChange = vi.fn()
    const view = (runtimeData: any) => (
      <LocationSelector config={config} runtimeData={runtimeData} onSelectionChange={onSelectionChange} />
    )
    const { rerender, container } = render(view(data))
    const select = screen.getByRole('combobox')
    fireEvent.change(select, { target: { value: 'US-AL' } })
    select.focus()
    rerender(view({ 'US-AL': { URL: 0 } }))
    expect(select).toHaveFocus()
    expect(select).toHaveValue('US-AL')
    expect(container.querySelector('.map-location-selector__information')).toHaveTextContent('Alabama details')
    rerender(view({ 'US-AL': { URL: '  ' } }))
    expect(select).toHaveValue('')
    expect(select).toBeDisabled()
    expect(onSelectionChange).toHaveBeenLastCalledWith('')
    expect(container.querySelector('.map-location-selector__information')).toBeNull()
    rerender(view(data))
    expect(select).toHaveValue('')
  })
  it.each(['_self', '_blank'])('keeps authored anchor targets independent of map navigation target %s', target => {
    const config = makeConfig(target, { information: '<a href="/report" target="_parent">{{location}}</a>' })
    config.columns.navigate.name = ''
    render(<LocationSelector config={config} runtimeData={data} />)
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AL' } })
    expect(screen.getByRole('link')).toHaveAttribute('href', '/report')
    expect(screen.getByRole('link')).toHaveAttribute('target', '_parent')
    expect(screen.getByRole('link')).toHaveTextContent('Alabama')
    expect(screen.getByRole('link').querySelector('svg')).toBeNull()
  })
  it('keeps multiple maps independent with unique labels', () => {
    const config = makeConfig('_self', { information: '{{location}} details' })
    render(
      <>
        <>
          <LocationSelector config={config} runtimeData={data} />

          <div>Map</div>
        </>
        <>
          <LocationSelector config={config} runtimeData={data} />

          <div>Map</div>
        </>
      </>
    )
    const selects = screen.getAllByRole('combobox')
    expect(selects[0].id).not.toBe(selects[1].id)
    fireEvent.change(selects[0], { target: { value: 'US-AK' } })
    expect(selects[1]).toHaveValue('')
    expect(screen.getAllByText('Alaska details')).toHaveLength(1)
  })
})

describe('authored location information', () => {
  it.each(['us', 'world'])('renders rich text only after selection without a URL column on %s maps', geoType => {
    const config = makeConfig()
    config.general.geoType = geoType as any
    config.columns.navigate.name = ''
    config.locationSelector.information = '<strong>Report</strong><ul><li>Details</li></ul>'
    const id = geoType === 'us' ? 'US-AL' : 'CAN'
    const { container, rerender } = render(<LocationSelector config={config} runtimeData={{ [id]: {} }} />)
    expect(container.querySelector('[aria-live]')).toBeEmptyDOMElement()
    fireEvent.change(screen.getByRole('combobox'), { target: { value: id } })
    const info = container.querySelector('.map-location-selector__information')!
    expect(info).toHaveClass('cove-prose')
    expect(info.querySelector('strong')).toHaveTextContent('Report')
    expect(info.querySelector('li')).toHaveTextContent('Details')
    expect(screen.queryByRole('link')).toBeNull()
    expect(screen.queryByText('No link available for Alaska.')).toBeNull()
    config.locationSelector.information = '<em>Updated</em>'
    rerender(<LocationSelector config={config} runtimeData={{ [id]: {} }} />)
    expect(info.querySelector('em')).toHaveTextContent('Updated')
    expect(screen.getByRole('combobox')).toHaveValue(id)
    config.locationSelector.information = ''
    rerender(<LocationSelector config={config} runtimeData={{ [id]: {} }} />)
    expect(container.querySelector('.map-location-selector__information')).toBeNull()
  })
})

describe('location-scoped markup variables', () => {
  const markupConfig = () => {
    const config = makeConfig()
    config.enableMarkupVariables = true
    config.locationSelector.information = '<strong>{{values}}</strong> | {{first}} | {{missing}} | {{note}}'
    config.dataMetadata = { Note: 'Source note' }
    config.markupVariables = [
      { name: 'values', tag: '{{values}}', columnName: 'Value', conditions: [] },
      {
        name: 'first',
        tag: '{{first}}',
        columnName: 'Value',
        selectionMode: 'first',
        conditions: [{ columnName: 'Group', isOrIsNotEqualTo: 'is', value: 'B' }]
      },
      { name: 'missing', tag: '{{missing}}', columnName: 'Missing', conditions: [] },
      { name: 'note', tag: '{{note}}', sourceType: 'metadata', metadataKey: 'Note', conditions: [] }
    ]
    return config
  }

  it('keeps all matching rows for variable conditions and distinct lists, updating on selection', () => {
    const config = markupConfig()
    config.data = [
      { State: 'AL', Value: 10, Group: 'A' },
      { State: 'Alabama', Value: 20, Group: 'B' },
      { State: 'AL', Value: 20, Group: 'B' },
      { State: 'AK', Value: 30, Group: 'B' }
    ]
    const { container } = render(<LocationSelector config={config} runtimeData={data} />)
    const select = screen.getByRole('combobox')
    fireEvent.change(select, { target: { value: 'US-AL' } })
    const info = container.querySelector('.map-location-selector__information')!
    expect(info.querySelector('strong')).toHaveTextContent('10 and 20')
    expect(info).toHaveTextContent('10 and 20 | 20 | | Source note')
    fireEvent.change(select, { target: { value: 'US-AK' } })
    expect(info).toHaveTextContent('30 | 30 | | Source note')
    fireEvent.change(select, { target: { value: '' } })
    expect(container.querySelector('.map-location-selector__information')).toBeNull()
  })

  it('uses supplied frame rows and active runtime filters, resetting an unavailable selection', () => {
    const config = markupConfig()
    config.data = [{ State: 'AL', Value: 999, Group: 'B' }]
    const frame = [
      { State: 'AL', Value: 10, Group: 'A' },
      { State: 'AL', Value: 20, Group: 'B' }
    ]
    const filters = [{ columnName: 'Group', active: 'B' }] as any
    const { container, rerender } = render(
      <LocationSelector config={config} runtimeData={data} sourceData={frame} runtimeFilters={filters} />
    )
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AL' } })
    expect(container.querySelector('strong')).toHaveTextContent('20')
    rerender(
      <LocationSelector
        config={config}
        runtimeData={data}
        sourceData={[{ State: 'AL', Value: 40, Group: 'B' }]}
        runtimeFilters={filters}
      />
    )
    expect(container.querySelector('strong')).toHaveTextContent('40')
    rerender(
      <LocationSelector config={config} runtimeData={{ 'US-AK': {} }} sourceData={[]} runtimeFilters={filters} />
    )
    expect(screen.getByRole('combobox')).toHaveValue('')
    expect(container.querySelector('.map-location-selector__information')).toBeNull()
  })
})

describe('selector built-in location variable', () => {
  it.each([false, true])('reserves {{location}} in information with variables enabled=%s', enabled => {
    const config = makeConfig()
    config.enableMarkupVariables = enabled
    config.markupVariables = [{ name: 'location', tag: '{{location}}', columnName: 'Wrong', conditions: [] }]
    config.data = [
      { State: 'AL', Wrong: 'Wrong name' },
      { State: 'AK', Wrong: 'Wrong name' }
    ]
    config.locationSelector.information = '<strong>{{location}}</strong>'
    const { container } = render(<LocationSelector config={config} runtimeData={data} />)
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AL' } })
    expect(container.querySelector('strong')).toHaveTextContent('Alabama')
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AK' } })
    expect(container.querySelector('strong')).toHaveTextContent('Alaska')
  })

  it('inserts display names literally into rich text without interpreting HTML or other variable tags', () => {
    const config = makeConfig()
    config.columns.geo.displayColumn = 'Display'
    config.enableMarkupVariables = true
    config.markupVariables = [{ name: 'value', tag: '{{value}}', columnName: 'Value', conditions: [] }]
    config.data = [{ State: 'AL', Value: 'resolved' }]
    config.locationSelector.information = '<em>{{location}}</em> {{value}}'
    const display = '<b>$& {{value}} & "quoted"</b>'
    const { container } = render(
      <LocationSelector config={config} runtimeData={{ 'US-AL': { URL: '/al', Display: display } }} />
    )
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AL' } })
    expect(container.querySelector('em')?.textContent).toBe(display)
    expect(container.querySelector('.map-location-selector__information b')).toBeNull()
    expect(container.querySelector('.map-location-selector__information')).toHaveTextContent('resolved')
  })

  it('uses first-value URL variables in authored anchors', () => {
    const config = makeConfig('_blank', { information: '<a href="{{url}}" target="_self">{{location}}</a>' })
    config.enableMarkupVariables = true
    config.markupVariables = [
      { name: 'url', tag: '{{url}}', columnName: 'URL', selectionMode: 'first', conditions: [] }
    ]
    config.data = [
      { State: 'AL', URL: '/first' },
      { State: 'Alabama', URL: '/second' }
    ]
    render(<LocationSelector config={config} runtimeData={data} />)
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AL' } })
    expect(screen.getByRole('link')).toHaveAttribute('href', '/first')
    expect(screen.getByRole('link')).toHaveAttribute('target', '_self')
  })
})
