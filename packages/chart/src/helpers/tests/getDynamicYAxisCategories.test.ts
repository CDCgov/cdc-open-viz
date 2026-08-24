import { describe, expect, it } from 'vitest'
import { getDynamicYAxisCategories } from '../getDynamicYAxisCategories'

const config = {
  lookupDataKey: 'ari_thresholds',
  geographyKey: 'geography',
  categories: [
    { label: 'Very Low', upperBoundKey: 'very_low_max' },
    { label: 'Low', upperBoundKey: 'low_max' },
    { label: 'Moderate', upperBoundKey: 'moderate_max' },
    { label: 'High', upperBoundKey: 'high_max' },
    { label: 'Very High', upperBoundKey: 'very_high_max' }
  ],
  axisMaxKey: 'axis_max'
}

describe('getDynamicYAxisCategories', () => {
  it('converts cumulative upper bounds into category heights and uses configured colors', () => {
    config.categories = config.categories.map((category, index) => ({ ...category, color: `color-${index}` }))
    const result = getDynamicYAxisCategories({
      config,
      data: [{ geography: 'Alabama' }],
      lookupData: [
        {
          geography: 'Alabama',
          very_low_max: 12.5,
          low_max: 16,
          moderate_max: 18,
          high_max: 21,
          very_high_max: 35,
          axis_max: 35
        }
      ]
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

  it('returns null for missing, invalid, or non-increasing lookup data', () => {
    expect(getDynamicYAxisCategories({ config, data: [{ geography: 'Georgia' }], lookupData: [] })).toBeNull()
    expect(
      getDynamicYAxisCategories({
        config,
        data: [{ geography: 'Georgia' }],
        lookupData: [
          {
            geography: 'Georgia',
            very_low_max: 12,
            low_max: 10,
            moderate_max: 18,
            high_max: 21,
            very_high_max: 35,
            axis_max: 35
          }
        ]
      })
    ).toBeNull()
  })

  it('returns null while filtered chart data is temporarily empty', () => {
    expect(getDynamicYAxisCategories({ config, data: [], lookupData: [] })).toBeNull()
  })
})
