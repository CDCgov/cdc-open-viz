import { addUIDs } from './addUIDs'
import numberFromString from '@cdc/core/helpers/numberFromString'
import { MapConfig } from '../types/MapConfig'
import { VizFilter } from '@cdc/core/types/VizFilter'
import { DataRow } from '../types/MapConfig'
import {
  getFiniteBubbleNumber,
  getConfiguredBubbleLayers,
  getPrimaryBubbleLayer,
  hasBubbleLayerCoordinateColumns,
  isBubbleLayerUsingCoordinates,
  mapConfigForBubbleLayer
} from './bubbleLayers'
import type { BubbleLayer } from '../types/MapConfig'

const setRowUID = (row: DataRow, uid: string): void => {
  if (Object.prototype.hasOwnProperty.call(row, 'uid')) {
    row.uid = uid
    return
  }

  Object.defineProperty(row, 'uid', {
    value: uid,
    writable: true
  })
}

const hasValidBubbleCoordinates = (row: DataRow, layer: BubbleLayer): boolean => {
  const latitudeColumnName = layer.columns.latitude?.name
  const longitudeColumnName = layer.columns.longitude?.name
  if (!latitudeColumnName || !longitudeColumnName) return false

  return (
    getFiniteBubbleNumber(row[latitudeColumnName]) !== null && getFiniteBubbleNumber(row[longitudeColumnName]) !== null
  )
}

const getCoordinateBubbleUID = (row: DataRow, rowIndex: number, layer: BubbleLayer): string => {
  const labelColumnName = layer.columns.geo?.name
  const label = labelColumnName ? row[labelColumnName] : ''
  const labelPart = label ? String(label).replace(/\s+/g, '-').toLowerCase() : 'row'

  return `coordinate-bubble-${rowIndex}-${labelPart}`
}

export const rowMatchesRuntimeFilters = (row: DataRow, filters?: VizFilter[]): boolean => {
  if (!filters?.length) return true

  for (let i = 0; i < filters.length; i++) {
    const { columnName, active, type, filterStyle, subGrouping } = filters[i]
    const isDataFilter = type !== 'url'
    const matchingValue = String(active) === String(row[columnName])
    if (isDataFilter && !matchingValue) return false

    if (filterStyle === 'nested-dropdown') {
      const matchingSubValue = String(row[subGrouping?.columnName]) === String(subGrouping?.active)
      if (subGrouping?.active && !matchingSubValue) return false
    }
  }

  return true
}

const generateRuntimeData = (
  configObj: MapConfig,
  filters: VizFilter[],
  hash: number,
  isCategoryLegend: boolean,
  keepNoUidRows = false
): {
  [uid: string]: DataRow
} => {
  try {
    const result: { [uid: string]: DataRow } = {}

    // Adding property this way prevents it from being enumerated
    Object.defineProperty(result, 'fromHash', {
      value: hash
    })

    const bubbleLayers = getConfiguredBubbleLayers(configObj)
    const primaryBubbleLayer = getPrimaryBubbleLayer(configObj)
    const geoColName = configObj.columns.geo.name || primaryBubbleLayer?.columns.geo.name || ''
    const coordinateBubbleLayers = bubbleLayers.filter(
      layer => isBubbleLayerUsingCoordinates(layer) && hasBubbleLayerCoordinateColumns(layer)
    )

    addUIDs(configObj, geoColName)

    configObj.data.forEach((row: DataRow, rowIndex: number) => {
      if (coordinateBubbleLayers.length) {
        const coordinateLayer = coordinateBubbleLayers.find(layer => hasValidBubbleCoordinates(row, layer))
        if (coordinateLayer) {
          setRowUID(row, getCoordinateBubbleUID(row, rowIndex, coordinateLayer))
        }
      }

      if (!row.uid) {
        if (!keepNoUidRows) return false // No UID for this row, we can't use for mapping
        setRowUID(row, geoColName ? String(row[geoColName]) : `row-${rowIndex}`)
      }
      // For bubble layers: choropleth primary takes precedence when set; otherwise the
      // first bubble layer's primary drives data typing for bubble-only maps.
      const bubblePrimary = primaryBubbleLayer?.columns.primary.name ?? ''
      const choroplethPrimary = configObj.columns.primary.name
      const configPrimaryName = choroplethPrimary || bubblePrimary
      const value = row[configPrimaryName]
      const categoryLegend = typeof value === 'string' && isCategoryLegend
      if (value && !categoryLegend) {
        row[configPrimaryName] = numberFromString(value)
      }

      bubbleLayers.forEach(layer => {
        const layerLegendType = layer.legend?.type ?? configObj.legend.type
        const layerPrimary = layer.columns.primary.name
        const layerSize = layer.columns.size?.name

        if (layerPrimary && layerPrimary !== configPrimaryName) {
          const bubbleValue = row[layerPrimary]
          const isBubbleCategory = typeof bubbleValue === 'string' && layerLegendType === 'category'
          if (bubbleValue && typeof bubbleValue === 'string' && !isBubbleCategory) {
            row[layerPrimary] = numberFromString(bubbleValue)
          }
        }

        if (layerSize) {
          const sizeValue = row[layerSize]
          if (sizeValue && typeof sizeValue === 'string') {
            row[layerSize] = numberFromString(sizeValue)
          }
        }

        const layerLatitude = layer.columns.latitude?.name
        const layerLongitude = layer.columns.longitude?.name
        ;[layerLatitude, layerLongitude].forEach(columnName => {
          if (!columnName) return
          const coordinateValue = row[columnName]
          const numericCoordinateValue = getFiniteBubbleNumber(coordinateValue)
          if (numericCoordinateValue !== null && typeof coordinateValue === 'string') {
            row[columnName] = numericCoordinateValue
          }
        })
      })

      // If this is a navigation only map, skip if it doesn't have a URL

      if ('navigation' === configObj.general.type) {
        let navigateUrl = row[configObj.columns.navigate.name] || ''

        if (undefined !== navigateUrl && typeof navigateUrl === 'string') {
          // Strip hidden characters before we check length
          navigateUrl = navigateUrl.replace(/(\r\n|\n|\r)/gm, '')
        }
        if (0 === navigateUrl?.length) {
          return false
        }
      }

      // Filters
      if (!rowMatchesRuntimeFilters(row, filters)) return false
      // Don't add additional rows with same UID
      if (result[row.uid] === undefined) {
        result[row.uid] = row
      }
    })
    return result
  } catch (e) {
    console.error('COVE: ', e) // eslint-disable-line
  }
}

export const generateBubbleLayerRuntimeData = (
  configObj: MapConfig,
  layer: BubbleLayer,
  filters: VizFilter[],
  hash: number,
  keepNoUidRows = false
) => {
  const layerConfig = mapConfigForBubbleLayer(
    {
      ...configObj,
      data: (configObj.data ?? []).map(row => ({ ...row }))
    },
    layer
  )
  const layerLegendType = layerConfig.legend?.type ?? configObj.legend?.type

  return generateRuntimeData(layerConfig, filters, hash, layerLegendType === 'category', keepNoUidRows)
}

export default generateRuntimeData
