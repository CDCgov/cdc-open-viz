import React, { useEffect, useCallback, useState, FC } from 'react'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Loading from '@cdc/core/components/Loading'
import EditorPanel from './components/EditorPanel'
import defaults from './data/initial-state'
import ConfigContext from './ConfigContext'
import Papa from 'papaparse';
import parse from 'html-react-parser';
import './scss/main.scss'

interface Props {
	configUrl?: string,
	config?: object,
	isDashboard?: boolean,
	isEditor?: boolean,
	setConfig?: any
}

type Defaults = typeof defaults;

const CdcFilteredText:FC<Props> = (props) => {

	const { configUrl, config: configObj, isDashboard = false, isEditor = false, setConfig: setParentConfig } = props

  // Default States
  const [ config, setConfig ] = useState<Defaults>({ ...defaults })
  const [ loading, setLoading ] = useState(true)
  const [stateData, setStateData] = useState<Array<any>>(config.data || []);
  let {
    title,
    filters
  } = config
  // Default Functions
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

  const loadConfig = useCallback(async () => {
    let response = configObj || await (await fetch(configUrl)).json()
    let responseData = response.data ?? {}

    if (response.dataUrl) {
      const dataString = await fetch(response.dataUrl)
      responseData = await dataString.json()
    }

    response.data = responseData

    updateConfig({ ...defaults, ...response })
    setLoading(false)
  }, [])

  const fetchRemoteData = async(url)=>{
   try{
    const data = await fetch(url)
    .then(response => response.text())
    .then(responseText => {
      const parsedCsv = Papa.parse(responseText, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true
      })
      return parsedCsv.data
    })
   setStateData(data)
   }catch(err){
    console.warn('err :>> ', err);
   }
  }


    //Optionally filter the data based on the user's filter
    let filteredData = stateData;
    filters.map((filter) => {
      if ( filter.columnName && filter.columnValue ) {
      return filteredData = filteredData.filter(function (e) {
          return e[filter.columnName] === filter.columnValue;
        });
      } else {
      
        return false
      }
    })


// load csv  data
useEffect(()=>{
  fetchRemoteData('../examples/sex-ageGroup-with-values.csv')
},[])
  //Load initial config
  useEffect(() => {
    loadConfig().catch((err) => console.log(err))
  }, [])

  let content = (<Loading/>)

  if (loading === false) {
    let body = (
      <>
        <div className="cove-component filtered-text">
          <div className="cove-component__content">
            <div className="cove-component__content-wrap">
            {title && <div className="cove-component__header">{parse(title)}</div>}
             {filteredData.map((el,i)=>{
              return (
                <p key={i} > {parse(el.Text)} </p>
              )
            })}  
            </div>
          </div>
        </div>
      </>
    )

    content = (
      <div className={`cove`} style={isDashboard ? { marginTop: '3rem' } : null}>
        {isEditor && <EditorPanel>{body}</EditorPanel>}
        {!isEditor && body}
      </div>
    )
  }

  return (
    <ErrorBoundary component="CdcFilteredText">
      <ConfigContext.Provider
        value={{ config, updateConfig, loading, setParentConfig, isDashboard,stateData }}>
        {content}
      </ConfigContext.Provider>
    </ErrorBoundary>
  )
}

export default CdcFilteredText
