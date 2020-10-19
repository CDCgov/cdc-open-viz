import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const domContainer = document.querySelector('#react-container');

ReactDOM.render(
  <React.StrictMode>
    <App configUrl={domContainer.attributes['data-config'].value} />
  </React.StrictMode>,
  domContainer
);
