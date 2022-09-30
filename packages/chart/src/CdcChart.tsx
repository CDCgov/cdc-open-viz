import React, { useState, useEffect, useCallback } from 'react';

// IE11
import 'core-js/stable'
import ResizeObserver from 'resize-observer-polyfill'
import 'whatwg-fetch'

import { LegendOrdinal, LegendItem, LegendLabel } from '@visx/legend';
import { scaleOrdinal } from '@visx/scale';
import ParentSize from '@visx/responsive/lib/components/ParentSize';

import { timeParse, timeFormat } from 'd3-time-format';
import Papa from 'papaparse';
import parse from 'html-react-parser';

import Loading from '@cdc/core/components/Loading';
import { DataTransform } from '@cdc/core/helpers/DataTransform';
import getViewport from '@cdc/core/helpers/getViewport';
import fetchRemoteData from '@cdc/core/helpers/fetchRemoteData';

import PieChart from './components/PieChart';
import LinearChart from './components/LinearChart';
import DataTable from './components/DataTable';
import Context from './context';
import defaults from './data/initial-state';

import EditorPanel from './components/EditorPanel';
import numberFromString from '@cdc/core/helpers/numberFromString'
import LegendCircle from '@cdc/core/components/LegendCircle';
import {colorPalettesChart as colorPalettes} from '../../core/data/colorPalettes';

import { publish, subscribe, unsubscribe } from '@cdc/core/helpers/events';

import SparkLine from './components/SparkLine';

import './scss/main.scss';

export default function CdcChart(
  { configUrl, config: configObj, isEditor = false, isDashboard = false, setConfig: setParentConfig, setEditing, hostname,link} :
  { configUrl?: string, config?: any, isEditor?: boolean, isDashboard?: boolean, setConfig?, setEditing?, hostname?,link?:any }
) {

  const transform = new DataTransform();

  interface keyable { [key: string]: any }

  const [loading, setLoading] = useState<Boolean>(true);
  const [colorScale, setColorScale] = useState<any>(null);
  const [config, setConfig] = useState<keyable>({});
  const [stateData, setStateData] = useState<Array<Object>>(config.data || []);
  const [excludedData, setExcludedData] = useState<Array<Object>>();
  const [filteredData, setFilteredData] = useState<Array<Object>>();
  const [seriesHighlight, setSeriesHighlight] = useState<Array<String>>([]);
  const [currentViewport, setCurrentViewport] = useState<String>('lg');
  const [dimensions, setDimensions] = useState<Array<Number>>([]);
  const [parentElement, setParentElement] = useState(false)
  const [externalFilters, setExternalFilters] = useState(null);
  const [container, setContainer] = useState()
  const [coveLoadedEventRan, setCoveLoadedEventRan] = useState(false)

  const legendGlyphSize = 15;
  const legendGlyphSizeHalf = legendGlyphSize / 2;

  const handleChartTabbing = config.showSidebar ? `#legend` : config?.title ? `#dataTableSection__${config.title.replace(/\s/g, '')}` : `#dataTableSection`

  const cacheBustingString = () => {
      const round = 1000 * 60 * 15;
      const date = new Date();
      return new Date(date.getTime() - (date.getTime() % round)).toISOString();
  }

  const handleChartAriaLabels = (state, testing = false) => {
      if(testing) console.log(`handleChartAriaLabels Testing On:`, state);
      try {
          if(!state.visualizationType) throw Error('handleChartAriaLabels: no visualization type found in state');
          let ariaLabel = '';

          if(state.visualizationType) {
            ariaLabel += `${state.visualizationType} chart`
          }

          if(state.title && state.visualizationType) {
              ariaLabel += ` with the title: ${state.title}`
          }

          return ariaLabel;
      } catch(e) {
          console.error(e.message)
      }
  }

  const loadConfig = async () => {
    let response = configObj || await (await fetch(configUrl)).json();

    // If data is included through a URL, fetch that and store
    let data = response.formattedData || response.data || {};

    if (response.dataUrl) {

      try {
        const regex = /(?:\.([^.]+))?$/

        const ext = (regex.exec(response.dataUrl)[1])
        if ('csv' === ext) {
            data = await fetch(response.dataUrl + `?v=${cacheBustingString()}`)
                .then(response => response.text())
                .then(responseText => {
                    const parsedCsv = Papa.parse(responseText, {
                        header: true,
                        dynamicTyping: true,
                        skipEmptyLines: true
                    })
                    return parsedCsv.data
                })
        }

        if ('json' === ext) {
            data = await fetch(response.dataUrl  + `?v=${cacheBustingString()}`)
                .then(response => response.json())
        }
      } catch {
        console.error(`Cannot parse URL: ${response.dataUrl}`);
        data = [];
      }

      if(response.dataDescription) {
        data = transform.autoStandardize(data);
        data = transform.developerStandardize(data, response.dataDescription);
      }
    }

    if(data) {
      setStateData(data)
      setExcludedData(data)
    }

    let newConfig = {...defaults, ...response}
    if(undefined === newConfig.table.show) newConfig.table.show = !isDashboard
    updateConfig(newConfig, data);
  }

  const updateConfig = (newConfig, dataOverride = undefined) => {

    let data = dataOverride || stateData

    // Deeper copy
    Object.keys(defaults).forEach(key => {
      if (newConfig[key] && 'object' === typeof newConfig[key] && !Array.isArray(newConfig[key])) {
        newConfig[key] = { ...defaults[key], ...newConfig[key] }
      }
    });

    // Loop through and set initial data with exclusions - this should persist through any following data transformations (ie. filters)
    let newExcludedData

    if (newConfig.exclusions && newConfig.exclusions.active) {

      if (newConfig.xAxis.type === 'categorical' && newConfig.exclusions.keys?.length > 0) {
        newExcludedData = data.filter(e => !newConfig.exclusions.keys.includes(e[newConfig.xAxis.dataKey]))
      } else if (
        newConfig.xAxis.type === 'date' &&
        (newConfig.exclusions.dateStart || newConfig.exclusions.dateEnd) &&
        newConfig.xAxis.dateParseFormat
      ) {

        // Filter dates
        const timestamp = (e) => new Date(e).getTime();

        let startDate = timestamp(newConfig.exclusions.dateStart)
        let endDate = timestamp(newConfig.exclusions.dateEnd) + 86399999 //Increase by 24h in ms (86400000ms - 1ms) to include selected end date for .getTime() comparative

        let startDateValid = undefined !== typeof startDate && false === isNaN(startDate)
        let endDateValid = undefined !== typeof endDate && false === isNaN(endDate)

        if (startDateValid && endDateValid) {
          newExcludedData = data.filter(e =>
            (timestamp(e[newConfig.xAxis.dataKey]) >= startDate) &&
            (timestamp(e[newConfig.xAxis.dataKey]) <= endDate)
          )
        } else if (startDateValid) {
          newExcludedData = data.filter(e => timestamp(e[newConfig.xAxis.dataKey]) >= startDate)
        } else if (endDateValid) {
          newExcludedData = data.filter(e => timestamp(e[newConfig.xAxis.dataKey]) <= endDate)
        }

      } else {
        newExcludedData = dataOverride || stateData
      }
    } else {
      newExcludedData = dataOverride || stateData
    }

    setExcludedData(newExcludedData)

    // After data is grabbed, loop through and generate filter column values if there are any
    let currentData;
    if (newConfig.filters) {

      newConfig.filters.forEach((filter, index) => {

          let filterValues = [];

          filterValues = generateValuesForFilter(filter.columnName, newExcludedData);

          newConfig.filters[index].values = filterValues;
          // Initial filter should be active
          newConfig.filters[index].active = filterValues[0];

      });

      currentData = filterData(newConfig.filters, newExcludedData);
      setFilteredData(currentData);
    }

    //Enforce default values that need to be calculated at runtime
    newConfig.runtime = {};
    newConfig.runtime.seriesLabels = {};
    newConfig.runtime.seriesLabelsAll = [];
    newConfig.runtime.originalXAxis = newConfig.xAxis;

    if (newConfig.visualizationType === 'Pie') {
      newConfig.runtime.seriesKeys = (dataOverride || data).map(d => d[newConfig.xAxis.dataKey]);
      newConfig.runtime.seriesLabelsAll = newConfig.runtime.seriesKeys;
    } else {
      newConfig.runtime.seriesKeys = newConfig.series ? newConfig.series.map((series) => {
        newConfig.runtime.seriesLabels[series.dataKey] = series.label || series.dataKey;
        newConfig.runtime.seriesLabelsAll.push(series.label || series.dataKey);
        return series.dataKey;
      }) : [];
    }

    if (newConfig.visualizationType === 'Combo' && newConfig.series) {
      newConfig.runtime.barSeriesKeys = [];
      newConfig.runtime.lineSeriesKeys = [];
      newConfig.series.forEach((series) => {
        if(series.type === 'Bar'){
          newConfig.runtime.barSeriesKeys.push(series.dataKey);
        }
        if(series.type === 'Line'){
          newConfig.runtime.lineSeriesKeys.push(series.dataKey);
        }
      });
    }

    if ( (newConfig.visualizationType === 'Bar' && newConfig.orientation === 'horizontal') || newConfig.visualizationType === 'Paired Bar') {
      newConfig.runtime.xAxis = newConfig.yAxis;
      newConfig.runtime.yAxis = newConfig.xAxis;
      newConfig.runtime.horizontal = true;
    } else {
      newConfig.runtime.xAxis = newConfig.xAxis;
      newConfig.runtime.yAxis = newConfig.yAxis;
      newConfig.runtime.horizontal = false;
    }
    newConfig.runtime.uniqueId = Date.now();
    newConfig.runtime.editorErrorMessage = newConfig.visualizationType === 'Pie' && !newConfig.yAxis.dataKey ? 'Data Key property in Y Axis section must be set for pie charts.' : '';

    // if (newConfig.length) newConfig.reverse();
    setConfig(newConfig);
  };

  const filterData = (filters, data) => {
    let filteredData = [];

    data.forEach((row) => {
      let add = true;
      filters.forEach((filter) => {
        if (row[filter.columnName] !== filter.active) {
          add = false;
        }
      });

      if(add) filteredData.push(row);
    });
    return filteredData;
  }

  // Gets filer values from dataset
  const generateValuesForFilter = (columnName, data = this.state.data) => {
    const values = [];

    data.forEach( (row) => {
        const value = row[columnName]
        if(value && false === values.includes(value)) {
            values.push(value)
        }
    });

    return values;
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

  // Observes changes to outermost container and changes viewport size in state
  const resizeObserver:ResizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      let { width, height } = entry.contentRect
      let newViewport = getViewport(width)
      let svgMarginWidth = 32;
      let editorWidth = 350;

      setCurrentViewport(newViewport)

      if(isEditor) {
        width = width - editorWidth;
      }

      if(entry.target.dataset.lollipop === 'true') {
        width = width - 2.5;
      }

      width = width - svgMarginWidth;

      setDimensions([width, height])
    }
  })

  const outerContainerRef = useCallback(node => {
    if (node !== null) {
        resizeObserver.observe(node);
    }

    setContainer(node)
  },[]);

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  // Load data when component first mounts
  useEffect(() => {
    loadConfig();
  }, []);

  /**
   * When cove has a config and container ref publish the cove_loaded event.
   */
  useEffect(() => {
    if(container && !isEmpty(config) && !coveLoadedEventRan) {
      publish('cove_loaded', { config: config })
      setCoveLoadedEventRan(true)
    }

  }, [container, config]);
  

/**
 * Handles filter change events outside of COVE
 * Updates externalFilters state
 * Another useEffect listens to externalFilterChanges and updates the config.
 */
  useEffect(() => {

    const handleFilterData = (e:CustomEvent) => {
        let tmp = [];
        tmp.push(e.detail)
        setExternalFilters(tmp)
    }
    
    subscribe('cove_filterData', (e:CustomEvent) => handleFilterData(e))

    return () => {
      unsubscribe('cove_filterData', handleFilterData);
    }

  }, [config]);


/**
 * Handles changes to externalFilters
 * For some reason e.detail is returning [order: "asc"] even though
 * we're not passing that in. The code here checks for an active prop instead of an empty array.
 */
  useEffect(() => {

    if(externalFilters && externalFilters[0]) {
      const hasActiveProperty = externalFilters[0].hasOwnProperty('active')

      if(!hasActiveProperty) {
        let configCopy = {...config }
        delete configCopy['filters']
        setConfig(configCopy)
        setFilteredData(filterData(externalFilters, excludedData));
      }
    }

    if(externalFilters && externalFilters.length > 0 && externalFilters.length > 0 && externalFilters[0].hasOwnProperty('active')) {
      let newConfigHere = {...config, filters: externalFilters }
      setConfig(newConfigHere)
      setFilteredData(filterData(externalFilters, excludedData));
    }
    
  }, [externalFilters]);

  
  // Load data when configObj data changes
  if(configObj){
    useEffect(() => {
      loadConfig();
    }, [configObj.data]);
  }

  // Generates color palette to pass to child chart component
  useEffect(() => {
    if(stateData && config.xAxis && config.runtime.seriesKeys) {
      let palette = config.customColors || colorPalettes[config.palette]
      let numberOfKeys = config.runtime.seriesKeys.length

      while(numberOfKeys > palette.length) {
        palette = palette.concat(palette);
      }

      palette = palette.slice(0, numberOfKeys);

      const newColorScale = () => scaleOrdinal({
        domain: config.runtime.seriesLabelsAll,
        range: palette,
      });

      setColorScale(newColorScale);
      setLoading(false);
    }

    if(config && stateData && config.sortData){
      stateData.sort(sortData);
    }
  }, [config, stateData])

  // Called on legend click, highlights/unhighlights the data series with the given label
  const highlight = (label) => {
    const newSeriesHighlight = [];

    // If we're highlighting all the series, reset them
    if(seriesHighlight.length + 1 === config.runtime.seriesKeys.length) {
      highlightReset()
      return
    }

    seriesHighlight.forEach((value) => {
      newSeriesHighlight.push(value);
    });

    let newHighlight = label.datum;
    if(config.runtime.seriesLabels){
      for(let i = 0; i < config.runtime.seriesKeys.length; i++) {
        if(config.runtime.seriesLabels[config.runtime.seriesKeys[i]] === label.datum){
          newHighlight = config.runtime.seriesKeys[i];
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
  const section = config.orientation ==='horizontal' ? 'yAxis' :'xAxis';

  const parseDate = (dateString: string) => {
    let date = timeParse(config.runtime[section].dateParseFormat)(dateString);
    if(!date) {
      config.runtime.editorErrorMessage = `Error parsing date "${dateString}". Try reviewing your data and date parse settings in the X Axis section.`;
      return new Date();
    } else {
      return date;
    }
  };


  const formatDate = (date: Date) => {
    return timeFormat(config.runtime[section].dateDisplayFormat)(date);
  };

  // Format numeric data based on settings in config
  const formatNumber = (num) => {
    // check if value contains comma and remove it. later will add comma below.
    if(String(num).indexOf(',') !== -1)  num = num.replaceAll(',', '');
    // if num is NaN return num
    if(isNaN(num)|| !num) return num ;

    let original = num;
    let prefix = config.dataFormat.prefix;

    let stringFormattingOptions = {
      useGrouping: config.dataFormat.commas ? true : false,
      minimumFractionDigits: config.dataFormat.roundTo ? Number(config.dataFormat.roundTo) : 0,
      maximumFractionDigits: config.dataFormat.roundTo ? Number(config.dataFormat.roundTo) : 0
    };

    num = numberFromString(num);
    
    if (isNaN(num)) {
      config.runtime.editorErrorMessage = `Unable to parse number from data ${original}. Try reviewing your data and selections in the Data Series section.`;
      return original
    }

    if (!config.dataFormat) return num;
    if (config.dataCutoff){
      let cutoff = numberFromString(config.dataCutoff)

      if(num < cutoff) { 
        num = cutoff;
      }
    }
    num = num.toLocaleString('en-US', stringFormattingOptions)

    let result = ""

    if(prefix) {
      result += prefix
    }

    result += num

    if(config.dataFormat.suffix) {
      result += config.dataFormat.suffix
    }
    return String(result)
  };

  // Destructure items from config for more readable JSX
  const { legend, title, description, visualizationType } = config;

  // Select appropriate chart type
  const chartComponents = {
    'Paired Bar' : <LinearChart />,
    'Bar' : <LinearChart />,
    'Line' : <LinearChart />,
    'Combo': <LinearChart />,
    'Pie' : <PieChart />,
  }

  // JSX for Legend
  const Legend = () => {

    let containerClasses = ['legend-container']
    let innerClasses = ['legend-container__inner'];

    if(config.legend.position === "left") {
      containerClasses.push('left')
    }

    if(config.legend.reverseLabelOrder) {
      innerClasses.push('d-flex')
      innerClasses.push('flex-column-reverse')
    }

    return (
      <aside id="legend" className={containerClasses.join(' ')} role="region" aria-label="legend" tabIndex={0}>
        {legend.label && <h2>{parse(legend.label)}</h2>}
        {legend.description && <p>{parse(legend.description)}</p>}
        <LegendOrdinal
        scale={colorScale}
        itemDirection="row"
        labelMargin="0 20px 0 0"
        shapeMargin="0 10px 0"
        >
          {labels => (
            <div className={innerClasses.join(' ')}>
              {labels.map((label, i) => {
                let className = 'legend-item'
                let itemName:any = label.datum

                // Filter excluded data keys from legend
                if (config.exclusions.active && config.exclusions.keys?.includes(itemName)) {
                  return
                }

                if(config.runtime.seriesLabels){
                  let index = config.runtime.seriesLabelsAll.indexOf(itemName)
                  itemName = config.runtime.seriesKeys[index]
                }

                if( seriesHighlight.length > 0 && false === seriesHighlight.includes( itemName ) ) {
                  className += ' inactive'
                }

                return (
                  <LegendItem
                    className={className}
                    tabIndex={0}
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
                    <LegendCircle fill={label.value} />
                    <LegendLabel align="left" margin="0 0 0 4px">
                      {label.text}
                    </LegendLabel>
                  </LegendItem>
                )
              })}
              {seriesHighlight.length > 0 && <button className={`legend-reset ${config.theme}`} onClick={highlightReset} tabIndex={0}>Reset</button>}
            </div>
          )}
        </LegendOrdinal>
      </aside>
    )
  }

  const Filters = () => {
    const changeFilterActive = (index, value) => {
      let newFilters = config.filters;

      newFilters[index].active = value;

      setConfig({...config, filters: newFilters});

      setFilteredData(filterData(newFilters, excludedData));
    };

    const announceChange = (text) => {};

    let filterList = '';
    if (config.filters) {
      
      filterList = config.filters.map((singleFilter, index) => {
        const values = [];
        const sortAsc = (a, b) => {
          return a.toString().localeCompare(b.toString(), 'en', { numeric: true })
        };

        const sortDesc = (a, b) => {
          return b.toString().localeCompare(a.toString(), 'en', { numeric: true })
        };

        if(!singleFilter.order || singleFilter.order === '' ){
          singleFilter.order = 'asc'
        }

        if(singleFilter.order === 'desc') {
          singleFilter.values = singleFilter.values.sort(sortDesc)
        }

        if(singleFilter.order === 'asc') {
          singleFilter.values = singleFilter.values.sort(sortAsc)
        }

        singleFilter.values.forEach((filterOption, index) => {
          values.push(
            <option key={index} value={filterOption}>
              {filterOption}
            </option>
          );
        });

        return (
          <div className="single-filter" key={index}>
            <label htmlFor={`filter-${index}`}>{singleFilter.label}</label>
            <select
              id={`filter-${index}`}
              className="filter-select"
              data-index="0"
              value={singleFilter.active}
              onChange={(val) => {
                changeFilterActive(index, val.target.value);
                announceChange(`Filter ${singleFilter.label} value has been changed to ${val.target.value}, please reference the data table to see updated values.`);
              }}
            >
              {values}
            </select>
          </div>
        );
      });
    }

    return (<section className="filters-section">{filterList}</section>)
  }

  const missingRequiredSections = () => {
    if (config.visualizationType === 'Pie') {
      if (undefined === config?.yAxis.dataKey) {
        return true;
      }
    } else {
      if (undefined === config?.series || false === config?.series.length > 0) {
        return true;
      }
    }

    if (!config.xAxis.dataKey) {
      return true;
    }

    return false;
  };

  let innerContainerClasses = ['cove-component__inner']
	config.title && innerContainerClasses.push('component--has-title')
	config.subtext && innerContainerClasses.push('component--has-subtext')
	config.biteStyle && innerContainerClasses.push(`bite__style--${config.biteStyle}`)
	config.general?.isCompactStyle && innerContainerClasses.push(`component--isCompactStyle`)

	let contentClasses = ['cove-component__content'];
	config.visualizationType === 'Spark Line' && contentClasses.push('sparkline')
	!config.visual?.border && contentClasses.push('no-borders');
	config.visual?.borderColorTheme && contentClasses.push('component--has-borderColorTheme');
	config.visual?.accent && contentClasses.push('component--has-accent');
	config.visual?.background && contentClasses.push('component--has-background');
	config.visual?.hideBackgroundColor && contentClasses.push('component--hideBackgroundColor');



  // Prevent render if loading
  let body = (<Loading />)
  let lineDatapointClass = ''
  let barBorderClass = ''

  let sparkLineStyles = {
    width: '100%',
    height: '100px',
  }

  if(false === loading) {
    if (config.lineDatapointStyle === "hover") { lineDatapointClass = ' chart-line--hover' }
    if (config.lineDatapointStyle === "always show") { lineDatapointClass = ' chart-line--always' }
    if (config.barHasBorder === "false") { barBorderClass = ' chart-bar--no-border' }

    body = (
      <>
        {isEditor && <EditorPanel />}
        {!missingRequiredSections() && !config.newViz && (
          <div className="cdc-chart-inner-container">
            {/* Title */}
        
            {title && (
              <div
                role="heading"
                className={`chart-title ${config.theme} cove-component__header`}
                aria-level={2}
              >
                {config && (
                  <sup className="superTitle">{parse(config.superTitle || '')}</sup>
                )}
                <div>{parse(title)}</div>
              </div>
            )}
            <a
              id="skip-chart-container"
              className="cdcdataviz-sr-only-focusable"
              href={handleChartTabbing}
            >
              Skip Over Chart Container
            </a>
            {/* Filters */}
            {config.filters && !externalFilters && <Filters />}
            {/* Visualization */}
            {config?.introText && <section className="introText">{parse(config.introText)}</section>}
            <div
              className={`chart-container${
                config.legend.hide ? " legend-hidden" : ""
              }${lineDatapointClass}${barBorderClass} ${contentClasses.join(' ')}`}
            >
              {/* All charts except sparkline */}
              {config.visualizationType !== "Spark Line" && 
                chartComponents[visualizationType]
              }

              {/* Sparkline */}
              {config.visualizationType === "Spark Line" && (
                <>
                  { description && <div className="subtext">{parse(description)}</div>}
                  <div style={sparkLineStyles}>
                    <ParentSize>
                      {(parent) => (
                        <>
                          <SparkLine width={parent.width} height={parent.height} />
                        </>
                      )}
                    </ParentSize>
                  </div>
                </>
              )
              }
              {/* Legend */}
            
              {!config.legend.hide && config.visualizationType !== "Spark Line" && <Legend />}
            </div>
                 {/* Link */}
            {link && link}
            {/* Description */}
            {description && config.visualizationType !== "Spark Line" && <div className="subtext">{parse(description)}</div>}
            {/* Data Table */}

            {config.xAxis.dataKey && config.table.show && config.visualizationType !== "Spark Line" && <DataTable />}
            {config?.footnotes && <section className="footnotes">{parse(config.footnotes)}</section>}
          </div>
        )}
      </>
    );
  }

  const getXAxisData = (d: any) => config.runtime.xAxis.type === 'date' ? (parseDate(d[config.runtime.originalXAxis.dataKey])).getTime() : d[config.runtime.originalXAxis.dataKey];
  const getYAxisData = (d: any, seriesKey: string) => d[seriesKey];

  const contextValues = {
    getXAxisData,
    getYAxisData,
    config,
    rawData: stateData ?? {},
    excludedData: excludedData,
    transformedData: filteredData || excludedData,
    unfilteredData: stateData,
    seriesHighlight,
    colorScale,
    dimensions,
    currentViewport,
    parseDate,
    formatDate,
    formatNumber,
    loading,
    updateConfig,
    colorPalettes,
    isDashboard,
    setParentConfig,
    missingRequiredSections,
    setEditing,
    setFilteredData,
    handleChartAriaLabels
  }

  const classes = [
    'cdc-open-viz-module',
    'type-chart',
    `${currentViewport}`,
    `font-${config.fontSize}`,
    `${config.theme}`
  ]

  config.visualizationType === "Spark Line" && classes.push(`type-sparkline`)
  isEditor && classes.push('spacing-wrapper')
  isEditor && classes.push('isEditor')

  return (
    <Context.Provider value={contextValues}>
      <div className={`${classes.join(' ')}`} ref={outerContainerRef} data-lollipop={config.isLollipopChart}>
        {body}
      </div>
    </Context.Provider>
  );
}