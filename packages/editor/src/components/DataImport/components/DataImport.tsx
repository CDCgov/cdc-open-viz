import React, { useState, useContext, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'

import { DataTransform } from '@cdc/core/helpers/DataTransform'

import ConfigContext, { EditorDispatchContext } from '../../../ConfigContext'

import TabPane from '../../TabPane'
import Tabs from '../../Tabs'
import PreviewDataTable from '../../PreviewDataTable'
import LinkIcon from '../../../assets/icons/link.svg'
import SampleDataContext from './samples/SampleDataContext'
import SampleData from './SampleData'

import FileUploadIcon from '../../../assets/icons/file-upload-solid.svg'
import CloseIcon from '@cdc/core/assets/icon-close.svg'

import DataDesigner from '@cdc/core/components/managers/DataDesigner'
import Tooltip from '@cdc/core/components/ui/Tooltip'
import Icon from '@cdc/core/components/ui/Icon'
import { isSolrCsv, isSolrJson } from '@cdc/core/helpers/isSolr'
import { type Visualization } from '@cdc/core/types/Visualization'
import { type DataSet } from '@cdc/dashboard/src/types/DataSet'

import './data-import.scss'
import '@cdc/core/styles/v2/components/data-designer.scss'

import { errorMessages, maxFileSize } from '../../../helpers/errorMessages'
import { displaySize } from '../helpers/displaySize'
import { supportedDataTypes } from '../helpers/supportedDataTypes'
import { getFileExtension } from '../helpers/getFileExtension'
import { parseTextByMimeType } from '../helpers/parseTextByMimeType'
import { getMimeType } from '../helpers/getMimeType'
import {
  addVegaData,
  convertVegaData,
  getSampleVegaJson,
  parseVegaConfig,
  loadedVegaConfigData
} from '@cdc/editor/src/helpers/vegaConfig'

const DataImport = () => {
  const { config, errors, tempConfig, sharepath } = useContext(ConfigContext)
  const dispatch = useContext(EditorDispatchContext)
  const transform = new DataTransform()

  const setConfig = (conf: Visualization) => {
    dispatch({ type: 'EDITOR_SET_CONFIG', payload: conf })
  }
  const setErrors = (err: string[]) => {
    dispatch({ type: 'EDITOR_SET_ERRORS', payload: err })
  }

  const [externalURL, setExternalURL] = useState(
    config.dataFileSourceType === 'url' ? config.dataFileName : config.dataUrl || ''
  )

  const [keepURL, setKeepURL] = useState(!!config.dataUrl || !!config.vegaType)
  const [addingDataset, setAddingDataset] = useState(config.type === 'dashboard' || !config.data)
  const [editingDataset, _setEditingDataset] = useState<string>(undefined)
  const [newDatasetName, setNewDatasetName] = useState<string>(config.vegaType ? 'vega_data' : undefined)
  const [pastedConfig, setPastedConfig] = useState<string>(undefined)
  const setEditingDataset = (datasetKey: string) => {
    _setEditingDataset(datasetKey)
    setNewDatasetName(datasetKey)
  }

  /**
   * Check to see all series for the viz exists in the new dataset
   */
  const dataExists = (newData, oldSeries, oldAxisX) => {
    // Loop through old series to make sure each exists in the new data

    oldSeries.map(function (currentValue, index, newData) {
      if (!newData.find(element => element.dataKey === currentValue.dataKey)) return false
    })

    // Is the X Axis still in the dataset?
    const columns = newData.columns || Object.keys(newData[0])
    if (columns.indexOf(oldAxisX) < 0) return false

    return true
  }

  const loadExternal = async () => {
    let responseBlob: Blob = null
    let dataURL: URL
    // Is URL valid?

    try {
      dataURL =
        isSolrCsv(externalURL) || isSolrJson(externalURL) ? externalURL : new URL(externalURL, window.location.origin)
    } catch {
      throw errorMessages.urlInvalid
    }
    const fileExtension = getFileExtension(dataURL)

    try {
      // eslint-disable-next-line no-unused-vars
      await axios
        .get(dataURL.toString(), {
          responseType: 'blob'
        })
        .then(response => {
          responseBlob = response.data

          // Sometimes the files are coming in as plain text types... Maybe when saved from Macs
          const csvTypes = ['text/csv', 'text/plain']
          if ((fileExtension === '.csv' && csvTypes.includes(responseBlob.type)) || isSolrCsv(externalURL)) {
            responseBlob = responseBlob.slice(0, responseBlob.size, 'text/csv')
          } else if (
            responseBlob.type === 'application/json' ||
            (fileExtension === '.json' && responseBlob.type === 'text/plain') ||
            isSolrJson(externalURL)
          ) {
            responseBlob = responseBlob.slice(0, responseBlob.size, 'application/json')
          }
        })
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Error in loadExternal', err)

      const error = err.toString()

      if (Object.values(errorMessages).includes(err)) {
        throw error
      }

      throw errorMessages.failedFetch
    }

    if (config.type === 'dashboard') {
      setExternalURL('')
    }

    return responseBlob
  }

  const onDrop = ([uploadedFile]) => loadData(uploadedFile, editingDataset, editingDataset)

  /**
   * Handle loading data
   */
  const loadData = async (fileBlob = null, fileName, editingDatasetKey: string) => {
    let fileData = fileBlob
    let fileSource = fileData?.path ?? fileName ?? externalURL
    if (fileSource && typeof fileSource === 'string') fileSource = fileSource.trim()
    const fileSourceType = fileBlob ? 'file' : 'url'

    // Get the raw data as text from the file
    if (fileSourceType === 'url') {
      try {
        fileData = await loadExternal()
      } catch (error) {
        setErrors([error])
        return
      }
    }

    const fileSize = fileData.size

    // Check if file is too big
    if (fileSize > maxFileSize * 1048576) {
      setErrors([errorMessages.fileTooLarge])
      return
    }

    const mimeType = getMimeType({
      fileBlob,
      externalURL,
      fileName,
      fileSourceType,
      fileData
    })

    // Convert from blob into raw text
    // Have to use FileReader instead of just .text because IE11 and the polyfills for this are bugged
    const filereader = new FileReader()

    filereader.onload = function () {
      const handleSetConfig = (newData: Object[], useTempConfig = false) => {
        const setDataURL = keepURL && fileSourceType === 'url'
        if (config.type === 'dashboard') {
          const dataFileFormat = mimeType.split('/')[1].toUpperCase()
          const dataset = {
            data: newData,
            dataFileSize: fileSize,
            dataFileName: fileSource, // new file source
            dataFileSourceType: fileSourceType, // new file source type
            dataFileFormat,
            preview: true
          } as DataSet

          if (setDataURL) {
            dataset.dataUrl = fileSource
          }

          const conf = useTempConfig ? { ...config, ...tempConfig } : config
          setConfig(conf)

          const oldDatasetKey = newDatasetName !== editingDatasetKey ? editingDatasetKey : undefined

          dispatch({
            type: 'SET_DASHBOARD_DATASET',
            payload: { datasetKey: newDatasetName || fileSource, dataset, oldDatasetKey }
          })
        } else {
          let newConfig = {
            ...config,
            ...tempConfig,
            data: newData,
            dataFileName: fileSource, // new file source
            dataFileSourceType: fileSourceType, // new file source type
            formattedData: transform.developerStandardize(newData, config.dataDescription)
          }
          if (setDataURL) {
            newConfig.dataUrl = fileSource
          }
          setConfig(newConfig)
        }
      }

      // Validate parsed data and set if no issues.
      try {
        let result = parseTextByMimeType(this.result.toString(), mimeType, externalURL, setErrors)
        if (config.vegaConfig) {
          result = convertVegaData(addVegaData(config.vegaConfig, result))
        }
        const text = transform.autoStandardize(result)
        if (config.data && config.series) {
          if (dataExists(text, config.series, config?.xAxis.dataKey)) {
            handleSetConfig(text, true)
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
          handleSetConfig(text)
        }

        if (editingDataset) {
          setEditingDataset(undefined)
        }
        setAddingDataset(false)
      } catch (err) {
        setErrors(err)
      }
    }
    // Set encoding for CSV files - needed to render special characters properly
    const encoding = mimeType === 'text/csv' ? 'utf-8' : ''
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

  // todo: code repetition in Widget.jsx?
  const updateDescriptionProp = (datasetKey, key, value) => {
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
  const {
    getRootProps: getRootProps2,
    getInputProps: getInputProps2,
    isDragActive: isDragActive2
  } = useDropzone({ onDrop })

  const loadDataFromUrl = () => {
    return (
      <>
        <label htmlFor='dataset-name' className='col-12 mt-2'>
          <span>Dataset Name</span>
          <input
            id='dataset-name'
            placeholder='Enter Dataset Name'
            type='text'
            aria-label='Enter Dataset Name'
            value={newDatasetName}
            className='form-control'
            onChange={e => setNewDatasetName(e.target.value)}
          />
        </label>
        <label htmlFor='external-datas' className='col-12 mt-2'>
          <span>URL </span>
          <textarea
            id='external-datas'
            className='form-control'
            placeholder='e.g., https://data.cdc.gov/resources/file.json'
            aria-label='Load data from external URL'
            aria-describedby='load-data'
            rows={2}
            value={externalURL}
            onChange={e => setExternalURL(e.target.value)}
          />
        </label>
        <label htmlFor='keep-url' className='mt-1 d-flex keep-url'>
          <input
            type='checkbox'
            id='keep-url'
            checked={keepURL}
            onChange={() => changeKeepURL(!keepURL, editingDataset)}
          />{' '}
          Always load from URL (normally will only pull once)
        </label>
        <div className='d-flex justify-content-end mt-2 mb-3'>
          <button
            className='btn btn-primary px-4'
            type='submit'
            id='load-data'
            disabled={!newDatasetName || !externalURL}
            onClick={() => loadData(null, externalURL, editingDataset)}
          >
            Save & Load
          </button>
        </div>
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
        <button
          className='btn danger'
          onClick={() =>
            resetEditor(
              { type: config.type, visualizationType: config.visualizationType } as Visualization,
              'Resetting will remove your data and settings. Do you want to continue?'
            )
          }
        >
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
      Object.keys(newDatasets).forEach(key => {
        const match = key === datasetKey
        newDatasets[key][prop] = match
      })
    } else {
      newDatasets[datasetKey][prop] = value
    }

    setConfig({ ...config, datasets: newDatasets })
  }

  const removeDataset = datasetKey => {
    const datasetKeys = Object.keys(config.datasets).filter(key => key !== datasetKey)
    setEditingDataset(undefined)
    if (!datasetKeys.length) setAddingDataset(true)
    dispatch({ type: 'DELETE_DASHBOARD_DATASET', payload: { datasetKey } })
  }

  const updateVegaData = text => {
    const vegaConfig = parseVegaConfig(JSON.parse(text))
    const newData = convertVegaData(vegaConfig)
    let newConfig = {
      ...config,
      data: newData
    }
    loadedVegaConfigData(newConfig)
    setConfig(newConfig)
  }

  let configureData,
    readyToConfigure: boolean | Object[] = false

  if (config.type === 'dashboard') {
    readyToConfigure = Object.keys(config.datasets).length > 0
  } else {
    configureData = config

    readyToConfigure =
      !!config.formattedData || (config.data && config.dataDescription && transform.autoStandardize(config.data))
  }

  if (config.visualizationType === 'Sankey' && config.data) {
    readyToConfigure = true
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
                      <p style={{ padding: '0.5rem' }}>
                        Name of the query string parameter that will be appended to the URL above with the values
                        provided below.
                      </p>
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
                  if (
                    !config.filters[i].orderedValues ||
                    config.filters[i].orderedValues.indexOf(e.target[0].value) === -1
                  ) {
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
        className='btn full-width btn-primary'
        onClick={() => {
          setConfig({
            ...config,
            filters: config.filters
              ? [...config.filters, { type: 'url', key: Date.now() }]
              : [{ type: 'url', key: Date.now() }]
          })
        }}
      >
        Add New URL Filter
      </button>
    </>
  )

  const showDataDesigner = !['Box Plot', 'Scatter Plot', 'Sankey'].includes(config?.visualizationType)

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
                  <th colSpan={3}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(config.datasets).map(
                  datasetKey =>
                    config.datasets[datasetKey].dataFileName && (
                      <tr key={`tr-${datasetKey}`}>
                        <td>{datasetKey}</td>
                        <td className='p-1'>{displaySize(config.datasets[datasetKey].dataFileSize)}</td>
                        <td className='p-1'>{config.datasets[datasetKey].dataFileFormat}</td>
                        <td>
                          <button
                            className='btn btn-link p-1'
                            onClick={() => setGlobalDatasetProp(datasetKey, 'preview', true)}
                          >
                            Preview
                          </button>
                        </td>
                        <td>
                          {config.datasets[datasetKey].dataFileSourceType === 'url' && (
                            <button
                              className='btn btn-link p-1'
                              onClick={() => {
                                if (editingDataset === datasetKey) {
                                  setEditingDataset(undefined)
                                  setExternalURL('')
                                  setKeepURL(false)
                                } else {
                                  setEditingDataset(datasetKey)
                                  setExternalURL(
                                    config.datasets[datasetKey].dataUrl || config.datasets[datasetKey].dataFileName
                                  )
                                  setKeepURL(!!config.datasets[datasetKey].dataUrl)
                                }
                              }}
                            >
                              Edit
                            </button>
                          )}
                        </td>
                        <td>
                          <button className='btn btn-danger' onClick={() => removeDataset(datasetKey)}>
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

        {configureData?.data && (
          <>
            {config.type !== 'dashboard' && !config.vegaType && (
              <>
                <div className='heading-3'>Data Source</div>
                <div className='file-loaded-area'>
                  {(config.dataFileSourceType === 'file' || !config.dataFileSourceType) && (
                    <div className='data-source-options'>
                      <div
                        className={
                          isDragActive2
                            ? 'drag-active cdcdataviz-file-selector loaded-file'
                            : 'cdcdataviz-file-selector loaded-file'
                        }
                        {...getRootProps2()}
                      >
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
                        <div>{loadDataFromUrl()}</div>
                        <div>{resetButton()}</div>
                      </div>
                      {config.dataUrl && (config.type === 'chart' || config.type === 'map') && urlFilters}
                    </>
                  )}
                </div>
              </>
            )}

            {config.vegaType && (
              <>
                <div className='heading-3'>Update Dataset</div>
                <Tabs startingTab={0}>
                  <TabPane title='Update with Vega config' icon={<FileUploadIcon className='inline-icon' />}>
                    <div>
                      <label htmlFor='uploadConfig'>Paste full Vega configuration JSON:</label>

                      <textarea
                        id='pasteConfig'
                        className='w-100 mb-2'
                        onChange={e => setPastedConfig(e.target.value)}
                        placeholder='{ }'
                      />
                      <div className='mb-3 d-flex justify-content-end'>
                        <button
                          className='btn btn-primary px-4'
                          type='submit'
                          id='load-data'
                          disabled={!pastedConfig}
                          onClick={() => updateVegaData(pastedConfig)}
                        >
                          Save & Load
                        </button>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane title='Update with JSON data' icon={<LinkIcon className='inline-icon' />}>
                    <div>
                      To change this chart to use a JSON file as its data source, the file should be formatted like this
                      sample:
                      <pre style={{ backgroundColor: '#f2f2f2' }}>{getSampleVegaJson(config.vegaConfig)}</pre>
                    </div>
                    <div>&nbsp;</div>
                    <div>Upload JSON file:</div>
                    <div className='data-source-options'>
                      <div
                        className={
                          isDragActive2
                            ? 'drag-active cdcdataviz-file-selector loaded-file'
                            : 'cdcdataviz-file-selector loaded-file'
                        }
                        {...getRootProps2()}
                      >
                        <input {...getInputProps2()} />
                        {isDragActive2 ? (
                          <p>Drop file here</p>
                        ) : (
                          <p>
                            <FileUploadIcon /> <span>{config.dataFileName ?? 'Replace data file'}</span>
                          </p>
                        )}
                      </div>
                      <div className='link link-replace' {...getRootProps2()}>
                        <input {...getInputProps2()} />
                        <p>
                          <span>Replace file</span>
                        </p>
                      </div>
                    </div>

                    <label htmlFor='external-datas' className='col-12 mt-2'>
                      <span>Or connect chart to URL:</span>
                      <textarea
                        id='external-datas'
                        className='form-control'
                        placeholder='e.g., https://data.cdc.gov/resources/file.json'
                        aria-label='Load data from external URL'
                        aria-describedby='load-data'
                        rows={2}
                        value={externalURL}
                        onChange={e => setExternalURL(e.target.value)}
                      />
                    </label>
                    <div className='d-flex justify-content-end mt-2 mb-3'>
                      <button
                        className='btn btn-primary px-4'
                        type='submit'
                        id='load-data'
                        disabled={!newDatasetName || !externalURL}
                        onClick={() => loadData(null, externalURL, editingDataset)}
                      >
                        Save & Load
                      </button>
                    </div>
                  </TabPane>
                </Tabs>
              </>
            )}

            {showDataDesigner && (
              <DataDesigner
                visualizationKey={null}
                configureData={configureData}
                updateDescriptionProp={(key, value) => updateDescriptionProp(configureData.dataFileName, key, value)}
                config={config}
                setConfig={setConfig}
              />
            )}
          </>
        )}

        {(editingDataset || addingDataset) && ( // dataFileSourceType needs to be checked here since earlier versions did not track this state
          <div className='load-data-area'>
            <div className='heading-3'>{editingDataset ? `Editing ${editingDataset}` : 'Add Dataset'}</div>
            {editingDataset ? (
              <TabPane title='Load from URL' icon={<LinkIcon className='inline-icon' />}>
                {loadDataFromUrl()}
              </TabPane>
            ) : (
              <Tabs startingTab={0}>
                <TabPane title='Upload File' icon={<FileUploadIcon className='inline-icon' />}>
                  {sharepath && <p className='alert--info'>The share path set for this website is: {sharepath}</p>}
                  <div
                    className={isDragActive ? 'drag-active cdcdataviz-file-selector' : 'cdcdataviz-file-selector'}
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p>Drop file here</p>
                    ) : (
                      <p>
                        Drag file to this area, or <span>select a file</span>.
                      </p>
                    )}
                  </div>
                  <p className='footnote'>
                    Supported file types: {Object.keys(supportedDataTypes).join(', ')}. Maximum file size {maxFileSize}
                    MB.
                  </p>
                </TabPane>
                <TabPane title='Load from URL' icon={<LinkIcon className='inline-icon' />}>
                  {loadDataFromUrl()}
                </TabPane>
              </Tabs>
            )}
            {errors &&
              (Array.isArray(errors)
                ? errors.map((message, index) => (
                    <div className='error-box slim mt-2' key={`error-${message}`}>
                      <span>{message}</span>{' '}
                      <CloseIcon
                        className='inline-icon dismiss-error'
                        onClick={() => setErrors(errors.filter((val, i) => i !== index))}
                      />
                    </div>
                  ))
                : errors.message)}

            {/* prettier-ignore */}
            <SampleDataContext.Provider value={{ loadData, editingDataset, config }}>
              <SampleData.Buttons />
            </SampleDataContext.Provider>
          </div>
        )}

        {config.type === 'dashboard' && !addingDataset && (
          <div className='mt-2'>
            <button className='btn btn-primary' onClick={() => setAddingDataset(true)}>
              + Add More Files
            </button>
          </div>
        )}

        {readyToConfigure && (
          <div className='mt-2'>
            <button
              className='btn btn-primary'
              onClick={() => dispatch({ type: 'EDITOR_SET_GLOBALACTIVE', payload: 2 })}
            >
              Configure your visualization
            </button>
          </div>
        )}

        <a
          href='https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/data-map.html'
          target='_blank'
          rel='noopener noreferrer'
          className='guidance-link'
        >
          <div>
            <h3>Get Help</h3>
            <p>Documentation and examples on formatting data and configuring visualizations.</p>
          </div>
        </a>
      </div>
      <div className='right-col'>
        <PreviewDataTable />
      </div>
    </>
  )
}

export default DataImport
