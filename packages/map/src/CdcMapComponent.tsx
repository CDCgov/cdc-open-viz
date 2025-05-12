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
import { type MapConfig } from './types/MapConfig'

// Sass
import './scss/main.scss'
import './cdcMapComponent.styles.css'

// Core Helpers
import { DataTransform } from '@cdc/core/helpers/DataTransform'
import { getQueryStringFilterValue } from '@cdc/core/helpers/queryStringUtils'
import { isSolrCsv, isSolrJson } from '@cdc/core/helpers/isSolr'
import { publish } from '@cdc/core/helpers/events'
import { generateRuntimeFilters } from './helpers/generateRuntimeFilters'
import { type MapReducerType, MapState } from './store/map.reducer'

// Map Helpers
import {
  addUIDs,
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
import ConfigContext, { MapDispatchContext } from './context'
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
import useGenerateRuntimeData from './hooks/useGenerateRuntimeData'
import { VizFilter } from '@cdc/core/types/VizFilter'
import { getInitialState, mapReducer } from './store/map.reducer'
import { RuntimeData } from './types/RuntimeData'
import EditorContext from '@cdc/editor/src/ConfigContext'
import MapActions from './store/map.actions'
import _ from 'lodash'
import useModal from './hooks/useModal'

type CdcMapComponent = {
  config: MapConfig
  isDashboard?: boolean
  isEditor?: boolean
  link?: string
  logo?: string
  navigationHandler: Function
  setSharedFilter: Function
  setSharedFilterValue: Function
}

const CdcMapComponent: React.FC<CdcMapComponent> = ({
  config: configObj,
  navigationHandler: customNavigationHandler,
  isDashboard = false,
  isEditor = false,
  logo = '',
  setSharedFilter,
  setSharedFilterValue,
  link,
  setConfig: setEditorsConfig,
  loadConfig
}) => {
  const initialState = getInitialState(configObj)

  const [mapState, dispatch] = useReducer<MapReducerType<MapState, MapActions>>(mapReducer, initialState as MapState)

  const {
    loading,
    displayPanel,
    runtimeData,
    runtimeFilters,
    runtimeLegend,
    config,
    modal,
    accessibleStatus,
    filteredCountryCode,
    position,
    scale,
    translate,
    projection,
    stateToShow,
    requiredColumns,
    topoData,
    coveLoadedHasRan,
    isDraggingAnnotation
  } = mapState

  const editorContext = useContext(EditorContext)

  const setConfig = (newMapState: MapConfig): void => {
    dispatch({ type: 'SET_CONFIG', payload: newMapState })
    if (isEditor && isDashboard) {
      setEditorsConfig(newMapState)
    }
  }

  useEffect(() => {
    setConfig({ ...config, data: configObj.data })
  }, [configObj.data]) // eslint-disable-line

  const setRuntimeData = (data: RuntimeData) => {
    dispatch({ type: 'SET_RUNTIME_DATA', payload: data })
  }

  const setRuntimeFilters = (filters: VizFilter[]) => {
    dispatch({ type: 'SET_RUNTIME_FILTERS', payload: filters })
  }

  const setRuntimeLegend = legend => {
    dispatch({ type: 'SET_RUNTIME_LEGEND', payload: legend })
  }

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
  const { generateRuntimeLegend } = useGenerateRuntimeLegend(legendMemo, legendSpecialClassLastMemo)
  const { generateRuntimeData } = useGenerateRuntimeData(config)

  const reloadURLData = async () => {
    if (config.dataUrl) {
      const dataUrl = new URL(config.runtimeDataUrl || config.dataUrl, window.location.origin)
      let qsParams = Object.fromEntries(new URLSearchParams(dataUrl.search))

      let isUpdateNeeded = false
      config.filters.forEach(filter => {
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

      if (config.dataDescription) {
        data = transform.autoStandardize(data)
        data = transform.developerStandardize(data, config.dataDescription)
      }

      const newConfig = _.cloneDeep(config)
      newConfig.data = data
      newConfig.runtimeDataUrl = dataUrlFinal

      setConfig(newConfig)
    }
  }

  useEffect(() => {
    if (config && !runtimeData.init && !coveLoadedHasRan && container) {
      publish('cove_loaded', { config: config })
      dispatch({ type: 'SET_COVE_LOADED_HAS_RAN', payload: true })
    }
  }, [config, container, runtimeData.init])

  useEffect(() => {
    // UID
    if (config.data && config.columns.geo.name && config.columns.geo.name !== config.data.fromColumn) {
      addUIDs(config, config.columns.geo.name)
    }

    // Filters
    const hashFilters = hashObj(config.filters)
    let filters: VizFilter[]

    if (config.filters && (config || hashFilters !== runtimeFilters.fromHash)) {
      filters = generateRuntimeFilters({ ...config, data: configObj.data }, hashFilters, runtimeFilters)

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

    const hashLegend = generateRuntimeLegendHash(config, runtimeFilters)

    const hashData = hashObj({
      data: config.data,
      columns: config.columns,
      geoType: config.general.geoType,
      type: config.general.type,
      geo: config.columns.geo.name,
      primary: config.columns.primary.name,
      mapPosition: config.mapPosition,
      map: config.map,
      ...runtimeFilters
    })

    // Data
    if (hashData !== runtimeData?.fromHash && config.data?.fromColumn) {
      const newRuntimeData = generateRuntimeData(
        { ...config, data: configObj.data },
        filters || runtimeFilters,
        hashData
      )
      setRuntimeData(newRuntimeData)
    } else {
      if (hashLegend !== runtimeLegend?.fromHash && undefined === runtimeData?.init) {
        const legend = generateRuntimeLegend(config, runtimeData, hashLegend)
        setRuntimeLegend(legend)
      }
    }
  }, [config, configObj.data])

  useEffect(() => {
    const hashLegend = generateRuntimeLegendHash(config, runtimeFilters)
    const legend = generateRuntimeLegend({ ...config, data: configObj.data }, runtimeData, hashLegend)
    setRuntimeLegend(legend)
  }, [
    runtimeData,
    config.legend.unified,
    config.legend.showSpecialClassesLast,
    config.legend.separateZero,
    config.general.equalNumberOptIn,
    config.legend.numberOfItems,
    config.legend.specialClasses,
    config.legend.additionalCategories,
    config,
    runtimeFilters
  ])

  useEffect(() => {
    if (!isDashboard) {
      reloadURLData()
    }
  }, [JSON.stringify(config.filters)])

  const { general, tooltips, table, columns } = config
  const { subtext = '', geoType } = general
  const { showDownloadImgButton, showDownloadPdfButton, headerColor, introText } = general
  const { closeModal } = useModal()

  let title = config.general.title

  if (isEditor) {
    if (!title || title === '') title = 'Map Title'
  }

  if (!table.label || table.label === '') table.label = 'Data Table'

  const mapProps = {
    setEditorsConfig,
    container,
    content: modal,
    currentViewport,
    customNavigationHandler,
    data: runtimeData,
    dimensions,
    filteredCountryCode,
    innerContainerRef,
    isDashboard,
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
    setConfig,
    setParentConfig: setConfig,
    setRuntimeData,
    setRuntimeFilters,
    setRuntimeLegend,
    setSharedFilter,
    setSharedFilterValue,
    config,
    stateToShow,
    tooltipId,
    tooltipRef,
    topoData,
    translate,
    isDraggingAnnotation,
    loadConfig
  }

  if (!config.data) return <></>

  const tabId = handleMapTabbing(config, loading, legendId)

  // this only shows in Dashboard config mode and only if Show Table is also set
  const tableLink = (
    <a href={`#data-table-${config.dataKey}`} className='margin-left-href'>
      {config.dataKey} (Go to Table)
    </a>
  )

  const sectionClassNames = () => {
    const classes = ['cove-component__content', 'cdc-map-inner-container', `${currentViewport}`, `${headerColor}`]
    if (config?.runtime?.editorErrorMessage.length > 0) classes.push('type-map--has-error')
    return classes.join(' ')
  }

  return (
    <ConfigContext.Provider value={mapProps}>
      <MapDispatchContext.Provider value={dispatch}>
        <Layout.VisualizationWrapper
          config={config}
          isEditor={isEditor}
          ref={outerContainerRef}
          currentViewport={currentViewport}
          imageId={imageId}
          showEditorPanel={config.showEditorPanel}
        >
          {isEditor && <EditorPanel />}
          <Layout.Responsive isEditor={isEditor}>
            {requiredColumns?.length > 0 && (
              <Waiting requiredColumns={requiredColumns} className={displayPanel ? `waiting` : `waiting collapsed`} />
            )}
            {!runtimeData.init && (general.type === 'navigation' || runtimeLegend) && (
              <section className={sectionClassNames()} aria-label={'Map: ' + title} ref={innerContainerRef}>
                {config?.runtime?.editorErrorMessage.length > 0 && <Error />}
                <Title
                  title={title}
                  superTitle={general.superTitle}
                  config={config}
                  classes={['map-title', general.showTitle === true ? 'visible' : 'hidden', `${headerColor}`]}
                />
                <SkipTo skipId={tabId} skipMessage='Skip Over Map Container' />
                {config?.annotations?.length > 0 && (
                  <SkipTo skipId={tabId} skipMessage={`Skip over annotations`} key={`skip-annotations`} />
                )}

                {introText && <section className='introText mb-4'>{parse(introText)}</section>}

                {config?.filters?.length > 0 && (
                  <Filters
                    config={config}
                    setConfig={setConfig}
                    filteredData={runtimeFilters}
                    setFilteredData={_setRuntimeData}
                    dimensions={dimensions}
                    standaloneMap={!config}
                  />
                )}

                <div
                  role='region'
                  tabIndex={0}
                  className={getMapContainerClasses(config, modal).join(' ')}
                  onClick={e => closeModal(e, modal)}
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      closeModal(e, modal)
                    }
                  }}
                >
                  {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
                  <section
                    className='outline-none geography-container w-100 position-relative'
                    ref={mapSvg}
                    tabIndex='0'
                  >
                    {currentViewport && (
                      <>
                        {modal && <Modal />}
                        {'single-state' === geoType && <UsaMap.SingleState />}
                        {'us' === geoType && 'us-geocode' !== config.general.type && <UsaMap.State />}
                        {'us-region' === geoType && <UsaMap.Region />}
                        {'us-county' === geoType && <UsaMap.County />}
                        {'world' === geoType && <WorldMap />}
                        {'google-map' === geoType && <GoogleMap />}
                        {
                          /* logo is handled in UsaMap.State when applicable */
                          // prettier-ignore
                          'data' === general.type && logo && ('us' !== geoType || 'us-geocode' === general.type) && (
                          <img src={logo} alt='' className='map-logo' style={{ maxWidth: '50px' }} />
                        )
                        }
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
                    columns={config.columns}
                    navigationHandler={val => navigationHandler('_blank', val, customNavigationHandler)}
                  />
                )}

                {/* Link (to data table?) */}
                {isDashboard && config.table?.forceDisplay && config.table.showDataTableLink ? tableLink : link && link}

                {subtext.length > 0 && <p className='subtext mt-4'>{parse(subtext)}</p>}

                <MediaControls.Section classes={['download-buttons']}>
                  {showDownloadImgButton && (
                    <MediaControls.Button
                      text='Download Image'
                      title='Download Chart as Image'
                      type='image'
                      state={config}
                      elementToCapture={imageId}
                    />
                  )}
                  {showDownloadPdfButton && (
                    <MediaControls.Button
                      text='Download PDF'
                      title='Download Chart as PDF'
                      type='pdf'
                      state={config}
                      elementToCapture={imageId}
                    />
                  )}
                </MediaControls.Section>

                {config?.runtime?.editorErrorMessage.length === 0 &&
                  true === table.forceDisplay &&
                  general.type !== 'navigation' &&
                  false === loading && (
                    <DataTable
                      columns={columns}
                      config={config}
                      currentViewport={currentViewport}
                      displayGeoName={displayGeoName}
                      expandDataTable={table.expanded}
                      formatLegendLocation={key =>
                        formatLegendLocation(key, runtimeData?.[key]?.[config.columns.geo.name])
                      }
                      headerColor={general.headerColor}
                      imageRef={imageId}
                      indexTitle={table.indexLabel}
                      innerContainerRef={innerContainerRef}
                      legendMemo={legendMemo}
                      legendSpecialClassLastMemo={legendSpecialClassLastMemo}
                      navigationHandler={navigationHandler}
                      outerContainerRef={outerContainerRef}
                      rawData={config.data}
                      runtimeData={runtimeData}
                      runtimeLegend={runtimeLegend}
                      showDownloadImgButton={showDownloadImgButton}
                      showDownloadPdfButton={showDownloadPdfButton}
                      tabbingId={tabId}
                      tableTitle={table.label}
                      vizTitle={general.title}
                      wrapColumns={table.wrapColumns}
                    />
                  )}

                {config.annotations?.length > 0 && <Annotation.Dropdown />}

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
                  className={`${
                    tooltips.capitalizeLabels ? 'capitalize tooltip tooltip-test' : 'tooltip tooltip-test'
                  }`}
                  style={{ background: `rgba(255,255,255, ${config.tooltips.opacity / 100})`, color: 'black' }}
                />
              )}
            <div
              ref={tooltipRef}
              id={`tooltip__${tooltipId}-canvas`}
              className='tooltip'
              style={{
                background: `rgba(255,255,255,${config.tooltips.opacity / 100})`,
                position: 'absolute',
                whiteSpace: 'nowrap',
                display: 'none' // can't use d-none here
              }}
            ></div>
          </Layout.Responsive>
        </Layout.VisualizationWrapper>
      </MapDispatchContext.Provider>
    </ConfigContext.Provider>
  )
}

export default CdcMapComponent
