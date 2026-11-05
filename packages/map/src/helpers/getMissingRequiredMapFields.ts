import type { Datasets } from '@cdc/core/types/DataSet'
import type { MapConfig } from '../types/MapConfig'
import { getConfiguredBubbleLayers } from './bubbleLayers'
import { getConfiguredDotDensitySeries, isDotDensitySupported } from './dotDensityConfig'

export type MissingRequiredMapField = {
  field: 'Geography' | 'Data Column' | 'Count Column' | 'Navigation'
  section: 'Columns' | 'Dot Density'
  target: 'map-geography' | 'map-data-column' | 'map-dot-density-count' | 'map-url-column'
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

const REQUIRED_NAVIGATION_MAP_FIELDS: MissingRequiredMapField[] = [
  REQUIRED_DATA_MAP_FIELDS[0],
  { field: 'Navigation', section: 'Columns', target: 'map-url-column' }
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

/** Dashboard config.data can already be filtered; retain source and transformed count fields. */
export const getMapDensitySourceColumns = (
  config: Pick<MapConfig, 'data' | 'dataKey'>,
  datasets?: Datasets
): string[] => {
  const assignedRows = config.dataKey ? datasets?.[config.dataKey]?.data : undefined
  return [...new Set([...getAvailableMapColumns(config.data ?? []), ...getAvailableMapColumns(assignedRows ?? [])])]
}

export const getMissingRequiredMapFields = (config: MapConfig, datasets?: Datasets): MissingRequiredMapField[] => {
  const mapType = config.general?.type as string
  const isNavigationMap = mapType === 'navigation'
  if (!isNavigationMap && !['data', 'map'].includes(mapType)) return []
  if (
    !isNavigationMap &&
    getConfiguredBubbleLayers(config).length > 0 &&
    !(isDotDensitySupported(config) && config.dotDensity?.enabled === true)
  )
    return []

  const assignedRows = config.dataKey ? datasets?.[config.dataKey]?.data : undefined
  const availableColumns = getAvailableMapColumns(config.data?.length ? config.data : assignedRows ?? [])
  const hasAvailableColumns = availableColumns.length > 0
  const configuredColumns = {
    'map-geography': config.columns?.geo?.name || '',
    'map-data-column': config.columns?.primary?.name || '',
    'map-url-column': config.columns?.navigate?.name || ''
  }

  const requiredFields = isNavigationMap ? REQUIRED_NAVIGATION_MAP_FIELDS : REQUIRED_DATA_MAP_FIELDS
  const missing = requiredFields.filter(({ target }) => {
    const configuredColumn = configuredColumns[target as keyof typeof configuredColumns]
    return !configuredColumn.trim() || (hasAvailableColumns && !availableColumns.includes(configuredColumn))
  })
  if (isDotDensitySupported(config) && config.dotDensity?.enabled === true) {
    const series = getConfiguredDotDensitySeries(config)
    const densityColumns = new Set(getMapDensitySourceColumns(config, datasets))
    return [
      ...missing.filter(item => item.field === 'Geography'),
      ...(!series.length || (densityColumns.size > 0 && series.some(item => !densityColumns.has(item.column)))
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
