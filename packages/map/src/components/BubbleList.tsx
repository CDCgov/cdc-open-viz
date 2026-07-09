import React, { useContext } from 'react'
import { countryCoordinates } from '../data/country-coordinates'
import stateCoordinates from '../data/state-coordinates'
import ConfigContext, { MapDispatchContext } from '../context'
import { useLegendMemoContext } from '../context/LegendMemoContext'
import { type Coordinate, DataRow } from '../types/MapConfig'
import useApplyTooltipsToGeo from '../hooks/useApplyTooltipsToGeo'
import { applyLegendToRow } from '../helpers/applyLegendToRow'
import { generateColorsArray } from '@cdc/core/helpers/generateColorsArray'
import { SVG_HEIGHT, SVG_WIDTH } from '../helpers/constants'
import { displayGeoName } from '../helpers/displayGeoName'
import { geoMercator, geoAlbersUsa, type GeoProjection } from 'd3-geo'
import { getColumnNames } from '../helpers/getColumnNames'
import { MapContext } from '../types/MapContext'
import useGeoClickHandler from '../hooks/useGeoClickHandler'
import {
  getFiniteBubbleNumber,
  getConfiguredBubbleLayers,
  getBubbleLayerOpacity,
  getBubbleLayerStaticColor,
  isBubbleLayerUsingCoordinates,
  mapConfigForBubbleLayer
} from '../helpers/bubbleLayers'
import {
  createCategoricalBubbleSizeScale,
  createNumericBubbleSizeScale,
  getBubbleSizeCategoryValue,
  getNumericBubbleSizeValues,
  getOrderedBubbleSizeCategories,
  isCategoricalBubbleSize
} from '../helpers/bubbleSize'
import { generateBubbleLayerRuntimeData } from '../helpers/generateRuntimeData'
import type { BubbleLayer } from '../types/MapConfig'
import BubbleMarker from './BubbleMarker'

type BubbleListProps = {
  customProjection?: GeoProjection
  projection?: GeoProjection
  runtimeData?: DataRow[]
}

type BubbleMarkerProps = {
  className: string
  clickTolerance: number
  coordinates: number[]
  extraBubbleBorder: boolean
  fillColor: string
  opacity: number
  layerIndex: number
  markerKey: string
  onClick: () => void
  onPointerDown: (e: React.PointerEvent<SVGCircleElement> | React.MouseEvent<SVGCircleElement>) => void
  radius: number
  tooltipHtml: string
  tooltipId: string
}

const renderBubbleMarker = ({
  className,
  clickTolerance,
  coordinates,
  extraBubbleBorder,
  fillColor,
  opacity,
  layerIndex,
  markerKey,
  onClick,
  onPointerDown,
  radius,
  tooltipHtml,
  tooltipId
}: BubbleMarkerProps) => {
  let pointerX: number | undefined
  let pointerY: number | undefined
  const circleStyle: React.CSSProperties = { transition: 'all .25s ease-in-out', cursor: 'pointer' }

  const handlePointerDown = (e: React.PointerEvent<SVGCircleElement>) => {
    onPointerDown(e)
    pointerX = e.clientX
    pointerY = e.clientY
  }

  const handlePointerUp = (e: React.PointerEvent<SVGCircleElement>) => {
    if (
      pointerX !== undefined &&
      pointerY !== undefined &&
      e.clientX > pointerX - clickTolerance &&
      e.clientX < pointerX + clickTolerance &&
      e.clientY > pointerY - clickTolerance &&
      e.clientY < pointerY + clickTolerance
    ) {
      onClick()
      pointerX = undefined
      pointerY = undefined
    }
  }

  const commonCircleProps = {
    tabIndex: -1,
    'data-bubble-layer-index': layerIndex,
    onMouseEnter: () => {},
    onMouseDown: (e: React.MouseEvent<SVGCircleElement>) => onPointerDown(e),
    onPointerDown: handlePointerDown,
    onPointerUp: handlePointerUp,
    style: circleStyle,
    'data-tooltip-id': `tooltip__${tooltipId}`,
    'data-tooltip-html': tooltipHtml
  }

  return (
    <React.Fragment key={`circle-fragment-${markerKey}`}>
      <BubbleMarker
        {...commonCircleProps}
        centerX={Number(coordinates[0]) || 0}
        centerY={Number(coordinates[1]) || 0}
        className={className}
        radius={radius}
        fillColor={fillColor}
        fillOpacity={opacity}
        extraBubbleBorder={extraBubbleBorder}
      />
    </React.Fragment>
  )
}

const BubbleList: React.FC<BubbleListProps> = ({ customProjection, projection: providedProjection }) => {
  const { config, filteredCountryCode, tooltipId, runtimeData, runtimeFilters, runtimeLegend, runtimeBubbleLegend } =
    useContext<MapContext>(ConfigContext)
  const { legendMemo, legendSpecialClassLastMemo, getBubbleLegendMemo, getBubbleLegendSpecialClassLastMemo } =
    useLegendMemoContext()

  const { data, general } = config
  const { geoType, allowMapZoom } = general
  const clickTolerance = 10
  const dispatch = useContext(MapDispatchContext)
  const { geoClickHandler } = useGeoClickHandler()

  // hooks
  const { applyTooltipsToGeo } = useApplyTooltipsToGeo()
  const bubbleLayers = getConfiguredBubbleLayers(config)
  const bubbleLegends = Array.isArray(runtimeBubbleLegend)
    ? runtimeBubbleLegend
    : runtimeBubbleLegend?.items
    ? [runtimeBubbleLegend]
    : []

  const getProjection = () => {
    try {
      if (providedProjection) return providedProjection
      if (geoType === 'world') return geoMercator()
      if (geoType === 'us') return geoAlbersUsa().translate([SVG_WIDTH / 2 + 15, SVG_HEIGHT / 2]) // translate is half of each svg x/y viewbox values
      if (customProjection) return customProjection
      throw new Error('No projection found in BubbleList component')
    } catch (e) {
      console.error(e)
    }
  }

  const projection = getProjection()

  const handleBubbleClick = (dataRow: DataRow, geoColumnName: string) => {
    if (!allowMapZoom) return
    const newRuntimeData = data.filter(item => item[geoColumnName] === dataRow[geoColumnName])
    const _filteredCountryCode = newRuntimeData[0]?.uid
    if (!_filteredCountryCode) return null
    const coordinates = countryCoordinates[_filteredCountryCode]
    const long = coordinates[1]
    const lat = coordinates[0]
    const reversedCoordinates: Coordinate = [long, lat]
    const filteredCountryObj = runtimeData[_filteredCountryCode]
    const _tempRuntimeData = {
      [_filteredCountryCode]: filteredCountryObj
    }

    // Zoom the map in...
    dispatch({ type: 'SET_POSITION', payload: { coordinates: reversedCoordinates, zoom: 3 } })
    dispatch({ type: 'SET_FILTERED_COUNTRY_CODE', payload: _filteredCountryCode })

    // ...and show the data for the clicked country
    dispatch({ type: 'SET_RUNTIME_DATA', payload: _tempRuntimeData })
  }

  const handleBubblePointerDown = (e: React.PointerEvent<SVGCircleElement> | React.MouseEvent<SVGCircleElement>) => {
    e.preventDefault()
  }

  const getDisplayName = (dataRow: DataRow, geoColumnName?: string | null, fallback = 'Location') => {
    const value = geoColumnName ? dataRow[geoColumnName] : ''
    return displayGeoName(String(value || dataRow.uid || fallback))
  }

  const getProjectedExplicitCoordinates = (
    dataRow: DataRow,
    latitudeColumnName?: string | null,
    longitudeColumnName?: string | null
  ) => {
    if (!projection || !latitudeColumnName || !longitudeColumnName) return null

    const latitude = getFiniteBubbleNumber(dataRow[latitudeColumnName])
    const longitude = getFiniteBubbleNumber(dataRow[longitudeColumnName])
    if (latitude === null || longitude === null) return null

    return projection([longitude, latitude])
  }

  const getBubbleLocation = (
    dataRow: DataRow,
    geoColumnName?: string | null,
    latitudeColumnName?: string | null,
    longitudeColumnName?: string | null,
    allowGeographyLookup = true
  ) => {
    const explicitCoordinates = getProjectedExplicitCoordinates(dataRow, latitudeColumnName, longitudeColumnName)

    if (explicitCoordinates) {
      return {
        displayName: getDisplayName(dataRow, geoColumnName),
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
      if (!projectedCoordinates) return null

      return {
        displayName: getDisplayName(dataRow, geoColumnName),
        projectedCoordinates,
        usesExplicitCoordinates: false,
        clickData: dataRow
      }
    }

    if (geoType === 'us') {
      const stateData = stateCoordinates[dataRow.uid]
      if (!stateData) return null

      const projectedCoordinates = projection([Number(stateData.Longitude), Number(stateData.Latitude)])
      if (!projectedCoordinates) return null

      return {
        displayName: displayGeoName(stateData.Name),
        projectedCoordinates,
        usesExplicitCoordinates: false,
        clickData: stateData
      }
    }

    return null
  }

  const renderLayer = (layer: BubbleLayer, layerIndex: number) => {
    const { minBubbleSize, maxBubbleSize, showBubbleZeros, extraBubbleBorder, columns: bubbleColumns } = layer
    const opacity = getBubbleLayerOpacity(layer)
    const { primaryColumnName, geoColumnName, latitudeColumnName, longitudeColumnName } =
      getColumnNames(bubbleColumns as any) || {}
    const sizeColumnName = bubbleColumns?.size?.name || primaryColumnName
    const hasColorColumn = Boolean(primaryColumnName)
    const useExplicitCoordinateColumns = isBubbleLayerUsingCoordinates(layer)
    const hasExplicitCoordinateColumns = Boolean(latitudeColumnName && longitudeColumnName)
    if (
      !projection ||
      !sizeColumnName ||
      (useExplicitCoordinateColumns ? !hasExplicitCoordinateColumns : !geoColumnName)
    ) {
      return null
    }

    const layerRuntimeData = generateBubbleLayerRuntimeData(
      config,
      layer,
      runtimeFilters as any,
      runtimeData?.fromHash ?? layerIndex
    )
    const layerDataRows = Object.values(layerRuntimeData ?? {}) as DataRow[]
    const visibleLayerDataRows =
      geoType === 'world' && filteredCountryCode && !useExplicitCoordinateColumns
        ? layerDataRows.filter(row => row.uid === filteredCountryCode)
        : layerDataRows
    const usesCategoricalSize = isCategoricalBubbleSize(layer)
    const orderedSizeCategories = usesCategoricalSize
      ? getOrderedBubbleSizeCategories(
          visibleLayerDataRows,
          sizeColumnName,
          layer.sizeCategoryValuesOrder ?? [],
          showBubbleZeros
        )
      : []
    const categoricalSize = createCategoricalBubbleSizeScale(orderedSizeCategories, minBubbleSize, maxBubbleSize)
    const numericSize = createNumericBubbleSizeScale(
      getNumericBubbleSizeValues(visibleLayerDataRows, sizeColumnName, true),
      minBubbleSize,
      maxBubbleSize,
      showBubbleZeros
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
      if (usesCategoricalSize) return categoricalSize(value)
      const numericSizeValue = getFiniteBubbleNumber(value)
      if (numericSizeValue === null) return null
      if (Math.floor(numericSizeValue) === 0 && !showBubbleZeros) return null
      return Number(numericSize(numericSizeValue))
    }
    const sortedRuntimeData: DataRow[] = visibleLayerDataRows.sort((a: DataRow, b: DataRow) =>
      (getBubbleRadius(a[sizeColumnName]) ?? 0) < (getBubbleRadius(b[sizeColumnName]) ?? 0) ? 1 : -1
    )

    if (!sortedRuntimeData) return null

    if (geoType !== 'world' && geoType !== 'us') return null

    return sortedRuntimeData.map((dataRow, index) => {
      const sizeValue = dataRow[sizeColumnName]
      const categorySizeValue = usesCategoricalSize ? getBubbleSizeCategoryValue(sizeValue) : null
      if (usesCategoricalSize && (categorySizeValue === null || (categorySizeValue === '0' && !showBubbleZeros))) {
        return null
      }
      const radius = getBubbleRadius(sizeValue)
      if (radius === null) return null

      const location = getBubbleLocation(
        dataRow,
        geoColumnName,
        useExplicitCoordinateColumns ? latitudeColumnName : null,
        useExplicitCoordinateColumns ? longitudeColumnName : null,
        !useExplicitCoordinateColumns
      )
      if (!location) return null

      const toolTip = applyTooltipsToGeo(location.displayName, dataRow, 'string', bubbleLayerConfig)
      const legendColors = hasColorColumn
        ? applyLegendToRow(dataRow, legendConfig, effectiveLegend, effectiveMemo, effectiveSpecialMemo)
        : generateColorsArray(getBubbleLayerStaticColor(config, layer))
      const classSuffix = location.displayName.replace(/\s+/g, '')
      const markerKey = `${layerIndex}-${dataRow.uid ?? index}-${classSuffix}`
      const className = location.usesExplicitCoordinates
        ? 'bubble bubble--coordinate'
        : geoType === 'world'
        ? `bubble country--${classSuffix}`
        : 'bubble'

      const circle = renderBubbleMarker({
        className,
        clickTolerance,
        coordinates: location.projectedCoordinates,
        extraBubbleBorder,
        fillColor: legendColors[0],
        opacity,
        layerIndex,
        markerKey,
        onClick: () => {
          if (location.usesExplicitCoordinates) {
            geoClickHandler(location.displayName, location.clickData)
            return
          }
          if (geoType === 'world' && geoColumnName) {
            handleBubbleClick(dataRow, geoColumnName)
            return
          }
          geoClickHandler(location.displayName, location.clickData)
        },
        onPointerDown: handleBubblePointerDown,
        radius,
        tooltipHtml: toolTip,
        tooltipId
      })

      return (
        <g key={`group-${markerKey}`} tabIndex={-1}>
          {circle}
        </g>
      )
    })
  }

  if (!bubbleLayers.length) return null

  return <>{bubbleLayers.map((layer, layerIndex) => renderLayer(layer, layerIndex))}</>
}
export default BubbleList
