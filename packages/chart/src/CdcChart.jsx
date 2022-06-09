import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react'

// IE11
import 'core-js/stable'
import ResizeObserver from 'resize-observer-polyfill'
import 'whatwg-fetch'

import { LegendOrdinal, LegendItem, LegendLabel } from '@visx/legend'
import { scaleOrdinal } from '@visx/scale'
import { timeParse, timeFormat } from 'd3-time-format'

import DataTransform from '@cdc/core/helpers/DataTransform'
import getViewport from '@cdc/core/helpers/getViewport'
import numberFromString from '@cdc/core/helpers/numberFromString'

import Button from '@cdc/core/components/elements/Button'
import Component from '@cdc/core/components/elements/Component'
import Loading from '@cdc/core/components/Loading'
import LegendCircle from '@cdc/core/components/LegendCircle'
import { colorPalettesChart as colorPalettes } from '@cdc/core/data/colorPalettes'

import EditorPanel from './components/EditorPanel'
import DataTable from './components/DataTable'

import { GlobalContextProvider } from '@cdc/core/components/GlobalContext'
import ConfigContext from './ConfigContext'
import defaults from './data/initial-state'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import RenderFallback from '@cdc/core/components/loaders/RenderFallback'

import './scss/cove-chart.scss'

const LinearChart = lazy(() => import('./components/LinearChart'))
const PieChart = lazy(() => import('./components/PieChart'))

const ChartVis = ({ visType, config, children }) => {
  let lineDatapointClass = ''
  let barBorderClass = ''

  if (config.lineDatapointStyle === 'hover') {
    lineDatapointClass = ' line--hover'
  }
  if (config.lineDatapointStyle === 'always show') {
    lineDatapointClass = ' line--always'
  }
  if (config.barHasBorder === 'false') {
    barBorderClass = ' no-border'
  }

  const chartList = {
    'Paired Bar': <LinearChart/>,
    'Bar': <LinearChart/>,
    'Line': <LinearChart/>,
    'Combo': <LinearChart/>,
    'Pie': <PieChart/>
  }

  return (
    <Suspense fallback={<RenderFallback text="Rendering chart..." loadSpinSize={75}/>}>
      <div className={`cove-chart__container${config.legend.hide ? ' legend-hidden' : ''}${lineDatapointClass}${barBorderClass}`}>
        {chartList[visType]}
        {children}
      </div>
    </Suspense>
  )
}

const CdcChart = (
  {
    configUrl,
    config: configObj,
    isEditor = false,
    isDashboard = false,
    isWizard = false,
    setConfig: setParentConfig,
    setEditing
  }
) => {
  const transform = new DataTransform()

  const [ loading, setLoading ] = useState(true)
  const [ colorScale, setColorScale ] = useState(null)
  const [ config, setConfig ] = useState({})
  const [ stateData, setStateData ] = useState(config.data || [])
  const [ excludedData, setExcludedData ] = useState()
  const [ filteredData, setFilteredData ] = useState()
  const [ seriesHighlight, setSeriesHighlight ] = useState([])
  const [ currentViewport, setCurrentViewport ] = useState('lg')
  const [ dimensions, setDimensions ] = useState([])

  const { legend, title, description, visualizationType } = config

  //Load initial config
  useEffect(() => {
    loadConfig().catch((err) => console.error(err))
  }, [])

  //Reload config if config object provided/updated
  useEffect(() => {
    loadConfig().catch((err) => console.error(err))
  }, [ configObj?.data ])

  // Generates color palette to pass to child chart component
  useEffect(() => {
    if (stateData && config.xAxis && config.runtime.seriesKeys) {
      let palette = colorPalettes[config.palette]
      let numberOfKeys = config.runtime.seriesKeys.length

      while (numberOfKeys > palette.length) {
        palette = palette.concat(palette)
      }

      palette = palette.slice(0, numberOfKeys)

      const newColorScale = () => scaleOrdinal({
        domain: config.runtime.seriesLabelsAll,
        range: palette,
      })

      setColorScale(newColorScale)
      setLoading(false)
    }

    if (config && stateData && config.sortData) {
      stateData.sort(sortData)
    }
  }, [ config, stateData ])

  const loadConfig = async () => {
    let response = configObj || await (await fetch(configUrl)).json()

    // If data is included through a URL, fetch that and store
    let data = response.formattedData || response.data || {}

    if (response.dataUrl) {
      const dataString = await fetch(response.dataUrl)

      data = await dataString.json()
      if (response.dataDescription) {
        data = transform.autoStandardize(data)
        data = transform.developerStandardize(data, response.dataDescription)
      }
    }

    if (data) {
      setStateData(data)
      setExcludedData(data)
    }

    let newConfig = { ...defaults, ...response }
    if (undefined === newConfig.table.show) newConfig.table.show = !isDashboard
    updateConfig(newConfig, data)
  }

  const updateConfig = (newConfig, dataOverride = undefined) => {
    let data = dataOverride || stateData

    // Deeper copy
    Object.keys(defaults).forEach(key => {
      if (newConfig[key] && 'object' === typeof newConfig[key] && !Array.isArray(newConfig[key])) {
        newConfig[key] = { ...defaults[key], ...newConfig[key] }
      }
    })

    // Loop through and set initial data with exclusions - this should persist through any following data transformations (ie. filters)
    let newExcludedData

    if (newConfig.exclusions && newConfig.exclusions.active) {

      if (newConfig.xAxis.type === 'categorical' && newConfig.exclusions.keys?.length > 0) {
        newExcludedData = data.filter(e => !newConfig.exclusions.keys.includes(e[newConfig.xAxis.dataKey]))
      } else if (
        newConfig.xAxis.type === 'date' &&
        (newConfig.exclusions.dateStart || newConfig.exclusions.dateEnd) &&
        newConfig.xAxis.dateParseFormat
      ) {

        // Filter dates
        const timestamp = (e) => new Date(e).getTime()

        let startDate = timestamp(newConfig.exclusions.dateStart)
        let endDate = timestamp(newConfig.exclusions.dateEnd) + 86399999 //Increase by 24h in ms (86400000ms - 1ms) to include selected end date for .getTime() comparative

        let startDateValid = undefined !== typeof startDate && false === isNaN(startDate)
        let endDateValid = undefined !== typeof endDate && false === isNaN(endDate)

        if (startDateValid && endDateValid) {
          newExcludedData = data.filter(e =>
            (timestamp(e[newConfig.xAxis.dataKey]) >= startDate) &&
            (timestamp(e[newConfig.xAxis.dataKey]) <= endDate)
          )
        } else if (startDateValid) {
          newExcludedData = data.filter(e => timestamp(e[newConfig.xAxis.dataKey]) >= startDate)
        } else if (endDateValid) {
          newExcludedData = data.filter(e => timestamp(e[newConfig.xAxis.dataKey]) <= endDate)
        }

      } else {
        newExcludedData = dataOverride || stateData
      }
    } else {
      newExcludedData = dataOverride || stateData
    }

    setExcludedData(newExcludedData)

    // After data is grabbed, loop through and generate filter column values if there are any
    let currentData

    if (newConfig.filters) {
      newConfig.filters.forEach((filter, index) => {
        let filterValues = []
        filterValues = generateValuesForFilter(filter.columnName, newExcludedData)
        newConfig.filters[index].values = filterValues
        // Initial filter should be active
        newConfig.filters[index].active = filterValues[0]
      })
      currentData = filterData(newConfig.filters, newExcludedData)
      setFilteredData(currentData)
    }

    //Enforce default values that need to be calculated at runtime
    newConfig.runtime = {}
    newConfig.runtime.seriesLabels = {}
    newConfig.runtime.seriesLabelsAll = []
    newConfig.runtime.originalXAxis = newConfig.xAxis

    if (newConfig.visualizationType === 'Pie') {
      newConfig.runtime.seriesKeys = (dataOverride || data).map(d => d[newConfig.xAxis.dataKey])
      newConfig.runtime.seriesLabelsAll = newConfig.runtime.seriesKeys
    } else {
      newConfig.runtime.seriesKeys = newConfig.series ? newConfig.series.map((series) => {
        newConfig.runtime.seriesLabels[series.dataKey] = series.label || series.dataKey
        newConfig.runtime.seriesLabelsAll.push(series.label || series.dataKey)
        return series.dataKey
      }) : []
    }

    if (newConfig.visualizationType === 'Combo' && newConfig.series) {
      newConfig.runtime.barSeriesKeys = []
      newConfig.runtime.lineSeriesKeys = []
      newConfig.series.forEach((series) => {
        if (series.type === 'Bar') {
          newConfig.runtime.barSeriesKeys.push(series.dataKey)
        }
        if (series.type === 'Line') {
          newConfig.runtime.lineSeriesKeys.push(series.dataKey)
        }
      })
    }

    if ((newConfig.visualizationType === 'Bar' && newConfig.orientation === 'horizontal') || newConfig.visualizationType === 'Paired Bar') {
      newConfig.runtime.xAxis = newConfig.yAxis
      newConfig.runtime.yAxis = newConfig.xAxis
      newConfig.runtime.horizontal = true
    } else {
      newConfig.runtime.xAxis = newConfig.xAxis
      newConfig.runtime.yAxis = newConfig.yAxis
      newConfig.runtime.horizontal = false
    }

    newConfig.runtime.uniqueId = Date.now()
    newConfig.runtime.editorErrorMessage = newConfig.visualizationType === 'Pie' && !newConfig.yAxis.dataKey ? 'Data Key property in Y Axis section must be set for pie charts.' : ''

    // Check for duplicate x axis values in data
    if (!currentData) currentData = newExcludedData

    let uniqueXValues = {}

    if (newConfig.visualizationType !== 'Paired Bar') {
      for (let i = 0; i < currentData.length; i++) {
        if (uniqueXValues[currentData[i][newConfig.xAxis.dataKey]]) {
          newConfig.runtime.editorErrorMessage = 'Duplicate keys in data. Try adding a filter.'
        } else {
          uniqueXValues[currentData[i][newConfig.xAxis.dataKey]] = true
        }
      }
    }
    setConfig(newConfig)
  }

  const filterData = (filters, data) => {
    let filteredData = []

    data.forEach((row) => {
      let add = true
      filters.forEach((filter) => {
        if (row[filter.columnName] !== filter.active) {
          add = false
        }
      })
      if (add) filteredData.push(row)
    })
    return filteredData
  }

  // Gets filer values from dataset
  const generateValuesForFilter = (columnName, data) => {
    const values = []

    data.forEach((row) => {
      const value = row[columnName]
      if (value && false === values.includes(value)) {
        values.push(value)
      }
    })

    return values
  }

  // Sorts data series for horizontal bar charts
  const sortData = (a, b) => {
    let sortKey = config.visualizationType === 'Bar' && config.visualizationSubType === 'horizontal' ? config.xAxis.dataKey : config.yAxis.sortKey
    let aData = parseFloat(a[sortKey])
    let bData = parseFloat(b[sortKey])

    if (aData < bData) {
      return config.sortData === 'ascending' ? 1 : -1
    } else if (aData > bData) {
      return config.sortData === 'ascending' ? -1 : 1
    } else {
      return 0
    }
  }

  // Observe changes to outermost container and changes viewport size in state
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      let { width, height } = entry.contentRect

      let newViewport = getViewport(width)
      let svgMarginWidth = 32

      setCurrentViewport(newViewport)

      if (entry.target.dataset.lollipop === 'true') {
        width = width - 2.5
      }

      width = width - svgMarginWidth

      setDimensions([ width, height ])
    }
  })

  const outerContainerRef = useCallback(node => {
    if (node !== null) {
      resizeObserver.observe(node)
    }
  }, [])

  // Called on legend click, highlights/unhighlights the data series with the given label
  const highlight = (label) => {
    const newSeriesHighlight = []

    // If we're highlighting all the series, reset them
    if (seriesHighlight.length + 1 === config.runtime.seriesKeys.length) {
      highlightReset()
      return
    }

    seriesHighlight.forEach((value) => {
      newSeriesHighlight.push(value)
    })

    let newHighlight = label.datum
    if (config.runtime.seriesLabels) {
      for (let i = 0; i < config.runtime.seriesKeys.length; i++) {
        if (config.runtime.seriesLabels[config.runtime.seriesKeys[i]] === label.datum) {
          newHighlight = config.runtime.seriesKeys[i]
          break
        }
      }
    }

    if (newSeriesHighlight.indexOf(newHighlight) !== -1) {
      newSeriesHighlight.splice(newSeriesHighlight.indexOf(newHighlight), 1)
    } else {
      newSeriesHighlight.push(newHighlight)
    }

    setSeriesHighlight(newSeriesHighlight)
  }

  // Called on reset button click, unhighlights all data series
  const highlightReset = () => {
    setSeriesHighlight([])
  }

  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

  const parseDate = (dateString) => {
    let date = timeParse(config.runtime.xAxis.dateParseFormat)(dateString)
    if (!date) {
      config.runtime.editorErrorMessage = `Error parsing date "${dateString}". Try reviewing your data and date parse settings in the X Axis section.`
      return new Date()
    } else {
      return date
    }
  }

  const formatDate = (date) => {
    return timeFormat(config.runtime.xAxis.dateDisplayFormat)(date)
  }

  // Format numeric data based on settings in config
  const formatNumber = (num) => {
    let original = num
    let prefix = config.dataFormat.prefix
    num = numberFromString(num)

    if (isNaN(num)) {
      config.runtime.editorErrorMessage = `Unable to parse number from data ${original}. Try reviewing your data and selections in the Data Series section.`
      return
    }

    if (!config.dataFormat) return num
    if (config.dataCutoff) {
      let cutoff = numberFromString(config.dataCutoff)

      if (num < cutoff) {
        prefix = '< ' + (prefix || '')
        num = cutoff
      }
    }
    if (config.dataFormat.roundTo) num = num.toFixed(config.dataFormat.roundTo)
    if (config.dataFormat.commas) num = num.toLocaleString('en-US')

    let result = ''

    if (prefix) {
      result += prefix
    }

    result += num

    if (config.dataFormat.suffix) {
      result += config.dataFormat.suffix
    }

    return result
  }

  // JSX for Legend
  const Legend = () => {
    const isReversed = () => (config.orientation === 'horizontal' && config.legend.reverseLabelOrder)

    return (
      <aside id="legend" className="cove-chart__legend" flow={config.legend.position} role="region" aria-label="legend">
        {legend.label && <h2 className="cove-heading--4 mb-1">{legend.label}</h2>}
        <LegendOrdinal scale={colorScale} itemDirection="row" labelMargin="0 20px 0 0" shapeMargin="0 10px 0">
          {labels => (
            <div className={'cove-chart__legend-container' + (isReversed() ? ' reverse' : '')}>
              {labels.map((label, i) => {
                const isInactive = () => seriesHighlight.length > 0 && false === seriesHighlight.includes(itemName)

                let itemName = label.datum

                // Filter excluded data keys from legend
                if (config.exclusions.active && config.exclusions.keys?.includes(itemName)) return null

                if (config.runtime.seriesLabels) {
                  let index = config.runtime.seriesLabelsAll.indexOf(itemName)
                  itemName = config.runtime.seriesKeys[index]
                }

                return (
                  <LegendItem
                    className={'cove-chart__legend-item' + (isInactive() ? ' inactive' : '')}
                    tabIndex={0} key={`legend-quantile-${i}`}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        highlight(label)
                      }
                    }}
                    onClick={() => {
                      highlight(label)
                    }}
                  >
                    <LegendCircle fill={label.value}/>
                    <LegendLabel className="cove-chart__legend-text" align="left" margin="0 0 0 4px">{capitalizeFirstLetter(label.text)}</LegendLabel>
                  </LegendItem>
                )
              })}
              {seriesHighlight.length > 0 &&
                <Button className={`cove-chart__legend__reset-button`} onClick={highlightReset}>Reset</Button>}
            </div>
          )}
        </LegendOrdinal>
      </aside>
    )
  }

  const Filters = () => {
    const changeFilterActive = (index, value) => {
      let newFilters = config.filters
      newFilters[index].active = value
      setConfig({ ...config, filters: newFilters })
      setFilteredData(filterData(newFilters, excludedData))
    }

    const announceChange = (text) => {
    }

    let filterList = ''
    if (config.filters) {

      filterList = config.filters.map((singleFilter, index) => {
        const values = []
        const sortAsc = (a, b) => {
          return a.toString().localeCompare(b.toString(), 'en', { numeric: true })
        }

        const sortDesc = (a, b) => {
          return b.toString().localeCompare(a.toString(), 'en', { numeric: true })
        }

        if (!singleFilter.order || singleFilter.order === '') {
          singleFilter.order = 'asc'
        }

        if (singleFilter.order === 'desc') {
          singleFilter.values = singleFilter.values.sort(sortDesc)
        }

        if (singleFilter.order === 'asc') {
          singleFilter.values = singleFilter.values.sort(sortAsc)
        }

        singleFilter.values.forEach((filterOption, index) => {
          values.push(
            <option key={index} value={filterOption}>
              {filterOption}
            </option>
          )
        })

        return (
          <div className="single-filter" key={index}>
            <label htmlFor={`filter-${index}`}>{singleFilter.label}</label>
            <select
              id={`filter-${index}`}
              className="filter-select"
              data-index="0"
              value={singleFilter.active}
              onChange={(val) => {
                changeFilterActive(index, val.target.value)
                announceChange(`Filter ${singleFilter.label} value has been changed to ${val.target.value}, please reference the data table to see updated values.`)
              }}
            >
              {values}
            </select>
          </div>
        )
      })
    }

    return (<section className="filters-section">{filterList}</section>)
  }

  const missingRequiredSections = () => {
    if (config.visualizationType === 'Pie') {
      if (undefined === config?.yAxis.dataKey) {
        return true
      }
    } else {
      if (undefined === config?.series || !(config?.series.length > 0)) {
        return true
      }
    }
    return !config.xAxis.dataKey
  }

  const handleChartTabbing = config.showSidebar
    ? `#legend`
    : config?.title
      ? `#dataTableSection__${config.title.replace(/\s/g, '')}`
      : `#dataTableSection`

  //Start building CdcChart Renders ------------------------------
  let content = (<Loading/>)

  if (loading === false) {
    let body = (
      <>
        {!missingRequiredSections() && !config.newViz &&
          <Component className={`cove-chart ${currentViewport}`} title={title} description={description}
                     table={<DataTable/>} tableShowIf={config.xAxis.dataKey && config.table.show && config.visualizationType !== 'Paired Bar'}
                     theme={config.theme}
          >
            <a className="sr-only" href={handleChartTabbing}>
              Skip Over Chart Container
            </a>

            {config.filters && <Filters/>}
            <div className="cove-component__visualization" ref={outerContainerRef}>
              <ChartVis visType={visualizationType} config={config}>
                {!config.legend.hide && <Legend/>}
              </ChartVis>
            </div>
          </Component>
        }
      </>
    )

    content = isEditor ? (
      <EditorPanel>
        {body}
      </EditorPanel>
    ) : body
  }

  const contextValues = {
    config,
    rawData: stateData ?? {},
    excludedData: excludedData,
    transformedData: filteredData || excludedData,
    unfilteredData: stateData,
    seriesHighlight,
    colorScale,
    dimensions,
    currentViewport,
    parseDate,
    formatDate,
    formatNumber,
    loading,
    updateConfig,
    colorPalettes,
    isDashboard,
    setParentConfig,
    missingRequiredSections,
    setEditing,
    setFilteredData
  }

  const component = (
    <>
      <ErrorBoundary component="CdcChart">
        <ConfigContext.Provider value={contextValues}>
          {content}
        </ConfigContext.Provider>
      </ErrorBoundary>
    </>
  )

  return isWizard ?
    component : (
      <GlobalContextProvider>
        {component}
      </GlobalContextProvider>
    )
}

export default CdcChart
