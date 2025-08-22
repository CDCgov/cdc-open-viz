import { updatePaletteNames } from '../helpers/updatePaletteNames'

// Chart-specific color palettes

const colorPalettes2 = {
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
  qualitative1: [
    '#a6cee3',
    '#1f78b4',
    '#b2df8a',
    '#33a02c',
    '#fb9a99',
    '#e31a1c',
    '#6a3d9a',
    '#cab2d6',
    '#e31a90',
    '#15017a',
    '#c2c0fc'
  ],

  qualitative2: ['#7fc97f', '#beaed4', '#ff9', '#386cb0', '#f0027f', '#bf5b17', '#666', '#fedab8'],

  qualitative3: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666'],

  qualitative4: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ff3', '#a65628', '#f781bf'],

  'sequential-blue': ['#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#084594'],
  'sequential-blue-2-(MPX)': ['#d5f6f9', '#99e2ed', '#5fb6d1', '#3189b0', '#116091', '#0a3e72'],
  'sequential-orange-(MPX)': ['#ffefcf', '#ffd49c', '#f7a866', '#eb7723', '#b95117', '#862b0b'],
  'sequential-green': ['#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#005a32'],

  colorblindsafe: ['#e69f00', '#56b4e9', '#009e73', '#f0e442', '#0072b2', '#d55e00', '#cc79a7', '#000000', '#7e5803']
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
  'Sequential Blue Three': [
    '#f5feff',
    '#e1fbff',
    '#c0f2fd',
    '#94e2ed',
    '#5ebad4',
    '#3695be',
    '#2273a0',
    '#0e5181',
    '#093460'
  ],
  'Sequential Orange': ['#ffefcf', '#ffd49c', '#f7a866', '#eb7723', '#b95117', '#862b0b'],
  'Sequential Orange Two': [
    '#fffdf0',
    '#fff7dc',
    '#ffe9c2',
    '#ffd097',
    '#f7a866',
    '#eb7723',
    '#b95117',
    '#853209',
    '#661f00'
  ],
  'Sequential Green': ['#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#005a32']
}

// Process and export chart color palettes
export const sequentialPalettes = sequentialColors
export const colorPalettesChart = updatePaletteNames(colorPalettes2)
export const twoColorPalette = updatePaletteNames(colorPalettes3)