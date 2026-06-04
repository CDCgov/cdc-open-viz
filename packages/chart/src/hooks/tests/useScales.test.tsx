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

const mockGetYAxisAutoPadding = vi.fn(() => 10)

vi.mock('../../helpers/getMinMax', () => ({
  default: (...args: any[]) => mockGetMinMax(...args)
}))

vi.mock('../../helpers/getYAxisAutoPadding', () => ({
  getYAxisAutoPadding: (...args: any[]) => mockGetYAxisAutoPadding(...args)
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
    mockGetMinMax.mockClear()
    mockGetYAxisAutoPadding.mockClear()
  })

  it('allows repeated padding passes for inline-label mode', () => {
    renderHook(() => useScales({ ...baseProps, yAxisAutoPaddingMode: 'inline-label' }), {
      wrapper: createWrapper()
    })

    expect(mockGetYAxisAutoPadding).toHaveBeenCalledTimes(3)
  })

  it('runs a single padding pass for top-title mode', () => {
    renderHook(() => useScales({ ...baseProps, yAxisAutoPaddingMode: 'top-title' }), {
      wrapper: createWrapper()
    })

    expect(mockGetYAxisAutoPadding).toHaveBeenCalledTimes(1)
  })

  it('ignores manual y-axis padding while calculating auto-padding', () => {
    const configWithManualPadding = createMockConfig({
      yAxis: {
        ...createMockConfig().yAxis,
        enablePadding: true,
        scalePadding: 90
      }
    })

    renderHook(() => useScales({ ...baseProps, config: configWithManualPadding, yAxisAutoPaddingMode: 'top-title' }), {
      wrapper: createWrapper()
    })

    expect(mockGetMinMax.mock.calls[0][0].config.yAxis).toMatchObject({
      enablePadding: false,
      scalePadding: 0
    })
    expect(mockGetYAxisAutoPadding.mock.calls[0][4].yAxis).toMatchObject({
      enablePadding: false,
      scalePadding: 0
    })
    expect(mockGetMinMax.mock.calls[1][0].config.yAxis).toMatchObject({
      enablePadding: true,
      scalePadding: 10
    })
  })
})
