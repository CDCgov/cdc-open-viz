import React, { useEffect, useCallback, useState, FC } from 'react'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import DataTransform from '@cdc/core/components/DataTransform'
import Loading from '@cdc/core/components/Loading'
import EditorPanel from './components/EditorPanel'
import defaults from './data/initial-state'
import ConfigContext from './ConfigContext'
import Papa from 'papaparse';
import parse from 'html-react-parser';
import './scss/main.scss'

interface Props {
	configUrl: string,
	config?: object,
	isDashboard?: boolean,
	isEditor?: boolean,
	setConfig?: Function
}
type Defaults = typeof defaults;

const CdcFilteredText:FC<Props> = (props) => {

	const { configUrl, config: configObj, isDashboard = false, isEditor = false, setConfig: setParentConfig } = props;
  
  const transform = new DataTransform();
  // Default States
  const [ config, setConfig ] = useState<Defaults>(defaults);
  const [ loading, setLoading ] = useState(true);
  const [stateData, setStateData] = useState<Array<any>>(config.data || []);
  const [excludedData, setExcludedData] = useState<Array<Object>>();
  let {title,filters} = config;

  // Default Functions

  const loadConfig = async () => {
    let response = configObj || await (await fetch(configUrl)).json();
    // If data is included through a URL, fetch that and store
    let data = response.formattedData || response.data || {};

    if(response.dataUrl) {
      const dataString = await fetch(response.dataUrl);

      data = await dataString.json();
      if(response.dataDescription) {
        data = transform.autoStandardize(data);
        data = transform.developerStandardize(data, response.dataDescription);
      }
    }

    if(data) {
      setStateData(data)
      setExcludedData(data)
    }

    let newConfig = {...config,...response};
    updateConfig(newConfig);
    setLoading(false)
  };

  const updateConfig = (newConfig) => {
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

    //Optionally filter the data based on the user's filter


    const filterByTextColumn = ()=>{
    let filteredData =[]

      if(filters.length){
        filters.map((filter) => {
           if ( filter.columnName && filter.columnValue ) {
           return filteredData = stateData.filter(function (e) {
               return e[filter.columnName] === filter.columnValue;
             });
           } else {
             return null;
           }
         })
       }else{
         // filter by textColumn if selected
          return filteredData = stateData.filter((e,index)=> {
          return e[config.textColumn] && index===0
        })
       }
     
       return filteredData
    };
   

  //Load initial config
  useEffect(() => {
   loadConfig().catch((err) => console.log(err))
  }, [])
  let content = (<Loading/>)

let filterClasses = ["cove","cove-component","cove-component__content","filtered-text"]
  config?.visual?.border && filterClasses.push('component--has-borderColorTheme');
  config?.visual?.accent && filterClasses.push('component--has-accent');
  config?.visual?.background && filterClasses.push('component--has-background');
  config?.visual?.hideBackgroundColor && filterClasses.push('component--hideBackgroundColor');
  
  let innerContainerClasses = [' cove-component__content']
  config.title && innerContainerClasses.push('component--has-title')

  if (loading === false) {
    let body = (
         <>
        {title && <header className={`cove-component__header ${config.theme} `}>{parse(title)}</header>}
        <div className={filterClasses.join(' ')} >
          <div className="cove-component__content-wrap">
            {filterByTextColumn().slice(0,1).map((el,i)=>{
              if(el.text || el.Text){
                return (
                  <p  key={i} > {parse(el.Text || el.text)} </p>
                )
              }else{
                return (
                  <p  key={i} > {parse(el[config.textColumn] ||"")} </p>
                )
              }
          })}  
          </div>
        </div>
        </>
    )

    content = (
      <div className={`cove ${config.theme} `} style={isDashboard ? { marginTop: '3rem' } : null}>
        {isEditor && <EditorPanel>{body}</EditorPanel>}
        {!isEditor && body}
      </div>
    )
  }
  const values={
    config, 
    updateConfig,
    loading, 
    setParentConfig,
    isDashboard,
    stateData,
    unfilteredData:stateData
  }

  return (
    <ErrorBoundary component="CdcFilteredText">
      <ConfigContext.Provider
        value={values}>
        {content}
      </ConfigContext.Provider>
    </ErrorBoundary>
  )
}

export default CdcFilteredText
