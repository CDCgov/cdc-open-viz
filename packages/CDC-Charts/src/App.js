import 'react-app-polyfill/ie11';
import React, { useState } from 'react';
import Context from './context';
import Example from './components/Example';

import './styles.scss';

export default function App({ configUrl }) {
  const [pageContext, setPageContext] = useState({ title: 'CDC React Starter Kit', configUrl });

  return (
    <Context.Provider value={{ pageContext, setPageContext }}>
      <Example backgroundColor="#F5F5F5" />
    </Context.Provider>
  );
}
