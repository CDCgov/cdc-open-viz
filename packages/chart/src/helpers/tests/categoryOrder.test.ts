import { describe, expect, it } from 'vitest'
import { getOrderedCategoryValues, isCustomCategoryOrderActive, sortByCategoryOrder } from '../categoryOrder'

describe('categoryOrder helpers', () => {
  const data = [
    { category: 'A', value: 1 },
    { category: 'D', value: 4 },
    { category: 'C', value: 3 },
    { category: 'D', value: 5 },
    { category: 'L', value: 12 }
  ]

  it('detects custom category order only for categorical axes with configured values', () => {
    expect(
      isCustomCategoryOrderActive({
        xAxis: { type: 'categorical', dataKey: 'category', categoryOrderType: 'custom', categoryOrder: ['C'] } as any
      })
    ).toBe(true)

    expect(
      isCustomCategoryOrderActive({
        xAxis: { type: 'date', dataKey: 'category', categoryOrderType: 'custom', categoryOrder: ['C'] } as any
      })
    ).toBe(false)
  })

  it('sorts rows by configured category order and keeps duplicate rows stable', () => {
    const sorted = sortByCategoryOrder(data, {
      xAxis: {
        type: 'categorical',
        dataKey: 'category',
        categoryOrderType: 'custom',
        categoryOrder: ['A', 'C', 'D', 'L']
      } as any
    })

    expect(sorted.map(row => row.category)).toEqual(['A', 'C', 'D', 'D', 'L'])
    expect(sorted.map(row => row.value)).toEqual([1, 3, 4, 5, 12])
  })

  it('appends values missing from custom order in source order', () => {
    const sorted = sortByCategoryOrder(data, {
      xAxis: {
        type: 'categorical',
        dataKey: 'category',
        categoryOrderType: 'custom',
        categoryOrder: ['C']
      } as any
    })

    expect(sorted.map(row => row.category)).toEqual(['C', 'A', 'D', 'D', 'L'])
  })

  it('merges configured category order with newly discovered values', () => {
    expect(getOrderedCategoryValues(data, 'category', ['C', 'A'])).toEqual(['C', 'A', 'D', 'L'])
  })
})
