import { type ChartConfig } from '../../types/ChartConfig'

type DataRow = Record<string, any>

export type LineRaceFrame = {
  key: string
  rows: DataRow[]
  currentRows: DataRow[]
}

export type LineRaceEligibility = {
  eligible: boolean
  frames: LineRaceFrame[]
  reason?: string
}

export const DEFAULT_LINE_RACE_SECONDS_PER_FRAME = 0.5
export const MIN_LINE_RACE_SECONDS_PER_FRAME = 0
export const MAX_LINE_RACE_SECONDS_PER_FRAME = 1.5

export const clampLineRaceSecondsPerFrame = (value: unknown) => {
  const parsed = Number(value)
  if (!Number.isFinite(parsed)) return DEFAULT_LINE_RACE_SECONDS_PER_FRAME
  return Math.min(MAX_LINE_RACE_SECONDS_PER_FRAME, Math.max(MIN_LINE_RACE_SECONDS_PER_FRAME, parsed))
}

const hasFiniteValue = (value: unknown) => {
  if (value === null || value === undefined || value === '') return false
  return Number.isFinite(Number(String(value).replaceAll(',', '').replace(/%$/, '')))
}

const isNegativeValue = (value: unknown) => {
  if (value === null || value === undefined || value === '') return false
  const numericValue = Number(String(value).replaceAll(',', '').replace(/%$/, ''))
  return Number.isFinite(numericValue) && numericValue < 0
}

export const buildLineRaceFrames = (config: Partial<ChartConfig>, data: DataRow[] = []): LineRaceFrame[] => {
  const frameKey = config.xAxis?.dataKey
  const series = Array.isArray(config.series) ? config.series : []
  const dynamicSeries = series.find(item => item.dynamicCategory)
  if (!frameKey || !series.length || !Array.isArray(data)) return []

  const orderedKeys: string[] = []
  const rowsByFrame = new Map<string, DataRow[]>()
  data.forEach(row => {
    const rawFrame = row?.[frameKey]
    if (rawFrame === null || rawFrame === undefined || String(rawFrame).trim() === '') return
    const hasValue = dynamicSeries
      ? hasFiniteValue(row?.[dynamicSeries.dataKey])
      : series.some(item => hasFiniteValue(row?.[item.dataKey]))
    if (!hasValue) return

    const key = String(rawFrame).trim()
    if (!rowsByFrame.has(key)) {
      orderedKeys.push(key)
      rowsByFrame.set(key, [])
    }
    rowsByFrame.get(key)?.push(row)
  })

  const frameKeys = [...orderedKeys]
  if (['date', 'date-time'].includes(config.xAxis?.type)) {
    frameKeys.sort((a, b) => Date.parse(a) - Date.parse(b))
    if (config.xAxis?.sortByRecentDate) frameKeys.reverse()
  } else if (config.xAxis?.categoryOrderType === 'custom' && Array.isArray(config.xAxis.categoryOrder)) {
    const customOrder = new Map(config.xAxis.categoryOrder.map((value, index) => [String(value), index]))
    const sourceOrder = new Map(orderedKeys.map((value, index) => [value, index]))
    frameKeys.sort(
      (a, b) =>
        (customOrder.get(a) ?? Number.MAX_SAFE_INTEGER) - (customOrder.get(b) ?? Number.MAX_SAFE_INTEGER) ||
        (sourceOrder.get(a) ?? 0) - (sourceOrder.get(b) ?? 0)
    )
  }

  let visibleRows: DataRow[] = []
  return frameKeys.map(key => {
    const currentRows = rowsByFrame.get(key) ?? []
    visibleRows = [...visibleRows, ...currentRows]
    return { key, rows: visibleRows, currentRows }
  })
}

export const getLineRaceEligibility = (config: Partial<ChartConfig>, data: DataRow[] = []): LineRaceEligibility => {
  const frames = buildLineRaceFrames(config, data)
  const series = Array.isArray(config.series) ? config.series : []
  const dynamicSeries = series.filter(item => item.dynamicCategory)
  const frameKey = config.xAxis?.dataKey

  if (config.visualizationType !== 'Line') {
    return { eligible: false, frames, reason: 'Racing mode is available only for Line charts.' }
  }
  if (!['categorical', 'date', 'date-time'].includes(config.xAxis?.type)) {
    return { eligible: false, frames, reason: 'Racing mode requires a categorical, date, or date-time axis.' }
  }
  if (!frameKey || !series.length || series.some(item => !item.dataKey)) {
    return {
      eligible: false,
      frames,
      reason: 'Racing mode requires a Date/Category Axis and at least one data series.'
    }
  }
  if (dynamicSeries.length > 1 || (dynamicSeries.length === 1 && series.length !== 1)) {
    return {
      eligible: false,
      frames,
      reason: 'Dynamic Line racing requires exactly one series with a Dynamic Category column.'
    }
  }
  if (config.smallMultiples?.mode) {
    return { eligible: false, frames, reason: 'Racing mode does not support small multiples.' }
  }
  if (config.xAxis?.brushActive) {
    return { eligible: false, frames, reason: 'Racing mode does not support the date brush.' }
  }
  if (config.allowLineToBarGraph) {
    return { eligible: false, frames, reason: 'Racing mode does not support automatic Line-to-Bar conversion.' }
  }
  if (
    config.showAreaUnderLine ||
    Boolean(config.confidenceKeys?.lower || config.confidenceKeys?.upper) ||
    Boolean(config.preliminaryData?.length)
  ) {
    return {
      eligible: false,
      frames,
      reason: 'Racing mode supports standard Line paths without areas, confidence bands, or preliminary styling.'
    }
  }
  const hasNegative = data.some(row => {
    if (dynamicSeries[0]) return isNegativeValue(row?.[dynamicSeries[0].dataKey])
    return series.some(item => isNegativeValue(row?.[item.dataKey]))
  })
  if (hasNegative) {
    return { eligible: false, frames, reason: 'Racing mode does not support negative values.' }
  }
  if (['date', 'date-time'].includes(config.xAxis?.type)) {
    const malformedFrame = data.some(row => {
      const value = row?.[frameKey]
      return (
        value !== null && value !== undefined && String(value).trim() !== '' && Number.isNaN(Date.parse(String(value)))
      )
    })
    if (malformedFrame) {
      return { eligible: false, frames, reason: 'Racing mode requires valid date values on the Date/Category Axis.' }
    }
  }

  const seen = new Set<string>()
  let hasDuplicate = false
  data.forEach(row => {
    const frame = String(row?.[frameKey] ?? '').trim()
    if (!frame) return
    const category = dynamicSeries[0] ? String(row?.[dynamicSeries[0].dynamicCategory] ?? '').trim() : '__wide__'
    const key = `${frame}\u0000${category}`
    if (seen.has(key)) hasDuplicate = true
    seen.add(key)
  })
  if (hasDuplicate) {
    return { eligible: false, frames, reason: 'Racing mode requires one row per frame and series combination.' }
  }
  if (frames.length < 2) {
    return { eligible: false, frames, reason: 'Racing mode requires at least two valid frame values.' }
  }

  return { eligible: true, frames }
}
