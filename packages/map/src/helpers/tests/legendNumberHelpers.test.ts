import { describe, expect, it } from 'vitest'
import { parseLegendNumber } from '../legendNumberHelpers'
import type { MapConfig } from '../../types/MapConfig'

const makePrimaryColumn = (
  overrides: Partial<MapConfig['columns']['primary']> = {}
): MapConfig['columns']['primary'] => ({
  name: 'value',
  ...overrides
})

describe('parseLegendNumber', () => {
  const primaryColumn = makePrimaryColumn()

  it.each([
    [12.5, 12.5],
    ['12.5', 12.5],
    ['-12.5', -12.5],
    ['+12.5', 12.5],
    ['-.5', -0.5],
    ['1.', 1],
    ['1,234.5', 1234.5]
  ])('parses ordinary numeric value %j', (value, expected) => {
    expect(parseLegendNumber(value, primaryColumn)).toBe(expected)
  })

  it('treats a trailing percentage as presentation rather than scaling the value', () => {
    expect(parseLegendNumber(' 12.5% ', primaryColumn)).toBe(12.5)
  })

  it('parses configured prefix and suffix values', () => {
    const configuredColumn = makePrimaryColumn({ prefix: '~', suffix: ' cases' })

    expect(parseLegendNumber('~1,234.5 cases', configuredColumn)).toBe(1234.5)
  })

  it('does not strip a configured percentage suffix twice', () => {
    const configuredColumn = makePrimaryColumn({ suffix: '%' })

    expect(parseLegendNumber('12%', configuredColumn)).toBe(12)
    expect(parseLegendNumber('12%%', configuredColumn)).toBeNull()
  })

  it.each(['$', '€', '£', '¥'])('parses the supported %s currency prefix', currencySymbol => {
    expect(parseLegendNumber(`${currencySymbol}1,234.5`, primaryColumn)).toBe(1234.5)
  })

  it.each([undefined, null, '', '   ', Number.NaN, Number.POSITIVE_INFINITY])(
    'rejects empty or non-finite value %j',
    value => {
      expect(parseLegendNumber(value, primaryColumn)).toBeNull()
    }
  )

  it.each(['12%5', '12-3', '1.2.3', '12 bananas', '~12 cases extra'])('rejects malformed numeric value %j', value => {
    expect(parseLegendNumber(value, makePrimaryColumn({ prefix: '~', suffix: ' cases' }))).toBeNull()
  })
})
