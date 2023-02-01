import React from 'react'
import ReactDOM from 'react-dom/client'

// Components - Local
import CdcWaffleChart from './CdcWaffleChart'

let domContainer = document.getElementsByClassName('react-container')[0]

ReactDOM.createRoot(domContainer).render(
  <React.StrictMode>
    <CdcWaffleChart configUrl={domContainer.attributes['data-config'].value} />
  </React.StrictMode>,
)
