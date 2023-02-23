import React, { useEffect, memo, useRef } from 'react'

import { geoCentroid, geoPath, geoContains } from 'd3-geo'
import { feature } from 'topojson-client'
import { geoAlbersUsaTerritories } from 'd3-composite-projections'
import debounce from 'lodash.debounce'

import Loading from '@cdc/core/components/Loading'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'

import topoJSON from '../data/county-map.json'

const sortById = (a, b) => {
  if (a.id < b.id) return -1
  if (b.id < a.id) return 1
  return 0
}

// DATA
const { features: counties } = feature(topoJSON, topoJSON.objects.counties)
const { features: states } = feature(topoJSON, topoJSON.objects.states)
states.sort(sortById)
counties.sort(sortById)
const mapData = states.concat(counties).filter(geo => geo.id !== '51620') //Not sure why, but Franklin City, VA is very broken and messes up the rendering
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

function CountyMapChecks(prevState, nextState) {
  const equalNumberOptIn = prevState.state.general.equalNumberOptIn && nextState.state.general.equalNumberOptIn
  const equalColumnName = prevState.state.general.type && nextState.state.general.type
  const equalNavColumn = prevState.state.columns.navigate && nextState.state.columns.navigate
  const equalLegend = prevState.runtimeLegend === nextState.runtimeLegend
  const equalBorderColors = prevState.state.general.geoBorderColor === nextState.state.general.geoBorderColor // update when geoborder color changes
  const equalData = prevState.data === nextState.data // update when data changes
  const equalTooltipBehavior = prevState.state.tooltips.appearanceType === nextState.state.tooltips.appearanceType
  return equalData && equalBorderColors && equalLegend && equalColumnName && equalNavColumn && equalNumberOptIn && equalTooltipBehavior ? true : false
}

const CountyMap = props => {
  const { state, runtimeLegend, applyTooltipsToGeo, data, geoClickHandler, applyLegendToRow, displayGeoName, containerEl, handleMapAriaLabels } = props

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

  const geoStrokeColor = state.general.geoBorderColor === 'darkGray' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255,255,255,0.7)'

  const onReset = () => {
    drawCanvas()
  }

  const canvasClick = e => {
    const canvas = e.target
    const canvasBounds = canvas.getBoundingClientRect()
    const x = e.clientX - canvasBounds.left
    const y = e.clientY - canvasBounds.top
    const pointCoordinates = projection.invert([x, y])

    let clickedState
    for (let i = 0; i < states.length; i++) {
      if (geoContains(states[i], pointCoordinates)) {
        clickedState = states[i]
        break
      }
    }

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
      drawCanvas(clickedState.id, geoCentroid(clickedState))
    }
  }

  const canvasHover = e => {
    if (!tooltipRef.current || state.tooltips.appearanceType !== 'hover' || window.matchMedia('(any-hover: none)').matches) return

    const canvas = e.target
    const canvasBounds = canvas.getBoundingClientRect()
    const x = e.clientX - canvasBounds.left
    const y = e.clientY - canvasBounds.top
    let pointCoordinates = projection.invert([x, y])

    let currentTooltipIndex = parseInt(tooltipRef.current.getAttribute('data-index'))
    //If no tooltip is shown, or if the current geo associated with the tooltip shown is no longer containing the mouse, then rerender the tooltip
    if (isNaN(currentTooltipIndex) || !geoContains(mapData[currentTooltipIndex], pointCoordinates)) {
      const context = canvas.getContext('2d')
      const path = geoPath(projection, context)
      if (!isNaN(currentTooltipIndex)) {
        context.fillStyle = applyLegendToRow(data[mapData[currentTooltipIndex].id])[0]
        context.strokeStyle = geoStrokeColor
        context.beginPath()
        path(mapData[currentTooltipIndex])
        context.fill()
        context.stroke()
      }

      let focusedState = canvas.getAttribute('data-focus')
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
      if (hoveredState && (focusedState === 'null' || focusedState === hoveredState) && countyIndecies[hoveredState]) {
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
        context.fillStyle = 'white'
        context.strokeStyle = 'white'
        context.beginPath()
        path(mapData[countyIndex])
        context.fill()
        context.stroke()

        context.fillStyle = applyLegendToRow(data[county.id])[1]
        context.strokeStyle = geoStrokeColor
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
  }

  const drawCanvas = (focusId, center) => {
    if (canvasRef.current && runtimeLegend.length > 0) {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      const path = geoPath(projection, context)

      canvas.width = canvas.clientWidth
      canvas.height = canvas.width * 0.6

      projection.scale(canvas.width * 1.25).translate([canvas.width / 2, canvas.height / 2])

      // If we are rendering the map without a zoom on a state, hide the reset button
      if (!focusId) {
        canvas.setAttribute('data-focus', null)
        canvas.setAttribute('data-center', null)
        if (resetButton.current) resetButton.current.style.display = 'none'
      } else {
        canvas.setAttribute('data-focus', focusId)
        canvas.setAttribute('data-center', JSON.stringify(center))
        if (resetButton.current) resetButton.current.style.display = 'block'
      }

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
    }
  }

  useEffect(() => {
    drawCanvas()

    const onResize = () => {
      if (canvasRef.current) {
        drawCanvas(canvasRef.current.getAttribute('data-focus') === 'null' ? undefined : canvasRef.current.getAttribute('data-focus'), canvasRef.current.getAttribute('data-center') ? JSON.parse(canvasRef.current.getAttribute('data-center')) : undefined)
      }
    }

    const debounceOnResize = debounce(onResize, 300)

    setTimeout(() => {
      window.addEventListener('resize', debounceOnResize)
    }, 300)

    return () => window.removeEventListener('resize', debounceOnResize)
  })

  if (!data) <Loading />
  return (
    <ErrorBoundary component='CountyMap'>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%'
        }}
        aria-label={handleMapAriaLabels(state)}
        onMouseMove={canvasHover}
        onClick={canvasClick}
      ></canvas>
      <div ref={tooltipRef} id='canvas-tooltip' className='tooltip' style={{ position: 'fixed', backgroundColor: 'white', pointerEvents: 'none', display: 'none' }}></div>
      <button className={`btn btn--reset`} onClick={onReset} ref={resetButton} style={{ display: 'none' }} tabIndex='0'>
        Reset Zoom
      </button>
    </ErrorBoundary>
  )
}

export default memo(CountyMap, CountyMapChecks)
