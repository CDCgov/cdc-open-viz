import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.tsx';

const domContainers = document.querySelectorAll('.react-container');

domContainers.forEach((domContainer) => {
  ReactDOM.render(
    <React.StrictMode>
      <App configUrl={domContainer.attributes['data-config'].value} element={domContainer} />
    </React.StrictMode>,
    domContainer,
  );
});
