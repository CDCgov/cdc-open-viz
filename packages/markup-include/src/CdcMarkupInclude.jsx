import React, { useEffect, useCallback, useState, useRef } from 'react'
import axios from 'axios'

import { Markup } from 'interweave'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Loading from '@cdc/core/components/Loading'

import ConfigContext from './ConfigContext'
import EditorPanel from './components/EditorPanel'
import defaults from './data/initial-state'

import './scss/main.scss'

import { publish } from '@cdc/core/helpers/events'

import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
import { VizTitle } from '@cdc/core/components/ui/VizTitle/VizTitle'

const CdcMarkupInclude = ({ configUrl, config: configObj, isDashboard = false, isEditor = false, setConfig: setParentConfig }) => {
  // Default States
  const [config, setConfig] = useState({ ...defaults })
  const [loading, setLoading] = useState(true)

  // Custom States
  const [urlMarkup, setUrlMarkup] = useState('')
  const [markupError, setMarkupError] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [coveLoadedHasRan, setCoveLoadedHasRan] = useState(false)
  const container = useRef()

  const { innerContainerClasses, contentClasses } = useDataVizClasses(config)

  let { title } = config

  // Default Functions
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

  const loadConfig = useCallback(async () => {
    let response = configObj || (await (await fetch(configUrl)).json())
    let responseData = response.data ?? {}

    if (response.dataUrl) {
      const dataString = await fetch(response.dataUrl)
      responseData = await dataString.json()
    }

    response.data = responseData
    const processedConfig = { ...(await coveUpdateWorker(response)) }

    updateConfig({ ...defaults, ...processedConfig })
    setLoading(false)
  }, [])

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
        proto: 'Provided source URL must include https:// or http:// before the address (depending on the source content type).'
      }

      message += errorList[errorCode]
      setErrorMessage(message)
    } else {
      setErrorMessage(null)
    }
  }, [markupError])

  const loadConfigMarkupData = useCallback(async () => {
    setMarkupError(null)

    if (config.srcUrl) {
      if (config.srcUrl === '#example') {
        setUrlMarkup(
          '<!doctype html><html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Document</title> </head> <body> <h1>Header</h1> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p> <br> <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. </p><br><p>She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek.</p></body></html>'
        )
      } else {
        try {
          await axios.get(config.srcUrl).then(res => {
            if (res.data) {
              setUrlMarkup(res.data)
            }
          })
        } catch (err) {
          if (err.response) {
            // Response with error
            setMarkupError(err.response.status)
          } else if (err.request) {
            // No response received
            setMarkupError(200)
          }

          setUrlMarkup('')
        }
      }
    } else {
      setUrlMarkup('')
    }
  }, [config.srcUrl])

  const parseBodyMarkup = markup => {
    let parse
    let hasBody = false
    if (markup && markup !== '' && markup !== null) {
      if (markup.toString().match(/<body[^>]*>/i) && markup.toString().match(/<\/body\s*>/i)) {
        hasBody = true
        parse = markup.toString().match(/<body[^>]*>([^<]*(?:(?!<\/?body)<[^<]*)*)<\/body\s*>/i)
      } else {
        parse = markup.toString()
      }
    }

    return hasBody ? parse[1] : parse
  }

  //Load initial config
  useEffect(() => {
    loadConfig().catch(err => console.log(err))
    publish('cove_loaded', { loadConfigHasRun: true })
  }, [])

  useEffect(() => {
    if (config && !coveLoadedHasRan && container) {
      publish('cove_loaded', { config: config })
      setCoveLoadedHasRan(true)
    }
  }, [config, container])

  //Reload config if config object provided/updated
  useEffect(() => {
    loadConfig().catch(err => console.log(err))
  }, [configObj?.data])

  //Reload any functions when config is updated
  useEffect(() => {
    loadConfigMarkupData().catch(err => console.log(err))
  }, [loadConfigMarkupData])

  let content = <Loading />

  let bodyClasses = ['markup-include']

  if (loading === false) {
    let body = (
      <div className={bodyClasses.join(' ')} ref={container}>
        <VizTitle title={title} isDashboard={isDashboard} classes={[`${config.theme}`, 'mb-0']} />
        <div className={`cove-component__content ${contentClasses.join(' ')}`}>
          <div className={`${innerContainerClasses.join(' ')}`}>
            <div className='cove-component__content-wrap'>
              {!markupError && urlMarkup && <Markup content={parseBodyMarkup(urlMarkup)} />}
              {markupError && config.srcUrl && <div className='warning'>{errorMessage}</div>}
            </div>
          </div>
        </div>
      </div>
    )

    content = (
      <div className={`cove markup-include ${config.theme}`}>
        {isEditor && <EditorPanel>{body}</EditorPanel>}
        {!isEditor && body}
      </div>
    )
  }

  return (
    <ErrorBoundary component='CdcMarkupInclude'>
      <ConfigContext.Provider value={{ config, updateConfig, loading, data: config.data, setParentConfig, isDashboard }}>{content}</ConfigContext.Provider>
    </ErrorBoundary>
  )
}

export default CdcMarkupInclude
