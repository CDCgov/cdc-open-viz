import React, { useContext, Suspense, lazy } from 'react'

// Context
import ConfigContext from '../ConfigContext'

// Components - Core
import Ghost from '@cdc/core/components/element/Ghost.jsx'

// Lazy Load Components
const CdcDashboard = lazy(() => import('@cdc/dashboard'))
const CdcMap = lazy(() => import('@cdc/map'))
const CdcChart = lazy(() => import('@cdc/chart'))
const CdcDataBite = lazy(() => import('@cdc/data-bite'))
const CdcWaffleChart = lazy(() => import('@cdc/waffle-chart'))
const CdcMarkupInclude = lazy(() => import('@cdc/markup-include'))

const TabVizConfig = ({ containerEl }) => {
  const { config, setTempConfig, hostname } = useContext(ConfigContext)

  let { type } = config

  const baseProps = {
    config: config,
    setConfig: setTempConfig,
    isWizard: true
  }

  const visualizationList = {
    map: <CdcMap {...baseProps} isEditor={true} hostname={hostname} containerEl={containerEl} />,
    chart: <CdcChart {...baseProps} isEditor={true} />,
    dashboard: <CdcDashboard {...baseProps} isEditor={true} />,
    'data-bite': <CdcDataBite {...baseProps} isEditor={true} />,
    'waffle-chart': <CdcWaffleChart {...baseProps} isEditor={true} />,
    'markup-include': <CdcMarkupInclude {...baseProps} isEditor={true} />
  }

  return type && visualizationList[type] ? <Suspense fallback={<Ghost display='editor' />}>{visualizationList[type]}</Suspense> : <p>No visualization type selected.</p>
}

export default TabVizConfig
