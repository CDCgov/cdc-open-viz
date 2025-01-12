import React from 'react'
import ReactDOM from 'react-dom/client'

import CdcFilteredText from './CdcFilteredText'
import '@cdc/core/styles/cove-main.scss'
import './coreStyles_filteredtext.scss'

//@ts-ignore
let isEditor = window.location.href.includes('editor=true')

let domContainer = document.getElementsByClassName('react-container')[0]

ReactDOM.createRoot(domContainer).render(
  <React.StrictMode>
    <CdcFilteredText configUrl={domContainer.attributes['data-config'].value} isEditor={isEditor} />
  </React.StrictMode>
)
