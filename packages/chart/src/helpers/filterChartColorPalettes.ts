import { chartColorPalettes } from '@cdc/core/data/colorPalettes'

export const filterChartColorPalettes = config => {
  let colorPalettes = {}

  // Default to version 1 if not specified
  if (!config || !config.general) {
    return chartColorPalettes.v1
  }

  const version = config.general?.palette?.version || '1.0'

  if (version === '1.0') {
    colorPalettes = chartColorPalettes.v1
  }

  if (version === '2.0') {
    colorPalettes = chartColorPalettes.v2
  }

  return colorPalettes
}
