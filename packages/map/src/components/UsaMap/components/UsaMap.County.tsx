import { useEffect, useState, useRef, useContext } from 'react'
import { geoCentroid, geoPath, geoContains } from 'd3-geo'
import { zoom as d3Zoom, zoomIdentity as d3ZoomIdentity } from 'd3-zoom'
import { select as d3Select } from 'd3-selection'
import { feature, merge } from 'topojson-client'
import { geoAlbersUsaTerritories } from 'd3-composite-projections'
import debounce from 'lodash.debounce'
import Loading from '@cdc/core/components/Loading'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import useMapLayers from '../../../hooks/useMapLayers'
import ConfigContext from '../../../context'
import { useLegendMemoContext } from '../../../context/LegendMemoContext'
import { drawShape, createShapeProperties } from '../helpers/shapes'
import { getGeoStrokeColor, handleMapAriaLabels, displayGeoName, isLegendItemDisabled } from '../../../helpers'
import { supportedStatesFipsCodes } from '../../../data/supported-geos'
import useGeoClickHandler from '../../../hooks/useGeoClickHandler'
import { applyLegendToRow } from '../../../helpers/applyLegendToRow'
import useApplyTooltipsToGeo from '../../../hooks/useApplyTooltipsToGeo'
import { MapConfig } from '../../../types/MapConfig'
import { DEFAULT_MAP_BACKGROUND, DISABLED_MAP_COLOR } from '../../../helpers/constants'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'
import { getVizTitle, getVizSubType } from '@cdc/core/helpers/metrics/utils'
import { createCanvasPattern, PatternType } from '../../../helpers/createCanvasPattern'
import { getPatternForRow } from '../../../helpers/getPatternForRow'

const getCountyTopoURL = year => {
  return `https://www.cdc.gov/TemplatePackage/contrib/data/county-topography/cb_${year}_us_county_20m.json`
}

const sortById = (a, b) => {
  if (a.id < b.id) return -1
  if (b.id < a.id) return 1
  return 0
}

const getTopoData = (year, showHSABoundaries) => {
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
        hsas: undefined,
        mapData: undefined,
        countyIndecies: undefined,
        projection: undefined
      }

      topoData.year = year || 'default'
      topoData.counties = feature(response, response.objects.counties).features
      topoData.states = feature(response, response.objects.states).features
      if (showHSABoundaries) {
        const mappingResponse = await import(
          /* webpackChunkName: "hsa_fips_mapping" */ './../data/hsa_fips_mapping.json'
        )
        const hsaMapping = mappingResponse.default.reduce((acc, curr) => {
          acc[curr.county_fips] = curr.hsa_no
          return acc
        }, {})
        const countyGeometries = response.objects.counties.geometries
        const geometriesByGroup = countyGeometries.reduce((acc, geometry) => {
          const groupId = hsaMapping[geometry.id]
          if (!groupId) return acc

          if (!acc[groupId]) acc[groupId] = []
          acc[groupId].push(geometry)
          return acc
        }, {} as Record<string, any[]>)
        topoData.hsas = Object.entries(geometriesByGroup).map(([groupId, geometries]) => ({
          groupId,
          feature: merge(response as any, geometries)
        }))
      }
      topoData.states.sort(sortById)
      topoData.counties.sort(sortById)
      topoData.mapData = topoData.states.concat(topoData.counties).filter(geo => geo.id !== '51620') //Not sure why, but Franklin City, VA is very broken and messes up the rendering
      topoData.countyIndecies = {}
      topoData.states.forEach(state => {
        let minIndex = topoData.mapData.length - 1
        let maxIndex = 0

        for (let i = 0; i < topoData.mapData.length; i++) {
          if (topoData.mapData[i].id?.length > 2 && topoData.mapData[i].id?.indexOf(state.id) === 0) {
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
    runtimeData,
    runtimeFilters,
    runtimeLegend,
    setConfig,
    setFilteredStateCode,
    config,
    tooltipId,
    tooltipRef,
    interactionLabel
  } = useContext(ConfigContext)

  const { legendMemo, legendSpecialClassLastMemo } = useLegendMemoContext()

  // CREATE STATE LINES
  const geoStrokeColor = getGeoStrokeColor(config)
  const { geoClickHandler } = useGeoClickHandler()
  const { applyTooltipsToGeo } = useApplyTooltipsToGeo()
  const [focus, setFocus] = useState({})
  const [topoData, setTopoData] = useState({})
  const [hasMoved, setHasMoved] = useState(false)

  const pathGenerator = geoPath().projection(geoAlbersUsaTerritories())

  const { featureArray } = useMapLayers(config, setConfig, pathGenerator, tooltipId)

  useEffect(() => {
    if (containerEl) {
      if (containerEl.className.indexOf('loaded') === -1) {
        containerEl.className += ' loaded'
      }
    }
  })

  const getAndSetTopoData = currentYear => {
    getTopoData(currentYear, config.general.showHSABoundaries).then(response => {
      if (canvasRef.current) {
        const context = canvasRef.current.getContext('2d') as CanvasRenderingContext2D
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      }
      setTopoData(response)
    })
  }

  useEffect(() => {
    const currentYear = getCurrentTopoYear(config, runtimeFilters)

    if (currentYear !== topoData.year) {
      getAndSetTopoData(currentYear)
    }
  }, [config.general.countyCensusYear, config.general.filterControlsCountyYear, JSON.stringify(runtimeFilters)])

  const prevShowHSABoundariesRef = useRef(config.general.showHSABoundaries)
  useEffect(() => {
    if (prevShowHSABoundariesRef.current === config.general.showHSABoundaries) return
    const currentYear = getCurrentTopoYear(config, runtimeFilters)
    getAndSetTopoData(currentYear)
    prevShowHSABoundariesRef.current = config.general.showHSABoundaries
  }, [config.general.showHSABoundaries])

  // Whenever the memo at the top is triggered and the map is called to re-render, call drawCanvas and update
  // The resize function so it includes the latest state variables
  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current && isTopoReady(topoData, config, runtimeFilters)) {
        drawCanvas()
      }
    }

    const debounceOnResize = debounce(onResize, 300)

    window.addEventListener('resize', debounceOnResize)

    return () => window.removeEventListener('resize', debounceOnResize)
  })

  const canvasRef = useRef()
  const patternCacheRef = useRef<Map<string, CanvasPattern | null>>(new Map())
  const zoomTransformRef = useRef(d3ZoomIdentity)
  const zoomBehaviorRef = useRef()
  const zoomFrameRef = useRef<number | null>(null)
  const geoPathCacheRef = useRef<Map<string, Path2D>>(new Map())

  // Clear pattern cache when pattern configuration changes
  useEffect(() => {
    patternCacheRef.current.clear()
  }, [config.map?.patterns])

  const runtimeKeys = runtimeData ? Object.keys(runtimeData) : []
  const lineWidth = 1

  // Pre-compute Path2D objects for all geo features — avoids expensive geoPath projection on every zoom frame
  const buildPathCache = () => {
    const pathGen = geoPath(topoData.projection)
    const cache = new Map<string, Path2D>()
    topoData.mapData.forEach(geo => {
      if (!geo.id) return
      const d = pathGen(geo)
      if (d) cache.set(geo.id, new Path2D(d))
    })
    topoData.states.forEach(state => {
      if (!state.id) return
      const d = pathGen(state)
      if (d) cache.set('state_border_' + state.id, new Path2D(d))
    })
    topoData.hsas?.forEach(hsa => {
      if (!hsa?.groupId || !hsa?.feature) return
      const d = pathGen(hsa.feature as any)
      if (d) cache.set('hsa_border_' + hsa.groupId, new Path2D(d))
    })
    geoPathCacheRef.current = cache
  }

  const resetZoomTransform = () => {
    zoomTransformRef.current = d3ZoomIdentity
    if (canvasRef.current && zoomBehaviorRef.current) {
      d3Select(canvasRef.current).call(zoomBehaviorRef.current.transform, d3ZoomIdentity)
    }
  }

  const getCanvasPoints = e => {
    const canvas = e.target
    const canvasBounds = canvas.getBoundingClientRect()
    const x = e.clientX - canvasBounds.left
    const y = e.clientY - canvasBounds.top
    const [mapX, mapY] = zoomTransformRef.current.invert([x, y])
    return { canvas, mapX, mapY }
  }

  const applyZoomTransform = context => {
    const { x, y, k } = zoomTransformRef.current || d3ZoomIdentity
    context.setTransform(k, 0, 0, k, x, y)
  }

  const getZoomScale = () => zoomTransformRef.current?.k || 1

  const paintCountyGeo = (context, path2d: Path2D, geoData, canvasWidth: number, strokeWidth?: number) => {
    const legendValues =
      geoData !== undefined
        ? applyLegendToRow(geoData, config, runtimeLegend, legendMemo, legendSpecialClassLastMemo)
        : false

    const baseFill =
      legendValues && config.general.type !== 'us-geocode'
        ? legendValues[0] === '#000000'
          ? DEFAULT_MAP_BACKGROUND
          : legendValues[0]
        : DEFAULT_MAP_BACKGROUND

    context.fillStyle = baseFill
    context.fill(path2d)

    if (config.map?.patterns?.length > 0 && geoData) {
      const patternInfo = getPatternForRow(geoData, config)

      if (patternInfo) {
        const { pattern, size, color } = patternInfo
        const patternColor = color || '#000000'
        const patternSize = size || 'medium'
        const patternStrokeWidth = canvasWidth < 200 ? 1.75 : canvasWidth < 375 ? 1.25 : 0.75
        const cacheKey = `${pattern}-${patternColor}-${patternSize}-${patternStrokeWidth}`

        let canvasPattern = patternCacheRef.current.get(cacheKey)
        if (!canvasPattern) {
          canvasPattern = createCanvasPattern(
            pattern as PatternType,
            patternColor,
            patternSize as 'small' | 'medium' | 'large',
            patternStrokeWidth
          )
          if (canvasPattern) {
            patternCacheRef.current.set(cacheKey, canvasPattern)
          }
        }

        if (canvasPattern) {
          context.fillStyle = canvasPattern
          context.fill(path2d)
        }
      }
    }

    context.strokeStyle = geoStrokeColor
    context.lineWidth = strokeWidth ?? lineWidth
    context.stroke(path2d)

    return legendValues
  }

  const onReset = () => {
    publishAnalyticsEvent({
      vizType: config.type,
      vizSubType: getVizSubType(config),
      eventType: 'map_reset_zoom_level',
      eventAction: 'click',
      eventLabel: interactionLabel,
      vizTitle: getVizTitle(config)
    })
    setConfig({
      ...config,
      mapPosition: { coordinates: [0, 30], zoom: 1 }
    })
    setFilteredStateCode('')
    setFocus({})
    resetZoomTransform()
  }

  const handleZoomIn = () => {
    if (!canvasRef.current || !zoomBehaviorRef.current) return
    d3Select(canvasRef.current).call(zoomBehaviorRef.current.scaleBy, 1.2)
  }

  const handleZoomOut = () => {
    if (!canvasRef.current || !zoomBehaviorRef.current) return
    d3Select(canvasRef.current).call(zoomBehaviorRef.current.scaleBy, 1 / 1.2)
  }

  const handleZoomReset = () => {
    const container = canvasRef.current?.closest('.geography-container') as HTMLElement | null
    setHasMoved(false)
    onReset()
    container?.focus()
  }

  const PAN_STEP = 20

  useEffect(() => {
    if (!config.general.allowMapZoom) return

    const container = canvasRef.current?.closest('.geography-container') as HTMLElement | null
    if (!container) return

    const handleKeyboardPan = (e: KeyboardEvent) => {
      if (!canvasRef.current || !zoomBehaviorRef.current) return

      const key = e.key.toLowerCase()
      let dx = 0
      let dy = 0

      switch (key) {
        case 'arrowleft':
        case 'a':
          dx = PAN_STEP
          break
        case 'arrowright':
        case 'd':
          dx = -PAN_STEP
          break
        case 'arrowup':
        case 'w':
          dy = PAN_STEP
          break
        case 'arrowdown':
        case 's':
          dy = -PAN_STEP
          break
        default:
          return
      }

      e.preventDefault()
      d3Select(canvasRef.current).call(zoomBehaviorRef.current.translateBy, dx, dy)
    }

    container.addEventListener('keydown', handleKeyboardPan)
    return () => container.removeEventListener('keydown', handleKeyboardPan)
  }, [config.general.allowMapZoom, topoData, runtimeLegend, focus])

  const scheduleDraw = () => {
    if (zoomFrameRef.current) return
    zoomFrameRef.current = window.requestAnimationFrame(() => {
      zoomFrameRef.current = null
      renderFrame()
    })
  }

  const canvasClick = e => {
    const { mapX, mapY } = getCanvasPoints(e)
    const pointCoordinates = topoData.projection.invert([mapX, mapY])

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
      // If a county within the state was clicked and has data, call parent click handler
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
        if (county && runtimeData[county.id]) {
          geoClickHandler(displayGeoName(county.id), runtimeData[county.id])
        }
      }

      // `us-geocode` maps still need state drilldown even when manual zoom controls are disabled.
      if (config.general.allowMapZoom || config.general.type === 'us-geocode') {
        setConfig({
          ...config,
          mapPosition: { coordinates: [0, 30], zoom: 3 }
        })
        setFilteredStateCode(clickedState.id)

        let focusIndex = -1
        for (let i = 0; i < topoData.mapData.length; i++) {
          if (topoData.mapData[i].id === clickedState.id) {
            focusIndex = i
            break
          }
        }

        setFocus({ id: clickedState.id, index: focusIndex, center: geoCentroid(clickedState), feature: clickedState })
        publishAnalyticsEvent({
          vizType: config.type,
          vizSubType: getVizSubType(config),
          eventType: `zoom_in`,
          eventAction: 'click',
          eventLabel: interactionLabel,
          vizTitle: getVizTitle(config),
          specifics: `zoom_level: 3, location: ${clickedState.properties.name}`
        })
      }
    }
    if (config.general.type === 'us-geocode') {
      const geoRadius = (config.visual.geoCodeCircleSize || 5) * (focus.id ? 2 : 1)
      let clickedGeo
      for (let i = 0; i < runtimeKeys.length; i++) {
        const pixelCoords = topoData.projection([
          runtimeData[runtimeKeys[i]][config.columns.longitude.name],
          runtimeData[runtimeKeys[i]][config.columns.latitude.name]
        ])
        if (
          pixelCoords &&
          Math.sqrt(Math.pow(pixelCoords[0] - mapX, 2) + Math.pow(pixelCoords[1] - mapY, 2)) < geoRadius &&
          !isLegendItemDisabled(
            runtimeData[runtimeKeys[i]],
            runtimeLegend,
            legendMemo,
            legendSpecialClassLastMemo,
            config
          )
        ) {
          clickedGeo = runtimeData[runtimeKeys[i]]
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

    const { canvas, mapX, mapY } = getCanvasPoints(e)
    const containerBounds = container?.getBoundingClientRect()
    const tooltipX = e.clientX - (containerBounds?.left || 0)
    const tooltipY = e.clientY - (containerBounds?.top || 0)
    let pointCoordinates = topoData.projection.invert([mapX, mapY])

    const currentTooltipIndex = parseInt(tooltipRef.current.getAttribute('data-index'))
    const geoRadius = (config.visual.geoCodeCircleSize || 5) * (focus.id ? 2 : 1)
    const zoomScale = getZoomScale()
    const strokeScale = zoomScale ? 1 / zoomScale : 1

    const context = canvas.getContext('2d')
    context.save()
    applyZoomTransform(context)

    // Handle standard county map hover
    if (config.general.type !== 'us-geocode') {
      //If no tooltip is shown, or if the current geo associated with the tooltip shown is no longer containing the mouse, then rerender the tooltip
      if (isNaN(currentTooltipIndex) || !geoContains(topoData.mapData[currentTooltipIndex], pointCoordinates)) {
        if (
          !isNaN(currentTooltipIndex) &&
          applyLegendToRow(
            runtimeData[topoData.mapData[currentTooltipIndex].id],
            config,
            runtimeLegend,
            legendMemo,
            legendSpecialClassLastMemo
          )
        ) {
          const prevPath2d = geoPathCacheRef.current.get(topoData.mapData[currentTooltipIndex].id)
          if (prevPath2d) {
            // This causes HSA boundaries to disappear on hover.
            // paintCountyGeo(
            //   context,
            //   prevPath2d,
            //   runtimeData[topoData.mapData[currentTooltipIndex].id],
            //   canvas.width,
            //   lineWidth * strokeScale
            // )
          }
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
        if (county && runtimeData[county.id]) {
          const legendValues = applyLegendToRow(
            runtimeData[county.id],
            config,
            runtimeLegend,
            legendMemo,
            legendSpecialClassLastMemo
          )
          if (legendValues) {
            if (legendValues[0] === '#000000') {
              context.restore()
              return
            }
            context.globalAlpha = 1
            const hoverPath2d = geoPathCacheRef.current.get(county.id)
            if (hoverPath2d) {
              // This causes HSA boundaries to disappear on hover.
              //paintCountyGeo(context, hoverPath2d, runtimeData[county.id], canvas.width, lineWidth * strokeScale)
            }
          }

          // Track hover analytics event if this is a new location
          if (isNaN(currentTooltipIndex) || currentTooltipIndex !== countyIndex) {
            const countyName = displayGeoName(county.id).replace(/[^a-zA-Z0-9]/g, ' ')
            const stateCode = county.id.slice(0, 2)
            const stateName = supportedStatesFipsCodes[stateCode]?.replace(/[^a-zA-Z0-9]/g, '_') || 'unknown'
            const locationName = `${countyName}, ${stateName}`
            publishAnalyticsEvent({
              vizType: config.type,
              vizSubType: getVizSubType(config),
              eventType: `map_hover`,
              eventAction: 'hover',
              eventLabel: interactionLabel,
              vizTitle: getVizTitle(config),
              location: displayGeoName(county.id),
              specifics: `location: ${locationName?.toLowerCase()}`
            })
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
          tooltipRef.current.innerHTML = applyTooltipsToGeo(displayGeoName(county.id), runtimeData[county.id])
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
          runtimeData[runtimeKeys[currentTooltipIndex]][config.columns.longitude.name],
          runtimeData[runtimeKeys[currentTooltipIndex]][config.columns.latitude.name]
        ])
        if (
          pixelCoords &&
          Math.sqrt(Math.pow(pixelCoords[0] - mapX, 2) + Math.pow(pixelCoords[1] - mapY, 2)) < geoRadius
        ) {
          context.restore()
          return // The user is still hovering over the previous geo point, don't redraw tooltip
        }
      }

      // todo: current item is a custom map layer
      // if(currentItem === customMapLayer) show layer.tooltip

      let hoveredGeo
      let hoveredGeoIndex
      for (let i = 0; i < runtimeKeys.length; i++) {
        const pixelCoords = topoData.projection([
          runtimeData[runtimeKeys[i]][config.columns.longitude.name],
          runtimeData[runtimeKeys[i]][config.columns.latitude.name]
        ])
        let includedShapes = ['circle', 'diamond', 'star', 'triangle', 'square'].includes(config.visual.cityStyle)
        if (
          includedShapes &&
          pixelCoords &&
          Math.sqrt(Math.pow(pixelCoords[0] - mapX, 2) + Math.pow(pixelCoords[1] - mapY, 2)) < geoRadius &&
          applyLegendToRow(
            runtimeData[runtimeKeys[i]],
            config,
            runtimeLegend,
            legendMemo,
            legendSpecialClassLastMemo
          ) &&
          !isLegendItemDisabled(
            runtimeData[runtimeKeys[i]],
            runtimeLegend,
            legendMemo,
            legendSpecialClassLastMemo,
            config
          )
        ) {
          hoveredGeo = runtimeData[runtimeKeys[i]]
          hoveredGeoIndex = i
          break
        }

        if (config.visual.cityStyle === 'pin' && pixelCoords) {
          const distance = Math.hypot(pixelCoords[0] - mapX, pixelCoords[1] - mapY)
          if (
            distance < 15 &&
            applyLegendToRow(
              runtimeData[runtimeKeys[i]],
              config,
              runtimeLegend,
              legendMemo,
              legendSpecialClassLastMemo
            ) &&
            !isLegendItemDisabled(
              runtimeData[runtimeKeys[i]],
              runtimeLegend,
              legendMemo,
              legendSpecialClassLastMemo,
              config
            )
          ) {
            hoveredGeo = runtimeData[runtimeKeys[i]]
            hoveredGeoIndex = i
            break
          }
        }
      }

      if (hoveredGeo) {
        // Track hover analytics event if this is a new location
        if (isNaN(currentTooltipIndex) || currentTooltipIndex !== hoveredGeoIndex) {
          const locationName = displayGeoName(hoveredGeo[config.columns.geo.name]).replace(/[^a-zA-Z0-9]/g, '_')
          publishAnalyticsEvent({
            vizType: config.type,
            vizSubType: getVizSubType(config),
            eventType: `map_hover`,
            eventAction: 'hover',
            eventLabel: interactionLabel,
            vizTitle: getVizTitle(config),
            location: displayGeoName(hoveredGeo[config.columns.geo.name]),
            specifics: `location: ${locationName?.toLowerCase()}`
          })
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
      const focusPath2d = geoPathCacheRef.current.get(topoData.mapData[focus.index]?.id)
      if (focusPath2d) {
        context.strokeStyle = geoStrokeColor
        context.lineWidth = lineWidth * strokeScale
        context.stroke(focusPath2d)
      }
    }
    context.restore()
  }

  // Sets up canvas dimensions, projection, and Path2D cache, then renders.
  // Called on data change, resize, focus change — NOT during zoom/pan.
  const drawCanvas = () => {
    if (canvasRef.current && runtimeLegend.items.length > 0) {
      const canvas = canvasRef.current

      canvas.width = canvas.clientWidth
      canvas.height = canvas.width * 0.6

      topoData.projection.scale(canvas.width * 1.25).translate([canvas.width / 2, canvas.height / 2])

      // Centers the projection on the focused state
      if (focus.feature) {
        const PADDING = 10
        const fitExtent = [
          [PADDING, PADDING],
          [canvas.width - 0, canvas.height - PADDING]
        ]
        topoData.projection.fitExtent(fitExtent, focus.feature)
      }

      // Pre-compute Path2D objects with the current projection
      buildPathCache()

      // Render the map
      renderFrame()
    }
  }

  // Fast render using cached Path2D objects — called during zoom/pan for smooth performance.
  // Skips canvas resize and projection setup; only applies the current zoom transform and redraws.
  const renderFrame = () => {
    if (!canvasRef.current || !runtimeLegend.items.length) return

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const cache = geoPathCacheRef.current

    // Clear canvas
    context.setTransform(1, 0, 0, 1, 0, 0)
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.save()
    applyZoomTransform(context)
    const zoomScale = getZoomScale()
    const strokeScale = zoomScale ? 1 / zoomScale : 1
    const countyStrokeWidth = lineWidth * 0.8 * strokeScale
    const hsaStrokeWidth = lineWidth * 1.4 * strokeScale

    // Enforces stroke style of the county lines
    context.strokeStyle = geoStrokeColor
    context.lineWidth = countyStrokeWidth

    // Iterates through each state/county topo and renders it using cached Path2D
    topoData.mapData.forEach(geo => {
      if (!geo.id) return
      if (focus.id && geo.id.length > 2 && geo.id.indexOf(focus.id) !== 0) return
      if (!focus.id && config.general.type === 'us-geocode' && geo.id.length > 2) return

      const path2d = cache.get(geo.id)
      if (!path2d) return

      const geoData = runtimeData[geo.id]
      paintCountyGeo(context, path2d, geoData, canvas.width, countyStrokeWidth)
    })

    // State borders
    context.strokeStyle = '#1c1d1f'
    context.lineWidth = lineWidth * 1.25 * strokeScale
    topoData.states.forEach(state => {
      if (!state.id) return
      const path2d = cache.get('state_border_' + state.id)
      if (path2d) {
        context.stroke(path2d)
      }
    })

    if (config.general.showHSABoundaries) {
      context.lineWidth = hsaStrokeWidth
      topoData.hsas?.forEach(hsa => {
        if (!hsa?.groupId) return
        const cacheKey = 'hsa_border_' + hsa.groupId
        const path2d = cache.get(cacheKey)
        if (path2d) {
          context.stroke(path2d)
        }
      })
    }

    // If the focused state is found in the geo data, render it with a thicker outline
    if (focus.index !== -1) {
      const focusGeoId = topoData.mapData[focus.index]?.id
      const path2d = focusGeoId && cache.get(focusGeoId)
      if (path2d) {
        context.strokeStyle = geoStrokeColor
        context.lineWidth = lineWidth * 2 * strokeScale
        context.stroke(path2d)
      }
    }

    // Custom map layers (not cached — these are external features)
    if (featureArray.length > 0) {
      const layerPath = geoPath(topoData.projection, context)
      featureArray.map(layer => {
        context.beginPath()
        layerPath(layer)
        context.fillStyle = layer.properties.fill
        context.strokeStyle = geoStrokeColor
        context.lineWidth = layer.properties['stroke-width']
        context.fill()
        context.stroke()
      })
    }

    if (config.general.type === 'us-geocode') {
      context.strokeStyle = geoStrokeColor
      context.lineWidth = lineWidth * strokeScale
      const geoRadius = (config.visual.geoCodeCircleSize || 5) * (focus.id ? 2 : 1)
      const { additionalCityStyles } = config.visual || []
      const cityStyles = Object.values(runtimeData)
        .filter(d => additionalCityStyles.some(style => String(d[style.column]) === String(style.value)))
        .map(d => {
          const conditionsMatched = additionalCityStyles.find(style => String(d[style.column]) === String(style.value))
          return { ...conditionsMatched, ...d }
        })

      let cityPixelCoords = []
      cityStyles.forEach(city => {
        cityPixelCoords = topoData.projection([city[config.columns.longitude.name], city[config.columns.latitude.name]])

        if (cityPixelCoords) {
          const legendValues = applyLegendToRow(
            runtimeData[city?.value],
            config,
            runtimeLegend,
            legendMemo,
            legendSpecialClassLastMemo
          )
          if (legendValues) {
            if (legendValues?.[0] === '#000000') return
            const shapeType = city?.shape?.toLowerCase()
            const shapeProperties = createShapeProperties(shapeType, cityPixelCoords, legendValues, config, geoRadius)
            if (shapeProperties) {
              drawShape(shapeProperties, context, config, lineWidth * strokeScale)
            }
          }
        }
      })

      runtimeKeys.forEach(key => {
        const citiesList = new Set(cityStyles.map(item => item.value))

        const pixelCoords = topoData.projection([
          runtimeData[key][config.columns.longitude.name],
          runtimeData[key][config.columns.latitude.name]
        ])
        if (pixelCoords && !citiesList.has(key)) {
          const legendValues =
            runtimeData[key] !== undefined
              ? applyLegendToRow(runtimeData[key], config, runtimeLegend, legendMemo, legendSpecialClassLastMemo)
              : false
          if (legendValues) {
            if (legendValues?.[0] === '#000000' || legendValues?.[0] === DISABLED_MAP_COLOR) return
            const shapeType = config.visual.cityStyle.toLowerCase()
            const shapeProperties = createShapeProperties(shapeType, pixelCoords, legendValues, config, geoRadius)
            if (shapeProperties) {
              drawShape(shapeProperties, context, config, lineWidth * strokeScale)
            }
          }
        }
      })
    }
    context.restore()
  }

  useEffect(() => {
    if (!config.general.allowMapZoom) {
      setFilteredStateCode('')
      setFocus({})
      setHasMoved(false)
      resetZoomTransform()
    }
  }, [config.general.allowMapZoom])

  useEffect(() => {
    if (!canvasRef.current || !config.general.allowMapZoom) {
      return
    }

    const COUNTY_MAX_ZOOM = 10
    const canvasSelection = d3Select(canvasRef.current)
    const zoomBehavior = d3Zoom()
      .filter(d3Event => (d3Event ? !d3Event.ctrlKey && !d3Event.button : false))
      .scaleExtent([1, COUNTY_MAX_ZOOM])
      .on('zoom', d3Event => {
        zoomTransformRef.current = d3Event.transform
        const { x, y, k } = d3Event.transform
        const isAtIdentity = x === 0 && y === 0 && k === 1
        setHasMoved(!isAtIdentity)
        scheduleDraw()
      })

    zoomBehaviorRef.current = zoomBehavior
    canvasSelection.call(zoomBehavior)

    return () => {
      if (zoomFrameRef.current) {
        window.cancelAnimationFrame(zoomFrameRef.current)
        zoomFrameRef.current = null
      }
      canvasSelection.on('.zoom', null)
    }
  }, [config.general.allowMapZoom, topoData, runtimeLegend, focus])

  useEffect(() => {
    resetZoomTransform()
  }, [focus?.id])

  const isLoading = !runtimeData || !isTopoReady(topoData, config, runtimeFilters) || !canvasRef.current

  useEffect(() => {
    if (isLoading) {
      return
    }

    drawCanvas()
  }, [isLoading, topoData, focus, runtimeLegend, runtimeData, featureArray, config])

  const showManualZoomControls = config.general.allowMapZoom
  const showResetControl = (hasMoved || focus.id) && (showManualZoomControls || config.general.type === 'us-geocode')
  const showTopRightResetControl = showResetControl && config.general.type === 'us-geocode'
  const showBottomLeftResetControl = showResetControl && config.general.type !== 'us-geocode'

  return (
    <ErrorBoundary component='CountyMap'>
      {isLoading && (
        <div style={{ height: 300 }}>
          <Loading />
        </div>
      )}
      <canvas
        ref={canvasRef}
        aria-label={handleMapAriaLabels(config)}
        onMouseMove={canvasHover}
        onMouseOut={() => {
          tooltipRef.current.style.display = 'none'
          tooltipRef.current.setAttribute('data-index', null)
        }}
        onClick={canvasClick}
        className={'county-map-canvas' + (isLoading ? ' d-none' : '')}
        style={config.general.allowMapZoom ? undefined : { cursor: 'default' }}
      ></canvas>

      {showManualZoomControls && (
        <div className={'zoom-controls' + (isLoading ? ' d-none' : '')} data-html2canvas-ignore='true'>
          <button onClick={handleZoomIn} aria-label='Zoom In'>
            <svg viewBox='0 0 24 24' stroke='currentColor' strokeWidth='3'>
              <line x1='12' y1='5' x2='12' y2='19' />
              <line x1='5' y1='12' x2='19' y2='12' />
            </svg>
          </button>
          <button onClick={handleZoomOut} aria-label='Zoom Out'>
            <svg viewBox='0 0 24 24' stroke='currentColor' strokeWidth='3'>
              <line x1='5' y1='12' x2='19' y2='12' />
            </svg>
          </button>
          {showBottomLeftResetControl && (
            <button onClick={handleZoomReset} className='reset' aria-label='Reset Zoom'>
              Reset Zoom
            </button>
          )}
        </div>
      )}
      {showTopRightResetControl && (
        <div className='zoom-controls zoom-controls--top-right' data-html2canvas-ignore='true'>
          <button onClick={handleZoomReset} className='reset' aria-label='Reset Zoom'>
            Reset Zoom
          </button>
        </div>
      )}
    </ErrorBoundary>
  )
}

export default CountyMap
