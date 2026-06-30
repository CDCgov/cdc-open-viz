import { describe, expect, it, vi } from 'vitest'
import { createMockConfig } from '../../components/LinearChart/tests/mockConfigContext'

vi.mock('@cdc/core/helpers/getTextWidth', () => ({
  getTextWidth: (text: string) => text.length
}))

import { calculateLeftYAxisWidth } from '../calculateLeftYAxisWidth'

describe('calculateLeftYAxisWidth', () => {
  it('prefers supplied tick values when measuring labels', () => {
    const handleLeftTickFormatting = vi.fn(tick => String(tick))
    const yScale = {
      ticks: vi.fn(() => [0, 5000, 10000]),
      domain: vi.fn(() => [0, 10000])
    }

    calculateLeftYAxisWidth({
      config: createMockConfig({
        yAxis: {
          ...createMockConfig().yAxis,
          titlePlacement: 'side'
        }
      }),
      data: [],
      yScale,
      numTicks: 3,
      tickValues: [0, 5, 10],
      parentWidth: 400,
      tickLabelFont: 'normal 16px sans-serif',
      axisLabelFontSize: 16,
      handleLeftTickFormatting
    })

    expect(yScale.ticks).not.toHaveBeenCalled()
    expect(handleLeftTickFormatting.mock.calls.map(call => call[0])).toEqual([0, 5, 10])
  })
})
