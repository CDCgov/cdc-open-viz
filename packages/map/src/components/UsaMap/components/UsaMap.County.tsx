import { useEffect, useState, useRef, useContext } from 'react'
import { geoCentroid, geoPath, geoContains } from 'd3-geo'
import { feature } from 'topojson-client'
import { geoAlbersUsaTerritories } from 'd3-composite-projections'
import debounce from 'lodash.debounce'
import Loading from '@cdc/core/components/Loading'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import useMapLayers from '../../../hooks/useMapLayers'
import ConfigContext from '../../../context'
import { drawShape, createShapeProperties } from '../helpers/shapes'
import { getGeoStrokeColor, handleMapAriaLabels, displayGeoName } from '../../../helpers'
import useGeoClickHandler from '../../../hooks/useGeoClickHandler'
import useApplyLegendToRow from '../../../hooks/useApplyLegendToRow'
import useApplyTooltipsToGeo from '../../../hooks/useApplyTooltipsToGeo'
import { MapConfig } from '../../../types/MapConfig'

const getCountyTopoURL = year => {
  return `https://www.cdc.gov/TemplatePackage/contrib/data/county-topography/cb_${year}_us_county_20m.json`
}

const sortById = (a, b) => {
  if (a.id < b.id) return -1
  if (b.id < a.id) return 1
  return 0
}

const getTopoData = year => {
  return new Promise(resolve => {
    const resolveWithTopo = async response => {
      if (response.status !== 200) {
        response = await import(/* webpackChunkName: "cb_2019_us_county_20m" */ './../data/cb_2019_us_county_20m.json')
      } else {
        response = await response.json()
      }

      let topoData = {
        year: undefined,
        counties: undefined,
        states: undefined,
        mapData: undefined,
        countyIndecies: undefined,
        projection: undefined
      }

      topoData.year = year || 'default'
      topoData.counties = feature(response, response.objects.counties).features
      topoData.states = feature(response, response.objects.states).features
      topoData.states.sort(sortById)
      topoData.counties.sort(sortById)
      topoData.mapData = topoData.states.concat(topoData.counties).filter(geo => geo.id !== '51620') //Not sure why, but Franklin City, VA is very broken and messes up the rendering
      topoData.countyIndecies = {}
      topoData.states.forEach(state => {
        let minIndex = topoData.mapData.length - 1
        let maxIndex = 0

        for (let i = 0; i < topoData.mapData.length; i++) {
          if (topoData.mapData[i].id.length > 2 && topoData.mapData[i].id.indexOf(state.id) === 0) {
            if (i < minIndex) minIndex = i
            if (i > maxIndex) maxIndex = i
          }
        }

        topoData.countyIndecies[state.id] = [minIndex, maxIndex]
      })
      topoData.projection = geoAlbersUsaTerritories()

      resolve(topoData)
    }

    const numericYear = parseInt(year)

    if (isNaN(numericYear)) {
      fetch(getCountyTopoURL(2019)).then(resolveWithTopo)
    } else if (numericYear > 2022) {
      fetch(getCountyTopoURL(2022)).then(resolveWithTopo)
    } else if (numericYear < 2013) {
      fetch(getCountyTopoURL(2013)).then(resolveWithTopo)
    } else {
      switch (numericYear) {
        case 2022:
          fetch(getCountyTopoURL(2022)).then(resolveWithTopo)
          break
        case 2021:
          fetch(getCountyTopoURL(2021)).then(resolveWithTopo)
          break
        case 2020:
          fetch(getCountyTopoURL(2020)).then(resolveWithTopo)
          break
        case 2018:
        case 2017:
        case 2016:
        case 2015:
          fetch(getCountyTopoURL(2015)).then(resolveWithTopo)
          break
        case 2014:
          fetch(getCountyTopoURL(2014)).then(resolveWithTopo)
          break
        case 2013:
          fetch(getCountyTopoURL(2013)).then(resolveWithTopo)
          break
        default:
          fetch(getCountyTopoURL(2019)).then(resolveWithTopo)
          break
      }
    }
  })
}

const getCurrentTopoYear = (config: MapConfig, runtimeFilters) => {
  let currentYear = config.general.countyCensusYear

  if (config.general.filterControlsCountyYear && runtimeFilters && runtimeFilters.length > 0) {
    let yearFilter = runtimeFilters.filter(filter => filter.columnName === config.general.filterControlsCountyYear)
    if (yearFilter.length > 0 && yearFilter[0].active) {
      currentYear = yearFilter[0].active
    }
  }

  return currentYear || 'default'
}

const isTopoReady = (topoData, config: MapConfig, runtimeFilters) => {
  let currentYear = getCurrentTopoYear(config, runtimeFilters)

  return topoData.year && (!currentYear || currentYear === topoData.year)
}

const CountyMap = () => {
  const {
    container,
    containerEl,
    data,
    runtimeFilters,
    runtimeLegend,
    setConfig,
    config,
    tooltipId,
    tooltipRef,
    legendMemo,
    legendSpecialClassLastMemo
  } = useContext(ConfigContext)

  // CREATE STATE LINES
  const geoStrokeColor = getGeoStrokeColor(config)
  const { geoClickHandler } = useGeoClickHandler()
  const { applyLegendToRow } = useApplyLegendToRow(legendMemo, legendSpecialClassLastMemo)
  const { applyTooltipsToGeo } = useApplyTooltipsToGeo()
  const [focus, setFocus] = useState({})
  const [topoData, setTopoData] = useState({})

  const pathGenerator = geoPath().projection(geoAlbersUsaTerritories())

  const { featureArray } = useMapLayers(config, setConfig, pathGenerator, tooltipId)

  useEffect(() => {
    if (containerEl) {
      if (containerEl.className.indexOf('loaded') === -1) {
        containerEl.className += ' loaded'
      }
    }
  })

  useEffect(() => {
    let currentYear = getCurrentTopoYear(config, runtimeFilters)

    if (currentYear !== topoData.year) {
      getTopoData(currentYear).then(response => {
        if (canvasRef.current) {
          const context = canvasRef.current.getContext('2d')
          context.clearRect(canvasRef.current.width, canvasRef.current.height)
        }
        setTopoData(response)
      })
    }
  }, [config.general.countyCensusYear, config.general.filterControlsCountyYear, JSON.stringify(runtimeFilters)])

  // Whenever the memo at the top is triggered and the map is called to re-render, call drawCanvas and update
  // The resize function so it includes the latest state variables
  useEffect(() => {
    if (isTopoReady(topoData, config, runtimeFilters)) {
      drawCanvas()
    }

    const onResize = () => {
      if (canvasRef.current && isTopoReady(topoData, config, runtimeFilters)) {
        drawCanvas()
      }
    }

    const debounceOnResize = debounce(onResize, 300)

    window.addEventListener('resize', debounceOnResize)

    return () => window.removeEventListener('resize', debounceOnResize)
  })

  const resetButton = useRef()
  const canvasRef = useRef()

  // If runtimeData is not defined, show loader
  if (!data || !isTopoReady(topoData, config, runtimeFilters)) {
    return (
      <div style={{ height: 300 }}>
        <Loading />
      </div>
    )
  }

  const runtimeKeys = Object.keys(data)
  const lineWidth = 1

  const onReset = () => {
    setConfig({
      ...config,
      mapPosition: { coordinates: [0, 30], zoom: 1 }
    })
    setFocus({})
  }

  const canvasClick = e => {
    const canvas = e.target
    const canvasBounds = canvas.getBoundingClientRect()
    const x = e.clientX - canvasBounds.left
    const y = e.clientY - canvasBounds.top
    const pointCoordinates = topoData.projection.invert([x, y])

    // Use d3 geoContains method to find the state geo data that the user clicked inside
    let clickedState
    for (let i = 0; i < topoData.states.length; i++) {
      if (geoContains(topoData.states[i], pointCoordinates)) {
        clickedState = topoData.states[i]
        break
      }
    }

    // If the user clicked outside of all states, no behavior
    if (clickedState) {
      setConfig({
        ...config,
        mapPosition: { coordinates: [0, 30], zoom: 3 }
      })

      // If a county within the state was also clicked and has data, call parent click handler
      if (topoData.countyIndecies[clickedState.id]) {
        let county
        for (
          let i = topoData.countyIndecies[clickedState.id][0];
          i <= topoData.countyIndecies[clickedState.id][1];
          i++
        ) {
          if (geoContains(topoData.mapData[i], pointCoordinates)) {
            county = topoData.mapData[i]
            break
          }
        }
        if (county && data[county.id]) {
          geoClickHandler(displayGeoName(county.id), data[county.id])
        }
      }

      let focusIndex = -1
      for (let i = 0; i < topoData.mapData.length; i++) {
        if (topoData.mapData[i].id === clickedState.id) {
          focusIndex = i
          break
        }
      }

      // Redraw with focus on state
      setFocus({ id: clickedState.id, index: focusIndex, center: geoCentroid(clickedState), feature: clickedState })
    }
    if (config.general.type === 'us-geocode') {
      const geoRadius = (config.visual.geoCodeCircleSize || 5) * (focus.id ? 2 : 1)
      let clickedGeo
      for (let i = 0; i < runtimeKeys.length; i++) {
        const pixelCoords = topoData.projection([
          data[runtimeKeys[i]][config.columns.longitude.name],
          data[runtimeKeys[i]][config.columns.latitude.name]
        ])
        if (pixelCoords && Math.sqrt(Math.pow(pixelCoords[0] - x, 2) + Math.pow(pixelCoords[1] - y, 2)) < geoRadius) {
          clickedGeo = data[runtimeKeys[i]]
          break
        }
      }

      if (clickedGeo) {
        geoClickHandler(displayGeoName(clickedGeo[config.columns.geo.name]), clickedGeo)
      }
    }
  }

  const canvasHover = e => {
    if (
      !tooltipRef.current ||
      config.tooltips.appearanceType !== 'hover' ||
      window.matchMedia('(any-hover: none)').matches
    )
      return

    const canvas = e.target
    const canvasBounds = canvas.getBoundingClientRect()
    const x = e.clientX - canvasBounds.left
    const y = e.clientY - canvasBounds.top
    const containerBounds = container?.getBoundingClientRect()
    const tooltipX = e.clientX - (containerBounds?.left || 0)
    const tooltipY = e.clientY - (containerBounds?.top || 0)
    let pointCoordinates = topoData.projection.invert([x, y])

    const currentTooltipIndex = parseInt(tooltipRef.current.getAttribute('data-index'))
    const geoRadius = (config.visual.geoCodeCircleSize || 5) * (focus.id ? 2 : 1)

    const context = canvas.getContext('2d')
    const path = geoPath(topoData.projection, context)

    // Handle standard county map hover
    if (config.general.type !== 'us-geocode') {
      //If no tooltip is shown, or if the current geo associated with the tooltip shown is no longer containing the mouse, then rerender the tooltip
      if (isNaN(currentTooltipIndex) || !geoContains(topoData.mapData[currentTooltipIndex], pointCoordinates)) {
        if (!isNaN(currentTooltipIndex) && applyLegendToRow(data[topoData.mapData[currentTooltipIndex].id], config)) {
          context.fillStyle = applyLegendToRow(data[topoData.mapData[currentTooltipIndex].id], config)[0]
          context.strokeStyle = geoStrokeColor
          context.lineWidth = lineWidth
          context.beginPath()
          path(topoData.mapData[currentTooltipIndex])
          context.fill()
          context.stroke()
        }

        let hoveredState
        let county
        let countyIndex
        // First find the state that is hovered
        for (let i = 0; i < topoData.states.length; i++) {
          if (geoContains(topoData.states[i], pointCoordinates)) {
            hoveredState = topoData.states[i].id
            break
          }
        }

        // If a state is hovered, and it is not an unfocused state, search only the counties within that state for the county hovered
        if (hoveredState && (!focus.id || focus.id === hoveredState) && topoData.countyIndecies[hoveredState]) {
          for (let i = topoData.countyIndecies[hoveredState][0]; i <= topoData.countyIndecies[hoveredState][1]; i++) {
            if (geoContains(topoData.mapData[i], pointCoordinates)) {
              county = topoData.mapData[i]
              countyIndex = i
              break
            }
          }
        }

        // If the hovered county is found, show the tooltip for that county, otherwise hide the tooltip
        if (county && data[county.id]) {
          if (applyLegendToRow(data[county.id], config)) {
            context.globalAlpha = 1
            context.fillStyle = applyLegendToRow(data[county.id], config)[0]
            context.strokeStyle = geoStrokeColor
            context.lineWidth = lineWidth
            context.beginPath()
            path(topoData.mapData[countyIndex])
            context.fill()
            context.stroke()
          }

          tooltipRef.current.style.display = 'block'
          tooltipRef.current.style.top = tooltipY + 'px'
          if (tooltipX > containerBounds.width / 2) {
            tooltipRef.current.style.transform = 'translate(-100%, -50%)'
            tooltipRef.current.style.left = tooltipX - 5 + 'px'
          } else {
            tooltipRef.current.style.transform = 'translate(0, -50%)'
            tooltipRef.current.style.left = tooltipX + 5 + 'px'
          }
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
        const pixelCoords = topoData.projection([
          data[runtimeKeys[currentTooltipIndex]][config.columns.longitude.name],
          data[runtimeKeys[currentTooltipIndex]][config.columns.latitude.name]
        ])
        if (pixelCoords && Math.sqrt(Math.pow(pixelCoords[0] - x, 2) + Math.pow(pixelCoords[1] - y, 2)) < geoRadius) {
          return // The user is still hovering over the previous geo point, don't redraw tooltip
        }
      }

      // todo: current item is a custom map layer
      // if(currentItem === customMapLayer) show layer.tooltip

      let hoveredGeo
      let hoveredGeoIndex
      for (let i = 0; i < runtimeKeys.length; i++) {
        const pixelCoords = topoData.projection([
          data[runtimeKeys[i]][config.columns.longitude.name],
          data[runtimeKeys[i]][config.columns.latitude.name]
        ])
        let includedShapes = ['circle', 'diamond', 'star', 'triangle', 'square'].includes(config.visual.cityStyle)
        if (
          includedShapes &&
          pixelCoords &&
          Math.sqrt(Math.pow(pixelCoords[0] - x, 2) + Math.pow(pixelCoords[1] - y, 2)) < geoRadius &&
          applyLegendToRow(data[runtimeKeys[i]], config)
        ) {
          hoveredGeo = data[runtimeKeys[i]]
          hoveredGeoIndex = i
          break
        }

        if (config.visual.cityStyle === 'pin' && pixelCoords) {
          const distance = Math.hypot(pixelCoords[0] - x, pixelCoords[1] - y)
          if (distance < 15 && applyLegendToRow(data[runtimeKeys[i]], config)) {
            hoveredGeo = data[runtimeKeys[i]]
            hoveredGeoIndex = i
            break
          }
        }
      }

      if (hoveredGeo) {
        tooltipRef.current.style.display = 'block'
        tooltipRef.current.style.top = tooltipY + 'px'
        if (tooltipX > containerBounds.width / 2) {
          tooltipRef.current.style.transform = 'translate(-100%, -50%)'
          tooltipRef.current.style.left = tooltipX - 5 + 'px'
        } else {
          tooltipRef.current.style.transform = 'translate(0, -50%)'
          tooltipRef.current.style.left = tooltipX + 5 + 'px'
        }
        tooltipRef.current.innerHTML = applyTooltipsToGeo(
          displayGeoName(hoveredGeo[config.columns.geo.name]),
          hoveredGeo
        )
        tooltipRef.current.setAttribute('data-index', hoveredGeoIndex)
      } else {
        tooltipRef.current.style.display = 'none'
        tooltipRef.current.setAttribute('data-index', null)
      }
    }

    if (focus.index !== -1) {
      context.strokeStyle = geoStrokeColor
      context.lineWidth = 1
      context.beginPath()
      path(topoData.mapData[focus.index])
      context.stroke()
    }
  }

  // Redraws canvas. Takes as parameters the fips id of a state to center on and the [lat,long] center of that state
  const drawCanvas = () => {
    if (canvasRef.current && runtimeLegend.items.length > 0) {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      const path = geoPath(topoData.projection, context)

      canvas.width = canvas.clientWidth
      canvas.height = canvas.width * 0.6

      topoData.projection.scale(canvas.width * 1.25).translate([canvas.width / 2, canvas.height / 2])

      // If we are rendering the map without a zoom on a state, hide the reset button
      if (!focus.id) {
        if (resetButton.current) resetButton.current.style.display = 'none'
      } else {
        if (resetButton.current) resetButton.current.style.display = 'block'
      }

      // Centers the projection on the parameter passed
      // Centers the projection on the parameter passed
      if (focus.feature) {
        const PADDING = 10
        // Fit the feature within the canvas dimensions with padding
        const fitExtent = [
          [PADDING, PADDING],
          [canvas.width - 0, canvas.height - PADDING]
        ]
        topoData.projection.fitExtent(fitExtent, focus.feature)
      }

      // Erases previous renderings before redrawing map
      context.clearRect(0, 0, canvas.width, canvas.height)

      // Enforces stroke style of the county lines
      context.strokeStyle = geoStrokeColor

      // Iterates through each state/county topo and renders it
      topoData.mapData.forEach(geo => {
        // If invalid geo item, don't render
        if (!geo.id) return
        // If the map is focused on one state, don't render counties that are not in that state
        if (focus.id && geo.id.length > 2 && geo.id.indexOf(focus.id) !== 0) return
        // If rendering a geocode map without a focus, don't render counties
        if (!focus.id && config.general.type === 'us-geocode' && geo.id.length > 2) return

        // Gets numeric data associated with the topo data for this state/county
        const geoData = data[geo.id]

        // Renders state/county
        const legendValues = geoData !== undefined ? applyLegendToRow(geoData, config) : false
        context.fillStyle = legendValues && config.general.type !== 'us-geocode' ? legendValues[0] : '#EEE'
        context.beginPath()
        path(geo)
        context.fill()
        context.stroke()
      })

      // If the focused state is found in the geo data, render it with a thicker outline
      if (focus.index !== -1) {
        context.strokeStyle = geoStrokeColor
        context.lineWidth = 2
        context.beginPath()
        path(topoData.mapData[focus.index])
        context.stroke()
      }

      // add in custom map layers
      if (featureArray.length > 0) {
        featureArray.map(layer => {
          context.beginPath()
          path(layer)
          context.fillStyle = layer.properties.fill
          context.strokeStyle = geoStrokeColor
          context.lineWidth = layer.properties['stroke-width']
          context.fill()
          context.stroke()
        })
      }

      if (config.general.type === 'us-geocode') {
        context.strokeStyle = geoStrokeColor
        const geoRadius = (config.visual.geoCodeCircleSize || 5) * (focus.id ? 2 : 1)
        const { additionalCityStyles } = config.visual || []
        const cityStyles = Object.values(data)
          .filter(d => additionalCityStyles.some(style => String(d[style.column]) === String(style.value)))
          .map(d => {
            const conditionsMatched = additionalCityStyles.find(
              style => String(d[style.column]) === String(style.value)
            )
            return { ...conditionsMatched, ...d }
          })

        let cityPixelCoords = []
        cityStyles.forEach(city => {
          cityPixelCoords = topoData.projection([city[config.columns.longitude.name], city[config.columns.latitude.name]])

          if (cityPixelCoords) {
            const legendValues = applyLegendToRow(data[city?.value], config)
            if (legendValues) {
              const shapeType = city?.shape?.toLowerCase()
              const shapeProperties = createShapeProperties(shapeType, cityPixelCoords, legendValues, config, geoRadius)
              if (shapeProperties) {
                drawShape(shapeProperties, context, config, lineWidth)
              }
            }
          }
        })

        runtimeKeys.forEach(key => {
          const citiesList = new Set(cityStyles.map(item => item.value))

          const pixelCoords = topoData.projection([
            data[key][config.columns.longitude.name],
            data[key][config.columns.latitude.name]
          ])
          if (pixelCoords && !citiesList.has(key)) {
            const legendValues = data[key] !== undefined ? applyLegendToRow(data[key], config) : false
            if (legendValues) {
              const shapeType = config.visual.cityStyle.toLowerCase()
              const shapeProperties = createShapeProperties(shapeType, pixelCoords, legendValues, config, geoRadius)
              if (shapeProperties) {
                drawShape(shapeProperties, context, config, lineWidth)
              }
            }
          }
        })
      }
    }
  }

  return (
    <ErrorBoundary component='CountyMap'>
      <canvas
        ref={canvasRef}
        aria-label={handleMapAriaLabels(config)}
        onMouseMove={canvasHover}
        onMouseOut={() => {
          tooltipRef.current.style.display = 'none'
          tooltipRef.current.setAttribute('data-index', null)
        }}
        onClick={canvasClick}
        className='county-map-canvas'
      ></canvas>

      <button className={`btn btn--reset btn-primary`} onClick={onReset} ref={resetButton} tabIndex={0}>
        Reset Zoom
      </button>
    </ErrorBoundary>
  )
}

export default CountyMap
