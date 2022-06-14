import React, {
  useContext,
  useEffect,
  useState,
  useMemo,
  memo, 
  Fragment} from 'react';
import {
  useTable,
  useSortBy,
  useResizeColumns,
  useBlockLayout
} from 'react-table';
import Papa from 'papaparse';
import { Base64 } from 'js-base64';

import ErrorBoundary from '@cdc/core/components/ErrorBoundary';
import LegendCircle from '@cdc/core/components/LegendCircle';

import Context from '../context';

export default function DataTable() {
  const { rawData, transformedData: data, config, colorScale, parseDate, formatDate, formatNumber:numberFormatter } = useContext<any>(Context);

  const legendGlyphSize = 15;
  const legendGlyphSizeHalf = legendGlyphSize / 2;

  const [tableExpanded, setTableExpanded] = useState<boolean>(config.table.expanded);
  const [accessibilityLabel, setAccessibilityLabel] = useState('');

  const DownloadButton = ({ data }: any) => {
    const fileName = `${config.title.substring(0, 50)}.csv`;

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
  };

  // Creates columns structure for the table
  const tableColumns = useMemo(() => {
    const newTableColumns = config.visualizationType === 'Pie' ? [] : [{
      Header: '',
      Cell: ({ row }) => {
        const seriesLabel = config.runtime.seriesLabels ? config.runtime.seriesLabels[row.original] : row.original;
        return (
          <Fragment>
            {config.visualizationType !== 'Pie' && <LegendCircle fill={colorScale(seriesLabel)} />}
            <span>{seriesLabel}</span>
          </Fragment>
        )
      },
      id: 'series-label'
    }];

    data.forEach((d) => {
        const newCol = {
          Header: config.runtime.xAxis.type === 'date' ? formatDate(parseDate(d[config.runtime.originalXAxis.dataKey])) : d[config.runtime.originalXAxis.dataKey],
          Cell: ({ row }) => {
            return (
              <>
                {numberFormatter(d[row.original])}
              </>
            );
          },
          id: d[config.runtime.originalXAxis.dataKey],
          canSort: true
        };

        newTableColumns.push(newCol);
    });

    return newTableColumns;
  }, [config,colorScale]);



  const tableData = useMemo(
 () => config.visualizationType === 'Pie' ? [config.yAxis.dataKey] : config.runtime.seriesKeys,
    [config.runtime.seriesKeys]
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
      <section id={config?.title ? `dataTableSection__${config?.title.replace(/\s/g, '')}` : `dataTableSection`}  className={`data-table-container`} aria-label={accessibilityLabel}>
          <div
            className={tableExpanded ? 'data-table-heading' : 'collapsed data-table-heading'}
            onClick={() => { setTableExpanded(!tableExpanded); }}
            tabIndex={0}
            onKeyDown={(e) => { if (e.keyCode === 13) { setTableExpanded(!tableExpanded); } }}
          >
            {config.table.label}
          </div>
          <div className="table-container">
            <table  
              className={tableExpanded ? 'data-table' : 'data-table cdcdataviz-sr-only'}  
              hidden={!tableExpanded} 
              {...getTableProps()}
              aria-rowcount={ config?.series?.length ? config?.series?.length : '-1' }
              >
              <caption className="visually-hidden">{config.table.label}</caption>
              <thead>
                {headerGroups.map((headerGroup,index) => (
                  <tr {...headerGroup.getHeaderGroupProps()} key={`headerGroups--${index}`}>
                    {headerGroup.headers.map((column, index) => (
                      <th 
                        tabIndex="0" 
                        title={column.Header} 
                        key={`trth--${index}`}
                        role="columnheader"
                        scope="col"
                        {...column.getHeaderProps(column.getSortByToggleProps())} 
                        className={column.isSorted ? column.isSortedDesc ? 'sort sort-desc' : 'sort sort-asc' : 'sort'} 
                        {...(column.isSorted ? column.isSortedDesc ? { 'aria-sort': 'descending' } : { 'aria-sort': 'ascending' } : null)}
                        >
                        {index === 0
                          ? config.table.indexLabel
                            ? config.table.indexLabel : column.render('Header')
                          : column.render('Header')
                        }
                        <button>
                          <span className="cdcdataviz-sr-only">{`Sort by ${(column.render('Header')).toLowerCase() } in ${ column.isSorted ? column.isSortedDesc ? 'descending' : 'ascending' : 'no'} `} order</span>
                        </button>
                        <div {...column.getResizerProps()} className="resizer" />
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row, index) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} key={`tbody__tr-${index}`}>
                      {row.cells.map((cell, index) => {
                        return (
                          <td 
                            tabIndex="0" 
                            {...cell.getCellProps()} 
                            key={`tbody__tr__td-${index}`} 
                            role="gridcell">
                            { cell.render('Cell') }
                          </td>
                        )
                      }
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {config.regions && config.regions.length > 0 ? (
              <table className="region-table data-table">
                <caption className="visually-hidden">Table of the highlighted regions in the visualization</caption>
                <thead>
                  <tr>
                    <th>Region Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                  </tr>
                </thead>
                <tbody>
                  {config.regions.map((region,index) => {
                    if(!Object.keys(region).includes('from') || !Object.keys(region).includes('to')) return null

                    return (
                      <tr key={`row-${region.label}--${index}`}>
                        <td>{region.label}</td>
                        <td>{formatDate(parseDate(region.from))}</td>
                        <td>{formatDate(parseDate(region.to))}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            ) : ''}
          </div>
          {config.table.download && <DownloadButton data={rawData} />}
      </section>
    </ErrorBoundary>
  );
}
