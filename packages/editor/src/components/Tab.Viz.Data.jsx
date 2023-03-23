import React, { useState, useContext, useEffect } from 'react'

// Third Party
import axios from 'axios'
import { csvParse } from 'd3'
import { useDropzone } from 'react-dropzone'

// Context
import ConfigContext from '../ConfigContext'

// Helpers
import DataTransform from '@cdc/core/helpers/data/DataTransform'

// Components - Core
import AlertBox from '@cdc/core/components/ui/AlertBox'
import Button from '@cdc/core/components/element/Button'
import DataDesigner from '@cdc/core/components/manager/DataDesigner'
import GuidanceBlock from '@cdc/core/components/element/GuidanceBlock'
import Icon from '@cdc/core/components/ui/Icon'
import InputCheckbox from '@cdc/core/components/input/InputCheckbox'
import InputGroup from '@cdc/core/components/input/InputGroup'
import InputText from '@cdc/core/components/input/InputText'

// Components - Local
import PreviewDataTable from './PreviewDataTable'
import SampleDataContext from './../samples/SampleDataContext'
import SampleData from './SampleData'
import Tabs from './Tabs'

const TabVizData = () => {
  const { config, setConfig, errors, setErrors, errorMessages, maxFileSize, setActiveTab, tempConfig, setTempConfig, sharepath } = useContext(ConfigContext)

  const transform = new DataTransform()

  const [ externalURL, setExternalURL ] = useState(config.dataFileSourceType === 'url' ? config.dataFileName : config.dataUrl || '')

  const [ keepURL, setKeepURL ] = useState(!!config.dataUrl)

  const [ addingDataset, setAddingDataset ] = useState(config.type === 'dashboard' || !config.data)

  const [ editingDataset, setEditingDataset ] = useState()

  const supportedDataTypes = {
    '.csv': 'text/csv',
    '.json': 'application/json'
  }

  const displaySize = size => {
    if (size === undefined) return ''

    if (size > Math.pow(1024, 3)) {
      return Math.round((size / Math.pow(1024, 3)) * 100) / 100 + ' GB'
    } else if (size > Math.pow(1024, 2)) {
      return Math.round((size / Math.pow(1024, 2)) * 100) / 100 + ' MB'
    } else if (size > 1024) {
      return Math.round((size / 1024) * 100) / 100 + ' KB'
    } else {
      return size + ' B'
    }
  }

  /**
   * Check to see all series for the viz exists in the new dataset
   */
  const dataExists = (newData, oldSeries, oldAxisX) => {
    // Loop through old series to make sure each exists in the new data

    // TODO: move to forEach?
    // eslint-disable-next-line array-callback-return
    oldSeries.map(function (currentValue, index, newData) {
      if (!newData.find(element => element.dataKey === currentValue.dataKey)) return false
    })

    // Is the X Axis still in the dataset?
    if (newData.columns.indexOf(oldAxisX) < 0) return false

    return true
  }

  const loadExternal = async () => {
    let dataURL = ''
    // Is URL valid?
    try {
      dataURL = new URL(externalURL)
    } catch {
      throw errorMessages.urlInvalid
    }
    let responseBlob = null

    const fileExtension = Object.keys(supportedDataTypes).find(extension => dataURL.pathname.endsWith(extension))

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.get(dataURL, {
        responseType: 'blob'
      }).then(response => {
        responseBlob = response.data

        // Sometimes the files are coming in as plain text types... Maybe when saved from Macs
        if (fileExtension === '.csv' && responseBlob.type === 'text/plain') {
          responseBlob = responseBlob.slice(0, responseBlob.size, 'text/csv')
        } else if (fileExtension === '.json' && responseBlob.type === 'text/plain') {
          responseBlob = responseBlob.slice(0, responseBlob.size, 'application/json')
        }
      })
    } catch (err) {
      console.error(err)

      const error = err.toString()

      if (Object.values(errorMessages).includes(err)) {
        throw error
      }

      throw errorMessages.failedFetch
    }

    return responseBlob
  }

  const onDrop = ([ uploadedFile ]) => loadData(uploadedFile, editingDataset, editingDataset)

  /**
   * Handle loading data
   */
  const loadData = async (fileBlob = null, fileName, editingDatasetKey) => {
    let fileData = fileBlob
    let fileSource = fileData?.path ?? fileName ?? null
    let fileSourceType = 'file'

    // Get the raw data as text from the file
    if (null === fileData) {
      fileSourceType = 'url'
      try {
        fileData = await loadExternal()
        fileSource = externalURL
      } catch (error) {
        setErrors([ error ])
        return
      }
    }

    let fileSize = fileData.size

    // Check if file is too big
    if (fileSize > maxFileSize * 1048576) {
      setErrors([ errorMessages.fileTooLarge ])
      return
    }

    let path = fileBlob?.name || externalURL || fileName

    // checking the file source type allows us to handle real urls better
    // For example, query parameters in API's and cache busting strings
    // file matching can handle .csv and .json, but doesn't handle
    // .csv?version=1 or .json?version=1
    const handleFileExtension = fileSourceType => {
      let fileExtension
      if (fileSourceType === 'file') {
        fileExtension = path.match(/(?:\.([^.]+))?$/g)

        if (fileExtension.length === 0) {
          fileExtension = '.csv'
        } else {
          fileExtension = fileExtension[0]
        }
      }

      if (fileSourceType === 'url') {
        let urlData = new URL(path)
        fileExtension = Object.keys(supportedDataTypes).find(extension => urlData.pathname.endsWith(extension))
      }

      return fileExtension
    }

    let fileExtension = handleFileExtension(fileSourceType)
    let mimeType = supportedDataTypes[fileExtension]

    // Convert from blob into raw text
    // Have to use FileReader instead of just .text because IE11 and the polyfills for this are bugged
    let filereader = new FileReader()

    // Set encoding for CSV files - needed to render special characters properly
    let encoding = mimeType === 'text/csv' ? 'utf-8' : ''

    filereader.onload = function () {
      let text = this.result

      switch (mimeType) {
        case 'text/csv':
          text = csvParse(text)
          break
        case 'text/plain':
        case 'application/json':
          try {
            text = JSON.parse(text)
          } catch (errors) {
            setErrors([ errorMessages.formatting ])
            return
          }
          break
        default:
          setErrors([ errorMessages.fileType ])
          return
      }

      // Validate parsed data and set if no issues.
      try {
        text = transform.autoStandardize(text)

        if (config.data && config.series) {
          if (dataExists(text, config.series, config?.xAxis.dataKey)) {
            if (config.type === 'dashboard') {
              let newDatasets = { ...config.datasets }

              Object.keys(newDatasets).forEach(datasetKey => (newDatasets[datasetKey].preview = false))

              newDatasets[editingDatasetKey || fileSource] = {
                data: text, // new data
                dataFileSize: fileSize,
                dataFileName: fileSource, // new file source
                dataFileSourceType: fileSourceType, // new file source type
                dataFileFormat: fileExtension.replace('.', '').toUpperCase(),
                preview: true
              }

              if (keepURL) {
                newDatasets[editingDatasetKey || fileSource].dataUrl = fileSource
              }

              setConfig({
                ...config,
                ...tempConfig,
                dataset: newDatasets
              })
            } else {
              let newConfig = {
                ...config,
                ...tempConfig,
                data: text, // new data
                dataFileName: fileSource, // new file source
                dataFileSourceType: fileSourceType, // new file source type
                formattedData: transform.developerStandardize(text, config.dataDescription)
              }
              if (keepURL) {
                newConfig.dataUrl = fileSource
              }
              setConfig(newConfig)
            }
          } else {
            resetEditor(
              {
                data: text,
                dataFileName: fileSource,
                dataFileSourceType: fileSourceType
              },
              'It appears that your data does not contain all of the columns that your last dataset contained. Continuing will reset your configuration. Do you want to continue?'
            )
          }
        } else {
          if (config.type === 'dashboard') {
            let newDatasets = { ...config.datasets }

            Object.keys(newDatasets).forEach(datasetKey => (newDatasets[datasetKey].preview = false))

            newDatasets[editingDatasetKey || fileSource] = {
              data: text, // new data
              dataFileSize: fileSize,
              dataFileName: fileSource, // new file source
              dataFileSourceType: fileSourceType, // new file source type
              dataFileFormat: fileExtension.replace('.', '').toUpperCase(),
              preview: true
            }

            if (keepURL) {
              newDatasets[editingDatasetKey || fileSource].dataUrl = fileSource
            }

            setConfig({ ...config, datasets: newDatasets })
          } else {
            let newConfig = {
              ...config,
              ...tempConfig,
              data: text, // new data
              dataFileName: fileSource, // new file source
              dataFileSourceType: fileSourceType, // new file source type
              formattedData: transform.developerStandardize(text, config.dataDescription) // new file source type
            }
            if (keepURL) {
              newConfig.dataUrl = fileSource
            }
            setConfig(newConfig)
          }
        }

        if (editingDataset) {
          setEditingDataset(undefined)
        }
        setAddingDataset(false)
        setExternalURL('')
        setKeepURL(false)
      } catch (err) {
        setErrors(err)
      }
    }
    filereader.readAsText(fileData, encoding)
  }

  useEffect(() => {
    let newConfig = { ...config }
    if (tempConfig !== null) {
      newConfig = { ...tempConfig }
    }

    if (undefined === config.formattedData && config.dataDescription) {
      const formattedData = transform.developerStandardize(config.data, config.dataDescription)

      if (formattedData) newConfig.formattedData = formattedData
    }

    if (tempConfig !== null) setTempConfig(null)

    setConfig(newConfig)
  }, []) // eslint-disable-line

  const updateDescriptionProp = (visualizationKey, datasetKey, key, value) => {
    if (config.type === 'dashboard') {
      let dataDescription = { ...config.datasets[datasetKey].dataDescription, [key]: value }
      let formattedData = transform.developerStandardize(config.datasets[datasetKey].data, dataDescription)

      let newDatasets = { ...config.datasets }
      newDatasets[datasetKey] = { ...newDatasets[datasetKey], dataDescription, formattedData }

      setConfig({ ...config, datasets: newDatasets })
    } else {
      let dataDescription = { ...config.dataDescription, [key]: value }
      let formattedData = transform.developerStandardize(config.data, dataDescription)

      setConfig({ ...config, formattedData, dataDescription })
    }
  }

  const changeKeepURL = (value, editingDatasetKey) => {
    if (editingDatasetKey) {
      let newDatasets = { ...config.datasets }
      if (value === false) {
        delete newDatasets[editingDatasetKey].dataUrl
      } else {
        newDatasets[editingDatasetKey].dataUrl = newDatasets[editingDatasetKey].dataFileName
      }
      setConfig({ ...config, datasets: newDatasets })
    } else if (config.type !== 'dashboard') {
      let newConfig = { ...config }
      if (value === false) {
        delete newConfig.dataUrl
      } else {
        newConfig.dataUrl = newConfig.dataFileName
      }
      setConfig(newConfig)
    }
    setKeepURL(value)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  const { getRootProps: getRootProps2, getInputProps: getInputProps2, isDragActive: isDragActive2 } = useDropzone({ onDrop })

  const loadFileFromUrl = (url, editingDatasetKey) => {
    // const extUrl = (url) ? url : config.dataFileName // set url to what is saved in config unless the user has entered something

    return (
      <>
        <form onSubmit={e => e.preventDefault()}>
          <InputGroup className="mb-1">
            <InputText type="text"
                       placeholder="e.g., https://data.cdc.gov/resources/file.json"
                       onChange={(e) => setExternalURL(e.target.value)}
                       aria-describedby="load-data"
                       aria-label="Load data from external URL"
                       value={externalURL}
            />
            <Button type="submit" id="load-data" onClick={() => loadData(null, externalURL, editingDatasetKey)}>Load</Button>
          </InputGroup>
        </form>
        <small className="mb-2">
          Supported file types: {Object.keys(supportedDataTypes).join(', ')}. Maximum file size {maxFileSize}MB.
        </small>
        <InputCheckbox className="mb-4"
                       label="Always load from URL (normally will only pull once)"
                       onChange={() => changeKeepURL(!keepURL, editingDatasetKey)}
                       checked={keepURL}
        />
      </>
    )
  }

  const resetEditor = (config = {}, message = 'Are you sure you want to do this?') => {
    config.newViz = true

    const confirmDataReset = window.confirm(message)

    if (confirmDataReset === true) {
      setErrors([])
      setTempConfig(null)
      setConfig(config)
      setAddingDataset(true)
    }
  }

  const resetButton = () => {
    return (
      //TODO: COVE Refactor - Convert to Modal
      <Button className="cove-button--warn" style={{ height: '2.5rem' }}
              onClick={() => resetEditor({ type: config.type, visualizationType: config.visualizationType }, 'Reseting will remove your data and settings. Do you want to continue?')}
              flexCenter>
        Clear <Icon className="ml-1" display="close"/>
      </Button>
    )
  }

  const setGlobalDatasetProp = (datasetKey, prop, value) => {
    let newDatasets = { ...config.datasets }

    if (value === true) {
      Object.keys(newDatasets).forEach(datasetKeyIter => {
        if (datasetKeyIter !== datasetKey) {
          newDatasets[datasetKeyIter][prop] = false
        } else {
          newDatasets[datasetKeyIter][prop] = true
        }
      })
    } else {
      newDatasets[datasetKey][prop] = value
    }

    setConfig({ ...config, datasets: newDatasets })
  }

  const removeDataset = datasetKey => {
    let newDatasets = { ...config.datasets }
    let newVisualizations = { ...config.visualizations }

    Object.keys(newVisualizations).forEach(vizKey => {
      if (newVisualizations[vizKey].dataKey === datasetKey) {
        delete newVisualizations[vizKey].dataKey
      }
    })

    delete newDatasets[datasetKey]

    setConfig({ ...config, datasets: newDatasets, visualizations: newVisualizations })
  }

  const renameDataset = (oldName, newName) => {
    if (oldName === newName) return

    let newDatasets = { ...config.datasets }
    let newVisualizations = { ...config.visualizations }

    let suffix = 2
    let originalName = newName
    while (newDatasets[newName]) {
      newName = originalName + '-' + suffix
      suffix++
    }

    newDatasets[newName] = newDatasets[oldName]
    delete newDatasets[oldName]

    Object.keys(newVisualizations).forEach(vizKey => {
      if (newVisualizations[vizKey].dataKey === oldName) {
        newVisualizations[vizKey].dataKey = newName
      }
    })

    setConfig({ ...config, datasets: newDatasets, visualizations: newVisualizations })
  }

  let previewData
  let configureData
  let readyToConfigure = false

  if (config.type === 'dashboard') {
    readyToConfigure = Object.keys(config.datasets).length > 0
    Object.keys(config.datasets).forEach(datasetKey => {
      if (config.datasets[datasetKey].preview) {
        previewData = config.datasets[datasetKey].data
      }
    })
  } else {
    previewData = config.data
    configureData = config
    readyToConfigure = !!config.formattedData
  }

  // Box plots skip the data description steps.
  // If we have data and the visualizations is a box plot proceed...
  if ((config.visualizationType === 'Box Plot' && config.data) || config.visualizationType === 'Scatter Plot') {
    readyToConfigure = true
  }

  const showDataDesigner = config.visualizationType !== 'Box Plot' && config.visualizationType !== 'Scatter Plot'

  return (
    <div className="cove-wizard__grid">
      <div className="cove-wizard__grid--left">
        <div className="cove-wizard__data">
          {config.type === 'dashboard' && Object.keys(config.datasets).length > 0 && (
            <>
              <div className="cove-heading--3 mb-2">Data Sources</div>
              <table className="cove-wizard__data-sources__table mb-4">
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Size</th>
                  <th>Type</th>
                  <th></th>
                  <th colSpan="3" style={{ textAlign: 'right' }}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {Object.keys(config.datasets).map(
                  datasetKey =>
                    config.datasets[datasetKey].dataFileName && (
                      <tr key={`tr-${datasetKey}`}>
                        <td>
                          <InputText className="mb-0" type="text" value={datasetKey} onBlur={e => renameDataset(datasetKey, e.target.value)}/>
                        </td>
                        <td>{displaySize(config.datasets[datasetKey].dataFileSize)}</td>
                        <td>{config.datasets[datasetKey].dataFileFormat}</td>
                        <td/>
                        <td colSpan="3" style={{ textAlign: 'right' }}>
                          <Button className="mr-1" onClick={() => setGlobalDatasetProp(datasetKey, 'preview', true)}>
                            Preview Data
                          </Button>
                          <Button className="mr-1" onClick={() => {
                            if (editingDataset === datasetKey) {
                              setEditingDataset(undefined)
                              setExternalURL('')
                              setKeepURL(false)
                            } else {
                              setEditingDataset(datasetKey)
                              setExternalURL(config.datasets[datasetKey].dataUrl || config.datasets[datasetKey].dataFileName)
                              setKeepURL(!!config.datasets[datasetKey].dataUrl)
                            }
                          }}>
                            Edit Data
                          </Button>
                          <Button className="cove-button--warn" onClick={() => removeDataset(datasetKey)}>
                            <Icon display="close"/>
                          </Button>
                        </td>
                      </tr>
                    )
                )}
                </tbody>
              </table>
            </>
          )}

          {configureData && configureData.data && (
            <>
              {config.type !== 'dashboard' && (
                <>
                  <div className="cove-heading--3 mb-2">Data Source</div>
                  <div className="cove-wizard__data-designer__source">
                    {config.dataFileSourceType === 'file' && (
                      <>
                        <div
                          className={`cove-wizard__file-selector cove-wizard__file-selector--loaded${isDragActive2 ? ' drag-active ' : ''}`}
                          {...getRootProps2()}
                        >
                          <input {...getInputProps2()} />
                          <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {isDragActive2
                              ? 'Drop file here...'
                              : <>
                                <Icon display="fileUpload" className="cove-wizard__file-selector--file-icon"/>
                                <span className="cove-wizard__file-selector--file-name">
                                {config.dataFileName ?? 'Replace data file'}
                              </span>
                              </>
                            }
                          </p>
                        </div>
                        <div>{resetButton()}</div>
                      </>
                    )}

                    {config.dataFileSourceType === 'url' && (
                      <div className="url-source-options">
                        <div>{loadFileFromUrl(externalURL)}</div>
                        <div>{resetButton()}</div>
                      </div>
                    )}
                  </div>
                  <small className="mt-1 mb-4">
                    Supported file types: {Object.keys(supportedDataTypes).join(', ')}. Maximum file size {maxFileSize}MB.
                  </small>

                  {errors && (errors.map ? errors.map((message, index) => (
                    <AlertBox type="error" className="cove-wizard__alert" key={index}>
                      {message} <Icon
                      display="close"
                      onClick={() => setErrors(errors.filter((val, i) => i !== index))}/>
                    </AlertBox>
                  )) : errors.message)}
                </>
              )}

              {showDataDesigner && <DataDesigner visuzliationKey={null} dataKey={configureData.dataFileName} configureData={configureData} updateDescriptionProp={updateDescriptionProp}/>}
            </>
          )}

          {(editingDataset || addingDataset) && ( // dataFileSourceType needs to be checked here since earlier versions did not track this state
            <div className="cove-wizard__data-loader">
              <div className="cove-heading--3 mb-1">{editingDataset ? `Editing ${editingDataset}` : 'Add Dataset'}</div>

              <Tabs startingTab={editingDataset && config.datasets[editingDataset].dataFileSourceType === 'url' ? 1 : 0}>
                <Tabs.Content title="Upload File" icon={<Icon className="mr-1" display="fileUpload"/>} className="mt-4">
                  {sharepath && <AlertBox type="info">The share path set for this website is: {sharepath}</AlertBox>}
                  <div
                    className={`cove-wizard__file-selector${isDragActive ? ' drag-active' : ''}`} {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p style={{ padding: '0.5rem 0' }}>
                      {isDragActive
                        ? <>Drop file here...</>
                        : <>Drag file to this area, or <span>select a file</span>.</>
                      }
                    </p>
                  </div>
                  <small className="mt-1 mb-4">
                    Supported file types: {Object.keys(supportedDataTypes).join(', ')}. Maximum file size {maxFileSize}MB.
                  </small>
                </Tabs.Content>
                <Tabs.Content title="Load from URL" icon={<Icon className="mr-1" display="link"/>} className="mt-4">
                  {loadFileFromUrl(
                    editingDataset && config.datasets[editingDataset].dataFileSourceType === 'url'
                      ? config.datasets[editingDataset].dataFileName
                      : externalURL, editingDataset)
                  }
                </Tabs.Content>
              </Tabs>

              {errors && (errors.map ? errors.map((message, index) => (
                <AlertBox type="error" className="cove-wizard__alert" key={index}>
                  {message} <Icon
                  display="close"
                  onClick={() => setErrors(errors.filter((val, i) => i !== index))}/>
                </AlertBox>
              )) : errors.message)}

              {/* prettier-ignore */}
              <SampleDataContext.Provider value={{ loadData, editingDataset, config }}>
                <SampleData.List/>
              </SampleDataContext.Provider>
            </div>
          )
          }

          {
            config.type === 'dashboard' && !addingDataset && (
              <p className="mb-4">
                <Button onClick={() => setAddingDataset(true)} flexCenter fluid>
                  <Icon className="mr-2" display="plus"/> Add More Files
                </Button>
              </p>
            )
          }

          {
            readyToConfigure && (
              <div className="mb-8">
                <Button onClick={() => setActiveTab(2)}>
                  Configure your visualization
                </Button>
              </div>
            )
          }

          <GuidanceBlock linkTo="https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html" rel="noopener noreferrer">
            <GuidanceBlock.Title>
              Get Help
            </GuidanceBlock.Title>
            <GuidanceBlock.Content>
              Documentation and examples on formatting data and configuring visualizations.
            </GuidanceBlock.Content>
          </GuidanceBlock>
        </div>
      </div>
      <div className="cove-wizard__grid--right">
        <div className="cove-wizard__data-preview">
          <PreviewDataTable data={previewData}/>
        </div>
      </div>
    </div>
  )
}

export default TabVizData
