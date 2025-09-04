// Chart palette migration map
const chartPaletteMigrationMap: Record<string, string> = {
  yelloworangered: 'sequential_orange',
  yelloworangebrown: 'sequential_orange',
  orangered: 'sequential_orange',
  yellowpurple: 'sequential_orange',
  red: 'sequential_orange',
  'Sequential Orange': 'sequential_orange',
  'Sequential Orange Two': 'sequential_orange',
  'sequential-orange(MPX)': 'sequential_orange',
  'sequential-orange-(MPX)': 'sequential_orange',
  pinkpurple: 'sequential_purple',
  bluegreen: 'sequential_blue',
  'sequential-blue': 'sequential_blue',
  'sequential-blue-2-(MPX)': 'sequential_blue',
  'sequential-blue-2(MPX)': 'sequential_blue',
  'Sequential Blue': 'sequential_blue',
  'sequential Blue Two': 'sequential_blue',
  'sequential Blue Three': 'sequential_blue',
  greenblue: 'sequential_green',
  'Sequential Green': 'sequential_green',
  qualitative1: 'qualitative_standard',
  qualitative2: 'qualitative_standard',
  qualitative3: 'qualitative_standard',
  qualitative4: 'qualitative_standard',
  colorblindsafe: 'qualitative_standard',
  'qualitative-bold': 'qualitative_standard',
  'qualitative-soft': 'qualitative_standard',
  // Reverse palette migrations
  yelloworangeredreverse: 'sequential_orangereverse',
  yelloworangebrownreverse: 'sequential_orangereverse',
  orangeredreverse: 'sequential_orangereverse',
  yellowpurplereverse: 'sequential_orangereverse',
  redreverse: 'sequential_orangereverse',
  'Sequential Orangereverse': 'sequential_orangereverse',
  'Sequential Orange Tworeverse': 'sequential_orangereverse',
  'sequential-orange(MPX)reverse': 'sequential_orangereverse',
  'sequential-orange-(MPX)reverse': 'sequential_orangereverse',
  pinkpurplereverse: 'sequential_purplereverse',
  bluegreenreverse: 'sequential_bluereverse',
  'sequential-bluereverse': 'sequential_bluereverse',
  'sequential-blue-2-(MPX)reverse': 'sequential_bluereverse',
  'sequential-blue-2(MPX)reverse': 'sequential_bluereverse',
  'Sequential Bluereverse': 'sequential_bluereverse',
  'sequential Blue Tworeverse': 'sequential_bluereverse',
  'sequential Blue Threereverse': 'sequential_bluereverse',
  greenbluereverse: 'sequential_greenreverse',
  'Sequential Greenreverse': 'sequential_greenreverse',
  qualitative1reverse: 'qualitative_standardreverse',
  qualitative2reverse: 'qualitative_standardreverse',
  qualitative3reverse: 'qualitative_standardreverse',
  qualitative4reverse: 'qualitative_standardreverse',
  colorblindsafereverse: 'qualitative_standardreverse',
  'qualitative-boldreverse': 'qualitative_standardreverse',
  'qualitative-softreverse': 'qualitative_standardreverse'
}

// Map palette migration map
const mapPaletteMigrationMap: Record<string, string> = {
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
  qualitative_earth_tones: 'qualitative',
  // Reverse palette migrations
  sequential_yellow_orange_redreverse: 'sequential_orangereverse',
  sequential_yellow_orange_brownreverse: 'sequential_orangereverse',
  sequential_orange_redreverse: 'sequential_orangereverse',
  sequential_orange_extendedreverse: 'sequential_orangereverse',
  sequential_pink_purplereverse: 'sequential_purplereverse',
  divergent_yellow_purplereverse: 'divergent_blue_purplereverse',
  sequential_blue_greenreverse: 'sequential_bluereverse',
  sequential_blue_extendedreverse: 'sequential_bluereverse',
  sequential_green_bluereverse: 'sequential_tealreverse',
  sequential_redreverse: 'sequential_orangereverse',
  qualitative_earth_tonesreverse: 'qualitativereverse'
}

// Combined palette migration map for backward compatibility
const paletteMigrationMap: Record<string, string> = {
  ...chartPaletteMigrationMap,
  ...mapPaletteMigrationMap
}

/**
 * Migrates chart palette names from old format to new format
 * @param oldPaletteName - The old palette name to migrate
 * @returns The new palette name, or the original if no migration found
 */
export const migrateChartPaletteName = (oldPaletteName: string): string => {
  // Check if this is a reverse palette
  const isReverse = oldPaletteName.endsWith('reverse')
  const basePaletteName = isReverse ? oldPaletteName.slice(0, -7) : oldPaletteName
  
  // Try exact match first
  if (chartPaletteMigrationMap[basePaletteName]) {
    const migratedBase = chartPaletteMigrationMap[basePaletteName]
    return isReverse ? migratedBase + 'reverse' : migratedBase
  }

  // Try case-insensitive match for chart palettes
  const lowerCaseName = basePaletteName.toLowerCase()
  const matchingKey = Object.keys(chartPaletteMigrationMap).find(key => key.toLowerCase() === lowerCaseName)

  if (matchingKey) {
    const migratedBase = chartPaletteMigrationMap[matchingKey]
    return isReverse ? migratedBase + 'reverse' : migratedBase
  }

  return oldPaletteName
}

/**
 * Migrates map palette names from old format to new format
 * @param oldPaletteName - The old palette name to migrate
 * @returns The new palette name, or the original if no migration found
 */
export const migrateMapPaletteName = (oldPaletteName: string): string => {
  // Try exact match first
  if (mapPaletteMigrationMap[oldPaletteName]) {
    return mapPaletteMigrationMap[oldPaletteName]
  }

  // Try case-insensitive match for map palettes
  const lowerCaseName = oldPaletteName.toLowerCase()
  const matchingKey = Object.keys(mapPaletteMigrationMap).find(key => key.toLowerCase() === lowerCaseName)

  return matchingKey ? mapPaletteMigrationMap[matchingKey] : oldPaletteName
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

  // Try case-insensitive match
  const lowerCaseName = oldPaletteName.toLowerCase()
  const matchingKey = Object.keys(paletteMigrationMap).find(key => key.toLowerCase() === lowerCaseName)

  return matchingKey ? paletteMigrationMap[matchingKey] : oldPaletteName
}