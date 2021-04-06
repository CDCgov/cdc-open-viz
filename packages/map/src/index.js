import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import HexMap from './components/HexMap';
// import CdcMap from './CdcMap';

// Editor flag available when working in standalone mode
let isEditor = window.location.href.includes('editor=true');

ReactDOM.render(
  <StrictMode>
    {/* <CdcMap isEditor={isEditor} /> */}
    <HexMap  width={1000} height={500} />
  </StrictMode>,
  document.querySelector('#react-container')
);
