import React, { useState, useEffect, useRef } from 'react';
import '../scss/choose-vis-tab.scss';
import TabPane from './TabPane';
import Tabs from './Tabs';

import AreaIcon from '../assets/icons/chart-area-solid.svg';
import BarIcon from '../assets/icons/chart-bar-solid.svg';
import LineIcon from '../assets/icons/chart-line-solid.svg';
import PieIcon from '../assets/icons/chart-pie-solid.svg';
import GlobeIcon from '../assets/icons/globe-asia-solid.svg';
import UsaIcon from '../assets/icons/globe-asia-solid.svg';

/**
 * IconButton component
 */
const IconButton = ({icon, label}) => 
    <button className="btn btn-primary invert" aria-label={label}>{icon}</button>;

export default function ChooseVisTab() { 
    return (
        <div className="container-fuild">
            <div className="row">
                <div className="col choose-vis">
                    {/* Experimenting with an accessible,
                    no js alt to a select - IE not supported 
                    won't be needed until we have more charts
                    <div className="dropdown " role="navigation">
                        <button>View All Visualizations</button>
                        <nav className="">
                            <button>View Charts</button>
                            <button>View Maps</button>
                        </nav>
                    </div>*/}

                    <div id="visualizationList">
                        <IconButton label="Bar Chart" icon={ <BarIcon /> } />
                        <IconButton label="Area Chart" icon={ <AreaIcon /> } />
                        <IconButton label="Pie Chart" icon={ <PieIcon /> } />
                        <IconButton label="Line Chart" icon={ <LineIcon /> } />
                        <IconButton label="World Map" icon={ <GlobeIcon /> } />
                        <IconButton label="United States Map" icon={ <UsaIcon /> } />
                    </div>
                    
                </div>
                <div className="col-sm-8 choos-vis-preview">
                    <Tabs>
                        <TabPane title="Single Visualization">
                            Single Visualization Here
                        </TabPane>
                        <TabPane title="Dashboard Builder">
                            Dashboard Here
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}