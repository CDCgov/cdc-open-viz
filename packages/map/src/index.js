import React from 'react';
import ReactDOM from 'react-dom';

import CdcMap from './CdcMap';

// Editor flag available when working in standalone mode
let isEditor = window.location.href.includes('editor=true');

ReactDOM.render(
  <React.StrictMode>
    <CdcMap isEditor={isEditor} />
  </React.StrictMode>,
  document.querySelector('#react-container')
);
