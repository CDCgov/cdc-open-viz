export type PaletteFallbackSource = 'palette-less' | 'default-overridden-legacy'

export type ConfigTracking = {
  modernizationAccepted?: boolean
  modernizationDiscarded?: boolean
  paletteFallbackSource?: PaletteFallbackSource
}
