import { describe, expect, it } from 'vitest'
import { formatNumber } from '../cove/number'

const baseConfig = {
  locale: 'en-US',
  visualizationType: 'Bar',
  yAxis: {},
  dataFormat: {
    abbreviated: false,
    bottomAbbreviated: false,
    bottomPrefix: '',
    bottomRoundTo: 0,
    bottomSuffix: '',
    bottomComas: false,
    commas: true,
    prefix: '$',
    preserveOriginalDecimals: false,
    rightPrefix: 'R$',
    rightRoundTo: 2,
    rightSuffix: '%',
    rightCommas: true,
    roundTo: 1,
    suffix: ''
  }
}

describe('formatNumber', () => {
  it('applies explicit right-axis column formatting overrides', () => {
    expect(
      formatNumber(1234.5, 'right', false, baseConfig as any, {
        addColPrefix: '',
        addColSuffix: ' units',
        addColRoundTo: 0,
        addColCommas: false
      })
    ).toBe('1235 units')
  })

  it('falls back to configured right-axis formatting when no override is present', () => {
    expect(formatNumber(1234.5, 'right', false, baseConfig as any)).toBe('R$1,234.50%')
  })
})
