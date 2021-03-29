import React, { useState, useRef, useEffect, useCallback } from 'react';

import { LegendOrdinal, LegendItem, LegendLabel } from '@visx/legend';
import { scaleOrdinal } from '@visx/scale';
import parse from 'html-react-parser';

import PieChart from './components/PieChart.tsx';
import LinearChart from './components/LinearChart.tsx';
import DataTable from './components/DataTable.tsx';
import Context from './context';
import defaults from './data/initial-state';

import './scss/main.scss';

export default function CdcChart(
  { configUrl, configObj } : 
  { configUrl?: string, configObj?: any }
) {

  const [colorScale, setColorScale] = useState<any>(null);

  interface keyable {
    [key: string]: any  
  }

  const [config, setConfig] = useState<keyable>({});

  const [data, setData] = useState<Array<Object>>([]);

  const [loading, setLoading] = useState<Boolean>(true);

  const [seriesHighlight, setSeriesHighlight] = useState<Array<String>>([]);

  const legendGlyphSize = 15;
  const legendGlyphSizeHalf = legendGlyphSize / 2;

  const loadConfig = async () => {
    let response = configObj || await (await fetch(configUrl)).json();

    // If data is included through a URL, fetch that and store
    let data = response.data ?? {}

    if(response.dataUrl) {
      const dataString = await fetch(response.dataUrl);

      data = await dataString.json();
    }

    setData(data);

    let newConfig = {...defaults, ...response}

    // Deeper copy
    Object.keys(defaults).forEach( key => {
      if(newConfig[key] && 'object' === typeof newConfig[key]) {
        newConfig[key] = {...newConfig[key], ...defaults[key]}
      }
    })

     console.log({newConfig})

    if(newConfig.visualizationType === 'Bar' && newConfig.visualizationSubType === 'horizontal'){
      let tempAxis = newConfig.yAxis;
      newConfig.yAxis = newConfig.xAxis;
      newConfig.xAxis = tempAxis;
      newConfig.horizontal = true;
    }

    if(newConfig.seriesLabels){
      newConfig.seriesLabelsAll = [];
      newConfig.seriesKeys.forEach((seriesKey) => {
        newConfig.seriesLabelsAll.push(newConfig.seriesLabels[seriesKey])
      });
    }

    setConfig(newConfig);
  }

  // Sorts data series for horizontal bar charts
  const sortData = (a, b) => {
    let sortKey = config.visualizationType === 'Bar' && config.visualizationSubType === 'horizontal' ? config.xAxis.dataKey : config.yAxis.sortKey;
    let aData = parseFloat(a[sortKey]);
    let bData = parseFloat(b[sortKey]);

    if(aData < bData){
      return config.sortData === 'ascending' ? 1 : -1;
    } else if (aData > bData){
      return config.sortData === 'ascending' ? -1 : 1;
    } else {
      return 0;
    }
  }

  // Load data when component first mounts
  useEffect(() => {
    loadConfig();
  }, []);

  // Generates color palette to pass to child chart component
  useEffect(() => {
    if(data && config.xAxis) {
      const colorPalettes = {
        'qualitative-bold': ['#377eb8', '#ff7f00', '#4daf4a', '#984ea3', '#e41a1c', '#ffff33', '#a65628', '#f781bf', '#3399CC'],
        'qualitative-soft': ['#A6CEE3', '#1F78B4', '#B2DF8A', '#33A02C', '#FB9A99', '#E31A1C', '#FDBF6F', '#FF7F00', '#ACA9EB'],
        'sequential-blue': ['#C6DBEF', '#9ECAE1', '#6BAED6', '#4292C6', '#2171B5', '#084594'],
        'sequential-blue-reverse': ['#084594', '#2171B5', '#4292C6', '#6BAED6', '#9ECAE1', '#C6DBEF'],
        'sequential-green': ['#C7E9C0', '#A1D99B', '#74C476', '#41AB5D', '#238B45', '#005A32']
      };

      let palette = colorPalettes[config.palette] || colorPalettes['qualitative-bold'];
      let numberOfKeys = config.visualizationType === 'Pie' ? data.map(d => d[config.xAxis.dataKey]).length : config.seriesKeys.length

      while(numberOfKeys > palette.length) {
        palette = palette.concat(palette);
      }

      palette = palette.slice(0, numberOfKeys);

      const newColorScale = () => scaleOrdinal({
        domain: config.visualizationType === 'Pie' ? data.map(d => d[config.xAxis.dataKey]) : (config.seriesLabelsAll || config.seriesKeys),
        range: palette,
      });

      setColorScale(newColorScale);
      setLoading(false);
    }

    if(config && data && config.sortData){
      data.sort(sortData);
    }
  }, [config, data])

  // Called on legend click, highlights/unhighlights the data series with the given label
  const highlight = (label) => {
    const newSeriesHighlight = [];
    seriesHighlight.forEach((value) => {
      newSeriesHighlight.push(value);
    });

    let newHighlight = label.datum;
    if(config.seriesLabels){
      for(let i = 0; i < config.seriesKeys.length; i++) {
        if(config.seriesLabels[config.seriesKeys[i]] === label.datum){
          newHighlight = config.seriesKeys[i];
          break;
        }
      }
    }

    if (newSeriesHighlight.indexOf(newHighlight) !== -1) {
      newSeriesHighlight.splice(newSeriesHighlight.indexOf(newHighlight), 1);
    } else {
      newSeriesHighlight.push(newHighlight);
    }

    setSeriesHighlight(newSeriesHighlight);
  };

  // Called on reset button click, unhighlights all data series
  const highlightReset = () => {
    setSeriesHighlight([]);
  }

  // Format numeric data based on settings in config
  const formatNumber = (num) => {
    if (!config.dataFormat) return num;
    if (typeof num !== 'number') num = parseFloat(num);
    if (config.dataFormat.roundTo !== -1) num = num.toFixed(config.dataFormat.roundTo);
    if (config.dataFormat.commas) num = num.toLocaleString('en-US');
    return config.dataFormat.prefix + num + config.dataFormat.suffix;
  };

  // Destructure items from config for more readable JSX
  const { legend, title, description, visualizationType } = config;

  // Select appropriate chart type
  const chartComponents = {
    'Bar' : <LinearChart />,
    'Line' : <LinearChart />,
    'Combo': <LinearChart />,
    'Pie' : <PieChart />,
  }

  // JSX for Legend
  const Legend = () => {
    let containerClasses = ['legend-container']

    if(config.legend.left) {
      containerClasses.push('left')
    }

    return (
      <div className={containerClasses.join(' ')} hidden={legend.hide}>
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
                  className={seriesHighlight.length > 0 && false === seriesHighlight.includes(label.text) ? 'inactive legend-item' : 'legend-item'}
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
                  <svg className="legend-color" width={legendGlyphSize} height={legendGlyphSize}>
                    <circle r={legendGlyphSizeHalf} cx={legendGlyphSizeHalf} cy={legendGlyphSizeHalf} fill={label.value} stroke="rgba(0,0,0,0.3)" />
                  </svg>
                  <LegendLabel align="left" margin="0 0 0 4px">
                    {label.text}
                  </LegendLabel>
                </LegendItem>
              ))}
              <button className={seriesHighlight.length > 0 ? `legend-reset ${config.theme} display` : `legend-reset ${config.theme}`} onClick={highlightReset}>Reset</button>
            </div>
          )}
        </LegendOrdinal>
      </div>
    )
  }

  // Prevent render if loading
  if(true === loading) {
    return <div className="loader"></div>;
  }
  // TEMPORARY
  let dimensions = {
    width: 900,
    height: 700
  }

  return (
    <Context.Provider value={{ config, data, seriesHighlight, colorScale, dimensions, formatNumber }}>
      <div className="cdc-open-viz-module type-chart">
          {/* Title */}
          {title.text && <h1 className={`chart-title ${config.theme}`}>{title.text}</h1>}
          {/* Legend, if set above */}
          {config.legend.above && <Legend />}
          {/* Visualization */}
          <div className={`chart-container ${config.legend.hide ? 'legend-hidden' : ''}`} style={{paddingLeft: config.padding.left}}>
            {chartComponents[visualizationType]}
          </div>
          {/* Legend, if set below */}
          {!config.legend.below && <Legend />}
          {/* Description */}
          {description && description.html && <div className="chart-description" style={{fontSize: description && (description.fontSize || 22)}}>{parse(description.html)}</div>}
          {/* Data Table */}
          <DataTable numberFormatter={formatNumber} />
      </div>
    </Context.Provider>
  );
}
