import _ from 'lodash'
import { getFallbackColorPalette } from '../palettes/utils'
import { newChartPaletteNames, newMapPaletteNames } from '../palettes/standardizePaletteNames'

const renameOriginalMapPalettes = (config) => {
    if (config.general?.palette?.name && newMapPaletteNames[config.general.palette.name]) {
        config.general.palette.name = newMapPaletteNames[config.general.palette.name]
    }
}

const renameOriginalChartPalettes = (config) => {
    if (config.general?.palette?.name && newChartPaletteNames[config.general.palette.name]) {
        config.general.palette.name = newChartPaletteNames[config.general.palette.name]
    }
}


const saveBackup = (config) => {
    const version = config.general.palette.version
    // Save a backup and set version to 1.0 for legacy palette names
    if (version === '1.0' || !version) {
        config.general.palette.version = '1.0'
        config.general.palette.backups = config.general.palette.backups || []
        config.general.palette.backups.push({ name: config.general.palette.name, version: '1.0', isReversed: config.general.palette.isReversed })
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
    const newConfig = _.cloneDeep(config)
    movePaletteName(newConfig)
    updateCustomColorsMigration(newConfig)
    saveBackup(newConfig)
    addDefaultPaletteVersion(newConfig)
    cleanConfig(newConfig)
    newConfig.version = ver
    return newConfig
}

export default update_4_25_9
