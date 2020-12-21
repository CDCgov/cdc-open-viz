/* eslint-disable react/jsx-props-no-spreading */
import 'react-app-polyfill/ie11';
import React, { useState, useContext, useEffect } from 'react';
import { useTable } from 'react-table';
import '../scss/_dataimport.scss';

import * as d3 from 'd3';
import Context from '../context';
// import BarChart from './BarChart';
// import csv from '../assets/data.csv';

export default function DataImport() {
  const { pageTitle } = useContext(Context);
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  const reader = new FileReader();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  function parseCsvFile() {
    const fileData = d3.csvParse(reader.result, (d) => d);

    // Validate Data

    // Format table data
    const newHeaders = [];
    const newRows = [];

    // format table header data
    fileData.columns.forEach((cell) => {
      const th = {};
      th.Header = cell;
      th.accessor = cell.replace(/[^A-Z0-9]/ig, '_');
      newHeaders.push(th);
    });
    setColumns(newHeaders);

    // format table data rows
    fileData.forEach((row) => {
      const rowArr = Object.entries(row);
      const td = {};
      rowArr.forEach((cell) => {
        // eslint-disable-next-line prefer-destructuring
        td[cell[0].replace(/[^A-Z0-9]/ig, '_')] = cell[1];
      });
      newRows.push(td);
    });
    setData(newRows);
  }

  function loadData() {
    // let renderData;

    const userData = document.querySelector('input[type=file]').files[0];

    if (userData) {
      const fileType = userData.type;
      reader.readAsText(userData);

      switch (fileType) {
        case 'text/csv':
          reader.addEventListener('load', parseCsvFile);
          break;
        case 'text/json':
          // code block
          break;
        default:
          // unsupported file type
      }
    } else {
      // this may be where we handle saved chart data?
      // for now it is wired to a file

      // renderData = d3.csv(csv).then((csvData) => {
      //   csvData.forEach((item) => {
      //     console.log(item);
      //   });
      // });
    }
  }

  useEffect(() => {
    // console.log('data: ', columns);
    // console.log('data: ', data);
    // document.title = `You clicked ${count} times`;
    // console.log(csv);
    // let dataTable = '';
    // d3.csv(csv).then(data => {
    //   data.forEach(item => {
    //     console.log(item);
    //   });
    // });
    // let test = d3.csv(csv);
    // console.log(loadData());
    // dataTable += '<table><tr><th>Hello</th><th>World</th></tr></table>';
    // document.getElementById('dataTable').insertAdjacentHTML('beforeend', dataTable);
  });

  return (
    <section className="container mt-5">
      <h2 className="mb-3">{ pageTitle }</h2>
      <input type="file" />
      <button type="button" onClick={() => loadData()}>Load</button>
      <table {...getTableProps()} className="data-import-preview">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                >
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
                  <td
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
