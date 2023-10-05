import React, { useState, useEffect, memo, useContext } from 'react'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { geoCentroid, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import topoJSON from '../data/us-topo.json'
import hexTopoJSON from '../data/us-hex-topo.json'
import { AlbersUsa, Mercator } from '@visx/geo'
import chroma from 'chroma-js'
import CityList from './CityList'
import BubbleList from './BubbleList'
import { supportedCities, supportedStates } from '../data/supported-geos'
import { geoAlbersUsa } from 'd3-composite-projections'
import { Group } from '@visx/group'
import { Text } from '@visx/text'

import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineArrowRight } from 'react-icons/ai'

import useMapLayers from '../hooks/useMapLayers'
import ConfigContext from '../context'

const { features: unitedStates } = feature(topoJSON, topoJSON.objects.states)
const { features: unitedStatesHex } = feature(hexTopoJSON, hexTopoJSON.objects.states)

// todo: combine hexagonLabel & geoLabel functions
// todo: move geoLabel functions outside of components for reusability
const Hexagon = ({ label, text, stroke, strokeWidth, textColor, territory, territoryData, ...props }) => {
  const { state } = useContext(ConfigContext)

  // Labels
  const hexagonLabel = (geo, bgColor = '#FFFFFF', projection) => {
    let centroid = projection ? projection(geoCentroid(geo)) : [22, 17.5]

    let abbr = geo?.properties?.iso ? geo.properties.iso : geo.uid

    const getArrowDirection = (geoData, geo, isTerritory = false) => {
      if (!isTerritory) {
        centroid = projection(geoCentroid(geo))
      }

      return (
        <>
          {state.hexMap.shapeGroups.map((group, groupIndex) => {
            return group.items.map((item, itemIndex) => {
              if (item.operator === '=') {
                if (geoData[item.key] === item.value) {
                  return (
                    <Group style={{ transform: `translate(36%, 50%)`, fill: 'currentColor' }}>
                      {item.shape === 'Arrow Down' && <AiOutlineArrowDown size={12} stroke='none' fontWeight={100} />}
                      {item.shape === 'Arrow Up' && <AiOutlineArrowUp size={12} stroke='none' fontWeight={100} />}
                      {item.shape === 'Arrow Right' && <AiOutlineArrowRight size={12} stroke='none' fontWeight={100} />}
                    </Group>
                  )
                }
              }
            })
          })}
        </>
      )
    }

    if (undefined === abbr) return null

    let textColor = '#FFF'

    // Dynamic text color
    if (chroma.contrast(textColor, bgColor) < 3.5) {
      textColor = '#202020' // dark gray
    }

    // always make HI black since it is off to the side
    if (abbr === 'US-HI') {
      textColor = '#000'
    }

    let x = 0,
      y = state.hexMap.type === 'shapes' ? -10 : 5

    // used to nudge/move some of the labels for better readability
    if (nudges[abbr] && false === isHex) {
      x += nudges[abbr][0]
      y += nudges[abbr][1]
    }

    if (undefined === offsets[abbr] || isHex) {
      let y = state.hexMap.type === 'shapes' ? '30%' : '50%'
      return (
        <>
          <Text fontSize={14} x={'50%'} y={y} style={{ fill: 'currentColor', stroke: 'initial', fontWeight: 400, opacity: 1, fillOpacity: 1 }} textAnchor='middle' verticalAnchor='middle'>
            {abbr.substring(3)}
          </Text>
          {state.general.displayAsHex && state.hexMap.type === 'shapes' && getArrowDirection(territoryData, geo, true)}
        </>
      )
    }

    let [dx, dy] = offsets[abbr]

    return (
      <g>
        <line x1={centroid[0]} y1={centroid[1]} x2={centroid[0] + dx} y2={centroid[1] + dy} stroke='rgba(0,0,0,.5)' strokeWidth={1} />
        <text x={4} strokeWidth='0' fontSize={13} style={{ fill: '#202020' }} alignmentBaseline='middle' transform={`translate(${centroid[0] + dx}, ${centroid[1] + dy})`}>
          {abbr.substring(3)}
        </text>
      </g>
    )
  }

  return (
    <svg viewBox='0 0 45 51' className='territory-wrapper--hex'>
      <g {...props}>
        <polygon stroke={stroke} strokeWidth={strokeWidth} points='22 0 44 12.702 44 38.105 22 50.807 0 38.105 0 12.702' />
        {state.general.displayAsHex && hexagonLabel(territoryData ? territoryData : geo, stroke, false)}
      </g>
    </svg>
  )
}

const Rect = ({ label, text, stroke, strokeWidth, textColor, ...props }) => {
  return (
    <svg viewBox='0 0 45 28'>
      <g {...props} strokeLinejoin='round'>
        <path
          stroke={stroke}
          strokeWidth={strokeWidth}
          d='M40,0.5 C41.2426407,0.5 42.3676407,1.00367966 43.1819805,1.81801948 C43.9963203,2.63235931 44.5,3.75735931 44.5,5 L44.5,5 L44.5,23 C44.5,24.2426407 43.9963203,25.3676407 43.1819805,26.1819805 C42.3676407,26.9963203 41.2426407,27.5 40,27.5 L40,27.5 L5,27.5 C3.75735931,27.5 2.63235931,26.9963203 1.81801948,26.1819805 C1.00367966,25.3676407 0.5,24.2426407 0.5,23 L0.5,23 L0.5,5 C0.5,3.75735931 1.00367966,2.63235931 1.81801948,1.81801948 C2.63235931,1.00367966 3.75735931,0.5 5,0.5 L5,0.5 Z'
        />
        <text textAnchor='middle' dominantBaseline='middle' x='50%' y='54%' fill={text} stroke={textColor}>
          {label}
        </text>
      </g>
    </svg>
  )
}

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

const UsaMap = props => {
  // prettier-ignore
  const {
      applyLegendToRow,
      applyTooltipsToGeo,
      data,
      displayGeoName,
      geoClickHandler,
      handleCircleClick,
      handleMapAriaLabels,
      setSharedFilterValue,
      state,
      supportedTerritories,
      titleCase,
    } = useContext(ConfigContext)

  let isFilterValueSupported = false

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
  const [focusedStates, setFocusedStates] = useState(unitedStates)
  const [translate, setTranslate] = useState([455, 200])

  // When returning from another map we want to reset the state
  useEffect(() => {
    setTranslate([455, 250])
    setExtent(null)
  }, [state.general.geoType])

  const isHex = state.general.displayAsHex

  const [territoriesData, setTerritoriesData] = useState([])

  const territoriesKeys = Object.keys(supportedTerritories) // data will have already mapped abbreviated territories to their full names

  useEffect(() => {
    if (state.general.territoriesAlwaysShow) {
      // show all Territories whether in the data or not
      setTerritoriesData(territoriesKeys)
    } else {
      // Territories need to show up if they're in the data at all, not just if they're "active". That's why this is different from Cities
      const territoriesList = territoriesKeys.filter(key => data[key])
      setTerritoriesData(territoriesList)
    }
  }, [data, state.general.territoriesAlwaysShow])

  const geoStrokeColor = state.general.geoBorderColor === 'darkGray' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255,255,255,0.7)'

  const territories = territoriesData.map(territory => {
    const Shape = isHex ? Hexagon : Rect

    const territoryData = data[territory]

    let toolTip

    let styles = {
      fill: '#E6E6E6',
      color: '#202020'
    }

    const label = supportedTerritories[territory][1]

    if (!territoryData) return <Shape key={label} label={label} css={styles} text={styles.color} />

    toolTip = applyTooltipsToGeo(displayGeoName(territory), territoryData)

    const legendColors = applyLegendToRow(territoryData)

    let textColor = '#FFF'

    if (legendColors) {
      // Use white text if the background is dark, and dark grey if it's light
      if (chroma.contrast(textColor, legendColors[0]) < 3.5) {
        textColor = '#202020'
      }

      let needsPointer = false

      // If we need to add a pointer cursor
      if ((state.columns.navigate && territoryData[state.columns.navigate.name]) || state.tooltips.appearanceType === 'click') {
        needsPointer = true
      }

      styles = {
        color: textColor,
        fill: legendColors[0],
        opacity: setSharedFilterValue && isFilterValueSupported && setSharedFilterValue !== territoryData[state.columns.geo.name] ? 0.5 : 1,
        stroke: setSharedFilterValue && isFilterValueSupported && setSharedFilterValue === territoryData[state.columns.geo.name] ? 'rgba(0, 0, 0, 1)' : geoStrokeColor,
        cursor: needsPointer ? 'pointer' : 'default',
        '&:hover': {
          fill: legendColors[1]
        },
        '&:active': {
          fill: legendColors[2]
        }
      }

      return <Shape key={label} label={label} css={styles} text={styles.color} strokeWidth={1.5} textColor={textColor} onClick={() => geoClickHandler(territory, territoryData)} data-tooltip-id='tooltip' data-tooltip-html={toolTip} territory={territory} territoryData={territoryData} />
    }
  })

  let pathGenerator = geoPath().projection(geoAlbersUsa().translate(translate))
  const { pathArray } = useMapLayers(state, '', pathGenerator)

  // Constructs and displays markup for all geos on the map (except territories right now)
  const constructGeoJsx = (geographies, projection) => {
    let showLabel = state.general.displayStateLabels

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

    const geosJsx = geographies.map(({ feature: geo, path = '' }) => {
      const key = isHex ? geo.properties.iso + '-hex-group' : geo.properties.iso + '-group'

      let styles = {
        fill: '#E6E6E6',
        cursor: 'default'
      }

      // Map the name from the geo data with the appropriate key for the processed data
      let geoKey = geo.properties.iso
      let geoName = geo.properties.name

      // Manually add Washington D.C. in for Hex maps

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
          fill: state.general.type !== 'bubble' ? legendColors[0] : '#E6E6E6',
          opacity: setSharedFilterValue && isFilterValueSupported && setSharedFilterValue !== geoData[state.columns.geo.name] ? 0.5 : 1,
          stroke: setSharedFilterValue && isFilterValueSupported && setSharedFilterValue === geoData[state.columns.geo.name] ? 'rgba(0, 0, 0, 1)' : geoStrokeColor,
          cursor: 'default',
          '&:hover': {
            fill: state.general.type !== 'bubble' ? legendColors[1] : '#e6e6e6'
          },
          '&:active': {
            fill: state.general.type !== 'bubble' ? legendColors[2] : '#e6e6e6'
          }
        }

        // When to add pointer cursor
        if ((state.columns.navigate && geoData[state.columns.navigate.name]) || state.tooltips.appearanceType === 'click') {
          styles.cursor = 'pointer'
        }

        const getArrowDirection = (geoData, geo, bgColor) => {
          let centroid = projection(geoCentroid(geo))

          const iconSize = 8

          let textColor = '#FFF'

          // Dynamic text color
          if (chroma.contrast(textColor, bgColor) < 3.5) {
            textColor = '#202020' // dark gray
          }

          return (
            <>
              {state.hexMap.shapeGroups.map((group, groupIndex) => {
                return group.items.map((item, itemIndex) => {
                  if (item.operator === '=') {
                    console.log('group', item.value)
                    console.log('geoData', geoData)
                    if (geoData[item.key] === item.value) {
                      return (
                        <Group top={centroid[1] - 5} left={centroid[0] - iconSize} color={textColor} textAnchor='start'>
                          {item.shape === 'Arrow Down' && <AiOutlineArrowDown />}
                          {item.shape === 'Arrow Up' && <AiOutlineArrowUp />}
                          {item.shape === 'Arrow Right' && <AiOutlineArrowRight />}
                        </Group>
                      )
                    }
                  }
                })
              })}
            </>
          )
        }

        return (
          <g data-name={geoName} key={key}>
            <g className='geo-group' css={styles} onClick={() => geoClickHandler(geoDisplayName, geoData)} id={geoName} data-tooltip-id='tooltip' data-tooltip-html={tooltip}>
              <path tabIndex={-1} className='single-geo' strokeWidth={1.3} d={path} />
              {(isHex || showLabel) && geoLabel(geo, legendColors[0], projection)}
              {isHex && state.hexMap.type === 'shapes' && getArrowDirection(geoData, geo, legendColors[0])}
            </g>
          </g>
        )
      }

      // Default return state, just geo with no additional information
      return (
        <g data-name={geoName} key={key}>
          <g className='geo-group' css={styles}>
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
        isGeoCodeMap={state.general.type === 'us-geocode'}
        key='cities'
        projection={projection}
        setSharedFilterValue={setSharedFilterValue}
        state={state}
        titleCase={titleCase}
      />
    )

    // Bubbles
    if (state.general.type === 'bubble') {
      geosJsx.push(<BubbleList key='bubbles' data={state.data} runtimeData={data} state={state} projection={projection} applyLegendToRow={applyLegendToRow} applyTooltipsToGeo={applyTooltipsToGeo} displayGeoName={displayGeoName} />)
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

    let textColor = '#FFF'

    // Dynamic text color
    if (chroma.contrast(textColor, bgColor) < 3.5) {
      textColor = '#202020' // dark gray
    }

    // always make HI black since it is off to the side
    if (abbr === 'US-HI' && !state.general.displayAsHex) {
      textColor = '#000'
    }

    let x = 0,
      y = state.hexMap.type === 'shapes' && state.general.displayAsHex ? -10 : 5

    // used to nudge/move some of the labels for better readability
    if (nudges[abbr] && false === isHex) {
      x += nudges[abbr][0]
      y += nudges[abbr][1]
    }

    if (undefined === offsets[abbr] || isHex) {
      return (
        <g transform={`translate(${centroid})`}>
          <text x={x} y={y} fontSize={14} strokeWidth='0' style={{ fill: textColor }} textAnchor='middle'>
            {abbr.substring(3)}
          </text>
        </g>
      )
    }

    let [dx, dy] = offsets[abbr]

    return (
      <g>
        <line x1={centroid[0]} y1={centroid[1]} x2={centroid[0] + dx} y2={centroid[1] + dy} stroke='rgba(0,0,0,.5)' strokeWidth={1} />
        <text x={4} strokeWidth='0' fontSize={13} style={{ fill: '#202020' }} alignmentBaseline='middle' transform={`translate(${centroid[0] + dx}, ${centroid[1] + dy})`}>
          {abbr.substring(3)}
        </text>
      </g>
    )
  }

  return (
    <ErrorBoundary component='UsaMap'>
      <svg viewBox='0 0 880 500' role='img' aria-label={handleMapAriaLabels(state)}>
        {state.general.displayAsHex ? (
          <Mercator data={unitedStatesHex} scale={650} translate={[1600, 775]}>
            {({ features, projection }) => constructGeoJsx(features, projection)}
          </Mercator>
        ) : (
          <AlbersUsa data={focusedStates} translate={translate} fitExtent={extent}>
            {({ features, projection }) => constructGeoJsx(features, projection)}
          </AlbersUsa>
        )}
      </svg>

      {territories.length > 0 && (
        <>
          <div className='two-col'>
            <div>
              <span className='territories-label label'>{state.general.territoriesLabel}</span>
            </div>
            <div>
              <span className={window.visualViewport.width < 500 ? 'territories--mobile' : 'territories'}>{territories}</span>
            </div>
          </div>
        </>
      )}
    </ErrorBoundary>
  )
}

export default UsaMap
