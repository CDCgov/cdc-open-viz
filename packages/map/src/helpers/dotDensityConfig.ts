import { applyColorToLegend } from './applyColorToLegend'
import type { DotDensityConfig, DotDensitySeries, MapConfig } from '../types/MapConfig'

export const createDefaultDotDensityConfig = (): DotDensityConfig => ({
  enabled: false,
  dotValue: 100,
  radius: 1.5,
  seed: 42,
  unit: 'cases',
  series: []
})

/** Consume the prototype's separate legend settings once, before applying defaults. */
export const normalizeDotDensityLegend = <T extends MapConfig>(config: T): T => {
  const saved = config.dotDensity
  if (!saved?.legend || saved.enabled !== true || !isDotDensitySupported(config)) return config
  const legacy = saved.legend
  const { legend: _legacyLegend, ...density } = saved
  return {
    ...config,
    general: { ...config.general, showSidebar: legacy.show ?? config.general?.showSidebar },
    legend: { ...config.legend, title: config.legend?.title || legacy.title || '' },
    dotDensity: density
  }
}

export const isDotDensitySupported = (config: MapConfig): boolean =>
  config.general?.geoType === 'us-county' && ['data', 'map'].includes(config.general.type as string)

export const getDotDensityConfig = (config: MapConfig): DotDensityConfig => {
  const defaults = createDefaultDotDensityConfig()
  const saved = config.dotDensity
  return {
    ...defaults,
    ...saved,
    enabled: saved?.enabled === true,
    series: Array.isArray(saved?.series)
      ? saved.series
          .filter(series => series && typeof series === 'object')
          .map(series => ({
            ...series,
            label: typeof series.label === 'string' ? series.label : ''
          }))
      : []
  }
}

export type ResolvedDotDensitySeries = DotDensitySeries & { color: string }

export const getConfiguredDotDensitySeries = (config: MapConfig): ResolvedDotDensitySeries[] => {
  if (!isDotDensitySupported(config)) return []
  const density = getDotDensityConfig(config)
  if (!density.enabled) return []
  const series = density.series.filter(series => typeof series.column === 'string' && series.column.trim() !== '')
  if (!series.length) return []
  // Density categories must not inherit numeric bin counts or special classes from the base map.
  const categoryConfig = { ...config, legend: { ...config.legend, type: 'category', style: 'circles' } } as MapConfig
  const entries = series.map(item => ({ special: false, value: item.id }))
  const colors = series.map((_item, index) => applyColorToLegend(index, categoryConfig, entries))
  const availableColors = colors.filter((color): color is string => typeof color === 'string' && color.length > 0)
  // Qualitative catalogs can run out of entries. Reuse their resolved colors; do not invent a new set.
  const fallback =
    availableColors[0] ??
    applyColorToLegend(
      0,
      {
        ...categoryConfig,
        legend: { ...categoryConfig.legend, type: 'equalinterval', numberOfItems: 1 }
      },
      entries
    )
  return series.map((item, index) => ({
    ...item,
    color:
      colors[index] ||
      (availableColors.length ? availableColors[index % availableColors.length] : undefined) ||
      fallback
  }))
}

export const createDotDensitySeries = (_series: readonly DotDensitySeries[] = []): DotDensitySeries => {
  return {
    id: `dot-density-series-${crypto.randomUUID()}`,
    column: '',
    label: ''
  }
}

/** Reuse native tooltip/table rendering without adding synthetic fields to saved configuration. */
export const withDotDensityColumns = (config: MapConfig): MapConfig => {
  const series = getConfiguredDotDensitySeries(config)
  if (!series.length) return config
  const columns = { ...config.columns } as MapConfig['columns'] & Record<string, any>
  series.forEach((item, index) => {
    if (Object.values(columns).some(column => column.name === item.column)) return
    let key = `dotDensitySeries${index}`
    let suffix = 2
    while (columns[key]) key = `dotDensitySeries${index}_${suffix++}`
    columns[key] = {
      name: item.column,
      label: item.label || item.column,
      tooltip: true,
      dataTable: true,
      prefix: '',
      suffix: '',
      roundToPlace: 0
    }
  })
  return { ...config, columns }
}

/** Restore all if an isolated category was removed or became a draft. */
export const getActiveHiddenDensitySeries = (
  series: readonly { id: string }[],
  hidden: readonly string[]
): string[] => {
  const ids = new Set(series.map(item => item.id))
  const active = [...new Set(hidden)].filter(id => ids.has(id))
  return active.length === ids.size ? [] : active
}

export const isolateDotDensitySeries = (
  series: readonly { id: string }[],
  hidden: readonly string[],
  selected: string
): string[] => {
  if (!series.some(item => item.id === selected)) return getActiveHiddenDensitySeries(series, hidden)
  const active = getActiveHiddenDensitySeries(series, hidden)
  const alreadyIsolated = active.length === series.length - 1 && !active.includes(selected)
  return alreadyIsolated ? [] : series.filter(item => item.id !== selected).map(item => item.id)
}
