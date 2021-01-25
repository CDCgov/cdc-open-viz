import React, { useState, useEffect, useRef, useContext, useCallback } from 'react';
import {useDropzone} from 'react-dropzone'
import { useTable } from 'react-table';
import * as d3 from 'd3';

import GlobalState from '../context';
import '../scss/data-import.scss';
import TabPane from './TabPane';
import Tabs from './Tabs';

import LinkIcon from '../assets/icons/link.svg';
import FileUploadIcon from '../assets/icons/file-upload-solid.svg';
import CloseIcon from '../assets/icons/close.svg';

export default function DataImport() {
  const {data, setData} = useContext(GlobalState);

  const errorList =
      {
        "emptyCols": "It looks like your column headers are missing some data. Please make sure all of your columns have titles and upload your file again.",
        "emptyData": "Your data is empty.",
        "dataType": "Your datatype is not supported.",
        "fileType": "The file type that you are trying to upload is not supported.",
        "formatting": "Please check the formatting of your data. JSON files need be formatted in an array of objects [ {\"name\":\"data1\", .... },{...},{...}]",
        "parseError": "There was an issue parsing your json file:",
        "url404": "Check to make sure the URL is correct:",
        "urlInvalid": "Please make sure to use a valid URL."
  };

  const reader = new FileReader();

  const [columns, setColumns] = useState(null);

  const [error, setError] = useState(null);

  let urlInput = useRef(null);

  let dataUploadLabel = useRef(null);

  let errorPresent = false;

  const dataTypes = ['.csv', '.json'];

  const onDrop = useCallback(acceptedFiles => {
    const uploadedFile = acceptedFiles[0]
    const { type: fileType } = uploadedFile;

    reader.readAsText(uploadedFile);

    switch (fileType) {
      case 'text/csv':
        reader.addEventListener('load', parseCsvFile);
        break;
      case 'application/json':
        reader.addEventListener('load', parseJsonFile);
        break;
      default:
        setError(errorList.fileType);
    }
  }, [])

  /**
   * validateData:
   * Check data for common issues
   */
  function validateData(userData, dataType, errors = errorList) {
    setError(null);
    debugger;
    // debugger;
    if (userData[1] && typeof userData[1][0] !== 'undefined' && dataType === 'json') {
      // is the json a bunch of arrays instead of objects?
      errorPresent = true;
      debugger;
      setError(errors.formatting);

    } else if (userData.columns && userData.columns.includes('')) {
      // are any of the column headers empty?
      setError(errors.emptyCols);

    } else if ( userData === null || userData === 'undefined' ) {
      errorPresent = true;
      setError(errors.emptyData);
    }
  }

  /**
   * populateColumns:
   * build columns for the table display
   */
  function populateColumns(colData) {
    // Format table data
    const newHeaders = [];
    let x = 0;

    if (!colData.columns) {
      // create columns if they don't exist
      colData.columns = [];
      const tblRow = Object.entries(colData[0]);
      tblRow.forEach((item) => {
        colData.columns.push(item[0]);
      });
    }
    // format table header data
    colData.columns.forEach((cell) => {
      // create a placeholder to map data to
      const cellVal = (
        cell === ''
          ? `X.${x += 1}`
          : cell);
      const th = {};
      // if we generated the cell value write nothing to the th
      th.Header = (
        cellVal === `X.${x}`
          ? ''
          : cellVal);
      th.accessor = cellVal.replace(/[^A-Z0-9]/ig, '_');

      newHeaders.push(th);
    });
    setColumns(newHeaders);
    x = 0; // reset column counter for columns
  }

  /**
   * populateRows:
   * build rows for the table display
   */
  function populateRows(rowData) {
    // Format table data
    const newRows = [];
    let x = 0;
    // format table data rows
    rowData.forEach((row) => {
      const rowArr = Object.entries(row);
      const td = {};
      rowArr.forEach((cell) => {
        // fill in empty cells
        const cellVal = (
          cell[0] === ''
            ? `X_${x += 1}`
            : cell[0].replace(/[^A-Z0-9]/ig, '_'));
        td[cellVal] = cell[1];
      });
      x = 0; // reset column counter for rows
      newRows.push(td);
    });

    setData(newRows);
  }

  /**
   * CSV Parsing: collect the data and format it
   * to be handled by React-Table
   */
  function parseCsvFile( extData = null ) {
    // check for external data
    const fileData = extData.length ? extData : d3.csvParse(reader.result, (d) => d);

    validateData(fileData, 'csv');

    if (!errorPresent) {
      populateColumns(fileData);
      populateRows(fileData);
    }
  }

  /**
   * JSON Parsing: collect the data and format it
   * to be handled by React-Table
   */
  function parseJsonFile( extData = null, errors = errorList ) {
    let jsonData;
    // check for external data
    if ( extData.length ) {
      jsonData = extData;
      validateData(jsonData, 'json');
    } else {
      try {
        jsonData = JSON.parse(reader.result);
        validateData(jsonData, 'json');
      } catch (err) {
        errorPresent = true;
        setError(`${errors.parseError} ${err.toString()}`);
      }
    }

    if (!errorPresent) {
      populateColumns(jsonData);
      populateRows(jsonData);
    }
  }

  /**
   * Handle loading data from user
   * submitted files and external URLs
   */
  function loadData(dataType, dataTypes, errors = errorList) {
    errorPresent = null;

    switch (dataType) {
      case 'external': {
        const externalInput = urlInput.current.value;
        const urlRegEx = new RegExp(/^https?:\/\/\w+(\.\w+)*(:[0-9]+)?(\/.*)?$/);
        // create a URL to make error checking easier
        if ( urlRegEx.test( externalInput )  ) {
          const dataUrl  = new URL(externalInput);
          const fileName = dataUrl.pathname.split('/').pop();
          const fileExt  = fileName.slice( ( fileName.lastIndexOf(".") - 1 ) + 1 );
          // does the URL contain an acceptable filetype?
          if ( dataTypes.includes( fileExt ) ) {
            switch (fileExt) {
              case '.csv':
                d3.csv(dataUrl)
                  .then(function(csvData) {
                    parseCsvFile(csvData);
                  })
                  .catch(err => { 
                    errorPresent = true;
                    setError( errors.url404 + ": " + err.toString() )
                  });
                break;
              case '.json':
                d3.json(dataUrl)
                  .then(function(jsonData) {
                    parseJsonFile(jsonData);
                  })
                  .catch(err => { 
                    errorPresent = true;
                    setError( errors.url404 + err.toString() )
                  });
                break;
              default:
                setError(errors.fileType);
          }
          } else {
            setError( fileExt + ' is not an acceptible document type. Please upload your document in ' + dataTypes.join(', ') );
          }
        } else {
          setError(errors.urlInvalid);
        }
        break;
      }
      default: {
        setError(errors.dataType);
      }
    }
  }

  /**
   * DataTable component
   */
  const DataTable = () => {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ columns, data });

    return (
      <table className="table-responsive table-bordered table-hover" {...getTableProps()}>
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
    );
  };

  const DataPlaceholder = () => (
    <div className="data-import-preview">
      <div className="overlay-empty">Add Data to Get Started</div>
      <table className="table-bordered table-empty">
        <thead>
          <tr><th>Column 1</th><th>Column 2</th><th>Column 3</th></tr>
        </thead>
        <tbody>
          <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
          <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
          <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
          <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
          <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
          <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        </tbody>
      </table>
    </div>
  );

  function onEnter(e) {
    e.preventDefault(); //prevent from default on enter
  }

  useEffect(() => {
    let { current } = urlInput;
  });

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <>
      <div className="left-col px-4">
        <Tabs className="mb-4">
          <TabPane title="Upload File" icon={<FileUploadIcon className="inline-icon" />}>
            <div className={isDragActive ? 'drag-active cdcdataviz-file-selector' : 'cdcdataviz-file-selector'} {...getRootProps()}>
              <FileUploadIcon />
              <input {...getInputProps()} />
              {
                isDragActive ?
                <p>Drop file here</p> :
                <p>Drag file to this area, or <span>select a file</span>.</p>
              }
            </div>
          </TabPane>
          <TabPane title="Load from URL" icon={<LinkIcon className="inline-icon" />}>
            <form className="input-group d-flex" onSubmit={onEnter}>
              <input id="external-data" type="text" className="form-control flex-grow-1 border-right-0" placeholder="e.g., https://data.cdc.gov/resources/file.json" aria-label="Load data from external URL" aria-describedby="load-data" ref={urlInput} />
              <button className="input-group-text btn btn-primary px-4" type="submit" id="load-data" onClick={() => loadData('external', dataTypes)}>Load</button>
            </form>
          </TabPane>
        </Tabs>
        {error && <div className="error-box mt-2"><span>{error}</span> <CloseIcon className='inline-icon dismiss-error' onClick={() => setError(null)} /></div>}
        <p className="footnote mt-2 mb-4">Supported file types: {dataTypes.join(', ')}</p>
        <section className="cdcdataviz-guidance info-box">
          <h4>Data Format Help</h4>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</li>
            <li>Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.Proin sodales pulvinar tempor.</li>
            <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
          </ul>
        </section>
      </div>
      <div className="right-col">
        {data ? <DataTable /> : <DataPlaceholder />}
      </div>
    </>
  );
}
