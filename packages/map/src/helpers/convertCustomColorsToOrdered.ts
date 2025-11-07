import { MapConfig } from '../types/MapConfig'

/**
 * Automatically converts customColors to customColorsOrdered based on runtime legend
 * This extracts the actual colors being used (after distribution is applied) and stores them
 * in customColorsOrdered for direct 1-to-1 mapping
 *
 * @param config - The map configuration
 * @param runtimeLegend - The generated runtime legend with color information
 * @returns Updated config with customColorsOrdered populated, or original config if conversion not needed
 */
export const convertCustomColorsToOrdered = (config: MapConfig, runtimeLegend: any): MapConfig | null => {
  // Only convert if:
  // 1. customColors exists
  // 2. customColorsOrdered doesn't exist yet
  // 3. runtime legend has items with colors
  if (
    !config?.general?.palette?.customColors ||
    config?.general?.palette?.customColorsOrdered ||
    !runtimeLegend?.items ||
    runtimeLegend.items.length === 0
  ) {
    return null
  }

  // Extract non-special class colors from the runtime legend
  const extractedColors: string[] = []

  for (const item of runtimeLegend.items) {
    // Skip special classes (like "No Data")
    if (item.special) {
      continue
    }

    // Add the color if it exists and hasn't been added yet
    if (item.color && !extractedColors.includes(item.color)) {
      extractedColors.push(item.color)
    }
  }

  // Only proceed if we extracted actual colors
  if (extractedColors.length === 0) {
    return null
  }

  // Create updated config with customColorsOrdered
  const updatedConfig = {
    ...config,
    general: {
      ...config.general,
      palette: {
        ...config.general.palette,
        customColorsOrdered: extractedColors
      }
    }
  }

  return updatedConfig
}
