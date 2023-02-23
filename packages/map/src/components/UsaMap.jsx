import React, { useState, useEffect, memo } from 'react'

import { jsx } from '@emotion/react'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { geoCentroid } from 'd3-geo'
import { feature } from 'topojson-client'
import topoJSON from '../data/us-topo.json'
import hexTopoJSON from '../data/us-hex-topo.json'
import { AlbersUsa, Mercator } from '@visx/geo'
import chroma from 'chroma-js'
import CityList from './CityList'
import BubbleList from './BubbleList'
import { supportedCities, supportedStates } from '../data/supported-geos'

const { features: unitedStates } = feature(topoJSON, topoJSON.objects.states)
const { features: unitedStatesHex } = feature(hexTopoJSON, hexTopoJSON.objects.states)

const Hexagon = ({ label, text, stroke, strokeWidth, textColor, ...props }) => {
  return (
    <svg viewBox='0 0 45 51'>
      <g {...props}>
        <polygon stroke={stroke} strokeWidth={strokeWidth} points='22 0 44 12.702 44 38.105 22 50.807 0 38.105 0 12.702' />
        <text textAnchor='middle' dominantBaseline='middle' x='50%' y='54%' fill={text}>
          {label}
        </text>
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
  const { state, applyTooltipsToGeo, data, geoClickHandler, applyLegendToRow, displayGeoName, supportedTerritories, titleCase, handleCircleClick, setSharedFilterValue, handleMapAriaLabels } = props

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
    // Territories need to show up if they're in the data at all, not just if they're "active". That's why this is different from Cities
    const territoriesList = territoriesKeys.filter(key => data[key])

    setTerritoriesData(territoriesList)
  }, [data])

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

      return <Shape key={label} label={label} css={styles} text={styles.color} strokeWidth={1.5} textColor={textColor} onClick={() => geoClickHandler(territory, territoryData)}
                    data-tooltip-id="tooltip"
                    data-tooltip-html={toolTip}
      />
    }
  })

  const geoLabel = (geo, bgColor = '#FFFFFF', projection) => {
    let centroid = projection(geoCentroid(geo))
    let abbr = geo.properties.iso

    if (undefined === abbr) return null

    let textColor = '#FFF'

    // Dynamic text color
    if (chroma.contrast(textColor, bgColor) < 3.5) {
      textColor = '#202020'
    }

    let x = 0,
      y = 5

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

        return (
          <g data-name={geoName} key={key}>
            <g className='geo-group' css={styles} onClick={() => geoClickHandler(geoDisplayName, geoData)}
               id={geoName}
               data-tooltip-id="tooltip"
               data-tooltip-html={tooltip}
               >
              <path tabIndex={-1} className='single-geo' strokeWidth={1.3} d={path} />
              {(isHex || showLabel) && geoLabel(geo, legendColors[0], projection)}
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
        projection={projection}
        key='cities'
        data={data}
        state={state}
        geoClickHandler={geoClickHandler}
        applyTooltipsToGeo={applyTooltipsToGeo}
        displayGeoName={displayGeoName}
        applyLegendToRow={applyLegendToRow}
        titleCase={titleCase}
        setSharedFilterValue={setSharedFilterValue}
        isFilterValueSupported={isFilterValueSupported}
        isGeoCodeMap={state.general.type === 'us-geocode'}
      />
    )

    // Bubbles
    if (state.general.type === 'bubble') {
      geosJsx.push(<BubbleList key='bubbles' data={state.data} runtimeData={data} state={state} projection={projection} applyLegendToRow={applyLegendToRow} applyTooltipsToGeo={applyTooltipsToGeo} displayGeoName={displayGeoName} />)
    }

    return geosJsx
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
        <section className='territories'>
          <span className='label'>{state.general.territoriesLabel}</span>
          {territories}
        </section>
      )}
    </ErrorBoundary>
  )
}

export default UsaMap
