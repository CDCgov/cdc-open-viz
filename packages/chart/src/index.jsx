import React from 'react'
import ReactDOM from 'react-dom/client'

import CdcChart from './CdcChartWrapper'
import './coreStyles_chart.scss'

import '@cdc/core/styles/cove-main.scss'
import 'react-tooltip/dist/react-tooltip.css'

let isEditor = window.location.href.includes('editor=true')
let isDebug = window.location.href.includes('debug=true')

let domContainer = document.getElementsByClassName('react-container')[0]

let configUrl = domContainer.attributes['data-config'].value
let config = await (await fetch(configUrl)).json()

ReactDOM.createRoot(domContainer).render(
  <React.StrictMode>
    <CdcChart config={config} isEditor={isEditor} isDebug={isDebug} />
  </React.StrictMode>
)
