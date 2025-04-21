import React, { useState, useEffect, useContext, useRef } from 'react'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'

// United States Topojson resources
import hexTopoJSON from '../data/us-hex-topo.json'
import { supportedTerritories } from '../../../data/supported-geos'

import { geoCentroid, geoPath } from 'd3-geo'
import { feature as topoFeature } from 'topojson-client'
import { AlbersUsa, Mercator } from '@visx/geo'
import CityList from '../../CityList'
import BubbleList from '../../BubbleList'
import { supportedCities, supportedStates } from '../../../data/supported-geos'
import { geoAlbersUsa } from 'd3-composite-projections'
import { PatternLines, PatternCircles, PatternWaves } from '@visx/pattern'
import HexIcon from './HexIcon'
import { patternSizes } from '../helpers/patternSizes'
import Annotation from '../../Annotation'
import Territory from './Territory'

import useMapLayers from '../../../hooks/useMapLayers'
import ConfigContext, { MapDispatchContext } from '../../../context'
import { MapContext } from '../../../types/MapContext'
import { checkColorContrast, getContrastColor, outlinedTextColor } from '@cdc/core/helpers/cove/accessibility'
import TerritoriesSection from './TerritoriesSection'
import { isMobileStateLabelViewport } from '@cdc/core/helpers/viewports'

import useGeoClickHandler from '../../../hooks/useGeoClickHandler'
import useApplyLegendToRow from '../../../hooks/useApplyLegendToRow'
import useApplyTooltipsToGeo from '../../../hooks/useApplyTooltipsToGeo'
import { APP_FONT_COLOR } from '@cdc/core/helpers/constants'
import { getGeoFillColor, getGeoStrokeColor, handleMapAriaLabels, titleCase, displayGeoName, SVG_HEIGHT, SVG_VIEWBOX, SVG_WIDTH, hashObj } from '../../../helpers'
const { features: unitedStatesHex } = topoFeature(hexTopoJSON, hexTopoJSON.objects.states)

const offsets = {
  'US-VT': [53, -7],
  'US-NH': [38, 7],
  'US-MA': [34, -1],
  'US-RI': [29, 7],
  'US-CT': [43, 20],
  'US-NJ': [26, 7],
  'US-DE': [33, 0],
  'US-MD': [51, 16]
}

const nudges = {
  'US-FL': [15, 3],
  'US-AK': [0, -8],
  'US-CA': [-10, 0],
  'US-NY': [5, 0],
  'US-MI': [13, 20],
  'US-LA': [-10, -3],
  'US-HI': [-10, 10],
  'US-ID': [0, 10],
  'US-WV': [-2, 2]
}

const UsaMap = () => {
  // prettier-ignore
  const {
      data,
      setSharedFilterValue,
      config,
      tooltipId,
      mapId,
      logo,
      legendMemo,
      legendSpecialClassLastMemo,
      currentViewport,
    translate
    } = useContext<MapContext>(ConfigContext)

  let isFilterValueSupported = false
  const { general, columns, tooltips, hexMap, map, annotations } = config
  const { displayAsHex } = general
  const { geoClickHandler } = useGeoClickHandler()
  const { applyLegendToRow } = useApplyLegendToRow(legendMemo, legendSpecialClassLastMemo)
  const { applyTooltipsToGeo } = useApplyTooltipsToGeo()
  const dispatch = useContext(MapDispatchContext)

  const handleDragStateChange = (dragState: any) => {
    dispatch({ type: 'SET_IS_DRAGGING_ANNOTATION', payload: dragState })
  }

  if (setSharedFilterValue) {
    Object.keys(supportedStates).forEach(supportedState => {
      if (supportedStates[supportedState].indexOf(setSharedFilterValue.toUpperCase()) !== -1) {
        isFilterValueSupported = true
      }
    })

    Object.keys(supportedTerritories).forEach(supportedTerritory => {
      if (supportedTerritories[supportedTerritory].indexOf(setSharedFilterValue.toUpperCase()) !== -1) {
        isFilterValueSupported = true
      }
    })
    Object.keys(supportedCities).forEach(supportedCity => {
      if (supportedCity === setSharedFilterValue.toUpperCase()) {
        isFilterValueSupported = true
      }
    })
  }

  // "Choose State" options
  const [focusedStates, setFocusedStates] = useState(null)

  const dataRef = useRef(null)

  const legendMemoUpdated = focusedStates?.every(geo => {
    const geoKey = geo.properties.iso
    const geoData = data[geoKey]
    const hash = hashObj(geoData)
    return legendMemo.current.has(hash)
  })

  // we use dataRef so that we can use the old data when legendMemo has not been updated yet
  // prevents flickering of the map when filter is changed
  if (legendMemoUpdated) dataRef.current = data

  useEffect(() => {
    const fetchData = async () => {
      import(/* webpackChunkName: "us-topo" */ '../data/us-topo.json').then(topoJSON => {
        setFocusedStates(topoFeature(topoJSON, topoJSON.objects.states).features)
      })
    }
    fetchData()
  }, [])

  // When returning from another map we want to reset the state
  useEffect(() => {
    dispatch({ type: 'SET_TRANSLATE', payload: [SVG_WIDTH / 2, SVG_HEIGHT / 2] })
  }, [general.geoType])

  const [territoriesData, setTerritoriesData] = useState([])

  const territoriesKeys = Object.keys(supportedTerritories) // data will have already mapped abbreviated territories to their full names

  useEffect(() => {
    if (general.territoriesAlwaysShow) {
      // show all Territories whether in the data or not
      setTerritoriesData(territoriesKeys)
    } else {
      // Territories need to show up if they're in the data at all, not just if they're "active". That's why this is different from Cities
      const territoriesList = territoriesKeys.filter(key => dataRef.current?.[key])
      setTerritoriesData(territoriesList)
    }
  }, [data, general.territoriesAlwaysShow])

  const geoStrokeColor = getGeoStrokeColor(config)
  const geoFillColor = getGeoFillColor(config)

  const territories = territoriesData.map((territory, territoryIndex) => {
    const Shape = displayAsHex ? Territory.Hexagon : Territory.Rectangle

    const territoryData = data?.[territory]

    let toolTip

    let styles = {
      fill: geoFillColor,
      stroke: geoStrokeColor,
      color: APP_FONT_COLOR
    }

    const label = supportedTerritories[territory][1]

    if (!territoryData)
      return (
        <Shape
          key={label}
          label={label}
          style={styles}
          textColor={styles.color}
          strokeColor='#fff'
          territoryData={territoryData}
          backgroundColor={styles.fill}
        />
      )

    toolTip = applyTooltipsToGeo(displayGeoName(territory), territoryData)

    const legendColors = applyLegendToRow(territoryData, config)

    if (legendColors) {
      let needsPointer = false

      // If we need to add a pointer cursor
      if ((columns.navigate && territoryData[columns.navigate.name]) || tooltips.appearanceType === 'click') {
        needsPointer = true
      }

      const { textColor, strokeColor } = outlinedTextColor(legendColors[0])

      styles = {
        color: textColor,
        fill: legendColors[0],
        opacity:
          setSharedFilterValue && isFilterValueSupported && setSharedFilterValue !== territoryData[columns.geo.name]
            ? 0.5
            : 1,
        stroke:
          setSharedFilterValue && isFilterValueSupported && setSharedFilterValue === territoryData[columns.geo.name]
            ? 'rgba(0, 0, 0, 1)'
            : geoStrokeColor,
        cursor: needsPointer ? 'pointer' : 'default',
        '&:hover': {
          fill: legendColors[1]
        },
        '&:active': {
          fill: legendColors[2]
        }
      }

      return (
        <Shape
          key={`label__${territoryIndex}`}
          label={label}
          style={styles}
          strokeWidth={1}
          textColor={textColor}
          strokeColor={strokeColor}
          handleShapeClick={() => geoClickHandler(territory, territoryData)}
          dataTooltipId={`tooltip__${tooltipId}`}
          dataTooltipHtml={toolTip}
          territory={territory}
          territoryData={territoryData}
          tabIndex={-1}
          backgroundColor={styles.fill}
        />
      )
    }
  })

  let pathGenerator = geoPath().projection(geoAlbersUsa().translate(translate))

  // Note: Layers are different than patterns
  const { pathArray } = useMapLayers(config, '', pathGenerator, tooltipId)

  if (!focusedStates) {
    return <></>
  }

  // Constructs and displays markup for all geos on the map (except territories right now)
  const constructGeoJsx = (geographies, projection) => {
    let showLabel = general.displayStateLabels

    // Order alphabetically. Important for accessibility if ever read out loud.
    geographies.map(state => {
      if (!state.feature.properties.iso) return
      state.feature.properties.name = titleCase(supportedStates[state.feature.properties.iso][0])
    })

    geographies.sort((a, b) => {
      const first = a.feature.properties.name.toUpperCase() // ignore upper and lowercase
      const second = b.feature.properties.name.toUpperCase() // ignore upper and lowercase
      if (first < second) {
        return -1
      }
      if (first > second) {
        return 1
      }

      // names must be equal
      return 0
    })

    const geosJsx = geographies.map(({ feature: geo, path = '' }, geoIndex) => {
      const key = displayAsHex ? geo.properties.iso + '-hex-group' : geo.properties.iso + '-group'

      let styles = {
        fill: geoFillColor,
        cursor: 'default'
      }

      // Map the name from the geo data with the appropriate key for the processed data
      let geoKey = geo.properties.iso
      let geoName = geo.properties.name

      if (!geoKey) return

      const geoData = data?.[geoKey]

      let legendColors

      // Once we receive data for this geographic item, setup variables.
      if (geoData !== undefined) {
        legendColors = applyLegendToRow(geoData)
      }

      const geoDisplayName = displayGeoName(geoKey)

      // If a legend applies, return it with appropriate information.
      if (legendColors && legendColors[0] !== '#000000') {
        const tooltip = applyTooltipsToGeo(geoDisplayName, geoData)

        styles = {
          fill: config.general.type !== 'bubble' ? legendColors[0] : geoFillColor,
          opacity:
            setSharedFilterValue && isFilterValueSupported && setSharedFilterValue !== geoData[columns.geo.name]
              ? 0.5
              : 1,
          stroke:
            setSharedFilterValue && isFilterValueSupported && setSharedFilterValue === geoData[columns.geo.name]
              ? 'rgba(0, 0, 0, 1)'
              : geoStrokeColor,
          cursor: 'default',
          '&:hover': {
            fill: config.general.type !== 'bubble' ? legendColors[1] : geoFillColor
          },
          '&:active': {
            fill: config.general.type !== 'bubble' ? legendColors[2] : geoFillColor
          }
        }

        // When to add pointer cursor
        if ((columns.navigate && geoData[columns.navigate.name]) || tooltips.appearanceType === 'click') {
          styles.cursor = 'pointer'
        }

        const getArrowDirection = (geoData, geo, bgColor) => {
          const centroid = projection(geoCentroid(geo))

          const iconSize = 8

          const textColor = getContrastColor('#FFF', bgColor)

          return (
            <>
              {hexMap.shapeGroups.map((group, _groupIndex) => {
                return group.items.map((item, itemIndex) => {
                  switch (item.operator) {
                    case '=':
                      if (geoData[item.key] === item.value || Number(geoData[item.key]) === Number(item.value)) {
                        return (
                          <HexIcon
                            textColor={textColor}
                            item={item}
                            index={itemIndex}
                            centroid={centroid}
                            iconSize={iconSize}
                          />
                        )
                      }
                      break
                    case '≠':
                      if (geoData[item.key] !== item.value && Number(geoData[item.key]) !== Number(item.value)) {
                        return (
                          <HexIcon
                            textColor={textColor}
                            item={item}
                            index={itemIndex}
                            centroid={centroid}
                            iconSize={iconSize}
                          />
                        )
                      }
                      break
                    case '<':
                      if (Number(geoData[item.key]) < Number(item.value)) {
                        return (
                          <HexIcon
                            textColor={textColor}
                            item={item}
                            index={itemIndex}
                            centroid={centroid}
                            iconSize={iconSize}
                          />
                        )
                      }
                      break
                    case '>':
                      if (Number(geoData[item.key]) > Number(item.value)) {
                        return (
                          <HexIcon
                            textColor={textColor}
                            item={item}
                            index={itemIndex}
                            centroid={centroid}
                            iconSize={iconSize}
                          />
                        )
                      }
                      break
                    case '<=':
                      if (Number(geoData[item.key]) <= Number(item.value)) {
                        return (
                          <HexIcon
                            textColor={textColor}
                            item={item}
                            index={itemIndex}
                            centroid={centroid}
                            iconSize={iconSize}
                          />
                        )
                      }
                      break
                    case '>=':
                      if (item.operator === '>=') {
                        if (Number(geoData[item.key]) >= Number(item.value)) {
                          return (
                            <HexIcon
                              textColor={textColor}
                              item={item}
                              index={itemIndex}
                              centroid={centroid}
                              iconSize={iconSize}
                            />
                          )
                        }
                      }
                      break
                    default:
                      break
                  }
                })
              })}
            </>
          )
        }

        return (
          <g data-name={geoName} key={key} tabIndex={-1}>
            <g
              className='geo-group'
              style={styles}
              onClick={() => geoClickHandler(geoDisplayName, geoData)}
              id={geoName}
              data-tooltip-id={`tooltip__${tooltipId}`}
              data-tooltip-html={tooltip}
              tabIndex={-1}
            >
              {/* state path */}
              <path tabIndex={-1} className='single-geo' strokeWidth={1} d={path} />

              {/* apply patterns on top of state path*/}
              {map.patterns.map((patternData, _patternIndex) => {
                const { pattern, dataKey, size } = patternData
                const currentFill = styles.fill
                const hasMatchingValues = patternData.dataValue === geoData?.[patternData.dataKey]
                const patternColor = patternData.color || getContrastColor('#000', currentFill)

                if (!hasMatchingValues) return
                checkColorContrast(currentFill, patternColor)

                return (
                  <>
                    {pattern === 'waves' && (
                      <PatternWaves
                        id={`${mapId}--${String(dataKey).replace(' ', '-')}--${geoIndex}`}
                        height={patternSizes[size] ?? 10}
                        width={patternSizes[size] ?? 10}
                        fill={patternColor}
                        strokeWidth={0.25}
                      />
                    )}
                    {pattern === 'circles' && (
                      <PatternCircles
                        id={`${mapId}--${String(dataKey).replace(' ', '-')}--${geoIndex}`}
                        height={patternSizes[size] ?? 10}
                        width={patternSizes[size] ?? 10}
                        fill={patternColor}
                        radius={0.5}
                      />
                    )}
                    {pattern === 'lines' && (
                      <PatternLines
                        id={`${mapId}--${String(dataKey).replace(' ', '-')}--${geoIndex}`}
                        height={patternSizes[size] ?? 6}
                        width={patternSizes[size] ?? 6}
                        stroke={patternColor}
                        strokeWidth={0.75}
                        orientation={['diagonalRightToLeft']}
                      />
                    )}
                    <path
                      className={`pattern-geoKey--${dataKey}`}
                      tabIndex={-1}
                      stroke='transparent'
                      d={path}
                      fill={`url(#${mapId}--${String(dataKey).replace(' ', '-')}--${geoIndex})`}
                    />
                  </>
                )
              })}
              {(displayAsHex || showLabel) && geoLabel(geo, legendColors[0], projection)}
              {displayAsHex && hexMap.type === 'shapes' && getArrowDirection(geoData, geo, legendColors[0])}
            </g>
          </g>
        )
      }

      // Default return state, just geo with no additional information
      return (
        <g data-name={geoName} key={key} tabIndex={-1}>
          <g className='geo-group' style={styles} tabIndex={-1}>
            <path tabIndex={-1} className='single-geo' stroke={geoStrokeColor} strokeWidth={1.3} d={path} />
            {(displayAsHex || showLabel) && geoLabel(geo, styles.fill, projection)}
          </g>
        </g>
      )
    })

    if (displayAsHex) return geosJsx

    // Cities
    geosJsx.push(
      <CityList
        applyLegendToRow={applyLegendToRow}
        applyTooltipsToGeo={applyTooltipsToGeo}
        geoClickHandler={geoClickHandler}
        isFilterValueSupported={isFilterValueSupported}
        key='cities'
        projection={projection}
        setSharedFilterValue={setSharedFilterValue}
        state={config}
        titleCase={titleCase}
        tooltipId={tooltipId}
      />
    )

    // Bubbles
    if (general.type === 'bubble') {
      geosJsx.push(<BubbleList runtimeData={dataRef.current} projection={projection} />)
    }

    // })

    if (pathArray.length > 0) {
      pathArray.map(layer => {
        return geosJsx.push(layer)
      })
    }
    return geosJsx
  }

  const geoLabel = (geo, bgColor = '#FFFFFF', projection) => {
    const centroid = projection ? projection(geoCentroid(geo)) : [22, 17.5]
    const abbr = geo.properties.iso

    if (undefined === abbr) return null

    // HI background is always white since it is off to the side
    if ((abbr === 'US-HI' && !general.displayAsHex) || (Object.keys(offsets).includes(abbr) && !general.displayAsHex)) {
      bgColor = '#FFF'
    }
    const { textColor, strokeColor } = outlinedTextColor(bgColor)

    let x = 0,
      y = hexMap.type === 'shapes' && general.displayAsHex ? -10 : 5

    // used to nudge/move some of the labels for better readability
    if (nudges[abbr] && false === displayAsHex) {
      x += nudges[abbr][0]
      y += nudges[abbr][1]
    }

    if (undefined === offsets[abbr] || displayAsHex) {
      return (
        <g transform={`translate(${centroid})`} tabIndex={-1}>
          <text
            x={x}
            y={y}
            fontSize={isMobileStateLabelViewport(currentViewport) ? 16 : 13}
            fontWeight={900}
            strokeWidth='1'
            paintOrder='stroke'
            stroke={strokeColor}
            style={{ fill: textColor }}
            textAnchor='middle'
          >
            {abbr.substring(3)}
          </text>
        </g>
      )
    }

    let [dx, dy] = offsets[abbr]

    return (
      <g tabIndex={-1}>
        <line
          x1={centroid[0]}
          y1={centroid[1]}
          x2={centroid[0] + dx}
          y2={centroid[1] + dy}
          stroke='rgba(0,0,0,.5)'
          strokeWidth={1}
        />
        <text
          x={4}
          strokeWidth='0'
          stroke={APP_FONT_COLOR}
          fontSize={isMobileStateLabelViewport(currentViewport) ? 16 : 13}
          fontWeight={900}
          style={{ fill: textColor }}
          alignmentBaseline='middle'
          transform={`translate(${centroid[0] + dx}, ${centroid[1] + dy})`}
        >
          {abbr.substring(3)}
        </text>
      </g>
    )
  }

  return (
    <ErrorBoundary component='UsaMap'>
      <svg viewBox={SVG_VIEWBOX} role='img' aria-label={handleMapAriaLabels(config)}>
        {general.displayAsHex ? (
          <Mercator data={unitedStatesHex} scale={650} translate={[1600, 775]}>
            {({ features, projection }) => constructGeoJsx(features, projection)}
          </Mercator>
        ) : (
          <AlbersUsa data={focusedStates} translate={translate}>
            {({ features, projection }) => constructGeoJsx(features, projection)}
          </AlbersUsa>
        )}
        {annotations.length > 0 && <Annotation.Draggable onDragStateChange={handleDragStateChange} />}
      </svg>

      <TerritoriesSection territories={territories} logo={logo} config={config} territoriesData={territoriesData} />
    </ErrorBoundary>
  )
}

export default UsaMap
