import { useCallback } from 'react'

// Third Party
import parse from 'html-react-parser'
import { Group } from '@visx/group'
import { Circle, Bar } from '@visx/shape'

// Store
import { useConfigStoreContext } from '@cdc/core/components/hoc/ConfigProxy'
import useDataStore from '@cdc/core/stores/data/dataSlice'

// Constants
import THEME_COLORS from '@cdc/core/data/componentThemes'
import {
  DATA_FUNCTION_COUNT,
  DATA_FUNCTION_SUM,
  DATA_FUNCTION_MEAN,
  DATA_FUNCTION_MEDIAN,
  DATA_FUNCTION_MAX,
  DATA_FUNCTION_MIN,
  DATA_FUNCTION_MODE
} from '../data/consts'

// Hooks
import usePrevious from '../hooks/usePrevious'

// Helpers
import CoveHelper from '@cdc/core/helpers/cove'
import calculateNodePosition from '../helpers/calculateNodePosition'
import calculateWaffleAnimation from '../helpers/calculateWaffleAnimation'

// Visualization
const WaffleChart = () => {
  const { config } = useConfigStoreContext()
  const { data } = useDataStore()

  const calculateData = () => {
    //If either the column or function aren't set, do not calculate
    if (!config.dataColumn || !config.dataFunction) return ''

    //Optionally filter the data based on the user's filter
    let filteredData = data

    config.filters.map((filter) => {
      if (filter.columnName && filter.columnValue) {
        filteredData = filteredData.filter(function (e) {
          return e[filter.columnName] === filter.columnValue
        })
      }
      return false
    })

    let conditionalData = []

    if (config.dataConditionalColumn !== '' && config.dataConditionalOperator !== '' && config.dataConditionalComparate !== '') {
      switch (config.dataConditionalOperator) {
        case ('<'):
          conditionalData = filteredData.filter(e => e[config.dataConditionalColumn] < config.dataConditionalComparate)
          break
        case ('>'):
          conditionalData = filteredData.filter(e => e[config.dataConditionalColumn] > config.dataConditionalComparate)
          break
        case ('<='):
          conditionalData = filteredData.filter(e => e[config.dataConditionalColumn] <= config.dataConditionalComparate)
          break
        case ('>='):
          conditionalData = filteredData.filter(e => e[config.dataConditionalColumn] >= config.dataConditionalComparate)
          break
        case ('='):
          if (isNaN(Number(config.dataConditionalComparate))) {
            conditionalData = filteredData.filter(e => String(e[config.dataConditionalColumn]) === config.dataConditionalComparate)
          } else {
            conditionalData = filteredData.filter(e => e[config.dataConditionalColumn] === config.dataConditionalComparate)
          }
          break
        case ('≠'):
          if (isNaN(Number(config.dataConditionalComparate))) {
            conditionalData = filteredData.filter(e => String(e[config.dataConditionalColumn]) !== config.dataConditionalComparate)
          } else {
            conditionalData = filteredData.filter(e => e[config.dataConditionalColumn] !== config.dataConditionalComparate)
          }
          break
        default:
          conditionalData = []
      }
    }

    //Get the column's data
    const columnData = conditionalData.length > 0 ? conditionalData.map(a => a[config.dataColumn]) : filteredData.map(a => a[config.dataColumn])
    const denomColumnData = filteredData.map(a => a[config.dataDenomColumn])

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
      [DATA_FUNCTION_SUM]: String(CoveHelper.Math.roundToPlace(CoveHelper.Math.getSum(numericalData), config.roundToPlace)),
      [DATA_FUNCTION_MEAN]: String(CoveHelper.Math.roundToPlace(CoveHelper.Math.getMean(numericalData), config.roundToPlace)),
      [DATA_FUNCTION_MEDIAN]: CoveHelper.Math.roundToPlace(CoveHelper.Math.getMedian(numericalData).toString(), config.roundToPlace),
      [DATA_FUNCTION_MAX]: Math.max(...numericalData).toString(),
      [DATA_FUNCTION_MIN]: Math.min(...numericalData).toString(),
      [DATA_FUNCTION_MODE]: CoveHelper.Math.getMode(numericalData).join(', ')
    }

    waffleNumerator = numerFunctionList[config.dataFunction]

    // Calculate denominator ------------------
    let waffleDenominator = null

    const denomFunctionList = {
      [DATA_FUNCTION_COUNT]: String(numericalDenomData.length),
      [DATA_FUNCTION_SUM]: String(CoveHelper.Math.roundToPlace(CoveHelper.Math.getSum(numericalDenomData), config.roundToPlace)),
      [DATA_FUNCTION_MEAN]: String(CoveHelper.Math.roundToPlace(CoveHelper.Math.getMean(numericalDenomData), config.roundToPlace)),
      [DATA_FUNCTION_MEDIAN]: CoveHelper.Math.roundToPlace(CoveHelper.Math.getMedian(numericalDenomData).toString(), config.roundToPlace),
      [DATA_FUNCTION_MAX]: Math.max(...numericalDenomData).toString(),
      [DATA_FUNCTION_MIN]: Math.min(...numericalDenomData).toString(),
      [DATA_FUNCTION_MODE]: CoveHelper.Math.getMode(numericalDenomData).join(', '),
    }

    if (config.customDenom && config.dataDenomColumn && config.dataDenomFunction) {
      waffleDenominator = denomFunctionList[config.dataDenomFunction]
    } else {
      waffleDenominator = config.dataDenom > 0 ? config.dataDenom : 100
    }

    return CoveHelper.Math.roundToPlace((waffleNumerator / waffleDenominator) * 100, config.roundToPlace)
  }

  const setRatio = () => {
    return (config.nodeWidth * 10) + (config.nodeSpacer * 9)
  }

  const dataPercentage = calculateData()

  let nodeWidthNum = parseInt(config.nodeWidth, 10)
  let nodeSpacerNum = parseInt(config.nodeSpacer, 10)

  let prevVal = usePrevious(dataPercentage)
  let newVal = dataPercentage

  const waffleRender = useCallback(() => {
    let waffleData = []

    for (let i = 0; i < 100; i++) {
      let newNode = {
        shape: config.shape,
        x: calculateNodePosition(config.shape, 'x', i, nodeWidthNum, nodeSpacerNum),
        y: calculateNodePosition(config.shape, 'y', i, nodeWidthNum, nodeSpacerNum),
        color: THEME_COLORS[config.theme]?.primary,
        opacity: i + 1 > (100 - Math.round(dataPercentage)) ? 1 : 0.35
      }
      waffleData.unshift(newNode)
    }

    return waffleData.map((node, key) => (
      node.shape === 'square'
        ? <Bar className="cove-waffle-chart__node"
               style={{ transition: calculateWaffleAnimation(key, prevVal, newVal) + 'fill 200ms ease 0s', fillOpacity: node.opacity }}
               x={node.x} y={node.y}
               width={nodeWidthNum} height={nodeWidthNum}
               fill={node.color}
               key={key}
        />
        : node.shape === 'person' ?
          <path
            style={{ transform: `translateX(${node.x + nodeWidthNum / 4}px) translateY(${node.y}px) scale(${nodeWidthNum / 20})`, transition: calculateWaffleAnimation(key, prevVal, newVal) + 'fill 200ms ease 0s', fillOpacity: node.opacity }}
            fill={node.color} fillOpacity={node.opacity} key={key}
            d="M3.75,0a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,3.75,0M5.625,5.625H5.18125a3.433,3.433,0,0,1-2.8625,0H1.875A1.875,1.875,
                          0,0,0,0,7.5v5.3125a.9375.9375,0,0,0,.9375.9375h.625v5.3125A.9375.9375,0,0,0,2.5,20H5a.9375.9375,0,0,0,
                          .9375-.9375V13.75h.625A.9375.9375,0,0,0,7.5,12.8125V7.5A1.875,1.875,0,0,0,5.625,5.625Z">
          </path>
          :
          <Circle className="cove-waffle-chart__node"
                  style={{ transition: calculateWaffleAnimation(key, prevVal, newVal) + 'fill 200ms ease 0s', fillOpacity: node.opacity }}
                  cx={node.x} cy={node.y} r={nodeWidthNum / 2}
                  fill={node.color}
                  data-step={key} key={key}
          />
    ))
  }, [ config ])

  let dataFontSize = config.fontSize ? { fontSize: config.fontSize + 'px' } : null

  return <>
    {config.missingRequiredSections && <>Missing data in sections</>}
    {!config.missingRequiredSections && (<>
      <div
        className={`cove-waffle-chart__container${config.orientation === 'vertical' ? ' cove-waffle-chart__container--verical' : ''}${config.overallFontSize ? ' font-' + config.overallFontSize : ''}`}>
        <div className="cove-waffle-chart__visualization" style={{ width: setRatio() }}>
          <svg width={setRatio()} height={setRatio()}>
            <Group>
              {waffleRender()}
            </Group>
          </svg>
        </div>
        {(dataPercentage || config.content) &&
          <div className="cove-waffle-chart__data">
            {dataPercentage &&
              <div className="cove-waffle-chart__data--primary" style={dataFontSize}>
                {config.prefix ? config.prefix : null}{dataPercentage}{config.suffix ? config.suffix : null}
              </div>
            }
            <div className="cove-waffle-chart__data--text">{parse(config.content)}</div>
          </div>
        }
      </div>
    </>)}
    {config.subtext &&
      <div className="cove-waffle-chart__subtext">
        {parse(config.subtext)}
      </div>
    }
  </>
}

export default WaffleChart
