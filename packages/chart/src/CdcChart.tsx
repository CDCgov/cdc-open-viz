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
import { IgnorePlugin } from 'webpack';

export default function CdcChart({ configUrl, element }) {

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

  // TODO: Discuss as a group. We should use aspect ratios instead of trying to manually determine this.
  const [dimensions, setDimensions] = useState<any>({});

  const [loading, setLoading] = useState<Boolean>(true);

  const [seriesHighlight, setSeriesHighlight] = useState<Array<Number>>([]);

  const [resizeInit, setResizeInit] = useState<boolean>(false);

  const legendGlyphSize = 15;
  const viewportCutoff = 900;

  const loadConfig = async () => {
    const response = await fetch(configUrl);
    let responseObj = await response.json();

    // Sets default values for config
    responseObj.initialized = true;
    responseObj.title = responseObj.title || {};
    responseObj.title.fontSize = responseObj.title.fontSize || 28;

    responseObj.minHeight = responseObj.minHeight || 400;

    responseObj.padding = responseObj.padding || {};
    responseObj.padding.left = responseObj.padding.left|| 0;
    responseObj.padding.right = responseObj.padding.right || 0;

    if(responseObj.visualizationType === 'Bar' && responseObj.visualizationSubType === 'horizontal'){
      let tempAxis = responseObj.yAxis;
      responseObj.yAxis = responseObj.xAxis;
      responseObj.xAxis = tempAxis;
    }

    responseObj.yAxis = responseObj.yAxis || {};
    responseObj.yAxis.size = responseObj.yAxis.size || 50;
    responseObj.yAxis.labelFontSize = responseObj.yAxis.labelFontSize || 18;
    responseObj.yAxis.tickFontSize = responseObj.yAxis.tickFontSize || 16;

    responseObj.xAxis = responseObj.xAxis || {};
    responseObj.xAxis.size = responseObj.xAxis.size !== undefined ? responseObj.xAxis.size : 75;
    responseObj.xAxis.labelFontSize = responseObj.xAxis.labelFontSize || 18;
    responseObj.xAxis.tickFontSize = responseObj.xAxis.tickFontSize || 16;
    responseObj.xAxis.tickRotation = responseObj.xAxis.tickRotation ? responseObj.xAxis.tickRotation * -1 : 0;

    if(responseObj.seriesLabels){
      responseObj.seriesLabelsAll = [];
      Object.keys(responseObj.seriesLabels).forEach(seriesKey => responseObj.seriesLabelsAll.push(responseObj.seriesLabels[seriesKey]));
    }

    // If data is included through a URL, fetch that and store
    if(responseObj.dataUrl) {
      const data = await fetch(responseObj.dataUrl);
      const dataObj = await data.json();

      setData(dataObj);
    }

    setConfig(responseObj);
    setLoading(false);
  }

  const debounce = useRef(null);

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
    if(config.xAxis) {
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
    }
  }, [config, data])

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
    'Bar' : <ComboChart numberFormatter={formatNumber} />,
    'Line' : <ComboChart numberFormatter={formatNumber} />,
    'Combo': <ComboChart numberFormatter={formatNumber} />,
    'Pie' : <PieChart numberFormatter={formatNumber} />,
  }

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
</div>;

  if(true === loading) {
    return <div className="loader"></div>;
  }

  return (
    <Context.Provider value={{ config, data, seriesHighlight, colorScale, dimensions}}>
      <div className="cdc-open-viz-module cdc-visualization-container mt-4">
       {title.text && <h1 className="chart-title" style={{fontSize: title.fontSize}}>{title.text}</h1>}
        {config.legend.above ? legendElements : ''}
        {/* Title & Visualization */}
        <div className={`chart-container ${config.legend.hide ? 'legend-hidden' : ''}`}>
          <div style={{paddingLeft: config.padding.left}}>
            {chartComponents[visualizationType]}
          </div>
        </div>
        {!config.legend.above ? legendElements : ''}
      </div>
      {/* Description */}
      <div className="chart-description" style={{fontSize: description && (description.fontSize || 22)}} dangerouslySetInnerHTML={{__html: description && description.html}}></div>              
      {/* Data Table */}
      <DataTable numberFormatter={formatNumber} />
    </Context.Provider>
  );
}
