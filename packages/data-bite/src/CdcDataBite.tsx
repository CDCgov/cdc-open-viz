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
    imageUrl,
    biteBody,
    biteFontSize,
    prefix,
    suffix,
    roundToPlace,
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
      if ('' !== roundToPlace && !isNaN(roundToPlace) && Number(roundToPlace)>-1) {
        value = Number(value).toFixed(Number(roundToPlace));
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
        dataBite = applyPrecision(numericalData[0]) + suffix + ' - ' + prefix + applyPrecision(numericalData[numericalData.length - 1]);
        break;
      default:
        console.warn('Data bite function not recognized: ' + dataFunction);
    }

    // Round
    if(dataFunction !== DATA_FUNCTION_RANGE) {
      dataBite = applyPrecision(dataBite)
    }

    return prefix + dataBite + suffix;
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

  let body = (<Loading />)

  if(false === loading) {
    let biteClasses = [];

    let isTop = true

    switch (config.bitePosition) {
      case IMAGE_POSITION_LEFT:
        biteClasses.push('bite-left');
        break;
      case IMAGE_POSITION_RIGHT:
        biteClasses.push('bite-right');
        break;
      case IMAGE_POSITION_TOP:
        biteClasses.push('bite-top');
        break;
      case IMAGE_POSITION_BOTTOM:
        biteClasses.push('bite-bottom');
        isTop = false
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
                {showBite && 'graphic' === biteStyle && isTop && <CircleCallout theme={config.theme} text={calculateDataBite()} biteFontSize={biteFontSize} /> }
                {imageUrl && 'graphic' !== biteStyle && isTop && <img src={imageUrl} className="bite-image callout" />}
                <div className="bite-content">
                  {showBite && 'title' === biteStyle && <div className="bite-value">{calculateDataBite()}</div>}
                  {biteBody &&
                    <p>
                      {showBite && 'body' === biteStyle && <span className="bite-value data-bite-body">{calculateDataBite()}</span>}
                      {parse(biteBody)}
                    </p>
                  }
                </div>
                {imageUrl && 'image' === biteStyle && !isTop && <img src={imageUrl} className="bite-image callout" />}
                {showBite && 'graphic' === biteStyle && !isTop && <CircleCallout theme={config.theme} text={calculateDataBite()} biteFontSize={biteFontSize} /> }
              </div>
              {subtext && <p className="subtext">{parse(subtext)}</p>}
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
  'image': 'Image',
  'title': 'Text above body text',
  'body': 'Inline with body text'
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
