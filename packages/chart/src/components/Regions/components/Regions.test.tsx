import React from 'react'
import { render } from '@testing-library/react'
import { scaleBand, scaleTime } from '@visx/scale'
import { describe, expect, it } from 'vitest'
import ConfigContext from '../../../ConfigContext'
import { createMockChartContext } from '../../LinearChart/tests/mockConfigContext'
import { RegionFills, useRegionLayouts, type RegionBoundaryMode } from './Regions'

const regions = [
  {
    from: 'A',
    to: 'B',
    label: 'Region',
    background: '#005ea8',
    color: '#1b1b1b'
  }
]

const RegionHarness = ({ xScale, seriesScale, boundaryMode, xMax = 300 }) => {
  const regionLayout = useRegionLayouts({ xScale, seriesScale, boundaryMode, xMax })
  return (
    <svg>
      <RegionFills layouts={regionLayout.layouts} yMax={200} />
    </svg>
  )
}

const renderRegion = ({
  boundaryMode,
  xScale,
  seriesScale,
  xMax = 300,
  configOverrides = {}
}: {
  boundaryMode: RegionBoundaryMode
  xScale: any
  seriesScale?: any
  xMax?: number
  configOverrides?: any
}) => {
  const context = createMockChartContext({
    regions,
    orientation: 'vertical',
    xAxis: {
      ...createMockChartContext().config.xAxis,
      type: 'categorical'
    },
    ...configOverrides
  })
  const result = render(
    <ConfigContext.Provider value={context}>
      <RegionHarness xScale={xScale} seriesScale={seriesScale} boundaryMode={boundaryMode} xMax={xMax} />
    </ConfigContext.Provider>
  )
  return result.container.querySelector('.region-fill')
}

describe('scale-owned region layouts', () => {
  it.each(['grouped', 'stacked', 'lollipop'])('uses the complete outer category allocation for %s bar regions', () => {
    const xScale = scaleBand({ domain: ['A', 'B', 'C'], range: [0, 300], padding: 0 })
    const fill = renderRegion({
      boundaryMode: 'band',
      xScale,
      seriesScale: scaleBand({ domain: ['one', 'two'], range: [0, 100] })
    })

    expect(Number(fill?.getAttribute('x'))).toBe(0)
    expect(Number(fill?.getAttribute('width'))).toBe(200)
  })

  it('uses category centers for point-mark regions', () => {
    const xScale = scaleBand({ domain: ['A', 'B', 'C'], range: [0, 300], padding: 0 })
    const fill = renderRegion({ boundaryMode: 'point', xScale })

    expect(Number(fill?.getAttribute('x'))).toBe(50)
    expect(Number(fill?.getAttribute('width'))).toBe(100)
  })

  it('uses the centered series-scale range for date-time bar groups', () => {
    const first = new Date('2024-01-01').getTime()
    const second = new Date('2024-01-08').getTime()
    const xScale = scaleTime({ domain: [first, second], range: [50, 250] })
    const seriesScale = scaleBand({ domain: ['one', 'two'], range: [0, 40], padding: 0 })
    const pointFill = renderRegion({
      boundaryMode: 'point',
      xScale,
      configOverrides: {
        regions: [{ ...regions[0], from: '2024-01-01', to: '2024-01-08' }],
        xAxis: {
          ...createMockChartContext().config.xAxis,
          type: 'date-time',
          dateParseFormat: '%Y-%m-%d'
        }
      }
    })
    const bandFill = renderRegion({
      boundaryMode: 'band',
      xScale,
      seriesScale,
      configOverrides: {
        regions: [{ ...regions[0], from: '2024-01-01', to: '2024-01-08' }],
        xAxis: {
          ...createMockChartContext().config.xAxis,
          type: 'date-time',
          dateParseFormat: '%Y-%m-%d'
        }
      }
    })

    expect(Number(bandFill?.getAttribute('x'))).toBe(Number(pointFill?.getAttribute('x')) - 20)
    expect(Number(bandFill?.getAttribute('width'))).toBe(Number(pointFill?.getAttribute('width')) + 40)
  })

  it('ends date-time Last Date bar regions at the final bar group edge', () => {
    const first = new Date('2024-01-01').getTime()
    const second = new Date('2024-01-08').getTime()
    const xScale = scaleTime({ domain: [first, second], range: [50, 250] })
    const seriesScale = scaleBand({ domain: ['one', 'two'], range: [0, 40], padding: 0 })
    const fill = renderRegion({
      boundaryMode: 'band',
      xScale,
      seriesScale,
      configOverrides: {
        regions: [
          {
            ...regions[0],
            from: '2024-01-01',
            to: '',
            toType: 'Last Date'
          }
        ],
        xAxis: {
          ...createMockChartContext().config.xAxis,
          type: 'date-time',
          dateParseFormat: '%Y-%m-%d'
        }
      }
    })

    const expectedFrom = Number(xScale(first)) - 20
    const expectedTo = Number(xScale(second)) + 20

    expect(Number(fill?.getAttribute('x'))).toBe(expectedFrom)
    expect(Number(fill?.getAttribute('width'))).toBe(expectedTo - expectedFrom)
  })

  it('ends Last Date regions at the final date band edge instead of the plot edge', () => {
    const first = new Date('2024-01-01').getTime()
    const second = new Date('2024-01-08').getTime()
    const third = new Date('2024-01-15').getTime()
    const xScale = scaleBand({ domain: [first, second, third], range: [0, 300], padding: 0.2 })
    const fill = renderRegion({
      boundaryMode: 'band',
      xScale,
      configOverrides: {
        regions: [
          {
            ...regions[0],
            from: '2024-01-01',
            to: '',
            toType: 'Last Date'
          }
        ],
        xAxis: {
          ...createMockChartContext().config.xAxis,
          type: 'date',
          dateParseFormat: '%Y-%m-%d'
        }
      }
    })

    const expectedFrom = Number(xScale(first))
    const expectedTo = Number(xScale(third)) + xScale.bandwidth()

    expect(Number(fill?.getAttribute('x'))).toBe(expectedFrom)
    expect(Number(fill?.getAttribute('width'))).toBeCloseTo(expectedTo - expectedFrom)
    expect(expectedTo).toBeLessThan(300)
  })
})
