import React, { useState, useContext, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { csvParse } from 'd3'
import { useDebounce } from 'use-debounce'
import axios from 'axios'

import { useGlobalContext } from '@cdc/core/components/GlobalContext'
import WizardContext from '../WizardContext'

import { DataTransform } from '@cdc/core/components/DataTransform'
import Modal from '@cdc/core/components/ui/Modal'
import GuidanceBlock from '@cdc/core/components/elements/GuidanceBlock'
import Button from '@cdc/core/components/elements/Button'
import Icon from '@cdc/core/components/ui/Icon'
import InputGroup from '@cdc/core/components/inputs/InputGroup'
import InputText from '@cdc/core/components/inputs/InputText'
import InputCheckbox from '@cdc/core/components/inputs/InputCheckbox'
import Card from '@cdc/core/components/elements/Card'

import Tabs from './Tabs'
import PreviewDataTable from './PreviewDataTable'
import DataDesigner from './DataDesigner'

import validMapData from '../../example/valid-data-map.csv'
import validChartData from '../../example/valid-data-chart.csv'
import validCountyMapData from '../../example/valid-county-data.csv'

const DataImport = () => {
  const { overlay } = useGlobalContext()

  const {
    config,
    setConfig,
    errors,
    setErrors,
    errorMessages,
    maxFileSize,
    setGlobalActive,
    tempConfig,
    setTempConfig
  } = useContext(WizardContext)

  const [ externalURL, setExternalURL ] = useState(config.dataFileSourceType === 'url' ? config.dataFileName : (config.dataUrl || ''))
  const [ keepURL, setKeepURL ] = useState(!!config.dataUrl)
  const [ debouncedExternalURL ] = useDebounce(externalURL, 200)

  const [ isLoading, setIsLoading ] = useState(false)

  const transform = new DataTransform()

  const supportedDataTypes = {
    '.csv': 'text/csv',
    '.json': 'application/json'
  }

  useEffect(() => {
    if (false !== keepURL) {
      setConfig({ ...config, dataUrl: debouncedExternalURL || externalURL })
    } else {
      let newConfig = { ...config }
      delete newConfig.dataUrl
      setConfig(newConfig)
    }
  }, [ debouncedExternalURL, keepURL ])

  /**
   * Check to see all series for the viz exists in the new dataset
   */
  const dataExists = (newData, oldSeries, oldAxisX) => {

    // Loop through old series to make sure each exists in the new data
    oldSeries.map((currentValue, index, newData) => {
      if (!newData.find(element => element.dataKey === currentValue.dataKey)) {
        return false
      }
    })

    // Is the X Axis still in the dataset?
    if (newData.columns.indexOf(oldAxisX) < 0) {
      return false
    }

    return true
  }

  const loadExternal = async () => {
    let dataURL = ''
    let responseBlob = null

    // Is URL valid?
    try {
      dataURL = new URL(externalURL)
    } catch {
      throw errorMessages.urlInvalid
    }

    const fileExtension = Object.keys(supportedDataTypes).find(extension => dataURL.pathname.endsWith(extension))

    try {
      const response = await axios.get(dataURL,
        {
          responseType: 'blob'
        })
        .then((response) => {
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

  const onDrop = ([ uploadedFile ]) => loadData(uploadedFile)

  /**
   * Handle loading data
   */
  const loadData = async (fileBlob = null, fileName) => {
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

    // Check if file is too big
    if (fileData.size > (maxFileSize * 1048576)) {
      setErrors([ errorMessages.fileTooLarge ])
      return
    }

    let path = fileBlob?.name || externalURL || fileName
    let fileExtension = path.match(/(?:\.([^.]+))?$/g)

    if (fileExtension.length === 0) {
      fileExtension = '.csv'
    } else {
      fileExtension = fileExtension[0]
    }

    let mimeType = supportedDataTypes[fileExtension]

    // Convert from blob into raw text
    // Have to use FileReader instead of just .text because IE11 and the polyfills for this are bugged
    let filereader = new FileReader()

    // Set encoding for CSV files - needed to render special characters properly
    let encoding = (mimeType === 'text/csv') ? 'ISO-8859-1' : ''

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
            setConfig({
              ...config,
              ...tempConfig,
              data: text, // new data
              dataFileName: fileSource, // new file source
              dataFileSourceType: fileSourceType,// new file source type
            })
          } else {
            resetEditor({
              data: text,
              dataFileName: fileSource,
              dataFileSourceType: fileSourceType
            }, 'It appears that your data does not contain all of the columns that your last dataset contained. Continuing will reset your configuration. Do you want to continue?')
          }
        } else {
          setConfig({ ...config, data: text, dataFileName: fileSource, dataFileSourceType: fileSourceType })
        }
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
  }, [])

  const updateDescriptionProp = (key, value) => {
    let dataDescription = { ...config.dataDescription, [key]: value }
    let formattedData = transform.developerStandardize(config.data, dataDescription)

    setConfig({ ...config, formattedData, dataDescription })
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const loadFileFromUrl = (url) => {
    // const extUrl = (url) ? url : config.dataFileName // set url to what is saved in config unless the user has entered something
    return (
      <>
        {/*<form className="input-group d-flex" onSubmit={(e) => e.preventDefault()}>
          <input id="external-data" type="text"
                 placeholder="e.g., https://data.cdc.gov/resources/file.json"
                 onChange={(e) => setExternalURL(e.target.value)}
                 aria-describedby="load-data"
                 aria-label="Load data from external URL"
                 value={externalURL}
          />
          <Button type="submit" id="load-data"
                  onClick={() => loadData(null, externalURL)}>Load
          </Button>
        </form>
        <label htmlFor="keep-url" className="mt-1 d-flex keep-url">
          <input type="checkbox" id="keep-url" checked={keepURL} onChange={() => setKeepURL(!keepURL)}/>
          Always load from URL (normally will only pull once)
        </label>*/}
        <form onSubmit={(e) => e.preventDefault()}>
          <InputGroup>
            <InputText type="text"
                       placeholder="e.g., https://data.cdc.gov/resources/file.json"
                       onChange={(e) => setExternalURL(e.target.value)}
                       aria-describedby="load-data"
                       aria-label="Load data from external URL"
                       value={externalURL}
            />
            <Button type="submit" id="load-data" onClick={() => loadData(null, externalURL)}>Load</Button>
          </InputGroup>
        </form>
        <InputCheckbox label="Always load from URL (normally will only pull once)" checked={keepURL}
                       onChange={() => setKeepURL(!keepURL)}/>
      </>
    )
  }

  const warningModal = () => {
    return (
      <Modal fontTheme={'light'} headerBgColor={'#d73636'} showClose={false}>
        <Modal.Header>
          <center>Warning</center>
        </Modal.Header>
        <Modal.Content>
          <center>
            <p style={{ fontSize: '1rem' }}>Reseting will remove your data and settings.</p>
          </center>
        </Modal.Content>
        <Modal.Footer>
          <div style={{ textAlign: 'center' }}>
            <p style={{
              marginBottom: '1rem',
              fontSize: '1rem'
            }}>
              Are you sure you want to continue?
            </p>
            <Button className="warn" style={{ marginRight: '1rem' }}
                    onClick={() => overlay.actions.toggleOverlay(false)}
            >No, Cancel</Button>
            <Button className="success" onClick={() => {
              resetEditor({})
              overlay.actions.toggleOverlay(false)
            }}>Yes, Continue</Button>
          </div>
        </Modal.Footer>
      </Modal>
    )
  }

  const resetEditor = (config = {}, message = 'Are you sure you want to do this?') => {
    config.newViz = true
    setTempConfig(null)
    setConfig(config)
  }

  const resetButton = () => {
    return (
      <Button className="warn" style={{ height: '2.5rem' }}
              onClick={() => overlay.actions.openOverlay(warningModal(), true)} flexCenter>
        Clear <Icon display="close"/>
      </Button>
    )
  }

  return (
    <div className="cove-wizard__grid">
      <div className="cove-wizard__grid--left">

        {(!config.data || !config.dataFileSourceType) && (   // dataFileSourceType needs to be checked here since earlier versions did not track this state
          <div className="cove-wizard__data">
            <Tabs className="mb-4">
              <Tabs.Content title="Upload File" icon={<Icon className="mr-1" display="fileUpload"/>}>
                <div
                  className={`cove-file-selector${isDragActive ? ' drag-active' : ''}`} {...getRootProps()}>
                  {/* cdcdataviz-file-selector */}
                  <input {...getInputProps()} />
                  {
                    isDragActive ?
                      <p>Drop file here</p> :
                      <p>Drag file to this area, or <span>select a file</span>.</p>
                  }
                </div>
              </Tabs.Content>
              <Tabs.Content title="Load from URL" icon={<Icon className="mr-1" display="link"/>}>
                {loadFileFromUrl(externalURL)}
              </Tabs.Content>
            </Tabs>

            {errors && (errors.map ? errors.map((message, index) => (
              <div className="cove-alert__error mt-1" key={index}>
                <span>{message}</span>
                <Icon
                  className="cove-alert__error-dismiss"
                  display="close"
                  onClick={() => setErrors(errors.filter((val, i) => i !== index))}
                />
              </div>
            )) : errors.message)}

            <small className="mt-2 mb-4">
              Supported file types: {Object.keys(supportedDataTypes).join(', ')}. Maximum file size {maxFileSize}MB.
            </small>

            <Button className="mt-4" type="loader" loading={isLoading}>Testing text here</Button>
            <br/>
            <input type='checkbox' onChange={()=>setIsLoading(loading => !loading)}/>

            <div className="cove-heading--3 mb-0">Load Sample Data:</div>
            <ul className="cove-wizard__data-samples">
              <li
                onClick={() => loadData(new Blob([ validMapData ], { type: 'text/csv' }), 'valid-data-map.csv')}>United
                States Sample Data #1
              </li>
              <li
                onClick={() => loadData(new Blob([ validChartData ], { type: 'text/csv' }), 'valid-data-chart.csv')}>Chart
                Sample Data
              </li>
              <li
                onClick={() => loadData(new Blob([ validCountyMapData ], { type: 'text/csv' }), 'valid-county-data.csv')}>United
                States Counties Sample Data
              </li>
            </ul>
            <GuidanceBlock className="mb-2" linkTo="https://www.cdc.gov/wcms/4.0/cdc-wp/data-presentation/index.html"
                           bob="sagat" bill="murray">
              <GuidanceBlock.Title>
                Get Help
              </GuidanceBlock.Title>
              <GuidanceBlock.Content>
                <p>Documentation and examples on formatting data and configuring visualizations.</p>
              </GuidanceBlock.Content>
            </GuidanceBlock>
          </div>
        )}

        {config.dataFileSourceType &&
          <DataDesigner>
            <div className="cove-heading--3 mb-1">Data Source</div>

            {config.dataFileSourceType === 'file' && (
              <div className="cove-data-designer__source">
                <div
                  className={`cove-file-selector py-1 loaded-file${isDragActive ? ' drag-active ' : ''}`} {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  {
                    isDragActive ?
                      <p>Drop file here</p> :
                      <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon display="fileUpload" size={12} color="#333" style={{ marginRight: '0.5rem' }}/>
                        <span>{config.dataFileName ?? 'Replace data file'}</span>
                      </p>
                  }
                </div>
                <div>
                  {resetButton()}
                </div>
              </div>
            )}

            {config.dataFileSourceType === 'url' && (
              <div className="url-source-options">
                <div>
                  {loadFileFromUrl(externalURL)}
                </div>
                <div>
                  {resetButton()}
                </div>
              </div>
            )}

            <div className="question">
              <div className="cove-heading--3">Describe Data</div>
              <div className="cove-heading--4 data-question">Data Orientation</div>
              <div className="cove-data-designer__options">
                <button
                  className={'cove-data-designer__button' + (config.dataDescription && config.dataDescription.horizontal === false ? ' active' : '')}
                  onClick={() => {
                    updateDescriptionProp('horizontal', false)
                  }}>
                  <Card>
                    <strong>Vertical</strong>
                    <p>Values for map geography or chart date/category axis are contained in a single <em>column</em>.
                    </p>
                    <table>
                      <tbody>
                      <tr>
                        <th>Date</th>
                        <th>Value</th>
                        <th>...</th>
                      </tr>
                      <tr>
                        <td>01/01/2020</td>
                        <td>150</td>
                        <td>...</td>
                      </tr>
                      <tr>
                        <td>02/01/2020</td>
                        <td>150</td>
                        <td>...</td>
                      </tr>
                      </tbody>
                    </table>
                    <table>
                      <tbody>
                      <tr>
                        <th>State</th>
                        <th>Value</th>
                        <th>...</th>
                      </tr>
                      <tr>
                        <td>Georgia</td>
                        <td>150</td>
                        <td>...</td>
                      </tr>
                      <tr>
                        <td>Florida</td>
                        <td>150</td>
                        <td>...</td>
                      </tr>
                      </tbody>
                    </table>
                  </Card>
                </button>

                <button
                  className={'cove-data-designer__button' + (config.dataDescription && config.dataDescription.horizontal === true ? ' active' : '')}
                  onClick={() => {
                    updateDescriptionProp('horizontal', true)
                  }}>
                  <Card>
                    <strong>Horizontal</strong>
                    <p>Values for map geography or chart date/category axis are contained in a single <em>row</em></p>
                    <table>
                      <tbody>
                      <tr>
                        <th>Date</th>
                        <td>01/01/2020</td>
                        <td>02/01/2020</td>
                        <td>...</td>
                      </tr>
                      <tr>
                        <th>Value</th>
                        <td>100</td>
                        <td>150</td>
                        <td>...</td>
                      </tr>
                      </tbody>
                    </table>
                    <table>
                      <tbody>
                      <tr>
                        <th>State</th>
                        <td>Georgia</td>
                        <td>Florida</td>
                        <td>...</td>
                      </tr>
                      <tr>
                        <th>Value</th>
                        <td>100</td>
                        <td>150</td>
                        <td>...</td>
                      </tr>
                      </tbody>
                    </table>
                  </Card>
                </button>
              </div>
            </div>

            {config.dataDescription && (
              <>
                <div className="question">
                  <div className="cove-heading--4 data-question">Are there multiple series represented in your data?
                  </div>
                  <div>
                    <Button
                      style={{backgroundColor: '#00345d'}}
                      hoverStyle={{backgroundColor: '#015daa'}}
                      className="mr-1"
                      onClick={() => {
                        updateDescriptionProp('series', true)
                      }}
                      active={config.dataDescription.series === true}
                    >
                      Yes
                    </Button>
                    <Button
                      style={{backgroundColor: '#00345d'}}
                      hoverStyle={{backgroundColor: '#015daa'}}
                      onClick={() => {
                        updateDescriptionProp('series', false)
                      }}
                      active={config.dataDescription.series === false}
                    >
                      No
                    </Button>
                  </div>
                </div>
                {config.dataDescription.horizontal === true && config.dataDescription.series === true && (
                  <div className="question">
                    <div className="cove-heading--4 data-question">Which property in the dataset represents which series
                      the
                      row is describing?
                    </div>
                    <select onChange={(e) => {
                      updateDescriptionProp('seriesKey', e.target.value)
                    }} value={config.dataDescription.seriesKey}>
                      <option value="">Choose an option</option>
                      {Object.keys(config.data[0]).map((value, index) => (
                        <option value={value} key={index}>{value}</option>
                      ))}
                    </select>
                  </div>
                )}
                {config.dataDescription.horizontal === false && config.dataDescription.series === true && (
                  <>
                    <div className="question">
                      <div className="cove-heading--4 data-question">Are the series values in your data represented in a
                        single row, or across multiple rows?
                      </div>
                      <div className="table-button-container">
                        <div className={'table-button' + (config.dataDescription.singleRow === true ? ' active' : '')}
                             onClick={() => {
                               updateDescriptionProp('singleRow', true)
                             }}>
                          <p>Each row contains the data for an individual series in itself.</p>
                          <table>
                            <tbody>
                            <tr>
                              <th>Date</th>
                              <th>Virus 1</th>
                              <th>Virus 2</th>
                              <th>...</th>
                            </tr>
                            <tr>
                              <td>01/01/2020</td>
                              <td>100</td>
                              <td>150</td>
                              <td>...</td>
                            </tr>
                            <tr>
                              <td>02/01/2020</td>
                              <td>15</td>
                              <td>20</td>
                              <td>...</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div
                          className={'table-button' + (config.dataDescription.singleRow === false ? ' active' : '')}
                          onClick={() => {
                            updateDescriptionProp('singleRow', false)
                          }}>
                          <p>Each series data is broken out into multiple rows.</p>
                          <table>
                            <tbody>
                            <tr>
                              <th>Virus</th>
                              <th>Date</th>
                              <th>Value</th>
                            </tr>
                            <tr>
                              <td>Virus 1</td>
                              <td>01/01/2020</td>
                              <td>100</td>
                            </tr>
                            <tr>
                              <td>Virus 1</td>
                              <td>02/01/2020</td>
                              <td>150</td>
                            </tr>
                            <tr>
                              <td>...</td>
                              <td>...</td>
                              <td>...</td>
                            </tr>
                            <tr>
                              <td>Virus 2</td>
                              <td>01/01/2020</td>
                              <td>15</td>
                            </tr>
                            <tr>
                              <td>Virus 2</td>
                              <td>02/01/2020</td>
                              <td>20</td>
                            </tr>
                            <tr>
                              <td>...</td>
                              <td>...</td>
                              <td>...</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    {config.dataDescription.singleRow === false && (
                      <>
                        <div className="question">
                          <div className="cove-heading--4 data-question">Which property in the dataset represents which
                            series
                            the row is describing?
                          </div>
                          <select onChange={(e) => {
                            updateDescriptionProp('seriesKey', e.target.value)
                          }}>
                            <option value="">Choose an option</option>
                            {Object.keys(config.data[0]).map((value, index) => (
                              <option value={value} key={index}>{value}</option>
                            ))}
                          </select>
                        </div>
                        <div className="question">
                          <div className="cove-heading--4 data-question">
                            Which property in the dataset represents the values for the category/date axis or map
                            geography?
                          </div>
                          <select onChange={(e) => {
                            updateDescriptionProp('xKey', e.target.value)
                          }}>
                            <option value="">Choose an option</option>
                            {Object.keys(config.data[0]).map((value, index) => (
                              <option value={value} key={index}>{value}</option>
                            ))}
                          </select>
                        </div>
                        <div className="question">
                          <div className="cove-heading--4 data-question">
                            Which property in the dataset represents the numeric value?
                          </div>
                          <select onChange={(e) => {
                            updateDescriptionProp('valueKey', e.target.value)
                          }}>
                            <option value="">Choose an option</option>
                            {Object.keys(config.data[0]).map((value, index) => (
                              <option value={value} key={index}>{value}</option>
                            ))}
                          </select>
                        </div>
                      </>
                    )}
                  </>
                )}
              </>
            )}
            <Button className="mt-2" style={{ float: 'right' }} onClick={() => setGlobalActive(1)} disabled={!config.formattedData}>
              Select your visualization type &raquo;
            </Button>
          </DataDesigner>
        }
      </div>
      <div className="cove-wizard__grid--right">
        {/* right-col */}
        <PreviewDataTable data={config.data}/>
      </div>
    </div>
  )
}

export default DataImport
