import React from 'react'
import { act, render, renderHook, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import ConfigContext from '../../ConfigContext'
import { createMockChartContext, createMockConfig } from '../../components/LinearChart/tests/mockConfigContext'
import { useTooltip } from '../useTooltip'

vi.mock('@visx/event', () => ({
  localPoint: () => ({ x: 5, y: 5 })
}))

describe('useTooltip', () => {
  const showTooltip = vi.fn()
  const hideTooltip = vi.fn()
  const row = {
    'Cause of death': 'Hypertensive disorders of pregnancy',
    Percentage: 22,
    Count: 146
  }

  const baseConfig = createMockConfig()
  const config = createMockConfig({
    visualizationType: 'Bar',
    orientation: 'vertical',
    xAxis: {
      ...baseConfig.xAxis,
      type: 'categorical',
      dataKey: 'Cause of death'
    },
    yAxis: {
      ...baseConfig.yAxis,
      inlineLabel: ''
    },
    general: {
      showMissingDataLabel: true,
      hideNullValue: true
    } as any,
    series: [{ dataKey: 'Percentage', type: 'Bar', axis: 'Left', tooltip: true }] as any,
    columns: {
      Count: {
        name: 'Count',
        label: 'Count',
        prefix: '',
        suffix: '',
        roundToPlace: 0,
        commas: true,
        dataTable: true,
        tooltips: true
      }
    } as any,
    dataFormat: {
      abbreviated: false,
      bottomAbbreviated: false,
      bottomPrefix: '',
      bottomRoundTo: 0,
      bottomSuffix: '',
      bottomCommas: false,
      commas: false,
      prefix: '',
      preserveOriginalDecimals: false,
      rightPrefix: '',
      rightRoundTo: 0,
      rightSuffix: '',
      roundTo: 1,
      suffix: '%'
    } as any,
    runtime: {
      ...baseConfig.runtime,
      xAxis: {
        ...baseConfig.runtime.xAxis,
        type: 'categorical',
        dataKey: 'Cause of death'
      },
      yAxis: {
        ...baseConfig.runtime.yAxis,
        dataKey: 'Percentage'
      },
      series: [{ dataKey: 'Percentage', type: 'Bar', axis: 'Left', tooltip: true }],
      seriesKeys: ['Percentage'],
      seriesLabelsAll: ['Percentage']
    } as any
  })

  const xScale = Object.assign(
    vi.fn(() => 0),
    {
      domain: () => ['Hypertensive disorders of pregnancy'],
      bandwidth: () => 10
    }
  )
  const yScale = Object.assign(
    vi.fn(() => 0),
    {
      domain: () => ['Hypertensive disorders of pregnancy']
    }
  )

  const wrapper = ({ children }: React.PropsWithChildren) => (
    <ConfigContext.Provider value={createMockChartContext(config, { tableData: [row] })}>
      {children}
    </ConfigContext.Provider>
  )

  beforeEach(() => {
    showTooltip.mockClear()
    hideTooltip.mockClear()
  })

  it('does not apply the left-axis suffix to an additional tooltip column', () => {
    const { result } = renderHook(
      () =>
        useTooltip({
          xScale,
          yScale,
          showTooltip,
          hideTooltip,
          yAxisWidth: 0
        }),
      { wrapper }
    )

    act(() => result.current.handleTooltipMouseOver({}))

    expect(showTooltip).toHaveBeenCalledOnce()
    expect(showTooltip.mock.calls[0][0].tooltipData.data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ key: 'Percentage', value: '22.0%', kind: 'series' }),
        expect.objectContaining({ key: 'Count', value: '146', kind: 'extra' })
      ])
    )
  })

  it.each([
    {
      caseName: 'authored Series Name',
      visualizationType: 'Bar',
      seriesName: 'Rate Series',
      expected: 'Rate Series: 22.0%'
    },
    {
      caseName: 'inferred Series Name',
      visualizationType: 'Bar',
      seriesName: undefined,
      expected: 'Percentage: 22.0%'
    },
    {
      caseName: 'authored Series Name for a Forest Plot',
      visualizationType: 'Forest Plot',
      seriesName: 'Rate Series',
      expected: 'Rate Series: 22.0%'
    }
  ])('uses the $caseName instead of a customized Column Label', ({ visualizationType, seriesName, expected }) => {
    const series = {
      dataKey: 'Percentage',
      ...(seriesName ? { name: seriesName } : {}),
      type: 'Bar',
      axis: 'Left',
      tooltip: true
    }
    const tooltipConfig = createMockConfig({
      ...config,
      visualizationType: visualizationType as any,
      series: [series] as any,
      columns: {
        ...config.columns,
        Percentage: { name: 'Percentage', label: 'Rate Column' }
      } as any,
      runtime: {
        ...config.runtime,
        series: [series],
        seriesLabels: { Percentage: seriesName || 'Percentage' }
      } as any
    })
    const tooltipWrapper = ({ children }: React.PropsWithChildren) => (
      <ConfigContext.Provider value={createMockChartContext(tooltipConfig, { tableData: [row] })}>
        {children}
      </ConfigContext.Provider>
    )
    const { result } = renderHook(
      () =>
        useTooltip({
          xScale,
          yScale,
          showTooltip,
          hideTooltip,
          yAxisWidth: 0
        }),
      { wrapper: tooltipWrapper }
    )
    const TooltipListItem = result.current.TooltipListItem

    render(<TooltipListItem row={{ key: 'Percentage', value: '22.0%', kind: 'series' }} index={1} />)

    expect(screen.getByText(expected)).toBeTruthy()
  })

  it.each([
    { caseName: 'standard chart', visualizationType: 'Bar' },
    { caseName: 'Forest Plot', visualizationType: 'Forest Plot' }
  ])('preserves an additional column label that matches a series key for a $caseName', ({ visualizationType }) => {
    const series = {
      dataKey: 'Percentage',
      name: 'Rate Series',
      type: 'Bar',
      axis: 'Left',
      tooltip: true
    }
    const tooltipConfig = createMockConfig({
      ...config,
      visualizationType: visualizationType as any,
      series: [series] as any,
      runtime: {
        ...config.runtime,
        series: [series],
        seriesLabels: { Percentage: 'Rate Series' }
      } as any
    })
    const tooltipWrapper = ({ children }: React.PropsWithChildren) => (
      <ConfigContext.Provider value={createMockChartContext(tooltipConfig, { tableData: [row] })}>
        {children}
      </ConfigContext.Provider>
    )
    const { result } = renderHook(
      () =>
        useTooltip({
          xScale,
          yScale,
          showTooltip,
          hideTooltip,
          yAxisWidth: 0
        }),
      { wrapper: tooltipWrapper }
    )
    const TooltipListItem = result.current.TooltipListItem

    render(<TooltipListItem row={{ key: 'Percentage', value: '146', kind: 'extra' }} index={2} />)

    expect(screen.getByText('Percentage: 146')).toBeTruthy()
    expect(screen.queryByText('Rate Series: 146')).toBeNull()
  })
})
