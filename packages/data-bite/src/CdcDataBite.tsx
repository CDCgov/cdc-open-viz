import { useEffect, useCallback, useMemo, useReducer } from 'react'
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
import { VisualizationContainer, VisualizationContent } from '@cdc/core/components/Layout'
import TrendArrow from '@cdc/core/components/ui/TrendArrow'

// external
import ResizeObserver from 'resize-observer-polyfill'
import parse from 'html-react-parser'

// markup processing
import { processMarkupVariables } from '@cdc/core/helpers/markupProcessor'

// helpers
import getViewport from '@cdc/core/helpers/getViewport'
import { DataTransform } from '@cdc/core/helpers/DataTransform'
import numberFromString from '@cdc/core/helpers/numberFromString'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import { publish } from '@cdc/core/helpers/events'
import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'
import cacheBustingString from '@cdc/core/helpers/cacheBustingString'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
import { backfillDefaults } from '@cdc/core/helpers/backfillDefaults'
import { aggregateByDataFunction } from '@cdc/core/helpers/dataAggregation'
import { Config } from './types/Config'
import dataBiteReducer from './store/db.reducer'
import { IMAGE_POSITION_LEFT, IMAGE_POSITION_RIGHT, IMAGE_POSITION_TOP, IMAGE_POSITION_BOTTOM } from './constants'

// images
import CalloutFlag from '@cdc/core/assets/callout-flag.svg?url'

import {
  DATA_FUNCTION_COUNT,
  DATA_FUNCTION_MAX,
  DATA_FUNCTION_MEAN,
  DATA_FUNCTION_MEDIAN,
  DATA_FUNCTION_MODE,
  DATA_FUNCTION_MIN,
  DATA_FUNCTION_PASSTHROUGH,
  DATA_FUNCTION_RANGE,
  DATA_FUNCTION_SUM
} from '@cdc/core/helpers/constants'
import {
  resolveTrendIndicator,
  TREND_ARROW_DOWN,
  TREND_ARROW_UP,
  TREND_MODE_CATEGORICAL,
  TREND_MODE_NUMERIC
} from '@cdc/core/helpers/trendIndicator'

// styles
import './scss/main.scss'

type CdcDataBiteProps = {
  config: Config
  configUrl: string
  isDashboard: boolean
  isEditor: boolean
  rawData?: Record<string, any>[]
  setConfig: () => {}
  link: any
  interactionLabel: string
}

const CdcDataBite = (props: CdcDataBiteProps) => {
  const {
    configUrl,
    config: configObj,
    isDashboard = false,
    isEditor = false,
    rawData = [],
    setConfig: setParentConfig,
    link,
    interactionLabel = ''
  } = props

  // Ensure imageData and dataFormat sub-fields are always defined before the reducer initializes.
  // Defaults must match initial-state.js — updateConfig() will enforce them again once loading completes.
  const safeConfigObj = {
    ...defaults,
    ...configObj,
    imageData: {
      ...defaults.imageData,
      ...(configObj?.imageData || {}),
      display: configObj?.imageData?.display ?? 'none',
      prefix: configObj?.imageData?.prefix ?? ''
    },
    dataFormat: {
      ...defaults.dataFormat,
      ...(configObj?.dataFormat || {}),
      prefix: configObj?.dataFormat?.prefix ?? '',
      suffix: configObj?.dataFormat?.suffix ?? '%',
      roundToPlace: configObj?.dataFormat?.roundToPlace ?? 0,
      commas: configObj?.dataFormat?.commas ?? true
    },
    visual: {
      ...defaults.visual,
      ...(configObj?.visual || {})
    },
    general: {
      ...defaults.general,
      ...(configObj?.general || {})
    }
  }

  const initialState = {
    config: safeConfigObj ?? defaults,
    loading: true,
    currentViewport: 'lg',
    coveLoadedHasRan: false,
    container: null
  }

  const [state, dispatch] = useReducer(dataBiteReducer, initialState)

  const { config, loading, currentViewport, coveLoadedHasRan, container } = state

  const {
    title,
    dataColumn,
    dataFunction,
    imageData,
    biteBody,
    biteFontSize,
    dataFormat,
    biteStyle,
    filters,
    subtext,
    trendIndicator,
    markupVariables,
    enableMarkupVariables
  } = config

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
    backfillDefaults(newConfig, defaults)

    //Enforce default values that need to be calculated at runtime
    newConfig.runtime = {}
    newConfig.runtime.uniqueId = Date.now()

    //Check things that are needed and set error messages if needed
    newConfig.runtime.editorErrorMessage = ''
    dispatch({ type: 'SET_CONFIG', payload: newConfig })
  }

  //@ts-ignore
  const loadConfig = async () => {
    let response = configObj

    if (!response && configUrl) {
      try {
        const fetchResponse = await fetch(configUrl)
        if (fetchResponse.ok) {
          const text = await fetchResponse.text()
          response = text ? JSON.parse(text) : {}
        } else {
          console.warn(`Failed to fetch config from ${configUrl}: ${fetchResponse.status}`)
          response = {}
        }
      } catch (error) {
        console.warn(`Error loading config from ${configUrl}:`, error)
        response = {}
      }
    } else if (!response) {
      response = {}
    }

    // If data is included through a URL, fetch that and store
    let responseData = response.data ?? []

    if (response.dataUrl) {
      response.dataUrl = `${response.dataUrl}?${cacheBustingString()}`
      let { data: newData, dataMetadata } = await fetchRemoteData(response.dataUrl)
      response.dataMetadata = dataMetadata

      if (newData && response.dataDescription) {
        newData = transform.autoStandardize(newData)
        newData = transform.developerStandardize(newData, response.dataDescription)
      }

      if (newData) {
        responseData = newData
      }
    }

    response.data = responseData

    const processedConfig = { ...coveUpdateWorker(response) }

    // Migrate: borders always showed in previous versions regardless of config,
    // so treat any existing config without an explicit border setting as having borders on.
    if (processedConfig.visual && processedConfig.visual.border === false) {
      processedConfig.visual.border = true
    }

    updateConfig({ ...defaults, ...processedConfig })
    dispatch({ type: 'SET_LOADING', payload: false })
  }

  // Process markup variables in content
  const processContentWithMarkup = (content: string) => {
    if (!enableMarkupVariables || !markupVariables || markupVariables.length === 0) {
      return content
    }

    const result = processMarkupVariables(content, config.data, markupVariables, {
      isEditor,
      showNoDataMessage: false,
      allowHideSection: false,
      filters: config.filters || [],
      locale: config.locale,
      dataMetadata: config.dataMetadata
    })

    return result.processedContent
  }

  const getFilteredDataRows = useCallback(() => {
    let filteredDataRows = Array.isArray(config.data) ? config.data : []

    ;(filters || []).forEach(filter => {
      if (filter.columnName && filter.columnValue) {
        filteredDataRows = filteredDataRows.filter(row => row[filter.columnName] === filter.columnValue)
      }
    })

    return filteredDataRows
  }, [config.data, filters])

  const getRowsForMainNumericCalculation = useCallback(() => {
    const filteredDataRows = getFilteredDataRows()
    const allRows = Array.isArray(config.data) ? config.data : []
    return filteredDataRows.length ? filteredDataRows : allRows
  }, [config.data, getFilteredDataRows])

  const trendResolution = useMemo(() => {
    const mode = trendIndicator?.mode
    const shouldUseMainCalculationRows =
      mode === TREND_MODE_NUMERIC || (mode === TREND_MODE_CATEGORICAL && dataFunction === DATA_FUNCTION_PASSTHROUGH)
    const trendDataRows = shouldUseMainCalculationRows ? getRowsForMainNumericCalculation() : getFilteredDataRows()

    return resolveTrendIndicator({
      data: trendDataRows,
      trendIndicator,
      mainDataFunction: dataFunction,
      mainDataColumn: dataColumn,
      allowNumericMode: true
    })
  }, [trendIndicator, dataFunction, dataColumn, getRowsForMainNumericCalculation, getFilteredDataRows])

  const resolvedTrendLabel = useMemo(() => {
    if (trendResolution.state !== 'resolved' || !trendResolution.arrowType) {
      return ''
    }

    const label =
      trendResolution.arrowType === TREND_ARROW_UP
        ? trendIndicator?.upLabel
        : trendResolution.arrowType === TREND_ARROW_DOWN
        ? trendIndicator?.downLabel
        : ''

    const raw = typeof label === 'string' ? label.trim() : ''
    return raw ? processContentWithMarkup(raw) : ''
  }, [
    trendIndicator?.downLabel,
    trendIndicator?.upLabel,
    trendResolution.arrowType,
    trendResolution.state,
    enableMarkupVariables,
    markupVariables,
    config.data,
    config.filters,
    config.locale,
    config.dataMetadata
  ])
  const resolvedTrendFooterLabel = useMemo(() => {
    const raw = typeof trendIndicator?.trendLabel === 'string' ? trendIndicator.trendLabel.trim() : ''
    return raw ? processContentWithMarkup(raw) : ''
  }, [
    trendIndicator?.trendLabel,
    enableMarkupVariables,
    markupVariables,
    config.data,
    config.filters,
    config.locale,
    config.dataMetadata
  ])

  const renderTrendArrow = ({ wrapperClassName = '' } = {}) => {
    if (trendResolution.state !== 'resolved' || !trendResolution.arrowType) {
      return null
    }
    const ariaLabel = `Trend ${trendResolution.arrowType}${resolvedTrendLabel ? `: ${resolvedTrendLabel}` : ''}`
    const resolvedWrapperClassName = [wrapperClassName, resolvedTrendLabel ? 'cove-trend-arrow__wrap--with-label' : '']
      .filter(Boolean)
      .join(' ')

    return (
      <TrendArrow
        arrowType={trendResolution.arrowType}
        label={resolvedTrendLabel}
        ariaLabel={ariaLabel}
        wrapperClassName={resolvedWrapperClassName}
      />
    )
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

    const applyLocaleString = value => {
      if (value === undefined || value === null) return
      if (Number.isNaN(value) || typeof value === 'number') {
        value = String(value)
      }
      let formattedValue = parseFloat(value).toLocaleString(config.locale, {
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

    const filteredData = getFilteredDataRows()

    if (dataFunction === DATA_FUNCTION_PASSTHROUGH) {
      const sourceData = filteredData.length ? filteredData : config.data
      if (sourceData && sourceData.length > 0) {
        const rawValue = sourceData[0][dataColumn]
        dataBite = rawValue !== undefined && rawValue !== null ? String(rawValue) : ''
      }

      if (typeof numberFromString(dataBite) === 'number') {
        dataBite = applyPrecision(dataBite)
        if (config.dataFormat.commas) {
          dataBite = applyLocaleString(dataBite)
        }
      }

      return includePrefixSuffix ? dataFormat.prefix + dataBite + dataFormat.suffix : dataBite
    }

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
      case DATA_FUNCTION_COUNT: {
        const countValues = config.dataFormat.ignoreZeros ? numericalData.filter(item => item && item) : numericalData
        const countResult = aggregateByDataFunction(countValues, DATA_FUNCTION_COUNT)
        dataBite = String(countResult)
        break
      }
      case DATA_FUNCTION_SUM:
      case DATA_FUNCTION_MEDIAN:
      case DATA_FUNCTION_MAX:
      case DATA_FUNCTION_MIN: {
        const aggregateResult = aggregateByDataFunction(numericalData, dataFunction)
        dataBite = String(aggregateResult)
        break
      }
      case DATA_FUNCTION_MEAN: {
        const meanValues = config.dataFormat.ignoreZeros ? numericalData.filter(num => num !== 0) : numericalData
        const meanResult = aggregateByDataFunction(meanValues, DATA_FUNCTION_MEAN)
        dataBite = String(meanResult)
        break
      }
      case DATA_FUNCTION_MODE: {
        const modeValues = aggregateByDataFunction(numericalData, DATA_FUNCTION_MODE)
        dataBite = Array.isArray(modeValues) ? modeValues.join('') : String(modeValues)
        break
      }
      case DATA_FUNCTION_RANGE:
        const rangeValues = aggregateByDataFunction(numericalData, DATA_FUNCTION_RANGE)
        if (Array.isArray(rangeValues) && rangeValues.length === 2) {
          let rangeMin = applyPrecision(rangeValues[0])
          let rangeMax = applyPrecision(rangeValues[1])
          if (config.dataFormat.commas) {
            rangeMin = applyLocaleString(rangeMin)
            rangeMax = applyLocaleString(rangeMax)
          }
          dataBite =
            config.dataFormat.prefix +
            rangeMin +
            config.dataFormat.suffix +
            ' - ' +
            config.dataFormat.prefix +
            rangeMax +
            config.dataFormat.suffix
        } else {
          dataBite = String(rangeValues)
        }
        break
      default:
        console.warn('Data bite function not recognized: ' + dataFunction) // eslint-disable-line no-console
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
  const isCompactStyle = config.general?.isCompactStyle ?? false
  const bodySubtext =
    subtext && !isCompactStyle ? (
      <p className='bite-subtext cove-prose mt-0'>{parse(processContentWithMarkup(subtext))}</p>
    ) : null

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

    return imageSource.length > 0 && 'graphic' !== biteStyle && 'none' !== imageData.display ? (
      <img alt={imageAlt} src={imageSource} className='bite-image callout' />
    ) : null
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

    const missingRequiredSections = () => {
      //Whether to show error message if something is required to show a data-bite and isn't filled in
      return false
    }

    const Error = () => {
      const styles = {
        position: 'absolute',
        background: 'white',
        zIndex: '999',
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
            <h3>Error With Configuration</h3>
            <p>{config.runtime.editorErrorMessage}</p>
          </section>
        </section>
      )
    }

    const Confirm = () => {
      const styles = {
        position: 'absolute',
        background: 'white',
        zIndex: '999',
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
              className='btn btn-primary'
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
    const isTp5 = showBite && biteStyle === 'tp5'
    const hasTrendArrow = trendResolution.state === 'resolved' && !!trendResolution.arrowType
    const shouldUseTrendBelow = Boolean(hasTrendArrow && (resolvedTrendLabel || resolvedTrendFooterLabel))
    const shouldUseContentBelow = Boolean(config.visual?.useWrap || shouldUseTrendBelow)
    const tp5BodyLayoutClasses = [
      'cdc-callout__body',
      'flex-grow-1',
      shouldUseContentBelow ? 'cdc-callout__body--content-below' : 'cdc-callout__body--content-right',
      shouldUseTrendBelow ? 'cdc-callout__body--trend-below' : 'cdc-callout__body--trend-inline'
    ]
      .filter(Boolean)
      .join(' ')
    const bodyClasses = [
      ...innerContainerClasses,
      ...contentClasses,
      isTp5 ? 'bite__style--tp5' : '',
      isTp5 && config.visual?.whiteBackground ? 'white-background-style' : '',
      isTp5 && config.visual?.whiteBackground && config.visual?.border ? 'display-border' : '',
      isTp5 && config.visual?.useWrap ? 'use-wrap' : '',
      !config.visual?.border ? 'no-borders' : ''
    ]
      .filter(Boolean)
      .join(' ')
    body = (
      <>
        <VisualizationContent
          bodyClassName={bodyClasses}
          header={
            !isTp5 ? (
              <Title
                showTitle={config.visual?.showTitle}
                titleStyle='legacy'
                config={config}
                title={processContentWithMarkup(title)}
                isDashboard={isDashboard}
                classes={['bite-header', `${config.theme}`]}
              />
            ) : null
          }
          footer={link && link}
        >
          {!config.newViz && config.runtime && config.runtime.editorErrorMessage && <Error />}
          {(!config.dataColumn || !config.dataFunction) && <Confirm />}
          {showBite && biteStyle === 'tp5' ? (
            <div
              className={`bite-content cdc-callout d-flex flex-column h-100 ${
                !config.visual?.whiteBackground ? 'dfe-block cdc-callout--data' : ''
              }`}
            >
              {!config.visual?.whiteBackground && (
                <img src={CalloutFlag} alt='' className='cdc-callout__flag' aria-hidden='true' />
              )}

              {config.visual?.showTitle && title && title.trim() && (
                <h3 className='cdc-callout__heading cove-prose fw-bold flex-shrink-0 d-flex align-items-start'>
                  <span>{parse(processContentWithMarkup(title))}</span>
                </h3>
              )}
              <div className={tp5BodyLayoutClasses}>
                {showBite && (
                  <div className='cdc-callout__databite cdc-callout__metric-block flex-shrink-0'>
                    <div className='cdc-callout__value-row'>
                      <span className='cdc-callout__value'>{calculateDataBite(true)}</span>
                      {!shouldUseTrendBelow && hasTrendArrow && (
                        <span className='cdc-callout__trend-slot cdc-callout__trend-slot--inline'>
                          {renderTrendArrow({
                            wrapperClassName: 'cove-trend-arrow__wrap--inline'
                          })}
                        </span>
                      )}
                    </div>
                    {shouldUseTrendBelow && hasTrendArrow && (
                      <div className='cdc-callout__trend-row'>
                        <span className='cdc-callout__trend-slot cdc-callout__trend-slot--below'>
                          {renderTrendArrow({
                            wrapperClassName: 'cove-trend-arrow__wrap--below'
                          })}
                        </span>
                        {resolvedTrendFooterLabel && (
                          <span className='cdc-callout__trend-footer-label'>{resolvedTrendFooterLabel}</span>
                        )}
                      </div>
                    )}
                  </div>
                )}
                <div className='cdc-callout__content cove-prose cdc-callout__content-slot flex-grow-1 d-flex flex-column min-w-0'>
                  <p className='mb-0'>{parse(processContentWithMarkup(biteBody))}</p>
                  {subtext && !isCompactStyle && (
                    <p className='bite-subtext fst-italic flex-shrink-0'>{parse(processContentWithMarkup(subtext))}</p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className={`bite ${biteClasses.join(' ')}`}>
              <div className='bite-content-container'>
                {showBite && 'graphic' === biteStyle && isTop && (
                  <CircleCallout
                    theme={config.theme}
                    text={calculateDataBite()}
                    biteFontSize={biteFontSize}
                    dataFormat={dataFormat}
                  />
                )}
                {isTop && <DataImage />}
                <div className={`bite-content`}>
                  {showBite && 'title' === biteStyle && (
                    <div className='bite-value' style={{ fontSize: biteFontSize + 'px' }}>
                      {calculateDataBite()}
                    </div>
                  )}
                  {showBite && 'split' === biteStyle && (
                    <div className='bite-value cove-value-with-trend' style={{ fontSize: biteFontSize + 'px' }}>
                      {calculateDataBite()}
                    </div>
                  )}
                  <Fragment>
                    <div className='bite-content__text-wrap cove-prose'>
                      <p className='bite-text'>
                        {showBite && 'body' === biteStyle && (
                          <span
                            className='bite-value data-bite-body cove-value-with-trend'
                            style={{ fontSize: biteFontSize + 'px' }}
                          >
                            {calculateDataBite()}
                          </span>
                        )}
                        {parse(processContentWithMarkup(biteBody))}
                      </p>
                      {showBite && 'end' === biteStyle && (
                        <span
                          className='bite-value data-bite-body cove-value-with-trend'
                          style={{ fontSize: biteFontSize + 'px' }}
                        >
                          {calculateDataBite()}
                        </span>
                      )}
                      {bodySubtext}
                    </div>
                  </Fragment>
                </div>
                {isBottom && <DataImage />}
                {showBite && 'graphic' === biteStyle && !isTop && (
                  <CircleCallout
                    theme={config.theme}
                    text={calculateDataBite()}
                    biteFontSize={biteFontSize}
                    dataFormat={dataFormat}
                  />
                )}
              </div>
            </div>
          )}
        </VisualizationContent>
      </>
    )
  }

  return (
    <Context.Provider
      value={{
        config,
        updateConfig,
        loading,
        data: config.data,
        editorData: isDashboard && isEditor && Array.isArray(rawData) && rawData.length ? rawData : config.data,
        setParentConfig,
        isDashboard,
        isEditor
      }}
    >
      {biteStyle !== 'gradient' && (
        <VisualizationContainer
          ref={outerContainerRef}
          config={config}
          isEditor={isEditor}
          currentViewport={currentViewport}
          editorPanel={<EditorPanel />}
        >
          {body}
        </VisualizationContainer>
      )}
      {'gradient' === biteStyle && (
        <VisualizationContainer
          ref={outerContainerRef}
          config={config}
          isEditor={isEditor}
          currentViewport={currentViewport}
          editorPanel={<EditorPanel />}
        >
          <VisualizationContent
            bodyClassName={[...innerContainerClasses, ...contentClasses, 'bite__style--gradient']
              .filter(Boolean)
              .join(' ')}
            footer={link && link}
            subtext={bodySubtext}
          >
            {!config.newViz && config.runtime && config.runtime.editorErrorMessage && <Error />}
            {(!config.dataColumn || !config.dataFunction) && <Confirm />}
            <GradientBite label={config.title} value={calculateDataBite()} />
          </VisualizationContent>
        </VisualizationContainer>
      )}
    </Context.Provider>
  )
}

export default CdcDataBite
