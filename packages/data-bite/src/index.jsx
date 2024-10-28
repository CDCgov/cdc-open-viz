import React from 'react'
import ReactDOM from 'react-dom/client'

import CdcDataBite from './CdcDataBite'
import './coreStyles_databite.scss'

let isEditor = window.location.href.includes('editor=true')

let domContainer = document.getElementsByClassName('react-container')[0]

ReactDOM.createRoot(domContainer).render(
  <React.StrictMode>
    <CdcDataBite configUrl={domContainer.attributes['data-config']?.value} isEditor={isEditor} />
  </React.StrictMode>
)
