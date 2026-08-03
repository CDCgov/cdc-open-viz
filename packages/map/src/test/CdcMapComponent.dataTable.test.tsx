import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import CdcMapComponent from '../CdcMapComponent'
import ConfigContext, { MapDispatchContext } from '../context'
import Legend from '../components/Legend/components/Legend'

const dataTableProps = vi.hoisted(() => {
  Object.defineProperty((globalThis as any).HTMLCanvasElement.prototype, 'getContext', {
    configurable: true,
    value: () => ({
      measureText: (text = '') => ({ width: String(text).length * 8 })
    })
  })

  return [] as any[]
})

vi.mock('@cdc/core/components/DataTable', async () => {
  const React = await vi.importActual<typeof import('react')>('react')

  return {
    default: props => {
      dataTableProps.push(props)
      return React.createElement('div', { 'data-testid': 'data-table-probe' })
    }
  }
})

vi.mock('../components/MapContainer', async () => {
  const React = await vi.importActual<typeof import('react')>('react')

  return {
    default: () => React.createElement('div', { 'data-testid': 'mock-map-container' })
  }
})

describe('CdcMapComponent data table wiring', () => {
  beforeEach(() => {
    dataTableProps.length = 0
  })

  it('passes the selected dashboard dataset metadata to DataTable', async () => {
    const dataset = {
      data: [
        { 'FIPS Codes': '01', Rate: 10 },
        { 'FIPS Codes': '02', Rate: 20 }
      ],
      dataFileName: 'stale-map-source.json',
      dataFileSourceType: 'url',
      dataUrl: '/wcms/vizdata/map-source.json',
      runtimeDataUrl: '/wcms/vizdata/map-runtime.json'
    }

    render(
      <CdcMapComponent
        config={
          {
            type: 'map',
            dataKey: 'mapDataset',
            data: dataset.data,
            general: {
              title: 'Dataset-backed Map',
              geoType: 'us',
              type: 'data',
              showTitle: true
            },
            columns: {
              geo: { name: 'FIPS Codes', label: 'Location', dataTable: true },
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
              forceDisplay: true,
              expanded: true,
              download: true,
              label: 'Data Table',
              indexLabel: '',
              showNonGeoData: false
            },
            filters: []
          } as any
        }
        datasets={{ mapDataset: dataset } as any}
        isDashboard={true}
        interactionLabel='map-dataset-test'
        navigationHandler={vi.fn()}
        setSharedFilter={vi.fn()}
        setSharedFilterValue={vi.fn()}
      />
    )

    await waitFor(() => expect(dataTableProps.length).toBeGreaterThan(0))

    expect(dataTableProps.at(-1).dataConfig).toMatchObject({
      runtimeDataUrl: '/wcms/vizdata/map-runtime.json'
    })
  })

  it('passes runtime rows to DataTable for layer-only data-column bubble maps', async () => {
    const data = [
      { State: 'California', Cases: 12 },
      { State: 'Texas', Cases: 20 }
    ]

    render(
      <CdcMapComponent
        config={
          {
            type: 'map',
            data,
            general: {
              title: 'Layer-only Bubble Map',
              geoType: 'us',
              type: 'data',
              showTitle: true
            },
            columns: {
              geo: { name: '', label: 'Location', dataTable: true },
              primary: { name: '', label: 'Cases', dataTable: true, prefix: '', suffix: '' },
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
                    geo: { name: 'State' },
                    primary: { name: 'Cases' }
                  }
                }
              ]
            },
            legend: {
              type: 'equalnumber',
              numberOfItems: 3,
              specialClasses: [],
              unified: false
            },
            table: {
              forceDisplay: true,
              expanded: true,
              download: true,
              label: 'Data Table',
              indexLabel: '',
              showNonGeoData: false
            },
            filters: []
          } as any
        }
        datasets={{} as any}
        isDashboard={true}
        interactionLabel='layer-only-bubble-table-test'
        navigationHandler={vi.fn()}
        setSharedFilter={vi.fn()}
        setSharedFilterValue={vi.fn()}
      />
    )

    await waitFor(() => expect(dataTableProps.at(-1)?.runtimeData?.['US-CA']).toBeTruthy())

    const latestProps = dataTableProps.at(-1)
    expect(latestProps.columns.geo.name).toBe('State')
    expect(latestProps.columns.primary.name).toBe('Cases')
    expect(Object.keys(latestProps.runtimeData)).toEqual(['US-CA', 'US-TX'])
    expect(latestProps.runtimeData['US-CA']).toMatchObject({ State: 'California', Cases: 12 })
  })

  it('uses bubble layer geography for DataTable rows when the map geography column is a stale default', async () => {
    const data = [
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
              title: 'Stale Geo Bubble Map',
              geoType: 'us',
              type: 'data',
              showTitle: true
            },
            columns: {
              geo: { name: 'FIPS Codes', label: 'Location', dataTable: true },
              primary: { name: '', label: 'Rate', dataTable: true, prefix: '', suffix: '' },
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
                  }
                }
              ]
            },
            legend: {
              type: 'equalnumber',
              numberOfItems: 3,
              specialClasses: [],
              unified: false
            },
            table: {
              forceDisplay: true,
              expanded: true,
              download: true,
              label: 'Data Table',
              indexLabel: '',
              showNonGeoData: false
            },
            filters: []
          } as any
        }
        datasets={{} as any}
        isDashboard={true}
        interactionLabel='stale-geo-bubble-table-test'
        navigationHandler={vi.fn()}
        setSharedFilter={vi.fn()}
        setSharedFilterValue={vi.fn()}
      />
    )

    await waitFor(() => expect(dataTableProps.at(-1)?.runtimeData?.['US-AL']).toBeTruthy())

    const latestProps = dataTableProps.at(-1)
    expect(latestProps.columns.geo.name).toBe('STATE')
    expect(latestProps.columns.primary.name).toBe('Rate')
    expect(Object.keys(latestProps.runtimeData)).toEqual(['US-AL', 'US-CA'])
    expect(latestProps.runtimeData['US-AL']).toMatchObject({ STATE: 'Alabama', Rate: 130, Location: 'Vehicle' })
  })

  it('passes bubble-specific columns to DataTable when layer geography inherits from map columns', async () => {
    const data = [
      { State: 'California', Outbreak: 'Yes', Disease: 'Influenza', Cases: 12 },
      { State: 'Texas', Outbreak: 'No', Disease: 'Measles', Cases: 20 }
    ]

    render(
      <CdcMapComponent
        config={
          {
            type: 'map',
            data,
            general: {
              title: 'Layered Bubble Map',
              geoType: 'us',
              type: 'data',
              showTitle: true
            },
            columns: {
              geo: { name: 'State', label: 'Location', dataTable: true },
              primary: { name: 'Outbreak', label: 'Active Outbreak', dataTable: true, prefix: '', suffix: '' },
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
                    geo: { name: '' },
                    primary: { name: 'Disease', label: 'Disease Type' },
                    size: { name: 'Cases', label: 'Case Count' }
                  }
                }
              ]
            },
            legend: {
              type: 'category',
              numberOfItems: 3,
              specialClasses: [],
              unified: false
            },
            table: {
              forceDisplay: true,
              expanded: true,
              download: true,
              label: 'Data Table',
              indexLabel: '',
              showNonGeoData: false
            },
            filters: []
          } as any
        }
        datasets={{} as any}
        isDashboard={true}
        interactionLabel='bubble-specific-columns-table-test'
        navigationHandler={vi.fn()}
        setSharedFilter={vi.fn()}
        setSharedFilterValue={vi.fn()}
      />
    )

    await waitFor(() => expect(dataTableProps.at(-1)?.runtimeData?.['US-CA']).toBeTruthy())

    const latestProps = dataTableProps.at(-1)
    expect(latestProps.columns.geo.name).toBe('State')
    expect(latestProps.columns.primary.name).toBe('Outbreak')
    expect(latestProps.columns.bubbleLayer0Primary).toMatchObject({
      name: 'Disease',
      label: 'Disease Type',
      dataTable: true
    })
    expect(latestProps.columns.bubbleLayer0Size).toMatchObject({
      name: 'Cases',
      label: 'Case Count',
      dataTable: true
    })
    expect(latestProps.runtimeData['US-CA']).toMatchObject({
      State: 'California',
      Outbreak: 'Yes',
      Disease: 'Influenza',
      Cases: 12
    })
  })

  it('keeps map footnotes visible when the data table is collapsed by default', async () => {
    const dataset = {
      data: [
        { 'FIPS Codes': '01', Rate: 10 },
        { 'FIPS Codes': '02', Rate: 20 }
      ],
      dataFileName: 'map-source.json',
      dataFileSourceType: 'url',
      dataUrl: '/wcms/vizdata/map-source.json',
      runtimeDataUrl: '/wcms/vizdata/map-runtime.json'
    }

    render(
      <CdcMapComponent
        config={
          {
            type: 'map',
            dataKey: 'mapDataset',
            data: dataset.data,
            general: {
              title: 'Footnoted Map',
              footnotes: 'Legacy map footnote',
              geoType: 'us',
              type: 'data',
              showTitle: true
            },
            columns: {
              geo: { name: 'FIPS Codes', label: 'Location', dataTable: true },
              primary: { name: 'Rate', label: 'Rate', dataTable: true, prefix: '', suffix: '' },
              navigate: { name: '' },
              latitude: { name: '' },
              longitude: { name: '' }
            },
            footnotes: {
              staticFootnotes: [{ text: 'Structured map footnote' }]
            },
            legend: {
              type: 'equalnumber',
              numberOfItems: 3,
              specialClasses: [],
              unified: false
            },
            table: {
              forceDisplay: true,
              expanded: false,
              download: true,
              label: 'Data Table',
              indexLabel: '',
              showNonGeoData: false
            },
            filters: []
          } as any
        }
        datasets={{ mapDataset: dataset } as any}
        isDashboard={true}
        interactionLabel='map-footnote-test'
        navigationHandler={vi.fn()}
        setSharedFilter={vi.fn()}
        setSharedFilterValue={vi.fn()}
      />
    )

    await waitFor(() => {
      expect(dataTableProps.at(-1)?.expandDataTable).toBe(false)
    })

    expect(await screen.findByText('Legacy map footnote')).toBeInTheDocument()
    expect(await screen.findByText('Structured map footnote')).toBeInTheDocument()
  })

  it('updates metadata-backed map title and text when dataMetadata changes and data does not', async () => {
    const data = [
      { 'FIPS Codes': '01', Rate: 10, Year: '2024' },
      { 'FIPS Codes': '02', Rate: 20, Year: '2025' }
    ]
    const config = {
      type: 'map',
      dataKey: 'mapDataset',
      data,
      dataMetadata: {},
      enableMarkupVariables: true,
      markupVariables: [
        {
          sourceType: 'metadata',
          name: 'Source',
          tag: '{{source}}',
          metadataKey: 'source',
          conditions: [],
          addCommas: false
        }
      ],
      general: {
        title: 'Map {{source}}',
        subtext: 'Subtext {{source}}',
        geoType: 'us',
        type: 'data',
        showTitle: true,
        showSidebar: true
      },
      columns: {
        geo: { name: 'FIPS Codes', label: 'Location', dataTable: true },
        primary: { name: 'Rate', label: 'Rate', dataTable: true, prefix: '', suffix: '' },
        navigate: { name: '' },
        latitude: { name: '' },
        longitude: { name: '' }
      },
      legend: {
        type: 'equalnumber',
        numberOfItems: 3,
        specialClasses: [],
        unified: false,
        title: 'Static <strong>{{source}}</strong>',
        description: 'Static description {{source}}',
        dynamicDescription: false,
        descriptions: {}
      },
      table: {
        forceDisplay: false,
        expanded: false,
        download: false,
        label: 'Data Table',
        indexLabel: '',
        showNonGeoData: false
      },
      filters: [
        {
          columnName: 'Year',
          active: '2024',
          values: ['2024', '2025'],
          type: 'data',
          showDropdown: false,
          order: 'cust'
        }
      ]
    } as any

    const renderMap = mapConfig => (
      <CdcMapComponent
        config={mapConfig}
        datasets={{ mapDataset: { data } } as any}
        isDashboard={true}
        interactionLabel='map-metadata-test'
        navigationHandler={vi.fn()}
        setSharedFilter={vi.fn()}
        setSharedFilterValue={vi.fn()}
      />
    )

    const { rerender } = render(renderMap(config))

    expect(await screen.findByText('Map')).toBeInTheDocument()

    rerender(renderMap({ ...config, dataMetadata: { source: 'June file' } }))

    expect(await screen.findByText('Map June file')).toBeInTheDocument()
    expect(await screen.findByText('Subtext June file')).toBeInTheDocument()
  })

  it('processes markup variables and HTML in static and dynamic map legend descriptions', async () => {
    const config = {
      data: [
        { Year: '2024', Rate: 10 },
        { Year: '2025', Rate: 20 }
      ],
      dataMetadata: { source: 'July file' },
      enableMarkupVariables: true,
      markupVariables: [
        {
          sourceType: 'metadata',
          name: 'Source',
          tag: '{{source}}',
          metadataKey: 'source',
          conditions: [],
          addCommas: false
        },
        {
          sourceType: 'column',
          name: 'Year',
          tag: '{{year}}',
          columnName: 'Year',
          conditions: [],
          addCommas: false,
          selectionMode: 'first'
        }
      ],
      columns: {
        primary: { name: 'Rate' }
      },
      map: {
        patterns: []
      },
      visual: {
        additionalCityStyles: [],
        cityStyleLabel: ''
      },
      legend: {
        type: 'equalnumber',
        numberOfItems: 3,
        specialClasses: [],
        unified: false,
        title: 'Static <strong>{{source}}</strong>',
        description: 'Static description <strong>{{source}}</strong>',
        dynamicDescription: false,
        descriptions: {
          '0,1': ['Updated <strong>{{source}}</strong> for {{year}}']
        }
      },
      filters: [
        {
          columnName: 'Year',
          active: '2024',
          values: ['2024', '2025'],
          type: 'data',
          showDropdown: false,
          order: 'cust'
        }
      ]
    } as any

    const renderLegend = legendConfig =>
      render(
        <ConfigContext.Provider
          value={
            {
              config: legendConfig,
              currentViewport: 'lg',
              dimensions: [640, 360],
              mapId: 'legend-markup-test',
              runtimeBubbleLegend: [],
              runtimeFilters: [{ active: '2024', values: ['2024', '2025'] }],
              runtimeLegend: {
                disabledAmt: 0,
                items: [{ color: '#075290', label: '0 - 10', rawLabel: '0 - 10', special: false }]
              }
            } as any
          }
        >
          <MapDispatchContext.Provider value={vi.fn()}>
            <Legend
              bubbleLegendScale={1}
              containerWidthPadding={0}
              currentViewport='lg'
              dimensions={[640, 360]}
              interactionLabel='map-legend-markup-test'
              skipId='legend-markup-test'
            />
          </MapDispatchContext.Provider>
        </ConfigContext.Provider>
      )

    const { container, rerender } = renderLegend(config)

    await waitFor(() => expect(container.textContent).toContain('Static July file'))
    expect(container.textContent).toContain('Static description July file')
    expect(screen.getAllByText('July file', { selector: 'strong' }).length).toBeGreaterThanOrEqual(2)

    rerender(
      <ConfigContext.Provider
        value={
          {
            config: { ...config, legend: { ...config.legend, dynamicDescription: true } },
            currentViewport: 'lg',
            dimensions: [640, 360],
            mapId: 'legend-markup-test',
            runtimeBubbleLegend: [],
            runtimeFilters: [{ active: '2025', columnName: 'Year', values: ['2024', '2025'] }],
            runtimeLegend: {
              disabledAmt: 0,
              items: [{ color: '#075290', label: '0 - 10', rawLabel: '0 - 10', special: false }]
            }
          } as any
        }
      >
        <MapDispatchContext.Provider value={vi.fn()}>
          <Legend
            bubbleLegendScale={1}
            containerWidthPadding={0}
            currentViewport='lg'
            dimensions={[640, 360]}
            interactionLabel='map-legend-markup-test'
            skipId='legend-markup-test'
          />
        </MapDispatchContext.Provider>
      </ConfigContext.Provider>
    )

    await waitFor(() => expect(container.textContent).toContain('Updated July file for 2025'))
    expect(screen.getAllByText('July file', { selector: 'strong' }).length).toBeGreaterThanOrEqual(2)
  })
})
