import React, { useEffect, useCallback, useState } from 'react'
import axios from 'axios'
import parse from 'html-react-parser'
import { Markup } from 'interweave'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Loading from '@cdc/core/components/Loading'

import ConfigContext from './ConfigContext'
import EditorPanel from './components/EditorPanel'
import defaults from './data/initial-state'
import Modal from '@cdc/core/components/ui/Modal'
import './scss/main.scss'

import { useGlobalContext } from '@cdc/core/components/GlobalContext'

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

  const loadConfig = useCallback(async () => {
    let response = configObj || await (await fetch(configUrl)).json()
    let responseData = response.data ?? {}

    if (response.dataUrl) {
      const dataString = await fetch(response.dataUrl)
      responseData = await dataString.json()
    }

    response.data = responseData

    updateConfig({ ...defaults, ...response })
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
        'proto': 'Provided source URL must include https:// or http:// before the address (depending on the source content type).'
      }

      message += errorList[errorCode]
      setErrorMessage(message)
    } else {
      setErrorMessage(null)
    }
  }, [ markupError ])

  const loadConfigMarkupData = useCallback(async () => {
    setMarkupError(null)

    if (config.srcUrl) {
      if (config.srcUrl === '#example') {
        setUrlMarkup('<!doctype html><html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Document</title> </head> <body> <h1>Header</h1> <p> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p><br/><p> No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. </p><br/><p> To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p></body></html>')
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
  }, [ config.srcUrl ])

  const parseBodyMarkup = (markup) => {
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

  // Modal
  let { modal } = useGlobalContext()

  const callTest = () => {
    modal.actions.toggleModal(false)
    alert('Called the function')
  }

  const testModal1 = () => {
    return (
      <Modal showClose={false}>
        <Modal.Header>
          Modal Title 1
        </Modal.Header>
        <Modal.Content>
          This is a modal without a close button. There could be a lot of content to display but we're not sure how much
          is
          going to show in such a small area. This is why we need to test the length of the text that we're putting
          inside of each modal.
        </Modal.Content>
        <Modal.Footer>
          <div style={{ textAlign: 'right' }}>
            <button className="cove__btn muted" onClick={() => modal.actions.toggleModal(false)}>Cancel</button>
            <button className="cove__btn success" onClick={() => callTest()}>Submit</button>
          </div>
        </Modal.Footer>
      </Modal>
    )
  }

  const testModal2 = () => {
    return (
      <Modal showDividerTop={false}>
        <Modal.Content>
          This is a modal without a header or a top divider. There could be a lot of content to display, but we're not
          sure how much is
          going to show in such a small area. This is why we need to test the length of the text that we're putting
          inside of
          each modal.
        </Modal.Content>
        <Modal.Footer>
          <button className="cove__btn" onClick={() => callTest()}>Trigger an Action</button>
        </Modal.Footer>
      </Modal>
    )
  }

  const testModal3 = () => {
    return (
      <Modal fontTheme={'light'} headerBgColor={'#d9006e'} disableBgClose={true}>
        <Modal.Header>
          Disable Background Close
        </Modal.Header>
        <Modal.Content>
          <p>This is a modal where the background close is disabled. Either the default close button, or an action
            button <b><i>must</i></b> be available to the user in order to close the modal.</p>
        </Modal.Content>
      </Modal>
    )
  }

  const testModal4 = () => {
    return (
      <Modal fontTheme={'light'} headerBgColor={'#363955'}>
        <Modal.Header>
          General Information Modal
        </Modal.Header>
        <Modal.Content>
          <p>This is a modal with some general information. Anything can go here to give details or explain some
            information further. This can contain as much information as is needed in order to provide the proper
            context for the content.</p>
        </Modal.Content>
      </Modal>
    )
  }

  const testModal5 = () => {
    return (
      <Modal fontTheme={'light'} headerBgColor={'#d73636'}>
        <Modal.Header>
          Warning Modal
        </Modal.Header>
        <Modal.Content>
          Making these changes will perform an unreversible action.
        </Modal.Content>
        <Modal.Footer>
          <div style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: '1rem', fontSize: '1rem' }}>Are you sure you want to continue?</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button className="cove__btn warn" onClick={() => modal.actions.toggleModal(false)}>No, Cancel</button>
            <button className="cove__btn success" onClick={() => callTest()}>Yes, Continue</button>
          </div>
        </Modal.Footer>
      </Modal>
    )
  }

  //Load initial config
  useEffect(() => {
    loadConfig().catch((err) => console.log(err))
  }, [])

  //Reload config if config object provided/updated
  useEffect(() => {
    loadConfig().catch((err) => console.log(err))
  }, [ configObj?.data ])

  //Reload any functions when config is updated
  useEffect(() => {
    loadConfigMarkupData().catch((err) => console.log(err))
  }, [ loadConfigMarkupData ])

  let content = (<Loading/>)

  if (loading === false) {
    let body = (
      <>
        <div className="cove-component markup-include">
          {title &&
          <header className={`cove-component__header ${config.theme}`} aria-hidden="true">
            {parse(title)} {isDashboard}
          </header>
          }
          <div className="cove-component__content">
            {!markupError && urlMarkup &&
              <div className="cove-component__content-wrap">
                <Markup content={parseBodyMarkup(urlMarkup)}/>
              </div>
            }
            {markupError && config.srcUrl && <div className="warning">{errorMessage}</div>}
          </div>
          <button className="cove__btn" onClick={() => {
            modal.actions.openModal(testModal1())
          }}>Test 1
          </button>
          <br/><br/>
          <button className="cove__btn" onClick={() => {
            modal.actions.openModal(testModal2())
          }}>Test 2
          </button>
          <br/><br/>
          <button className="cove__btn" onClick={() => {
            modal.actions.openModal(testModal3())
          }}>Test 3
          </button>
          <br/><br/>
          <button className="cove__btn" onClick={() => {
            modal.actions.openModal(testModal4())
          }}>Test 4
          </button>
          <br/><br/>
          <button className="cove__btn" onClick={() => {
            modal.actions.openModal(testModal5())
          }}>Test 5
          </button>
        </div>
      </>
    )

    content = (
      <div className={`cove`} style={isDashboard ? { marginTop: '3rem' } : null}>
        {isEditor && <EditorPanel>{body}</EditorPanel>}
        {!isEditor && body}
        {modal.object || null}
      </div>
    )
  }

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
