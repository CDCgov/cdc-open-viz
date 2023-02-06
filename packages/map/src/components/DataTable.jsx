import React, { useEffect, useState, useMemo, memo, useCallback } from 'react'
import { useTable, useSortBy, useResizeColumns, useBlockLayout } from 'react-table'
import Papa from 'papaparse'
import ExternalIcon from '../images/external-link.svg' // TODO: Move to Icon component

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import LegendCircle from '@cdc/core/components/LegendCircle'
import CoveMediaControls from '@cdc/core/components/CoveMediaControls'

import Loading from '@cdc/core/components/Loading'

const DataTable = props => {
  const {
    state,
    tableTitle,
    indexTitle,
    mapTitle,
    rawData,
    showDownloadImgButton,
    showDownloadPdfButton,
    showDownloadButton,
    runtimeData,
    runtimeLegend,
    headerColor,
    expandDataTable,
    columns,
    displayDataAsText,
    applyLegendToRow,
    displayGeoName,
    navigationHandler,
    viewport,
    formatLegendLocation,
    tabbingId,
    setFilteredCountryCode,
    innerContainerRef,
    imageRef
  } = props

  const [expanded, setExpanded] = useState(expandDataTable)

  const [accessibilityLabel, setAccessibilityLabel] = useState('')

  const [ready, setReady] = useState(false)

  const fileName = `${mapTitle || 'data-table'}.csv`

  // Catch all sorting method used on load by default but also on user click
  // Having a custom method means we can add in any business logic we want going forward
  const customSort = useCallback(
    (a, b) => {
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
    },
    [displayGeoName]
  )

  // Optionally wrap cell with anchor if config defines a navigation url
  const getCellAnchor = useCallback(
    (markup, row) => {
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
    },
    [columns.navigate, navigationHandler]
  )

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

  // Creates columns structure for the table
  const tableColumns = useMemo(() => {
    const newTableColumns = []

    Object.keys(columns).forEach(column => {
      if (columns[column].dataTable === true && columns[column].name) {
        const newCol = {
          Header: columns[column].label ? columns[column].label : columns[column].name,
          id: column,
          accessor: row => {
            if (runtimeData) {
              if (state.legend.specialClasses && state.legend.specialClasses.length && typeof state.legend.specialClasses[0] === 'object') {
                for (let i = 0; i < state.legend.specialClasses.length; i++) {
                  if (String(runtimeData[row][state.legend.specialClasses[i].key]) === state.legend.specialClasses[i].value) {
                    return state.legend.specialClasses[i].label
                  }
                }
              }
              return runtimeData[row][columns[column].name] ?? null
            }

            return null
          },
          sortType: (a, b) => customSort(a.values[column], b.values[column])
        }

        if (column === 'geo') {
          newCol.Header = indexTitle || 'Location'
          newCol.Cell = ({ row, value }) => {
            const rowObj = runtimeData[row.original]

            const legendColor = applyLegendToRow(rowObj)

            if (state.general.geoType !== 'us-county' || state.general.type === 'us-geocode') {
              var labelValue = displayGeoName(row.original)
            } else {
              var labelValue = formatLegendLocation(row.original)
            }

            labelValue = getCellAnchor(labelValue, rowObj)

            const cellMarkup = (
              <>
                <LegendCircle fill={legendColor[0]} />
                {labelValue}
              </>
            )

            return cellMarkup
          }
        } else {
          newCol.Cell = ({ value }) => {
            const cellMarkup = displayDataAsText(value, column)

            return cellMarkup
          }
        }

        newTableColumns.push(newCol)
      }
    })

    return newTableColumns
  }, [indexTitle, columns, runtimeData, getCellAnchor, displayDataAsText, applyLegendToRow, customSort, displayGeoName, state.legend.specialClasses])

  const tableData = useMemo(
    () =>
      Object.keys(runtimeData)
        .filter(key => applyLegendToRow(runtimeData[key]))
        .sort((a, b) => customSort(a, b)),
    [runtimeData, applyLegendToRow, customSort]
  )

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
  }, [expanded, applyLegendToRow, customSort])

  const defaultColumn = useMemo(
    () => ({
      minWidth: 150,
      width: 200,
      maxWidth: 400
    }),
    []
  )

  const mapLookup = {
    'us-county': 'United States County Map',
    'single-state': 'State Map',
    us: 'United States Map',
    world: 'World Map'
  }

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns: tableColumns, data: tableData, defaultColumn }, useSortBy, useBlockLayout, useResizeColumns)

  const rand = Math.random().toString(16).substr(2, 8)
  const skipId = `btn__${rand}`

  if (!state.data) return <Loading />
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
          {tableTitle}
        </div>
        <div className='table-container' style={{ maxHeight: state.dataTable.limitHeight && `${state.dataTable.height}px`, overflowY: 'scroll' }}>
          <table height={expanded ? null : 0} {...getTableProps()} aria-live='assertive' className={expanded ? 'data-table' : 'data-table cdcdataviz-sr-only'} hidden={!expanded} aria-rowcount={state?.data.length ? state.data.length : '-1'}>
            <caption className='cdcdataviz-sr-only'>{state.dataTable.caption ? state.dataTable.caption : `Datatable showing data for the ${mapLookup[state.general.geoType]} figure.`}</caption>
            <thead style={{ position: 'sticky', top: 0, zIndex: 999 }}>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th
                      tabIndex='0'
                      title={column.Header}
                      role='columnheader'
                      scope='col'
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className={column.isSorted ? (column.isSortedDesc ? 'sort sort-desc' : 'sort sort-asc') : 'sort'}
                      onKeyDown={e => {
                        if (e.keyCode === 13) {
                          column.toggleSortBy()
                        }
                      }}
                      //aria-sort={column.isSorted ? column.isSortedDesc ? 'descending' : 'ascending' : 'none' }
                      {...(column.isSorted ? (column.isSortedDesc ? { 'aria-sort': 'descending' } : { 'aria-sort': 'ascending' }) : null)}
                    >
                      {column.render('Header')}
                      <button>
                        <span className='cdcdataviz-sr-only'>{`Sort by ${column.render('Header').toLowerCase()} in ${column.isSorted ? (column.isSortedDesc ? 'descending' : 'ascending') : 'no'} `} order</span>
                      </button>
                      <div {...column.getResizerProps()} className='resizer' />
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()} role='row'>
                    {row.cells.map(cell => {
                      return (
                        <td tabIndex='0' {...cell.getCellProps()} role='gridcell' onClick={e => (state.general.type === 'bubble' && state.general.allowMapZoom && state.general.geoType === 'world' ? setFilteredCountryCode(cell.row.original) : true)}>
                          {cell.render('Cell')}
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
