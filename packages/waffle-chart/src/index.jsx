import React from 'react'
import { createDevRoot } from '@cdc/core/helpers/createDevRoot'

import '@cdc/core/styles/cove-main.scss'

import CdcWaffleChart from './CdcWaffleChart'

let isEditor = window.location.href.includes('editor=true')

let domContainer = document.getElementsByClassName('react-container')[0]
let configUrl = domContainer.dataset.configUrl
let injectedConfig = domContainer.coveConfig

createDevRoot(domContainer).render(
  <React.StrictMode>
    <CdcWaffleChart
      config={injectedConfig}
      configUrl={injectedConfig ? undefined : configUrl}
      interactionLabel={configUrl}
      isEditor={isEditor}
    />
  </React.StrictMode>
)
