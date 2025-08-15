// Vendor
import React, { useEffect, useRef, useId, useReducer, useContext, useMemo } from 'react'
import 'whatwg-fetch'
import { Tooltip as ReactTooltip } from 'react-tooltip'
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
import FootnotesStandAlone from '@cdc/core/components/Footnotes/FootnotesStandAlone'

// types
import { type MapConfig } from './types/MapConfig'
import { Datasets } from '@cdc/core/types/DataSet'

// Sass
import './scss/main.scss'
import './cdcMapComponent.styles.css'

// Core Helpers
import { getQueryStringFilterValue } from '@cdc/core/helpers/queryStringUtils'
import { generateRuntimeFilters } from './helpers/generateRuntimeFilters'
import { type MapReducerType, MapState } from './store/map.reducer'
import { addValuesToFilters } from '@cdc/core/helpers/addValuesToFilters'

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
import generateRuntimeLegend from './helpers/generateRuntimeLegend'
import generateRuntimeData from './helpers/generateRuntimeData'
import { LOGO_MAX_WIDTH } from './helpers/constants'
import { reloadURLData } from './helpers/urlDataHelpers'
import { observeMapSvgLoaded } from './helpers/mapObserverHelpers'
import { buildSectionClassNames } from './helpers/componentHelpers'
import { shouldShowDataTable } from './helpers/dataTableHelpers'

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
import { VizFilter } from '@cdc/core/types/VizFilter'
import { getInitialState, mapReducer } from './store/map.reducer'
import { RuntimeData } from './types/RuntimeData'
import EditorContext from '@cdc/editor/src/ConfigContext'
import MapActions from './store/map.actions'
import _ from 'lodash'
import useModal from './hooks/useModal'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'

type CdcMapComponent = {
  config: MapConfig
  isEditor?: boolean
  isDashboard?: boolean
  link?: string
  logo?: string
  navigationHandler: Function
  setSharedFilter: Function
  setSharedFilterValue: Function
  setConfig?: Function
  loadConfig?: Function
  datasets?: Datasets
  interactionLabel: string
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
  setConfig: setParentConfig,
  loadConfig,
  datasets,
  interactionLabel = ''
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
    statesToShow,
    requiredColumns,
    topoData,
    coveLoadedHasRan,
    isDraggingAnnotation
  } = mapState

  const editorContext = useContext(EditorContext)

  const setConfig = (newMapConfig: MapConfig): void => {
    dispatch({ type: 'SET_CONFIG', payload: newMapConfig })
    if (isEditor && !isDashboard) {
      editorContext.setTempConfig(newMapConfig)
    }
  }

  useEffect(() => {
    const _newConfig = getInitialState(_.cloneDeep(configObj)).config
    if (configObj.data) {
      _newConfig.data = configObj.data
    }
    setConfig(_newConfig)
  }, [configObj.data]) // eslint-disable-line

  const _setRuntimeData = (data: any) => {
    const _newFilters = addValuesToFilters(data, [])
    setConfig({ ...config, filters: _newFilters })
    if (config) {
      dispatch({ type: 'SET_RUNTIME_DATA', payload: data })
    } else {
      dispatch({ type: 'SET_RUNTIME_FILTERS', payload: data })
    }
  }

  // Refs
  const innerContainerRef = useRef()
  const legendMemo = useRef(new Map())
  const legendRef = useRef(null)
  const legendSpecialClassLastMemo = useRef(new Map())
  const mapSvg = useRef(null)
  const tooltipRef = useRef(null)

  // IDs
  const imageId = useMemo(() => `download-id-${Math.random().toString(36).substring(2, 11)}`, [])
  const legendId = useId()
  const mapId = useId()
  const tooltipId = 'tooltipId'

  // hooks
  const { currentViewport, dimensions, container, outerContainerRef } = useResizeObserver(isEditor)

  useEffect(() => {
    if (!mapSvg.current || coveLoadedHasRan) return
    return observeMapSvgLoaded(mapSvg, config, coveLoadedHasRan, dispatch)
  }, [config, loading, runtimeData, coveLoadedHasRan])

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
        dispatch({ type: 'SET_RUNTIME_FILTERS', payload: filters })
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
      table: config.table,
      ...runtimeFilters
    })

    // Data
    if (hashData !== runtimeData?.fromHash && config.data?.fromColumn) {
      const isCategoryLegend = config?.legend?.type === 'category'
      const newRuntimeData = generateRuntimeData(
        { ...config, data: configObj.data },
        filters || runtimeFilters,
        hashData,
        isCategoryLegend,
        config.table.showNonGeoData
      )
      dispatch({ type: 'SET_RUNTIME_DATA', payload: newRuntimeData })
    } else {
      if (hashLegend !== runtimeLegend?.fromHash && undefined === runtimeData?.init) {
        const legend = generateRuntimeLegend(
          config,
          runtimeData,
          hashLegend,
          setConfig,
          runtimeFilters,
          legendMemo,
          legendSpecialClassLastMemo
        )
        dispatch({ type: 'SET_RUNTIME_LEGEND', payload: legend })
      }
    }
  }, [config, configObj.data])

  useEffect(() => {
    const hashLegend = generateRuntimeLegendHash(config, runtimeFilters)
    const legend = generateRuntimeLegend(
      { ...config, data: configObj.data },
      runtimeData,
      hashLegend,
      setConfig,
      runtimeFilters,
      legendMemo,
      legendSpecialClassLastMemo
    )
    dispatch({ type: 'SET_RUNTIME_LEGEND', payload: legend })
  }, [runtimeData, config, runtimeFilters])

  useEffect(() => {
    if (!isDashboard) {
      reloadURLData(config, setConfig)
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
    setParentConfig,
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
    setSharedFilter,
    setSharedFilterValue,
    config,
    statesToShow,
    tooltipId,
    tooltipRef,
    topoData,
    translate,
    isDraggingAnnotation,
    loadConfig,
    interactionLabel
  }

  if (!config.data) return <></>

  const tabId = handleMapTabbing(config, loading, legendId)

  // this only shows in Dashboard config mode and only if Show Table is also set
  const tableLink = (
    <a
      href={`#data-table-${config.dataKey}`}
      className='margin-left-href'
      onClick={() => {
        publishAnalyticsEvent(
          'link_to_data_table_click',
          'click',
          `${interactionLabel}|#data-table-${config.dataKey}`,
          'map'
        )
      }}
    >
      {config.dataKey} (Go to Table)
    </a>
  )

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
          {isEditor && <EditorPanel datasets={datasets} />}
          <Layout.Responsive isEditor={isEditor}>
            {requiredColumns?.length > 0 && (
              <Waiting requiredColumns={requiredColumns} className={displayPanel ? `waiting` : `waiting collapsed`} />
            )}
            {!runtimeData.init && (general.type === 'navigation' || runtimeLegend) && (
              <section
                className={buildSectionClassNames(
                  currentViewport,
                  headerColor,
                  config?.runtime?.editorErrorMessage.length > 0
                )}
                aria-label={'Map: ' + title}
                ref={innerContainerRef}
              >
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
                    setFilters={_setRuntimeData}
                    dimensions={dimensions}
                    standaloneMap={!config}
                    interactionLabel={interactionLabel}
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
                            <img src={logo} alt='' className='map-logo' style={{ maxWidth: LOGO_MAX_WIDTH }} />
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
                      interactionLabel={interactionLabel}
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
                      interactionLabel={interactionLabel}
                    />
                  )}
                  {showDownloadPdfButton && (
                    <MediaControls.Button
                      text='Download PDF'
                      title='Download Chart as PDF'
                      type='pdf'
                      state={config}
                      interactionLabel={interactionLabel}
                      elementToCapture={imageId}
                    />
                  )}
                </MediaControls.Section>

                {shouldShowDataTable(config, table, general, loading) && (
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
                    interactionLabel={interactionLabel}
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
                  className={`tooltip tooltip-test`}
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
            <FootnotesStandAlone config={config.footnotes} filters={config.filters?.filter(f => f.filterFootnotes)} />
          </Layout.Responsive>
        </Layout.VisualizationWrapper>
      </MapDispatchContext.Provider>
    </ConfigContext.Provider>
  )
}

export default CdcMapComponent
