export const getMapColorPaletteVersion = (config) => {
    const version = config.general.palette.version || '1.0'
    return parseInt(version.split('.')[0])
}
