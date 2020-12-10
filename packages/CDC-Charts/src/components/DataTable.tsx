import React, { useContext, useCallback, useRef, useState } from 'react';
import Context from '../context';

export default function DataTable() {

  const { data, config } = useContext<any>(Context);

  const [tableExpanded, setTableExpanded] = useState<boolean>(false);
  const [tableSortConfig, setTableSortConfig] = useState<any>({ sortKey: '', sortReverse: false });

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
            <td>&nbsp;</td>
            {config.seriesKeys.map((key, index) => (
              <th key={`table-header-item-${index}`} tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter') { setTableSortConfig({ sortKey: key, sortReverse: !tableSortConfig.sortReverse }); } }} onClick={() => { setTableSortConfig({ sortKey: key, sortReverse: !tableSortConfig.sortReverse }); }}>{key}
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
              {config.seriesKeys.map((key, colIndex) => <td key={`table-item-${rowIndex}-${colIndex}`}>{d[key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}