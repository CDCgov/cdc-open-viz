import React, { useState, useEffect, useRef } from 'react';
import TabPane from './TabPane';
import Tabs from './Tabs';

export default function ChooseVis() {
    const testing = () => {
        debugger;
    }

    
    return (
        <div className="container-fuild">
            <div className="row">
                <div className="col choose-vis">
                    {/* Experimenting with an accessible,
                    no js alt to a select - IE not supported */}
                    <div className="dropdown " role="navigation">
                        <button>View All Visualizations</button>
                        <nav className="">
                            <button>View Charts</button>
                            <button>View Maps</button>
                        </nav>
                    </div>

                    <div class="form-group">
                        <label className="sr-only" for="visualizationFilter">Visualizations Filter</label>
                        <select class="form-control" id="visualizationFilter">
                            <option>View All Visualizations</option>
                            <option>View Charts</option>
                            <option>View Maps</option>
                        </select>
                    </div>

                    <div id="visualizationList">
                        Visualizations
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