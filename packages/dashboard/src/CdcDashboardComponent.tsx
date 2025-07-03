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

import Grid from './components/Grid'
import Header from './components/Header/Header'
import DataTable from '@cdc/core/components/DataTable'
import MediaControls from '@cdc/core/components/MediaControls'

import './scss/main.scss'

import VisualizationsPanel from './components/VisualizationsPanel'
import dashboardReducer from './store/dashboard.reducer'
import errorMessagesReducer from './store/errorMessage/errorMessage.reducer'
import { filterData } from './helpers/filterData'
import { getVizKeys } from './helpers/getVizKeys'
import Title from '@cdc/core/components/ui/Title'
import { type TableConfig } from '@cdc/core/components/DataTable/types/TableConfig'

// types
import { type SharedFilter } from './types/SharedFilter'
import { type WCMSProps } from '@cdc/core/types/WCMSProps'
import { type InitialState } from './types/InitialState'
import MultiTabs from './components/MultiConfigTabs'
import _ from 'lodash'
import EditorContext from '../../editor/src/ConfigContext'
import { APIFilterDropdowns } from './components/DashboardFilters'
import DataTableStandAlone from '@cdc/core/components/DataTable/DataTableStandAlone'
import { ViewPort } from '@cdc/core/types/ViewPort'
import VisualizationRow from './components/VisualizationRow'
import { getVizConfig } from './helpers/getVizConfig'
import { getFilteredData } from './helpers/getFilteredData'
import { getVizRowColumnLocator } from './helpers/getVizRowColumnLocator'
import Layout from '@cdc/core/components/Layout'
import * as reloadURLHelpers from './helpers/reloadURLHelpers'
import { addValuesToDashboardFilters } from './helpers/addValuesToDashboardFilters'
import { DashboardFilters } from './types/DashboardFilters'
import DashboardSharedFilters from './components/DashboardFilters'
import { loadAPIFiltersFactory } from './helpers/loadAPIFilters'
import Loader from '@cdc/core/components/Loader'
import Alert from '@cdc/core/components/Alert'
import { shouldLoadAllFilters } from './helpers/shouldLoadAllFilters'
import { subscribe, unsubscribe } from '@cdc/core/helpers/events'
import DashboardEditors from './components/DashboardEditors'

type DashboardProps = Omit<WCMSProps, 'configUrl'> & {
  initialState: InitialState
}

export default function CdcDashboard({ initialState, isEditor = false, isDebug = false }: DashboardProps) {
  const [state, dispatch] = useReducer(dashboardReducer, initialState)
  const [errorMessages, dispatchErrorMessages] = useReducer(errorMessagesReducer, [])
  const editorContext = useContext(EditorContext)
  const [apiFilterDropdowns, setAPIFilterDropdowns] = useState<APIFilterDropdowns>({})
  const [currentViewport, setCurrentViewport] = useState<ViewPort>('lg')
  const [imageId] = useState(`cove-${Math.random().toString(16).slice(-4)}`)
  const [allExpanded, setAllExpanded] = useState(true)
  const [apiLoading, setAPILoading] = useState(false)

  const isPreview = state.tabSelected === 'Dashboard Preview'

  const inNoDataState = useMemo(() => {
    const vals = reloadURLHelpers.getDatasetKeys(state.config).map(key => state.data[key])
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

  const loadAPIFilters = loadAPIFiltersFactory(
    dispatch,
    dispatchErrorMessages,
    setAPIFilterDropdowns,
    autoLoadFilterIndexes
  )

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
      const windowQueryParams = Object.fromEntries(new URLSearchParams(window.location.search))
      const loadQueryParam = windowQueryParams[dataset.loadQueryParam || '']
      if (dataset.dataUrl && (filters || loadQueryParam)) {
        const dataUrl = new URL(dataset.runtimeDataUrl || dataset.dataUrl, window.location.origin)
        const currentQSParams = Object.fromEntries(new URLSearchParams(dataUrl.search))
        const updatedQSParams = {}
        if (loadQueryParam) {
          updatedQSParams[dataset.loadQueryParam] = loadQueryParam
        }
        filters?.forEach(filter => {
          if (
            filter.type === 'urlfilter' &&
            reloadURLHelpers.filterUsedByDataUrl(filter, datasetKey, config.visualizations, config.rows)
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
              const filterValue = windowQueryParams[filter.setByQueryParameter]
              const queryParam = filter.apiFilter?.valueSelector || filter.setByQueryParameter
              if (filterValue) {
                updatedQSParams[queryParam] = filterValue
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

        const dataNeedsUpdate = reloadURLHelpers.isUpdateNeeded(filters, currentQSParams, updatedQSParams)

        if (!!newFilters || dataNeedsUpdate) {
          dataWasFetched = true
          const dataUrlFinal = reloadURLHelpers.getDataURL(
            { ...currentQSParams, ...updatedQSParams },
            dataUrl,
            newFileName
          )

          setAPILoading(true)
          await fetchRemoteData(dataUrlFinal)
            .then(responseData => {
              let data: any[] = responseData
              if (responseData && dataset.dataDescription) {
                try {
                  data = transform.autoStandardize(data)
                  data = transform.developerStandardize(data, dataset.dataDescription)
                } catch (e) {
                  //Data not able to be standardized, leave as is
                  console.error('Error standardizing data:', e)
                }
              }
              newDatasets[datasetKey].data = data
              newDatasets[datasetKey].runtimeDataUrl = dataUrlFinal
              newData[datasetKey] = data
            })
            .catch(e => {
              console.error(e)
              dispatchErrorMessages({
                type: 'ADD_ERROR_MESSAGE',
                payload: 'There was a problem returning data. Please try again.'
              })
              newDatasets[datasetKey].data = []
              newDatasets[datasetKey].runtimeDataUrl = dataUrlFinal
              newData[datasetKey] = []
            })
        }
      }
    }

    const datasetsWithFiles = _.pickBy(newDatasets, dataset => !dataset.dataUrl)

    if (dataWasFetched || Object.keys(datasetsWithFiles).length) {
      const dataFiles = Object.keys(datasetsWithFiles).reduce((acc, key) => {
        acc[key] = datasetsWithFiles[key].data
        return acc
      }, {})
      const _newData = { ...newData, ...dataFiles }
      dispatch({ type: 'SET_DATA', payload: _newData })
      const dataFilterIndexes = config.dashboard.sharedFilters.reduce((acc, filter, index) => {
        if (filter.type === 'datafilter') acc.push(index)
        return acc
      }, [])
      const appliedFilterIndexes = Object.values(config.visualizations)
        .filter(viz => viz.type === 'dashboardFilters')
        .flatMap(viz => viz.sharedFilterIndexes)
        .filter(index => !dataFilterIndexes.includes(index))
      const filtersWithNewValues = addValuesToDashboardFilters(filters, _newData, appliedFilterIndexes)

      const dashboardConfig = { ...config.dashboard, sharedFilters: filtersWithNewValues }
      const filteredData = getFilteredData(
        { ...state, config: { ...state.config, dashboard: dashboardConfig } },
        {},
        _newData
      )
      dispatch({ type: 'SET_FILTERED_DATA', payload: filteredData })
      const visualizations = reloadURLHelpers.getVisualizationsWithFormattedData(config.visualizations, newData)
      dispatch({
        type: 'SET_CONFIG',
        payload: {
          dashboard: dashboardConfig,
          datasets: newDatasets,
          visualizations,
          activeDashboard: config.activeDashboard
        }
      })
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

  const setEventData = ({ detail }) => {
    try {
      const newDatasets = Object.keys(detail).reduce((acc, key) => {
        if (state.data[key] !== undefined) {
          acc[key] = detail[key]
        }
        return acc
      }, {})
      const newConfig = { ...state, data: { ...state.data, ...newDatasets } }
      const newFilteredData = getFilteredData(newConfig, _.cloneDeep(state.filteredData))
      dispatch({ type: 'SET_FILTERED_DATA', payload: newFilteredData })
      dispatch({ type: 'SET_DATA', payload: { ...state.data, ...newDatasets } })
    } catch (e) {
      console.error('Error setting event data: ', e)
    }
  }

  useEffect(() => {
    subscribe('cove_set_data', setEventData)
    return () => {
      unsubscribe('cove_set_data', setEventData)
    }
  }, [])

  useEffect(() => {
    const { config } = state
    const loadAllFilters = shouldLoadAllFilters(config, isEditor && !isPreview)
    const sharedFiltersWithValues = addValuesToDashboardFilters(config.dashboard.sharedFilters, state.data)
    setAPILoading(true)
    loadAPIFilters(sharedFiltersWithValues, apiFilterDropdowns, loadAllFilters)?.then(newFilters => {
      const allValuesSelected = newFilters.every(filter => {
        return filter.type === 'datafilter' || filter.active
      })
      if (allValuesSelected) {
        reloadURLData(newFilters)
        setAPILoading(false)
      } else {
        setAPILoading(false)
      }
    })
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

        body = (
          <>
            <Header visualizationKey={visualizationKey} subEditor={true} />
            <DashboardEditors
              key={visualizationKey}
              visualizationKey={visualizationKey}
              visualizationConfig={visualizationConfig}
              _updateConfig={_updateConfig}
              isDebug={isDebug}
              setSharedFilter={setSharedFilter}
              apiFilterDropdowns={apiFilterDropdowns}
              state={state}
            />
          </>
        )
      }
    })

    if (!subVisualizationEditing) {
      body = (
        <DndProvider backend={HTML5Backend}>
          {apiLoading && <Loader fullScreen={true} />}
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

    const filteredRows = config.rows?.filter(row => row.columns.filter(col => col.widget).length !== 0)

    body = (
      <>
        {isEditor && <Header />}
        {apiLoading && <Loader fullScreen={true} />}
        <MultiTabs isEditor={isEditor && !isPreview} />
        {errorMessages.map((message, index) => (
          <Alert
            key={message + index}
            type='danger'
            onDismiss={() => dispatchErrorMessages({ type: 'DISMISS_ERROR_MESSAGE', payload: index })}
            message={message}
            autoDismiss={true}
          />
        ))}
        <Layout.Responsive isEditor={isEditor}>
          <div className={`cdc-dashboard-inner-container${isEditor ? ' is-editor' : ''}`}>
            <Title
              title={title}
              isDashboard={true}
              classes={[`dashboard-title`, `${config.dashboard.theme ?? 'theme-blue'}`]}
            />
            {/* Description */}
            {description && <div className='subtext mb-3'>{parse(description)}</div>}
            {/* Visualizations */}
            {filteredRows?.map((row, index) => (
              <VisualizationRow
                key={`row__${index}`}
                allExpanded={allExpanded}
                groupName={''}
                row={row}
                rowIndex={index}
                setSharedFilter={setSharedFilter}
                setAllExpanded={setAllExpanded}
                updateChildConfig={updateChildConfig}
                apiFilterDropdowns={apiFilterDropdowns}
                currentViewport={currentViewport}
                inNoDataState={inNoDataState}
                isLastRow={index === filteredRows.length - 1}
              />
            ))}

            {inNoDataState ? <div className='mt-5'>Please complete your selection to continue.</div> : <></>}

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
          reloadURLData,
          setAPILoading
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
