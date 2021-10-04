import React, { useCallback, useEffect, useState } from 'react'
import parse from 'html-react-parser'
import { Group } from '@visx/group';
import { Circle, Bar } from '@visx/shape';

import ErrorBoundary from '@cdc/core/components/ErrorBoundary';
import Loading from '@cdc/core/components/Loading'

import EditorPanel from './components/EditorPanel'
import defaults from './data/initial-state'
import Context from './context'
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
  'theme-amber': '#fbab18',
}

const WaffleChart = ({ config }) => {
  let {
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
    if (!dataColumn || !dataFunction) {
      return '';
    }

    const getColumnSum = (arr) => {
      if (Array.isArray(arr) && arr.length > 0) {
        const sum = arr.reduce((sum, x) => sum + x);
        return applyPrecision(sum);
      }
    }

    const getColumnMean = (arr) => {
      const mean = arr.length > 1 ? arr.reduce((a, b) => a + b) / arr.length : arr[0];
      return applyPrecision(mean);
    }

    const getMode = (arr) => {
      let freq = {}
      let max = -Infinity

      for(let i = 0; i < arr.length; i++) {
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

      for(let key in freq) {
        if(freq[key] === max) res.push(key)
      }

      return res
    }

    const getMedian = arr => {
      const mid = Math.floor(arr.length / 2),
        nums = [...arr].sort((a, b) => a - b);
      const value = arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
      return applyPrecision(value);
    };

    const applyPrecision = (value) => {
      if ('' !== roundToPlace && !isNaN(roundToPlace) && Number(roundToPlace)>-1) {
        value = Number(value).toFixed(Number(roundToPlace));
      }
      return value;
    }

    //Optionally filter the data based on the user's filter
    let filteredData = config.data

    filters.map((filter) => {
      if ( filter.columnName && filter.columnValue ) {
        filteredData = filteredData.filter(function (e) {
          return e[filter.columnName] === filter.columnValue;
        });
      } else {
        return false;
      }
    });

    let conditionalData = []

    if (dataConditionalColumn !== '' && dataConditionalOperator !== '' && dataConditionalComparate !== '') {
      switch (dataConditionalOperator) {
        case ('<'):
          conditionalData = filteredData.filter(e => e[dataConditionalColumn] < dataConditionalComparate )
          break
        case ('>'):
          conditionalData = filteredData.filter(e => e[dataConditionalColumn] > dataConditionalComparate )
          break
        case ('<='):
          conditionalData = filteredData.filter(e => e[dataConditionalColumn] <= dataConditionalComparate )
          break
        case ('>='):
          conditionalData = filteredData.filter(e => e[dataConditionalColumn] >= dataConditionalComparate )
          break
        case ('='):
          if (isNaN(Number(dataConditionalComparate))) {
            conditionalData = filteredData.filter(e => String(e[dataConditionalColumn]) === dataConditionalComparate )
          } else {
            conditionalData = filteredData.filter(e => e[dataConditionalColumn] === dataConditionalComparate )
          }
          break
        case ('≠'):
          if (isNaN(Number(dataConditionalComparate))) {
            conditionalData = filteredData.filter(e => String(e[dataConditionalColumn]) !== dataConditionalComparate )
          } else {
            conditionalData = filteredData.filter(e => e[dataConditionalColumn] !== dataConditionalComparate )
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
      let include = false;
      if ( Number(value) || Number.isFinite(Number(value)) ) {
        include = true;
      }
      return include;
    }).map(Number);

    let numericalDenomData = denomColumnData.filter((value) => {
      let include = false;
      if ( Number(value) || Number.isFinite(Number(value)) ) {
        include = true;
      }
      return include;
    }).map(Number);

    let waffleNumerator = ''

    switch (dataFunction) {
      case DATA_FUNCTION_COUNT:
        waffleNumerator = String(numericalData.length);
        break;
      case DATA_FUNCTION_SUM:
        waffleNumerator = String(getColumnSum(numericalData));
        break;
      case DATA_FUNCTION_MEAN:
        waffleNumerator = String(getColumnMean(numericalData));
        break;
      case DATA_FUNCTION_MEDIAN:
        waffleNumerator = getMedian(numericalData).toString();
        break;
      case DATA_FUNCTION_MAX:
        waffleNumerator = Math.max(...numericalData).toString();
        break;
      case DATA_FUNCTION_MIN:
        waffleNumerator = Math.min(...numericalData).toString();
        break;
      case DATA_FUNCTION_MODE:
        waffleNumerator = getMode(numericalData).join(', ');
        break;
      default:
        console.log('Function not recognized: ' + dataFunction);
    }

    let waffleDenominator = null

    if (customDenom && dataDenomColumn && dataDenomFunction) {
      switch (dataDenomFunction) {
        case DATA_FUNCTION_COUNT:
          waffleDenominator = String(numericalDenomData.length);
          break;
        case DATA_FUNCTION_SUM:
          waffleDenominator = String(getColumnSum(numericalDenomData));
          break;
        case DATA_FUNCTION_MEAN:
          waffleDenominator = String(getColumnMean(numericalDenomData));
          break;
        case DATA_FUNCTION_MEDIAN:
          waffleDenominator = getMedian(numericalDenomData).toString();
          break;
        case DATA_FUNCTION_MAX:
          waffleDenominator = Math.max(...numericalDenomData).toString();
          break;
        case DATA_FUNCTION_MIN:
          waffleDenominator = Math.min(...numericalDenomData).toString();
          break;
        case DATA_FUNCTION_MODE:
          waffleDenominator = getMode(numericalDenomData).join(', ');
          break;
        default:
          console.log('Function not recognized: ' + dataFunction);
      }
    } else {
      waffleDenominator = dataDenom > 0 ? dataDenom : 100
    }

    // @ts-ignore
    return applyPrecision((waffleNumerator / waffleDenominator) * 100);
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
        color: themeColor[theme],
        opacity: i + 1 > (100 - Math.round(dataPercentage)) ? 1 : 0.35
      }
      waffleData.push(newNode)
    }

    return waffleData.map((node, key) => (
      node.shape === 'square'
        ? <Bar className="cdc-waffle-chart__node" style={{transitionDelay: `${0.1 * key}ms`}} x={node.x} y={node.y} width={nodeWidthNum} height={nodeWidthNum} fill={node.color} fillOpacity={node.opacity} key={key} />
        : node.shape === 'person' ?
        <path style={{transform: `translateX(${node.x + nodeWidthNum / 4}px) translateY(${node.y}px) scale(${nodeWidthNum / 20})`}}
              fill={node.color} fillOpacity={node.opacity} key={key}
              d="M3.75,0a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,3.75,0M5.625,5.625H5.18125a3.433,3.433,0,0,1-2.8625,0H1.875A1.875,1.875,
                          0,0,0,0,7.5v5.3125a.9375.9375,0,0,0,.9375.9375h.625v5.3125A.9375.9375,0,0,0,2.5,20H5a.9375.9375,0,0,0,
                          .9375-.9375V13.75h.625A.9375.9375,0,0,0,7.5,12.8125V7.5A1.875,1.875,0,0,0,5.625,5.625Z">
        </path>
        : <Circle className="cdc-waffle-chart__node" style={{transitionDelay: `${0.1 * key}ms`}} cx={node.x} cy={node.y} r={nodeWidthNum / 2} fill={node.color} fillOpacity={node.opacity} key={key}/>
    ))
  },[theme, dataPercentage, shape, nodeWidth, nodeSpacer])

  const setRatio = useCallback(() => {
    return (nodeWidth * 10) + (nodeSpacer * 9)
  },[nodeWidth, nodeSpacer])

  return (
    <section className={`cdc-waffle-chart ${theme}${config.fontSize ? ' font-' + config.fontSize : ''}`}>
      <div className="cdc-waffle-chart__header">{parse(title)}</div>
      <div className={`cdc-waffle-chart__inner-container${orientation === 'vertical' ? ' cdc-waffle-chart--verical' : ''}`}>
        <div className="cdc-waffle-chart__chart">
          <svg width={setRatio()} height={setRatio()}>
            <Group>
              {buildWaffle()}
            </Group>
          </svg>
        </div>
        <div className="cdc-waffle-chart__data">
          <div className="cdc-waffle-chart__data--primary">
            {prefix ? prefix : null}{dataPercentage}{suffix ? suffix : null}
          </div>
          <div className="cdc-waffle-chart__data--text">{parse(content)}</div>
        </div>
      </div>
      <div className="cdc-waffle-chart__subtext">
        {parse(subtext)}
      </div>
    </section>
  )
}

const CdcWaffleChart = (
  {
    configUrl,
    config: configObj,
    isDashboard = false,
    isEditor = false,
    setConfig: setParentConfig
  }
) => {
  const [ config, setConfig ] = useState({ theme: '', data: {}})
  const [ loading, setLoading ] = useState(true)

  const updateConfig = (newConfig) => {
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
    setConfig(newConfig)
  }

  useEffect(() => {
    const loadData = async () => {
      let response = configObj || await (await fetch(configUrl)).json()

      // If data is included through a URL, fetch that and store
      let responseData = response.data ?? {}

      if (response.dataUrl) {
        const dataString = await fetch(response.dataUrl)
        responseData = await dataString.json()
      }

      response.data = responseData

      updateConfig({ ...defaults, ...response })
    }

    loadData().then(r => setLoading(false))
  }, [ configObj, configUrl ])

  let body = (<Loading/>)

  if (loading === false) {
    let classList = []

    classList.push(config.theme)

    body = (
      <div className={`cdc-open-viz-module type-waffle-chart${classList.length > 0 ? ' ' + classList.join(' '): ''}`}
           style={isEditor ? { paddingLeft: 350 + 'px' } : null}>
        {isEditor && <EditorPanel/>}
        <WaffleChart config={config}/>
      </div>
    )
  }

  return (
    <ErrorBoundary component="WaffleChart">
      <Context.Provider value={{ config, updateConfig, loading, data: config.data, setParentConfig, isDashboard }}>
        {body}
      </Context.Provider>
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
