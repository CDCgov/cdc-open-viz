import { describe, expect, it } from 'vitest'
import {
  dashboardFilterOrderOptions,
  filterOrderOptions,
  nestedFilterOrderOptions,
  visualizationFilterOrderOptions
} from '../filterOrderOptions'

const values = options => options.map(option => option.value)

describe('filterOrderOptions', () => {
  it('defines the shared order values and editor-specific subsets', () => {
    expect(values(filterOrderOptions)).toEqual(['asc', 'desc', 'cust', 'column', 'data'])
    expect(values(visualizationFilterOrderOptions)).toEqual(['asc', 'desc', 'cust', 'column'])
    expect(values(dashboardFilterOrderOptions)).toEqual(['asc', 'desc', 'cust', 'data'])
    expect(values(nestedFilterOrderOptions)).toEqual(['asc', 'desc', 'cust'])
    expect(dashboardFilterOrderOptions[dashboardFilterOrderOptions.length - 1].label).toBe('Source Data Order')
  })
})
