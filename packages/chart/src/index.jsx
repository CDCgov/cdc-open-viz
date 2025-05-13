import React from 'react'
import ReactDOM from 'react-dom/client'

import './coreStyles_chart.scss'
import '@cdc/core/styles/cove-main.scss'
import 'react-tooltip/dist/react-tooltip.css'

import CdcChart from './CdcChart'

let isEditor = window.location.href.includes('editor=true')
let isDebug = window.location.href.includes('debug=true')

let domContainer = document.getElementsByClassName('react-container')[0]

ReactDOM.createRoot(domContainer).render(
  <React.StrictMode>
    <CdcChart configUrl={domContainer.attributes['data-config'].value} isEditor={isEditor} isDebug={isDebug} />
  </React.StrictMode>
)
