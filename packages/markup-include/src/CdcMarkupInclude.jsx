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

    console.log('attempting to load the markup data')
    if (config.srcUrl) {
      if (config.srcUrl === '#example') {
        setUrlMarkup("<!doctype html><html lang=\"en\"> <head> <meta charset=\"UTF-8\"> <meta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\"> <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"> <title>Document</title> </head> <body> <h1>Header</h1> <p> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p><br/><p> No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. </p><br/><p> To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p></body></html>")
      } else {
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
      }
    } else {
      console.log('srcUrl doesnt exist, no data found, setting to empty')
      setUrlMarkup('')
    }
    console.log('config:', config)
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
    console.log('Loading initial config')
    loadConfig()
  }, [])

  //Reload config if config object provided
  useEffect(() => {
    if (configObj) {
      console.log('ConfigObj found, reloading loadConfig')
      loadConfig()
    }
  }, [ configObj ])

  //Reload any functions when config is updated
  useEffect(() => {
    console.log('Loading config markup data')
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
