import React, { useEffect, useCallback, useState, useRef } from 'react'

// Third Party
import { Markup } from 'interweave'
import axios from 'axios'

// Store
import { useConfigStoreContext } from '@cdc/core/components/hoc/ConfigProxy'

// Data
import demoMarkup from '../templates/demoMarkup'

// Helpers
import { publish } from '@cdc/core/helpers/events'

// Components - Core
import AlertBox from '@cdc/core/components/ui/AlertBox'

// Visualization
const MarkupInclude = () => {
  // Store Selectors
  const { config } = useConfigStoreContext()

  const [ urlMarkup, setUrlMarkup ] = useState('')
  const [ markupError, setMarkupError ] = useState(null)
  const [ errorMessage, setErrorMessage ] = useState('')

  // Broadcast Loaded State
  const container = useRef()
  const [ coveLoadedHasRan, setCoveLoadedHasRan ] = useState(false)

  // Error Checking & Logging
  useEffect(() => {
    if (markupError) {
      let errorCode = markupError
      let message = `<p class="mb-1">There was a problem retrieving the content from <a href="${config.srcUrl}" target="_blank">${config.srcUrl}</a>.</p>`
      let protocolCheck = /https?:\/\//g

      if (errorCode === 404 && !config.srcUrl.match(protocolCheck)) {
        errorCode = 'proto' //Capture 404 caused by missing protocols and adjust message
      }

      let errorList = {
        200: 'This is likely due to a <a href="https://en.wikipedia.org/wiki/Cross-origin_resource_sharing" target="_blank">CORS restriction policy</a> from the remote origin address.',
        404: 'The requested source URL cannot be found. Please verify the link address provided.',
        'proto': 'Provided source URL must include <strong>https://</strong> or <strong>http://</strong> before the address.'
      }

      message += '- <em>' + errorList[errorCode] + '</em>'
      setErrorMessage(message)
    } else {
      setErrorMessage('')
    }
  }, [ markupError ])

  const loadConfigMarkupData = useCallback(async () => {
    setMarkupError(null)

    if (config.srcUrl) {
      if (config.srcUrl === '#example') {
        setUrlMarkup(demoMarkup)
      } else {
        try {
          await axios
            .get(config.srcUrl)
            .then((res) => {
              if (res.data) {
                setUrlMarkup(res.data)
              }
            })
        } catch (err) {
          if (err.response) {
            // Received a response with an error, so storing that error in state
            setMarkupError(err.response.status)
          } else if (err.request) {
            // No response received from the request, so likely a block from CORS - presumptuously set the error state to 200
            setMarkupError(200)
          }

          setUrlMarkup('')
        }
      }
    } else {
      setUrlMarkup('')
    }
  }, [ config.srcUrl ])

  // Used to parse the markup either between the <body> tags
  // Parses the entire supplied content if no <body> tags exist
  const parseBodyMarkup = (markup) => {
    let parse
    let hasBody = false
    if (markup && markup !== '' && markup !== null) {
      // Check if html <body></body> tags exist in the markup
      hasBody = markup.toString().match(/<body[^>]*>/i) && markup.toString().match(/<\/body\s*>/i)

      if (hasBody) {
        // If body tags exist, extract only the markup between the tags
        parse = markup.toString().match(/<body[^>]*>([^<]*(?:(?!<\/?body)<[^<]*)*)<\/body\s*>/i)
      } else {
        // If there's no body tags, just grab everything
        parse = markup.toString()
      }
    }

    return hasBody ? parse[1] : parse
  }

  useEffect(() => {
    if (config && !coveLoadedHasRan && container) {
      publish('cove_loaded', { config: config })
      setCoveLoadedHasRan(true)
    }
  }, [ config, container ])

  // Refetch the markup content whenever config is updated
  useEffect(() => {
    loadConfigMarkupData().catch((err) => console.error(err))
  }, [ loadConfigMarkupData ])

  return <>
    {config.missingRequiredSections && <>Missing data in sections</>}
    {!config.missingRequiredSections && <>
      {!markupError && urlMarkup &&
        <Markup content={parseBodyMarkup(urlMarkup)}/>
      }
      {markupError && config.srcUrl &&
        <AlertBox type="error"><Markup content={errorMessage}/></AlertBox>
      }
    </>}
  </>
}

export default MarkupInclude
