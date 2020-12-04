import 'react-app-polyfill/ie11';
import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { LegendOrdinal, LegendItem, LegendLabel } from '@visx/legend';
import { scaleOrdinal } from '@visx/scale';
import BarChart from './components/BarChart.tsx';
import LineChart from './components/LineChart.tsx';
import Context from './context.tsx';

import './styles.scss';

export default function App({ configUrl, element }) {
  const [pageContext, setPageContext] = useState({
    config: undefined,
    data: undefined,
    dimensions: {
      width: 0,
      height: 0,
      chartWidth: 0,
      legendWidth: 0,
    },
    seriesHighlight: [],
    colorScale: undefined,
  });
  const [resizeInit, setResizeInit] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [tableExpanded, setTableExpanded] = useState<number>(-1);
  const [tableSortConfig, setTableSortConfig] = useState<any>({ sortKey: '', sortReverse: false });

  const viewportCutoff = 900;
  const legendPercent = 0.2;
  const legendGlyphSize = 15;

  const debounce = useRef(null);

  const onResize = useCallback(() => {
    if (pageContext.dimensions.width !== element.offsetWidth
      || pageContext.dimensions.height !== element.offsetHeight) {
      if (debounce) {
        clearTimeout(debounce.current);
      }

      debounce.current = setTimeout(() => {
        let chartWidth = element.offsetWidth;
        let legendWidth = element.offsetWidth;
        if ((pageContext.config && !pageContext.config.legend.hide) && element.offsetWidth > viewportCutoff) {
          chartWidth = element.offsetWidth * (1 - legendPercent);
          legendWidth = element.offsetWidth - chartWidth;
        }

        setPageContext({
          config: pageContext.config,
          data: pageContext.data,
          dimensions: {
            width: element.offsetWidth,
            height: element.offsetHeight,
            chartWidth: chartWidth,
            legendWidth: legendWidth,
          },
          seriesHighlight: pageContext.seriesHighlight,
          colorScale: pageContext.colorScale,
        });
      }, 250);
    }
  }, [element.offsetHeight, element.offsetWidth, pageContext.config, pageContext.data, pageContext.dimensions.height, pageContext.dimensions.width, pageContext.colorScale, pageContext.seriesHighlight]);

  useEffect(() => {
    if (!error) {
      if (!pageContext.config) {
        fetch(configUrl)
          .then((response) => response.json())
          .then(
            (response) => {
              if (!response.padding) response.padding = {};
              if (!response.padding.left) response.padding.left = 80;

              setPageContext({
                config: response,
                data: pageContext.data,
                dimensions: pageContext.dimensions,
                seriesHighlight: pageContext.seriesHighlight,
                colorScale: pageContext.colorScale,
              });
            },
            () => {
              setError(true);
            },
          );
      } else if (pageContext.data === undefined && pageContext.config.dataUrl !== undefined) {
        fetch(pageContext.config.dataUrl)
          .then((dataResponse) => dataResponse.json())
          .then((dataResponse) => {
            setPageContext({
              config: pageContext.config,
              data: dataResponse,
              dimensions: pageContext.dimensions,
              seriesHighlight: pageContext.seriesHighlight,
              colorScale: pageContext.colorScale,
            });
          }, () => {
            setError(true);
          });
      }

      if (pageContext.config && !pageContext.colorScale) {
        setPageContext({
          config: pageContext.config,
          data: pageContext.data,
          dimensions: pageContext.dimensions,
          seriesHighlight: pageContext.seriesHighlight,
          colorScale: scaleOrdinal<string, string>({
            domain: pageContext.config.seriesKeys,
            range: ['#222299', '#229922', '#992229'],
          }),
        });
      }

      if (pageContext.config && !resizeInit) {
        window.addEventListener('resize', onResize);
        setTimeout(() => {
          onResize();
        }, 250);

        setResizeInit(true);
      }
    }
  }, [pageContext.config, pageContext.data, pageContext.dimensions, onResize, configUrl, error, pageContext.colorScale, pageContext.seriesHighlight, resizeInit]);

  const tableSort = (a, b) => {
    if (tableSortConfig.sortKey) {
      let pos = 1;
      let neg = -1;

      if (tableSortConfig.sortReverse) {
        pos = -1;
        neg = 1;
      }

      if (a[tableSortConfig.sortKey] > b[tableSortConfig.sortKey]) {
        return neg;
      } else if (b[tableSortConfig.sortKey] > a[tableSortConfig.sortKey]) {
        return pos;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  };

  const isTableExpanded = () => {
    if (tableExpanded !== -1) {
      return tableExpanded === 1 ? true : false;
    } else {
      if (pageContext.config.table.expanded) {
        return true;
      } else {
        return false;
      }
    }
  };

  const changeTableExpanded = () => {
    if (tableExpanded !== -1) {
      setTableExpanded((tableExpanded + 1) % 2);
    } else {
      setTableExpanded(pageContext.config.table.expanded ? 0 : 1);
    }
  };

  const highlight = (label) => {
    const newSeriesHighlight = [];
    pageContext.seriesHighlight.forEach((value) => {
      newSeriesHighlight.push(value);
    });
    if (newSeriesHighlight.indexOf(label.datum) !== -1) {
      newSeriesHighlight.splice(newSeriesHighlight.indexOf(label.datum), 1);
    } else {
      newSeriesHighlight.push(label.datum);
    }

    setPageContext({
      config: pageContext.config,
      data: pageContext.data,
      dimensions: pageContext.dimensions,
      seriesHighlight: newSeriesHighlight,
      colorScale: pageContext.colorScale,
    });
  };

  return (
    <div className="cdc-visualization-container">
      { pageContext.config && pageContext.data && pageContext.colorScale && pageContext.dimensions.width !== 0 ? (
        <div style={{ width: pageContext.dimensions ? pageContext.dimensions.width : '100%' }}>
          <h1 className="chart-title">
            {pageContext.config ? pageContext.config.title : ''}
          </h1>

          <div className="chart-container" style={{ width: pageContext.dimensions.chartWidth }}>
            <Context.Provider value={{ pageContext, setPageContext }}>
              {
                (() => {
                  if (error) {
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
          </div>

          <div className="legend-container" hidden={pageContext.config.legend.hide} style={{ width: pageContext.dimensions.legendWidth }}>
            <h2>{pageContext.config.legend.label}</h2>
            <LegendOrdinal
              scale={pageContext.colorScale}
              itemDirection="row"
              labelMargin="0 20px 0 0"
              shapeMargin="0 10px 0"
            >{labels => (
              <div style={{ display: 'flex', flexDirection: pageContext.dimensions.width > viewportCutoff ? 'column-reverse' : 'row' }}>
                {labels.map((label, i) => (
                  <LegendItem
                    tabIndex={0}
                    key={`legend-quantile-${i}`}
                    margin="0 5px"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        highlight(label);
                      }
                    }}
                    onClick={() => {
                      highlight(label);
                    }}
                  >
                    <svg width={legendGlyphSize} height={legendGlyphSize}>
                      <rect fill={label.value} width={legendGlyphSize} height={legendGlyphSize} />
                    </svg>
                    <LegendLabel align="left" margin="0 0 0 4px">
                      {label.text}
                    </LegendLabel>
                  </LegendItem>
                ))}
              </div>
            )}
            </LegendOrdinal>
          </div>

          <div className="table-container">
            <table>
              <caption tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter') changeTableExpanded(); }} onClick={changeTableExpanded}>
                {pageContext.config.table.label}
                <span className="table-indicator">{isTableExpanded() ? '-' : '+'}</span>
              </caption>
              <thead hidden={!isTableExpanded()}>
                <tr>
                  <td>&nbsp;</td>
                  {pageContext.config.seriesKeys.map((key, index) => (
                    <th key={`table-header-item-${index}`} tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter') { setTableSortConfig({ sortKey: key, sortReverse: !tableSortConfig.sortReverse }); } }} onClick={() => { setTableSortConfig({ sortKey: key, sortReverse: !tableSortConfig.sortReverse }); }}>{key}
                      <span hidden={tableSortConfig.sortKey !== key} className={'table-sort-indicator ' + (tableSortConfig.sortReverse ? 'up' : 'down')}>
                        ^
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody hidden={!isTableExpanded()}>
                {[...pageContext.data].sort(tableSort).map((d, rowIndex) => (
                  <tr key={`table-row-${rowIndex}`}>
                    <th>{d[pageContext.config.xAxis.dataKey]}</th>
                    {pageContext.config.seriesKeys.map((key, colIndex) => <td key={`table-item-${rowIndex}-${colIndex}`}>{d[key]}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : <div className="loader"></div>}
    </div>
  );
}
