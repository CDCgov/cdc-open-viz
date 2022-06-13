import React from 'react'
import { render } from 'react-dom'

import { GlobalContextProvider } from '@cdc/core/context/GlobalContext'
import { ConfigContextProvider } from '@cdc/core/context/ConfigContext'

import defaults from './data/initial-state'
import CdcChart from './CdcChart'

const domContainers = document.querySelectorAll('.react-container')

domContainers.forEach((domContainer) => {
  render(
    <React.StrictMode>
      <GlobalContextProvider>
        <ConfigContextProvider defaults={defaults}>
          <CdcChart configUrl={domContainer.attributes['data-config'].value}/>
        </ConfigContextProvider>
      </GlobalContextProvider>
    </React.StrictMode>,
    domContainer,
  )
})
