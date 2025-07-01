import React from 'react'
import ReactDOM from 'react-dom/client'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import CdcDataTable from './CdcDataTable'

import '@cdc/core/styles/cove-main.scss'

let isEditor = window.location.href.includes('editor=true')

let domContainer = document.getElementsByClassName('react-container')[0]

ReactDOM.createRoot(domContainer).render(
  <React.StrictMode>
    <ErrorBoundary component='CdcDataTable'>
      <CdcDataTable configUrl={domContainer.attributes['data-config']?.value} isEditor={isEditor} />
    </ErrorBoundary>
  </React.StrictMode>
)
