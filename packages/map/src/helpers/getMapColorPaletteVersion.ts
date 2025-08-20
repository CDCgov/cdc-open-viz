export const getMapColorPaletteVersion = (config) => {
    const version = config.general.palette.version
    return parseInt(version.split('.')[0])
}
