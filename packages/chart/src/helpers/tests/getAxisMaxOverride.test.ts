import { describe, expect, it } from 'vitest'
import { getAxisMaxOverride } from '../getAxisMaxOverride'

describe('getAxisMaxOverride', () => {
  it('accepts finite entered values that meet the required max', () => {
    expect(getAxisMaxOverride({ value: '25', minimumValidMax: 20 })).toEqual({
      hasEnteredMax: true,
      hasValidMax: true,
      maxNumber: 25
    })
  })

  it('rejects missing or empty entered values', () => {
    expect(getAxisMaxOverride({ value: undefined, minimumValidMax: 0 }).hasValidMax).toBe(false)
    expect(getAxisMaxOverride({ value: null, minimumValidMax: 0 }).hasValidMax).toBe(false)
    expect(getAxisMaxOverride({ value: '', minimumValidMax: 0 }).hasValidMax).toBe(false)
  })

  it('rejects non-finite entered values', () => {
    expect(getAxisMaxOverride({ value: 'not-a-number', minimumValidMax: 0 }).hasValidMax).toBe(false)
    expect(getAxisMaxOverride({ value: Infinity, minimumValidMax: 0 }).hasValidMax).toBe(false)
  })

  it('rejects entered values below the required max', () => {
    expect(getAxisMaxOverride({ value: '19', minimumValidMax: 20 })).toMatchObject({
      hasEnteredMax: true,
      hasValidMax: false,
      maxNumber: 19
    })
  })

  it('supports the non-positive primary-axis rule by passing zero as the required max', () => {
    expect(getAxisMaxOverride({ value: '0', minimumValidMax: 0 }).hasValidMax).toBe(true)
    expect(getAxisMaxOverride({ value: '-1', minimumValidMax: 0 }).hasValidMax).toBe(false)
  })
})
