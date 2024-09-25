// invertValue.test.js
import { invertValue } from '../scaling'
import { expect, describe, it, vi } from 'vitest'
describe('invertValue', () => {
  it('should return the inverted value if xScale has an invert function', () => {
    const xScale = {
      invert: vi.fn().mockReturnValue(50)
    }
    const value = 100

    const result = invertValue(xScale, value)

    expect(xScale.invert).toHaveBeenCalledWith(value)
    expect(result).toBe(50)
  })

  it('should return null if xScale does not have an invert function', () => {
    const xScale = {}
    const value = 100

    const result = invertValue(xScale, value)

    expect(result).toBeNull()
  })

  it('should return null if xScale is null or undefined', () => {
    const value = 100

    const resultWithNull = invertValue(null, value)
    const resultWithUndefined = invertValue(undefined, value)

    expect(resultWithNull).toBeNull()
    expect(resultWithUndefined).toBeNull()
  })
})
