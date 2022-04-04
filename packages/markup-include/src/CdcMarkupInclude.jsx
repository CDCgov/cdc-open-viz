import React, { useEffect, useState } from 'react'
import axios from 'axios'
import parse from 'html-react-parser'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Loading from '@cdc/core/components/Loading'

import ConfigContext from './ConfigContext'
import EditorPanel from './components/EditorPanel'
import defaults from './data/initial-state'
import './scss/main.scss'

const CdcMarkupInclude = (
  {
    configUrl,
    config: configObj,
    isDashboard = false,
    isEditor = false,
    setConfig: setParentConfig
  }
) => {

  const [ config, setConfig ] = useState({ ...defaults })
  const [ loading, setLoading ] = useState(true)

  let {
    title
  } = config

  const [ dataSource, setDataSource ] = useState('')
  const [ urlMarkup, setUrlMarkup ] = useState('')

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

  const loadConfig = async () => {
    let response = configObj || await (await fetch(configUrl)).json()
    let responseData = response.data ?? {}

    if (response.dataUrl) {
      const dataString = await fetch(response.dataUrl)
      responseData = await dataString.json()
    }

    response.data = responseData

    updateConfig({ ...defaults, ...response })
    setLoading(false)
  }

  const loadConfigMarkupData = async () => {
    if (config.data && urlMarkup === '') {
      setUrlMarkup(config.data)
    }
  }

  const fetchMarkupData = async (src) => {
    if (src) {
      await axios
        .get(src)
        .then((res) => {
          console.log('Response: ', res.data)
          setUrlMarkup(res.data)
        })
        .catch((err) => {
          console.log('Error: ', err)
          setUrlMarkup('')
        })
    } else if (config.data?.length > 0) {
      setUrlMarkup(config.data)
    } else {
      setUrlMarkup('')
    }
  }

  const parseBodyMarkup = (markup) => {
    let content = ''
    if (markup && markup !== '' && markup !== null) {
      let parse = markup.toString().match(/<body[^>]*>([^<]*(?:(?!<\/?body)<[^<]*)*)<\/body\s*>/i)
      if (parse) {
        content = parse[1]
      }
    }
    return content
  }

  //Load initial config
  useEffect(() => {
    loadConfig()
  }, [])

  //Reload config if config object provided
  useEffect(() => {
    if (configObj) {
      loadConfig()
    }
  }, [ configObj ])

  //Reload any functions when config is updated
  useEffect(() => {
    loadConfigMarkupData()
  }, [ config ])

  let body = (<Loading/>)

  if (loading === false) {
    body = (
      <>
        <div className="cove-component markup-include">
          {title &&
          <header className={`cove-component__header ${config.theme}`} aria-hidden="true">
            {parse(title)}
          </header>
          }
          <div className="cove-component__content">
            <div style={{ marginBottom: '1rem' }}>
              <label>Data Source </label>
              <input
                value={dataSource}
                onChange={(e) => {
                  setDataSource(e.target.value)
                }}
              />
            </div>
            <button onClick={() => fetchMarkupData(dataSource)}>Get HTML</button>
            {urlMarkup && <div dangerouslySetInnerHTML={{ __html: parseBodyMarkup(urlMarkup) }}/>}
          </div>
        </div>
      </>
    )
  }

  let content = (
    <div className={`cove`}>
      {isEditor && <EditorPanel>{body}</EditorPanel>}
      {!isEditor && body}
    </div>
  )

  return (
    <ErrorBoundary component="CdcMarkupInclude">
      <ConfigContext.Provider
        value={{ config, updateConfig, loading, data: config.data, setParentConfig, isDashboard }}>
        {content}
      </ConfigContext.Provider>
    </ErrorBoundary>
  )
}

export default CdcMarkupInclude
