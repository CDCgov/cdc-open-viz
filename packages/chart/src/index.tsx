import React from 'react';
import ReactDOM from 'react-dom';

import CdcChart from './CdcChart';

ReactDOM.render(
  <React.StrictMode>
    <CdcChart configUrl="/assets/temp-example-config.json" />
    <CdcChart configUrl="/assets/planet-example-config.json" />
    <CdcChart configUrl="/assets/planet-combo-example-config.json" />
    <CdcChart configUrl="/assets/planet-pie-example-config.json" />
  </React.StrictMode>,
  document.querySelector('#react-container')
);
