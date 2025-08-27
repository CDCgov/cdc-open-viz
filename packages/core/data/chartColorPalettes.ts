import { updatePaletteNames } from '../helpers/updatePaletteNames'
import { sharedPalettes } from './sharedPalettes'

// Chart-specific color palettes with versioned structure

const chartColorPalettesData = {
  v1: {
  'qualitative-bold': [
    '#377eb8',
    '#ff7f00',
    '#4daf4a',
    '#984ea3',
    '#e41a1c',
    '#ffff33',
    '#a65628',
    '#f781bf',
    '#3399CC'
  ],

  'qualitative-soft': [
    '#a6cee3',
    '#1f78b4',
    '#b2df8a',
    '#33a02c',
    '#fb9a99',
    '#e31a1c',
    '#fdbf6f',
    '#ff7f00',
    '#aca9eb'
  ],
  qualitative1: sharedPalettes.qualitative1,

  qualitative2: sharedPalettes.qualitative2,

  qualitative3: sharedPalettes.qualitative3,

  qualitative4: sharedPalettes.qualitative4,

  'sequential-blue': ['#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#084594'],
  'sequential-blue-2-(MPX)': ['#d5f6f9', '#99e2ed', '#5fb6d1', '#3189b0', '#116091', '#0a3e72'],
  'sequential-orange-(MPX)': ['#ffefcf', '#ffd49c', '#f7a866', '#eb7723', '#b95117', '#862b0b'],
  'sequential-green': ['#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#005a32'],

  colorblindsafe: sharedPalettes.colorblindsafe
  },
  v2: {
    // New standardized v2 palettes per migration guide (lowercase prefixes for filtering)
    'sequential-orange': ['#FFE4D5', '#FED0B6', '#F7B99A', '#ED9E7C', '#E58061', '#DB6B49', '#C95936', '#A8462C', '#702B1D'],
    'sequential-purple': ['#E2D3DF', '#CDB2C8', '#B78FAF', '#A6739B', '#935586', '#823A73', '#722161', '#5F2359', '#47264F'],
    'sequential-blue': ['#DBE8F7', '#BED5ED', '#99BCE1', '#73A1D5', '#4E88C7', '#1E6BC0', '#0057B7', '#01418D', '#032659'],
    'sequential-green': ['#D5F9F6', '#AEECE7', '#85DED7', '#63D2CA', '#3BBCAF', '#14A594', '#0A937F', '#0F7A68', '#105B4D'],
    'qualitative-standard': ['#DFE1E2', '#0057B7', '#722161', '#00B1CE', '#D94E5F', '#5A8E3F', '#FFB24D', '#FB7E38', '#032659', '#975722'],
    'colorblindsafe': ['#DFE1E2', '#0057B7', '#722161', '#00B1CE', '#D94E5F', '#5A8E3F', '#FFB24D', '#FB7E38', '#032659', '#975722'],
    
    // New v2-only palettes (no migration needed)
    'sequential-teal': ['#e5fafc', '#b3e3ed', '#80cddf', '#4db8d1', '#00b1ce', '#03a2bd', '#0690a6', '#0d6e81', '#125261'],
    'divergent-bluecyan': ['#032659', '#014697', '#1D6ABF', '#6197D2', '#C1D2DB', '#5CCBDE', '#01ACC9', '#097F95', '#125261'],
    'divergent-bluepurple': ['#032659', '#014697', '#1D6ABF', '#6197D2', '#C4CDE1', '#AF8CAA', '#935586', '#7C256B', '#47264F'],
    'divergent-greenorange': ['#105B4D', '#16806E', '#3EA394', '#5EBFB3', '#FABF61', '#EE956C', '#E27447', '#AC4726', '#702B1D'],
    'divergent-blueorange': ['#032659', '#0057B7', '#0092C6', '#55B1A3', '#FFB24D', '#EA803B', '#DD622F', '#AF3423', '#660F14']
  }
}

export const colorPalettes3 = {
  'monochrome-1': ['#a6cee3', '#15017a'],
  'monochrome-2': ['#c2c0fc', '#15017a'],
  'monochrome-3': ['#cab2d6', '#6a3d9a'],
  'monochrome-4': ['#c2c0fc', '#6a3d9a'],
  'monochrome-5': ['#fedab8', '#bf5b17'],
  'cool-1': ['#b2df8a', '#1f78b4'],
  'cool-2': ['#a6cee3', '#72d66b'],
  'cool-3': ['#c2c0fc', '#386cb0'],
  'cool-4': ['#72d66b', '#6a3d9a'],
  'cool-5': ['#a6cee3', '#6a3d9a'],
  'warm-1': ['#e31a1c', '#fedab8'],
  'complementary-1': ['#1f78b4', '#e6ab02'],
  'complementary-2': ['#1f78b4', '#ff7f00'],
  'complementary-3': ['#6a3d9a', '#ff7f00'],
  'complementary-4': ['#6a3d9a', '#e6ab02'],
  'complementary-5': ['#df168c', '#1eb386']
}

const sequentialColors = {
  'Sequential Blue': ['#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#084594'],
  'Sequential Blue Two': ['#d5f6f9', '#99e2ed', '#5fb6d1', '#3189b0', '#116091', '#0a3e72'],
  'Sequential Blue Three': sharedPalettes.sequentialBlueNine,
  'Sequential Orange': ['#ffefcf', '#ffd49c', '#f7a866', '#eb7723', '#b95117', '#862b0b'],
  'Sequential Orange Two': sharedPalettes.sequentialOrangeNine,
  'Sequential Green': ['#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#005a32']
}

// Process and export chart color palettes with versioned structure
export const chartColorPalettes = {
  v1: updatePaletteNames(chartColorPalettesData.v1),
  v2: updatePaletteNames(chartColorPalettesData.v2)
}

export const sequentialPalettes = sequentialColors
export const colorPalettesChart = chartColorPalettes.v1 // backwards compatibility
export const colorPalettesChartV1 = chartColorPalettes.v1
export const colorPalettesChartV2 = chartColorPalettes.v2
export const twoColorPalette = updatePaletteNames(colorPalettes3)