import React, { useContext } from 'react';
import '../scss/choose-vis-tab.scss';

import GlobalState from '../context';

import AreaIcon from '../assets/icons/chart-area-solid.svg';
import BarIcon from '../assets/icons/chart-bar-solid.svg';
import LineIcon from '../assets/icons/chart-line-solid.svg';
import PieIcon from '../assets/icons/chart-pie-solid.svg';
import GlobeIcon from '../assets/world-graphic.svg';
import UsaIcon from '../assets/usa-graphic.svg';

/**
 * IconButton component
 */

export default function ChooseTab() { 
    const {type, setType, subType, setSubType, setGlobalActive} = useContext(GlobalState);

    const IconButton = ({icon, label, type: vizType, subType: vizSubType}) => {
        let classNames = (type === vizType && subType === vizSubType) ? 'active' : ''
    
        let setTypes = () => {
            setType(vizType)
            setSubType(vizSubType)
        }
        
        return (<button className={classNames} onClick={() => setTypes()} aria-label={label}>{icon}<span className="mt-1">{label}</span></button>)
    }

    return (
        <div className="choose-vis">
            <h2>Charts</h2>
            <ul className="grid">
                <li><IconButton label="Bar" type="chart" subType="Bar" icon={ <BarIcon /> } /></li>
                <li><IconButton label="Line" type="chart" subType="Line" icon={ <LineIcon /> } /></li>
                <li><IconButton label="Pie" type="chart" subType="Pie" icon={ <PieIcon /> } /></li>
            </ul>
            <h2 className="mt-4">Maps</h2>
            <ul className="grid">
                <li><IconButton label="United States" type="map" subType="us" icon={ <UsaIcon /> } /></li>
                <li><IconButton label="World" type="map" subType="world" icon={ <GlobeIcon /> } /></li>
            </ul>
            {type && <div className="mt-3">
                <span className="btn btn-primary" style={{float: 'right'}} onClick={() => setGlobalActive(2)}>Configure your <span className="capitalize">{type}</span> &raquo;</span>
            </div>}
        </div>
    )
}