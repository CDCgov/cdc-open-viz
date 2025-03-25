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
import initialState from './data/initial-state'

// Sass
import './scss/main.scss'
import './scss/btn.scss'

// Core Helpers
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
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
  getMapContainerClasses,
  generateRuntimeLegendHash,
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
import useResizeObserver from './hooks/useResizeObserver'
import useGenerateRuntimeLegend from './hooks/useGenerateRuntimeLegend'
import useGenerateRuntimeFilters from './hooks/useGenerateRuntimeFilters'
import useGenerateRuntimeData from './hooks/useGenerateRuntimeData'
import { VizFilter } from '@cdc/core/types/VizFilter'

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
  const [accessibleStatus, setAccessibleStatus] = useState<string>()
  const [coveLoadedHasRan, setCoveLoadedHasRan] = useState<boolean>(false)
  const [displayPanel, setDisplayPanel] = useState<boolean>(true)
  const [filteredCountryCode, setFilteredCountryCode] = useState()
  const [isDraggingAnnotation, setIsDraggingAnnotation] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [modal, setModal] = useState(null)
  const [projection, setProjection] = useState(null)
  const [requiredColumns, setRequiredColumns] = useState(null) // Simple state so we know if we need more information before parsing the map
  const [runtimeData, setRuntimeData] = useState({ init: true })
  const [runtimeFilters, setRuntimeFilters] = useState([])
  const [runtimeLegend, setRuntimeLegend] = useState(null)
  const [scale, setScale] = useState<number>(1)
  const [state, setState] = useState<MapConfig>({ ...initialState })
  const [stateToShow, setStateToShow] = useState(null)
  const [topoData, setTopoData] = useState<{}>({})
  const [translate, setTranslate] = useState([0, 0])

  const [position, setPosition] = useState(state.mapPosition)
  const _setRuntimeData = (data: any) => {
    if (config) {
      setRuntimeData(data)
    } else {
      setRuntimeFilters(data)
    }
  }
  const transform = new DataTransform()

  // Refs
  const innerContainerRef = useRef()
  const legendMemo = useRef(new Map())
  const legendRef = useRef(null)
  const legendSpecialClassLastMemo = useRef(new Map())
  const mapSvg = useRef(null)
  const tooltipRef = useRef(null)

  // IDs
  const imageId = useId()
  const legendId = useId()
  const mapId = useId()
  const tooltipId = useId()

  // hooks
  const { currentViewport, dimensions, container, outerContainerRef } = useResizeObserver(isEditor)
  const { handleSorting } = useFilters({ config: state, setConfig: setState })
  const generateRuntimeLegend = useGenerateRuntimeLegend(legendMemo, legendSpecialClassLastMemo)
  const generateRuntimeFilters = useGenerateRuntimeFilters(state)
  const { generateRuntimeData } = useGenerateRuntimeData(state)

  // Use Effects
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
  }, [filteredCountryCode])

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
  }, [filteredCountryCode])

  /**
   * Seems to be needed for switching between a selected single state
   * and the full world map
   */
  useEffect(() => {
    if (state.mapPosition) {
      setPosition(state.mapPosition)
    }
  }, [state.mapPosition, setPosition])

  const handleDragStateChange = isDragging => {
    setIsDraggingAnnotation(isDragging)
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
  }, [])

  useEffect(() => {
    if (state && !runtimeData.init && !coveLoadedHasRan && container) {
      publish('cove_loaded', { config: state })
      setCoveLoadedHasRan(true)
    }
  }, [state, container, runtimeData.init])

  useEffect(() => {
    // When geotype changes - add UID
    if (state.data && state.columns.geo.name) {
      addUIDs(state, state.columns.geo.name)
    }
  }, [state])

  useEffect(() => {
    // UID
    if (state.data && state.columns.geo.name && state.columns.geo.name !== state.data.fromColumn) {
      addUIDs(state, state.columns.geo.name)
    }

    // Filters
    const hashFilters = hashObj(state.filters)
    let filters: VizFilter[]

    if (state.filters && (config || hashFilters !== runtimeFilters.fromHash)) {
      filters = generateRuntimeFilters(state, hashFilters, runtimeFilters)

      if (filters) {
        filters.forEach((filter: VizFilter, index: number) => {
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
        const legend = generateRuntimeLegend(state, runtimeData, hashLegend)
        setRuntimeLegend(legend)
      }
    }
  }, [state])

  useEffect(() => {
    const hashLegend = generateRuntimeLegendHash(state, runtimeFilters)

    // Legend - Update when runtimeData does
    const legend = generateRuntimeLegend(state, runtimeData, hashLegend)
    setRuntimeLegend(legend)
  }, [
    runtimeData,
    state.legend.unified,
    state.legend.showSpecialClassesLast,
    state.legend.separateZero,
    state.general.equalNumberOptIn,
    state.legend.numberOfItems,
    state.legend.specialClasses,
    state.legend.additionalCategories,
    state,
    runtimeFilters
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
  if (isEditor) {
    if (!title || title === '') title = 'Map Title'
  }

  if (!table.label || table.label === '') table.label = 'Data Table'

  // Props passed to all map types
  const mapProps = {
    container,
    content: modal,
    currentViewport,
    customNavigationHandler,
    data: runtimeData,
    dimensions,
    filteredCountryCode,
    handleDragStateChange,
    hasZoom: state.general.allowMapZoom,
    innerContainerRef,
    isDashboard,
    isDebug,
    isDraggingAnnotation,
    isEditor,
    legendMemo,
    legendSpecialClassLastMemo,
    loadConfig,
    logo,
    mapId,
    outerContainerRef,
    position,
    projection,
    runtimeData,
    runtimeFilters,
    runtimeLegend,
    scale,
    setAccessibleStatus,
    setFilteredCountryCode,
    setModal,
    setParentConfig: setConfig,
    setPosition,
    setProjection,
    setRequiredColumns,
    setRuntimeData,
    setRuntimeFilters,
    setRuntimeLegend,
    setScale,
    setSharedFilter,
    setSharedFilterValue,
    setState,
    setStateToShow,
    setTopoData,
    setTranslate,
    state,
    stateToShow,
    tooltipId,
    tooltipRef,
    topoData,
    translate
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
        {isEditor && <EditorPanel />}
        <Layout.Responsive isEditor={isEditor}>
          {requiredColumns && (
            <Waiting requiredColumns={requiredColumns} className={displayPanel ? `waiting` : `waiting collapsed`} />
          )}
          {!runtimeData.init && (general.type === 'navigation' || runtimeLegend) && (
            <section className={sectionClassNames()} aria-label={'Map: ' + title} ref={innerContainerRef}>
              {state?.runtime?.editorErrorMessage.length > 0 && <Error state={state} />}
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
                tabIndex={0}
                className={getMapContainerClasses(state, modal).join(' ')}
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
                    legendMemo={legendMemo}
                    legendSpecialClassLastMemo={legendSpecialClassLastMemo}
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
