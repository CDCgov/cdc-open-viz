import React, { Suspense, useState, useEffect, useCallback, lazy } from 'react'

// IE11 - Deprecate ASAP
import ResizeObserver from 'resize-observer-polyfill'
import 'whatwg-fetch'

// Third Party
import { scaleOrdinal } from '@visx/scale'
import ParentSize from '@visx/responsive/lib/components/ParentSize'

import { format } from 'd3-format'
import { timeParse, timeFormat } from 'd3-time-format'
import { Base64 } from 'js-base64'
import Papa from 'papaparse'
import parse from 'html-react-parser'
import produce from 'immer'

// Hooks
import { useVisConfig } from '@cdc/core/hooks/store/useVisConfig'

// Data
import { colorPalettesChart as colorPalettes, pairedBarPalettes } from '@cdc/core/data/colorPalettes'

// Components - Core
import MediaControls from '@cdc/core/components/ui/MediaControls'
import RenderFallback from '@cdc/core/components/loader/RenderFallback'

// Components - Local
import Legend from './Legend'
import DataTable from './DataTable'
import Filters from './Filters'

// Helpers
import CoveHelper from '@cdc/core/helpers/cove'

// Primary Components
const SparkLine = lazy(() => import ('./SparkLine'))
const ChartPie = lazy(() => import ('./Chart.Pie'))
const ChartLinear = lazy(() => import ('./Chart.Linear'))

// Visualization
const CdcChart = ({ hostname, link }) => {
  const { config, updateVisConfigField } = useVisConfig()

  const [ colorScale, setColorScale ] = useState(() =>
    scaleOrdinal({
      domain: config.runtime.seriesLabelsAll,
      range: config.customColors || colorPalettes[config.palette]
    })
  )
  const [ seriesHighlight, setSeriesHighlight ] = useState([])
  const [ dimensions, setDimensions ] = useState([])
  const [ container, setContainer ] = useState()
  const [ coveLoadedEventRan, setCoveLoadedEventRan ] = useState(false)
  const [ dynamicLegendItems, setDynamicLegendItems ] = useState([])
  const [ imageId ] = useState(`cove-${Math.random().toString(16).slice(-4)}`)

  const legendGlyphSize = 15
  const legendGlyphSizeHalf = legendGlyphSize / 2

  // Destructure items from config for more readable JSX
  const { legend, description, visualizationType } = config

  const handleChartTabbing = config.showSidebar ? `#legend` : config?.title ? `#dataTableSection__${config.title.replace(/\s/g, '')}` : `#dataTableSection`

  const handleChartAriaLabels = (state, testing = false) => {
    try {
      if (!state.visualizationType)
        throw Error('handleChartAriaLabels: no visualization type found in state')

      let ariaLabel = ''

      if (state.visualizationType) {
        ariaLabel += `${state.visualizationType} chart`
      }

      if (state.title && state.visualizationType) {
        ariaLabel += ` with the title: ${state.title}`
      }

      return ariaLabel
    } catch (e) {
      console.error(e.message)
    }
  }

  // Sorts data series for horizontal bar charts
  const sortData = useCallback(
    (a, b) => {
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
    }, [ config.sortData, config.visualizationSubType, config.visualizationType, config.xAxis.dataKey, config.yAxis.sortKey ])

  // Observes changes to outermost container and changes viewport size in state
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      let { width, height } = entry.contentRect
      setDimensions([ width, height ])
    }
  })

  const outerContainerRef = useCallback(node => {
    if (node !== null) resizeObserver.observe(node)
    setContainer(node)
  }, [])

  function isEmpty(obj) {
    return Object.keys(obj).length === 0
  }

  /**
   * When cove has a config and container ref publish the cove_loaded event.
   */
  useEffect(() => {
    if (container && !isEmpty(config) && !coveLoadedEventRan) {
      CoveHelper.Event.publish('cove_loaded', { config: config })
      setCoveLoadedEventRan(true)
    }
  }, [ container, config ])

  /**
   * Handles filter change events outside of COVE
   * Updates externalFilters state
   * Another useEffect listens to externalFilterChanges and updates the config.
   */
  useEffect(() => {
    const handleFilterData = e => {
      let tmp = []
      tmp.push(e.detail)
      updateVisConfigField('e', tmp)
    }

    CoveHelper.Event.subscribe('cove_filterData', e => handleFilterData(e))

    return () => {
      CoveHelper.Event.unsubscribe('cove_filterData', handleFilterData)
    }
  }, [ config, updateVisConfigField ])

  // Generates color palette to pass to child chart component
  useEffect(() => {
    if (config.data && config.xAxis && config.runtime.seriesKeys) {
      const configPalette = config.visualizationType === 'Paired Bar' ? config.pairedBar.palette : config.palette
      const allPalettes = { ...colorPalettes, ...pairedBarPalettes }
      let palette = config.customColors || allPalettes[configPalette]
      let numberOfKeys = config.runtime.seriesKeys.length
      let newColorScale

      while (numberOfKeys > palette.length) {
        palette = palette.concat(palette)
      }

      palette = palette.slice(0, numberOfKeys)

      newColorScale = () =>
        scaleOrdinal({
          domain: config.runtime.seriesLabelsAll,
          range: palette
        })

      setColorScale(newColorScale)
    }

    if (config && config.sortData) {
      updateVisConfigField('data', config.data.sort(sortData))
    }
  }, [ config.data, sortData, updateVisConfigField ])

  // Called on legend click, highlights/unhighlights the data series with the given label
  const highlight = label => {
    const newSeriesHighlight = []

    // If we're highlighting all the series, reset them
    if (seriesHighlight.length + 1 === config.runtime.seriesKeys.length && !config.legend.dynamicLegend) {
      highlightReset()
      return
    }

    seriesHighlight.forEach(value => {
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
    if (config.legend.dynamicLegend && dynamicLegendItems) {
      setSeriesHighlight(dynamicLegendItems.map(item => item.text))
    } else {
      setSeriesHighlight([])
    }
  }

  const section = config.orientation === 'horizontal' ? 'yAxis' : 'xAxis'

  const parseDate = dateString => {
    let date = timeParse(config.runtime[section].dateParseFormat)(dateString)
    if (!date) {
      updateVisConfigField([ 'runtime', 'editorErrorMessage' ], produce(config, draft => {
        draft.runtime.editorErrorMessage = `Error parsing date "${dateString}". Try reviewing your data and date parse settings in the X Axis section.`
      }))
      return new Date()
    } else {
      return date
    }
  }

  const formatDate = date => {
    return timeFormat(config.runtime[section].dateDisplayFormat)(date)
  }

  const DownloadButton = ({ data }, type = 'link') => {
    const fileName = `${config.title.substring(0, 50)}.csv`

    const csvData = Papa.unparse(data)

    const saveBlob = () => {
      if (typeof window.navigator.msSaveBlob === 'function') {
        const dataBlob = new Blob([ csvData ], { type: 'text/csv;charset=utf-8;' })
        window.navigator.msSaveBlob(dataBlob, fileName)
      }
    }

    if (type === 'download') {
      return (
        <a download={fileName} onClick={saveBlob} href={`data:text/csv;base64,${Base64.encode(csvData)}`} aria-label="Download this data in a CSV file format." className={`btn btn-download no-border`}>
          Download Data (CSV)
        </a>
      )
    } else {
      return (
        <a download={fileName} onClick={saveBlob} href={`data:text/csv;base64,${Base64.encode(csvData)}`} aria-label="Download this data in a CSV file format." className={`btn no-border`}>
          Download Data (CSV)
        </a>
      )
    }
  }

  // function calculates the width of given text and its font-size
  const getTextWidth = (text, font) => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    context.font = font || getComputedStyle(document.body).font

    return Math.ceil(context.measureText(text).width)
  }

  // Format numeric data based on settings in config
  const formatNumber = (num, axis) => {
    // if num is NaN return num
    if (isNaN(num) || !num) return num

    // destructure dataFormat values
    let {
      dataFormat: { commas, abbreviated, roundTo, prefix, suffix, rightRoundTo, rightPrefix, rightSuffix }
    } = config
    let formatSuffix = format('.2s')

    // check if value contains comma and remove it. later will add comma below.
    if (String(num).indexOf(',') !== -1) num = num.replaceAll(',', '')

    let original = num
    let stringFormattingOptions

    if (axis !== 'right') {
      stringFormattingOptions = {
        useGrouping: config.dataFormat.commas ? true : false,
        minimumFractionDigits: roundTo ? Number(roundTo) : 0,
        maximumFractionDigits: roundTo ? Number(roundTo) : 0
      }
    } else {
      stringFormattingOptions = {
        useGrouping: config.dataFormat.rightCommas ? true : false,
        minimumFractionDigits: rightRoundTo ? Number(rightRoundTo) : 0,
        maximumFractionDigits: rightRoundTo ? Number(rightRoundTo) : 0
      }
    }

    num = CoveHelper.String.convertStringToNumber(num)

    if (isNaN(num)) {
      config.runtime.editorErrorMessage = `Unable to parse number from data ${original}. Try reviewing your data and selections in the Data Series section.`
      return original
    }

    if (!config.dataFormat) return num
    if (config.dataCutoff) {
      let cutoff = CoveHelper.String.convertStringToNumber(config.dataCutoff)

      if (num < cutoff) {
        num = cutoff
      }
    }

    // When we're formatting the left axis
    // Use commas also updates bars and the data table
    // We can't use commas when we're formatting the dataFormatted number
    // Example: commas -> 12,000; abbreviated -> 12k (correct); abbreviated & commas -> 12 (incorrect)
    if ((axis === 'left' && commas && abbreviated) || (axis === 'bottom' && commas && abbreviated)) {
      num = num
    } else {
      num = num.toLocaleString('en-US', stringFormattingOptions)
    }
    let result = ''

    if (abbreviated && axis === 'left') {
      num = formatSuffix(parseFloat(num)).replace('G', 'B')
    }

    if (abbreviated && axis === 'bottom') {
      num = formatSuffix(parseFloat(num)).replace('G', 'B')
    }

    if (prefix && axis !== 'right') {
      result += prefix
    }

    if (rightPrefix && axis === 'right') {
      result += rightPrefix
    }

    result += num

    if (suffix && axis !== 'right') {
      result += suffix
    }

    if (rightSuffix && axis === 'right') {
      result += rightSuffix
    }

    return String(result)
  }

  // Select appropriate chart type
  const chartComponents = {
    'Paired Bar': ChartLinear,
    Bar: ChartLinear,
    Line: ChartLinear,
    Combo: ChartLinear,
    Pie: ChartPie,
    'Box Plot': ChartLinear,
    'Scatter Plot': ChartLinear
  }

  const missingRequiredSections = () => {
    if (config.visualizationType === 'Pie') {
      if (undefined === config?.yAxis.dataKey) {
        return true
      }
    } else {
      if (undefined === config?.series || false === config?.series.length > 0) {
        return true
      }
    }

    return !config.xAxis.dataKey
  }

  const getXAxisData = d => (config.runtime.xAxis.type === 'date' ? parseDate(d[config.runtime.originalXAxis.dataKey]).getTime() : d[config.runtime.originalXAxis.dataKey])
  const getYAxisData = (d, seriesKey) => d[seriesKey]

  const chartProps = {
    getXAxisData,
    getYAxisData,
    seriesHighlight,
    colorScale,
    dimensions,
    parseDate,
    formatDate,
    formatNumber,
    colorPalettes,
    missingRequiredSections,
    handleChartAriaLabels,
    highlight,
    highlightReset,
    legend,
    setSeriesHighlight,
    dynamicLegendItems,
    setDynamicLegendItems,
    imageId,
    getTextWidth
  }

  const chartClasses = () => {
    let classList = [ '' ]
    classList.push(`cove-chart--font-${config.fontSize}`)
    classList.push(`cove-chart--type-${config.visualizationType.toLowerCase()}`)
    if (config.visualizationType === 'Spark Line') classList.push(`cove-chart--sparkline`)

    return classList
  }

  const legendAppearance = () => {
    let display = {}

    if (config.legend.position) {
      display['legend-display'] = config.legend.position

      if (config.legend.hide)
        display['legend-display'] = 'hidden'
    }

    return display
  }

  const ChartComponent = chartComponents[visualizationType]

  return (
    <div className={'cove-chart' + (chartClasses().join(' '))}>
      <a className="cove-sr-only-focusable" href={handleChartTabbing}>
        Skip Over Chart Container
      </a>

      {/* Filters */}
      {config.filters && !config.externalFilters &&
        <Filters/>
      }

      {/* Intro Text */}
      {config?.introText &&
        <section className="cove-chart__intro-text">{parse(config.introText)}</section>
      }

      {!missingRequiredSections() && (
        <div className="cove-chart__container" {...legendAppearance()} data-lollipop={config.isLollipopChart} data-download-id={imageId} ref={outerContainerRef}>

          {/* All charts except sparkline */}
          {config.visualizationType !== 'Spark Line' &&
            <Suspense fallback={<RenderFallback/>}>
              {/* Visualization */}
              <div className="cove-chart__visualization">
                <ChartComponent {...chartProps} />
              </div>
              {/* Legend */}
              {!config.legend.hide &&
                <Legend {...chartProps} />
              }
            </Suspense>
          }

          {/* Sparkline */}
          {config.visualizationType === 'Spark Line' && (<>
            {description &&
              <div className="cove-chart__description">
                {parse(description)}
              </div>
            }
            <div className="cove-chart__sparkline">
              <ParentSize>
                {parent => (<>
                  <SparkLine width={parent.width} height={parent.height} {...chartProps} />
                </>)}
              </ParentSize>
            </div>
          </>)}

          {/* Link */}
          {link && link}

          {/* Buttons */}
          <MediaControls.Section className={[ 'download-buttons' ]}>
            {config.table.showDownloadImgButton &&
              <MediaControls.Button text="Download Image" title="Download Chart as Image" type="image" state={config} elementToCapture={imageId}/>
            }
            {config.table.showDownloadPdfButton &&
              <MediaControls.Button text="Download PDF" title="Download Chart as PDF" type="pdf" state={config} elementToCapture={imageId}/>
            }
          </MediaControls.Section>

        </div>
      )}

      {/* Description - Referenced here, but part of the global 'Component' styles */}
      {description && config.visualizationType !== 'Spark Line' &&
        <div className="cove-component__description">
          {parse(description)}
        </div>
      }

      {/* Data Table */}
      {config.xAxis.dataKey && config.table.show && config.visualizationType !== 'Spark Line' &&
        <DataTable {...chartProps}/>
      }

      {/* Footnotes - Referenced here, but part of the global 'Component' styles */}
      {config.footnotes &&
        <section className="cove-component__footnotes">
          {parse(config.footnotes)}
        </section>
      }
    </div>
  )
}

export default CdcChart
