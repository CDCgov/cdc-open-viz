import React, {
  useEffect, useState, useMemo, memo
} from 'react';
import {
  useTable, useSortBy, useResizeColumns, useBlockLayout
} from 'react-table';
import Papa from 'papaparse';
import externalIcon from '../images/external-link.svg';

const DataTable = (props) => {
  const {
    tableTitle, mapTitle, data, showDownloadButton, processedData, headerColor, expandDataTable, columns, displayDataAsText, applyLegendToValue, displayGeoName, navigationHandler, processedLegend
  } = props;

  const [expanded, setExpanded] = useState(expandDataTable);

  const [accessibilityLabel, setAccessibilityLabel] = useState('');

  // Catch all sorting method used on load by default but also on user click
  // Having a custom method means we can add in any business logic we want going forward
  const customSort = (a, b) => {
    const digitRegex = /\d+/;

    const hasNumber = (value) => digitRegex.test(value);

    // force null and undefined to the bottom
    a = a === null || a === undefined ? '' : a;
    b = b === null || b === undefined ? '' : b;

    // convert any strings that are actually numbers to proper data type
    const aNum = Number(a);

    if (!Number.isNaN(aNum)) {
      a = aNum;
    }

    const bNum = Number(b);

    if (!Number.isNaN(bNum)) {
      b = bNum;
    }

    // remove iso code prefixes
    if (typeof a === 'string') {
      a = a.replace('us-', '');
      a = displayGeoName(a);
    }

    if (typeof b === 'string') {
      b = b.replace('us-', '');
      b = displayGeoName(b);
    }

    // force any string values to lowercase
    a = typeof a === 'string' ? a.toLowerCase() : a;
    b = typeof b === 'string' ? b.toLowerCase() : b;

    // If the string contains a number, remove the text from the value and only sort by the number. Only uses the first number it finds.
    if (typeof a === 'string' && hasNumber(a) === true) {
      a = a.match(digitRegex)[0];

      a = Number(a);
    }

    if (typeof b === 'string' && hasNumber(b) === true) {
      b = b.match(digitRegex)[0];

      b = Number(b);
    }

    // When comparing a number to a string, always send string to bottom
    if (typeof a === 'number' && typeof b === 'string') {
      return 1;
    }

    if (typeof b === 'number' && typeof a === 'string') {
      return -1;
    }

    // Return either 1 or -1 to indicate a sort priority
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    // returning 0, undefined or any falsey value will use subsequent sorts or
    // the index as a tiebreaker
    return 0;
  };

  // Optionally wrap cell with anchor if config defines a navigation url
  const getCellAnchor = (markup, row) => {
    if (columns.navigate && row[columns.navigate.name]) {
      markup = (
        <span
          onClick={() => navigationHandler(row[columns.navigate.name])}
          className="table-link"
          title="Click for more information (Opens in a new window)"
          role="link"
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              navigationHandler(row[columns.navigate.name]);
            }
          }}
        >
          {markup}
          <img aria-hidden="true" alt="External Link" src={externalIcon} />
        </span>
      );
    }

    return markup;
  };

  const DownloadButton = memo(({ data }) => (
    <a
      download={`${mapTitle}.csv`}
      href={`data:text/csv;base64,${btoa(Papa.unparse(data))}`}
      aria-label="Download this data in a CSV file format."
      className={`${headerColor} btn btn-download no-border`}
    >
      Download Data (CSV)
    </a>
  ));

  // Creates columns structure for the table
  const tableColumns = useMemo(() => {
    const newTableColumns = [];

    Object.keys(columns).forEach((column) => {
      if (columns[column].dataTable === true && columns[column].name !== '') {
        const newCol = {
          Header: columns[column].label || columns[column].name,
          id: column,
          accessor: (row) => {
            if (processedData) {
              return processedData[row][columns[column].name];
            }

            return null;
          },
          sortType: (a, b) => customSort(a.values[column], b.values[column])
        };

        if (column === 'geo') {
          newCol.Header = 'Location';
          newCol.Cell = ({ row, value, ...props }) => {
            const rowObj = processedData[row.original];

            const legendColor = applyLegendToValue(rowObj);

            let labelValue = displayGeoName(row.original);

            labelValue = getCellAnchor(labelValue, rowObj);

            const cellMarkup = (
              <>
                <span className="legend-color" style={{ backgroundColor: legendColor[0] }} />
                {labelValue}
              </>
            );

            return cellMarkup;
          };
        } else {
          newCol.Cell = ({ value }) => {
            const cellMarkup = displayDataAsText(value, column, true);

            return cellMarkup;
          };
        }

        newTableColumns.push(newCol);
      }
    });

    return newTableColumns;
  }, [columns]);

  const tableData = useMemo(
    () => Object.keys(processedData).filter((key) => applyLegendToValue(processedData[key])).sort((a, b) => customSort(a, b)),
    [processedData, processedLegend]
  );

  // Change accessibility label depending on expanded status
  useEffect(() => {
    const expandedLabel = 'Accessible data table.';
    const collapsedLabel = 'Accessible data table. This table is currently collapsed visually but can still be read using a screen reader.';

    if (expanded === true && accessibilityLabel !== expandedLabel) {
      setAccessibilityLabel(expandedLabel);
    }

    if (expanded === false && accessibilityLabel !== collapsedLabel) {
      setAccessibilityLabel(collapsedLabel);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded]);

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
    <section className="data-table" aria-label={accessibilityLabel}>
      <div
        className={expanded ? 'data-table-heading' : 'collapsed data-table-heading'}
        onClick={() => { setExpanded(!expanded); }}
        tabIndex="0"
        onKeyDown={(e) => { if (e.keyCode === 13) { setExpanded(!expanded); } }}
      >
        {tableTitle}
      </div>
      <table className={expanded ? '' : 'sr-only'} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th tabIndex="0" {...column.getHeaderProps(column.getSortByToggleProps())} className={column.isSorted ? column.isSortedDesc ? ' sort-desc' : ' sort-asc' : ''}>
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
      {showDownloadButton === true && <DownloadButton data={data} />}
    </section>
  );
};

export default DataTable;