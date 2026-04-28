import React from 'react'
import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import ConfigContext from '../../../ConfigContext'
import SmallMultipleTile from '../SmallMultipleTile'
import { createMockChartContext, createMockConfig } from '../../LinearChart/tests/mockConfigContext'

const linearChartConfigs = vi.hoisted(() => [] as any[])

vi.stubGlobal(
  'ResizeObserver',
  vi.fn(callback => ({
    observe: vi.fn(() => callback([{ contentRect: { width: 200, height: 300 } }])),
    unobserve: vi.fn(),
    disconnect: vi.fn()
  }))
)

vi.mock('@visx/responsive/lib/components/ParentSize', () => ({
  default: ({ children }) => children({ width: 200, height: 300 })
}))

vi.mock('../../LinearChart', async () => {
  const React = await vi.importActual<typeof import('react')>('react')
  const { default: ConfigContext } = await vi.importActual<any>('../../../ConfigContext')

  const MockLinearChart = () => {
    const { config } = React.useContext(ConfigContext)
    linearChartConfigs.push(config)
    return <div data-testid='mock-linear-chart' />
  }

  return {
    default: MockLinearChart
  }
})

describe('SmallMultipleTile', () => {
  beforeEach(() => {
    linearChartConfigs.length = 0
  })

  it('renders the top y-axis title below the tile title on the first tile in a row and sizes it from tile width', () => {
    const config = createMockConfig({
      smallMultiples: {
        mode: 'by-series',
        tilesPerRowDesktop: 3,
        tilesPerRowMobile: 1
      },
      series: [{ dataKey: 'Value', type: 'Line' }] as any,
      runtime: {
        ...createMockConfig().runtime,
        series: [{ dataKey: 'Value', type: 'Line' }] as any,
        seriesKeys: ['Value'],
        seriesLabels: { Value: 'Value' },
        seriesLabelsAll: ['Value']
      } as any
    })

    const context = createMockChartContext(config, {
      vizViewport: 'lg'
    } as any)

    const { container } = render(
      <ConfigContext.Provider value={context}>
        <SmallMultipleTile mode='by-series' config={config} data={[]} tileKey='Value' seriesKey='Value' isFirstInRow />
      </ConfigContext.Provider>
    )

    const header = container.querySelector('.tile-header')
    const title = screen.getByText('Value')
    const topLabel = container.querySelector('.y-axis-top-title')

    expect(header).toBeTruthy()
    expect(title).toBeTruthy()
    expect(topLabel).toBeTruthy()
    expect(topLabel).toHaveTextContent('Y-Axis')
    expect(topLabel).toHaveStyle({ fontSize: '14px' })
    expect(header?.firstElementChild).toBe(title)
    expect(header?.lastElementChild).toBe(topLabel)
  })

  it('does not render the top y-axis title on non-leading tiles in a row', () => {
    const config = createMockConfig({
      smallMultiples: {
        mode: 'by-series',
        tilesPerRowDesktop: 3,
        tilesPerRowMobile: 1
      },
      series: [{ dataKey: 'Value', type: 'Line' }] as any,
      runtime: {
        ...createMockConfig().runtime,
        series: [{ dataKey: 'Value', type: 'Line' }] as any,
        seriesKeys: ['Value'],
        seriesLabels: { Value: 'Value' },
        seriesLabelsAll: ['Value']
      } as any
    })

    const context = createMockChartContext(config, {
      vizViewport: 'lg'
    } as any)

    const { container } = render(
      <ConfigContext.Provider value={context}>
        <SmallMultipleTile
          mode='by-series'
          config={config}
          data={[]}
          tileKey='Value'
          seriesKey='Value'
          isFirstInRow={false}
        />
      </ConfigContext.Provider>
    )

    expect(container.querySelector('.y-axis-top-title')).toBeFalsy()
    expect(linearChartConfigs[0].hideYAxisLabel).toBe(false)
  })

  it('does not render the top y-axis title when the author hides the y-axis label', () => {
    const config = createMockConfig({
      hideYAxisLabel: true,
      smallMultiples: {
        mode: 'by-series',
        tilesPerRowDesktop: 3,
        tilesPerRowMobile: 1
      },
      series: [{ dataKey: 'Value', type: 'Line' }] as any,
      runtime: {
        ...createMockConfig().runtime,
        series: [{ dataKey: 'Value', type: 'Line' }] as any,
        seriesKeys: ['Value'],
        seriesLabels: { Value: 'Value' },
        seriesLabelsAll: ['Value']
      } as any
    })

    const context = createMockChartContext(config, {
      vizViewport: 'lg'
    } as any)

    const { container } = render(
      <ConfigContext.Provider value={context}>
        <SmallMultipleTile mode='by-series' config={config} data={[]} tileKey='Value' seriesKey='Value' isFirstInRow />
      </ConfigContext.Provider>
    )

    expect(container.querySelector('.y-axis-top-title')).toBeFalsy()
    expect(linearChartConfigs[0].hideYAxisLabel).toBe(true)
  })
})
