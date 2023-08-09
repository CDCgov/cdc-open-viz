import React, { useContext, useEffect, useState, useMemo } from 'react'
import { useTable, useSortBy, useResizeColumns, useBlockLayout } from 'react-table'
import Papa from 'papaparse'
import { Base64 } from 'js-base64'
import { colorPalettesChart } from '@cdc/core/data/colorPalettes'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import LegendCircle from '@cdc/core/components/LegendCircle'
import Icon from '@cdc/core/components/ui/Icon'
import { DataTransform } from '@cdc/core/helpers/DataTransform'

import ConfigContext from '../ConfigContext'

import MediaControls from '@cdc/core/components/MediaControls'

export default function DataTable() {
  const { rawData, tableData: data, config, colorScale, parseDate, formatDate, formatNumber: numberFormatter, colorPalettes, currentViewport } = useContext(ConfigContext)

  const section = config.orientation === 'horizontal' ? 'yAxis' : 'xAxis'
  const [tableExpanded, setTableExpanded] = useState(config.table.expanded)
  const [accessibilityLabel, setAccessibilityLabel] = useState('')
  const isLegendBottom = ['sm', 'xs', 'xxs'].includes(currentViewport)
  const transform = new DataTransform()

  const DownloadButton = ({ data }, type) => {
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

    // - trying to eliminate console error that occurs if formatted with prettier
    // prettier-ignore
    switch (type) {
      case 'download':
        return (<a download={fileName} onClick={saveBlob} href={`data:text/csv;base64,${Base64.encode(csvData)}`} aria-label='Download this data in a CSV file format.' className={`btn btn-download no-border margin-sm`}>Download Data (CSV)</a>)
      default:
        return (<a download={fileName} onClick={saveBlob} href={`data:text/csv;base64,${Base64.encode(csvData)}`} aria-label='Download this data in a CSV file format.' className={`no-border`}>Download Data (CSV)</a>)
    }
  }

  // Creates columns structure for the table
  const tableColumns = useMemo(() => {
    const newTableColumns =
      config.visualizationType === 'Pie'
        ? []
        : config.visualizationType === 'Box Plot'
        ? [
            {
              Header: 'Measures',
              Cell: props => {
                const resolveName = () => {
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

                  let resolvedName = columnLookup[props.row.original[0]]

                  return resolvedName
                }

                return resolveName()
              }
            }
          ]
        : [
            {
              Header: ' ',
              Cell: ({ row }) => {
                const getSeriesLabel = () => {
                  let userUpdatedSeriesName = config.series.filter(series => series.dataKey === row.original)?.[0]?.name

                  if (userUpdatedSeriesName) return userUpdatedSeriesName
                  if (config.runtimeSeriesLabels) return config.runtime.seriesLabels[row.original]
                  return row.original
                }
                return (
                  <>
                    {config.visualizationType !== 'Pie' && (
                      <LegendCircle
                        fill={
                          // non-dynamic legend
                          !config.legend.dynamicLegend && config.visualizationType !== 'Forecasting'
                            ? colorScale(getSeriesLabel())
                            : config.legend.dynamicLegend
                            ? colorPalettes[config.palette][row.index]
                            : // fallback
                              '#000'
                        }
                      />
                    )}
                    <span>{getSeriesLabel()}</span>
                  </>
                )
              },
              id: 'series-label',
              sortType: 'custom',
              canSort: true
            }
          ]
    if (config.visualizationType !== 'Box Plot') {
      data.forEach((d, index) => {
        const resolveTableHeader = () => {
          if (config.runtime[section].type === 'date') return formatDate(parseDate(d[config.runtime.originalXAxis.dataKey]))
          if (config.runtime[section].type === 'continuous') return numberFormatter(d[config.runtime.originalXAxis.dataKey], 'bottom')
          return d[config.runtime.originalXAxis.dataKey]
        }
        const newCol = {
          Header: resolveTableHeader(),
          Cell: ({ row }) => {
            let leftAxisItems = config.series.filter(item => item?.axis === 'Left')
            let rightAxisItems = config.series.filter(item => item?.axis === 'Right')
            let resolvedAxis = ''

            leftAxisItems.map(leftSeriesItem => {
              if (leftSeriesItem.dataKey === row.original) resolvedAxis = 'left'
            })

            rightAxisItems.map(rightSeriesItem => {
              if (rightSeriesItem.dataKey === row.original) resolvedAxis = 'right'
            })

            if (config.visualizationType !== 'Combo') resolvedAxis = 'left'

            return <>{numberFormatter(d[row.original], resolvedAxis)}</>
          },
          id: `${d[config.runtime.originalXAxis.dataKey]}--${index}`,
          sortType: 'custom',
          canSort: true
        }

        newTableColumns.push(newCol)
      })
    }

    if (config.visualizationType === 'Box Plot') {
      config.boxplot.tableData.map((plot, index) => {
        const newCol = {
          Header: plot.columnCategory,
          Cell: props => {
            let resolveCell = () => {
              if (Number(props.row.id) === 0) return true
              if (Number(props.row.id) === 1) return plot.columnMax
              if (Number(props.row.id) === 2) return plot.columnThirdQuartile
              if (Number(props.row.id) === 3) return plot.columnMedian
              if (Number(props.row.id) === 4) return plot.columnFirstQuartile
              if (Number(props.row.id) === 5) return plot.columnMin
              if (Number(props.row.id) === 6) return plot.columnTotal
              if (Number(props.row.id) === 7) return plot.columnSd
              if (Number(props.row.id) === 8) return plot.columnMean
              if (Number(props.row.id) === 9) return plot.columnOutliers.length > 0 ? plot.columnOutliers.toString() : '-'
              if (Number(props.row.id) === 10) return plot.values.length > 0 ? plot.values.toString() : '-'
              return <p>-</p>
            }
            return resolveCell()
          },
          id: `${index}`,
          canSort: false
        }

        return newTableColumns.push(newCol)
      })
    }

    return newTableColumns
  }, [config, colorScale]) // eslint-disable-line

  // prettier-ignore
  const tableData = useMemo(() => (
    config.visualizationType === 'Pie'
      ? [config.yAxis.dataKey]
      : config.visualizationType === 'Box Plot'
        ? Object.entries(config.boxplot.tableData[0])
        : config.runtime.seriesKeys),
    [config.runtime.seriesKeys]) // eslint-disable-line

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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns: tableColumns,
      data: tableData,
      defaultColumn,
      disableSortRemove: true, // otherwise 3rd click on header removes sorting entirely
      sortTypes: {
        custom: (rowA, rowB, columnId) => {
          // rowA.original - is the row data field name to access the value
          // columnId = the column indicator
          let dataKey = config.xAxis.dataKey
          let colObj = config.data.filter(obj => {
            return obj[dataKey] === columnId.split('--')[0] // have to remove index
          })
          if (colObj === undefined || colObj[0] === undefined) {
            return -1
          }
          // NOW we can get the sort values
          const a = transform.cleanDataPoint(colObj[0][rowA.original]) // issue was that a was UNDEFINED therefore it CANT SORT
          const b = transform.cleanDataPoint(colObj[0][rowB.original])

          if (a === undefined) {
            return -1
          }
          if (!isNaN(Number(a)) && !isNaN(Number(b))) {
            return Number(a) - Number(b)
          }
          return a.localeCompare(b)
        }
      }
    },
    useSortBy,
    useBlockLayout,
    useResizeColumns
  )

  // sort continuous x axis scaling for data tables, ie. xAxis should read 1,2,3,4,5
  if (config.xAxis.type === 'continuous' && headerGroups) {
    data.sort((a, b) => a[config.xAxis.dataKey] - b[config.xAxis.dataKey])
  }

  return (
    <ErrorBoundary component='DataTable'>
      <MediaControls.Section classes={['download-links']}>
        <MediaControls.Link config={config} />
        {config.table.download && <DownloadButton data={rawData} type='link' />}
      </MediaControls.Section>

      <section style={{ marginTop: !isLegendBottom ? config.dynamicMarginTop + 'px' : '0px' }} id={config?.title ? `dataTableSection__${config?.title.replace(/\s/g, '')}` : `dataTableSection`} className={`data-table-container`} aria-label={accessibilityLabel}>
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
          <Icon display={tableExpanded ? 'minus' : 'plus'} base />
          {config.table.label}
        </div>
        <div className='table-container' hidden={!tableExpanded} style={{ maxHeight: config.table.limitHeight && `${config.table.height}px`, overflowY: 'scroll' }}>
          <table className={tableExpanded ? 'data-table' : 'data-table cdcdataviz-sr-only'} {...getTableProps()} aria-rowcount={config?.series?.length ? config?.series?.length : '-1'}>
            <caption className='cdcdataviz-sr-only visually-hidden'>{config.table.caption ? config.table.caption : config.table.label ? config.table.label : 'Data Table'}</caption>
            <thead>
              {headerGroups.map((headerGroup, index) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={`headerGroups--${index}`}>
                  {' '}
                  {headerGroup.headers.map((column, index) => (
                    <th
                      tabIndex='0'
                      title={column.Header}
                      key={`trth--${index}`}
                      role='columnheader'
                      scope='col'
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className={column.isSorted && column.isSortedDesc ? 'sort sort-desc' : 'sort sort-asc'}
                      {...(column.isSorted && column.isSortedDesc ? { 'aria-sort': 'descending' } : { 'aria-sort': 'ascending' })}
                    >
                      {column.render('Header')}
                      {column.isSorted && <span className={'sort-icon'}>{column.isSortedDesc ? downIcon : upIcon}</span>}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, index) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()} key={`tbody__tr-${index}`} className={`row-${String(config.visualizationType).replace(' ', '-')}--${index}`}>
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
