import React, { useEffect, useState, memo } from 'react'
import Papa from 'papaparse'
import ExternalIcon from '../images/external-link.svg' // TODO: Move to Icon component
import Icon from '@cdc/core/components/ui/Icon'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import LegendCircle from '@cdc/core/components/LegendCircle'
import CoveMediaControls from '@cdc/core/components/CoveMediaControls'

import Loading from '@cdc/core/components/Loading'

/* eslint-disable jsx-a11y/no-noninteractive-tabindex, jsx-a11y/no-static-element-interactions */

const DataTable = props => {
  const { state, tableTitle, indexTitle, mapTitle, rawData, runtimeData, headerColor, expandDataTable, columns, displayDataAsText, applyLegendToRow, displayGeoName, navigationHandler, viewport, formatLegendLocation, tabbingId, setFilteredCountryCode } = props

  const [expanded, setExpanded] = useState(expandDataTable)
  const [sortBy, setSortBy] = useState({ column: 'geo', asc: false })

  const [accessibilityLabel, setAccessibilityLabel] = useState('')

  const fileName = `${mapTitle || 'data-table'}.csv`

  // Catch all sorting method used on load by default but also on user click
  // Having a custom method means we can add in any business logic we want going forward
  const customSort = (a, b) => {
    if (a < b) return -1
    if (b < a) return 1
    return 0
    /*const digitRegex = /\d+/

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
    return 0*/
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

  const mapLookup = {
    'us-county': 'United States County Map',
    'single-state': 'State Map',
    us: 'United States Map',
    world: 'World Map'
  }

  const rand = Math.random().toString(16).substr(2, 8)
  const skipId = `btn__${rand}`

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

  if (!state.data) return <Loading />

  const rows = Object.keys(runtimeData)
    .filter(row => applyLegendToRow(runtimeData[row]))
    .sort((a, b) => {
      const sortVal = customSort(runtimeData[a][state.columns[sortBy.column].name], runtimeData[b][state.columns[sortBy.column].name])
      if (!sortBy.asc) return sortVal
      if (sortVal === 0) return 0
      if (sortVal < 0) return 1
      return -1
    })

  return (
    <ErrorBoundary component='DataTable'>
      <CoveMediaControls.Section classes={['download-links']}>
        <CoveMediaControls.Link config={state} />
        {state.general.showDownloadButton && <DownloadButton />}
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
        <div className='table-container' style={{ maxHeight: state.dataTable.limitHeight && `${state.dataTable.height}px`, overflowY: 'scroll' }}>
          <table height={expanded ? null : 0} role='table' aria-live='assertive' className={expanded ? 'data-table' : 'data-table cdcdataviz-sr-only'} hidden={!expanded} aria-rowcount={state?.data.length ? state.data.length : '-1'}>
            <caption className='cdcdataviz-sr-only'>{state.dataTable.caption ? state.dataTable.caption : `Datatable showing data for the ${mapLookup[state.general.geoType]} figure.`}</caption>
            <thead style={{ position: 'sticky', top: 0, zIndex: 999 }}>
              <tr>
                {Object.keys(columns)
                  .filter(column => columns[column].dataTable === true && columns[column].name)
                  .map(column => {
                    let text
                    if (column !== 'geo') {
                      text = columns[column].label ? columns[column].label : columns[column].name
                    } else {
                      text = indexTitle || 'Location'
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
            </thead>
            <tbody>
              {rows.map(row => {
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
                          if (state.general.geoType !== 'us-county' || state.general.type === 'us-geocode') {
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
                          cellValue = displayDataAsText(runtimeData[row][state.columns[column].name], column)
                        }

                        return (
                          <td tabIndex='0' role='gridcell' onClick={e => (state.general.type === 'bubble' && state.general.allowMapZoom && state.general.geoType === 'world' ? setFilteredCountryCode(row) : true)}>
                            {cellValue}
                          </td>
                        )
                      })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    </ErrorBoundary>
  )
}

export default DataTable
