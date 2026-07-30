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
import { type EditorState } from '@cdc/core/contexts/editor.reducer'

type ConfigureTabProps = {
  containerEl?: HTMLElement
  previewKey?: string
  previewBar?: React.ReactNode
  previewOriginalConfig?: EditorState['config']
}

export default function ConfigureTab({
  containerEl,
  previewKey,
  previewBar,
  previewOriginalConfig
}: ConfigureTabProps) {
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
          {previewOriginalConfig?.type === 'map' && (
            <section className='modern-styles-original-preview' aria-label='Current map'>
              <div className='modern-styles-original-preview__header-wrap'>
                <div className='modern-styles-original-preview__header'>
                  <strong>Current map</strong>
                  <span>The existing version for comparison.</span>
                </div>
              </div>
              <div className='modern-styles-original-preview__map'>
                <ErrorBoundary component='CdcMapCurrent'>
                  <CdcMap
                    key={`${previewKey || 'modern-styles-preview'}-original`}
                    isEditor={false}
                    isDebug={isDebug}
                    config={previewOriginalConfig}
                    interactionLabel='modern-styles-current'
                  />
                </ErrorBoundary>
              </div>
            </section>
          )}
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
          {previewOriginalConfig?.type === 'chart' && (
            <section className='modern-styles-original-preview' aria-label='Current visualization'>
              <div className='modern-styles-original-preview__header-wrap'>
                <div className='modern-styles-original-preview__header'>
                  <strong>Current visualization</strong>
                  <span>The existing version for comparison.</span>
                </div>
              </div>
              <div className='modern-styles-original-preview__chart'>
                <ErrorBoundary component='CdcChartCurrent'>
                  <CdcChart
                    key={`${previewKey || 'modern-styles-preview'}-original`}
                    isEditor={false}
                    isDebug={isDebug}
                    config={previewOriginalConfig}
                    interactionLabel='modern-styles-current'
                  />
                </ErrorBoundary>
              </div>
            </section>
          )}
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
          {previewOriginalConfig?.type === 'dashboard' && (
            <section
              className='modern-styles-original-preview modern-styles-original-preview--dashboard'
              aria-label='Current dashboard'
            >
              <div className='modern-styles-original-preview__header-wrap'>
                <div className='modern-styles-original-preview__header'>
                  <strong>Current dashboard</strong>
                  <span>The existing version for comparison.</span>
                </div>
              </div>
              <div className='modern-styles-original-preview__dashboard'>
                <ErrorBoundary component='CdcDashboardCurrent'>
                  <MultiDashboardWrapper
                    key={`${previewKey || 'modern-styles-preview'}-original`}
                    isEditor={false}
                    isDebug={isDebug}
                    config={previewOriginalConfig}
                    interactionLabel='modern-styles-current'
                  />
                </ErrorBoundary>
              </div>
            </section>
          )}
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
