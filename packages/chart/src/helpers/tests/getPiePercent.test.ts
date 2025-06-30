// getPiePercent.test.ts
import { getPiePercent } from '../getPiePercent'

describe('getPiePercent', () => {
  it('cgets percentages for purely numeric strings', () => {
    const data = [{ A: '1' }, { A: '3' }, { A: '6' }]
    const result = getPiePercent(data, 'A')

    // sum = 1 + 3 + 6 = 10
    expect(result[0].A).toBeCloseTo((1 / 10) * 100) // 10%
    expect(result[1].A).toBeCloseTo((3 / 10) * 100) // 30%
    expect(result[2].A).toBeCloseTo((6 / 10) * 100) // 60%
  })

  it('shandle non numbers like "ABC', () => {
    const data = [{ A: '1' }, { A: 'ABC' }, { A: '2' }]
    const result = getPiePercent(data, 'A')

    expect(result[0].A).toBeCloseTo((1 / 3) * 100)
    expect(result[1].A).toBe('ABC')
    expect(result[2].A).toBeCloseTo((2 / 3) * 100)
  })

  it('handles all-zero total by producing 0%', () => {
    const data = [{ A: '0' }, { A: '0' }]
    const result = getPiePercent(data, 'A')
    expect(result[0].A).toBe(0)
    expect(result[1].A).toBe(0)
  })

  it('leaves rows missing the key entirely unchanged', () => {
    const data = [{ A: '2' }, { B: 'foo' }]
    const result = getPiePercent(data, 'A')

    expect(result[0].A).toBeCloseTo(100)
    expect(result[1]).toEqual({ B: 'foo' })
  })
})
