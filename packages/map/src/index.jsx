import React from 'react'
import { createDevRoot } from '@cdc/core/helpers/createDevRoot'

import '@cdc/core/styles/cove-main.scss'
import '@cdc/core/components/EditorPanel/EditorPanel.styles.css'

import CdcMap from './CdcMap'

let isEditor = window.location.href.includes('editor=true')
let domContainer = document.getElementsByClassName('react-container')[0]
let configUrl = domContainer.dataset.configUrl
let injectedConfig = domContainer.coveConfig

createDevRoot(domContainer).render(
  <React.StrictMode>
    <CdcMap
      isEditor={isEditor}
      config={injectedConfig}
      configUrl={injectedConfig ? undefined : configUrl}
      interactionLabel={configUrl}
      containerEl={domContainer}
    />
  </React.StrictMode>
)
