import { type ChartConfig } from '../../types/ChartConfig'

export const DEFAULT_BAR_RACE_MAX_BARS = 10

type DataRow = Record<string, unknown>

export type BarRaceItem = {
  category: string
  dataKey: string
  frame: string
  rank: number
  seriesKey: string
  value: number
}

export type BarRaceFrame = {
  key: string
  items: BarRaceItem[]
}

export type BarRaceProjection = {
  competitorCount: number
  hasDuplicateRows: boolean
  frames: BarRaceFrame[]
  globalMax: number
}

export type BarRaceEligibility = BarRaceProjection & {
  eligible: boolean
  reason?: string
}

const toFiniteNonnegativeNumber = (value: unknown): number | null => {
  if (typeof value !== 'string' && typeof value !== 'number') return null
  if (typeof value === 'string' && value.trim() === '') return null
  const numericValue = typeof value === 'string' ? Number(value.replaceAll(',', '').replace(/%$/, '')) : Number(value)
  return Number.isFinite(numericValue) && numericValue >= 0 ? numericValue : null
}

const getMaxBars = (config: Partial<ChartConfig>, competitorCount: number) => {
  const authoredMax = Number(config.barRace?.maxBars ?? DEFAULT_BAR_RACE_MAX_BARS)
  const roundedMax = Number.isFinite(authoredMax) ? Math.round(authoredMax) : DEFAULT_BAR_RACE_MAX_BARS
  return Math.max(1, Math.min(competitorCount, roundedMax))
}

export const buildBarRaceFrames = (config: Partial<ChartConfig>, data: DataRow[] = []): BarRaceProjection => {
  const series = Array.isArray(config.series) ? config.series.filter(item => item?.dataKey) : []
  const dynamicSeries = series.filter(item => item.dynamicCategory)
  const usesDynamicCategory = series.length === 1 && dynamicSeries.length === 1
  const frameKey = config.xAxis?.dataKey
  const emptyProjection = { competitorCount: 0, hasDuplicateRows: false, frames: [], globalMax: 0 }

  if (!frameKey || !series.length || !Array.isArray(data)) return emptyProjection

  const frameOrder: string[] = []
  const categoryOrder: string[] = []
  const categoryOrderSet = new Set<string>()
  const valuesByFrame = new Map<string, Map<string, Omit<BarRaceItem, 'frame' | 'rank'>>>()
  let hasDuplicateRows = false

  const addValue = (frame: string, category: string, seriesKey: string, dataKey: string, value: number) => {
    if (!categoryOrderSet.has(seriesKey)) {
      categoryOrder.push(seriesKey)
      categoryOrderSet.add(seriesKey)
    }
    const frameValues = valuesByFrame.get(frame)
    if (frameValues?.has(seriesKey)) hasDuplicateRows = true
    frameValues?.set(seriesKey, { category, dataKey, seriesKey, value })
  }

  data.forEach(row => {
    const rawFrame = row?.[frameKey]
    if (rawFrame === null || rawFrame === undefined || String(rawFrame).trim() === '') return
    const frame = String(rawFrame).trim()
    if (!valuesByFrame.has(frame)) {
      frameOrder.push(frame)
      valuesByFrame.set(frame, new Map())
    } else if (!usesDynamicCategory) {
      hasDuplicateRows = true
    }

    if (usesDynamicCategory) {
      const item = dynamicSeries[0]
      const rawCategory = row?.[item.dynamicCategory]
      const value = toFiniteNonnegativeNumber(row?.[item.dataKey])
      if (rawCategory === null || rawCategory === undefined || String(rawCategory).trim() === '' || value === null)
        return
      const category = String(rawCategory).trim()
      addValue(frame, category, category, item.dataKey, value)
      return
    }

    series.forEach(item => {
      const value = toFiniteNonnegativeNumber(row?.[item.dataKey])
      if (value === null) return
      addValue(frame, item.name || item.dataKey, item.dataKey, item.dataKey, value)
    })
  })

  const runtimeCategoryOrder = Array.isArray(config.runtime?.seriesKeys)
    ? [...new Set(config.runtime.seriesKeys.map(value => String(value).trim()))].filter(category =>
        categoryOrderSet.has(category)
      )
    : []
  const runtimeCategorySet = new Set(runtimeCategoryOrder)
  const stableCategoryOrder = [...runtimeCategoryOrder, ...categoryOrder.filter(item => !runtimeCategorySet.has(item))]
  const categoryIndex = new Map(stableCategoryOrder.map((category, index) => [category, index]))
  const maxBars = getMaxBars(config, stableCategoryOrder.length)
  let globalMax = 0

  const frames = frameOrder.map(frame => {
    const values = valuesByFrame.get(frame) ?? new Map()
    const items = [...values.values()]
      .map(item => ({ ...item, frame, rank: 0 }))
      .sort(
        (a, b) => b.value - a.value || (categoryIndex.get(a.seriesKey) ?? 0) - (categoryIndex.get(b.seriesKey) ?? 0)
      )
      .slice(0, maxBars)
      .map((item, rank) => ({ ...item, rank }))

    items.forEach(item => {
      globalMax = Math.max(globalMax, item.value)
    })

    return { key: frame, items }
  })

  // Domain stability must include valid values outside the displayed top N.
  valuesByFrame.forEach(values => values.forEach(item => (globalMax = Math.max(globalMax, item.value))))

  return { competitorCount: stableCategoryOrder.length, hasDuplicateRows, frames, globalMax }
}

export const getBarRaceEligibility = (config: Partial<ChartConfig>, data: DataRow[] = []): BarRaceEligibility => {
  const projection = buildBarRaceFrames(config, data)
  const series = Array.isArray(config.series) ? config.series : []
  const dynamicSeries = series.filter(item => item?.dynamicCategory)
  const hasValidDynamicSeries =
    series.length === 1 && Boolean(series[0]?.dataKey) && Boolean(String(series[0]?.dynamicCategory || '').trim())
  const hasValidWideSeries = series.length >= 2 && dynamicSeries.length === 0 && series.every(item => item?.dataKey)

  if (config.visualizationType !== 'Bar') {
    return { ...projection, eligible: false, reason: 'Racing mode is available only for Bar charts.' }
  }
  if (config.xAxis?.type !== 'categorical') {
    return { ...projection, eligible: false, reason: 'Racing mode requires a categorical Date/Category Axis.' }
  }
  if (!hasValidDynamicSeries && !hasValidWideSeries) {
    return {
      ...projection,
      eligible: false,
      reason: 'Racing mode requires at least two ordinary data series or one series with a Dynamic Category column.'
    }
  }
  if (config.smallMultiples?.mode) {
    return { ...projection, eligible: false, reason: 'Racing mode does not support small multiples.' }
  }
  if (config.orientation !== 'horizontal') {
    return { ...projection, eligible: false, reason: 'Racing mode requires horizontal orientation.' }
  }
  if (config.isLollipopChart || (config.barStyle && config.barStyle !== 'flat')) {
    return { ...projection, eligible: false, reason: 'Racing mode requires the flat bar style.' }
  }
  if (projection.hasDuplicateRows) {
    return {
      ...projection,
      eligible: false,
      reason: 'Racing mode requires one row per frame and competitor combination.'
    }
  }
  if (projection.frames.length < 2) {
    return { ...projection, eligible: false, reason: 'Racing mode requires at least two valid frame values.' }
  }
  if (projection.competitorCount < 2) {
    return { ...projection, eligible: false, reason: 'Racing mode requires at least two valid competitors.' }
  }

  return { ...projection, eligible: true }
}

export const clampBarRaceMaxBars = (value: unknown, competitorCount: number) => {
  const numericValue = Number(value)
  const nextValue = Number.isFinite(numericValue) ? Math.round(numericValue) : DEFAULT_BAR_RACE_MAX_BARS
  return Math.max(1, Math.min(Math.max(1, competitorCount), nextValue))
}
