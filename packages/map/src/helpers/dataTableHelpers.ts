import {
  stateFipsToTwoDigit as stateCodeToAbbreviation,
  supportedStatesFipsCodes as supportedStateCodes
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
 */
export const filterCountyTableRuntimeDataByStateCode = (runtimeData: any, stateCode: string, config?: any) => {
  if (!runtimeData || runtimeData.init || !stateCode) return runtimeData

  const filtered = {}
  const stateName = supportedStateCodes[stateCode]
  const stateAbbreviation = stateCodeToAbbreviation[stateCode]
  const normalizedSelectedStateCode = String(stateCode).replace(/^0+/, '')
  const stateColumnNames = Object.values(config?.columns || {})
    .map((column: any) => column?.name)
    .filter((name: string) => !!name && /(state|territory|fips)/i.test(name))

  if (runtimeData.fromHash !== undefined) {
    Object.defineProperty(filtered, 'fromHash', {
      value: runtimeData.fromHash
    })
  }

  Object.keys(runtimeData).forEach(uid => {
    const row = runtimeData[uid]
    const matchesUidPrefix = uid.startsWith(stateCode)
    const matchesStateColumn = stateColumnNames.some((columnName: string) => {
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
