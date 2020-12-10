import React from 'react';
import ReactDOM from 'react-dom';

import CdcChart from './CdcChart.tsx';

const domContainers = document.querySelectorAll('.react-container');

domContainers.forEach((domContainer) => {
  ReactDOM.render(
    <React.StrictMode>
      <CdcChart configUrl="/assets/planet-example-config.json" />
      <CdcChart configUrl="/assets/temp-example-config.json" />
      <CdcChart configUrl="/assets/planet-pie-example-config.json" />
    </React.StrictMode>,
    domContainer,
  );
});
