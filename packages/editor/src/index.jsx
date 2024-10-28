import React from 'react'
import ReactDOM from 'react-dom/client'

import CdcEditor from './CdcEditor'
import './coreStyles_editor.scss'

// Allow URL query to preselect a tab in standalone mode
const standaloneParams = new URLSearchParams(window.location.search)
let activeTab = Number.parseInt(standaloneParams.get('active')) - 1 || null

let domContainer = document.getElementsByClassName('react-container')[0]

let isDebug = window.location.href.includes('debug=true')

ReactDOM.createRoot(domContainer).render(
  <React.StrictMode>
    <CdcEditor startingTab={activeTab} containerEl={domContainer} isDebug={isDebug} />
  </React.StrictMode>
)
