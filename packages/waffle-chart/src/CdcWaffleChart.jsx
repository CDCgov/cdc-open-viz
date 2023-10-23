import React, { useCallback, useEffect, useState } from 'react'
import parse from 'html-react-parser'
import { Group } from '@visx/group'
import { Circle, Bar } from '@visx/shape'
import { scaleLinear } from '@visx/scale'

import ResizeObserver from 'resize-observer-polyfill'
import getViewport from '@cdc/core/helpers/getViewport'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Loading from '@cdc/core/components/Loading'

import ConfigContext from './ConfigContext'
import EditorPanel from './components/EditorPanel'
import defaults from './data/initial-state'
import { Header } from '@cdc/core/components/ui/Header'
import { publish } from '@cdc/core/helpers/events'

import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'

import './scss/main.scss'

const themeColor = {
  'theme-blue': '#005eaa',
  'theme-purple': '#712177',
  'theme-brown': '#705043',
  'theme-teal': '#00695c',
  'theme-pink': '#af4448',
  'theme-orange': '#bb4d00',
  'theme-slate': '#29434e',
  'theme-indigo': '#26418f',
  'theme-cyan': '#006778',
  'theme-green': '#4b830d',
  'theme-amber': '#fbab18'
}

const WaffleChart = ({ config, isEditor, link }) => {
  let { title, theme, shape, nodeWidth, nodeSpacer, prefix, suffix, subtext, content, orientation, filters, dataColumn, dataFunction, dataConditionalColumn, dataConditionalOperator, dataConditionalComparate, customDenom, dataDenom, dataDenomColumn, dataDenomFunction, roundToPlace } = config

  const calculateData = useCallback(() => {
    //If either the column or function aren't set, do not calculate
    if (!dataColumn || !dataFunction) {
      return ''
    }

    const getColumnSum = arr => {
      if (Array.isArray(arr) && arr.length > 0) {
        const sum = arr.reduce((sum, x) => sum + x)
        return applyPrecision(sum)
      }
    }

    const getColumnMean = arr => {
      const mean = arr.length > 1 ? arr.reduce((a, b) => a + b) / arr.length : arr[0]
      return applyPrecision(mean)
    }

    const getMode = arr => {
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
      const mid = Math.floor(arr.length / 2),
        nums = [...arr].sort((a, b) => a - b)
      const value = arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
      return applyPrecision(value)
    }

    const applyPrecision = value => {
      if ('' !== roundToPlace && !isNaN(roundToPlace) && Number(roundToPlace) > -1) {
        value = Number(value).toFixed(Number(roundToPlace))
      }
      return value
    }

    //Optionally filter the data based on the user's filter
    let filteredData = config.data

    filters.map(filter => {
      if (filter.columnName && filter.columnValue) {
        filteredData = filteredData.filter(function (e) {
          return e[filter.columnName] === filter.columnValue
        })
      } else {
        return false
      }
    })

    let conditionalData = []

    if (dataConditionalColumn !== '' && dataConditionalOperator !== '' && dataConditionalComparate !== '') {
      switch (dataConditionalOperator) {
        case '<':
          conditionalData = filteredData.filter(e => e[dataConditionalColumn] < dataConditionalComparate)
          break
        case '>':
          conditionalData = filteredData.filter(e => e[dataConditionalColumn] > dataConditionalComparate)
          break
        case '<=':
          conditionalData = filteredData.filter(e => e[dataConditionalColumn] <= dataConditionalComparate)
          break
        case '>=':
          conditionalData = filteredData.filter(e => e[dataConditionalColumn] >= dataConditionalComparate)
          break
        case '=':
          if (isNaN(Number(dataConditionalComparate))) {
            conditionalData = filteredData.filter(e => String(e[dataConditionalColumn]) === dataConditionalComparate)
          } else {
            conditionalData = filteredData.filter(e => e[dataConditionalColumn] === dataConditionalComparate)
          }
          break
        case '≠':
          if (isNaN(Number(dataConditionalComparate))) {
            conditionalData = filteredData.filter(e => String(e[dataConditionalColumn]) !== dataConditionalComparate)
          } else {
            conditionalData = filteredData.filter(e => e[dataConditionalColumn] !== dataConditionalComparate)
          }
          break
        default:
          conditionalData = []
      }
    }

    //Get the column's data
    const columnData = conditionalData.length > 0 ? conditionalData.map(a => a[dataColumn]) : filteredData.map(a => a[dataColumn])
    const denomColumnData = filteredData.map(a => a[dataDenomColumn])

    //Filter the column's data for numerical values only
    let numericalData = columnData
      .filter(value => {
        let include = false
        if (Number(value) || Number.isFinite(Number(value))) {
          include = true
        }
        return include
      })
      .map(Number)

    let numericalDenomData = denomColumnData
      .filter(value => {
        let include = false
        if (Number(value) || Number.isFinite(Number(value))) {
          include = true
        }
        return include
      })
      .map(Number)

    // Calculate numerator  ------------------
    let waffleNumerator = ''

    const numerFunctionList = {
      [DATA_FUNCTION_COUNT]: String(numericalData.length),
      [DATA_FUNCTION_SUM]: String(getColumnSum(numericalData)),
      [DATA_FUNCTION_MEAN]: String(getColumnMean(numericalData)),
      [DATA_FUNCTION_MEDIAN]: getMedian(numericalData).toString(),
      [DATA_FUNCTION_MAX]: Math.max(...numericalData).toString(),
      [DATA_FUNCTION_MIN]: Math.min(...numericalData).toString(),
      [DATA_FUNCTION_MODE]: getMode(numericalData).join(', ')
    }

    waffleNumerator = numerFunctionList[dataFunction]

    // Calculate denominator ------------------
    let waffleDenominator = null

    const denomFunctionList = {
      [DATA_FUNCTION_COUNT]: String(numericalDenomData.length),
      [DATA_FUNCTION_SUM]: String(getColumnSum(numericalDenomData)),
      [DATA_FUNCTION_MEAN]: String(getColumnMean(numericalDenomData)),
      [DATA_FUNCTION_MEDIAN]: getMedian(numericalDenomData).toString(),
      [DATA_FUNCTION_MAX]: Math.max(...numericalDenomData).toString(),
      [DATA_FUNCTION_MIN]: Math.min(...numericalDenomData).toString(),
      [DATA_FUNCTION_MODE]: getMode(numericalDenomData).join(', ')
    }

    if (customDenom && dataDenomColumn && dataDenomFunction) {
      waffleDenominator = denomFunctionList[dataDenomFunction]
    } else {
      waffleDenominator = dataDenom > 0 ? dataDenom : 100
    }

    // @ts-ignore
    return [applyPrecision((waffleNumerator / waffleDenominator) * 100), waffleDenominator, applyPrecision(waffleNumerator)]
  }, [dataColumn, dataFunction, config.data, filters, dataConditionalColumn, dataConditionalOperator, dataConditionalComparate, customDenom, dataDenomColumn, dataDenomFunction, roundToPlace, dataDenom])

  const [dataPercentage, waffleDenominator, waffleNumerator] = calculateData()

  const buildWaffle = useCallback(() => {
    let waffleData = []
    let nodeWidthNum = parseInt(nodeWidth, 10)
    let nodeSpacerNum = parseInt(nodeSpacer, 10)

    const calculatePos = (shape, axis, index, width, spacer) => {
      let mod = axis === 'x' ? index % 10 : axis === 'y' ? Math.floor(index / 10) : null
      return shape === 'circle' ? mod * (width + spacer) + width / 2 : mod * (width + spacer)
    }

    for (let i = 0; i < 100; i++) {
      let newNode = {
        shape: shape,
        x: calculatePos(shape, 'x', i, nodeWidthNum, nodeSpacerNum),
        y: calculatePos(shape, 'y', i, nodeWidthNum, nodeSpacerNum),
        color: themeColor[theme],
        opacity: i + 1 > 100 - Math.round(dataPercentage) ? 1 : 0.35
      }
      waffleData.push(newNode)
    }

    return waffleData.map((node, key) =>
      node.shape === 'square' ? (
        <Bar className='cdc-waffle-chart__node' style={{ transitionDelay: `${0.1 * key}ms` }} x={node.x} y={node.y} width={nodeWidthNum} height={nodeWidthNum} fill={node.color} fillOpacity={node.opacity} key={key} />
      ) : node.shape === 'person' ? (
        <path
          style={{ transform: `translateX(${node.x + nodeWidthNum / 4}px) translateY(${node.y}px) scale(${nodeWidthNum / 20})` }}
          fill={node.color}
          fillOpacity={node.opacity}
          key={key}
          d='M3.75,0a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,3.75,0M5.625,5.625H5.18125a3.433,3.433,0,0,1-2.8625,0H1.875A1.875,1.875,
                          0,0,0,0,7.5v5.3125a.9375.9375,0,0,0,.9375.9375h.625v5.3125A.9375.9375,0,0,0,2.5,20H5a.9375.9375,0,0,0,
                          .9375-.9375V13.75h.625A.9375.9375,0,0,0,7.5,12.8125V7.5A1.875,1.875,0,0,0,5.625,5.625Z'
        ></path>
      ) : (
        <Circle className='cdc-waffle-chart__node' style={{ transitionDelay: `${0.1 * key}ms` }} cx={node.x} cy={node.y} r={nodeWidthNum / 2} fill={node.color} fillOpacity={node.opacity} key={key} />
      )
    )
  }, [theme, dataPercentage, shape, nodeWidth, nodeSpacer])

  const setRatio = useCallback(() => {
    return nodeWidth * 10 + nodeSpacer * 9
  }, [nodeWidth, nodeSpacer])

  let dataFontSize = config.fontSize ? { fontSize: config.fontSize + 'px' } : null

  const { innerContainerClasses, contentClasses } = useDataVizClasses(config)

  const handleWaffleChartAriaLabel = (state, testing = false) => {
    if (testing) console.log(`handleWaffleChartAriaLabels Testing On:`, state)
    try {
      let ariaLabel = 'Waffle chart'
      if (state.title) {
        ariaLabel += ` with the title: ${state.title}`
      }
      return ariaLabel
    } catch (e) {
      console.error(e.message)
    }
  }
  const gaugeWidth = '100%'
  const gaugeHeight = 35

  const xScale = scaleLinear({
    domain: [0, waffleDenominator],
    range: [0, gaugeWidth]
  })
  const gaugeColor = themeColor[theme]

  return (
    <div className={innerContainerClasses.join(' ')}>
      <>
        <Header title={title} config={config} classes={['chart-title', `${config.theme}`]} />
        <div className={contentClasses.join(' ')}>
          <div className='cove-component__content-wrap'>
            {config.visualizationType === 'Gauge' && (
              <div className={`cove-gauge-chart${config.overallFontSize ? ' font-' + config.overallFontSize : ''}`}>
                <div className='cove-gauge-chart__chart'>
                  <div className='cove-waffle-chart__data--primary' style={dataFontSize}>
                    {prefix ? prefix : ' '}
                    {config.showPercent ? dataPercentage : waffleNumerator}
                    {suffix ? suffix + ' ' : ' '} {config.valueDescription} {config.showDenominator && waffleDenominator ? waffleDenominator : ' '}
                  </div>
                  <div className='cove-waffle-chart__data--text'>{parse(content)}</div>
                  <svg height={gaugeHeight} width={'100%'}>
                    <Group>
                      <foreignObject style={{ border: '1px solid black' }} x={0} y={0} width={gaugeWidth} height={gaugeHeight} fill='#fff' />
                      <Bar x={0} y={0} width={xScale(waffleNumerator)} height={gaugeHeight} fill={gaugeColor} />
                    </Group>
                  </svg>
                  <div className={'cove-waffle-chart__subtext subtext'}>{parse(subtext)}</div>
                </div>
              </div>
            )}
            {config.visualizationType !== 'Gauge' && (
              <div className={`cove-waffle-chart${orientation === 'vertical' ? ' cove-waffle-chart--verical' : ''}${config.overallFontSize ? ' font-' + config.overallFontSize : ''}`}>
                <div className='cove-waffle-chart__chart' style={{ width: setRatio() }}>
                  <svg width={setRatio()} height={setRatio()} role='img' aria-label={handleWaffleChartAriaLabel(config)} tabIndex={0}>
                    <Group>{buildWaffle()}</Group>
                  </svg>
                </div>
                {(dataPercentage || content) && (
                  <div className='cove-waffle-chart__data'>
                    {dataPercentage && (
                      <div className='cove-waffle-chart__data--primary' style={dataFontSize}>
                        {prefix ? prefix : null}
                        {dataPercentage}
                        {suffix ? suffix : null}
                      </div>
                    )}
                    <div className='cove-waffle-chart__data--text'>{parse(content)}</div>

                    {subtext && <div className='cove-waffle-chart__subtext subtext'>{parse(subtext)}</div>}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {link && link}
      </>
    </div>
  )
}

const CdcWaffleChart = ({ configUrl, config: configObj, isDashboard = false, isEditor = false, setConfig: setParentConfig }) => {
  // Default States
  const [config, setConfig] = useState({ ...defaults })
  const [loading, setLoading] = useState(true)

  const [currentViewport, setCurrentViewport] = useState('lg')
  const [coveLoadedHasRan, setCoveLoadedHasRan] = useState(false)
  const [container, setContainer] = useState()

  // Default Functions
  const updateConfig = newConfig => {
    Object.keys(defaults).forEach(key => {
      if (newConfig[key] && 'object' === typeof newConfig[key] && !Array.isArray(newConfig[key])) {
        newConfig[key] = { ...defaults[key], ...newConfig[key] }
      }
    })

    newConfig.runtime = {}
    newConfig.runtime.uniqueId = Date.now()

    newConfig.runtime.editorErrorMessage = ''
    setConfig(newConfig)
  }

  const loadConfig = useCallback(async () => {
    let response = configObj || (await (await fetch(configUrl)).json())
    let responseData = response.data ?? {}

    if (response.dataUrl) {
      responseData = await fetchRemoteData(response.dataUrl)
    }

    response.data = responseData

    const processedConfig = { ...(await coveUpdateWorker(response)) }
    updateConfig({ ...defaults, ...processedConfig })
    setLoading(false)
  }, [])

  // Custom Functions

  // --Observes changes to outermost container and changes viewport size in state
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      let newViewport = getViewport(entry.contentRect.width * 2) // Data bite is usually presented as small, so we scale it up for responsive calculations

      setCurrentViewport(newViewport)
    }
  })

  const outerContainerRef = useCallback(node => {
    if (node !== null) {
      resizeObserver.observe(node)
    }
    setContainer(node)
  }, [])

  //Load initial config
  useEffect(() => {
    loadConfig().catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (config && !coveLoadedHasRan && container) {
      publish('cove_loaded', { config: config })
      setCoveLoadedHasRan(true)
    }
  }, [config, container])

  //Reload config if config object provided/updated
  useEffect(() => {
    loadConfig().catch(err => console.log(err))
  }, [])

  //Reload config if parent passes different config
  if (configObj) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!configObj.dataUrl) {
        updateConfig({ ...defaults, ...configObj })
      }
    }, [configObj.data])
  }

  let content = <Loading />

  if (loading === false) {
    let classNames = ['cove', 'cdc-open-viz-module', 'type-waffle-chart', currentViewport, config.theme, 'font-' + config.overallFontSize]

    if (isEditor) {
      classNames.push('is-editor')
    }

    let bodyClasses = ['cove-component', 'waffle-chart']

    let body = (
      <div className={`${bodyClasses.join(' ')}`} ref={outerContainerRef}>
        <WaffleChart config={config} isEditor={isEditor} />
      </div>
    )

    content = (
      <div className={classNames.join(' ')}>
        {isEditor && <EditorPanel>{body}</EditorPanel>}
        {!isEditor && body}
      </div>
    )
  }

  return (
    <ErrorBoundary component='WaffleChart'>
      <ConfigContext.Provider value={{ config, updateConfig, loading, data: config.data, setParentConfig, isDashboard, outerContainerRef }}>{content}</ConfigContext.Provider>
    </ErrorBoundary>
  )
}

export default CdcWaffleChart

export const DATA_FUNCTION_MAX = 'Max'
export const DATA_FUNCTION_COUNT = 'Count'
export const DATA_FUNCTION_MEAN = 'Mean (Average)'
export const DATA_FUNCTION_MEDIAN = 'Median'
export const DATA_FUNCTION_MIN = 'Min'
export const DATA_FUNCTION_MODE = 'Mode'
export const DATA_FUNCTION_SUM = 'Sum'

export const DATA_FUNCTIONS = [DATA_FUNCTION_COUNT, DATA_FUNCTION_MAX, DATA_FUNCTION_MEAN, DATA_FUNCTION_MEDIAN, DATA_FUNCTION_MIN, DATA_FUNCTION_MODE, DATA_FUNCTION_SUM]

export const DATA_OPERATOR_LESS = '<'
export const DATA_OPERATOR_GREATER = '>'
export const DATA_OPERATOR_LESSEQUAL = '<='
export const DATA_OPERATOR_GREATEREQUAL = '>='
export const DATA_OPERATOR_EQUAL = '='
export const DATA_OPERATOR_NOTEQUAL = '≠'

export const DATA_OPERATORS = [DATA_OPERATOR_LESS, DATA_OPERATOR_GREATER, DATA_OPERATOR_LESSEQUAL, DATA_OPERATOR_GREATEREQUAL, DATA_OPERATOR_EQUAL, DATA_OPERATOR_NOTEQUAL]
