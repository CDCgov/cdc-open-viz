import React, { useState, useEffect, useCallback } from 'react'

// IE11
// import 'core-js/stable'
import 'whatwg-fetch'
import ResizeObserver from 'resize-observer-polyfill'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import parse from 'html-react-parser'

import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import { GlobalContextProvider } from '@cdc/core/components/GlobalContext'
import ConfigContext from './ConfigContext'

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
import Header, { FilterBehavior } from './components/Header'
import defaults from './data/initial-state'
import Widget from './components/Widget'
import DataTable from './components/DataTable'
import MediaControls from '@cdc/core/components/MediaControls'

import './scss/main.scss'
import '@cdc/core/styles/v2/main.scss'
import AdvancedEditor from '@cdc/core/components/AdvancedEditor'

export type APIFilter = {
  apiEndpoint: string
  valueSelector: string
  textSelector: string
}

export type SharedFilter = {
  type?: 'urlfilter' | 'datafilter' | ''
  queryParameter?: string
  active?: string
  usedBy?: string[]
  parent?: string
  setBy?: string
  columnName?: string
  resetLabel?: string
  showDropdown?: boolean
  labels?: {
    [p: string]: any
  }
  key: string
  values?: string[]
  apiFilter?: APIFilter
  datasetKey?: string
  tier?: number
}

type DataSet = {
  data: any
  dataDescription: string
  dataUrl: string
  runtimeDataUrl: string
  dataFileSourceType: string
  formattedData: any
}

type DataSets = {
  [p: string]: DataSet
}

export type Config = DataSet & {
  dashboard: {
    sharedFilters: SharedFilter[]
    datasets: DataSets
    description: any
    title: any
    theme: any
    filters: any
  }
  visualizations: {
    [vizKey: string]: {
      visualizationType: string
      dataKey: string
      formattedData: any
      dataDescription: string
      data: any
      originalFormattedData: any
      editing: boolean
      type: 'chart' | 'map' | 'data-bite' | 'waffle-chart' | 'markup-include' | 'filtered-text' | 'filter-dropdowns'
      newViz: boolean
      hide: any[]
      table: {
        showDataTableLink: boolean
      }
      general: any
      title: string
      usesSharedFilter: any
    }
  }
  datasets: DataSets
  dataFileName: string
  table: any
  rows: any[]
  data: any
  filterBehavior: string
}

type APIFilterDropdowns = {
  // null means still loading
  [filtername: string]: null | [{ value: string; text: string }]
}

/* eslint-disable react-hooks/exhaustive-deps */

const addVisualization = (type, subType) => {
  let modalWillOpen = type === 'markup-include' ? false : true
  type VisConfig = {
    newViz: boolean
    openModal: boolean
    uid: string
    type: string
    visualizationType?: string
    general?: { geoType?: string }
  }
  let newVisualizationConfig: VisConfig = {
    newViz: true,
    openModal: modalWillOpen,
    uid: type + Date.now(),
    type
  }

  switch (type) {
    case 'chart':
      newVisualizationConfig.visualizationType = subType
      break
    case 'map':
      newVisualizationConfig.general = {}
      newVisualizationConfig.general.geoType = subType
      break
    case 'data-bite':
      newVisualizationConfig.visualizationType = type
      break
    case 'waffle-chart':
      newVisualizationConfig.visualizationType = type
      break
    case 'markup-include':
      newVisualizationConfig.visualizationType = type
      break
    case 'filtered-text':
      newVisualizationConfig.visualizationType = type
      break
    default:
      newVisualizationConfig.visualizationType = type
      break
  }

  return newVisualizationConfig
}

const VisualizationsPanel = ({ loadConfig, config }) => (
  <div className='visualizations-panel'>
    <p style={{ fontSize: '14px' }}>Click and drag an item onto the grid to add it to your dashboard.</p>
    <span className='subheading-3'>Chart</span>
    <div className='drag-grid'>
      <Widget addVisualization={() => addVisualization('chart', 'Bar')} type='Bar' />
      <Widget addVisualization={() => addVisualization('chart', 'Line')} type='Line' />
      <Widget addVisualization={() => addVisualization('chart', 'Pie')} type='Pie' />
    </div>
    <span className='subheading-3'>Map</span>
    <div className='drag-grid'>
      <Widget addVisualization={() => addVisualization('map', 'us')} type='us' />
      <Widget addVisualization={() => addVisualization('map', 'world')} type='world' />
      <Widget addVisualization={() => addVisualization('map', 'single-state')} type='single-state' />
    </div>
    <span className='subheading-3'>Misc.</span>
    <div className='drag-grid'>
      <Widget addVisualization={() => addVisualization('data-bite', '')} type='data-bite' />
      <Widget addVisualization={() => addVisualization('waffle-chart', '')} type='waffle-chart' />
      <Widget addVisualization={() => addVisualization('markup-include', '')} type='markup-include' />
      <Widget addVisualization={() => addVisualization('filtered-text', '')} type='filtered-text' />
      <Widget addVisualization={() => addVisualization('filter-dropdowns', '')} type='filter-dropdowns' />
    </div>
    <span className='subheading-3'>Advanced</span>
    <AdvancedEditor loadConfig={loadConfig} state={config} convertStateToConfig={undefined} />
  </div>
)

export default function CdcDashboard({ configUrl = '', config: configObj = undefined, isEditor = false, isDebug = false, setConfig: setParentConfig }) {
  const [config, setConfig] = useState<Config | null>(configObj ?? null)
  const [data, setData] = useState({})
  const [filteredData, setFilteredData] = useState({})
  const [apiFilterDropdowns, setAPIFilterDropdowns] = useState<APIFilterDropdowns>({})
  const [loading, setLoading] = useState(false)
  const [preview, setPreview] = useState(false)
  const [tabSelected, setTabSelected] = useState(0)
  const [currentViewport, setCurrentViewport] = useState('lg')
  const [imageId] = useState(`cove-${Math.random().toString(16).slice(-4)}`)

  const transform = new DataTransform()

  const getFormattedData = (data, dataDescription) => {
    if (data && dataDescription) {
      try {
        let formattedData = transform.autoStandardize(data)
        formattedData = transform.developerStandardize(data, dataDescription)
        return formattedData
      } catch (e) {
        return data
      }
    }

    return data
  }

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

  const getVizKeys = (_config): string[] => Object.keys(config?.visualizations || {})

  const loadAPIFilters = async () => {
    if (config?.dashboard?.sharedFilters) {
      const sharedFilters = config.dashboard.sharedFilters.filter(f => f.apiFilter)
      const loadingFilterMemo: APIFilterDropdowns = sharedFilters.reduce((acc, curr) => {
        const _key = curr.apiFilter!.apiEndpoint
        if (apiFilterDropdowns[_key] != null) return acc // don't overwrite fetched data.
        acc[_key] = null
        return acc
      }, {})
      setAPIFilterDropdowns({ ...apiFilterDropdowns, ...loadingFilterMemo })
      const filterLookup = new Map(sharedFilters.map(filter => [filter.apiFilter!.apiEndpoint, filter.apiFilter!]))
      const getParentParams = (childFilter: SharedFilter): { key: string; value: string } | null => {
        if (!childFilter.parent) return null
        const _parent = sharedFilters.find(parentFilter => parentFilter.key === childFilter.parent)
        if (!_parent) return null
        return { key: _parent.queryParameter || '', value: _parent.active || '' }
      }
      sharedFilters.forEach(async filter => {
        const baseEndpoint = filter.apiFilter!.apiEndpoint
        const params = getParentParams(filter)
        if (params && !params.value) return // don't send request dependent children
        if (apiFilterDropdowns[baseEndpoint] && !params) return // don't reload filter unless it's a child
        const endpoint = filter.apiFilter!.apiEndpoint + (params ? `?${params.key}=${params.value}` : '')
        fetch(endpoint)
          .then(resp => resp.json())
          .then(data => {
            const { textSelector, valueSelector } = filterLookup.get(baseEndpoint) as APIFilter
            const _filterValues = data.map(v => ({ text: v[textSelector], value: v[valueSelector] }))
            setAPIFilterDropdowns(dropdowns => ({ ...dropdowns, [baseEndpoint]: _filterValues }))
          })
      })
    }
  }

  const reloadURLData = async () => {
    if (config && config.datasets) {
      let newData = { ...data }
      let newDatasets = { ...config.datasets }
      let datasetsNeedsUpdate = false
      let datasetKeys = Object.keys(config.datasets)
      for (let i = 0; i < datasetKeys.length; i++) {
        const datasetKey = datasetKeys[i]
        const dataset = config.datasets[datasetKey]
        if (dataset.dataUrl && config.dashboard && config.dashboard.sharedFilters) {
          const dataUrl = new URL(dataset.runtimeDataUrl || dataset.dataUrl)
          let currentQSParams = Object.fromEntries(new URLSearchParams(dataUrl.search))
          let updatedQSParams = {}

          let isUpdateNeeded = false

          config.dashboard.sharedFilters.forEach(filter => {
            if (filter.type === 'urlfilter' && !!filter.queryParameter) {
              if (updatedQSParams[filter.queryParameter]) {
                updatedQSParams[filter.queryParameter] = updatedQSParams[filter.queryParameter] + filter.active
              } else {
                updatedQSParams[filter.queryParameter] = filter.active
              }
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

          const gatherQueryParams = (params: { [key: string]: string }) => {
            return Object.keys(params)
              .map((key, i) => {
                let qs = i === 0 ? '?' : '&'
                qs += key + '='
                qs += params[key]
                return qs
              })
              .join('')
          }
          let dataUrlFinal = `${dataUrl.origin}${dataUrl.pathname}${gatherQueryParams(updatedQSParams)}`

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
        setData(newData)

        let newFilteredData = {}
        let newConfig = { ...config }
        getVizKeys(config).forEach(key => {
          let dataKey = config.visualizations[key].dataKey

          let applicableFilters = config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.usedBy && sharedFilter.usedBy.indexOf(key) !== -1)
          if (applicableFilters.length > 0) {
            newFilteredData[key] = filterData(applicableFilters, newData[dataKey])
          }

          if (newData[dataKey]) {
            newConfig.visualizations[key].formattedData = newData[dataKey]
          }
        })
        setFilteredData(newFilteredData)

        newConfig.datasets = newDatasets
        setConfig(newConfig)
      }
    }
  }

  const loadConfig = async () => {
    setLoading(true)
    let response: Config = configObj || (await (await fetch(configUrl)).json())
    let newConfig = { ...defaults, ...response }
    let datasets = {} as DataSets

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

      newConfig.data = undefined
      newConfig.dataUrl = ''
      newConfig.dataFileName = ''
      newConfig.dataFileSourceType = ''
      newConfig.dataDescription = ''
      newConfig.formattedData = undefined

      if (newConfig.dashboard && newConfig.dashboard.filters) {
        newConfig.dashboard.sharedFilters = newConfig.dashboard.sharedFilters || []
        newConfig.dashboard.filters.forEach(filter => {
          newConfig.dashboard.sharedFilters.push({ ...filter, key: filter.label, showDropdown: true, usedBy: getVizKeys(newConfig) })
        })

        newConfig.dashboard.filters = undefined
      }
    }

    setData(datasets)
    updateConfig(newConfig, datasets)
    setLoading(false)
  }

  const findFilterTier = (filters, sharedFilter: SharedFilter) => {
    if (!sharedFilter.parent) {
      return 1
    } else {
      let parent = filters.find(filter => filter.key === sharedFilter.parent)
      if (!parent) return 1
      return 1 + findFilterTier(filters, parent)
    }
  }

  const filterData = (filters: SharedFilter[], _data) => {
    if (_data) {
      let maxTier = 1
      filters.forEach(sharedFilter => {
        sharedFilter.tier = findFilterTier(filters, sharedFilter)
      })

      filters.forEach(sharedFilter => {
        if (sharedFilter.tier && sharedFilter.tier > maxTier) {
          maxTier = sharedFilter.tier
        }
      })

      let filteredData = _data
      // TODO triple loop??
      for (let i = 0; i < maxTier; i++) {
        let filteredDataSubTier: any[] = []

        filteredData.forEach(row => {
          let add = true

          filters.forEach(filter => {
            // eslint-disable-next-line eqeqeq
            if (filter.type !== 'urlfilter' && ((!filter.tier && i === 0) || filter.tier === i + 1) && filter.active && row[filter.columnName!] != filter.active) {
              add = false
            }
          })

          if (add) filteredDataSubTier.push(row)
        })

        filters.forEach(sharedFilter => {
          if (sharedFilter.tier && sharedFilter.tier === i + 2) {
            sharedFilter.values = generateValuesForFilter(sharedFilter.columnName, { data: filteredDataSubTier })
            if (sharedFilter.values.length > 0 && (!sharedFilter.active || sharedFilter.values.indexOf(sharedFilter.active) === -1)) {
              sharedFilter.active = sharedFilter.values[0]
            }
          }
        })

        filteredData = filteredDataSubTier
      }

      let filteredDataSubTier: any[] = []
      filteredData.forEach(row => {
        let add = true

        filters.forEach(filter => {
          // eslint-disable-next-line eqeqeq
          if (filter.type !== 'urlfilter' && filter.tier && filter.tier === maxTier - 1 && filter.active && row[filter.columnName!] != filter.active) {
            add = false
          }
        })

        if (add) filteredDataSubTier.push(row)
      })

      return filteredDataSubTier
    }
  }

  const setSharedFilter = (key, datum) => {
    if (!config) return
    let newConfig = { ...config }
    let newFilteredData = { ...filteredData }
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

        const formattedData = visualization.dataDescription ? getFormattedData(data[visualization.dataKey] || visualization.data, visualization.dataDescription) : undefined

        newFilteredData[visualizationKey] = filterData(applicableFilters, formattedData || data[visualization.dataKey])
      }
    })

    setFilteredData(newFilteredData)
    setConfig(newConfig)
  }

  // Gets filer values from dataset
  const generateValuesForFilter = (columnName, _data = data) => {
    type Row = { [key: string]: any }
    return Object.values(_data)
      .filter(row => row && !!(row as Row)[columnName])
      .map(row => (row as Row)[columnName])
  }

  const updateConfig = (newConfig, dataOverride?: DataSets) => {
    let newFilteredData = {}
    let visualizationKeys = getVizKeys(newConfig)
    const setFilter = (filterIndex: number, key: string, value: any) => {
      newConfig.dashboard.sharedFilters[filterIndex][key] = value
    }
    if (newConfig.dashboard.sharedFilters) {
      newConfig.dashboard.sharedFilters.forEach((filter, i) => {
        const filterIsSetByVizData = !!visualizationKeys.find(key => key === filter.setBy)
        let _filter = newConfig.dashboard.sharedFilters[i]

        if (filterIsSetByVizData) {
          const filterValues = generateValuesForFilter(filter.columnName, dataOverride || data)

          if (_filter.order === 'asc') {
            filterValues.sort()
          }
          if (_filter.order === 'desc') {
            filterValues.sort().reverse()
          }

          setFilter(i, 'values', filterValues)
          _filter = newConfig.dashboard.sharedFilters[i]
          if (filterValues.length > 0) {
            setFilter(i, 'active', _filter.active || _filter.values[0])
          }
        }

        if ((!filter.values || filter.values.length === 0) && filter.showDropdown) {
          const generatedValues = generateValuesForFilter(filter.columnName, dataOverride || data)
          setFilter(i, 'values', generatedValues)
          const _filter = newConfig.dashboard.sharedFilters[i]
          if (_filter.values.length > 0) {
            setFilter(i, 'active', filter.active || _filter.values[0])
          }
        }
      })

      visualizationKeys.forEach(visualizationKey => {
        let applicableFilters = newConfig.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.usedBy && sharedFilter.usedBy.indexOf(visualizationKey) !== -1)

        if (applicableFilters.length > 0) {
          const visualization = newConfig.visualizations[visualizationKey]

          const formattedData = getFormattedData(newConfig.datasets[visualization.dataKey] && newConfig.datasets[visualization.dataKey].data ? newConfig.datasets[visualization.dataKey].data : visualization.data, visualization.dataDescription)

          newFilteredData[visualizationKey] = filterData(applicableFilters, formattedData || visualization.data || (dataOverride || data)[visualization.dataKey])
        }
      })
    }

    setFilteredData(newFilteredData)

    //Enforce default values that need to be calculated at runtime
    newConfig.runtime = {}
    setConfig(newConfig)
  }

  // Load data when component first mounts
  useEffect(() => {
    loadConfig()
  }, [])

  // Pass up to <CdcEditor /> if it exists when config state changes
  useEffect(() => {
    if (setParentConfig && isEditor) {
      setParentConfig(config)
    }
  }, [config])

  useEffect(() => {
    if (config && config.filterBehavior !== FilterBehavior.Apply) {
      reloadURLData()
    }
    loadAPIFilters()
  }, [JSON.stringify(config?.dashboard ? config.dashboard.sharedFilters : undefined)])

  const updateChildConfig = (visualizationKey, newConfig) => {
    if (!config) return
    let updatedConfig = { ...config }

    updatedConfig.visualizations[visualizationKey] = newConfig
    updatedConfig.visualizations[visualizationKey].formattedData = config.visualizations[visualizationKey].formattedData

    setConfig(updatedConfig)
  }

  const applyFilters = () => {
    if (!config) return
    const allFiltersSelected = !config.dashboard.sharedFilters.some(filter => !filter.active)
    if (allFiltersSelected) {
      reloadURLData()
    } else {
      // TODO noftify of required fields
    }
  }

  const Filters = ({ hide }) => {
    if (!config) return <></>
    const changeFilterActive = (index, value) => {
      let dashboardConfig = { ...config.dashboard }

      dashboardConfig.sharedFilters[index].active = value

      setConfig({ ...config, dashboard: dashboardConfig })
      if (config.filterBehavior !== FilterBehavior.Apply) {
        let newFilteredData = {}
        getVizKeys(config).forEach(key => {
          let applicableFilters = dashboardConfig.sharedFilters.filter(sharedFilter => sharedFilter.usedBy && sharedFilter.usedBy.indexOf(key) !== -1)
          if (applicableFilters.length > 0) {
            const visualization = config.visualizations[key]

            const formattedData = visualization.dataDescription ? getFormattedData(data[config.visualizations[key].dataKey] || visualization.data, visualization.dataDescription) : undefined

            newFilteredData[key] = filterData(applicableFilters, formattedData || data[config.visualizations[key].dataKey])
          }
        })

        setFilteredData(newFilteredData)
        const { active, resetLabel } = dashboardConfig.sharedFilters[index]
        if (active === resetLabel) {
          setFilteredData(data)
        }
      }
    }

    return (
      <>
        {config.dashboard.sharedFilters.map((singleFilter, index) => {
          if ((singleFilter.type !== 'urlfilter' && !singleFilter.showDropdown) || (hide && hide.indexOf(index) !== -1)) return <></>
          const endpoint = singleFilter.apiFilter?.apiEndpoint
          const values: JSX.Element[] = []
          if (singleFilter.resetLabel) {
            values.push(
              <option key={`${singleFilter.resetLabel}-option-${index}`} value={singleFilter.resetLabel}>
                {singleFilter.resetLabel}
              </option>
            )
          }
          if (endpoint && apiFilterDropdowns[endpoint]) {
            // URL Filter
            apiFilterDropdowns[endpoint]!.forEach(({ text, value }, index) => {
              values.push(
                <option key={`${value}-option-${index}`} value={value}>
                  {text}
                </option>
              )
            })
          } else {
            // Data Filter
            singleFilter.values!.forEach((filterOption, index) => {
              values.push(
                <option key={`${singleFilter.key}-option-${index}`} value={filterOption}>
                  {singleFilter.labels ? singleFilter.labels[filterOption] || filterOption : filterOption}
                </option>
              )
            })
          }

          return (
            <div className='cove-dashboard-filters' key={`${singleFilter.key}-filtersection-${index}`}>
              <section className='dashboard-filters-section'>
                <label htmlFor={`filter-${index}`}>{singleFilter.key}</label>
                <select
                  id={`filter-${index}`}
                  className='filter-select'
                  data-index='0'
                  value={singleFilter.active}
                  onChange={val => {
                    changeFilterActive(index, val.target.value)
                  }}
                >
                  {values}
                </select>
              </section>
            </div>
          )
        })}
        {config.filterBehavior === FilterBehavior.Apply && <button onClick={applyFilters}>GO!</button>}
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

  // Prevent render if loading
  if (loading || !config) return <Loading />

  let body: JSX.Element | null = null

  // Editor mode
  if (isEditor && !preview) {
    let subVisualizationEditing = false

    getVizKeys(config).forEach(visualizationKey => {
      let visualizationConfig = { ...config.visualizations[visualizationKey] }

      const dataKey = visualizationConfig.dataKey || 'backwards-compatibility'

      if (filteredData && filteredData[visualizationKey]) {
        visualizationConfig.data = filteredData[visualizationKey]
        if (visualizationConfig.formattedData) {
          visualizationConfig.originalFormattedData = visualizationConfig.formattedData
          visualizationConfig.formattedData = visualizationConfig.data
        }
      } else {
        visualizationConfig.data = data[dataKey]
        if (visualizationConfig.formattedData) {
          visualizationConfig.originalFormattedData = visualizationConfig.formattedData
          visualizationConfig.formattedData = transform.developerStandardize(visualizationConfig.data, visualizationConfig.dataDescription) || visualizationConfig.data
        }
      }

      const setsSharedFilter = config.dashboard.sharedFilters && config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === visualizationKey).length > 0
      const setSharedFilterValue = setsSharedFilter ? config.dashboard.sharedFilters.filter(sharedFilter => sharedFilter.setBy === visualizationKey)[0].active : undefined

      if (visualizationConfig.editing) {
        subVisualizationEditing = true

        const back = () => {
          const newConfig = { ...config }

          newConfig.visualizations[visualizationKey].editing = false

          setConfig(newConfig)
        }

        const _updateConfig = newConfig => {
          let dataCorrectedConfig = visualizationConfig.originalFormattedData ? { ...newConfig, formattedData: visualizationConfig.originalFormattedData } : newConfig
          updateChildConfig(visualizationKey, dataCorrectedConfig)
        }

        switch (visualizationConfig.type) {
          case 'chart':
            body = (
              <>
                <Header tabSelected={tabSelected} setTabSelected={setTabSelected} back={back} subEditor='Chart' />
                <CdcChart
                  key={visualizationKey}
                  config={visualizationConfig}
                  isEditor={true}
                  isDebug={isDebug}
                  setConfig={_updateConfig}
                  setSharedFilter={setsSharedFilter ? setSharedFilter : undefined}
                  setSharedFilterValue={setSharedFilterValue}
                  dashboardConfig={config}
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
                <Header tabSelected={tabSelected} setTabSelected={setTabSelected} back={back} subEditor='Map' />
                <CdcMap key={visualizationKey} config={visualizationConfig} isEditor={true} isDebug={isDebug} setConfig={_updateConfig} setSharedFilter={setsSharedFilter ? setSharedFilter : undefined} setSharedFilterValue={setSharedFilterValue} isDashboard={true} showLoader={false} />
              </>
            )
            break
          case 'data-bite':
            visualizationConfig = { ...visualizationConfig, newViz: true }
            body = (
              <>
                <Header tabSelected={tabSelected} setTabSelected={setTabSelected} back={back} subEditor='Data Bite' />
                <CdcDataBite key={visualizationKey} config={visualizationConfig} isEditor={true} setConfig={_updateConfig} isDashboard={true} />
              </>
            )
            break
          case 'waffle-chart':
            body = (
              <>
                <Header tabSelected={tabSelected} setTabSelected={setTabSelected} back={back} subEditor='Waffle Chart' />
                <CdcWaffleChart key={visualizationKey} config={visualizationConfig} isEditor={true} setConfig={_updateConfig} isDashboard={true} configUrl={undefined} />
              </>
            )
            break
          case 'markup-include':
            body = (
              <>
                <Header tabSelected={tabSelected} setTabSelected={setTabSelected} back={back} subEditor='Markup Include' />
                <CdcMarkupInclude key={visualizationKey} config={visualizationConfig} isEditor={true} setConfig={_updateConfig} isDashboard={true} configUrl={undefined} />
              </>
            )
            break
          case 'filtered-text':
            body = (
              <>
                <Header tabSelected={tabSelected} setTabSelected={setTabSelected} back={back} subEditor='Filtered Text' />
                <CdcFilteredText key={visualizationKey} config={visualizationConfig} isEditor={true} setConfig={_updateConfig} isDashboard={true} configUrl={undefined} />
              </>
            )
            break
          case 'filter-dropdowns':
            body = (
              <>
                <Header tabSelected={tabSelected} setTabSelected={setTabSelected} back={back} subEditor='Filter Dropdowns' />
                <Filters hide={visualizationConfig.hide} />
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
          <Header tabSelected={tabSelected} setTabSelected={setTabSelected} setPreview={setPreview} />
          <div className='layout-container'>
            <VisualizationsPanel loadConfig={loadConfig} config={config} />
            <Grid />
          </div>
        </DndProvider>
      )
    }
  } else {
    const { title, description } = config?.dashboard || {}
    body = (
      <>
        {isEditor && <Header tabSelected={tabSelected} setTabSelected={setTabSelected} setPreview={setPreview} />}
        <div className={`cdc-dashboard-inner-container${isEditor ? ' is-editor' : ''}`}>
          {/* Title */}
          {title && (
            <div role='heading' aria-level={3} className={`dashboard-title ${config.dashboard.theme ?? 'theme-blue'}`}>
              {parse(title)}
            </div>
          )}
          {/* Description */}
          {description && <div className='subtext'>{parse(description)}</div>}
          {/* Filters */}
          {config.dashboard.sharedFilters && Object.values(config?.visualizations || {}).filter(viz => viz.visualizationType === 'filter-dropdowns').length === 0 && <Filters hide={undefined} />}

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

                        if (filteredData && filteredData[col.widget]) {
                          visualizationConfig.data = filteredData[col.widget]
                          if (visualizationConfig.formattedData) {
                            visualizationConfig.originalFormattedData = visualizationConfig.formattedData
                            visualizationConfig.formattedData = visualizationConfig.data
                          }
                        } else {
                          visualizationConfig.data = data[dataKey]
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
                              {visualizationConfig.type === 'filter-dropdowns' && <Filters hide={visualizationConfig.hide} />}
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
            {config.table.downloadImageButton && <MediaControls.Button title='Download Dashboard as Image' type='image' state={config} text='Download Dashboard Image' elementToCapture={imageId} />}
            {config.table.downloadPdfButton && <MediaControls.Button title='Download Dashboard as PDF' type='pdf' state={config} text='Download Dashboard PDF' elementToCapture={imageId} />}
          </section>

          {/* Data Table */}
          {config.table && config.data && <DataTable data={config.data} config={config} imageRef={imageId} />}
          {config.table &&
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
                  filteredTableData = filterData(applicableFilters, config.datasets[datasetKey].data)
                }
              }

              let dataFileSourceType = config.datasets[datasetKey]?.dataFileSourceType

              return (
                <div className='multi-table-container' id={`data-table-${datasetKey}`} key={`data-table-${datasetKey}`}>
                  <DataTable data={filteredTableData || config.datasets[datasetKey].data || []} downloadData={config.datasets[datasetKey].data} dataFileSourceType={dataFileSourceType} datasetKey={datasetKey} config={config} imageRef={imageId}></DataTable>
                </div>
              )
            })}
        </div>
      </>
    )
  }

  const contextValues = {
    config,
    rawData: data,
    data: filteredData ?? data,
    visualizations: config.visualizations,
    rows: config.rows,
    loading,
    updateConfig,
    setParentConfig,
    setPreview,
    outerContainerRef,
    isDebug
  }

  const dashboardContainerClasses = ['cdc-open-viz-module', 'type-dashboard', `${currentViewport}`]

  return (
    <GlobalContextProvider>
      <ConfigContext.Provider value={contextValues}>
        <div className={dashboardContainerClasses.join(' ')} ref={outerContainerRef} data-download-id={imageId}>
          {body}
        </div>
        <OverlayFrame />
      </ConfigContext.Provider>
    </GlobalContextProvider>
  )
}
