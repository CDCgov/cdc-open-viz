import React, { useContext, useCallback, useRef, useState } from 'react';
import { timeParse, timeFormat } from 'd3-time-format';
import Context from '../context';

export default function DataTable({numberFormatter}) {

  const { data, config } = useContext<any>(Context);

  const [tableExpanded, setTableExpanded] = useState<boolean>(false);
  const [tableSortConfig, setTableSortConfig] = useState<any>({ sortKey: '', sortReverse: false });

  const formatDate = (date) => timeFormat(config.xAxis.dateDisplayFormat)(new Date(date));

  const tableSort = (a, b) => {
    if (tableSortConfig.sortKey) {
      let pos = 1;
      let neg = -1;

      if (tableSortConfig.sortReverse) {
        pos = -1;
        neg = 1;
      }

      if (a[tableSortConfig.sortKey] > b[tableSortConfig.sortKey]) {
        return neg;
      } else if (b[tableSortConfig.sortKey] > a[tableSortConfig.sortKey]) {
        return pos;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  };

  return (
    <div className="table-container">
      <table>
        <caption tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter') setTableExpanded(!tableExpanded); }} onClick={() => setTableExpanded(!tableExpanded)}>
          {config.table.label}
          <span className="table-indicator">{tableExpanded ? '-' : '+'}</span>
        </caption>
        <thead hidden={!tableExpanded}>
          <tr>
            <th>&nbsp;</th>
            {config.seriesKeys.map((key, index) => (
              <th key={`table-header-item-${index}`} tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter') { setTableSortConfig({ sortKey: key, sortReverse: !tableSortConfig.sortReverse }); } }} onClick={() => { setTableSortConfig({ sortKey: key, sortReverse: !tableSortConfig.sortReverse }); }}>{(config.seriesKeysLabels ? config.seriesKeysLabels[index] : key)}
                <span hidden={tableSortConfig.sortKey !== key} className={'table-sort-indicator ' + (tableSortConfig.sortReverse ? 'up' : 'down')}>
                  ^
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody hidden={!tableExpanded}>
          {[...data].sort(tableSort).map((d, rowIndex) => (
            <tr key={`table-row-${rowIndex}`}>
              <th>{d[config.xAxis.dataKey]}</th>
              {config.seriesKeys.map((key, colIndex) => <td key={`table-item-${rowIndex}-${colIndex}`}>{numberFormatter(d[key])}</td>)}
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
  );

}