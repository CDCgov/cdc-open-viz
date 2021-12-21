import React, { useEffect,  useState, useCallback } from 'react';
import EditorPanel from './components/EditorPanel';
import defaults from './data/initial-state';
import Loading from '@cdc/core/components/Loading';
import getViewport from '@cdc/core/helpers/getViewport';
import numberFromString from '@cdc/core/helpers/numberFromString'
import ResizeObserver from 'resize-observer-polyfill';
import Context from './context';
// @ts-ignore
import CircleCallout from './components/CircleCallout';
import './scss/main.scss';
import parse from 'html-react-parser'

const CdcDataBite = (
    { configUrl, config: configObj, isDashboard = false, isEditor = false, setConfig: setParentConfig } :
    { configUrl?: string, config?: any, isDashboard?: boolean, isEditor?: boolean, setConfig? }
) => {

  interface keyable {
    [key: string]: any
  }

  const [config, setConfig] = useState<keyable>({...defaults});
  const [loading, setLoading] = useState<Boolean>(true);

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
    subtext
  } = config;

  const [currentViewport, setCurrentViewport] = useState<String>('lg');

  //Observes changes to outermost container and changes viewport size in state
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
        let newViewport = getViewport(entry.contentRect.width * 2) // Data bite is usually presented as small, so we scale it up for responsive calculations

        setCurrentViewport(newViewport)
    }
  });

  const updateConfig = (newConfig) => {
    // Deeper copy
    Object.keys(defaults).forEach(key => {
      if (newConfig[key] && 'object' === typeof newConfig[key] && !Array.isArray(newConfig[key])) {
        newConfig[key] = { ...defaults[key], ...newConfig[key] }
      }
    });

    //Enforce default values that need to be calculated at runtime
    newConfig.runtime = {};
    newConfig.runtime.uniqueId = Date.now();

    //Check things that are needed and set error messages if needed
    newConfig.runtime.editorErrorMessage = '';
    setConfig(newConfig);
  }

  const loadConfig = async () => {
    let response = configObj || await (await fetch(configUrl)).json();

    // If data is included through a URL, fetch that and store
    let responseData = response.data ?? {}

    if(response.dataUrl) {
      const dataString = await fetch(response.dataUrl);
      responseData = await dataString.json();
    }

    response.data = responseData;

    updateConfig({ ...defaults, ...response });
    setLoading(false);
  }

  const calculateDataBite = () => {

    //If either the column or function aren't set, do not calculate
    if (!dataColumn || !dataFunction) {
      return '';
    }

    const getColumnSum = (arr) => {
      const sum = arr.reduce((sum, x) => sum + x);
      return applyPrecision(sum);
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
      if ('' !== config.dataFormat.roundToPlace && !isNaN(config.dataFormat.roundToPlace) && Number(config.dataFormat.roundToPlace)>-1) {
        value = Number(value).toFixed(Number(config.dataFormat.roundToPlace));
      }
      return value;
    }

    let dataBite = null;

    //Optionally filter the data based on the user's filter
    let filteredData = config.data;

    filters.map((filter) => {
      if ( filter.columnName && filter.columnValue ) {
        filteredData = filteredData.filter(function (e) {
          return e[filter.columnName] === filter.columnValue;
        });
      } else {
        return false;
      }
    });

    let numericalData = []

    //Get the column's data
    filteredData.forEach(row => {
      let value = numberFromString(row[dataColumn])
      if(typeof value === 'number') numericalData.push(value)
    });

    switch (dataFunction) {
      case DATA_FUNCTION_COUNT:
        dataBite = numericalData.length;
        break;
      case DATA_FUNCTION_SUM:
        dataBite = getColumnSum(numericalData);
        break;
      case DATA_FUNCTION_MEAN:
        dataBite = getColumnMean(numericalData);
        break;
      case DATA_FUNCTION_MEDIAN:
        dataBite = getMedian(numericalData);
        break;
      case DATA_FUNCTION_MAX:
        dataBite = Math.max(...numericalData);
        break;
      case DATA_FUNCTION_MIN:
        dataBite = Math.min(...numericalData);
        break;
      case DATA_FUNCTION_MODE:
        dataBite = getMode(numericalData).join(', ');
        break;
      case DATA_FUNCTION_RANGE:
        numericalData.sort((a, b) => a - b);
        let rangeMin = applyPrecision(numericalData[0]);
        let rangeMax = applyPrecision(numericalData[numericalData.length - 1]);

        if (config.dataFormat.commas) {
          rangeMin = Number(rangeMin).toLocaleString('en-US');
          rangeMax = Number(rangeMax).toLocaleString('en-US');
        }

        dataBite = config.dataFormat.prefix + applyPrecision(rangeMin) + config.dataFormat.suffix + ' - ' + config.dataFormat.prefix + applyPrecision(rangeMax) + config.dataFormat.suffix;
        break;
      default:
        console.warn('Data bite function not recognized: ' + dataFunction);
    }

    // If not the range, then round and format here
    if (dataFunction !== DATA_FUNCTION_RANGE) {
      dataBite = applyPrecision(dataBite);

      if (config.dataFormat.commas) {
        dataBite = Number(dataBite).toLocaleString('en-US');
      }

      // return config.dataFormat.prefix + dataBite + config.dataFormat.suffix;
      return dataBite
    } else { //Rounding and formatting for ranges happens earlier.
      return dataBite;
    }
  }

  // Load data when component first mounts
  const outerContainerRef = useCallback(node => {
      if (node !== null) {
          resizeObserver.observe(node);
      }
  },[]);

  useEffect(() => {
    loadConfig();
  }, [])

  if(configObj) {
    useEffect(() => {
      loadConfig();
    }, [configObj.data])
  }

  let body = (<Loading />)

  const DataImage = useCallback(() => {
    let operators = {
      '<': (a, b) => { return a < b },
      '>': (a, b) => { return a > b },
      '<=': (a, b) => { return a <= b },
      '>=': (a, b) => { return a >= b },
      '≠': (a, b) => { return a !== b },
      '=': (a, b) => { return a === b }
    }
    let imageSource = imageData.url
    let imageAlt = imageData.alt

    if ('dynamic' === imageData.display && imageData.options && imageData.options?.length > 0) {
      let targetVal = Number(calculateDataBite())
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
                    if (alt !== '' && alt !== undefined) { imageAlt = alt }
                    argumentActive = true
                  }
                }
              } else {
                imageSource = source
                if (alt !== '' && alt !== undefined) { imageAlt = alt }
                argumentActive = true
              }
            }
          }
        }
      })
    }

    return (imageSource.length > 0 && 'graphic' !== biteStyle && 'none' !== imageData.display ? <img alt={imageAlt} src={imageSource} className="bite-image callout" /> : null)
  }, [ imageData ])

  if(false === loading) {
    let biteClasses = [];

    let isTop = false
    let isBottom = false

    switch (config.bitePosition) {
      case IMAGE_POSITION_LEFT:
        biteClasses.push('bite-left');
        isTop = true
        break;
      case IMAGE_POSITION_RIGHT:
        biteClasses.push('bite-right');
        isTop = true
        break;
      case IMAGE_POSITION_TOP:
        biteClasses.push('bite-top');
        isTop = true
        break;
      case IMAGE_POSITION_BOTTOM:
        biteClasses.push('bite-bottom');
        isBottom = true
        break;
    }

    if(config.shadow) biteClasses.push('shadow')

    const showBite = undefined !== dataColumn && undefined !== dataFunction;

    body = (
      <>
        {isEditor && <EditorPanel />}
        <div className={isEditor ? 'spacing-wrapper' : ''}>
          <div className="cdc-data-bite-inner-container">
            {title && <div className="bite-header">{parse(title)}</div>}
            <div className={`bite ${biteClasses.join(' ')}`}>
              <div className="bite-content-container">
                {showBite && 'graphic' === biteStyle && isTop && <CircleCallout theme={config.theme} text={calculateDataBite()} biteFontSize={biteFontSize} dataFormat={dataFormat} /> }
                {isTop && <DataImage />}
                <div className="bite-content">
                  {showBite && 'title' === biteStyle && <div className="bite-value" style={{fontSize: biteFontSize + 'px'}}>{dataFormat.prefix + calculateDataBite() + dataFormat.suffix}</div>}
                  {biteBody &&
                    <>
                      <p className="bite-text">
                        {showBite && 'body' === biteStyle && <span className="bite-value data-bite-body" style={{fontSize: biteFontSize + 'px'}}>{dataFormat.prefix + calculateDataBite() + dataFormat.suffix}</span>}
                        {parse(biteBody)}
                      </p>
                      {subtext && <p className="bite-subtext">{parse(subtext)}</p>}
                    </>
                  }
                </div>
                {isBottom && <DataImage />}
                {showBite && 'graphic' === biteStyle && !isTop && <CircleCallout theme={config.theme} text={calculateDataBite()} biteFontSize={biteFontSize} dataFormat={dataFormat} /> }
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  let classNames = [
    'cdc-open-viz-module',
    'type-data-bite',
    currentViewport,
    config.theme,
    'font-' + config.fontSize
  ];
  if (isEditor) {
    classNames.push('is-editor');
  }

  return (
    <Context.Provider value={{ config, updateConfig, loading, data: config.data, setParentConfig, isDashboard }}>
      <div className={classNames.join(' ')} ref={outerContainerRef}>
        {body}
      </div>
    </Context.Provider>
  );
};

export default CdcDataBite;

/* Constant */
export const DATA_FUNCTION_MAX = 'Max';
export const DATA_FUNCTION_COUNT = 'Count';
export const DATA_FUNCTION_MEAN = 'Mean (Average)';
export const DATA_FUNCTION_MEDIAN = 'Median';
export const DATA_FUNCTION_MIN = 'Min';
export const DATA_FUNCTION_MODE = 'Mode';
export const DATA_FUNCTION_RANGE = 'Range';
export const DATA_FUNCTION_SUM = 'Sum';
export const DATA_FUNCTIONS = [
  DATA_FUNCTION_COUNT,
  DATA_FUNCTION_MAX,
  DATA_FUNCTION_MEAN,
  DATA_FUNCTION_MEDIAN,
  DATA_FUNCTION_MIN,
  DATA_FUNCTION_MODE,
  DATA_FUNCTION_RANGE,
  DATA_FUNCTION_SUM
];

export const BITE_LOCATION_TITLE = 'title';
export const BITE_LOCATION_BODY = 'body';
export const BITE_LOCATION_GRAPHIC = 'graphic';
export const BITE_LOCATIONS = {
  'graphic': 'Graphic',
  'title': 'Value above Message',
  'body': 'Value before Message'
};

export const IMAGE_POSITION_LEFT = 'Left';
export const IMAGE_POSITION_RIGHT = 'Right';
export const IMAGE_POSITION_TOP = 'Top';
export const IMAGE_POSITION_BOTTOM = 'Bottom';
export const IMAGE_POSITIONS = [
  IMAGE_POSITION_LEFT,
  IMAGE_POSITION_RIGHT,
  IMAGE_POSITION_TOP,
  IMAGE_POSITION_BOTTOM,
];

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
