import React from 'react'

import CdcMap from '@cdc/map/src/CdcMap'
import CdcChart from '@cdc/chart/src/CdcChart'
import CdcDataBite from '@cdc/data-bite/src/CdcDataBite'
import CdcWaffleChart from '@cdc/waffle-chart/src/CdcWaffleChart'
import CdcMarkupInclude from '@cdc/markup-include/src/CdcMarkupInclude'
import MultiDashboardWrapper from '@cdc/dashboard/src/CdcDashboard'
import CdcDataTable from '@cdc/data-table/src/CdcDataTable'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary'

type VisualizationRendererProps = {
  config: Record<string, any>
  mode: 'editor' | 'runtime'
  containerEl?: HTMLElement
  isDebug?: boolean
  configUrl?: string
  setConfig?: (config: Record<string, any>) => void
}

const VisualizationRenderer: React.FC<VisualizationRendererProps> = ({
  config,
  mode,
  containerEl,
  isDebug,
  configUrl,
  setConfig
}) => {
  const isEditor = mode === 'editor'

  switch (config.type) {
    case 'map':
      return (
        <ErrorBoundary component='CdcMap'>
          <CdcMap
            isEditor={isEditor}
            config={config}
            containerEl={containerEl}
            setConfig={isEditor ? setConfig : undefined}
            configUrl={configUrl}
          />
        </ErrorBoundary>
      )
    case 'waffle-chart':
      if (['Waffle', 'TP5 Waffle', 'Gauge', 'TP5 Gauge'].includes(config.visualizationType)) {
        return (
          <ErrorBoundary component='CdcWaffleChart'>
            <CdcWaffleChart
              isEditor={isEditor}
              isDebug={isDebug}
              config={config}
              setConfig={isEditor ? setConfig : undefined}
            />
          </ErrorBoundary>
        )
      }
      break
    case 'chart':
      return (
        <ErrorBoundary component='CdcChart'>
          <CdcChart isEditor={isEditor} isDebug={isDebug} config={config} />
        </ErrorBoundary>
      )
    case 'dashboard':
      return (
        <ErrorBoundary component='CdcDashboard'>
          <MultiDashboardWrapper isEditor={isEditor} isDebug={isDebug} config={config} configUrl={configUrl} />
        </ErrorBoundary>
      )
    case 'data-bite':
      return (
        <ErrorBoundary component='CdcDataBite'>
          <CdcDataBite
            isEditor={isEditor}
            isDebug={isDebug}
            config={config}
            setConfig={isEditor ? setConfig : undefined}
          />
        </ErrorBoundary>
      )
    case 'markup-include':
      return (
        <ErrorBoundary component='CdcMarkupInclude'>
          <CdcMarkupInclude
            isEditor={isEditor}
            isDebug={isDebug}
            config={config}
            setConfig={isEditor ? setConfig : undefined}
          />
        </ErrorBoundary>
      )
    case 'table':
      return (
        <ErrorBoundary component='CdcDataTable'>
          <CdcDataTable isEditor={isEditor} isDebug={isDebug} config={config} />
        </ErrorBoundary>
      )
    default:
      return <p>No visualization type selected.</p>
  }

  return <p>No visualization type selected.</p>
}

export default VisualizationRenderer
