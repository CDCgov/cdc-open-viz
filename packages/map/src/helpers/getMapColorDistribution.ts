import {
  divergentColorDistribution,
  qualitativeStandardColorDistribution,
  v2ColorDistribution
} from '@cdc/core/helpers/palettes/colorDistributions'
import type { MapConfig } from '../types/MapConfig'

export const isV2MapColorDistributionEligible = (config: MapConfig, amount: number) => {
  return config.general?.palette?.version === '2.1' && amount <= 9 && Boolean(v2ColorDistribution[amount])
}

export const getMapColorDistribution = (config: MapConfig, amount: number): number[] | undefined => {
  if (!isV2MapColorDistributionEligible(config, amount)) return undefined

  const paletteName = config.general.palette?.name || config.color
  if (paletteName?.includes('qualitative_standard')) {
    const distribution = qualitativeStandardColorDistribution[amount]
    if (!distribution || !paletteName.endsWith('reverse')) return distribution

    return [...distribution].reverse().map(index => 8 - index)
  }

  if (paletteName?.includes('divergent')) {
    return divergentColorDistribution[amount]
  }

  return v2ColorDistribution[amount]
}
