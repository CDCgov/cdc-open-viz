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
    // Modern chart palettes for v2
    'qualitative-bold': [
      '#0057b7', '#722161', '#00b1ce', '#d94e5f', '#5a8e3f', 
      '#ffb24d', '#fb7e38', '#032659', '#975722', '#DFE1E2'
    ],
    'qualitative-soft': [
      '#6197d2', '#af8caa', '#5ebfb3', '#f7c5a8', '#a8c68f',
      '#fed49c', '#faa478', '#8bb5d9', '#c9a96e', '#e1e1e1'
    ],
    qualitative1: ['#0057b7', '#722161', '#00b1ce', '#d94e5f', '#5a8e3f', '#ffb24d', '#fb7e38', '#032659', '#975722', '#DFE1E2'],
    qualitative2: sharedPalettes.qualitative2,
    qualitative3: sharedPalettes.qualitative3,
    qualitative4: sharedPalettes.qualitative4,
    'sequential-blue': ['#dbe8f7', '#bed5ed', '#99bce1', '#73a1d5', '#4e88c7', '#1e6bc0'],
    'sequential-teal': ['#e5fafc', '#b3e3ed', '#80cddf', '#4db8d1', '#00b1ce', '#03a2bd'],
    'sequential-orange': ['#ffe4d5', '#fed0b6', '#f7b99a', '#ed9e7c', '#e58061', '#db6b49'],
    'sequential-green': ['#d5f9f6', '#aeece7', '#85ded7', '#63d2ca', '#3bbcaf', '#14a594'],
    colorblindsafe: sharedPalettes.colorblindsafe
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