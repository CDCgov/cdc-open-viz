export const getChartColorPaletteVersion = config => {
  if (!config || !config.general) {
    return 1
  }
  const version = config.general?.palette?.version || '1.0'
  return parseInt(version.split('.')[0])
}
