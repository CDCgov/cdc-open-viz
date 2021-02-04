import React from 'react';
import ReactDOM from 'react-dom';
import CdcEditor from './CdcEditor';

// Allow URL query to preselect a tab in standalone mode
const standaloneParams = new URLSearchParams(window.location.search);

let activeTab = Number.parseInt( standaloneParams.get('active') ) - 1 || 0;

ReactDOM.render(
  <React.StrictMode>
    <CdcEditor startingTab={activeTab} />
  </React.StrictMode>,
  document.querySelector('#react-container')
);
