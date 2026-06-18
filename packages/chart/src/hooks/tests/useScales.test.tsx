import React from 'react'
import { renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import ConfigContext from '../../ConfigContext'
import useScales from '../useScales'
import { createMockChartContext, createMockConfig } from '../../components/LinearChart/tests/mockConfigContext'

const mockGetMinMax = vi.fn(() => ({
  min: 0,
  max: 100,
  leftMax: 100,
  rightMax: 0
}))

vi.mock('../../helpers/getMinMax', () => ({
  default: (...args: any[]) => mockGetMinMax(...args)
}))

const config = createMockConfig({
  runtime: {
    ...createMockConfig().runtime,
    yAxis: {
      ...createMockConfig().runtime.yAxis,
      numTicks: 5
    }
  } as any
})

const createWrapper = () => {
  const context = createMockChartContext(config)

  return ({ children }: React.PropsWithChildren) => (
    <ConfigContext.Provider value={context}>{children}</ConfigContext.Provider>
  )
}

const baseProps = {
  config,
  data: [],
  tableData: [],
  minValue: 0,
  maxValue: 100,
  existPositiveValue: true,
  isAllLine: true,
  xAxisDataMapped: [1, 2, 3],
  xMax: 300,
  yMax: 200,
  currentViewport: 'lg' as const
}

describe('useScales', () => {
  beforeEach(() => {
    mockGetMinMax.mockReset()
    mockGetMinMax.mockReturnValue({
      min: 0,
      max: 100,
      leftMax: 100,
      rightMax: 0
    })
  })

  it('uses spaced inline labels as an effective clean-top-tick trigger', () => {
    mockGetMinMax.mockReturnValue({
      min: 0,
      max: 11.25,
      leftMax: 0,
      rightMax: 0
    })

    const result = renderHook(
      () =>
        useScales({
          ...baseProps,
          maxValue: 11.25,
          config: createMockConfig({
            yAxis: {
              ...createMockConfig().yAxis,
              autoMaxStrategy: 'default',
              inlineLabel: ' percent'
            },
            runtime: {
              ...createMockConfig().runtime,
              yAxis: {
                ...createMockConfig().runtime.yAxis,
                numTicks: 3
              }
            } as any
          }),
          hasSpacedInlineLabel: true
        }),
      {
        wrapper: createWrapper()
      }
    )

    expect(result.result.current.max).toBe(15)
    expect(result.result.current.yTickValues).toEqual([0, 5, 10, 15])
  })

  it('ignores manual y-axis padding while calculating inline-label headroom', () => {
    const configWithManualPadding = createMockConfig({
      yAxis: {
        ...createMockConfig().yAxis,
        enablePadding: true,
        scalePadding: 90
      }
    })

    renderHook(
      () => useScales({ ...baseProps, config: configWithManualPadding, hasSpacedInlineLabel: true }),
      {
        wrapper: createWrapper()
      }
    )

    expect(mockGetMinMax.mock.calls[0][0].config.yAxis).toMatchObject({
      enablePadding: false,
      scalePadding: 0
    })
    expect(mockGetMinMax).toHaveBeenCalledTimes(1)
  })

  it('does not finalize default strategy domains for single-word inline labels', () => {
    mockGetMinMax.mockReturnValue({
      min: 0,
      max: 11.25,
      leftMax: 0,
      rightMax: 0
    })

    const result = renderHook(
      () =>
        useScales({
          ...baseProps,
          config: createMockConfig({
            yAxis: {
              ...createMockConfig().yAxis,
              autoMaxStrategy: 'default',
              inlineLabel: '%'
            },
            runtime: {
              ...createMockConfig().runtime,
              yAxis: {
                ...createMockConfig().runtime.yAxis,
                numTicks: 3
              }
            } as any
          }),
          hasSpacedInlineLabel: false
        }),
      {
        wrapper: createWrapper()
      }
    )

    expect(result.result.current.max).toBe(11.25)
    expect(result.result.current.yTickValues).toBeUndefined()
  })

  it('keeps shared small-multiple Y domains on the finalized top tick instead of percent padding', () => {
    mockGetMinMax.mockReturnValue({
      min: 0,
      max: 11.25,
      leftMax: 0,
      rightMax: 0
    })

    const result = renderHook(
      () =>
        useScales({
          ...baseProps,
          config: createMockConfig({
            smallMultiples: {
              mode: 'by-column',
              tileColumn: 'group',
              independentYAxis: false
            },
            yAxis: {
              ...createMockConfig().yAxis,
              autoMaxStrategy: 'default',
              inlineLabel: ' percent'
            },
            runtime: {
              ...createMockConfig().runtime,
              yAxis: {
                ...createMockConfig().runtime.yAxis,
                numTicks: 3
              }
            } as any
          }),
          maxValue: 11.25,
          hasSpacedInlineLabel: true
        }),
      {
        wrapper: createWrapper()
      }
    )

    expect(result.result.current.max).toBe(15)
    expect(result.result.current.yTickValues).toEqual([0, 5, 10, 15])
    expect(result.result.current.yScale.ticks(3).at(-1)).toBe(15)
  })

  it('does not return explicit tick values when the primary Y-axis max is explicit', () => {
    mockGetMinMax.mockReturnValue({
      min: 0,
      max: 20,
      leftMax: 0,
      rightMax: 0
    })

    const result = renderHook(
      () =>
        useScales({
          ...baseProps,
          maxValue: 11.25,
          config: createMockConfig({
            yAxis: {
              ...createMockConfig().yAxis,
              autoMaxStrategy: 'clean-top-tick',
              inlineLabel: ' percent'
            },
            runtime: {
              ...createMockConfig().runtime,
              yAxis: {
                ...createMockConfig().runtime.yAxis,
                max: '20',
                numTicks: 3
              }
            } as any
          }),
          hasSpacedInlineLabel: true
        }),
      {
        wrapper: createWrapper()
      }
    )

    expect(result.result.current.max).toBe(20)
    expect(result.result.current.yTickValues).toBeUndefined()
  })

  it('does not use spaced inline labels as an effective clean-top-tick trigger for Combo charts', () => {
    mockGetMinMax.mockReturnValue({
      min: 0,
      max: 100,
      leftMax: 11.25,
      rightMax: 0
    })

    const result = renderHook(
      () =>
        useScales({
          ...baseProps,
          config: createMockConfig({
            visualizationType: 'Combo',
            yAxis: {
              ...createMockConfig().yAxis,
              autoMaxStrategy: 'default',
              inlineLabel: ' percent'
            },
            runtime: {
              ...createMockConfig().runtime,
              yAxis: {
                ...createMockConfig().runtime.yAxis,
                numTicks: 3
              }
            } as any
          }),
          maxValue: 101,
          hasSpacedInlineLabel: true
        }),
      {
        wrapper: createWrapper()
      }
    )

    expect(result.result.current.leftMax).toBe(11.25)
    expect(result.result.current.yTickValues).toBeUndefined()
  })

  it('finalizes Combo left-axis ticks when clean-top-tick is explicitly enabled', () => {
    mockGetMinMax.mockReturnValue({
      min: 0,
      max: 100,
      leftMax: 12,
      rightMax: 0
    })

    const result = renderHook(
      () =>
        useScales({
          ...baseProps,
          config: createMockConfig({
            visualizationType: 'Combo',
            yAxis: {
              ...createMockConfig().yAxis,
              autoMaxStrategy: 'clean-top-tick'
            },
            runtime: {
              ...createMockConfig().runtime,
              yAxis: {
                ...createMockConfig().runtime.yAxis,
                numTicks: 3
              }
            } as any
          }),
          maxValue: 101,
          hasSpacedInlineLabel: false
        }),
      {
        wrapper: createWrapper()
      }
    )

    expect(result.result.current.leftMax).toBe(15)
    expect(result.result.current.yTickValues).toEqual([0, 5, 10, 15])
  })

  it('uses the selected Y-axis domain rows for min/max calculation', () => {
    const renderedRows = [{ Date: '2024-01-01', value: 3 }]
    const domainRows = [
      { Date: '2024-01-01', value: 3 },
      { Date: '2024-01-02', value: 12 }
    ]

    renderHook(
      () =>
        useScales({
          ...baseProps,
          data: renderedRows,
          tableData: domainRows,
          yAxisDomainData: domainRows
        }),
      {
        wrapper: createWrapper()
      }
    )

    expect(mockGetMinMax.mock.calls[0][0].data).toBe(domainRows)
    expect(mockGetMinMax.mock.calls[0][0].tableData).toBe(domainRows)
  })
})
