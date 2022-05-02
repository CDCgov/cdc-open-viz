import React, { useContext, useEffect } from 'react';
import '../scss/choose-vis-tab.scss';

import GlobalState from '../context';

import DashboardIcon from '../assets/icons/dashboard.svg';
import BarIcon from '@cdc/core/assets/chart-bar-solid.svg';
import LineIcon from '@cdc/core/assets/chart-line-solid.svg';
import PieIcon from '@cdc/core/assets/chart-pie-solid.svg';
import GlobeIcon from '@cdc/core/assets/world-graphic.svg';
import UsaIcon from '@cdc/core/assets/usa-graphic.svg';
import DataBiteIcon from '@cdc/core/assets/data-bite-graphic.svg';
import WaffleChartIcon from '@cdc/core/assets/icon-grid.svg';
import MarkupIncludeIcon from '@cdc/core/assets/icon-code.svg';
import AlabamaGraphic from '@cdc/core/assets/alabama-graphic.svg';
import PairedBarIcon from '@cdc/core/assets/paired-bar.svg';

export default function ChooseTab() {
    const {config, setConfig, setGlobalActive, tempConfig, setTempConfig} = useContext(GlobalState);

    useEffect(() => {
        if(tempConfig !== null) {
            setConfig(tempConfig)
            setTempConfig(null)
        }
    })

    /**
     * IconButton component
     */
    const IconButton = ({icon, label, type, subType, barType}) => {
        let isSubType = false

        if(type === 'map' && config.general) {
            let geoType = config.general.geoType
            isSubType = (subType === geoType)
        }

        if(type === 'chart') {
            isSubType = (subType === config.visualizationType)
        }

        if(type === 'dashboard' || type === 'data-bite' || type === 'waffle-chart' || type === 'markup-include') isSubType = true;

        let classNames = (config.type === type && isSubType) ? 'active' : ''

        let setTypes = () => {
            // Only take the data/data source properties from existing config. Covers case of selecting a new visualization.
            let newConfig = {
                newViz: true,
                datasets: {},
                type
            }

            if(type === 'map') {
                newConfig.general = {
                    ...newConfig.general,
                    geoType: subType
                }
            } else {
                newConfig.visualizationType = subType
            }

            setConfig(newConfig)
            setGlobalActive(1)
        }

        return (<button className={classNames} onClick={() => setTypes()} aria-label={label}>{icon}<span className="mt-1">{label}</span></button>)
    }

    return (
        <div className="choose-vis">
            <div className="heading-2">General</div>
            <ul className="grid">
                <li><IconButton label="Dashboard" type="dashboard" icon={ <DashboardIcon /> } /></li>
                <li><IconButton label="Data Bite" type="data-bite" icon={<DataBiteIcon />} /></li>
                <li><IconButton label="Waffle Chart" type="waffle-chart" icon={ <WaffleChartIcon /> } /></li>
                <li><IconButton label="Markup Include" type="markup-include" icon={ <MarkupIncludeIcon /> } /></li>
            </ul>
            <div className="heading-2">Charts</div>
            <ul className="grid">
                <li><IconButton label="Bar" type="chart" subType="Bar" icon={ <BarIcon /> } /></li>
                <li><IconButton label="Line" type="chart" subType="Line" icon={ <LineIcon /> } /></li>
                <li><IconButton label="Pie" type="chart" subType="Pie" icon={ <PieIcon /> } /></li>
                {/* <li><IconButton label="Paired Bar" type="chart" subType="Paired Bar" icon={ <PairedBarIcon /> } /></li> */}
            </ul>
            <div className="heading-2">Maps</div>
            <ul className="grid">
                <li><IconButton label="U.S. State- or County-Level" type="map" subType="us" icon={ <UsaIcon /> } /></li>
                <li><IconButton label="World" type="map" subType="world" icon={ <GlobeIcon /> } /></li>
                <li><IconButton label="U.S. State" type="map" subType="single-state" icon={ <AlabamaGraphic /> } /></li>
            </ul>
        </div>
    )
}
