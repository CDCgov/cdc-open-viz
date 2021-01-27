import React, { useState, useContext, useCallback } from 'react';
import {useDropzone} from 'react-dropzone'
import {csvParse} from 'd3';

import GlobalState from '../context';
import '../scss/data-import.scss';
import TabPane from './TabPane';
import Tabs from './Tabs';
import PreviewDataTable from './PreviewDataTable'

import LinkIcon from '../assets/icons/link.svg';
import FileUploadIcon from '../assets/icons/file-upload-solid.svg';
import CloseIcon from '../assets/icons/close.svg';

export default function DataImport() {
  const {data, setData} = useContext(GlobalState);

  const [externalURL, setExternalURL] = useState('')

  const maxFileSize = 5; // Represents number of MB. Maybe move this to a prop eventually but static for now.
  const supportedDataTypes = {
    '.csv': 'text/csv',
    '.json': 'application/json'
  };

  const errorMessages = {
    emptyCols: "It looks like your column headers are missing some data. Please make sure all of your columns have titles and upload your file again.",
    emptyData: "Your data is empty.",
    dataType: "Your datatype is not supported.",
    fileType: "The file type that you are trying to upload is not supported.",
    formatting: "Please check the formatting of your data.",
    failedFetch: "Error fetching or parsing data: ",
    urlInvalid: "Please make sure to use a valid URL.",
    fileTooLarge: `File is too large. Maximum file size is ${maxFileSize}MB.`
  };

  const [errors, setErrors] = useState([]);

  /**
   * validateData:
   * Check data for common issues
   */
  const validateData = async (parsedData) => {
    const errorsFound = []

    // Empty data
    if ( 0 === parsedData.length ) {
      errorsFound.push(errorMessages.emptyData)
    }
    
    // Empty columns headings?
    if (parsedData.columns.includes('')) {
      errorsFound.push(errorMessages.emptyCols)
    }

    // Does it have the correct data structure?
    if (parsedData.filter(row =>  row.constructor !== Object).length > 0) {
      errorsFound.push(errorMessages.formatting);
    }

    if(errorsFound.length > 0) {
      throw errorsFound;
    }

    return parsedData;
  }

  const loadExternal = async () => {
    let dataURL = '';
    // Is URL valid?
    try {
      dataURL = new URL(externalURL);
    } catch {
      throw errorMessages.urlInvalid;
    }

    let responseBlob = null;

    try {
      const response = await fetch(dataURL);
      const responseText = await response.text();

      const fileExtension = Object.keys(supportedDataTypes).find(extension => dataURL.pathname.endsWith(extension))

      // Manually construct blob instead of calling response.blob() to get around inconsistent mimeType inference
      responseBlob = new Blob([responseText], {
        type: typeDictionary[fileExtension]
      });
    } catch (err) {
      const errorMsg = errorMessages.failedFetch + err.toString();
      throw errorMsg;
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
      try {
        fileData = await loadExternal();
      } catch (error) {
        setErrors([error]);
        return;
      }
    }

    // Pull out mime type of file
    const { type: mimeType } = fileData;

    // Check if file is too big
    if(fileData.size > (maxFileSize * 1048576) ) {
      setErrors([errorMessages.fileTooLarge]);
      return;
    }
    
    // Convert from blob into raw text
    fileData = await fileData.text();

    switch (mimeType) {
      case 'text/csv':
        fileData = csvParse(fileData);
        break;
      case 'application/json':
        fileData = JSON.parse(fileData);
        break;
      default:
        setErrors([errorMessages.fileType]);
        return;
    }

    // Validate parsed data and set if no issues.
    try {
      fileData = await validateData(fileData);
      setData(fileData);
    } catch (errors) {
      setErrors(errors);
    }
  }

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

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

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
              <input id="external-data" type="text" className="form-control flex-grow-1 border-right-0" placeholder="e.g., https://data.cdc.gov/resources/file.json" aria-label="Load data from external URL" aria-describedby="load-data" value={externalURL} onChange={(e) => setExternalURL(e.target.value)} />
              <button className="input-group-text btn btn-primary px-4" type="submit" id="load-data" onClick={() => loadData()}>Load</button>
            </form>
          </TabPane>
        </Tabs>
        {errors.map((message, index) => (<div className="error-box mt-2" key={`error-${index}`}><span>{message}</span> <CloseIcon className='inline-icon dismiss-error' onClick={() => setErrors( errors.filter((val, i) => i !== index) )} /></div>))}
        <p className="footnote mt-2 mb-4">Supported file types: {Object.keys(supportedDataTypes).join(', ')}. Maximum file size {maxFileSize}MB.</p>
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
        {data ? <PreviewDataTable data={data} /> : <DataPlaceholder />}
      </div>
    </>
  );
}
