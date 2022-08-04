import React, { useEffect, useCallback, useState } from 'react'

//Third Party
import axios from 'axios'
import { Markup } from 'interweave'

//Context
import { useConfigContext } from '@cdc/core/context/ConfigContext'

//Components
import AlertBox from '@cdc/core/components/ui/AlertBox'
import Component from '@cdc/core/components/Component'

const CdcMarkupInclude = () => {
  const { config, missingRequiredSections } = useConfigContext()
  let { title, theme } = config

  // Custom States
  const [ urlMarkup, setUrlMarkup ] = useState('')
  const [ markupError, setMarkupError ] = useState(null)
  const [ errorMessage, setErrorMessage ] = useState('')

  // Custom Functions
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

  const demoMarkup = `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
      </head>
      <body>
        <h1>Header</h1>
        <p>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
          Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
          A small river named Duden flows by their place and supplies it with the necessary regelialia. 
          It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
        </p>
        <br/>
        <p>
          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.
          One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. 
          The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and 
          devious Semikoli, but the Little Blind Text didn’t listen.
        </p>
        <br/>
        <p>
          She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills 
          of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village 
          and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek.
        </p>
      </body>
    </html>
  `

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

  //Refetch the markup content whenever config is updated
  useEffect(() => {
    loadConfigMarkupData().catch((err) => console.error(err))
  }, [ loadConfigMarkupData ])

  return (
    <Component className="cove-markup-include" title={title} theme={theme}>
      {missingRequiredSections && <>Missing data in sections</>}
      {!missingRequiredSections && !config.newViz && (<>
        {!markupError && urlMarkup &&
          <Markup content={parseBodyMarkup(urlMarkup)}/>
        }
        {markupError && config.srcUrl &&
          <AlertBox type="error"><Markup content={errorMessage}/></AlertBox>
        }
      </>)}
    </Component>
  )
}

export default CdcMarkupInclude
