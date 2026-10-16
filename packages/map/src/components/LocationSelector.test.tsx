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
  it('starts unselected, keeps focus, updates URLs, preserves no-link selections and reconciles removals', () => {
    const config = makeConfig()
    const view = (runtimeData = data) => (
      <>
        <LocationSelector config={config} runtimeData={runtimeData} />

        <div data-testid='map'>Map</div>
      </>
    )
    const { rerender } = render(view())
    const select = screen.getByLabelText('Select a location')
    expect(screen.queryByRole('link')).toBeNull()
    expect(screen.getByRole('option', { name: 'Select a location' })).toHaveValue('')
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
      expect(screen.getByRole('option', { name: 'Choose a place' })).toHaveValue('')
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

describe('selector target and localization', () => {
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
  it('localizes system messages for Spanish geography displays', () => {
    const config = makeConfig('_blank')
    config.locale = 'es'
    render(
      <>
        <LocationSelector config={config} runtimeData={data} />

        <div>Map</div>
      </>
    )
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AK' } })
    expect(screen.getByText('No hay enlace disponible para esta ubicación.')).toBeInTheDocument()
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'US-AL' } })
    expect(screen.getByRole('link')).toHaveTextContent('Se abre en una ventana nueva')
  })
})
