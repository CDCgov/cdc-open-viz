import React, { useState, useContext, useMemo, useCallback, useEffect, memo } from 'react'
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

const TableFilter = memo(({ globalFilter, setGlobalFilter, disabled = false }: any) => {
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
  const { config } = useContext(ConfigContext)
  const previewData = useMemo(() => {
    if (config.type === 'dashboard') {
      return Object.values(config.datasets).find((dataset: DataSet) => {
        return dataset.preview && Array.isArray(dataset.data)
      })
    }
    return config.data
  }, [config.type, config.data, config.datasets])
  const [tableData, _setTableData] = useState(previewData)
  const runSideEffects = (td: any[]) => {
    const isSankey = Object.keys(td[0]).includes('tableData')
    const newData = generateColumns(isSankey ? td[0].tableData : td)
    validateFipsCodeLength(newData)
    return newData
  }
  const setTableData = td => _setTableData(runSideEffects(td))

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
  }, [config, config.data, previewData]) // eslint-disable-line

  const tableColumns = useMemo(() => {
    if (!tableData) return []
    const columns = tableData.columns ?? []
    if (columns.length > 0 && columns.includes('')) {
      // todo find a way to call the errors. Currently they are in DataImport.js
      // maybe these can be moved to a file? but then we need a way to add settings like size...
      dispatch({ type: 'EDITOR_SET_ERRORS', payload: [errorMessages.emptyCols] })
    }

    return columns.map(columnName => {
      const columnConfig = {
        id: `column-${columnName}`,
        accessor: row => row[columnName],
        Header: columnName
      }

      return columnConfig
    })
  }, [tableData])

  // This adds a columns property just like the D3 function for JSON parsing.
  const generateColumns = data => {
    let columns = []

    data.forEach(rowObj => {
      Object.keys(rowObj).forEach(columnHeading => {
        if (false === columns.includes(columnHeading)) {
          columns.push(columnHeading)
        }
      })
    })

    // D3 uses a weird quirk where it attaches a named property to an array. Replicating here.
    type D3Data = any[] & { columns }
    const newData: D3Data = [...data] as D3Data

    if (Array.isArray(newData)) {
      newData.columns = columns
      return newData
    }
  }

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

  if (!tableData) return [<Header key='header' />, <PlaceholderTable key='table' />]

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
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => {
                const { key, ...headerProps } = column.getHeaderProps(column.getSortByToggleProps())
                return (
                  <th
                    key={key}
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
      <Footer {...footerProps} />
    </div>
  )

  return [
    <Header key='header' data={tableData} setGlobalFilter={setGlobalFilter} globalFilter={globalFilter} />,
    <Table key='table' />
  ]
}

export default PreviewDataTable
