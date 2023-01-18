import React, { useContext, useEffect, useState, useMemo, memo, Fragment } from 'react'
import { useTable, useSortBy, useResizeColumns, useBlockLayout } from 'react-table'
import Papa from 'papaparse'
import { Base64 } from 'js-base64'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import LegendCircle from '@cdc/core/components/LegendCircle'

import Context from '../context'

import CoveMediaControls from '@cdc/core/helpers/CoveMediaControls'

const mockData = [
  {
    group: 'a',
    min: 1,
    max: 2,
    q3: 'q3',
    q1: 'q1',
    title: 'this is a title'
  },
  {
    group: 'b',
    min: 1,
    max: 2,
    q3: 'q3',
    q1: 'q1',
    title: 'this is a title'
  },
  {
    group: 'c',
    min: 1,
    max: 2,
    q3: 'q3',
    q1: 'q1',
    title: 'this is a title'
  },
  {
    group: 'd',
    min: 1,
    max: 2,
    q3: 'q3',
    q1: 'q1',
    title: 'this is a title'
  }
]

export default function DataTable() {
  const { rawData, transformedData: data, config, colorScale, parseDate, formatDate, formatNumber: numberFormatter, colorPalettes, imageId } = useContext<any>(Context)

  // Debugging.
  // if (config.visualizationType === 'Box Plot') return null

  const section = config.orientation === 'horizontal' ? 'yAxis' : 'xAxis'
  const [tableExpanded, setTableExpanded] = useState<boolean>(config.table.expanded)
  const [accessibilityLabel, setAccessibilityLabel] = useState('')

  const DownloadButton = ({ data }: any, type) => {
    const fileName = `${config.title.substring(0, 50)}.csv`

    const csvData = Papa.unparse(data)

    const saveBlob = () => {
      //@ts-ignore
      if (typeof window.navigator.msSaveBlob === 'function') {
        const dataBlob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' })
        //@ts-ignore
        window.navigator.msSaveBlob(dataBlob, fileName)
      }
    }

    switch (type) {
      case 'download':
        return (
          <a download={fileName} onClick={saveBlob} href={`data:text/csv;base64,${Base64.encode(csvData)}`} aria-label='Download this data in a CSV file format.' className={`btn btn-download no-border`}>
            Download Data (CSV)
          </a>
        )
      default:
        return (
          <a download={fileName} onClick={saveBlob} href={`data:text/csv;base64,${Base64.encode(csvData)}`} aria-label='Download this data in a CSV file format.' className={`no-border`}>
            Download Data (CSV)
          </a>
        )
    }
  }

  // Creates columns structure for the table
  const tableColumns = useMemo(() => {
    const resolveTableHeaders = () => {}
    const newTableColumns =
      config.visualizationType === 'Pie'
        ? []
        : config.visualizationType === 'Box Plot'
        ? [
            {
              Header: 'Measures',
              Cell: props => {
                let resolveMeasures = () => {
                  console.log('Measures Row: ', props)
                  if (Number(props.row.id) === 0) return <p>{props.row.original}</p>
                  return <p>-</p>
                }
                return resolveMeasures()
              }
            }
          ]
        : [
            {
              Header: '',
              Cell: ({ row }) => {
                const seriesLabel = config.runtime.seriesLabels ? config.runtime.seriesLabels[row.original] : row.original
                return (
                  <Fragment>
                    {config.visualizationType !== 'Pie' && (
                      <LegendCircle
                        fill={
                          // non dynamic leged
                          !config.legend.dynamicLegend
                            ? colorScale(seriesLabel)
                            : // dynamic legend
                            config.legend.dynamicLegend
                            ? colorPalettes[config.palette][row.index]
                            : // fallback
                              '#000'
                        }
                      />
                    )}
                    <span>{seriesLabel}</span>
                  </Fragment>
                )
              },
              id: 'series-label'
            }
          ]
    if (config.visualizationType !== 'Box Plot') {
      data.forEach((d, index) => {
        const resolveTableHeader = () => {
          if (config.runtime[section].type === 'date') return formatDate(parseDate(d[config.runtime.originalXAxis.dataKey]))
          return d[config.runtime.originalXAxis.dataKey]
        }
        const newCol = {
          Header: resolveTableHeader(),
          Cell: ({ row }) => {
            return <>{numberFormatter(d[row.original])}</>
          },
          id: `${d[config.runtime.originalXAxis.dataKey]}--${index}`,
          canSort: true
        }

        newTableColumns.push(newCol)
      })
    }

    if (config.visualizationType === 'Box Plot') {
      mockData.map((plot, index) => {
        const newCol = {
          Header: plot.group,
          Cell: props => {
            let resolveCell = () => {
              // console.log('props', props)
              // if (Number(props.row.id) === 0) return props.rows[index].original.columnMax
              // if (Number(props.row.id) === 1) return props.rows[index].original.columnThirdQuartile
              // if (Number(props.row.id) === 2) return props.rows[index].original.columnMedian
              // if (Number(props.row.id) === 3) return props.rows[index].original.columnFirstQuartile
              // if (Number(props.row.id) === 4) return props.rows[index].original.columnFirstQuartile
              return <p>-</p>
            }
            console.log('p', props.row)
            return <p>Group Row</p>
          },
          id: `${index}`,
          canSort: true
        }

        newTableColumns.push(newCol)
      })
    }

    return newTableColumns
  }, [config, colorScale])

  // prettier-ignore
  const tableData = useMemo(() => (
    config.visualizationType === 'Pie'
    ? [config.yAxis.dataKey]
    : config.visualizationType === 'Box Plot'
    ? Object.entries(config.boxplot.plots[0])
    : config.runtime.seriesKeys),
    [config.runtime.seriesKeys])

  // Change accessibility label depending on expanded status
  useEffect(() => {
    const expandedLabel = 'Accessible data table.'
    const collapsedLabel = 'Accessible data table. This table is currently collapsed visually but can still be read using a screen reader.'

    if (tableExpanded === true && accessibilityLabel !== expandedLabel) {
      setAccessibilityLabel(expandedLabel)
    }

    if (tableExpanded === false && accessibilityLabel !== collapsedLabel) {
      setAccessibilityLabel(collapsedLabel)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tableExpanded])

  const defaultColumn = useMemo(
    () => ({
      minWidth: 150,
      width: 200,
      maxWidth: 400
    }),
    []
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns: tableColumns, data: tableData, defaultColumn }, useSortBy, useBlockLayout, useResizeColumns)
  return (
    <ErrorBoundary component='DataTable'>
      <CoveMediaControls.Section classes={['download-links']}>
        <CoveMediaControls.Link config={config} />
        {config.table.download && <DownloadButton data={rawData} type='link' />}
      </CoveMediaControls.Section>

      <section id={config?.title ? `dataTableSection__${config?.title.replace(/\s/g, '')}` : `dataTableSection`} className={`data-table-container`} aria-label={accessibilityLabel}>
        <div
          role='button'
          className={tableExpanded ? 'data-table-heading' : 'collapsed data-table-heading'}
          tabIndex={0}
          onClick={() => {
            setTableExpanded(!tableExpanded)
          }}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              setTableExpanded(!tableExpanded)
            }
          }}
        >
          {config.table.label}
        </div>
        <div className='table-container' hidden={!tableExpanded} style={{ maxHeight: config.table.limitHeight && `${config.table.height}px`, overflowY: 'scroll' }}>
          <table className={tableExpanded ? 'data-table' : 'data-table cdcdataviz-sr-only'} {...getTableProps()} aria-rowcount={config?.series?.length ? config?.series?.length : '-1'}>
            <caption className='cdcdataviz-sr-only'>{config.table.caption ? config.table.caption : ''}</caption>
            <caption className='visually-hidden'>{config.table.label}</caption>
            <thead>
              {headerGroups.map((headerGroup, index) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={`headerGroups--${index}`}>
                  {headerGroup.headers.map((column, index) => (
                    <th
                      tabIndex='0'
                      title={column.Header}
                      key={`trth--${index}`}
                      role='columnheader'
                      scope='col'
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className={column.isSorted ? (column.isSortedDesc ? 'sort sort-desc' : 'sort sort-asc') : 'sort'}
                      {...(column.isSorted ? (column.isSortedDesc ? { 'aria-sort': 'descending' } : { 'aria-sort': 'ascending' }) : null)}
                    >
                      {index === 0 ? (config.table.indexLabel ? config.table.indexLabel : column.render('Header')) : column.render('Header')}
                      <button>
                        <span className='cdcdataviz-sr-only'>{`Sort by ${typeof column.render('Header') === 'string' ? column.render('Header').toLowerCase() : column.render('Header')} in ${column.isSorted ? (column.isSortedDesc ? 'descending' : 'ascending') : 'no'} `} order</span>
                      </button>
                      <div {...column.getResizerProps()} className='resizer' />
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, index) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()} key={`tbody__tr-${index}`}>
                    {row.cells.map((cell, index) => {
                      return (
                        <td tabIndex='0' {...cell.getCellProps()} key={`tbody__tr__td-${index}`} role='gridcell'>
                          {cell.render('Cell')}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
          {config.regions && config.regions.length > 0 ? (
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
                  if (!Object.keys(region).includes('from') || !Object.keys(region).includes('to')) return null

                  return (
                    <tr key={`row-${region.label}--${index}`}>
                      <td>{region.label}</td>
                      <td>{formatDate(parseDate(region.from))}</td>
                      <td>{formatDate(parseDate(region.to))}</td>
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
}
