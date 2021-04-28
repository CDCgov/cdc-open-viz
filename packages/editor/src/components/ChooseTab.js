import React, { useContext, useEffect } from 'react';
import '../scss/choose-vis-tab.scss';

import GlobalState from '../context';

import BarIcon from '../assets/icons/chart-bar-solid.svg';
import LineIcon from '../assets/icons/chart-line-solid.svg';
import PieIcon from '../assets/icons/chart-pie-solid.svg';
import GlobeIcon from '../assets/world-graphic.svg';
import UsaIcon from '../assets/usa-graphic.svg';

/**
 * IconButton component
 */

export default function ChooseTab() { 
    const {config, setConfig, setGlobalActive, tempConfig, setTempConfig} = useContext(GlobalState);

    useEffect(() => {
        if(tempConfig !== null) {
            setConfig(tempConfig)
            setTempConfig(null)
        }
    })

    const IconButton = ({icon, label, type, subType}) => {
        let isSubType = false

        if(type === 'map' && config.general) {
            let geoType = config.general.geoType
            isSubType = (subType === geoType)
        }

        if(type === 'chart') {
            isSubType = (subType === config.visualizationType)
        }

        let classNames = (config.type === type && isSubType) ? 'active' : ''
    
        let setTypes = () => {
            let newConfig = {...config, type}

            if(type === 'map') {
                newConfig.general = {
                    ...newConfig.general,
                    geoType: subType
                }
            } else {
                newConfig.visualizationType = subType
            }

            setConfig(newConfig)
        }
        
        return (<button className={classNames} onClick={() => setTypes()} aria-label={label}>{icon}<span className="mt-1">{label}</span></button>)
    }

    return (
        <div className="choose-vis">
            <h2 style={{fontSize: "1.4rem"}}>Charts</h2>
            <ul className="grid">
                <li><IconButton label="Bar" type="chart" subType="Bar" icon={ <BarIcon /> } /></li>
                <li><IconButton label="Line" type="chart" subType="Line" icon={ <LineIcon /> } /></li>
                <li><IconButton label="Pie" type="chart" subType="Pie" icon={ <PieIcon /> } /></li>
            </ul>
            <h2 className="mt-4" style={{fontSize: "1.4rem"}}>Maps</h2>
            <ul className="grid">
                <li><IconButton label="United States" type="map" subType="us" icon={ <UsaIcon /> } /></li>
                <li><IconButton label="World" type="map" subType="world" icon={ <GlobeIcon /> } /></li>
            </ul>
            {config.type && <div className="mt-3">
                <span className="btn btn-primary" style={{float: 'right'}} onClick={() => setGlobalActive(2)}>Configure your <span className="capitalize">{config.type}</span> &raquo;</span>
            </div>}
        </div>
    )
}