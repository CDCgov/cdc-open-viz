// Vendor
import React, { useEffect, useRef, useId, useReducer, useContext } from 'react'
import 'whatwg-fetch'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import Papa from 'papaparse'
import parse from 'html-react-parser'
import 'react-tooltip/dist/react-tooltip.css'

// Core Components
import DataTable from '@cdc/core/components/DataTable'
import Filters from '@cdc/core/components/Filters'
import Layout from '@cdc/core/components/Layout'
import MediaControls from '@cdc/core/components/MediaControls'
import SkipTo from '@cdc/core/components/elements/SkipTo'
import Title from '@cdc/core/components/ui/Title'
import Waiting from '@cdc/core/components/Waiting'

// types
import { type Coordinate, type MapConfig } from './types/MapConfig'

// Sass
import './scss/main.scss'
import './scss/btn.scss'

// Core Helpers
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
  navigationHandler
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
import { getInitialState, mapReducer } from './store/map.reducer'
import { RuntimeData } from './types/RuntimeData'
import EditorContext from '@cdc/editor/src/ConfigContext'
import { MapContext } from './types/MapContext'
import { ChartConfig } from '@cdc/chart/src/types/ChartConfig'

const CdcMapComponent = ({
  config: configObj,
  navigationHandler: customNavigationHandler,
  isDashboard = false,
  isEditor = false,
  isDebug = false,
  logo = '',
  setSharedFilter,
  setSharedFilterValue,
  link
}) => {
  const initialState = getInitialState(configObj)

  const [mapState, dispatch] = useReducer(mapReducer, initialState)

  const {
    isDraggingAnnotation,
    loading,
    requiredColumns,
    displayPanel,
    runtimeData,
    runtimeFilters,
    runtimeLegend,
    state,
    modal,
    accessibleStatus,
    filteredCountryCode,
    position,
    scale,
    translate,
    projection,
    stateToShow,
    topoData,
    coveLoadedHasRan
  } = mapState

  const editorContext = useContext(EditorContext)

  const setConfig = (newConfig: ChartConfig): void => {
    dispatch({ type: 'SET_CONFIG', payload: newConfig })
    if (isEditor && !isDashboard) {
      editorContext.setTempConfig(newConfig)
    }
  }

  const setState = (newMapState: MapConfig): void => {
    dispatch({ type: 'SET_STATE', payload: newMapState })
    if (isEditor && !isDashboard) {
      editorContext.setTempConfig(newMapState)
    }
  }

  const setAccessibleStatus = (message: string) => {
    dispatch({ type: 'SET_ACCESSIBLE_STATUS', payload: message })
  }

  const setCoveLoadedHasRan = (hasRan: boolean) => {
    dispatch({ type: 'SET_COVE_LOADED_HAS_RAN', payload: hasRan })
  }

  const setDisplayPanel = (display: boolean) => {
    dispatch({ type: 'SET_DISPLAY_PANEL', payload: display })
  }

  const setFilteredCountryCode = (code: string) => {
    dispatch({ type: 'SET_FILTERED_COUNTRY_CODE', payload: code })
  }

  const setIsDraggingAnnotation = (isDragging: boolean) => {
    dispatch({ type: 'SET_IS_DRAGGING_ANNOTATION', payload: isDragging })
  }

  const setModal = modal => {
    dispatch({ type: 'SET_MODAL', payload: modal })
  }

  const setPosition = (position: { coordinates: Coordinate; zoom: number }) => {
    dispatch({ type: 'SET_POSITION', payload: position })
  }

  const setProjection = projection => {
    dispatch({ type: 'SET_PROJECTION', payload: projection })
  }

  const setRequiredColumns = (columns: string[]) => {
    dispatch({ type: 'SET_REQUIRED_COLUMNS', payload: columns })
  }

  const setRuntimeData = (data: RuntimeData) => {
    dispatch({ type: 'SET_RUNTIME_DATA', payload: data })
  }

  const setRuntimeFilters = (filters: VizFilter[]) => {
    dispatch({ type: 'SET_RUNTIME_FILTERS', payload: filters })
  }

  const setRuntimeLegend = legend => {
    dispatch({ type: 'SET_RUNTIME_LEGEND', payload: legend })
  }

  const setScale = (scale: number) => {
    dispatch({ type: 'SET_SCALE', payload: scale })
  }

  const setStateToShow = (state: string) => {
    dispatch({ type: 'SET_STATE_TO_SHOW', payload: state })
  }

  const setTopoData = (data: any) => {
    dispatch({ type: 'SET_TOPO_DATA', payload: data })
  }

  const setTranslate = (translate: [number, number]) => {
    dispatch({ type: 'SET_TRANSLATE', payload: translate })
  }

  const _setRuntimeData = (data: any) => {
    if (state) {
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
  const { generateRuntimeLegend } = useGenerateRuntimeLegend(legendMemo, legendSpecialClassLastMemo)
  const { generateRuntimeFilters } = useGenerateRuntimeFilters(state)
  const { generateRuntimeData } = useGenerateRuntimeData(state)

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

  useEffect(() => {
    if (state && !runtimeData.init && !coveLoadedHasRan && container) {
      publish('cove_loaded', { config: state })
      setCoveLoadedHasRan(true)
    }
  }, [state, container, runtimeData.init])

  useEffect(() => {
    // UID
    if (state.data && state.columns.geo.name && state.columns.geo.name !== state.data.fromColumn) {
      addUIDs(state, state.columns.geo.name)
    }

    // Filters
    const hashFilters = hashObj(state.filters)
    let filters: VizFilter[]

    if (state.filters && (state || hashFilters !== runtimeFilters.fromHash)) {
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
      if (hashLegend !== runtimeLegend?.fromHash && undefined === runtimeData?.init) {
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
  ])

  useEffect(() => {
    reloadURLData()
  }, [JSON.stringify(state.filters)])

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

  if (!state.data) return <></>

  const tabId = handleMapTabbing(state, loading, legendId)

  // this only shows in Dashboard config mode and only if Show Table is also set
  const tableLink = (
    <a href={`#data-table-${state.dataKey}`} className='margin-left-href'>
      {state.dataKey} (Go to Table)
    </a>
  )

  const sectionClassNames = () => {
    const classes = ['cove-component__content', 'cdc-map-inner-container', `${currentViewport}`, `${headerColor}`]
    if (state?.runtime?.editorErrorMessage.length > 0) classes.push('type-map--has-error')
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
                config={state}
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
                  standaloneMap={!state}
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
              {isDashboard && state.table?.forceDisplay && state.table.showDataTableLink ? tableLink : link && link}

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
                    columns={columns}
                    config={state}
                    currentViewport={currentViewport}
                    displayGeoName={displayGeoName}
                    expandDataTable={table.expanded}
                    formatLegendLocation={key =>
                      formatLegendLocation(key, runtimeData?.[key]?.[state.columns.geo.name])
                    }
                    headerColor={general.headerColor}
                    imageRef={imageId}
                    indexTitle={table.indexLabel}
                    innerContainerRef={innerContainerRef}
                    isDebug={isDebug}
                    legendMemo={legendMemo}
                    legendSpecialClassLastMemo={legendSpecialClassLastMemo}
                    navigationHandler={navigationHandler}
                    outerContainerRef={outerContainerRef}
                    rawData={state.data}
                    runtimeData={runtimeData}
                    runtimeLegend={runtimeLegend}
                    setFilteredCountryCode={setFilteredCountryCode}
                    showDownloadImgButton={showDownloadImgButton}
                    showDownloadPdfButton={showDownloadPdfButton}
                    tabbingId={tabId}
                    tableTitle={table.label}
                    vizTitle={general.title}
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

export default CdcMapComponent
