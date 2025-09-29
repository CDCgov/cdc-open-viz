import React from 'react'
import ReactDOM from 'react-dom/client'

import '@cdc/core/styles/cove-main.scss'

import CdcDataBite from './CdcDataBite'

let isEditor = window.location.href.includes('editor=true')

let domContainer = document.getElementsByClassName('react-container')[0]

ReactDOM.createRoot(domContainer).render(
  <React.StrictMode>
    <CdcDataBite
      configUrl={domContainer.attributes['data-config']?.value}
      interactionLabel={domContainer.attributes['data-config']?.value}
      isEditor={isEditor}
    />
  </React.StrictMode>
)
