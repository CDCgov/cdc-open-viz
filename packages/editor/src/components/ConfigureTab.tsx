import React, { useContext } from 'react'

import CdcMap from '@cdc/map/src/CdcMap' // TODO: Lazy load this
import CdcChart from '@cdc/chart/src/CdcChart'
import CdcDataBite from '@cdc/data-bite/src/CdcDataBite'
import CdcWaffleChart from '@cdc/waffle-chart/src/CdcWaffleChart'
import CdcMarkupInclude from '@cdc/markup-include/src/CdcMarkupInclude'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import ConfigContext from '../ConfigContext'
import MultiDashboardWrapper from '@cdc/dashboard/src/CdcDashboard'

export default function ConfigureTab({ containerEl }) {
  const { config, setTempConfig, isDebug } = useContext(ConfigContext)

  let { type } = config

  switch (type) {
    case 'map':
      return (
        <ErrorBoundary component='CdcMap'>
          <CdcMap isEditor={true} config={config} containerEl={containerEl} setConfig={setTempConfig} />
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
          <CdcChart isEditor={true} isDebug={isDebug} config={config} />
        </ErrorBoundary>
      )
    case 'dashboard':
      return (
        <ErrorBoundary component='CdcDashboard'>
          <MultiDashboardWrapper isEditor={true} isDebug={isDebug} />
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
