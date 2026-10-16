import React from 'react'
import { render, screen, within, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import CdcMapComponent from '../CdcMapComponent'

Object.defineProperty((globalThis as any).HTMLCanvasElement.prototype, 'getContext', {
  configurable: true,
  value: () => ({
    measureText: (text = '') => ({ width: String(text).length * 8 })
  })
})

vi.mock('../components/MapContainer', async () => {
  const React = await vi.importActual<typeof import('react')>('react')

  return {
    default: () => React.createElement('div', { 'data-testid': 'mock-map-container' })
  }
})

describe('CdcMapComponent rendered data table', () => {
  it('renders rows and bubble columns for the editor-created US state bubble layer flow', async () => {
    const data = [
      { STATE: 'Overall', Rate: 55, Location: 'Vehicle' },
      { STATE: 'Alabama', Rate: 130, Location: 'Vehicle' },
      { STATE: 'California', Rate: 30, Location: 'Home' }
    ]

    render(
      <CdcMapComponent
        config={
          {
            type: 'map',
            data,
            general: {
              title: 'US State Bubble Table',
              geoType: 'us',
              type: 'data',
              showTitle: true,
              showSidebar: true,
              allowMapZoom: true,
              displayStateLabels: false,
              hideGeoColumnInTooltip: false,
              hidePrimaryColumnInTooltip: false
            },
            columns: {
              geo: { name: 'FIPS Codes', label: 'Location', tooltip: false, dataTable: true },
              primary: {
                name: '',
                label: 'Rate',
                dataTable: true,
                tooltip: true,
                prefix: '',
                suffix: '',
                roundToPlace: 0
              },
              navigate: { name: '' },
              latitude: { name: '' },
              longitude: { name: '' }
            },
            bubble: {
              layers: [
                {
                  minBubbleSize: 4,
                  maxBubbleSize: 28,
                  extraBubbleBorder: false,
                  showBubbleZeros: false,
                  columns: {
                    geo: { name: 'STATE' },
                    primary: { name: 'Rate' },
                    size: { name: 'Rate' }
                  },
                  legend: {
                    size: { show: true }
                  }
                }
              ]
            },
            legend: {
              type: 'equalnumber',
              numberOfItems: 3,
              specialClasses: [],
              unified: false,
              position: 'top',
              style: 'gradient',
              descriptions: {}
            },
            table: {
              forceDisplay: true,
              expanded: true,
              download: false,
              label: 'Data Table',
              indexLabel: '',
              showNonGeoData: false,
              showDownloadLinkBelow: true,
              wrapColumns: false,
              collapsible: false
            },
            filters: [],
            runtime: { editorErrorMessage: [] },
            map: { layers: [], patterns: [] },
            visual: { border: false, additionalCityStyles: [] },
            tooltips: { appearanceType: 'hover' }
          } as any
        }
        datasets={{} as any}
        isDashboard={false}
        interactionLabel='rendered-bubble-table-test'
        navigationHandler={vi.fn()}
        setSharedFilter={vi.fn()}
        setSharedFilterValue={vi.fn()}
      />
    )

    const table = await screen.findByRole('table')

    await waitFor(() => {
      expect(within(table).queryByText('No Data')).not.toBeInTheDocument()
      expect(within(table).getByText('Alabama')).toBeInTheDocument()
    })

    expect(within(table).getByText('California')).toBeInTheDocument()
    expect(within(table).getAllByRole('columnheader', { name: /Location/ })).toHaveLength(1)
    expect(within(table).getByRole('columnheader', { name: /Rate/ })).toBeInTheDocument()
    expect(within(table).queryByText('Overall')).not.toBeInTheDocument()
  })
})
