import { feature } from 'topojson-client'
import usExtendedGeography from './../data/us-extended-geography.json'

type TopoTransform = {
  scale: [number, number]
  translate: [number, number]
}

type TopoGeometry = {
  type: 'Polygon' | 'MultiPolygon'
  arcs: number[] | number[][] | number[][][]
  id?: string
  properties?: Record<string, unknown>
}

type TopoGeometryCollection = {
  type: 'GeometryCollection'
  geometries: TopoGeometry[]
}

export type FreelyAssociatedStatesTopology = {
  type: 'Topology'
  transform: TopoTransform
  arcs: number[][][]
  objects: {
    states: TopoGeometryCollection
    counties: TopoGeometryCollection
  }
}

const getCountyTopoURL = year => {
  return `https://www.cdc.gov/TemplatePackage/contrib/data/county-topography/cb_${year}_us_county_20m.json`
}

let freelyAssociatedStatesTopoPromise: Promise<FreelyAssociatedStatesTopology> | undefined

const normalizeJsonModule = <T>(module: T | { default: T }): T => {
  return ((module as { default?: T }).default ?? module) as T
}

export const getFreelyAssociatedStatesTopo = async (): Promise<FreelyAssociatedStatesTopology> => {
  if (!freelyAssociatedStatesTopoPromise) {
    freelyAssociatedStatesTopoPromise = import(
      /* webpackChunkName: "freely-associated-states-topo" */ './../data/freely-associated-states-topo.json'
    )
      .then(module => normalizeJsonModule<FreelyAssociatedStatesTopology>(module))
      .catch(error => {
        freelyAssociatedStatesTopoPromise = undefined
        throw error
      })
  }

  return freelyAssociatedStatesTopoPromise
}

const getRequestedCountyTopoYear = year => {
  const numericYear = parseInt(year, 10)

  if (isNaN(numericYear)) return 2019
  if (numericYear > 2022) return 2022
  if (numericYear < 2013) return 2013

  switch (numericYear) {
    case 2022:
    case 2021:
    case 2020:
    case 2014:
    case 2013:
      return numericYear
    case 2018:
    case 2017:
    case 2016:
    case 2015:
      return 2015
    default:
      return 2019
  }
}

const loadLocalCountyTopo = async () => {
  const module = await import(/* webpackChunkName: "cb_2019_us_county_20m" */ './../data/cb_2019_us_county_20m.json')
  return normalizeJsonModule(module)
}

const loadCountyTopoResponse = async requestedYear => {
  try {
    const response = await fetch(getCountyTopoURL(requestedYear))
    return response.status !== 200 ? await loadLocalCountyTopo() : await response.json()
  } catch {
    return loadLocalCountyTopo()
  }
}

type GetTopoDataOptions = {
  includeFreelyAssociatedStates?: boolean
}

export const getTopoData = async (year, options: GetTopoDataOptions = {}) => {
  const { includeFreelyAssociatedStates = false } = options
  const requestedYear = getRequestedCountyTopoYear(year)
  const topoResponse = await loadCountyTopoResponse(requestedYear)
  const topoSources = [topoResponse, usExtendedGeography]

  if (includeFreelyAssociatedStates) {
    topoSources.push(await getFreelyAssociatedStatesTopo())
  }

  const counties = topoSources.flatMap(topo => feature(topo, topo.objects.counties).features)
  const states = topoSources.flatMap(topo => feature(topo, topo.objects.states).features)

  return {
    year: year || 'default',
    fulljson: topoResponse,
    counties,
    states
  }
}

export const getCurrentTopoYear = (state, runtimeFilters) => {
  let currentYear = state.general.countyCensusYear

  if (state.general.filterControlsCountyYear && runtimeFilters && runtimeFilters.length > 0) {
    let yearFilter = runtimeFilters.filter(filter => filter.columnName === state.general.filterControlsCountyYear)
    if (yearFilter.length > 0 && yearFilter[0].active) {
      currentYear = yearFilter[0].active
    }
  }

  return currentYear || 'default'
}

export const isTopoReady = (topoData, state, runtimeFilters) => {
  let currentYear = getCurrentTopoYear(state, runtimeFilters)

  return topoData?.year && (!currentYear || currentYear === topoData?.year)
}

const hasMoreThanFromHash = (data: { [key: string]: any }): boolean => {
  // Get all keys of the data object
  const keys = Object.keys(data)

  // Filter out the 'fromHash' key
  const otherKeys = keys.filter(key => key !== 'fromHash')

  // Check if there are any other keys left
  return otherKeys.length > 0
}

export const getFilterControllingStatesPicked = (state, runtimeData): string[] => {
  if (!state.general.filterControlsStatesPicked || !runtimeData) {
    return state?.general?.statesPicked?.map(sp => sp.stateName) || []
  } else {
    if (hasMoreThanFromHash(runtimeData)) {
      let statesPickedFromFilter = Object.values(runtimeData)?.map(
        s => s[state.general.filterControlsStatesPicked]
      )?.[0]

      // Only need to check if filter result is an array since it could be a single value
      if (Array.isArray(statesPickedFromFilter)) {
        return statesPickedFromFilter
      } else if (statesPickedFromFilter) {
        return [statesPickedFromFilter]
      } else {
        return state?.general?.statesPicked?.map(sp => sp.stateName) || []
      }
    }
    return state?.general?.statesPicked?.map(sp => sp.stateName) || []
  }
}
