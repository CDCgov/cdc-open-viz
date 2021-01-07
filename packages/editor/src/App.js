import 'react-app-polyfill/ie11';
import React, { useState } from 'react';
import Context from './context';
import DataImport from './components/DataImport';

import './styles.scss';

export default function App() {
  const [pageTitle, setPageTitle] = useState('Data Import');

  return (
    <Context.Provider value={{ pageTitle, setPageTitle }}>
      <DataImport backgroundColor="#F5F5F5" />
    </Context.Provider>
  );
}
