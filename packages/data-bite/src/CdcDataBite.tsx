import React, { useEffect, useRef, useState } from 'react';
import EditorPanel from './components/EditorPanel';
import defaults from './data/initial-state';
import Loading from '@cdc/core/components/Loading';
import ResizeObserver from 'resize-observer-polyfill';
import Context from './context';
// @ts-ignore
import CircleCallout from './components/CircleCallout';
import './scss/main.scss';

const CdcDataBite = (
    { configUrl, config: configObj, isEditor = false, setConfig: setParentConfig } :
    { configUrl?: string, config?: any, isEditor?: boolean, setConfig? }
) => {

  interface keyable {
    [key: string]: any
  }

  const [config, setConfig] = useState<keyable>({});
  const [data, setData] = useState<Array<Object>>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  const {
    title,
    dataColumn,
    dataFunction,
    imageUrl,
    biteBody,
    prefix,
    suffix,
    roundToPlace,
    biteLocation,
    filterColumn,
    filterValue,
    subtext
  } = config;

  const outerContainerRef = useRef(null);

  // Load data when component first mounts
  useEffect(() => {
    loadConfig();
    resizeObserver.observe(outerContainerRef.current);
  }, []);

  useEffect( () => {
    setLoading(false);
  }, [])

  const viewports:keyable = {
    'md': 992,
    'sm': 768,
    'xs': 576,
    'xxs': 350
  }

  const getViewport = size => {
    let result = 'lg'
    let viewportList = Object.keys( viewports )

    for(let viewport of viewportList) {
      if(size <= viewports[viewport]) {
        result = viewport
      }
    }

    return result
  }

  const [currentViewport, setCurrentViewport] = useState<String>('lg');
  const [dimensions, setDimensions] = useState<Array<Number>>([]);

  // Observes changes to outermost container and changes viewport size in state
  const resizeObserver:ResizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      let { width, height } = entry.contentRect
      let newViewport = getViewport(width)

      setCurrentViewport(newViewport)

      if(isEditor) {
        width = width - 350;
      }

      setDimensions([width, height])
    }
  })

  const loadConfig = async () => {

    let response = configObj || await (await fetch(configUrl)).json();

    // If data is included through a URL, fetch that and store
    let data = response.data ?? {}

    if(response.dataUrl) {
      const dataString = await fetch(response.dataUrl);
      data = await dataString.json();
    }

    setData(data);

    let newConfig = {...defaults, ...response}

    updateConfig(newConfig, data);
  }

  const updateConfig = (newConfig, dataOverride = undefined) => {
    // Deeper copy
    Object.keys(defaults).forEach(key => {
      if (newConfig[key] && 'object' === typeof newConfig[key]) {
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

    let dataBite = '';

    //Optionally filter the data based on the user's filter

    let filteredData = data;
    if ( filterColumn && filterValue ) {
      filteredData = data.filter(function (e) {
        return e[filterColumn] === filterValue;
      });
    }

    //Get the column's data
    const columnData = filteredData.map(a => a[dataColumn]);

    //Filter the column's data for numerical values only
    let numericalData = columnData.filter((value) => {
      let include = false;
      if ( Number(value) || Number.isFinite(Number(value)) ) {
        include = true;
      }
      return include;
    }).map(Number);

    switch (dataFunction) {
      case DATA_FUNCTION_COUNT:
        dataBite = prefix + String(numericalData.length) + suffix;
        break;
      case DATA_FUNCTION_SUM:
        dataBite = prefix + String(getColumnSum(numericalData)) + suffix;
        break;
      case DATA_FUNCTION_MEAN:
        dataBite = prefix + String(getColumnMean(numericalData)) + suffix;
        break;
      case DATA_FUNCTION_MEDIAN:
        dataBite = prefix + getMedian(numericalData).toString() + suffix;
        break;
      case DATA_FUNCTION_MAX:
        dataBite = prefix + applyPrecision(Math.max(...numericalData)).toString() + suffix;
        break;
      case DATA_FUNCTION_MIN:
        dataBite = prefix + applyPrecision(Math.min(...numericalData)).toString() + suffix;
        break;
      case DATA_FUNCTION_MODE:
        dataBite = prefix + getMode(numericalData).join(', ') + suffix;
        break;
      case DATA_FUNCTION_RANGE:
        numericalData.sort();
        dataBite = prefix + applyPrecision(numericalData[0]).toString() + suffix + ' - ' + prefix + applyPrecision(numericalData[numericalData.length - 1]).toString() + suffix;
        break;
      default:
        console.log('Data bite function not recognized: ' + dataFunction);
    }

    return dataBite;
  }

  let body = (<Loading />)

  if(false === loading) {

    let biteClasses = [];
    let addImageTop = false;
    let addImageBottom = false;

    if (
      ( !['title','body'].includes(biteLocation) && !imageUrl ) ||
      ( ['title','body'].includes(biteLocation) && imageUrl ) ||
      ( 'graphic' === biteLocation && imageUrl )
      ) {
      switch (config.imagePosition) {
        case IMAGE_POSITION_LEFT:
          biteClasses.push('bite-left');
          addImageTop = true;
          break;
        case IMAGE_POSITION_RIGHT:
          biteClasses.push('bite-right');
          addImageTop = true;
          break;
        case IMAGE_POSITION_TOP:
          biteClasses.push('bite-top');
          addImageTop = true;
          break;
        case IMAGE_POSITION_BOTTOM:
          biteClasses.push('bite-bottom');
          addImageBottom = true;
          break;
      }
    }

    biteClasses.push(config.theme);
    const showBite = undefined !== dataColumn && undefined !== dataFunction;
    body = (
      <>
        {isEditor && <EditorPanel />}
        <div className="cdc-data-bite-inner-container">
          <div className={`bite ${biteClasses.join(' ')}`}>
            {title && <div className="bite-header">{title}</div>}
            <div className="bite-content-container">
              {showBite && 'graphic' === biteLocation && addImageTop && <CircleCallout theme={config.theme} text={calculateDataBite()} /> }
              {imageUrl && 'graphic' !== biteLocation && addImageTop && <img src={imageUrl} className="bite-image" />}
              <div className="bite-content">
                {showBite && 'title' === biteLocation && <div className="bite-value">{calculateDataBite()}</div>}
                {biteBody &&
                  <p>
                    {showBite && 'body' === biteLocation && <span className="bite-value data-bite-body">{calculateDataBite()}</span>}
                    {biteBody}
                  </p>
                }
              </div>
              {imageUrl && 'graphic' !== biteLocation && addImageBottom && <img src={imageUrl} className="bite-image" />}
              {showBite && 'graphic' === biteLocation && addImageBottom && <CircleCallout theme={config.theme} text={calculateDataBite()} /> }
            </div>
            {subtext && <p className="subtext">{subtext}</p>}
          </div>
        </div>
      </>
    )
  }

  return (
    <Context.Provider value={{ config, updateConfig, loading, data, setParentConfig }}>
      <div className={`cdc-open-viz-module type-data-bite ${currentViewport} font-${config.fontSize}`} ref={outerContainerRef}>
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
  'title': 'As a title in the body',
  'body': 'At the beginning of the body text',
  'graphic': 'As a graphic'
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
