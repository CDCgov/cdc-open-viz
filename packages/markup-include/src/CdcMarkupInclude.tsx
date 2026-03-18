import { useEffect, useCallback, useRef, useReducer, useMemo } from 'react'
// external
import DOMPurify from 'dompurify'
import axios from 'axios'

// cdc
import { MarkupIncludeConfig } from '@cdc/core/types/MarkupInclude'
import { publish } from '@cdc/core/helpers/events'
import { processMarkupVariables } from '@cdc/core/helpers/markupProcessor'
import { addValuesToFilters } from '@cdc/core/helpers/addValuesToFilters'
import ConfigContext from './ConfigContext'
import coveUpdateWorker from '@cdc/core/helpers/coveUpdateWorker'
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData'
import EditorPanel from '../src/components/EditorPanel'
import defaults from './data/initial-state'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Loading from '@cdc/core/components/Loading'
import Filters from '@cdc/core/components/Filters'
import useDataVizClasses from '@cdc/core/helpers/useDataVizClasses'
import markupIncludeReducer from './store/markupInclude.reducer'
import { VisualizationContainer, VisualizationContent } from '@cdc/core/components/Layout'
// styles
import './cdcMarkupInclude.style.css'
import './scss/main.scss'

type CdcMarkupIncludeProps = {
  config: MarkupIncludeConfig
  configUrl: string
  datasets: Datasets
  isDashboard: boolean
  isEditor: boolean
  setConfig: any
  interactionLabel?: string
}

import Title from '@cdc/core/components/ui/Title'
import FootnotesStandAlone from '@cdc/core/components/Footnotes/FootnotesStandAlone'
import { Datasets } from '@cdc/core/types/DataSet'
import { VizFilter } from '@cdc/core/types/VizFilter'

const CdcMarkupInclude: React.FC<CdcMarkupIncludeProps> = ({
  configUrl,
  config: configObj,
  datasets,
  isDashboard = true,
  isEditor = false,
  setConfig: setParentConfig,
  interactionLabel = 'no link provided'
}) => {
  const initialState = {
    config: configObj,
    loading: true,
    urlMarkup: '',
    markupError: null,
    errorMessage: null,
    coveLoadedHasRan: false
  }

  const [state, dispatch] = useReducer(markupIncludeReducer, initialState)

  const { config, loading, urlMarkup, markupError, errorMessage, coveLoadedHasRan } = state

  // Custom States
  const container = useRef()

  const { innerContainerClasses, contentClasses: rawContentClasses } = useDataVizClasses(config || {})
  const { contentEditor, theme, visual } = config || {}
  const {
    showNoDataMessage,
    allowHideSection,
    noDataMessageText,
    markupVariables: contentEditorMarkupVariables
  } = contentEditor || {}
  const data = configObj?.data || config?.data

  // Support markupVariables at root level or inside contentEditor
  const markupVariables = config?.markupVariables || contentEditorMarkupVariables || []

  const { inlineHTML, srcUrl, title, useInlineHTML, style: contentStyle } = contentEditor || {}
  const markupIncludeStyle = contentStyle || 'default'
  const isTp5Style = markupIncludeStyle === 'tp5'

  const contentClasses = isTp5Style
    ? rawContentClasses.filter(
        cls =>
          cls !== 'component--has-accent' &&
          cls !== 'component--has-background' &&
          cls !== 'component--hide-background-color' &&
          cls !== 'component--has-border-color-theme'
      )
    : rawContentClasses

  const shouldApplyTopPadding =
    !isTp5Style &&
    (visual?.border || visual?.background || (contentEditor?.title && contentEditor?.titleStyle === 'legacy'))
  const shouldApplySidePadding = !isTp5Style && (visual?.border || visual?.accent || visual?.background)
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

  const setFilters = (newFilters: VizFilter[]) => {
    const _newFilters = addValuesToFilters(newFilters, data || [])
    const updatedConfig = {
      ...config,
      filters: _newFilters
    }
    dispatch({ type: 'SET_CONFIG', payload: updatedConfig })
  }

  const loadConfig = async () => {
    let response = configObj || (await (await fetch(configUrl)).json())
    let responseData = response.data ?? {}

    if (response.dataUrl) {
      const { data, dataMetadata } = await fetchRemoteData(response.dataUrl)
      responseData = data
      response.dataMetadata = dataMetadata
    }

    response.data = responseData
    const processedConfig = { ...coveUpdateWorker(response) }

    // Add filter values if filters are present
    if (processedConfig.filters && processedConfig.filters.length > 0) {
      processedConfig.filters = addValuesToFilters(processedConfig.filters, responseData)
    }

    updateConfig({ ...defaults, ...processedConfig })
    dispatch({ type: 'SET_LOADING', payload: false })
  }

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
        proto:
          'Provided source URL must include https:// or http:// before the address (depending on the source content type).'
      }

      message += errorList[errorCode]
      dispatch({ type: 'SET_ERROR_MESSAGE', payload: message })
    } else {
      dispatch({ type: 'SET_ERROR_MESSAGE', payload: null })
    }
  }, [markupError])

  const loadConfigMarkupData = async () => {
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
  }

  const parseBodyMarkup = markup => {
    let parse
    let hasBody = false
    if (markup && markup !== '' && markup !== null) {
      const markupString = markup.toString()
      if (markupString.match(/<body[^>]*>/i) && markupString.match(/<\/body\s*>/i)) {
        hasBody = true
        parse = markupString.match(/<body[^>]*>([^<]*(?:(?!<\/?body)<[^<]*)*)<\/body\s*>/i)
      } else {
        parse = markupString
      }
    }

    return hasBody ? parse[1] : parse
  }

  /**
   * Extracts <style> tags from HTML and scopes them using CSS nesting under the given scope ID.
   */
  const extractAndScopeStyles = (html: string, scopeId: string): { scopedCSS: string; cleanHTML: string } => {
    if (!html || typeof html !== 'string') return { scopedCSS: '', cleanHTML: html }

    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')

    const styleElements = doc.querySelectorAll('style')
    if (styleElements.length === 0) return { scopedCSS: '', cleanHTML: html }

    const cssFragments: string[] = []
    styleElements.forEach(styleEl => {
      const text = styleEl.textContent?.trim()
      if (text) {
        cssFragments.push(text)
      }
      styleEl.remove()
    })

    const scopedCSS = cssFragments.length > 0 ? `#${scopeId} {\n${cssFragments.join('\n')}\n}` : ''

    return { scopedCSS, cleanHTML: doc.body.innerHTML }
  }

  //Load initial config
  useEffect(() => {
    loadConfig().catch(err => console.error(err))
    publish('cove_loaded', { loadConfigHasRun: true })
  }, [])

  useEffect(() => {
    if (config && !coveLoadedHasRan && container) {
      publish('cove_loaded', { config: config })
      dispatch({ type: 'SET_COVE_LOADED_HAS_RAN', payload: true })
    }
  }, [config, container])

  //Reload any functions when config is updated
  useEffect(() => {
    loadConfigMarkupData().catch(err => console.error(err))
  }, [config])

  let content = <Loading />

  const processedMarkup = useInlineHTML
    ? processMarkupVariables(inlineHTML, data || [], markupVariables || [], {
        isEditor,
        showNoDataMessage,
        allowHideSection,
        filters: config?.filters || [],
        datasets,
        configDataKey: config?.dataKey,
        locale: config?.locale,
        dataMetadata: config?.dataMetadata
      })
    : { processedContent: parseBodyMarkup(urlMarkup), shouldHideSection: false, shouldShowNoDataMessage: false }

  const scopeId = `cove-mi-${config?.runtime?.uniqueId || 'default'}`
  const { scopedCSS, cleanHTML } = extractAndScopeStyles(processedMarkup.processedContent, scopeId)
  const sanitizedHTML = cleanHTML
    ? DOMPurify.sanitize(cleanHTML, {
        ADD_TAGS: ['svg', 'path', 'rect', 'g'],
        ADD_ATTR: [
          'viewBox',
          'role',
          'aria-label',
          'width',
          'height',
          'class',
          'fill',
          'd',
          'transform',
          'style',
          'x',
          'y'
        ]
      })
    : ''

  const hideMarkupInclude = processedMarkup.shouldHideSection
  const _showNoDataMessage = processedMarkup.shouldShowNoDataMessage

  if (loading === false) {
    const hasTp5Title = title && title.trim()
    content = !hideMarkupInclude && (
      <VisualizationContent
        innerClassName={`markup-include-content-container ${innerContainerClasses.join(' ')}`.trim()}
        bodyClassName={`markup-include-component ${contentClasses.join(' ')}${
          isTp5Style ? ' markup-include-component--tp5' : ''
        }${isTp5Style && visual?.whiteBackground ? ' white-background-style' : ''}${
          isTp5Style && visual?.whiteBackground && visual?.border ? ' display-border' : ''
        }`.trim()}
        bodyWrapClassName={`${isTp5Style ? 'markup-include-body-wrap--tp5' : ''}${
          shouldApplyTopPadding ? ' has-top-padding' : ''
        }${shouldApplySidePadding ? ' has-side-padding' : ''}`.trim()}
        filters={
          config.filters && config.filters.length > 0 ? (
            <Filters
              config={config}
              setFilters={setFilters}
              excludedData={data || []}
              dimensions={[0, 0]}
              interactionLabel={interactionLabel || 'markup-include'}
            />
          ) : null
        }
        header={
          !isTp5Style ? (
            <Title
              title={title}
              isDashboard={isDashboard}
              titleStyle={contentEditor?.titleStyle}
              config={config}
              classes={[`${theme}`, 'mb-0']}
              noContent={!sanitizedHTML}
            />
          ) : null
        }
        footer={
          <FootnotesStandAlone
            config={config?.footnotes}
            filters={config?.filters || []}
            markupVariables={markupVariables}
            enableMarkupVariables={config?.enableMarkupVariables}
            data={data}
            dataMetadata={config?.dataMetadata}
            footerClassName={isTp5Style ? 'mt-3' : undefined}
          />
        }
      >
        {isTp5Style ? (
          <div className='markup-include-tp5 cdc-callout d-flex flex-column h-100'>
            {hasTp5Title && (
              <h3 className='cdc-callout__heading fw-bold flex-shrink-0 d-flex align-items-start'>
                <span>{title.trim()}</span>
              </h3>
            )}
            <div className='cdc-callout__body d-flex flex-row align-content-start flex-grow-1'>
              <div className='cdc-callout__content flex-grow-1 d-flex flex-column min-w-0'>
                {_showNoDataMessage && (
                  <div className='no-data-message'>
                    <p>{`${noDataMessageText}`}</p>
                  </div>
                )}
                {!markupError && !_showNoDataMessage && (
                  <div id={scopeId}>
                    {scopedCSS && <style>{scopedCSS}</style>}
                    <div className='cove-prose' dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
                  </div>
                )}
                {markupError && srcUrl && !_showNoDataMessage && <div className='warning'>{errorMessage}</div>}
              </div>
            </div>
          </div>
        ) : (
          <>
            {_showNoDataMessage && (
              <div className='no-data-message'>
                <p>{`${noDataMessageText}`}</p>
              </div>
            )}
            {!markupError && !_showNoDataMessage && (
              <div id={scopeId}>
                {scopedCSS && <style>{scopedCSS}</style>}
                <div className='cove-prose' dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
              </div>
            )}
            {markupError && srcUrl && !_showNoDataMessage && <div className='warning'>{errorMessage}</div>}
          </>
        )}
      </VisualizationContent>
    )
  }

  const Error = () => {
    return (
      <section className='waiting'>
        <section className='waiting-container'>
          <h3>Error With Configuration</h3>
          <p>{config?.runtime.editorErrorMessage}</p>
        </section>
      </section>
    )
  }

  return (
    <ErrorBoundary component='CdcMarkupInclude'>
      <ConfigContext.Provider value={{ config, updateConfig, loading, data: data, setParentConfig, isDashboard }}>
        {!config?.newViz && config?.runtime && config?.runtime.editorErrorMessage && <Error />}
        <VisualizationContainer
          config={config as any}
          isEditor={isEditor}
          editorPanel={<EditorPanel datasets={datasets} />}
        >
          {content}
        </VisualizationContainer>
      </ConfigContext.Provider>
    </ErrorBoundary>
  )
}

export default CdcMarkupInclude
