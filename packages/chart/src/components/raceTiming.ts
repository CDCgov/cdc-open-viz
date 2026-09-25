export type RaceTiming = {
  elapsedSeconds: number
  frameKey: string
  isPlaying: boolean
  totalSeconds: number
}

export const DEFAULT_RACE_SECONDS_PER_FRAME = 0.5
export const MIN_RACE_SECONDS_PER_FRAME = 0
export const MAX_RACE_SECONDS_PER_FRAME = 1.5
export const RACE_SECONDS_PER_FRAME_STEP = 0.5

export const clampRaceSecondsPerFrame = (value: unknown) => {
  const parsed = Number(value)
  if (!Number.isFinite(parsed)) return DEFAULT_RACE_SECONDS_PER_FRAME
  const clamped = Math.min(MAX_RACE_SECONDS_PER_FRAME, Math.max(MIN_RACE_SECONDS_PER_FRAME, parsed))
  return Math.round(clamped / RACE_SECONDS_PER_FRAME_STEP) * RACE_SECONDS_PER_FRAME_STEP
}
