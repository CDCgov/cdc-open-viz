export type RaceTiming = {
  elapsedSeconds: number
  frameKey: string
  isPlaying: boolean
  totalSeconds: number
}

export const DEFAULT_RACE_SECONDS_PER_FRAME = 0.5
export const RACE_SECONDS_PER_FRAME_OPTIONS = [0, DEFAULT_RACE_SECONDS_PER_FRAME, 1, 1.5] as const

export const clampRaceSecondsPerFrame = (value: unknown) => {
  if (value === null || value === '') return DEFAULT_RACE_SECONDS_PER_FRAME
  const parsed = Number(value)
  if (!Number.isFinite(parsed)) return DEFAULT_RACE_SECONDS_PER_FRAME
  return RACE_SECONDS_PER_FRAME_OPTIONS.reduce((closest, option) =>
    Math.abs(option - parsed) <= Math.abs(closest - parsed) ? option : closest
  )
}
