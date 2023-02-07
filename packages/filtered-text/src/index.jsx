import React from 'react'
import ReactDOM from 'react-dom/client'

// Components - Local
import CdcFilteredText from './CdcFilteredText'

let domContainer = document.getElementsByClassName('react-container')[0]

ReactDOM.createRoot(domContainer).render(
  <React.StrictMode>
    <CdcFilteredText configUrl={domContainer.attributes['data-config'].value} />
  </React.StrictMode>,
)
