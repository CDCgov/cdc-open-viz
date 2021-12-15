import React, { useState, useEffect, memo, useRef } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/react'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary';
import { geoCentroid, geoPath } from "d3-geo";
import { feature, mesh } from "topojson-client";
import { CustomProjection } from '@visx/geo';
import chroma from 'chroma-js';

import { geoAlbersUsaTerritories } from 'd3-composite-projections';

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


/**
 * TODO: 
 * Decide on JSON and cleanup
 * Original file was county JSON, testJSON includes both state and county level data
 */
import testJSON from '../data/dfc-map.json';
// import testJSON from '../data/newtest.json';
import D3Map from './ClassCountyMap';

console.log('COUNTYJSON', testJSON)

// SVG ITEMS
const WIDTH = 880;
const HEIGHT = 500;
const PADDING = 25;

// When using <AlbersUsa> visx attributes, these are needed.
// I wasn't able to get the transitions working with them.
// const ASPECT_RATIO = 1.55;
// const STARTING_SCALE = (WIDTH - PADDING + HEIGHT - PADDING) / ASPECT_RATIO;
// const STARTING_TRANSLATE = [ WIDTH / 2, HEIGHT / 2];

// DATA
let { features: counties } = feature(testJSON, testJSON.objects.counties)
let { features: states } = feature(testJSON, testJSON.objects.states);

// CONSTANTS
const STATE_BORDER = '#c0cad4';
//const STATE_BORDER_COLOR = '#c0cad4';
const STATE_BORDER_COLOR = '#000';
const STATE_BORDER_FOCUSED = '#B890BB';
const STATE_INACTIVE_FILL = '#F4F7FA';

// CREATE STATE LINES
const projection = geoAlbersUsaTerritories().translate([WIDTH/2,HEIGHT/2])
const path = geoPath().projection(projection)
const stateLines = path(mesh(testJSON, testJSON.objects.states))

// SHAPE FOR TERRITORIES.
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

// const offsets = {
//   'US-VT': [50, -8],
//   'US-NH': [34, 2],
//   'US-MA': [30, -1],
//   'US-RI': [28, 2],
//   'US-CT': [35, 10],
//   'US-NJ': [42, 1],
//   'US-DE': [33, 0],
//   'US-MD': [47, 10]
// };

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

  console.log('RENDERING')

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

  const [translate, setTranslate] = useState( [0,0] )
  
  const [scale, setScale] = useState( .85 )

  // Map
  const container = useRef(null)

  const territoriesKeys = supportedTerritories ? Object.keys(supportedTerritories) : []; // data will have already mapped abbreviated territories to their full names

  // useEffect(() => {
  //   // Territories need to show up if they're in the data at all, not just if they're "active". That's why this is different from Cities
  //   const territoriesList = territoriesKeys.filter(key => data[key]);

  //   setTerritoriesData(territoriesList);
  // }, [data]);

  useEffect(() => rebuildTooltips());

  const geoStrokeColor = state.general.geoBorderColor === 'darkGray' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255,255,255,0.7)'

  // const territories = territoriesData.map(territory => {
  //   const Shape = Rect

  //   const territoryData = data[territory];

  //   let toolTip;

  //   let styles = {
  //     fill: '#E6E6E6',
  //     color: '#202020',
  //     fillOpacity: '1'
  //   };

  //   const label = supportedTerritories[territory][1]

  //   if(!territoryData) return <Shape key={label} label={label} css={styles} text={styles.color} />

  //   toolTip = applyTooltipsToGeo(displayGeoName(territory), territoryData);

  //   const legendColors = applyLegendToRow(territoryData);

  //   let textColor = '#FFF';

  //   if (legendColors) {
  //     // Use white text if the background is dark, and dark grey if it's light
  //     if (chroma.contrast(textColor, legendColors[0]) < 4.5) {
  //       textColor = '#202020';
  //     }

  //     let needsPointer = false;

  //     // If we need to add a pointer cursor
  //     if ((state.columns.navigate && territoryData[state.columns.navigate.name]) || state.tooltips.appearanceType === 'click') {
  //       needsPointer = true;
  //     }

  //     styles = {
  //       color: textColor,
  //       fill: legendColors[0],
  //       cursor: needsPointer ? 'pointer' : 'default',
  //       '&:hover': {
  //         fill: legendColors[1],
  //       },
  //       '&:active': {
  //         fill: legendColors[2],
  //       }
  //     };

  //     return (<Shape
  //       key={label}
  //       label={label}
  //       css={styles}
  //       text={styles.color}
  //       data-tip={toolTip}
  //       data-for="tooltip"
  //       stroke={geoStrokeColor}
  //       strokeWidth={1.5}
  //       onClick={() => geoClickHandler(territory, territoryData)}
  //     />)
  //   }
  // });

  const geoLabel = (geo, projection) => {
    //projection = geoAlbersUsaTerritories().translate([WIDTH/2,HEIGHT/2])
    //const newProjection = projection.fitExtent([[PADDING, PADDING], [WIDTH - PADDING, HEIGHT - PADDING]], geo)
    console.log('LABELS', {geo, projection})
    let [x, y] = projection( geoCentroid(geo) )

    console.log({x,y})
  
    let abbr = abbrs[geo.properties.name]
  
    if(abbr === 'NJ') x += 3

    console.log('ABBR', abbr)
  
    if(undefined === abbr) return null
    
    console.log(geo.properties.name)
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


	// const [storedMap, setStoredMap] = useState();
	// const map = useRef();

	// useEffect(() => {
		
	// 	if(!map.current.children || map.current.children.length === 0) {
	// 		setStoredMap( new D3Map(map.current) );
	// 	}


	// }, [map])
  

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
    console.log(myState)
    let allStates = document.querySelectorAll('.state path');
    let allCounties = document.querySelectorAll('.county path');
    let currentState = document.querySelector(`.state--${myState.id}`);
    let otherStates = document.querySelectorAll(`.state:not(.state--${myState.id})`)
    let focusedBorder = document.getElementById('focusedBorderPath');
    let stateLinesPath = document.getElementById('stateLinesPath');

    const state = testJSON.objects.states.geometries.filter( (el,index) => {
      return el.id === myState.id;
    })

    console.log('STATE', state)

    const focusedStateLine = path(mesh(testJSON, state[0] ))

    // console.log('other states', otherStates)
    // console.log('current', currentState)
    // console.log('focusedBorderPath', focusedBorder)
    console.log('CURRENT', currentState)
    currentState.style.display = 'none'
    allStates.forEach( state => state.style.strokeWidth = .75 / newScaleWithHypot);
    allCounties.forEach( county => county.style.strokeWidth = .75 / newScaleWithHypot);
    otherStates.forEach( el => el.style.display = 'block' )

    
    // Set Focus Border
    focusedBorder.setAttribute('d', focusedStateLine);
    focusedBorder.setAttribute('stroke-width', .75 / newScaleWithHypot);

    // State Line Updates
    stateLinesPath.setAttribute('stroke-width', .75 / newScaleWithHypot);
  }

  /**
   * Resets County Map Scale and Translations to starting points.
   * @param {object} e - click event 
   */
  function onReset(e) {
    e.preventDefault();
    const group = document.getElementById('mapGroup');
    const allStates = document.querySelectorAll('.state');
    const allCounties = document.querySelectorAll('.county path');
    const geoStrokeColor = state.general.geoBorderColor === 'darkGray' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255,255,255,0.7)'
    let stateLinesPath = document.getElementById('stateLinesPath');


    allCounties.forEach( el => el.style.strokeWidth = .2 )
    allCounties.forEach( el => el.setAttribute('stroke' , geoStrokeColor ) )
    allStates.forEach( el => el.style.display = 'none' );
    group.setAttribute( 'transform', `translate(${[0,0]}) scale(${.85})` );
    stateLinesPath.setAttribute( 'stroke-width', '.2' );
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
        fill: STATE_INACTIVE_FILL,
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
                  css={stateSelectedStyles}
                  onClick={
                    () => focusGeo(geo.id, geo)
                  }
                />
              </>
          </g>
          <g>
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
        fill: '#FFF',
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
                d={path}
                strokeWidth=".2"
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
                console.log(geo)
                let countyFipsCode = geo.id;
                let stateFipsCode = countyFipsCode.substring(0,2);
                // update transform/translate
                console.log('GEO', geo)
                focusGeo(stateFipsCode, geo)
            }
          }
        >
          <path
            tabIndex={-1}
            className='single-geo'
            stroke={geoStrokeColor}
            d={path}
            strokeWidth=".2"
          />
        </g>
      )
    });

    const renderStateLines = () => {
      return (
        <g className="stateLines" key="stateLines">
          <path id="stateLinesPath" d={stateLines} stroke-width={".2"} stroke={STATE_BORDER_COLOR} fill="none" fillOpacity="1"/>
        </g>
      )
    }

    const renderFocusedStateLine = () => {
      return (
        <g id="focusedBorder" key="focusedStateBorder">
          <path id="focusedBorderPath" d="" stroke-width="" stroke={STATE_BORDER_FOCUSED} fill="none" fillOpacity="1" />
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
      {/* <div className="countyMap" ref={map}></div> */}
        
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio="xMinYMin" ref={container} className="svg-container">
        <rect className="background center-container ocean" width={WIDTH} height={HEIGHT} fillOpacity={1} fill="#E5F4FF" onClick={ (e) => onReset(e) }></rect>
          <CustomProjection data={states.concat(counties)} translate={[WIDTH/2,HEIGHT/2]} projection={geoAlbersUsaTerritories}>
            { ({ features, projection }) => {
              return (
                <g id="mapGroup" className="countyMapGroup" transform={`translate(${translate}) scale(${scale})`} data-scale="">
                  { constructGeoJsx(features, geoAlbersUsaTerritories) }
                </g>
                  )
                }
              }
          </CustomProjection>
      </svg>
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
