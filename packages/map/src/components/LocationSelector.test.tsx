import { fireEvent, render, screen } from '@testing-library/react'
import LocationSelector from './LocationSelector'
import { createNewMapConfig } from '../helpers/createNewMapConfig'

const makeConfig = (target = '_self') =>
  createNewMapConfig({
    general: { type: 'data', geoType: 'us', navigationTarget: target },
    columns: { geo: { name: 'State' }, navigate: { name: 'URL' } },
    locationLinks: { selector: { enabled: true } }
  } as any)
const data = { 'US-AL': { URL: '/al' }, 'US-AK': {} }

describe('LocationSelector', () => {
  it.each([
    [undefined, 'Learn more about Custom Alabama »'],
    ['Read about {location}; visit {location} »', 'Read about Custom Alabama; visit Custom Alabama »'],
    ['Read report', 'Read report']
  ])('renders link text %j using the displayed location name', (linkText, expected) => {
    const config = makeConfig()
    config.locationLinks.selector.linkText = linkText
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
    expect(screen.getByText('No link available for this location.')).toBeInTheDocument()
    rerender(view({} as any))
    expect(select).toHaveValue('')
    expect(select).toBeDisabled()
    expect(screen.queryByText('No link available for this location.')).toBeNull()
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
    'suppresses the selector without a URL column (%j) and restores saved settings',
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
      expect(container.querySelector('.map-location-selector')).toBeNull()
      expect(screen.queryByRole('combobox')).toBeNull()
      expect(screen.queryByRole('link')).toBeNull()
      expect(screen.getByText('Map')).toBeInTheDocument()
      expect(config.locationLinks).toEqual(savedSettings)
      config.columns.navigate.name = 'URL'
      rerender(view())
      expect(screen.getByLabelText('Choose a place')).toBeInTheDocument()
      expect(screen.getByRole('option', { name: '- Select -' })).toHaveValue('')
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
    expect(screen.getAllByText('No link available for this location.')).toHaveLength(1)
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
    expect(screen.getByText('No link available for this location.')).toBeInTheDocument()
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AL' } })
    expect(screen.getByRole('link')).toHaveTextContent('Opens in a new window')
  })
})

describe('selector tooltip information', () => {
  const tooltipConfig = () => {
    const config = makeConfig('_blank')
    config.locationLinks.selector.showTooltipInformation = true
    config.columns.geo.displayColumn = 'Display'
    config.columns.primary = {
      ...config.columns.primary,
      name: 'Rate',
      label: 'Reported rate',
      tooltip: true,
      useCommas: true,
      roundToPlace: '1',
      prefix: '$',
      suffix: ' cases'
    }
    config.columns.extra = { name: 'Hidden', label: 'Hidden field', tooltip: false } as any
    return config
  }
  const rows = {
    'US-AL': { State: 'AL', Display: 'Custom Alabama', Rate: 1234.56, Hidden: 'secret', URL: '/al' },
    'US-AK': { State: 'AK', Rate: -1 }
  }

  it.each([undefined, false])('keeps link-only output for %j', showTooltipInformation => {
    const config = tooltipConfig()
    config.locationLinks.selector.showTooltipInformation = showTooltipInformation
    const { container } = render(<LocationSelector config={config} runtimeData={rows} />)
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AL' } })
    expect(container.querySelector('.map-location-selector__information')).toBeNull()
    expect(screen.getAllByRole('link')).toHaveLength(1)
  })

  it('uses configured tooltip formatting, display overrides and special classes before the result', () => {
    const config = tooltipConfig()
    config.legend.specialClasses = [{ key: 'Rate', value: '-1', label: 'Suppressed for privacy' }] as any
    const { container } = render(<LocationSelector config={config} runtimeData={rows} />)
    const select = screen.getByRole('combobox')
    expect(container.querySelector('[aria-live]')).toBeEmptyDOMElement()
    select.focus()
    fireEvent.change(select, { target: { value: 'US-AL' } })
    const info = container.querySelector('.map-location-selector__information')!
    expect(info).not.toHaveTextContent('State: Custom Alabama')
    expect(info).toHaveTextContent('Reported rate: $1,234.6 cases')
    expect(info).not.toHaveTextContent('secret')
    expect(info).not.toHaveTextContent('Hidden field')
    expect(screen.getAllByRole('link')).toHaveLength(1)
    expect(info.compareDocumentPosition(screen.getByRole('link')) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(info.querySelector('a, button, input, select, [tabindex]')).toBeNull()
    expect(select).toHaveFocus()
    fireEvent.change(select, { target: { value: 'US-AK' } })
    expect(info).not.toHaveTextContent('State: Alaska')
    expect(info).toHaveTextContent('Reported rate: Suppressed for privacy')
    expect(screen.getByText('No link available for this location.')).toBeInTheDocument()
    expect(screen.queryByRole('link')).toBeNull()
    fireEvent.change(select, { target: { value: '' } })
    expect(container.querySelector('[aria-live]')).toBeEmptyDOMElement()
  })

  it('refreshes current rows and tooltip settings, and preserves selection when information is toggled', () => {
    const config = tooltipConfig()
    const { rerender, container } = render(<LocationSelector config={config} runtimeData={rows} />)
    const select = screen.getByRole('combobox')
    fireEvent.change(select, { target: { value: 'US-AL' } })
    const updated = { ...rows, 'US-AL': { ...rows['US-AL'], Rate: 98.76 } }
    config.columns.primary.label = 'Current rate'
    rerender(<LocationSelector config={config} runtimeData={updated} />)
    expect(container.querySelector('.map-location-selector__information')).toHaveTextContent(
      'Current rate: $98.8 cases'
    )
    expect(select).toHaveValue('US-AL')
    config.columns.primary.tooltip = false
    rerender(<LocationSelector config={config} runtimeData={updated} />)
    expect(container.querySelector('.map-location-selector__information')).toBeNull()
    expect(screen.getByRole('link')).toBeInTheDocument()
    config.locationLinks.selector.enabled = false
    rerender(<LocationSelector config={config} runtimeData={updated} />)
    expect(container).toBeEmptyDOMElement()
    expect(config.locationLinks.selector.showTooltipInformation).toBe(true)
    config.locationLinks.selector.enabled = true
    rerender(<LocationSelector config={config} runtimeData={updated} />)
    expect(select).toHaveValue('US-AL')
    expect(container.querySelector('.map-location-selector__information')).toBeNull()
    config.locationLinks.selector.showTooltipInformation = false
    rerender(<LocationSelector config={config} runtimeData={updated} />)
    expect(container.querySelector('.map-location-selector__information')).toBeNull()
    expect(screen.getByRole('combobox')).toHaveValue('US-AL')
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank')
    config.locationLinks.selector.showTooltipInformation = true
    config.columns.navigate.name = ''
    rerender(<LocationSelector config={config} runtimeData={updated} />)
    expect(container).toBeEmptyDOMElement()
    expect(config.locationLinks.selector.showTooltipInformation).toBe(true)
  })

  it('keeps information with the default no-link message', () => {
    const config = tooltipConfig()
    config.locale = 'es'
    render(<LocationSelector config={config} runtimeData={rows} />)
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AK' } })
    expect(screen.queryByText('State: Alaska')).toBeNull()
    expect(screen.getByText(/Reported rate:/)).toBeInTheDocument()
    expect(screen.getByText('No link available for this location.')).toBeInTheDocument()
  })
})

describe('custom no-link messages', () => {
  it.each(['A report is not yet available.', '', '<b>Coming soon</b>'])(
    'renders %j as plain text without resetting selection',
    message => {
      const config = makeConfig()
      config.locationLinks.selector.showTooltipInformation = true
      config.columns.primary = { ...config.columns.primary, name: 'Rate', label: 'Coverage', tooltip: true }
      const rows = { 'US-AK': { Rate: 40 } }
      const { container, rerender } = render(<LocationSelector config={config} runtimeData={rows} />)
      const select = screen.getByRole('combobox')
      fireEvent.change(select, { target: { value: 'US-AK' } })
      config.locationLinks.selector.noLinkMessage = message
      rerender(<LocationSelector config={config} runtimeData={rows} />)
      expect(select).toHaveValue('US-AK')
      expect(container.querySelector('.map-location-selector__information')).toHaveTextContent('Coverage: 40')
      expect(screen.queryByText('No link available for this location.')).toBeNull()
      expect(container.querySelector('.map-location-selector__result > span')?.textContent ?? '').toBe(message)
      expect(container.querySelector('.map-location-selector__result b')).toBeNull()
      expect(screen.queryByRole('link')).toBeNull()
    }
  )

  it('keeps authored messages unchanged by locale and hides an empty link-only result', () => {
    const config = makeConfig()
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
