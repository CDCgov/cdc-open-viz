import React from 'react'
import { createDevRoot } from '@cdc/core/helpers/createDevRoot'

import '@cdc/core/styles/cove-main.scss'

import CdcEditor from './CdcEditor'

// Allow URL query to preselect a tab in standalone mode
const standaloneParams = new URLSearchParams(window.location.search)
let activeTab = Number.parseInt(standaloneParams.get('active')) - 1 || null

let domContainer = document.getElementsByClassName('react-container')[0]
let injectedConfig = domContainer.coveConfig

let isDebug = window.location.href.includes('debug=true')

createDevRoot(domContainer).render(
  <React.StrictMode>
    <CdcEditor startingTab={activeTab} containerEl={domContainer} config={injectedConfig} isDebug={isDebug} />
  </React.StrictMode>
)
