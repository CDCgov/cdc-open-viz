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
      autoMaxStrategy: 'clean-top-tick'
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

describe('getMinMax automatic max strategy', () => {
  it('uses clean-top-tick for automatic left-axis max when enabled', () => {
    expect(getResult(createConfig(), 25).max).toBe(25)
    expect(getResult(createConfig(), 101).max).toBe(120)
    expect(getResult(createConfig(), 1434).max).toBe(1500)
  })

  it('uses the raw automatic max when strategy is omitted or default', () => {
    expect(getResult(createConfig({ yAxis: { ...createConfig().yAxis, autoMaxStrategy: undefined } }), 101).max).toBe(
      101
    )
    expect(getResult(createConfig({ yAxis: { ...createConfig().yAxis, autoMaxStrategy: 'default' } }), 101).max).toBe(
      101
    )
  })

  it('bypasses clean-top-tick when the left-axis max is explicit', () => {
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

  it('uses clean-top-tick when the entered left-axis max is invalid', () => {
    const createConfigWithRuntimeMax = (max: string) =>
      createConfig({
        yAxis: {
          ...createConfig().yAxis,
          max
        },
        runtime: {
          ...createConfig().runtime,
          yAxis: {
            ...createConfig().runtime.yAxis,
            min: '',
            max
          }
        } as any
      })

    expect(getResult(createConfigWithRuntimeMax('50'), 101).max).toBe(120)
    expect(getResult(createConfigWithRuntimeMax('not-a-number'), 101).max).toBe(120)
  })

  it('applies smallestLeftAxisMax as a final author-provided floor without cleaning it', () => {
    const config = createConfig({
      yAxis: {
        ...createConfig().yAxis,
        autoMaxStrategy: 'clean-top-tick',
        smallestLeftAxisMax: 12
      }
    })

    expect(getResult(config, 3).max).toBe(12)
  })

  it('allows axis padding to increase the domain after the automatic max strategy', () => {
    const config = createConfig({
      yAxis: {
        ...createConfig().yAxis,
        autoMaxStrategy: 'clean-top-tick',
        enablePadding: true,
        scalePadding: 10
      }
    })

    expect(getResult(config, 25).max).toBeCloseTo(27.5)
  })

  it('uses clean-top-tick for combo left-axis max while leaving right-axis strategy to useRightAxis', () => {
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

    expect(result.leftMax).toBe(120)
    expect(result.rightMax).toBe(89)
  })
})
