import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
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

  it('keeps chart footnotes visible when the data table is collapsed by default', async () => {
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
              expanded: false,
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
      expect(dataTableProps.at(-1)?.expandDataTable).toBe(false)
    })

    expect(await screen.findByText('Legacy chart footnote')).toBeInTheDocument()
    expect(await screen.findByText('Structured chart footnote')).toBeInTheDocument()
  })

  it('passes custom category order to the chart-owned data table runtime data', async () => {
    render(
      <CdcChart
        config={
          {
            type: 'chart',
            visualizationType: 'Bar',
            title: 'Custom Category Order Chart',
            data: [
              { category: 'A', value: 1 },
              { category: 'D', value: 4 },
              { category: 'C', value: 3 },
              { category: 'L', value: 12 }
            ],
            xAxis: {
              type: 'categorical',
              dataKey: 'category',
              categoryOrderType: 'custom',
              categoryOrder: ['A', 'C', 'D', 'L']
            },
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
        interactionLabel='chart-category-order-table-test'
      />
    )

    await waitFor(() => expect(dataTableProps.length).toBeGreaterThan(0))

    expect(dataTableProps.at(-1).runtimeData.map(row => row.category)).toEqual(['A', 'C', 'D', 'L'])
  })

  it('updates metadata-backed chart title and text when dataMetadata changes and data does not', async () => {
    const data = [{ category: 'A', value: 1 }]
    const config = {
      type: 'chart',
      visualizationType: 'Bar',
      title: 'Chart {{source}}',
      introText: 'Intro {{source}}',
      legend: {
        label: 'Legend <strong>{{source}}</strong>',
        description: 'Legend description <strong>{{source}}</strong>'
      },
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
      xAxis: { dataKey: 'category' },
      series: [{ dataKey: 'value' }],
      table: {
        show: false,
        expanded: false,
        label: 'Data Table',
        indexLabel: ''
      }
    } as any

    const { container, rerender } = render(<CdcChart config={config} interactionLabel='chart-metadata-test' />)

    expect(await screen.findByText('Chart')).toBeInTheDocument()

    rerender(
      <CdcChart
        config={{
          ...config,
          dataMetadata: { source: 'June file' }
        }}
        interactionLabel='chart-metadata-test'
      />
    )

    expect(await screen.findByText('Chart June file')).toBeInTheDocument()
    expect(screen.getByText('Intro June file')).toBeInTheDocument()
    expect(container.textContent).toContain('Legend June file')
    expect(container.textContent).toContain('Legend description June file')
    expect(screen.getAllByText('June file', { selector: 'strong' }).length).toBeGreaterThanOrEqual(2)
  })

  it('parses inline markup in top y-axis titles', async () => {
    const { container } = render(
      <CdcChart
        config={
          {
            type: 'chart',
            visualizationType: 'Bar',
            data: [{ category: 'A', value: 1 }],
            xAxis: { dataKey: 'category' },
            yAxis: {
              titlePlacement: 'top',
              label:
                '<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><rect width="12" height="12" fill="#56b4e9"></rect></svg> Number of measles cases'
            },
            series: [{ dataKey: 'value' }],
            table: {
              show: false,
              expanded: false,
              label: 'Data Table',
              indexLabel: ''
            }
          } as any
        }
        interactionLabel='chart-top-y-axis-title-test'
      />
    )

    const topTitle = await screen.findByText('Number of measles cases')

    expect(topTitle.closest('.y-axis-top-title')).toBeTruthy()
    expect(container.querySelector('.y-axis-top-title svg rect')?.getAttribute('fill')).toBe('#56b4e9')
    expect(container.querySelector('.y-axis-top-title')?.textContent).not.toContain('<svg')
  })
})
