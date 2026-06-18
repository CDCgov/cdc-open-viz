import React from 'react'
import { act, render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import CdcChart from '../CdcChartComponent'

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

vi.mock('@visx/responsive/lib/components/ParentSize', () => ({
  default: ({ children }) => children({ width: 640, height: 360 })
}))

vi.mock('../components/LinearChart', async () => {
  const React = await vi.importActual<typeof import('react')>('react')

  return {
    default: React.forwardRef(() => React.createElement('div', { 'data-testid': 'mock-linear-chart' }))
  }
})

describe('CdcChart data table dataset wiring', () => {
  beforeEach(() => {
    dataTableProps.length = 0
  })

  it('passes the selected dashboard dataset metadata to DataTable', async () => {
    const dataset = {
      data: [{ category: 'A', value: 1 }],
      dataFileName: 'stale-chart-source.json',
      dataFileSourceType: 'url',
      dataUrl: '/wcms/vizdata/chart-source.json',
      runtimeDataUrl: '/wcms/vizdata/chart-runtime.json'
    }

    render(
      <CdcChart
        config={
          {
            type: 'chart',
            visualizationType: 'Bar',
            title: 'Dataset-backed Chart',
            dataKey: 'chartDataset',
            data: dataset.data,
            xAxis: { dataKey: 'category' },
            series: [{ dataKey: 'value' }],
            table: {
              show: true,
              expanded: true,
              download: true,
              label: 'Data Table',
              indexLabel: ''
            }
          } as any
        }
        datasets={{ chartDataset: dataset } as any}
        isDashboard={true}
        interactionLabel='chart-dataset-test'
      />
    )

    await waitFor(() => expect(dataTableProps.length).toBeGreaterThan(0))

    expect(dataTableProps.at(-1).dataConfig).toMatchObject({
      runtimeDataUrl: '/wcms/vizdata/chart-runtime.json'
    })
  })

  it('hides chart footnotes when the data table reports it collapsed', async () => {
    render(
      <CdcChart
        config={
          {
            type: 'chart',
            visualizationType: 'Bar',
            title: 'Footnote-backed Chart',
            data: [{ category: 'A', value: 1 }],
            xAxis: { dataKey: 'category' },
            series: [{ dataKey: 'value' }],
            legacyFootnotes: 'Legacy chart footnote',
            footnotes: {
              staticFootnotes: [{ text: 'Structured chart footnote' }]
            },
            table: {
              show: true,
              expanded: true,
              download: true,
              label: 'Data Table',
              indexLabel: ''
            }
          } as any
        }
        interactionLabel='chart-footnote-collapse-test'
      />
    )

    await waitFor(() => {
      expect(dataTableProps.at(-1)?.expandDataTable).toBe(true)
      expect(dataTableProps.at(-1)?.onExpandedChange).toEqual(expect.any(Function))
    })

    act(() => {
      dataTableProps.at(-1).onExpandedChange(true)
    })

    expect(await screen.findByText('Legacy chart footnote')).toBeInTheDocument()
    expect(await screen.findByText('Structured chart footnote')).toBeInTheDocument()

    const onExpandedChange = dataTableProps.at(-1).onExpandedChange
    expect(onExpandedChange).toEqual(expect.any(Function))
    act(() => {
      onExpandedChange(false)
    })

    await waitFor(() => {
      expect(screen.queryByText('Legacy chart footnote')).not.toBeInTheDocument()
      expect(screen.queryByText('Structured chart footnote')).not.toBeInTheDocument()
    })
  })
})
