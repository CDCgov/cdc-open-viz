import React from 'react'
import ReactDOM from 'react-dom/client'

import CdcDataBite from './CdcDataBite'

let domContainer = document.getElementsByClassName('react-container')[0]

ReactDOM.createRoot(domContainer).render(
  <React.StrictMode>
    <CdcDataBite configUrl={domContainer.attributes['data-config']?.value} />
  </React.StrictMode>,
)
