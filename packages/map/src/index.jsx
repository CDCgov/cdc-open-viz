import React from 'react'
import ReactDOM from 'react-dom/client'

import '@cdc/core/styles/cove-main.scss'
import 'react-tooltip/dist/react-tooltip.css'
import './coreStyles_map.scss'

import CdcMap from './CdcMap'

let isEditor = window.location.href.includes('editor=true')
let domContainer = document.getElementsByClassName('react-container')[0]

ReactDOM.createRoot(domContainer).render(
  <React.StrictMode>
    <CdcMap isEditor={isEditor} configUrl={domContainer.attributes['data-config'].value} containerEl={domContainer} />
  </React.StrictMode>
)
