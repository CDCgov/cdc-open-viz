import React from 'react'
import ReactDOM from 'react-dom/client'

import '@cdc/core/styles/cove-main.scss'

import CdcFilteredText from './CdcFilteredText'

//@ts-ignore
let isEditor = window.location.href.includes('editor=true')

let domContainer = document.getElementsByClassName('react-container')[0]
let configUrl = domContainer.dataset.configUrl
let injectedConfig = domContainer.coveConfig

ReactDOM.createRoot(domContainer).render(
  <React.StrictMode>
    <CdcFilteredText config={injectedConfig} configUrl={injectedConfig ? undefined : configUrl} isEditor={isEditor} />
  </React.StrictMode>
)
