import { describe, expect, it } from 'vitest'
import { applyConfigDefaults } from '../applyConfigDefaults'

describe('applyConfigDefaults', () => {
  it('recursively fills missing and undefined plain-object properties', () => {
    expect(
      applyConfigDefaults(
        { nested: { authored: 'yes', missing: undefined } },
        { top: true, nested: { authored: 'no', missing: 'filled', deep: { value: 1 } } }
      )
    ).toEqual({ top: true, nested: { authored: 'yes', missing: 'filled', deep: { value: 1 } } })
  })

  it('preserves explicit falsey values and null', () => {
    expect(
      applyConfigDefaults(
        { falseValue: false, zero: 0, empty: '', nullable: null },
        { falseValue: true, zero: 1, empty: 'default', nullable: {}, missing: 'filled' }
      )
    ).toEqual({ falseValue: false, zero: 0, empty: '', nullable: null, missing: 'filled' })
  })

  it('treats arrays as atomic authored values', () => {
    expect(applyConfigDefaults({ values: [] }, { values: [1, 2, 3] })).toEqual({ values: [] })
  })

  it('mutates neither input', () => {
    const config = { nested: { value: undefined }, values: [{ authored: true }] }
    const defaults = { nested: { value: 1 }, values: [{ fallback: true }] }
    const originalConfig = structuredClone(config)
    const originalDefaults = structuredClone(defaults)

    const result = applyConfigDefaults(config, defaults)
    ;(result as any).nested.value = 2
    ;(result as any).values[0].authored = false

    expect(config).toEqual(originalConfig)
    expect(defaults).toEqual(originalDefaults)
  })

  it('contains no visualization-specific behavior', () => {
    expect(
      applyConfigDefaults(
        { type: 'chart', visualizationType: 'HeatMap', legend: { style: '' } },
        { legend: { style: 'gradient', position: 'top' }, orientation: 'vertical' }
      )
    ).toEqual({
      type: 'chart',
      visualizationType: 'HeatMap',
      legend: { style: '', position: 'top' },
      orientation: 'vertical'
    })
  })
})
