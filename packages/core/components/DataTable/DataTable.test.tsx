import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import DataTable from './DataTable'

vi.mock('@cdc/core/components/ErrorBoundary', () => ({
  default: ({ children }) => <>{children}</>
}))

vi.mock('@cdc/core/components/MediaControls', () => ({
  default: {
    Section: ({ children }) => <div>{children}</div>,
    Link: () => null,
    DownloadLink: () => null
  }
}))

vi.mock('../DownloadButton', () => ({
  default: () => null
}))

describe('DataTable search', () => {
  it('filters map rows by displayed geo label text', () => {
    const runtimeData = {
      AZ: { geo: 'AZ', value: '10' },
      CA: { geo: 'CA', value: '20' }
    }

    const config = {
      type: 'map',
      visualizationType: 'Map',
      general: { geoType: 'us', type: 'map' },
      columns: {
        geo: { name: 'geo', label: 'Location', dataTable: true },
        value: { name: 'value', label: 'Value', dataTable: true, prefix: '', suffix: '', useCommas: false }
      },
      legend: { specialClasses: [] },
      table: {
        label: 'Data Table',
        search: true,
        searchPlaceholder: 'Filter...',
        expanded: true,
        collapsible: false,
        showDownloadLinkBelow: false,
        download: false,
        indexLabel: '',
        cellMinWidth: 0
      },
      runtime: { uniqueId: 'test-map' },
      preliminaryData: []
    } as any

    render(
      <DataTable
        config={config}
        columns={config.columns}
        rawData={Object.values(runtimeData)}
        runtimeData={runtimeData as any}
        expandDataTable={true}
        tableTitle='Data Table'
        viewport='lg'
        tabbingId='test-data-table'
        displayGeoName={row => (row === 'AZ' ? 'Arizona' : row === 'CA' ? 'California' : row)}
        formatLegendLocation={row => row}
        applyLegendToRow={() => ['#000']}
        getPatternForRow={() => null}
      />
    )

    expect(screen.getByText('Arizona')).toBeInTheDocument()
    expect(screen.getByText('California')).toBeInTheDocument()

    fireEvent.change(screen.getByRole('searchbox', { name: 'Filter table rows' }), { target: { value: 'Ar' } })

    expect(screen.getByText('Arizona')).toBeInTheDocument()
    expect(screen.queryByText('California')).not.toBeInTheDocument()
  })

  it('filters chart rows by formatted display values', () => {
    const runtimeData = [
      { category: 'Black', rate: 29 },
      { category: 'White', rate: 8 }
    ]

    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      general: { showMissingDataLabel: true },
      columns: {
        category: { name: 'category', label: 'Category', dataTable: true },
        rate: {
          name: 'rate',
          label: 'Rate',
          dataTable: true,
          prefix: '',
          suffix: '%',
          commas: false,
          roundToPlace: 0
        }
      },
      xAxis: { dataKey: 'category', type: 'categorical' },
      yAxis: {},
      dataFormat: {
        abbreviated: false,
        bottomAbbreviated: false,
        bottomPrefix: '',
        bottomRoundTo: 0,
        bottomSuffix: '',
        bottomComas: false,
        commas: false,
        prefix: '',
        preserveOriginalDecimals: false,
        rightPrefix: '',
        rightRoundTo: 0,
        rightSuffix: '',
        roundTo: 0,
        suffix: '%'
      },
      table: {
        label: 'Data Table',
        search: true,
        searchPlaceholder: 'Filter...',
        expanded: true,
        collapsible: false,
        showDownloadLinkBelow: false,
        download: false,
        showVertical: true,
        indexLabel: '',
        cellMinWidth: 0
      },
      runtime: { series: [{ dataKey: 'rate' }] },
      preliminaryData: []
    } as any

    render(
      <DataTable
        config={config}
        columns={config.columns}
        rawData={runtimeData}
        runtimeData={runtimeData as any}
        expandDataTable={true}
        tableTitle='Data Table'
        viewport='lg'
        tabbingId='test-chart-data-table'
      />
    )

    expect(screen.getByText('29%')).toBeInTheDocument()
    expect(screen.getByText('8%')).toBeInTheDocument()

    fireEvent.change(screen.getByRole('searchbox', { name: 'Filter table rows' }), { target: { value: '29%' } })

    expect(screen.getByText('29%')).toBeInTheDocument()
    expect(screen.queryByText('8%')).not.toBeInTheDocument()
  })
})
