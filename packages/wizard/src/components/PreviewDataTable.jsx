import React, { useState, useContext, useMemo, useCallback, useEffect, memo } from 'react'
import { useDebounce } from 'use-debounce'
import {
  useTable,
  useBlockLayout,
  useGlobalFilter,
  useSortBy,
  useResizeColumns,
  usePagination
} from 'react-table'

import validateFipsCodeLength from '@cdc/core/helpers/validateFipsCodeLength'
import InputGroup from '@cdc/core/components/inputs/InputGroup'
import Button from '@cdc/core/components/elements/Button'
import Icon from '@cdc/core/components/ui/Icon'

import WizardContext from '../WizardContext'

import '../scss/cove-data-table.scss'

const TableFilter = memo(({ globalFilter, setGlobalFilter, disabled = false }) => {
  const [ filterValue, setFilterValue ] = useState(globalFilter)
  const [ debouncedValue ] = useDebounce(filterValue, 200)

  useEffect(() => {
    if ('string' === typeof debouncedValue && debouncedValue !== globalFilter) {
      setGlobalFilter(debouncedValue ?? '')
    }
  }, [ debouncedValue ])

  const onChange = (e) => {
    setFilterValue(e.target.value)
  }

  return (
    <InputGroup label={<Icon display="filterBars"/>} flow="right" clear>
      <input
        type="search"
        className="cove-input"
        placeholder="Filter..."
        onChange={onChange}
        value={filterValue}
        disabled={disabled}
      />
    </InputGroup>
  )
})

const Header = memo(({ globalFilter, data = null, setGlobalFilter }) => (
  <header className="cove-data-table__header">
    <div className="grid">
      <div className="col-6">
        <h2 className="cove-heading--2 align-self-center mb-0">Data Preview</h2>
      </div>
      <div className="col-6">
        <TableFilter globalFilter={globalFilter || ''} setGlobalFilter={setGlobalFilter} disabled={null === data}/>
      </div>
    </div>
  </header>
))

const Footer = memo(({ previousPage, nextPage, canPreviousPage, canNextPage, pageNumber, totalPages }) => (
  <footer className="cove-data-table__footer">
    <div className="cove-data-table__pagination">
      <Button title="Previous Page" className="px-2 py-1 mr-1" onClick={() => previousPage()} disabled={!canPreviousPage} flexCenter>
        <Icon display="caretUp" size={10} style={{transform: "rotate(-90deg)"}}/>
      </Button>
      <Button title="Next Page" className="px-2 py-1 mr-1" onClick={() => nextPage()} disabled={!canNextPage} flexCenter>
        <Icon display="caretUp" size={10} style={{transform: "rotate(90deg)"}}/>
      </Button>
      <span className="cove-data-table__pagination--index">
        Page{' '} {pageNumber} of {totalPages}
      </span>
    </div>
  </footer>
))

const PreviewDataTable = ({ data }) => {
  const [ tableData, setTableData ] = useState(data ?? [])
  const { setErrors, errorMessages } = useContext(WizardContext)

  const tableColumns = useMemo(() => {
    const columns = tableData.columns ?? []
    if (columns.length > 0 && columns.includes('')) {
      // TODO: find a way to call the errors. Currently they are in DataImport.js
      // maybe these can be moved to a file? but then we need a way to add settings like size...
      setErrors([ errorMessages.emptyCols ])
    }

    return columns.map((columnName, idx) => {
      return {
        id: `column-${columnName}`,
        accessor: row => row[columnName],
        Header: columnName,
        width: 250
      }
    })
  }, [ tableData ])

  // This adds a columns property just like the D3 function for JSON parsing.
  const generateColumns = useCallback((data) => {
    let columns = []

    data.forEach((rowObj) => {
      Object.keys(rowObj).forEach((columnHeading) => {
        if (false === columns.includes(columnHeading)) {
          columns.push(columnHeading)
        }
      })
    })

    // D3 uses a weird quirk where it attaches a named property to an array. Replicating here.
    const newData = [ ...data ]

    if (Array.isArray(newData)) {
      newData.columns = columns
      return newData
    }
  }, [])

  useEffect(() => {
    if (!data) return

    let newData = [ ...data ]

    newData = generateColumns(newData)
    validateFipsCodeLength(newData)
    setTableData(newData)
  }, [ data, generateColumns ])

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
    previousPage,
  } = useTable({
    columns: tableColumns,
    data: tableData,
    initialState: { pageSize: 25 }
  }, useBlockLayout, useGlobalFilter, useSortBy, useResizeColumns, usePagination)

  const NoData = () => (
    <section className="cove-data-table__no-data--message">
      <section>
        <h3 className="cove-heading--2 mb-1">No Data</h3>
        <p>Import data to preview</p>
      </section>
    </section>
  )

  const PlaceholderTable = () => {
    return (
      <section className="cove-data-table__no-data">
        <NoData/>
        <div className="cove-data-table__table-wrapper">
          <table className="cove-data-table__table" role="table">
            <thead>
              <tr role="row">
                <th scope="col" colSpan="1" role="columnheader"/>
                <th scope="col" colSpan="1" role="columnheader"/>
              </tr>
            </thead>
            <tbody>
              {[...Array(10)].map((e, i) => (
                <tr role="row" key={i}>
                  <td role="cell"/>
                  <td role="cell"/>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    )
  }

  if (!data) return (
    <div className="cove-data-table">
      <Header key="header"/>
      <PlaceholderTable key="table"/>
    </div>
  )

  const footerProps = {
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    pageNumber: pageIndex + 1,
    totalPages: pageOptions.length
  }

  const Table = () => (
    <>
      <section className="cove-data-table__content">
        <div className="cove-data-table__table-wrapper">
          <table className="cove-data-table__table" {...getTableProps()} aria-hidden="true">
            <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th scope="col" {...column.getHeaderProps(column.getSortByToggleProps())}
                      className={column.isSorted ? column.isSortedDesc ? 'sort sort-desc' : 'sort sort-asc' : ''}
                      title={column.Header}>
                    {column.render('Header')}
                    <div {...column.getResizerProps()} className="resizer"/>
                  </th>
                ))}
              </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
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

  return (
    <div className="cove-data-table">
      <Header key="header" data={data} setGlobalFilter={setGlobalFilter} globalFilter={globalFilter}/>
      <Table key="table"/>
    </div>
  )
}

export default PreviewDataTable
