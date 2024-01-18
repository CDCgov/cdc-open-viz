import React, { useState, useEffect, useCallback, useMemo, useReducer } from 'react'

// IE11
// import 'core-js/stable'
import 'whatwg-fetch'
import ResizeObserver from 'resize-observer-polyfill'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import parse from 'html-react-parser'

import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import { GlobalContextProvider } from '@cdc/core/components/GlobalContext'
import { DashboardContext, DashboardDispatchContext, initialState } from './DashboardContext'

import OverlayFrame from '@cdc/core/components/ui/OverlayFrame'
import Loading from '@cdc/core/components/Loading'
import { DataTransform } from '@cdc/core/helpers/DataTransform'
import getViewport from '@cdc/core/helpers/getViewport'

import CdcMap from '@cdc/map'
import CdcChart from '@cdc/chart'
import CdcDataBite from '@cdc/data-bite'
import CdcWaffleChart from '@cdc/waffle-chart'
import CdcMarkupInclude from '@cdc/markup-include'
import CdcFilteredText from '@cdc/filtered-text'

import Grid from './components/Grid'
import Header, { FilterBehavior } from './components/Header/Header'
import defaults from './data/initial-state'
import DataTable from '@cdc/core/components/DataTable'
import MediaControls from '@cdc/core/components/MediaControls'

import './scss/main.scss'
import '@cdc/core/styles/v2/main.scss'
import { gatherQueryParams } from '@cdc/core/helpers/gatherQueryParams'
import { capitalizeSplitAndJoin } from '@cdc/core/helpers/cove/string'

import VisualizationsPanel from './components/VisualizationsPanel'
import dashboardReducer from './store/dashboard.reducer'
import { filterData } from './helpers/filterData'
import { getFormattedData } from './helpers/getFormattedData'
import { generateValuesForFilter } from './helpers/generateValuesForFilter'
import { getVizKeys } from './helpers/getVizKeys'
import Title from '@cdc/core/components/ui/Title'
import { TableConfig } from '@cdc/core/components/DataTable/types/TableConfig'

// types
import { type SharedFilter } from './types/SharedFilter'
import { type APIFilter } from './types/APIFilter'
import { type DataSet } from './types/DataSet'
import { type Config } from './types/Config'
import { type Visualization } from '@cdc/core/types/Visualization'

type DropdownOptions = Record<'value' | 'text', string>[]

type APIFilterDropdowns = {
  // null means still loading
  [filtername: string]: null | DropdownOptions
}

type CdcDashboardTypes = {
  configUrl: string
  config: Config
  isEditor: boolean
  isDebug: boolean
  setConfig: Function
}

export default function CdcDashboard({ configUrl = '', config: configObj, isEditor = false, isDebug = false, setConfig: setParentConfig }: CdcDashboardTypes) {
  const [state, dispatch] = useReducer(dashboardReducer, { config: configObj, ...initialState })
  const [apiFilterDropdowns, setAPIFilterDropdowns] = useState<APIFilterDropdowns>({})
  const [currentViewport, setCurrentViewport] = useState('lg')
  const [imageId] = useState(`cove-${Math.random().toString(16).slice(-4)}`)

  const replacements = {
    'Remove Spaces': '',
    'Keep Spaces': ' ',
    'Replace With Underscore': '_'
  }

  const inNoDataState = useMemo(() => {
    const vals = Object.values(state.data)
    if (!vals.length) return true
    return vals.some(val => val === undefined)
  }, [state.data])

  const getAutoLoadVisualization = (): Visualization | undefined => {
    if (!state.config) return
    const autoLoadViz = Object.values(state.config.visualizations).filter(vis => {
      return vis.autoLoad && vis.type === 'filter-dropdowns'
    })
    if (autoLoadViz.length === 0) return
    if (autoLoadViz.length > 1) throw new Error('Only one filter row can be autoloaded')
    return autoLoadViz[0]
  }

  const transform = new DataTransform()

  const processData = async (dataSet: DataSet, filterBehavior) => {
    let dataset = dataSet.formattedData || dataSet.data

    if (dataSet && dataSet.dataUrl && filterBehavior !== FilterBehavior.Apply) {
      dataset = await fetchRemoteData(`${dataSet.dataUrl}`)

      dataset = getFormattedData(dataset, dataSet.dataDescription)
    }

    return dataset
  }

  const processDataLegacy = async (response: any) => {
    let dataset = response.formattedData || response.data

    if (response.dataUrl) {
      dataset = await fetchRemoteData(`${response.dataUrl}`)

      dataset = getFormattedData(dataset, response.dataDescription)
    }

    return dataset
  }
  const getApiFilterKey = ({ apiEndpoint, heirarchyLookup }: APIFilter) => {
    return apiEndpoint + (heirarchyLookup || '')
  }

  const setAutoLoadDefaultValue = (sharedFilterIndex: number, filterDropdowns: DropdownOptions) => {
    if (!state.config) return
    const autoLoadViz = getAutoLoadVisualization()
    if (!autoLoadViz) return // no autoLoading happening
    const notIncludedInAutoLoad = autoLoadViz.hide
    if (notIncludedInAutoLoad.includes(sharedFilterIndex)) {
      // we don't want to auto load it
      return
    } else {
      const sharedFilter = state.config.dashboard.sharedFilters[sharedFilterIndex]
      if (sharedFilter.active) return // a value has already been selected.
      const filterParents = state.config.dashboard.sharedFilters.filter(f => sharedFilter.parents?.includes(f.key))
      const notAllParentFiltersSelected = filterParents.some(p => !p.active)
      if (filterParents && notAllParentFiltersSelected) return
      const defaultFilterDropdown = filterDropdowns.find(({ value }) => value === sharedFilter.apiFilter!.defaultValue)
      let defaultValue = defaultFilterDropdown?.value || filterDropdowns[0].value
      changeFilterActive(sharedFilterIndex, defaultValue)
    }
  }

  const loadAPIFilters = async () => {
    if (state.config?.dashboard?.sharedFilters) {
      const sharedAPIFilters = state.config.dashboard.sharedFilters.filter(f => f.apiFilter)
      const loadingFilterMemo: APIFilterDropdowns = sharedAPIFilters.reduce((acc, curr) => {
        const _key = getApiFilterKey(curr.apiFilter!)
        if (apiFilterDropdowns[_key] != null) return acc // don't overwrite fetched data.
        acc[_key] = null
        return acc
      }, {})
      setAPIFilterDropdowns({ ...apiFilterDropdowns, ...loadingFilterMemo })
      const filterLookup = new Map(sharedAPIFilters.map(filter => [getApiFilterKey(filter.apiFilter!), filter.apiFilter!]))
      const getParentParams = (childFilter: SharedFilter): Record<'key' | 'value', string>[] | null => {
        const _parents = sharedAPIFilters.filter(parentFilter => childFilter.parents?.includes(parentFilter.key))
        if (!_parents.length) return null
        return _parents.map(({ queryParameter, active }) => ({ key: queryParameter || '', value: active || '' }))
      }
      const getFilterValues = (filterData: Object | Array<Object>, apiFilter: APIFilter): DropdownOptions => {
        const { textSelector, valueSelector, heirarchyLookup } = apiFilter
        if (heirarchyLookup) {
          const heirarchy = heirarchyLookup!.split('.')
          const selector = heirarchy.shift() // pop first element
          return getFilterValues(selector ? filterData[selector] : filterData, { ...apiFilter, heirarchyLookup: heirarchy.join('.') })
        }
        if (!Array.isArray(filterData)) throw new Error('the filter data has requires a heirarchy path to access the filter values, This should be in the format key.subkey.subsubkey')
        return filterData.map(v => ({ text: v[textSelector], value: v[valueSelector] }))
      }
      state.config.dashboard.sharedFilters.forEach(async (filter, index) => {
        if (!filter.apiFilter) return
        const baseEndpoint = filter.apiFilter.apiEndpoint
        const _key = getApiFilterKey(filter.apiFilter)
        const params = getParentParams(filter)
        const notAllParentsSelected = params?.some(({ value }) => value === '')
        if (notAllParentsSelected) return // don't send request for dependent children filter options
        if (apiFilterDropdowns[_key] && !params && filter.filterBy === 'Query String') return // don't reload filter unless it's a child
        const endpoint = baseEndpoint + (params ? gatherQueryParams(params) : '')

        fetch(endpoint)
          .then(resp => resp.json())
          .then(data => {
            const apiFilter = filterLookup.get(_key) as APIFilter
            const _filterValues = getFilterValues(data, apiFilter)
            setAPIFilterDropdowns(dropdowns => ({ ...dropdowns, [_key]: _filterValues }))
            setAutoLoadDefaultValue(index, _filterValues)
          })
      })
    }
  }

  const reloadURLData = async () => {
    const { config } = state
    if (config && config.datasets) {
      let newData = { ...state.data }
      let newDatasets = { ...config.datasets }
      let datasetsNeedsUpdate = false
      let datasetKeys = Object.keys(config.datasets)
      let newFileName = ''

      for (let i = 0; i < datasetKeys.length; i++) {
        const datasetKey = datasetKeys[i]
        const dataset = config.datasets[datasetKey]
        if (dataset.dataUrl && config.dashboard && config.dashboard.sharedFilters) {
          const dataUrl = new URL(dataset.runtimeDataUrl || dataset.dataUrl, window.location.origin)
          let currentQSParams = Object.fromEntries(new URLSearchParams(dataUrl.search))
          let updatedQSParams = {}

          let isUpdateNeeded = false

          config.dashboard.sharedFilters.forEach(filter => {
            if (filter.filterBy === 'File Name') {
              // if no file name is entered use the default active filter. ie. /activeFilter.json
              if (!filter.fileName && filter.datasetKey === datasetKey) newFileName = filter.active
              // if a file name is found, ie, state_${query}, use that, ie. state_activeFilter.json
              if (filter.datasetKey === datasetKey && filter.fileName) newFileName = capitalizeSplitAndJoin.call(String(filter.fileName), ' ', replacements[filter.whitespaceReplacement ?? 'Keep Spaces'])
              if (newFileName && newFileName.includes('${query}')) {
                newFileName = newFileName.replace('${query}', capitalizeSplitAndJoin.call(String(filter.active), ' ', replacements[filter.whitespaceReplacement ?? 'Keep Spaces']))
              }
            }

            if (filter.type === 'urlfilter' && !!filter.queryParameter) {
              if (updatedQSParams[filter.queryParameter]) {
                updatedQSParams[filter.queryParameter] = updatedQSParams[filter.queryParameter] + filter.active
              } else {
                updatedQSParams[filter.queryParameter] = filter.active
              }
            }
            if (filter.filterBy === 'File Name') {
              isUpdateNeeded = true
            }
          })

          Object.keys(updatedQSParams).forEach(updatedParam => {
            if (decodeURIComponent(updatedQSParams[updatedParam]) !== currentQSParams[updatedParam]) {
              isUpdateNeeded = true
            }
          })

          if (!isUpdateNeeded) return

          Object.keys(currentQSParams).forEach(currentParam => {
            if (!updatedQSParams[currentParam]) {
              updatedQSParams[currentParam] = currentQSParams[currentParam]
            }
          })
          const _params = Object.keys(updatedQSParams).map(key => ({ key, value: updatedQSParams[key] }))
          let dataUrlFinal = `${dataUrl.origin}${dataUrl.pathname}${gatherQueryParams(_params)}`

          if (newFileName !== '') {
            let fileExtension = dataUrl.pathname.split('.').pop()
            let pathWithoutFilename = dataUrl.pathname.substring(0, dataUrl.pathname.lastIndexOf('/'))
            dataUrlFinal = `${dataUrl.origin}${pathWithoutFilename}/${newFileName}.${fileExtension}${gatherQueryParams(_params)}`
          }

          let newDataset = await fetchRemoteData(`${dataUrlFinal}`)

          if (newDataset && dataset.dataDescription) {
            try {
              newDataset = transform.autoStandardize(newDataset)
              newDataset = transform.developerStandardize(newDataset, dataset.dataDescription)
            } catch (e) {
              //Data not able to be standardized, leave as is
            }
          }

          newDatasets[datasetKey].runtimeDataUrl = dataUrlFinal
          newData[datasetKey] = newDataset
          datasetsNeedsUpdate = true
        }
      }

      if (datasetsNeedsUpdate) {
        dispatch({ type: 'SET_DATA', payload: newData })

        let newFilteredData = {}
        let newConfig = { ...config }
        getVizKeys(config).forEach(key => {
          let dataKey = config.visualizations[key].dataKey

          let applicableFilters = config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.usedBy && sharedFilter.usedBy.indexOf(key) !== -1)
          if (applicableFilters.length > 0) {
            newFilteredData[key] = filterData(applicableFilters, newData[dataKey], state.config?.filterBehavior)
          }

          if (newData[dataKey]) {
            newConfig.visualizations[key].formattedData = newData[dataKey]
          }
        })
        dispatch({ type: 'SET_FILTERED_DATA', payload: newFilteredData })
        newConfig.datasets = newDatasets
        dispatch({ type: 'SET_CONFIG', payload: newConfig })
      }
    }
  }

  const loadConfig = async () => {
    dispatch({ type: 'SET_LOADING', payload: true })
    let response: Config = configObj || (await (await fetch(configUrl)).json())
    let newConfig = { ...defaults, ...response }
    let datasets = {}

    if (response.datasets) {
      await Promise.all(
        Object.keys(response.datasets).map(async key => {
          datasets[key] = await processData(response.datasets[key], response.filterBehavior)
        })
      )

      getVizKeys(newConfig).forEach(vizKey => {
        newConfig.visualizations[vizKey].formattedData = datasets[newConfig.visualizations[vizKey].dataKey]
      })

      Object.keys(datasets).forEach(key => {
        newConfig.datasets[key].data = datasets[key]
      })
    } else {
      let dataKey = newConfig.dataFileName || 'backwards-compatibility'
      datasets[dataKey] = await processDataLegacy(response)

      let datasetsFull = {}
      datasetsFull[dataKey] = {
        data: datasets[dataKey],
        dataDescription: newConfig.dataDescription
      }
      newConfig.datasets = datasetsFull

      getVizKeys(newConfig).forEach(vizKey => {
        newConfig.visualizations[vizKey].dataKey = dataKey
        newConfig.visualizations[vizKey].dataDescription = newConfig.dataDescription
        newConfig.visualizations[vizKey].formattedData = newConfig.formattedData
      })

      newConfig.data = []
      newConfig.dataUrl = ''
      newConfig.dataFileName = ''
      newConfig.dataFileSourceType = ''
      newConfig.dataDescription = {}
      newConfig.formattedData = []

      if (newConfig.dashboard && newConfig.dashboard.filters) {
        newConfig.dashboard.sharedFilters = newConfig.dashboard.sharedFilters || []
        newConfig.dashboard.filters.forEach(filter => {
          newConfig.dashboard.sharedFilters.push({ ...filter, key: filter.label, showDropdown: true, usedBy: getVizKeys(newConfig) })
        })

        newConfig.dashboard.filters = undefined
      }
    }

    dispatch({ type: 'SET_DATA', payload: datasets })
    dispatch({ type: 'UPDATE_CONFIG', payload: [newConfig, datasets] })
    dispatch({ type: 'SET_LOADING', payload: false })
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
    const { config } = state
    if (!config) return
    let newConfig = { ...config }
    let newFilteredData = { ...state.filteredData }
    for (let i = 0; i < newConfig.dashboard.sharedFilters.length; i++) {
      const filter = newConfig.dashboard.sharedFilters[i]
      if (filter.setBy === key) {
        if (!!filter.columnName) {
          filter.active = datum[filter.columnName]
        }
        break
      }
    }

    getVizKeys(newConfig).forEach(visualizationKey => {
      let applicableFilters = newConfig.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.usedBy && sharedFilter.usedBy.indexOf(visualizationKey) !== -1)

      if (applicableFilters.length > 0) {
        const visualization = newConfig.visualizations[visualizationKey]

        const formattedData = visualization.dataDescription ? getFormattedData(state.data[visualization.dataKey] || visualization.data, visualization.dataDescription) : undefined

        newFilteredData[visualizationKey] = filterData(applicableFilters, formattedData || state.data[visualization.dataKey], state.config?.filterBehavior)
      }
    })

    dispatch({ type: 'SET_FILTERED_DATA', payload: newFilteredData })
    dispatch({ type: 'SET_CONFIG', payload: newConfig })
  }

  // Load data when component first mounts
  useEffect(() => {
    loadConfig()
  }, [])

  // Pass up to <CdcEditor /> if it exists when config state changes
  useEffect(() => {
    if (setParentConfig && isEditor) {
      setParentConfig(state.config)
    }
  }, [JSON.stringify(state.config)])

  useEffect(() => {
    const { config } = state
    if (config && config.filterBehavior !== FilterBehavior.Apply) {
      reloadURLData()
    }
    loadAPIFilters()
  }, [JSON.stringify(state.config?.dashboard ? state.config.dashboard.sharedFilters : undefined)])

  const updateChildConfig = (visualizationKey, newConfig) => {
    const { config } = state
    if (!config) return
    let updatedConfig = { ...config }

    updatedConfig.visualizations[visualizationKey] = newConfig
    updatedConfig.visualizations[visualizationKey].formattedData = config.visualizations[visualizationKey].formattedData

    dispatch({ type: 'SET_CONFIG', payload: config })
  }

  const applyFilters = () => {
    if (!state.config) return
    let dashboardConfig = state.config.dashboard
    const allFiltersSelected = !state.config.dashboard.sharedFilters.some(filter => !filter.active && !filter.queuedActive)
    if (allFiltersSelected) {
      if (state.config.filterBehavior === FilterBehavior.Apply) {
        state.config.dashboard.sharedFilters.forEach((sharedFilter, index) => {
          if (sharedFilter.queuedActive) {
            dashboardConfig.sharedFilters[index].active = sharedFilter.queuedActive
            delete dashboardConfig.sharedFilters[index].queuedActive
          }
        })
      }

      dispatch({ type: 'SET_CONFIG', payload: { ...state.config, dashboard: dashboardConfig } })
      updateDataFilters()
      reloadURLData()
    } else {
      // TODO noftify of required fields
    }
  }

  const changeFilterActive = (index: number, value: string) => {
    const { config } = state
    if (!config) return
    let dashboardConfig = { ...config.dashboard }

    if (config.filterBehavior !== FilterBehavior.Apply) {
      dashboardConfig.sharedFilters[index].active = value
    } else {
      dashboardConfig.sharedFilters[index].queuedActive = value
    }

    dispatch({ type: 'SET_CONFIG', payload: { ...config, dashboard: dashboardConfig } })
    if (config.filterBehavior !== FilterBehavior.Apply) {
      updateDataFilters()
      reloadURLData()
    }
  }

  const updateDataFilters = () => {
    const { config } = state
    if (!config) return
    let dashboardConfig = { ...config.dashboard }

    let newFilteredData = {}
    getVizKeys(config).forEach(key => {
      let applicableFilters = dashboardConfig.sharedFilters.filter(sharedFilter => sharedFilter.usedBy && sharedFilter.usedBy.indexOf(key) !== -1)
      if (applicableFilters.length > 0) {
        const visualization = config.visualizations[key]
        const _data = state.data[visualization.dataKey] || visualization.data
        const formattedData = visualization.dataDescription ? getFormattedData(_data, visualization.dataDescription) : _data

        newFilteredData[key] = filterData(applicableFilters, formattedData, config.filterBehavior)
      }
    })

    dispatch({ type: 'SET_FILTERED_DATA', payload: newFilteredData })
  }

  const handleOnChange = (index: number, value: string) => {
    const { config } = state
    if (!config) return
    changeFilterActive(index, value)
    if (config.filterBehavior === FilterBehavior.Apply) {
      const autoLoadViz = getAutoLoadVisualization()
      if (!autoLoadViz) return // nothing left to do for regular filter behavior.
      const isAutoSelectFilter = !autoLoadViz.hide.includes(index)
      const missingFilterSelections = config.dashboard.sharedFilters.some(f => !f.active)
      if (isAutoSelectFilter && !missingFilterSelections) {
        // a dropdown has been selected that doesn't
        // require the Go Button
        reloadURLData()
      } else {
        // A parent filter was selected, reset filters by:
        // set auto select filter dropdowns to null
        const autoSelectFilters = config.dashboard.sharedFilters.filter((_, _index) => !autoLoadViz?.hide.includes(_index))
        const dropdownFilterKeys = autoSelectFilters.map(filter => getApiFilterKey(filter.apiFilter!))
        const newApiDropdowns = { ...apiFilterDropdowns }
        dropdownFilterKeys.forEach(key => (newApiDropdowns[key] = null))
        setAPIFilterDropdowns(newApiDropdowns)
        // remove active from sharedFilters that are autoLoading
        const dashboardConfig = { ...config.dashboard }
        if (config.filterBehavior !== FilterBehavior.Apply) {
          dashboardConfig.sharedFilters[index].active = value
        } else {
          dashboardConfig.sharedFilters[index].queuedActive = value
        }
        const newSharedFilters = config.dashboard.sharedFilters.map((filter, _index) => {
          const _isAutoSelectFilter = !autoLoadViz?.hide.includes(_index)
          if (_isAutoSelectFilter) filter.active = ''
          return filter
        })
        const _newConfig = { ...config, dashboard: { ...config.dashboard, sharedFilters: newSharedFilters } }
        dispatch({ type: 'SET_CONFIG', payload: _newConfig })
        // setData to empty object because we no longer have a data state.
        dispatch({ type: 'SET_DATA', payload: {} })
        dispatch({ type: 'SET_FILTERED_DATA', payload: {} })
      }
    }
  }

  const Filters = ({ hide, autoLoad }: { hide?: number[]; autoLoad?: boolean }) => {
    const { config } = state
    if (!config) return <></>
    const isLegacyFilter = !config.filterBehavior
    return (
      <>
        {config.dashboard.sharedFilters.map((singleFilter, filterIndex) => {
          if ((singleFilter.type !== 'urlfilter' && !singleFilter.showDropdown) || (hide && hide.indexOf(filterIndex) !== -1)) return <></>
          const values: JSX.Element[] = []
          if (singleFilter.resetLabel) {
            values.push(
              <option key={`${singleFilter.resetLabel}-option`} value={singleFilter.resetLabel}>
                {singleFilter.resetLabel}
              </option>
            )
          }
          const _key = singleFilter.apiFilter ? getApiFilterKey(singleFilter.apiFilter) : undefined
          if (_key && apiFilterDropdowns[_key]) {
            // URL Filter
            apiFilterDropdowns[_key]!.forEach(({ text, value }, index) => {
              values.push(
                <option key={`${value}-option-${index}`} value={value}>
                  {text}
                </option>
              )
            })
          } else {
            // Data Filter
            singleFilter.values?.forEach((filterOption, index) => {
              const labeledOpt = singleFilter.labels && singleFilter.labels[filterOption]
              values.push(
                <option key={`${singleFilter.key}-option-${index}`} value={filterOption}>
                  {labeledOpt || filterOption}
                </option>
              )
            })
          }

          return (
            <div className='cove-dashboard-filters' key={`${singleFilter.key}-filtersection-${filterIndex}`}>
              <section className='dashboard-filters-section'>
                <label htmlFor={`filter-${filterIndex}`}>{singleFilter.key}</label>
                <select
                  id={`filter-${filterIndex}`}
                  className='filter-select'
                  data-index='0'
                  value={singleFilter.queuedActive || singleFilter.active}
                  onChange={val => {
                    handleOnChange(filterIndex, val.target.value)
                  }}
                >
                  {values}
                </select>
              </section>
            </div>
          )
        })}

        {!isLegacyFilter && config.filterBehavior === FilterBehavior.Apply && <button onClick={applyFilters}>GO!</button>}
      </>
    )
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

  const setPreview = shouldPreview => dispatch({ type: 'SET_PREVIEW', payload: shouldPreview })

  // Prevent render if loading
  if (state.loading || !state.config) return <Loading />

  let body: JSX.Element | null = null
  // Editor mode
  if (isEditor && !state.preview) {
    let subVisualizationEditing = false

    getVizKeys(state.config).forEach(visualizationKey => {
      let visualizationConfig = { ...state.config?.visualizations[visualizationKey] }

      const dataKey = visualizationConfig.dataKey || 'backwards-compatibility'

      if (state.filteredData && state.filteredData[visualizationKey]) {
        visualizationConfig.data = state.filteredData[visualizationKey]
        if (visualizationConfig.formattedData) {
          visualizationConfig.originalFormattedData = visualizationConfig.formattedData
          visualizationConfig.formattedData = visualizationConfig.data
        }
      } else {
        visualizationConfig.data = state.data[dataKey]
        if (visualizationConfig.formattedData) {
          visualizationConfig.originalFormattedData = visualizationConfig.formattedData
          visualizationConfig.formattedData = transform.developerStandardize(visualizationConfig.data, visualizationConfig.dataDescription) || visualizationConfig.data
        }
      }

      const setsSharedFilter = state.config?.dashboard.sharedFilters && state.config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === visualizationKey).length > 0
      const setSharedFilterValue = setsSharedFilter ? state.config?.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === visualizationKey)[0].active : undefined

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
            visualizationConfig = { ...visualizationConfig, newViz: true }
            body = (
              <>
                <Header visualizationKey={visualizationKey} subEditor='Data Bite' />
                <CdcDataBite key={visualizationKey} config={visualizationConfig} isEditor={true} setConfig={_updateConfig} isDashboard={true} />
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
                <Filters hide={visualizationConfig.hide} autoLoad={visualizationConfig.autoLoad} />
              </>
            ) : (
              <></>
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
          <Header setPreview={setPreview} />
          <div className='layout-container'>
            <VisualizationsPanel loadConfig={loadConfig} config={state.config} />
            <Grid />
          </div>
        </DndProvider>
      )
    }
  } else {
    const { config } = state
    const { title, description } = config?.dashboard || {}
    body = (
      <>
        {isEditor && <Header setPreview={setPreview} />}
        <div className={`cdc-dashboard-inner-container${isEditor ? ' is-editor' : ''}`}>
          <Title title={title} isDashboard={true} classes={[`dashboard-title`, `${config.dashboard.theme ?? 'theme-blue'}`]} />
          {/* Description */}
          {description && <div className='subtext'>{parse(description)}</div>}
          {/* Filters */}
          {config.dashboard.sharedFilters && Object.values(config?.visualizations || {}).filter(viz => viz.visualizationType === 'filter-dropdowns').length === 0 && <Filters hide={undefined} autoLoad={undefined} />}

          {/* Visualizations */}
          {config.rows &&
            config.rows
              .filter(row => row.filter(col => col.widget).length !== 0)
              .map((row, index) => {
                return (
                  <div className={`dashboard-row ${row.equalHeight ? 'equal-height' : ''}`} key={`row__${index}`}>
                    {row.map((col, colIndex) => {
                      if (col.width) {
                        if (!col.widget) return <div key={`row__${index}__col__${colIndex}`} className={`dashboard-col dashboard-col-${col.width}`}></div>

                        let visualizationConfig = { ...config.visualizations[col.widget] }

                        const dataKey = visualizationConfig.dataKey || 'backwards-compatibility'

                        if (state.filteredData && state.filteredData[col.widget]) {
                          visualizationConfig.data = state.filteredData[col.widget]
                          if (visualizationConfig.formattedData) {
                            visualizationConfig.originalFormattedData = visualizationConfig.formattedData
                            visualizationConfig.formattedData = visualizationConfig.data
                          }
                        } else {
                          visualizationConfig.data = state.data[dataKey]
                          if (visualizationConfig.formattedData) {
                            visualizationConfig.originalFormattedData = visualizationConfig.formattedData
                            visualizationConfig.formattedData = transform.developerStandardize(visualizationConfig.data, visualizationConfig.dataDescription) || visualizationConfig.data
                          }
                        }

                        const setsSharedFilter = config.dashboard.sharedFilters && config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === col.widget).length > 0
                        const setSharedFilterValue = setsSharedFilter ? config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === col.widget)[0].active : undefined
                        const tableLink = (
                          <a href={`#data-table-${visualizationConfig.dataKey}`} className='margin-left-href'>
                            {visualizationConfig.dataKey} (Go to Table)
                          </a>
                        )
                        const hideFilter = visualizationConfig.autoLoad && inNoDataState
                        return (
                          <React.Fragment key={`vis__${index}__${colIndex}`}>
                            <div className={`dashboard-col dashboard-col-${col.width}`}>
                              {visualizationConfig.type === 'chart' && (
                                <CdcChart
                                  key={col.widget}
                                  config={visualizationConfig}
                                  dashboardConfig={config}
                                  isEditor={false}
                                  setConfig={newConfig => {
                                    updateChildConfig(col.widget, newConfig)
                                  }}
                                  setSharedFilter={setsSharedFilter ? setSharedFilter : undefined}
                                  isDashboard={true}
                                  link={config.table && config.table.show && config.datasets && visualizationConfig.table && visualizationConfig.table.showDataTableLink ? tableLink : undefined}
                                  configUrl={undefined}
                                  setEditing={undefined}
                                  hostname={undefined}
                                  setSharedFilterValue={undefined}
                                />
                              )}
                              {visualizationConfig.type === 'map' && (
                                <CdcMap
                                  key={col.widget}
                                  config={visualizationConfig}
                                  isEditor={false}
                                  setConfig={newConfig => {
                                    updateChildConfig(col.widget, newConfig)
                                  }}
                                  showLoader={false}
                                  setSharedFilter={setsSharedFilter ? setSharedFilter : undefined}
                                  setSharedFilterValue={setSharedFilterValue}
                                  isDashboard={true}
                                  link={config.table && config.table.show && config.datasets && visualizationConfig.table && visualizationConfig.table.showDataTableLink ? tableLink : undefined}
                                />
                              )}
                              {visualizationConfig.type === 'data-bite' && (
                                <CdcDataBite
                                  key={col.widget}
                                  config={visualizationConfig}
                                  isEditor={false}
                                  setConfig={newConfig => {
                                    updateChildConfig(col.widget, newConfig)
                                  }}
                                  isDashboard={true}
                                />
                              )}
                              {visualizationConfig.type === 'waffle-chart' && (
                                <CdcWaffleChart
                                  key={col.widget}
                                  config={visualizationConfig}
                                  isEditor={false}
                                  setConfig={newConfig => {
                                    updateChildConfig(col.widget, newConfig)
                                  }}
                                  isDashboard={true}
                                  configUrl={config.table && config.table.show && config.datasets && visualizationConfig.table && visualizationConfig.table.showDataTableLink ? tableLink : undefined}
                                />
                              )}
                              {visualizationConfig.type === 'markup-include' && (
                                <CdcMarkupInclude
                                  key={col.widget}
                                  config={visualizationConfig}
                                  isEditor={false}
                                  setConfig={newConfig => {
                                    updateChildConfig(col.widget, newConfig)
                                  }}
                                  isDashboard={true}
                                  configUrl={undefined}
                                />
                              )}
                              {visualizationConfig.type === 'filtered-text' && (
                                <CdcFilteredText
                                  key={col.widget}
                                  config={visualizationConfig}
                                  isEditor={false}
                                  setConfig={newConfig => {
                                    updateChildConfig(col.widget, newConfig)
                                  }}
                                  isDashboard={true}
                                  configUrl={undefined}
                                />
                              )}
                              {visualizationConfig.type === 'filter-dropdowns' && !hideFilter && <Filters hide={visualizationConfig.hide} autoLoad={visualizationConfig.autoLoad} />}
                            </div>
                          </React.Fragment>
                        )
                      }
                      return <React.Fragment key={`vis__${index}__${colIndex}`}></React.Fragment>
                    })}
                  </div>
                )
              })}

          {/* Image or PDF Inserts */}
          <section className='download-buttons'>
            {config.table?.downloadImageButton && <MediaControls.Button title='Download Dashboard as Image' type='image' state={config} text='Download Dashboard Image' elementToCapture={imageId} />}
            {config.table?.downloadPdfButton && <MediaControls.Button title='Download Dashboard as PDF' type='pdf' state={config} text='Download Dashboard PDF' elementToCapture={imageId} />}
          </section>

          {/* Data Table */}
          {config?.table?.show && config?.data && (
            <DataTable
              config={config}
              rawData={config.data}
              runtimeData={config.data || []}
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
              //Apply these filters to the table
              let filteredTableData
              if (config.dashboard.sharedFilters && config.dashboard.sharedFilters.length > 0) {
                //Gets list of visuailzations using the dataset
                let vizKeysUsingDataset: string[] = []
                getVizKeys(config).forEach(visualizationKey => {
                  if (config.visualizations[visualizationKey].dataKey === datasetKey) {
                    vizKeysUsingDataset.push(visualizationKey)
                  }
                })

                //Checks shared filters against list to see if all visualizations are represented
                let applicableFilters: SharedFilter[] = []
                config.dashboard.sharedFilters.forEach(sharedFilter => {
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

                //Applys any applicable filters
                if (applicableFilters.length > 0) {
                  filteredTableData = filterData(applicableFilters, config.datasets[datasetKey].data, state.config?.filterBehavior)
                }
              }

              return (
                <div className='multi-table-container' id={`data-table-${datasetKey}`} key={`data-table-${datasetKey}`}>
                  <DataTable
                    config={config as TableConfig}
                    dataConfig={config.datasets[datasetKey]}
                    rawData={config.datasets[datasetKey].data}
                    runtimeData={filteredTableData || config.datasets[datasetKey].data || []}
                    expandDataTable={config.table.expanded}
                    tableTitle={datasetKey}
                    viewport={currentViewport}
                    tabbingId={datasetKey}
                  />
                </div>
              )
            })}
        </div>
      </>
    )
  }

  const dashboardContainerClasses = ['cdc-open-viz-module', 'type-dashboard', `${currentViewport}`]

  return (
    <GlobalContextProvider>
      <DashboardContext.Provider value={{ ...state, setParentConfig, outerContainerRef, isDebug }}>
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
