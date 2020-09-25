import 'react-app-polyfill/ie11';
import React, { useState } from 'react';
import Context from './context';
import Example from './components/Example';

import './styles.scss';

export default () => {
	const [ pageTitle, setPageTitle ] = useState( 'CDC React Starter Kit' );

	return (
		<Context.Provider value={ { pageTitle, setPageTitle } }>
			<Example backgroundColor="#F5F5F5" />
		</Context.Provider>
	);
};
