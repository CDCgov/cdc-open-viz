import {
  stateFipsToTwoDigit as stateFipsToAbbreviation,
  supportedStatesFipsCodes as supportedStateFipsCodes
} from '../data/supported-geos'
import {
  getBubbleSizeColumnName,
  getConfiguredBubbleLayers,
  getPrimaryBubbleLayer,
  hasDataColumn
} from './bubbleLayers'
import { MapConfig } from '../types/MapConfig'

type DataTablePreparation = {
  config: MapConfig
  columns: MapConfig['columns']
  runtimeData: any
}

type BubbleTableColumnRole = 'geo' | 'primary' | 'size'

const getColumnLabel = (name: string, label?: string) => label || name

const hasColumnName = (columns: Record<string, any>, name?: string): boolean => {
  if (!name) return true
  return Object.values(columns).some((column: any) => column?.name === name)
}

const getSyntheticBubbleColumnKey = (
  columns: Record<string, any>,
  layerIndex: number,
  role: BubbleTableColumnRole
): string => {
  const baseKey = `bubbleLayer${layerIndex}${role.charAt(0).toUpperCase()}${role.slice(1)}`
  if (!columns[baseKey]) return baseKey

  let index = 2
  while (columns[`${baseKey}${index}`]) index += 1
  return `${baseKey}${index}`
}

const addSyntheticBubbleColumn = (
  columns: Record<string, any>,
  layerIndex: number,
  role: BubbleTableColumnRole,
  name?: string,
  label?: string
): boolean => {
  if (!name || hasColumnName(columns, name)) return false

  columns[getSyntheticBubbleColumnKey(columns, layerIndex, role)] = {
    dataTable: true,
    label: getColumnLabel(name, label),
    name
  }

  return true
}

const shouldUseBubbleColumnForTable = (config: MapConfig, currentName?: string, bubbleName?: string): boolean => {
  if (!bubbleName) return false
  if (!currentName) return true
  if (currentName === bubbleName) return false

  return !hasDataColumn(config.data, currentName) && hasDataColumn(config.data, bubbleName)
}

/**
 * Determines if the data table should be shown based on current state
 */
export const shouldShowDataTable = (config: any, table: any, general: any, loading: boolean): boolean => {
  return !config?.runtime?.editorErrorMessage.length && table.forceDisplay && general.type !== 'navigation' && !loading
}

/**
 * Bubble layers can carry table-facing geography/value fields outside the
 * top-level map columns. Fill missing or stale table-facing names from the
 * configured bubble layers, then add any distinct layer fields to the table.
 */
export const prepareBubbleMapDataTable = (
  config: MapConfig,
  columns: MapConfig['columns'],
  runtimeData: any
): DataTablePreparation => {
  const bubbleLayer = getPrimaryBubbleLayer(config)
  const bubbleLayers = getConfiguredBubbleLayers(config)
  const bubbleGeoName = bubbleLayer?.columns?.geo?.name
  const bubblePrimaryName = bubbleLayer?.columns?.primary?.name

  if (!bubbleGeoName && !bubblePrimaryName && !bubbleLayers.length) {
    return { config, columns, runtimeData }
  }

  let didUpdateColumns = false
  const preparedColumns = { ...columns } as MapConfig['columns'] & Record<string, any>

  if (shouldUseBubbleColumnForTable(config, preparedColumns.geo?.name, bubbleGeoName)) {
    preparedColumns.geo = {
      ...(preparedColumns.geo ?? {}),
      dataTable: preparedColumns.geo?.dataTable ?? true,
      label: preparedColumns.geo?.label || 'Location',
      name: bubbleGeoName
    }
    didUpdateColumns = true
  }

  if (shouldUseBubbleColumnForTable(config, preparedColumns.primary?.name, bubblePrimaryName)) {
    preparedColumns.primary = {
      ...(preparedColumns.primary ?? {}),
      dataTable: preparedColumns.primary?.dataTable ?? true,
      label: preparedColumns.primary?.label || bubblePrimaryName,
      name: bubblePrimaryName
    }
    didUpdateColumns = true
  }

  bubbleLayers.forEach((layer, layerIndex) => {
    const layerGeo = layer.columns?.geo
    const layerPrimary = layer.columns?.primary
    const sizeColumnName = getBubbleSizeColumnName(layer)
    const layerSize = layer.columns?.size

    didUpdateColumns =
      addSyntheticBubbleColumn(preparedColumns, layerIndex, 'geo', layerGeo?.name, layerGeo?.label) || didUpdateColumns
    didUpdateColumns =
      addSyntheticBubbleColumn(preparedColumns, layerIndex, 'primary', layerPrimary?.name, layerPrimary?.label) ||
      didUpdateColumns
    didUpdateColumns =
      addSyntheticBubbleColumn(
        preparedColumns,
        layerIndex,
        'size',
        sizeColumnName,
        layerSize?.label || layer.legend?.size?.title
      ) || didUpdateColumns
  })

  if (!didUpdateColumns) {
    return { config, columns, runtimeData }
  }

  return {
    config: {
      ...config,
      columns: preparedColumns
    },
    columns: preparedColumns,
    runtimeData
  }
}

/**
 * Filters county runtime data to a selected state code for data table display.
 * Keeps the original non-enumerable fromHash metadata when present.
 * Fail-safe: if no recognizable state columns exist in the data, returns original
 * data unfiltered (avoids breaking misconfigured datasets). If valid state columns
 * exist but a state has no data, returns empty result as expected.
 */
export const filterCountyTableRuntimeDataByStateCode = (runtimeData: any, stateCode: string, config?: any) => {
  if (!runtimeData || runtimeData.init || !stateCode) return runtimeData

  const runtimeKeys = Object.keys(runtimeData)
  if (runtimeKeys.length === 0) return runtimeData

  const stateName = supportedStateFipsCodes?.[stateCode]
  const stateAbbreviation = stateFipsToAbbreviation?.[stateCode]
  const normalizedSelectedStateCode = String(stateCode).replace(/^0+/, '')
  const paddedSelectedStateCode = normalizedSelectedStateCode.padStart(2, '0')
  const stateColumnNames = Object.values(config?.columns || {})
    .map((column: any) => column?.name)
    .filter((name: string) => !!name && /(state|territory|fips|jurisdiction)/i.test(name))

  // Also check common state field names directly in the data rows
  const commonStateFieldNames = [
    'jurisdiction',
    'state',
    'State',
    'state_name',
    'stateName',
    'State/Territory',
    'state_territory_name'
  ]
  const allStateColumns = [...new Set([...stateColumnNames, ...commonStateFieldNames])]

  // Fail-safe: check if UIDs look like county FIPS codes (5 digits) OR if any state column exists in the data
  const hasCountyFipsUids = runtimeKeys.some(uid => /^\d{5}$/.test(String(uid)))
  const hasStateColumn = runtimeKeys.some(uid => allStateColumns.some(col => runtimeData[uid]?.[col] !== undefined))

  // If data has neither county FIPS UIDs nor any recognizable state columns, don't filter
  if (!hasCountyFipsUids && !hasStateColumn) {
    return runtimeData
  }

  const filtered = {}

  if (runtimeData.fromHash !== undefined) {
    Object.defineProperty(filtered, 'fromHash', {
      value: runtimeData.fromHash
    })
  }

  Object.keys(runtimeData).forEach(uid => {
    const row = runtimeData[uid]
    const uidPrefix = String(uid).slice(0, 2)
    const normalizedUidPrefix = uidPrefix.startsWith('0') ? uidPrefix.slice(1) : uidPrefix
    const matchesUidPrefix =
      uidPrefix === paddedSelectedStateCode || normalizedUidPrefix === normalizedSelectedStateCode

    const matchesStateColumn = allStateColumns.some((columnName: string) => {
      const rawValue = row?.[columnName]
      if (rawValue === undefined || rawValue === null) return false

      const value = String(rawValue).trim()
      const normalizedValueStateCode = value.replace(/^0+/, '')

      return (
        (stateName && value.toLowerCase() === String(stateName).toLowerCase()) ||
        (stateAbbreviation && value.toUpperCase() === String(stateAbbreviation).toUpperCase()) ||
        value === stateCode ||
        normalizedValueStateCode === normalizedSelectedStateCode
      )
    })

    if (matchesUidPrefix || matchesStateColumn) {
      filtered[uid] = runtimeData[uid]
    }
  })

  return filtered
}
