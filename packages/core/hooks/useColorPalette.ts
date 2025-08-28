import { useEffect, useMemo } from 'react'
import { filterColorPalettes } from '../helpers/filterColorPalettes'
import { twoColorPalette, chartColorPalettes } from '../data/colorPalettes'

export interface UseColorPaletteResult {
  sequential: string[]
  nonSequential: string[]
  accessibleColors: string[]
  twoColorPalettes: string[]
}

/**
 * React hook for filtering color palettes based on config and visualization type
 * Provides filtered palettes for chart visualization components
 */
export const useColorPalette = (config: any, updateConfig?: (newConfig: any) => void): UseColorPaletteResult => {
  // Get filtered palettes using the core filtering logic
  const filteredPalettes = useMemo(() => {
    const isReversed = config.general?.palette?.isReversed
    const visualizationType = config.visualizationType
    
    const result = filterColorPalettes({
      config,
      isReversed,
      colorPalettes: chartColorPalettes,
      visualizationType
    })

    // Handle two-color palettes specially for chart components
    let twoColorPalettes: string[] = []
    if (visualizationType === 'Paired Bar' || visualizationType === 'Deviation Bar') {
      const isTwoColorReversed = config.twoColor?.isPaletteReversed
      twoColorPalettes = Object.keys(twoColorPalette).filter(name =>
        isTwoColorReversed ? name.endsWith('reverse') : !name.endsWith('reverse')
      )
    }

    return {
      sequential: result.sequential,
      nonSequential: result.nonSequential,
      accessibleColors: result.accessibleColors,
      twoColorPalettes: result.twoColorPalettes || twoColorPalettes
    }
  }, [
    config.visualizationType,
    config.general?.palette?.isReversed,
    config.general?.palette?.version,
    config.twoColor?.isPaletteReversed
  ])

  // Update twoColor palette based on isPaletteReversed
  useEffect(() => {
    if (!updateConfig || !config.twoColor) return

    const { isPaletteReversed, palette } = config.twoColor
    let newPalette = ''

    if (isPaletteReversed && !palette.endsWith('reverse')) {
      newPalette = palette + 'reverse'
    }

    if (!isPaletteReversed && palette.endsWith('reverse')) {
      newPalette = palette.slice(0, -7)
    }

    if (newPalette && newPalette !== palette) {
      updateConfig({ 
        ...config, 
        twoColor: { 
          ...config.twoColor, 
          palette: newPalette 
        } 
      })
    }
  }, [config.twoColor?.isPaletteReversed, updateConfig])

  // Update general palette based on isReversed
  useEffect(() => {
    if (!updateConfig || !config.general?.palette) return

    const isReversed = config.general.palette.isReversed
    const currentPaletteName = config.general.palette.name || ''
    let newPalette = ''

    if (isReversed && !currentPaletteName.endsWith('reverse')) {
      newPalette = currentPaletteName + 'reverse'
    }

    if (!isReversed && currentPaletteName.endsWith('reverse')) {
      newPalette = currentPaletteName.slice(0, -7)
    }

    if (newPalette && newPalette !== currentPaletteName) {
      updateConfig({
        ...config,
        general: {
          ...config.general,
          palette: {
            ...config.general.palette,
            name: newPalette
          }
        }
      })
    }
  }, [config.general?.palette?.isReversed, updateConfig])

  return filteredPalettes
}