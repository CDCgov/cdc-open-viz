import React, { useState, useEffect, memo, useRef } from 'react';
import * as d3 from 'd3';
/** @jsx jsx */
import { jsx } from '@emotion/react'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary';
import { geoCentroid, geoPath } from "d3-geo";
import { feature, mesh } from "topojson-client";
import { AlbersUsa } from '@visx/geo';
import chroma from 'chroma-js';
import CityList from './CityList';


/**
 * TODO: 
 * Decide on JSON and cleanup
 * Original file was county JSON, testJSON includes both state and county level data
 */
import topoJSON from '../data/county-topo.json';
import testJSON from '../data/test.json';

// SVG ITEMS
const WIDTH = 880;
const HEIGHT = 500;
const ASPECT_RATIO = 1.55;
const STARTING_TRANSLATE = [ WIDTH / 2, HEIGHT / 2];
const PADDING = 25;
const STARTING_SCALE = (WIDTH - PADDING + HEIGHT - PADDING) / ASPECT_RATIO;

// STATE ITEMS
const STATE_STROKE_WIDTH = 1;
const STATE_BORDER = 'black';
const STATE_BORDER_FOCUSED = '#B890BB';
const STATE_BORDERWIDTH_FOCUSED = 10;
const STATE_BACKGROUND = '#FFF';
const STATE_FILLOPACITY = '';
const STATE_INACTIVE_FILL = '#F4F7FA';

// COUNTY ITEMS
const COUNTY_BACKGROUND = '';
const COUNTY_FILL = '';
const COUNTY_FILLOPACITY = '';

// PLACEHOLDERS FOR BG SQUARE
const BG_COLOR = '#E5F4FF';
const BG_STROKE = '';


let { features: counties } = feature(testJSON, testJSON.objects.counties)
let { features: states } = feature(testJSON, testJSON.objects.states);

const projection = d3.geoAlbersUsa()
const newProjection = projection.fitExtent([[PADDING, PADDING], [WIDTH - PADDING, HEIGHT - PADDING]], states)

const path = geoPath().projection(newProjection)
const countyLines = path(mesh(testJSON, testJSON.objects.counties))

//console.log('COUNTY LINES', countyLines)

//let { features: counties } = feature(topoJSON, topoJSON.objects.AllCounties);

console.log('US', states);
console.log('COUNTIES', counties);


const Rect = ({label, text, stroke, strokeWidth, ...props}) => {
  return (
    <svg viewBox="0 0 45 28">
      <g {...props} strokeLinejoin="round">
        <path stroke={stroke} strokeWidth={strokeWidth} d="M40,0.5 C41.2426407,0.5 42.3676407,1.00367966 43.1819805,1.81801948 C43.9963203,2.63235931 44.5,3.75735931 44.5,5 L44.5,5 L44.5,23 C44.5,24.2426407 43.9963203,25.3676407 43.1819805,26.1819805 C42.3676407,26.9963203 41.2426407,27.5 40,27.5 L40,27.5 L5,27.5 C3.75735931,27.5 2.63235931,26.9963203 1.81801948,26.1819805 C1.00367966,25.3676407 0.5,24.2426407 0.5,23 L0.5,23 L0.5,5 C0.5,3.75735931 1.00367966,2.63235931 1.81801948,1.81801948 C2.63235931,1.00367966 3.75735931,0.5 5,0.5 L5,0.5 Z" />
        <text textAnchor="middle" dominantBaseline="middle" x="50%" y="54%" fill={text}>{label}</text>
      </g>
    </svg>
  )
}

const offsets = {
  'US-VT': [50, -8],
  'US-NH': [34, 2],
  'US-MA': [30, -1],
  'US-RI': [28, 2],
  'US-CT': [35, 10],
  'US-NJ': [42, 1],
  'US-DE': [33, 0],
  'US-MD': [47, 10]
};

const nudges = {
  'US-FL': [15, 3],
  'US-AK': [0, -8],
  'US-CA': [-10, 0],
  'US-NY': [5, 0],
  'US-MI': [13, 20],
  'US-LA': [-10, -3],
  'US-HI': [-10, 10],
  'US-ID': [0, 10],
  'US-WV': [-2, 2]
}

const CountyMap = (props) => {
  const {
    state,
    applyTooltipsToGeo,
    data,
    geoClickHandler,
    applyLegendToRow,
    displayGeoName,
    supportedTerritories,
    rebuildTooltips
  } = props;

  const [territoriesData, setTerritoriesData] = useState([]);

  const [focusedState, setFocusedState] = useState(null);

  const [translate, setTranslate] = useState( STARTING_TRANSLATE )
  
  const [scale, setScale] = useState( STARTING_SCALE )

  const container = useRef(null)

  const territoriesKeys = supportedTerritories ? Object.keys(supportedTerritories) : []; // data will have already mapped abbreviated territories to their full names

  useEffect(() => {
    // Territories need to show up if they're in the data at all, not just if they're "active". That's why this is different from Cities
    const territoriesList = territoriesKeys.filter(key => data[key]);

    setTerritoriesData(territoriesList);
  }, [data]);

  useEffect(() => rebuildTooltips());

  const geoStrokeColor = state.general.geoBorderColor === 'darkGray' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255,255,255,0.7)'

  const territories = territoriesData.map(territory => {
    const Shape = Rect

    const territoryData = data[territory];

    let toolTip;

    let styles = {
      fill: '#E6E6E6',
      color: '#202020',
      fillOpacity: '1'
    };

    const label = supportedTerritories[territory][1]

    if(!territoryData) return <Shape key={label} label={label} css={styles} text={styles.color} />

    toolTip = applyTooltipsToGeo(displayGeoName(territory), territoryData);

    const legendColors = applyLegendToRow(territoryData);

    let textColor = '#FFF';

    if (legendColors) {
      // Use white text if the background is dark, and dark grey if it's light
      if (chroma.contrast(textColor, legendColors[0]) < 4.5) {
        textColor = '#202020';
      }

      let needsPointer = false;

      // If we need to add a pointer cursor
      if ((state.columns.navigate && territoryData[state.columns.navigate.name]) || state.tooltips.appearanceType === 'click') {
        needsPointer = true;
      }

      styles = {
        color: textColor,
        fill: legendColors[0],
        cursor: needsPointer ? 'pointer' : 'default',
        '&:hover': {
          fill: legendColors[1],
        },
        '&:active': {
          fill: legendColors[2],
        }
      };

      return (<Shape
        key={label}
        label={label}
        css={styles}
        text={styles.color}
        data-tip={toolTip}
        data-for="tooltip"
        stroke={geoStrokeColor}
        strokeWidth={1.5}
        onClick={() => geoClickHandler(territory, territoryData)}
      />)
    }
  });

  const geoLabel = (geo, bgColor = "#FFFFFF", projection) => {
      let centroid = projection(geoCentroid(geo))
      let abbr = geo.properties.iso

      if(undefined === abbr) return null

      let textColor = "#FFF"

      // Dynamic text color
      if (chroma.contrast(textColor, bgColor) < 4.5 ) {
        textColor = '#202020';
      }

      let x = 0, y = 5

      if(nudges[abbr]) {
        x += nudges[abbr][0]
        y += nudges[abbr][1]
      }

      if( undefined === offsets[abbr]) {
        return (
          <g transform={`translate(${centroid})`}>
            <text x={x} y={y} fontSize={14} strokeWidth="0" style={{fill: textColor}} textAnchor="middle">
              {abbr.substring(3)}
            </text>
          </g>
        )
      }

      let [dx, dy] = offsets[abbr]

      return (
        <g>
          <line x1={centroid[0]} y1={centroid[1]} x2={centroid[0] + dx} y2={centroid[1] + dy} stroke="rgba(0,0,0,.5)" strokeWidth={1} />
          <text x={4} strokeWidth="0" fontSize={13} style={{fill: "#202020"}} alignmentBaseline="middle" transform={`translate(${centroid[0] + dx}, ${centroid[1] + dy})`}>
            {abbr.substring(3)}
          </text>
        </g>
      )
  }
  

  /**
   * On state clicks, focus the county
   * @param {string} state fips code 
   * @param {*} geo county data
   * @returns 
   */
  const focusGeo = (geoKey, geo) => {
    
    if(!geoKey) {
      console.log('County Map: no geoKey provided to focusGeo')
      return;
    }
    
    // 1) Get the state the county is in.
    let myState = states.find(state => state.id === geoKey );
    
    // 2) Set projections translation & scale to the geographic center of the passed geo.
    const projection = d3.geoAlbersUsa()
    const newProjection = projection.fitExtent([[PADDING, PADDING], [WIDTH - PADDING, HEIGHT - PADDING]], myState)

    // 3) Gets the new scale
    const newScale = newProjection.scale()
    
    // 4) Pull the x & y out
    let [x, y] = newProjection.translate()

    // 5) Debug if needed
    const debug = {
      width: WIDTH,
      height: HEIGHT,
      beginX: 0,
      beginY: 0,
      x: x,
      y: y,
      newScale: newScale,
      geoKey: geoKey,
      geo: geo
    }

    //console.table(debug)

    // 6) Debug
    setTranslate([x,y])
    setScale(newScale)
    setFocusedState(geoKey)
  }

  /**
   * Resets County Map Scale and Translations to starting points.
   * @param {object} e - click event 
   */
  function onReset(e) {
    console.log( typeof e)
    e.preventDefault();
    setFocusedState(null);
    setScale( STARTING_SCALE );
    setTranslate( STARTING_TRANSLATE )
  }

  // Constructs and displays markup for all geos on the map (except territories right now)
  const constructGeoJsx = (geographies, projection) => {

    // get states & counties from geos
    const states = geographies.slice(0, 56);
    const counties = geographies.slice(56)
    
    let showLabel = state.general.displayStateLabels

    let geosJsx = [];

    const stateOutput = states.map(( {feature: geo, path = ''}) => {
      const key = geo.id + '-group'

      // STATE GROUPS
      let stateStyles = {
        cursor: 'default',
        stroke: STATE_BORDER,
        strokeWidth: STATE_STROKE_WIDTH,
        fill: STATE_INACTIVE_FILL
      }

      let stateSelectedStyles = {
        fill: STATE_BACKGROUND,
        fillOpacity: 1,
        cursor: 'default',
        stroke: STATE_BORDER_FOCUSED,
        strokeWidth: STATE_BORDERWIDTH_FOCUSED
      }

      // Map the name from the geo data with the appropriate key for the processed data
      let geoKey = geo.id;

      if(!geoKey) return

      const geoData = data[geoKey];

      let legendColors;

      // Once we receive data for this geographic item, setup variables.
      if (geoData !== undefined) {
        legendColors = applyLegendToRow(geoData);
      }

      const geoDisplayName = displayGeoName(geoKey);


      // Default return state, just geo with no additional information
      return (
        <g
        key={key}
          className={`state state--${geo.properties.name} ${focusedState === geo.id ? 'state--focused' : 'state--inactive'}`}
        >

          {geo.id === focusedState &&
            <>
              <clipPath id="mask-state">
                <path d={path} />
              </clipPath>
              <path
                tabIndex={-1}
                className='state-path state--focused'
                clipPath="url(#mask-state)"
                d={path}
                css={stateSelectedStyles}
              />
            </>
          }
          {geo.id !== focusedState &&
            <path
              tabIndex={-1}
              className='state-path state-path--inactive'
              d={path}
              css={stateStyles}
            />
          }
          {showLabel && geoLabel(geo, stateStyles.fill, projection)}
          
        </g>
      )
    });

    const countyOutput = counties.map(( {feature: geo, path = ''}) => {
      const key = geo.id + '-group'

      // COUNTY GROUPS
      let styles = {
        fillOpacity: '0',
        cursor: 'default'
      }

      // Map the name from the geo data with the appropriate key for the processed data
      let geoKey = geo.id;

      if(!geoKey) return

      const geoData = data[geoKey];

      let legendColors;

      // Once we receive data for this geographic item, setup variables.
      if (geoData !== undefined) {
        legendColors = applyLegendToRow(geoData);
      }

      const geoDisplayName = displayGeoName(geoKey);

      // If a legend applies, return it with appropriate information.
      if (legendColors && legendColors[0] !== '#000000') {
        const tooltip = applyTooltipsToGeo(geoDisplayName, geoData);

        styles = {
          fill: legendColors[0],
          cursor: 'default',
          '&:hover': {
            fill: legendColors[1],
          },
          '&:active': {
            fill: legendColors[2],
          },
        };

        // When to add pointer cursor
        if ((state.columns.navigate && geoData[state.columns.navigate.name]) || state.tooltips.appearanceType === 'click') {
          styles.cursor = 'pointer'
        }

        return (
          <g
            data-for="tooltip"
            data-tip={tooltip}
            key={key}         
            className={`county county--${geoDisplayName}`}
            css={styles}
            onClick={
                // default
                (e) => { geoClickHandler(geoDisplayName, geoData);
                  let stateFipsCode = geoData['State FIPS Codes'];
                  // update transform/translate
                  focusGeo(stateFipsCode, geo)
              
              }
            }
          >
            <path
              tabIndex={-1}
              className={`county county--${geoDisplayName}`}
              stroke={geoStrokeColor}
              strokeWidth={1.3}   
              d={path}
            />
            {showLabel && geoLabel(geo, legendColors[0], projection)}
          </g>
        )
      }

      // Default return state, just geo with no additional information
      return (
        <g
        key={key}
          className={`county county--${geoDisplayName}`}
          css={styles}
        >
          <path
            tabIndex={-1}
            className='single-geo'
            stroke={geoStrokeColor}
            strokeWidth={1.3}
            d={path}
          />
          {showLabel && geoLabel(geo, styles.fill, projection)}
        </g>
      )
    });

    geosJsx.push(stateOutput);
    geosJsx.push(countyOutput);

    // Cities
    geosJsx.push(<CityList
      projection={projection}
      key="cities"
      data={data}
      state={state}
      geoClickHandler={geoClickHandler}
      applyTooltipsToGeo={applyTooltipsToGeo}
      displayGeoName={displayGeoName}
      applyLegendToRow={applyLegendToRow}
    />)

    return geosJsx;
  };

  return (
    <ErrorBoundary component="CountyMap">
        
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio="xMinYMin" ref={container} className="svg-container" data-scale={scale} data-translate={translate}>
        <rect className="background center-container" width={WIDTH} height={HEIGHT} fillOpacity={1} fill={BG_COLOR}  onClick={ (e) => onReset(e) }></rect>
        <AlbersUsa data={states.concat(counties)} scale={ scale } translate={ translate }>
          { ({ features, projection }) => constructGeoJsx(features, projection) }
        </AlbersUsa>
      </svg>
      {territories.length > 0 && (
        <section className="territories">
          <span className="label">{state.general.territoriesLabel}</span>
          {territories}
        </section>
      )}
    </ErrorBoundary>
  );
};

export default memo(CountyMap)
