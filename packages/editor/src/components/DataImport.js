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

  const [externalURL, setExternalURL] = useState('')

  const errorMessages =
      {
        "emptyCols": "It looks like your column headers are missing some data. Please make sure all of your columns have titles and upload your file again.",
        "emptyData": "Your data is empty.",
        "dataType": "Your datatype is not supported.",
        "fileType": "The file type that you are trying to upload is not supported.",
        "formatting": "Please check the formatting of your data. JSON files need be formatted in an array of objects [ {\"name\":\"data1\", .... },{...},{...}]",
        "parseError": "There was an issue parsing your json file: ",
        "url404": "Error fetching or parsing data: ",
        "urlInvalid": "Please make sure to use a valid URL."
  };

  const [errors, setErrors] = useState([]);

  const dataTypes = ['.csv', '.json'];

  /**
   * validateData:
   * Check data for common issues
   */
  const validateData = async (rawData, mimeType) => {
    const errorsFound = []

    if ( rawData === null || rawData === 'undefined' ) {
      errorsFound.push(errorMessages.emptyData)
    }

    if (rawData[1] && typeof rawData[1][0] !== 'undefined' && mimeType === 'application/json') {
      // is the json a bunch of arrays instead of objects?
      errorsFound.push(errorMessages.formatting);
    }
    
    if (rawData.columns && rawData.columns.includes('')) {
      // are any of the column headers empty?
      errorsFound.push(errorMessages.emptyCols)
    }

    if(errorsFound.length > 0) {
      throw errorsFound;
    }

    return rawData;
  }

  const loadExternal = async () => {
    let dataURL = '';

    // Is URL valid?
    try {
      dataURL = new URL(externalURL);
    } catch {
      setErrors([errorMessages.urlInvalid]);
      return false;
    }

    let responseBlob = null;

    try {
      const response = await fetch(dataURL);
      const responseText = await response.text();

      const typeDictionary = {
        '.csv': 'text/csv',
        '.json': 'application/json'
      }

      const fileExtension = Object.keys(typeDictionary).find(extension => dataURL.pathname.endsWith(extension))

      // Manually construct blob instead of calling response.blob() to get around inconsistent mimeType inference
      responseBlob = new Blob([responseText], {
        type: typeDictionary[fileExtension]
      });
    } catch (err) {
      setErrors([errorMessages.url404 + err.toString()]);
    }
    
    return responseBlob;
  }

  const onDrop = useCallback(([uploadedFile]) => loadData(uploadedFile), [])

  /**
   * Handle loading data
   */
  const loadData = async (fileBlob = null) => {
    let fileData = fileBlob;

    // Get the raw data as text from the file
    if(null === fileData) {
      fileData = await loadExternal();
    }

    // Pull out mime type of file
    const { type: mimeType } = fileData;

    // Convert from blob into raw text
    fileData = await fileData.text();

    switch (mimeType) {
      case 'text/csv':
        fileData = d3.csvParse(fileData);
        break;
      case 'application/json':
        fileData = JSON.parse(fileData);
        break;
      default:
        setErrors([errorMessages.fileType]);
    }

    // Validate parsed data and set it
    try {
      fileData = await validateData(fileData, mimeType);
      setData(fileData);
    } catch (errors) {
      setErrors(errors);
    }
  }

  /**
   * DataTable component
   */
  const DataTable = () => {
    const [tableColumns, setTableColumns] = useState(null);

    const [tableRows, setTableRows] = useState(null);

    /**
     * populateColumns:
     * build columns for the table display
     */
    const populateColumns = (colData) => {
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
      setTableColumns(newHeaders);
      x = 0; // reset column counter for columns
    }

    /**
     * populateRows:
     * build rows for the table display
     */
    const populateRows = (rowData) => {
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
      // debugger;
      setTableRows(newRows)
    }

    useEffect(() => {
      populateColumns(data);
      populateRows(data);
    }, [])

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ columns: tableColumns, data: tableRows });

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
            <form className="input-group d-flex" onSubmit={(e) => e.preventDefault()}>
              <input id="external-data" type="text" className="form-control flex-grow-1 border-right-0" placeholder="e.g., https://data.cdc.gov/resources/file.json" aria-label="Load data from external URL" aria-describedby="load-data" value={externalURL} onChange={(e) => setExternalURL(e.target.value)} required />
              <button className="input-group-text btn btn-primary px-4" type="submit" id="load-data" onClick={() => loadData()}>Load</button>
            </form>
          </TabPane>
        </Tabs>
        {errors.map((message, index) => (<div className="error-box mt-2" key={`error-${index}`}><span>{message}</span> <CloseIcon className='inline-icon dismiss-error' onClick={() => setErrors( errors.filter((i) => i !== index) )} /></div>))}
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
        {/* {data ? <DataTable /> : <DataPlaceholder />} */}
      </div>
    </>
  );
}
