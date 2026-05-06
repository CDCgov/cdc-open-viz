import {
  stateFipsToTwoDigit as stateFipsToAbbreviation,
  supportedStatesFipsCodes as supportedStateFipsCodes
} from '../data/supported-geos'

/**
 * Determines if the data table should be shown based on current state
 */
export const shouldShowDataTable = (config: any, table: any, general: any, loading: boolean): boolean => {
  return !config?.runtime?.editorErrorMessage.length && table.forceDisplay && general.type !== 'navigation' && !loading
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
