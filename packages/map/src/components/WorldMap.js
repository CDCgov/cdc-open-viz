import React, { useState, useEffect, useMemo } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/react'
import ErrorBoundary from '@cdc/core/components/ErrorBoundary';
import { geoMercator  } from "d3-geo";
import { Mercator } from '@visx/geo';
import { feature } from "topojson-client";
import topoJSON from '../data/world-topo.json';
import ZoomableGroup from './ZoomableGroup';
import Geo from './Geo'
import CityList from './CityList';

const { features: world } = feature(topoJSON, topoJSON.objects.countries)

let projection = geoMercator()

let topoToIso = {
  "Zimbabwe": "ZWE",
  "Zambia": "ZMB",
  "Yemen": "YEM",
  "Vietnam": "VNM",
  "Venezuela": "VEN",
  "Vatican": "VAT",
  "Vanuatu": "VUT",
  "Uzbekistan": "UZB",
  "Uruguay": "URY",
  "Micronesia": "FSM",
  "Marshall Is.": "MHL",
  "N. Mariana Is.": "MNP",
  "U.S. Virgin Is.": "VIR",
  "Guam": "GUM",
  "American Samoa": "ASM",
  "Puerto Rico": "PRI",
  "United States of America": "USA",
  "S. Geo. and the Is.": "SGS",
  "Saint Helena": "SHN",
  "Pitcairn Is.": "PCN",
  "Anguilla": "AIA",
  "Falkland Is.": "FLK",
  "Cayman Is.": "CYM",
  "Bermuda": "BMU",
  "British Virgin Is.": "VGB",
  "Turks and Caicos Is.": "TCA",
  "Montserrat": "MSR",
  "Jersey": "JEY",
  "Guernsey": "GGY",
  "Isle of Man": "IMN",
  "United Kingdom": "GBR",
  "United Arab Emirates": "ARE",
  "Ukraine": "UKR",
  "Uganda": "UGA",
  "Turkmenistan": "TKM",
  "Turkey": "TUR",
  "Tunisia": "TUN",
  "Trinidad and Tobago": "TTO",
  "Tonga": "TON",
  "Togo": "TGO",
  "Timor-Leste": "TLS",
  "Thailand": "THA",
  "Tanzania": "TZA",
  "Tajikistan": "TJK",
  "Taiwan": "TWN",
  "Syria": "SYR",
  "Switzerland": "CHE",
  "Sweden": "SWE",
  "eSwatini": "SWZ",
  "Suriname": "SUR",
  "S. Sudan": "SSD",
  "Sudan": "SDN",
  "Sri Lanka": "LKA",
  "Spain": "ESP",
  "South Korea": "KOR",
  "South Africa": "ZAF",
  "Somalia": "SOM",
  "Somaliland": "SOM",
  "Solomon Is.": "SLB",
  "Slovakia": "SVK",
  "Slovenia": "SVN",
  "Singapore": "SGP",
  "Sierra Leone": "SLE",
  "Seychelles": "SYC",
  "Serbia": "SRB",
  "Senegal": "SEN",
  "Saudi Arabia": "SAU",
  "São Tomé and Principe": "STP",
  "San Marino": "SMR",
  "Samoa": "WSM",
  "St. Vin. and Gren.": "VCT",
  "Saint Lucia": "LCA",
  "St. Kitts and Nevis": "KNA",
  "Rwanda": "RWA",
  "Russia": "RUS",
  "Romania": "ROU",
  "Qatar": "QAT",
  "Portugal": "PRT",
  "Poland": "POL",
  "Philippines": "PHL",
  "Peru": "PER",
  "Paraguay": "PRY",
  "Papua New Guinea": "PNG",
  "Panama": "PAN",
  "Palau": "PLW",
  "Pakistan": "PAK",
  "Oman": "OMN",
  "Norway": "NOR",
  "North Korea": "PRK",
  "Nigeria": "NGA",
  "Niger": "NER",
  "Nicaragua": "NIC",
  "New Zealand": "NZL",
  "Niue": "NIU",
  "Cook Is.": "COK",
  "Netherlands": "NLD",
  "Aruba": "ABW",
  "Curaçao": "CUW",
  "Nepal": "NPL",
  "Nauru": "NRU",
  "Namibia": "NAM",
  "Mozambique": "MOZ",
  "Morocco": "MAR",
  "W. Sahara": "ESH",
  "Montenegro": "MNE",
  "Mongolia": "MNG",
  "Monaco": "MCO",
  "Mexico": "MEX",
  "Mauritius": "MUS",
  "Mauritania": "MRT",
  "Malta": "MLT",
  "Mali": "MLI",
  "Maldives": "MDV",
  "Malaysia": "MYS",
  "Malawi": "MWI",
  "Madagascar": "MDG",
  "Macedonia": "MKD",
  "Luxembourg": "LUX",
  "Lithuania": "LTU",
  "Liechtenstein": "LIE",
  "Libya": "LBY",
  "Liberia": "LBR",
  "Lesotho": "LSO",
  "Lebanon": "LBN",
  "Latvia": "LVA",
  "Laos": "LAO",
  "Kyrgyzstan": "KGZ",
  "Kuwait": "KWT",
  "Kosovo": "XKX",
  "Kiribati": "KIR",
  "Kenya": "KEN",
  "Kazakhstan": "KAZ",
  "Jordan": "JOR",
  "Japan": "JPN",
  "Jamaica": "JAM",
  "Italy": "ITA",
  "Israel": "ISR",
  "Palestine": "PSE",
  "Ireland": "IRL",
  "Iraq": "IRQ",
  "Iran": "IRN",
  "Indonesia": "IDN",
  "India": "IND",
  "Iceland": "ISL",
  "Hungary": "HUN",
  "Honduras": "HND",
  "Haiti": "HTI",
  "Guyana": "GUY",
  "Guinea-Bissau": "GNB",
  "Guinea": "GIN",
  "Guatemala": "GTM",
  "Grenada": "GRD",
  "Greece": "GRC",
  "Ghana": "GHA",
  "Germany": "DEU",
  "Georgia": "GEO",
  "Gambia": "GMB",
  "Gabon": "GAB",
  "France": "FRA",
  "St. Pierre and Miquelon": "SPM",
  "Wallis and Futuna Is.": "WLF",
  "St-Martin": "MAF",
  "St-Barthélemy": "BLM",
  "Fr. Polynesia": "PYF",
  "New Caledonia": "NCL",
  "Fr. S. Antarctic Lands": "ATF",
  "Åland": "ALA",
  "Finland": "FIN",
  "Fiji": "FJI",
  "Ethiopia": "ETH",
  "Estonia": "EST",
  "Eritrea": "ERI",
  "Eq. Guinea": "GNQ",
  "El Salvador": "SLV",
  "Egypt": "EGY",
  "Ecuador": "ECU",
  "Dominican Rep.": "DOM",
  "Dominica": "DMA",
  "Djibouti": "DJI",
  "Greenland": "GRL",
  "Faeroe Is.": "FRO",
  "Denmark": "DNK",
  "Czechia": "CZE",
  "N. Cyprus": "CYP",
  "Cyprus": "CYP",
  "Cuba": "CUB",
  "Croatia": "HRV",
  "Côte d'Ivoire": "CIV",
  "Costa Rica": "CRI",
  "Dem. Rep. Congo": "COD",
  "Congo": "COG",
  "Comoros": "COM",
  "Colombia": "COL",
  "China": "CHN",
  "Macao": "MAC",
  "Hong Kong": "HKG",
  "Chile": "CHL",
  "Chad": "TCD",
  "Central African Rep.": "CAF",
  "Cabo Verde": "CPV",
  "Canada": "CAN",
  "Cameroon": "CMR",
  "Cambodia": "KHM",
  "Myanmar": "MMR",
  "Burundi": "BDI",
  "Burkina Faso": "BFA",
  "Bulgaria": "BGR",
  "Brunei": "BRN",
  "Brazil": "BRA",
  "Botswana": "BWA",
  "Bosnia and Herz.": "BIH",
  "Bolivia": "BOL",
  "Bhutan": "BTN",
  "Benin": "BEN",
  "Belize": "BLZ",
  "Belgium": "BEL",
  "Belarus": "BLR",
  "Barbados": "BRB",
  "Bangladesh": "BGD",
  "Bahrain": "BHR",
  "Bahamas": "BHS",
  "Azerbaijan": "AZE",
  "Austria": "AUT",
  "Australia": "AUS",
  "Heard I. and McDonald Is.": "HMD",
  "Norfolk Island": "NFK",
  "Ashmore and Cartier Is.": "AUS",
  "Armenia": "ARM",
  "Argentina": "ARG",
  "Antigua and Barb.": "ATG",
  "Angola": "AGO",
  "Andorra": "AND",
  "Algeria": "DZA",
  "Albania": "ALB",
  "Afghanistan": "AFG",
  "Sint Maarten": "SXM"
}

const handleZoomIn = (position, setPosition) => {
  if (position.zoom >= 4) return;
  setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.5 }));
};

const handleZoomOut = (position, setPosition) => {
  if (position.zoom <= 1) return;
  setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.5 }));
};

const ZoomControls = ({position, setPosition}) => (
  <div className="zoom-controls" data-html2canvas-ignore>
    <button onClick={() => handleZoomIn(position, setPosition)}>
      <svg
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="3"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </button>
    <button onClick={() => handleZoomOut(position, setPosition)}>
      <svg
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="3"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </button>
  </div>
);

const WorldMap = (props) => {
  const {
    state,
    applyTooltipsToGeo,
    data,
    geoClickHandler,
    applyLegendToValue,
    displayGeoName,
    supportedCountries,
    countryValues,
    rebuildTooltips
  } = props;

  const [position, setPosition] = useState({ coordinates: [0, 20], zoom: 1.3 });

  useEffect(() => rebuildTooltips());

  const handleMoveEnd = (position) => {
    setPosition(position);
  };

  const styles = {
    container: {
      position: 'relative',
      height: 0,
      paddingBottom: '50%'
    },
    innerContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    map: {
      // width: '100%',
      // height: '100%',
      // overflow: 'hidden',
    }
  };

  const constructGeoJsx = (geographies) => {
    const geosJsx = geographies.map(({ feature: geo, path }, i) => {
      const geoKey = topoToIso[geo.properties.name]

      if(!geoKey) return

      const geoData = data[geoKey];

      const geoDisplayName = displayGeoName(supportedCountries[geoKey][0]);

      let legendColors;

      // Once we receive data for this geographic item, setup variables.
      if (geoData !== undefined) {
        legendColors = applyLegendToValue(geoData);
      }

      const geoStrokeColor = state.general.geoBorderColor === 'darkGray' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255,255,255,0.7)'

      let styles = {
        stroke: geoStrokeColor,
        strokeWidth: '0.9px',
        fill: '#E6E6E6',
        cursor: 'default',
        paintOrder: 'stroke'
      }

      // If a legend applies, return it with appropriate information.
      if (legendColors && legendColors[0] !== '#000000') {
        const tooltip = applyTooltipsToGeo(geoDisplayName, geoData);

          styles = {
            ...styles,
            fill: legendColors[0],
            stroke: geoStrokeColor,
            cursor: 'default',
            '&:hover': {
              fill: legendColors[1],
              stroke: geoStrokeColor
            },
            '&:active': {
              fill: legendColors[2],
              stroke: geoStrokeColor
            },
          };

        // When to add pointer cursor
        if ((state.columns.navigate && geoData[state.columns.navigate.name]) || state.tooltips.appearanceType === 'click') {
          styles.cursor = 'pointer'
        }

        return (
          <Geo
            key={i + '-geo'}
            css={styles}
            data-for="tooltip"
            data-tip={tooltip}
            path={path}
            onClick={() => geoClickHandler(geoDisplayName, geoData)}
          />
        )
      }

      // Default return state, just geo with no additional information
      return <Geo key={i + '-geo'} css={styles} path={path} />
    });

    return geosJsx;
  };

  return (
    <ErrorBoundary component="WorldMap">
      <svg
        viewBox="0 0 880 500"
        style={styles.map}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
          maxZoom={4}
          projection={projection}
          width={880}
          height={500}
        >
          <Mercator
            data={world}
          >
            {({features}) => constructGeoJsx(features)}
          </Mercator>
        </ZoomableGroup>
      </svg>
      {state.general.type === 'data' && <ZoomControls position={position} setPosition={setPosition} />}
    </ErrorBoundary>
  );
};

export default WorldMap;
