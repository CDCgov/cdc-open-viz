import React, { useState, useEffect, useMemo, memo, useCallback} from 'react';
import {
  useTable,
  useBlockLayout,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy
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
    state,
    prepareRow,
    setGlobalFilter
  } = useTable({ columns: tableColumns, data }, useBlockLayout, useGlobalFilter, useSortBy);

  const TablePlaceholder = () => {
    return (<span>Import sort data to preview it here</span>)
  }

  return (
    <>
      <header className="data-table-header mb-4">
        <h2>Data Preview</h2>
        <TableFilter globalFilter={state.globalFilter || ''} setGlobalFilter={setGlobalFilter} disabled={null === data} />
      </header>
      {data && <table className="data-table table-responsive table-bordered table-hover" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th scope="col" {...column.getHeaderProps(column.getSortByToggleProps())} className={column.isSorted ? column.isSortedDesc ? 'sort sort-desc' : 'sort sort-asc' : ''}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>}
    </>
  );
};