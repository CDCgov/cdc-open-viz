import { renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { createMockChartContext, createMockConfig } from '../../../LinearChart/tests/mockConfigContext'
import { useBarChart } from '../useBarChart'

const baseConfig = createMockConfig()

const makeConfigContext = (countColumnOverrides: Record<string, unknown> = {}) => {
  const config = createMockConfig({
    visualizationType: 'Bar',
    orientation: 'horizontal',
    barHeight: 25,
    xAxis: {
      ...baseConfig.xAxis,
      type: 'categorical',
      dataKey: 'Cause of death'
    },
    yAxis: {
      ...baseConfig.yAxis,
      labelPlacement: 'Below Bar'
    },
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
        tooltips: true,
        ...countColumnOverrides
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
      originalXAxis: {
        ...baseConfig.runtime.originalXAxis,
        dataKey: 'Cause of death'
      },
      series: [{ dataKey: 'Percentage', type: 'Bar', axis: 'Left', tooltip: true }],
      seriesKeys: ['Percentage'],
      seriesLabels: { Percentage: 'Percentage' },
      seriesLabelsAll: ['Percentage']
    } as any
  })

  return createMockChartContext(config, {
    tableData: [
      {
        'Cause of death': 'Cardiovascular conditions',
        Percentage: 22,
        Count: 146
      }
    ],
    updateConfig: vi.fn()
  })
}

describe('useBarChart', () => {
  it('adds raw percent decoration without replacing the formatted tooltip value', () => {
    const configContext = makeConfigContext()
    configContext.tableData[0].Percentage = '22.500%'
    const { result } = renderHook(() => useBarChart(vi.fn(), vi.fn(), configContext))

    expect(result.current.getTooltipValue('Percentage', 'Cardiovascular conditions', '22.5')).toBe('22.5%')
  })

  it('preserves a raw trailing percent sign for the matching dynamic category', () => {
    const configContext = makeConfigContext()
    configContext.config.series = [
      {
        dataKey: 'Data_Value',
        dynamicCategory: 'Age group',
        type: 'Bar',
        axis: 'Left',
        tooltip: true
      }
    ] as any
    configContext.tableData = [
      {
        'Cause of death': 'Cardiovascular conditions',
        'Age group': '65 years or older',
        Data_Value: '56.4%'
      }
    ]
    const { result } = renderHook(() => useBarChart(vi.fn(), vi.fn(), configContext))

    expect(result.current.getTooltipValue('65 years or older', 'Cardiovascular conditions', '56.4')).toBe('56.4%')
  })

  it('matches numeric dynamic-category values to their rendered string series keys', () => {
    const configContext = makeConfigContext()
    configContext.config.series = [
      {
        dataKey: 'Data_Value',
        dynamicCategory: 'Age group',
        type: 'Bar',
        axis: 'Left',
        tooltip: true
      }
    ] as any
    configContext.tableData = [
      {
        'Cause of death': 'Cardiovascular conditions',
        'Age group': 65,
        Data_Value: '56.4%'
      }
    ]
    const { result } = renderHook(() => useBarChart(vi.fn(), vi.fn(), configContext))

    expect(result.current.getTooltipValue('65', 'Cardiovascular conditions', '56.4')).toBe('56.4%')
  })

  it('uses the indexed raw row when static categories are duplicated', () => {
    const configContext = makeConfigContext()
    configContext.tableData = [
      { 'Cause of death': 'Repeated category', Percentage: '22.5%', Count: 146 },
      { 'Cause of death': 'Repeated category', Percentage: '30%', Count: 150 }
    ]
    const { result } = renderHook(() => useBarChart(vi.fn(), vi.fn(), configContext))

    expect(result.current.getTooltipValue('Percentage', 'Repeated category', '30.0', 1)).toBe('30.0%')
  })

  it('uses the brush-aligned raw row when a duplicate category subset shifts the rendered index', () => {
    const configContext = makeConfigContext()
    configContext.tableData = [
      { 'Cause of death': 'Repeated category', Percentage: 22.5, Count: 146 },
      { 'Cause of death': 'Repeated category', Percentage: '30%', Count: 150 }
    ]
    configContext.brushData = [configContext.tableData[1]]
    const { result } = renderHook(() => useBarChart(vi.fn(), vi.fn(), configContext))

    expect(result.current.getTooltipValue('Percentage', 'Repeated category', '30.0', 0)).toBe('30.0%')
  })

  it('uses the formatted tooltip value when the raw value is numeric', () => {
    const configContext = makeConfigContext()
    const { result } = renderHook(() => useBarChart(vi.fn(), vi.fn(), configContext))

    expect(result.current.getTooltipValue('Percentage', 'Cardiovascular conditions', '22.0')).toBe('22.0')
  })

  it('uses the formatted tooltip value when no raw row matches', () => {
    const configContext = makeConfigContext()
    const { result } = renderHook(() => useBarChart(vi.fn(), vi.fn(), configContext))

    expect(result.current.getTooltipValue('Percentage', 'Missing category', 'N/A')).toBe('N/A')
  })

  it('does not apply the left-axis suffix to an additional single-series tooltip column', () => {
    const configContext = makeConfigContext()
    const { result } = renderHook(() => useBarChart(vi.fn(), vi.fn(), configContext))

    expect(result.current.getAdditionalColumn('Percentage', 'Cardiovascular conditions')).toBe('Count : 146 <br/>')
  })

  it('applies an additional column suffix when one is configured', () => {
    const configContext = makeConfigContext({ suffix: ' deaths' })
    const { result } = renderHook(() => useBarChart(vi.fn(), vi.fn(), configContext))

    expect(result.current.getAdditionalColumn('Percentage', 'Cardiovascular conditions')).toBe(
      'Count : 146 deaths <br/>'
    )
  })
})
