import { feature } from 'topojson-client'
import usExtendedGeography from './../data/us-extended-geography.json'

export const getCountyTopoURL = year => {
  return `https://www.cdc.gov/TemplatePackage/contrib/data/county-topography/cb_${year}_us_county_20m.json`
}

export const getTopoData = year => {
  return new Promise((resolve, reject) => {
    const resolveWithTopo = async response => {
      if (response.status !== 200) {
        response = await import(/* webpackChunkName: "cb_2019_us_county_20m" */ './../data/cb_2019_us_county_20m.json')
      } else {
        response = await response.json()
      }

      const counties = [response, usExtendedGeography].flatMap(topo => feature(topo, topo.objects.counties).features)
      const states = [response, usExtendedGeography].flatMap(topo => feature(topo, topo.objects.states).features)

      const topoData = {
        year: year || 'default',
        fulljson: response,
        counties,
        states
      }

      resolve(topoData)
    }

    const numericYear = parseInt(year)

    if (isNaN(numericYear)) {
      fetch(getCountyTopoURL(2019)).then(resolveWithTopo)
    } else if (numericYear > 2022) {
      fetch(getCountyTopoURL(2022)).then(resolveWithTopo)
    } else if (numericYear < 2013) {
      fetch(getCountyTopoURL(2013)).then(resolveWithTopo)
    } else {
      switch (numericYear) {
        case 2022:
          fetch(getCountyTopoURL(2022)).then(resolveWithTopo)
          break
        case 2021:
          fetch(getCountyTopoURL(2021)).then(resolveWithTopo)
          break
        case 2020:
          fetch(getCountyTopoURL(2020)).then(resolveWithTopo)
          break
        case 2018:
        case 2017:
        case 2016:
        case 2015:
          fetch(getCountyTopoURL(2015)).then(resolveWithTopo)
          break
        case 2014:
          fetch(getCountyTopoURL(2014)).then(resolveWithTopo)
          break
        case 2013:
          fetch(getCountyTopoURL(2013)).then(resolveWithTopo)
          break
        default:
          fetch(getCountyTopoURL(2019)).then(resolveWithTopo)
          break
      }
    }
  })
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

export const hasMoreThanFromHash = (data: { [key: string]: any }): boolean => {
  // Get all keys of the data object
  const keys = Object.keys(data)

  // Filter out the 'fromHash' key
  const otherKeys = keys.filter(key => key !== 'fromHash')

  // Check if there are any other keys left
  return otherKeys.length > 0
}

export const getFilterControllingStatesPicked = (state, runtimeData) => {
  if (!state.general.filterControlsStatesPicked || !runtimeData) {
    return state?.general?.statesPicked?.map(sp => sp.stateName) || []
  } else {
    if (hasMoreThanFromHash(runtimeData)) {
      let statesPickedFromFilter = Object.values(state.data)?.map(s => s[state.general.filterControlsStatesPicked])?.[0]

      // Only need to check if filter result is an array since it could be a single value
      if (Array.isArray(statesPickedFromFilter)) {
        return statesPickedFromFilter
      } else if (statesPickedFromFilter) {
        return [statesPickedFromFilter]
      } else {
        return state?.general?.statesPicked?.map(sp => sp.stateName) || ['Alabama']
      }
    }
    return state?.general?.statesPicked?.map(sp => sp.stateName) || []
  }
}
