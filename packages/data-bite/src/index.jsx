import React from 'react'
import { createDevRoot } from '@cdc/core/helpers/createDevRoot'

import '@cdc/core/styles/cove-main.scss'
import '@cdc/core/components/EditorPanel/EditorPanel.styles.css'

import CdcDataBite from './CdcDataBite'

let isEditor = window.location.href.includes('editor=true')

let domContainer = document.getElementsByClassName('react-container')[0]
let configUrl = domContainer.dataset.configUrl
let injectedConfig = domContainer.coveConfig

createDevRoot(domContainer).render(
  <React.StrictMode>
    <CdcDataBite
      config={injectedConfig}
      configUrl={injectedConfig ? undefined : configUrl}
      interactionLabel={configUrl}
      isEditor={isEditor}
    />
  </React.StrictMode>
)
