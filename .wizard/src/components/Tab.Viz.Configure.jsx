import React, { Suspense, lazy, useContext } from 'react'

// Context
import { useConfigContext } from '@cdc/core/context/ConfigContext'
import WizardContext from '../context/WizardContext'

// Components - Core
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'

// Lazy Load Components
const CdcDashboard = lazy(() => import('@cdc/dashboard'))
const CdcMap = lazy(() => import('@cdc/map'))
const CdcChart = lazy(() => import('@cdc/chart'))
const CdcDataByte = lazy(() => import('@cdc/data-byte'))
const CdcWaffleChart = lazy(() => import('@cdc/waffle-chart'))
const CdcMarkupInclude = lazy(() => import('@cdc/markup-include'))

const TabVizConfigure = ({ containerEl }) => {
  const { config } = useConfigContext()
  const { setTempConfig, hostname } = useContext(WizardContext)

  let { type } = config

  const baseProps = {
    configObj: config,
    setConfig: setTempConfig,
    isConsumed: true
  }

  const componentList = {
    'map': {
      name: 'CdcMap',
      object: <CdcMap {...baseProps} hostname={hostname} containerEl={containerEl}/>
    },
    'chart': {
      name: 'CdcChart',
      object: <CdcChart {...baseProps}/>
    },
    'dashboard': {
      name: 'CdcDashboard',
      object: <CdcDashboard {...baseProps}/>
    },
    'data-byte': {
      name: 'CdcDataByte',
      object: <CdcDataByte {...baseProps}/>
    },
    'waffle-chart': {
      name: 'CdcWaffleChart',
      object: <CdcWaffleChart {...baseProps}/>
    },
    'markup-include': {
      name: 'CdcMarkupInclude',
      object: <CdcMarkupInclude {...baseProps}/>
    }
  }

  return type && componentList[type] ? (
    <ErrorBoundary component={componentList[type].name}>
      <Suspense fallback={<div>Loading {componentList[type].name}...</div>}>
        {componentList[type].object}
      </Suspense>
    </ErrorBoundary>
  ) : <p>No visualization type selected.</p>
}

export default TabVizConfigure
