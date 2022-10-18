import { publish, subscribe } from '@cdc/core/helpers/events';
import React from 'react';	
import { render } from 'react-dom';	

import CdcChart from './CdcChart';	

const domContainers = document.querySelectorAll('.react-container');	

let isEditor = window.location.href.includes('editor=true');

domContainers.forEach((domContainer) => {	
  render(	
    <React.StrictMode>
      <CdcChart 
        configUrl={domContainer.attributes['data-config'].value} 
        isEditor={isEditor} 
      />	
    </React.StrictMode>,	
    domContainer,	
  );	
});
