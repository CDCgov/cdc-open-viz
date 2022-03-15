import React from 'react';
import { render } from 'react-dom';
import CdcHtmlInclude from './CdcHtmlInclude'

const domContainers = document.querySelectorAll('.react-container');

let isEditor = window.location.href.includes('editor=true');

domContainers.forEach((domContainer) => {
  render(
    <React.StrictMode>
      <CdcHtmlInclude configUrl={domContainer.attributes['data-config'].value} isEditor={isEditor} />
    </React.StrictMode>,
    domContainer
  );
});
