import { Palette } from '@cdc/core/types/Palette'

const paletteDefaultsByVisualizationType: Record<string, Palette> = {
  Line: {
    isReversed: false,
    version: '2.1',
    name: 'qualitative_standard'
  },
  'Horizon Chart': {
    isReversed: false,
    version: '2.1',
    name: 'sequential_blue'
  },
  HeatMap: {
    isReversed: false,
    version: '2.1',
    name: 'sequential_blue'
  },
  Sankey: {
    isReversed: true,
    version: '2.1',
    name: 'sequential_bluereverse'
  }
}

export const getChartTypeDefaultPalette = (visualizationType?: string): Palette | undefined => {
  const palette = visualizationType ? paletteDefaultsByVisualizationType[visualizationType] : undefined
  return palette ? { ...palette } : undefined
}
