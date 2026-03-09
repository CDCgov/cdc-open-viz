import React, { useState, useContext, useMemo, useCallback, useEffect, useRef, memo } from 'react'
import {
  useTable,
  useBlockLayout,
  useFlexLayout,
  useGlobalFilter,
  useSortBy,
  useResizeColumns,
  usePagination
} from 'react-table'
import ConfigContext, { EditorDispatchContext } from '@cdc/core/contexts/EditorContext'
import { useDebounce } from 'use-debounce'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import { MdNavigateNext } from 'react-icons/md'
import { GrFormPrevious } from 'react-icons/gr'

// Core
import validateFipsCodeLength from '@cdc/core/helpers/validateFipsCodeLength'
import { errorMessages } from '../helpers/errorMessages'
import { DataSet } from '@cdc/core/types/DataSet'
import Icon from '@cdc/core/components/ui/Icon'

const TableFilter = memo(({ globalFilter, setGlobalFilter = () => {}, disabled = false }: any) => {
  const [filterValue, setFilterValue] = useState(globalFilter ?? '')

  const [debouncedValue] = useDebounce(filterValue, 200)

  useEffect(() => {
    if ('string' === typeof debouncedValue && typeof setGlobalFilter === 'function') {
      const nextFilter = debouncedValue.trim() ? debouncedValue : undefined
      if (nextFilter !== globalFilter) {
        setGlobalFilter(nextFilter)
      }
    }
  }, [debouncedValue, globalFilter, setGlobalFilter])

  const onChange = e => {
    setFilterValue(e.target.value)
  }

  return (
    <input
      className='filter'
      value={filterValue}
      onChange={onChange}
      type='search'
      placeholder='Filter...'
      disabled={disabled}
    />
  )
})

const Header = memo(({ globalFilter, data, setGlobalFilter }: any) => (
  <header className='data-table-header'>
    <h2>Data Preview</h2>
    <TableFilter globalFilter={globalFilter || ''} setGlobalFilter={setGlobalFilter} disabled={null === data} />
  </header>
))

const Footer = memo(({ previousPage, nextPage, canPreviousPage, canNextPage, pageNumber, totalPages }: any) => (
  <footer className='data-table-pagination mt-2'>
    <ul>
      <li>
        <button
          onClick={() => previousPage()}
          className='btn btn-prev display-flex align-items-center justify-content-center'
          disabled={!canPreviousPage}
          title='Previous Page'
        >
          {' '}
          <GrFormPrevious />
        </button>
      </li>
      <li className='me-2'>
        <button
          onClick={() => nextPage()}
          className='btn btn-next display-flex align-items-center justify-content-center'
          disabled={!canNextPage}
          title='Next Page'
        >
          <MdNavigateNext />
        </button>
      </li>
    </ul>
    <span>
      Page {pageNumber} of {totalPages}
    </span>
  </footer>
))

const PreviewDataTable = () => {
  const { config, errors } = useContext(ConfigContext)
  const previewData = useMemo(() => {
    if (config.type === 'dashboard') {
      const previewDataset = Object.values(config.datasets).find((dataset: DataSet) => {
        return dataset.preview && Array.isArray(dataset.data)
      })
      return previewDataset?.data
    }
    return config.data
  }, [config.type, config.data, config.datasets])
  const [tableData, _setTableData] = useState(Array.isArray(previewData) ? previewData : null)
  const lastDataSourceRef = useRef<any[]>(null)
  const runSideEffects = (td: any[]) => {
    if (!Array.isArray(td) || td.length === 0) return td

    const isSankey = Object.keys(td[0]).includes('tableData')
    const normalizedData = isSankey ? td[0].tableData : td
    validateFipsCodeLength(normalizedData)
    return normalizedData
  }
  const setTableData = td => {
    if (!Array.isArray(td) || td.length === 0) return
    if (lastDataSourceRef.current === td) return

    lastDataSourceRef.current = td
    _setTableData(runSideEffects(td))
  }

  const dispatch = useContext(EditorDispatchContext)

  const fetchDatasetData = async (datasetKey, datasetConfig) => {
    if (datasetConfig.preview) {
      if (datasetConfig.dataUrl) {
        const remoteData = await fetchRemoteData(datasetConfig.dataUrl)
        if (Array.isArray(remoteData)) {
          setTableData(remoteData)
        }
      } else if (Array.isArray(datasetConfig.data)) {
        setTableData(datasetConfig.data)
      }
    }
  }

  const handleDashboardData = async datasets => {
    for (const datasetKey of Object.keys(datasets)) {
      await fetchDatasetData(datasetKey, datasets[datasetKey])
    }
  }

  useEffect(() => {
    const loadData = async () => {
      if (!config.data) {
        if (config.type === 'dashboard') {
          await handleDashboardData(config.datasets)
        } else {
          if (config.dataUrl) {
            const remoteData = await fetchRemoteData(config.dataUrl)
            if (Array.isArray(remoteData)) {
              setTableData(remoteData)
            }
          }
        }
      } else {
        setTableData(previewData)
      }
    }

    loadData()
  }, [config.data, config.dataUrl, config.datasets, config.type, previewData]) // eslint-disable-line

  const tableColumns = useMemo(() => {
    if (!Array.isArray(tableData)) return []
    const columns = Object.keys(tableData[0] ?? {})

    return columns.map(columnName => {
      const columnConfig = {
        id: `column-${columnName}`,
        accessor: row => row[columnName],
        Header: columnName
      }

      return columnConfig
    })
  }, [tableData])

  useEffect(() => {
    if (!tableData) return
    const columns = Object.keys(tableData[0] ?? {})
    if (columns.length > 0 && columns.includes('') && !errors?.includes(errorMessages.emptyCols)) {
      dispatch({ type: 'EDITOR_SET_ERRORS', payload: [errorMessages.emptyCols] })
    }
  }, [dispatch, errors, tableData])

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
  } = useTable(
    { columns: tableColumns, data: tableData, initialState: { pageSize: 25 } },
    useFlexLayout,
    useGlobalFilter,
    useSortBy,
    useResizeColumns,
    usePagination
  )

  const PlaceholderTable = () => {
    return (
      <section className='no-data'>
        <section className='no-data-message'>
          <section>
            <h3>No Data</h3>
            <p>Import data to preview</p>
          </section>
        </section>
        <div className='table-container mt-2'>
          <table className='editor data-table' role='table'>
            <thead>
              <tr>
                <th scope='col' colSpan={1} role='columnheader'></th>
                <th scope='col' colSpan={1} role='columnheader'></th>
                <th scope='col' colSpan={1} role='columnheader'></th>
              </tr>
            </thead>
            <tbody>
              <>
                {[...Array(10)].map((_, i) => (
                  <tr key={i}>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                ))}
              </>
            </tbody>
          </table>
        </div>
      </section>
    )
  }

  if (!Array.isArray(tableData) || tableData.length === 0)
    return [<Header key='header' />, <PlaceholderTable key='table' />]

  const footerProps = {
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    pageNumber: pageIndex + 1,
    totalPages: pageOptions.length
  }

  const Table = () => (
    <div className='table-responsive'>
      <table className='mt-2 w-100 table table-striped data-table table-sm ' aria-hidden='true' {...getTableProps}>
        <thead>
          {headerGroups.map(headerGroup => {
            const { key, ...headerGroupProps } = headerGroup.getHeaderGroupProps()
            return (
              <tr key={key} {...headerGroupProps}>
                {headerGroup.headers.map(column => {
                  const { key: columnKey, ...headerProps } = column.getHeaderProps(column.getSortByToggleProps())
                  return (
                    <th
                      key={columnKey}
                      scope='col'
                      {...headerProps}
                      className={column.isSorted ? (column.isSortedDesc ? 'sort sort-desc' : 'sort sort-asc') : ''}
                      title={column.Header}
                    >
                      {column.render('Header')}
                      <div {...column.getResizerProps()} className='resizer' />
                    </th>
                  )
                })}
              </tr>
            )
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            const { key, ...rowProps } = row.getRowProps()
            return (
              <tr key={key} {...rowProps}>
                {row.cells.map(cell => {
                  const { key: cellKey, ...cellProps } = cell.getCellProps()
                  return (
                    <td key={cellKey} {...cellProps} title={cell.value}>
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <Footer {...footerProps} />
    </div>
  )

  return [
    <Header key='header' data={tableData} setGlobalFilter={setGlobalFilter} globalFilter={globalFilter} />,
    <Table key='table' />
  ]
}

export default PreviewDataTable
