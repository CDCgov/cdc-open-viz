import React, { useEffect,  useState, useCallback,FC, memo } from 'react';
import EditorPanel from './components/EditorPanel';
import defaults from './data/initial-state';
import Loading from '@cdc/core/components/Loading';
import getViewport from '@cdc/core/helpers/getViewport';
import ResizeObserver from 'resize-observer-polyfill';
import Papa from 'papaparse';
import parse from 'html-react-parser';

import Context from './context';
// @ts-ignore
import DataTransform from '@cdc/core/components/DataTransform';
import CircleCallout from './components/CircleCallout';
import './scss/main.scss';
import numberFromString from '@cdc/core/helpers/numberFromString';
import { Fragment } from 'react';

type DefaultsType = typeof defaults
interface Props{
  configUrl?: string,
  config?: any
  isDashboard?: boolean
  isEditor?: boolean
  setConfig?:any
}

const CdcDataBite:FC<Props> = (props) => {
const { configUrl, config: configObj, isDashboard = false, isEditor = false, setConfig: setParentConfig } = props

  const [config, setConfig] = useState<DefaultsType>({...defaults});
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
    subtext,
    general: { isCompactStyle }
  } = config;


  const transform = new DataTransform()

  const [currentViewport, setCurrentViewport] = useState<String>('lg');

  //Observes changes to outermost container and changes viewport size in state
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
        let newViewport = getViewport(entry.contentRect.width * 2) // Data bite is usually presented as small, so we scale it up for responsive calculations
        setCurrentViewport(newViewport)
    }
  });

  const fetchRemoteData = async (url) => {
    try {
        const urlObj = new URL(url);
        const regex = /(?:\.([^.]+))?$/

        let data = []

        const ext = (regex.exec(urlObj.pathname)[1])
        if ('csv' === ext) {
            data = await fetch(url)
                .then(response => response.text())
                .then(responseText => {
                    const parsedCsv = Papa.parse(responseText, {
                        header: true,
                        dynamicTyping: true,
                        skipEmptyLines: true
                    })
                    return parsedCsv.data
                })
        }

        if ('json' === ext) {
            data = await fetch(url)
                .then(response => response.json())
        }

        return data;
    } catch {
        // If we can't parse it, still attempt to fetch it
        try {
            let response = await (await fetch(configUrl)).json()
            return response
        } catch {
            console.error(`Cannot parse URL: ${url}`);
        }
    }
  }

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

    if (response.dataUrl) {
      let newData = await fetchRemoteData(response.dataUrl)

      if(newData && response.dataDescription) {
          newData = transform.autoStandardize(newData);
          newData = transform.developerStandardize(newData, response.dataDescription);
      }

      if(newData) {
        responseData = newData;
      }
    }

    response.data = responseData;

    updateConfig({ ...defaults, ...response });

    setLoading(false);
  }

  const calculateDataBite = ():string|number => {
  
    //If either the column or function aren't set, do not calculate
    if (!dataColumn || !dataFunction) {
      return '';  
    }


    const applyPrecision =(value:number|string):string => {
      // first validation
      if(value === undefined || value===null){
       console.error('Enter correct value to "applyPrecision()" function ')
      return ;
    }  
  // second validation 
  if(Number.isNaN(value)){
    console.error(' Argunment isNaN, "applyPrecision()" function ')
    return;
  }
    let result:number|string = value
    let roundToPlace = Number(config.dataFormat.roundToPlace) // default equals to 0
    //  ROUND FIELD  going -1,-2,-3 numbers
    if(roundToPlace<0) {
      console.error(' ROUND field is below "0", "applyPrecision()" function ')
      return;
    }
    if(typeof roundToPlace ==='number'  && roundToPlace > -1 ){
      result = Number(result).toFixed(roundToPlace);   // returns STRING
    }
        return String(result)
    }

    const getColumnSum = (arr:(string|number)[]) => {
      // first validation
      if(arr===undefined || arr===null){
        console.error('Enter valid value for getColumnSum function ')
        return;
      }
      // second validation
      if(arr.length === 0 || !Array.isArray(arr)){
        console.error('Arguments are not valid getColumnSum function ')
        return;
      }
      let sum:number = 0
      if(arr.length > 1){
        /// first convert each element to number then add using reduce method to escape string concatination.
       sum = arr.map(el=>Number(el)).reduce((sum:number, x:number) => sum + x);
      }else {
        sum = Number(arr[0])
      }
      return applyPrecision(sum);
    }

    const getColumnMean=(arr:(string|number)[]) => { // add default params to escape errors on runtime
      // first validation
      if(arr===undefined || arr===null ||!Array.isArray(arr)){
        console.error('Enter valid parameter getColumnMean function')
        return 
      }
     
      let mean:number = 0
      if(arr.length > 1){
       /// first convert each element to number then add using reduce method to escape string concatination.
        mean = arr.map(el=>Number(el)).reduce((a, b) => a + b) / arr.length
      }else {
        mean = Number(arr[0])
      }
      return applyPrecision(mean);
    }

    const getMode = (arr:any[]=[]):string[] => { // add default params to escape errors on runtime
    // this function accepts any array and returns array of strings
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
      if(!arr.length) return ;
      const mid = Math.floor(arr.length / 2),
        nums = [...arr].sort((a, b) => a - b);
      const value = arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
      return applyPrecision(value);
    };

      const applyLocaleString = (value:string):string=>{
        if(value===undefined || value===null) return ;
        if(Number.isNaN(value)|| typeof value ==='number') {
        value = String(value)

      }
      const language = 'en-US'
      let formattedValue = parseFloat(value).toLocaleString(language, {
        useGrouping: true,
        maximumFractionDigits: 6
      })
        // Add back missing .0 in e.g. 12.0
    const match = value.match(/\.\d*?(0*)$/)

      if (match){
     formattedValue += (/[1-9]/).test(match[0]) ? match[1] : match[0]
      }
      return formattedValue
    }

    let dataBite:string|number = '';
    
    //Optionally filter the data based on the user's filter
    let filteredData = config.data;

    filters.map((filter) => {
      if ( filter.columnName && filter.columnValue ) {
      return filteredData = filteredData.filter(function (e) {
          return e[filter.columnName] === filter.columnValue;
        });
      } else {
        return false;
      }
    });

    let numericalData:any[] = []


   // Get the column's data
     if(filteredData.length){   
      filteredData.forEach(row => {
        let value = numberFromString(row[dataColumn])
        if(typeof value === 'number') numericalData.push(value)
      });
     }
    
  

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
        dataBite =Math.min(...numericalData);
        break;
      case DATA_FUNCTION_MODE:
        dataBite = getMode(numericalData).join('');
        break;
      case DATA_FUNCTION_RANGE:
        let rangeMin :number|string = Math.min(...numericalData)
        let rangeMax :number|string = Math.max(...numericalData)
          rangeMin =  applyPrecision(rangeMin)
          rangeMax =  applyPrecision(rangeMax)
           if (config.dataFormat.commas) {
          rangeMin = applyLocaleString(rangeMin)
          rangeMax = applyLocaleString(rangeMax)
          }
      dataBite =  config.dataFormat.prefix + rangeMin + config.dataFormat.suffix + ' - ' + config.dataFormat.prefix + rangeMax+config.dataFormat.suffix;  
        break;
      default:
        console.warn('Data bite function not recognized: ' + dataFunction);
    }

    // If not the range, then round and format here
    if (dataFunction !== DATA_FUNCTION_RANGE) {
      dataBite = applyPrecision(dataBite);
  
      if (config.dataFormat.commas) {
       dataBite = applyLocaleString(dataBite)
      }
          // Optional 
      // return config.dataFormat.prefix + dataBite + config.dataFormat.suffix;

     return dataBite
    } else { 
      //Rounding and formatting for ranges happens earlier.

      return dataBite
    }
  }

  // Load data when component first mounts
  const outerContainerRef = useCallback(node => {
      if (node !== null) {
          resizeObserver.observe(node);
      }
  },[]);

  // Initial load
  useEffect(() => {
    loadConfig()
  }, [])

  if(configObj && config && configObj.data !== config.data){
    loadConfig();
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
  }, [ imageData])

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

    
    let innerContainerClasses = ['cdc-data-bite-inner-container']
    config.title && innerContainerClasses.push('component--has-title')
    config.subtext && innerContainerClasses.push('component--has-subtext')
    config.biteStyle && innerContainerClasses.push(`bite__style--${config.biteStyle}`)
    config.general.isCompactStyle && innerContainerClasses.push(`component--isCompactStyle`)

    let contentClasses = ['cove-component__content'];
    !config.visual.border && contentClasses.push('no-borders');
    config.visual.borderColorTheme && contentClasses.push('component--has-borderColorTheme');
    config.visual.accent && contentClasses.push('component--has-accent');
    config.visual.background && contentClasses.push('component--has-background');
    config.visual.hideBackgroundColor && contentClasses.push('component--hideBackgroundColor');

    // ! these two will be retired.
    config.shadow && innerContainerClasses.push('shadow')
    config?.visual?.roundedBorders && innerContainerClasses.push('bite--has-rounded-borders')

    const showBite = undefined !== dataColumn && undefined !== dataFunction;

    body = (
      <>
        {isEditor && <EditorPanel />}
        <div className={isEditor ? 'spacing-wrapper' : ''}>
          <div className={innerContainerClasses.join(' ')}>
            {title && <div className="cove-component__header">{parse(title)}</div>}
            <div className={`bite ${biteClasses.join(' ')}`}>
              <div className={ contentClasses.join(' ')} >
                {showBite && 'graphic' === biteStyle && isTop && <CircleCallout theme={config.theme} text={calculateDataBite()} biteFontSize={biteFontSize} dataFormat={dataFormat} /> }
                {isTop && <DataImage />}
                <div className="bite-content">
                  {showBite && 'title' === biteStyle && <div className="bite-value" style={{fontSize: biteFontSize + 'px'}}>{calculateDataBite()}</div>}
                  {showBite && 'split' === biteStyle && <div className="bite-value" style={{fontSize: biteFontSize + 'px'}}>{calculateDataBite()}</div>}
                    <Fragment>
                      <div className="bite-content__text-wrap">
                      <p className="bite-text">
                        {showBite && 'body' === biteStyle && <span className="bite-value data-bite-body" style={{fontSize: biteFontSize + 'px'}}>{calculateDataBite()}</span>}
                        {parse(biteBody)}
                      </p>
                      {showBite && 'end' === biteStyle && <span className="bite-value data-bite-body" style={{fontSize: biteFontSize + 'px'}}>{calculateDataBite()}</span>}
                      {subtext && !isCompactStyle && <p className="bite-subtext">{parse(subtext)}</p>}
                      </div>
                    </Fragment>
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
    'cove',
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
  'split': 'Split Graphic and Message',
  'title': 'Value above Message',
  'body': 'Value before Message',
  'end': 'Value after Message'
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
