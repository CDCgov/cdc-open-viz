import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import CdcMapComponent from '../CdcMapComponent'

vi.hoisted(() => {
  Object.defineProperty((globalThis as any).HTMLCanvasElement.prototype, 'getContext', {
    configurable: true,
    value: () => ({
      measureText: (text = '') => ({ width: String(text).length * 8 })
    })
  })
})

vi.mock('../hooks/useResizeObserver', () => ({
  default: () => ({
    resizeObserver: null,
    dimensions: [640, 480],
    currentViewport: 'lg',
    vizViewport: 'lg',
    outerContainerRef: () => {},
    container: null
  })
}))

vi.mock('../components/UsaMap', async () => {
  const React = await vi.importActual<typeof import('react')>('react')
  const stub = (name: string) => () => React.createElement('div', { 'data-testid': name })

  return {
    default: {
      State: stub('mock-usa-state'),
      Region: stub('mock-usa-region'),
      County: stub('mock-usa-county'),
      SingleState: stub('mock-usa-single-state')
    }
  }
})

vi.mock('../components/WorldMap', async () => {
  const React = await vi.importActual<typeof import('react')>('react')

  return {
    default: () => React.createElement('div', { 'data-testid': 'mock-world-map' })
  }
})

const buildConfig = (overrides: any = {}) =>
  ({
    type: 'map',
    data: [
      { Country: 'Canada', Rate: 10 },
      { Country: 'Mexico', Rate: 20 }
    ],
    general: {
      title: 'Logo Test Map',
      geoType: 'world',
      type: 'data',
      showTitle: true,
      ...overrides.general
    },
    columns: {
      geo: { name: 'Country', label: 'Location', dataTable: true },
      primary: { name: 'Rate', label: 'Rate', dataTable: true, prefix: '', suffix: '' },
      navigate: { name: '' },
      latitude: { name: '' },
      longitude: { name: '' }
    },
    legend: {
      type: 'equalnumber',
      numberOfItems: 3,
      specialClasses: [],
      unified: false
    },
    table: {
      forceDisplay: false,
      expanded: false,
      download: false,
      label: 'Data Table',
      indexLabel: '',
      showNonGeoData: false
    },
    filters: []
  } as any)

const renderMap = (props: any = {}) =>
  render(
    <CdcMapComponent
      config={buildConfig(props.configOverrides)}
      interactionLabel='map-logo-test'
      navigationHandler={vi.fn()}
      setSharedFilter={vi.fn()}
      setSharedFilterValue={vi.fn()}
      {...props}
    />
  )

describe('CdcMapComponent logo prop', () => {
  it('renders the passed-in logo image on a data map', async () => {
    const { container } = renderMap({ logo: 'cdc-logo.svg' })

    await waitFor(() => {
      const logoImg = container.querySelector('img.map-logo') as HTMLImageElement
      expect(logoImg).toBeInTheDocument()
      expect(logoImg.getAttribute('src')).toBe('cdc-logo.svg')
    })
  })

  it('does not render a logo image when no logo is passed', async () => {
    const { container, findByTestId } = renderMap()

    await findByTestId('mock-world-map')

    expect(container.querySelector('img.map-logo')).not.toBeInTheDocument()
  })
})
