import React, { useState, useEffect, useCallback, useMemo, useReducer, useContext, useRef } from 'react'
import 'whatwg-fetch'
import ResizeObserver from 'resize-observer-polyfill'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import parse from 'html-react-parser'

import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import cloneConfig from '@cdc/core/helpers/cloneConfig'
import { GlobalContextProvider } from '@cdc/core/components/GlobalContext'
import { DashboardContext, DashboardDispatchContext } from './DashboardContext'
import { Visualization } from '@cdc/core/types/Visualization'
import { hasDashboardApplyBehavior } from './helpers/hasDashboardApplyBehavior'

import OverlayFrame from '@cdc/core/components/ui/OverlayFrame'
import Loading from '@cdc/core/components/Loading'
import { DataTransform } from '@cdc/core/helpers/DataTransform'
import getViewport from '@cdc/core/helpers/getViewport'

import Grid from './components/Grid'
import Header from './components/Header'
import MediaControls from '@cdc/core/components/MediaControls'

import './scss/main.scss'

import VisualizationsPanel from './components/VisualizationsPanel'
import dashboardReducer from './store/dashboard.reducer'
import errorMessagesReducer from './store/errorMessage/errorMessage.reducer'
import { isFilterAtResetState } from './helpers/filterData'
import { getVizKeys } from './helpers/getVizKeys'
import Title from '@cdc/core/components/ui/Title'

// types
import { type SharedFilter } from './types/SharedFilter'
import { type WCMSProps } from '@cdc/core/types/WCMSProps'
import { type InitialState } from './types/InitialState'
import MultiTabs from './components/MultiConfigTabs'
import cloneDeep from 'lodash/cloneDeep'
import pick from 'lodash/pick'
import pickBy from 'lodash/pickBy'
import EditorContext from '@cdc/core/contexts/EditorContext'
import { APIFilterDropdowns } from './components/DashboardFilters'
import { ViewPort } from '@cdc/core/types/ViewPort'
import VisualizationRow from './components/VisualizationRow'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import { getVizConfig } from './helpers/getVizConfig'
import { getFilteredData } from './helpers/getFilteredData'
import {
  dashboardRowsUseFiltersIncomplete,
  shouldSuppressFetchErrorForHiddenDataset
} from './helpers/dashboardConditions'
import { getVizRowColumnLocator } from './helpers/getVizRowColumnLocator'
import { Responsive, VisualizationContainer } from '@cdc/core/components/Layout'
import * as reloadURLHelpers from './helpers/reloadURLHelpers'
import { addValuesToDashboardFilters } from './helpers/addValuesToDashboardFilters'
import { DashboardFilters } from './types/DashboardFilters'
import { loadAPIFiltersFactory } from './helpers/loadAPIFilters'
import Loader from '@cdc/core/components/Loader'
import Alert from '@cdc/core/components/Alert'
import { shouldLoadAllFilters } from './helpers/shouldLoadAllFilters'
import { subscribe, unsubscribe } from '@cdc/core/helpers/events'
import DashboardEditors from './components/DashboardEditors'
import { DashboardCopyPasteProvider } from './DashboardCopyPasteContext'
import { updateChildFilters } from './helpers/updateChildFilters'
import { getColumnWidgetEntries } from './helpers/dashboardColumnWidgets'

type DashboardProps = Omit<WCMSProps, 'configUrl'> & {
  initialState: InitialState
} & { interactionLabel: string }

export default function CdcDashboard({
  initialState,
  isEditor = false,
  isDebug = false,
  interactionLabel = ''
}: DashboardProps) {
  const [state, dispatch] = useReducer(dashboardReducer, initialState)
  const [errorMessages, dispatchErrorMessages] = useReducer(errorMessagesReducer, [])
  const editorContext = useContext(EditorContext)
  const [apiFilterDropdowns, setAPIFilterDropdowns] = useState<APIFilterDropdowns>({})
  const [currentViewport, setCurrentViewport] = useState<ViewPort>('lg')
  const [imageId] = useState(`cove-${Math.random().toString(16).slice(-4)}`)
  const [allExpanded, setAllExpanded] = useState(true)
  const [apiLoading, setAPILoading] = useState(false)

  // Capture initial filter values at mount (before user interactions mutate filter.active)
  const initialFilterValues = useMemo(() => {
    const values: Record<string, string> = {}
    for (const filter of initialState.config.dashboard?.sharedFilters || []) {
      if (filter.setBy) {
        const active = Array.isArray(filter.active) ? filter.active[0] : filter.active
        values[filter.setBy] = filter.defaultValue || active || filter.values?.[0] || ''
      }
    }
    return values
  }, [])

  const isPreview = state.tabSelected === 'Dashboard Preview'

  const hasFiltersIncompleteCondition = useMemo(
    () => dashboardRowsUseFiltersIncomplete(state.config.rows || []),
    [state.config.rows]
  )

  const hasIncompleteSharedFilters = useMemo(() => {
    const sharedFilters = state.config.dashboard?.sharedFilters || []
    return sharedFilters.some(isFilterAtResetState)
  }, [state.config.dashboard?.sharedFilters])

  const inNoDataState = useMemo(() => {
    const hasApplyBehavior = hasDashboardApplyBehavior(state.config.visualizations)

    if (hasApplyBehavior && !state.filtersApplied) {
      return true
    }

    if (hasIncompleteSharedFilters) {
      return true
    }

    const vals = reloadURLHelpers
      .getDatasetKeys(state.config, { includeDashboardConditionDatasetKeys: false })
      .map(key => state.data[key])

    // Check if there are any visualizations that actually need data
    // Markup-includes without dataKey don't require dashboard data
    const visualizationsNeedingData = Object.values(state.config.visualizations).filter(viz => {
      if (viz.type === 'dashboardFilters') return false
      return viz.type !== 'markup-include' || viz.dataKey
    })

    // If no visualizations need data, don't show no-data state
    if (!vals.length && visualizationsNeedingData.length === 0) return false

    if (!vals.length) return true
    return vals.some(val => val === undefined)
  }, [
    state.data,
    state.config.visualizations,
    state.config.datasets,
    state.config.rows,
    state.filtersApplied,
    hasIncompleteSharedFilters,
    hasFiltersIncompleteCondition
  ])

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
    const config = cloneConfig(state.config)
    if (!config.datasets) return
    const filters = newFilters || config.dashboard.sharedFilters
    const datasetKeys = reloadURLHelpers.getDatasetKeys(config)

    setAPILoading(true)
    const newData = {}
    const newDatasets = { ...config.datasets }
    let dataWasFetched = false

    for (let i = 0; i < datasetKeys.length; i++) {
      const datasetKey = datasetKeys[i]
      const dataset = config.datasets[datasetKey]
      if (reloadURLHelpers.isEmptyInitialFileNameTarget(filters || [], datasetKey)) {
        continue
      }
      let newFileName = ''
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
          if (filter.type !== 'urlfilter') return

          if (filter.filterBy === 'File Name') {
            // row filter field: resolve the selected option's file-name value (from `valueSelector`)
            // so the data file is derived from that value even when a more specific option is selected.
            let resolvedFileNameValue: string | undefined
            if (filter.apiFilter?.filterSelector) {
              const dropdownOptions = apiFilterDropdowns[filter.apiFilter.apiEndpoint]
              resolvedFileNameValue = dropdownOptions?.find(option => option.value == filter.active)?.fileName?.toString()
            }
            newFileName = reloadURLHelpers.getNewFileName(newFileName, filter, datasetKey, resolvedFileNameValue)
          }

          if (reloadURLHelpers.filterUsedByDataUrl(filter, datasetKey, config.visualizations, config.rows)) {
            if (!!filter.queryParameter) {
              if (updatedQSParams[filter.queryParameter]) {
                updatedQSParams[filter.queryParameter] = updatedQSParams[filter.queryParameter] + filter.active
              } else {
                updatedQSParams[filter.queryParameter] = filter.active
              }
            }

            if (filter.filterBy === 'Query String' && !!filter.setByQueryParameter) {
              const filterValue = windowQueryParams[filter.setByQueryParameter]
              const queryParam = filter.apiFilter?.valueSelector || filter.setByQueryParameter
              if (filterValue) {
                updatedQSParams[queryParam] = filterValue
              }
            }

            if (filter.filterBy === 'Query String' && filter.apiFilter && filter.active) {
              // Don't add filter to query params if it's set to its resetLabel
              const isResetLabel = filter.resetLabel && filter.active === filter.resetLabel
              if (!isResetLabel) {
                updatedQSParams[filter.apiFilter.valueSelector] = filter.active
                if (filter.apiFilter.subgroupValueSelector && filter.subGrouping.active) {
                  updatedQSParams[filter.apiFilter.subgroupValueSelector] = filter.subGrouping.active
                }
              }
            }
          }
        })

        const dataNeedsUpdate = reloadURLHelpers.isUpdateNeeded(filters, currentQSParams, updatedQSParams)
        const alreadyFetched = !!dataset.data
        if (alreadyFetched && !newFilters && !dataNeedsUpdate) {
          dataWasFetched = true
          newData[datasetKey] = dataset.data
        } else if (!!newFilters || dataNeedsUpdate) {
          dataWasFetched = true
          const dataUrlFinal = reloadURLHelpers.getDataURL(
            { ...currentQSParams, ...updatedQSParams },
            dataUrl,
            newFileName
          )

          await fetchRemoteData(dataUrlFinal)
            .then(({ data: fetchedData, dataMetadata }) => {
              let data: any[] = fetchedData
              if (data && dataset.dataDescription) {
                try {
                  data = transform.autoStandardize(data)
                  data = transform.developerStandardize(data, dataset.dataDescription)
                } catch (e) {
                  //Data not able to be standardized, leave as is
                  console.error('Error standardizing data:', e)
                }
              }
              newDatasets[datasetKey] = { ...newDatasets[datasetKey], data, dataMetadata, runtimeDataUrl: dataUrlFinal }
              newData[datasetKey] = data
            })
            .catch(e => {
              console.error(e)
              const suppressFetchErrorMessage = shouldSuppressFetchErrorForHiddenDataset({
                ...config,
                dashboard: { ...config.dashboard, sharedFilters: filters },
                data: { ...state.data, ...newData },
                datasetKey
              })
              if (!suppressFetchErrorMessage) {
                dispatchErrorMessages({
                  type: 'ADD_ERROR_MESSAGE',
                  payload: 'There was a problem returning data. Please try again.'
                })
              }
              newDatasets[datasetKey] = { ...newDatasets[datasetKey], data: [], runtimeDataUrl: dataUrlFinal }
              newData[datasetKey] = []
            })
        }
      }
    }

    const datasetsWithFiles = pickBy(newDatasets, dataset => !dataset.dataUrl)

    if (dataWasFetched || Object.keys(datasetsWithFiles).length) {
      const dataFiles = Object.keys(datasetsWithFiles).reduce((acc, key) => {
        acc[key] = datasetsWithFiles[key].data
        return acc
      }, {})
      const _newData = { ...newData, ...dataFiles }
      dispatch({
        type: 'SET_DATA',
        payload: { data: _newData, activeDashboard: config.activeDashboard }
      })
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
      dispatch({
        type: 'SET_FILTERED_DATA',
        payload: { filteredData, activeDashboard: config.activeDashboard }
      })
      const visualizations = reloadURLHelpers.getVisualizationsWithFormattedData(
        config.visualizations as Record<string, Visualization>,
        newData
      )
      dispatch({
        type: 'SET_CONFIG',
        payload: {
          dashboard: dashboardConfig,
          datasets: newDatasets,
          visualizations,
          activeDashboard: config.activeDashboard
        }
      })
    }

    setAPILoading(false)
  }

  const setSharedFilter = (key, datum) => {
    const { config: newConfig, filteredData } = cloneDeep(state)

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

    dispatch({ type: 'SET_FILTERED_DATA', payload: { filteredData: newFilteredData } })
    dispatch({ type: 'SET_CONFIG', payload: newConfig })
    dispatch({ type: 'SET_SHARED_FILTERS', payload: newConfig.dashboard.sharedFilters })
  }

  // Get the initial/reset value for a filter (captured at mount to avoid reading mutated state)
  const getFilterInitialValue = (filter: SharedFilter): string => {
    const key = filter.setBy || ''
    return initialFilterValues[key] ?? filter.defaultValue ?? filter.values?.[0] ?? ''
  }

  const clearSharedFilter = (key: string) => {
    const { config: newConfig, filteredData } = cloneDeep(state)

    for (let i = 0; i < newConfig.dashboard.sharedFilters.length; i++) {
      const filter = newConfig.dashboard.sharedFilters[i]
      if (filter.setBy === key) {
        filter.active = getFilterInitialValue(filter)
        break
      }
    }

    const newFilteredData = getFilteredData({ ...state, config: newConfig }, filteredData)

    dispatch({ type: 'SET_FILTERED_DATA', payload: { filteredData: newFilteredData } })
    dispatch({ type: 'SET_CONFIG', payload: newConfig })
    dispatch({ type: 'SET_SHARED_FILTERS', payload: newConfig.dashboard.sharedFilters })
  }

  const hasActiveSharedFilter = (key: string): boolean => {
    const filter = state.config.dashboard?.sharedFilters?.find(f => f.setBy === key)
    if (!filter) return false

    // Get the initial/default value for this filter
    const initialValue = getFilterInitialValue(filter)

    // Filter is "user-active" only if active differs from the initial value
    return filter.active !== undefined && filter.active !== '' && filter.active !== initialValue
  }

  const setEventData = ({ detail }, data, filteredData) => {
    try {
      const newDatasets = Object.keys(detail).reduce((acc, key) => {
        if (data[key] !== undefined) {
          acc[key] = detail[key]
        }
        return acc
      }, {})
      const newConfig = { ...state, data: { ...data, ...newDatasets } }
      const newFilteredData = getFilteredData(newConfig, cloneDeep(filteredData))
      dispatch({ type: 'SET_FILTERED_DATA', payload: { filteredData: newFilteredData } })
      dispatch({ type: 'SET_DATA', payload: { data: { ...data, ...newDatasets } } })
    } catch (e) {
      console.error('Error setting event data: ', e)
    }
  }

  useEffect(() => {
    const eventCallback = e => setEventData(e, state.data, state.filteredData)
    subscribe('cove_set_data', eventCallback)
    return () => {
      unsubscribe('cove_set_data', eventCallback)
    }
  }, [state.data, state.filteredData])

  useEffect(() => {
    const { config } = state
    const loadAllFilters = shouldLoadAllFilters(config, isEditor && !isPreview)
    let sharedFiltersWithValues = addValuesToDashboardFilters(config.dashboard.sharedFilters, state.data)
    sharedFiltersWithValues = updateChildFilters(sharedFiltersWithValues, state.data)
    const filterPromise = loadAPIFilters(sharedFiltersWithValues, apiFilterDropdowns, loadAllFilters)
    if (!filterPromise) {
      setAPILoading(false)
    } else {
      setAPILoading(true)
      filterPromise.then(newFilters => {
        const allValuesSelected = newFilters.every(filter => {
          return filter.type === 'datafilter' || filter.active
        })
        if (allValuesSelected || loadAllFilters) {
          reloadURLData(newFilters)
        } else {
          setAPILoading(false)
        }
      })
    }
  }, [isEditor, isPreview, state.config?.activeDashboard])

  useEffect(() => {
    return () => {
      // Clear all data when component unmounts to prevent memory leaks
      dispatch({ type: 'SET_DATA', payload: { data: {} } })
      dispatch({ type: 'SET_FILTERED_DATA', payload: { filteredData: {} } })

      // Clear any pending API requests
      setAPILoading(false)

      // Force garbage collection hint if available
      if (window.gc && typeof window.gc === 'function') {
        try {
          window.gc()
        } catch (e) {
          // Ignore gc errors
        }
      }
    }
  }, [])

  const updateChildConfig = (visualizationKey, newConfig) => {
    const config = cloneConfig(state.config)
    const updatedConfig = pick(config, ['visualizations', 'multiDashboards'])
    updatedConfig.visualizations[visualizationKey] = newConfig
    updatedConfig.visualizations[visualizationKey].formattedData = config.visualizations[visualizationKey].formattedData
    if (config.multiDashboards) {
      const activeDashboard = config.activeDashboard
      const multiDashboards = [...config.multiDashboards]
      const label = multiDashboards[activeDashboard].label
      const toSave = { label, visualizations: updatedConfig.visualizations, ...pick(config, ['dashboard', 'rows']) }
      multiDashboards[activeDashboard] = toSave
      updatedConfig.multiDashboards = multiDashboards
    }

    dispatch({ type: 'SET_CONFIG', payload: updatedConfig })
    // Pass up to <CdcEditor /> if it exists when config state changes
    if (isEditor) {
      editorContext.setTempConfig(updatedConfig)
    }
  }

  const resizeObserverRef = useRef<ResizeObserver | null>(null)

  const outerContainerRef = useCallback(node => {
    if (resizeObserverRef.current) {
      resizeObserverRef.current.disconnect()
      resizeObserverRef.current = null
    }

    if (node !== null) {
      resizeObserverRef.current = new ResizeObserver(entries => {
        for (let entry of entries) {
          const newViewport = getViewport(entry.contentRect.width)
          setCurrentViewport(newViewport)
        }
      })
      resizeObserverRef.current.observe(node)
    }
  }, [])

  useEffect(() => {
    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect()
        resizeObserverRef.current = null
      }
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
              clearSharedFilter={clearSharedFilter}
              hasActiveSharedFilter={hasActiveSharedFilter}
              apiFilterDropdowns={apiFilterDropdowns}
              state={state}
              interactionLabel={interactionLabel}
            />
          </>
        )
      }
    })

    if (!subVisualizationEditing) {
      body = (
        <DashboardCopyPasteProvider>
          <DndProvider backend={HTML5Backend}>
            {apiLoading && <Loader fullScreen={true} />}
            <Header displayMode='tabs' />
            <div className='dashboard-editor-layout'>
              <div className='header-container'>
                <VisualizationsPanel />
              </div>

              <div className='dashboard-editor-workspace'>
                <Header displayMode='body' />
                <div className='layout-container'>
                  <Grid />
                </div>
              </div>
            </div>
          </DndProvider>
        </DashboardCopyPasteProvider>
      )
    }
  } else {
    const { config } = state
    const { title, description } = config.dashboard || {}
    const dashboardDownloads = config.dashboard?.downloads || {}
    const hasDashboardDownloadButton = dashboardDownloads.downloadImageButton || dashboardDownloads.downloadPdfButton
    const dashboardDownloadAppearance = dashboardDownloads.downloadImageButtonStyle === 'link' ? 'link' : 'button'

    const filteredRows =
      config.rows
        ?.map((row, index) => ({ row, index }))
        .filter(({ row }) => row.columns.some(col => getColumnWidgetEntries(col).length > 0)) || []

    const isTableOnlyRow = row => {
      const widgetEntries = row.columns.flatMap(getColumnWidgetEntries)
      return (
        widgetEntries.length > 0 &&
        widgetEntries.every(({ widget }) => config.visualizations?.[widget]?.type === 'table')
      )
    }
    let firstBottomTableRowIndex = filteredRows.length
    while (firstBottomTableRowIndex > 0 && isTableOnlyRow(filteredRows[firstBottomTableRowIndex - 1].row)) {
      firstBottomTableRowIndex -= 1
    }

    const visualizationRows = filteredRows.slice(0, firstBottomTableRowIndex)
    const tableRows = filteredRows.slice(firstBottomTableRowIndex)
    const renderDashboardRow = ({ row, index }, renderIndex) => (
      <ErrorBoundary key={`row__${index}`} component={`VisualizationRow-${index}`}>
        <VisualizationRow
          allExpanded={allExpanded}
          groupName={''}
          row={row}
          rowIndex={index}
          setSharedFilter={setSharedFilter}
          clearSharedFilter={clearSharedFilter}
          hasActiveSharedFilter={hasActiveSharedFilter}
          setAllExpanded={setAllExpanded}
          updateChildConfig={updateChildConfig}
          apiFilterDropdowns={apiFilterDropdowns}
          currentViewport={currentViewport}
          inNoDataState={inNoDataState}
          interactionLabel={interactionLabel}
          isLastRow={renderIndex === filteredRows.length - 1}
        />
      </ErrorBoundary>
    )

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
        <Responsive isEditor={isEditor}>
          <div className={`cdc-dashboard-inner-container${isEditor ? ' is-editor' : ''}`}>
            <Title
              title={title}
              isDashboard={true}
              titleStyle={config.dashboard.titleStyle}
              classes={[`dashboard-title`, `${config.dashboard.theme ?? 'theme-blue'}`]}
            />
            {/* Description */}
            {description && <div className='subtext cove-prose mb-4'>{parse(description)}</div>}
            {/* Visualizations */}
            {visualizationRows.map(renderDashboardRow)}

            {inNoDataState && !(hasIncompleteSharedFilters && hasFiltersIncompleteCondition) ? (
              <div className='mt-5'>Please complete your selection to continue.</div>
            ) : (
              <></>
            )}

            {/* Image or PDF Inserts */}
            {hasDashboardDownloadButton && (
              <section className='download-buttons'>
                {dashboardDownloads.downloadImageButton && (
                  <MediaControls.Button
                    title='Download Dashboard as Image'
                    type='image'
                    state={config}
                    text='Download Dashboard Image'
                    elementToCapture={imageId}
                    interactionLabel={interactionLabel}
                    includeContextInDownload={dashboardDownloads.includeContextInDownload}
                    appearance={dashboardDownloadAppearance}
                  />
                )}
                {dashboardDownloads.downloadPdfButton && (
                  <MediaControls.Button
                    title='Download Dashboard as PDF'
                    type='pdf'
                    state={config}
                    text='Download Dashboard PDF'
                    elementToCapture={imageId}
                    interactionLabel={interactionLabel}
                    includeContextInDownload={dashboardDownloads.includeContextInDownload}
                    appearance={dashboardDownloadAppearance}
                  />
                )}
              </section>
            )}

            {tableRows.map((row, renderIndex) => renderDashboardRow(row, visualizationRows.length + renderIndex))}
          </div>
        </Responsive>
      </>
    )
  }

  return (
    <GlobalContextProvider>
      <DashboardContext.Provider
        value={{
          ...state,
          setParentConfig: editorContext.setTempConfig,
          outerContainerRef,
          isDebug,
          isEditor: isEditor && !isPreview,
          loadAPIFilters,
          setAPIFilterDropdowns,
          reloadURLData,
          setAPILoading
        }}
      >
        <DashboardDispatchContext.Provider value={dispatch}>
          <VisualizationContainer
            className={isEditor ? 'is-dashboard-editor' : undefined}
            config={state.config}
            currentViewport={currentViewport}
            imageId={imageId}
            isEditor={false}
            ref={outerContainerRef}
            renderResponsive={false}
          >
            {body}
          </VisualizationContainer>
          <OverlayFrame />
        </DashboardDispatchContext.Provider>
      </DashboardContext.Provider>
    </GlobalContextProvider>
  )
}
