import React from 'react'
import ReactDOM from 'react-dom/client'

import '@cdc/core/styles/cove-main.scss'
import '@cdc/core/components/EditorPanel/EditorPanel.styles.css'

import CdcDataBite from './CdcDataBite'

let isEditor = window.location.href.includes('editor=true')

let domContainer = document.getElementsByClassName('react-container')[0]
let configUrl = domContainer.dataset.configUrl
let injectedConfig = domContainer.coveConfig

ReactDOM.createRoot(domContainer).render(
  <React.StrictMode>
    <CdcDataBite
      config={injectedConfig}
      configUrl={injectedConfig ? undefined : configUrl}
      interactionLabel={configUrl}
      isEditor={isEditor}
    />
  </React.StrictMode>
)
