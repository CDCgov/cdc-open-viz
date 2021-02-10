import React, { useContext } from 'react';
import CdcMap from '@cdc/map'; // TODO: Lazy load this

import ErrorBoundary from '@cdc/core/components/ErrorBoundary';
import GlobalState from '../context';


export default function ConfigTab() {
    const { data, type, config } = useContext(GlobalState);

    // If there's no preexisting config (this is a new visualizaiton) we just pass in an object created with only the data.
    let configObj = config ?? {data}

    switch (type) {
        case 'map':
            return (
                <ErrorBoundary component="CdcMap">
                    <CdcMap isEditor={true} config={configObj} />
                </ErrorBoundary>
            )
        default:
            return <p>No visualization type selected.</p>
    }
}