// This script is designed to modify exported topojson from https://mapshaper.org/ into a format for use by the <CdcMap /> component so it has less work to do at runtime.
const fs = require('fs');

const supportedStates = {
    // States
    'US-AL': ['Alabama', 'AL'],
    'US-AK': ['Alaska', 'AK'],
    'US-AZ': ['Arizona', 'AZ'],
    'US-AR': ['Arkansas', 'AR'],
    'US-CA': ['California', 'CA'],
    'US-CO': ['Colorado', 'CO'],
    'US-CT': ['Connecticut', 'CT'],
    'US-DE': ['Delaware', 'DE'],
    'US-FL': ['Florida', 'FL'],
    'US-GA': ['Georgia', 'GA'],
    'US-HI': ['Hawaii', 'HI'],
    'US-ID': ['Idaho', 'ID'],
    'US-IL': ['Illinois', 'IL'],
    'US-IN': ['Indiana', 'IN'],
    'US-IA': ['Iowa', 'IA'],
    'US-KS': ['Kansas', 'KS'],
    'US-KY': ['Kentucky', 'KY'],
    'US-LA': ['Louisiana', 'LA'],
    'US-ME': ['Maine', 'ME'],
    'US-MD': ['Maryland', 'MD'],
    'US-MA': ['Massachusetts', 'MA'],
    'US-MI': ['Michigan', 'MI'],
    'US-MN': ['Minnesota', 'MN'],
    'US-MS': ['Mississippi', 'MS'],
    'US-MO': ['Missouri', 'MO'],
    'US-MT': ['Montana', 'MT'],
    'US-NE': ['Nebraska', 'NE'],
    'US-NV': ['Nevada', 'NV'],
    'US-NH': ['New Hampshire', 'NH'],
    'US-NJ': ['New Jersey', 'NJ'],
    'US-NM': ['New Mexico', 'NM'],
    'US-NY': ['New York', 'NY'],
    'US-NC': ['North Carolina', 'NC'],
    'US-ND': ['North Dakota', 'ND'],
    'US-OH': ['Ohio', 'OH'],
    'US-OK': ['Oklahoma', 'OK'],
    'US-OR': ['Oregon', 'OR'],
    'US-PA': ['Pennsylvania', 'PA'],
    'US-RI': ['Rhode Island', 'RI'],
    'US-SC': ['South Carolina', 'SC'],
    'US-SD': ['South Dakota', 'SD'],
    'US-TN': ['Tennessee', 'TN'],
    'US-TX': ['Texas', 'TX'],
    'US-UT': ['Utah', 'UT'],
    'US-VT': ['Vermont', 'VT'],
    'US-VA': ['Virginia', 'VA'],
    'US-WA': ['Washington', 'WA'],
    'US-WV': ['West Virginia', 'WV'],
    'US-WI': ['Wisconsin', 'WI'],
    'US-WY': ['Wyoming', 'WY'],
  };

const arr = Object.keys(supportedStates)

let us = require('./src/data/us_source.json')

us.objects.states.geometries.filter(row => {
    if(row.properties.iso) return true

    let iso = row.properties['iso_3166_2'] // ADM0_A3_US for world

    row.properties = {iso}
})

fs.writeFileSync('./src/data/us-topo.json', JSON.stringify(us))