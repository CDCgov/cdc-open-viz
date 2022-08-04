import React from 'react'
import { render } from 'react-dom'

import { GlobalContextProvider } from '@cdc/core/context/GlobalContext'
import { ConfigContextProvider } from '@cdc/core/context/ConfigContext'

import CdcWizard from './CdcWizard'

// Allow URL query to preselect a tab in standalone mode
const standaloneParams = new URLSearchParams(window.location.search)

let activeTab = Number.parseInt(standaloneParams.get('active')) - 1 || null
const domContainer = document.querySelector('.react-container')

render(
  <React.StrictMode>
    <GlobalContextProvider>
      <ConfigContextProvider>
        <CdcWizard startingTab={activeTab} containerEl={domContainer}/>
      </ConfigContextProvider>
    </GlobalContextProvider>
  </React.StrictMode>,
  document.querySelector('.react-container')
)
