import React, { useContext } from 'react';
import CdcMap from '@cdc/map'; // TODO: Lazy load this

import ErrorBoundary from '@cdc/core/components/ErrorBoundary';
import GlobalState from '../context';


export default function ConfigTab() {
    const { data, type } = useContext(GlobalState);

    const configObj = {
        data
    }

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