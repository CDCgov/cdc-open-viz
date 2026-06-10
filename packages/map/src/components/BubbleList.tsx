import React, { useContext } from 'react'
import { scaleLinear } from 'd3-scale'
import { countryCoordinates } from '../data/country-coordinates'
import stateCoordinates from '../data/state-coordinates'
import ConfigContext, { MapDispatchContext } from '../context'
import { useLegendMemoContext } from '../context/LegendMemoContext'
import { type Coordinate, DataRow } from '../types/MapConfig'
import useApplyTooltipsToGeo from '../hooks/useApplyTooltipsToGeo'
import { applyLegendToRow } from '../helpers/applyLegendToRow'
import { displayGeoName, SVG_HEIGHT, SVG_WIDTH } from '../helpers'
import { geoMercator, geoAlbersUsa, type GeoProjection } from 'd3-geo'
import { getColumnNames } from '../helpers/getColumnNames'
import { MapContext } from '../types/MapContext'
import useGeoClickHandler from '../hooks/useGeoClickHandler'
import { getConfiguredBubbleLayers, mapConfigForBubbleLayer } from '../helpers/bubbleLayers'
import type { BubbleLayer } from '../types/MapConfig'

type BubbleListProps = {
  customProjection?: GeoProjection
}

const BubbleList: React.FC<BubbleListProps> = ({ customProjection }) => {
  const { config, tooltipId, runtimeData, runtimeLegend, runtimeBubbleLegend } = useContext<MapContext>(ConfigContext)
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

  const renderLayer = (layer: BubbleLayer, layerIndex: number) => {
    const { minBubbleSize, maxBubbleSize, showBubbleZeros, extraBubbleBorder, columns: bubbleColumns } = layer
    const { primaryColumnName, geoColumnName } = getColumnNames(bubbleColumns as any) || {}
    const sizeColumnName = bubbleColumns?.size?.name || primaryColumnName
    if (!projection || !primaryColumnName || !geoColumnName || !sizeColumnName) return null

    const hasBubblesWithZeroOnMap = showBubbleZeros ? 0 : 1
    const finiteSizeValues = data.map(d => Number(d[sizeColumnName])).filter(Number.isFinite)
    const maxDataValue = Math.max(...finiteSizeValues, hasBubblesWithZeroOnMap)
    const size = scaleLinear().domain([hasBubblesWithZeroOnMap, maxDataValue]).range([minBubbleSize, maxBubbleSize])
    const layerLegend = bubbleLegends[layerIndex]
    const hasLayerLegend = !Array.isArray(layerLegend) && Boolean(layerLegend?.items?.length)
    const effectiveLegend = hasLayerLegend ? layerLegend : runtimeLegend
    const effectiveMemo = hasLayerLegend ? getBubbleLegendMemo(layerIndex) : legendMemo
    const effectiveSpecialMemo = hasLayerLegend
      ? getBubbleLegendSpecialClassLastMemo(layerIndex)
      : legendSpecialClassLastMemo
    const layerConfig = hasLayerLegend ? mapConfigForBubbleLayer(config, layer) : config
    const sortedRuntimeData: DataRow[] = Object.values(runtimeData ?? {}).sort((a: DataRow, b: DataRow) =>
      Number(a[sizeColumnName]) < Number(b[sizeColumnName]) ? 1 : -1
    ) as DataRow[]

    if (!sortedRuntimeData) return null

    if (geoType === 'world') {
      return (
        sortedRuntimeData &&
        sortedRuntimeData.map((country, index) => {
          let coordinates = countryCoordinates[country.uid]

          if (!coordinates) return true

          const countryName = displayGeoName(country[geoColumnName])
          const toolTip = applyTooltipsToGeo(countryName, country)
          const legendColors = applyLegendToRow(
            country,
            layerConfig,
            effectiveLegend,
            effectiveMemo,
            effectiveSpecialMemo
          )

          if ((Math.floor(Number(country[sizeColumnName])) === 0 || country[sizeColumnName] === '') && !showBubbleZeros)
            return

          const projectedCoordinates = projection([coordinates[1], coordinates[0]])

          let pointerX, pointerY

          if (!projectedCoordinates) return true

          const circle = (
            <React.Fragment key={`circle-fragment-${layerIndex}-${countryName.replace(' ', '')}`}>
              <circle
                tabIndex={-1}
                className={`bubble country--${countryName}`}
                data-bubble-layer-index={layerIndex}
                cx={Number(projectedCoordinates[0]) || 0}
                cy={Number(projectedCoordinates[1]) || 0}
                r={Number(size(country[sizeColumnName]))}
                fill={legendColors[0]}
                stroke={legendColors[0]}
                strokeWidth={1.25}
                fillOpacity={0.4}
                onMouseEnter={() => {}}
                onMouseDown={handleBubblePointerDown}
                onPointerDown={e => {
                  handleBubblePointerDown(e)
                  pointerX = e.clientX
                  pointerY = e.clientY
                }}
                onPointerUp={e => {
                  if (
                    pointerX &&
                    pointerY &&
                    e.clientX > pointerX - clickTolerance &&
                    e.clientX < pointerX + clickTolerance &&
                    e.clientY > pointerY - clickTolerance &&
                    e.clientY < pointerY + clickTolerance
                  ) {
                    handleBubbleClick(country, geoColumnName)
                    pointerX = undefined
                    pointerY = undefined
                  }
                }}
                style={{ transition: 'all .25s ease-in-out', cursor: 'pointer' }}
                data-tooltip-id={`tooltip__${tooltipId}`}
                data-tooltip-html={toolTip}
              />

              {extraBubbleBorder && (
                <circle
                  tabIndex={-1}
                  key={`circle-border-${layerIndex}-${countryName.replace(' ', '')}`}
                  className='bubble'
                  data-bubble-layer-index={layerIndex}
                  cx={Number(projectedCoordinates[0]) || 0}
                  cy={Number(projectedCoordinates[1]) || 0}
                  r={Number(size(country[sizeColumnName])) + 1}
                  fill={'transparent'}
                  stroke={'white'}
                  strokeWidth={0.5}
                  onMouseEnter={() => {}}
                  onMouseDown={handleBubblePointerDown}
                  onPointerDown={e => {
                    handleBubblePointerDown(e)
                    pointerX = e.clientX
                    pointerY = e.clientY
                  }}
                  onPointerUp={e => {
                    if (
                      pointerX &&
                      pointerY &&
                      e.clientX > pointerX - clickTolerance &&
                      e.clientX < pointerX + clickTolerance &&
                      e.clientY > pointerY - clickTolerance &&
                      e.clientY < pointerY + clickTolerance
                    ) {
                      handleBubbleClick(country, geoColumnName)
                      pointerX = undefined
                      pointerY = undefined
                    }
                  }}
                  style={{ transition: 'all .25s ease-in-out', cursor: 'pointer' }}
                  data-tooltip-id={`tooltip__${tooltipId}`}
                  data-tooltip-html={toolTip}
                />
              )}
            </React.Fragment>
          )

          return (
            <g key={`group-${layerIndex}-${index}-${countryName.replace(' ', '')}`} tabIndex={-1}>
              {circle}
            </g>
          )
        })
      )
    }

    if (geoType === 'us') {
      return (
        sortedRuntimeData &&
        sortedRuntimeData.map((item, index) => {
          let stateData = stateCoordinates[item.uid]
          if (Number(size(item[sizeColumnName])) === 0) return

          if (item[sizeColumnName] === null) item[sizeColumnName] = ''

          if ((Math.floor(Number(item[sizeColumnName])) === 0 || item[sizeColumnName] === '') && !showBubbleZeros)
            return

          if (!stateData) return true
          let longitude = Number(stateData.Longitude)
          let latitude = Number(stateData.Latitude)
          let coordinates = [longitude, latitude]
          let stateName = stateData.Name
          if (!coordinates) return true

          stateName = displayGeoName(stateName)
          const toolTip = applyTooltipsToGeo(stateName, item)
          const legendColors = applyLegendToRow(item, layerConfig, effectiveLegend, effectiveMemo, effectiveSpecialMemo)

          const projectedCoordinates = projection(coordinates)

          if (!projectedCoordinates) return true

          let pointerX, pointerY
          const circle = (
            <>
              <circle
                tabIndex={-1}
                key={`circle-${layerIndex}-${stateName.replace(' ', '')}`}
                className='bubble'
                data-bubble-layer-index={layerIndex}
                cx={projectedCoordinates[0] || 0}
                cy={projectedCoordinates[1] || 0}
                r={Number(size(item[sizeColumnName]))}
                fill={legendColors[0]}
                stroke={legendColors[0]}
                strokeWidth={1.25}
                fillOpacity={0.4}
                onMouseEnter={() => {}}
                onMouseDown={handleBubblePointerDown}
                onPointerDown={e => {
                  handleBubblePointerDown(e)
                  pointerX = e.clientX
                  pointerY = e.clientY
                }}
                onPointerUp={e => {
                  if (
                    pointerX &&
                    pointerY &&
                    e.clientX > pointerX - clickTolerance &&
                    e.clientX < pointerX + clickTolerance &&
                    e.clientY > pointerY - clickTolerance &&
                    e.clientY < pointerY + clickTolerance
                  ) {
                    geoClickHandler(stateName, stateData)
                    pointerX = undefined
                    pointerY = undefined
                  }
                }}
                style={{ transition: 'all .25s ease-in-out', cursor: 'pointer' }}
                data-tooltip-id={`tooltip__${tooltipId}`}
                data-tooltip-html={toolTip}
              />
              {extraBubbleBorder && (
                <circle
                  tabIndex={-1}
                  key={`circle-border-${layerIndex}-${stateName.replace(' ', '')}`}
                  className='bubble'
                  data-bubble-layer-index={layerIndex}
                  cx={projectedCoordinates[0] || 0}
                  cy={projectedCoordinates[1] || 0}
                  r={Number(size(item[sizeColumnName])) + 1}
                  fill={'transparent'}
                  stroke={'white'}
                  strokeWidth={0.5}
                  fillOpacity={0.4}
                  onMouseEnter={() => {}}
                  onMouseDown={handleBubblePointerDown}
                  onPointerDown={e => {
                    handleBubblePointerDown(e)
                    pointerX = e.clientX
                    pointerY = e.clientY
                  }}
                  onPointerUp={e => {
                    if (
                      pointerX &&
                      pointerY &&
                      e.clientX > pointerX - clickTolerance &&
                      e.clientX < pointerX + clickTolerance &&
                      e.clientY > pointerY - clickTolerance &&
                      e.clientY < pointerY + clickTolerance
                    ) {
                      geoClickHandler(stateName, stateData)
                      pointerX = undefined
                      pointerY = undefined
                    }
                  }}
                  style={{ transition: 'all .25s ease-in-out', cursor: 'pointer' }}
                  data-tooltip-id={`tooltip__${tooltipId}`}
                  data-tooltip-html={toolTip}
                />
              )}
            </>
          )

          return <g key={`group-${layerIndex}-${index}-${stateName.replace(' ', '')}`}>{circle}</g>
        })
      )
    }

    return null
  }

  if (!bubbleLayers.length) return null

  return <>{bubbleLayers.map((layer, layerIndex) => renderLayer(layer, layerIndex))}</>
}
export default BubbleList
