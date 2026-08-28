import { getPaletteColors } from '@cdc/core/helpers/palettes/utils'
import { ChartConfig } from '../types/ChartConfig'
import { getV2ChartDistributionColors } from './colorDistributionHelpers'

export const getColorCodeCategoryColorMap = (
  config: ChartConfig,
  tableData: Record<string, unknown>[],
  colorPalettes: Record<string, string[]>
): Map<unknown, string> => {
  const colorCode = config.legend?.colorCode
  if (!colorCode || !Array.isArray(tableData)) return new Map()

  let palette = getPaletteColors(config, colorPalettes)
  if (!palette.length) return new Map()

  const categoryColors = new Map<unknown, string>()

  const categories = Array.from(new Set(tableData.map(row => row[colorCode])))
  palette = getV2ChartDistributionColors(config, palette, categories.length) ?? palette

  categories.forEach((category, index) => {
    categoryColors.set(category, palette[index % palette.length])
  })

  return categoryColors
}
