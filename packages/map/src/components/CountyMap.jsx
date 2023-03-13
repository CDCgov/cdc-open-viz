import React, { useEffect, useState, memo, useRef } from 'react'

import { geoCentroid, geoPath, geoContains } from 'd3-geo'
import { feature } from 'topojson-client'
import { geoAlbersUsaTerritories } from 'd3-composite-projections'
import debounce from 'lodash.debounce'

import Loading from '@cdc/core/components/Loading'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'

import topoJSON from '../data/county-map.json'
import { formatPrefix } from 'd3'

const sortById = (a, b) => {
  if (a.id < b.id) return -1
  if (b.id < a.id) return 1
  return 0
}

// DATA
const { features: counties } = feature(topoJSON, topoJSON.objects.counties)
const { features: states } = feature(topoJSON, topoJSON.objects.states)

// Sort states/counties data to ensure that countyIndecies logic below works
states.sort(sortById)
counties.sort(sortById)
const mapData = states.concat(counties).filter(geo => geo.id !== '51620') //Not sure why, but Franklin City, VA is very broken and messes up the rendering

// For each state, find the beginning index and end index of the counties in that state in the mapData array
// For use in hover logic (only check counties for hover in the state that is being hovered, instead of checking all counties)
const countyIndecies = {}
states.forEach(state => {
  let minIndex = mapData.length - 1
  let maxIndex = 0

  for (let i = 0; i < mapData.length; i++) {
    if (mapData[i].id.length > 2 && mapData[i].id.indexOf(state.id) === 0) {
      if (i < minIndex) minIndex = i
      if (i > maxIndex) maxIndex = i
    }
  }

  countyIndecies[state.id] = [minIndex, maxIndex]
})

// CREATE STATE LINES
const projection = geoAlbersUsaTerritories()

// Ensures county map is only rerendered when it needs to (when one of the variables below is updated)
function CountyMapChecks(prevState, nextState) {
  const equalNumberOptIn = prevState.state.general.equalNumberOptIn && nextState.state.general.equalNumberOptIn
  const equalColumnName = prevState.state.general.type && nextState.state.general.type
  const equalNavColumn = prevState.state.columns.navigate && nextState.state.columns.navigate
  const equalLegend = prevState.runtimeLegend === nextState.runtimeLegend
  const equalBorderColors = prevState.state.general.geoBorderColor === nextState.state.general.geoBorderColor // update when geoborder color changes
  const equalData = prevState.data === nextState.data // update when data changes
  const equalTooltipBehavior = prevState.state.tooltips.appearanceType === nextState.state.tooltips.appearanceType
  if (nextState.runtimeLegend.runtimeDataHash !== nextState.data.fromHash) return true
  return equalData && equalBorderColors && equalLegend && equalColumnName && equalNavColumn && equalNumberOptIn && equalTooltipBehavior ? true : false
}

const CountyMap = props => {
  const { state, runtimeLegend, applyTooltipsToGeo, data, geoClickHandler, applyLegendToRow, displayGeoName, containerEl, handleMapAriaLabels } = props

  const [focus, setFocus] = useState({})

  useEffect(() => {
    if (containerEl) {
      if (containerEl.className.indexOf('loaded') === -1) {
        containerEl.className += ' loaded'
      }
    }
  })

  const resetButton = useRef()
  const canvasRef = useRef()
  const tooltipRef = useRef()

  const runtimeKeys = Object.keys(data)

  const geoStrokeColor = state.general.geoBorderColor === 'darkGray' ? 'rgb(90, 90, 90)' : 'rgb(255, 255, 255)'
  const lineWidth = 0.3

  const onReset = () => {
    setFocus({})
  }

  const canvasClick = e => {
    const canvas = e.target
    const canvasBounds = canvas.getBoundingClientRect()
    const x = e.clientX - canvasBounds.left
    const y = e.clientY - canvasBounds.top
    const pointCoordinates = projection.invert([x, y])

    // Use d3 geoContains method to find the state geo data that the user clicked inside
    let clickedState
    for (let i = 0; i < states.length; i++) {
      if (geoContains(states[i], pointCoordinates)) {
        clickedState = states[i]
        break
      }
    }

    // If the user clicked outside of all states, no behavior
    if (clickedState) {
      // If a county within the state was also clicked and has data, call parent click handler
      if (countyIndecies[clickedState.id]) {
        let county
        for (let i = countyIndecies[clickedState.id][0]; i <= countyIndecies[clickedState.id][1]; i++) {
          if (geoContains(mapData[i], pointCoordinates)) {
            county = mapData[i]
            break
          }
        }
        if (county && data[county.id]) {
          geoClickHandler(displayGeoName(county.id), data[county.id])
        }
      }

      // Redraw with focus on state
      setFocus({ id: clickedState.id, center: geoCentroid(clickedState) })
    }

    if (state.general.type === 'us-geocode') {
      const geoRadius = (state.visual.geoCodeCircleSize || 5) * (focus.id ? 2 : 1)
      let clickedGeo
      for (let i = 0; i < runtimeKeys.length; i++) {
        const pixelCoords = projection([data[runtimeKeys[i]][state.columns.longitude.name], data[runtimeKeys[i]][state.columns.latitude.name]])
        if (Math.sqrt(Math.pow(pixelCoords[0] - x, 2) + Math.pow(pixelCoords[1] - y, 2)) < geoRadius) {
          clickedGeo = data[runtimeKeys[i]]
          break
        }
      }

      if (clickedGeo) {
        geoClickHandler(displayGeoName(clickedGeo[state.columns.geo.name]), clickedGeo)
      }
    }
  }

  const canvasHover = e => {
    if (!tooltipRef.current || state.tooltips.appearanceType !== 'hover' || window.matchMedia('(any-hover: none)').matches) return

    const canvas = e.target
    const canvasBounds = canvas.getBoundingClientRect()
    const x = e.clientX - canvasBounds.left
    const y = e.clientY - canvasBounds.top
    let pointCoordinates = projection.invert([x, y])

    const currentTooltipIndex = parseInt(tooltipRef.current.getAttribute('data-index'))
    const geoRadius = (state.visual.geoCodeCircleSize || 5) * (focus.id ? 2 : 1)

    // Handle standard county map hover
    if (state.general.type !== 'us-geocode') {
      //If no tooltip is shown, or if the current geo associated with the tooltip shown is no longer containing the mouse, then rerender the tooltip
      if (isNaN(currentTooltipIndex) || !geoContains(mapData[currentTooltipIndex], pointCoordinates)) {
        const context = canvas.getContext('2d')
        const path = geoPath(projection, context)
        if (!isNaN(currentTooltipIndex)) {
          context.fillStyle = applyLegendToRow(data[mapData[currentTooltipIndex].id])[0]
          context.strokeStyle = geoStrokeColor
          context.lineWidth = lineWidth
          context.beginPath()
          path(mapData[currentTooltipIndex])
          context.fill()
          context.stroke()
        }

        let hoveredState
        let county
        let countyIndex
        // First find the state that is hovered
        for (let i = 0; i < states.length; i++) {
          if (geoContains(states[i], pointCoordinates)) {
            hoveredState = states[i].id
            break
          }
        }
        // If a state is hovered and it is not an unfocused state, search only the counties within that state for the county hovered
        if (hoveredState && (!focus.id || focus.id === hoveredState) && countyIndecies[hoveredState]) {
          for (let i = countyIndecies[hoveredState][0]; i <= countyIndecies[hoveredState][1]; i++) {
            if (geoContains(mapData[i], pointCoordinates)) {
              county = mapData[i]
              countyIndex = i
              break
            }
          }
        }

        // If the hovered county is found, show the tooltip for that county, otherwise hide the tooltip
        if (county && data[county.id]) {
          context.fillStyle = applyLegendToRow(data[county.id])[1]
          context.strokeStyle = geoStrokeColor
          context.lineWidth = lineWidth
          context.beginPath()
          path(mapData[countyIndex])
          context.fill()
          context.stroke()

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
    } else {
      // Handle geo map hover
      if (!isNaN(currentTooltipIndex)) {
        const pixelCoords = projection([data[runtimeKeys[currentTooltipIndex]][state.columns.longitude.name], data[runtimeKeys[currentTooltipIndex]][state.columns.latitude.name]])
        if (Math.sqrt(Math.pow(pixelCoords[0] - x, 2) + Math.pow(pixelCoords[1] - y, 2)) < geoRadius) {
          // Who knew pythagorean theorum was useful
          return // The user is still hovering over the previous geo point, don't redraw tooltip
        }
      }

      let hoveredGeo
      let hoveredGeoIndex
      for (let i = 0; i < runtimeKeys.length; i++) {
        const pixelCoords = projection([data[runtimeKeys[i]][state.columns.longitude.name], data[runtimeKeys[i]][state.columns.latitude.name]])
        if (Math.sqrt(Math.pow(pixelCoords[0] - x, 2) + Math.pow(pixelCoords[1] - y, 2)) < geoRadius) {
          hoveredGeo = data[runtimeKeys[i]]
          hoveredGeoIndex = i
          break
        }
      }

      if (hoveredGeo) {
        tooltipRef.current.style.display = 'block'
        tooltipRef.current.style.top = e.clientY + 'px'
        tooltipRef.current.style.left = e.clientX + 'px'
        tooltipRef.current.innerHTML = applyTooltipsToGeo(displayGeoName(hoveredGeo[state.columns.geo.name]), hoveredGeo)
        tooltipRef.current.setAttribute('data-index', hoveredGeoIndex)
      } else {
        tooltipRef.current.style.display = 'none'
        tooltipRef.current.setAttribute('data-index', null)
      }
    }
  }

  // Redraws canvas. Takes as parameters the fips id of a state to center on and the [lat,long] center of that state
  const drawCanvas = () => {
    if (canvasRef.current && runtimeLegend.length > 0) {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      const path = geoPath(projection, context)

      canvas.width = canvas.clientWidth
      canvas.height = canvas.width * 0.6

      projection.scale(canvas.width * 1.25).translate([canvas.width / 2, canvas.height / 2])

      // If we are rendering the map without a zoom on a state, hide the reset button
      if (!focus.id) {
        if (resetButton.current) resetButton.current.style.display = 'none'
      } else {
        if (resetButton.current) resetButton.current.style.display = 'block'
      }

      // Centers the projection on the paramter passed
      if (focus.center) {
        projection.scale(canvas.width * 2.5)
        let offset = projection(focus.center)
        projection.translate([-offset[0] + canvas.width, -offset[1] + canvas.height])
      }

      // Erases previous renderings before redrawing map
      context.clearRect(0, 0, canvas.width, canvas.height)

      // Enforces stroke style of the county lines
      context.strokeStyle = geoStrokeColor
      context.lineWidth = lineWidth

      let focusIndex = -1
      // Iterates through each state/county topo and renders it
      mapData.forEach((geo, i) => {
        // If invalid geo item, don't render
        if (!geo.id) return
        // If the map is focused on one state, don't render counties that are not in that state
        if (focus.id && geo.id.length > 2 && geo.id.indexOf(focus.id) !== 0) return
        // If rendering a geocode map without a focus, don't render counties
        if (!focus.id && state.general.type === 'us-geocode' && geo.id.length > 2) return

        // Gets numeric data associated with the topo data for this state/county
        const geoData = data[geo.id]

        // Marks that the focused state was found for the logic below
        if (geo.id === focus.id) {
          focusIndex = i
        }

        // Renders state/county
        const legendValues = geoData !== undefined ? applyLegendToRow(geoData) : false
        context.fillStyle = legendValues ? legendValues[0] : '#EEE'
        context.beginPath()
        path(geo)
        context.fill()
        context.stroke()
      })

      // If the focused state is found in the geo data, render it with a thicker outline
      if (focusIndex !== -1) {
        context.strokeStyle = 'black'
        context.lineWidth = 2
        context.beginPath()
        path(mapData[focusIndex])
        context.stroke()
      }

      if (state.general.type === 'us-geocode') {
        context.strokeStyle = 'black'
        const geoRadius = (state.visual.geoCodeCircleSize || 5) * (focus.id ? 2 : 1)

        runtimeKeys.forEach(key => {
          const pixelCoords = projection([data[key][state.columns.longitude.name], data[key][state.columns.latitude.name]])

          if (pixelCoords) {
            context.fillStyle = data[key] !== undefined ? applyLegendToRow(data[key])[0] : '#EEE'
            context.beginPath()
            context.arc(pixelCoords[0], pixelCoords[1], geoRadius, 0, 2 * Math.PI)
            context.fill()
            context.stroke()
          }
        })
      }
    }
  }

  // Whenever the memo at the top is triggered and the map is called to re-render, call drawCanvas and update
  // The resize function so it includes the latest state variables
  useEffect(() => {
    drawCanvas()

    const onResize = () => {
      if (canvasRef.current) {
        drawCanvas()
      }
    }

    const debounceOnResize = debounce(onResize, 300)

    window.addEventListener('resize', debounceOnResize)

    return () => window.removeEventListener('resize', debounceOnResize)
  })

  // If runtimeData is not defined, show loader
  if (!data) <Loading />

  return (
    <ErrorBoundary component='CountyMap'>
      <canvas ref={canvasRef} aria-label={handleMapAriaLabels(state)} onMouseMove={canvasHover} onClick={canvasClick}></canvas>
      <div ref={tooltipRef} id='canvas-tooltip' className='tooltip'></div>
      <button className={`btn btn--reset`} onClick={onReset} ref={resetButton} tabIndex='0'>
        Reset Zoom
      </button>
    </ErrorBoundary>
  )
}

export default memo(CountyMap, CountyMapChecks)
