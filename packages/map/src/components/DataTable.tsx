import React, { useEffect, useState, memo, useContext, useCallback, useMemo } from 'react'

import Papa from 'papaparse'
import ExternalIcon from '../images/external-link.svg' // TODO: Move to Icon component
import Icon from '@cdc/core/components/ui/Icon'
import { FixedSizeList as List } from 'react-window'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import LegendShape from '@cdc/core/components/LegendShape'
import MediaControls from '@cdc/core/components/MediaControls'
import SkipTo from '@cdc/core/components/elements/SkipTo'

import Loading from '@cdc/core/components/Loading'
import { navigationHandler } from '../helpers'
import ConfigContext, { MapDispatchContext } from '../context'

/* eslint-disable jsx-a11y/no-noninteractive-tabindex, jsx-a11y/no-static-element-interactions */
const DataTable = props => {
  const {
    state,
    tableTitle,
    indexTitle,
    mapTitle,
    rawData,
    runtimeData,
    headerColor,
    expandDataTable,
    columns,
    displayDataAsText,
    applyLegendToRow,
    displayGeoName,
    formatLegendLocation,
    tabbingId
  } = props

  const dispatch = useContext(MapDispatchContext)
  const { currentViewport: viewport } = useContext(ConfigContext)
  const [expanded, setExpanded] = useState(expandDataTable)
  const [sortBy, setSortBy] = useState({ column: 'geo', asc: false })
  const [accessibilityLabel, setAccessibilityLabel] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage] = useState(50) // Adjust as needed
  const fileName = `${mapTitle || 'data-table'}.csv`

  // New state for virtualization
  const [useVirtualization] = useState(true) // Set to true to enable virtualization
  const rowHeight = 44 // px, adjust as needed for your table row height
  const maxVisibleRows = 12 // Number of rows visible in viewport (for height calculation)

  // Memoize customSort for performance
  const customSort = useCallback((a, b) => {
    const digitRegex = /\d+/
    const hasNumber = value => digitRegex.test(value)
    a = a === null || a === undefined ? '' : a
    b = b === null || b === undefined ? '' : b
    const aNum = Number(a)
    if (!Number.isNaN(aNum)) a = aNum
    const bNum = Number(b)
    if (!Number.isNaN(bNum)) b = bNum
    if (typeof a === 'string') {
      a = a.replace('us-', '')
      a = displayGeoName(a)
    }
    if (typeof b === 'string') {
      b = b.replace('us-', '')
      b = displayGeoName(b)
    }
    a = typeof a === 'string' ? a.toLowerCase() : a
    b = typeof b === 'string' ? b.toLowerCase() : b
    if (typeof a === 'string' && hasNumber(a) === true) {
      a = a.match(digitRegex)[0]
      a = Number(a)
    }
    if (typeof b === 'string' && hasNumber(b) === true) {
      b = b.match(digitRegex)[0]
      b = Number(b)
    }
    if (typeof a === 'number' && typeof b === 'string') return 1
    if (typeof b === 'number' && typeof a === 'string') return -1
    if (a > b) return 1
    if (a < b) return -1
    return 0
  }, [displayGeoName])

  // Memoize getCellAnchor for performance
  const getCellAnchor = useCallback((markup, row) => {
    if (columns.navigate && row[columns.navigate.name]) {
      markup = (
        <span
          onClick={() => navigationHandler(state.general.navigationTarget, row[columns.navigate.name])}
          className='table-link'
          title='Click for more information (Opens in a new window)'
          role='link'
          tabIndex={0}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              navigationHandler(state.general.navigationTarget, row[columns.navigate.name])
            }
          }}
        >
          {markup}
          <ExternalIcon className='inline-icon' />
        </span>
      )
    }
    return markup
  }, [columns, navigationHandler, state.general.navigationTarget])

  const rand = Math.random().toString(16).substr(2, 8)
  const skipId = `btn__${rand}`

  const mapLookup = {
    'us-county': 'United States County Map',
    'single-state': 'State Map',
    us: 'United States Map',
    world: 'World Map'
  }

  const DownloadButton = memo(() => {
    let csvData
    if (state.general.type === 'bubble' || !state.table.showFullGeoNameInCSV) {
      // Just Unparse
      csvData = Papa.unparse(rawData)
    } else if (state.general.geoType !== 'us-county' || state.general.type === 'us-geocode') {
      // Unparse + Add column for full Geo name
      csvData = Papa.unparse(rawData.map(row => ({ FullGeoName: displayGeoName(row[state.columns.geo.name]), ...row })))
    } else {
      // Unparse + Add column for full Geo name
      csvData = Papa.unparse(
        rawData.map(row => ({ FullGeoName: formatLegendLocation(row[state.columns.geo.name]), ...row }))
      )
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
      <a
        download={fileName}
        type='button'
        onClick={saveBlob}
        href={URL.createObjectURL(blob)}
        aria-label='Download this data in a CSV file format.'
        className={`${headerColor} no-border`}
        id={`${skipId}`}
        data-html2canvas-ignore={true}
        role='button'
      >
        Download Data (CSV)
      </a>
    )
  }, [rawData, state.table])

  const TableMediaControls = ({ belowTable }) => {
    return (
      <MediaControls.Section classes={['download-links']}>
        <MediaControls.Link config={state} />
        {state.table.download && <DownloadButton />}
      </MediaControls.Section>
    )
  }

  // Change accessibility label depending on expanded status
  useEffect(() => {
    const expandedLabel = 'Accessible data table.'
    const collapsedLabel =
      'Accessible data table. This table is currently collapsed visually but can still be read using a screen reader.'

    if (expanded === true && accessibilityLabel !== expandedLabel) {
      setAccessibilityLabel(expandedLabel)
    }

    if (expanded === false && accessibilityLabel !== collapsedLabel) {
      setAccessibilityLabel(collapsedLabel)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded])

  // Reset to first page when data changes
  useEffect(() => {
    setCurrentPage(1)
  }, [rawData?.length])

  // Memoize sorted rows for performance
  const sortedRows = useMemo(() => {
    if (!runtimeData) return []
    return Object.keys(runtimeData)
      .filter(row => applyLegendToRow(runtimeData[row], state))
      .sort((a, b) => {
        const sortVal = customSort(
          runtimeData[a][state.columns[sortBy.column].name],
          runtimeData[b][state.columns[sortBy.column].name]
        )
        if (!sortBy.asc) return sortVal
        if (sortVal === 0) return 0
        if (sortVal < 0) return 1
        return -1
      })
  }, [runtimeData, state, sortBy, applyLegendToRow, customSort])

  // Virtualization threshold: enable virtualization for large datasets
  const VIRTUALIZATION_THRESHOLD = 200
  const isVirtualized = sortedRows.length > VIRTUALIZATION_THRESHOLD
  const ROW_HEIGHT = 48 // px, adjust as needed for your row height
  const TABLE_HEIGHT = Math.min(12, sortedRows.length) * ROW_HEIGHT // Show up to 12 rows at once

  // Memoize paginated rows for performance
  const paginatedRows = useMemo(() => {
    return sortedRows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
  }, [sortedRows, currentPage, rowsPerPage])

  const totalPages = useMemo(() => Math.ceil(sortedRows.length / rowsPerPage), [sortedRows, rowsPerPage])

  if (!state.data) return <Loading />

  // Memoized row component for performance
  const MemoTableRow = memo(({ rowKey }) => {
    return (
      <tr role='row'>
        {Object.keys(columns)
          .filter(column => columns[column].dataTable === true && columns[column].name)
          .map(column => {
            let cellValue
            if (column === 'geo') {
              const rowObj = runtimeData[rowKey]
              const legendColor = applyLegendToRow(rowObj, state)
              var labelValue
              if (state.general.geoType !== 'us-county' || state.general.type === 'us-geocode') {
                labelValue = displayGeoName(rowKey)
              } else {
                labelValue = formatLegendLocation(rowKey)
              }
              labelValue = getCellAnchor(labelValue, rowObj)
              cellValue = (
                <>
                  <LegendShape fill={legendColor[0]} />
                  {labelValue}
                </>
              )
            } else {
              cellValue = displayDataAsText(runtimeData[rowKey][state.columns[column].name], column, state)
            }
            return (
              <td
                tabIndex='0'
                role='gridcell'
                onClick={e =>
                  state.general.type === 'bubble' && state.general.allowMapZoom && state.general.geoType === 'world'
                    ? dispatch({ type: 'SET_FILTERED_COUNTRY_CODE', payload: rowKey })
                    : true
                }
                key={column}
              >
                {cellValue}
              </td>
            )
          })}
      </tr>
    )
  })

  // Virtualized row renderer for react-window
  const VirtualizedRow = memo(({ index, style, data }) => {
    const rowKey = data[index]
    return (
      <tr role='row' style={style}>
        {Object.keys(columns)
          .filter(column => columns[column].dataTable === true && columns[column].name)
          .map(column => {
            let cellValue
            if (column === 'geo') {
              const rowObj = runtimeData[rowKey]
              const legendColor = applyLegendToRow(rowObj, state)
              var labelValue
              if (state.general.geoType !== 'us-county' || state.general.type === 'us-geocode') {
                labelValue = displayGeoName(rowKey)
              } else {
                labelValue = formatLegendLocation(rowKey)
              }
              labelValue = getCellAnchor(labelValue, rowObj)
              cellValue = (
                <>
                  <LegendShape fill={legendColor[0]} />
                  {labelValue}
                </>
              )
            } else {
              cellValue = displayDataAsText(runtimeData[rowKey][state.columns[column].name], column, state)
            }
            return (
              <td
                tabIndex='0'
                role='gridcell'
                onClick={e =>
                  state.general.type === 'bubble' && state.general.allowMapZoom && state.general.geoType === 'world'
                    ? dispatch({ type: 'SET_FILTERED_COUNTRY_CODE', payload: rowKey })
                    : true
                }
                key={column}
              >
                {cellValue}
              </td>
            )
          })}
      </tr>
    )
  })

  return (
    <ErrorBoundary component='DataTable'>
      {!state.table.showDownloadLinkBelow && <TableMediaControls />}
      <section
        id={tabbingId.replace('#', '')}
        className={`data-table-container ${viewport}`}
        aria-label={accessibilityLabel}
      >
        <SkipTo skipId={skipId} skipMessage='Skip Data Table' />
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
        <div
          className='table-container'
          style={{ maxHeight: state.dataTable.limitHeight && `${state.dataTable.height}px`, overflowY: 'scroll' }}
        >
          <table
            height={expanded ? null : 0}
            role='table'
            aria-live='assertive'
            className={expanded ? 'data-table' : 'data-table cdcdataviz-sr-only'}
            hidden={!expanded}
            aria-rowcount={state?.data.length ? state.data.length : '-1'}
          >
            <caption className='cdcdataviz-sr-only'>
              {state.dataTable.caption
                ? state.dataTable.caption
                : `Datatable showing data for the ${mapLookup[state.general.geoType]} figure.`}
            </caption>
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
                        tabIndex={0}
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
                        className={
                          sortBy.column === column ? (sortBy.asc ? 'sort sort-asc' : 'sort sort-desc') : 'sort'
                        }
                        {...(sortBy.column === column
                          ? sortBy.asc
                            ? { 'aria-sort': 'ascending' }
                            : { 'aria-sort': 'descending' }
                          : null)}
                      >
                        {text}
                        <span className='cdcdataviz-sr-only'>{`Sort by ${text} in ${
                          sortBy.column === column ? (!sortBy.asc ? 'descending' : 'ascending') : 'descending'
                        } order`}</span>
                      </th>
                    )
                  })}
              </tr>
            </thead>
            <tbody>
              {isVirtualized ? (
                <List
                  height={TABLE_HEIGHT}
                  itemCount={sortedRows.length}
                  itemSize={ROW_HEIGHT}
                  width={'100%'}
                  itemData={sortedRows}
                  outerElementType={React.forwardRef((props, ref) => <tbody ref={ref} {...props} />)}
                  innerElementType={React.forwardRef((props, ref) => <React.Fragment ref={ref} {...props} />)}
                >
                  {VirtualizedRow}
                </List>
              ) : (
                paginatedRows.map(row => (
                  <MemoTableRow key={row} rowKey={row} />
                ))
              )}
            </tbody>
          </table>
          {/* Pagination controls */}
          {!isVirtualized && totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1rem 0' }}>
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                aria-label='Previous page'
                style={{ marginRight: '1rem' }}
              >
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                aria-label='Next page'
                style={{ marginLeft: '1rem' }}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
      {state.table.showDownloadLinkBelow && <TableMediaControls belowTable={true} />}
      <div id={skipId} className='cdcdataviz-sr-only'>
        Skipped data table.
      </div>
    </ErrorBoundary>
  )
}

export default DataTable
