import { afterEach, describe, expect, it, vi } from 'vitest'
import cacheBustingString from '../cacheBustingString'

describe('cacheBustingString', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('returns a token that changes every six hours', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T06:30:00.000Z'))

    const sixHours = 1000 * 60 * 60 * 6

    expect(cacheBustingString()).toBe(`${Math.round(Date.now() / sixHours)}`)
  })
})
