import React from 'react'
import { render } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import ConfigContext from '../../../ConfigContext'
import SmallMultiples from '../SmallMultiples'
import { createMockChartContext, createMockConfig } from '../../LinearChart/tests/mockConfigContext'

const tileProps = vi.hoisted(() => [] as any[])
const mockUseReduceData = vi.hoisted(() => vi.fn())
const mockUseScales = vi.hoisted(() => vi.fn())
const MockChartComponent = React.forwardRef<SVGAElement, { parentWidth: number; parentHeight: number }>(() => null)

vi.mock('../SmallMultipleTile', () => ({
  default: props => {
    tileProps.push(props)
    return <div data-testid={`tile-${props.tileKey}`} />
  }
}))

vi.mock('../../../hooks/useReduceData', () => ({
  default: (...args: any[]) => mockUseReduceData(...args)
}))

vi.mock('../../../hooks/useScales', () => ({
  default: (...args: any[]) => mockUseScales(...args)
}))

describe('SmallMultiples', () => {
  const createSmallMultiplesConfig = () =>
    createMockConfig({
      smallMultiples: {
        mode: 'by-column',
        tileColumn: 'Sex',
        independentYAxis: false,
        tilesPerRowDesktop: 2,
        tilesPerRowMobile: 1
      },
      series: [{ dataKey: 'Cases', type: 'Bar' }] as any,
      runtime: {
        ...createMockConfig().runtime,
        series: [{ dataKey: 'Cases', type: 'Bar' }],
        seriesKeys: ['Cases'],
        seriesLabelsAll: ['Cases']
      } as any
    })

  beforeEach(() => {
    tileProps.length = 0
    mockUseReduceData.mockReset()
    mockUseScales.mockReset()
    mockUseReduceData.mockReturnValue({
      minValue: 0,
      maxValue: 100,
      existPositiveValue: true,
      isAllLine: false
    })
    mockUseScales.mockReturnValue({
      min: 0,
      max: 100,
      yTickValues: [0, 50, 100]
    })
  })

  it('uses stable domain data for the shared Y-axis while rendering filtered tile data', () => {
    const filteredRows = [
      { Sex: 'Male', Year: '2019', Cases: 10 },
      { Sex: 'Female', Year: '2019', Cases: 20 }
    ]
    const stableDomainRows = [
      ...filteredRows,
      { Sex: 'Male', Year: '2020', Cases: 100 },
      { Sex: 'Female', Year: '2020', Cases: 80 }
    ]
    const config = createSmallMultiplesConfig()
    const context = createMockChartContext(config, {
      colorScale: vi.fn(),
      parentRef: { current: document.createElement('div') }
    } as any)

    render(
      <ConfigContext.Provider value={context}>
        <SmallMultiples
          ChartComponent={MockChartComponent}
          config={config}
          data={filteredRows}
          yAxisDomainData={stableDomainRows}
          parentWidth={600}
          parentHeight={300}
        />
      </ConfigContext.Provider>
    )

    const expectedSharedAxisRows = [
      { Sex: 'Female', Year: '2019', Cases: 20 },
      { Sex: 'Female', Year: '2020', Cases: 80 },
      { Sex: 'Male', Year: '2019', Cases: 10 },
      { Sex: 'Male', Year: '2020', Cases: 100 }
    ]

    expect(mockUseReduceData.mock.calls[0][1]).toEqual(expectedSharedAxisRows)
    expect(mockUseScales.mock.calls[0][0].data).toEqual(expectedSharedAxisRows)
    expect(mockUseScales.mock.calls[0][0].hasBoundarySuppression).toBe(false)
    expect(tileProps).toHaveLength(2)
    expect(tileProps[0].data).toBe(filteredRows)
    expect(tileProps[0].globalYAxisMax).toBe(100)
    expect(tileProps[0].globalYAxisTickValues).toEqual([0, 50, 100])
  })

  it('includes filtered-out tile values when calculating a stable shared Y-axis', () => {
    const filteredRows = [{ Sex: 'Male', Year: '2019', Cases: 10 }]
    const stableDomainRows = [...filteredRows, { Sex: 'Female', Year: '2019', Cases: 200 }]
    const config = createSmallMultiplesConfig()
    const context = createMockChartContext(config, {
      colorScale: vi.fn(),
      parentRef: { current: document.createElement('div') }
    } as any)

    render(
      <ConfigContext.Provider value={context}>
        <SmallMultiples
          ChartComponent={MockChartComponent}
          config={config}
          data={filteredRows}
          yAxisDomainData={stableDomainRows}
          parentWidth={600}
          parentHeight={300}
        />
      </ConfigContext.Provider>
    )

    expect(mockUseReduceData.mock.calls[0][1]).toEqual([
      { Sex: 'Female', Year: '2019', Cases: 200 },
      { Sex: 'Male', Year: '2019', Cases: 10 }
    ])
    expect(mockUseScales.mock.calls[0][0].data).toEqual([
      { Sex: 'Female', Year: '2019', Cases: 200 },
      { Sex: 'Male', Year: '2019', Cases: 10 }
    ])
    expect(mockUseScales.mock.calls[0][0].hasBoundarySuppression).toBe(false)
    expect(tileProps).toHaveLength(1)
    expect(tileProps[0].tileValue).toBe('Male')
    expect(tileProps[0].data).toBe(filteredRows)
  })

  it('passes hasBoundarySuppression from shared stable-domain boundary rows', () => {
    const filteredRows = [{ Sex: 'Male', Year: '2019', Cases: 10 }]
    const stableDomainRows = [
      { Sex: 'Female', Year: '2018', Cases: 'ABC' },
      { Sex: 'Male', Year: '2019', Cases: 10 }
    ]
    const config = createSmallMultiplesConfig()
    config.preliminaryData = [{ type: 'suppression', style: 'Dashed Small', column: '', value: 'ABC' }] as any
    const context = createMockChartContext(config, {
      colorScale: vi.fn(),
      parentRef: { current: document.createElement('div') }
    } as any)

    render(
      <ConfigContext.Provider value={context}>
        <SmallMultiples
          ChartComponent={MockChartComponent}
          config={config}
          data={filteredRows}
          yAxisDomainData={stableDomainRows as any}
          hasBoundarySuppression={true}
          parentWidth={600}
          parentHeight={300}
        />
      </ConfigContext.Provider>
    )

    expect(mockUseScales.mock.calls[0][0].hasBoundarySuppression).toBe(true)
  })
})
