import { publish, subscribe } from '@cdc/core/helpers/events';
import React from 'react';	
import { render } from 'react-dom';	

import CdcChart from './CdcChart';	

const domContainers = document.querySelectorAll('.react-container');	

let isEditor = window.location.href.includes('editor=true');

document.addEventListener('cove_loaded', (e) => {
  console.log('cove_loaded', e)
})

document.addEventListener('cove_updateConfig', (e) => {
  console.log('cove_updateConfig', e)
})

let select = (document.getElementById("cove_select")) as HTMLSelectElement;

select.addEventListener('change', function(e) {

  const getValues = () => {
    var values = Array.from(select.options).map(e => e.value);
    let externalFilters = {
      columnName: 'Race',
      active: select.value,
      values: values,
    }

    if(externalFilters.active === "") {
      console.log('pushing nada')
      publish('cove_filterData', [])
    } else {
      publish('cove_filterData', externalFilters)
    }
  }

  getValues()
});

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
