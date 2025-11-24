import { useContext, useEffect, useMemo, useCallback, useRef } from 'react'
import ConfigContext, { MapDispatchContext } from '../context'
import { geoMercator } from 'd3-geo'
import { MapContext } from '../types/MapContext'
import { geoPath, GeoPath } from 'd3-geo'
import { getCountriesPicked } from '../helpers/getCountriesPicked'
import { SVG_HEIGHT, SVG_WIDTH, SVG_PADDING } from '../helpers'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'
import { getVizTitle, getVizSubType } from '@cdc/core/helpers/metrics/utils'

interface CountryData {
  geometry: { type: 'Polygon' | 'MultiPolygon'; coordinates: number[][][][] | number[][][] }
  // ISO code of country
  id: string
  // Country properties
  properties: { name: string; iso: string }
  type: 'Feature'
}

const useCountryZoom = (worldData: CountryData[]) => {
  const { config, interactionLabel } = useContext<MapContext>(ConfigContext)
  const dispatch = useContext(MapDispatchContext)

  // Ref to track last centered countries to prevent unnecessary re-centering
  const lastCenteredCountries = useRef<string>('')

  // Get countriesPicked with memoization
  const countriesPicked = useMemo(() => {
    const result = getCountriesPicked(config)

    if (!result) return []
    if (!Array.isArray(result)) return [result]
    const isoList = result.map(country => country.iso)
    return isoList
  }, [config.general.countriesPicked])

  // Memoize expensive computations for country centering
  const projectionData = useMemo(() => {
    if (!worldData || !countriesPicked.length) {
      return {
        projection: geoMercator(),
        countryCenter: [0, 30] as [number, number], // Default world center
        countryZoom: 1
      }
    }

    const baseProjection = geoMercator()
      .translate([SVG_WIDTH / 2, SVG_HEIGHT / 2])
      .scale(1)

    // List of ISO codes for small/uninhabited territories that should be excluded from zoom calculations
    // These tiny islands can distort the bounding box and cause excessive zoom out
    const excludedTerritories = [
      'ATF', // French Southern and Antarctic Lands (Kerguelen, Crozet, etc.)
      'HMD', // Heard Island and McDonald Islands
      'SGS', // South Georgia and South Sandwich Islands
      'BVT' // Bouvet Island
    ]

    // List of specific territory names that should be excluded even if they share an ISO with a main country
    const excludedTerritoryNames = [
      'Saint Paul and Amsterdam Islands', // French territory in Indian Ocean
      'Kerguelen Islands',
      'Crozet Islands'
    ]

    // Filter world data to selected countries, excluding small territories from zoom calculation
    const selectedCountriesData = worldData.filter(country => {
      // Match by ISO code OR by name (to handle cases where config uses name instead of ISO)
      const matchesSelectedCountry = countriesPicked.some(
        iso => iso === country.properties.iso || iso === country.properties.name
      )
      const isExcludedByISO = excludedTerritories.includes(country.properties.iso)
      const isExcludedByName = excludedTerritoryNames.some(
        name => country.properties.name && country.properties.name.includes(name)
      )

      return matchesSelectedCountry && !isExcludedByISO && !isExcludedByName
    })

    if (!selectedCountriesData.length) {
      return {
        projection: baseProjection,
        countryCenter: [0, 30] as [number, number], // Default world center
        countryZoom: 1
      }
    }

    // Create a feature collection for selected countries
    const combinedData = {
      type: 'FeatureCollection',
      features: selectedCountriesData
    }

    // Fit projection to selected countries - this calculates the optimal scale and translate
    const fittedProjection = baseProjection.fitExtent(
      [
        [SVG_PADDING, SVG_PADDING],
        [SVG_WIDTH - SVG_PADDING, SVG_HEIGHT - SVG_PADDING]
      ],
      combinedData as any
    )

    // Calculate zoom level from the fitted projection
    // The fitExtent method automatically calculates the scale needed to fit the features
    const fittedScale = fittedProjection.scale()

    // Use the default geoMercator scale (around 153) as base reference
    const defaultMercatorScale = 153 // Standard geoMercator scale for world view
    let calculatedZoom = fittedScale / defaultMercatorScale

    // Clamp zoom to reasonable bounds
    // Allow zoom out to 0.5x for large multi-country spans (e.g., Argentina + Canada)
    // Max zoom of 10x for small countries
    const clampedZoom = Math.max(0.5, Math.min(10, calculatedZoom))

    // Calculate the center point using BOUNDING BOX CENTER (not area-weighted centroid)
    // This ensures equal geographic treatment regardless of country size
    const path: GeoPath = geoPath().projection(fittedProjection)
    const bounds = path.bounds(combinedData as any)

    // Calculate geographic bounds
    const geoBounds = {
      topLeft: fittedProjection.invert([bounds[0][0], bounds[0][1]]),
      bottomRight: fittedProjection.invert([bounds[1][0], bounds[1][1]])
    }

    // Use bounding box midpoint as center (NOT area-weighted centroid which favors larger countries)
    const countryCenter: [number, number] = [
      (geoBounds.topLeft[0] + geoBounds.bottomRight[0]) / 2,
      (geoBounds.topLeft[1] + geoBounds.bottomRight[1]) / 2
    ]

    const result = {
      projection: fittedProjection,
      countryCenter,
      countryZoom: clampedZoom
    }

    return result
  }, [worldData, countriesPicked.join(',')]) // Use string key for more stable memoization

  const centerOnCountries = useCallback(
    (zoomFunction: string = '') => {
      if (!countriesPicked.length) {
        return
      }

      const _prevPosition = config.mapPosition || { coordinates: [0, 30], zoom: 1 }
      let newZoom = projectionData.countryZoom
      let newCoordinates = projectionData.countryCenter

      if (zoomFunction === 'zoomIn' && projectionData.countryZoom < 4) {
        newZoom = Math.min(4, projectionData.countryZoom * 1.5)
        newCoordinates = projectionData.countryCenter
        publishAnalyticsEvent({
          vizType: 'map',
          vizSubType: getVizSubType(config),
          eventType: 'zoom_in',
          eventAction: 'click',
          eventLabel: interactionLabel,
          vizTitle: getVizTitle(config),
          specifics: `zoom_level: ${Math.floor(newZoom)}`
        })
      } else if (zoomFunction === 'zoomOut' && projectionData.countryZoom > 1) {
        newZoom = Math.max(1, projectionData.countryZoom / 1.5)
        newCoordinates = projectionData.countryCenter
      } else if (zoomFunction === 'reset') {
        newZoom = projectionData.countryZoom
        newCoordinates = projectionData.countryCenter
      } else if (zoomFunction === 'center' || zoomFunction === '') {
        // Auto-center with calculated zoom - this is the main centering logic
        newZoom = projectionData.countryZoom
        newCoordinates = projectionData.countryCenter
      }

      const payload = { coordinates: newCoordinates, zoom: newZoom }
      dispatch({ type: 'SET_POSITION', payload })

      if (zoomFunction === 'reset') {
        publishAnalyticsEvent({
          vizType: 'map',
          vizSubType: getVizSubType(config),
          eventType: 'map_reset_zoom_level',
          eventAction: 'click',
          eventLabel: interactionLabel,
          vizTitle: getVizTitle(config)
        })
      }
    },
    [
      config.mapPosition,
      projectionData.countryCenter,
      projectionData.countryZoom,
      interactionLabel,
      dispatch,
      countriesPicked
    ]
  )

  // Auto-center when countries are selected/changed
  useEffect(() => {
    const countriesKey = countriesPicked.sort().join(',')

    if (!worldData || !countriesPicked.length) {
      lastCenteredCountries.current = ''
      return
    }

    // Only re-center if countries have actually changed
    if (lastCenteredCountries.current === countriesKey) {
      return
    }

    lastCenteredCountries.current = countriesKey

    // Immediately center on the selected countries with calculated zoom
    const payload = {
      coordinates: projectionData.countryCenter,
      zoom: projectionData.countryZoom
    }

    // Additional validation before dispatch
    const [lng, lat] = payload.coordinates
    const coordsValid = lng >= -180 && lng <= 180 && lat >= -90 && lat <= 90
    const zoomValid = payload.zoom >= 0.1 && payload.zoom <= 10

    if (coordsValid && zoomValid) {
      dispatch({ type: 'SET_POSITION', payload })
    }
  }, [worldData, countriesPicked, projectionData.countryCenter, projectionData.countryZoom, dispatch])

  return {
    centerOnCountries,
    countriesPicked,
    countryCenter: projectionData.countryCenter,
    countryZoom: projectionData.countryZoom
  }
}

export default useCountryZoom
