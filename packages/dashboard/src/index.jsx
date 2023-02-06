import React from 'react'
import ReactDOM from 'react-dom/client'

import CdcDashboard from './CdcDashboard'

let isEditor = window.location.href.includes('editor=true')

let domContainer = document.getElementsByClassName('react-container')[0]

ReactDOM.createRoot(domContainer).render(
  <React.StrictMode>
    <CdcDashboard configUrl={domContainer.attributes['data-config'].value} isEditor={isEditor} />
  </React.StrictMode>,
)
