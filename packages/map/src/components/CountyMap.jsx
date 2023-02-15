import React, { useState, useEffect, memo, useRef } from 'react'
import Loading from '@cdc/core/components/Loading'

import { jsx } from '@emotion/react'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { geoCentroid, geoPath, geoContains } from 'd3-geo'
import { feature, mesh } from 'topojson-client'
import { CustomProjection } from '@visx/geo'
import colorPalettes from '../../../core/data/colorPalettes'
import { geoAlbersUsaTerritories } from 'd3-composite-projections'
import testJSON from '../data/county-map.json'
import { abbrs } from '../data/abbreviations'
import CityList from './CityList'

// Label lines for smaller states/geo labels
const offsets = {
  Vermont: [50, -8],
  'New Hampshire': [34, 5],
  Massachusetts: [30, -5],
  'Rhode Island': [28, 4],
  Connecticut: [35, 16],
  'New Jersey': [42, 0],
  Delaware: [33, 0],
  Maryland: [47, 10],
  'District of Columbia': [30, 20],
  'Puerto Rico': [10, -20],
  'Virgin Islands': [10, -10],
  Guam: [10, -5],
  'American Samoa': [10, 0]
}

// SVG ITEMS
const WIDTH = 880
const HEIGHT = 500
const PADDING = 25

// DATA
let { features: counties } = feature(testJSON, testJSON.objects.counties)
let { features: states } = feature(testJSON, testJSON.objects.states)

// CONSTANTS
const STATE_BORDER = '#c0cad4'
const STATE_INACTIVE_FILL = '#F4F7FA'

// CREATE STATE LINES
const projection = geoAlbersUsaTerritories()
  .scale(1000)
  .translate([WIDTH / 2, HEIGHT / 2])
const path = geoPath().projection(projection)
const stateLines = path(mesh(testJSON, testJSON.objects.states))
const countyLines = path(mesh(testJSON, testJSON.objects.counties))

function CountyMapChecks(prevState, nextState) {
  const equalNumberOptIn = prevState.state.general.equalNumberOptIn && nextState.state.general.equalNumberOptIn
  const equalColumnName = prevState.state.general.type && nextState.state.general.type
  const equalNavColumn = prevState.state.columns.navigate && nextState.state.columns.navigate
  const equalLegend = prevState.runtimeLegend === nextState.runtimeLegend
  const equalBorderColors = prevState.state.general.geoBorderColor === nextState.state.general.geoBorderColor // update when geoborder color changes
  const equalData = prevState.data === nextState.data // update when data changes
  const equalViewport = prevState.currentViewport === nextState.currentViewport
  return equalData && equalBorderColors && equalLegend && equalColumnName && equalNavColumn && equalNumberOptIn && equalViewport ? true : false
}

const CountyMap = props => {
  let mapData = states.concat(counties).filter(geo => geo.id !== '51620') //Not sure why, but Franklin City, VA is very broken and messes up the rendering

  const { state, applyTooltipsToGeo, data, geoClickHandler, applyLegendToRow, displayGeoName, rebuildTooltips, containerEl, handleMapAriaLabels, titleCase, setSharedFilterValue, isFilterValueSupported } = props

  useEffect(() => {
    if (containerEl) {
      if (containerEl.className.indexOf('loaded') === -1) {
        containerEl.className += ' loaded'
      }
    }
  })

  // Use State
  const [scale, setScale] = useState(0.85)
  const [startingLineWidth, setStartingLineWidth] = useState(1.3)
  const [translate, setTranslate] = useState([0, 0])
  const [mapColorPalette, setMapColorPalette] = useState(colorPalettes[state.color] || '#fff')
  const [focusedState, setFocusedState] = useState(null)
  const [showLabel, setShowLabels] = useState(true)

  const resetButton = useRef()
  const focusedBorderPath = useRef()
  const stateLinesPath = useRef()
  const mapGroup = useRef()
  const canvasRef = useRef()
  const tooltipRef = useRef()

  let focusedBorderColor = mapColorPalette[3]
  let geoStrokeColor = state.general.geoBorderColor === 'darkGray' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255,255,255,0.7)'

  // Use Effect
  useEffect(() => rebuildTooltips())

  const geoLabel = (geo, projection) => {
    let [x, y] = projection(geoCentroid(geo))
    let abbr = abbrs[geo.properties.name]
    if (abbr === 'NJ') x += 3
    if (undefined === abbr) return null
    let [dx, dy] = offsets[geo.properties.name]

    return (
      <>
        <line className='abbrLine' x1={x} y1={y} x2={x + dx} y2={y + dy} stroke='black' strokeWidth={0.85} />
        <text className='abbrText' x={4} strokeWidth='0' fontSize={13} style={{ fill: '#202020' }} alignmentBaseline='middle' transform={`translate(${x + dx}, ${y + dy})`}>
          {abbr}
        </text>
      </>
    )
  }

  const focusGeo = (geoKey, geo) => {
    if (!geoKey) {
      console.log('County Map: no geoKey provided to focusGeo')
      return
    }

    // 1) Get the state the county is in.
    let myState = states.find(s => s.id === geoKey)

    // 2) Set projections translation & scale to the geographic center of the passed geo.
    const projection = geoAlbersUsaTerritories().translate([WIDTH / 2, HEIGHT / 2])
    const newProjection = projection.fitExtent(
      [
        [PADDING, PADDING],
        [WIDTH - PADDING, HEIGHT - PADDING]
      ],
      myState
    )

    // 3) Gets the new scale
    const newScale = newProjection.scale()
    const hypot = Math.hypot(880, 500)
    const newScaleWithHypot = newScale / 1070

    // 4) Pull the x & y out, divide by half the viewport for some reason
    let [x, y] = newProjection.translate()
    x = x - WIDTH / 2
    y = y - HEIGHT / 2

    // 5) Debug if needed
    const debug = {
      width: WIDTH,
      height: HEIGHT,
      beginX: 0,
      beginY: 0,
      hypot: hypot,
      x: x,
      y: y,
      newScale: newScale,
      newScaleWithHypot: newScaleWithHypot,
      geoKey: geoKey,
      geo: geo
    }
    //console.table(debug)

    mapGroup.current.setAttribute('transform', `translate(${[x, y]}) scale(${newScaleWithHypot})`)
    resetButton.current.style.display = 'block'

    // set the states border
    let allStates = document.querySelectorAll('.state path')
    let allCounties = document.querySelectorAll('.county path')
    let currentState = document.querySelector(`.state--${myState.id}`)
    let otherStates = document.querySelectorAll(`.state:not(.state--${myState.id})`)
    let svgContainer = document.querySelector('.svg-container')
    svgContainer.setAttribute('data-scaleZoom', newScaleWithHypot)

    const state = testJSON.objects.states.geometries.filter((el, index) => {
      return el.id === myState.id
    })

    const focusedStateLine = path(mesh(testJSON, state[0]))

    currentState.style.display = 'none'

    allStates.forEach(state => (state.style.strokeWidth = 0.75 / newScaleWithHypot))
    allCounties.forEach(county => (county.style.strokeWidth = 0.75 / newScaleWithHypot))
    otherStates.forEach(el => (el.style.display = 'block'))

    // State Line Updates
    stateLinesPath.current.setAttribute('stroke-width', 0.75 / newScaleWithHypot)
    stateLinesPath.current.setAttribute('stroke', geoStrokeColor)

    // Set Focus Border
    focusedBorderPath.current.style.display = 'block'
    focusedBorderPath.current.setAttribute('d', focusedStateLine)
    //focusedBorderPath.current.setAttribute('stroke-width', 0.75 / newScaleWithHypot);
    //focusedBorderPath.current.setAttribute('stroke', focusedBorderColor)
  }

  const onReset = e => {
    drawCanvas()
  }

  function setStateLeave() {
    focusedBorderPath.current.setAttribute('d', '')
    focusedBorderPath.current.setAttribute('stroke', '')
    focusedBorderPath.current.setAttribute('stroke-width', 0.75 / scale)
  }

  function setStateEnter(id) {
    const svg = document.querySelector('.svg-container')
    const scale = svg.getAttribute('data-scaleZoom')

    let myState = id.substring(0, 2)
    const allStates = document.querySelectorAll('.state path')

    let state = testJSON.objects.states.geometries.filter((el, index) => {
      return el.id === myState
    })

    let focusedStateLine = path(mesh(testJSON, state[0]))
    focusedBorderPath.current.style.display = 'block'
    focusedBorderPath.current.setAttribute('d', focusedStateLine)
    focusedBorderPath.current.setAttribute('stroke', '#000')

    if (scale) {
      allStates.forEach(state => state.setAttribute('stroke-width', 0.75 / scale))
      focusedBorderPath.current.setAttribute('stroke-width', 0.75 / scale)
    }
  }

  const StateLines = memo(({ stateLines, lineWidth, geoStrokeColor }) => {
    return (
      <g className='stateLines' key='state-line'>
        <path id='stateLinesPath' ref={stateLinesPath} d={stateLines} strokeWidth={lineWidth} stroke={geoStrokeColor} fill='none' fillOpacity='1' />
      </g>
    )
  })

  const FocusedStateBorder = memo(() => {
    return (
      <g id='focusedBorder' key='focusedStateBorder'>
        <path ref={focusedBorderPath} d='' strokeWidth='' stroke={focusedBorderColor} fill='none' fillOpacity='1' />
      </g>
    )
  })

  const CountyOutput = memo(({ geographies, counties }) => {
    let output = []
    output.push(
      counties.map(({ feature: geo, path = '' }) => {
        const key = geo.id + '-group'

        // COUNTY GROUPS
        let styles = {
          fillOpacity: '1',
          fill: '#E6E6E6',
          cursor: 'default'
        }

        // Map the name from the geo data with the appropriate key for the processed data
        let geoKey = geo.id

        if (!geoKey) return null

        const geoData = data[geoKey]

        let legendColors

        // Once we receive data for this geographic item, setup variables.
        if (geoData !== undefined) {
          legendColors = applyLegendToRow(geoData)
        }

        const geoDisplayName = displayGeoName(geoKey)

        // For some reason, these two geos are breaking the display.
        if (geoDisplayName === 'Franklin City' || geoDisplayName === 'Waynesboro') return null

        // If a legend applies, return it with appropriate information.
        if (legendColors && legendColors[0] !== '#000000') {
          const tooltip = applyTooltipsToGeo(geoDisplayName, geoData)

          styles = {
            fill: legendColors[0],
            cursor: 'default',
            '&:hover': {
              fill: legendColors[1]
            },
            '&:active': {
              fill: legendColors[2]
            }
          }

          // When to add pointer cursor
          if ((state.columns.navigate && geoData[state.columns.navigate.name]) || state.tooltips.appearanceType === 'hover') {
            styles.cursor = 'pointer'
          }
          let stateFipsCode = geoData[state.columns.geo.name].substring(0, 2)

          return (
            <g
              tabIndex='-1'
              data-for='tooltip'
              data-tip={tooltip}
              key={`county--${key}`}
              className={`county county--${geoDisplayName.split(' ').join('')} county--${geoData[state.columns.geo.name]}`}
              css={styles}
              onMouseEnter={() => {
                setStateEnter(geo.id)
              }}
              onMouseLeave={() => {
                setStateLeave()
              }}
              onClick={
                // default
                e => {
                  e.stopPropagation()
                  e.nativeEvent.stopImmediatePropagation()
                  geoClickHandler(geoDisplayName, geoData)
                  focusGeo(stateFipsCode, geo)
                }
              }
            >
              <path tabIndex={-1} className={`county county--${geoDisplayName}`} stroke={geoStrokeColor} d={path} strokeWidth='.5' />
            </g>
          )
        }

        // default county
        return (
          <g
            key={`county--default-${key}`}
            className={`county county--${geoDisplayName}`}
            css={styles}
            strokeWidth=''
            onMouseEnter={() => {
              setStateEnter(geo.id)
            }}
            onMouseLeave={() => {
              setStateLeave()
            }}
            onClick={
              // default
              e => {
                e.stopPropagation()
                e.nativeEvent.stopImmediatePropagation()
                let countyFipsCode = geo.id
                let stateFipsCode = countyFipsCode.substring(0, 2)
                focusGeo(stateFipsCode, geo)
              }
            }
          >
            <path tabIndex={-1} className='single-geo' stroke={geoStrokeColor} d={path} strokeWidth='.85' />
          </g>
        )
      })
    )
    return output
  })

  const GeoCodeCountyLines = memo(() => {
    return <path d={countyLines} className='county-borders' style={{ stroke: geoStrokeColor }} />
  })

  const StateOutput = memo(({ geographies, states }) => {
    let output = []
    output.push(
      states.map(({ feature: geo, path = '' }) => {
        const key = geo.id + '-group'

        // Map the name from the geo data with the appropriate key for the processed data
        let geoKey = geo.id

        if (!geoKey) return

        const geoData = data[geoKey]

        let legendColors

        // Once we receive data for this geographic item, setup variables.
        if (geoData !== undefined) {
          legendColors = applyLegendToRow(geoData)
        }

        const geoDisplayName = displayGeoName(geoKey)

        let stateStyles = {}

        if (state.general.type !== 'us-geocode') {
          stateStyles = {
            cursor: 'default',
            stroke: STATE_BORDER,
            strokeWidth: 0.75 / scale,
            display: !focusedState ? 'none' : focusedState && focusedState !== geo.id ? 'block' : 'none',
            fill: focusedState && focusedState !== geo.id ? STATE_INACTIVE_FILL : 'none'
          }
        } else {
          stateStyles = {
            cursor: 'default',
            stroke: STATE_BORDER,
            strokeWidth: 0.75 / scale,
            display: 'block',
            fill: '#f4f7fa'
          }
        }

        let stateSelectedStyles = {
          fillOpacity: 1,
          cursor: 'default'
        }

        let stateClasses = ['state', `state--${geo.properties.name}`, `state--${geo.id}`]
        focusedState === geo.id ? stateClasses.push('state--focused') : stateClasses.push('state--inactive')

        return (
          <React.Fragment key={`state--${key}`}>
            <g key={`state--${key}`} className={stateClasses.join(' ')} style={stateStyles} tabIndex='-1'>
              <>
                <path
                  tabIndex={-1}
                  className='state-path'
                  d={path}
                  fillOpacity={`${focusedState !== geo.id ? '1' : '0'}`}
                  fill={STATE_INACTIVE_FILL}
                  css={stateSelectedStyles}
                  onClick={e => {
                    e.stopPropagation()
                    e.nativeEvent.stopImmediatePropagation()
                    focusGeo(geo.id, geo)
                  }}
                  onMouseEnter={e => {
                    e.target.attributes.fill.value = colorPalettes[state.color][3]
                  }}
                  onMouseLeave={e => {
                    e.target.attributes.fill.value = STATE_INACTIVE_FILL
                  }}
                />
              </>
            </g>
            <g key={`label--${key}`}>{offsets[geo.properties.name] && geoLabel(geo, geoAlbersUsaTerritories().translate([WIDTH / 2, HEIGHT / 2]))}</g>
          </React.Fragment>
        )
      })
    )
    return output
  })

  // Constructs and displays markup for all geos on the map (except territories right now)
  const constructGeoJsx = (geographies, projection) => {
    const states = geographies.slice(0, 56)
    const counties = geographies.slice(56)
    let geosJsx = []

    'us-geocode' !== state.general.type && geosJsx.push(<CountyOutput geographies={geographies} counties={counties} key='county-key' />)
    'us-geocode' === state.general.type && geosJsx.push(<GeoCodeCountyLines />)

    geosJsx.push(<StateOutput geographies={geographies} states={states} key='state-key' />)
    geosJsx.push(<StateLines key='stateLines' lineWidth={startingLineWidth} geoStrokeColor={geoStrokeColor} stateLines={stateLines} />)
    geosJsx.push(<FocusedStateBorder key='focused-border-key' />)
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
    return geosJsx
  }

  const canvasClick = e => {
    const canvas = e.target
    const canvasBounds = canvas.getBoundingClientRect()
    const x = e.clientX - canvasBounds.left
    const y = e.clientY - canvasBounds.top

    let state
    for (let i = 0; i < states.length; i++) {
      if (geoContains(states[i], projection.invert([x, y]))) {
        state = states[i]
        break
      }
    }

    if (state) {
      drawCanvas(state.id, geoCentroid(state))
    }
  }

  const canvasHover = e => {
    if (!tooltipRef.current) return

    const canvas = e.target
    const canvasBounds = canvas.getBoundingClientRect()
    const x = e.clientX - canvasBounds.left
    const y = e.clientY - canvasBounds.top
    let pointCoordinates = projection.invert([x, y])

    let currentTooltipIndex = parseInt(tooltipRef.current.getAttribute('data-index'))
    if (isNaN(currentTooltipIndex) || !geoContains(mapData[currentTooltipIndex], pointCoordinates)) {
      let county
      let countyIndex
      for (let i = 0; i < mapData.length; i++) {
        if (mapData[i].id.length > 2 && geoContains(mapData[i], pointCoordinates)) {
          county = mapData[i]
          countyIndex = i
          break
        }
      }

      if (county && data[county.id]) {
        tooltipRef.current.style.display = 'block'
        tooltipRef.current.style.top = e.clientY + 'px'
        tooltipRef.current.style.left = e.clientX + 'px'
        tooltipRef.current.innerHTML = applyTooltipsToGeo(displayGeoName(county.id), data[county.id])
        tooltipRef.current.setAttribute('data-index', countyIndex)
      } else {
        tooltipRef.current.style.display = 'none'
        tooltipRef.current.setAttribute('data-index', null)
      }
    }
  }

  const drawCanvas = (focusId, center) => {
    // If we are rendering the map without a zoom on a state, hide the reset button
    if (resetButton.current) {
      if (!focusId) {
        resetButton.current.style.display = 'none'
      } else {
        resetButton.current.style.display = 'block'
      }
    }

    if (canvasRef.current) {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      const path = geoPath(projection, context)

      canvas.width = canvas.clientWidth
      canvas.height = canvas.width * 0.6

      projection.scale(canvas.width * 1.25).translate([canvas.width / 2, canvas.height / 2])

      if (center) {
        projection.scale(canvas.width * 2.5)
        let offset = projection(center)
        projection.translate([-offset[0] + canvas.width, -offset[1] + canvas.height])
      }

      context.clearRect(0, 0, canvas.width, canvas.height)

      context.lineWidth = 0.85
      context.strokeStyle = geoStrokeColor

      let focusIndex = -1
      mapData.forEach((geo, i) => {
        if (!geo.id) return
        if (focusId && geo.id.length > 2 && geo.id.indexOf(focusId) !== 0) return
        const geoData = data[geo.id]

        if (geo.id === focusId) {
          focusIndex = i
        }

        context.fillStyle = geoData !== undefined ? applyLegendToRow(geoData)[0] : '#EEE'
        context.beginPath()
        path(geo)
        context.fill()
        context.stroke()
      })

      if (focusIndex !== -1) {
        context.lineWidth = 2
        context.strokeStyle = 'black'
        context.beginPath()
        path(mapData[focusIndex])
        context.stroke()
      }

      console.log('render')
    }
  }

  useEffect(() => {
    drawCanvas()
  })
  if (!data) <Loading />
  return (
    <ErrorBoundary component='CountyMap'>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%'
        }}
        onMouseMove={canvasHover}
        onClick={canvasClick}
      ></canvas>
      <div ref={tooltipRef} id='canvas-tooltip' className='tooltip' style={{ position: 'fixed', backgroundColor: 'white', pointerEvents: 'none' }}></div>
      {/*<svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio="xMinYMin" className="svg-container" data-scale={scale ? scale : ''} data-translate={translate ? translate : ''} role="img" aria-label={handleMapAriaLabels(state)}>
        <rect className="background center-container ocean" width={WIDTH} height={HEIGHT} fillOpacity={1} fill="white" onClick={e => onReset(e)} tabIndex="0"></rect>
        <CustomProjection data={mapData} translate={[ WIDTH / 2, HEIGHT / 2 ]} projection={geoAlbersUsaTerritories}>
          {({ features, projection }) => {
            return (
              <g ref={mapGroup} className="countyMapGroup" transform={`translate(${translate}) scale(${scale})`} key="countyMapGroup">
                {constructGeoJsx(features, projection)}
              </g>
            )
          }}
        </CustomProjection>
      </svg>*/}

      {/* TODO: Refactor to COVE button */}
      <button className={`btn btn--reset`} onClick={onReset} ref={resetButton} style={{ display: 'none' }} tabIndex='0'>
        Reset Zoom
      </button>
    </ErrorBoundary>
  )
}

export default memo(CountyMap, CountyMapChecks)
