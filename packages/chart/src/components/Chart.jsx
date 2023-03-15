import React, { useState, useEffect, useCallback, useMemo } from 'react'

import Papa from 'papaparse'
import produce from 'immer'

// IE11
import ResizeObserver from 'resize-observer-polyfill'
import 'whatwg-fetch'

// External Libraries
import { scaleOrdinal } from '@visx/scale'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import { timeParse, timeFormat } from 'd3-time-format'
import { format } from 'd3-format'
import parse from 'html-react-parser'
import { Base64 } from 'js-base64'
import 'react-tooltip/dist/react-tooltip.css'

// Primary Components
import PieChart from './PieChart'
import LinearChart from './LinearChart'

import { colorPalettesChart as colorPalettes, pairedBarPalettes } from '@cdc/core/data/colorPalettes'

import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'

import SparkLine from './SparkLine'
import Legend from './Legend'
import DataTable from './DataTable'
import Filters from './Filters'
import MediaControls from '@cdc/core/components/ui/MediaControls'

// Helpers
import CoveHelper from '@cdc/core/helpers/cove'

import { useVisConfig } from '@cdc/core/hooks/store/useVisConfig'


export default function CdcChart({ hostname, link }) {
  const { config, updateVisConfig, updateVisConfigField } = useVisConfig()

  const [colorScale, setColorScale] = useState(() =>
    scaleOrdinal({
      domain: config.runtime.seriesLabelsAll,
      range: config.palette
    })
  )
  const [seriesHighlight, setSeriesHighlight] = useState([])
  const [currentViewport, setCurrentViewport] = useState('lg')
  const [dimensions, setDimensions] = useState([])
  const [container, setContainer] = useState()
  const [coveLoadedEventRan, setCoveLoadedEventRan] = useState(false)
  const [dynamicLegendItems, setDynamicLegendItems] = useState([])
  const [imageId] = useState(`cove-${Math.random().toString(16).slice(-4)}`)

  const legendGlyphSize = 15
  const legendGlyphSizeHalf = legendGlyphSize / 2

  // Destructure items from config for more readable JSX
  const { legend, title, description, visualizationType } = config
  const { barBorderClass, lineDatapointClass, contentClasses, innerContainerClasses, sparkLineStyles } = useDataVizClasses(config)

  const handleChartTabbing = config.showSidebar ? `#legend` : config?.title ? `#dataTableSection__${config.title.replace(/\s/g, '')}` : `#dataTableSection`

  const handleChartAriaLabels = (state, testing = false) => {
    try {
      if (!state.visualizationType) throw Error('handleChartAriaLabels: no visualization type found in state')
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
    },
    [config.sortData, config.visualizationSubType, config.visualizationType, config.xAxis.dataKey, config.yAxis.sortKey]
  )

  // Observes changes to outermost container and changes viewport size in state
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      let { width, height } = entry.contentRect
      let newViewport = CoveHelper.General.getViewport(width)
      let svgMarginWidth = 32

      setCurrentViewport(newViewport)

      if (entry.target.dataset.lollipop === 'true') {
        width = width - 2.5
      }

      width = width - svgMarginWidth

      setDimensions([width, height])
    }
  })

  const outerContainerRef = useCallback(node => {
    if (node !== null) {
      resizeObserver.observe(node)
    }

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
  }, [container, config])

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
  }, [config, updateVisConfigField])

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
  }, [sortData, updateVisConfigField])

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
      updateVisConfigField(['runtime', 'editorErrorMessage'], produce(config, draft => {
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
        const dataBlob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' })
        window.navigator.msSaveBlob(dataBlob, fileName)
      }
    }

    if (type === 'download') {
      return (
        <a download={fileName} onClick={saveBlob} href={`data:text/csv;base64,${Base64.encode(csvData)}`} aria-label='Download this data in a CSV file format.' className={`btn btn-download no-border`}>
          Download Data (CSV)
        </a>
      )
    } else {
      return (
        <a download={fileName} onClick={saveBlob} href={`data:text/csv;base64,${Base64.encode(csvData)}`} aria-label='Download this data in a CSV file format.' className={`btn no-border`}>
          Download Data (CSV)
        </a>
      )
    }
  }

  // function calculates the width of given text and its font-size
  function getTextWidth(text, font) {
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
    'Paired Bar': LinearChart,
    Bar: LinearChart,
    Line: LinearChart,
    Combo: LinearChart,
    Pie: PieChart,
    'Box Plot': LinearChart,
    'Scatter Plot': LinearChart
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
    currentViewport,
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

  const classes = ['cdc-open-viz-module', 'type-chart', `${currentViewport}`, `font-${config.fontSize}`, `${config.theme}`]

  config.visualizationType === 'Spark Line' && classes.push(`type-sparkline`)
  const ChartComponent = chartComponents[visualizationType]

  return (
    <div className={`${classes.join(' ')}`} ref={outerContainerRef} data-lollipop={config.isLollipopChart} data-download-id={imageId}>
      {!missingRequiredSections() && (
        <div className='cove-chart__container'>
          <div className="cove-chart__visualization">
            {/* Title */}
            <a id='skip-chart-container' className='cdcdataviz-sr-only-focusable' href={handleChartTabbing}>
              Skip Over Chart Container
            </a>
            {/* Filters */}
            {config.filters && !config.externalFilters && <Filters />}

            {/* Visualization */}
            {config?.introText && <section className='introText'>{parse(config.introText)}</section>}

            <div
              style={{ marginBottom: config.legend.position !== 'bottom' && config.orientation === 'horizontal' ? `${config.runtime.xAxis.size}px` : '0px' }}
              className={`chart-container  ${config.legend.position === 'bottom' ? 'bottom' : ''}${config.legend.hide ? ' legend-hidden' : ''}${lineDatapointClass}${barBorderClass} ${contentClasses.join(' ')}`}
            >
              {/* All charts except sparkline */}
              {config.visualizationType !== 'Spark Line' && <ChartComponent {...chartProps} />}

              {/* Sparkline */}
              {config.visualizationType === 'Spark Line' && (
                <>
                  {description && <div className='subtext'>{parse(description)}</div>}
                  <div style={sparkLineStyles}>
                    <ParentSize>
                      {parent => (
                        <>
                          <SparkLine width={parent.width} height={parent.height} {...chartProps} />
                        </>
                      )}
                    </ParentSize>
                  </div>
                </>
              )}
              {!config.legend.hide && config.visualizationType !== 'Spark Line' && <Legend {...chartProps} />}
            </div>
            {/* Link */}
            {link && link}
            {/* Description */}
            {description && config.visualizationType !== 'Spark Line' && <div className='subtext'>{parse(description)}</div>}

            {/* buttons */}
            <MediaControls.Section classes={['download-buttons']}>
              {config.table.showDownloadImgButton && <MediaControls.Button text='Download Image' title='Download Chart as Image' type='image' state={config} elementToCapture={imageId} />}
              {config.table.showDownloadPdfButton && <MediaControls.Button text='Download PDF' title='Download Chart as PDF' type='pdf' state={config} elementToCapture={imageId} />}
            </MediaControls.Section>

            {/* Data Table */}
            {config.xAxis.dataKey && config.table.show && config.visualizationType !== 'Spark Line' && <DataTable />}
            {config?.footnotes && <section className='footnotes'>{parse(config.footnotes)}</section>}
            {/* show pdf or image button */}
          </div>
        </div>
      )}
    </div>
  )
}
