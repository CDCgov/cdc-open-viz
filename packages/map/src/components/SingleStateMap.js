import React, { useState, useEffect, memo, useRef } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/react'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary';
import { geoCentroid, geoPath } from "d3-geo";
import { feature, mesh } from "topojson-client";
import { CustomProjection } from '@visx/geo';
import colorPalettes from '../../../core/data/colorPalettes';
import { geoAlbersUsaTerritories } from 'd3-composite-projections';
import testJSON from '../data/county-map.json';

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
// const projection = geoAlbersUsaTerritories().translate([WIDTH/2,HEIGHT/2])



const SingleStateMap = (props) => {

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
    generateColorsArray,
    handleMapAriaLabels
  } = props;



  const projection = geoAlbersUsaTerritories().translate([WIDTH/2, HEIGHT/2])

  const geoStrokeColor = state.general.geoBorderColor === 'darkGray' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255,255,255,0.7)'
  
  const [stateToShow, setStateToShow ] = useState( null )
  const [countiesToShow, setCountiesToShow] = useState( null )
  const [translate, setTranslate] = useState()
  const [scale, setScale] = useState()
  const [strokeWidth, setStrokeWidth ] = useState(.75)

  let mapColorPalette = colorPalettes[state.color] || '#fff';
  let focusedBorderColor = mapColorPalette[3];
  useEffect(() => rebuildTooltips());

  const path = geoPath().projection(projection)

  // When choosing a state changes...
  useEffect(() => {
	  if(state.general.hasOwnProperty('statePicked')) {
	  	let statePicked = state.general.statePicked.stateName;
	  	let statePickedData = states.find(s => s.properties.name === statePicked)
		setStateToShow(statePickedData)

		let countiesFound = counties.filter( c => c.id.substring(0,2) === state.general.statePicked.fipsCode)

		setCountiesToShow(countiesFound)
    
		const projection = geoAlbersUsaTerritories().translate([WIDTH/2,HEIGHT/2])
		const newProjection = projection.fitExtent([[PADDING, PADDING], [WIDTH - PADDING, HEIGHT - PADDING]], statePickedData)
		const newScale = newProjection.scale();
		const newScaleWithHypot = newScale / 1070;
		
		let [x, y] = newProjection.translate()
		x = (x - WIDTH/2);
		y = (y - HEIGHT/2);

		setTranslate([x,y])
		setScale(newScaleWithHypot)
		
	  }
  }, [state.general.statePicked]);

  const geoLabel = (geo, projection) => {
    //projection = geoAlbersUsaTerritories().translate([WIDTH/2,HEIGHT/2])
    //const newProjection = projection.fitExtent([[PADDING, PADDING], [WIDTH - PADDING, HEIGHT - PADDING]], geo)
    let [x, y] = projection( geoCentroid(geo) )
    let abbr = abbrs[geo.properties.name]
    if (abbr === 'NJ') x += 3
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

  // Constructs and displays markup for all geos on the map (except territories right now)
  const constructGeoJsx = (geographies, projection) => {
	  	const statePassed = geographies[0].feature.states;
	  	const counties = geographies[0].feature.counties;

		let geosJsx = [];


    const StateOutput = () => {

		let geo = testJSON.objects.states.geometries.filter( s => {
			return s.id === statePassed.id
		})

		
		// const stateLine = path(mesh(testJSON, lines ))
		let stateLines = path(mesh(testJSON, geo[0]))
        return (
          <g
            key={'single-state'}
            className="single-state"
            style={{ fill: '#E6E6E6'}}
			      stroke={geoStrokeColor}
			      strokeWidth={ .95 / scale }
          >
                <path
                  tabIndex={-1}
                  className='state-path'
                  d={stateLines}
                />
          </g>
        )
    };

	const countyOutput = ( counties.map(( county ) => {
    

    // Map the name from the geo data with the appropriate key for the processed data
    let geoKey = county.id;

    if(!geoKey) return;

		let countyPath = path(county);
    
    let geoData = data[county.id];
    let legendColors;

    // Once we receive data for this geographic item, setup variables.
    if (geoData !== undefined ) {
      legendColors = applyLegendToRow(geoData);
    }

    const geoDisplayName = displayGeoName(geoKey);

    // For some reason, these two geos are breaking the display.
    if (geoDisplayName === 'Franklin City' || geoDisplayName === 'Waynesboro') return null;

    const tooltip = applyTooltipsToGeo(geoDisplayName, geoData);
    
    if (legendColors && legendColors[0] !== '#000000') {


      let styles = {
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
              key={`key--${county.id}`}         
              className={`county county--${geoDisplayName.split(" ").join("")} county--${geoData[state.columns.geo.name]}`}
              css={styles}
              onClick={() => geoClickHandler(geoDisplayName, geoData)}
            >
              <path
                tabIndex={-1}
                className={`county`}
                stroke={geoStrokeColor}
                d={countyPath}
                strokeWidth={ .75 / scale }
              />
            </g>
          )
	} else {
		return (
      <g
        data-for="tooltip"
        data-tip={tooltip}
        key={`key--${county.id}`}         
        className={`county county--${geoDisplayName.split(" ").join("")}`}
        style={{ fill : '#e6e6e6'}}
      >
        <path
          tabIndex={-1}
          className={`county`}
          stroke={geoStrokeColor}
          d={countyPath}
          strokeWidth={ .75 / scale }
        />
      </g>
    )
  }

}));


    geosJsx.push( <StateOutput /> );
	geosJsx.push( countyOutput );

    return geosJsx;
  };

  return (
    <ErrorBoundary component="SingleStateMap">
		{stateToShow &&
			<svg 
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`} 
        preserveAspectRatio="xMinYMin" 
        className="svg-container" 
        role="img"
        aria-label={handleMapAriaLabels(state)}
      >
				<rect className="background center-container ocean" width={WIDTH} height={HEIGHT} fillOpacity={1} fill="white"></rect>
				<CustomProjection 
					data={ [{states: stateToShow, counties: countiesToShow }] } 
					// translate={translate}
					// scale={scale} 
					projection={geoAlbersUsaTerritories}
					fitExtent={[[[PADDING, PADDING], [WIDTH - PADDING, HEIGHT - PADDING]], stateToShow]}
					>
					{ ({ features, projection }) => {
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
		}
		{!stateToShow && 'No State Picked'}
    </ErrorBoundary>
  );
};

export default memo(SingleStateMap)
