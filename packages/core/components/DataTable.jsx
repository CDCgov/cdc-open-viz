import React, { useEffect, useState, memo, useMemo } from 'react'

import Papa from 'papaparse'
import ExternalIcon from '../assets/external-link.svg'
import Icon from '@cdc/core/components/ui/Icon'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import LegendCircle from '@cdc/core/components/LegendCircle'
import MediaControls from '@cdc/core/components/MediaControls'

import { parseDate, formatDate } from '@cdc/core/helpers/cove/date'
import { formatNumber } from '@cdc/core/helpers/cove/number'

import Loading from '@cdc/core/components/Loading'

/* eslint-disable jsx-a11y/no-noninteractive-tabindex, jsx-a11y/no-static-element-interactions */
const DataTable = props => {
  const { config, tableTitle, indexTitle, vizTitle, rawData, runtimeData, headerColor, expandDataTable, columns, displayDataAsText, applyLegendToRow, displayGeoName, navigationHandler, viewport, formatLegendLocation, tabbingId, isDebug } = props

  /* eslint-disable no-console */
  if (isDebug) {
    console.log('core/DataTable: props=', props)
    console.log('core/DataTable: runtimeData=', runtimeData)
    console.log('core/DataTable: rawData=', rawData)
    console.log('core/DataTable: config=', config)
  }
  /* eslint-enable no-console */

  const [expanded, setExpanded] = useState(expandDataTable)

  const [sortBy, setSortBy] = useState({ column: config.type === 'map' ? 'geo' : 'date', asc: false })

  const [accessibilityLabel, setAccessibilityLabel] = useState('')

  const fileName = `${vizTitle || 'data-table'}.csv`

  // Catch all sorting method used on load by default but also on user click
  // Having a custom method means we can add in any business logic we want going forward
  const customSort = (a, b) => {
    const digitRegex = /\d+/

    const hasNumber = value => digitRegex.test(value)

    // force null and undefined to the bottom
    a = a === null || a === undefined ? '' : a
    b = b === null || b === undefined ? '' : b

    // check for dates first
    if (!isNaN(Date.parse(a)) && !isNaN(Date.parse(b))) {
      return Date.parse(a) - Date.parse(b)
    }

    // convert any strings that are actually numbers to proper data type
    const aNum = Number(a)

    if (!Number.isNaN(aNum)) {
      a = aNum
    }

    const bNum = Number(b)

    if (!Number.isNaN(bNum)) {
      b = bNum
    }

    // remove iso code prefixes
    if (typeof a === 'string') {
      a = a.replace('us-', '')
      a = displayGeoName(a)
    }

    if (typeof b === 'string') {
      b = b.replace('us-', '')
      b = displayGeoName(b)
    }

    // force any string values to lowercase
    a = typeof a === 'string' ? a.toLowerCase() : a
    b = typeof b === 'string' ? b.toLowerCase() : b

    // If the string contains a number, remove the text from the value and only sort by the number. Only uses the first number it finds.
    if (typeof a === 'string' && hasNumber(a) === true) {
      a = a.match(digitRegex)[0]

      a = Number(a)
    }

    if (typeof b === 'string' && hasNumber(b) === true) {
      b = b.match(digitRegex)[0]

      b = Number(b)
    }

    // When comparing a number to a string, always send string to bottom
    if (typeof a === 'number' && typeof b === 'string') {
      return 1
    }

    if (typeof b === 'number' && typeof a === 'string') {
      return -1
    }

    // Return either 1 or -1 to indicate a sort priority
    if (a > b) {
      return 1
    }
    if (a < b) {
      return -1
    }
    // returning 0, undefined or any falsey value will use subsequent sorts or
    // the index as a tiebreaker
    return 0
  }

  // Optionally wrap cell with anchor if config defines a navigation url
  const getCellAnchor = (markup, row) => {
    if (columns.navigate && row[columns.navigate.name]) {
      markup = (
        <span
          onClick={() => navigationHandler(row[columns.navigate.name])}
          className='table-link'
          title='Click for more information (Opens in a new window)'
          role='link'
          tabIndex='0'
          onKeyDown={e => {
            if (e.keyCode === 13) {
              navigationHandler(row[columns.navigate.name])
            }
          }}
        >
          {markup}
          <ExternalIcon className='inline-icon' />
        </span>
      )
    }

    return markup
  }

  const rand = Math.random().toString(16).substr(2, 8)
  const skipId = `btn__${rand}`

  const mapLookup = {
    'us-county': 'United States County Map',
    'single-state': 'State Map',
    us: 'United States Map',
    world: 'World Map'
  }

  const DownloadButton = memo(() => {
    if (rawData !== undefined) {
      let csvData
      // only use fullGeoName on County maps and no other
      if (config.general.geoType === 'us-county') {
        // Unparse + Add column for full Geo name along with State
        csvData = Papa.unparse(rawData.map(row => ({ FullGeoName: formatLegendLocation(row[config.columns.geo.name]), ...row })))
      } else {
        // Just Unparse
        csvData = Papa.unparse(rawData)
      }

      const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' })

      const saveBlob = () => {
        //@ts-ignore
        if (typeof window.navigator.msSaveBlob === 'function') {
          //@ts-ignore
          navigator.msSaveBlob(blob, fileName)
        }
      }

      return (
        <a download={fileName} type='button' onClick={saveBlob} href={URL.createObjectURL(blob)} aria-label='Download this data in a CSV file format.' className={`${headerColor} no-border`} id={`${skipId}`} data-html2canvas-ignore role='button'>
          Download Data (CSV)
        </a>
      )
    } else {
      return <></>
    }
  }, [rawData])

  // Change accessibility label depending on expanded status
  useEffect(() => {
    const expandedLabel = 'Accessible data table.'
    const collapsedLabel = 'Accessible data table. This table is currently collapsed visually but can still be read using a screen reader.'

    if (expanded === true && accessibilityLabel !== expandedLabel) {
      setAccessibilityLabel(expandedLabel)
    }

    if (expanded === false && accessibilityLabel !== collapsedLabel) {
      setAccessibilityLabel(collapsedLabel)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded])

  switch (config.visualizationType) {
    case 'Box Plot':
      if (!config.boxplot) return <Loading />
      break
    case 'Line' || 'Bar' || 'Combo' || 'Pie' || 'Deviation Bar' || 'Paired Bar':
      if (!runtimeData) return <Loading />
      break
    default:
      if (!runtimeData) return <Loading />
      break
  }

  const rows = Object.keys(runtimeData).sort((a, b) => {
    let sortVal
    if (config.type === 'map' && config.columns) {
      sortVal = customSort(runtimeData[a][config.columns[sortBy.column].name], runtimeData[b][config.columns[sortBy.column].name])
    }
    if (config.type === 'chart') {
      sortVal = customSort(runtimeData[a][sortBy.column], runtimeData[b][sortBy.column])
    }
    if (!sortBy.asc) return sortVal
    if (sortVal === 0) return 0
    if (sortVal < 0) return 1
    return -1
  })

  const genMapRows = rows => {
    const allrows = rows.map(row => {
      return (
        <tr role='row'>
          {Object.keys(columns)
            .filter(column => columns[column].dataTable === true && columns[column].name)
            .map(column => {
              let cellValue

              if (column === 'geo') {
                const rowObj = runtimeData[row]
                const legendColor = applyLegendToRow(rowObj)

                var labelValue
                if ((config.general.geoType !== 'single-state' && config.general.geoType !== 'us-county') || config.general.type === 'us-geocode') {
                  labelValue = displayGeoName(row)
                } else {
                  labelValue = formatLegendLocation(row)
                }

                labelValue = getCellAnchor(labelValue, rowObj)
                cellValue = (
                  <>
                    <LegendCircle fill={legendColor[0]} />
                    {labelValue}
                  </>
                )
              } else {
                // check for special classes
                let specialValFound = ''
                if (config.legend.specialClasses && config.legend.specialClasses.length && typeof config.legend.specialClasses[0] === 'object') {
                  for (let i = 0; i < config.legend.specialClasses.length; i++) {
                    if (config.legend.specialClasses[i].key === config.columns[column].name) {
                      if (String(runtimeData[row][config.legend.specialClasses[i].key]) === config.legend.specialClasses[i].value) {
                        specialValFound = config.legend.specialClasses[i].label
                      }
                    }
                  }
                }
                cellValue = specialValFound ? displayDataAsText(specialValFound, column) : displayDataAsText(runtimeData[row][config.columns[column].name], column)
              }

              return (
                <td tabIndex='0' role='gridcell' onClick={e => (config.general.type === 'bubble' && config.general.allowMapZoom && config.general.geoType === 'world' ? setFilteredCountryCode(row) : true)}>
                  {cellValue}
                </td>
              )
            })}
        </tr>
      )
    })
    return allrows
  }

  const dataSeriesColumns = () => {
    let tmpSeriesColumns
    if (config.visualizationType !== 'Pie') {
      tmpSeriesColumns = [config.xAxis.dataKey] //, ...config.runtime.seriesLabelsAll
      config.series.forEach(element => {
        tmpSeriesColumns.push(element.dataKey)
      })
    } else {
      tmpSeriesColumns = [config.xAxis.dataKey, config.yAxis.dataKey] //Object.keys(runtimeData[0])
    }

    // then add the additional Columns
    if (Object.keys(config.columns).length > 0) {
      Object.keys(config.columns).forEach(function (key) {
        var value = config.columns[key]
        // add if not the index AND it is enabled to be added to data table
        if (value.name !== config.xAxis.dataKey && value.dataTable === true) {
          tmpSeriesColumns.push(value.name)
        }
      })
    }

    return tmpSeriesColumns
  }

  const getLabel = name => {
    let custLabel = ''
    if (Object.keys(config.columns).length > 0) {
      Object.keys(config.columns).forEach(function (key) {
        var tmpColumn = config.columns[key]
        // add if not the index AND it is enabled to be added to data table
        if (tmpColumn.name === name) {
          custLabel = tmpColumn.label
        }
      })
      return custLabel
    }
  }

  const genChartHeader = (columns, data) => {
    if (!data) return
    return (
      <tr>
        {dataSeriesColumns().map(column => {
          let custLabel = getLabel(column) ? getLabel(column) : column
          let text = column === config.xAxis.dataKey ? config.table.indexLabel : custLabel

          // If a user sets the name on a series use that.
          let userUpdatedSeriesName = config.series.filter(series => series.dataKey === column)?.[0]?.name
          if (userUpdatedSeriesName) text = userUpdatedSeriesName

          return (
            <th
              key={`col-header-${column}`}
              tabIndex='0'
              title={text}
              role='columnheader'
              scope='col'
              onClick={() => {
                setSortBy({ column, asc: sortBy.column === column ? !sortBy.asc : false })
              }}
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  setSortBy({ column, asc: sortBy.column === column ? !sortBy.asc : false })
                }
              }}
              className={sortBy.column === column ? (sortBy.asc ? 'sort sort-asc' : 'sort sort-desc') : 'sort'}
              {...(sortBy.column === column ? (sortBy.asc ? { 'aria-sort': 'ascending' } : { 'aria-sort': 'descending' }) : null)}
            >
              {text}
              {sortBy.column === column && <span className={'sort-icon'}>{!sortBy.asc ? upIcon : downIcon}</span>}
              <button>
                <span className='cdcdataviz-sr-only'>{`Sort by ${text} in ${sortBy.column === column ? (!sortBy.asc ? 'descending' : 'ascending') : 'descending'} `} order</span>
              </button>
            </th>
          )
        })}
      </tr>
    )
  }

  // if its additional column, return formatting params
  const isAdditionalColumn = column => {
    let inthere = false
    let formattingParams = {}
    Object.keys(config.columns).forEach(keycol => {
      if (config.columns[keycol].name === column) {
        inthere = true
        formattingParams = {
          addColPrefix: config.columns[keycol].prefix,
          addColSuffix: config.columns[keycol].suffix,
          addColRoundTo: config.columns[keycol].roundToPlace ? config.columns[keycol].roundToPlace : '',
          addColCommas: config.columns[keycol].commas
        }
      }
    })
    return formattingParams
  }

  const genChartRows = rows => {
    const allRows = rows.map(row => {
      return (
        <tr role='row'>
          {dataSeriesColumns().map(column => {
            const rowObj = runtimeData[row]
            let cellValue // placeholder for formatting below
            let labelValue = rowObj[column] // just raw X axis string
            if (column === config.xAxis.dataKey) {
              // not the prettiest, but helper functions work nicely here.
              cellValue = <>{config.xAxis.type === 'date' ? formatDate(config.xAxis.dateDisplayFormat, parseDate(config.xAxis.dateParseFormat, labelValue)) : labelValue}</>
            } else {
              let resolvedAxis = 'left'
              let leftAxisItems = config.series.filter(item => item?.axis === 'Left')
              let rightAxisItems = config.series.filter(item => item?.axis === 'Right')

              leftAxisItems.map(leftSeriesItem => {
                if (leftSeriesItem.dataKey === column) resolvedAxis = 'left'
              })

              rightAxisItems.map(rightSeriesItem => {
                if (rightSeriesItem.dataKey === column) resolvedAxis = 'right'
              })

              let addColParams = isAdditionalColumn(column)
              if (addColParams) {
                cellValue = formatNumber(runtimeData[row][column], resolvedAxis, false, config, addColParams)
              } else {
                cellValue = formatNumber(runtimeData[row][column], resolvedAxis, false, config)
              }
            }

            return (
              <td tabIndex='0' role='gridcell' id={`${runtimeData[config.runtime.originalXAxis.dataKey]}--${row}`}>
                {cellValue}
              </td>
            )
          })}
        </tr>
      )
    })
    return allRows
  }

  const upIcon = (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 5'>
      <path d='M0 5l5-5 5 5z' />
    </svg>
  )
  const downIcon = (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 5'>
      <path d='M0 0l5 5 5-5z' />
    </svg>
  )

  const limitHeight = {
    maxHeight: config.table.limitHeight && `${config.table.height}px`,
    overflowY: 'scroll'
  }

  const caption = useMemo(() => {
    if (config.type === 'map') {
      return config.table.caption ? config.table.caption : `Data table showing data for the ${mapLookup[config.general.geoType]} figure.`
    } else {
      return config.table.caption ? config.table.caption : `Data table showing data for the ${config.type} figure.`
    }
  }, [config.table.caption])

  // prettier-ignore
  const tableData = useMemo(() => (
    config.visualizationType === 'Pie'
      ? [config.yAxis.dataKey]
      : config.visualizationType === 'Box Plot'
        ? Object.entries(config.boxplot.tableData[0])
        : config.runtime.seriesKeys),
    [config.runtime.seriesKeys]) // eslint-disable-line

  if (config.visualizationType !== 'Box Plot') {
    const genMapHeader = columns => {
      return (
        <tr>
          {Object.keys(columns)
            .filter(column => columns[column].dataTable === true && columns[column].name)
            .map(column => {
              let text
              if (column !== 'geo') {
                text = columns[column].label ? columns[column].label : columns[column].name
              } else {
                text = config.type === 'map' ? indexTitle : config.xAxis.dataKey
              }
              if (config.type === 'map' && (text === undefined || text === '')) {
                text = 'Location'
              }

              return (
                <th
                  key={`col-header-${column}`}
                  id={column}
                  tabIndex='0'
                  title={text}
                  role='columnheader'
                  scope='col'
                  onClick={() => {
                    setSortBy({ column, asc: sortBy.column === column ? !sortBy.asc : false })
                  }}
                  onKeyDown={e => {
                    if (e.keyCode === 13) {
                      setSortBy({ column, asc: sortBy.column === column ? !sortBy.asc : false })
                    }
                  }}
                  className={sortBy.column === column ? (sortBy.asc ? 'sort sort-asc' : 'sort sort-desc') : 'sort'}
                  {...(sortBy.column === column ? (sortBy.asc ? { 'aria-sort': 'ascending' } : { 'aria-sort': 'descending' }) : null)}
                >
                  {text}
                  {sortBy.column === column && <span className={'sort-icon'}>{!sortBy.asc ? upIcon : downIcon}</span>}
                  <button>
                    <span className='cdcdataviz-sr-only'>{`Sort by ${text} in ${sortBy.column === column ? (!sortBy.asc ? 'descending' : 'ascending') : 'descending'} `} order</span>
                  </button>
                </th>
              )
            })}
        </tr>
      )
    }

    return (
      <ErrorBoundary component='DataTable'>
        <MediaControls.Section classes={['download-links']}>
          <MediaControls.Link config={config} />
          {(config.table.download || config.general.showDownloadButton) && <DownloadButton />}
        </MediaControls.Section>
        <section id={tabbingId.replace('#', '')} className={`data-table-container ${viewport}`} aria-label={accessibilityLabel}>
          <a id='skip-nav' className='cdcdataviz-sr-only-focusable' href={`#${skipId}`}>
            Skip Navigation or Skip to Content
          </a>
          <div
            className={expanded ? 'data-table-heading' : 'collapsed data-table-heading'}
            onClick={() => {
              setExpanded(!expanded)
            }}
            tabIndex='0'
            onKeyDown={e => {
              if (e.keyCode === 13) {
                setExpanded(!expanded)
              }
            }}
          >
            <Icon display={expanded ? 'minus' : 'plus'} base />
            {tableTitle}
          </div>
          <div className='table-container' style={limitHeight}>
            <table height={expanded ? null : 0} role='table' aria-live='assertive' className={expanded ? 'data-table' : 'data-table cdcdataviz-sr-only'} hidden={!expanded} aria-rowcount={config?.data?.length ? config.data.length : '-1'}>
              <caption className='cdcdataviz-sr-only'>{caption}</caption>
              <thead style={{ position: 'sticky', top: 0, zIndex: 999 }}>{config.type === 'map' ? genMapHeader(columns) : genChartHeader(columns, runtimeData)}</thead>
              <tbody>{config.type === 'map' ? genMapRows(rows) : genChartRows(rows)}</tbody>
            </table>

            {/* REGION Data Table */}
            {config.regions && config.regions.length > 0 && config.visualizationType !== 'Box Plot' ? (
              <table className='region-table data-table'>
                <caption className='visually-hidden'>Table of the highlighted regions in the visualization</caption>
                <thead>
                  <tr>
                    <th>Region Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                  </tr>
                </thead>
                <tbody>
                  {config.regions.map((region, index) => {
                    if (config.visualizationType === 'Box Plot') return false
                    if (!Object.keys(region).includes('from') || !Object.keys(region).includes('to')) return null
                    // region.from and region.to had formatDate(parseDate()) on it
                    // but they returned undefined - removed both for now (TT)
                    return (
                      <tr key={`row-${region.label}--${index}`}>
                        <td>{region.label}</td>
                        <td>{region.from}</td>
                        <td>{region.to}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            ) : (
              ''
            )}
          </div>
        </section>
      </ErrorBoundary>
    )
  } else {
    // Render Data Table for Box Plots
    const genBoxplotHeader = categories => {
      let columns = ['Measures', ...categories]
      return (
        <tr>
          {columns.map(column => {
            return (
              <th key={`col-header-${column}`} tabIndex='0' title={column} role='columnheader' scope='col'>
                {column}
              </th>
            )
          })}
        </tr>
      )
    }
    const resolveName = key => {
      let {
        boxplot: { labels }
      } = config
      const columnLookup = {
        columnMean: labels.mean,
        columnMax: labels.maximum,
        columnMin: labels.minimum,
        columnIqr: labels.iqr,
        columnCategory: 'Category',
        columnMedian: labels.median,
        columnFirstQuartile: labels.q1,
        columnThirdQuartile: labels.q3,
        columnOutliers: labels.outliers,
        values: labels.values,
        columnTotal: labels.total,
        columnSd: 'Standard Deviation',
        nonOutlierValues: 'Non Outliers',
        columnLowerBounds: labels.lowerBounds,
        columnUpperBounds: labels.upperBounds
      }

      let resolvedName = columnLookup[key]

      return resolvedName
    }
    let resolveCell = (rowid, plot) => {
      if (Number(rowid) === 0) return true
      if (Number(rowid) === 1) return plot.columnMax
      if (Number(rowid) === 2) return plot.columnThirdQuartile
      if (Number(rowid) === 3) return plot.columnMedian
      if (Number(rowid) === 4) return plot.columnFirstQuartile
      if (Number(rowid) === 5) return plot.columnMin
      if (Number(rowid) === 6) return plot.columnTotal
      if (Number(rowid) === 7) return plot.columnSd
      if (Number(rowid) === 8) return plot.columnMean
      if (Number(rowid) === 9) return plot.columnOutliers.length > 0 ? plot.columnOutliers.toString() : '-'
      if (Number(rowid) === 10) return plot.values.length > 0 ? plot.values.toString() : '-'
      return <p>-</p>
    }
    const genBoxplotRows = rows => {
      // get list of data keys for each row
      let dataKeys = rows.map(row => {
        return row[0]
      })
      let columns = ['Measures', ...config.boxplot.categories]
      const allrows = dataKeys.map((rowkey, index) => {
        if (index === 0) return '' // we did header column separately
        let rowClass = `row-Box-Plot--${index}`
        return (
          <tr role='row' key={`tbody__tr-${index}`} className={rowClass}>
            {columns.map((column, colnum) => {
              let cellValue
              if (column === 'Measures') {
                let labelValue = index > 0 ? resolveName(rowkey) : ''
                cellValue = <>{labelValue}</>
              } else {
                cellValue = resolveCell(index, config.boxplot.plots[colnum - 1])
              }
              return (
                <td tabIndex='0' key={`tbody__tr__td-${index}`} className='boxplot-td' role='gridcell'>
                  {cellValue}
                </td>
              )
            })}
          </tr>
        )
      })
      return allrows
    }
    return (
      <ErrorBoundary component='DataTable'>
        {/* cove media results in error so disabling for now (TT)
        <MediaControls.Section classes={['download-links']}>
          <MediaControls.Link config={config} />
          {config.general.showDownloadButton && <DownloadButton />}
        </MediaControls.Section>
        */}
        <section id={tabbingId.replace('#', '')} className={`data-table-container ${viewport}`} aria-label={accessibilityLabel}>
          <a id='skip-nav' className='cdcdataviz-sr-only-focusable' href={`#${skipId}`}>
            Skip Navigation or Skip to Content
          </a>
          <div
            className={expanded ? 'data-table-heading' : 'collapsed data-table-heading'}
            onClick={() => {
              setExpanded(!expanded)
            }}
            tabIndex='0'
            onKeyDown={e => {
              if (e.keyCode === 13) {
                setExpanded(!expanded)
              }
            }}
          >
            <Icon display={expanded ? 'minus' : 'plus'} base />
            {tableTitle}
          </div>
          <div className='table-container' style={limitHeight}>
            <table height={expanded ? null : 0} role='table' aria-live='assertive' className={expanded ? 'data-table' : 'data-table cdcdataviz-sr-only'} hidden={!expanded} aria-rowcount={'11'}>
              <caption className='cdcdataviz-sr-only'>{caption}</caption>
              <thead style={{ position: 'sticky', top: 0, zIndex: 999 }}>{genBoxplotHeader(config.boxplot.categories)}</thead>
              <tbody>{genBoxplotRows(tableData)}</tbody>
            </table>
          </div>
        </section>
      </ErrorBoundary>
    )
  }
}

export default DataTable
