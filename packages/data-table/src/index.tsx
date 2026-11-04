import React from 'react'
import { createDevRoot } from '@cdc/core/helpers/createDevRoot'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import CdcDataTable from './CdcDataTable'

import '@cdc/core/styles/cove-main.scss'

let isEditor = window.location.href.includes('editor=true')

let domContainer = document.getElementsByClassName('react-container')[0] as HTMLElement & { coveConfig?: any }
let configUrl = domContainer.dataset.configUrl
let injectedConfig = domContainer.coveConfig

createDevRoot(domContainer).render(
  <React.StrictMode>
    <ErrorBoundary component='CdcDataTable'>
      <CdcDataTable config={injectedConfig} configUrl={injectedConfig ? undefined : configUrl} isEditor={isEditor} />
    </ErrorBoundary>
  </React.StrictMode>
)
