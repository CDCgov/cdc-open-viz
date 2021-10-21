import React, { 
  useContext, 
  useEffect,
  useState, 
  useMemo, 
  memo } from 'react';
import {
  useTable, 
  useSortBy, 
  useResizeColumns, 
  useBlockLayout
} from 'react-table';
import Papa from 'papaparse';
import { Base64 } from 'js-base64';

import ErrorBoundary from '@cdc/core/components/ErrorBoundary';

import Context from '../context';

export default function DataTable() {

  const { data, config } = useContext<any>(Context);

  const [tableExpanded, setTableExpanded] = useState<boolean>(config.table ? config.table.expanded : false);
  const [accessibilityLabel, setAccessibilityLabel] = useState('');

  const DownloadButton = memo(({ data }: any) => {
    const fileName = `${config.title ? config.title.substring(0, 50) : 'cdc-open-viz'}.csv`;

    const csvData = Papa.unparse(data);

    const saveBlob = () => {
      //@ts-ignore
      if (typeof window.navigator.msSaveBlob === 'function') {
        const dataBlob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
        //@ts-ignore
        window.navigator.msSaveBlob(dataBlob, fileName);
      }
    }

    return (
      <a
        download={fileName}
        onClick={saveBlob}
        href={`data:text/csv;base64,${Base64.encode(csvData)}`}
        aria-label="Download this data in a CSV file format."
        className={`btn btn-download no-border`}
      >
        Download Data (CSV)
      </a>
    )
  });
  
  // Creates columns structure for the table
  const tableColumns = useMemo(() => {
    const newTableColumns = []/*[{
      Header: '',
      Cell: ({ row }) => {
        return (
          <>
          </>
        )
      },
      id: 'series-label'
    }];*/

    Object.keys(data[0]).map((key) => {
        const newCol = {
          Header: key,
          Cell: ({ row }) => {
            return (
              <>
                {row.original[key]}
              </>
            );
          },
          id: key,
          canSort: true
        };

        newTableColumns.push(newCol);
    });

    return newTableColumns;
  }, [config]);

  const tableData = useMemo(
    () => config.data,
    [config.data]
  );

  // Change accessibility label depending on expanded status
  useEffect(() => {
    const expandedLabel = 'Accessible data table.';
    const collapsedLabel = 'Accessible data table. This table is currently collapsed visually but can still be read using a screen reader.';

    if (tableExpanded === true && accessibilityLabel !== expandedLabel) {
      setAccessibilityLabel(expandedLabel);
    }

    if (tableExpanded === false && accessibilityLabel !== collapsedLabel) {
      setAccessibilityLabel(collapsedLabel);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tableExpanded]);

  const defaultColumn = useMemo(
    () => ({
      minWidth: 150,
      width: 200,
      maxWidth: 400,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns: tableColumns, data: tableData, defaultColumn }, useSortBy, useBlockLayout, useResizeColumns);

  return (
    <ErrorBoundary component="DataTable">
      <section className={`data-table-container`} aria-label={accessibilityLabel}>
          <div
            className={tableExpanded ? 'data-table-heading' : 'collapsed data-table-heading'}
            onClick={() => { setTableExpanded(!tableExpanded); }}
            tabIndex={0}
            onKeyDown={(e) => { if (e.keyCode === 13) { setTableExpanded(!tableExpanded); } }}
          >
            {config.table.label}
          </div>
          <div className="table-container">
            <table  className={tableExpanded ? 'data-table' : 'data-table cdcdataviz-sr-only'}  hidden={!tableExpanded} {...getTableProps()}>
              <caption className="visually-hidden">{config.table.label}</caption>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th tabIndex="0" {...column.getHeaderProps(column.getSortByToggleProps())} className={column.isSorted ? column.isSortedDesc ? 'sort sort-desc' : 'sort sort-asc' : 'sort'} title={column.Header}>
                        {column.render('Header')}
                        <div {...column.getResizerProps()} className="resizer" />
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
                        <td tabIndex="0" {...cell.getCellProps()}>
                          {cell.render('Cell')}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {config.table.download && <DownloadButton data={data} />}
      </section>
    </ErrorBoundary>
  );
}