import { describe, expect, it } from 'vitest'
import { compareNatural, sortByNatural, sortByNumber, toSortableNumber } from '../sorting'

describe('sorting helpers', () => {
  it('sorts labels in natural numeric order', () => {
    expect(['Week 10', 'Week 2', 'Week 1'].sort(compareNatural)).toEqual(['Week 1', 'Week 2', 'Week 10'])
  })

  it('sorts labels in descending natural numeric order without mutating input', () => {
    const labels = ['1', '10', '2']

    const sorted = sortByNatural(labels, value => value, 'desc')

    expect(sorted).toEqual(['10', '2', '1'])
    expect(sorted).not.toBe(labels)
    expect(labels).toEqual(['1', '10', '2'])
  })

  it('parses sortable numbers from formatted strings', () => {
    expect(toSortableNumber('1,234.5')).toBe(1234.5)
  })

  it('sorts by numeric accessors without mutating input', () => {
    const rows = [{ value: '1,000' }, { value: '20' }, { value: 3 }]

    const sorted = sortByNumber(rows, row => row.value)

    expect(sorted).toEqual([{ value: 3 }, { value: '20' }, { value: '1,000' }])
    expect(sorted).not.toBe(rows)
    expect(rows).toEqual([{ value: '1,000' }, { value: '20' }, { value: 3 }])
  })

  it('keeps non-numeric values after numeric values in either direction', () => {
    const rows = [{ value: 'n/a' }, { value: '10' }, { value: '2' }]

    expect(sortByNumber(rows, row => row.value).map(row => row.value)).toEqual(['2', '10', 'n/a'])
    expect(sortByNumber(rows, row => row.value, 'desc').map(row => row.value)).toEqual(['10', '2', 'n/a'])
  })
})
