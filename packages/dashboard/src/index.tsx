import React from 'react'
import ReactDOM from 'react-dom/client'

import '@cdc/core/styles/cove-main.scss'
import '@cdc/core/components/EditorPanel/EditorPanel.styles.css'

import MultiDashboardWrapper from './CdcDashboard'

let isEditor = window.location.href.includes('editor=true')
let isDebug = window.location.href.includes('debug=true')

let domContainer = document.getElementsByClassName('react-container')[0] as HTMLElement & { coveConfig?: any }
let configUrl = domContainer.dataset.configUrl
let injectedConfig = domContainer.coveConfig

ReactDOM.createRoot(domContainer).render(
  <React.StrictMode>
    <MultiDashboardWrapper
      config={injectedConfig}
      configUrl={injectedConfig ? undefined : configUrl}
      interactionLabel={configUrl}
      isEditor={isEditor}
      isDebug={isDebug}
    />
  </React.StrictMode>
)
