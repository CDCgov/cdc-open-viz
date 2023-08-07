import React, { useContext } from 'react'

import CdcDashboard from '@cdc/dashboard' // TODO: Lazy load this
import CdcMap from '@cdc/map' // TODO: Lazy load this
import CdcChart from '@cdc/chart' // TODO: Lazy load this
import CdcDataBite from '@cdc/data-bite'
import CdcWaffleChart from '@cdc/waffle-chart'
import CdcMarkupInclude from '@cdc/markup-include'

import '../scss/configure-tab.scss'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import ConfigContext from '../ConfigContext'

export default function ConfigureTab({ containerEl }) {
  const { config, setTempConfig, hostname, isDebug } = useContext(ConfigContext)

  let { type } = config

  switch (type) {
    case 'map':
      return (
        <ErrorBoundary component='CdcMap'>
          <CdcMap isEditor={true} isDebug={isDebug} config={config} hostname={hostname} setConfig={setTempConfig} containerEl={containerEl} />
        </ErrorBoundary>
      )
    case 'waffle-chart':
      if (config.visualizationType === 'Waffle' || config.visualizationType === 'Gauge') {
        return (
          <ErrorBoundary component='CdcWaffleChart'>
            <CdcWaffleChart isEditor={true} isDebug={isDebug} config={config} setConfig={setTempConfig} />
          </ErrorBoundary>
        )
      }
      break
    case 'chart':
      return (
        <ErrorBoundary component='CdcChart'>
          <CdcChart isEditor={true} isDebug={isDebug} config={config} setConfig={setTempConfig} />
        </ErrorBoundary>
      )
    case 'dashboard':
      return (
        <ErrorBoundary component='CdcDashboard'>
          <CdcDashboard isEditor={true} isDebug={isDebug} config={config} setConfig={setTempConfig} />
        </ErrorBoundary>
      )
    case 'data-bite':
      return (
        <ErrorBoundary component='CdcDashboard'>
          <CdcDataBite isEditor={true} isDebug={isDebug} config={config} setConfig={setTempConfig} />
        </ErrorBoundary>
      )
    case 'markup-include':
      return (
        <ErrorBoundary component='CdcDashboard'>
          <CdcMarkupInclude isEditor={true} isDebug={isDebug} config={config} setConfig={setTempConfig} />
        </ErrorBoundary>
      )
    default:
      return <p>No visualization type selected.</p>
  }
}
