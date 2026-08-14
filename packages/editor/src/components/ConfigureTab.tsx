import React, { useContext } from 'react'

import CdcMap from '@cdc/map/src/CdcMap' // TODO: Lazy load this
import CdcChart from '@cdc/chart/src/CdcChart'
import CdcDataBite from '@cdc/data-bite/src/CdcDataBite'
import CdcWaffleChart from '@cdc/waffle-chart/src/CdcWaffleChart'
import CdcMarkupInclude from '@cdc/markup-include/src/CdcMarkupInclude'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import ConfigContext from '@cdc/core/contexts/EditorContext'
import MultiDashboardWrapper from '@cdc/dashboard/src/CdcDashboard'
import CdcDataTable from '@cdc/data-table/src/CdcDataTable'

type ConfigureTabProps = {
  containerEl?: HTMLElement
  previewKey?: string
  previewBar?: React.ReactNode
}

export default function ConfigureTab({ containerEl, previewKey, previewBar }: ConfigureTabProps) {
  const { config, setTempConfig, isDebug, configUrl } = useContext(ConfigContext)

  let { type } = config

  switch (type) {
    case 'map':
      return (
        <>
          {previewBar && <div className='modern-styles-preview-bar-wrap'>{previewBar}</div>}
          <ErrorBoundary component='CdcMap'>
            <CdcMap
              key={previewKey}
              isEditor={true}
              config={config}
              containerEl={containerEl}
              setConfig={setTempConfig}
              configUrl={configUrl}
            />
          </ErrorBoundary>
        </>
      )
    case 'waffle-chart':
      if (
        config.visualizationType === 'Waffle' ||
        config.visualizationType === 'TP5 Waffle' ||
        config.visualizationType === 'Gauge' ||
        config.visualizationType === 'TP5 Gauge'
      ) {
        return (
          <ErrorBoundary component='CdcWaffleChart'>
            <CdcWaffleChart
              key={previewKey}
              isEditor={true}
              isDebug={isDebug}
              config={config}
              setConfig={setTempConfig}
            />
          </ErrorBoundary>
        )
      }
      break
    case 'chart':
      return (
        <>
          {previewBar && <div className='modern-styles-preview-bar-wrap'>{previewBar}</div>}
          <ErrorBoundary component='CdcChart'>
            <CdcChart key={previewKey} isEditor={true} isDebug={isDebug} config={config} />
          </ErrorBoundary>
        </>
      )
    case 'dashboard':
      return (
        <>
          {previewBar && <div className='modern-styles-preview-bar-wrap'>{previewBar}</div>}
          <ErrorBoundary component='CdcDashboard'>
            <MultiDashboardWrapper
              key={previewKey}
              isEditor={true}
              isDebug={isDebug}
              config={config}
              configUrl={configUrl}
              initialTab={previewBar ? 'Dashboard Preview' : undefined}
            />
          </ErrorBoundary>
        </>
      )
    case 'data-bite':
      return (
        <ErrorBoundary component='CdcDashboard'>
          <CdcDataBite key={previewKey} isEditor={true} isDebug={isDebug} config={config} setConfig={setTempConfig} />
        </ErrorBoundary>
      )
    case 'markup-include':
      return (
        <ErrorBoundary component='CdcDashboard'>
          <CdcMarkupInclude
            key={previewKey}
            isEditor={true}
            isDebug={isDebug}
            config={config}
            setConfig={setTempConfig}
          />
        </ErrorBoundary>
      )
    case 'table':
      return (
        <ErrorBoundary component='CdcDataTable'>
          <CdcDataTable key={previewKey} isEditor={true} isDebug={isDebug} config={config} />
        </ErrorBoundary>
      )
    default:
      return <p>No visualization type selected.</p>
  }
}
