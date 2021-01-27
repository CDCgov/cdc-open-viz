import React, { useState, useEffect, useMemo, memo, useCallback} from 'react';
import { useTable, useBlockLayout, useGlobalFilter, useAsyncDebounce } from 'react-table/src';

const TableFilter = ({globalFilter, setGlobalFilter}) => {
  const [filterValue, setFilterValue] = useState(globalFilter);

  const filterTable = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200);

  return (
    <input
    value={filterValue}
    onChange={(e) => {
      setFilterValue(e.target.value);
      filterTable(e.target.value);
    }}
    placeholder='Search...'
    />
  )
};

export default function PreviewDataTable({data}) {
  const tableColumns = useMemo(() => {
    return data.columns.map((columnName) => {
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
  } = useTable({ columns: tableColumns, data }, useBlockLayout, useGlobalFilter);

  return (
    <>
      <TableFilter globalFilter={state.globalFilter || ''} setGlobalFilter={setGlobalFilter} />
      <table className="data-table table-responsive table-bordered table-hover" {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {/* <th className="index-col">...</th> */}
            {headerGroup.headers.map((column) => (
              <th scope="col" {...column.getHeaderProps()}>
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
              {/* <th>{row.index + 1}</th> */}
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
};