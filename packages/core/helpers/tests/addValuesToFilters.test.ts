import _ from 'lodash'
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
    const filtersCopy = _.cloneDeep(filters)
    const newFilters = addValuesToFilters(filtersCopy, data)
    expect(newFilters[0].values).toEqual(['apple', 'pear'])
    expect(newFilters[2].values).toEqual([3, 1, 4])
    expect(newFilters[1].values).toEqual(['b'])

    filtersCopy[0].active = 'pear'
    const newFilters2 = addValuesToFilters(filtersCopy, data)
    expect(newFilters2[0].values).toEqual(['apple', 'pear'])
    expect(newFilters2[2].values).toEqual([3, 1, 4])
    expect(newFilters2[1].values).toEqual([])
  })
  it('adds filter values based on parent queued active values', () => {
    const filtersCopy = _.cloneDeep([{ ...parentFilter, queuedActive: 'pear' }, childFilter, parentFilter2])
    const newFilters2 = addValuesToFilters(filtersCopy, data)
    expect(newFilters2[0].values).toEqual(['apple', 'pear'])
    expect(newFilters2[2].values).toEqual([3, 1, 4])
    expect(newFilters2[1].values).toEqual([])

    filtersCopy[0].queuedActive = 'apple'
    const newFilters = addValuesToFilters(filtersCopy, data)
    expect(newFilters[0].values).toEqual(['apple', 'pear'])
    expect(newFilters[2].values).toEqual([3, 1, 4])
    expect(newFilters[1].values).toEqual(['b'])
  })
  it('works when data is an object', () => {
    const filtersCopy = _.cloneDeep(filters)
    const newFilters = addValuesToFilters(filtersCopy, { '0': data })
    expect(newFilters[0].values).toEqual(['apple', 'pear'])
    expect(newFilters[2].values).toEqual([3, 1, 4])
    // This test is failing
    // data is only an object when using map data according to Adam Doe.
    //expect(newFilters[1].values).toEqual([])
  })
  it('works for nested dropdowns', () => {
    const nestedParentFilter = {
      ...parentFilter,
      filterStyle: 'nested-dropdown',
      subGrouping: { columnName: 'childColumn' }
    }
    const newFilters = addValuesToFilters([nestedParentFilter], data)
    expect(newFilters[0].values).toEqual(['apple', 'pear'])
    expect(newFilters[0].subGrouping.valuesLookup).toEqual({ apple: { values: ['a', 'b'] }, pear: { values: ['c'] } })
    nestedParentFilter.active = 'apple'
    expect(newFilters[0].subGrouping.active).toEqual('a')
  })
  it('maintains nested custom order', () => {
    const nestedParentFilter = {
      ...parentFilter,
      subGrouping: { columnName: 'childColumn', valuesLookup: { apple: { orderedValues: ['b', 'a'] } } }
    }
    const newFilters = addValuesToFilters([nestedParentFilter], data)
    expect(newFilters[0].values).toEqual(['apple', 'pear'])
    expect(newFilters[0].subGrouping.valuesLookup.apple.orderedValues).toEqual(['b', 'a'])
  })
})
