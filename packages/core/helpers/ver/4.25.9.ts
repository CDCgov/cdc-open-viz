import _ from 'lodash'

// On maps move config.color to config.general.colorPalettes.colorName
const updateMapColorMigrations = config => {
    if (config.type === 'map') {

        // Move config.color to a normalized area...
        if (config.color) {
            config.general = config.general || {}
            config.general.palette = config.general.palette || {}
            config.general.palette.name = config.color
            config.general.palette.backups = config.general.palette.backups || []
            config.general.palette.backups.push({ name: config.color, version: '1.0', isReversed: config.general.palette.isReversed })
            delete config.color
        }

        // Set Palette Version...
        config.general.palette.version = '2.0'

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
