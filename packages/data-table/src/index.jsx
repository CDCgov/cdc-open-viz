import React from 'react'
import ReactDOM from 'react-dom/client'

import CdcDataTable from './CdcDataTable'

import '@cdc/core/styles/cove-main.scss'

let isEditor = window.location.href.includes('editor=true')

let domContainer = document.getElementsByClassName('react-container')[0]

ReactDOM.createRoot(domContainer).render(
  <React.StrictMode>
    <CdcDataTable configUrl={domContainer.attributes['data-config']?.value} isEditor={isEditor} />
  </React.StrictMode>
)
