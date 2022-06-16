import React, { useEffect, useCallback, useState, FC } from 'react'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Loading from '@cdc/core/components/Loading'
import EditorPanel from './components/EditorPanel'
import defaults from './data/initial-state'
import ConfigContext from './ConfigContext'

import './scss/main.scss'

interface Props {
	configUrl?: string,
	config?: object,
	isDashboard?: boolean,
	isEditor?: boolean,
	setConfig?: any
}

const CdcFilteredText:FC<Props> = (props) => {

	const { configUrl, config: configObj, isDashboard = false, isEditor = false, setConfig: setParentConfig } = props

  // Default States
  const [ config, setConfig ] = useState({ ...defaults })
  const [ loading, setLoading ] = useState(true)

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
	console.log('config here', config)
    setLoading(false)
  }, [])



  //Load initial config
  useEffect(() => {
    loadConfig().catch((err) => console.log(err))
  }, [])

  let content = (<Loading/>)

  if (loading === false) {
    let body = (
      <>
        <div className="cove-component filtered-text">
          <div className="cove-component__content">
            <div className="cove-component__content-wrap">
		  		<h2>HELLO WORLD</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum incidunt hic tempore eius veritatis reiciendis, dolor suscipit iste, neque quos, aliquam nisi libero nemo blanditiis sequi ducimus dolore. Eum, totam?</p>
            </div>
          </div>
        </div>
      </>
    )

    content = (
      <div className={`cove`} style={isDashboard ? { marginTop: '3rem' } : null}>
        {isEditor && <EditorPanel>{body}</EditorPanel>}
        {!isEditor && body}
      </div>
    )
  }

  return (
    <ErrorBoundary component="CdcFilteredText">
      <ConfigContext.Provider
        value={{ config, updateConfig, loading, setParentConfig, isDashboard }}>
        {content}
      </ConfigContext.Provider>
    </ErrorBoundary>
  )
}

export default CdcFilteredText
