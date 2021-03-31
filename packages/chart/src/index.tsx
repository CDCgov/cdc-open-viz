import React from 'react';	
import { render } from 'react-dom';	

import CdcChart from './CdcChart.tsx';	

const domContainers = document.querySelectorAll('.react-container');	

domContainers.forEach((domContainer) => {	
  render(	
    <React.StrictMode>
      <CdcChart configUrl={domContainer.attributes['data-config'].value} />	
    </React.StrictMode>,	
    domContainer,	
  );	
});
