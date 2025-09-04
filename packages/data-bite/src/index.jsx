import React from 'react'
import ReactDOM from 'react-dom/client'

import '@cdc/core/styles/cove-main.scss'
import './coreStyles_databite.scss'

import CdcDataBite from './CdcDataBite'

let isEditor = window.location.href.includes('editor=true')

// Check for test config parameter in URL
const urlParams = new URLSearchParams(window.location.search)
const testConfig = urlParams.get('config')

let domContainer = document.getElementsByClassName('react-container')[0]

// Use test config if specified, otherwise use data-config attribute
const configUrl = testConfig || domContainer.attributes['data-config']?.value

ReactDOM.createRoot(domContainer).render(
  <React.StrictMode>
    <CdcDataBite configUrl={configUrl} interactionLabel={configUrl} isEditor={isEditor} />
  </React.StrictMode>
)
