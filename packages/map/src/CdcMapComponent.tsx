// Vendor
import React, { useEffect, useRef, useId, useReducer, useContext, useMemo } from 'react'
import 'whatwg-fetch'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import parse from 'html-react-parser'
import 'react-tooltip/dist/react-tooltip.css'

// Core Components
import DataTable from '@cdc/core/components/DataTable'
import Filters from '@cdc/core/components/Filters'
import { VisualizationContainer, VisualizationContent } from '@cdc/core/components/Layout'
import MediaControls from '@cdc/core/components/MediaControls'
import SkipTo from '@cdc/core/components/elements/SkipTo'
import Title from '@cdc/core/components/ui/Title'
import Waiting from '@cdc/core/components/Waiting'
import FootnotesStandAlone from '@cdc/core/components/Footnotes/FootnotesStandAlone'
import { supportedStatesFipsCodes, supportedCounties } from './data/supported-geos'

// types
import { type MapConfig } from './types/MapConfig'
import { Datasets } from '@cdc/core/types/DataSet'

// Sass
import './scss/main.scss'
import './cdcMapComponent.styles.css'

// Core Helpers
import {
  getQueryStringFilterValue,
  isFilterHiddenByQuery,
  removeQueryParam,
  updateQueryParam,
  updateQueryParams
} from '@cdc/core/helpers/queryStringUtils'
import { generateRuntimeFilters } from './helpers/generateRuntimeFilters'
import { type MapReducerType, MapState } from './store/map.reducer'
import { addValuesToFilters } from '@cdc/core/helpers/addValuesToFilters'
import { processMarkupVariables } from '@cdc/core/helpers/markupProcessor'

// Map Helpers
import {
  addUIDs,
  displayGeoName,
  formatLegendLocation,
  getMapContainerClasses,
  generateRuntimeLegendHash,
  handleMapTabbing,
  navigationHandler
} from './helpers'
import { hashObj } from '@cdc/core/helpers/hashObj'
import { applyLegendToRow } from './helpers/applyLegendToRow'
import { getPatternForRow } from './helpers/getPatternForRow'
import { generateRuntimeLegend } from './helpers/generateRuntimeLegend'
import generateRuntimeData from './helpers/generateRuntimeData'
import { reloadURLData } from './helpers/urlDataHelpers'
import { observeMapSvgLoaded } from './helpers/mapObserverHelpers'
import { shouldShowDataTable, filterCountyTableRuntimeDataByStateCode } from './helpers/dataTableHelpers'
import { prepareSmallMultiplesDataTable } from './helpers/smallMultiplesHelpers'

// Child Components
import Annotation from './components/Annotation'
import ConfigContext, { MapDispatchContext } from './context'
import EditorPanel from './components/EditorPanel'
import Error from './components/EditorPanel/components/Error'
import Legend from './components/Legend'
import MapContainer from './components/MapContainer'
import NavigationMenu from './components/NavigationMenu'

// hooks
import useResizeObserver from './hooks/useResizeObserver'
import useLegendMemo from './hooks/useLegendMemo'
import { LegendMemoProvider } from './context/LegendMemoContext'
import { VizFilter } from '@cdc/core/types/VizFilter'
import { getInitialState, mapReducer } from './store/map.reducer'
import defaults from './data/initial-state'
import { LEGACY_MAP_DEFAULTS } from './data/legacy-defaults'
import { backfillDefaults } from '@cdc/core/helpers/backfillDefaults'
import EditorContext from '@cdc/core/contexts/EditorContext'
import MapActions from './store/map.actions'
import _ from 'lodash'
import { cloneConfig } from '@cdc/core/helpers/cloneConfig'
import useModal from './hooks/useModal'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'
import { getVizTitle, getVizSubType } from '@cdc/core/helpers/metrics/utils'
import { ENABLE_CHART_MAP_TP5_TREATMENT } from '@cdc/core/helpers/constants'
import CalloutFlag from '@cdc/core/assets/callout-flag.svg?url'
import { useQueryParamsListener } from '@cdc/core/hooks/useQueryParamsListener'

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
  interactionLabel = 'no link provided'
}) => {
  backfillDefaults(configObj, defaults, LEGACY_MAP_DEFAULTS)
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
    filteredCountyCode,
    filteredStateCode,
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
    const configClone = cloneConfig(configObj)
    backfillDefaults(configClone, defaults, LEGACY_MAP_DEFAULTS)
    const _newConfig = getInitialState(configClone).config
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

  const setFilters = (filters: VizFilter[]) => {
    const filterCopy = _.cloneDeep(filters)
    if (config.general.showStateDropdown) {
      const [stateFilter, countyFilter] = filterCopy.filter(
        f => f.staticFilter && ['state', 'county'].includes(f.columnName)
      )
      if (countyFilter?.active) {
        // county changed
        const countyCode = (countyFilter.active as string) || ''
        setFilteredCountyCode(countyCode)
      } else {
        // state changed
        const stateCode = (stateFilter?.active as string) || ''
        setFilteredStateCode(stateCode)
      }
      if (countyFilter) filterCopy.pop() // remove county filter
      filterCopy.pop() // remove state filter
    }
    _setRuntimeData(filterCopy)
  }

  // Refs
  const innerContainerRef = useRef<HTMLDivElement | null>(null)
  const legendRef = useRef(null)
  const mapSvg = useRef(null)
  const tooltipRef = useRef(null)

  // Legend memo hook
  const { legendMemo, legendSpecialClassLastMemo } = useLegendMemo()

  // IDs
  const imageId = useMemo(() => `download-id-${Math.random().toString(36).substring(2, 11)}`, [])
  const legendId = useId()
  const mapId = useId()
  const tooltipId = 'tooltipId'

  // hooks
  const { currentViewport, vizViewport, dimensions, container, outerContainerRef } = useResizeObserver(isEditor)

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
          if (isFilterHiddenByQuery(filter)) {
            filters[index].showDropdown = false
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
          {
            ...config,
            legend: { ...config.legend, unified: config.smallMultiples?.mode ? true : config.legend?.unified }
          },
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
      {
        ...config,
        data: configObj.data,
        legend: { ...config.legend, unified: config.smallMultiples?.mode ? true : config.legend?.unified }
      },
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
  const { subtext = '', geoType, showDownloadImgButton, showDownloadPdfButton, headerColor, introText } = general
  const { closeModal } = useModal()

  let title = config.general.title
  let processedSuperTitle = general.superTitle
  let processedSubtext = subtext
  let processedIntroText = introText
  let processedFootnotes = general.footnotes

  // Process markup variables if enabled
  if (config.enableMarkupVariables && config.markupVariables?.length > 0) {
    // Combine viz filters with dashboard filters for markup processing
    const combinedFilters = [...(config.filters || []), ...(config.dashboardFilters || [])]

    const markupOptions = {
      isEditor,
      filters: combinedFilters,
      locale: config.locale,
      dataMetadata: config.dataMetadata
    }

    if (title) {
      title = processMarkupVariables(title, config.data || [], config.markupVariables, markupOptions).processedContent
    }
    if (general.superTitle) {
      processedSuperTitle = processMarkupVariables(
        general.superTitle,
        config.data || [],
        config.markupVariables,
        markupOptions
      ).processedContent
    }
    if (subtext) {
      processedSubtext = processMarkupVariables(
        subtext,
        config.data || [],
        config.markupVariables,
        markupOptions
      ).processedContent
    }
    if (introText) {
      processedIntroText = processMarkupVariables(
        introText,
        config.data || [],
        config.markupVariables,
        markupOptions
      ).processedContent
    }
    if (general.footnotes) {
      processedFootnotes = processMarkupVariables(
        general.footnotes,
        config.data || [],
        config.markupVariables,
        markupOptions
      ).processedContent
    }
  }

  if (isEditor) {
    if (!title || title === '') title = 'Map Title'
  }

  if (!table.label || table.label === '') table.label = 'Data Table'
  const isTp5Treatment = ENABLE_CHART_MAP_TP5_TREATMENT && config.visual?.tp5Treatment
  const mapTitle = (
    <Title
      title={title}
      superTitle={processedSuperTitle}
      titleStyle={isTp5Treatment ? 'small' : general.titleStyle}
      showTitle={general.showTitle}
      config={config}
      classes={['map-title', general.showTitle === true ? 'visible' : 'hidden', `${headerColor}`]}
    />
  )

  const STATE_CODE = 'state-code'
  const COUNTY_CODE = 'county-code'
  const setFilteredStateCode = (stateCode: string) => {
    const stateCodePattern = /^\d\d$/
    const normalizedStateCode = stateCodePattern.test(stateCode) ? stateCode : ''
    if (!normalizedStateCode) {
      updateQueryParams({ [STATE_CODE]: '', [COUNTY_CODE]: '' })
    } else if (normalizedStateCode !== filteredStateCode) {
      updateQueryParams({ [STATE_CODE]: normalizedStateCode, [COUNTY_CODE]: '' })
    }
  }

  const setFilteredCountyCode = (countyCode: string) => {
    const countyCodePattern = /^\d{5}$/
    const normalizedCountyCode = countyCodePattern.test(countyCode) ? countyCode : ''
    if (!normalizedCountyCode) {
      removeQueryParam(COUNTY_CODE)
    } else {
      updateQueryParam(COUNTY_CODE, normalizedCountyCode)
    }
  }

  const setFilteredStateCodeFromQuery = (stateCode: string) => {
    dispatch({ type: 'SET_FILTERED_STATE_CODE', payload: stateCode })
  }

  const setFilteredCountyCodeFromQuery = (countyCode: string) => {
    dispatch({ type: 'SET_FILTERED_COUNTY_CODE', payload: countyCode })
  }

  useQueryParamsListener(STATE_CODE, setFilteredStateCodeFromQuery)
  useQueryParamsListener(COUNTY_CODE, setFilteredCountyCodeFromQuery)

  const mapProps = {
    setParentConfig,
    container,
    content: modal,
    currentViewport,
    vizViewport,
    customNavigationHandler,
    dimensions,
    filteredCountryCode,
    filteredCountyCode,
    filteredStateCode,
    isDashboard,
    isEditor,
    logo,
    mapId,
    position,
    projection,
    runtimeData,
    runtimeFilters,
    runtimeLegend,
    scale,
    setConfig,
    setFilteredCountyCode,
    setFilteredStateCode,
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

  // Memoize data table preparation and county filtering to avoid recomputing on unrelated renders.
  const { dataTableConfig, dataTableColumns, dataTableRuntimeData } = useMemo(() => {
    let preparedConfig = config
    let preparedColumns = columns
    let preparedRuntimeData = runtimeData

    if (config.smallMultiples?.mode) {
      const prepared = prepareSmallMultiplesDataTable(config, columns, runtimeData)
      preparedConfig = prepared.config
      preparedColumns = prepared.columns
      preparedRuntimeData = prepared.runtimeData
    }

    if (config.general.geoType === 'us-county' && filteredStateCode) {
      preparedRuntimeData = filterCountyTableRuntimeDataByStateCode(
        preparedRuntimeData,
        filteredStateCode,
        preparedConfig
      )
    }

    return {
      dataTableConfig: preparedConfig,
      dataTableColumns: preparedColumns,
      dataTableRuntimeData: preparedRuntimeData
    }
  }, [config, columns, runtimeData, filteredStateCode])

  if (!config.data) return <></>

  const tabId = handleMapTabbing(config, loading, legendId)

  // this only shows in Dashboard config mode and only if Show Table is also set
  const tableLink = (
    <a
      href={`#data-table-${config.dataKey}`}
      className='margin-left-href'
      onClick={() => {
        publishAnalyticsEvent({
          vizType: config.type,
          vizSubType: getVizSubType(config),
          eventType: `link_to_data_table_click`,
          eventAction: 'click',
          eventLabel: `${interactionLabel}`,
          vizTitle: getVizTitle(config),
          specifics: `table: #data-table-${config.dataKey}`
        })
      }}
    >
      {config.dataKey} (Go to Table)
    </a>
  )

  const applyStateFilter = (config: MapConfig): MapConfig => {
    if (config.general.showStateDropdown && config.general.geoType === 'us-county') {
      const stateFilter: VizFilter = {
        columnName: 'state',
        label: 'Select Location',
        filterStyle: 'dropdown',
        labels: supportedStatesFipsCodes,
        values: Object.keys(supportedStatesFipsCodes),
        resetLabel: 'United States',
        staticFilter: true,
        active: filteredStateCode
      }
      let countyFilter: VizFilter | undefined
      if (filteredStateCode) {
        const counties = Object.keys(supportedCounties).filter(countyCode => countyCode.startsWith(filteredStateCode))
        countyFilter = {
          columnName: 'county',
          label: 'Select County',
          filterStyle: 'dropdown',
          labels: supportedCounties,
          values: counties,
          resetLabel: 'All Counties',
          staticFilter: true,
          active: filteredCountyCode
        }
      }
      return {
        ...config,
        filters: [...(config.filters || []), stateFilter, ...(countyFilter ? [countyFilter] : [])]
      }
    }
    return config
  }

  return (
    <LegendMemoProvider legendMemo={legendMemo} legendSpecialClassLastMemo={legendSpecialClassLastMemo}>
      <ConfigContext.Provider value={mapProps}>
        <MapDispatchContext.Provider value={dispatch}>
          <VisualizationContainer
            config={config}
            isEditor={isEditor}
            ref={outerContainerRef}
            currentViewport={currentViewport}
            imageId={imageId}
            editorPanel={<EditorPanel datasets={datasets} />}
          >
            {requiredColumns?.length > 0 && (
              <Waiting requiredColumns={requiredColumns} className={displayPanel ? `waiting` : `waiting collapsed`} />
            )}
            {!runtimeData.init && (general.type === 'navigation' || runtimeLegend) && (
              <VisualizationContent
                innerClassName={[
                  'cdc-map-inner-container',
                  currentViewport,
                  config?.runtime?.editorErrorMessage.length > 0 ? 'type-map--has-error' : ''
                ]
                  .filter(Boolean)
                  .join(' ')}
                innerProps={{ 'aria-label': 'Map: ' + title, ref: innerContainerRef }}
                bodyWrapClassName={isTp5Treatment ? 'cdc-callout d-flex flex-column' : ''}
                bodyClassName={[
                  !config.visual?.border || isTp5Treatment ? 'no-borders' : '',
                  config.visual?.border && !isTp5Treatment ? 'component--has-legacy-border' : '',
                  config.visual?.borderColorTheme ? 'component--has-border-color-theme' : '',
                  config.visual?.accent ? 'component--has-accent' : '',
                  config.visual?.background ? 'component--has-background' : '',
                  config.visual?.hideBackgroundColor ? 'component--hide-background-color' : '',
                  isTp5Treatment ? 'component--tp5-treatment' : ''
                ]
                  .filter(Boolean)
                  .join(' ')}
                filters={
                  config?.filters?.length > 0 || config.general.showStateDropdown ? (
                    <Filters
                      config={applyStateFilter(config)}
                      setFilters={setFilters}
                      dimensions={dimensions}
                      interactionLabel={interactionLabel}
                    />
                  ) : undefined
                }
                bodySubtext={
                  processedSubtext.length > 0 ? <p className='subtext cove-prose'>{parse(processedSubtext)}</p> : null
                }
                bodyFooter={
                  <>
                    {isDashboard && config.table?.forceDisplay && config.table.showDataTableLink
                      ? tableLink
                      : link && link}

                    {shouldShowDataTable(config, table, general, loading) ? (
                      <DataTable
                        columns={dataTableColumns}
                        config={dataTableConfig}
                        currentViewport={currentViewport}
                        displayGeoName={displayGeoName}
                        expandDataTable={table.expanded}
                        formatLegendLocation={key =>
                          formatLegendLocation(key, dataTableRuntimeData?.[key]?.[config.columns.geo.name])
                        }
                        imageRef={imageId}
                        indexTitle={table.indexLabel}
                        innerContainerRef={innerContainerRef}
                        legendMemo={legendMemo}
                        legendSpecialClassLastMemo={legendSpecialClassLastMemo}
                        navigationHandler={navigationHandler}
                        outerContainerRef={outerContainerRef}
                        rawData={dataTableConfig.data}
                        runtimeData={dataTableRuntimeData}
                        runtimeLegend={runtimeLegend}
                        showDownloadImgButton={showDownloadImgButton}
                        showDownloadPdfButton={showDownloadPdfButton}
                        includeContextInDownload={config.general?.includeContextInDownload}
                        tabbingId={tabId}
                        tableTitle={table.label}
                        vizTitle={general.title}
                        applyLegendToRow={applyLegendToRow}
                        getPatternForRow={getPatternForRow}
                        wrapColumns={table.wrapColumns}
                        hasSubtextAbove={processedSubtext.length > 0}
                        interactionLabel={interactionLabel}
                      />
                    ) : (
                      (showDownloadImgButton || showDownloadPdfButton) && (
                        <div className='w-100 d-flex justify-content-end'>
                          <MediaControls.Section classes={['download-links', 'mt-4', 'mb-2']}>
                            {showDownloadImgButton && (
                              <MediaControls.DownloadLink
                                type='image'
                                title='Download Map as Image'
                                state={config}
                                elementToCapture={imageId}
                                interactionLabel={interactionLabel}
                                includeContextInDownload={config.general?.includeContextInDownload}
                              />
                            )}
                            {showDownloadPdfButton && (
                              <MediaControls.DownloadLink
                                type='pdf'
                                title='Download Map as PDF'
                                state={config}
                                elementToCapture={imageId}
                                interactionLabel={interactionLabel}
                                includeContextInDownload={config.general?.includeContextInDownload}
                              />
                            )}
                          </MediaControls.Section>
                        </div>
                      )
                    )}

                    {config.annotations?.length > 0 && <Annotation.Dropdown />}

                    {processedFootnotes && (
                      <section className='footnotes cove-prose pt-2 mt-4'>{parse(processedFootnotes)}</section>
                    )}
                  </>
                }
                header={isTp5Treatment ? null : mapTitle}
                messageIsIntroText={!!processedIntroText}
                message={processedIntroText ? <div className='cove-prose'>{parse(processedIntroText)}</div> : null}
              >
                <>
                  {isTp5Treatment && <img src={CalloutFlag} alt='' className='cdc-callout__flag' aria-hidden='true' />}
                  {isTp5Treatment && mapTitle}
                  {config?.runtime?.editorErrorMessage.length > 0 && <Error />}
                  <SkipTo skipId={tabId} skipMessage='Skip Over Map Container' />
                  {config?.annotations?.length > 0 && (
                    <SkipTo skipId={tabId} skipMessage={`Skip over annotations`} key={`skip-annotations`} />
                  )}

                  <div
                    role='region'
                    tabIndex={0}
                    className={getMapContainerClasses(config, modal, currentViewport).join(' ')}
                    onClick={e => closeModal(e, modal)}
                    onKeyDown={e => {
                      if (e.key === 'Enter') {
                        closeModal(e, modal)
                      }
                    }}
                  >
                    <MapContainer
                      config={config}
                      modal={modal}
                      currentViewport={currentViewport}
                      geoType={geoType}
                      general={general}
                      logo={logo}
                      mapSvgRef={mapSvg}
                    />

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
                </>
              </VisualizationContent>
            )}

            <div aria-live='assertive' className='cdcdataviz-sr-only'>
              {accessibleStatus}
            </div>

            {!isDraggingAnnotation && 'hover' === tooltips.appearanceType && (
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
            <FootnotesStandAlone
              config={config.footnotes}
              filters={config.filters?.filter(f => f.filterFootnotes)}
              markupVariables={config.markupVariables}
              enableMarkupVariables={config.enableMarkupVariables}
              data={config.data}
              dataMetadata={config.dataMetadata}
            />
          </VisualizationContainer>
        </MapDispatchContext.Provider>
      </ConfigContext.Provider>
    </LegendMemoProvider>
  )
}

export default CdcMapComponent
