import colorPalettes from '@cdc/core/data/colorPalettes'
import chroma from 'chroma-js'
import { type ChartConfig } from '@cdc/chart/src/types/ChartConfig'
import isOlderVersion from '@cdc/core/helpers/isOlderVersion'

/**
 * applyColorToLegend
 * @param legendIdx legend item index
 * @param config chart config
 * @param result hash of legend items
 * @returns
 */
export const applyColorToLegend = (legendIdx: number, config: ChartConfig, result = []) => {
  try {
    if (!config) throw new Error('Config is required')

    const colorDistributions = {
      1: [1],
      2: [1, 3],
      3: [1, 3, 5],
      4: [0, 2, 4, 6],
      5: [0, 2, 4, 6, 7],
      6: [0, 2, 3, 4, 5, 7],
      7: [0, 2, 3, 4, 5, 6, 7],
      8: [0, 2, 3, 4, 5, 6, 7, 8],
      9: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      10: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }

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
    console.error('Error in applyColorToLegend', error)
  }
}
