import React, { useState, useEffect, memo, useRef } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/react'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary';
import { geoCentroid, geoPath } from "d3-geo";
import { feature, mesh } from "topojson-client";
import { CustomProjection } from '@visx/geo';
import chroma from 'chroma-js';
import colorPalettes from '../data/color-palettes';
import { geoAlbersUsaTerritories } from 'd3-composite-projections';
import Loading from '@cdc/core/components/Loading';
import testJSON from '../data/dfc-map.json';


const abbrs = {
  Alabama: 'AL',
  Alaska: 'AK',
  Arizona: 'AZ',
  Arkansas: 'AR',
  California: 'CA',
  Colorado: 'CO',
  Connecticut: 'CT',
  Delaware: 'DE',
  Florida: 'FL',
  Georgia: 'GA',
  Hawaii: 'HI',
  Idaho: 'ID',
  Illinois: 'IL',
  Indiana: 'IN',
  Iowa: 'IA',
  Kansas: 'KS',
  Kentucky: 'KY',
  Louisiana: 'LA',
  Maine: 'ME',
  Maryland: 'MD',
  Massachusetts: 'MA',
  Michigan: 'MI',
  Minnesota: 'MN',
  Mississippi: 'MS',
  Missouri: 'MO',
  Montana: 'MT',
  Nebraska: 'NE',
  Nevada: 'NV',
  'New Hampshire': 'NH',
  'New Jersey': 'NJ',
  'New Mexico': 'NM',
  'New York': 'NY',
  'North Carolina': 'NC',
  'North Dakota': 'ND',
  Ohio: 'OH',
  Oklahoma: 'OK',
  Oregon: 'OR',
  Pennsylvania: 'PA',
  'Rhode Island': 'RI',
  'South Carolina': 'SC',
  'South Dakota': 'SD',
  Tennessee: 'TN',
  Texas: 'TX',
  Utah: 'UT',
  Vermont: 'VT',
  Virginia: 'VA',
  Washington: 'WA',
  'West Virginia': 'WV',
  Wisconsin: 'WI',
  Wyoming: 'WY',
  'District of Columbia': 'DC',
  Guam: 'GU',
  'Virgin Islands': 'VI',
  'Puerto Rico': 'PR',
  'American Samoa': 'AS'
}

const offsets = {
  'Vermont': [50, -8],
  'New Hampshire': [34, 5],
  'Massachusetts': [30, -5],
  'Rhode Island': [28, 4],
  'Connecticut': [35, 16],
  'New Jersey': [42, 0],
  'Delaware': [33, 0],
  'Maryland': [47, 10],
  'District of Columbia': [30,20],
  'Puerto Rico': [10, -20],
  'Virgin Islands': [10, -10],
  'Guam': [10, -5],
  'American Samoa': [10,0]
}

// SVG ITEMS
const WIDTH = 880;
const HEIGHT = 500;
const PADDING = 25;

// DATA
let { features: counties } = feature(testJSON, testJSON.objects.counties)
let { features: states } = feature(testJSON, testJSON.objects.states);

// CONSTANTS
const STATE_BORDER = '#c0cad4';
const STATE_INACTIVE_FILL = '#F4F7FA';

// CREATE STATE LINES
const projection = geoAlbersUsaTerritories().translate([WIDTH/2,HEIGHT/2])
const path = geoPath().projection(projection)
const stateLines = path(mesh(testJSON, testJSON.objects.states))

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

  console.log('Drawing County Map')

  const {
    state,
    applyTooltipsToGeo,
    data,
    geoClickHandler,
    applyLegendToRow,
    displayGeoName,
    supportedTerritories,
    rebuildTooltips,
    runtimeLegend,
    generateColorsArray
  } = props;
  

  const geoStrokeColor = state.general.geoBorderColor === 'darkGray' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255,255,255,0.7)'
  const focusedState = null;  
  const translate = [0,0];
  const scale = .85;
  const startingLineWidth = 1.3;
  const container = useRef(null)
  let mapColorPalette = colorPalettes[state.color] || '#fff';
  let focusedBorderColor = mapColorPalette[3];
  useEffect(() => rebuildTooltips());


  const geoLabel = (geo, projection) => {
    //projection = geoAlbersUsaTerritories().translate([WIDTH/2,HEIGHT/2])
    //const newProjection = projection.fitExtent([[PADDING, PADDING], [WIDTH - PADDING, HEIGHT - PADDING]], geo)
    let [x, y] = projection( geoCentroid(geo) )
    let abbr = abbrs[geo.properties.name]
    if(abbr === 'NJ') x += 3
    if(undefined === abbr) return null
    let [dx, dy] = offsets[geo.properties.name]
  
    return (
      <>
        <line className="abbrLine" x1={x} y1={y} x2={x + dx} y2={y + dy} stroke="black" strokeWidth={1} />
        <text className="abbrText" x={4} strokeWidth="0" fontSize={13} style={{fill: "#202020"}} alignmentBaseline="middle" transform={`translate(${x + dx}, ${y + dy})`}>
          {abbr}
        </text>
      </>
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
    let myState = states.find(s => s.id === geoKey );
    
    // 2) Set projections translation & scale to the geographic center of the passed geo.
    const projection = geoAlbersUsaTerritories().translate([WIDTH/2,HEIGHT/2])
    const newProjection = projection.fitExtent([[PADDING, PADDING], [WIDTH - PADDING, HEIGHT - PADDING]], myState)

    // 3) Gets the new scale
    const newScale = newProjection.scale();
    const hypot = Math.hypot(880, 500);
    const newScaleWithHypot = newScale / 1070;
    
    // 4) Pull the x & y out, divide by half the viewport for some reason
    let [x, y] = newProjection.translate()
    x = (x - WIDTH/2);
    y = (y - HEIGHT/2);

    // 5) Debug if needed
    const debug = {
      width: WIDTH,
      height: HEIGHT,
      beginX: 0,
      beginY: 0,
      hypot: hypot,
      x: x,
      y: y,
      newScale: newScale,
      newScaleWithHypot: newScaleWithHypot,
      geoKey: geoKey,
      geo: geo
    }

    //console.table(debug)

    // 6) Set Scale/Translate of state
    // setTranslate([x, y])
    // setScale(newScaleWithHypot)

    //setFocusedState(geoKey)
    //container.current.children[1].style.transform = `translate(${[x,y]}) scale(${newScaleWithHypot})`
    const group = document.getElementById('mapGroup');
    group.setAttribute('data-scale', newScaleWithHypot);
    group.setAttribute( 'transform', `translate(${[x,y]}) scale(${newScaleWithHypot})` );

    // set the states border
    let allStates = document.querySelectorAll('.state path');
    let allCounties = document.querySelectorAll('.county path');
    let currentState = document.querySelector(`.state--${myState.id}`);
    let otherStates = document.querySelectorAll(`.state:not(.state--${myState.id})`)
    let focusedBorder = document.getElementById('focusedBorderPath');
    let stateLinesPath = document.getElementById('stateLinesPath');

    const state = testJSON.objects.states.geometries.filter( (el,index) => {
      return el.id === myState.id;
    })

    const focusedStateLine = path(mesh(testJSON, state[0] ))


    currentState.style.display = 'none'
    //allStates.forEach( state => state.style.strokeWidth = .75 / newScaleWithHypot);
    stateLinesPath.setAttribute('stroke-width', .75 / newScaleWithHypot);
    allCounties.forEach( county => county.style.strokeWidth = .75 / newScaleWithHypot);
    otherStates.forEach( el => el.style.display = 'block' )
    
    // State Line Updates
    //stateLinesPath.setAttribute('stroke-width', .75 / newScaleWithHypot);
    stateLinesPath.setAttribute('stroke', geoStrokeColor);

    // Set Focus Border
    focusedBorder.style.display = 'block';
    focusedBorder.setAttribute('d', focusedStateLine);
    focusedBorder.setAttribute('stroke-width', .75 / newScaleWithHypot);
    focusedBorder.setAttribute('stroke', focusedBorderColor)
  }

  /**
   * Resets County Map Scale and Translations to starting points.
   * @param {object} e - click event 
   */
  function onReset(e) {
    e.preventDefault();
    const group = document.getElementById('mapGroup');
    const allStates = document.querySelectorAll('.state path');
    let otherStates = document.querySelectorAll(`.state--inactive`)
    const allCounties = document.querySelectorAll('.county path');
    let stateBorderColor = state.general.geoBorderColor === 'darkGray' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255,255,255,0.7)'
    let stateLinesPath = document.getElementById('stateLinesPath');
    let focusedBorder = document.getElementById('focusedBorderPath');

    focusedBorder.style.display = 'none';
    focusedBorder.setAttribute('stroke', stateBorderColor);
    focusedBorder.style.strokeWidth = startingLineWidth;
    stateLinesPath.setAttribute('stroke', stateBorderColor);
    otherStates.forEach( el => el.style.display = 'none' );
    allCounties.forEach( el => el.style.strokeWidth = .85 )
    allStates.forEach( state => state.setAttribute('stroke-width', .85));
    group.setAttribute( 'transform', `translate(${[0,0]}) scale(${.85})` );
    stateLinesPath.setAttribute( 'stroke-width', startingLineWidth );
    focusedBorder.setAttribute( 'stroke-width', startingLineWidth)
  }

  // Constructs and displays markup for all geos on the map (except territories right now)
  const constructGeoJsx = (geographies, projection) => {
    
    const states = geographies.slice(0, 56);
    const counties = geographies.slice(56)
    let showLabel = true;
    let geosJsx = [];

    const stateOutput = states.map(( {feature: geo, path = ''}) => {
      const key = geo.id + '-group'

      // STATE GROUPS
      let stateStyles = {
        cursor: 'default',
        stroke: STATE_BORDER,
        strokeWidth: 0.75 / scale,
        fill: STATE_INACTIVE_FILL
      }

      let stateSelectedStyles = {
        fillOpacity: 1,
        cursor: 'default',
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
      var fillStyle = {};
        if(!focusedState) {
          fillStyle = { display : 'none' }
        }

        if(focusedState && focusedState !== geo.id) {
          fillStyle = { display : 'block', fill : STATE_INACTIVE_FILL }
        } else {
          fillStyle = { display : 'none' }
        }
        return (
          <>
          <g
            key={key}
            className={`state state--${geo.properties.name}${focusedState === geo.id ? ' state--focused' : ' state--inactive' } state--${geo.id}`}
            style={fillStyle}
          >
              <>
                <path
                  tabIndex={-1}
                  className='state-path'
                  d={path}
                  fillOpacity={`${focusedState !== geo.id ? '1' : '0'}`}
                  fill={STATE_INACTIVE_FILL}
                  css={stateSelectedStyles}
                  onClick={
                    () => focusGeo(geo.id, geo)
                  }
                  onMouseEnter={
                    (e) => {
                      e.target.attributes.fill.value = mapColorPalette[3]
                    }
                  }
                  onMouseLeave={
                    (e) => {
                      e.target.attributes.fill.value = STATE_INACTIVE_FILL
                    }
                  }
                />
              </>
          </g>
          <g key={`label--${geo.properties.name}`}>
            { offsets[geo.properties.name] && geoLabel(geo, geoAlbersUsaTerritories().translate([WIDTH/2,HEIGHT/2]))}
          </g>
          </>
        )
    });

    const countyOutput = counties.map(( {feature: geo, path = ''}) => {
      const key = geo.id + '-group'

      // COUNTY GROUPS
      let styles = {
        fillOpacity: '1',
        fill: '#E6E6E6',
        cursor: 'default'
      }

      // Map the name from the geo data with the appropriate key for the processed data
      let geoKey = geo.id;

      if(!geoKey) return null;

      const geoData = data[geoKey];

      let legendColors;

      // Once we receive data for this geographic item, setup variables.
      if (geoData !== undefined) {
        legendColors = applyLegendToRow(geoData);
      }

      const geoDisplayName = displayGeoName(geoKey);

      // For some reason, these two geos are breaking the display.
      if(geoDisplayName === 'Franklin City' || geoDisplayName === 'Waynesboro') return null;

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
        if ((state.columns.navigate && geoData[state.columns.navigate.name]) || state.tooltips.appearanceType === 'hover') {
          styles.cursor = 'pointer'
        }
        
          return (
            <g
              data-for="tooltip"
              data-tip={tooltip}
              key={key}         
              className={`county county--${geoDisplayName.split(" ").join("")} county--${geoData[state.columns.geo.name]}`}
              css={styles}
              onClick={
                  // default
                  (e) => { 
                    let stateFipsCode = geoData[state.columns.geo.name].substring(0,2);
                    geoClickHandler(geoDisplayName, geoData);
                    // update transform/translate
                    focusGeo(stateFipsCode, geo)
                }
              }
            >
              <path
                tabIndex={-1}
                className={`county county--${geoDisplayName}`}
                stroke={geoStrokeColor}
                d={path}
                strokeWidth=".5"
              />
            </g>
          )
        
      }

      // default county
      return (
        <g
          key={key}
          className={`county county--${geoDisplayName}`}
          css={styles}
          strokeWidth=""
          onClick={
              // default
              (e) => { 
                let countyFipsCode = geo.id;
                let stateFipsCode = countyFipsCode.substring(0,2);
                // update transform/translate
                focusGeo(stateFipsCode, geo)
            }
          }
        >
          <path
            tabIndex={-1}
            className='single-geo'
            stroke={geoStrokeColor}
            d={path}
            strokeWidth=".85"
          />
        </g>
      )
    });

    const renderStateLines = () => {
      return (
        <g className="stateLines" key="stateLines">
          <path id="stateLinesPath" d={stateLines} strokeWidth={startingLineWidth} stroke={geoStrokeColor} fill="none" fillOpacity="1"/>
        </g>
      )
    }

    const renderFocusedStateLine = () => {
      return (
        <g id="focusedBorder" key="focusedStateBorder">
          <path id="focusedBorderPath" d="" strokeWidth="" stroke={focusedBorderColor} fill="none" fillOpacity="1" />
        </g>
      )
    }

    geosJsx.push(countyOutput);
    geosJsx.push(stateOutput);
    geosJsx.push(renderStateLines());
    geosJsx.push(renderFocusedStateLine());

    return geosJsx;
  };

  return (
    <ErrorBoundary component="CountyMap">
        
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio="xMinYMin" ref={container} className="svg-container">
        <rect className="background center-container ocean" width={WIDTH} height={HEIGHT} fillOpacity={1} fill="white" onClick={ (e) => onReset(e) }></rect>
          <CustomProjection data={states.concat(counties)} translate={[WIDTH/2,HEIGHT/2]} projection={geoAlbersUsaTerritories}>
            { ({ features, projection }) => {
              console.log('running projection')
              return (
                <g 
                  id="mapGroup" 
                  className="countyMapGroup" 
                  transform={`translate(${translate}) scale(${scale})`} 
                  data-scale="" 
                  key="countyMapGroup">
                  { constructGeoJsx(features, geoAlbersUsaTerritories) }
                </g>
              )
            }}
          </CustomProjection>
      </svg>
      <button className="btn btn--reset" onClick={onReset}>Reset Zoom</button>
      {/* {territories.length > 0 && (
        <section className="territories">
          <span className="label">{state.general.territoriesLabel}</span>
          {territories}
        </section>
      )} */}
    </ErrorBoundary>
  );
};

export default memo(CountyMap)
