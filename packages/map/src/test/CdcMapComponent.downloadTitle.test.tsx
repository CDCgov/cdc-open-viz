import React from 'react'
import { render, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import CdcMapComponent from '../CdcMapComponent'
import { type MapConfig } from '../types/MapConfig'

vi.hoisted(() => {
  Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
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

type ConfigOverrides = {
  general?: Partial<MapConfig['general']>
}

// This fixture intentionally supplies only the fields exercised by the test;
// CdcMapComponent backfills the remaining legacy defaults at runtime.
const buildConfig = (overrides: ConfigOverrides = {}): MapConfig =>
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

type RenderMapOptions = {
  configOverrides?: ConfigOverrides
}

const renderMap = ({ configOverrides }: RenderMapOptions = {}) =>
  render(
    <CdcMapComponent
      config={buildConfig(configOverrides)}
      interactionLabel='map-download-title-test'
      navigationHandler={vi.fn()}
      setSharedFilter={vi.fn()}
      setSharedFilterValue={vi.fn()}
    />
  )

describe('CdcMapComponent download title', () => {
  it('keeps an opted-in hidden title offscreen and marks it for its owning map download', async () => {
    const { container } = renderMap({
      configOverrides: {
        general: {
          title: 'Hidden Download Title',
          superTitle: 'Weekly Report',
          titleStyle: 'small',
          showTitle: false,
          includeTitleInDownload: true,
          showDownloadImgButton: true
        }
      }
    })

    await screen.findByTestId('mock-world-map')

    expect(screen.queryByRole('heading', { name: 'Hidden Download Title' })).toBeNull()

    const mapShell = container.querySelector<HTMLElement>('[data-download-id]')
    const downloadTitle = container.querySelector<HTMLElement>('[data-download-only]')

    expect(mapShell).not.toBeNull()
    expect(downloadTitle).not.toBeNull()

    if (!mapShell || !downloadTitle) {
      throw new Error('Expected the map shell and hidden download title')
    }

    expect(downloadTitle.hasAttribute('hidden')).toBe(true)
    expect(mapShell.getAttribute('data-download-id')).toBe(downloadTitle.getAttribute('data-download-owner'))

    const hiddenHeading = within(downloadTitle).getByRole('heading', {
      name: 'Hidden Download Title',
      hidden: true
    })

    expect(hiddenHeading).not.toBeNull()
    expect(downloadTitle.textContent).toContain('Weekly Report')
  })
})
