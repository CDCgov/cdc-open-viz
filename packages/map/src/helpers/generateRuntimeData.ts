import { addUIDs } from '.'
import numberFromString from '@cdc/core/helpers/numberFromString'
import { MapConfig } from '../types/MapConfig'
import { VizFilter } from '@cdc/core/types/VizFilter'
import { DataRow } from '../types/MapConfig'
import {
  getConfiguredBubbleLayers,
  getPrimaryBubbleLayer,
  hasBubbleLayerCoordinateColumns,
  isBubbleLayerUsingCoordinates
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

  return Number.isFinite(Number(row[latitudeColumnName])) && Number.isFinite(Number(row[longitudeColumnName]))
}

const getCoordinateBubbleUID = (row: DataRow, rowIndex: number, layer: BubbleLayer): string => {
  const labelColumnName = layer.columns.geo?.name
  const label = labelColumnName ? row[labelColumnName] : ''
  const labelPart = label ? String(label).replace(/\s+/g, '-').toLowerCase() : 'row'

  return `coordinate-bubble-${rowIndex}-${labelPart}`
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
          if (coordinateValue && typeof coordinateValue === 'string') {
            row[columnName] = numberFromString(coordinateValue)
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
      if (filters?.length) {
        for (let i = 0; i < filters.length; i++) {
          const { columnName, active, type, filterStyle, subGrouping } = filters[i]
          const isDataFilter = type !== 'url'
          const matchingValue = String(active) === String(row[columnName]) // Group
          if (isDataFilter && !matchingValue) return false // Bail out, data doesn't match the filter selection
          if (filterStyle == 'nested-dropdown') {
            const matchingSubValue = String(row[subGrouping?.columnName]) === String(subGrouping?.active)
            if (subGrouping?.active && !matchingSubValue) {
              return false // Bail out, data doesn't match the subgroup selection
            }
          }
        }
      }
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

export default generateRuntimeData
