import React from 'react'
import ReactDOM from 'react-dom/client'

import CdcMap from './CdcMap'

import '@cdc/core/styles/cove-main.scss'
import 'react-tooltip/dist/react-tooltip.css'
import './coreStyles_map.scss'

let isEditor = window.location.href.includes('editor=true')
let isDebug = window.location.href.includes('debug=true')
let domContainer = document.getElementsByClassName('react-container')[0]

ReactDOM.createRoot(domContainer).render(
  <React.StrictMode>
    <CdcMap
      isEditor={isEditor}
      isDebug={isDebug}
      configUrl={domContainer.attributes['data-config'].value}
      containerEl={domContainer}
    />
  </React.StrictMode>
)
