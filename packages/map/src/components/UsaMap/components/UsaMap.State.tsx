import React, { useState, useEffect, memo, useContext } from 'react'

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
import ConfigContext from '../../../context'
import { MapContext } from '../../../types/MapContext'
import { checkColorContrast, getContrastColor, outlinedTextColor } from '@cdc/core/helpers/cove/accessibility'
import { getGeoFillColor, getGeoStrokeColor } from '../../../helpers/colors'
import { handleMapAriaLabels } from '../../../helpers/handleMapAriaLabels'
import { titleCase } from '../../../helpers/titleCase'
import TerritoriesSection from './TerritoriesSection'
import { displayGeoName } from '../../../helpers/displayGeoName'

const { features: unitedStatesHex } = topoFeature(hexTopoJSON, hexTopoJSON.objects.states)

const offsets = {
  'US-VT': [50, -8],
  'US-NH': [34, 2],
  'US-MA': [30, -1],
  'US-RI': [28, 2],
  'US-CT': [35, 10],
  'US-NJ': [42, 1],
  'US-DE': [33, 0],
  'US-MD': [47, 10]
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
      applyLegendToRow,
      applyTooltipsToGeo,
      data,
      geoClickHandler,
      setSharedFilterValue,
      state,
      tooltipId,
      handleDragStateChange,
      mapId,
      logo,
    } = useContext<MapContext>(ConfigContext)

  let isFilterValueSupported = false
  const { general, columns, feature, tooltips, hexMap, map, annotations } = state

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
  const [extent, setExtent] = useState(null)
  const [focusedStates, setFocusedStates] = useState(null)
  const [translate, setTranslate] = useState([455, 200])

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
    setTranslate([455, 250])
    setExtent(null)
  }, [general.geoType])

  const isHex = general.displayAsHex

  const [territoriesData, setTerritoriesData] = useState([])

  const territoriesKeys = Object.keys(supportedTerritories) // data will have already mapped abbreviated territories to their full names

  useEffect(() => {
    if (general.territoriesAlwaysShow) {
      // show all Territories whether in the data or not
      setTerritoriesData(territoriesKeys)
    } else {
      // Territories need to show up if they're in the data at all, not just if they're "active". That's why this is different from Cities
      const territoriesList = territoriesKeys.filter(key => data[key])
      setTerritoriesData(territoriesList)
    }
  }, [data, general.territoriesAlwaysShow])

  const geoStrokeColor = getGeoStrokeColor(state)
  const geoFillColor = getGeoFillColor(state)

  const territories = territoriesData.map((territory, territoryIndex) => {
    const Shape = isHex ? Territory.Hexagon : Territory.Rectangle

    const territoryData = data[territory]

    let toolTip

    let styles = {
      fill: geoFillColor,
      stroke: geoStrokeColor,
      color: '#202020'
    }

    const label = supportedTerritories[territory][1]

    if (!territoryData)
      return (
        <Shape
          key={label}
          label={label}
          style={styles}
          text={styles.color}
          territoryData={territoryData}
          backgroundColor={styles.fill}
        />
      )

    toolTip = applyTooltipsToGeo(displayGeoName(territory), territoryData)

    const legendColors = applyLegendToRow(territoryData)

    if (legendColors) {
      const textColor = getContrastColor('#FFF', legendColors[0])

      let needsPointer = false

      // If we need to add a pointer cursor
      if ((columns.navigate && territoryData[columns.navigate.name]) || tooltips.appearanceType === 'click') {
        needsPointer = true
      }

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
          text={styles.color}
          strokeWidth={1}
          textColor={textColor}
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
  const { pathArray } = useMapLayers(state, '', pathGenerator, tooltipId)

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
      const key = isHex ? geo.properties.iso + '-hex-group' : geo.properties.iso + '-group'

      let styles = {
        fill: geoFillColor,
        cursor: 'default'
      }

      // Map the name from the geo data with the appropriate key for the processed data
      let geoKey = geo.properties.iso
      let geoName = geo.properties.name

      if (!geoKey) return

      const geoData = data[geoKey]

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
          fill: state.general.type !== 'bubble' ? legendColors[0] : geoFillColor,
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
            fill: state.general.type !== 'bubble' ? legendColors[1] : geoFillColor
          },
          '&:active': {
            fill: state.general.type !== 'bubble' ? legendColors[2] : geoFillColor
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
              {hexMap.shapeGroups.map((group, groupIndex) => {
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
              {map.patterns.map((patternData, patternIndex) => {
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
                      />
                    )}
                    {pattern === 'circles' && (
                      <PatternCircles
                        id={`${mapId}--${String(dataKey).replace(' ', '-')}--${geoIndex}`}
                        height={patternSizes[size] ?? 10}
                        width={patternSizes[size] ?? 10}
                        fill={patternColor}
                      />
                    )}
                    {pattern === 'lines' && (
                      <PatternLines
                        id={`${mapId}--${String(dataKey).replace(' ', '-')}--${geoIndex}`}
                        height={patternSizes[size] ?? 6}
                        width={patternSizes[size] ?? 6}
                        stroke={patternColor}
                        strokeWidth={1}
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
              {(isHex || showLabel) && geoLabel(geo, legendColors[0], projection)}
              {isHex && hexMap.type === 'shapes' && getArrowDirection(geoData, geo, legendColors[0])}
            </g>
          </g>
        )
      }

      // Default return state, just geo with no additional information
      return (
        <g data-name={geoName} key={key} tabIndex={-1}>
          <g className='geo-group' style={styles} tabIndex={-1}>
            <path tabIndex={-1} className='single-geo' stroke={geoStrokeColor} strokeWidth={1.3} d={path} />
            {(isHex || showLabel) && geoLabel(geo, styles.fill, projection)}
          </g>
        </g>
      )
    })

    if (isHex) return geosJsx

    // Cities
    geosJsx.push(
      <CityList
        applyLegendToRow={applyLegendToRow}
        applyTooltipsToGeo={applyTooltipsToGeo}
        data={data}
        displayGeoName={displayGeoName}
        geoClickHandler={geoClickHandler}
        isFilterValueSupported={isFilterValueSupported}
        key='cities'
        projection={projection}
        setSharedFilterValue={setSharedFilterValue}
        state={state}
        titleCase={titleCase}
        tooltipId={tooltipId}
      />
    )

    // Bubbles
    if (general.type === 'bubble') {
      geosJsx.push(
        <BubbleList
          key='bubbles'
          data={state.data}
          runtimeData={data}
          state={state}
          projection={projection}
          applyLegendToRow={applyLegendToRow}
          applyTooltipsToGeo={applyTooltipsToGeo}
          displayGeoName={displayGeoName}
        />
      )
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
    let centroid = projection ? projection(geoCentroid(geo)) : [22, 17.5]
    let abbr = geo.properties.iso

    if (undefined === abbr) return null

    // HI background is always white since it is off to the side
    if (abbr === 'US-HI' && !general.displayAsHex) {
      bgColor = '#FFF'
    }
    const { textColor, strokeColor } = outlinedTextColor(bgColor)

    let x = 0,
      y = hexMap.type === 'shapes' && general.displayAsHex ? -10 : 5

    // used to nudge/move some of the labels for better readability
    if (nudges[abbr] && false === isHex) {
      x += nudges[abbr][0]
      y += nudges[abbr][1]
    }

    if (undefined === offsets[abbr] || isHex) {
      return (
        <g transform={`translate(${centroid})`} tabIndex={-1}>
          <text
            x={x}
            y={y}
            fontSize={14}
            strokeWidth='0'
            // paintOrder='stroke' // PENDING DEV-9278: Adds a stroke around the text potentially for 508 compliance
            // stroke={strokeColor}
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
          // paintOrder='stroke' // PENDING DEV-9278: Adds a stroke around the text potentially for 508 compliance
          // stroke={strokeColor}
          fontSize={13}
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
      <svg viewBox='0 0 880 500' role='img' aria-label={handleMapAriaLabels(state)}>
        {general.displayAsHex ? (
          <Mercator data={unitedStatesHex} scale={650} translate={[1600, 775]}>
            {({ features, projection }) => constructGeoJsx(features, projection)}
          </Mercator>
        ) : (
          <AlbersUsa data={focusedStates} translate={translate} fitExtent={extent}>
            {({ features, projection }) => constructGeoJsx(features, projection)}
          </AlbersUsa>
        )}
        {annotations.length > 0 && <Annotation.Draggable onDragStateChange={handleDragStateChange} />}
      </svg>

      <TerritoriesSection territories={territories} logo={logo} config={state} territoriesData={territoriesData} />
    </ErrorBoundary>
  )
}

export default UsaMap
