import React, { useState, useRef, useEffect, useCallback } from 'react';

// IE11
import 'core-js/stable'
import ResizeObserver from 'resize-observer-polyfill'
import 'whatwg-fetch'

import { LegendOrdinal, LegendItem, LegendLabel } from '@visx/legend';
import { scaleOrdinal } from '@visx/scale';
import parse from 'html-react-parser';

import Loading from '@cdc/core/components/Loading';
import Waiting from '@cdc/core/components/Waiting';

import PieChart from './components/PieChart';
import LinearChart from './components/LinearChart';
import DataTable from './components/DataTable';
import Context from './context';
import defaults from './data/initial-state';

import './scss/main.scss';
import EditorPanel from './components/EditorPanel';

export default function CdcChart(
  { configUrl, config: configObj, isEditor = false} : 
  { configUrl?: string, config?: any, isEditor?: boolean }
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

  const [currentViewport, setCurrentViewport] = useState<String>('lg');

  const [dimensions, setDimensions] = useState<Array<Number>>([]);

  const outerContainerRef = useRef(null);

  const colorPalettes = {
    'qualitative-bold': ['#377eb8', '#ff7f00', '#4daf4a', '#984ea3', '#e41a1c', '#ffff33', '#a65628', '#f781bf', '#3399CC'],
    'qualitative-soft': ['#A6CEE3', '#1F78B4', '#B2DF8A', '#33A02C', '#FB9A99', '#E31A1C', '#FDBF6F', '#FF7F00', '#ACA9EB'],
    'sequential-blue': ['#C6DBEF', '#9ECAE1', '#6BAED6', '#4292C6', '#2171B5', '#084594'],
    'sequential-blue-reverse': ['#084594', '#2171B5', '#4292C6', '#6BAED6', '#9ECAE1', '#C6DBEF'],
    'sequential-green': ['#C7E9C0', '#A1D99B', '#74C476', '#41AB5D', '#238B45', '#005A32']
  };

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

    if(newConfig.newViz) {
      setLoading(false)
    }

    updateConfig(newConfig);
  }

  const updateConfig = (newConfig) => {
    // Deeper copy
    Object.keys(defaults).forEach( key => {
      if(newConfig[key] && 'object' === typeof newConfig[key]) {
        newConfig[key] = {...defaults[key], ...newConfig[key]}
      }
    });

    if(newConfig.visualizationType === 'Pie') {
      newConfig.seriesKeys = data.map(d => d[newConfig.xAxis.dataKey]);
    } else {
      newConfig.seriesKeys = newConfig.seriesKeys || [];
    }

    //Enforce default values that need to be calculated at runtime
    newConfig.runtime = {};
    newConfig.runtime.originalXAxis = newConfig.xAxis;

    if(newConfig.visualizationType === 'Bar' && newConfig.visualizationSubType === 'horizontal'){
      newConfig.runtime.xAxis = newConfig.yAxis;
      newConfig.runtime.yAxis = newConfig.xAxis;
      newConfig.horizontal = true;
    } else {
      newConfig.runtime.xAxis = newConfig.xAxis;
      newConfig.runtime.yAxis = newConfig.yAxis;
      newConfig.horizontal = false;
    }

    if(newConfig.seriesLabels && newConfig.seriesKeys){
      newConfig.runtime.seriesLabelsAll = [];
      newConfig.seriesKeys.forEach((seriesKey) => {
        newConfig.runtime.seriesLabelsAll.push(newConfig.seriesLabels[seriesKey])
      });
    }

    newConfig.runtime.uniqueId = Date.now();

    setConfig(newConfig);
  };

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

  const viewports:keyable = {
    'lg': 1200,
    'md': 992,
    'sm': 768,
    'xs': 576,
    'xxs': 350
  }

  const getViewport = size => {
    let result = currentViewport
    let viewportList = Object.keys( viewports )

    for(let viewport of viewportList) {
        if(size <= viewports[viewport]) {
            result = viewport
        }
    }

    return result
  }

  // Observes changes to outermost container and changes viewport size in state
  const resizeObserver:ResizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      let { width, height } = entry.contentRect
        let newViewport = getViewport(width)
        
        if( newViewport !== currentViewport ) {
            setCurrentViewport(newViewport)
        }

        if(isEditor) {
          width = width - 350;
        }

        setDimensions([width, height])
    }
  })

  // Load data when component first mounts
  useEffect(() => {
    loadConfig();
    resizeObserver.observe(outerContainerRef.current);
  }, []);

  // Generates color palette to pass to child chart component
  useEffect(() => {
    if(data && config.xAxis && config.seriesKeys) {
      let palette = colorPalettes[config.palette]
      let numberOfKeys = config.seriesKeys.length

      while(numberOfKeys > palette.length) {
        palette = palette.concat(palette);
      }

      palette = palette.slice(0, numberOfKeys);

      const newColorScale = () => scaleOrdinal({
        domain: config.runtime.seriesLabelsAll || config.seriesKeys,
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

    // If we're highlighting all the series, reset them
    if(seriesHighlight.length + 1 === config.seriesKeys.length) {
      highlightReset()
      return
    }

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
    let prefix = config.dataFormat.prefix;
    if (!config.dataFormat) return num;
    if (typeof num !== 'number') num = parseFloat(num);
    if (config.dataCutoff){
      let cutoff = config.dataCutoff
      if(typeof config.dataCutoff !== 'number') cutoff = parseFloat(config.dataCutoff);
      if(num < cutoff) {
        prefix = '< ' + prefix;
        num = cutoff;  
      }
    }
    if (config.dataFormat.roundTo) num = num.toFixed(config.dataFormat.roundTo);
    if (config.dataFormat.commas) num = num.toLocaleString('en-US');

    let result = ""

    if(prefix) {
      result += prefix
    }

    result += num

    if(config.dataFormat.suffix) {
      result += config.dataFormat.suffix
    }

    return result
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

    if(config.legend.position === "left") {
      containerClasses.push('left')
    }

    return (
      <div className={containerClasses.join(' ')}>
        {legend.label && <h2>{legend.label}</h2>}
        <LegendOrdinal
        scale={colorScale}
        itemDirection="row"
        labelMargin="0 20px 0 0"
        shapeMargin="0 10px 0"
        >
          {labels => (
            <div>
              {labels.map((label, i) => {
                let className = 'legend-item'

                let itemName:any = label.datum

                if(config.seriesLabels){
                  let index = config.runtime.seriesLabelsAll.indexOf(itemName)
                  itemName = config.seriesKeys[index]
                }

                if( seriesHighlight.length > 0 && false === seriesHighlight.includes( itemName ) ) {
                  className += ' inactive'
                }

                  return (
                    <LegendItem
                      tabIndex={0}
                      className={className}
                      key={`legend-quantile-${i}`}
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
                  )
              })}
              {seriesHighlight.length > 0 && <button className={`legend-reset ${config.theme}`} onClick={highlightReset}>Reset</button>}
            </div>
          )}
        </LegendOrdinal>
      </div>
    )
  }

  // Prevent render if loading
  let body = (<Loading />)

  if(false === loading) {
    body = (
      <>
        {isEditor && <EditorPanel />}
        {!config.newViz && <div className="cdc-chart-inner-container">
          {/* Title */}
          {title && <h1 className={`chart-title ${config.theme}`}>{title}</h1>}
          {/* Visualization */}
          <div className={`chart-container ${config.legend.hide ? 'legend-hidden' : ''}`} style={{paddingLeft: config.padding.left}}>
            {chartComponents[visualizationType]}
            {/* Legend */}
            {!config.legend.hide && <Legend />}
          </div>
          {/* Description */}
          {description && <div className="chart-description">{parse(description)}</div>}
          {/* Data Table */}
          {config.xAxis.dataKey && <DataTable />}
        </div>}
      </>
    )
  }

  return (
    <Context.Provider value={{ config, data, seriesHighlight, colorScale, dimensions, currentViewport, formatNumber, loading, updateConfig, colorPalettes }}>
      <div className={`cdc-open-viz-module type-chart ${currentViewport} font-${config.fontSize}`} ref={outerContainerRef}>
        {body}
      </div>
    </Context.Provider>
  );
}
