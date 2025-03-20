// Vendor
import React, { useState, useEffect, useRef, useCallback, useId } from 'react'
import 'whatwg-fetch'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import Papa from 'papaparse'
import parse from 'html-react-parser'
import 'react-tooltip/dist/react-tooltip.css'

// Core Components
import DataTable from '@cdc/core/components/DataTable'
import Filters, { useFilters } from '@cdc/core/components/Filters'
import Layout from '@cdc/core/components/Layout'
import MediaControls from '@cdc/core/components/MediaControls'
import SkipTo from '@cdc/core/components/elements/SkipTo'
import Title from '@cdc/core/components/ui/Title'
import Waiting from '@cdc/core/components/Waiting'

// types
import { type Coordinate, type MapConfig } from './types/MapConfig'

// Data
import { countryCoordinates } from './data/country-coordinates'
import { supportedStatesFipsCodes } from './data/supported-geos'
import colorPalettes from '@cdc/core/data/colorPalettes'
import initialState from './data/initial-state'

// Assets
import ExternalIcon from './images/external-link.svg'

// Sass
import './scss/main.scss'
import './scss/btn.scss'

// Core Helpers
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import isDomainExternal from '@cdc/core/helpers/isDomainExternal'
import numberFromString from '@cdc/core/helpers/numberFromString'
import { DataTransform } from '@cdc/core/helpers/DataTransform'
import { getQueryStringFilterValue } from '@cdc/core/helpers/queryStringUtils'
import { isSolrCsv, isSolrJson } from '@cdc/core/helpers/isSolr'
import { publish } from '@cdc/core/helpers/events'

// Map Helpers
import {
  addUIDs,
  closeModal,
  displayGeoName,
  formatLegendLocation,
  generateColorsArray,
  generateRuntimeLegend,
  generateRuntimeLegendHash,
  getUniqueValues,
  handleMapTabbing,
  hashObj,
  navigationHandler,
  validateFipsCodeLength
} from './helpers'

// Child Components
import Annotation from './components/Annotation'
import ConfigContext from './context'
import EditorPanel from './components/EditorPanel'
import Error from './components/EditorPanel/components/Error'
import Legend from './components/Legend'
import Modal from './components/Modal'
import NavigationMenu from './components/NavigationMenu'
import UsaMap from './components/UsaMap'
import WorldMap from './components/WorldMap'
import GoogleMap from './components/GoogleMap'

// hooks
import useTooltip from './hooks/useTooltip'
import useResizeObserver from './hooks/useResizeObserver'

const CdcMap = ({
  config,
  navigationHandler: customNavigationHandler,
  isDashboard = false,
  isEditor = false,
  isDebug = false,
  configUrl,
  logo = '',
  setConfig,
  setSharedFilter,
  setSharedFilterValue,
  link
}) => {
  const transform = new DataTransform()
  const [translate, setTranslate] = useState([0, 0])
  const [scale, setScale] = useState(1)
  const [state, setState] = useState<MapConfig>({ ...initialState })
  const [isDraggingAnnotation, setIsDraggingAnnotation] = useState(false)
  const [loading, setLoading] = useState(true)
  const [displayPanel, setDisplayPanel] = useState(true)
  const [topoData, setTopoData] = useState<{}>({})
  const [runtimeFilters, setRuntimeFilters] = useState([])
  const [runtimeData, setRuntimeData] = useState({ init: true })
  const _setRuntimeData = (data: any) => {
    if (config) {
      setRuntimeData(data)
    } else {
      setRuntimeFilters(data)
    }
  }

  // state
  const [runtimeLegend, setRuntimeLegend] = useState([])
  const [stateToShow, setStateToShow] = useState(null)
  const [modal, setModal] = useState(null)
  const [accessibleStatus, setAccessibleStatus] = useState('')
  const [filteredCountryCode, setFilteredCountryCode] = useState()
  const [position, setPosition] = useState(state.mapPosition)
  const [coveLoadedHasRan, setCoveLoadedHasRan] = useState(false)
  const [imageId, setImageId] = useState(`cove-${Math.random().toString(16).slice(-4)}`) // eslint-disable-line
  const [requiredColumns, setRequiredColumns] = useState(null) // Simple state so we know if we need more information before parsing the map
  const [projection, setProjection] = useState(null)

  // Refs
  const legendRef = useRef(null)
  const tooltipRef = useRef(null)
  const legendMemo = useRef(new Map())
  const legendSpecialClassLastMemo = useRef(new Map())
  const innerContainerRef = useRef()

  // IDs
  const tooltipId = useId()
  const mapId = useId()
  const legendId = useId()

  // hooks
  const { currentViewport, dimensions, container, outerContainerRef } = useResizeObserver(isEditor)
  const { handleSorting } = useFilters({ config: state, setConfig: setState })

  const handleDragStateChange = isDragging => {
    setIsDraggingAnnotation(isDragging)
  }

  const columnsRequiredChecker = useCallback(() => {
    let columnList = []

    // Geo is always required
    if ('' === state.columns.geo.name) {
      columnList.push('Geography')
    }

    // Primary is required if we're on a data map or a point map
    if ('navigation' !== state.general.type && '' === state.columns.primary.name) {
      columnList.push('Primary')
    }

    // Navigate is required for navigation maps
    if ('navigation' === state.general.type && '' === state.columns.navigate.name) {
      columnList.push('Navigation')
    }

    if (
      ('us-geocode' === state.general.type || 'world-geocode' === state.general.type) &&
      '' === state.columns.latitude.name
    ) {
      columnList.push('Latitude')
    }

    if (
      ('us-geocode' === state.general.type || 'world-geocode' === state.general.type) &&
      '' === state.columns.longitude.name
    ) {
      columnList.push('Longitude')
    }

    if (columnList.length === 0) columnList = null

    setRequiredColumns(columnList)
  }, [state.columns, state.general.type])

  useEffect(() => {
    try {
      if (filteredCountryCode) {
        const coordinates = countryCoordinates[filteredCountryCode]
        const long = coordinates[1]
        const lat = coordinates[0]
        const reversedCoordinates: Coordinate = [long, lat]

        setState({
          ...state,
          mapPosition: { coordinates: reversedCoordinates, zoom: 3 }
        })
      }
    } catch (e) {
      console.error('COVE: Failed to set world map zoom.') // eslint-disable-line
    }
  }, [filteredCountryCode]) // eslint-disable-line

  useEffect(() => {
    setTimeout(() => {
      if (filteredCountryCode) {
        const filteredCountryObj = runtimeData[filteredCountryCode]
        const tmpData = {
          [filteredCountryCode]: filteredCountryObj
        }
        setRuntimeData(tmpData)
      }
    }, 100)
  }, [filteredCountryCode]) // eslint-disable-line

  useEffect(() => {
    if (state.mapPosition) {
      setPosition(state.mapPosition)
    }
  }, [state.mapPosition, setPosition])

  // eslint-disable-next-line
  const generateRuntimeFilters = useCallback((configObj, hash, runtimeFilters) => {
    if (typeof configObj === 'undefined' || undefined === configObj.filters || configObj.filters.length === 0) return []

    let filters = []

    if (hash) filters.fromHash = hash

    configObj?.filters.forEach(
      (
        {
          columnName,
          label,
          labels,
          queryParameter,
          orderedValues,
          active,
          values,
          type,
          showDropdown,
          setByQueryParameter
        },
        idx
      ) => {
        let newFilter = runtimeFilters[idx]

        const sort = (a, b) => {
          const asc = configObj.filters[idx].order !== 'desc'
          return String(asc ? a : b).localeCompare(String(asc ? b : a), 'en', { numeric: true })
        }

        if (type !== 'url') {
          values = getUniqueValues(state.data, columnName)

          if (configObj.filters[idx].order === 'cust') {
            if (configObj.filters[idx]?.values.length > 0) {
              values = configObj.filters[idx].values
            }
          } else {
            values = values.sort(sort)
          }
        }

        if (undefined === newFilter) {
          newFilter = {}
        }

        newFilter.order = configObj.filters[idx].order ? configObj.filters[idx].order : 'asc'
        newFilter.type = type
        newFilter.label = label ?? ''
        newFilter.columnName = columnName
        newFilter.orderedValues = orderedValues
        newFilter.queryParameter = queryParameter
        newFilter.labels = labels
        newFilter.values = values
        newFilter.setByQueryParameter = setByQueryParameter
        handleSorting(newFilter)
        newFilter.active = active || configObj.filters[idx].defaultValue || values[0] // Default to first found value
        newFilter.defaultValue = configObj.filters[idx].defaultValue || ''
        newFilter.filterStyle = configObj.filters[idx].filterStyle ? configObj.filters[idx].filterStyle : 'dropdown'
        newFilter.showDropdown = showDropdown
        newFilter.subGrouping = configObj.filters[idx].subGrouping

        filters.push(newFilter)
      }
    )

    return filters
  })

  // Calculates what's going to be displayed on the map and data table at render.
  const generateRuntimeData = useCallback((configObj, filters, hash, test) => {
    try {
      const result = {}

      // Adding property this way prevents it from being enumerated
      Object.defineProperty(result, 'fromHash', {
        value: hash
      })

      addUIDs(configObj, configObj.columns.geo.name)

      configObj.data.forEach(row => {
        if (test) {
          console.log('object', configObj) // eslint-disable-line
          console.log('row', row) // eslint-disable-line
        }

        if (undefined === row.uid) return false // No UID for this row, we can't use for mapping
        const configPrimaryName = configObj.columns.primary.name
        if (row[configPrimaryName]) {
          row[configPrimaryName] = numberFromString(row[configPrimaryName], state)
        }

        // If this is a navigation only map, skip if it doesn't have a URL

        if ('navigation' === configObj.general.type) {
          let navigateUrl = row[configObj.columns.navigate.name] || ''

          if (undefined !== navigateUrl && typeof navigateUrl === 'string') {
            // Strip hidden characters before we check length
            navigateUrl = navigateUrl.replace(/(\r\n|\n|\r)/gm, '')
          }
          if (0 === navigateUrl?.length) {
            return false
          }
        }

        // Filters
        if (filters?.length) {
          for (let i = 0; i < filters.length; i++) {
            const { columnName, active, type, filterStyle, subGrouping } = filters[i]
            const isDataFilter = type !== 'url'
            const matchingValue = String(active) === String(row[columnName]) // Group
            if (isDataFilter && !matchingValue) return false // Bail out, data doesn't match the filter selection
            if (filterStyle == 'nested-dropdown') {
              const matchingSubValue = String(row[subGrouping?.columnName]) === String(subGrouping?.active)
              if (subGrouping?.active && !matchingSubValue) {
                return false // Bail out, data doesn't match the subgroup selection
              }
            }
          }
        }
        // Don't add additional rows with same UID
        if (result[row.uid] === undefined) {
          result[row.uid] = row
        }
      })
      return result
    } catch (e) {
      console.error('COVE: ', e) // eslint-disable-line
    }
  })

  const mapSvg = useRef(null)

  // this is passed DOWN into the various components
  // then they do a lookup based on the bin number as index into here
  const applyLegendToRow = rowObj => {
    try {
      if (!rowObj) throw new Error('COVE: No rowObj in applyLegendToRow')
      // Navigation mapchanged
      if ('navigation' === state.general.type) {
        let mapColorPalette = colorPalettes[state.color] || colorPalettes['bluegreenreverse']
        return generateColorsArray(mapColorPalette[3])
      }

      let hash = hashObj(rowObj)

      if (legendMemo.current.has(hash)) {
        let idx = legendMemo.current.get(hash)
        let disabledIdx = idx

        if (state.legend.showSpecialClassesLast) {
          disabledIdx = legendSpecialClassLastMemo.current.get(hash)
        }

        if (runtimeLegend[disabledIdx]?.disabled) return false

        // changed to use bin prop to get color instead of idx
        // bc we re-order legend when showSpecialClassesLast is checked
        let legendBinColor = runtimeLegend.items.find(o => o.bin === idx)?.color
        return generateColorsArray(legendBinColor, runtimeLegend[idx]?.special)
      }

      // Fail state
      return generateColorsArray()
    } catch (e) {
      console.error('COVE: ', e) // eslint-disable-line
    }
  }

  // todo: convert to store or context eventually.
  const { buildTooltip } = useTooltip({ state, displayGeoName, supportedStatesFipsCodes })

  const applyTooltipsToGeo = (geoName, row, returnType = 'string') => {
    let toolTipText = buildTooltip(row, geoName, '')

    // We convert the markup into JSX and add a navigation link if it's going into a modal.
    if ('jsx' === returnType) {
      toolTipText = [<div key='modal-content'>{parse(toolTipText)}</div>]

      if (state.columns.hasOwnProperty('navigate') && row[state.columns.navigate.name]) {
        toolTipText.push(
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,jsx-a11y/anchor-is-valid
          <a
            href='#'
            className='navigation-link'
            key='modal-navigation-link'
            onClick={e => {
              e.preventDefault()
              navigationHandler(
                state.general.navigationTarget,
                row[state.columns.navigate.name],
                customNavigationHandler
              )
            }}
          >
            {state.tooltips.linkLabel}
            {isDomainExternal(row[state.columns.navigate.name]) && <ExternalIcon className='inline-icon ms-1' />}
          </a>
        )
      }
    }

    return toolTipText
  }

  const geoClickHandler = (key, value) => {
    if (setSharedFilter) {
      setSharedFilter(state.uid, value)
    }

    // If world-geocode map zoom to geo point
    if (['world-geocode'].includes(state.general.type)) {
      const lat = value[state.columns.latitude.name]
      const long = value[state.columns.longitude.name]

      setState({
        ...state,
        mapPosition: { coordinates: [long, lat], zoom: 3 }
      })
    }

    // If modals are set, or we are on a mobile viewport, display modal
    if (window.matchMedia('(any-hover: none)').matches || 'click' === state.tooltips.appearanceType) {
      setModal({
        geoName: key,
        keyedData: value
      })

      return
    }

    // Otherwise if this item has a link specified for it, do regular navigation.
    if (state.columns.navigate && value[state.columns.navigate.name]) {
      navigationHandler(state.general.navigationTarget, value[state.columns.navigate.name], customNavigationHandler)
    }
  }

  const reloadURLData = async () => {
    if (state.dataUrl) {
      const dataUrl = new URL(state.runtimeDataUrl || state.dataUrl, window.location.origin)
      let qsParams = Object.fromEntries(new URLSearchParams(dataUrl.search))

      let isUpdateNeeded = false
      state.filters.forEach(filter => {
        if (filter.type === 'url' && qsParams[filter.queryParameter] !== decodeURIComponent(filter.active)) {
          qsParams[filter.queryParameter] = filter.active
          isUpdateNeeded = true
        }
      })

      if (!isUpdateNeeded) return

      let dataUrlFinal = `${dataUrl.origin}${dataUrl.pathname}${Object.keys(qsParams)
        .map((param, i) => {
          let qs = i === 0 ? '?' : '&'
          qs += param + '='
          qs += qsParams[param]
          return qs
        })
        .join('')}`

      let data

      try {
        const regex = /(?:\.([^.]+))?$/

        const ext = regex.exec(dataUrl.pathname)[1]
        if ('csv' === ext || isSolrCsv(dataUrlFinal)) {
          data = await fetch(dataUrlFinal)
            .then(response => response.text())
            .then(responseText => {
              const parsedCsv = Papa.parse(responseText, {
                header: true,
                dynamicTyping: true,
                skipEmptyLines: true,
                encoding: 'utf-8'
              })
              return parsedCsv.data
            })
        } else if ('json' === ext || isSolrJson(dataUrlFinal)) {
          data = await fetch(dataUrlFinal).then(response => response.json())
        } else {
          data = []
        }
      } catch (e) {
        console.error(`Cannot parse URL: ${dataUrlFinal}`) // eslint-disable-line
        console.log(e) // eslint-disable-line
        data = []
      }

      if (state.dataDescription) {
        data = transform.autoStandardize(data)
        data = transform.developerStandardize(data, state.dataDescription)
      }

      setState({ ...state, runtimeDataUrl: dataUrlFinal, data })
    }
  }

  const loadConfig = async configObj => {
    // Set loading flag
    if (!loading) setLoading(true)

    // Create new config object the same way each time no matter when this method is called.
    let newState = {
      ...initialState,
      ...configObj
    }

    const urlFilters = newState.filters
      ? newState.filters.filter(filter => filter.type === 'url').length > 0
        ? true
        : false
      : false

    if (newState.dataUrl && !urlFilters) {
      // handle urls with spaces in the name.
      if (newState.dataUrl) newState.dataUrl = `${newState.dataUrl}`
      let newData = await fetchRemoteData(newState.dataUrl, 'map')

      if (newData && newState.dataDescription) {
        newData = transform.autoStandardize(newData)
        newData = transform.developerStandardize(newData, newState.dataDescription)
      }

      if (newData) {
        newState.data = newData
      }
    } else if (newState.formattedData) {
      newState.data = newState.formattedData
    } else if (newState.dataDescription) {
      newState.data = transform.autoStandardize(newState.data)
      newState.data = transform.developerStandardize(newState.data, newState.dataDescription)
    }

    // This code goes through and adds the defaults for every property declaring in the initial state at the top.
    // This allows you to easily add new properties to the config without having to worry about accounting for backwards compatibility.
    // Right now this does not work recursively -- only on first and second level properties. So state -> prop1 -> childPropOne
    Object.keys(newState).forEach(key => {
      if ('object' === typeof newState[key] && false === Array.isArray(newState[key])) {
        if (initialState[key]) {
          Object.keys(initialState[key]).forEach(property => {
            if (undefined === newState[key][property]) {
              newState[key][property] = initialState[key][property]
            }
          })
        }
      }
    })

    // If there's a name for the geo, add UIDs
    if (newState.columns.geo.name || newState.columns.geo.fips) {
      addUIDs(newState, newState.columns.geo.name || newState.columns.geo.fips)
    }

    if (newState.table.forceDisplay === undefined) {
      newState.table.forceDisplay = !isDashboard
    }

    validateFipsCodeLength(newState)

    // add ability to rename state properties over time.
    const processedConfig = { ...coveUpdateWorker(newState) }

    setTimeout(() => {
      setState(processedConfig)
      setLoading(false)
    }, 10)
  }

  const init = async () => {
    let configData = null

    // Load the configuration data passed to this component if it exists
    if (config) {
      configData = config
    }

    // If the config passed is a string, try to load it as an ajax
    if (configUrl) {
      configData = await fetchRemoteData(configUrl)
    }

    // Once we have a config verify that it is an object and load it
    if ('object' === typeof configData) {
      loadConfig(configData)
    }
  }

  // Initial load
  useEffect(() => {
    init()
  }, []) // eslint-disable-line

  useEffect(() => {
    if (state && !runtimeData.init && !coveLoadedHasRan && container) {
      publish('cove_loaded', { config: state })
      setCoveLoadedHasRan(true)
    }
  }, [state, container, runtimeData.init]) // eslint-disable-line

  useEffect(() => {
    // When geotype changes - add UID
    if (state.data && state.columns.geo.name) {
      addUIDs(state, state.columns.geo.name)
    }
  }, [state]) // eslint-disable-line

  useEffect(() => {
    // UID
    if (state.data && state.columns.geo.name && state.columns.geo.name !== state.data.fromColumn) {
      addUIDs(state, state.columns.geo.name)
    }

    // Filters
    const hashFilters = hashObj(state.filters)
    let filters

    if (state.filters && (config || hashFilters !== runtimeFilters.fromHash)) {
      filters = generateRuntimeFilters(state, hashFilters, runtimeFilters)

      if (filters) {
        filters.forEach((filter, index) => {
          const queryStringFilterValue = getQueryStringFilterValue(filter)
          if (queryStringFilterValue) {
            filters[index].active = queryStringFilterValue
          }
        })
        setRuntimeFilters(filters)
      }
    }

    const hashLegend = generateRuntimeLegendHash(state, runtimeFilters)

    const hashData = hashObj({
      data: state.data,
      columns: state.columns,
      geoType: state.general.geoType,
      type: state.general.type,
      geo: state.columns.geo.name,
      primary: state.columns.primary.name,
      mapPosition: state.mapPosition,
      map: state.map,
      ...runtimeFilters
    })

    // Data
    if (hashData !== runtimeData?.fromHash && state.data?.fromColumn) {
      const newRuntimeData = generateRuntimeData(state, filters || runtimeFilters, hashData)

      setRuntimeData(newRuntimeData)
    } else {
      if (hashLegend !== runtimeLegend?.fromHash && undefined === runtimeData.init) {
        const legend = generateRuntimeLegend(
          legendMemo,
          legendSpecialClassLastMemo,
          state,
          runtimeData,
          hashLegend,
          runtimeFilters,
          setState
        )
        setRuntimeLegend(legend)
      }
    }
  }, [state]) // eslint-disable-line

  useEffect(() => {
    const hashLegend = generateRuntimeLegendHash(state, runtimeFilters)

    // Legend - Update when runtimeData does
    const legend = generateRuntimeLegend(
      legendMemo,
      legendSpecialClassLastMemo,
      state,
      runtimeData,
      hashLegend,
      runtimeFilters,
      setState
    )
    setRuntimeLegend(legend)
  }, [
    runtimeData,
    state.legend.unified,
    state.legend.showSpecialClassesLast,
    state.legend.separateZero,
    state.general.equalNumberOptIn,
    state.legend.numberOfItems,
    state.legend.specialClasses,
    state.legend.additionalCategories
  ]) // eslint-disable-line

  useEffect(() => {
    reloadURLData()
  }, [JSON.stringify(state.filters)])

  if (config) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      loadConfig(config)
    }, [config.data]) // eslint-disable-line
  }

  // Destructuring
  const { general, tooltips, table, columns } = state
  const { subtext = '', geoType } = general
  const { showDownloadImgButton, showDownloadPdfButton, headerColor, introText } = general
  let title = state.general.title

  // if no title AND in editor then set a default
  if (isEditor) {
    if (!title || title === '') title = 'Map Title'
  }

  if (!table.label || table.label === '') table.label = 'Data Table'

  // Map container classes
  let mapContainerClasses = [
    'map-container',
    state.legend?.position,
    state.general.type,
    state.general.geoType,
    'outline-none'
  ]

  if (modal) {
    mapContainerClasses.push('modal-background')
  }

  if (general.type === 'navigation' && true === general.fullBorder) {
    mapContainerClasses.push('full-border')
  }

  // Props passed to all map types
  const mapProps = {
    projection,
    setProjection,
    stateToShow,
    setStateToShow,
    setScale,
    setTranslate,
    scale,
    translate,
    isDraggingAnnotation,
    handleDragStateChange,
    applyLegendToRow,
    applyTooltipsToGeo,
    container,
    content: modal,
    data: runtimeData,
    filteredCountryCode,
    generateRuntimeData,
    geoClickHandler,
    hasZoom: state.general.allowMapZoom,
    innerContainerRef,
    isDashboard,
    isDebug,
    isEditor,
    loadConfig,
    logo,
    position,
    runtimeFilters,
    runtimeLegend,
    runtimeData,
    setAccessibleStatus,
    setFilteredCountryCode,
    setParentConfig: setConfig,
    setPosition,
    setRuntimeData,
    setRuntimeFilters,
    setRuntimeLegend,
    setSharedFilterValue,
    setState,
    state,
    tooltipId,
    tooltipRef,
    topoData,
    setTopoData,
    mapId,
    outerContainerRef,
    dimensions,
    currentViewport
  }

  if (!mapProps.data || !state.data) return <></>

  const tabId = handleMapTabbing(state, loading, legendId)

  // this only shows in Dashboard config mode and only if Show Table is also set
  const tableLink = (
    <a href={`#data-table-${state.dataKey}`} className='margin-left-href'>
      {state.dataKey} (Go to Table)
    </a>
  )

  const sectionClassNames = () => {
    const classes = ['cove-component__content', 'cdc-map-inner-container', `${currentViewport}`, `${headerColor}`]
    if (config?.runtime?.editorErrorMessage.length > 0) classes.push('type-map--has-error')
    return classes.join(' ')
  }

  return (
    <ConfigContext.Provider value={mapProps}>
      <Layout.VisualizationWrapper
        config={state}
        isEditor={isEditor}
        ref={outerContainerRef}
        currentViewport={currentViewport}
        imageId={imageId}
        showEditorPanel={state.showEditorPanel}
      >
        {isEditor && <EditorPanel columnsRequiredChecker={columnsRequiredChecker} />}
        <Layout.Responsive isEditor={isEditor}>
          {requiredColumns && (
            <Waiting requiredColumns={requiredColumns} className={displayPanel ? `waiting` : `waiting collapsed`} />
          )}
          {!runtimeData.init && (general.type === 'navigation' || runtimeLegend) && (
            <section className={sectionClassNames()} aria-label={'Map: ' + title} ref={innerContainerRef}>
              {state?.runtime?.editorErrorMessage.length > 0 && <Error state={state} />}
              {/* prettier-ignore */}
              <Title
                title={title}
                superTitle={general.superTitle}
                config={config}
                classes={['map-title', general.showTitle === true ? 'visible' : 'hidden', `${headerColor}`]}
              />
              <SkipTo skipId={tabId} skipMessage='Skip Over Map Container' />
              {state?.annotations?.length > 0 && (
                <SkipTo skipId={tabId} skipMessage={`Skip over annotations`} key={`skip-annotations`} />
              )}

              {introText && <section className='introText mb-4'>{parse(introText)}</section>}

              {state?.filters?.length > 0 && (
                <Filters
                  config={state}
                  setConfig={setState}
                  filteredData={runtimeFilters}
                  setFilteredData={_setRuntimeData}
                  dimensions={dimensions}
                  standaloneMap={!config}
                />
              )}

              <div
                role='region'
                tabIndex='0'
                className={mapContainerClasses.join(' ')}
                onClick={e => closeModal(e, modal, setModal)}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    closeModal(e, modal, setModal)
                  }
                }}
                style={{ padding: '15px 0px', margin: '0px' }}
              >
                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
                <section className='outline-none geography-container w-100' ref={mapSvg} tabIndex='0'>
                  {currentViewport && (
                    <>
                      {modal && <Modal />}
                      {'single-state' === geoType && <UsaMap.SingleState />}
                      {'us' === geoType && 'us-geocode' !== state.general.type && <UsaMap.State />}
                      {'us-region' === geoType && <UsaMap.Region />}
                      {'us-county' === geoType && <UsaMap.County />}
                      {'world' === geoType && <WorldMap />}
                      {/* logo is handled in UsaMap.State when applicable */}
                      {'google-map' === geoType && <GoogleMap />}
                      {'data' === general.type && logo && ('us' !== geoType || 'us-geocode' === state.general.type) && (
                        <img src={logo} alt='' className='map-logo' style={{ maxWidth: '50px' }} />
                      )}
                    </>
                  )}
                </section>

                {general.showSidebar && 'navigation' !== general.type && (
                  <Legend
                    dimensions={dimensions}
                    ref={legendRef}
                    skipId={tabId}
                    containerWidthPadding={0}
                    currentViewport={currentViewport}
                  />
                )}
              </div>

              {'navigation' === general.type && (
                <NavigationMenu
                  mapTabbingID={tabId}
                  displayGeoName={displayGeoName}
                  data={runtimeData}
                  options={general}
                  columns={state.columns}
                  navigationHandler={val => navigationHandler('_blank', val, customNavigationHandler)}
                />
              )}

              {/* Link */}
              {isDashboard && config.table?.forceDisplay && config.table.showDataTableLink ? tableLink : link && link}

              {subtext.length > 0 && <p className='subtext mt-4'>{parse(subtext)}</p>}

              <MediaControls.Section classes={['download-buttons']}>
                {showDownloadImgButton && (
                  <MediaControls.Button
                    text='Download Image'
                    title='Download Chart as Image'
                    type='image'
                    state={state}
                    elementToCapture={imageId}
                  />
                )}
                {showDownloadPdfButton && (
                  <MediaControls.Button
                    text='Download PDF'
                    title='Download Chart as PDF'
                    type='pdf'
                    state={state}
                    elementToCapture={imageId}
                  />
                )}
              </MediaControls.Section>

              {state.runtime.editorErrorMessage.length === 0 &&
                true === table.forceDisplay &&
                general.type !== 'navigation' &&
                false === loading && (
                  <DataTable
                    config={state}
                    rawData={state.data}
                    navigationHandler={navigationHandler}
                    expandDataTable={table.expanded}
                    headerColor={general.headerColor}
                    columns={columns}
                    showFullGeoNameInCSV={table.showFullGeoNameInCSV}
                    runtimeLegend={runtimeLegend}
                    runtimeData={runtimeData}
                    displayGeoName={displayGeoName}
                    applyLegendToRow={applyLegendToRow}
                    tableTitle={table.label}
                    indexTitle={table.indexLabel}
                    vizTitle={general.title}
                    viewport={currentViewport}
                    formatLegendLocation={key =>
                      formatLegendLocation(key, runtimeData?.[key]?.[state.columns.geo.name])
                    }
                    setFilteredCountryCode={setFilteredCountryCode}
                    tabbingId={tabId}
                    showDownloadImgButton={showDownloadImgButton}
                    showDownloadPdfButton={showDownloadPdfButton}
                    innerContainerRef={innerContainerRef}
                    outerContainerRef={outerContainerRef}
                    imageRef={imageId}
                    isDebug={isDebug}
                    wrapColumns={table.wrapColumns}
                  />
                )}

              {state.annotations.length > 0 && <Annotation.Dropdown />}

              {general.footnotes && <section className='footnotes pt-2 mt-4'>{parse(general.footnotes)}</section>}
            </section>
          )}

          <div aria-live='assertive' className='cdcdataviz-sr-only'>
            {accessibleStatus}
          </div>

          {!isDraggingAnnotation &&
            !window.matchMedia('(any-hover: none)').matches &&
            'hover' === tooltips.appearanceType && (
              <ReactTooltip
                id={`tooltip__${tooltipId}`}
                float={true}
                className={`${tooltips.capitalizeLabels ? 'capitalize tooltip tooltip-test' : 'tooltip tooltip-test'}`}
                style={{ background: `rgba(255,255,255, ${state.tooltips.opacity / 100})`, color: 'black' }}
              />
            )}
          <div
            ref={tooltipRef}
            id={`tooltip__${tooltipId}-canvas`}
            className='tooltip'
            style={{
              background: `rgba(255,255,255,${state.tooltips.opacity / 100})`,
              position: 'absolute',
              whiteSpace: 'nowrap',
              display: 'none' // can't use d-none here
            }}
          ></div>
        </Layout.Responsive>
      </Layout.VisualizationWrapper>
    </ConfigContext.Provider>
  )
}

export default CdcMap
