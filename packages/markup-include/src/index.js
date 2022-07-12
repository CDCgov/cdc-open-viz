import React from 'react'
import { render } from 'react-dom'

import { GlobalContextProvider } from '@cdc/core/components/context/GlobalContext'
import CdcMarkupInclude from './CdcMarkupInclude'

const domContainers = document.querySelectorAll('.react-container')

let isEditor = window.location.href.includes('editor=true')

domContainers.forEach((domContainer) => {
  render(
    <React.StrictMode>
      <GlobalContextProvider>
        <CdcMarkupInclude configUrl={domContainer.attributes['data-config'].value} isEditor={isEditor}/>
      </GlobalContextProvider>
    </React.StrictMode>,
    domContainer
  )
})
