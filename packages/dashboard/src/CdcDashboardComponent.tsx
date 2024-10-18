import React, { useState, useEffect, useCallback, useMemo, useReducer, useContext } from 'react'

// IE11
// import 'core-js/stable'
import 'whatwg-fetch'
import ResizeObserver from 'resize-observer-polyfill'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import parse from 'html-react-parser'

import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import { GlobalContextProvider } from '@cdc/core/components/GlobalContext'
import { DashboardContext, DashboardDispatchContext } from './DashboardContext'

import OverlayFrame from '@cdc/core/components/ui/OverlayFrame'
import Loading from '@cdc/core/components/Loading'
import { DataTransform } from '@cdc/core/helpers/DataTransform'
import getViewport from '@cdc/core/helpers/getViewport'

import CdcChart from '@cdc/chart/src/CdcChart'
import CdcDataBite from '@cdc/data-bite/src/CdcDataBite'
import CdcMap from '@cdc/map/src/CdcMap'
import CdcWaffleChart from '@cdc/waffle-chart/src/CdcWaffleChart'
import CdcMarkupInclude from '@cdc/markup-include/src/CdcMarkupInclude'
import CdcFilteredText from '@cdc/filtered-text/src/CdcFilteredText'

import Grid from './components/Grid'
import Header from './components/Header/Header'
import DataTable from '@cdc/core/components/DataTable'
import MediaControls from '@cdc/core/components/MediaControls'

import './scss/main.scss'

import VisualizationsPanel from './components/VisualizationsPanel'
import dashboardReducer from './store/dashboard.reducer'
import { filterData } from './helpers/filterData'
import { getVizKeys } from './helpers/getVizKeys'
import Title from '@cdc/core/components/ui/Title'
import { type TableConfig } from '@cdc/core/components/DataTable/types/TableConfig'

// types
import { type SharedFilter } from './types/SharedFilter'
import { type APIFilter } from './types/APIFilter'
import { type WCMSProps } from '@cdc/core/types/WCMSProps'
import { type InitialState } from './types/InitialState'
import MultiTabs from './components/MultiConfigTabs'
import _ from 'lodash'
import EditorContext from '../../editor/src/ConfigContext'
import { APIFilterDropdowns, DropdownOptions } from './components/DashboardFilters'
import DataTableStandAlone from '@cdc/core/components/DataTable/DataTableStandAlone'
import { ViewPort } from '@cdc/core/types/ViewPort'
import VisualizationRow from './components/VisualizationRow'
import { getVizConfig } from './helpers/getVizConfig'
import { getFilteredData } from './helpers/getFilteredData'
import { getVizRowColumnLocator } from './helpers/getVizRowColumnLocator'
import Layout from '@cdc/core/components/Layout'
import FootnotesStandAlone from '@cdc/core/components/Footnotes/FootnotesStandAlone'
import * as reloadURLHelpers from './helpers/reloadURLHelpers'
import { addValuesToDashboardFilters } from './helpers/addValuesToDashboardFilters'
import { DashboardFilters } from './types/DashboardFilters'
import DashboardSharedFilters from './components/DashboardFilters'
import ExpandCollapseButtons from './components/ExpandCollapseButtons'
import { hasDashboardApplyBehavior } from './helpers/hasDashboardApplyBehavior'
import { loadAPIFiltersFactory } from './helpers/loadAPIFilters'
import Loader from '@cdc/core/components/Loader'

type DashboardProps = Omit<WCMSProps, 'configUrl'> & {
  initialState: InitialState
}

export default function CdcDashboard({ initialState, isEditor = false, isDebug = false }: DashboardProps) {
  const [state, dispatch] = useReducer(dashboardReducer, initialState)
  const editorContext = useContext(EditorContext)
  const [apiFilterDropdowns, setAPIFilterDropdowns] = useState<APIFilterDropdowns>({})
  const [currentViewport, setCurrentViewport] = useState<ViewPort>('lg')
  const [imageId] = useState(`cove-${Math.random().toString(16).slice(-4)}`)
  const [allExpanded, setAllExpanded] = useState(true)
  const [apiLoading, setAPILoading] = useState(false)

  const isPreview = state.tabSelected === 'Dashboard Preview'

  const inNoDataState = useMemo(() => {
    const vals = Object.values(state.data)
    if (!vals.length) return true
    return vals.some(val => val === undefined)
  }, [state.data])

  const vizRowColumnLocator = getVizRowColumnLocator(state.config.rows)

  const transform = new DataTransform()

  const autoLoadFilterIndexes = useMemo(() => {
    return Object.values(state.config.visualizations)
      .filter(v => v.type === 'dashboardFilters')
      .reduce((acc, viz: DashboardFilters) => (viz.autoLoad ? [...acc, ...viz.sharedFilterIndexes] : acc), [])
  }, [state.config.visualizations])

  const loadAPIFilters = loadAPIFiltersFactory(dispatch, setAPIFilterDropdowns, autoLoadFilterIndexes)

  const reloadURLData = async (newFilters?: SharedFilter[]) => {
    const config = _.cloneDeep(state.config)
    if (!config.datasets) return
    const filters = newFilters || config.dashboard.sharedFilters
    const datasetKeys = reloadURLHelpers.getDatasetKeys(config)

    const newData = _.cloneDeep(state.data)
    const newDatasets = _.cloneDeep(config.datasets)
    let dataWasFetched = false
    let newFileName = ''

    for (let i = 0; i < datasetKeys.length; i++) {
      const datasetKey = datasetKeys[i]
      const dataset = config.datasets[datasetKey]

      if (dataset.dataUrl && filters) {
        const dataUrl = new URL(dataset.runtimeDataUrl || dataset.dataUrl, window.location.origin)
        const currentQSParams = Object.fromEntries(new URLSearchParams(dataUrl.search))
        const updatedQSParams = {}
        filters.forEach(filter => {
          if (
            filter.type === 'urlfilter' &&
            reloadURLHelpers.filterUsedByDataUrl(filter, datasetKey, config.visualizations)
          ) {
            if (filter.filterBy === 'File Name') {
              newFileName = reloadURLHelpers.getNewFileName(newFileName, filter, datasetKey)
            }

            if (!!filter.queryParameter) {
              if (updatedQSParams[filter.queryParameter]) {
                updatedQSParams[filter.queryParameter] = updatedQSParams[filter.queryParameter] + filter.active
              } else {
                updatedQSParams[filter.queryParameter] = filter.active
              }
            }

            if (!!filter.setByQueryParameter) {
              const windowQueryParams = Object.fromEntries(new URLSearchParams(window.location.search))
              const filterValue = windowQueryParams[filter.setByQueryParameter]
              if (filter.apiFilter) {
                updatedQSParams[filter.apiFilter.valueSelector] = filterValue
              } else {
                updatedQSParams[filter.setByQueryParameter] = filterValue
              }
            }

            if (filter.apiFilter && filter.active) {
              updatedQSParams[filter.apiFilter.valueSelector] = filter.active
              if (filter.apiFilter.subgroupValueSelector && filter.subGrouping.active) {
                updatedQSParams[filter.apiFilter.subgroupValueSelector] = filter.subGrouping.active
              }
            }
          }
        })

        if (!!newFilters || reloadURLHelpers.isUpdateNeeded(filters, currentQSParams, updatedQSParams)) {
          dataWasFetched = true
          const dataUrlFinal = reloadURLHelpers.getDataURL(
            { ...currentQSParams, ...updatedQSParams },
            dataUrl,
            newFileName
          )

          setAPILoading(true)
          await fetchRemoteData(dataUrlFinal).then(responseData => {
            let data: any[] = responseData
            if (responseData && dataset.dataDescription) {
              try {
                data = transform.autoStandardize(data)
                data = transform.developerStandardize(data, dataset.dataDescription)
              } catch (e) {
                //Data not able to be standardized, leave as is
              }
            }
            newDatasets[datasetKey].data = data
            newDatasets[datasetKey].runtimeDataUrl = dataUrlFinal
            newData[datasetKey] = data
          })
        }
      }
    }

    if (dataWasFetched) {
      dispatch({ type: 'SET_DATA', payload: newData })
      const filtersWithNewValues = addValuesToDashboardFilters(filters, newData)
      const dashboardConfig = newFilters
        ? { ...config.dashboard, sharedFilters: filtersWithNewValues }
        : config.dashboard
      const filteredData = getFilteredData(
        { ...state, config: { ...state.config, dashboard: dashboardConfig } },
        {},
        newData
      )
      dispatch({ type: 'SET_FILTERED_DATA', payload: filteredData })
      const visualizations = reloadURLHelpers.getVisualizationsWithFormattedData(config.visualizations, newData)
      dispatch({ type: 'SET_CONFIG', payload: { dashboard: dashboardConfig, datasets: newDatasets, visualizations } })
      setAPILoading(false)
    }
  }

  const findFilterTier = (filters: SharedFilter[], sharedFilter: SharedFilter) => {
    if (!sharedFilter.parents?.length) {
      return 1
    } else {
      let parent = filters.find(filter => sharedFilter.parents!.includes(filter.key))
      if (!parent) return 1
      return 1 + findFilterTier(filters, parent)
    }
  }

  const setSharedFilter = (key, datum) => {
    const { config: newConfig, filteredData } = _.cloneDeep(state)

    for (let i = 0; i < newConfig.dashboard.sharedFilters.length; i++) {
      const filter = newConfig.dashboard.sharedFilters[i]
      if (filter.setBy === key) {
        if (!!filter.columnName) {
          filter.active = datum[filter.columnName]
        }
        break
      }
    }

    const newFilteredData = getFilteredData({ ...state, config: newConfig }, filteredData)

    dispatch({ type: 'SET_FILTERED_DATA', payload: newFilteredData })
    dispatch({ type: 'SET_CONFIG', payload: newConfig })
    dispatch({ type: 'SET_SHARED_FILTERS', payload: newConfig.dashboard.sharedFilters })
  }

  useEffect(() => {
    if (isEditor && !isPreview) return
    const { config } = state
    if (!hasDashboardApplyBehavior(config.visualizations)) {
      reloadURLData()
    }

    const sharedFiltersWithValues = addValuesToDashboardFilters(config.dashboard.sharedFilters, state.data)
    loadAPIFilters(sharedFiltersWithValues, apiFilterDropdowns)
    updateFilteredData(sharedFiltersWithValues)
  }, [isEditor, isPreview, state.config?.activeDashboard])

  const updateChildConfig = (visualizationKey, newConfig) => {
    const config = _.cloneDeep(state.config)
    const updatedConfig = _.pick(config, ['visualizations', 'multiDashboards'])
    updatedConfig.visualizations[visualizationKey] = newConfig
    updatedConfig.visualizations[visualizationKey].formattedData = config.visualizations[visualizationKey].formattedData
    if (config.multiDashboards) {
      const activeDashboard = config.activeDashboard
      const multiDashboards = [...config.multiDashboards]
      const label = multiDashboards[activeDashboard].label
      const toSave = { label, visualizations: updatedConfig.visualizations, ..._.pick(config, ['dashboard', 'rows']) }
      multiDashboards[activeDashboard] = toSave
      updatedConfig.multiDashboards = multiDashboards
    }

    dispatch({ type: 'SET_CONFIG', payload: updatedConfig })
    // Pass up to <CdcEditor /> if it exists when config state changes
    if (isEditor) {
      editorContext.setTempConfig(updatedConfig)
    }
  }

  const updateFilteredData = (sharedFilters = undefined) => {
    const clonedState = _.cloneDeep(state)
    if (sharedFilters) clonedState.config.dashboard.sharedFilters = sharedFilters
    const newFilteredData = getFilteredData(clonedState)
    dispatch({ type: 'SET_FILTERED_DATA', payload: newFilteredData })
  }

  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      let newViewport = getViewport(entry.contentRect.width)

      setCurrentViewport(newViewport)
    }
  })

  const outerContainerRef = useCallback(node => {
    if (node !== null) {
      resizeObserver.observe(node)
    }
  }, [])

  // Prevent render if loading
  if (state.loading) return <Loading />

  let body: JSX.Element | null = null
  // Editor mode
  if (isEditor && !isPreview) {
    let subVisualizationEditing = false

    getVizKeys(state.config).forEach(visualizationKey => {
      const rowNumber = vizRowColumnLocator[visualizationKey]?.row
      const visualizationConfig = getVizConfig(
        visualizationKey,
        rowNumber,
        state.config,
        state.data,
        state.filteredData
      )
      visualizationConfig.uid = visualizationKey
      if (visualizationConfig.type === 'footnotes') visualizationConfig.formattedData = undefined
      const setsSharedFilter =
        state.config.dashboard.sharedFilters &&
        state.config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === visualizationKey).length > 0
      const setSharedFilterValue = setsSharedFilter
        ? state.config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === visualizationKey)[0].active
        : undefined

      if (visualizationConfig.editing) {
        subVisualizationEditing = true

        const _updateConfig = newConfig => {
          let dataCorrectedConfig = visualizationConfig.originalFormattedData
            ? { ...newConfig, formattedData: visualizationConfig.originalFormattedData }
            : newConfig
          updateChildConfig(visualizationKey, dataCorrectedConfig)
        }

        switch (visualizationConfig.type) {
          case 'chart':
            body = (
              <>
                <Header visualizationKey={visualizationKey} subEditor='Chart' />
                <CdcChart
                  key={visualizationKey}
                  config={visualizationConfig}
                  isEditor={true}
                  isDebug={isDebug}
                  setConfig={_updateConfig}
                  setSharedFilter={setsSharedFilter ? setSharedFilter : undefined}
                  setSharedFilterValue={setSharedFilterValue}
                  dashboardConfig={state.config}
                  isDashboard={true}
                  configUrl={undefined}
                  setEditing={undefined}
                  hostname={undefined}
                  link={undefined}
                />
              </>
            )
            break
          case 'map':
            body = (
              <>
                <Header visualizationKey={visualizationKey} subEditor='Map' />
                <CdcMap
                  key={visualizationKey}
                  config={visualizationConfig}
                  isEditor={true}
                  isDebug={isDebug}
                  setConfig={_updateConfig}
                  setSharedFilter={setsSharedFilter ? setSharedFilter : undefined}
                  setSharedFilterValue={setSharedFilterValue}
                  isDashboard={true}
                  showLoader={false}
                  dashboardConfig={state.config}
                />
              </>
            )
            break
          case 'data-bite':
            body = (
              <>
                <Header visualizationKey={visualizationKey} subEditor='Data Bite' />
                <CdcDataBite
                  key={visualizationKey}
                  config={{ ...visualizationConfig, newViz: true }}
                  isEditor={true}
                  setConfig={_updateConfig}
                  isDashboard={true}
                />
              </>
            )
            break
          case 'waffle-chart':
            body = (
              <>
                <Header visualizationKey={visualizationKey} subEditor='Waffle Chart' />
                <CdcWaffleChart
                  key={visualizationKey}
                  config={visualizationConfig}
                  isEditor={true}
                  setConfig={_updateConfig}
                  isDashboard={true}
                  configUrl={undefined}
                />
              </>
            )
            break
          case 'markup-include':
            body = (
              <>
                <Header visualizationKey={visualizationKey} subEditor='Markup Include' />
                <CdcMarkupInclude
                  key={visualizationKey}
                  config={visualizationConfig}
                  isEditor={true}
                  setConfig={_updateConfig}
                  isDashboard={true}
                  configUrl={undefined}
                />
              </>
            )
            break
          case 'filtered-text':
            body = (
              <>
                <Header visualizationKey={visualizationKey} subEditor='Filtered Text' />
                <CdcFilteredText
                  key={visualizationKey}
                  config={visualizationConfig}
                  isEditor={true}
                  setConfig={_updateConfig}
                  isDashboard={true}
                  configUrl={undefined}
                />
              </>
            )
            break
          case 'dashboardFilters':
            const hideFilter = visualizationConfig.autoLoad && inNoDataState
            body = !hideFilter ? (
              <>
                <Header visualizationKey={visualizationKey} subEditor='Filter Dropdowns' />
                <DashboardSharedFilters
                  isEditor={true}
                  visualizationConfig={visualizationConfig}
                  apiFilterDropdowns={apiFilterDropdowns}
                  setConfig={_updateConfig}
                />
              </>
            ) : (
              <></>
            )
            break
          case 'table':
            body = (
              <>
                <Header visualizationKey={visualizationKey} subEditor='Table' />
                <DataTableStandAlone
                  visualizationKey={visualizationKey}
                  config={visualizationConfig}
                  isEditor={true}
                  updateConfig={_updateConfig}
                />
              </>
            )
            break
          case 'footnotes':
            body = (
              <>
                <Header visualizationKey={visualizationKey} subEditor='Footnotes' />
                <FootnotesStandAlone
                  visualizationKey={visualizationKey}
                  config={{ ...visualizationConfig, datasets: state.config.datasets }}
                  isEditor={true}
                  updateConfig={_updateConfig}
                />
              </>
            )
          default:
            body = <></>
            break
        }
      }
    })

    if (!subVisualizationEditing) {
      body = (
        <DndProvider backend={HTML5Backend}>
          <div className='header-container'>
            <Header />
            <VisualizationsPanel />
          </div>

          <div className='layout-container'>
            <Grid />
          </div>
        </DndProvider>
      )
    }
  } else {
    const { config } = state
    const { title, description } = config.dashboard || {}

    body = (
      <>
        {isEditor && <Header />}
        {apiLoading && <Loader fullScreen={true} />}
        <MultiTabs isEditor={isEditor && !isPreview} />
        <Layout.Responsive isEditor={isEditor}>
          <div className={`cdc-dashboard-inner-container${isEditor ? ' is-editor' : ''}`}>
            <Title
              title={title}
              isDashboard={true}
              classes={[`dashboard-title`, `${config.dashboard.theme ?? 'theme-blue'}`]}
            />
            {/* Description */}
            {description && <div className='subtext'>{parse(description)}</div>}
            {/* Visualizations */}
            {config.rows &&
              config.rows
                .filter(row => row.columns.filter(col => col.widget).length !== 0)
                .map((row, index) => {
                  if (row.multiVizColumn && (isPreview || !isEditor)) {
                    const filteredData = getFilteredData(state, _.cloneDeep(state.data))
                    const data = filteredData[index] ?? row.formattedData
                    const dataGroups = {}
                    data.forEach(d => {
                      const groupKey = d[row.multiVizColumn]
                      if (!dataGroups[groupKey]) dataGroups[groupKey] = []
                      dataGroups[groupKey].push(d)
                    })
                    return (
                      <>
                        {/* Expand/Collapse All */}
                        {row.expandCollapseAllButtons === true && (
                          <ExpandCollapseButtons setAllExpanded={setAllExpanded} />
                        )}
                        {Object.keys(dataGroups).map(groupName => {
                          const dataValue = dataGroups[groupName]
                          return (
                            <VisualizationRow
                              key={`row__${index}__${groupName}`}
                              allExpanded={allExpanded}
                              filteredDataOverride={dataValue}
                              groupName={groupName}
                              row={row}
                              rowIndex={index}
                              setSharedFilter={setSharedFilter}
                              updateChildConfig={updateChildConfig}
                              apiFilterDropdowns={apiFilterDropdowns}
                              currentViewport={currentViewport}
                            />
                          )
                        })}
                      </>
                    )
                  } else {
                    return (
                      <VisualizationRow
                        key={`row__${index}`}
                        allExpanded={false}
                        groupName={''}
                        row={row}
                        rowIndex={index}
                        setSharedFilter={setSharedFilter}
                        updateChildConfig={updateChildConfig}
                        apiFilterDropdowns={apiFilterDropdowns}
                        currentViewport={currentViewport}
                      />
                    )
                  }
                })}

            {/* Image or PDF Inserts */}
            <section className='download-buttons'>
              {config.table?.downloadImageButton && (
                <MediaControls.Button
                  title='Download Dashboard as Image'
                  type='image'
                  state={config}
                  text='Download Dashboard Image'
                  elementToCapture={imageId}
                />
              )}
              {config.table?.downloadPdfButton && (
                <MediaControls.Button
                  title='Download Dashboard as PDF'
                  type='pdf'
                  state={config}
                  text='Download Dashboard PDF'
                  elementToCapture={imageId}
                />
              )}
            </section>

            {/* Data Table */}
            {config.table?.show && config.data && (
              <DataTable
                config={config}
                rawData={config.data?.[0]?.tableData ? config.data?.[0]?.tableData : config.data}
                runtimeData={config.data?.[0]?.tableData ? config.data?.[0]?.tableData : config.data || []}
                expandDataTable={config.table.expanded}
                showDownloadButton={config.table.download}
                tableTitle={config.dashboard.title || ''}
                viewport={currentViewport}
                tabbingId={config.dashboard.title || ''}
                outerContainerRef={outerContainerRef}
                imageRef={imageId}
                isDebug={isDebug}
                isEditor={isEditor}
              />
            )}
            {config.table?.show &&
              config.datasets &&
              Object.keys(config.datasets).map(datasetKey => {
                //For each dataset, find any shared filters that apply to all visualizations using the dataset

                //Gets list of visuailzations using the dataset
                const vizKeysUsingDataset: string[] = getVizKeys(config).filter(visualizationKey => {
                  return config.visualizations[visualizationKey].dataKey === datasetKey
                })

                //Checks shared filters against list to see if all visualizations are represented
                let applicableFilters: SharedFilter[] = []
                config.dashboard.sharedFilters?.forEach(sharedFilter => {
                  let allMatch = true
                  vizKeysUsingDataset.forEach(visualizationKey => {
                    if (sharedFilter.usedBy && sharedFilter.usedBy.indexOf(visualizationKey) === -1) {
                      allMatch = false
                    }
                  })
                  if (allMatch) {
                    applicableFilters.push(sharedFilter)
                  }
                })

                //Applys any applicable filters to the Table
                const filteredTableData =
                  applicableFilters.length > 0
                    ? filterData(applicableFilters, config.datasets[datasetKey].data)
                    : undefined
                return (
                  <div
                    className='multi-table-container'
                    id={`data-table-${datasetKey}`}
                    key={`data-table-${datasetKey}`}
                  >
                    <DataTable
                      config={config as TableConfig}
                      dataConfig={config.datasets[datasetKey]}
                      rawData={config.datasets[datasetKey].data?.[0]?.tableData || config.datasets[datasetKey].data}
                      runtimeData={
                        config.datasets[datasetKey].data?.[0]?.tableData ||
                        filteredTableData ||
                        config.datasets[datasetKey].data ||
                        []
                      }
                      expandDataTable={config.table.expanded}
                      tableTitle={datasetKey}
                      viewport={currentViewport}
                      tabbingId={datasetKey}
                    />
                  </div>
                )
              })}
          </div>
        </Layout.Responsive>
      </>
    )
  }

  const dashboardContainerClasses = ['cdc-open-viz-module', 'type-dashboard', `${currentViewport}`]

  return (
    <GlobalContextProvider>
      <DashboardContext.Provider
        value={{
          ...state,
          setParentConfig: editorContext.setTempConfig,
          outerContainerRef,
          isDebug,
          loadAPIFilters,
          setAPIFilterDropdowns,
          reloadURLData
        }}
      >
        <DashboardDispatchContext.Provider value={dispatch}>
          <div className={dashboardContainerClasses.join(' ')} ref={outerContainerRef} data-download-id={imageId}>
            {body}
          </div>
          <OverlayFrame />
        </DashboardDispatchContext.Provider>
      </DashboardContext.Provider>
    </GlobalContextProvider>
  )
}
