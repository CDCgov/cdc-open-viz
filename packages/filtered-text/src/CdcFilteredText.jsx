import React, { useEffect, useState, FC } from 'react'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import DataTransform from '@cdc/core/helpers/DataTransform'
import Loading from '@cdc/core/components/Loading'
import EditorPanel from './components/EditorPanel'
import defaults from './data/initial-state'
import ConfigContext from './ConfigContext'
import parse from 'html-react-parser'
import './scss/main.scss'

import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'

type Defaults = typeof defaults

const CdcFilteredText = ({ configObj, configUrl, isDashboard = false, isEditor = false, setConfig: setParentConfig }) => {

  const transform = new DataTransform()
  // Default States
  const [config, setConfig] = useState<Defaults>(defaults)
  const [loading, setLoading] = useState(true)
  const [stateData, setStateData] = useState<Array<any>>(config.data || [])
  const [excludedData, setExcludedData] = useState<Array<Object>>() // eslint-disable-line
  let { title, filters } = config
  const fontSize = config.fontSize === 'small' ? '16px' : config.fontSize === 'medium' ? '22px' : '27px'

  const { contentClasses } = useDataVizClasses(config)

  // Default Functions

  //@ts-ignore
  const loadConfig = async () => {
    let response = configObj || (await (await fetch(configUrl)).json())
    // If data is included through a URL, fetch that and store
    let data = response.formattedData || response.data || {}

    if (response.dataUrl) {
      const dataString = await fetch(response.dataUrl)

      data = await dataString.json()
      if (response.dataDescription) {
        data = transform.autoStandardize(data)
        data = transform.developerStandardize(data, response.dataDescription)
      }
    }

    if (data) {
      setStateData(data)
      setExcludedData(data)
    }

    let newConfig = { ...config, ...response }
    updateConfig(newConfig)
    setLoading(false)
  }

  const updateConfig = newConfig => {
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

  const filterByTextColumn = () => {
    let filteredData = []

    if (filters.length) {
      filters.map(filter => {
        if (filter.columnName && filter.columnValue) {
          return (filteredData = stateData.filter(function (e) {
            return e[filter.columnName] === filter.columnValue
          }))
        } else {
          return null
        }
      })
    } else {
      // filter by textColumn if selected
      return (filteredData = stateData.filter((e, index) => {
        return e[config.textColumn] && index === 0
      }))
    }

    return filteredData
  }

  //Load initial config
  useEffect(() => {
    loadConfig().catch(err => console.log(err))
  }, []) // eslint-disable-line

  useEffect(() => {
    if (configObj && !configObj.dataUrl) {
      updateConfig({ ...defaults, ...configObj })
      setStateData(configObj.data)
      setExcludedData(configObj.data)
    }
  }, [configObj?.data]) // eslint-disable-line

  let content = <Loading />

  if (loading === false) {
    let body = (
      <>
        {title && (
          <header style={{ fontSize }} className={`cove-component__header ${config.theme} `}>
            {parse(title)}
          </header>
        )}
        <div className={contentClasses.join(' ')}>
          <div className='cove-component__content-wrap'>
            {filterByTextColumn()
              .slice(0, 1)
              .map((el, i) => (
                <p style={{ fontSize }} key={i}>
                  {' '}
                  {parse(el[config.textColumn] || '')}{' '}
                </p>
              ))}
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
  const values = {
    config,
    updateConfig,
    loading,
    setParentConfig,
    isDashboard,
    stateData,
    unfilteredData: stateData
  }

  return (
    <ErrorBoundary component='CdcFilteredText'>
      <ConfigContext.Provider value={values}>{content}</ConfigContext.Provider>
    </ErrorBoundary>
  )
}

export default CdcFilteredText
