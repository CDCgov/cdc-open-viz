import React, { useState, useRef, useEffect, useCallback } from 'react';

import { LegendOrdinal, LegendItem, LegendLabel } from '@visx/legend';
import { scaleOrdinal } from '@visx/scale';

import PieChart from './components/PieChart.tsx';
import LinearChart from './components/LinearChart.tsx';
import DataTable from './components/DataTable.tsx';
import Context from './context';

import './scss/main.scss';

export default function CdcChart(
  { configUrl, configObj, dataUrl, dataObj, element } : 
  { configUrl?: string, configObj?: any, dataUrl?: string, dataObj?: any, element: any }
) {

  const [colorScale, setColorScale] = useState<any>(null);

  interface keyable {
    [key: string]: any  
  }

  const [config, setConfig] = useState<keyable>({
    seriesKeys: [],
    legend: [],
    title: null,
    description: null
  });

  const [data, setData] = useState<Array<Object>>([]);

  const [dimensions, setDimensions] = useState<any>({});

  const [loading, setLoading] = useState<Boolean>(true);

  const [seriesHighlight, setSeriesHighlight] = useState<Array<Number>>([]);

  const [resizeInit, setResizeInit] = useState<boolean>(false);

  const legendGlyphSize = 15;
  const legendGlyphSizeHalf = legendGlyphSize / 2;
  const viewportCutoff = 900;

  const debounce = useRef(null);

  const loadConfig = async () => {
    let response = configObj || await (await fetch(configUrl)).json();

    // Sets default values for config
    response.initialized = true;
    response.title = response.title || {};
    response.title.fontSize = response.title.fontSize || 28;
    response.theme = response.theme || 'theme-blue';

    response.minHeight = response.minHeight || 400;

    response.padding = response.padding || {};
    response.padding.left = response.padding.left|| 0;
    response.padding.right = response.padding.right || 0;

    if(response.visualizationType === 'Bar' && response.visualizationSubType === 'horizontal'){
      let tempAxis = response.yAxis;
      response.yAxis = response.xAxis;
      response.xAxis = tempAxis;
      response.horizontal = true;
    }

    response.yAxis = response.yAxis || {};
    response.yAxis.size = response.yAxis.size || 50;
    response.yAxis.labelFontSize = response.yAxis.labelFontSize || 18;
    response.yAxis.tickFontSize = response.yAxis.tickFontSize || 16;
    response.xAxis = response.xAxis || {};
    response.xAxis.size = response.xAxis.size !== undefined ? response.xAxis.size : 75;
    response.xAxis.labelFontSize = response.xAxis.labelFontSize || 18;
    response.xAxis.tickFontSize = response.xAxis.tickFontSize || 16;
    response.xAxis.tickRotation = response.xAxis.tickRotation ? response.xAxis.tickRotation * -1 : 0;

    if(response.seriesLabels){
      response.seriesLabelsAll = [];
      response.seriesKeys.forEach((seriesKey) => {
        response.seriesLabelsAll.push(response.seriesLabels[seriesKey])
      });
    }

    // If data is included through a URL, fetch that and store
    if(dataUrl || response.dataUrl) {
      const dataString = await fetch(dataUrl || response.dataUrl);

      setData(await dataString.json());
    } else {
      setData(dataObj || response.data);
    }

    setConfig(response);
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

  // Handles resize event, sets width and height to pass to child components
  const onResize = useCallback(() => {
    if (dimensions.width !== element.offsetWidth) {	
      if (debounce) {
        clearTimeout(debounce.current);	
      }	

      const adjustedWidth = config.padding ? element.offsetWidth - config.padding.left - config.padding.right : element.offsetWidth;

      debounce.current = setTimeout(() => {
        setDimensions({	
            width: ((element.offsetWidth > viewportCutoff) && !config.legend.hide) ? (adjustedWidth * .75) : adjustedWidth,	
            height: Math.max(element.offsetWidth / 3, config.minHeight) + config.xAxis.size
        });	
      }, 250);	
    }	
  }, [element.offsetWidth, dimensions.width, config.legend]);

  // Load data when component first mounts
  useEffect(() => {
    loadConfig();
  }, []);

  // Adds resize handler
  useEffect(() => {
    if(config.initialized && !resizeInit) {
      window.addEventListener('resize', onResize);
      onResize();

      setResizeInit(true);
    }
  });

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
  const legendElements = <div className={`legend-container ${config.legend.left ? 'left': ''}`} hidden={legend.hide}>
  <h2>{legend.label}</h2>
  <LegendOrdinal
    scale={colorScale}
    itemDirection="row"
    labelMargin="0 20px 0 0"
    shapeMargin="0 10px 0"
    className="legend-item-container"
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
              <svg className="legend-color" width={legendGlyphSize} height={legendGlyphSize}>
                <circle r={legendGlyphSizeHalf} cx={legendGlyphSizeHalf} cy={legendGlyphSizeHalf} fill={label.value} stroke="rgba(0,0,0,0.3)" />
              </svg>
              <LegendLabel align="left" margin="0 0 0 4px">
                {label.text}
              </LegendLabel>
            </LegendItem>
          ))}
          <button className={`legend-reset btn ${config.theme}`} onClick={highlightReset}>Reset</button>
        </div>
      )}
    </LegendOrdinal>
  </div>;

  // Prevent render if loading
  if(true === loading) {
    return <div className="loader"></div>;
  }

  return (
    <Context.Provider value={{ config, data, seriesHighlight, colorScale, dimensions, formatNumber }}>
      <div className="cdc-open-viz-module cdc-visualization-container mt-4">
        {/* Title */}
        {title.text && <h1 className={`chart-title ${config.theme}`} style={{fontSize: title.fontSize}}>{title.text}</h1>}
        {/* Legend, if set above */}
        {config.legend.above ? legendElements : ''}
        {/* Visualization */}
        <div className={`chart-container ${config.legend.hide ? 'legend-hidden' : ''}`}>
          <div style={{paddingLeft: config.padding.left}}>
            {chartComponents[visualizationType]}
          </div>
        </div>
        {/* Legend, if set below */}
        {!config.legend.above ? legendElements : ''}
      </div>
      {/* Description */}
      <div className="chart-description" style={{fontSize: description && (description.fontSize || 22)}} dangerouslySetInnerHTML={{__html: description && description.html}}></div>              
      {/* Data Table */}
      <DataTable numberFormatter={formatNumber} />
    </Context.Provider>
  );
}
