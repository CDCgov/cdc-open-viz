import { generateColorsArray } from '@cdc/core/helpers/generateColorsArray'
import { applyLegendToRow } from './applyLegendToRow'
import {
  DEFAULT_MAX_BUBBLE_SIZE,
  DEFAULT_MIN_BUBBLE_SIZE,
  createBubbleSizeScale,
  getBubbleLayerOpacity,
  getBubbleLayerStaticColor,
  getBubbleSizeColumnName,
  getConfiguredBubbleLayers,
  isBubbleLayerUsingCoordinates,
  mapConfigForBubbleLayer
} from './bubbleLayers'
import {
  createCategoricalBubbleSizeScale,
  getBubbleSizeCategoryValue,
  getOrderedBubbleSizeCategories,
  isCategoricalBubbleSize,
  shouldIncludeNonGeoDataInBubbleSizeDomain
} from './bubbleSize'
import { displayGeoName } from './displayGeoName'
import { generateBubbleLayerRuntimeData } from './generateRuntimeData'
import { getColumnNames } from './getColumnNames'
import { getLegendItemForRow } from './isLegendItemDisabled'
import type { BubbleLayer, DataRow, MapConfig } from '../types/MapConfig'
import type { RuntimeFilters } from '../types/MapConfig'
import type { RuntimeLegend } from '../types/runtimeLegend'
import type React from 'react'

type LegendMemo = React.MutableRefObject<Map<any, any>> | React.RefObject<Map<any, any>>

export type BubbleRenderRow = {
  uid?: string
  sourceRow: DataRow
  radius: number
  fillColor: string
  opacity: number
  extraBubbleBorder: boolean
  layerIndex: number
  bubbleLayerConfig: MapConfig
  tooltipHtml: string
  tooltipId: string
  displayName: string
  geoColumnName?: string | null
  latitudeColumnName?: string | null
  longitudeColumnName?: string | null
  usesExplicitCoordinates: boolean
}

type GetBubbleRenderDataArgs = {
  config: MapConfig
  filteredCountryCode?: string
  geoType: MapConfig['general']['geoType']
  getBubbleLegendMemo: (index?: number) => React.MutableRefObject<Map<any, any>>
  getBubbleLegendSpecialClassLastMemo: (index?: number) => React.MutableRefObject<Map<any, any>>
  legendMemo: LegendMemo
  legendSpecialClassLastMemo: LegendMemo
  runtimeBubbleLegend?: RuntimeLegend | RuntimeLegend[]
  runtimeData?: { fromHash?: number }
  runtimeFilters?: RuntimeFilters
  runtimeLegend?: RuntimeLegend
  tooltipId: string
  applyTooltipsToGeo: (displayName: string, dataRow: DataRow, type?: string, config?: MapConfig) => string
}

const getBubbleLegends = (runtimeBubbleLegend?: RuntimeLegend | RuntimeLegend[]) =>
  Array.isArray(runtimeBubbleLegend) ? runtimeBubbleLegend : runtimeBubbleLegend?.items ? [runtimeBubbleLegend] : []

const getDisplayName = (dataRow: DataRow, geoColumnName?: string | null, fallback = 'Location') => {
  const value = geoColumnName ? dataRow[geoColumnName] : ''
  return displayGeoName(String(value || dataRow.uid || fallback))
}

export const getBubbleRenderData = ({
  config,
  filteredCountryCode,
  geoType,
  getBubbleLegendMemo,
  getBubbleLegendSpecialClassLastMemo,
  legendMemo,
  legendSpecialClassLastMemo,
  runtimeBubbleLegend,
  runtimeData,
  runtimeFilters,
  runtimeLegend,
  tooltipId,
  applyTooltipsToGeo
}: GetBubbleRenderDataArgs): BubbleRenderRow[] => {
  const bubbleLayers = getConfiguredBubbleLayers(config)
  const bubbleLegends = getBubbleLegends(runtimeBubbleLegend)

  if (!bubbleLayers.length || (geoType !== 'world' && geoType !== 'us')) return []

  return bubbleLayers.flatMap((layer: BubbleLayer, layerIndex: number) => {
    const { extraBubbleBorder, columns: bubbleColumns } = layer
    const opacity = getBubbleLayerOpacity(layer)
    const { primaryColumnName, geoColumnName, latitudeColumnName, longitudeColumnName } =
      getColumnNames(bubbleColumns as any) || {}
    const sizeColumnName = getBubbleSizeColumnName(layer)
    const hasColorColumn = Boolean(primaryColumnName)
    const useExplicitCoordinateColumns = isBubbleLayerUsingCoordinates(layer)
    const hasExplicitCoordinateColumns = Boolean(latitudeColumnName && longitudeColumnName)

    if (!sizeColumnName || (useExplicitCoordinateColumns ? !hasExplicitCoordinateColumns : !geoColumnName)) return []

    const layerRuntimeData = generateBubbleLayerRuntimeData(
      config,
      layer,
      runtimeFilters as any,
      runtimeData?.fromHash ?? layerIndex
    )
    const usesCategoricalSize = isCategoricalBubbleSize(layer)
    const includeNonGeoDataInSizeDomain = shouldIncludeNonGeoDataInBubbleSizeDomain(layer)
    const layerScaleRuntimeData = generateBubbleLayerRuntimeData(
      config,
      layer,
      [],
      runtimeData?.fromHash ?? layerIndex,
      includeNonGeoDataInSizeDomain
    )
    const layerDataRows = Object.values(layerRuntimeData ?? {}) as DataRow[]
    const layerScaleDataRows = Object.values(layerScaleRuntimeData ?? {}) as DataRow[]
    const visibleLayerDataRows =
      geoType === 'world' && filteredCountryCode && !useExplicitCoordinateColumns
        ? layerDataRows.filter(row => row.uid === filteredCountryCode)
        : layerDataRows
    const minBubbleSize = Number.isFinite(Number(layer.minBubbleSize))
      ? Number(layer.minBubbleSize)
      : DEFAULT_MIN_BUBBLE_SIZE
    const maxBubbleSize = Number.isFinite(Number(layer.maxBubbleSize))
      ? Number(layer.maxBubbleSize)
      : DEFAULT_MAX_BUBBLE_SIZE
    const showBubbleZeros = layer.showBubbleZeros === true
    const orderedSizeCategories = usesCategoricalSize
      ? getOrderedBubbleSizeCategories(
          layerScaleDataRows,
          sizeColumnName,
          layer.sizeCategoryValuesOrder ?? [],
          showBubbleZeros
        )
      : []
    const categoricalSize = createCategoricalBubbleSizeScale(orderedSizeCategories, minBubbleSize, maxBubbleSize)
    const numericSizeScale = usesCategoricalSize
      ? null
      : createBubbleSizeScale(
          layerScaleDataRows.map(d => d[sizeColumnName]),
          layer
        )
    const layerLegend = bubbleLegends[layerIndex]
    const hasLayerLegend = !Array.isArray(layerLegend) && Boolean(layerLegend?.items?.length)
    const effectiveLegend = hasLayerLegend ? layerLegend : runtimeLegend
    const effectiveMemo = hasLayerLegend ? getBubbleLegendMemo(layerIndex) : legendMemo
    const effectiveSpecialMemo = hasLayerLegend
      ? getBubbleLegendSpecialClassLastMemo(layerIndex)
      : legendSpecialClassLastMemo
    const bubbleLayerConfig = mapConfigForBubbleLayer(config, layer)
    const legendConfig = hasLayerLegend ? bubbleLayerConfig : config
    const getBubbleRadius = (value: unknown): number | null => {
      if (usesCategoricalSize) {
        const categoryValue = getBubbleSizeCategoryValue(value)
        if (categoryValue === null || (categoryValue === '0' && !showBubbleZeros)) return null
        return categoricalSize(categoryValue)
      }
      return numericSizeScale?.getRadius(value) ?? null
    }
    const sortedRuntimeData = [...visibleLayerDataRows].sort((a: DataRow, b: DataRow) =>
      (getBubbleRadius(a[sizeColumnName]) ?? 0) < (getBubbleRadius(b[sizeColumnName]) ?? 0) ? 1 : -1
    )

    return sortedRuntimeData.flatMap((dataRow, index) => {
      const radius = getBubbleRadius(dataRow[sizeColumnName])
      if (radius === null) return []

      const legendItem = hasColorColumn
        ? getLegendItemForRow(dataRow, effectiveLegend, effectiveMemo as any, effectiveSpecialMemo as any, legendConfig)
        : null
      if (legendItem?.hidden) return []

      const mapLegendItem =
        hasLayerLegend && runtimeLegend?.items?.length
          ? getLegendItemForRow(dataRow, runtimeLegend, legendMemo as any, legendSpecialClassLastMemo as any, config)
          : null
      if (mapLegendItem?.disabled || mapLegendItem?.hidden) return []

      const legendColors = hasColorColumn
        ? applyLegendToRow(dataRow, legendConfig, effectiveLegend, effectiveMemo as any, effectiveSpecialMemo as any)
        : generateColorsArray(getBubbleLayerStaticColor(config, layer))
      const displayName = getDisplayName(dataRow, geoColumnName)

      return [
        {
          uid: dataRow.uid,
          sourceRow: dataRow,
          radius,
          fillColor: legendColors[0],
          opacity,
          extraBubbleBorder,
          layerIndex,
          bubbleLayerConfig,
          tooltipHtml: applyTooltipsToGeo(displayName, dataRow, 'string', bubbleLayerConfig),
          tooltipId,
          displayName,
          geoColumnName,
          latitudeColumnName: useExplicitCoordinateColumns ? latitudeColumnName : null,
          longitudeColumnName: useExplicitCoordinateColumns ? longitudeColumnName : null,
          usesExplicitCoordinates: useExplicitCoordinateColumns
        }
      ]
    })
  })
}
