import React, { useCallback } from 'react'

//Third Party
import parse from 'html-react-parser'
import { Group } from '@visx/group'
import { Circle, Bar } from '@visx/shape'

//Context
import { useConfigContext } from '@cdc/core/context/ConfigContext'

//Components
import Component from '@cdc/core/components/Component'

//Constants
import {
  DATA_FUNCTION_COUNT,
  DATA_FUNCTION_SUM,
  DATA_FUNCTION_MEAN,
  DATA_FUNCTION_MEDIAN,
  DATA_FUNCTION_MAX,
  DATA_FUNCTION_MIN,
  DATA_FUNCTION_MODE,
  THEME_COLORS
} from '../consts'

//Visualization
const WaffleChart = () => {
  const { config, missingRequiredSections } = useConfigContext()
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

  const calculateData = useCallback(() => {
    //If either the column or function aren't set, do not calculate
    if (!dataColumn || !dataFunction) return ''

    const getSum = (arr) => {
      if (Array.isArray(arr) && arr.length > 0) {
        const sum = arr.reduce((sum, x) => sum + x)
        return applyPrecision(sum)
      }
    }

    const getMean = (arr) => {
      const mean = arr.length > 1 ? arr.reduce((a, b) => a + b) / arr.length : arr[0]
      return applyPrecision(mean)
    }

    const getMode = (arr) => {
      let response = []
      let freq = {}
      let max = -Infinity

      for (let i = 0; i < arr.length; i++) {
        if (freq[arr[i]]) { freq[arr[i]] += 1 } else { freq[arr[i]] = 1 }
        if (freq[arr[i]] > max) { max = freq[arr[i]] }
      }

      for (let key in freq) {
        if (freq[key] === max) response.push(key)
      }

      return response
    }

    const getMedian = (arr) => {
      const mid = Math.floor(arr.length / 2),
        nums = [ ...arr ].sort((a, b) => a - b)
      const value = arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
      return applyPrecision(value)
    }

    const applyPrecision = (value) => {
      if ('' !== roundToPlace && !isNaN(roundToPlace) && Number(roundToPlace) > -1) {
        value = Number(value).toFixed(Number(roundToPlace))
      }
      return value
    }

    //Optionally filter the data based on the user's filter
    let filteredData = config.data

    filters.map((filter) => {
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
        case ('<'):
          conditionalData = filteredData.filter(e => e[dataConditionalColumn] < dataConditionalComparate)
          break
        case ('>'):
          conditionalData = filteredData.filter(e => e[dataConditionalColumn] > dataConditionalComparate)
          break
        case ('<='):
          conditionalData = filteredData.filter(e => e[dataConditionalColumn] <= dataConditionalComparate)
          break
        case ('>='):
          conditionalData = filteredData.filter(e => e[dataConditionalColumn] >= dataConditionalComparate)
          break
        case ('='):
          if (isNaN(Number(dataConditionalComparate))) {
            conditionalData = filteredData.filter(e => String(e[dataConditionalColumn]) === dataConditionalComparate)
          } else {
            conditionalData = filteredData.filter(e => e[dataConditionalColumn] === dataConditionalComparate)
          }
          break
        case ('≠'):
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
    let numericalData = columnData.filter((value) => {
      let include = false
      if (Number(value) || Number.isFinite(Number(value))) {
        include = true
      }
      return include
    }).map(Number)

    let numericalDenomData = denomColumnData.filter((value) => {
      let include = false
      if (Number(value) || Number.isFinite(Number(value))) {
        include = true
      }
      return include
    }).map(Number)

    // Calculate numerator  ------------------
    let waffleNumerator = ''

    const numerFunctionList = {
      [DATA_FUNCTION_COUNT]: String(numericalData.length),
      [DATA_FUNCTION_SUM]: String(getSum(numericalData)),
      [DATA_FUNCTION_MEAN]: String(getMean(numericalData)),
      [DATA_FUNCTION_MEDIAN]: getMedian(numericalData).toString(),
      [DATA_FUNCTION_MAX]: Math.max(...numericalData).toString(),
      [DATA_FUNCTION_MIN]: Math.min(...numericalData).toString(),
      [DATA_FUNCTION_MODE]: getMode(numericalData).join(', ')
    }

    waffleNumerator = numerFunctionList[dataFunction]
    console.log('functionList', numerFunctionList)
    console.log('waffleNumerator', waffleNumerator)

    // Calculate denominator ------------------
    let waffleDenominator = null

    const denomFunctionList = {
      [DATA_FUNCTION_COUNT]: String(numericalDenomData.length),
      [DATA_FUNCTION_SUM]: String(getSum(numericalDenomData)),
      [DATA_FUNCTION_MEAN]: String(getMean(numericalDenomData)),
      [DATA_FUNCTION_MEDIAN]: getMedian(numericalDenomData).toString(),
      [DATA_FUNCTION_MAX]: Math.max(...numericalDenomData).toString(),
      [DATA_FUNCTION_MIN]: Math.min(...numericalDenomData).toString(),
      [DATA_FUNCTION_MODE]: getMode(numericalDenomData).join(', '),
    }

    if (customDenom && dataDenomColumn && dataDenomFunction) {
      waffleDenominator = denomFunctionList[dataDenomFunction]
    } else {
      waffleDenominator = dataDenom > 0 ? dataDenom : 100
    }

    return applyPrecision((waffleNumerator / waffleDenominator) * 100)
  }, [ config ])

  const dataPercentage = calculateData()

  const buildWaffle = useCallback(() => {
    let waffleData = []
    let nodeWidthNum = parseInt(nodeWidth, 10)
    let nodeSpacerNum = parseInt(nodeSpacer, 10)

    const calculatePos = (shape, axis, index, width, spacer) => {
      let mod = axis === 'x' ? index % 10 : axis === 'y' ? Math.floor(index / 10) : null
      return shape === 'circle' ? (mod * (width + spacer)) + (width / 2) : mod * (width + spacer)
    }

    for (let i = 0; i < 100; i++) {
      let newNode = {
        shape: shape,
        x: calculatePos(shape, 'x', i, nodeWidthNum, nodeSpacerNum),
        y: calculatePos(shape, 'y', i, nodeWidthNum, nodeSpacerNum),
        color: THEME_COLORS[theme],
        opacity: i + 1 > (100 - Math.round(dataPercentage)) ? 1 : 0.35
      }
      waffleData.push(newNode)
    }

    return waffleData.map((node, key) => (
      node.shape === 'square'
        ? <Bar className="cove-waffle-chart__node" style={{ transitionDelay: `${0.1 * key}ms` }} x={node.x} y={node.y}
               width={nodeWidthNum} height={nodeWidthNum} fill={node.color} fillOpacity={node.opacity} key={key}/>
        : node.shape === 'person' ?
          <path
            style={{ transform: `translateX(${node.x + nodeWidthNum / 4}px) translateY(${node.y}px) scale(${nodeWidthNum / 20})` }}
            fill={node.color} fillOpacity={node.opacity} key={key}
            d="M3.75,0a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,3.75,0M5.625,5.625H5.18125a3.433,3.433,0,0,1-2.8625,0H1.875A1.875,1.875,
                          0,0,0,0,7.5v5.3125a.9375.9375,0,0,0,.9375.9375h.625v5.3125A.9375.9375,0,0,0,2.5,20H5a.9375.9375,0,0,0,
                          .9375-.9375V13.75h.625A.9375.9375,0,0,0,7.5,12.8125V7.5A1.875,1.875,0,0,0,5.625,5.625Z">
          </path>
          :
          <Circle className="cove-waffle-chart__node" style={{ transitionDelay: `${0.1 * key}ms` }} cx={node.x} cy={node.y}
                  r={nodeWidthNum / 2} fill={node.color} fillOpacity={node.opacity} key={key}/>
    ))
  }, [ theme, dataPercentage, shape, nodeWidth, nodeSpacer ])

  const setRatio = useCallback(() => {
    return (nodeWidth * 10) + (nodeSpacer * 9)
  }, [ nodeWidth, nodeSpacer ])

  let dataFontSize = config.fontSize ? { fontSize: config.fontSize + 'px' } : null

  return (
    <Component className="cove-waffle-chart" title={title} theme={theme}>
      {missingRequiredSections && <>Missing data in sections</>}
      {!missingRequiredSections && !config.newViz && (<>
        <div
          className={`cove-waffle-chart__container${orientation === 'vertical' ? ' cove-waffle-chart__container--verical' : ''}${config.overallFontSize ? ' font-' + config.overallFontSize : ''}`}>
          <div className="cove-waffle-chart__visualization" style={{ width: setRatio() }}>
            <svg width={setRatio()} height={setRatio()}>
              <Group>
                {buildWaffle()}
              </Group>
            </svg>
          </div>

          {(dataPercentage || content) &&
            <div className="cove-waffle-chart__data">
              {dataPercentage &&
                <div className="cove-waffle-chart__data--primary" style={dataFontSize}>
                  {prefix ? prefix : null}{dataPercentage}{suffix ? suffix : null}
                </div>
              }
              <div className="cove-waffle-chart__data--text">{parse(content)}</div>
            </div>
          }
        </div>
      </>)}
      {subtext &&
        <div className="cove-waffle-chart__subtext">
          {parse(subtext)}
        </div>
      }
    </Component>
  )
}


export default WaffleChart
