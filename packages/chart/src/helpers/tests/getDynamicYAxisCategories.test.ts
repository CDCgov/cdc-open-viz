import { describe, expect, it } from 'vitest'
import { getDynamicYAxisCategories } from '../getDynamicYAxisCategories'

const config = {
  categories: [
    { label: 'Very Low', upperBoundKey: 'very_low_max' },
    { label: 'Low', upperBoundKey: 'low_max' },
    { label: 'Moderate', upperBoundKey: 'moderate_max' },
    { label: 'High', upperBoundKey: 'high_max' },
    { label: 'Very High', upperBoundKey: 'very_high_max' }
  ]
}

describe('getDynamicYAxisCategories', () => {
  it('converts cumulative upper bounds into category heights and uses configured colors', () => {
    config.categories = config.categories.map((category, index) => ({ ...category, color: `color-${index}` }))
    const result = getDynamicYAxisCategories({
      config,
      data: [{ very_low_max: 12.5, low_max: 16, moderate_max: 18, high_max: 21, very_high_max: 35 }]
    })

    expect(result).toEqual({
      axisMax: 35,
      categories: [
        { label: 'Very Low', height: '12.5', color: 'color-0' },
        { label: 'Low', height: '3.5', color: 'color-1' },
        { label: 'Moderate', height: '2', color: 'color-2' },
        { label: 'High', height: '3', color: 'color-3' },
        { label: 'Very High', height: '14', color: 'color-4' }
      ]
    })
  })

  it('returns null for missing, invalid, or non-increasing current-row data', () => {
    expect(getDynamicYAxisCategories({ config, data: [{ very_low_max: 12 }] })).toBeNull()
    expect(
      getDynamicYAxisCategories({
        config,
        data: [{ very_low_max: 12, low_max: 10, moderate_max: 18, high_max: 21, very_high_max: 35 }]
      })
    ).toBeNull()
  })

  it('returns null while filtered chart data is temporarily empty', () => {
    expect(getDynamicYAxisCategories({ config, data: [] })).toBeNull()
  })

  it('leaves the final category open-ended when it has no upper-bound key', () => {
    const categories = config.categories.map((category, index) =>
      index === config.categories.length - 1 ? { ...category, upperBoundKey: undefined } : category
    )

    const result = getDynamicYAxisCategories({
      config: { categories },
      data: [{ very_low_max: 12.5, low_max: 16, moderate_max: 18, high_max: 21 }]
    })

    expect(result?.axisMax).toBeNull()
    expect(result?.categories.at(-1)).toEqual({ label: 'Very High', height: '', color: 'color-4' })
  })
})
