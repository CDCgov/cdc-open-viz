import type { Datasets } from '@cdc/core/types/DataSet'
import type { MapConfig } from '../types/MapConfig'
import { getConfiguredBubbleLayers } from './bubbleLayers'
import { getConfiguredDotDensitySeries, isDotDensitySupported } from './dotDensityConfig'

export type MissingRequiredMapField = {
  field: 'Geography' | 'Data Column' | 'Count Column'
  section: 'Columns' | 'Dot Density'
  target: 'map-geography' | 'map-data-column' | 'map-dot-density-count'
  subsectionTarget?: 'map-geography-section' | 'map-data-section'
}

const REQUIRED_DATA_MAP_FIELDS: MissingRequiredMapField[] = [
  {
    field: 'Geography',
    section: 'Columns',
    target: 'map-geography',
    subsectionTarget: 'map-geography-section'
  },
  {
    field: 'Data Column',
    section: 'Columns',
    target: 'map-data-column',
    subsectionTarget: 'map-data-section'
  }
]

/** Sparse JSON rows may introduce columns after the first county. */
export const getAvailableMapColumns = (rows: readonly unknown[]): string[] => {
  const columns = new Set<string>()
  for (const row of rows) {
    if (!row || typeof row !== 'object') continue
    for (const column of Object.keys(row)) columns.add(column)
  }
  return [...columns]
}

export const getMissingRequiredMapFields = (config: MapConfig, datasets?: Datasets): MissingRequiredMapField[] => {
  const mapType = config.general?.type as string
  if (!['data', 'map'].includes(mapType)) return []
  if (
    getConfiguredBubbleLayers(config).length > 0 &&
    !(isDotDensitySupported(config) && config.dotDensity?.enabled === true)
  )
    return []

  const assignedRows = config.dataKey ? datasets?.[config.dataKey]?.data : undefined
  const availableColumns = getAvailableMapColumns(config.data?.length ? config.data : assignedRows ?? [])
  const hasAvailableColumns = availableColumns.length > 0
  const configuredColumns = {
    'map-geography': config.columns?.geo?.name || '',
    'map-data-column': config.columns?.primary?.name || ''
  }

  const missing = REQUIRED_DATA_MAP_FIELDS.filter(({ target }) => {
    const configuredColumn = configuredColumns[target as keyof typeof configuredColumns]
    return !configuredColumn || (hasAvailableColumns && !availableColumns.includes(configuredColumn))
  })
  if (isDotDensitySupported(config) && config.dotDensity?.enabled === true) {
    const series = getConfiguredDotDensitySeries(config)
    return [
      ...missing.filter(item => item.field === 'Geography'),
      ...(!series.length || (hasAvailableColumns && series.some(item => !availableColumns.includes(item.column)))
        ? [
            {
              field: 'Count Column',
              section: 'Dot Density',
              target: 'map-dot-density-count'
            } as MissingRequiredMapField
          ]
        : [])
    ]
  }
  return missing
}
