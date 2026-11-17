import { supportedCities, supportedStates, supportedTerritories } from '../data/supported-geos'

export const MAP_DIMMED_OPACITY = 0.5

export const isSupportedMapHighlightValue = (value: unknown): value is string => {
  if (typeof value !== 'string' || !value) return false
  const upper = value.toUpperCase()
  return (
    Object.values(supportedStates).some(names => names.includes(upper)) ||
    Object.values(supportedTerritories).some(names => names.includes(upper)) ||
    Object.prototype.hasOwnProperty.call(supportedCities, upper)
  )
}

export const createMapHighlight = ({
  selectedLocationId,
  sharedFilterValue,
  dashboardHighlightActive
}: {
  selectedLocationId?: string
  sharedFilterValue?: unknown
  dashboardHighlightActive: boolean
}) => {
  const isHighlighted = (locationId?: string, dashboardValue?: unknown): boolean =>
    selectedLocationId
      ? selectedLocationId === locationId
      : dashboardHighlightActive && sharedFilterValue === dashboardValue

  return {
    isHighlighted,
    isDimmed: (locationId?: string, dashboardValue?: unknown): boolean =>
      Boolean(selectedLocationId || dashboardHighlightActive) && !isHighlighted(locationId, dashboardValue)
  }
}
