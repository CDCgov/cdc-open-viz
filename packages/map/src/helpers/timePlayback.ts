import type { VizFilter } from '@cdc/core/types/VizFilter'
import type { DataRow, MapConfig, TimePlaybackConfig } from '../types/MapConfig'
import { getWorldLocationUID } from './addUIDs'
import { getConfiguredBubbleLayers } from './bubbleLayers'

export type TimePlaybackFrame = string | number
export type TimePlaybackSettings = Partial<TimePlaybackConfig>

export type TimePlaybackEligibilityReason =
  | 'disabled'
  | 'unsupported-map'
  | 'missing-column'
  | 'missing-geo-column'
  | 'missing-primary-column'
  | 'insufficient-frames'
  | 'duplicate-geography-frame'

export type TimePlaybackEligibility = {
  eligible: boolean
  reason?: TimePlaybackEligibilityReason
  frames: TimePlaybackFrame[]
  filteredData: DataRow[]
  initialFrame?: TimePlaybackFrame
}

type TimePlaybackMapConfig = {
  data?: DataRow[]
  columns?: {
    geo?: { name?: string }
    primary?: { name?: string }
  }
  general?: {
    geoType?: string
    type?: string
  }
  bubble?: {
    layers?: unknown[]
  }
  smallMultiples?: {
    tileColumn?: string
  }
  timePlayback?: TimePlaybackSettings
}

type RuntimeFilter = Partial<VizFilter> & {
  active?: string | number | boolean | Array<string | number | boolean>
  type?: string
  subGrouping?: {
    active?: string | number | boolean
    columnName?: string
  }
}

const naturalCollator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' })

const isBlankFrame = (value: DataRow[string]): boolean =>
  value === null || value === undefined || (typeof value === 'string' && value.trim() === '')

const normalizeValue = (value: DataRow[string]): string => String(value)

const isNumericValue = (value: TimePlaybackFrame): boolean => {
  if (typeof value === 'boolean') return false
  if (typeof value === 'number') return Number.isFinite(value)
  if (value.trim() === '') return false
  return Number.isFinite(Number(value))
}

const isDateValue = (value: TimePlaybackFrame): boolean => {
  if (typeof value !== 'string') return false
  return !Number.isNaN(Date.parse(value))
}

const compareFramesAscending = (a: TimePlaybackFrame, b: TimePlaybackFrame): number => {
  if (isNumericValue(a) && isNumericValue(b)) return Number(a) - Number(b)
  if (isDateValue(a) && isDateValue(b)) return Date.parse(String(a)) - Date.parse(String(b))
  return naturalCollator.compare(String(a), String(b))
}

/**
 * Returns the distinct, non-blank values in a playback column. Values that are
 * equivalent after string conversion (for example, `2023` and `"2023"`) are
 * treated as the same frame to match map filter behavior.
 */
export const getOrderedTimeFrames = (
  rows: DataRow[] = [],
  column: string,
  order: TimePlaybackSettings['order'] = 'ascending',
  customOrder: TimePlaybackSettings['customOrder'] = []
): TimePlaybackFrame[] => {
  if (!column) return []

  const uniqueFrames = new Map<string, TimePlaybackFrame>()
  rows.forEach(row => {
    const value = row[column]
    if (isBlankFrame(value)) return
    const key = normalizeValue(value)
    const frame = typeof value === 'boolean' ? String(value) : (value as TimePlaybackFrame)
    if (!uniqueFrames.has(key)) uniqueFrames.set(key, frame)
  })

  const frames = Array.from(uniqueFrames.values())
  if (order !== 'custom' || !customOrder?.length) return frames.sort(compareFramesAscending)

  const frameByKey = new Map(frames.map(frame => [normalizeValue(frame), frame]))
  const orderedFrames: TimePlaybackFrame[] = []
  const added = new Set<string>()

  customOrder.forEach(value => {
    const key = normalizeValue(value)
    const frame = frameByKey.get(key)
    if (frame !== undefined && !added.has(key)) {
      orderedFrames.push(frame)
      added.add(key)
    }
  })

  const unmatched = frames.filter(frame => !added.has(normalizeValue(frame))).sort(compareFramesAscending)
  return [...orderedFrames, ...unmatched]
}

const valueMatches = (rowValue: DataRow[string], activeValue: unknown): boolean =>
  normalizeValue(rowValue) === String(activeValue)

const rowMatchesFilter = (row: DataRow, filter: RuntimeFilter, timeColumn: string): boolean => {
  if (!filter.columnName || filter.columnName === timeColumn || filter.type === 'url') return true

  if (filter.active !== undefined) {
    const matchesActive = Array.isArray(filter.active)
      ? filter.active.some(activeValue => valueMatches(row[filter.columnName!], activeValue))
      : valueMatches(row[filter.columnName], filter.active)
    if (!matchesActive) return false
  }

  const subGrouping = filter.subGrouping
  if (
    filter.filterStyle === 'nested-dropdown' &&
    subGrouping?.columnName &&
    subGrouping.columnName !== timeColumn &&
    subGrouping.active !== undefined &&
    !valueMatches(row[subGrouping.columnName], subGrouping.active)
  ) {
    return false
  }

  return true
}

/** Applies all active data filters except a filter that targets playback time. */
export const applyNonTimeFilters = (
  rows: DataRow[] = [],
  filters: RuntimeFilter[] = [],
  timeColumn: string
): DataRow[] =>
  rows.filter(row => filters.every(filter => rowMatchesFilter(row, filter, timeColumn))).map(row => ({ ...row }))

/** Selects one playback frame and returns new row objects for safe runtime processing. */
export const projectTimePlaybackFrame = (
  rows: DataRow[] = [],
  column: string,
  frame: TimePlaybackFrame | undefined
): DataRow[] => {
  if (!column || frame === undefined) return []
  const frameKey = normalizeValue(frame)
  return rows
    .filter(row => !isBlankFrame(row[column]) && normalizeValue(row[column]) === frameKey)
    .map(row => ({ ...row }))
}

const hasDuplicateGeographyFrame = (
  rows: DataRow[],
  geoColumn: string,
  timeColumn: string,
  geoType: string | undefined
): boolean => {
  const seen = new Set<string>()

  return rows.some(row => {
    const frame = row[timeColumn]
    const geography = row[geoColumn]
    if (isBlankFrame(frame) || geography === null || geography === undefined || String(geography).trim() === '')
      return false

    const worldLocationUID = geoType === 'world' ? getWorldLocationUID(geography) : null
    const geographyKey = worldLocationUID ? `world-uid:${worldLocationUID}` : `raw:${normalizeValue(geography)}`
    const key = JSON.stringify([geographyKey, normalizeValue(frame)])
    if (seen.has(key)) return true
    seen.add(key)
    return false
  })
}

/**
 * Builds the filtered frame model and explains why playback cannot run. This
 * intentionally accepts a structural subset of MapConfig so the editor can use
 * it while a config is still incomplete.
 */
export const getTimePlaybackEligibility = (
  config: TimePlaybackMapConfig,
  runtimeFilters: RuntimeFilter[] = []
): TimePlaybackEligibility => {
  const settings = config.timePlayback
  if (!settings?.enabled) return { eligible: false, reason: 'disabled', frames: [], filteredData: [] }

  const isSupportedChoropleth =
    (config.general?.geoType === 'us' || config.general?.geoType === 'world') &&
    config.general?.type === 'data' &&
    getConfiguredBubbleLayers(config as MapConfig).length === 0 &&
    !config.smallMultiples?.tileColumn
  if (!isSupportedChoropleth) return { eligible: false, reason: 'unsupported-map', frames: [], filteredData: [] }

  const timeColumn = settings.column
  if (!timeColumn) return { eligible: false, reason: 'missing-column', frames: [], filteredData: [] }

  const data = config.data ?? []
  if (data.length > 0 && !data.some(row => Object.prototype.hasOwnProperty.call(row, timeColumn))) {
    return { eligible: false, reason: 'missing-column', frames: [], filteredData: [] }
  }

  const geoColumn = config.columns?.geo?.name
  if (!geoColumn) return { eligible: false, reason: 'missing-geo-column', frames: [], filteredData: [] }

  if (!config.columns?.primary?.name) {
    return { eligible: false, reason: 'missing-primary-column', frames: [], filteredData: [] }
  }

  const filteredData = applyNonTimeFilters(data, runtimeFilters, timeColumn)
  const frames = getOrderedTimeFrames(filteredData, timeColumn, settings.order, settings.customOrder)

  if (hasDuplicateGeographyFrame(filteredData, geoColumn, timeColumn, config.general?.geoType)) {
    return { eligible: false, reason: 'duplicate-geography-frame', frames, filteredData }
  }

  if (frames.length < 2) return { eligible: false, reason: 'insufficient-frames', frames, filteredData }

  return {
    eligible: true,
    frames,
    filteredData,
    initialFrame: frames[frames.length - 1]
  }
}
