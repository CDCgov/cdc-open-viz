import _ from 'lodash'

// Here we're just organizing palette names to follow a more structured naming convention
const mapPaletteNameMigrations = {
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
    'qualitative1': 'qualitative1',
    'qualitative2': 'qualitative2',
    'qualitative3': 'qualitative3',
    'qualitative4': 'qualitative4',
    'qualitative9': 'qualitative9',
    'sequential-blue-2(MPX)': 'sequential_blue_extended',
    'sequential-blue-2(MPX)reverse': 'sequential_blue_extendedreverse',
    'sequential-orange(MPX)': 'sequential_orange_extended',
    'sequential-orange(MPX)reverse': 'sequential_orange_extendedreverse',
    'colorblindsafe': 'colorblindsafe',
    'qualitative1reverse': 'qualitative1reverse',
    'qualitative2reverse': 'qualitative2reverse',
    'qualitative3reverse': 'qualitative3reverse',
    'qualitative4reverse': 'qualitative4reverse',
    'qualitative9reverse': 'qualitative9reverse',
    'colorblindsafereverse': 'colorblindsafereverse',
}


const saveBackup = (config) => {
    const version = config.general.palette.version
    // Save a backup and set version to 1.0 for legacy palette names
    if (version === '1.0' || !version) {
        config.general.palette.version = '1.0'
        config.general.palette.backups = config.general.palette.backups || []
        config.general.palette.backups.push({ name: config.color, version: '1.0', isReversed: config.general.palette.isReversed })
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

            // Save a backup and set version to 1.0 for legacy palette names
            saveBackup(config)
            // Remove old color property
            delete config.color
        }

        // Migrate old palette names to new ones
        if (config.general?.palette?.name && mapPaletteNameMigrations[config.general.palette.name]) {
            config.general.palette.name = mapPaletteNameMigrations[config.general.palette.name]
        }


    }

    if (config.type === 'chart') {
        config.general = config.general || {}
        config.general.palette = config.general.palette || {}
        config.general.palette.name = config.palette
        saveBackup(config)
        delete config.palette
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
    movePaletteName(newConfig)
    updateCustomColorsMigration(newConfig)
    newConfig.version = ver
    console.log('new config', newConfig)
    return newConfig
}

export default update_4_25_9
