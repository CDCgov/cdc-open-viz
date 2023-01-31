import React from 'react'
import ReactDOM from 'react-dom/client'

// Components
import CdcWaffleChart from './CdcWaffleChart'
import View from '@cdc/core/components/View.jsx'

let domContainer = document.getElementsByClassName('react-container')[0]

ReactDOM.createRoot(domContainer).render(
  <React.StrictMode>
    <View>
      <CdcWaffleChart configUrl={domContainer.attributes['data-config'].value} />
    </View>
  </React.StrictMode>,
)
