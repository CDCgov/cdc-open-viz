import { describe, expect, it, vi } from 'vitest'
import { createMockConfig } from '../../components/LinearChart/tests/mockConfigContext'

vi.mock('@cdc/core/helpers/getTextWidth', () => ({
  getTextWidth: (text: string) => text.length
}))

import { calculateRightYAxisWidth } from '../calculateRightYAxisWidth'

const formatNumber = (value: any) => String(value)
const tickLabelFont = 'normal 16px sans-serif'
const axisLabelFontSize = 16

const createRightAxisConfig = (yAxisOverrides = {}, runtimeYAxisOverrides = {}) => {
  const baseConfig = createMockConfig()

  return createMockConfig({
    yAxis: {
      ...baseConfig.yAxis,
      rightAxisSize: 0,
      rightHideAxis: false,
      rightHideLabel: false,
      rightHideTicks: false,
      rightLabel: '',
      rightLabelOffsetSize: 0,
      rightTitlePlacement: 'top',
      ...yAxisOverrides
    },
    runtime: {
      ...baseConfig.runtime,
      yAxis: {
        ...baseConfig.runtime.yAxis,
        rightHideTicks: false,
        ...runtimeYAxisOverrides
      }
    }
  })
}

describe('calculateRightYAxisWidth', () => {
  it('uses measured right tick label space when saved rightAxisSize is zero', () => {
    const width = calculateRightYAxisWidth({
      axisLabelFontSize,
      config: createRightAxisConfig(),
      formatNumber,
      tickLabelFont,
      tickValues: [0, 1000],
      yScaleRight: undefined
    })

    expect(width).toBe(17)
  })

  it('reserves side-title offset space when it is wider than right tick labels', () => {
    const width = calculateRightYAxisWidth({
      axisLabelFontSize,
      config: createRightAxisConfig({
        rightLabel: 'New Participants',
        rightLabelOffsetSize: 36,
        rightTitlePlacement: 'side'
      }),
      formatNumber,
      tickLabelFont,
      tickValues: [0, 10],
      yScaleRight: undefined
    })

    expect(width).toBe(57)
  })

  it('keeps a larger configured rightAxisSize', () => {
    const width = calculateRightYAxisWidth({
      axisLabelFontSize,
      config: createRightAxisConfig({ rightAxisSize: 100 }),
      formatNumber,
      tickLabelFont,
      tickValues: [0, 1000],
      yScaleRight: undefined
    })

    expect(width).toBe(100)
  })

  it('allows no gutter when all right-axis content is hidden', () => {
    const width = calculateRightYAxisWidth({
      axisLabelFontSize,
      config: createRightAxisConfig(
        {
          rightHideAxis: true,
          rightHideLabel: true,
          rightTitlePlacement: 'top'
        },
        {
          rightHideTicks: true
        }
      ),
      formatNumber,
      tickLabelFont,
      tickValues: [],
      yScaleRight: undefined
    })

    expect(width).toBe(0)
  })
})
