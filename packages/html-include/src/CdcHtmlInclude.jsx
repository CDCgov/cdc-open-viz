import React, { useEffect, useState } from 'react'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Loading from '@cdc/core/components/Loading'

import EditorPanel from './components/EditorPanel'
import defaults from './data/initial-state'
import Context from './context'
import './scss/main.scss'

const CdcHtmlInclude = (
  {
    configUrl,
    config: configObj,
    isDashboard = false,
    isEditor = false,
    setConfig: setParentConfig
  }
) => {
  const [ config, setConfig ] = useState({ ...defaults })
  const [ configData, setConfigData ] = useState()
  const [ loading, setLoading ] = useState(true)

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

  useEffect(() => {
    loadConfig()
  }, [])

  useEffect(() => {
    setConfigData(configObj)
  }, [configObj])

  useEffect(() => {
    if (configData.data) {
      loadConfig()
    }
  }, [ configData ])

  let body = (<Loading/>)

  if (loading === false) {
    body = (
      <>
        <div className={config.theme}>
          {isEditor && <EditorPanel/>}
          <section className={`cdc-html-include`}>
            HTML
          </section>
        </div>
      </>
    )
  }

  return (
    <ErrorBoundary component="CdcHtmlInclude">
      <Context.Provider value={{ config, updateConfig, loading, data: config.data, setParentConfig, isDashboard }}>
        {body}
      </Context.Provider>
    </ErrorBoundary>
  )
}

export default CdcHtmlInclude
