import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import React, { useState, useContext } from 'react'
import ConfigContext from '../ConfigContext'
import Icon from '@cdc/core/components/ui/Icon'
import Loading from '@cdc/core/components/Loading'
import Papa from 'papaparse'
import MediaControls from '@cdc/core/components/MediaControls'

function DataTableVertical({ tabbingId }) {
  const [selectedHeader, setSelectedHeader] = useState(null)
  const [sortOrder, setSortOrder] = useState(null)
  const [expanded, setExpanded] = useState(false)
  const { tableData, rawData, currentViewport, config, formatDate, parseDate, formatNumber } = useContext(ConfigContext)
  const { table, xAxis, runtime, visualizationType, regions } = config
  const additionalColumns = Object.values(config?.columns || {}).filter(column => column?.dataTable)
  const additionalKeys = additionalColumns.map(column => column?.name)
  const currentKeys = [xAxis.dataKey, ...config?.runtime.seriesKeys, ...additionalKeys]

  // filter tableData by seriesKeys && additionalColumnKeys && xAxis dataKey
  const data = tableData.map(d => currentKeys.reduce((acc, key) => (d[key] !== undefined ? { ...acc, [key]: d[key] } : acc), {}))
  const headers = Object.keys(data[0])

  // functions & handlers
  const toggleExpanded = () => setExpanded(prev => !prev)
  const handleKeyDown = e => e.keyCode === 13 && toggleExpanded()

  const handleHeaderChange = header => {
    if (header === selectedHeader) {
      setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'))
    } else {
      setSelectedHeader(header)
      setSortOrder('asc')
    }
  }
  const formatCell = (value, header) => {
    const shouldAbbreviate = true
    if (xAxis.type === 'date' && header === xAxis.dataKey) return formatDate(parseDate(value))
    const columnMatch = additionalColumns.find(c => c.name === header)
    if (columnMatch) return formatNumber(value, 'left', shouldAbbreviate, columnMatch.prefix, columnMatch.suffix, columnMatch.roundToPlace)
    return formatNumber(value, 'left', shouldAbbreviate)
  }

  const updateHeaderText = header => {
    const addedHeader = {}
    additionalColumns.forEach(c => (header === c.name ? (addedHeader[header] = c.label || header) : null))
    const seriesLabels = { ...runtime?.seriesLabels, ...addedHeader }
    return header === xAxis.dataKey ? table.indexLabel : seriesLabels[header]
  }

  const customSort = (a, b) => {
    let valueA = a[selectedHeader]
    let valueB = b[selectedHeader]

    // Treat booleans and nulls as an empty string
    valueA = valueA === false || valueA === true || valueA === null ? '' : valueA
    valueB = valueB === false || valueB == true || valueB === null ? '' : valueB

    const trimmedA = String(valueA).trim()
    const trimmedB = String(valueB).trim()

    // Check if it's a valid date format
    const dateRegex = /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12][0-9]|3[01])\/\d{4}$/

    const isDateA = dateRegex.test(trimmedA)
    const isDateB = dateRegex.test(trimmedB)

    if (isDateA && isDateB) {
      const dateObjectA = new Date(trimmedA)
      const dateObjectB = new Date(trimmedB)
      return sortOrder === 'asc' ? dateObjectA - dateObjectB : dateObjectB - dateObjectA
    }
    // Check if values are numbers
    const isNumA = !isNaN(Number(valueA)) && valueA !== undefined && valueA !== null && trimmedA !== ''
    const isNumB = !isNaN(Number(valueB)) && valueB !== undefined && valueB !== null && trimmedB !== ''

    // Handle empty strings or spaces
    if (trimmedA === '' && trimmedB !== '') return sortOrder === 'asc' ? -1 : 1
    if (trimmedA !== '' && trimmedB === '') return sortOrder === 'asc' ? 1 : -1

    // Both are numbers: Compare numerically
    if (isNumA && isNumB) {
      return sortOrder === 'asc' ? Number(valueA) - Number(valueB) : Number(valueB) - Number(valueA)
    }

    // Only A is a number
    if (isNumA) {
      return sortOrder === 'asc' ? -1 : 1
    }

    // Only B is a number
    if (isNumB) {
      return sortOrder === 'asc' ? 1 : -1
    }

    // Neither are numbers: Compare as strings
    return sortOrder === 'asc' ? trimmedA.localeCompare(trimmedB) : trimmedB.localeCompare(trimmedA)
  }

  if (!data || !data.length) {
    return <Loading />
  }
  const ariaLabel = ['Accessible data table. This table is currently collapsed visually but can still be read using a screen reader.', 'Accessible data table.']

  const sortedData = JSON.parse(JSON.stringify(data)).sort(customSort)

  return (
    <ErrorBoundary component='Chart-Data-table-vertical'>
      <MediaControls.Section classes={['download-links']}>
        <MediaControls.Link config={config} />
        <DownloadButton fileName={`${config.title || 'data-table'}.csv`} data={rawData} display={config.table.download && rawData} />
      </MediaControls.Section>
      <section hidden={!config.table.show} id={tabbingId.replace('#', '')} className={`data-table-container ${currentViewport}`} aria-label={ariaLabel[+expanded]}>
        <div role='button' className={`data-table-heading ${expanded ? '' : 'collapsed'}`} onClick={toggleExpanded} tabIndex='0' onKeyDown={handleKeyDown}>
          <Icon display={expanded ? 'minus' : 'plus'} base />
          {table.label}
        </div>
        <div className='table-container'>
          <table role='table' aria-live='assertive' hidden={!expanded} className='data-table' aria-rowcount={config?.data?.length ?? '-1'}>
            <caption className='cdcdataviz-sr-only'>{table.caption ? table.caption : `Data table showing data for the ${config.type} figure.`}</caption>
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th aria-label={`${updateHeaderText(header)} sorted in ${sortOrder === 'asc' ? 'ascending' : 'descending'} order`} role='columnheader' scope='col' className='sort' onClick={handleHeaderChange.bind(this, header)} key={index}>
                    <ArrowIcon sortOrder={sortOrder} display={selectedHeader === header} />
                    {updateHeaderText(header)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedData.map((data, rowIndex) => (
                <tr key={rowIndex}>
                  {headers.map((header, colIndex) => (
                    <td key={colIndex}>{formatCell(data[header], header)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <RegionsTable data={regions ?? []} display={config.regions && config.regions.length > 0 && config.visualizationType !== 'Box Plot'} />
      </section>
    </ErrorBoundary>
  )
}

export default DataTableVertical

const RegionsTable = ({ data, display }) => {
  return (
    <section hidden={!display}>
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
          {data.map((region, index) => {
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
    </section>
  )
}

const ArrowIcon = ({ sortOrder, display }) => (
  <div hidden={!display} className='sort-icon'>
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 5'>
      {sortOrder === 'asc' ? <path d='M0 5l5-5 5 5z' /> : <path d='M0 0l5 5 5-5z' />}
    </svg>
  </div>
)

const DownloadButton = ({ data, display, fileName }) => {
  const skipId = `btn__${Math.random().toString(16).substr(2, 8)}`
  const blob = new Blob([Papa.unparse(data)], { type: 'text/csv;charset=utf-8;' })

  return (
    <a hidden={!display} download={fileName} onClick={() => window.navigator.msSaveBlob && navigator.msSaveBlob(blob, fileName)} href={URL.createObjectURL(blob)} id={skipId}>
      Download Data (CSV)
    </a>
  )
}
