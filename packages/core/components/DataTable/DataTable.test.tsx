import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import DataTable from './DataTable'

const downloadState = vi.hoisted(() => ({
  latest: [] as Record<string, unknown>[],
  fileName: ''
}))

vi.mock('@cdc/core/components/ErrorBoundary', () => ({
  default: ({ children }) => <>{children}</>
}))

vi.mock('@cdc/core/components/MediaControls', () => ({
  default: {
    Section: ({ children }) => <div>{children}</div>,
    Link: () => null,
    DownloadLink: ({ title }) => (
      <button type='button' aria-label={title}>
        {title}
      </button>
    )
  }
}))

vi.mock('../DownloadButton', () => ({
  default: ({ getRawData, fileName }) => (
    <button
      type='button'
      onClick={() => {
        downloadState.latest = getRawData()
        downloadState.fileName = fileName
      }}
    >
      Download data
    </button>
  )
}))

vi.mock('../ui/Icon', () => ({
  default: ({ display }) => <span aria-hidden='true' data-icon={display} />
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

  it('uses map-specific media download labels for map data tables', () => {
    const runtimeData = {
      AZ: { geo: 'AZ', value: '10' }
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
        search: false,
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
        tabbingId='map-download-label-data-table'
        displayGeoName={row => row}
        formatLegendLocation={row => row}
        applyLegendToRow={() => ['#000']}
        getPatternForRow={() => null}
        showDownloadImgButton={true}
        showDownloadPdfButton={true}
      />
    )

    expect(screen.getByRole('button', { name: 'Download Map as Image' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Download Map as PDF' })).toBeInTheDocument()
  })

  it('uses the map index label for full CSV download geo headers', () => {
    downloadState.latest = []
    downloadState.fileName = ''
    const runtimeData = {
      '06001': { 'FIPS Codes': '06001', Rate: '12', Site: 'Wastewater Site A' }
    }

    const config = {
      type: 'map',
      visualizationType: 'Map',
      general: { geoType: 'single-state', type: 'map' },
      columns: {
        geo: { name: 'FIPS Codes', label: 'Location', dataTable: true },
        primary: { name: 'Rate', label: 'Rate', dataTable: true, prefix: '', suffix: '', useCommas: false },
        site: { name: 'Site', label: 'Site', dataTable: true }
      },
      legend: { specialClasses: [] },
      table: {
        label: 'Data Table',
        search: false,
        expanded: true,
        collapsible: false,
        showDownloadLinkBelow: false,
        download: true,
        downloadVisibleDataOnly: false,
        indexLabel: 'Site',
        cellMinWidth: 0
      },
      runtime: { uniqueId: 'single-state-map' },
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
        tabbingId='full-download-map-data-table'
        displayGeoName={row => row}
        formatLegendLocation={() => 'Alameda County'}
        applyLegendToRow={() => ['#000']}
        getPatternForRow={() => null}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: 'Download data' }))

    expect(downloadState.latest).toEqual([{ Site: '06001', Rate: '12', 'Site (2)': 'Wastewater Site A' }])
  })

  it('uses the map index label for visible-data CSV download geo headers', () => {
    downloadState.latest = []
    downloadState.fileName = ''
    const runtimeData = {
      '06001': { 'FIPS Codes': '06001', Rate: '12', Site: 'Wastewater Site A' }
    }

    const config = {
      type: 'map',
      visualizationType: 'Map',
      general: { geoType: 'single-state', type: 'map' },
      columns: {
        geo: { name: 'FIPS Codes', label: 'Location', dataTable: true },
        primary: { name: 'Rate', label: 'Rate', dataTable: true, prefix: '', suffix: '', useCommas: false },
        site: { name: 'Site', label: 'Facility', dataTable: true }
      },
      legend: { specialClasses: [] },
      table: {
        label: 'Data Table',
        search: false,
        expanded: true,
        collapsible: false,
        showDownloadLinkBelow: false,
        download: true,
        downloadVisibleDataOnly: true,
        showFullGeoNameInCSV: true,
        indexLabel: 'Site',
        cellMinWidth: 0
      },
      runtime: { uniqueId: 'single-state-map' },
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
        tabbingId='visible-download-map-data-table'
        displayGeoName={row => row}
        formatLegendLocation={key => `County ${key}`}
        applyLegendToRow={() => ['#000']}
        getPatternForRow={() => null}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: 'Download data' }))

    expect(downloadState.latest).toEqual([
      { FullGeoName: 'County 06001', Site: 'County 06001', Rate: '12', Facility: 'Wastewater Site A' }
    ])
  })

  it('normalizes tabbingId before using it as a DOM id', () => {
    const runtimeData = {
      AZ: { geo: 'AZ', value: '10' }
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

    const { container } = render(
      <DataTable
        config={config}
        columns={config.columns}
        rawData={Object.values(runtimeData)}
        runtimeData={runtimeData as any}
        expandDataTable={true}
        tableTitle='Data Table'
        viewport='lg'
        tabbingId='#County Table/Search'
        displayGeoName={row => (row === 'AZ' ? 'Arizona' : row)}
        formatLegendLocation={row => row}
        applyLegendToRow={() => ['#000']}
        getPatternForRow={() => null}
      />
    )

    expect(container.querySelector('section')).toHaveAttribute('id', 'County-Table-Search')
    expect(screen.getByRole('searchbox', { name: 'Filter table rows' })).toHaveAttribute(
      'id',
      'County-Table-Search-search'
    )
  })

  it('filters map rows by visible non-geo values and ignores hidden map fields', () => {
    const runtimeData = {
      AZ: { geo: 'AZ', site_id: 'SITE-101', hidden_id: 'SECRET-A', value: '10' },
      CA: { geo: 'CA', site_id: 'SITE-202', hidden_id: 'SECRET-B', value: '20' }
    }

    const config = {
      type: 'map',
      visualizationType: 'Map',
      general: { geoType: 'us', type: 'map' },
      columns: {
        geo: { name: 'geo', label: 'Location', dataTable: true },
        siteId: { name: 'site_id', label: 'Site ID', dataTable: true },
        hiddenId: { name: 'hidden_id', label: 'Hidden ID', dataTable: false },
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
        tabbingId='test-map-visible-values'
        displayGeoName={row => (row === 'AZ' ? 'Arizona' : row === 'CA' ? 'California' : row)}
        formatLegendLocation={row => row}
        applyLegendToRow={() => ['#000']}
        getPatternForRow={() => null}
      />
    )

    const searchBox = screen.getByRole('searchbox', { name: 'Filter table rows' })
    fireEvent.change(searchBox, { target: { value: 'SITE-202' } })

    expect(screen.getByText('SITE-202')).toBeInTheDocument()
    expect(screen.queryByText('SITE-101')).not.toBeInTheDocument()

    fireEvent.change(searchBox, { target: { value: 'SECRET-A' } })

    expect(screen.getByText('No matching rows')).toBeInTheDocument()
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

  it('shows no data for region tables with no valid region rows', () => {
    const runtimeData = [{ category: 'Black', rate: 29 }]
    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      general: {},
      columns: {
        category: { name: 'category', label: 'Category', dataTable: true },
        rate: { name: 'rate', label: 'Rate', dataTable: true }
      },
      xAxis: { dataKey: 'category', type: 'categorical' },
      yAxis: {},
      table: {
        label: 'Data Table',
        search: false,
        expanded: true,
        collapsible: false,
        showDownloadLinkBelow: false,
        download: false,
        showVertical: true,
        indexLabel: '',
        cellMinWidth: 0
      },
      regions: [{ label: 'Region without bounds' }],
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
        tabbingId='region-table-no-data'
      />
    )

    expect(screen.getByText('Black')).toBeInTheDocument()
    expect(screen.getByText('No Data')).toBeInTheDocument()
  })

  it('does not render the search field while the table is collapsed', () => {
    const runtimeData = [{ category: 'Black', rate: 29 }]
    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      general: {},
      columns: {
        category: { name: 'category', label: 'Category', dataTable: true },
        rate: { name: 'rate', label: 'Rate', dataTable: true }
      },
      xAxis: { dataKey: 'category', type: 'categorical' },
      yAxis: {},
      table: {
        label: 'Data Table',
        search: true,
        expanded: false,
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
        expandDataTable={false}
        tableTitle='Data Table'
        viewport='lg'
        tabbingId='collapsed-chart-data-table'
      />
    )

    expect(screen.queryByRole('searchbox', { name: 'Filter table rows' })).not.toBeInTheDocument()
  })

  it('reports expanded state changes to parent renderers', () => {
    const runtimeData = [{ category: 'Black', rate: 29 }]
    const onExpandedChange = vi.fn()
    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      general: {},
      columns: {
        category: { name: 'category', label: 'Category', dataTable: true },
        rate: { name: 'rate', label: 'Rate', dataTable: true }
      },
      xAxis: { dataKey: 'category', type: 'categorical' },
      yAxis: {},
      table: {
        label: 'Data Table',
        search: false,
        expanded: true,
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
        tabbingId='expanded-change-chart-data-table'
        onExpandedChange={onExpandedChange}
      />
    )

    expect(onExpandedChange).toHaveBeenLastCalledWith(true)

    fireEvent.click(screen.getByRole('button', { name: 'Data Table' }))

    expect(onExpandedChange).toHaveBeenLastCalledWith(false)
  })

  it('coerces legacy expanded values before reporting expanded state changes', () => {
    const runtimeData = [{ category: 'Black', rate: 29 }]
    const onExpandedChange = vi.fn()
    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      general: {},
      columns: {
        category: { name: 'category', label: 'Category', dataTable: true },
        rate: { name: 'rate', label: 'Rate', dataTable: true }
      },
      xAxis: { dataKey: 'category', type: 'categorical' },
      yAxis: {},
      table: {
        label: 'Data Table',
        search: false,
        expanded: 0,
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
        expandDataTable={0}
        tableTitle='Data Table'
        viewport='lg'
        tabbingId='legacy-expanded-chart-data-table'
        onExpandedChange={onExpandedChange}
      />
    )

    expect(onExpandedChange).toHaveBeenLastCalledWith(false)
  })

  it('reports no matching rows when search has no results', () => {
    const runtimeData = [{ category: 'Black', rate: 29 }]
    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      general: {},
      columns: {
        category: { name: 'category', label: 'Category', dataTable: true },
        rate: { name: 'rate', label: 'Rate', dataTable: true }
      },
      xAxis: { dataKey: 'category', type: 'categorical' },
      yAxis: {},
      table: {
        label: 'Data Table',
        search: true,
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
        tabbingId='no-results-chart-data-table'
      />
    )

    fireEvent.change(screen.getByRole('searchbox', { name: 'Filter table rows' }), { target: { value: 'missing' } })

    expect(screen.getByText('No matching rows')).toBeInTheDocument()
    expect(screen.getByRole('table')).toHaveAttribute('aria-rowcount', '0')
  })

  it('searches rendered table values, not hidden columns', () => {
    const runtimeData = [{ category: 'Black', hiddenId: 'ABC-123', rate: 29 }]
    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      general: {},
      columns: {
        category: { name: 'category', label: 'Category', dataTable: true },
        hiddenId: { name: 'hiddenId', label: 'Site ID', dataTable: false },
        rate: { name: 'rate', label: 'Rate', dataTable: true }
      },
      xAxis: { dataKey: 'category', type: 'categorical' },
      yAxis: {},
      table: {
        label: 'Data Table',
        search: true,
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
        tabbingId='visible-values-chart-data-table'
      />
    )

    fireEvent.change(screen.getByRole('searchbox', { name: 'Filter table rows' }), { target: { value: 'ABC-123' } })

    expect(screen.getByText('No matching rows')).toBeInTheDocument()
  })

  it('renders one CSV download control without rendering the chart data table', () => {
    const runtimeData = [{ category: 'Black', rate: 29 }]
    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      general: {},
      columns: {
        category: { name: 'category', label: 'Category', dataTable: true },
        rate: { name: 'rate', label: 'Rate', dataTable: true }
      },
      xAxis: { dataKey: 'category', type: 'categorical' },
      yAxis: {},
      table: {
        label: 'Data Table',
        expanded: false,
        showDownloadLinkBelow: true,
        download: true,
        showVertical: true,
        indexLabel: ''
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
        expandDataTable={false}
        showTable={false}
        tableTitle='Data Table'
        viewport='lg'
        tabbingId='download-only-chart-data-table'
      />
    )

    expect(screen.getAllByRole('button', { name: 'Download data' })).toHaveLength(1)
    expect(screen.queryByRole('table')).not.toBeInTheDocument()
    expect(screen.queryByRole('searchbox')).not.toBeInTheDocument()
    expect(screen.queryByText('Skip Data Table')).not.toBeInTheDocument()
  })

  it('renders a CSV download control without rendering the Box Plot data table', () => {
    downloadState.latest = []
    const rawData = [{ Group_Category: 'Category A', value: 12 }]
    const config = {
      type: 'chart',
      visualizationType: 'Box Plot',
      general: {},
      columns: {},
      data: rawData,
      xAxis: { dataKey: 'Group_Category', type: 'categorical' },
      yAxis: { dataKey: 'value' },
      table: {
        label: 'Data Table',
        expanded: false,
        showDownloadLinkBelow: true,
        download: true,
        indexLabel: ''
      },
      boxplot: {
        categories: ['Category A'],
        labels: {},
        plots: [{ columnCategory: 'Category A', values: [12], columnOutliers: [], columnNonOutliers: [12] }]
      },
      runtime: {},
      preliminaryData: []
    } as any

    render(
      <DataTable
        config={config}
        columns={config.columns}
        rawData={rawData}
        runtimeData={rawData as any}
        expandDataTable={false}
        showTable={false}
        tableTitle='Data Table'
        viewport='lg'
        tabbingId='download-only-box-plot-data-table'
      />
    )

    fireEvent.click(screen.getByRole('button', { name: 'Download data' }))

    expect(downloadState.latest).toEqual(rawData)
    expect(screen.queryByRole('table')).not.toBeInTheDocument()
    expect(screen.queryByText('Skip Data Table')).not.toBeInTheDocument()
  })

  it('downloads searched rows when visible-data-only downloads are enabled', () => {
    downloadState.latest = []
    downloadState.fileName = ''
    const runtimeData = [
      { category: 'Black', rate: 29 },
      { category: 'White', rate: 8 }
    ]
    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      general: {},
      columns: {
        category: { name: 'category', label: 'Category', dataTable: true },
        rate: { name: 'rate', label: 'Rate', dataTable: true }
      },
      xAxis: { dataKey: 'category', type: 'categorical' },
      yAxis: {},
      table: {
        label: 'Data Table',
        search: true,
        expanded: true,
        collapsible: false,
        showDownloadLinkBelow: false,
        download: true,
        downloadVisibleDataOnly: true,
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
        tabbingId='download-chart-data-table'
        vizTitle='Download Test'
      />
    )

    fireEvent.change(screen.getByRole('searchbox', { name: 'Filter table rows' }), { target: { value: 'Black' } })
    fireEvent.click(screen.getByRole('button', { name: 'Download data' }))

    expect(downloadState.latest).toEqual([{ Category: 'Black', Rate: 29 }])
    expect(downloadState.fileName).toBe('Download Test.csv')
  })

  it('downloads using a dataset-derived csv filename', () => {
    downloadState.latest = []
    downloadState.fileName = ''
    const runtimeData = [{ category: 'Black', rate: 29 }]
    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      general: {},
      columns: {
        category: { name: 'category', label: 'Category', dataTable: true },
        rate: { name: 'rate', label: 'Rate', dataTable: true }
      },
      xAxis: { dataKey: 'category', type: 'categorical' },
      yAxis: {},
      table: {
        label: 'Data Table',
        expanded: true,
        collapsible: false,
        showDownloadLinkBelow: false,
        download: true,
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
        dataConfig={{ dataUrl: '/wcms/vizdata/abc.json' }}
        rawData={runtimeData}
        runtimeData={runtimeData as any}
        expandDataTable={true}
        tableTitle='Data Table'
        viewport='lg'
        tabbingId='download-chart-data-table'
        vizTitle='Download Test'
      />
    )

    fireEvent.click(screen.getByRole('button', { name: 'Download data' }))

    expect(downloadState.fileName).toBe('abc.csv')
  })

  it('filters standalone table rows by visible values only', () => {
    const runtimeData = [
      { location: 'Alpha County', site_id: 'SITE-001', hidden_id: 'SECRET-A' },
      { location: 'Beta County', site_id: 'SITE-002', hidden_id: 'SECRET-B' }
    ]
    const config = {
      type: 'table',
      visualizationType: 'Data Table',
      general: {},
      columns: {
        location: { name: 'location', label: 'Location', dataTable: true },
        siteId: { name: 'site_id', label: 'Site ID', dataTable: true },
        hiddenId: { name: 'hidden_id', label: 'Hidden ID', dataTable: false }
      },
      dataFormat: {},
      table: {
        label: 'Data Table',
        search: true,
        expanded: true,
        collapsible: false,
        showDownloadLinkBelow: false,
        download: false,
        showVertical: true,
        indexLabel: '',
        cellMinWidth: 0
      },
      runtime: {},
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
        tabbingId='standalone-data-table'
      />
    )

    const searchBox = screen.getByRole('searchbox', { name: 'Filter table rows' })
    fireEvent.change(searchBox, { target: { value: 'SITE-002' } })

    expect(screen.getByText('Beta County')).toBeInTheDocument()
    expect(screen.queryByText('Alpha County')).not.toBeInTheDocument()

    fireEvent.change(searchBox, { target: { value: 'SECRET-A' } })

    expect(screen.getByText('No matching rows')).toBeInTheDocument()
  })

  it('uses data-table-specific media download labels for standalone tables', () => {
    const runtimeData = [{ location: 'Alpha County', site_id: 'SITE-001' }]
    const config = {
      type: 'table',
      visualizationType: 'Data Table',
      general: {},
      columns: {
        location: { name: 'location', label: 'Location', dataTable: true },
        siteId: { name: 'site_id', label: 'Site ID', dataTable: true }
      },
      dataFormat: {},
      table: {
        label: 'Data Table',
        search: false,
        expanded: true,
        collapsible: false,
        showDownloadLinkBelow: false,
        download: false,
        showVertical: true,
        indexLabel: '',
        cellMinWidth: 0
      },
      runtime: {},
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
        tabbingId='standalone-download-label-data-table'
        showDownloadImgButton={true}
        showDownloadPdfButton={true}
      />
    )

    expect(screen.getByRole('button', { name: 'Download Data Table as Image' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Download Data Table as PDF' })).toBeInTheDocument()
  })

  it('filters standalone table rows by accented visible values with unaccented search', () => {
    const runtimeData = [
      { location: 'São Tomé and Príncipe', site_id: 'SITE-001' },
      { location: 'Junín', site_id: 'SITE-002' }
    ]
    const config = {
      type: 'table',
      visualizationType: 'Data Table',
      general: {},
      columns: {
        location: { name: 'location', label: 'Location', dataTable: true },
        siteId: { name: 'site_id', label: 'Site ID', dataTable: true }
      },
      dataFormat: {},
      table: {
        label: 'Data Table',
        search: true,
        expanded: true,
        collapsible: false,
        showDownloadLinkBelow: false,
        download: false,
        showVertical: true,
        indexLabel: '',
        cellMinWidth: 0
      },
      runtime: {},
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
        tabbingId='accented-standalone-data-table'
      />
    )

    fireEvent.change(screen.getByRole('searchbox', { name: 'Filter table rows' }), {
      target: { value: 'sao tome' }
    })

    expect(screen.getByText('São Tomé and Príncipe')).toBeInTheDocument()
    expect(screen.queryByText('Junín')).not.toBeInTheDocument()
  })

  it('allows tokens to match across visible values in a table row', () => {
    const runtimeData = [
      { location: 'São Tomé and Príncipe', site_id: 'SITE-001' },
      { location: 'Junín', site_id: 'SITE-002' }
    ]
    const config = {
      type: 'table',
      visualizationType: 'Data Table',
      general: {},
      columns: {
        location: { name: 'location', label: 'Location', dataTable: true },
        siteId: { name: 'site_id', label: 'Site ID', dataTable: true }
      },
      dataFormat: {},
      table: {
        label: 'Data Table',
        search: true,
        expanded: true,
        collapsible: false,
        showDownloadLinkBelow: false,
        download: false,
        showVertical: true,
        indexLabel: '',
        cellMinWidth: 0
      },
      runtime: {},
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
        tabbingId='multi-token-standalone-data-table'
      />
    )

    fireEvent.change(screen.getByRole('searchbox', { name: 'Filter table rows' }), {
      target: { value: 'sao SITE-001' }
    })

    expect(screen.getByText('São Tomé and Príncipe')).toBeInTheDocument()
    expect(screen.queryByText('Junín')).not.toBeInTheDocument()
  })

  it('filters horizontal chart tables by rendered row labels and matching cells', () => {
    const runtimeData = [
      { category: 'Black', rate: 29, count: 100 },
      { category: 'White', rate: 8, count: 200 }
    ]
    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      general: {},
      columns: {
        category: { name: 'category', label: 'Category', dataTable: true },
        rate: { name: 'rate', label: 'Rate', dataTable: true, suffix: '%', commas: false, roundToPlace: 0 },
        count: { name: 'count', label: 'Count', dataTable: true, suffix: '', commas: false, roundToPlace: 0 }
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
        suffix: ''
      },
      table: {
        label: 'Data Table',
        search: true,
        expanded: true,
        collapsible: false,
        showDownloadLinkBelow: false,
        download: false,
        showVertical: false,
        indexLabel: '',
        cellMinWidth: 0
      },
      runtime: {
        series: [
          { dataKey: 'rate', name: 'Rate' },
          { dataKey: 'count', name: 'Count' }
        ]
      },
      series: [
        { dataKey: 'rate', name: 'Rate' },
        { dataKey: 'count', name: 'Count' }
      ],
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
        tabbingId='horizontal-chart-data-table'
      />
    )

    const searchBox = screen.getByRole('searchbox', { name: 'Filter table rows' })
    fireEvent.change(searchBox, { target: { value: 'Rate' } })

    expect(screen.getByText('Rate')).toBeInTheDocument()
    expect(screen.queryByText('Count')).not.toBeInTheDocument()
    expect(screen.getByRole('table')).toHaveAttribute('aria-rowcount', '1')

    fireEvent.change(searchBox, { target: { value: 'Black' } })

    expect(screen.getByText('Black')).toBeInTheDocument()
    expect(screen.queryByText('White')).not.toBeInTheDocument()
    expect(screen.getByText('Rate')).toBeInTheDocument()
    expect(screen.getByText('Count')).toBeInTheDocument()
    expect(screen.getByRole('table')).toHaveAttribute('aria-rowcount', '2')

    fireEvent.change(searchBox, { target: { value: '29%' } })

    expect(screen.getByText('Black')).toBeInTheDocument()
    expect(screen.queryByText('White')).not.toBeInTheDocument()
    expect(screen.getByText('Rate')).toBeInTheDocument()
    expect(screen.queryByText('Count')).not.toBeInTheDocument()
    expect(screen.getByRole('table')).toHaveAttribute('aria-rowcount', '1')
  })

  it('searches visible grouped table headers', () => {
    const runtimeData = [
      { region: 'South', county: 'Fulton', rate: 29 },
      { region: 'North', county: 'Cook', rate: 8 }
    ]
    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      general: {},
      columns: {
        region: { name: 'region', label: 'Region', dataTable: true },
        county: { name: 'county', label: 'County', dataTable: true },
        rate: { name: 'rate', label: 'Rate', dataTable: true, commas: false, roundToPlace: 0 }
      },
      xAxis: { dataKey: 'county', type: 'categorical' },
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
        suffix: ''
      },
      table: {
        label: 'Data Table',
        search: true,
        expanded: true,
        collapsible: false,
        showDownloadLinkBelow: false,
        download: false,
        showVertical: true,
        groupBy: 'region',
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
        tabbingId='grouped-chart-data-table'
      />
    )

    fireEvent.change(screen.getByRole('searchbox', { name: 'Filter table rows' }), { target: { value: 'South' } })

    expect(screen.getByText('South')).toBeInTheDocument()
    expect(screen.getByText('Fulton')).toBeInTheDocument()
    expect(screen.queryByText('North')).not.toBeInTheDocument()
    expect(screen.queryByText('Cook')).not.toBeInTheDocument()
  })
})

describe('DataTable sort control accessibility', () => {
  const assertHeaderSortWiring = (container: HTMLElement, instructionPattern: RegExp) => {
    const headers = Array.from(container.querySelectorAll('th[role="columnheader"]'))
    expect(headers.length).toBeGreaterThan(0)

    headers.forEach(header => {
      const labelledBy = header.getAttribute('aria-labelledby')
      // Every sortable header exposes its column label as the accessible name...
      expect(labelledBy).toBeTruthy()
      const labelIds = (labelledBy || '').split(/\s+/).filter(Boolean)
      expect(labelIds.length).toBeGreaterThan(0)

      const labelEls = labelIds.map(id => {
        const el = container.querySelector(`[id="${id}"]`)
        expect(el).not.toBeNull()
        expect(container.contains(el)).toBe(true)
        return el
      })

      // Concatenate text content from all label elements (accessible name)
      const labelText = labelEls.map(el => el!.textContent || '').join(' ')
      // ...and that name must NOT include the sort-control instruction, so it is not
      // re-read when a screen reader steps through associated data cells.
      expect(labelText).not.toMatch(instructionPattern)

      const describedBy = header.getAttribute('aria-describedby')
      expect(describedBy).toBeTruthy()
      if (describedBy) {
        const descIds = describedBy.split(/\s+/).filter(Boolean)
        expect(descIds.length).toBeGreaterThan(0)

        const descEls = descIds.map(id => {
          const el = container.querySelector(`[id="${id}"]`)
          expect(el).not.toBeNull()
          expect(container.contains(el)).toBe(true)
          return el
        })

        // Concatenate text content from all description elements
        const descText = descEls.map(el => el!.textContent || '').join(' ')
        // The dynamic instruction stays available as a description (announced when the
        // header cell itself is focused), so the sort affordance is preserved.
        expect(descText).toMatch(instructionPattern)

        // All description elements should be aria-hidden so screen readers do not stop on them
        // while swiping the header, and they are excluded from the header text content that
        // gets re-announced on associated data cells.
        descEls.forEach(el => {
          expect(el!.getAttribute('aria-hidden')).toBe('true')
        })

        // Description elements must live outside the label elements that provide the name.
        labelEls.forEach(labelEl => {
          descEls.forEach(descEl => {
            expect(labelEl!.contains(descEl)).toBe(false)
          })
        })
      }
    })
  }

  it('keeps chart data-table sort instructions out of the header name but available as a description', () => {
    const runtimeData = [
      { location: 'São Tomé and Príncipe', site_id: 'SITE-001' },
      { location: 'Junín', site_id: 'SITE-002' }
    ]
    const config = {
      type: 'table',
      visualizationType: 'Data Table',
      general: {},
      columns: {
        location: { name: 'location', label: 'Location', dataTable: true },
        siteId: { name: 'site_id', label: 'Site ID', dataTable: true }
      },
      dataFormat: {},
      table: {
        label: 'Data Table',
        search: false,
        expanded: true,
        collapsible: false,
        showDownloadLinkBelow: false,
        download: false,
        showVertical: true,
        indexLabel: '',
        cellMinWidth: 0
      },
      runtime: {},
      preliminaryData: []
    } as any

    const { container } = render(
      <DataTable
        config={config}
        columns={config.columns}
        rawData={runtimeData}
        runtimeData={runtimeData as any}
        expandDataTable={true}
        tableTitle='Data Table'
        viewport='lg'
        tabbingId='sort-a11y-chart-data-table'
      />
    )

    assertHeaderSortWiring(container, /Press command, modifier, or enter key to sort by/i)
  })

  it('keeps map data-table sort instructions out of the header name but available as a description', () => {
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
        search: false,
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

    const { container } = render(
      <DataTable
        config={config}
        columns={config.columns}
        rawData={Object.values(runtimeData)}
        runtimeData={runtimeData as any}
        expandDataTable={true}
        tableTitle='Data Table'
        viewport='lg'
        tabbingId='sort-a11y-map-data-table'
        displayGeoName={row => (row === 'AZ' ? 'Arizona' : row === 'CA' ? 'California' : row)}
        formatLegendLocation={row => row}
        applyLegendToRow={() => ['#000']}
        getPatternForRow={() => null}
      />
    )

    assertHeaderSortWiring(container, /Sort by .+ in (ascending|descending) order/i)
  })

  it('announces the pending sort action in the header description as the sort cycles', () => {
    const runtimeData = [
      { location: 'Alpha', site_id: 'SITE-002' },
      { location: 'Bravo', site_id: 'SITE-001' }
    ]
    const config = {
      type: 'table',
      visualizationType: 'Data Table',
      general: {},
      columns: {
        location: { name: 'location', label: 'Location', dataTable: true },
        siteId: { name: 'site_id', label: 'Site ID', dataTable: true }
      },
      dataFormat: {},
      table: {
        label: 'Data Table',
        search: false,
        expanded: true,
        collapsible: false,
        showDownloadLinkBelow: false,
        download: false,
        showVertical: true,
        indexLabel: '',
        cellMinWidth: 0
      },
      runtime: {},
      preliminaryData: []
    } as any

    const { container } = render(
      <DataTable
        config={config}
        columns={config.columns}
        rawData={runtimeData}
        runtimeData={runtimeData as any}
        expandDataTable={true}
        tableTitle='Data Table'
        viewport='lg'
        tabbingId='sort-a11y-direction-data-table'
      />
    )

    const descriptionFor = (label: string) => {
      const header = screen.getByText(label).closest('th') as HTMLElement
      const descId = header.getAttribute('aria-describedby') as string
      const descIds = descId.split(/\s+/).filter(Boolean)
      const descEls = descIds.map(id => {
        const el = container.querySelector(`[id="${id}"]`)
        expect(container.contains(el)).toBe(true)
        return el
      })
      return descEls.map(el => el!.textContent || '').join(' ')
    }

    const locationHeader = screen.getByText('Location').closest('th') as HTMLElement

    // No column sorted yet: activating any header will sort ascending first, so that is what
    // the description announces.
    expect(descriptionFor('Location')).toMatch(/in ascending order/)
    expect(descriptionFor('Site ID')).toMatch(/in ascending order/)

    // After sorting ascending, activating again will sort descending — the description must
    // reflect the pending action, not the current state.
    fireEvent.click(locationHeader)
    expect(descriptionFor('Location')).toMatch(/in descending order/)

    // After sorting descending, activating again clears the sort.
    fireEvent.click(locationHeader)
    expect(descriptionFor('Location')).toMatch(/remove the sort/i)

    // A column that is not the active sort still announces the default ascending action.
    expect(descriptionFor('Site ID')).toMatch(/in ascending order/)
  })
})
