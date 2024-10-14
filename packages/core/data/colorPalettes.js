import { update } from 'lodash'
import { updatePaletteNames } from '../helpers/updatePaletteNames'

const colorPalettesMap = {
  yelloworangered: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
  yelloworangebrown: [
    '#ffffe5',
    '#fff7bc',
    '#fee391',
    '#fec44f',
    '#fe9929',
    '#ec7014',
    '#cc4c02',
    '#993404',
    '#662506'
  ],
  pinkpurple: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
  bluegreen: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
  orangered: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
  red: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
  greenblue: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#267BA6', '#0868ac', '#084081'],
  yellowpurple: ['#FFF0B0', '#F5CC76', '#EDAE4B', '#E3683C', '#BF2A48', '#6D2059', '#8F0C4B', '#310958', '#0E0943'],
  qualitative1: [
    '#a6cee3',
    '#1f78b4',
    '#b2df8a',
    '#33a02c',
    '#fb9a99',
    '#e31a1c',
    '#6a3d9a',
    '#cab2d6',
    '#E31A90',
    '#15017A',
    '#C2C0FC'
  ],
  qualitative2: ['#7fc97f', '#beaed4', '#ff9', '#386cb0', '#f0027f', '#bf5b17', '#666', '#fedab8'],
  qualitative3: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666'],
  qualitative4: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ff3', '#a65628', '#f781bf'],
  // qualitative9 doesn't appear to be used anywhere...
  qualitative9: ['#497d0c', '#84BC49', '#88c3ea', '#fcad90', '#f26b4f', '#c31b1f', '#c31b1f'],
  'sequential-blue-2(MPX)': [
    '#F5FEFF',
    '#E1FBFF',
    '#C0F2FD',
    '#94E2ED',
    '#5EBAD4',
    '#3695BE',
    '#2273A0',
    '#0E5181',
    '#093460'
  ],
  'sequential-orange(MPX)': [
    '#FFFDF0',
    '#FFF7DC',
    '#FFE9C2',
    '#FFD097',
    '#F7A866',
    '#EB7723',
    '#B95117',
    '#853209',
    '#661F00'
  ],
  colorblindsafe: ['#e69f00', '#56b4e9', '#009e73', '#f0e442', '#0072b2', '#d55e00', '#cc79a7', '#000000', '#7e5803']
}

// * ============= Palettes for Chart project ==========  * //

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
    '#A6CEE3',
    '#1F78B4',
    '#B2DF8A',
    '#33A02C',
    '#FB9A99',
    '#E31A1C',
    '#FDBF6F',
    '#FF7F00',
    '#ACA9EB'
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
    '#E31A90',
    '#15017A',
    '#C2C0FC'
  ],

  qualitative2: ['#7fc97f', '#beaed4', '#ff9', '#386cb0', '#f0027f', '#bf5b17', '#666', '#fedab8'],

  qualitative3: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666'],

  qualitative4: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ff3', '#a65628', '#f781bf'],

  'sequential-blue': ['#C6DBEF', '#9ECAE1', '#6BAED6', '#4292C6', '#2171B5', '#084594'],
  'sequential-blue-2-(MPX)': ['#D5F6F9', '#99E2ED', '#5FB6D1', '#3189B0', '#116091', '#0A3E72'],
  'sequential-orange-(MPX)': ['#FFEFCF', '#FFD49C', '#F7A866', '#EB7723', '#B95117', '#862B0B'],
  'sequential-green': ['#C7E9C0', '#A1D99B', '#74C476', '#41AB5D', '#238B45', '#005A32'],

  colorblindsafe: ['#e69f00', '#56b4e9', '#009e73', '#f0e442', '#0072b2', '#d55e00', '#cc79a7', '#000000', '#7e5803']
}
// * ============= Palettes for Paired bar Chart ==========  * //
export const colorPalettes3 = {
  'monochrome-1': ['#A6CEE3', '#15017A'],
  'monochrome-2': ['#C2C0FC', '#15017A'],
  'monochrome-3': ['#cab2d6', '#6a3d9a'],
  'monochrome-4': ['#C2C0FC', '#6a3d9a'],
  'monochrome-5': ['#fedab8', '#bf5b17'],
  'cool-1': ['#b2df8a', '#1f78b4'],
  'cool-2': ['#a6cee3', '#72D66B'],
  'cool-3': ['#C2C0FC', '#386cb0'],
  'cool-4': ['#72D66B', '#6a3d9a'],
  'cool-5': ['#a6cee3', '#6a3d9a'],
  'warm-1': ['#e31a1c', '#fedab8'],
  'complementary-1': ['#1f78b4', '#e6ab02'],
  'complementary-2': ['#1f78b4', '#ff7f00'],
  'complementary-3': ['#6a3d9a', '#ff7f00'],
  'complementary-4': ['#6a3d9a', '#e6ab02'],
  'complementary-5': ['#df168c', '#1EB386']
}

const sequentialColors = {
  'Sequential Blue': ['#C6DBEF', '#9ECAE1', '#6BAED6', '#4292C6', '#2171B5', '#084594'],
  'Sequential Blue Two': ['#D5F6F9', '#99E2ED', '#5FB6D1', '#3189B0', '#116091', '#0A3E72'],
  'Sequential Blue Three': [
    '#F5FEFF',
    '#E1FBFF',
    '#C0F2FD',
    '#94E2ED',
    '#5EBAD4',
    '#3695BE',
    '#2273A0',
    '#0E5181',
    '#093460'
  ],
  'Sequential Orange': ['#FFEFCF', '#FFD49C', '#F7A866', '#EB7723', '#B95117', '#862B0B'],
  'Sequential Orange Two': [
    '#FFFDF0',
    '#FFF7DC',
    '#FFE9C2',
    '#FFD097',
    '#F7A866',
    '#EB7723',
    '#B95117',
    '#853209',
    '#661F00'
  ],
  'Sequential Green': ['#C7E9C0', '#A1D99B', '#74C476', '#41AB5D', '#238B45', '#005A32']
}

export const sequentialPalettes = sequentialColors
export const colorPalettesChart = updatePaletteNames(colorPalettes2)
const colorPalettes = updatePaletteNames(colorPalettesMap)
export const twoColorPalette = updatePaletteNames(colorPalettes3)
export default colorPalettes
