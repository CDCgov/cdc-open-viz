import type { Datasets } from '@cdc/core/types/DataSet'
import type { MapConfig } from '../types/MapConfig'
import { getConfiguredBubbleLayers } from './bubbleLayers'

export type MissingRequiredMapField = {
  field: 'Geography' | 'Data Column'
  section: 'Columns'
  target: 'map-geography' | 'map-data-column'
  subsectionTarget: 'map-geography-section' | 'map-data-section'
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

const getAvailableColumns = (config: MapConfig, datasets?: Datasets): string[] => {
  if (config.data?.[0]) return Object.keys(config.data[0])

  const assignedDataset = config.dataKey ? datasets?.[config.dataKey] : undefined
  return assignedDataset?.data?.[0] ? Object.keys(assignedDataset.data[0]) : []
}

export const getMissingRequiredMapFields = (config: MapConfig, datasets?: Datasets): MissingRequiredMapField[] => {
  const mapType = config.general?.type as string
  if (!['data', 'map'].includes(mapType) || getConfiguredBubbleLayers(config).length > 0) return []

  const availableColumns = getAvailableColumns(config, datasets)
  const hasAvailableColumns = availableColumns.length > 0
  const configuredColumns = {
    'map-geography': config.columns?.geo?.name || '',
    'map-data-column': config.columns?.primary?.name || ''
  }

  return REQUIRED_DATA_MAP_FIELDS.filter(({ target }) => {
    const configuredColumn = configuredColumns[target]
    return !configuredColumn || (hasAvailableColumns && !availableColumns.includes(configuredColumn))
  })
}
