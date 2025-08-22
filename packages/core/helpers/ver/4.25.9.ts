import _ from 'lodash'

// Palette name migrations for v1 map palettes
const paletteNameMigrations = {
    'yelloworangered': 'sequential_yellow_orange_red',
    'yelloworangebrown': 'sequential_yellow_orange_brown',
    'pinkpurple': 'sequential_pink_purple',
    'bluegreen': 'sequential_blue_green',
    'orangered': 'sequential_orange_red',
    'red': 'sequential_red',
    'greenblue': 'sequential_green_blue',
    'yellowpurple': 'divergent_yellow_purple',
    'qualitative9': 'qualitative_earth_tones',
    'sequential-blue-2(MPX)': 'sequential_blue_extended',
    'sequential-orange(MPX)': 'sequential_orange_extended'
}

// On maps move config.color to config.general.colorPalettes.colorName
const updateMapColorMigrations = config => {
    if (config.type === 'map') {

        // Move config.color to a normalized area...
        if (config.color) {
            config.general = config.general || {}
            config.general.palette = config.general.palette || {}
            config.general.palette.name = config.color

            // Save a backup if version is 1.0
            if (config.general.palette.version === '1.0' || !config.general.palette.version) {
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

const update_4_25_9 = config => {
    const ver = '4.25.9'
    const newConfig = _.cloneDeep(config)
    updateMapColorMigrations(newConfig)
    newConfig.version = ver
    return newConfig
}

export default update_4_25_9
