import React, { useContext, useState } from 'react';
import CdcDashboard from '@cdc/dashboard'; // TODO: Lazy load this
import CdcMap from '@cdc/map'; // TODO: Lazy load this
import CdcChart from '@cdc/chart'; // TODO: Lazy load this

import ErrorBoundary from '@cdc/core/components/ErrorBoundary';
import GlobalState from '../context';

export default function ConfigureTab() {
    const { config, setTempConfig, hostname } = useContext(GlobalState);

    let { type } = config

    switch (type) {
        case 'map':
            return (
                <ErrorBoundary component="CdcMap">
                    <CdcMap isEditor={true} config={config} hostname={hostname} setConfig={setTempConfig} />
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
        default:
            return <p>No visualization type selected.</p>
    }
}