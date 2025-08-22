import { updatePaletteNames } from '../helpers/updatePaletteNames'
import { sharedPalettes } from './sharedPalettes'

// Map-specific color palettes extracted from main colorPalettes.ts

const mapColorPalettesData = {
  v1: {
    sequential_yellow_orange_red: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
    sequential_yellow_orange_brown: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
    sequential_pink_purple: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
    sequential_blue_green: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
    sequential_orange_red: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
    sequential_red: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
    sequential_green_blue: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#267ba6', '#0868ac', '#084081'],
    divergent_yellow_purple: ['#fff0b0', '#f5cc76', '#edae4b', '#e3683c', '#bf2a48', '#6d2059', '#8f0c4b', '#310958', '#0e0943'],
    qualitative1: sharedPalettes.qualitative1,
    qualitative2: sharedPalettes.qualitative2,
    qualitative3: sharedPalettes.qualitative3,
    qualitative4: sharedPalettes.qualitative4,
    qualitative_earth_tones: ['#497d0c', '#84bc49', '#88c3ea', '#fcad90', '#f26b4f', '#c31b1f', '#c31b1f'],
    sequential_blue_extended: sharedPalettes.sequentialBlueNine,
    sequential_orange_extended: sharedPalettes.sequentialOrangeNine,
    colorblindsafe: sharedPalettes.colorblindsafe
  },
  v2: {
    sequential_blue: ["#dbe8f7", "#bed5ed", "#99bce1", "#73a1d5", "#4e88c7", "#1e6bc0", "#0057b7", "#01418d", "#032659"],
    sequential_teal: ["#e5fafc", "#b3e3ed", "#80cddf", "#4db8d1", "#00b1ce", "#03a2bd", "#0690a6", "#0d6e81", "#125261"],
    sequential_purple: ["#e2d3df", "#cdb2c8", "#b78faf", "#a6739b", "#935586", "#823a73", "#722161", "#5f2359", "#47264f"],
    sequential_orange: ["#ffe4d5", "#fed0b6", "#f7b99a", "#ed9e7c", "#e58061", "#db6b49", "#c95936", "#a8462c", "#702b1d"],
    sequential_green: ["#d5f9f6", "#aeece7", "#85ded7", "#63d2ca", "#3bbcaf", "#14a594", "#0a937f", "#0f7a68", "#105b4d"],
    divergent_blue_cyan: ["#032659", "#014697", "#1d6abf", "#6197d2", "#c1d2db", "#5ccbde", "#01acc9", "#097f95", "#125261"],
    divergent_blue_purple: ["#032659", "#014697", "#1d6abf", "#6197d2", "#c4cde1", "#af8caa", "#935586", "#7c256b", "#47264f"],
    divergent_green_orange: ["#105b4d", "#16806e", "#3ea394", "#5ebfb3", "#fabf61", "#ee956c", "#e27447", "#ac4726", "#702b1d"],
    divergent_blue_orange: ["#032659", "#0057b7", "#0092c6", "#55b1a3", "#ffb24d", "#ea803b", "#dd622f", "#af3423", "#660f14"],
    qualitative: ["#DFE1E2", "#0057b7", "#722161", "#00b1ce", "#d94e5f", "#5a8e3f", "#ffb24d", "#fb7e38", "#032659", "#975722"]
  }
}

// Process and export map color palettes
export const mapColorPalettes = {
  v1: updatePaletteNames(mapColorPalettesData.v1),
  v2: updatePaletteNames(mapColorPalettesData.v2)
}

export const mapColorPalettesV1 = mapColorPalettes.v1
export const mapColorPalettesV2 = mapColorPalettes.v2