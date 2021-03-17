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
} from 'react-table/src';
import Papa from 'papaparse';
import { Base64 } from 'js-base64';
import { timeFormat } from 'd3-time-format';

import ErrorBoundary from '@cdc/core/components/ErrorBoundary';

import Context from '../context';
import '../scss/DataTable.scss';


export default function DataTable({numberFormatter}) {

  const { data, config, colorScale } = useContext<any>(Context);

  const legendGlyphSize = 15;

  const horizontal = (config.visualizationType === 'Bar' && config.visualizationSubType === 'horizontal');
  const mappedXAxis = horizontal ? config.yAxis : config.xAxis;

  const [tableExpanded, setTableExpanded] = useState<boolean>(false);
  const [accessibilityLabel, setAccessibilityLabel] = useState('');

  const formatDate = (date) => timeFormat(config.xAxis.dateDisplayFormat)(new Date(date));

  const DownloadButton = memo(({ data }: any) => {
    const fileName = `${config.title.text.substring(0, 50)}.csv`;

    const csvData = Papa.unparse(data);

    const saveBlob = () => {
      if (navigator.msSaveBlob) {
        const dataBlob = new Blob([csvData], {type:  "text/csv;charset=utf-8;"});
        navigator.msSaveBlob(dataBlob, fileName);
      }
    }

    return (
      <a
        download={fileName}
        onClick={saveBlob}
        href={`data:text/csv;base64,${Base64.encode(csvData)}`}
        aria-label="Download this data in a CSV file format."
        className={`${config.headerColor || 'theme-blue'} btn btn-download no-border`}
      >
        Download Data (CSV)
      </a>
    )
  });
  
  // Creates columns structure for the table
  const tableColumns = useMemo(() => {
    const newTableColumns = [{
      Header: '',
      Cell: ({ row }) => {
        const seriesLabel = config.seriesLabels ? config.seriesLabels[row.original] : row.original;
        return (
          <>
            <svg className="legend-color" width={legendGlyphSize} height={legendGlyphSize}>
              <rect fill={colorScale(seriesLabel)} width={legendGlyphSize} height={legendGlyphSize} />
            </svg>
            {seriesLabel}
          </>
        )
      },
      id: 'series-label'
    }];

    data.map((d) => {
        const newCol = {
          Header: config.xAxis.type === 'date' ? formatDate(d[mappedXAxis.dataKey]) : d[mappedXAxis.dataKey],
          Cell: ({ row }) => {
            return (
              <>
                {numberFormatter(d[row.original])}
              </>
            );
          },
          id: d[mappedXAxis.dataKey],
          canSort: true
        };

        newTableColumns.push(newCol);
    });

    return newTableColumns;
  }, []);

  const tableData = useMemo(
    () => config.seriesKeys,
    [config.seriesKeys]
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
      <section className={`table-wrapper`} aria-label={accessibilityLabel}>
          <div className="table-header" tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter') setTableExpanded(!tableExpanded); }} onClick={() => setTableExpanded(!tableExpanded)}>
            {config.table.label}
            <span className="table-indicator">{tableExpanded ? '-' : '+'}</span>
          </div>
          <div className="table-container">
            <table hidden={!tableExpanded} {...getTableProps()}>
              <caption className="visually-hidden">{config.table.label}</caption>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th tabIndex="0" {...column.getHeaderProps(column.getSortByToggleProps())} className={column.isSorted ? column.isSortedDesc ? 'sort sort-desc' : 'sort sort-asc' : 'sort'}>
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
            {config.regions ? (
              <table className="region-table">
                <caption className="visually-hidden">Table of the highlighted regions in the visualization</caption>
                <thead>
                  <tr>
                    <th>Region Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                  </tr>
                </thead>
                <tbody>
                  {config.regions.map((region) => (
                    <tr>
                      <td>{region.label}</td>
                      <td>{formatDate(region.from)}</td>
                      <td>{formatDate(region.to)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : ''}
          </div>
          {config.table.download && <DownloadButton data={data} />}
      </section>
    </ErrorBoundary>
  );
}