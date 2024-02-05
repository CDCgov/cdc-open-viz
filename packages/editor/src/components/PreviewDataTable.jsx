import React, { useState, useContext, useMemo, useCallback, useEffect, memo } from 'react'
import { useTable, useBlockLayout, useGlobalFilter, useSortBy, useResizeColumns, usePagination } from 'react-table'
import ConfigContext from '../ConfigContext'
import { useDebounce } from 'use-debounce'

// Core
import validateFipsCodeLength from '@cdc/core/helpers/validateFipsCodeLength'
const TableFilter = memo(({ globalFilter, setGlobalFilter, disabled = false }) => {
  const [filterValue, setFilterValue] = useState(globalFilter)

  const [debouncedValue] = useDebounce(filterValue, 200)

  useEffect(() => {
    if ('string' === typeof debouncedValue && debouncedValue !== globalFilter) {
      setGlobalFilter(debouncedValue ?? '')
    }
  }, [debouncedValue])

  const onChange = e => {
    setFilterValue(e.target.value)
  }

  return <input className='filter' value={filterValue} onChange={onChange} type='search' placeholder='Filter...' disabled={disabled} />
})

const Header = memo(({ globalFilter, data, setGlobalFilter }) => (
  <header className='data-table-header'>
    <h2>Data Preview</h2>
    <TableFilter globalFilter={globalFilter || ''} setGlobalFilter={setGlobalFilter} disabled={null === data} />
  </header>
))

const Footer = memo(({ previousPage, nextPage, canPreviousPage, canNextPage, pageNumber, totalPages }) => (
  <footer className='data-table-pagination'>
    <ul>
      <li>
        <button onClick={() => previousPage()} className='btn btn-prev' disabled={!canPreviousPage} title='Previous Page'></button>
      </li>
      <li>
        <button onClick={() => nextPage()} className='btn btn-next' disabled={!canNextPage} title='Next Page'></button>
      </li>
    </ul>
    <span>
      Page {pageNumber} of {totalPages}
    </span>
  </footer>
))

const PreviewDataTable = ({ data }) => {
  const [tableData, setTableData] = useState(data ?? [])
  const { setErrors, errorMessages, config } = useContext(ConfigContext)

  const tableColumns = useMemo(() => {
    const columns = tableData.columns ?? []
    if (columns.length > 0 && columns.includes('')) {
      // todo find a way to call the errors. Currently they are in DataImport.js
      // maybe these can be moved to a file? but then we need a way to add settings like size...
      setErrors([errorMessages.emptyCols])
    }

    return columns.map((columnName, idx) => {
      const columnConfig = {
        id: `column-${columnName}`,
        accessor: row => row[columnName],
        Header: columnName,
        width: 250
      }

      return columnConfig
    })
  }, [tableData])

  // This adds a columns property just like the D3 function for JSON parsing.
  const generateColumns = useCallback(data => {
    let columns = []

    data.forEach(rowObj => {
      Object.keys(rowObj).forEach(columnHeading => {
        if (false === columns.includes(columnHeading)) {
          columns.push(columnHeading)
        }
      })
    })

    // D3 uses a weird quirk where it attaches a named property to an array. Replicating here.
    const newData = [...data]

    if (Array.isArray(newData)) {
      newData.columns = columns
      return newData
    }
  }, [])

  useEffect(() => {
    if (!data) {
      return
    }

    let newData = [...data]
    console.log('newData', newData)
    newData = generateColumns(newData)
    validateFipsCodeLength(newData)
    setTableData(config.visualizationType === 'Sankey' ? newData[0]?.links : newData)
  }, [data, generateColumns])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    state: { pageIndex, globalFilter },
    prepareRow,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage
  } = useTable({ columns: tableColumns, data: tableData, initialState: { pageSize: 25 } }, useBlockLayout, useGlobalFilter, useSortBy, useResizeColumns, usePagination)

  const NoData = () => (
    <section className='no-data-message'>
      <section>
        <h3>No Data</h3>
        <p>Import data to preview</p>
      </section>
    </section>
  )

  const PlaceholderTable = () => {
    return (
      <section className='no-data'>
        <NoData />
        <div className='table-container'>
          <table className='editor data-table' role='table'>
            <thead>
              <tr role='row'>
                <th scope='col' colSpan='1' role='columnheader'></th>
                <th scope='col' colSpan='1' role='columnheader'></th>
                <th scope='col' colSpan='1' role='columnheader'></th>
              </tr>
            </thead>
            <tbody>
              <tr role='row'>
                <td role='cell'></td>
                <td role='cell'></td>
                <td role='cell'></td>
              </tr>
              <tr role='row'>
                <td role='cell'></td>
                <td role='cell'></td>
                <td role='cell'></td>
              </tr>
              <tr role='row'>
                <td role='cell'></td>
                <td role='cell'></td>
                <td role='cell'></td>
              </tr>
              <tr role='row'>
                <td role='cell'></td>
                <td role='cell'></td>
                <td role='cell'></td>
              </tr>
              <tr role='row'>
                <td role='cell'></td>
                <td role='cell'></td>
                <td role='cell'></td>
              </tr>
              <tr role='row'>
                <td role='cell'></td>
                <td role='cell'></td>
                <td role='cell'></td>
              </tr>
              <tr role='row'>
                <td role='cell'></td>
                <td role='cell'></td>
                <td role='cell'></td>
              </tr>
              <tr role='row'>
                <td role='cell'></td>
                <td role='cell'></td>
                <td role='cell'></td>
              </tr>
              <tr role='row'>
                <td role='cell'></td>
                <td role='cell'></td>
                <td role='cell'></td>
              </tr>
              <tr role='row'>
                <td role='cell'></td>
                <td role='cell'></td>
                <td role='cell'></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    )
  }

  if (!data) return [<Header key='header' />, <PlaceholderTable key='table' />]

  const footerProps = { previousPage, nextPage, canPreviousPage, canNextPage, pageNumber: pageIndex + 1, totalPages: pageOptions.length }

  const Table = () => (
    <>
      <section className='data-table-container'>
        <div className='table-container'>
          <table className='data-table' {...getTableProps()} aria-hidden='true'>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th scope='col' {...column.getHeaderProps(column.getSortByToggleProps())} className={column.isSorted ? (column.isSortedDesc ? 'sort sort-desc' : 'sort sort-asc') : ''} title={column.Header}>
                      {column.render('Header')}
                      <div {...column.getResizerProps()} className='resizer' />
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map(row => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()} title={cell.value}>
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
      <Footer {...footerProps} />
    </>
  )

  return [<Header key='header' data={data} setGlobalFilter={setGlobalFilter} globalFilter={globalFilter} />, <Table key='table' />]
}

export default PreviewDataTable
