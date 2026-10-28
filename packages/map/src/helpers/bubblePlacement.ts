import { geoAlbersUsa, geoMercator, type GeoProjection } from 'd3-geo'
import { countryCoordinates } from '../data/country-coordinates'
import stateCoordinates from '../data/state-coordinates'
import { supportedTerritories } from '../data/supported-geos'
import { getFiniteBubbleNumber } from './bubbleLayers'
import { displayGeoName } from './displayGeoName'
import { SVG_WIDTH, SVG_HEIGHT } from './constants'
import type { DataRow, MapConfig } from '../types/MapConfig'
import type { BubbleCandidate } from './bubbleRenderData'

export type BubblePositionOverrides = Record<string, [number, number]>

export const getBubbleProjection = (geoType: MapConfig['general']['geoType']) =>
  geoType === 'world' ? geoMercator() : geoAlbersUsa().translate([SVG_WIDTH / 2 + 15, SVG_HEIGHT / 2])

export const getBubbleLocation = (
  candidate: BubbleCandidate,
  geoType: MapConfig['general']['geoType'],
  projection: GeoProjection,
  positionOverrides: BubblePositionOverrides = {}
) => {
  const getProjectedExplicitCoordinates = (
    dataRow: DataRow,
    latitudeColumnName?: string | null,
    longitudeColumnName?: string | null
  ) => {
    if (!projection || !latitudeColumnName || !longitudeColumnName) return null

    const latitude = getFiniteBubbleNumber(dataRow[latitudeColumnName])
    const longitude = getFiniteBubbleNumber(dataRow[longitudeColumnName])
    if (latitude === null || longitude === null) return null

    const point = projection([longitude, latitude])
    return point?.every(Number.isFinite) ? point : null
  }

  const locate = (
    dataRow: DataRow,
    geoColumnName?: string | null,
    latitudeColumnName?: string | null,
    longitudeColumnName?: string | null,
    allowGeographyLookup = true
  ) => {
    const explicitCoordinates = getProjectedExplicitCoordinates(dataRow, latitudeColumnName, longitudeColumnName)

    if (explicitCoordinates) {
      return {
        displayName: displayGeoName(String((geoColumnName ? dataRow[geoColumnName] : '') || dataRow.uid || 'Location')),
        projectedCoordinates: explicitCoordinates,
        usesExplicitCoordinates: true,
        clickData: dataRow
      }
    }

    if (!allowGeographyLookup) return null

    if (!geoColumnName || !dataRow.uid || !projection) return null

    if (geoType === 'world') {
      const coordinates = countryCoordinates[dataRow.uid]
      if (!coordinates) return null

      const projectedCoordinates = projection([coordinates[1], coordinates[0]])
      if (!projectedCoordinates?.every(Number.isFinite)) return null

      return {
        displayName: displayGeoName(String(dataRow[geoColumnName] || dataRow.uid || 'Location')),
        projectedCoordinates,
        usesExplicitCoordinates: false,
        clickData: dataRow
      }
    }

    if (geoType === 'us') {
      const stateData = stateCoordinates[dataRow.uid]
      if (!stateData) return null

      const projectedCoordinates =
        positionOverrides[dataRow.uid] ?? projection([Number(stateData.Longitude), Number(stateData.Latitude)])
      if (!projectedCoordinates?.every(Number.isFinite)) return null

      return {
        displayName: displayGeoName(stateData.Name),
        projectedCoordinates,
        usesExplicitCoordinates: false,
        clickData: stateData
      }
    }

    return null
  }

  return locate(
    candidate.sourceRow,
    candidate.geoColumnName,
    candidate.latitudeColumnName,
    candidate.longitudeColumnName,
    !candidate.usesExplicitCoordinates
  )
}

/** Keep layer priority and size ordering; equal-size US bubbles paint from top to bottom. */
export const getPlacedBubbleRows = <T extends BubbleCandidate>(
  rows: T[],
  geoType: MapConfig['general']['geoType'],
  projection: GeoProjection,
  positionOverrides: BubblePositionOverrides = {}
) => {
  const placed = rows.flatMap(row => {
    const location = getBubbleLocation(row, geoType, projection, positionOverrides)
    return location ? [{ row, location }] : []
  })
  if (geoType === 'us') {
    placed.sort(
      (a, b) =>
        a.row.layerIndex - b.row.layerIndex ||
        b.row.radius - a.row.radius ||
        a.location.projectedCoordinates[1] - b.location.projectedCoordinates[1] ||
        String(a.row.uid ?? '').localeCompare(String(b.row.uid ?? ''))
    )
  }
  return placed
}

/** Territories render in separate SVGs, outside the Albers USA projection. */
export const isTerritoryBubblePlaceable = (
  candidate: BubbleCandidate,
  config: MapConfig,
  runtimeData: Record<string, any>
) =>
  config.general.geoType === 'us' &&
  !config.general.displayAsHex &&
  !candidate.usesExplicitCoordinates &&
  getVisibleStateTerritories(config, runtimeData).includes(candidate.uid)

export const getVisibleStateTerritories = (config: MapConfig, runtimeData: Record<string, any>) =>
  Object.keys(supportedTerritories).filter(uid => config.general.territoriesAlwaysShow || runtimeData?.[uid])
