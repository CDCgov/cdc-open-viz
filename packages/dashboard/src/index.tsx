import React from 'react'
import ReactDOM from 'react-dom/client'

import MultiDashboardWrapper from './CdcDashboard'

let isEditor = window.location.href.includes('editor=true')
let isDebug = window.location.href.includes('debug=true')

let domContainer = document.getElementsByClassName('react-container')[0]

ReactDOM.createRoot(domContainer).render(
  <React.StrictMode>
    <MultiDashboardWrapper configUrl={domContainer.attributes['data-config'].value} isEditor={isEditor} isDebug={isDebug} />
  </React.StrictMode>
)
