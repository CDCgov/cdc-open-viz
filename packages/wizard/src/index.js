import React from 'react'
import ReactDOM from 'react-dom'
import CdcWizard from './CdcWizard'

// Allow URL query to preselect a tab in standalone mode
const standaloneParams = new URLSearchParams(window.location.search)

let activeTab = Number.parseInt(standaloneParams.get('active')) - 1 || null
const domContainer = document.querySelector('.react-container')


ReactDOM.render(
  <React.StrictMode>
    <CdcWizard startingTab={activeTab} containerEl={domContainer}/>
  </React.StrictMode>,
  document.querySelector('.react-container')
)
