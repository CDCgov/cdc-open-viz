import React, { useContext } from 'react';
import CdcMap from '@cdc/map'; // TODO: Lazy
import GlobalState from '../context';


export default function ConfigTab() {
    const { data, type } = useContext(GlobalState);
debugger;
    switch (type) {
        case 'map':
            return <CdcMap isEditor={true} config={{data: data}} />
        default:
            return <p>No visualization type selected.</p>
    }
}