import { describe, expect, it, vi } from 'vitest'
import { getBarConfig } from '../index'

vi.mock('@cdc/core/helpers/getTextWidth', () => ({ getTextWidth: () => 8 }))

const resolveBar = (value: unknown, showZeroValueData = true) =>
  getBarConfig({
    bar: { key: 'percent', value },
    config: {
      preliminaryData: [],
      general: { showSuppressedSymbol: true, showMissingDataLabel: true, showZeroValueData }
    },
    defaultBarHeight: 3,
    defaultBarWidth: 3,
    barWidth: 40,
    isVertical: true,
    yAxisValue: 0,
    labelFontSize: 16
  })

describe('getBarConfig zero labels', () => {
  it.each([0, '0', '0.0', '0.00'])('shows a zero label for numeric source %s', value => {
    expect(resolveBar(value).absentDataLabel).toBe('0')
  })

  it.each([0, '0'])('respects disabled zero markers for %s', value => {
    expect(resolveBar(value, false).absentDataLabel).toBe('')
  })

  it.each([undefined, null, '', ' '])('preserves missing-data labels for %s', value => {
    expect(resolveBar(value).absentDataLabel).toBe('N/A')
  })
})
