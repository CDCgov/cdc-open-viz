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
        if(!config.formattedData && config.dataDescription) {
            try {
                setConfig({...config, formattedData: transform.developerStandardize(config.data, config.dataDescription)});
            } catch(e) {
                //Data description not sufficient
            }
        }
    }, [config.dataDescription]);

    const updateDescriptionProp = (key, value) => {
        setConfig({...config, formattedData: undefined, dataDescription: {...config.dataDescription, [key]: value}})
    };

    return (
        <>
            <div className="left-col px-4">
                <div>
                    <div class="question">
                        <span>1. Are there multiple series represented in your data?</span>
                        <div>
                            <button className="btn btn-primary" onClick={() => {updateDescriptionProp('series', true)}}>Yes</button>
                            <button className="btn btn-primary" onClick={() => {updateDescriptionProp('series', false)}}>No</button>
                        </div>
                    </div>

                    {config.dataDescription && (
                        <>
                            {config.dataDescription.series === true && (
                                <>
                                    <div class="question">
                                        <span>1. Are the series values in your data represented in a single row, or across multiple rows?</span><br/>
                                        <div className={'table-button' + (config.dataDescription.singleRow === true ? ' active' : '')} onClick={() => {updateDescriptionProp('singleRow', true)}}>
                                            <p>Data is horizontal. Each row contains the data for an individual series in itself.</p>
                                            <table>
                                                <tr>
                                                    <th>Virus</th>
                                                    <th>01/01/2020</th>
                                                    <th>02/01/2020</th>
                                                    <th>...</th>
                                                </tr>
                                                <tr>
                                                    <td>Virus 1</td>
                                                    <td>100</td>
                                                    <td>150</td>
                                                    <td>...</td>
                                                </tr>
                                                <tr>
                                                    <td>Virus 2</td>
                                                    <td>15</td>
                                                    <td>20</td>
                                                    <td>...</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className={'table-button' + (config.dataDescription.singleRow === false ? ' active' : '')} onClick={() => {updateDescriptionProp('singleRow', false)}}>
                                            <p>Each series data is broken out into multiple rows.</p>
                                            <table>
                                                <tr>
                                                    <th>Virus</th>
                                                    <th>Date</th>
                                                    <th>Value</th>
                                                </tr>
                                                <tr>
                                                    <td>Virus 1</td>
                                                    <td>01/01/2020</td>
                                                    <td>100</td>
                                                </tr>
                                                <tr>
                                                    <td>Virus 1</td>
                                                    <td>02/01/2020</td>
                                                    <td>150</td>
                                                </tr>
                                                <tr>
                                                    <td>...</td>
                                                    <td>...</td>
                                                    <td>...</td>
                                                </tr>
                                                <tr>
                                                    <td>Virus 2</td>
                                                    <td>01/01/2020</td>
                                                    <td>15</td>
                                                </tr>
                                                <tr>
                                                    <td>Virus 2</td>
                                                    <td>02/01/2020</td>
                                                    <td>20</td>
                                                </tr>
                                                <tr>
                                                    <td>...</td>
                                                    <td>...</td>
                                                    <td>...</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    {config.dataDescription.singleRow === false && (
                                        <>
                                            <div class="question">
                                                <span>2. Which property in the dataset represents which series the row is describing?</span>
                                                <select onChange={(e) => {updateDescriptionProp('seriesKey', e.target.value)}}>
                                                    <option value="">Choose an option</option>
                                                    {Object.keys(config.data[0]).map(key => <option value={key}>{key}</option>)}
                                                </select>
                                            </div>
                                            <div class="question">
                                                <span>3. Which property in the dataset represents the X-axis, or geography value?</span>
                                                <select onChange={(e) => {updateDescriptionProp('xKey', e.target.value)}}>
                                                    <option value="">Choose an option</option>
                                                    {Object.keys(config.data[0]).map(key => <option value={key}>{key}</option>)}
                                                </select>
                                            </div>
                                            <div class="question">
                                                <span>4. Which property in the dataset represents the numeric value?</span>
                                                <select onChange={(e) => {updateDescriptionProp('valueKey', e.target.value)}}>
                                                    <option value="">Choose an option</option>
                                                    {Object.keys(config.data[0]).map(key => <option value={key}>{key}</option>)}
                                                </select>
                                            </div>
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