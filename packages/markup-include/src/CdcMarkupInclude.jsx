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

  // Default States
  const [ config, setConfig ] = useState({ ...defaults })
  const [ loading, setLoading ] = useState(true)

  // Custom States
  const [ urlMarkup, setUrlMarkup ] = useState('')
  const [ markupError, setMarkupError ] = useState(null)
  const [ errorMessage, setErrorMessage ] = useState(null)

  let {
    title
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

  const loadConfig = async () => {
    let response = configObj || await (await fetch(configUrl)).json()
    let responseData = response.data ?? {}

    if (response.sourceUrl) {
      const dataString = await fetch(response.sourceUrl)
      responseData = await dataString.json()
    }

    response.data = responseData

    updateConfig({ ...defaults, ...response })
    setLoading(false)
  }

  // Custom Functions
  useEffect(() => {
    if (markupError) {
      let errorCode = markupError
      let message = 'There was a problem retrieving the content from ' + config.srcUrl + '. '
      let protocolCheck = /https?:\/\//g

      if (errorCode === 404 && !config.srcUrl.match(protocolCheck)) {
        errorCode = 'proto' //Capture 404 caused by missing protocols and adjust message
      }

      let errorList = {
        200: 'This is likely due to a CORS restriction policy from the remote origin address.',
        404: 'The requested source URL cannot be found. Please verify the link address provided.',
        'proto': 'Provided source URL must include https:// or http:// before the address (depending on the source content type).'
      }

      message += errorList[errorCode]
      setErrorMessage(message)
    } else {
      setErrorMessage(null)
    }
  }, [ markupError ])

  const loadConfigMarkupData = async () => {
    setMarkupError(null)

    if (config.srcUrl) {
      await axios
        .get(config.srcUrl)
        .then((res) => {
          if (res.data) {
            setUrlMarkup(res.data)
          }
        })
        .catch((err) => {
          if (err.response) {
            // Response with error
            setMarkupError(err.response.status)
          } else if (err.request) {
            // No response received
            setMarkupError(200)
          }

          setUrlMarkup('')
        })
    } else if (config.data?.markup?.length > 0) {
      setUrlMarkup(config.data.markup)
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
            {!markupError && urlMarkup && <div className="cove-component__content-wrap" dangerouslySetInnerHTML={{ __html: parseBodyMarkup(urlMarkup) }}/>}
            {markupError && config.srcUrl && <div className="warning">{errorMessage}</div>}
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
