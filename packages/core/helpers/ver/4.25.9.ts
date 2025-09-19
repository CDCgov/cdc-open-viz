import _ from 'lodash'
import { getFallbackColorPalette } from '../palettes/utils'
import { newChartPaletteNames, newMapPaletteNames } from '../palettes/standardizePaletteNames'
import cloneConfig from '../cloneConfig'
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'

const addMissingDataFormatFields = (config) => {
  if (config.type === 'chart' && config.visualizationType === 'Pie Chart') {
    // if we're missing the show pie percent field
    if (config.data?.showPiePercent === undefined) {
      config.data = config.data || {}
      config.data.showPiePercent = false
    }
  }
}

const renameOriginalMapPalettes = config => {
  if (config.general?.palette?.name && newMapPaletteNames[config.general.palette.name]) {
    config.general.palette.name = newMapPaletteNames[config.general.palette.name]
  }
}

const renameOriginalChartPalettes = config => {
  if (config.general?.palette?.name && newChartPaletteNames[config.general.palette.name]) {
    config.general.palette.name = newChartPaletteNames[config.general.palette.name]
  }
}

const saveBackup = config => {
  config.general = config.general || {}
  config.general.palette = config.general.palette || {}

  if (!config.general.palette) {
    config.general = config.general || {}
    config.general.palette = config.general.palette || {}
    config.general.backups = config.general.palette.backups || []
    config.general.palette.version = ''
  }
  const version = config?.general?.palette?.version || '1.0'
  // Save a backup and set version to 1.0 for legacy palette names
  if (version === '1.0' || !version) {
    config.general.palette.version = '1.0'
    config.general.palette.backups = config.general.palette.backups || []
    config.general.palette.backups.push({
      name: config.general.palette.name,
      version: '1.0',
      isReversed: config.general.palette.isReversed
    })
  }
}

// On maps move config.color to config.general.colorPalettes.colorName
const movePaletteName = config => {
  if (config.type === 'map') {
    // Move config.color to a normalized area...
    if (config.color) {
      config.general = config.general || {}
      config.general.palette = config.general.palette || {}
      config.general.palette.name = config.color
      const version = config.general.palette.version
    }

    // Rename default palette names to new standardized names in mapColorPalettes.ts
    renameOriginalMapPalettes(config)
  }

  if (config.type === 'chart') {
    config.general = config.general || {}
    config.general.palette = config.general.palette || {}

    // Only set palette name if it doesn't already exist (avoid overriding new configs)
    if (!config.general.palette.name) {
      config.general.palette.name = config.palette || config.color || getFallbackColorPalette(config)
    }

    renameOriginalChartPalettes(config)
  }

  if (config.type === 'dashboard') {
    Object.values(config.visualizations).forEach(visualization => {
      movePaletteName(visualization)
    })
  }
}

// Move config.customColors to config.general.palette.customColors
const updateCustomColorsMigration = config => {
  if (config.customColors) {
    config.general = config.general || {}
    config.general.palette = config.general.palette || {}
    config.general.palette.customColors = config.customColors
  }

  if (config.type === 'dashboard') {
    Object.values(config.visualizations).forEach(visualization => {
      updateCustomColorsMigration(visualization)
    })
  }
}

const addDefaultPaletteVersion = config => {
  if (config.type === 'map' || config.type === 'chart') {
    config.general = config.general || {}
    config.general.palette = config.general.palette || {}
    if (!config.general.palette.version || config.general.palette.version === '1.0') {
      config.general.palette.version = '1.0'
    }
  }
  if (config.type === 'dashboard') {
    Object.values(config.visualizations).forEach(visualization => {
      addDefaultPaletteVersion(visualization)
    })
  }
}

export const changeSingleStateMapNoDataMessage = config => {
  const changeMessage = config => {
    const currentMessage = config.general.noStateFoundMessage || config.runtime?.noStateFoundMessage
    delete config.general.noStateFoundMessage
    delete config.runtime?.noStateFoundMessage
    const isDefaultMessage = currentMessage === 'Map Unavailable'
    // if message was customized, keep it.
    config.general.noDataMessage = isDefaultMessage ? 'No State Selected' : currentMessage
  }
  if (config.type === 'map') {
    changeMessage(config)
  }
  if (config.type === 'dashboard') {
    Object.values((config as DashboardConfig).visualizations).forEach(visualization => {
      if (visualization.type === 'map') {
        changeMessage(visualization)
      }
    })
  }
}

// Migration mapping for two-color palettes to divergent palettes
const twoColorPaletteMapping = {
  'monochrome-1': 'divergent_blue_purple',
  'monochrome-2': 'divergent_blue_purple',
  'monochrome-3': 'divergent_blue_purple',
  'monochrome-4': 'divergent_blue_purple',
  'monochrome-5': 'divergent_green_orange',
  'cool-1': 'divergent_blue_cyan',
  'cool-2': 'divergent_blue_cyan',
  'cool-3': 'divergent_blue_cyan',
  'cool-4': 'divergent_blue_cyan',
  'cool-5': 'divergent_blue_cyan',
  'warm-1': 'divergent_green_orange',
  'complementary-1': 'divergent_blue_orange',
  'complementary-2': 'divergent_blue_orange',
  'complementary-3': 'divergent_blue_orange',
  'complementary-4': 'divergent_blue_orange',
  'complementary-5': 'divergent_blue_orange'
}

// Migrate two-color palettes for paired bar and deviation charts
const migrateTwoColorPalettes = config => {
  if (
    config.type === 'chart' &&
    (config.visualizationType === 'Paired Bar' || config.visualizationType === 'Deviation Bar')
  ) {
    if (config.twoColor?.palette && twoColorPaletteMapping[config.twoColor.palette]) {
      // Update general palette from twoColor settings
      config.general = config.general || {}
      config.general.palette = config.general.palette || {}
      config.general.palette.name = twoColorPaletteMapping[config.twoColor.palette]
      config.general.palette.isReversed = config.twoColor.isPaletteReversed || false
    }
  }

  if (config.type === 'dashboard') {
    Object.values(config.visualizations).forEach(visualization => {
      migrateTwoColorPalettes(visualization)
    })
  }
}

const cleanConfig = config => {
  // remove config.palette
  if (config.palette) {
    delete config.palette
  }
  // remove config.color
  if (config.color) {
    delete config.color
  }
  // remove config.customColors
  if (config.customColors) {
    delete config.customColors
  }

  if (config.type === 'dashboard') {
    Object.values(config.visualizations).forEach(visualization => {
      cleanConfig(visualization)
    })
  }
}

const update_4_25_9 = config => {
  const ver = '4.25.9'
  const newConfig = cloneConfig(config)
  movePaletteName(newConfig)
  updateCustomColorsMigration(newConfig)
  migrateTwoColorPalettes(newConfig)
  saveBackup(newConfig)
  addDefaultPaletteVersion(newConfig)
  cleanConfig(newConfig)
  changeSingleStateMapNoDataMessage(newConfig)
  addMissingDataFormatFields(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_25_9
