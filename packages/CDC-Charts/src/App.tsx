import 'react-app-polyfill/ie11';
import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import Context from './context.tsx';
import BarChart from './components/BarChart.tsx';
import LineChart from './components/LineChart.tsx';

import './styles.scss';

export default function App({ configUrl, element }) {
  const [pageContext, setPageContext] = useState({
    title: 'CDC React Starter Kit',
    config: undefined,
    data: undefined,
    error: false,
    dimensions: {
      width: 0,
      height: 0,
    },
    resizeInit: false,
  });

  const debounce = useRef(null);

  const onResize = useCallback(() => {
    if (pageContext.dimensions.width !== element.offsetWidth
      || pageContext.dimensions.height !== element.offsetHeight) {
      if (debounce) {
        clearTimeout(debounce.current);
      }

      debounce.current = setTimeout(() => {
        setPageContext({
          title: pageContext.title,
          config: pageContext.config,
          data: pageContext.data,
          error: pageContext.error,
          dimensions: {
            width: element.offsetWidth,
            height: element.offsetHeight,
          },
          resizeInit: true,
        });
      }, 250);
    }
  }, [element.offsetHeight, element.offsetWidth, pageContext.config, pageContext.data, pageContext.dimensions.height, pageContext.dimensions.width, pageContext.error, pageContext.title]);

  useEffect(() => {
    if (!pageContext.resizeInit) {
      window.addEventListener('resize', onResize);
      onResize();

      setPageContext({
        title: pageContext.title,
        config: pageContext.config,
        data: pageContext.data,
        error: pageContext.error,
        dimensions: pageContext.dimensions,
        resizeInit: true,
      });
    }

    if (!pageContext.error) {
      if (!pageContext.config) {
        fetch(configUrl)
          .then((response) => response.json())
          .then(
            (response) => {
              if (!response.padding) response.padding = {};
              if (!response.padding.left) response.padding.left = 80;

              setPageContext({
                title: pageContext.title,
                config: response,
                data: pageContext.data,
                error: pageContext.error,
                dimensions: pageContext.dimensions,
                resizeInit: true,
              });
            },
            () => {
              setPageContext({
                title: pageContext.title,
                config: pageContext.config,
                data: pageContext.data,
                error: true,
                dimensions: pageContext.dimensions,
                resizeInit: true,
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
              dimensions: pageContext.dimensions,
              resizeInit: true,
            });
          }, () => {
            setPageContext({
              title: pageContext.title,
              config: pageContext.config,
              data: pageContext.data,
              error: true,
              dimensions: pageContext.dimensions,
              resizeInit: true,
            });
          });
      }
    }
  }, [pageContext.resizeInit, pageContext.error, pageContext.title, pageContext.config, pageContext.data, pageContext.dimensions, onResize, configUrl]);

  return (
    <Context.Provider value={{ pageContext, setPageContext }}>
      <h1 id="chart-title">
        {pageContext.config ? pageContext.config.title : ''}
      </h1>
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
