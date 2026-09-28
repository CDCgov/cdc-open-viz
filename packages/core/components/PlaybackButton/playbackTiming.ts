export const DEFAULT_PLAYBACK_SECONDS_PER_FRAME = 0.5
export const PLAYBACK_SECONDS_PER_FRAME_OPTIONS = [0, DEFAULT_PLAYBACK_SECONDS_PER_FRAME, 1, 1.5] as const

export type PlaybackSecondsPerFrame = (typeof PLAYBACK_SECONDS_PER_FRAME_OPTIONS)[number]

export const normalizePlaybackSecondsPerFrame = (value: unknown): PlaybackSecondsPerFrame => {
  if (value === null || value === '') return DEFAULT_PLAYBACK_SECONDS_PER_FRAME

  const parsed = Number(value)
  if (!Number.isFinite(parsed)) return DEFAULT_PLAYBACK_SECONDS_PER_FRAME

  return PLAYBACK_SECONDS_PER_FRAME_OPTIONS.reduce((closest, option) =>
    Math.abs(option - parsed) <= Math.abs(closest - parsed) ? option : closest
  )
}
