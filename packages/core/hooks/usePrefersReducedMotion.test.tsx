import React from 'react'
import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import usePrefersReducedMotion, { REDUCED_MOTION_QUERY } from './usePrefersReducedMotion'

type MotionListener = (event?: MediaQueryListEvent) => void

const mockMatchMedia = (initialMatches: boolean) => {
  let matches = initialMatches
  const listeners = new Set<MotionListener>()
  const mediaQuery = {
    get matches() {
      return matches
    },
    media: REDUCED_MOTION_QUERY,
    addEventListener: vi.fn((_event: string, listener: MotionListener) => listeners.add(listener)),
    removeEventListener: vi.fn((_event: string, listener: MotionListener) => listeners.delete(listener))
  } as unknown as MediaQueryList

  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => mediaQuery)
  )

  return {
    mediaQuery,
    setMatches(nextMatches: boolean) {
      matches = nextMatches
      listeners.forEach(listener => listener())
    }
  }
}

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('usePrefersReducedMotion', () => {
  it('reads the initial preference and follows changes', () => {
    const preference = mockMatchMedia(false)
    const { result, unmount } = renderHook(() => usePrefersReducedMotion())

    expect(result.current).toBe(false)
    act(() => preference.setMatches(true))
    expect(result.current).toBe(true)

    unmount()
    expect(preference.mediaQuery.removeEventListener).toHaveBeenCalledWith('change', expect.any(Function))
  })

  it('returns false when matchMedia is unavailable', () => {
    vi.stubGlobal('matchMedia', undefined)
    const { result } = renderHook(() => usePrefersReducedMotion())

    expect(result.current).toBe(false)
  })
})
