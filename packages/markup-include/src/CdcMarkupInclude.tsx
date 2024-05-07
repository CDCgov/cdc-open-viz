import { useEffect, useCallback, useRef, useReducer, useState } from 'react'
import _ from 'lodash'
// external
import { Markup } from 'interweave'
import axios from 'axios'

// cdc
import { Config } from './types/Config'
import { publish } from '@cdc/core/helpers/events'
import ConfigContext from './ConfigContext'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
import EditorPanel from '../src/components/EditorPanel'
import defaults from './data/initial-state'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Loading from '@cdc/core/components/Loading'
import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'
import markupIncludeReducer from './store/markupInclude.reducer'
import Layout from '@cdc/core/components/Layout'
// styles
import './cdcMarkupInclude.style.css'
import './scss/main.scss'

type CdcMarkupIncludeProps = {
  config: Config
  configUrl: string
  isDashboard: boolean
  isEditor: boolean
  setConfig: any
}

import Title from '@cdc/core/components/ui/Title'

const CdcMarkupInclude: React.FC<CdcMarkupIncludeProps> = ({ configUrl, config: configObj, isDashboard = true, isEditor = true, setConfig: setParentConfig }) => {
  const initialState = { config: configObj || defaults, loading: true, urlMarkup: '', markupError: null, errorMessage: null, coveLoadedHasRan: false }

  const [state, dispatch] = useReducer(markupIncludeReducer, initialState)

  const { config, loading, urlMarkup, markupError, errorMessage, coveLoadedHasRan } = state

  // Custom States
  const container = useRef()

  const { innerContainerClasses, contentClasses } = useDataVizClasses(config)
  const { contentEditor, data, theme } = config

  const { inlineHTML, markupVariables, showHeader, srcUrl, title, useInlineHTML } = contentEditor

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
    dispatch({ type: 'SET_CONFIG', payload: newConfig })
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

    updateConfig({ ...configObj, ...processedConfig })
    dispatch({ type: 'SET_LOADING', payload: false })
  }, [])

  // Custom Functions
  useEffect(() => {
    if (markupError) {
      let errorCode = markupError
      let message = 'There was a problem retrieving the content from ' + srcUrl + '. '
      let protocolCheck = /https?:\/\//g

      if (errorCode === 404 && !srcUrl.match(protocolCheck)) {
        errorCode = 'proto' //Capture 404 caused by missing protocols and adjust message
      }

      let errorList = {
        200: 'This is likely due to a CORS restriction policy from the remote origin address.',
        404: 'The requested source URL cannot be found. Please verify the link address provided.',
        proto: 'Provided source URL must include https:// or http:// before the address (depending on the source content type).'
      }

      message += errorList[errorCode]
      dispatch({ type: 'SET_ERROR_MESSAGE', payload: message })
    } else {
      dispatch({ type: 'SET_ERROR_MESSAGE', payload: null })
    }
  }, [markupError])

  const loadConfigMarkupData = useCallback(async () => {
    dispatch({ type: 'SET_MARKUP_ERROR', payload: null })

    if (srcUrl) {
      if (srcUrl === '#example') {
        let payload =
          '<!doctype html><html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Document</title> </head> <body> <h1>Header</h1> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p> <br> <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. </p><br><p>She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek.</p></body></html>'

        dispatch({ type: 'SET_URL_MARKUP', payload })
      } else {
        try {
          await axios.get(srcUrl).then(res => {
            if (res.data) {
              dispatch({ type: 'SET_URL_MARKUP', payload: res.data })
            }
          })
        } catch (err) {
          if (err.response) {
            // Response with error
            dispatch({ type: 'SET_MARKUP_ERROR', payload: err.response.status })
          } else if (err.request) {
            // No response received
            dispatch({ type: 'SET_MARKUP_ERROR', payload: 200 })
          }

          dispatch({ type: 'SET_URL_MARKUP', payload: '' })
        }
      }
    } else {
      dispatch({ type: 'SET_URL_MARKUP', payload: '' })
    }
  }, [srcUrl])

  const filterOutConditions = (workingData, conditionList) => {
    const { columnName, isOrIsNotEqualTo, value } = conditionList[0]

    const newWorkingData = isOrIsNotEqualTo === 'is' ? workingData.filter(dataObject => dataObject[columnName] === value) : workingData.filter(dataObject => dataObject[columnName] !== value)

    conditionList.shift()
    return conditionList.length === 0 ? newWorkingData : filterOutConditions(newWorkingData, conditionList)
  }

  const convertVariablesInMarkup = inlineMarkup => {
    if (_.isEmpty(markupVariables)) return inlineMarkup
    const variableRegexPattern = /{{(.*?)}}/g
    const convertedInlineMarkup = inlineMarkup.replace(variableRegexPattern, variableTag => {
      const workingVariable = markupVariables.filter(variable => variable.tag === variableTag)[0]
      if (workingVariable === undefined) return [variableTag]
      const workingData = workingVariable && workingVariable.conditions.length === 0 ? data : filterOutConditions(data, [...workingVariable.conditions])

      const variableValues: string[] = _.uniq(workingData.map(dataObject => dataObject[workingVariable.columnName]))
      const variableDisplay = []

      const length = variableValues.length
      if (length === 2) {
        variableValues.push(variableValues.join(' or '))
      }
      if (length > 2) {
        variableValues[length - 1] = 'or ' + variableValues[length - 1]
      }
      variableDisplay.push(variableValues.join(', '))

      const displayInfoMessage = '<p class="font-weight-bold">One or more of the following values will appear in the place of this variable placeholder:</p>'

      const newReplacementForVariable = `<div class="cove-tooltip-variable">${variableTag}<div class="cove-tooltip-value">${displayInfoMessage} ${variableDisplay[0]}</div></div>`

      return newReplacementForVariable
    })
    return convertedInlineMarkup
  }

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
      dispatch({ type: 'SET_COVE_LOADED_HAS_RAN', payload: true })
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

  if (loading === false) {
    let body = (
      <Layout.Responsive isEditor={isEditor}>
        <div className='markup-include-content-container cove-component__content'>
          <div className={`markup-include-component ${contentClasses.join(' ')}`}>
            <Title title={title} isDashboard={isDashboard} classes={[`${theme}`, 'mb-0']} />
            <div className={`${innerContainerClasses.join(' ')}`}>
              <div className={`cove-component__content-wrap${useInlineHTML ? '' : ' hide'}`}>
                <Markup content={convertVariablesInMarkup(inlineHTML)} />
              </div>
              <div className={`cove-component__content-wrap${useInlineHTML ? ' hide' : ''}`}>
                {!markupError && urlMarkup && <Markup allowElements content={parseBodyMarkup(urlMarkup)} />}
                {markupError && srcUrl && <div className='warning'>{errorMessage}</div>}
              </div>
            </div>
          </div>
        </div>
      </Layout.Responsive>
    )

    content = (
      <>
        {isEditor && (
          <>
            <EditorPanel />
            {body}
          </>
        )}
        {!isEditor && body}
      </>
    )
  }

  const Error = () => {
    return (
      <section className='waiting'>
        <section className='waiting-container'>
          <h3>Error With Configuration</h3>
          <p>{config.runtime.editorErrorMessage}</p>
        </section>
      </section>
    )
  }

  return (
    <ErrorBoundary component='CdcMarkupInclude'>
      <ConfigContext.Provider value={{ config, updateConfig, loading, data: data, setParentConfig, isDashboard }}>
        {!config.newViz && config.runtime && config.runtime.editorErrorMessage && <Error />}
        <Layout.VisualizationWrapper config={config} isEditor={isEditor} ref={container} showEditorPanel={config?.showEditorPanel}>
          {content}
        </Layout.VisualizationWrapper>
      </ConfigContext.Provider>
    </ErrorBoundary>
  )
}

export default CdcMarkupInclude
