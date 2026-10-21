import { fireEvent, render, screen } from '@testing-library/react'
import LocationSelector from './LocationSelector'
import { createNewMapConfig } from '../helpers/createNewMapConfig'

const makeConfig = (target = '_self', selector = {}) =>
  createNewMapConfig({
    general: { type: 'data', geoType: 'us', navigationTarget: target },
    columns: { geo: { name: 'State' }, navigate: { name: 'URL' } },
    locationLinks: { selector: { enabled: true, ...selector } }
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

  it.each([
    [undefined, 'Learn more about Custom Alabama »'],
    ['Read about {{location}}; visit {{location}} »', 'Read about Custom Alabama; visit Custom Alabama »'],
    ['Read report', 'Read report'],
    ['Read about {location}', 'Read about {location}']
  ])('renders link text %j using the displayed location name', (linkText, expected) => {
    const config = makeConfig('_self', { linkText })
    config.columns.geo.displayColumn = 'Display'
    render(<LocationSelector config={config} runtimeData={{ 'US-AL': { URL: '/al', Display: 'Custom Alabama' } }} />)
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AL' } })
    expect(screen.getByRole('link')).toHaveTextContent(expected)
  })
  it('inserts display names literally without interpreting replacement patterns or HTML', () => {
    const config = makeConfig()
    config.columns.geo.displayColumn = 'Display'
    render(
      <LocationSelector config={config} runtimeData={{ 'US-AL': { URL: '/al', Display: '<b>$& {location}</b>' } }} />
    )
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AL' } })
    expect(screen.getByRole('link')).toHaveTextContent('Learn more about <b>$& {location}</b> »')
    expect(screen.getByRole('link').querySelector('b')).toBeNull()
  })
  it.each(['Choose an option', ''])('uses a custom placeholder (%j) independently of the label', placeholder => {
    const config = makeConfig()
    config.locationLinks.selector.placeholder = placeholder
    const { rerender } = render(<LocationSelector config={config} runtimeData={data} />)
    expect(screen.getByLabelText('Select a location for more information')).toHaveValue('')
    expect(screen.getByRole('option', { name: placeholder })).toHaveValue('')
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AL' } })
    config.locationLinks.selector.placeholder = 'Pick one'
    rerender(<LocationSelector config={config} runtimeData={data} />)
    expect(screen.getByRole('combobox')).toHaveValue('US-AL')
    expect(screen.getByRole('option', { name: 'Pick one' })).toHaveValue('')
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '' } })
    expect(screen.queryByRole('link')).toBeNull()
  })
  it('starts unselected, keeps focus, updates URLs, preserves no-link selections and reconciles removals', () => {
    const config = makeConfig()
    const view = (runtimeData = data) => (
      <>
        <LocationSelector config={config} runtimeData={runtimeData} />

        <div data-testid='map'>Map</div>
      </>
    )
    const { rerender } = render(view())
    const select = screen.getByLabelText('Select a location for more information')
    expect(screen.queryByRole('link')).toBeNull()
    expect(screen.getByRole('option', { name: '- Select -' })).toHaveValue('')
    select.focus()
    fireEvent.change(select, { target: { value: 'US-AL' } })
    expect(select).toHaveFocus()
    expect(screen.getByRole('link')).toHaveAttribute('href', `${window.location.origin}/al`)
    rerender(view({ 'US-AL': { URL: '/updated' }, 'US-AK': {} }))
    expect(screen.getByRole('combobox')).toBe(select)
    expect(screen.getByRole('link')).toHaveAttribute('href', `${window.location.origin}/updated`)
    rerender(view({ 'US-AL': {} as any, 'US-AK': {} }))
    expect(select).toHaveValue('US-AL')
    expect(screen.getByText('No link available for Alabama.')).toBeInTheDocument()
    rerender(view({} as any))
    expect(select).toHaveValue('')
    expect(select).toBeDisabled()
    expect(screen.queryByText('No link available for Alabama.')).toBeNull()
  })
  it.each(['_self', '_blank'])('provides semantic target and messaging for %s', target => {
    render(
      <>
        <LocationSelector config={makeConfig(target)} runtimeData={data} />

        <div>Map</div>
      </>
    )
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AL' } })
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', target)
    expect(link.textContent.includes('Opens in a new window')).toBe(target === '_blank')
    if (target === '_blank') expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
  it.each(['', '   ', undefined])(
    'keeps the selector and selection without a URL column (%j), showing no link or message',
    name => {
      const config = makeConfig('_blank')
      config.locationLinks.selector.label = 'Choose a place'
      const savedSettings = structuredClone(config.locationLinks)
      const view = () => (
        <>
          <LocationSelector config={config} runtimeData={data} />

          <div>Map</div>
        </>
      )
      const { rerender, container } = render(view())
      fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AL' } })
      config.columns.navigate.name = name
      rerender(view())
      expect(container.querySelector('.map-location-selector')).toBeInTheDocument()
      expect(screen.getByRole('combobox')).toHaveValue('US-AL')
      expect(screen.queryByText('No link available for Alaska.')).toBeNull()
      expect(screen.queryByRole('link')).toBeNull()
      expect(screen.getByText('Map')).toBeInTheDocument()
      expect(config.locationLinks).toEqual(savedSettings)
      config.columns.navigate.name = 'URL'
      rerender(view())
      expect(screen.getByLabelText('Choose a place')).toBeInTheDocument()
      expect(screen.getByRole('combobox')).toHaveValue('US-AL')
      expect(screen.getByRole('link')).toHaveAttribute('href', `${window.location.origin}/al`)
      expect(config.locationLinks).toEqual(savedSettings)
    }
  )
  it('keeps multiple maps independent with unique labels', () => {
    const config = makeConfig()
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
    expect(screen.getAllByText('No link available for Alaska.')).toHaveLength(1)
  })
})

describe('selector native navigation', () => {
  it.each(['_self', '_blank'])('leaves native link navigation intact for %s', target => {
    render(<LocationSelector config={makeConfig(target)} runtimeData={data} />)
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AL' } })
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', `${window.location.origin}/al`)
    expect(link).toHaveAttribute('target', target)
    const observeClick = vi.fn((event: MouseEvent) => {
      const wasPrevented = event.defaultPrevented
      // Cancel in the test to avoid following the URL in jsdom.
      event.preventDefault()
      expect(wasPrevented).toBe(false)
    })
    document.addEventListener('click', observeClick, { once: true })
    fireEvent.click(link)
    expect(observeClick).toHaveBeenCalledOnce()
  })
  it('keeps default messages unchanged by the map locale', () => {
    const config = makeConfig('_blank')
    config.locale = 'es'
    render(
      <>
        <LocationSelector config={config} runtimeData={data} />

        <div>Map</div>
      </>
    )
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AK' } })
    expect(screen.getByText('No link available for Alaska.')).toBeInTheDocument()
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AL' } })
    expect(screen.getByRole('link')).toHaveTextContent('Opens in a new window')
  })
})

describe('authored location information', () => {
  it.each(['us', 'world'])('renders rich text only after selection without a URL column on %s maps', geoType => {
    const config = makeConfig()
    config.general.geoType = geoType as any
    config.columns.navigate.name = ''
    config.locationLinks.selector.information = '<strong>Report</strong><ul><li>Details</li></ul>'
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
    config.locationLinks.selector.information = '<em>Updated</em>'
    rerender(<LocationSelector config={config} runtimeData={{ [id]: {} }} />)
    expect(info.querySelector('em')).toHaveTextContent('Updated')
    expect(screen.getByRole('combobox')).toHaveValue(id)
    config.locationLinks.selector.information = ''
    rerender(<LocationSelector config={config} runtimeData={{ [id]: {} }} />)
    expect(container.querySelector('.map-location-selector__information')).toBeNull()
  })
})

describe('custom no-link messages', () => {
  it.each(['A report is not yet available.', '', '<b>Coming soon</b>'])(
    'renders %j as plain text without resetting selection',
    message => {
      const config = makeConfig()
      config.locationLinks.selector.information = 'Coverage: 40'
      config.columns.primary = { ...config.columns.primary, name: 'Rate', label: 'Coverage', tooltip: true }
      const rows = { 'US-AK': { Rate: 40 } }
      const { container, rerender } = render(<LocationSelector config={config} runtimeData={rows} />)
      const select = screen.getByRole('combobox')
      fireEvent.change(select, { target: { value: 'US-AK' } })
      config.locationLinks.selector.noLinkMessage = message
      rerender(<LocationSelector config={config} runtimeData={rows} />)
      expect(select).toHaveValue('US-AK')
      expect(container.querySelector('.map-location-selector__information')).toHaveTextContent('Coverage: 40')
      expect(screen.queryByText('No link available for Alaska.')).toBeNull()
      expect(container.querySelector('.map-location-selector__result > span')?.textContent ?? '').toBe(message)
      expect(container.querySelector('.map-location-selector__result b')).toBeNull()
      expect(screen.queryByRole('link')).toBeNull()
    }
  )

  it('keeps authored messages unchanged by locale and hides an empty link-only result', () => {
    const config = makeConfig()
    config.locationLinks.selector.information = ''
    config.locale = 'es'
    config.locationLinks.selector.noLinkMessage = 'Report pending.'
    const { container, rerender } = render(<LocationSelector config={config} runtimeData={data} />)
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AK' } })
    expect(screen.getByText('Report pending.')).toBeInTheDocument()
    config.locationLinks.selector.noLinkMessage = ''
    rerender(<LocationSelector config={config} runtimeData={data} />)
    expect(container.querySelector('[aria-live]')).toBeEmptyDOMElement()
  })
})

describe('location-scoped markup variables', () => {
  const markupConfig = () => {
    const config = makeConfig()
    config.enableMarkupVariables = true
    config.locationLinks.selector.information = '<strong>{{values}}</strong> | {{first}} | {{missing}} | {{note}}'
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
  it.each([false, true])('reserves {{location}} in all three fields with variables enabled=%s', enabled => {
    const config = makeConfig()
    config.enableMarkupVariables = enabled
    config.markupVariables = [{ name: 'location', tag: '{{location}}', columnName: 'Wrong', conditions: [] }]
    config.data = [
      { State: 'AL', Wrong: 'Wrong name' },
      { State: 'AK', Wrong: 'Wrong name' }
    ]
    config.locationLinks.selector.information = '<strong>{{location}}</strong>'
    config.locationLinks.selector.linkText = '{{location}} / {{location}}'
    config.locationLinks.selector.noLinkMessage = 'No report: {{location}}'
    const { container } = render(<LocationSelector config={config} runtimeData={data} />)
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AL' } })
    expect(container.querySelector('strong')).toHaveTextContent('Alabama')
    expect(screen.getByRole('link')).toHaveTextContent('Alabama / Alabama')
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AK' } })
    expect(container.querySelector('strong')).toHaveTextContent('Alaska')
    expect(screen.getByText('No report: Alaska')).toBeInTheDocument()
  })

  it('inserts display names literally into rich text without interpreting HTML or other variable tags', () => {
    const config = makeConfig()
    config.columns.geo.displayColumn = 'Display'
    config.enableMarkupVariables = true
    config.markupVariables = [{ name: 'value', tag: '{{value}}', columnName: 'Value', conditions: [] }]
    config.data = [{ State: 'AL', Value: 'resolved' }]
    config.locationLinks.selector.information = '<em>{{location}}</em> {{value}}'
    config.locationLinks.selector.linkText = '{{location}}'
    const display = '<b>$& {{value}} & "quoted"</b>'
    const { container } = render(
      <LocationSelector config={config} runtimeData={{ 'US-AL': { URL: '/al', Display: display } }} />
    )
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AL' } })
    expect(container.querySelector('em')?.textContent).toBe(display)
    expect(container.querySelector('.map-location-selector__information b')).toBeNull()
    expect(container.querySelector('.map-location-selector__information')).toHaveTextContent('resolved')
    expect(screen.getByRole('link').textContent).toBe(display)
    expect(screen.getByRole('link').querySelector('b')).toBeNull()
  })

  it('processes ordinary variables in link and fallback text while keeping HTML literal', () => {
    const config = makeConfig()
    config.enableMarkupVariables = true
    config.markupVariables = [{ name: 'value', tag: '{{value}}', columnName: 'Value', conditions: [] }]
    config.data = [
      { State: 'AL', Value: '<b>10</b>' },
      { State: 'AK', Value: '20' }
    ]
    config.locationLinks.selector.linkText = '<em>{{location}}</em>: {{value}}'
    config.locationLinks.selector.noLinkMessage = '<em>{{location}}</em>: {{value}}'
    const { container } = render(<LocationSelector config={config} runtimeData={data} />)
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AL' } })
    expect(screen.getByRole('link')).toHaveTextContent('<em>Alabama</em>: <b>10</b>')
    expect(screen.getByRole('link').querySelector('em, b')).toBeNull()
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AK' } })
    expect(container.querySelector('.map-location-selector__result > span')?.textContent).toBe('<em>Alaska</em>: 20')
    expect(container.querySelector('.map-location-selector__result em')).toBeNull()
  })
})
