import type { PreliminaryDataItem } from '../../../types/ChartConfig'

type EffectLegendSeries = {
  dataKey: string
  originalDataKey?: string
  dynamicCategory?: string
  weight?: number
}

type ResolveEffectLegendStyleArgs = {
  effect: PreliminaryDataItem
  data: Record<string, any>[]
  series: EffectLegendSeries[]
  seriesLabels?: Record<string, string>
  colorScale: (value: string) => string
}

export type EffectLegendStyle = {
  color: string
  weight: number
  matchedSeries: string[]
}

const effectiveWeight = (weight: number | undefined) => {
  const parsed = Number(weight)
  return Number.isFinite(parsed) && parsed >= 1 ? parsed : 2
}

const hasRenderableValue = (value: unknown) =>
  value !== '' && value !== null && value !== undefined && Number.isFinite(Number(value))

export const resolveEffectLegendStyle = ({
  effect,
  data,
  series,
  seriesLabels = {},
  colorScale
}: ResolveEffectLegendStyleArgs): EffectLegendStyle => {
  const configuredSeries = new Set(effect.seriesKeys || [])
  const matchedSeries = series.filter(seriesItem => {
    if (configuredSeries.size && !configuredSeries.has(seriesItem.dataKey)) return false

    return data.some(row => {
      if (row?.[effect.column] !== effect.value) return false
      if (seriesItem.dynamicCategory && row?.[seriesItem.dynamicCategory] !== seriesItem.dataKey) return false
      return hasRenderableValue(row?.[seriesItem.originalDataKey || seriesItem.dataKey])
    })
  })

  if (matchedSeries.length === 1) {
    const matched = matchedSeries[0]
    const label = seriesLabels[matched.dataKey] || matched.dataKey
    return { color: colorScale(label), weight: effectiveWeight(matched.weight), matchedSeries: [matched.dataKey] }
  }

  if (matchedSeries.length > 1) {
    return {
      color: '#000',
      weight: matchedSeries.reduce((sum, item) => sum + effectiveWeight(item.weight), 0) / matchedSeries.length,
      matchedSeries: matchedSeries.map(item => item.dataKey)
    }
  }

  return { color: '#000', weight: 2, matchedSeries: [] }
}
