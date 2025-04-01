import React, { useCallback, useEffect, useReducer, useState } from 'react'

// visx
import { Circle, Bar } from '@visx/shape'
import { Group } from '@visx/group'
import { scaleLinear } from '@visx/scale'

// external
import parse from 'html-react-parser'
import ResizeObserver from 'resize-observer-polyfill'

// cdc
import { Config } from './types/Config'
import getViewport from '@cdc/core/helpers/getViewport'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Loading from '@cdc/core/components/Loading'

import ConfigContext from './ConfigContext'
import EditorPanel from './components/EditorPanel'
import defaults from './data/initial-state'
import { publish } from '@cdc/core/helpers/events'
import chartReducer from './store/chart.reducer'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'

import './scss/main.scss'
import Title from '@cdc/core/components/ui/Title'
import Layout from '@cdc/core/components/Layout'

type CdcWaffleChartProps = {
  configUrl?: string
  config?: Config
  isDashboard?: boolean
  isEditor?: boolean
  link?: string
  setConfig?: () => void
}

const WaffleChart = ({ config, isEditor, link = '', showConfigConfirm, updateConfig }) => {
  const {
    title,
    theme,
    shape,
    nodeWidth,
    nodeSpacer,
    prefix,
    suffix,
    subtext,
    content,
    orientation,
    filters,
    dataColumn,
    dataFunction,
    dataConditionalColumn,
    dataConditionalOperator,
    dataConditionalComparate,
    customDenom,
    dataDenom,
    dataDenomColumn,
    dataDenomFunction,
    roundToPlace
  } = config

  const gaugeColor = config.visual.colors[config.theme]
  let dataFontSize = config.fontSize ? { fontSize: config.fontSize + 'px' } : null

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
    const columnData =
      conditionalData.length > 0 ? conditionalData.map(a => a[dataColumn]) : filteredData.map(a => a[dataColumn])
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
    return [
      applyPrecision((waffleNumerator / waffleDenominator) * 100),
      waffleDenominator,
      applyPrecision(waffleNumerator)
    ]
  }, [
    dataColumn,
    dataFunction,
    config.data,
    filters,
    dataConditionalColumn,
    dataConditionalOperator,
    dataConditionalComparate,
    customDenom,
    dataDenomColumn,
    dataDenomFunction,
    roundToPlace,
    dataDenom
  ])

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
        color: config.visual.colors[theme],
        opacity: i + 1 > 100 - Math.round(dataPercentage) ? 1 : 0.35
      }
      waffleData.push(newNode)
    }

    return waffleData.map((node, key) =>
      node.shape === 'square' ? (
        <Bar
          className='cdc-waffle-chart__node'
          style={{ transitionDelay: `${0.1 * key}ms` }}
          x={node.x}
          y={node.y}
          width={nodeWidthNum}
          height={nodeWidthNum}
          fill={node.color}
          fillOpacity={node.opacity}
          key={key}
        />
      ) : node.shape === 'person' ? (
        <path
          style={{
            transform: `translateX(${node.x + nodeWidthNum / 4}px) translateY(${node.y}px) scale(${nodeWidthNum / 20})`
          }}
          fill={node.color}
          fillOpacity={node.opacity}
          key={key}
          d='M3.75,0a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,3.75,0M5.625,5.625H5.18125a3.433,3.433,0,0,1-2.8625,0H1.875A1.875,1.875,
                          0,0,0,0,7.5v5.3125a.9375.9375,0,0,0,.9375.9375h.625v5.3125A.9375.9375,0,0,0,2.5,20H5a.9375.9375,0,0,0,
                          .9375-.9375V13.75h.625A.9375.9375,0,0,0,7.5,12.8125V7.5A1.875,1.875,0,0,0,5.625,5.625Z'
        ></path>
      ) : (
        <Circle
          className='cdc-waffle-chart__node'
          style={{ transitionDelay: `${0.1 * key}ms` }}
          cx={node.x}
          cy={node.y}
          r={nodeWidthNum / 2}
          fill={node.color}
          fillOpacity={node.opacity}
          key={key}
        />
      )
    )
  }, [theme, dataPercentage, shape, nodeWidth, nodeSpacer])

  const setRatio = useCallback(() => {
    return nodeWidth * 10 + nodeSpacer * 9
  }, [nodeWidth, nodeSpacer])

  const { innerContainerClasses, contentClasses } = useDataVizClasses(config)

  const xScale = scaleLinear({
    domain: [0, waffleDenominator],
    range: [0, config.gauge.width]
  })

  const Error = ({ config, updateConfig }) => {
    return (
      <section className='waiting'>
        <section className='waiting-container'>
          <h3>Error With Configuration</h3>
          <p>{config.runtime.editorErrorMessage}</p>
        </section>
      </section>
    )
  }

  const Confirm = ({ updateConfig, config }) => {
    const confirmDone = e => {
      e.preventDefault()
      let newConfig = { ...config }
      delete newConfig.newViz
      updateConfig(newConfig)
    }

    return (
      <section className='waiting'>
        <section className='waiting-container'>
          <h3>Finish Configuring</h3>
          <p>Set all required options to the left and confirm below to display a preview of the chart.</p>
          <button className='btn btn-primary' style={{ margin: '1em auto' }} onClick={confirmDone}>
            I'm Done
          </button>
        </section>
      </section>
    )
  }

  return (
    <div className='cove-component__content'>
      <Title
        showTitle={config.showTitle}
        title={title}
        config={config}
        classes={['chart-title', `${config.theme}`, 'mb-0']}
      />
      <div className={contentClasses.join(' ')}>
        {!config.newViz && config.runtime && config.runtime.editorErrorMessage && (
          <Error updateConfig={updateConfig} config={config} />
        )}
        {config.newViz && showConfigConfirm && <Confirm updateConfig={updateConfig} config={config} />}
        <div className='cove-component__content-wrap'>
          {config.visualizationType === 'Gauge' && (
            <div className={`cove-gauge-chart${config.overallFontSize ? ' font-' + config.overallFontSize : ''}`}>
              <div className='cove-gauge-chart__chart'>
                <div className='cove-waffle-chart__data--primary' style={dataFontSize}>
                  {prefix ? prefix : ' '}
                  {config.showPercent ? dataPercentage : waffleNumerator}
                  {suffix ? suffix + ' ' : ' '} {config.valueDescription}{' '}
                  {config.showDenominator && waffleDenominator ? waffleDenominator : ' '}
                </div>
                <div className='cove-waffle-chart__data--text'>{parse(content)}</div>
                <svg height={config.gauge.height} width={'100%'}>
                  <Group>
                    <foreignObject
                      style={{ border: '1px solid black' }}
                      x={0}
                      y={0}
                      width={config.gauge.width}
                      height={config.gauge.height}
                      fill='#fff'
                    />
                    <Bar x={0} y={0} width={xScale(waffleNumerator)} height={config.gauge.height} fill={gaugeColor} />
                  </Group>
                </svg>
                <div className={'cove-waffle-chart__subtext subtext'}>{parse(subtext)}</div>
              </div>
            </div>
          )}
          {config.visualizationType !== 'Gauge' && (
            <div
              className={`cove-waffle-chart${orientation === 'vertical' ? ' cove-waffle-chart--verical' : ''}${
                config.overallFontSize ? ' font-' + config.overallFontSize : ''
              }`}
            >
              <div className='cove-waffle-chart__chart' style={{ width: setRatio() }}>
                <svg width={setRatio()} height={setRatio()}>
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
    </div>
  )
}

const CdcWaffleChart = ({
  configUrl,
  config: configObj,
  isDashboard = false,
  isEditor = false,
  setConfig: setParentConfig
}: CdcWaffleChartProps) => {
  // Default States
  const [state, dispatch] = useReducer(chartReducer, {
    config: configObj ?? defaults,
    loading: true,
    preview: false,
    viewport: 'lg',
    coveLoadedHasRan: false,
    container: null
  })
  const { loading, config, viewport: currentViewport, coveLoadedHasRan, container } = state
  const [showConfigConfirm, setShowConfigConfirm] = useState(false)

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
    dispatch({ type: 'SET_CONFIG', payload: newConfig })
  }

  const loadConfig = useCallback(async () => {
    let response = configObj || (await (await fetch(configUrl)).json())
    let responseData = response.data ?? {}

    if (response.dataUrl) {
      responseData = await fetchRemoteData(response.dataUrl)
    }

    response.data = responseData

    const processedConfig = { ...coveUpdateWorker(response) }
    updateConfig({ ...defaults, ...processedConfig })
    dispatch({ type: 'SET_LOADING', payload: false })
  }, [])

  // Custom Functions

  // --Observes changes to outermost container and changes viewport size in state
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      let newViewport = getViewport(entry.contentRect.width * 2) // Data bite is usually presented as small, so we scale it up for responsive calculations
      dispatch({ type: 'SET_VIEWPORT', payload: newViewport })
    }
  })

  const outerContainerRef = useCallback(node => {
    if (node !== null) {
      resizeObserver.observe(node)
    }
    dispatch({ type: 'SET_CONTAINER', payload: node })
  }, [])

  //Load initial config
  useEffect(() => {
    // eslint-disable-next-line no-console
    loadConfig().catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (config && !coveLoadedHasRan && container) {
      publish('cove_loaded', { config: config })
      dispatch({ type: 'SET_COVE_LOADED_HAS_RAN', payload: true })
    }
  }, [config, container])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!configObj?.dataUrl) {
      updateConfig({ ...defaults, ...configObj })
    }
  }, [configObj?.data])

  let content = <Loading />

  if (loading === false) {
    let body = (
      <Layout.Responsive isEditor={isEditor}>
        <WaffleChart
          config={config}
          isEditor={isEditor}
          showConfigConfirm={showConfigConfirm}
          updateConfig={updateConfig}
        />
      </Layout.Responsive>
    )

    content = (
      <>
        {isEditor && <EditorPanel showConfigConfirm={showConfigConfirm}>{body}</EditorPanel>}
        {!isEditor && body}
      </>
    )
  }

  return (
    <ErrorBoundary component='WaffleChart'>
      <ConfigContext.Provider
        value={{ config, updateConfig, loading, data: config.data, setParentConfig, isDashboard, outerContainerRef }}
      >
        <Layout.VisualizationWrapper
          config={config}
          isEditor={isEditor}
          ref={outerContainerRef}
          showEditorPanel={config?.showEditorPanel}
        >
          {content}
        </Layout.VisualizationWrapper>
      </ConfigContext.Provider>
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

export const DATA_FUNCTIONS = [
  DATA_FUNCTION_COUNT,
  DATA_FUNCTION_MAX,
  DATA_FUNCTION_MEAN,
  DATA_FUNCTION_MEDIAN,
  DATA_FUNCTION_MIN,
  DATA_FUNCTION_MODE,
  DATA_FUNCTION_SUM
]

export const DATA_OPERATOR_LESS = '<'
export const DATA_OPERATOR_GREATER = '>'
export const DATA_OPERATOR_LESSEQUAL = '<='
export const DATA_OPERATOR_GREATEREQUAL = '>='
export const DATA_OPERATOR_EQUAL = '='
export const DATA_OPERATOR_NOTEQUAL = '≠'

export const DATA_OPERATORS = [
  DATA_OPERATOR_LESS,
  DATA_OPERATOR_GREATER,
  DATA_OPERATOR_LESSEQUAL,
  DATA_OPERATOR_GREATEREQUAL,
  DATA_OPERATOR_EQUAL,
  DATA_OPERATOR_NOTEQUAL
]
