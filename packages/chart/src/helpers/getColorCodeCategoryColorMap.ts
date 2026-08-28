import { getPaletteColors } from '@cdc/core/helpers/palettes/utils'
import { ChartConfig } from '../types/ChartConfig'

export const getColorCodeCategoryColorMap = (
  config: ChartConfig,
  tableData: Record<string, unknown>[],
  colorPalettes: Record<string, string[]>
): Map<unknown, string> => {
  const colorCode = config.legend?.colorCode
  if (!colorCode || !Array.isArray(tableData)) return new Map()

  const palette = getPaletteColors(config, colorPalettes)
  if (!palette.length) return new Map()

  const categoryColors = new Map<unknown, string>()

  tableData.forEach(row => {
    const category = row[colorCode]

    if (!categoryColors.has(category)) {
      categoryColors.set(category, palette[categoryColors.size % palette.length])
    }
  })

  return categoryColors
}
