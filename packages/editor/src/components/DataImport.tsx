import React, { useState, useContext, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { csvParse } from 'd3'
import axios from 'axios'

import { DataTransform } from '@cdc/core/helpers/DataTransform'

import ConfigContext, { EditorDispatchContext } from '../ConfigContext'

import TabPane from './TabPane'
import Tabs from './Tabs'
import PreviewDataTable from './PreviewDataTable'
import LinkIcon from '../assets/icons/link.svg'
import SampleDataContext from './../samples/SampleDataContext'
import SampleData from './SampleData'

import FileUploadIcon from '../assets/icons/file-upload-solid.svg'
import CloseIcon from '@cdc/core/assets/icon-close.svg'

import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import DataDesigner from '@cdc/core/components/managers/DataDesigner'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'

import '../scss/data-import.scss'

import '@cdc/core/styles/v2/components/data-designer.scss'
import { errorMessages, maxFileSize } from '../helpers/errorMessages'
import { Visualization } from '@cdc/core/types/Visualization'

const isSolrCsv = dataUrl => {
  if (dataUrl.includes('wt=csv')) {
    return true
  }
  return false
}

const isSolrJson = dataUrl => {
  if (dataUrl?.includes('wt=json')) {
    return true
  }
  return false
}

export default function DataImport() {
  const { config, errors, tempConfig, sharepath } = useContext(ConfigContext)

  const setConfig = (conf: Visualization) => {
    dispatch({ type: 'EDITOR_SET_CONFIG', payload: conf })
  }
  const setErrors = (err: string[]) => {
    dispatch({ type: 'EDITOR_SET_ERRORS', payload: err })
  }
  const transform = new DataTransform()

  const [externalURL, setExternalURL] = useState(config.dataFileSourceType === 'url' ? config.dataFileName : config.dataUrl || '')

  const [keepURL, setKeepURL] = useState(!!config.dataUrl)

  const [addingDataset, setAddingDataset] = useState(config.type === 'dashboard' || !config.data)

  const [editingDataset, setEditingDataset] = useState<string>(undefined)

  const [asyncPreviewData, setAsyncPreviewData] = useState<any[]>()

  const dispatch = useContext(EditorDispatchContext)

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
    let dataURL: URL
    // Is URL valid?

    try {
      dataURL = isSolrCsv(externalURL) || isSolrJson(externalURL) ? externalURL : new URL(externalURL, window.location.origin)
    } catch {
      throw errorMessages.urlInvalid
    }
    let responseBlob = null

    const fileExtension = isSolrCsv(externalURL) ? '.csv' : isSolrJson(externalURL) ? '.json' : Object?.keys(supportedDataTypes).find(extension => dataURL.pathname.endsWith(extension))
    try {
      // eslint-disable-next-line no-unused-vars
      await axios
        .get(dataURL.toString(), {
          responseType: 'blob'
        })
        .then(response => {
          responseBlob = response.data

          // Sometimes the files are coming in as plain text types... Maybe when saved from Macs
          if ((fileExtension === '.csv' && responseBlob.type === 'text/plain') || isSolrCsv(externalURL)) {
            responseBlob = responseBlob.slice(0, responseBlob.size, 'text/csv')
          } else if ((fileExtension === '.json' && responseBlob.type === 'text/plain') || isSolrJson(externalURL)) {
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

  const onDrop = ([uploadedFile]) => loadData(uploadedFile, editingDataset, editingDataset)

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
        setErrors([error])
        return
      }
    }

    let fileSize = fileData.size

    // Check if file is too big
    if (fileSize > maxFileSize * 1048576) {
      setErrors([errorMessages.fileTooLarge])
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
        let urlData = new URL(path, window.location.origin)
        fileExtension = isSolrCsv(externalURL) ? '.csv' : isSolrJson(externalURL) ? '.json' : Object.keys(supportedDataTypes).find(extension => urlData.pathname.endsWith(extension))
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
            text = isSolrJson(externalURL) ? JSON.parse(text).response.docs : JSON.parse(text)
          } catch (errors) {
            setErrors([errorMessages.formatting])
            return
          }
          break
        default:
          setErrors([errorMessages.fileType])
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
              } as Visualization,
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
      } catch (err) {
        setErrors(err)
      }
    }
    filereader.readAsText(fileData, encoding)
  }

  useEffect(() => {
    let newConfig = { ...(tempConfig || config) }

    if (undefined === config.formattedData && config.dataDescription) {
      const formattedData = transform.developerStandardize(config.data, config.dataDescription)

      if (formattedData) newConfig.formattedData = formattedData
    }

    dispatch({ type: 'EDITOR_SAVE', payload: newConfig })
  }, []) // eslint-disable-line

  useEffect(() => {
    const asyncWrapper = async () => {
      if (config.type === 'dashboard') {
        Object.keys(config.datasets).forEach(async datasetKey => {
          if (config.datasets[datasetKey].preview) {
            if (config.datasets[datasetKey].dataUrl) {
              const remoteData = await fetchRemoteData(config.datasets[datasetKey].dataUrl)
              if (Array.isArray(remoteData)) {
                setAsyncPreviewData(remoteData)
              }
            } else if (Array.isArray(config.datasets[datasetKey].data)) {
              setAsyncPreviewData(config.datasets[datasetKey].data)
            }
          }
        })
      } else {
        if (config.dataUrl) {
          const remoteData = await fetchRemoteData(config.dataUrl)
          if (Array.isArray(remoteData)) {
            setAsyncPreviewData(remoteData)
          }
        }
      }
    }

    asyncWrapper()
  }, [config.datasets]) // eslint-disable-line

  // todo: code repetition in Widget.jsx?
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
        <form className='input-group d-flex' onSubmit={e => e.preventDefault()}>
          <input id='external-data' type='text' className='form-control flex-grow-1 border-right-0' placeholder='e.g., https://data.cdc.gov/resources/file.json' aria-label='Load data from external URL' aria-describedby='load-data' value={externalURL} onChange={e => setExternalURL(e.target.value)} />
          <button className='input-group-text btn btn-primary px-4' type='submit' id='load-data' onClick={() => loadData(null, externalURL, editingDatasetKey)}>
            Load
          </button>
        </form>
        <label htmlFor='keep-url' className='mt-1 d-flex keep-url'>
          <input type='checkbox' id='keep-url' checked={keepURL} onChange={() => changeKeepURL(!keepURL, editingDatasetKey)} /> Always load from URL (normally will only pull once)
        </label>
      </>
    )
  }

  const resetEditor = (config = {} as Visualization, message = 'Are you sure you want to do this?') => {
    config.newViz = true

    const confirmDataReset = window.confirm(message)

    if (confirmDataReset === true) {
      dispatch({ type: 'EDITOR_SAVE', payload: config })
      setAddingDataset(true)
    }
  }

  const resetButton = () => {
    return (
      //todo convert to modal
      <>
        <button className='btn danger' onClick={() => resetEditor({ type: config.type, visualizationType: config.visualizationType } as Visualization, 'Resetting will remove your data and settings. Do you want to continue?')}>
          Clear
          <CloseIcon />
        </button>
        {/* DEV-851 link to replace file should pop file dialog */}
        {config.dataFileSourceType === 'file' && (
          <div className='link link-replace' {...getRootProps2()}>
            <input {...getInputProps2()} />
            <p>
              <span>or replace file</span>
            </p>
          </div>
        )}
      </>
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

  let previewData,
    configureData,
    readyToConfigure = false
  if (config.type === 'dashboard') {
    readyToConfigure = Object.keys(config.datasets).length > 0
    Object.keys(config.datasets).forEach(datasetKey => {
      if (config.datasets[datasetKey].preview && Array.isArray(config.datasets[datasetKey].data)) {
        previewData = config.datasets[datasetKey].data
      }
    })
  } else {
    previewData = config.data
    configureData = config
    readyToConfigure = !!config.formattedData || (config.data && config.dataDescription && transform.autoStandardize(config.data))
  }

  // Box plots skip the data description steps.
  // If we have data and the visualizations is a box plot proceed...
  if ((config.visualizationType === 'Box Plot' && config.data) || config.visualizationType === 'Scatter Plot') {
    readyToConfigure = true
  }

  const urlFilters = (
    <>
      {config.filters &&
        config.filters.map((filter, i) =>
          filter.type !== 'url' ? (
            <></>
          ) : (
            <fieldset key={filter.key} className='edit-block url-filters-block'>
              <button
                onClick={e => {
                  let newFilters = [...config.filters]
                  newFilters.splice(i, 1)
                  setConfig({ ...config, filters: newFilters, runtimeDataUrl: undefined })
                }}
              >
                Remove
              </button>
              <label>
                <span className='edit-label column-heading'>
                  Label
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p style={{ padding: '0.5rem' }}>The label that will appear above the dropdown filter.</p>
                    </Tooltip.Content>
                  </Tooltip>
                </span>{' '}
                <input
                  type='text'
                  defaultValue={filter.label}
                  onChange={e => {
                    let newFilters = [...config.filters]
                    newFilters[i].label = e.target.value
                    setConfig({ ...config, filters: newFilters })
                  }}
                />
              </label>
              <label>
                <span className='edit-label column-heading'>
                  Query string parameter
                  <Tooltip style={{ textTransform: 'none' }}>
                    <Tooltip.Target>
                      <Icon display='question' />
                    </Tooltip.Target>
                    <Tooltip.Content>
                      <p style={{ padding: '0.5rem' }}>Name of the query string parameter that will be appended to the URL above with the values provided below.</p>
                    </Tooltip.Content>
                  </Tooltip>
                </span>{' '}
                <input
                  type='text'
                  defaultValue={filter.queryParameter}
                  onChange={e => {
                    let newFilters = [...config.filters]
                    newFilters[i].queryParameter = e.target.value
                    setConfig({ ...config, filters: newFilters })
                  }}
                />
              </label>
              <label>
                <span className='edit-label column-heading'>Values</span>{' '}
              </label>
              <ul className='value-list'>
                {filter.orderedValues &&
                  filter.orderedValues.map((value, valueIndex) => (
                    <li>
                      {value}
                      <input
                        type='text'
                        placeholder='Enter value display name here'
                        value={filter.labels ? filter.labels[value] : undefined}
                        className='url-value-label'
                        onChange={e => {
                          let newFilters = [...config.filters]

                          newFilters[i].labels = newFilters[i].labels || {}
                          newFilters[i].labels[value] = e.target.value

                          setConfig({ ...config, filters: newFilters })
                        }}
                      />
                      <button
                        onClick={() => {
                          let newFilters = [...config.filters]

                          if (newFilters[i].labels) {
                            delete newFilters[i].labels[newFilters[i].orderedValues[valueIndex]]
                          }

                          newFilters[i].orderedValues.splice(valueIndex, 1)
                          setConfig({ ...config, filters: newFilters })
                        }}
                      >
                        X
                      </button>
                    </li>
                  ))}
              </ul>
              <form
                onSubmit={e => {
                  e.preventDefault()
                  if (!config.filters[i].orderedValues || config.filters[i].orderedValues.indexOf(e.target[0].value) === -1) {
                    let newFilters = [...config.filters]
                    newFilters[i].orderedValues = newFilters[i].orderedValues || []
                    newFilters[i].orderedValues.push(e.target[0].value)
                    newFilters[i].values = newFilters[i].orderedValues
                    if (!newFilters[i].active) newFilters[i].active = e.target[0].value
                    e.target[0].value = ''
                    setConfig({ ...config, filters: newFilters })
                  }
                }}
              >
                <input type='text' placeholder='Enter new value name here' />{' '}
                <button type='submit' style={{ marginTop: '1em' }}>
                  Add New Value
                </button>
              </form>
            </fieldset>
          )
        )}
      <button
        className='btn full-width'
        onClick={() => {
          setConfig({ ...config, filters: config.filters ? [...config.filters, { type: 'url', key: Date.now() }] : [{ type: 'url', key: Date.now() }] })
        }}
      >
        Add New URL Filter
      </button>
    </>
  )

  const showDataDesigner = config.visualizationType !== 'Box Plot' && config.visualizationType !== 'Scatter Plot'

  return (
    <>
      <div className='left-col'>
        {config.type === 'dashboard' && Object.keys(config.datasets).length > 0 && (
          <>
            <div className='heading-3'>Data Sources</div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Size</th>
                  <th>Type</th>
                  <th colSpan={4}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(config.datasets).map(
                  datasetKey =>
                    config.datasets[datasetKey].dataFileName && (
                      <tr key={`tr-${datasetKey}`}>
                        <td>
                          <input className='dataset-name-input' type='text' defaultValue={datasetKey} onBlur={e => renameDataset(datasetKey, e.target.value)} />
                        </td>
                        <td>{displaySize(config.datasets[datasetKey].dataFileSize)}</td>
                        <td>{config.datasets[datasetKey].dataFileFormat}</td>
                        <td>
                          <button className='btn btn-primary' onClick={() => setGlobalDatasetProp(datasetKey, 'preview', true)}>
                            Preview Data
                          </button>
                        </td>
                        <td>
                          <button
                            className='btn btn-primary'
                            onClick={() => {
                              if (editingDataset === datasetKey) {
                                setEditingDataset(undefined)
                                setExternalURL('')
                                setKeepURL(false)
                              } else {
                                setEditingDataset(datasetKey)
                                setExternalURL(config.datasets[datasetKey].dataUrl || config.datasets[datasetKey].dataFileName)
                                setKeepURL(!!config.datasets[datasetKey].dataUrl)
                              }
                            }}
                          >
                            Edit Data
                          </button>
                        </td>
                        <td>
                          <button className='btn btn-primary' onClick={() => removeDataset(datasetKey)}>
                            X
                          </button>
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
                <div className='heading-3'>Data Source</div>
                <div className='file-loaded-area'>
                  {(config.dataFileSourceType === 'file' || !config.dataFileSourceType) && (
                    <div className='data-source-options'>
                      <div className={isDragActive2 ? 'drag-active cdcdataviz-file-selector loaded-file' : 'cdcdataviz-file-selector loaded-file'} {...getRootProps2()}>
                        <input {...getInputProps2()} />
                        {isDragActive2 ? (
                          <p>Drop file here</p>
                        ) : (
                          <p>
                            <FileUploadIcon /> <span>{config.dataFileName ?? 'Replace data file'}</span>
                          </p>
                        )}
                      </div>
                      <div>{resetButton()}</div>
                    </div>
                  )}

                  {config.dataFileSourceType === 'url' && (
                    <>
                      <div className='url-source-options'>
                        <div>{loadFileFromUrl(externalURL, editingDataset)}</div>
                        <div>{resetButton()}</div>
                      </div>
                      {config.dataUrl && (config.type === 'chart' || config.type === 'map') && urlFilters}
                    </>
                  )}
                </div>
              </>
            )}

            {showDataDesigner && <DataDesigner visualizationKey={null} dataKey={configureData.dataFileName} configureData={configureData} updateDescriptionProp={updateDescriptionProp} config={config} setConfig={setConfig} />}
          </>
        )}

        {(editingDataset || addingDataset) && ( // dataFileSourceType needs to be checked here since earlier versions did not track this state
          <div className='load-data-area'>
            <div className='heading-3'>{editingDataset ? `Editing ${editingDataset}` : 'Add Dataset'}</div>
            <Tabs startingTab={editingDataset && config.datasets[editingDataset].dataFileSourceType === 'url' ? 1 : 0}>
              <TabPane title='Upload File' icon={<FileUploadIcon className='inline-icon' />}>
                {sharepath && <p className='alert--info'>The share path set for this website is: {sharepath}</p>}
                <div className={isDragActive ? 'drag-active cdcdataviz-file-selector' : 'cdcdataviz-file-selector'} {...getRootProps()}>
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p>Drop file here</p>
                  ) : (
                    <p>
                      Drag file to this area, or <span>select a file</span>.
                    </p>
                  )}
                </div>
              </TabPane>
              <TabPane title='Load from URL' icon={<LinkIcon className='inline-icon' />}>
                {loadFileFromUrl(editingDataset && config.datasets[editingDataset].dataFileSourceType === 'url' ? config.datasets[editingDataset].dataFileName : externalURL, editingDataset)}
              </TabPane>
            </Tabs>
            {errors &&
              (Array.isArray(errors)
                ? errors.map((message, index) => (
                    <div className='error-box slim mt-2' key={`error-${message}`}>
                      <span>{message}</span> <CloseIcon className='inline-icon dismiss-error' onClick={() => setErrors(errors.filter((val, i) => i !== index))} />
                    </div>
                  ))
                : errors.message)}
            <p className='footnote'>
              Supported file types: {Object.keys(supportedDataTypes).join(', ')}. Maximum file size {maxFileSize}MB.
            </p>

            {/* prettier-ignore */}
            <SampleDataContext.Provider value={{ loadData, editingDataset, config }}>
              <SampleData.Buttons />
            </SampleDataContext.Provider>
          </div>
        )}

        {config.type === 'dashboard' && !addingDataset && (
          <p>
            <button className='btn btn-primary' onClick={() => setAddingDataset(true)}>
              + Add More Files
            </button>
          </p>
        )}

        {readyToConfigure && (
          <p>
            <button className='btn btn-primary' onClick={() => dispatch({ type: 'EDITOR_SET_GLOBALACTIVE', payload: 2 })}>
              Configure your visualization
            </button>
          </p>
        )}

        <a href='https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html' target='_blank' rel='noopener noreferrer' className='guidance-link'>
          <div>
            <h3>Get Help</h3>
            <p>Documentation and examples on formatting data and configuring visualizations.</p>
          </div>
        </a>
      </div>
      <div className='right-col'>
        <PreviewDataTable data={asyncPreviewData || previewData} />
      </div>
    </>
  )
}
