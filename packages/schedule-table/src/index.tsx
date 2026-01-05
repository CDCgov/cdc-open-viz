import React from 'react'
import ReactDOM from 'react-dom/client'

import '@cdc/core/styles/cove-main.scss'

import CdcScheduleTable from './CdcScheduleTable'

export default CdcScheduleTable
export { CdcScheduleTable }
export type { Config } from './types/Config'

// Development mounting
if (typeof document !== 'undefined') {
  const isEditor = window.location.href.includes('editor=true')
  const domContainer = document.getElementsByClassName('react-container')[0]

  if (domContainer) {
    ReactDOM.createRoot(domContainer).render(
      <React.StrictMode>
        <CdcScheduleTable
          configUrl={domContainer.attributes['data-config'].value}
          interactionLabel={domContainer.attributes['data-config'].value}
          isEditor={isEditor}
        />
      </React.StrictMode>
    )
  }
}
