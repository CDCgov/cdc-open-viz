type AutoResetArgs = {
  isDashboard: boolean
  previousRuntimeDataHash: number | null
  nextRuntimeDataHash?: number
  hasDashboardFilters?: boolean
  allowMapZoom?: boolean
}

export const shouldAutoResetSingleStateZoom = ({
  isDashboard,
  previousRuntimeDataHash,
  nextRuntimeDataHash,
  hasDashboardFilters = false,
  allowMapZoom = true
}: AutoResetArgs): boolean => {
  if (!isDashboard || !allowMapZoom) return false
  if (!hasDashboardFilters) return false
  if (previousRuntimeDataHash === null) return false
  if (nextRuntimeDataHash === undefined) return false

  return previousRuntimeDataHash !== nextRuntimeDataHash
}
