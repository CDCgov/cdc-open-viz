import 'react-app-polyfill/ie11';
import React, { useState, useEffect } from 'react';
import Context from './context';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';

import './styles.scss';

export default function App({ configUrl }) {
  const [pageContext, setPageContext] = useState({ title: 'CDC React Starter Kit' });

  useEffect(() => {
    if (!pageContext.error) {
      if (!pageContext.config) {
        fetch(configUrl)
          .then((response) => response.json())
          .then(
            (response) => {
              setPageContext({ title: pageContext.title, config: response });
            },
            () => {
              setPageContext({ title: pageContext.title, error: true });
            }
          );
      } else if (pageContext.data === undefined && pageContext.config.dataUrl !== undefined) {
        fetch(pageContext.config.dataUrl)
          .then((dataResponse) => dataResponse.json())
          .then((dataResponse) => {
            setPageContext({ title: pageContext.title, config: pageContext.config, data: dataResponse });
          }, () => {
            setPageContext({ title: pageContext.title, config: pageContext.config, error: true });
          });
      }
    }
  });

  return (
    <Context.Provider value={{ pageContext, setPageContext }}>
      {
        (() => {
          if (pageContext.error) {
            return <p>There was an error loading the visualization</p>;
          }

          if (pageContext.config && pageContext.data) {
            switch (pageContext.config.visualizationType) {
              case 'Bar':
                return <BarChart />;
              case 'Line':
                return <LineChart />;
              default:
                return <p>Error rendering visualization configuration</p>;
            }
          }

          return <p>Loading...</p>;
        })()
      }
    </Context.Provider>
  );
}
