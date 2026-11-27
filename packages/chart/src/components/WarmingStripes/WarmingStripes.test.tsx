import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ConfigContext from '../../ConfigContext'
import { createMockChartContext, createMockConfig } from '../LinearChart/tests/mockConfigContext'
import WarmingStripes from './WarmingStripes'

vi.mock('@cdc/core/helpers/metrics/helpers', () => ({
  publishAnalyticsEvent: vi.fn()
}))

const data = [
  { Year: '2020', Temperature: -0.2 },
  { Year: '2021', Temperature: 0.4 }
]

const renderWarmingStripes = (synchronizedXValue?: string, transformedData: Array<Record<string, unknown>> = data) => {
  const baseConfig = createMockConfig()
  const showTooltip = vi.fn()
  const handleTooltipMouseOff = vi.fn()
  const handleSmallMultipleHover = vi.fn()
  const config = createMockConfig({
    visualizationType: 'Warming Stripes',
    xAxis: { ...baseConfig.xAxis, dataKey: 'Year', type: 'categorical' },
    general: { palette: { name: 'divergent_blue_orange' } } as any,
    runtime: {
      ...baseConfig.runtime,
      originalXAxis: { dataKey: 'Year' },
      seriesKeys: ['Temperature'],
      uniqueId: 'warming-stripes-tooltip-test'
    } as any
  })
  const context = createMockChartContext(config, {
    transformedData,
    formatNumber: value => `${Number(value).toFixed(1)}°`,
    handleSmallMultipleHover
  })

  const rendered = render(
    <ConfigContext.Provider value={context}>
      <svg>
        <WarmingStripes
          xScale={undefined}
          yScale={undefined}
          xMax={200}
          yMax={100}
          yAxisWidth={20}
          synchronizedXValue={synchronizedXValue}
          showTooltip={showTooltip}
          handleTooltipMouseOff={handleTooltipMouseOff}
        />
      </svg>
    </ConfigContext.Provider>
  )

  return { ...rendered, showTooltip, handleTooltipMouseOff, handleSmallMultipleHover }
}

describe('WarmingStripes tooltips', () => {
  it('emits renderable tooltip rows on hover and updates the pointer position', () => {
    const { container, showTooltip, handleTooltipMouseOff } = renderWarmingStripes()
    const stripes = container.querySelectorAll('.warming-stripes rect')

    expect(stripes).toHaveLength(2)
    handleTooltipMouseOff.mockClear()

    fireEvent.mouseEnter(stripes[0], { clientY: 40 })

    expect(showTooltip).toHaveBeenLastCalledWith({
      tooltipLeft: 80,
      tooltipTop: 40,
      tooltipData: {
        data: [
          { key: 'Year', value: '2020', kind: 'heading' },
          {
            key: 'Temperature',
            value: '-0.2°',
            axisPosition: 'left',
            kind: 'series',
            seriesKey: 'Temperature'
          }
        ],
        dataXPosition: 80,
        dataYPosition: 40,
        useMarkerColumn: false
      }
    })
    expect(showTooltip.mock.calls.at(-1)?.[0].tooltipData.data.every(row => row.value !== undefined)).toBe(true)

    fireEvent.mouseMove(stripes[0], { clientY: 65 })

    expect(showTooltip.mock.calls.at(-1)?.[0].tooltipTop).toBe(65)
    expect(showTooltip.mock.calls.at(-1)?.[0].tooltipData.dataYPosition).toBe(65)
    expect(showTooltip.mock.calls.at(-1)?.[0].tooltipData.data).toEqual([
      { key: 'Year', value: '2020', kind: 'heading' },
      {
        key: 'Temperature',
        value: '-0.2°',
        axisPosition: 'left',
        kind: 'series',
        seriesKey: 'Temperature'
      }
    ])
    expect(showTooltip.mock.calls.at(-1)?.[0].tooltipData.data.every(row => row.value !== undefined)).toBe(true)

    fireEvent.mouseLeave(stripes[0])

    expect(handleTooltipMouseOff).toHaveBeenCalledOnce()
    expect(stripes[0]).toHaveAttribute('fill-opacity', '1')
    expect(stripes[1]).toHaveAttribute('fill-opacity', '1')
  })

  it('uses the same tooltip row contract for synchronized hover', () => {
    const { container, showTooltip, handleSmallMultipleHover } = renderWarmingStripes('2021')
    const stripes = container.querySelectorAll('.warming-stripes rect')

    expect(showTooltip).toHaveBeenCalledWith({
      tooltipLeft: 180,
      tooltipTop: 50,
      tooltipData: {
        data: [
          { key: 'Year', value: '2021', kind: 'heading' },
          {
            key: 'Temperature',
            value: '0.4°',
            axisPosition: 'left',
            kind: 'series',
            seriesKey: 'Temperature'
          }
        ],
        dataXPosition: 180,
        dataYPosition: 50,
        useMarkerColumn: false
      }
    })

    expect(stripes[0]).toHaveAttribute('fill-opacity', '0.5')
    expect(stripes[1]).toHaveAttribute('fill-opacity', '1')

    fireEvent.mouseLeave(stripes[1])

    expect(handleSmallMultipleHover).toHaveBeenLastCalledWith(null, null)
    expect(stripes[0]).toHaveAttribute('fill-opacity', '1')
    expect(stripes[1]).toHaveAttribute('fill-opacity', '1')
  })

  it('does not render a stripe for a non-numeric warming value', () => {
    const { container, showTooltip } = renderWarmingStripes(undefined, [
      { Year: '2020', Temperature: 'missing' },
      data[1]
    ])

    expect(container.querySelectorAll('.warming-stripes rect')).toHaveLength(1)
    expect(showTooltip).not.toHaveBeenCalled()
  })
})
