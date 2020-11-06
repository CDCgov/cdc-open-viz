import 'react-app-polyfill/ie11';
import React, { useState, useEffect } from 'react';
import Context from './context.tsx';
import BarChart from './components/BarChart.tsx';
import LineChart from './components/LineChart.tsx';

import './styles.scss';

export default function App({ configUrl }) {
  const [pageContext, setPageContext] = useState({
    title: 'CDC React Starter Kit',
    config: undefined,
    data: undefined,
    error: false,
  });

  useEffect(() => {
    if (!pageContext.error) {
      if (!pageContext.config) {
        fetch(configUrl)
          .then((response) => response.json())
          .then(
            (response) => {
              setPageContext({
                title: pageContext.title,
                config: response,
                data: pageContext.data,
                error: pageContext.error,
              });
            },
            () => {
              setPageContext({
                title: pageContext.title,
                config: pageContext.config,
                data: pageContext.data,
                error: true,
              });
            },
          );
      } else if (pageContext.data === undefined && pageContext.config.dataUrl !== undefined) {
        fetch(pageContext.config.dataUrl)
          .then((dataResponse) => dataResponse.json())
          .then((dataResponse) => {
            setPageContext({
              title: pageContext.title,
              config: pageContext.config,
              data: dataResponse,
              error: pageContext.error,
            });
          }, () => {
            setPageContext({
              title: pageContext.title,
              config: pageContext.config,
              data: pageContext.data,
              error: true,
            });
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
