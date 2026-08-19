import {
  divergentColorDistribution,
  mapV1ColorDistribution,
  qualitativeStandardColorDistribution,
  v2ColorDistribution
} from '@cdc/core/helpers/palettes/colorDistributions'
import { getColorPaletteVersion } from '@cdc/core/helpers/getColorPaletteVersion'
import type { MapConfig } from '../types/MapConfig'

export const isV2MapColorDistributionEligible = (config: MapConfig, amount: number) => {
  return getColorPaletteVersion(config) === 2 && amount <= 9 && Boolean(v2ColorDistribution[amount])
}

export const getMapColorDistribution = (config: MapConfig, amount: number): number[] | undefined => {
  if (!isV2MapColorDistributionEligible(config, amount)) return undefined

  const paletteName = config.general.palette?.name || config.color
  if (paletteName?.includes('qualitative_standard')) {
    if (config.general.palette.distributionVersion !== '2.0') return undefined

    const distribution = qualitativeStandardColorDistribution[amount]
    if (!distribution || !paletteName.endsWith('reverse')) return distribution

    return [...distribution].reverse().map(index => 8 - index)
  }

  if (config.general.palette.distributionVersion === '1.0') {
    return mapV1ColorDistribution[amount]
  }

  if (config.general.palette.distributionVersion !== '2.0') return undefined

  if (paletteName?.includes('divergent')) {
    return divergentColorDistribution[amount]
  }

  return v2ColorDistribution[amount]
}
