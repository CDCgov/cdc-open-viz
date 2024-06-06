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
import { getQueryParams, updateQueryString } from '@cdc/core/helpers/queryStringUtils'

import CdcMap from '@cdc/map'
import CdcChart from '@cdc/chart'
import CdcDataBite from '@cdc/data-bite'
import CdcWaffleChart from '@cdc/waffle-chart'
import CdcMarkupInclude from '@cdc/markup-include'
import CdcFilteredText from '@cdc/filtered-text'

import Grid from './components/Grid'
import Header, { FilterBehavior } from './components/Header/Header'
import DataTable from '@cdc/core/components/DataTable'
import MediaControls from '@cdc/core/components/MediaControls'

import './scss/main.scss'
import '@cdc/core/styles/v2/main.scss'

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
import Filters, { APIFilterDropdowns, DropdownOptions } from './components/Filters'
import DataTableStandAlone from '@cdc/core/components/DataTable/DataTableStandAlone'
import { ViewPort } from '@cdc/core/types/ViewPort'
import VisualizationRow from './components/VisualizationRow'
import { getVizConfig } from './helpers/getVizConfig'
import { getFilteredData } from './helpers/getFilteredData'
import { getVizRowColumnLocator } from './helpers/getVizRowColumnLocator'
import Layout from '@cdc/core/components/Layout'
import FootnotesStandAlone from '@cdc/core/components/Footnotes/FootnotesStandAlone'
import * as apiFilterHelpers from './helpers/apiFilterHelpers'
import * as reloadURLHelpers from './helpers/reloadURLHelpers'
import { getAutoLoadVisualization } from './helpers/getAutoLoadVisualization'
import { changeFilterActive } from './helpers/changeFilterActive'
import { addValuesToSharedFilters } from './helpers/addValuesToSharedFilters'

type DashboardProps = Omit<WCMSProps, 'configUrl'> & {
  initialState: InitialState
}

export default function CdcDashboard({ initialState, isEditor = false, isDebug = false }: DashboardProps) {
  const [state, dispatch] = useReducer(dashboardReducer, initialState)
  const editorContext = useContext(EditorContext)
  const [apiFilterDropdowns, setAPIFilterDropdowns] = useState<APIFilterDropdowns>({})
  const [currentViewport, setCurrentViewport] = useState<ViewPort>('lg')
  const [imageId] = useState(`cove-${Math.random().toString(16).slice(-4)}`)

  const isPreview = state.tabSelected === 'Dashboard Preview'

  const inNoDataState = useMemo(() => {
    const vals = Object.values(state.data)
    if (!vals.length) return true
    return vals.some(val => val === undefined)
  }, [state.data])

  const vizRowColumnLocator = getVizRowColumnLocator(state.config.rows)

  const transform = new DataTransform()

  const autoLoadFilterIndexes = useMemo(() => {
    const autoLoadViz = getAutoLoadVisualization(state.config.visualizations)
    if (!autoLoadViz?.hide) return [] // no autoLoading happening
    return state.config.dashboard.sharedFilters.map((f, i) => i).filter(i => !autoLoadViz.hide.includes(i))
  }, [state.config.dashboard.sharedFilters, state.config.visualizations])

  const setAutoLoadDefaultValue = (sharedFilterIndex: number, filterDropdowns: DropdownOptions, sharedFilters): SharedFilter => {
    const sharedFilter = _.cloneDeep(sharedFilters[sharedFilterIndex])
    if (!autoLoadFilterIndexes.length || !filterDropdowns) return sharedFilter // no autoLoading happening
    if (!sharedFilter.active && autoLoadFilterIndexes.includes(sharedFilterIndex)) {
      const filterParents = sharedFilters.filter(f => sharedFilter.parents?.includes(f.key))
      const notAllParentFiltersSelected = filterParents.some(p => !(p.active || p.queuedActive))
      if (filterParents && notAllParentFiltersSelected) return sharedFilter
      const defaultFilterDropdown = filterDropdowns.find(({ value }) => value === sharedFilter.apiFilter!.defaultValue)
      const defaultValue = defaultFilterDropdown?.value || filterDropdowns[0].value
      sharedFilter.active = defaultValue
    }
    return sharedFilter
  }

  const loadAPIFilters = (sharedFilters: SharedFilter[], dropdowns = apiFilterDropdowns, recursiveLimit = 3) => {
    if (!sharedFilters) return
    sharedFilters = sharedFilters.map((filter, index) => setAutoLoadDefaultValue(index, dropdowns[filter.apiFilter?.apiEndpoint], sharedFilters))
    const sharedAPIFilters = sharedFilters.filter(f => f.apiFilter)
    const loadingFilterMemo = apiFilterHelpers.getLoadingFilterMemo(sharedAPIFilters, dropdowns)
    setAPIFilterDropdowns({ ...dropdowns, ...loadingFilterMemo })
    const filterLookup = new Map(sharedAPIFilters.map(filter => [filter.apiFilter.apiEndpoint, filter.apiFilter]))
    const toFetch = apiFilterHelpers.getToFetch(sharedAPIFilters, dropdowns)
    const newDropdowns = _.cloneDeep(dropdowns)
    return Promise.all(
      Object.keys(toFetch).map(
        endpoint =>
          new Promise<void>(resolve => {
            fetch(endpoint)
              .then(resp => resp.json())
              .then(data => {
                const [_key, index] = toFetch[endpoint]
                if (!Array.isArray(data)) throw new Error('COVE only supports response data in the shape Array<Object>')
                const apiFilter = filterLookup.get(_key) as APIFilter
                const _filterValues = apiFilterHelpers.getFilterValues(data, apiFilter)
                newDropdowns[_key] = _filterValues
                const newDefaultSelectedFilter = setAutoLoadDefaultValue(index, _filterValues, sharedFilters)
                sharedFilters[index] = newDefaultSelectedFilter
              })
              .catch(console.error)
              .finally(() => {
                resolve()
              })
          })
      )
    ).finally(() => {
      const finishedLoading = sharedFilters.reduce((acc, curr, index) => {
        if (autoLoadFilterIndexes.includes(index) && !curr.active) return false
        return acc
      }, true)
      if (finishedLoading || recursiveLimit === 0) {
        setAPIFilterDropdowns(dropdowns => ({ ...dropdowns, ...newDropdowns }))
        dispatch({ type: 'SET_SHARED_FILTERS', payload: sharedFilters })
      } else {
        loadAPIFilters(sharedFilters, newDropdowns, recursiveLimit - 1)
      }
    })
  }

  const reloadURLData = async (newFilters?: SharedFilter[]) => {
    const config = _.cloneDeep(state.config)
    if (!config.datasets) return
    const filters = newFilters || config.dashboard.sharedFilters
    const datasetKeys = Object.keys(config.datasets)

    const newData = { ...state.data }
    const newDatasets = { ...config.datasets }
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
          // filter.active is always a string when filter.type is 'urlfilter'
          if (filter.type === 'urlfilter' && !Array.isArray(filter.active)) {
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

            if (filter.apiFilter) {
              updatedQSParams[filter.apiFilter.valueSelector] = filter.active
            }
          }
        })

        if (!!newFilters || reloadURLHelpers.isUpdateNeeded(filters, currentQSParams, updatedQSParams)) {
          dataWasFetched = true
          const dataUrlFinal = reloadURLHelpers.getDataURL({ ...currentQSParams, ...updatedQSParams }, dataUrl, newFileName)

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
      const filtersWithNewValues = addValuesToSharedFilters(filters, newData)
      const dashboardConfig = newFilters ? { ...config.dashboard, sharedFilters: filtersWithNewValues } : config.dashboard
      const filteredData = getFilteredData({ ...state, config: { ...state.config, dashboard: dashboardConfig } }, {}, newData)
      dispatch({ type: 'SET_FILTERED_DATA', payload: filteredData })
      const visualizations = reloadURLHelpers.getVisualizationsWithFormattedData(config.visualizations, newData)
      dispatch({ type: 'SET_CONFIG', payload: { dashboard: dashboardConfig, datasets: newDatasets, visualizations } })
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
    if (config.filterBehavior !== FilterBehavior.Apply) {
      reloadURLData()
    }
    loadAPIFilters(config.dashboard.sharedFilters)
  }, [isEditor, isPreview])

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

  const applyFilters = () => {
    const dashboardConfig = _.cloneDeep(state.config.dashboard)
    const autoLoadViz = getAutoLoadVisualization(state.config.visualizations)
    const nonAutoLoadFilterIndexes = autoLoadViz?.hide || []
    const allRequiredFiltersSelected = !dashboardConfig.sharedFilters.some((filter, filterIndex) => {
      if (nonAutoLoadFilterIndexes.includes(filterIndex)) {
        return !filter.active && !filter.queuedActive
      } else {
        // autoload filters don't need to be selected to apply filters
        return false
      }
    })
    if (allRequiredFiltersSelected) {
      if (state.config.filterBehavior === FilterBehavior.Apply) {
        const queryParams = getQueryParams()
        let needsQueryUpdate = false
        dashboardConfig.sharedFilters.forEach((sharedFilter, index) => {
          if (sharedFilter.queuedActive) {
            dashboardConfig.sharedFilters[index].active = sharedFilter.queuedActive
            delete dashboardConfig.sharedFilters[index].queuedActive

            if (sharedFilter.setByQueryParameter && queryParams[sharedFilter.setByQueryParameter] !== sharedFilter.active) {
              queryParams[sharedFilter.setByQueryParameter] = sharedFilter.active
              needsQueryUpdate = true
            }
          }
        })

        if (needsQueryUpdate) {
          updateQueryString(queryParams)
        }
      }

      dispatch({ type: 'SET_SHARED_FILTERS', payload: dashboardConfig.sharedFilters })
      updateFilteredData()
      loadAPIFilters(dashboardConfig.sharedFilters)
        .then(() => {
          reloadURLData(dashboardConfig.sharedFilters)
        })
        .catch(e => {
          console.error(e)
        })
    } else {
      // TODO noftify of required fields
    }
  }

  const updateFilteredData = (sharedFilters?) => {
    const clonedState = _.cloneDeep(state)
    if (sharedFilters) clonedState.config.dashboard.sharedFilters = sharedFilters
    const newFilteredData = getFilteredData(clonedState)
    dispatch({ type: 'SET_FILTERED_DATA', payload: newFilteredData })
  }

  const handleOnChange = (index: number, value: string | string[]) => {
    const config = _.cloneDeep(state.config)
    let newSharedFilters = changeFilterActive(index, value, config)

    if (config.filterBehavior === FilterBehavior.Apply) {
      const isAutoSelectFilter = autoLoadFilterIndexes.includes(index)
      const missingFilterSelections = config.dashboard.sharedFilters.some(f => !f.active)
      if (isAutoSelectFilter && !missingFilterSelections) {
        // a dropdown has been selected that doesn't
        // require the Go Button
        loadAPIFilters(newSharedFilters).then(() => {
          reloadURLData(newSharedFilters)
        })
      } else {
        if (Array.isArray(value)) throw Error(`Cannot set active values on urlfilters. expected: ${JSON.stringify(value)} to be a single value.`)
        newSharedFilters[index].queuedActive = value
        // setData to empty object because we no longer have a data state.
        dispatch({ type: 'SET_DATA', payload: {} })
        dispatch({ type: 'SET_FILTERED_DATA', payload: {} })
        loadAPIFilters(newSharedFilters)
      }
    } else {
      updateFilteredData(newSharedFilters)
      reloadURLData(newSharedFilters)
      dispatch({ type: 'SET_SHARED_FILTERS', payload: newSharedFilters })
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

  const GoButton = ({ autoLoad }: { autoLoad?: boolean }) => {
    if (state.config.filterBehavior === FilterBehavior.Apply && !autoLoad) {
      return <button onClick={applyFilters}>GO!</button>
    }
    return null
  }

  let body: JSX.Element | null = null
  // Editor mode
  if (isEditor && !isPreview) {
    let subVisualizationEditing = false

    getVizKeys(state.config).forEach(visualizationKey => {
      const rowNumber = vizRowColumnLocator[visualizationKey]?.row
      const visualizationConfig = getVizConfig(visualizationKey, rowNumber, state.config, state.data, state.filteredData)

      const setsSharedFilter = state.config.dashboard.sharedFilters && state.config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === visualizationKey).length > 0
      const setSharedFilterValue = setsSharedFilter ? state.config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === visualizationKey)[0].active : undefined

      if (visualizationConfig.editing) {
        subVisualizationEditing = true

        const _updateConfig = newConfig => {
          let dataCorrectedConfig = visualizationConfig.originalFormattedData ? { ...newConfig, formattedData: visualizationConfig.originalFormattedData } : newConfig
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
                <CdcDataBite key={visualizationKey} config={{ ...visualizationConfig, newViz: true }} isEditor={true} setConfig={_updateConfig} isDashboard={true} />
              </>
            )
            break
          case 'waffle-chart':
            body = (
              <>
                <Header visualizationKey={visualizationKey} subEditor='Waffle Chart' />
                <CdcWaffleChart key={visualizationKey} config={visualizationConfig} isEditor={true} setConfig={_updateConfig} isDashboard={true} configUrl={undefined} />
              </>
            )
            break
          case 'markup-include':
            body = (
              <>
                <Header visualizationKey={visualizationKey} subEditor='Markup Include' />
                <CdcMarkupInclude key={visualizationKey} config={visualizationConfig} isEditor={true} setConfig={_updateConfig} isDashboard={true} configUrl={undefined} />
              </>
            )
            break
          case 'filtered-text':
            body = (
              <>
                <Header visualizationKey={visualizationKey} subEditor='Filtered Text' />
                <CdcFilteredText key={visualizationKey} config={visualizationConfig} isEditor={true} setConfig={_updateConfig} isDashboard={true} configUrl={undefined} />
              </>
            )
            break
          case 'filter-dropdowns':
            const hideFilter = visualizationConfig.autoLoad && inNoDataState
            body = !hideFilter ? (
              <>
                <Header visualizationKey={visualizationKey} subEditor='Filter Dropdowns' />
                <Filters hide={visualizationConfig.hide} filters={state.config.dashboard.sharedFilters} apiFilterDropdowns={apiFilterDropdowns} handleOnChange={handleOnChange} />
                <GoButton autoLoad={visualizationConfig.autoLoad} />
              </>
            ) : (
              <></>
            )
            break
          case 'table':
            body = (
              <>
                <Header visualizationKey={visualizationKey} subEditor='Table' />
                <DataTableStandAlone visualizationKey={visualizationKey} config={visualizationConfig} isEditor={true} updateConfig={_updateConfig} />
              </>
            )
            break
          case 'footnotes':
            body = (
              <>
                <Header visualizationKey={visualizationKey} subEditor='Footnotes' />
                <FootnotesStandAlone visualizationKey={visualizationKey} config={{ ...visualizationConfig, datasets: state.config.datasets }} isEditor={true} updateConfig={_updateConfig} />
              </>
            )
            break
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
            <VisualizationsPanel loadConfig={newConfig => dispatch({ type: 'UPDATE_CONFIG', payload: [newConfig] })} config={state.config} />
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
        <MultiTabs isEditor={isEditor && !isPreview} />
        <Layout.Responsive isEditor={isEditor}>
          <div className={`cdc-dashboard-inner-container${isEditor ? ' is-editor' : ''}`}>
            <Title title={title} isDashboard={true} classes={[`dashboard-title`, `${config.dashboard.theme ?? 'theme-blue'}`]} />
            {/* Description */}
            {description && <div className='subtext'>{parse(description)}</div>}

            {/* Filters */}
            {config.dashboard.sharedFilters && Object.values(config.visualizations || {}).filter(viz => viz.visualizationType === 'filter-dropdowns').length === 0 && (
              <>
                <Filters filters={state.config.dashboard.sharedFilters} apiFilterDropdowns={apiFilterDropdowns} handleOnChange={handleOnChange} />
                <GoButton />
              </>
            )}

            {/* Visualizations */}
            {config.rows &&
              config.rows
                .filter(row => row.columns.filter(col => col.widget).length !== 0)
                .map((row, index) => {
                  if (row.multiVizColumn && (isPreview || !isEditor)) {
                    const filteredData = getFilteredData(state)
                    const data = filteredData[index] ?? row.formattedData
                    const dataGroups = {}
                    data.forEach(d => {
                      const groupKey = d[row.multiVizColumn]
                      if (!dataGroups[groupKey]) dataGroups[groupKey] = []
                      dataGroups[groupKey].push(d)
                    })
                    return Object.keys(dataGroups).map(groupName => {
                      const dataValue = dataGroups[groupName]
                      return (
                        <React.Fragment key={`row__${index}__${groupName}`}>
                          <h1 className='h4'>{groupName}</h1>
                          <VisualizationRow
                            filteredDataOverride={dataValue}
                            row={row}
                            rowIndex={index}
                            setSharedFilter={setSharedFilter}
                            updateChildConfig={updateChildConfig}
                            applyFilters={applyFilters}
                            apiFilterDropdowns={apiFilterDropdowns}
                            handleOnChange={handleOnChange}
                            currentViewport={currentViewport}
                          />
                        </React.Fragment>
                      )
                    })
                  } else {
                    return (
                      <VisualizationRow key={`row__${index}`} row={row} rowIndex={index} setSharedFilter={setSharedFilter} updateChildConfig={updateChildConfig} applyFilters={applyFilters} apiFilterDropdowns={apiFilterDropdowns} handleOnChange={handleOnChange} currentViewport={currentViewport} />
                    )
                  }
                })}

            {/* Image or PDF Inserts */}
            <section className='download-buttons'>
              {config.table?.downloadImageButton && <MediaControls.Button title='Download Dashboard as Image' type='image' state={config} text='Download Dashboard Image' elementToCapture={imageId} />}
              {config.table?.downloadPdfButton && <MediaControls.Button title='Download Dashboard as PDF' type='pdf' state={config} text='Download Dashboard PDF' elementToCapture={imageId} />}
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
                const filteredTableData = applicableFilters.length > 0 ? filterData(applicableFilters, config.datasets[datasetKey].data) : undefined
                return (
                  <div className='multi-table-container' id={`data-table-${datasetKey}`} key={`data-table-${datasetKey}`}>
                    <DataTable
                      config={config as TableConfig}
                      dataConfig={config.datasets[datasetKey]}
                      rawData={config.datasets[datasetKey].data?.[0]?.tableData || config.datasets[datasetKey].data}
                      runtimeData={config.datasets[datasetKey].data?.[0]?.tableData || filteredTableData || config.datasets[datasetKey].data || []}
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
      <DashboardContext.Provider value={{ ...state, setParentConfig: editorContext.setTempConfig, outerContainerRef, isDebug }}>
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
