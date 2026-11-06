import { sharedPalettes } from '@cdc/core/data/sharedPalettes'
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
            label: typeof series.label === 'string' ? series.label : '',
            color:
              typeof series.color === 'string' && series.color.trim() ? series.color : sharedPalettes.colorblindsafe[4]
          }))
      : []
  }
}

export const getConfiguredDotDensitySeries = (config: MapConfig): DotDensitySeries[] => {
  if (!isDotDensitySupported(config)) return []
  const density = getDotDensityConfig(config)
  if (!density.enabled) return []
  return density.series.filter(series => typeof series.column === 'string' && series.column.trim() !== '')
}

export const createDotDensitySeries = (series: readonly DotDensitySeries[]): DotDensitySeries => {
  return {
    id: `dot-density-series-${crypto.randomUUID()}`,
    column: '',
    label: '',
    color: sharedPalettes.colorblindsafe[[4, 5, 6, 2, 0, 7][series.length % 6]]
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
