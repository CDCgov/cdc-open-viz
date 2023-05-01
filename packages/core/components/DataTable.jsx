import React, { useEffect, useState, memo } from 'react'

import Papa from 'papaparse'
import ExternalIcon from '../assets/external-link.svg' // TODO: Move to Icon component
import Icon from '@cdc/core/components/ui/Icon'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import LegendCircle from '@cdc/core/components/LegendCircle'
import CoveMediaControls from '@cdc/core/components/CoveMediaControls'

import Loading from '@cdc/core/components/Loading'

/* eslint-disable jsx-a11y/no-noninteractive-tabindex, jsx-a11y/no-static-element-interactions */
const DataTable = props => {
  const { config, tableTitle, indexTitle, vizTitle, rawData, runtimeData, headerColor, expandDataTable, columns, displayDataAsText, applyLegendToRow, displayGeoName, navigationHandler, viewport, formatLegendLocation, tabbingId, setFilteredCountryCode } = props
  console.log('props=', props)
  console.log('runtimeData=', runtimeData)
  console.log('rawData=', rawData)
  console.log('config=', config)

  const [expanded, setExpanded] = useState(expandDataTable)

  const [sortBy, setSortBy] = useState({ column: config.type === 'map' ? 'geo' : 'date', asc: false })

  const [accessibilityLabel, setAccessibilityLabel] = useState('')

  const [mapRows, setMapRows] = useState('')

  const fileName = `${vizTitle || 'data-table'}.csv`

  // Catch all sorting method used on load by default but also on user click
  // Having a custom method means we can add in any business logic we want going forward
  const customSort = (a, b) => {
    const digitRegex = /\d+/

    const hasNumber = value => digitRegex.test(value)

    // force null and undefined to the bottom
    a = a === null || a === undefined ? '' : a
    b = b === null || b === undefined ? '' : b

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
    const csvData = Papa.unparse(rawData)

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

  if (!config.data) return <Loading />

  const rows = Object.keys(runtimeData)
    //.filter(row => applyLegendToRow(runtimeData[row]))
    .sort((a, b) => {
      console.log('config.columns', config.columns)
      const sortVal = customSort(runtimeData[a][config.columns[sortBy.column].name], runtimeData[b][config.columns[sortBy.column].name])
      console.log('sortval', sortVal)
      if (!sortBy.asc) return sortVal
      if (sortVal === 0) return 0
      if (sortVal < 0) return 1
      return -1
    })

  function genMapHeader(columns) {
    return (
      <tr>
        {/* console.log('###Object,columns', Object, columns) */}
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
                <button>
                  <span className='cdcdataviz-sr-only'>{`Sort by ${text} in ${sortBy.column === column ? (!sortBy.asc ? 'descending' : 'ascending') : 'descending'} `} order</span>
                </button>
              </th>
            )
          })}
      </tr>
    )
  }

  function genMapRows(rows) {
    //console.log('###rows=', rows)
    const allrows = rows.map(row => {
      {
        //console.log('row,columns', row, columns)
      }
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
                if (config.general.geoType !== 'us-county' || config.general.type === 'us-geocode') {
                  labelValue = displayGeoName(row)
                } else {
                  labelValue = formatLegendLocation(row)
                }

                labelValue = getCellAnchor(labelValue, rowObj)
                //console.log('####labelvalue=', labelValue)
                //console.log('####legendColor[0]=', legendColor[0])
                cellValue = (
                  <>
                    <LegendCircle fill={legendColor[0]} />
                    {labelValue}
                  </>
                )
              } else {
                cellValue = displayDataAsText(runtimeData[row][config.columns[column].name], column)
                //console.log('####cellvalue=', cellValue)
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
  function genChartHeader(columns, data) {
    let dataColumns = Object.keys(data[0]) // get from 1 row
    return (
      <tr>
        {console.log('###genChartHeader columns,keys', columns, Object.keys(data[0]))}
        {dataColumns
          //.filter(column => columns[column].dataTable === true && columns[column].name)
          .map(column => {
            let text = column === config.xAxis.dataKey ? config.table.indexLabel : column
            /*             if (column !== 'Date') {
              text = columns[column].label ? columns[column].label : columns[column].name
            } else {
              text = config.xAxis.dataKey
            }
            if (config.type === 'chart' && (text === undefined || text === '')) {
              text = 'Date'
            } */
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
                <button>
                  <span className='cdcdataviz-sr-only'>{`Sort by ${text} in ${sortBy.column === column ? (!sortBy.asc ? 'descending' : 'ascending') : 'descending'} `} order</span>
                </button>
              </th>
            )
          })}
      </tr>
    )
  }

  function genChartRows(rows) {
    console.log('###ChartRows=', rows)
    console.log('config.xAxis.dataKey=', config.xAxis.dataKey)
    let dataColumns = Object.keys(runtimeData[0]) // get from 1 row
    const allrows = rows.map(row => {
      {
        //console.log('row,columns', row, columns)
      }
      return (
        <tr role='row'>
          {dataColumns
            //.filter(column => columns[column].dataTable === true && columns[column].name)
            .map(column => {
              let cellValue
              console.log('###map row=', row)
              console.log('###map column=', column)
              if (column === config.xAxis.dataKey) {
                const rowObj = runtimeData[row]
                const legendColor = applyLegendToRow(rowObj)
                console.log('###map rowObj,legendColor', rowObj, legendColor)
                var labelValue = rowObj[column]
                /*                 if (config.general.geoType !== 'us-county' || config.general.type === 'us-geocode') {
                  labelValue = displayGeoName(row)
                } else {
                  labelValue = formatLegendLocation(row)
                } */

                labelValue = getCellAnchor(labelValue, rowObj)
                console.log('####labelvalue=', labelValue)
                console.log('####legendColor[0]=', legendColor[row])
                // no colors on row headers for charts bc it's Date not data
                // Remove this - <LegendCircle fill={legendColor[row]} />
                cellValue = <>{labelValue}</>
              } else {
                cellValue = displayDataAsText(runtimeData[row][column], column)
                //cellValue = displayDataAsText(runtimeData[row][config.columns[column].name], column)
                console.log('####cellvalue=', cellValue)
              }

              //MAP SPECIFIC- change to CHART specific
              // onClick = { e => (config.general.type === 'bubble' && config.general.allowMapZoom && config.general.geoType === 'world' ? setFilteredCountryCode(row) : true)}
              return (
                <td tabIndex='0' role='gridcell'>
                  {cellValue}
                </td>
              )
            })}
        </tr>
      )
    })
    return allrows
  }

  const limitHeight = config.type === 'chart' ? { maxHeight: config.table.limitHeight && `${config.table.height}px`, overflowY: 'scroll' } : { maxHeight: config.dataTable.limitHeight && `${config.dataTable.height}px`, overflowY: 'scroll' }
  const caption = () => {
    if (config.type === 'map') {
      return config.dataTable.caption ? config.dataTable.caption : `Data table showing data for the ${mapLookup[config.general.geoType]} figure.`
    } else {
      return config.table.label ? config.table.label : `Data table showing data for the ${config.type} figure.`
    }
  }
  return (
    <ErrorBoundary component='DataTable'>
      <CoveMediaControls.Section classes={['download-links']}>
        <CoveMediaControls.Link config={config} />
        {config.general.showDownloadButton && <DownloadButton />}
      </CoveMediaControls.Section>
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
          <table height={expanded ? null : 0} role='table' aria-live='assertive' className={expanded ? 'data-table' : 'data-table cdcdataviz-sr-only'} hidden={!expanded} aria-rowcount={config?.data.length ? config.data.length : '-1'}>
            <caption className='cdcdataviz-sr-only'>{caption}</caption>
            <thead style={{ position: 'sticky', top: 0, zIndex: 999 }}>{config.type === 'map' ? genMapHeader(columns) : genChartHeader(columns, runtimeData)}</thead>
            {/*             {console.log('#rows=', rows)}
            {console.log('#genMapRows(rows)=', genMapRows(rows))} */}
            <tbody>{config.type === 'map' ? genMapRows(rows) : genChartRows(rows)}</tbody>
          </table>
        </div>
      </section>
    </ErrorBoundary>
  )
}

export default DataTable
