import { describe, it, expect } from 'vitest'
import { crossTabFilterValues } from '../crossTabFilterValues'
import { SharedFilter } from '../../types/SharedFilter'

const makeFilter = (overrides: Partial<SharedFilter> = {}): SharedFilter =>
  ({
    key: 'State',
    columnName: 'State/Territory',
    type: 'datafilter',
    filterStyle: 'dropdown',
    order: 'asc',
    values: ['Alabama', 'California', 'Texas'],
    active: '',
    ...overrides
  } as SharedFilter)

describe('crossTabFilterValues', () => {
  it('carries the active value onto a matching filter (matched by columnName)', () => {
    const from = [makeFilter({ key: 'State/Territory (1)', active: 'California' })]
    const to = [makeFilter({ key: 'State/Territory', active: 'Alabama' })]

    const result = crossTabFilterValues(from, to)

    expect(result[0].active).toBe('California')
  })

  it('does not mutate the input filters', () => {
    const from = [makeFilter({ active: 'California' })]
    const to = [makeFilter({ active: 'Alabama' })]

    crossTabFilterValues(from, to)

    expect(to[0].active).toBe('Alabama')
  })

  it('leaves the target unchanged when no matching source filter exists', () => {
    const from = [makeFilter({ columnName: 'Pathogen', values: ['Flu'], active: 'Flu' })]
    const to = [makeFilter({ columnName: 'State/Territory', active: 'Alabama' })]

    const result = crossTabFilterValues(from, to)

    expect(result[0].active).toBe('Alabama')
  })

  it('keeps the target default when the carried value is not valid for the target', () => {
    const from = [makeFilter({ active: 'California' })]
    const to = [makeFilter({ values: ['Alabama', 'Texas'], active: 'Alabama' })]

    const result = crossTabFilterValues(from, to)

    expect(result[0].active).toBe('Alabama')
  })

  it('carries the value when the target has no configured values to validate against', () => {
    const from = [makeFilter({ active: 'California' })]
    const to = [makeFilter({ values: undefined, active: 'Alabama' })]

    const result = crossTabFilterValues(from, to)

    expect(result[0].active).toBe('California')
  })

  it('filters multi-select carried values down to those valid for the target', () => {
    const from = [makeFilter({ filterStyle: 'multi-select', active: ['California', 'Nevada'] })]
    const to = [makeFilter({ filterStyle: 'multi-select', values: ['Alabama', 'California'], active: [] })]

    const result = crossTabFilterValues(from, to)

    expect(result[0].active).toEqual(['California'])
  })

  it('adapts multi-select array to single-select string by taking first valid value', () => {
    const from = [makeFilter({ filterStyle: 'multi-select', active: ['Nevada', 'California', 'Texas'] })]
    const to = [makeFilter({ filterStyle: 'dropdown', active: 'Alabama' })]

    const result = crossTabFilterValues(from, to)

    expect(result[0].active).toBe('California')
  })

  it('wraps single-select string in array for multi-select target', () => {
    const from = [makeFilter({ filterStyle: 'dropdown', active: 'California' })]
    const to = [makeFilter({ filterStyle: 'multi-select', active: [] })]

    const result = crossTabFilterValues(from, to)

    expect(result[0].active).toEqual(['California'])
  })

  it('keeps single-select default when source array has no valid values', () => {
    const from = [makeFilter({ filterStyle: 'multi-select', active: ['Nevada', 'Wyoming'] })]
    const to = [makeFilter({ filterStyle: 'dropdown', values: ['Alabama', 'California'], active: 'Alabama' })]

    const result = crossTabFilterValues(from, to)

    expect(result[0].active).toBe('Alabama')
  })

  it('keeps multi-select default when filtering an array leaves nothing', () => {
    const from = [makeFilter({ filterStyle: 'multi-select', active: ['Nevada', 'Wyoming'] })]
    const to = [makeFilter({ filterStyle: 'multi-select', values: ['Alabama', 'California'], active: [] })]

    const result = crossTabFilterValues(from, to)

    expect(result[0].active).toEqual([])
  })

  it('matches by setByQueryParameter when columnName is absent', () => {
    const from = [makeFilter({ columnName: undefined, setByQueryParameter: 'state', active: 'California' })]
    const to = [makeFilter({ columnName: undefined, setByQueryParameter: 'state', active: 'Alabama' })]

    const result = crossTabFilterValues(from, to)

    expect(result[0].active).toBe('California')
  })

  it('carries queuedActive alongside active', () => {
    const from = [makeFilter({ active: 'California', queuedActive: 'Texas' })]
    const to = [makeFilter({ active: 'Alabama' })]

    const result = crossTabFilterValues(from, to)

    expect(result[0].queuedActive).toBe('Texas')
  })

  it('returns the target list unchanged when either list is empty', () => {
    const to = [makeFilter({ active: 'Alabama' })]
    expect(crossTabFilterValues([], to)).toBe(to)
    expect(crossTabFilterValues(to, [])).toEqual([])
  })
})
