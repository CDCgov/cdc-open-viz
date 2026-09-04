import { describe, expect, it } from 'vitest'
import { getStackedVerticalBarThickness } from './BarChart.StackedVertical'

describe('getStackedVerticalBarThickness', () => {
  it.each(['date', 'date-time'])('does not apply bar thickness twice for a %s axis', () => {
    expect(
      getStackedVerticalBarThickness({
        isDateAxisType: true,
        dateScaleWidth: 40,
        xMax: 400,
        barCount: 4,
        barThickness: 0.8
      })
    ).toBe(40)
  })

  it('applies bar thickness to categorical bars', () => {
    expect(
      getStackedVerticalBarThickness({
        isDateAxisType: false,
        dateScaleWidth: 40,
        xMax: 400,
        barCount: 4,
        barThickness: 0.8
      })
    ).toBe(80)
  })
})
