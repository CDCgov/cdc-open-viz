import React, { useState, useMemo } from 'react';
import {
  useTable,
  useBlockLayout,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  useResizeColumns,
  usePagination
} from 'react-table/src';

const TableFilter = ({globalFilter, setGlobalFilter, disabled = false}) => {
  const [filterValue, setFilterValue] = useState(globalFilter);

  const filterTable = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200);

  return (
    <input
    className="filter"
    value={filterValue}
    onChange={(e) => {
      setFilterValue(e.target.value);
      filterTable(e.target.value);
    }}
    type="search"
    placeholder='Filter...'
    disabled={disabled}
    />
  )
};

export default function PreviewDataTable({ data }) {
  const tableColumns = useMemo(() => {
    const columns = data ? data.columns : [];

    return columns.map((columnName) => {
        const columnConfig = {
          id: `column-${columnName}`,
          accessor: row => row[columnName],
          Header: columnName
        };

        return columnConfig
    });
  }, [data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state: { pageIndex, pageSize, globalFilter },
    prepareRow,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable({ columns: tableColumns, data, initialState: { pageSize: 25 } }, useBlockLayout, useGlobalFilter, useSortBy, useResizeColumns, usePagination);

  const Header = () => (
    <header className="data-table-header mb-4">
      <h2>Data Preview</h2>
      <TableFilter globalFilter={globalFilter || ''} setGlobalFilter={setGlobalFilter} disabled={null === data} />
    </header>
  )

  const NoData = () => (
    <section className="no-data-message">
      <section>
        <h3>No Data</h3>
        <p>Import data to preview</p>
      </section>
    </section>
  )

  const PlaceholderTable = () => {
    return (
      <section className="no-data">
        <NoData />
        <table className="data-table table-responsive table-bordered table-hover" role="table">
          <thead>
              <tr role="row">
                  <th scope="col" colSpan="1" role="columnheader">
                  </th>
                  <th scope="col" colSpan="1" role="columnheader">
                  </th>
                  <th scope="col" colSpan="1" role="columnheader">
                  </th>
              </tr>
          </thead>
          <tbody>
            <tr role="row">
                <td role="cell"></td>
                <td role="cell"></td>
                <td role="cell"></td>
            </tr>
            <tr role="row">
                <td role="cell"></td>
                <td role="cell"></td>
                <td role="cell"></td>
            </tr>
            <tr role="row">
                <td role="cell"></td>
                <td role="cell"></td>
                <td role="cell"></td>
            </tr>
            <tr role="row">
                <td role="cell"></td>
                <td role="cell"></td>
                <td role="cell"></td>
            </tr>
            <tr role="row">
                <td role="cell"></td>
                <td role="cell"></td>
                <td role="cell"></td>
            </tr>
            <tr role="row">
                <td role="cell"></td>
                <td role="cell"></td>
                <td role="cell"></td>
            </tr>
            <tr role="row">
                <td role="cell"></td>
                <td role="cell"></td>
                <td role="cell"></td>
            </tr>
            <tr role="row">
                <td role="cell"></td>
                <td role="cell"></td>
                <td role="cell"></td>
            </tr>
            <tr role="row">
                <td role="cell"></td>
                <td role="cell"></td>
                <td role="cell"></td>
            </tr>
                    <tr role="row">
                <td role="cell"></td>
                <td role="cell"></td>
                <td role="cell"></td>
            </tr>
          </tbody>
        </table>
      </section>
    )
  }

  if(!data) {
    return [<Header />, <PlaceholderTable />]
  }

  const Table = () => (
    <>
      <table className="data-table table-responsive table-bordered table-hover" {...getTableProps()} aria-hidden="true">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th scope="col" {...column.getHeaderProps(column.getSortByToggleProps())} className={column.isSorted ? column.isSortedDesc ? 'sort sort-desc' : 'sort sort-asc' : ''} title={column.Header}>
                {column.render('Header')}
                <div {...column.getResizerProps()} className="resizer" />
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} title={cell.value}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
    <footer className="data-table-pagination">
      <ul>
        <li>
          <button onClick={() => previousPage()} className="btn btn-prev" disabled={!canPreviousPage} title="Previous Page"></button>
        </li>
        <li>
          <button onClick={() => nextPage()} className="btn btn-next" disabled={!canNextPage} title="Next Page"></button>
        </li>
      </ul>
      <span>
        Page{' '}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>
      </span>
    </footer>
    </>
  )

  return [<Header />, <Table />]
};