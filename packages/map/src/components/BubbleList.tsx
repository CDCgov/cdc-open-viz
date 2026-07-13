import React, { useContext } from 'react'
import { countryCoordinates } from '../data/country-coordinates'
import stateCoordinates from '../data/state-coordinates'
import ConfigContext, { MapDispatchContext } from '../context'
import { useLegendMemoContext } from '../context/LegendMemoContext'
import { type Coordinate, DataRow } from '../types/MapConfig'
import useApplyTooltipsToGeo from '../hooks/useApplyTooltipsToGeo'
import { SVG_HEIGHT, SVG_WIDTH } from '../helpers/constants'
import { displayGeoName } from '../helpers/displayGeoName'
import { geoMercator, geoAlbersUsa, type GeoProjection } from 'd3-geo'
import { MapContext } from '../types/MapContext'
import useGeoClickHandler from '../hooks/useGeoClickHandler'
import { getFiniteBubbleNumber, getConfiguredBubbleLayers } from '../helpers/bubbleLayers'
import { getBubbleRenderData } from '../helpers/bubbleRenderData'
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
      if (!projectedCoordinates) return null

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

  const renderBubbles = () => {
    if (!projection) return null
    const bubbleRows = getBubbleRenderData({
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
    })

    return bubbleRows.map((bubbleRow, index) => {
      const location = getBubbleLocation(
        bubbleRow.sourceRow,
        bubbleRow.geoColumnName,
        bubbleRow.latitudeColumnName,
        bubbleRow.longitudeColumnName,
        !bubbleRow.usesExplicitCoordinates
      )
      if (!location) return null

      const classSuffix = location.displayName.replace(/\s+/g, '')
      const markerKey = `${bubbleRow.layerIndex}-${bubbleRow.uid ?? index}-${classSuffix}`
      const className = location.usesExplicitCoordinates
        ? 'bubble bubble--coordinate'
        : geoType === 'world'
        ? `bubble country--${classSuffix}`
        : 'bubble'
      const tooltipHtml = applyTooltipsToGeo(
        location.displayName,
        bubbleRow.sourceRow,
        'string',
        bubbleRow.bubbleLayerConfig
      )

      const circle = renderBubbleMarker({
        className,
        clickTolerance,
        coordinates: location.projectedCoordinates,
        extraBubbleBorder: bubbleRow.extraBubbleBorder,
        fillColor: bubbleRow.fillColor,
        opacity: bubbleRow.opacity,
        layerIndex: bubbleRow.layerIndex,
        markerKey,
        onClick: () => {
          if (location.usesExplicitCoordinates) {
            geoClickHandler(location.displayName, location.clickData)
            return
          }
          if (geoType === 'world' && bubbleRow.geoColumnName) {
            handleBubbleClick(bubbleRow.sourceRow, bubbleRow.geoColumnName)
            return
          }
          geoClickHandler(location.displayName, location.clickData)
        },
        onPointerDown: handleBubblePointerDown,
        radius: bubbleRow.radius,
        tooltipHtml,
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

  return <>{renderBubbles()}</>
}
export default BubbleList
