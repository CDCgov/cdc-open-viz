import { describe, expect, it } from 'vitest'
import {
  DEFAULT_PLAYBACK_SECONDS_PER_FRAME,
  PLAYBACK_SECONDS_PER_FRAME_OPTIONS,
  normalizePlaybackSecondsPerFrame
} from './playbackTiming'

describe('playback timing', () => {
  it('exposes the shared timing choices and default', () => {
    expect(PLAYBACK_SECONDS_PER_FRAME_OPTIONS).toEqual([0, 0.5, 1, 1.5])
    expect(DEFAULT_PLAYBACK_SECONDS_PER_FRAME).toBe(0.5)
  })

  it.each([
    [0, 0],
    ['0.5', 0.5],
    [0.74, 0.5],
    [0.75, 1],
    [1.2, 1],
    [1.25, 1.5],
    [-1, 0],
    [10, 1.5]
  ])('normalizes %s to %s seconds', (input, expected) => {
    expect(normalizePlaybackSecondsPerFrame(input)).toBe(expected)
  })

  it.each([null, '', undefined, 'fast', Number.NaN, Number.POSITIVE_INFINITY])(
    'uses the default for invalid value %s',
    input => {
      expect(normalizePlaybackSecondsPerFrame(input)).toBe(DEFAULT_PLAYBACK_SECONDS_PER_FRAME)
    }
  )
})
