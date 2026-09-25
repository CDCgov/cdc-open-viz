import { type ChartConfig } from '../../types/ChartConfig'

export const DEFAULT_BAR_RACE_MAX_BARS = 10

type DataRow = Record<string, unknown>

export type BarRaceItem = {
  category: string
  frame: string
  rank: number
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
  const series = Array.isArray(config.series) ? config.series[0] : undefined
  const frameKey = config.xAxis?.dataKey
  const categoryKey = series?.dynamicCategory
  const valueKey = series?.dataKey
  const emptyProjection = { competitorCount: 0, hasDuplicateRows: false, frames: [], globalMax: 0 }

  if (!frameKey || !categoryKey || !valueKey || !Array.isArray(data)) return emptyProjection

  const frameOrder: string[] = []
  const categoryOrder: string[] = []
  const categoryOrderSet = new Set<string>()
  const valuesByFrame = new Map<string, Map<string, number>>()
  let hasDuplicateRows = false

  data.forEach(row => {
    const rawFrame = row?.[frameKey]
    const rawCategory = row?.[categoryKey]
    const value = toFiniteNonnegativeNumber(row?.[valueKey])
    if (rawFrame === null || rawFrame === undefined || String(rawFrame).trim() === '') return
    if (rawCategory === null || rawCategory === undefined || String(rawCategory).trim() === '' || value === null) return

    const frame = String(rawFrame).trim()
    const category = String(rawCategory).trim()
    if (!valuesByFrame.has(frame)) {
      frameOrder.push(frame)
      valuesByFrame.set(frame, new Map())
    }
    if (!categoryOrderSet.has(category)) {
      categoryOrder.push(category)
      categoryOrderSet.add(category)
    }
    const frameValues = valuesByFrame.get(frame)
    if (frameValues?.has(category)) hasDuplicateRows = true
    frameValues?.set(category, value)
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
    const items = [...values.entries()]
      .map(([category, value]) => ({ category, frame, value, rank: 0 }))
      .sort((a, b) => b.value - a.value || (categoryIndex.get(a.category) ?? 0) - (categoryIndex.get(b.category) ?? 0))
      .slice(0, maxBars)
      .map((item, rank) => ({ ...item, rank }))

    items.forEach(item => {
      globalMax = Math.max(globalMax, item.value)
    })

    return { key: frame, items }
  })

  // Domain stability must include valid values outside the displayed top N.
  valuesByFrame.forEach(values => values.forEach(value => (globalMax = Math.max(globalMax, value))))

  return { competitorCount: stableCategoryOrder.length, hasDuplicateRows, frames, globalMax }
}

export const getBarRaceEligibility = (config: Partial<ChartConfig>, data: DataRow[] = []): BarRaceEligibility => {
  const projection = buildBarRaceFrames(config, data)
  const series = Array.isArray(config.series) ? config.series : []

  if (config.visualizationType !== 'Bar') {
    return { ...projection, eligible: false, reason: 'Racing mode is available only for Bar charts.' }
  }
  if (config.xAxis?.type !== 'categorical') {
    return { ...projection, eligible: false, reason: 'Racing mode requires a categorical Date/Category Axis.' }
  }
  if (
    series.length !== 1 ||
    !series[0]?.dataKey ||
    typeof series[0]?.dynamicCategory !== 'string' ||
    !series[0].dynamicCategory.trim()
  ) {
    return {
      ...projection,
      eligible: false,
      reason: 'Racing mode requires exactly one data series with a Dynamic Category column.'
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
