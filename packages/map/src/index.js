import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import CdcMap from './CdcMap';

// Editor flag available when working in standalone mode
let isEditor = window.location.href.includes('editor=true');

const domContainer = document.querySelector('.react-container')

ReactDOM.render(
	<StrictMode>
		<CdcMap
			isEditor={isEditor}
			configUrl={domContainer.attributes['data-config'].value}
			containerEl={domContainer}
		/>
	</StrictMode>,
	domContainer
);
