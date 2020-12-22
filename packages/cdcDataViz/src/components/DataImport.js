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
  const [uploadFile, setUploadFile] = useState(false);

  const dataTypes = ['.csv', '.json'];

  const reader = new FileReader();

  const toggleUpload = (currState) => {
    setUploadFile(!currState);

    if (!currState) {
      document.getElementById('file-uploader').click();
    } else {
      // remove old table data ....
    }
  };

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
    // update the label with the document name
    let fileUpload = document.getElementById('file-uploader').value;
    document.getElementById('data-upload-label').innerHTML = fileUpload;

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
    console.log('data: ', data);
    console.log('uploadFile: ', uploadFile);
    // debugger;
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
    <section className="container-fluid mt-5">
      <h2 className="mb-3">{ pageTitle }</h2>
      <div className={(uploadFile) ? 'loaded' : 'not-loaded'}>
        <div className="row">
          <div className="col col data-loader">
            <div className="mb-2">
              <button className="btn btn-primary btn-block upload-file-btn" type="button" htmlFor="file-uploader" onClick={() => toggleUpload(uploadFile)}>Upload File</button>
              {/* <input id="file-uploader" type="file" accept=".csv" onChange={() => loadData()} /> */}
              {/* <button className="clear-button" type="button" onClick={() => toggleUpload(uploadFile)}>Clear</button> */}

              <form className="input-group loader-ui">
                <div className="custom-file">
                  <input type="file" className="custom-file-input" id="file-uploader" accept=".csv" onChange={() => loadData()} />
                  <label id="data-upload-label" className="custom-file-label" for="file-uploader">Choose file</label>
                </div>
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button" onClick={() => toggleUpload(uploadFile)}>Clear</button>
                </div>
              </form>
              {/* <div className="fileinputs">
	<input type="file" className="file" />
	<div className="fakefile">
		<input />
    <button className="btn btn-primary" type="button" onClick={() => toggleUpload(uploadFile)}>Clear</button>

	</div>
</div> */}
            </div>
            <p>Upload a data file to use ({dataTypes.join(', ')})</p>
            <p className="pb-3">Data Format Help</p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</li>
              <li>Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.Proin sodales pulvinar tempor.</li>
              <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
            </ul>
          </div>
          <div className="col col-sm-8 data-import-preview">
            { data.length < 0 ? 'render table action buttons' : '' }
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>
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
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
