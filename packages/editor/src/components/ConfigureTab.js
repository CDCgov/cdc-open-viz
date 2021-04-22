import React, { useContext, useState } from 'react';
import CdcMap from '@cdc/map'; // TODO: Lazy load this
import CdcChart from '@cdc/chart'; // TODO: Lazy load this

import ErrorBoundary from '@cdc/core/components/ErrorBoundary';
import GlobalState from '../context';


export default function ConfigureTab() {
    const { data, type, subType, config, keepURL, dataURL, hostname } = useContext(GlobalState);

    // If there's no preexisting config (this is a new visualiztaion) we just pass in an object created with only the data.
    let configObj = config ?? {data, newViz: true}

    if(data) {
        configObj = {...configObj, data}
    }

    // Add US/World switcher for maps
    if(type === 'map') {
        let general = configObj.general ?? {}

        if(subType) {
            general.geoType = subType
        }
        configObj.general = general
    }

    // Add type switcher for charts
    if(type === 'chart') {
        configObj.visualizationType = configObj.visualizationType || subType
    }

    if(keepURL && dataURL) {
        configObj.dataUrl = dataURL
    }

    // Add top level type to the visualization
    configObj.type = type

    switch (type) {
        case 'map':
            return (
                <ErrorBoundary component="CdcMap">
                    <CdcMap isEditor={true} config={configObj} hostname={hostname} />
                </ErrorBoundary>
            )
        case 'chart':
            return (
                <ErrorBoundary component="CdcChart">
                    <CdcChart isEditor={true} config={configObj} hostname={hostname} />
                </ErrorBoundary>
            )
        default:
            return <p>No visualization type selected.</p>
    }
}