import { VizFilter } from '../../types/VizFilter'
import { addValuesToFilters } from '../addValuesToFilters'
import { describe, it, expect, vi } from 'vitest'

describe('addValuesToFilters', () => {
  const parentFilter = { columnName: 'parentColumn', id: 11, active: 'apple', values: [] } as VizFilter
  const parentFilter2 = { columnName: 'parentColumn2', id: 22, active: '1', values: [] } as VizFilter
  const childFilter = { columnName: 'childColumn', id: 33, parents: [11, 22], values: [] } as VizFilter
  const data = [
    { parentColumn: 'apple', parentColumn2: 3, childColumn: 'a' },
    { parentColumn: 'apple', parentColumn2: 1, childColumn: 'b' },
    { parentColumn: 'pear', parentColumn2: 4, childColumn: 'c' }
  ]
  const filters: VizFilter[] = [parentFilter, childFilter, parentFilter2]
  it('adds filter values based on parent active values', () => {
    const newFilters = addValuesToFilters<VizFilter>(filters, data)
    expect(newFilters[0].values).toEqual(['apple', 'pear'])
    expect(newFilters[2].values).toEqual([3, 1, 4])
    expect(newFilters[1].values).toEqual(['b'])

    filters[0].active = 'pear'
    const newFilters2 = addValuesToFilters<VizFilter>(filters, data)
    expect(newFilters2[0].values).toEqual(['apple', 'pear'])
    expect(newFilters2[2].values).toEqual([3, 1, 4])
    expect(newFilters2[1].values).toEqual([])
  })
})
