import React from 'react'
import ReactDOM from 'react-dom/client'

import '@cdc/core/styles/cove-main.scss'

import CdcChart from './CdcChart'

let isEditor = window.location.href.includes('editor=true')
let isDebug = window.location.href.includes('debug=true')

let domContainer = document.getElementsByClassName('react-container')[0]
let configUrl = domContainer.dataset.configUrl
let injectedConfig = domContainer.coveConfig

ReactDOM.createRoot(domContainer).render(
  <React.StrictMode>
    <CdcChart
      interactionLabel={configUrl}
      config={injectedConfig}
      configUrl={injectedConfig ? undefined : configUrl}
      isEditor={isEditor}
      isDebug={isDebug}
    />
  </React.StrictMode>
)
