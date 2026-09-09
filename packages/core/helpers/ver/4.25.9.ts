import { newChartPaletteNames, newMapPaletteNames } from '../palettes/standardizePaletteNames'
import cloneConfig from '../cloneConfig'
import { DashboardConfig } from '@cdc/dashboard/src/types/DashboardConfig'

const addMissingDataFormatFields = config => {
  if (config.type === 'chart' && config.visualizationType === 'Pie') {
    // if we're missing the show pie percent field
    if (config.data?.showPiePercent === undefined) {
      config.data = config.data || {}
      config.data.showPiePercent = false
    }
  }

  if (config.type === 'dashboard') {
    Object.values(config.visualizations).forEach(visualization => {
      addMissingDataFormatFields(visualization)
    })
  }
}

const hasNonemptyString = (value: unknown): value is string => typeof value === 'string' && value.trim().length > 0
const hasTopLevelLegacyPalette = config => hasNonemptyString(config.palette) || hasNonemptyString(config.color)
const hasNestedLegacyPalette = config => {
  const name = config.general?.palette?.name
  const version = config.general?.palette?.version

  return (
    hasNonemptyString(name) &&
    (version === '1.0' || (!version && Object.prototype.hasOwnProperty.call(newChartPaletteNames, name)))
  )
}
const hasLegacyPalette = config => hasTopLevelLegacyPalette(config) || hasNestedLegacyPalette(config)

const getFrozenPalette = (visualizationType?: string) => {
  if (visualizationType === 'Line') {
    return { name: 'divergent_blue_cyan', version: '2.0', isReversed: false }
  }
  if (visualizationType === 'HeatMap' || visualizationType === 'Horizon Chart') {
    return { name: 'sequential_blue', version: '2.0', isReversed: false }
  }
  return { name: 'sequential_bluereverse', version: '2.0', isReversed: true }
}

const classifyChartPalette = config => {
  if (hasNestedLegacyPalette(config)) return 'normally-migrated-legacy'
  if (hasNonemptyString(config.general?.palette?.name)) return 'modern'
  if (config.tracking?.paletteFallbackSource === 'default-overridden-legacy') {
    return 'default-overridden-legacy'
  }
  if (config.tracking?.paletteFallbackSource === 'palette-less') return 'palette-less'
  if (hasLegacyPalette(config)) return 'normally-migrated-legacy'
  return 'palette-less'
}

const renameOriginalMapPalettes = config => {
  if (config.general?.palette?.name && newMapPaletteNames[config.general.palette.name]) {
    config.general.palette.name = newMapPaletteNames[config.general.palette.name]
  }
}

const saveBackup = config => {
  config.general = config.general || {}
  config.general.palette = config.general.palette || {}

  // Only charts that still contain a legacy palette use the existing backup path.
  if (config.type === 'chart' && !hasLegacyPalette(config)) return

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
    const classification = classifyChartPalette(config)
    const authoredLegacyName = hasNestedLegacyPalette(config)
      ? config.general.palette.name
      : hasNonemptyString(config.palette)
      ? config.palette
      : hasNonemptyString(config.color)
      ? config.color
      : undefined

    config.general = config.general || {}
    config.general.palette = config.general.palette || {}

    if (classification === 'modern') {
      delete config.palette
      delete config.color
    } else if (classification === 'palette-less' || classification === 'default-overridden-legacy') {
      config.general.palette = { ...config.general.palette, ...getFrozenPalette(config.visualizationType) }
      config.tracking = { ...config.tracking, paletteFallbackSource: classification }
    } else if (classification === 'normally-migrated-legacy' && authoredLegacyName) {
      config.general.palette = {
        ...config.general.palette,
        name: newChartPaletteNames[authoredLegacyName] || authoredLegacyName,
        version: '1.0',
        isReversed:
          config.isPaletteReversed ?? config.general.palette.isReversed ?? authoredLegacyName.endsWith('reverse')
      }
    }
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
  // Only charts that still contain a legacy palette receive a legacy version.
  if (config.type === 'chart' && !hasLegacyPalette(config)) return
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

const normalizeForecastStageColors = config => {
  if (config.type === 'chart' && config.series) {
    const paletteVersion = config.general?.palette?.version?.startsWith('2.') ? 2 : 1

    // Forecast palette migration map for v1 → v2 names (all lowercase-hyphen format)
    const forecastPaletteMigrationMap = {
      // Sequential Blue variants → sequential-blue
      'sequential-blue': 'sequential-blue',
      'sequential-blue-two': 'sequential-blue',
      'sequential-blue-three': 'sequential-blue',
      'sequential-blue-2-(mpx)': 'sequential-blue',
      'sequential-blue-2-mpx': 'sequential-blue',
      // Sequential Orange variants → sequential-orange
      'sequential-orange': 'sequential-orange',
      'sequential-orange-two': 'sequential-orange',
      'sequential-orange-(mpx)': 'sequential-orange',
      'sequential-orange-mpx': 'sequential-orange',
      // Other sequential palettes (no variants, just normalize)
      'sequential-green': 'sequential-green',
      'sequential-purple': 'sequential-purple',
      'sequential-teal': 'sequential-teal',
      // Reverse variants - Sequential Blue
      'sequential-bluereverse': 'sequential-bluereverse',
      'sequential-blue-reverse': 'sequential-bluereverse',
      'sequential-blue-tworeverse': 'sequential-bluereverse',
      'sequential-blue-two-reverse': 'sequential-bluereverse',
      'sequential-blue-threereverse': 'sequential-bluereverse',
      'sequential-blue-three-reverse': 'sequential-bluereverse',
      'sequential-blue-2-(mpx)reverse': 'sequential-bluereverse',
      'sequential-blue-2-(mpx)-reverse': 'sequential-bluereverse',
      'sequential-blue-2-mpxreverse': 'sequential-bluereverse',
      'sequential-blue-2-mpx-reverse': 'sequential-bluereverse',
      // Reverse variants - Sequential Orange
      'sequential-orangereverse': 'sequential-orangereverse',
      'sequential-orange-reverse': 'sequential-orangereverse',
      'sequential-orange-tworeverse': 'sequential-orangereverse',
      'sequential-orange-two-reverse': 'sequential-orangereverse',
      'sequential-orange-(mpx)reverse': 'sequential-orangereverse',
      'sequential-orange-(mpx)-reverse': 'sequential-orangereverse',
      'sequential-orange-mpxreverse': 'sequential-orangereverse',
      'sequential-orange-mpx-reverse': 'sequential-orangereverse',
      // Reverse variants - Other sequential palettes
      'sequential-greenreverse': 'sequential-greenreverse',
      'sequential-green-reverse': 'sequential-greenreverse',
      'sequential-purplereverse': 'sequential-purplereverse',
      'sequential-purple-reverse': 'sequential-purplereverse',
      'sequential-tealreverse': 'sequential-tealreverse',
      'sequential-teal-reverse': 'sequential-tealreverse'
    }

    config.series.forEach(series => {
      if (series.type === 'Forecasting' && series.stages) {
        series.stages.forEach(stage => {
          if (stage.color) {
            // First, normalize to lowercase-hyphen format
            let normalized = stage.color.toLowerCase().replace(/ /g, '-').replace(/_/g, '-')
            // Then, migrate v1 palette names to v2 equivalents if applicable
            stage.color = forecastPaletteMigrationMap[normalized] || normalized
          }
        })
      }
    })
  }

  if (config.type === 'dashboard') {
    Object.values(config.visualizations).forEach(visualization => {
      normalizeForecastStageColors(visualization)
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
  if (config.type === 'chart' && config.isPaletteReversed !== undefined) delete config.isPaletteReversed

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
  normalizeForecastStageColors(newConfig)
  cleanConfig(newConfig)
  changeSingleStateMapNoDataMessage(newConfig)
  addMissingDataFormatFields(newConfig)
  newConfig.version = ver
  return newConfig
}

export default update_4_25_9
