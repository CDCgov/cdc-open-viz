import type { ChartConfig } from '../types/ChartConfig'

export type PaletteFallbackSource = 'palette-less' | 'default-overridden-legacy'
export type ChartPaletteMigrationClassification = 'modern' | 'normally-migrated-legacy' | PaletteFallbackSource

const hasNonemptyString = (value: unknown): value is string => typeof value === 'string' && value.trim().length > 0
const hasNonemptyColors = (value: unknown): boolean => Array.isArray(value) && value.length > 0

const chartTypesWithLegacyLoadingDefaults = new Set(['Line', 'HeatMap', 'Horizon Chart', 'Sankey'])

/**
 * Reproduces the palette precedence of the standalone chart loader before defaults
 * are removed. Fallback classifications are stored verbatim in config tracking so
 * migration can distinguish omitted palettes from overridden legacy palettes.
 */
export const classifyChartPaletteForLoading = (
  config: Partial<ChartConfig> & Record<string, any>
): ChartPaletteMigrationClassification => {
  if (hasNonemptyString(config.general?.palette?.name)) return 'modern'

  const legacyPalette = hasNonemptyString(config.palette) || hasNonemptyString(config.color)
  if (!legacyPalette) return 'palette-less'

  const hasCustomColors =
    hasNonemptyColors(config.customColors) ||
    hasNonemptyColors(config.general?.palette?.customColors) ||
    hasNonemptyColors(config.general?.palette?.customColorsOrdered)

  if (hasCustomColors || config.general) return 'normally-migrated-legacy'

  const typeDefaultOverridesLegacy = chartTypesWithLegacyLoadingDefaults.has(config.visualizationType || '')
  const ordinaryDefaultOverridesPalette = hasNonemptyString(config.palette) && !hasNonemptyString(config.color)

  return typeDefaultOverridesLegacy || ordinaryDefaultOverridesPalette
    ? 'default-overridden-legacy'
    : 'normally-migrated-legacy'
}
