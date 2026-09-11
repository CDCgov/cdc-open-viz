import React from 'react'
import { act, render, renderHook, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import ConfigContext from '../../ConfigContext'
import { createMockChartContext, createMockConfig } from '../../components/LinearChart/tests/mockConfigContext'
import { type TooltipRow } from '../../helpers/tooltipHelpers'
import { type ChartConfig } from '../../types/ChartConfig'
import { type ChartContext } from '../../types/ChartContext'
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

  const renderTooltipListItem = (
    tooltipConfig: ChartConfig,
    tooltipRow: TooltipRow,
    {
      index = 1,
      useMarkerColumn = false,
      contextOverrides = {}
    }: { index?: number; useMarkerColumn?: boolean; contextOverrides?: Partial<ChartContext> } = {}
  ) => {
    const tooltipWrapper = ({ children }: React.PropsWithChildren) => (
      <ConfigContext.Provider value={createMockChartContext(tooltipConfig, { tableData: [row], ...contextOverrides })}>
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

    return render(<TooltipListItem row={tooltipRow} index={index} useMarkerColumn={useMarkerColumn} />)
  }

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
      caseName: 'customized Column Label over an authored Series Name',
      visualizationType: 'Bar',
      seriesName: 'Rate Series',
      columnLabel: 'Rate Column',
      expected: 'Rate Column: 22.0%'
    },
    {
      caseName: 'inferred Series Name when the Column Label matches the data key',
      visualizationType: 'Bar',
      seriesName: undefined,
      columnLabel: 'Percentage',
      expected: 'Percentage: 22.0%'
    },
    {
      caseName: 'authored Series Name when the Column Label matches the data key',
      visualizationType: 'Bar',
      seriesName: 'Rate Series',
      columnLabel: 'Percentage',
      expected: 'Rate Series: 22.0%'
    },
    {
      caseName: 'authored Series Name when the Column Label is cleared',
      visualizationType: 'Bar',
      seriesName: 'Rate Series',
      columnLabel: '',
      expected: 'Rate Series: 22.0%'
    },
    {
      caseName: 'customized Column Label for a Forest Plot',
      visualizationType: 'Forest Plot',
      seriesName: 'Rate Series',
      columnLabel: 'Rate Column',
      expected: 'Rate Column: 22.0%'
    }
  ])('uses the $caseName', ({ visualizationType, seriesName, columnLabel, expected }) => {
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
        Percentage: { name: 'Percentage', label: columnLabel }
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

  it('preserves standard x-axis heading rendering', () => {
    renderTooltipListItem(config, {
      key: 'Cause of death',
      value: 'Hypertensive disorders of pregnancy',
      kind: 'heading'
    })

    expect(screen.getByText(/Hypertensive disorders of pregnancy/)).toHaveClass('tooltip-heading')
  })

  it('preserves horizontal Bar heading rendering', () => {
    const horizontalBarConfig = createMockConfig({
      ...config,
      orientation: 'horizontal',
      runtime: {
        ...config.runtime,
        yAxis: { ...config.runtime.yAxis, label: 'Cause' }
      } as any
    })

    renderTooltipListItem(horizontalBarConfig, {
      key: 'Cause of death',
      value: 'Hypertensive disorders of pregnancy',
      kind: 'heading'
    })

    expect(screen.getByText(/Cause:.*Hypertensive disorders of pregnancy/)).toHaveClass('tooltip-heading')
  })

  it('preserves Pie calculated-area heading rendering', () => {
    const pieConfig = createMockConfig({
      ...config,
      visualizationType: 'Pie',
      dataFormat: { ...config.dataFormat, showPiePercent: true } as any
    })

    renderTooltipListItem(pieConfig, {
      key: 'Percentage',
      value: 'Calculated Area',
      kind: 'heading'
    })

    expect(screen.getByText(/Calculated Area/)).toHaveClass('tooltip-heading')
  })

  it('preserves Forest Plot heading rendering', () => {
    const forestPlotConfig = createMockConfig({
      ...config,
      visualizationType: 'Forest Plot'
    })

    renderTooltipListItem(forestPlotConfig, {
      key: 'Cause of death',
      value: 'Hypertensive disorders of pregnancy',
      kind: 'heading'
    })

    expect(screen.getByText(/Cause of death:.*Hypertensive disorders of pregnancy/)).toHaveClass('tooltip-heading')
  })

  it.each([
    { caseName: 'standard', orientation: 'vertical' as const },
    { caseName: 'horizontal Bar', orientation: 'horizontal' as const }
  ])('preserves custom date formatting for a $caseName heading', ({ orientation }) => {
    const dateConfig = createMockConfig({
      ...config,
      orientation,
      xAxis: { ...config.xAxis, type: 'date', dataKey: 'Date' },
      tooltips: { ...config.tooltips, dateDisplayFormat: '%Y' },
      runtime: {
        ...config.runtime,
        xAxis: { ...config.runtime.xAxis, type: 'date', dataKey: 'Date', label: 'Date' },
        yAxis: { ...config.runtime.yAxis, label: 'Date' }
      } as any
    })

    renderTooltipListItem(
      dateConfig,
      { key: 'Date', value: '2025-01-02', kind: 'heading' },
      {
        contextOverrides: {
          parseDate: value => `parsed-${value}`,
          formatDate: value => `date-${value}`,
          formatTooltipsDate: value => `tooltip-${value}`
        }
      }
    )

    expect(screen.getByText('Date: tooltip-parsed-2025-01-02')).toHaveClass('tooltip-heading')
  })

  it('hides a matching suppression row when suppressed symbols are disabled', () => {
    const suppressionConfig = createMockConfig({
      ...config,
      general: { ...config.general, showSuppressedSymbol: false } as any,
      preliminaryData: [
        {
          label: 'Suppressed',
          type: 'suppression',
          displayTooltip: true,
          value: '22.0%',
          column: 'Percentage'
        }
      ] as any
    })

    const { container } = renderTooltipListItem(suppressionConfig, {
      key: 'Percentage',
      value: '22.0%',
      kind: 'series'
    })

    expect(container.querySelector('li')).toBeNull()
  })

  it('preserves suppression replacement text and gray styling when symbols are shown', () => {
    const suppressionConfig = createMockConfig({
      ...config,
      general: { ...config.general, showSuppressedSymbol: true } as any,
      preliminaryData: [
        {
          label: 'Suppressed',
          type: 'suppression',
          displayTooltip: true,
          value: '22.0%',
          column: 'Percentage',
          displayGray: true
        }
      ] as any
    })

    renderTooltipListItem(suppressionConfig, {
      key: 'Percentage',
      value: '22.0%',
      kind: 'series'
    })

    expect(screen.getByText('Percentage: Suppressed')).toHaveStyle({ color: '#8b8b8a' })
  })

  it('leaves an unmatched suppression row unchanged', () => {
    const suppressionConfig = createMockConfig({
      ...config,
      general: { ...config.general, showSuppressedSymbol: false } as any,
      preliminaryData: [
        {
          label: 'Suppressed',
          type: 'suppression',
          displayTooltip: true,
          value: 'Different value',
          column: 'Percentage',
          displayGray: true
        }
      ] as any
    })

    renderTooltipListItem(suppressionConfig, {
      key: 'Percentage',
      value: '22.0%',
      kind: 'series'
    })

    expect(screen.getByText('Percentage: 22.0%')).not.toHaveStyle({ color: '#8b8b8a' })
  })

  it.each([
    { markerColor: '#123456', markerShape: 'square' as const, expectedShape: 'square', expectedSwatches: 1 },
    { markerColor: undefined, markerShape: 'square' as const, expectedShape: 'square', expectedSwatches: 0 },
    { markerColor: '#654321', markerShape: undefined, expectedShape: 'circle', expectedSwatches: 1 }
  ])(
    'preserves the marker column when markerColor is $markerColor and markerShape is $markerShape',
    ({ markerColor, markerShape, expectedShape, expectedSwatches }) => {
      const { container } = renderTooltipListItem(
        config,
        {
          key: 'Percentage',
          value: '22.0%',
          kind: 'series',
          markerColor,
          markerShape
        },
        { useMarkerColumn: true }
      )

      expect(container.querySelector('.tooltip-body')).toHaveClass('tooltip-body--marker-layout')
      expect(container.querySelector('.tooltip-marker-slot')).toBeTruthy()
      const swatches = container.querySelectorAll(`.tooltip-marker-swatch--${expectedShape}`)
      expect(swatches).toHaveLength(expectedSwatches)
      if (markerColor) expect(swatches[0]).toHaveStyle({ backgroundColor: markerColor })
      expect(container.querySelector('.tooltip-body-content')).toHaveTextContent('Percentage: 22.0%')
    }
  )
})
