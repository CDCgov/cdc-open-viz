import _ from 'lodash'

// Mapping from v1 to v2 color palette names
const v1ToV2PaletteMigration = {
    // Blue palettes
    'sequential-blue-2(MPX)': 'sequential_single_hue_blue',
    'greenblue': 'sequential_single_hue_blue',
    'bluegreen': 'sequential_single_hue_teal',
    
    // Purple palettes
    'pinkpurple': 'sequential_single_hue_purple',
    
    // Orange/Red palettes
    'yelloworangered': 'sequential_single_hue_orange',
    'yelloworangebrown': 'sequential_single_hue_orange',
    'orangered': 'sequential_single_hue_orange',
    'red': 'sequential_single_hue_orange',
    'sequential-orange(MPX)': 'sequential_single_hue_orange',
    
    // Diverging palettes
    'yellowpurple': 'divergent_blue_purple_center',
    
    // Qualitative palettes
    'qualitative1': 'qualitative',
    'qualitative2': 'qualitative',
    'qualitative3': 'qualitative',
    'qualitative4': 'qualitative',
    'colorblindsafe': 'qualitative'
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
            if (config.general.palette.version === '1.0') {
                config.general.palette.backups = config.general.palette.backups || []
                config.general.palette.backups.push({ name: config.color, version: '1.0', isReversed: config.general.palette.isReversed })
            }

            // Remove old color property
            delete config.color
        }

        // Migrate v1 to v2 palette names
        if (config.general?.palette?.name && (!config.general?.palette?.version || config.general.palette.version === '1.0')) {
            const v1PaletteName = config.general.palette.name
            const v2PaletteName = v1ToV2PaletteMigration[v1PaletteName]
            
            if (v2PaletteName) {
                // Save backup before migration
                config.general.palette.backups = config.general.palette.backups || []
                config.general.palette.backups.push({ 
                    name: v1PaletteName, 
                    version: '1.0', 
                    isReversed: config.general.palette.isReversed 
                })
                
                // Update to v2 palette name and version
                config.general.palette.name = v2PaletteName
                config.general.palette.version = '2.0'
            }
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
