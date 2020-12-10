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
import PieChart from './components/PieChart.tsx';
import Context from './context';
import DataTable from './components/DataTable.tsx';

import './styles.scss';

export default function CdcChart({ configUrl }) {

  const [colorScale, setColorScale] = useState<any>(null);

  interface keyable {
    [key: string]: any  
  }

  const [config, setConfig] = useState<keyable>({
    seriesKeys: [],
    legend: [],
    title: null
  });

  const [data, setData] = useState<Array<Object>>([]);

  // TODO: Discuss as a group. We should use aspect ratios instead of trying to manually determine this.
  const [dimensions, setDimensions] = useState<Array<number>>([960,540]);

  const [loading, setLoading] = useState<Boolean>(true);

  const [seriesHighlight, setSeriesHighlight] = useState<Array<Number>>([]);

  const legendPercent = 0.2;
  const legendGlyphSize = 15;

  const loadConfig = async () => {
    const response = await fetch(configUrl);
    const responseObj = await response.json();

    // If data is included through a URL, fetch that and store
    if(responseObj.dataUrl) {
      const data = await fetch(responseObj.dataUrl);
      const dataObj = await data.json();

      setData(dataObj);
    }

    setConfig(responseObj);
    setLoading(false);
  }

  // Load data when component first mounts
  useEffect(() => {
    loadConfig();
  }, []);

  useEffect(() => console.log(colorScale), [colorScale])

  useEffect(() => {
    const newColorScale = () => scaleOrdinal({
      domain: config.seriesKeys,
      range: ['#222299', '#229922', '#992229'],
    });
  
    setColorScale(newColorScale);
  }, [config])

  const highlight = (label) => {
    const newSeriesHighlight = [];
    seriesHighlight.forEach((value) => {
      newSeriesHighlight.push(value);
    });

    if (newSeriesHighlight.indexOf(label.datum) !== -1) {
      newSeriesHighlight.splice(newSeriesHighlight.indexOf(label.datum), 1);
    } else {
      newSeriesHighlight.push(label.datum);
    }

    setSeriesHighlight(newSeriesHighlight);
  };

  // Destructure items from config for more readable JSX
  const { legend, title, visualizationType } = config;

  // Select appropriate chart type
  const chartComponents = {
    'Bar' : <BarChart />,
    'Line' : <LineChart />,
    'Pie' : <PieChart />
  }

  if(true === loading) {
    return <div className="loader"></div>;
  }

  return (
    <Context.Provider value={{ config, data, seriesHighlight, colorScale, dimensions}}>
      <div className="cdc-visualization-container mt-4">
        {/* Title & Visualization */}
        <div className="chart-container">
          {title && <h1 className="chart-title">{title}</h1>}
          {chartComponents[visualizationType]}
        </div>
        {/* Legend */}
        <div className="legend-container" hidden={legend.hide}>
          <h2>{legend.label}</h2>
          <LegendOrdinal
            scale={colorScale}
            itemDirection="row"
            labelMargin="0 20px 0 0"
            shapeMargin="0 10px 0"
            >
              {labels => (
                <div>
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
      </div>
      {/* Data Table */}
      <DataTable />
    </Context.Provider>
  );
}
