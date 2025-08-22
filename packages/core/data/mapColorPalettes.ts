import { updatePaletteNames } from '../helpers/updatePaletteNames'

// Map-specific color palettes extracted from main colorPalettes.ts

const mapColorPalettesData = {
  v1: {
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
  },
  v2: {
    sequential_single_hue_blue: [
      "#dbe8f7", "#bed5ed", "#99bce1", "#73a1d5", "#4e88c7", "#1e6bc0", "#0057b7", "#01418d", "#032659"
    ],

    sequential_single_hue_teal: [
      "#e5fafc", "#b3e3ed", "#80cddf", "#4db8d1", "#00b1ce", "#03a2bd", "#0690a6", "#0d6e81", "#125261"
    ],

    sequential_single_hue_purple: [
      "#e2d3df", "#cdb2c8", "#b78faf", "#a6739b", "#935586", "#823a73", "#722161", "#5f2359", "#47264f"
    ],

    sequential_single_hue_orange: [
      "#ffe4d5", "#fed0b6", "#f7b99a", "#ed9e7c", "#e58061", "#db6b49", "#c95936", "#a8462c", "#702b1d"
    ],

    sequential_single_hue_green: [
      "#d5f9f6", "#aeece7", "#85ded7", "#63d2ca", "#3bbcaf", "#14a594", "#0a937f", "#0f7a68", "#105b4d"
    ],

    divergent_blue_teal_center: [
      "#032659", "#014697", "#1d6abf", "#6197d2", "#c1d2db", "#5ccbde", "#01acc9", "#097f95", "#125261"
    ],

    divergent_blue_purple_center: [
      "#032659", "#014697", "#1d6abf", "#6197d2", "#c4cde1", "#af8caa", "#935586", "#7c256b", "#47264f"
    ],

    divergent_green_orange_yellow: [
      "#105b4d", "#16806e", "#3ea394", "#5ebfb3", "#fabf61", "#ee956c", "#e27447", "#ac4726", "#702b1d"
    ],

    heat_map: [
      "#032659", "#0057b7", "#0092c6", "#55b1a3", "#ffb24d", "#ea803b", "#dd622f", "#af3423", "#660f14"
    ],

    qualitative: [
      "#0057b7", "#722161", "#00b1ce", "#d94e5f", "#5a8e3f", "#ffb24d", "#fb7e38", "#032659", "#975722"
    ],
  }
}

// Process and export map color palettes
export const mapColorPalettes = {
  v1: updatePaletteNames(mapColorPalettesData.v1),
  v2: updatePaletteNames(mapColorPalettesData.v2)
}

export const mapColorPalettesV1 = mapColorPalettes.v1
export const mapColorPalettesV2 = mapColorPalettes.v2