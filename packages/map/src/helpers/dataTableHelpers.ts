/**
 * Determines if the data table should be shown based on current state
 */
export const shouldShowDataTable = (config: any, table: any, general: any, loading: boolean): boolean => {
  return !config?.runtime?.editorErrorMessage.length && table.forceDisplay && general.type !== 'navigation' && !loading
}

/**
 * Filters county runtime data to a selected state FIPS prefix for data table display.
 * Keeps the original non-enumerable fromHash metadata when present.
 */
export const filterCountyTableRuntimeDataByStateFips = (runtimeData: any, stateFips: string) => {
  if (!runtimeData || runtimeData.init || !stateFips) return runtimeData

  const filtered = {}

  if (runtimeData.fromHash !== undefined) {
    Object.defineProperty(filtered, 'fromHash', {
      value: runtimeData.fromHash
    })
  }

  Object.keys(runtimeData).forEach(uid => {
    if (uid.startsWith(stateFips)) {
      filtered[uid] = runtimeData[uid]
    }
  })

  return filtered
}
