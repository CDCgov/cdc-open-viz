import { describe, it, expect, vi, type Mock } from 'vitest'
import { getChangedFilters } from '../getChangedFilters'
import { getQueryParams, updateQueryString } from '../../../../helpers/queryStringUtils'
import _ from 'lodash'

vi.mock('../../../../helpers/queryStringUtils', () => ({
  getQueryParams: vi.fn(),
  updateQueryString: vi.fn()
}))

describe('getChangedFilters', () => {
  it('should update queuedActive when filterBehavior is "Apply Button"', () => {
    const filters = [{ queuedActive: false }]
    const index = 0
    const value = true
    const filterBehavior = 'Apply Button'

    const result = getChangedFilters(filters, index, value, filterBehavior)

    expect(result[index].queuedActive).toBe(true)
  })

  it('should update active for non-nested-dropdown filters', () => {
    const filters = [{ filterStyle: 'dropdown', active: false }]
    const index = 0
    const value = true
    const filterBehavior = 'Immediate'

    const result = getChangedFilters(filters, index, value, filterBehavior)

    expect(result[index].active).toBe(true)
  })

  it('should update active and subGrouping.active for nested-dropdown filters', () => {
    const filters = [
      {
        filterStyle: 'nested-dropdown',
        active: null,
        subGrouping: { active: null }
      }
    ]
    const index = 0
    const value = ['parentValue', 'childValue']
    const filterBehavior = 'Immediate'

    const result = getChangedFilters(filters, index, value, filterBehavior)

    expect(result[index].active).toBe('parentValue')
    expect(result[index].subGrouping.active).toBe('childValue')
  })

  it('should update query parameters when setByQueryParameter is defined', () => {
    const filters = [
      {
        filterStyle: 'dropdown',
        active: false,
        setByQueryParameter: 'filterParam'
      }
    ]
    const index = 0
    const value = true
    const filterBehavior = 'Immediate'

    ;(getQueryParams as Mock).mockReturnValue({ filterParam: false })

    getChangedFilters(filters, index, value, filterBehavior)

    expect(updateQueryString).toHaveBeenCalledWith({ filterParam: true })
  })

  it('should update query parameters for subGrouping when setByQueryParameter is defined', () => {
    const filters = [
      {
        filterStyle: 'nested-dropdown',
        active: null,
        subGrouping: {
          active: null,
          setByQueryParameter: 'subFilterParam'
        }
      }
    ]
    const index = 0
    const value = ['parentValue', 'childValue']
    const filterBehavior = 'Immediate'

    ;(getQueryParams as Mock).mockReturnValue({ subFilterParam: null })

    getChangedFilters(filters, index, value, filterBehavior)

    expect(updateQueryString).toHaveBeenCalledWith({ subFilterParam: 'childValue' })
  })
})
