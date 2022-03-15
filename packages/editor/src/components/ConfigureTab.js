import React, { useContext } from 'react';

import CdcDashboard from '@cdc/dashboard'; // TODO: Lazy load this
import CdcMap from '@cdc/map'; // TODO: Lazy load this
import CdcChart from '@cdc/chart'; // TODO: Lazy load this
import CdcDataBite from '@cdc/data-bite';
import CdcWaffleChart from '@cdc/waffle-chart'
import CdcHtmlInclude from '@cdc/html-include'

import '../scss/configure-tab.scss';

import ErrorBoundary from '@cdc/core/components/ErrorBoundary';
import GlobalState from '../context';

export default function ConfigureTab({containerEl}) {
    const { config, setTempConfig, hostname } = useContext(GlobalState);

    let { type } = config

    switch (type) {
        case 'map':
            return (
                <ErrorBoundary component="CdcMap">
                    <CdcMap isEditor={true} config={config} hostname={hostname} setConfig={setTempConfig} containerEl={containerEl} />
                </ErrorBoundary>
            )
        case 'chart':
            return (
                <ErrorBoundary component="CdcChart">
                    <CdcChart isEditor={true} config={config} setConfig={setTempConfig} />
                </ErrorBoundary>
            )
        case 'dashboard':
            return (
                <ErrorBoundary component="CdcDashboard">
                    <CdcDashboard isEditor={true} config={config} setConfig={setTempConfig} />
                </ErrorBoundary>
            )
        case 'data-bite':
            return (
              <ErrorBoundary component="CdcDashboard">
                  <CdcDataBite isEditor={true} config={config} setConfig={setTempConfig} />
              </ErrorBoundary>
            )
        case 'waffle-chart':
            return (
                <ErrorBoundary component="CdcDashboard">
                    <CdcWaffleChart isEditor={true} config={config} setConfig={setTempConfig} />
                </ErrorBoundary>
            )
        case 'html-include':
            return (
                <ErrorBoundary component="CdcDashboard">
                    <CdcHtmlInclude isEditor={true} config={config} setConfig={setTempConfig} />
                </ErrorBoundary>
            )
        default:
            return <p>No visualization type selected.</p>
    }
}
