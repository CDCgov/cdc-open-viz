import { describe, expect, it } from 'vitest'
import { compareNumericText, sortByNumber, sortByNumericText, toSortableNumber } from '../sorting'

describe('sorting helpers', () => {
  it('sorts labels with embedded numbers in numeric-aware order', () => {
    expect(['Week 10', 'Week 2', 'Week 1'].sort(compareNumericText)).toEqual(['Week 1', 'Week 2', 'Week 10'])
  })

  it('sorts labels with embedded numbers in descending order without mutating input', () => {
    const labels = ['1', '10', '2']

    const sorted = sortByNumericText(labels, value => value, 'desc')

    expect(sorted).toEqual(['10', '2', '1'])
    expect(sorted).not.toBe(labels)
    expect(labels).toEqual(['1', '10', '2'])
  })

  it('sorts case-insensitively while preserving accent differences', () => {
    expect(sortByNumericText(['résumé', 'resume', 'Resume', 'résume'])).toEqual([
      'resume',
      'Resume',
      'résume',
      'résumé'
    ])
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
