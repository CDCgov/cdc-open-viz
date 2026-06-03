import { describe, expect, it } from 'vitest'
import getMinMax from '../getMinMax'
import { createMockConfig } from '../../components/LinearChart/tests/mockConfigContext'
import { ChartConfig } from '../../types/ChartConfig'

const leftSeries = { dataKey: 'Cases', type: 'Line', axis: 'Left', tooltip: true }
const rightSeries = { dataKey: 'Rate', type: 'Line', axis: 'Right', tooltip: true }

const createConfig = (overrides: Partial<ChartConfig> = {}) =>
  createMockConfig({
    visualizationType: 'Line',
    visualizationSubType: 'regular',
    yAxis: {
      ...createMockConfig().yAxis,
      type: 'linear',
      enablePadding: false,
      scalePadding: 0,
      min: '',
      max: '',
      autoMaxRounding: 'tick-friendly'
    },
    runtime: {
      ...createMockConfig().runtime,
      yAxis: {
        ...createMockConfig().runtime.yAxis,
        min: '',
        max: ''
      },
      series: [leftSeries],
      seriesKeys: ['Cases']
    } as any,
    series: [leftSeries],
    ...overrides
  })

const getResult = (config: ChartConfig, maxValue = 25) =>
  getMinMax({
    config,
    minValue: 0,
    maxValue,
    existPositiveValue: maxValue > 0,
    data: [{ Cases: maxValue }],
    tableData: [{ Cases: maxValue }],
    isAllLine: true
  })

describe('getMinMax auto max rounding', () => {
  it('rounds automatic left-axis max when tick-friendly rounding is enabled', () => {
    expect(getResult(createConfig(), 25).max).toBe(25)
    expect(getResult(createConfig(), 101).max).toBe(150)
    expect(getResult(createConfig(), 1434).max).toBe(1500)
  })

  it('preserves existing saved config behavior when rounding is omitted or none', () => {
    expect(getResult(createConfig({ yAxis: { ...createConfig().yAxis, autoMaxRounding: undefined } }), 25).max).toBe(25)
    expect(getResult(createConfig({ yAxis: { ...createConfig().yAxis, autoMaxRounding: 'none' } }), 25).max).toBe(25)
  })

  it('bypasses rounding when the left-axis max is explicit', () => {
    const config = createConfig({
      yAxis: {
        ...createConfig().yAxis,
        max: '100'
      },
      runtime: {
        ...createConfig().runtime,
        yAxis: {
          ...createConfig().runtime.yAxis,
          min: '',
          max: '100'
        }
      } as any
    })

    expect(getResult(config, 25).max).toBe(100)
  })

  it('applies smallestLeftAxisMax as a final author-provided floor without rounding it', () => {
    const config = createConfig({
      yAxis: {
        ...createConfig().yAxis,
        autoMaxRounding: 'tick-friendly',
        smallestLeftAxisMax: 12
      }
    })

    expect(getResult(config, 3).max).toBe(12)
  })

  it('allows axis padding to increase the domain after rounding', () => {
    const config = createConfig({
      yAxis: {
        ...createConfig().yAxis,
        autoMaxRounding: 'tick-friendly',
        enablePadding: true,
        scalePadding: 10
      }
    })

    expect(getResult(config, 25).max).toBeCloseTo(27.5)
  })

  it('rounds combo left-axis max while leaving right-axis rounding to useRightAxis', () => {
    const config = createConfig({
      visualizationType: 'Combo',
      series: [leftSeries, rightSeries],
      runtime: {
        ...createConfig().runtime,
        yAxis: {
          ...createConfig().runtime.yAxis,
          min: '',
          max: ''
        },
        series: [leftSeries, rightSeries],
        seriesKeys: ['Cases', 'Rate']
      } as any
    })

    const result = getMinMax({
      config,
      minValue: 0,
      maxValue: 101,
      existPositiveValue: true,
      data: [{ Cases: 101, Rate: 89 }],
      tableData: [{ Cases: 101, Rate: 89 }],
      isAllLine: false
    })

    expect(result.leftMax).toBe(150)
    expect(result.rightMax).toBe(89)
  })
})
