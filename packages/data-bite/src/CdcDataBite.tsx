import React, { useEffect, useState, useCallback, useReducer } from 'react'
import { Fragment } from 'react'

// contexts & initial state
import defaults from './data/initial-state'
import Context from './context'

// internal components
import EditorPanel from './components/EditorPanel'
import Loading from '@cdc/core/components/Loading'
import Title from '@cdc/core/components/ui/Title'
import CircleCallout from './components/CircleCallout'
import GradientBite from './components/GradientBite'
import Layout from '@cdc/core/components/Layout'

// external
import ResizeObserver from 'resize-observer-polyfill'
import parse from 'html-react-parser'

// helpers
import getViewport from '@cdc/core/helpers/getViewport'
import { DataTransform } from '@cdc/core/helpers/DataTransform'
import numberFromString from '@cdc/core/helpers/numberFromString'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import { publish } from '@cdc/core/helpers/events'
import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'
import cacheBustingString from '@cdc/core/helpers/cacheBustingString'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
import { Config } from './types/Config'
import dataBiteReducer from './store/db.reducer'

// styles
import './scss/main.scss'

type CdcDataBiteProps = {
  config: Config
  configUrl: string
  isDashboard: boolean
  isEditor: boolean
  setConfig: () => {}
  link: any
}

const CdcDataBite = (props: CdcDataBiteProps) => {
  const { configUrl, config: configObj, isDashboard = false, isEditor = false, setConfig: setParentConfig, link } = props

  const initialState = {
    config: configObj ?? defaults,
    loading: true,
    currentViewport: 'lg',
    coveLoadedHasRan: false,
    container: null
  }

  const [state, dispatch] = useReducer(dataBiteReducer, initialState)

  const { config, loading, currentViewport, coveLoadedHasRan, container } = state

  const { title, dataColumn, dataFunction, imageData, biteBody, biteFontSize, dataFormat, biteStyle, filters, subtext } = config

  const { innerContainerClasses, contentClasses } = useDataVizClasses(config)

  const transform = new DataTransform()

  //Observes changes to outermost container and changes viewport size in state
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      let newViewport = getViewport(entry.contentRect.width * 2) // Data bite is usually presented as small, so we scale it up for responsive calculations
      dispatch({ type: 'SET_CURRENT_VIEWPORT', payload: newViewport })
    }
  })

  const updateConfig = newConfig => {
    // Deeper copy
    Object.keys(defaults).forEach(key => {
      if (newConfig[key] && 'object' === typeof newConfig[key] && !Array.isArray(newConfig[key])) {
        newConfig[key] = { ...defaults[key], ...newConfig[key] }
      }
    })

    //Enforce default values that need to be calculated at runtime
    newConfig.runtime = {}
    newConfig.runtime.uniqueId = Date.now()

    //Check things that are needed and set error messages if needed
    newConfig.runtime.editorErrorMessage = ''
    dispatch({ type: 'SET_CONFIG', payload: newConfig })
  }

  //@ts-ignore
  const loadConfig = async () => {
    let response = configObj || (await (await fetch(configUrl)).json())

    // If data is included through a URL, fetch that and store
    let responseData = response.data ?? []

    if (response.dataUrl) {
      response.dataUrl = `${response.dataUrl}?${cacheBustingString()}`
      let newData = await fetchRemoteData(response.dataUrl)

      if (newData && response.dataDescription) {
        newData = transform.autoStandardize(newData)
        newData = transform.developerStandardize(newData, response.dataDescription)
      }

      if (newData) {
        responseData = newData
      }
    }

    response.data = responseData

    const processedConfig = { ...(await coveUpdateWorker(response)) }

    updateConfig({ ...defaults, ...processedConfig })
    dispatch({ type: 'SET_LOADING', payload: false })
  }

  const calculateDataBite = (includePrefixSuffix = true) => {
    //If either the column or function aren't set, do not calculate
    if (!dataColumn || !dataFunction) {
      return ''
    }

    const applyPrecision = value => {
      // first validation
      if (value === undefined || value === null) {
        console.error('Enter correct value to "applyPrecision()" function ')
        return
      }
      // second validation
      if (Number.isNaN(value)) {
        console.error(' Argunment isNaN, "applyPrecision()" function ')
        return
      }
      let result = value
      let roundToPlace = Number(config.dataFormat.roundToPlace) // default equals to 0
      //  ROUND FIELD  going -1,-2,-3 numbers
      if (roundToPlace < 0) {
        console.error(' ROUND field is below "0", "applyPrecision()" function ')
        return
      }
      if (typeof roundToPlace === 'number' && roundToPlace > -1) {
        result = Number(result).toFixed(roundToPlace) // returns STRING
      }
      return String(result)
    }

    // filter null and 0 out from count data
    const getColumnCount = arr => {
      if (config.dataFormat.ignoreZeros) {
        numericalData = numericalData.filter(item => item && item)
        return numericalData.length
      } else {
        return numericalData.length
      }
    }

    const getColumnSum = arr => {
      // first validation
      if (arr === undefined || arr === null) {
        console.error('Enter valid value for getColumnSum function ')
        return
      }
      // second validation
      if (arr.length === 0 || !Array.isArray(arr)) {
        console.error('Arguments are not valid getColumnSum function ')
        return
      }
      let sum = 0
      if (arr.length > 1) {
        /// first convert each element to number then add using reduce method to escape string concatination.
        sum = arr.map(el => Number(el)).reduce((sum, x) => sum + x)
      } else {
        sum = Number(arr[0])
      }
      return applyPrecision(sum)
    }

    const getColumnMean = arr => {
      // add default params to escape errors on runtime
      // first validation
      if (arr === undefined || arr === null || !Array.isArray(arr)) {
        console.error('Enter valid parameter getColumnMean function')
        return
      }

      if (config.dataFormat.ignoreZeros) {
        arr = arr.filter(num => num !== 0)
      }

      let mean = 0
      if (arr.length > 1) {
        /// first convert each element to number then add using reduce method to escape string concatination.
        mean = arr.map(el => Number(el)).reduce((a, b) => a + b) / arr.length
      } else {
        mean = Number(arr[0])
      }
      return applyPrecision(mean)
    }

    const getMode = (arr = []) => {
      // add default params to escape errors on runtime
      // this function accepts any array and returns array of strings
      let freq = {}
      let max = -Infinity

      for (let i = 0; i < arr.length; i++) {
        if (freq[arr[i]]) {
          freq[arr[i]] += 1
        } else {
          freq[arr[i]] = 1
        }

        if (freq[arr[i]] > max) {
          max = freq[arr[i]]
        }
      }

      let res = []

      for (let key in freq) {
        if (freq[key] === max) res.push(key)
      }

      return res
    }

    const getMedian = arr => {
      if (!arr.length) return
      const mid = Math.floor(arr.length / 2),
        nums = [...arr].sort((a, b) => a - b)
      const value = arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
      return applyPrecision(value)
    }

    const applyLocaleString = value => {
      if (value === undefined || value === null) return
      if (Number.isNaN(value) || typeof value === 'number') {
        value = String(value)
      }
      const language = 'en-US'
      let formattedValue = parseFloat(value).toLocaleString(language, {
        useGrouping: true,
        maximumFractionDigits: 6
      })
      // Add back missing .0 in e.g. 12.0
      const match = value.match(/\.\d*?(0*)$/)

      if (match) {
        formattedValue += /[1-9]/.test(match[0]) ? match[1] : match[0]
      }
      return formattedValue
    }

    let dataBite = ''

    //Optionally filter the data based on the user's filter
    let filteredData = config.data

    filters.map(filter => {
      if (filter.columnName && filter.columnValue) {
        return (filteredData = filteredData.filter(function (e) {
          return e[filter.columnName] === filter.columnValue
        }))
      } else {
        return false
      }
    })

    let numericalData = []
    // Get the column's data
    if (filteredData.length) {
      filteredData.forEach(row => {
        let value = numberFromString(row[dataColumn])
        if (typeof value === 'number') numericalData.push(value)
      })
    } else {
      if (config.dataColumn && config.data) {
        numericalData = config.data.map(item => Number(item[config.dataColumn]))
      }
    }

    switch (dataFunction) {
      case DATA_FUNCTION_COUNT:
        dataBite = getColumnCount(numericalData)
        break
      case DATA_FUNCTION_SUM:
        dataBite = getColumnSum(numericalData)
        break
      case DATA_FUNCTION_MEAN:
        dataBite = getColumnMean(numericalData)
        break
      case DATA_FUNCTION_MEDIAN:
        dataBite = getMedian(numericalData)
        break
      case DATA_FUNCTION_MAX:
        dataBite = Math.max(...numericalData)
        break
      case DATA_FUNCTION_MIN:
        dataBite = Math.min(...numericalData)
        break
      case DATA_FUNCTION_MODE:
        dataBite = getMode(numericalData).join('')
        break
      case DATA_FUNCTION_RANGE:
        let rangeMin = Math.min(...numericalData)
        let rangeMax = Math.max(...numericalData)
        rangeMin = applyPrecision(rangeMin)
        rangeMax = applyPrecision(rangeMax)
        if (config.dataFormat.commas) {
          rangeMin = applyLocaleString(rangeMin)
          rangeMax = applyLocaleString(rangeMax)
        }
        dataBite = config.dataFormat.prefix + rangeMin + config.dataFormat.suffix + ' - ' + config.dataFormat.prefix + rangeMax + config.dataFormat.suffix
        break
      default:
        console.warn('Data bite function not recognized: ' + dataFunction)
    }

    // If not the range, then round and format here
    if (dataFunction !== DATA_FUNCTION_RANGE) {
      dataBite = applyPrecision(dataBite)

      if (config.dataFormat.commas) {
        dataBite = applyLocaleString(dataBite)
      }
      // Optional
      // return config.dataFormat.prefix + dataBite + config.dataFormat.suffix;

      return includePrefixSuffix ? dataFormat.prefix + dataBite + dataFormat.suffix : dataBite
    } else {
      //Rounding and formatting for ranges happens earlier.

      return includePrefixSuffix ? dataFormat.prefix + dataBite + dataFormat.suffix : dataBite
    }
  }

  // Load data when component first mounts
  const outerContainerRef = useCallback(node => {
    if (node !== null) {
      resizeObserver.observe(node)
    }
    dispatch({ type: 'SET_CONTAINER', payload: node })
  }, [])

  // Initial load
  useEffect(() => {
    loadConfig()
    publish('cove_loaded', { loadConfigHasRun: true })
  }, [])

  useEffect(() => {
    if (config && !coveLoadedHasRan && container) {
      publish('cove_loaded', { config: config })
      dispatch({ type: 'SET_COVE_LOADED_HAS_RAN', payload: true })
    }
  }, [config, container])

  if (configObj && config && JSON.stringify(configObj.data) !== JSON.stringify(config.data)) {
    loadConfig()
  }

  let body = <Loading />

  const DataImage = useCallback(() => {
    let operators = {
      '<': (a, b) => {
        return a < b
      },
      '>': (a, b) => {
        return a > b
      },
      '<=': (a, b) => {
        return a <= b
      },
      '>=': (a, b) => {
        return a >= b
      },
      '≠': (a, b) => {
        return a !== b
      },
      '=': (a, b) => {
        return a === b
      }
    }
    let imageSource = imageData.url
    let imageAlt = imageData.alt

    if ('dynamic' === imageData.display && imageData.options && imageData.options?.length > 0) {
      let targetVal = Number(calculateDataBite(false))
      let argumentActive = false

      imageData.options.forEach((option, index) => {
        let argumentArr = option.arguments
        let { source, alt } = option

        if (false === argumentActive && argumentArr.length > 0) {
          if (argumentArr[0].operator.length > 0 && argumentArr[0].threshold.length > 0) {
            if (operators[argumentArr[0].operator](targetVal, argumentArr[0].threshold)) {
              if (undefined !== argumentArr[1]) {
                if (argumentArr[1].operator?.length > 0 && argumentArr[1].threshold?.length > 0) {
                  if (operators[argumentArr[1].operator](targetVal, argumentArr[1].threshold)) {
                    imageSource = source
                    if (alt !== '' && alt !== undefined) {
                      imageAlt = alt
                    }
                    argumentActive = true
                  }
                }
              } else {
                imageSource = source
                if (alt !== '' && alt !== undefined) {
                  imageAlt = alt
                }
                argumentActive = true
              }
            }
          }
        }
      })
    }

    return imageSource.length > 0 && 'graphic' !== biteStyle && 'none' !== imageData.display ? <img alt={imageAlt} src={imageSource} className='bite-image callout' /> : null
  }, [imageData])

  if (false === loading) {
    let biteClasses = []

    let isTop = false
    let isBottom = false

    switch (config.bitePosition) {
      case IMAGE_POSITION_LEFT:
        biteClasses.push('bite-left')
        isTop = true
        break
      case IMAGE_POSITION_RIGHT:
        biteClasses.push('bite-right')
        isTop = true
        break
      case IMAGE_POSITION_TOP:
        biteClasses.push('bite-top')
        isTop = true
        break
      case IMAGE_POSITION_BOTTOM:
        biteClasses.push('bite-bottom')
        isBottom = true
        break
    }

    const Error = () => {
      return (
        <section className='waiting'>
          <section className='waiting-container'>
            <h3>Error With Configuration</h3>
            <p>{config.runtime.editorErrorMessage}</p>
          </section>
        </section>
      )
    }

    const missingRequiredSections = () => {
      //Whether to show error message if something is required to show a data-bite and isn't filled in
      return false
    }

    const Confirm = () => {
      const styles = {
        position: 'relative',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gridArea: 'content'
      }
      return (
        <section className='waiting' style={styles}>
          <section className='waiting-container'>
            <h3>Finish Configuring</h3>
            <p>Set all required options to the left and confirm below to display a preview of the chart.</p>
            <button
              className='btn'
              style={{ margin: '1em auto' }}
              disabled={missingRequiredSections()}
              onClick={e => {
                e.preventDefault()
                updateConfig({ ...config, newViz: false })
              }}
            >
              I'm Done
            </button>
          </section>
        </section>
      )
    }

    const showBite = undefined !== dataColumn && undefined !== dataFunction
    body = (
      <>
        {isEditor && <EditorPanel />}
        <Layout.Responsive isEditor={isEditor}>
          {!config.newViz && config.runtime && config.runtime.editorErrorMessage && <Error />}
          {(!config.dataColumn || !config.dataFunction) && <Confirm />}
          <div className={`${contentClasses.join(' ')}`}>
            <Title config={config} title={title} isDashboard={isDashboard} classes={['bite-header', `${config.theme}`]} />
            <div className={`bite ${biteClasses.join(' ')}`}>
              <div className={`bite-content-container ${contentClasses.join(' ')}`}>
                {showBite && 'graphic' === biteStyle && isTop && <CircleCallout theme={config.theme} text={calculateDataBite()} biteFontSize={biteFontSize} dataFormat={dataFormat} />}
                {isTop && <DataImage />}
                <div className={`bite-content`}>
                  {showBite && 'title' === biteStyle && (
                    <div className='bite-value' style={{ fontSize: biteFontSize + 'px' }}>
                      {calculateDataBite()}
                    </div>
                  )}
                  {showBite && 'split' === biteStyle && (
                    <div className='bite-value' style={{ fontSize: biteFontSize + 'px' }}>
                      {calculateDataBite()}
                    </div>
                  )}
                  <Fragment>
                    <div className='bite-content__text-wrap'>
                      <p className='bite-text'>
                        {showBite && 'body' === biteStyle && (
                          <span className='bite-value data-bite-body' style={{ fontSize: biteFontSize + 'px' }}>
                            {calculateDataBite()}
                          </span>
                        )}
                        {parse(biteBody)}
                      </p>
                      {showBite && 'end' === biteStyle && (
                        <span className='bite-value data-bite-body' style={{ fontSize: biteFontSize + 'px' }}>
                          {calculateDataBite()}
                        </span>
                      )}
                      {subtext && !config.general.isCompactStyle && <p className='bite-subtext'>{parse(subtext)}</p>}
                    </div>
                  </Fragment>
                </div>
                {isBottom && <DataImage />}
                {showBite && 'graphic' === biteStyle && !isTop && <CircleCallout theme={config.theme} text={calculateDataBite()} biteFontSize={biteFontSize} dataFormat={dataFormat} />}
              </div>
            </div>
          </div>
          {link && link}
        </Layout.Responsive>
      </>
    )
  }

  return (
    <Context.Provider value={{ config, updateConfig, loading, data: config.data, setParentConfig, isDashboard }}>
      {biteStyle !== 'gradient' && (
        <Layout.VisualizationWrapper ref={outerContainerRef} config={config} isEditor={isEditor} showEditorPanel={config?.showEditorPanel}>
          {body}
        </Layout.VisualizationWrapper>
      )}
      {'gradient' === biteStyle && (
        <Layout.VisualizationWrapper ref={outerContainerRef} config={config} isEditor={isEditor} showEditorPanel={config?.showEditorPanel}>
          {isEditor && <EditorPanel />}
          <Layout.Responsive isEditor={isEditor}>
            <GradientBite label={config.title} value={calculateDataBite()} />
          </Layout.Responsive>
        </Layout.VisualizationWrapper>
      )}
    </Context.Provider>
  )
}

export default CdcDataBite

/* Constant */
export const DATA_FUNCTION_MAX = 'Max'
export const DATA_FUNCTION_COUNT = 'Count'
export const DATA_FUNCTION_MEAN = 'Mean (Average)'
export const DATA_FUNCTION_MEDIAN = 'Median'
export const DATA_FUNCTION_MIN = 'Min'
export const DATA_FUNCTION_MODE = 'Mode'
export const DATA_FUNCTION_RANGE = 'Range'
export const DATA_FUNCTION_SUM = 'Sum'
export const DATA_FUNCTIONS = [DATA_FUNCTION_COUNT, DATA_FUNCTION_MAX, DATA_FUNCTION_MEAN, DATA_FUNCTION_MEDIAN, DATA_FUNCTION_MIN, DATA_FUNCTION_MODE, DATA_FUNCTION_RANGE, DATA_FUNCTION_SUM]

export const BITE_LOCATION_TITLE = 'title'
export const BITE_LOCATION_BODY = 'body'
export const BITE_LOCATION_GRAPHIC = 'graphic'
export const BITE_LOCATIONS = {
  graphic: 'Graphic',
  split: 'Split Graphic and Message',
  title: 'Value above Message',
  body: 'Value before Message',
  end: 'Value after Message',
  gradient: 'Gradient'
}

export const IMAGE_POSITION_LEFT = 'Left'
export const IMAGE_POSITION_RIGHT = 'Right'
export const IMAGE_POSITION_TOP = 'Top'
export const IMAGE_POSITION_BOTTOM = 'Bottom'
export const IMAGE_POSITIONS = [IMAGE_POSITION_LEFT, IMAGE_POSITION_RIGHT, IMAGE_POSITION_TOP, IMAGE_POSITION_BOTTOM]

export const DATA_OPERATOR_LESS = '<'
export const DATA_OPERATOR_GREATER = '>'
export const DATA_OPERATOR_LESSEQUAL = '<='
export const DATA_OPERATOR_GREATEREQUAL = '>='
export const DATA_OPERATOR_EQUAL = '='
export const DATA_OPERATOR_NOTEQUAL = '≠'

export const DATA_OPERATORS = [DATA_OPERATOR_LESS, DATA_OPERATOR_GREATER, DATA_OPERATOR_LESSEQUAL, DATA_OPERATOR_GREATEREQUAL, DATA_OPERATOR_EQUAL, DATA_OPERATOR_NOTEQUAL]
