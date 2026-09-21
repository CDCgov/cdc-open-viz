import type { ChartConfig } from '../types/ChartConfig'

export type ChartPaletteMigrationClassification = 'modern' | 'normally-migrated-legacy' | 'frozen-fallback'

const hasNonemptyString = (value: unknown): value is string => typeof value === 'string' && value.trim().length > 0
const hasNonemptyColors = (value: unknown): boolean => Array.isArray(value) && value.length > 0

const chartTypesWithLegacyLoadingDefaults = new Set(['Line', 'HeatMap', 'Horizon Chart', 'Sankey'])

/**
 * Reproduces the palette precedence of the standalone chart loader before defaults
 * are removed. Charts that displayed a loader fallback are classified together so
 * migration can materialize that appearance as an explicit palette.
 */
export const classifyChartPaletteForLoading = (
  config: Partial<ChartConfig> & Record<string, any>
): ChartPaletteMigrationClassification => {
  if (hasNonemptyString(config.general?.palette?.name)) return 'modern'

  const legacyPalette = hasNonemptyString(config.palette) || hasNonemptyString(config.color)
  if (!legacyPalette) return 'frozen-fallback'

  const hasCustomColors =
    hasNonemptyColors(config.customColors) ||
    hasNonemptyColors(config.general?.palette?.customColors) ||
    hasNonemptyColors(config.general?.palette?.customColorsOrdered)

  if (hasCustomColors || config.general) return 'normally-migrated-legacy'

  const typeDefaultOverridesLegacy = chartTypesWithLegacyLoadingDefaults.has(config.visualizationType || '')
  const ordinaryDefaultOverridesPalette = hasNonemptyString(config.palette) && !hasNonemptyString(config.color)

  return typeDefaultOverridesLegacy || ordinaryDefaultOverridesPalette ? 'frozen-fallback' : 'normally-migrated-legacy'
}
