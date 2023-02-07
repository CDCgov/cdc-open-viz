import React from 'react'
import ReactDOM from 'react-dom/client'

// Components - Local
import CdcMarkupInclude from './CdcMarkupInclude'

let domContainer = document.getElementsByClassName('react-container')[0]

ReactDOM.createRoot(domContainer).render(
  <React.StrictMode>
    <CdcMarkupInclude configUrl={domContainer.attributes['data-config'].value}/>
  </React.StrictMode>,
)
