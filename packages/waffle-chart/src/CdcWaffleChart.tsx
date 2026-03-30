import React, { useCallback, useEffect, useMemo, useReducer, useState } from 'react'

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
import { DATA_OPERATORS } from '@cdc/core/helpers/constants'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Loading from '@cdc/core/components/Loading'

import ConfigContext from './ConfigContext'
import EditorPanel from './components/EditorPanel'
import defaults from './data/initial-state'
import { publish } from '@cdc/core/helpers/events'
import chartReducer from './store/chart.reducer'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'
import { processMarkupVariables } from '@cdc/core/helpers/markupProcessor'

import './scss/main.scss'
import Title from '@cdc/core/components/ui/Title'
import { VisualizationContainer, VisualizationContent } from '@cdc/core/components/Layout'
import TrendArrow from '@cdc/core/components/ui/TrendArrow'
import {
  resolveTrendIndicator,
  TREND_ARROW_DOWN,
  TREND_ARROW_UP,
  TREND_MODE_NUMERIC
} from '@cdc/core/helpers/trendIndicator'
import type { TrendResolution } from '@cdc/core/helpers/trendIndicator'
import { aggregateByDataFunction } from '@cdc/core/helpers/dataAggregation'
import { resolveWaffleNumericTrend } from './helpers/waffleNumericTrend'

// images
import CalloutFlag from '@cdc/core/assets/callout-flag.svg?url'

// TP5 Style Constants
const TP5_NODE_WIDTH = 13
const TP5_NODE_SPACER = 3

type CdcWaffleChartProps = {
  configUrl?: string
  config?: Config
  isDashboard?: boolean
  isEditor?: boolean
  rawData?: Record<string, any>[]
  link?: string
  setConfig?: () => void
  interactionLabel?: string
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
    roundToPlace,
    trendIndicator
  } = config

  const processedTextFields = useMemo(() => {
    if (!config.enableMarkupVariables || !config.markupVariables?.length) {
      return {
        title,
        content,
        subtext,
        valueDescription: config.valueDescription
      }
    }

    const markupOptions = {
      isEditor,
      showNoDataMessage: false,
      allowHideSection: false,
      filters: config.filters || [],
      locale: config.locale,
      dataMetadata: config.dataMetadata
    }

    return {
      title: title
        ? processMarkupVariables(title, config.data || [], config.markupVariables, markupOptions).processedContent
        : title,
      content: content
        ? processMarkupVariables(content, config.data || [], config.markupVariables, markupOptions).processedContent
        : content,
      subtext: subtext
        ? processMarkupVariables(subtext, config.data || [], config.markupVariables, markupOptions).processedContent
        : subtext,
      valueDescription: config.valueDescription
        ? processMarkupVariables(config.valueDescription, config.data || [], config.markupVariables, markupOptions)
            .processedContent
        : config.valueDescription
    }
  }, [
    config.enableMarkupVariables,
    config.markupVariables,
    config.data,
    config.filters,
    config.locale,
    config.dataMetadata,
    config.valueDescription,
    title,
    content,
    subtext,
    isEditor
  ])

  const processedTitle = processedTextFields.title
  const processedContent = processedTextFields.content
  const processedSubtext = processedTextFields.subtext
  const processedValueDescription = processedTextFields.valueDescription

  const gaugeColor = config.visual.colors[config.theme]
  let dataFontSize = config.fontSize ? { fontSize: config.fontSize + 'px' } : null

  const [dataPercentage, waffleDenominator, waffleNumerator, trendResolution] = useMemo<
    [number | string, number | string | null, number | string, TrendResolution]
  >(() => {
    //If either the column or function aren't set, do not calculate
    if (!dataColumn || !dataFunction) {
      return ['', null, '', { state: 'disabled' }]
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
      const numericComparate = Number(dataConditionalComparate)
      const isNumericComparate = Number.isFinite(numericComparate)
      const getNumericValue = value => {
        const numericValue = Number(value)
        return Number.isFinite(numericValue) ? numericValue : null
      }

      switch (dataConditionalOperator) {
        case '<':
          conditionalData = isNumericComparate
            ? filteredData.filter(e => {
                const numericValue = getNumericValue(e[dataConditionalColumn])
                return numericValue !== null && numericValue < numericComparate
              })
            : []
          break
        case '>':
          conditionalData = isNumericComparate
            ? filteredData.filter(e => {
                const numericValue = getNumericValue(e[dataConditionalColumn])
                return numericValue !== null && numericValue > numericComparate
              })
            : []
          break
        case '<=':
          conditionalData = isNumericComparate
            ? filteredData.filter(e => {
                const numericValue = getNumericValue(e[dataConditionalColumn])
                return numericValue !== null && numericValue <= numericComparate
              })
            : []
          break
        case '>=':
          conditionalData = isNumericComparate
            ? filteredData.filter(e => {
                const numericValue = getNumericValue(e[dataConditionalColumn])
                return numericValue !== null && numericValue >= numericComparate
              })
            : []
          break
        case '=':
          if (!isNumericComparate) {
            conditionalData = filteredData.filter(e => String(e[dataConditionalColumn]) === dataConditionalComparate)
          } else {
            conditionalData = filteredData.filter(e => {
              const numericValue = getNumericValue(e[dataConditionalColumn])
              return numericValue !== null && numericValue === numericComparate
            })
          }
          break
        case '≠':
          if (!isNumericComparate) {
            conditionalData = filteredData.filter(e => String(e[dataConditionalColumn]) !== dataConditionalComparate)
          } else {
            conditionalData = filteredData.filter(e => {
              const numericValue = getNumericValue(e[dataConditionalColumn])
              return numericValue !== null && numericValue !== numericComparate
            })
          }
          break
        default:
          conditionalData = []
      }
    }

    //Get the column's data
    const trendSourceData = conditionalData.length > 0 ? conditionalData : filteredData
    const columnData = trendSourceData.map(a => a[dataColumn])
    const denomColumnData = filteredData.map(a => a[dataDenomColumn])
    const historicalColumnData = trendSourceData.map(a => a[trendIndicator?.column])

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

    let historicalNumericalData = historicalColumnData
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

    const calculateByFunction = (values, fn, shouldRound = true) => {
      const toOutput = value => {
        if (value === undefined || value === null) {
          return String(value)
        }

        if (!shouldRound) {
          return String(value)
        }

        return Number.isFinite(Number(value)) ? String(applyPrecision(value)) : String(value)
      }

      const aggregated = aggregateByDataFunction(values, fn)

      if (Array.isArray(aggregated)) {
        return aggregated.join(', ')
      }

      return toOutput(aggregated)
    }

    // Calculate numerator  ------------------
    const trendCurrentNumerator = calculateByFunction(numericalData, dataFunction, false)
    const trendHistoricalNumerator = calculateByFunction(historicalNumericalData, dataFunction, false)
    const waffleNumerator = calculateByFunction(numericalData, dataFunction)

    // Calculate denominator ------------------
    let waffleDenominator = null
    let trendDenominator = null

    if (customDenom && dataDenomColumn && dataDenomFunction) {
      waffleDenominator = calculateByFunction(numericalDenomData, dataDenomFunction)
      trendDenominator = calculateByFunction(numericalDenomData, dataDenomFunction, false)
    } else {
      waffleDenominator = dataDenom > 0 ? dataDenom : 100
      trendDenominator = waffleDenominator
    }

    const resolvedTrend =
      trendIndicator?.mode === TREND_MODE_NUMERIC
        ? resolveWaffleNumericTrend({
            trendIndicator,
            mainDataFunction: dataFunction,
            currentNumerator: Number(trendCurrentNumerator),
            historicalNumerator: Number(trendHistoricalNumerator),
            denominator: Number(trendDenominator)
          })
        : resolveTrendIndicator({
            data: trendSourceData,
            trendIndicator,
            mainDataFunction: dataFunction,
            mainDataColumn: dataColumn,
            allowNumericMode: false
          })

    // @ts-ignore
    return [
      applyPrecision((Number(waffleNumerator) / Number(waffleDenominator)) * 100),
      waffleDenominator,
      applyPrecision(waffleNumerator),
      resolvedTrend
    ]
  }, [
    config.data,
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
    roundToPlace,
    trendIndicator
  ])

  const waffleRenderConfig = useMemo(() => {
    const isTP5 = config.visualizationType === 'TP5 Waffle'
    const parsedNodeWidth = isTP5 ? TP5_NODE_WIDTH : parseInt(nodeWidth, 10)
    const parsedNodeSpacer = isTP5 ? TP5_NODE_SPACER : parseInt(nodeSpacer, 10)
    const nodeWidthNum = Number.isFinite(parsedNodeWidth) && parsedNodeWidth > 0 ? parsedNodeWidth : 10
    const nodeSpacerNum = Number.isFinite(parsedNodeSpacer) && parsedNodeSpacer >= 0 ? parsedNodeSpacer : 2

    const fixedFilledCount = Math.max(0, Math.min(100, Math.round(Number(dataPercentage))))
    const isWaffleType = config.visualizationType === 'Waffle' || config.visualizationType === 'TP5 Waffle'

    let renderMode: 'fixed-100' | 'dynamic-denominator' = 'fixed-100'
    let unitCount = 100
    let filledCount = fixedFilledCount

    const parsedDenominator = Number(waffleDenominator)
    const parsedNumerator = Number(waffleNumerator)

    if (
      isWaffleType &&
      config.showPercent === false &&
      config.showDenominator === true &&
      Number.isFinite(parsedDenominator) &&
      parsedDenominator > 0 &&
      Number.isFinite(parsedNumerator) &&
      parsedNumerator >= 0
    ) {
      const roundedDenominator = Math.round(parsedDenominator)
      const roundedNumerator = Math.round(parsedNumerator)

      if (
        roundedDenominator >= 1 &&
        roundedDenominator <= 99 &&
        roundedNumerator >= 0 &&
        roundedNumerator <= roundedDenominator
      ) {
        renderMode = 'dynamic-denominator'
        unitCount = roundedDenominator
        filledCount = roundedNumerator
      }
    }

    const columns = renderMode === 'dynamic-denominator' ? Math.ceil(Math.sqrt(unitCount)) : 10
    const rows = renderMode === 'dynamic-denominator' ? Math.ceil(unitCount / columns) : 10

    return {
      isTP5,
      renderMode,
      unitCount,
      filledCount,
      columns,
      rows,
      nodeWidthNum,
      nodeSpacerNum
    }
  }, [
    config.visualizationType,
    config.showPercent,
    config.showDenominator,
    dataPercentage,
    waffleDenominator,
    waffleNumerator,
    nodeWidth,
    nodeSpacer
  ])
  const trendLabel =
    trendResolution?.arrowType === TREND_ARROW_UP
      ? trendIndicator?.upLabel
      : trendResolution?.arrowType === TREND_ARROW_DOWN
      ? trendIndicator?.downLabel
      : ''
  const resolvedTrendLabel = typeof trendLabel === 'string' ? trendLabel.trim() : ''
  const hasTrendArrow = trendResolution?.state === 'resolved' && !!trendResolution?.arrowType
  const shouldUseTrendBelow = Boolean(hasTrendArrow && resolvedTrendLabel)

  const renderTrendArrow = ({ wrapperClassName = '' } = {}) => {
    if (trendResolution?.state !== 'resolved' || !trendResolution?.arrowType) {
      return null
    }
    const ariaLabel = `Trend ${trendResolution.arrowType}${resolvedTrendLabel ? `: ${resolvedTrendLabel}` : ''}`

    return (
      <TrendArrow
        arrowType={trendResolution.arrowType}
        label={resolvedTrendLabel}
        ariaLabel={ariaLabel}
        wrapperClassName={wrapperClassName}
      />
    )
  }

  const renderPrimaryValueBlock = (valueContent, className = '') => (
    <div
      className={['cove-waffle-chart__data--primary', 'cove-waffle-chart__value-block', className]
        .filter(Boolean)
        .join(' ')}
      style={dataFontSize}
    >
      <div className='cove-waffle-chart__value-row'>
        {valueContent}
        {!shouldUseTrendBelow && hasTrendArrow && (
          <span className='cove-waffle-chart__trend-slot cove-waffle-chart__trend-slot--inline'>
            {renderTrendArrow({
              wrapperClassName: 'cove-trend-arrow__wrap--inline'
            })}
          </span>
        )}
      </div>
      {shouldUseTrendBelow && (
        <div className='cove-waffle-chart__trend-row'>
          <span className='cove-waffle-chart__trend-slot cove-waffle-chart__trend-slot--below'>
            {renderTrendArrow({
              wrapperClassName: 'cove-trend-arrow__wrap--below'
            })}
          </span>
        </div>
      )}
    </div>
  )

  const buildWaffle = useCallback(() => {
    let waffleData = []
    const { isTP5, unitCount, filledCount, columns, rows, nodeWidthNum, nodeSpacerNum } = waffleRenderConfig

    const calculatePos = (shape, axis, index, width, spacer, columnCount, rowCount) => {
      const columnFromRight = index % columnCount
      const rowFromBottom = Math.floor(index / columnCount)
      const column = columnCount - 1 - columnFromRight
      const row = rowCount - 1 - rowFromBottom
      const mod = axis === 'x' ? column : row
      return shape === 'circle' ? mod * (width + spacer) + width / 2 : mod * (width + spacer)
    }

    for (let i = 0; i < unitCount; i++) {
      const isFilled = i < filledCount
      let newNode = {
        shape: shape,
        x: calculatePos(shape, 'x', i, nodeWidthNum, nodeSpacerNum, columns, rows),
        y: calculatePos(shape, 'y', i, nodeWidthNum, nodeSpacerNum, columns, rows),
        color: config.visual.colors[theme],
        opacity: i + 1 > 100 - Math.round(Number(dataPercentage)) ? 1 : 0.2,
        isFilled: i + 1 > 100 - Math.round(Number(dataPercentage))
      }
      waffleData.push(newNode)
    }

    return waffleData.map((node, key) =>
      node.shape === 'square' ? (
        <Bar
          className='cdc-waffle-chart__node'
          style={{ transitionDelay: `${0.1 * key}ms` }}
          x={isTP5 && !node.isFilled ? node.x + 1 : node.x}
          y={isTP5 && !node.isFilled ? node.y + 1 : node.y}
          width={isTP5 && !node.isFilled ? nodeWidthNum - 2 : nodeWidthNum}
          height={isTP5 && !node.isFilled ? nodeWidthNum - 2 : nodeWidthNum}
          fill={isTP5 ? (node.isFilled ? '#009EC1' : '#DFF2F6') : node.color}
          fillOpacity={isTP5 ? 1 : node.opacity}
          stroke={isTP5 ? (!node.isFilled ? '#009EC1' : undefined) : undefined}
          strokeWidth={isTP5 ? (!node.isFilled ? 1 : 0) : 0}
          key={key}
        />
      ) : node.shape === 'person' ? (
        <path
          className='cdc-waffle-chart__node'
          style={{
            transform: isTP5
              ? `translateX(${node.x}px) translateY(${node.y + nodeWidthNum * 0.1}px) scale(${
                  (nodeWidthNum * 0.8) / 448
                })`
              : `translateX(${node.x + nodeWidthNum / 4}px) translateY(${node.y}px) scale(${nodeWidthNum / 20})`,
            transitionDelay: `${0.1 * key}ms`
          }}
          fill={isTP5 ? (node.isFilled ? '#009EC1' : 'transparent') : node.color}
          fillOpacity={isTP5 ? 1 : node.opacity}
          stroke={isTP5 ? (!node.isFilled ? '#009EC1' : undefined) : undefined}
          strokeWidth={isTP5 ? (!node.isFilled ? 448 / nodeWidthNum : 0) : 0}
          key={key}
          d={
            isTP5
              ? 'M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z'
              : 'M3.75,0a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,3.75,0M5.625,5.625H5.18125a3.433,3.433,0,0,1-2.8625,0H1.875A1.875,1.875,0,0,0,0,7.5v5.3125a.9375.9375,0,0,0,.9375.9375h.625v5.3125A.9375.9375,0,0,0,2.5,20H5a.9375.9375,0,0,0,.9375-.9375V13.75h.625A.9375.9375,0,0,0,7.5,12.8125V7.5A1.875,1.875,0,0,0,5.625,5.625Z'
          }
        ></path>
      ) : (
        <Circle
          className='cdc-waffle-chart__node'
          style={{ transitionDelay: `${0.1 * key}ms` }}
          cx={node.x}
          cy={node.y}
          r={isTP5 && !node.isFilled ? nodeWidthNum / 2 - 1 : nodeWidthNum / 2}
          fill={isTP5 ? (node.isFilled ? '#009EC1' : '#DFF2F6') : node.color}
          fillOpacity={isTP5 ? 1 : node.opacity}
          stroke={isTP5 ? (!node.isFilled ? '#009EC1' : undefined) : undefined}
          strokeWidth={isTP5 ? (!node.isFilled ? 1 : 0) : 0}
          key={key}
        />
      )
    )
  }, [theme, shape, config.visualizationType, config.visual?.whiteBackground, waffleRenderConfig])

  const setRatio = useCallback(() => {
    return (
      waffleRenderConfig.nodeWidthNum * waffleRenderConfig.columns +
      waffleRenderConfig.nodeSpacerNum * (waffleRenderConfig.columns - 1)
    )
  }, [waffleRenderConfig])

  const setHeightRatio = useCallback(() => {
    return (
      waffleRenderConfig.nodeWidthNum * waffleRenderConfig.rows +
      waffleRenderConfig.nodeSpacerNum * (waffleRenderConfig.rows - 1)
    )
  }, [waffleRenderConfig])

  const setSvgWidth = useCallback(() => {
    // Add 2px padding to account for strokes on edges
    return setRatio() + 2
  }, [setRatio])

  const setSvgHeight = useCallback(() => {
    // Add 2px padding to account for strokes on edges
    return setHeightRatio() + 2
  }, [setHeightRatio])

  const { contentClasses } = useDataVizClasses(config)

  const primaryValue = (
    <>
      {prefix ? prefix : ' '}
      {config.showPercent ? dataPercentage : waffleNumerator}
      {suffix ? suffix + ' ' : ' '} {processedValueDescription}{' '}
      {config.showDenominator && waffleDenominator ? waffleDenominator : ' '}
    </>
  )
  const hasPrimaryValue = (config.showPercent ? dataPercentage : waffleNumerator) !== ''

  const xScale = scaleLinear({
    domain: [0, Number(waffleDenominator) || 0],
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

  // Render waffle chart content (without title)
  const renderChartContent = () => (
    <>
      {!config.newViz && config.runtime && config.runtime.editorErrorMessage && (
        <Error updateConfig={updateConfig} config={config} />
      )}
      {config.newViz && showConfigConfirm && <Confirm updateConfig={updateConfig} config={config} />}
      {(config.visualizationType === 'Gauge' || config.visualizationType === 'TP5 Gauge') && (
        <div className={`cove-gauge-chart${config.overallFontSize ? ' font-' + config.overallFontSize : ''}`}>
          <div className='cove-gauge-chart__chart'>
            {config.visualizationType === 'TP5 Gauge' ? (
              <>
                <div
                  className={`cove-gauge-chart__body d-flex flex-row align-items-start flex-grow-1${
                    !processedContent ? ' justify-content-center' : ''
                  }`}
                >
                  <div className='cove-gauge-chart__value-section flex-shrink-0'>
                    {renderPrimaryValueBlock(primaryValue)}
                  </div>
                  <div className='cove-gauge-chart__content flex-grow-1 d-flex flex-column min-w-0'>
                    {processedContent ? (
                      <div className='cove-waffle-chart__data--text cove-prose'>{parse(processedContent)}</div>
                    ) : (
                      <div className='cove-waffle-chart__data--text' aria-hidden='true'>
                        &nbsp;
                      </div>
                    )}
                  </div>
                </div>
                <svg
                  height={config.gauge.height + 2}
                  width={'100%'}
                  className='mt-2'
                  style={{ overflow: 'visible', padding: '1px' }}
                >
                  <Group>
                    <Bar
                      x={0}
                      y={0}
                      width={config.gauge.width}
                      height={config.gauge.height}
                      fill='#dff2f6'
                      stroke='#007A99'
                      strokeWidth={1}
                      rx={10}
                      ry={10}
                    />
                    <Bar
                      x={0}
                      y={0}
                      width={xScale(waffleNumerator)}
                      height={config.gauge.height}
                      fill='#007A99'
                      rx={10}
                      ry={10}
                    />
                  </Group>
                </svg>
                {processedSubtext && (
                  <div className='cove-waffle-chart__subtext subtext cove-prose fst-italic mt-2'>
                    {parse(processedSubtext)}
                  </div>
                )}
              </>
            ) : (
              <>
                {renderPrimaryValueBlock(primaryValue)}
                <div className='cove-waffle-chart__data--text cove-prose'>{parse(processedContent)}</div>
                <svg height={config.gauge.height} width={'100%'}>
                  <Group>
                    <Bar
                      x={0}
                      y={0}
                      width={config.gauge.width}
                      height={config.gauge.height}
                      fill='#e0e0e0'
                      stroke='#999'
                      strokeWidth={1}
                      rx={4}
                      ry={4}
                    />
                    <Bar
                      x={0}
                      y={0}
                      width={xScale(waffleNumerator)}
                      height={config.gauge.height}
                      fill={gaugeColor}
                      rx={4}
                      ry={4}
                    />
                  </Group>
                </svg>
                <div className={'cove-waffle-chart__subtext subtext cove-prose'}>{parse(processedSubtext)}</div>
              </>
            )}
          </div>
        </div>
      )}
      {config.visualizationType !== 'Gauge' && config.visualizationType !== 'TP5 Gauge' && (
        <div
          className={`cove-waffle-chart${orientation === 'vertical' ? ' cove-waffle-chart--verical' : ''}${
            config.overallFontSize ? ' font-' + config.overallFontSize : ''
          }`}
        >
          <div className='cove-waffle-chart__chart' style={{ width: setRatio() }}>
            <svg width={setSvgWidth()} height={setSvgHeight()} style={{ display: 'block' }}>
              <Group top={1} left={1}>
                {buildWaffle()}
              </Group>
            </svg>
          </div>
          {(hasPrimaryValue || processedContent) && (
            <div className='cove-waffle-chart__data'>
              {hasPrimaryValue && renderPrimaryValueBlock(primaryValue)}
              {processedContent && (
                <div className='cove-waffle-chart__data--text cove-prose'>{parse(processedContent)}</div>
              )}

              {processedSubtext && (
                <div className='cove-waffle-chart__subtext subtext cove-prose fst-italic'>
                  {parse(processedSubtext)}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  )

  // TP5 Style: render with callout wrapper inside cove-visualization__body
  if (config.visualizationType === 'TP5 Waffle' || config.visualizationType === 'TP5 Gauge') {
    const calloutClasses = ['cdc-callout', 'd-flex', 'flex-column']
    if (!config.visual?.whiteBackground) {
      calloutClasses.push('dfe-block', 'cdc-callout--data')
    }

    return (
      <VisualizationContent
        bodyClassName={['no-borders', ...contentClasses].filter(Boolean).join(' ')}
        footer={link && link}
      >
        <div className={calloutClasses.join(' ')}>
          {!config.visual?.whiteBackground && (
            <img src={CalloutFlag} alt='' className='cdc-callout__flag' aria-hidden='true' />
          )}
          {config.showTitle && processedTitle && processedTitle.trim() && (
            <h3 className='cdc-callout__heading cove-prose fw-bold flex-shrink-0'>{parse(processedTitle)}</h3>
          )}
          <div className='w-100 mw-100 overflow-hidden'>{renderChartContent()}</div>
        </div>
      </VisualizationContent>
    )
  }

  // Original Style: Regular title and content
  return (
    <VisualizationContent
      bodyClassName={contentClasses.join(' ')}
      header={
        <Title
          showTitle={config.showTitle}
          title={processedTitle}
          titleStyle='legacy'
          config={config}
          classes={['chart-title', `${config.theme}`, 'mb-0']}
        />
      }
      footer={link && link}
    >
      {renderChartContent()}
    </VisualizationContent>
  )
}

const CdcWaffleChart = ({
  configUrl,
  config: configObj,
  isDashboard = false,
  isEditor = false,
  rawData = [],
  setConfig: setParentConfig,
  interactionLabel = ''
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
      const { data, dataMetadata } = await fetchRemoteData(response.dataUrl)
      responseData = data
      response.dataMetadata = dataMetadata
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
    loadConfig().catch(err => console.warn(err))
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
    content = (
      <WaffleChart
        config={config}
        isEditor={isEditor}
        showConfigConfirm={showConfigConfirm}
        updateConfig={updateConfig}
      />
    )
  }

  return (
    <ErrorBoundary component='WaffleChart'>
      <ConfigContext.Provider
        value={{
          config,
          updateConfig,
          loading,
          data: config.data,
          editorData: isDashboard && isEditor && Array.isArray(rawData) && rawData.length ? rawData : config.data,
          setParentConfig,
          isDashboard,
          outerContainerRef
        }}
      >
        <VisualizationContainer
          config={config}
          isEditor={isEditor}
          currentViewport={currentViewport}
          ref={outerContainerRef}
          editorPanel={<EditorPanel showConfigConfirm={showConfigConfirm} />}
        >
          {content}
        </VisualizationContainer>
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

// Re-export DATA_OPERATORS for backward compatibility
export { DATA_OPERATORS }
