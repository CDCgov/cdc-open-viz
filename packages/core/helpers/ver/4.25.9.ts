import _ from 'lodash'

// Palette name migrations for v1 map palettes
const paletteNameMigrations = {
    'yelloworangered': 'sequential_yellow_orange_red',
    'yelloworangebrown': 'sequential_yellow_orange_brown',
    'pinkpurple': 'sequential_pink_purple',
    'pinkpurplereverse': 'sequential_pink_purplereverse',
    'bluegreen': 'sequential_blue_green',
    'bluegreenreverse': 'sequential_blue_greenreverse',
    'orangered': 'sequential_orange_red',
    'orangeredreverse': 'sequential_orange_redreverse',
    'red': 'sequential_red',
    'redreverse': 'sequential_redreverse',
    'greenblue': 'sequential_green_blue',
    'greenbluereverse': 'sequential_green_bluereverse',
    'yelloworangeredreverse': 'sequential_yellow_orange_redreverse',
    'yelloworangebrownreverse': 'sequential_yellow_orange_brownreverse',
    'yellowpurple': 'divergent_yellow_purple',
    'yellowpurplereverse': 'divergent_yellow_purplereverse',
    'qualitative9': 'qualitative_earth_tones',
    'qualitative9reverse': 'qualitative_earth_tonesreverse',
    'sequential-blue-2(MPX)': 'sequential_blue_extended',
    'sequential-blue-2(MPX)reverse': 'sequential_blue_extendedreverse',
    'sequential-orange(MPX)': 'sequential_orange_extended',
    'sequential-orange(MPX)reverse': 'sequential_orange_extendedreverse'
}

// On maps move config.color to config.general.colorPalettes.colorName
const updateMapColorMigrations = config => {
    if (config.type === 'map') {

        // Move config.color to a normalized area...
        if (config.color) {
            config.general = config.general || {}
            config.general.palette = config.general.palette || {}
            config.general.palette.name = config.color

            // Save a backup and set version to 1.0 for legacy palette names
            if (config.general.palette.version === '1.0' || !config.general.palette.version) {
                config.general.palette.version = '1.0'
                config.general.palette.backups = config.general.palette.backups || []
                config.general.palette.backups.push({ name: config.color, version: '1.0', isReversed: config.general.palette.isReversed })
            }

            // Remove old color property
            delete config.color
        }

        // Migrate old palette names to new ones
        if (config.general?.palette?.name && paletteNameMigrations[config.general.palette.name]) {
            config.general.palette.name = paletteNameMigrations[config.general.palette.name]
        }


    }

    if (config.type === 'dashboard') {
        Object.values(config.visualizations).forEach(visualization => {
            updateMapColorMigrations(visualization)
        })
    }

}

// Move config.customColors to config.general.palette.customColors
const updateCustomColorsMigration = config => {
    if (config.customColors) {
        config.general = config.general || {}
        config.general.palette = config.general.palette || {}
        config.general.palette.customColors = config.customColors

        // Remove old customColors property
        delete config.customColors
    }

    if (config.type === 'dashboard') {
        Object.values(config.visualizations).forEach(visualization => {
            updateCustomColorsMigration(visualization)
        })
    }
}

const update_4_25_9 = config => {
    const ver = '4.25.9'
    const newConfig = _.cloneDeep(config)
    updateMapColorMigrations(newConfig)
    updateCustomColorsMigration(newConfig)
    newConfig.version = ver
    return newConfig
}

export default update_4_25_9
