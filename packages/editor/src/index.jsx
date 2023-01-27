import React from 'react'
import ReactDOM from 'react-dom/client'

import CdcEditor from './CdcEditor'

// Allow URL query to preselect a tab in standalone mode
const standaloneParams = new URLSearchParams(window.location.search)
let activeTab = Number.parseInt(standaloneParams.get('active')) - 1 || null

let domContainer = document.getElementsByClassName('react-container')[0]

ReactDOM.createRoot(domContainer).render(
  <React.StrictMode>
    <CdcEditor startingTab={activeTab} containerEl={domContainer} />
  </React.StrictMode>,
)
