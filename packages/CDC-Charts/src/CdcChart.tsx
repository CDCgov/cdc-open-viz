import 'react-app-polyfill/ie11';
import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { LegendOrdinal, LegendItem, LegendLabel } from '@visx/legend';
import { scaleOrdinal } from '@visx/scale';
import PieChart from './components/PieChart.tsx';
import ComboChart from './components/ComboChart.tsx';
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

  // Generates color palette to pass to child chart component
  useEffect(() => {
    if(config.xAxis) {
      const colorPalettes = {
        'qualitative-bold': ['#377eb8', '#ff7f00', '#4daf4a', '#984ea3', '#e41a1c', '#ffff33', '#a65628', '#f781bf', '#3399CC'],
        'qualitative-soft': ['#A6CEE3', '#1F78B4', '#B2DF8A', '#33A02C', '#FB9A99', '#E31A1C', '#FDBF6F', '#FF7F00', '#ACA9EB'],
        'sequential-blue': ['#C6DBEF', '#9ECAE1', '#6BAED6', '#4292C6', '#2171B5', '#084594'],
        'sequential-green': ['#C7E9C0', '#A1D99B', '#74C476', '#41AB5D', '#238B45', '#005A32']
      };

      let palette = colorPalettes[config.palette] || colorPalettes['qualitative-bold'];
      let numberOfKeys = config.visualizationType === 'Pie' ? data.map(d => d[config.xAxis.dataKey]).length : config.seriesKeys.length

      while(numberOfKeys > palette.length) {
        palette = palette.concat(palette);
      }

      palette = palette.slice(0, numberOfKeys);
      
      const newColorScale = () => scaleOrdinal({
        domain: config.visualizationType === 'Pie' ? data.map(d => d[config.xAxis.dataKey]) : config.seriesKeys,
        range: palette,
      });

      setColorScale(newColorScale);
    }
  }, [config, data])

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

  const formatNumber = (num) => {
    if (!config.dataFormat) return num;
    if (typeof num !== 'number') num = parseFloat(num);
    if (config.dataFormat.roundTo !== -1) num = num.toFixed(config.dataFormat.roundTo);
    if (config.dataFormat.commas) num = num.toLocaleString('en-US');
    return config.dataFormat.prefix + num + config.dataFormat.suffix;
  };

  // Destructure items from config for more readable JSX
  const { legend, title, visualizationType } = config;

  // Select appropriate chart type
  const chartComponents = {
    'Bar' : <ComboChart numberFormatter={formatNumber} />,
    'Line' : <ComboChart numberFormatter={formatNumber} />,
    'Combo': <ComboChart numberFormatter={formatNumber} />,
    'Pie' : <PieChart numberFormatter={formatNumber} />,
  }

  if(true === loading) {
    return <div className="loader"></div>;
  }

  return (
    <Context.Provider value={{ config, data, seriesHighlight, colorScale, dimensions}}>
      <div className="cdc-visualization-container mt-4">
        {/* Title & Visualization */}
        <div className={`chart-container ${config.legend.hide ? 'legend-hidden' : ''}`}>
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
      {/* Description */}
      <div className="chart-description" dangerouslySetInnerHTML={{__html: config.description}}></div>              
      {/* Data Table */}
      <DataTable numberFormatter={formatNumber} />
    </Context.Provider>
  );
}
