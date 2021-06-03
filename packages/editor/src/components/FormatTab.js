import React, { useContext, useEffect } from 'react';
import '../scss/data-formatter-tab.scss';

import GlobalState from '../context';
import PreviewDataTable from './PreviewDataTable';

import DataTransform from '@cdc/core/components/DataTransform';

export default function FormatTab() { 
    const {config, setConfig, setGlobalActive, tempConfig, setTempConfig} = useContext(GlobalState);

    const transform = new DataTransform();

    useEffect(() => {
        if(tempConfig !== null) {
            setConfig(tempConfig)
            setTempConfig(null)
        }
    });

    useEffect(() => {
        console.log(config);
        if(!config.formattedData && config.dataDescription) {
            try {
                setConfig({...config, formattedData: transform.developerStandardize(config.data, config.dataDescription)});
            } catch(e) {
                //Data description not sufficient
            }
        }
    }, [config.dataDescription]);

    const updateDescriptionProp = (key, value) => {
        setConfig({...config, dataDescription: {...config.dataDescription, [key]: value}})
    };

    return (
        <>
            <div className="left-col px-4">
                <div>
                    <span>Are there multiple series represented in your data?</span>
                    <button className="btn btn-primary" onClick={() => {updateDescriptionProp('series', true)}}>Yes</button>
                    <button className="btn btn-primary" onClick={() => {updateDescriptionProp('series', false)}}>No</button>

                    {config.dataDescription && (
                        <>
                            {config.dataDescription.series === true && (
                                <>
                                    <span>Are the series values in your data represented in a single row, or across multiple rows?</span>
                                    <button className="btn btn-primary" onClick={() => {updateDescriptionProp('singleRow', true)}}>Single Row</button>
                                    <button className="btn btn-primary" onClick={() => {updateDescriptionProp('singleRow', false)}}>Multiple Rows</button>

                                    {config.dataDescription.singleRow === false && (
                                        <>
                                            <span>Which property in the dataset represents which series the row is describing?</span>
                                            <select onChange={(e) => {updateDescriptionProp('seriesKey', e.target.value)}}>
                                                {Object.keys(config.data[0]).map(key => <option value={key}>{key}</option>)}
                                            </select>
                                        </>
                                    )}
                                </>
                            )}
                        </>
                    )}
                </div>
                {config.formattedData && (
                    <button className="btn btn-primary" style={{float: 'right'}} onClick={() => setGlobalActive(2)}>Select your visualization type &raquo;</button>
                )}
            </div>
            
            <div className="right-col">
                <PreviewDataTable data={config.data} />
            </div>
        </>
    )
}