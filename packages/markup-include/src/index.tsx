import React from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalContextProvider } from '@cdc/core/components/GlobalContext'

import '@cdc/core/styles/cove-main.scss'

import CdcMarkupInclude from './CdcMarkupInclude'

let isEditor = window.location.href.includes('editor=true')

let domContainer = document.getElementsByClassName('react-container')[0] as HTMLElement & { coveConfig?: any }
let configUrl = domContainer.dataset.configUrl
let injectedConfig = domContainer.coveConfig

ReactDOM.createRoot(domContainer).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <CdcMarkupInclude
        config={injectedConfig}
        configUrl={injectedConfig ? undefined : configUrl}
        interactionLabel={configUrl}
        isEditor={isEditor}
      />
    </GlobalContextProvider>
  </React.StrictMode>
)
