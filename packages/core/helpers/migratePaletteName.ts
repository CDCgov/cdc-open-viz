// Combined palette migration map for all visualization components
const paletteMigrationMap: Record<string, string> = {
  // Chart palette migrations
  yelloworangered: 'sequential-orange',
  yelloworangebrown: 'sequential-orange',
  orangered: 'sequential-orange',
  yellowpurple: 'sequential-orange',
  red: 'sequential-orange',
  'Sequential Orange': 'sequential-orange',
  'Sequential Orange Two': 'sequential-orange',
  'sequential-orange(MPX)': 'sequential-orange',
  'sequential-orange-(MPX)': 'sequential-orange',
  pinkpurple: 'sequential-purple',
  bluegreen: 'sequential-blue',
  'sequential-blue': 'sequential-blue',
  'sequential-blue-2-(MPX)': 'sequential-blue',
  'sequential-blue-2(MPX)': 'sequential-blue',
  'Sequential Blue': 'sequential-blue',
  'sequential Blue Two': 'sequential-blue',
  'sequential Blue Three': 'sequential-blue',
  greenblue: 'sequential-green',
  'Sequential Green': 'sequential-green',
  qualitative1: 'qualitative-standard',
  qualitative2: 'qualitative-standard',
  qualitative3: 'qualitative-standard',
  qualitative4: 'qualitative-standard',
  colorblindsafe: 'qualitative-standard',
  'qualitative-bold': 'qualitative-standard',
  'qualitative-soft': 'qualitative-standard',

  // Map palette migrations
  sequential_yellow_orange_red: 'sequential_orange',
  sequential_yellow_orange_brown: 'sequential_orange',
  sequential_orange_red: 'sequential_orange',
  sequential_orange_extended: 'sequential_orange',
  sequential_pink_purple: 'sequential_purple',
  divergent_yellow_purple: 'divergent_blue_purple',
  sequential_blue_green: 'sequential_blue',
  sequential_blue_extended: 'sequential_blue',
  sequential_green_blue: 'sequential_teal',
  sequential_red: 'sequential_orange',
  qualitative_earth_tones: 'qualitative'
}

/**
 * Migrates palette names from old format to new format for any visualization component
 * @param oldPaletteName - The old palette name to migrate
 * @returns The new palette name, or the original if no migration found
 */
export const migratePaletteName = (oldPaletteName: string): string => {
  // Try exact match first
  if (paletteMigrationMap[oldPaletteName]) {
    return paletteMigrationMap[oldPaletteName]
  }

  // Try case-insensitive match for chart palettes
  const lowerCaseName = oldPaletteName.toLowerCase()
  const matchingKey = Object.keys(paletteMigrationMap).find(key => key.toLowerCase() === lowerCaseName)

  return matchingKey ? paletteMigrationMap[matchingKey] : oldPaletteName
}

// Legacy exports for backward compatibility
export const migrateChartPaletteName = migratePaletteName
export const migrateMapPaletteName = migratePaletteName