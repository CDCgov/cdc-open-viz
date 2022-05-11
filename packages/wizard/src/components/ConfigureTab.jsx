import React, { Suspense, lazy, useContext } from 'react'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import WizardContext from '../WizardContext'

const CdcDashboard = lazy(() => import('@cdc/dashboard'))
const CdcMap = lazy(() => import('@cdc/map'))
const CdcChart = lazy(() => import('@cdc/chart'))
const CdcDataBite = lazy(() => import('@cdc/data-bite'))
const CdcWaffleChart = lazy(() => import('@cdc/waffle-chart'))
const CdcMarkupInclude = lazy(() => import('@cdc/markup-include'))

export default function ConfigureTab({ containerEl }) {
  const { config, setTempConfig, hostname } = useContext(WizardContext)

  let { type } = config

  const baseProps = {
    isEditor: true,
    isWizard: true,
    config: config,
    setConfig: setTempConfig
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
    'data-bite': {
      name: 'CdcDataBite',
      object: <CdcDataBite {...baseProps}/>
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
