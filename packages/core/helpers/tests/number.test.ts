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

  it('ignores blank column rounding overrides and inherits configured precision', () => {
    expect(
      formatNumber(1234.56, 'left', false, baseConfig as any, {
        addColRoundTo: ''
      })
    ).toBe('$1,234.6')
  })

  it('keeps bottom-axis abbreviations when bottom commas are enabled', () => {
    const config = {
      ...baseConfig,
      dataFormat: {
        ...baseConfig.dataFormat,
        bottomCommas: true,
        bottomAbbreviated: true,
        bottomPrefix: '$'
      }
    }

    const result = formatNumber(50000, 'bottom', true, config as any)

    expect(result).toBe('$50K')
    expect(result).not.toBe('$50')
  })

  it('keeps pie percent suffixes on value columns but not additional columns with explicit blank suffixes', () => {
    const config = {
      ...baseConfig,
      visualizationType: 'Pie',
      dataFormat: {
        ...baseConfig.dataFormat,
        prefix: '',
        suffix: '',
        roundTo: 0
      }
    }

    expect(formatNumber(25, 'left', false, config as any)).toBe('25%')
    expect(
      formatNumber(200, 'left', false, config as any, {
        addColSuffix: '',
        addColRoundTo: 0,
        addColCommas: true
      })
    ).toBe('200')
  })

  it('formats values below dataCutoff as less than the cutoff threshold', () => {
    const config = {
      ...baseConfig,
      dataCutoff: '1',
      dataFormat: {
        ...baseConfig.dataFormat,
        prefix: '',
        suffix: '%',
        preserveOriginalDecimals: true
      }
    }

    expect(formatNumber(0, 'left', false, config as any)).toBe('<1%')
    expect(formatNumber(0.99, 'left', false, config as any)).toBe('<1%')
    expect(formatNumber(1, 'left', false, config as any)).toBe('1%')
    expect(formatNumber(1.04, 'left', false, config as any)).toBe('1.04%')
  })

  it('uses the authored dataCutoff precision for less-than labels', () => {
    const config = {
      ...baseConfig,
      dataCutoff: '0.5',
      dataFormat: {
        ...baseConfig.dataFormat,
        prefix: '',
        roundTo: 0,
        suffix: '%'
      }
    }

    expect(formatNumber(0.4, 'left', false, config as any)).toBe('<0.5%')
  })
})
