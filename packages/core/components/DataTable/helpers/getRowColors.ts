import { RowColorConfig } from '../../../types/Table'
import { chartColorPalettes } from '../../../data/chartColorPalettes'
import chroma from 'chroma-js'

type RowColorResult = {
  backgroundColor: string
  textColor: string
}

export const getRowColors = (
  data: Record<string, any>[],
  rowColorConfig: RowColorConfig,
  paletteVersion: 'v1' | 'v2' = 'v2',
  existingColorScale?: Function,
  tablePalette?: string,
  customRange?: { min: number; max: number }
): (value: any) => RowColorResult | undefined => {
  // Return a function that calculates color based on the actual value
  // instead of a Map keyed by row index

  if (!rowColorConfig?.enabled || !rowColorConfig.colorColumn) {
    return () => undefined
  }

  const { colorColumn, mode = 'sequential', customColors = {} } = rowColorConfig

  let colorScale: (value: any) => string

  // Always create our own color scale for data table row coloring
  // (don't use chart colorScale as it's for series, not data values)
  {
    // Always use the general palette for table row colors
    const paletteToUse = tablePalette || 'sequential_blue'
    const paletteColors = chartColorPalettes[paletteVersion]?.[paletteToUse] || chartColorPalettes.v2.sequential_blue

    switch (mode) {
      case 'sequential':
        // Extract numeric values for min/max calculation
        const numericValues = data
          .map(row => Number(row[colorColumn]))
          .filter(val => !isNaN(val))

        if (numericValues.length === 0) {
          colorScale = () => paletteColors[0]
        } else {
          // Use custom range if provided, otherwise calculate from data
          const min = customRange?.min ?? Math.min(...numericValues)
          const max = customRange?.max ?? Math.max(...numericValues)

          if (min === max) {
            colorScale = () => paletteColors[0]
          } else {
            // For sequential palettes, use first and last colors for smooth gradient
            const startColor = paletteColors[0]
            const endColor = paletteColors[paletteColors.length - 1]
            const chromaScale = chroma.scale([startColor, endColor]).domain([min, max])
            colorScale = (value: any) => chromaScale(Number(value)).hex()
          }
        }
        break

      case 'categorical':
        // For categorical data, assign colors cyclically
        const values = data.map(row => row[colorColumn]).filter(val => val !== undefined && val !== null)
        const uniqueValues = Array.from(new Set(values))
        const valueToColorMap = new Map<any, string>()

        uniqueValues.forEach((value, index) => {
          valueToColorMap.set(value, paletteColors[index % paletteColors.length])
        })

        colorScale = (value: any) => valueToColorMap.get(value) || paletteColors[0]
        break

      case 'custom':
        // Use custom color mapping
        colorScale = (value: any) => customColors[value] || '#ffffff'
        break

      default:
        colorScale = () => '#ffffff'
    }
  }

  // Return a function that calculates color for any given value
  return (value: any) => {
    // Skip invalid values based on mode
    let shouldColor = false
    if (mode === 'sequential') {
      // For sequential mode, only color numeric values
      shouldColor = value !== undefined && value !== null && value !== '' &&
        value !== 'N/A' && value !== 'n/a' && !isNaN(Number(value))
    } else {
      // For categorical and custom modes, allow any non-null/undefined values
      shouldColor = value !== undefined && value !== null && value !== ''
    }

    if (!shouldColor) {
      return undefined
    }

    const backgroundColor = colorScale(value)

    // Only proceed if we got a valid color
    if (!backgroundColor || typeof backgroundColor !== 'string') {
      return undefined
    }

    try {
      // Calculate contrasting text color
      const textColor = chroma.contrast(backgroundColor, '#000000') > 4.5 ? '#000000' : '#ffffff'

      return {
        backgroundColor,
        textColor
      }
    } catch (error) {
      // Fallback to default colors
      return {
        backgroundColor: backgroundColor,
        textColor: '#000000'
      }
    }
  }
}
