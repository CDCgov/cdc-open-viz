import colorPalettes from '@cdc/core/data/colorPalettes'
import chroma from 'chroma-js'
import { type MapConfig } from '@cdc/map/src/types/MapConfig'
import { colorDistributions } from './colorDistributions'

type LegendItem = {
  special: boolean
}

/**
 * applyColorToLegend
 * @param legendIdx legend item index
 * @param config chart config
 * @param result hash of legend items
 * @returns string - the corresponding color for the legend item
 */
export const applyColorToLegend = (legendIdx: number, config: MapConfig, result: LegendItem[] = []): string => {
  if (!config) throw new Error('Config is required')

  const { legend, customColors, general, color } = config
  const { geoType, palette } = general
  const specialClasses = legend?.specialClasses ?? []
  const mapColorPalette = customColors ?? colorPalettes[color] ?? colorPalettes['bluegreen']

    const specialClasses = config?.legend?.specialClasses
    const { general } = config || {}
    // Default to "bluegreen" color scheme if the passed color isn't valid
    let mapColorPalette = config.customColors || colorPalettes[config.color] || colorPalettes['bluegreen']

    // Handle Region Maps need for a 10th color
    if (general.geoType === 'us-region' && mapColorPalette.length < 10 && mapColorPalette.length > 8) {
      if (!general.palette.isReversed) {
        mapColorPalette.push(chroma(mapColorPalette[8]).darken(0.75).hex())
      } else {
        mapColorPalette.unshift(chroma(mapColorPalette[0]).darken(0.75).hex())
      }
    }

    let colorIdx = legendIdx - specialClasses.length

    // Special Classes (No Data)
    if (result[legendIdx].special) {
      if (!config?.migrations?.addColorMigration) {
        const specialClassColors = chroma.scale(['#D4D4D4', '#939393']).colors(specialClasses)
        return specialClassColors[legendIdx]
      } else {
        const specialClassColors = ['#A9AEB1', '#71767A']
        return specialClassColors[legendIdx]
      }
    }

    if (config.color.includes('qualitative')) return mapColorPalette[colorIdx]

    // If the current version is newer than 4.24.10, use the color palette
    if (!config?.migrations?.addColorMigration) {
      if (config.customColors) return mapColorPalette[legendIdx - specialClasses.length]
    }

    let amt = Math.max(result.length - specialClasses.length, 1)
    let distributionArray = colorDistributions[amt]
    let specificColor

    if (distributionArray) {
      specificColor = distributionArray[legendIdx - specialClasses.length]
    } else if (mapColorPalette[colorIdx]) {
      specificColor = colorIdx
    } else {
      specificColor = mapColorPalette.length - 1
    }

    return mapColorPalette[specificColor]
  } catch (error) {
    console.error('Error in applyColorToLegend', error) // eslint-disable-line no-console
  }

  const colorIdx = legendIdx - specialClasses.length

  // Handle special classes coloring
  if (result[legendIdx]?.special) {
    const specialClassColors = chroma.scale(['#D4D4D4', '#939393']).colors(specialClasses.length)
    return specialClassColors[legendIdx]
  }

  // Use qualitative color palettes directly
  if (color.includes('qualitative')) return mapColorPalette[colorIdx]

  // Determine color distribution
  const amt =
    Math.max(result.length - specialClasses.length, 1) < 10
      ? Math.max(result.length - specialClasses.length, 1)
      : Object.keys(colorDistributions).length
  const distributionArray = colorDistributions[amt] ?? []

  const specificColor =
    distributionArray[legendIdx - specialClasses.length] ?? mapColorPalette[colorIdx] ?? mapColorPalette.at(-1)

  return mapColorPalette[specificColor]
}
