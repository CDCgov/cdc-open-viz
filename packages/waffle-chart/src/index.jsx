import React from 'react'
import ReactDOM from 'react-dom/client'

import CdcWaffleChart from './CdcWaffleChart'
import './coreStyles_wafflechart.scss'

let isEditor = window.location.href.includes('editor=true')

let domContainer = document.getElementsByClassName('react-container')[0]

ReactDOM.createRoot(domContainer).render(
  <React.StrictMode>
    <CdcWaffleChart configUrl={domContainer.attributes['data-config'].value} isEditor={isEditor} />
  </React.StrictMode>
)
