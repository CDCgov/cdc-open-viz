import React, { useContext, useCallback, useRef, useState } from 'react';
import { timeParse, timeFormat } from 'd3-time-format';
import Context from '../context';

import ErrorBoundary from '@cdc/core/components/ErrorBoundary';

export default function DataTable({numberFormatter}) {

  const { data, config } = useContext<any>(Context);

  const horizontal = (config.visualizationType === 'Bar' && config.visualizationSubType === 'horizontal');
  const mappedXAxis = horizontal ? config.yAxis : config.xAxis;

  const [tableExpanded, setTableExpanded] = useState<boolean>(false);
  const [tableSortConfig, setTableSortConfig] = useState<any>({ sortKey: undefined, sortReverse: false });

  const formatDate = (date) => timeFormat(config.xAxis.dateDisplayFormat)(new Date(date));

  let allSeriesKeys = [...config.seriesKeys];

  if(config.confidenceKeys) {
    allSeriesKeys.push(config.confidenceKeys.lower, config.confidenceKeys.upper);
  }

  const tableSort = (a, b) => {
    if (tableSortConfig.sortKey !== undefined) {
      let pos = 1;
      let neg = -1;

      if (tableSortConfig.sortReverse) {
        pos = -1;
        neg = 1;
      }

      if (data[tableSortConfig.sortKey][a] > data[tableSortConfig.sortKey][b]) {
        return neg;
      } else if (data[tableSortConfig.sortKey][a] < data[tableSortConfig.sortKey][b]) {
        return pos;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  };

  return (
    <ErrorBoundary component="DataTable">
      <div>
        <div className="table-header" tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter') setTableExpanded(!tableExpanded); }} onClick={() => setTableExpanded(!tableExpanded)}>
          {config.table.label}
          <span className="table-indicator">{tableExpanded ? '-' : '+'}</span>
        </div>
        <div className="table-container">
          <table>
            <caption className="visually-hidden">{config.table.label}</caption>
            <thead hidden={!tableExpanded}>
              <tr>
                <th>&nbsp;</th>
                {data.map((d, index) => (
                  <th key={`table-header-item-${index}`} tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter') { setTableSortConfig({ sortKey: index, sortReverse: !tableSortConfig.sortReverse }); } }} onClick={() => { setTableSortConfig({ sortKey: index, sortReverse: !tableSortConfig.sortReverse }); }}>
                    {config.xAxis.type === 'date' ? formatDate(d[mappedXAxis.dataKey]) : d[mappedXAxis.dataKey]}
                    <span hidden={tableSortConfig.sortKey !== index} className={'table-sort-indicator ' + (tableSortConfig.sortReverse ? 'up' : 'down')}>
                      ^
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody hidden={!tableExpanded}>
              {allSeriesKeys.sort(tableSort).map((key, rowIndex) => (
                <tr key={`table-row-${rowIndex}`}>
                  <th>{config.seriesLabels ? config.seriesLabels[key] : key}</th>
                  {data.map((d, colIndex) => <td key={`table-item-${rowIndex}-${colIndex}`}>{numberFormatter(d[key])}</td>)}
                </tr>
              ))}
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
      </div>
    </ErrorBoundary>
  );

}