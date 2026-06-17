import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import CdcMapComponent from '../CdcMapComponent'

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
      return React.createElement(
        'button',
        {
          'data-testid': 'data-table-probe',
          onClick: () => props.onExpandedChange?.(false),
          type: 'button'
        },
        'Collapse table'
      )
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

  it('hides footnotes when the map data table collapses', async () => {
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
        interactionLabel='map-footnote-test'
        navigationHandler={vi.fn()}
        setSharedFilter={vi.fn()}
        setSharedFilterValue={vi.fn()}
      />
    )

    await waitFor(() => expect(screen.queryByText('Legacy map footnote')).not.toBeNull())
    expect(screen.queryByText('Structured map footnote')).not.toBeNull()

    fireEvent.click(screen.getByTestId('data-table-probe'))

    await waitFor(() => {
      expect(screen.queryByText('Legacy map footnote')).toBeNull()
      expect(screen.queryByText('Structured map footnote')).toBeNull()
    })
  })
})
