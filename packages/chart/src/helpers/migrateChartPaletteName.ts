export const chartPaletteMigrationMap: Record<string, string> = {
  // GROUP 1: Orange/Red Palettes -> sequential-orange
  yelloworangered: 'sequential-orange',
  yelloworangebrown: 'sequential-orange',
  orangered: 'sequential-orange',
  yellowpurple: 'sequential-orange',
  red: 'sequential-orange',
  'Sequential Orange': 'sequential-orange',
  'Sequential Orange Two': 'sequential-orange',
  'sequential-orange(MPX)': 'sequential-orange',
  'sequential-orange-(MPX)': 'sequential-orange',

  // GROUP 2: Pink/Purple Palettes -> sequential-purple
  pinkpurple: 'sequential-purple',

  // GROUP 3: Blue/Green Palettes -> sequential-blue
  bluegreen: 'sequential-blue',
  'sequential-blue': 'sequential-blue',
  'sequential-blue-2-(MPX)': 'sequential-blue',
  'sequential-blue-2(MPX)': 'sequential-blue',
  'Sequential Blue': 'sequential-blue',
  'sequential Blue Two': 'sequential-blue',
  'sequential Blue Three': 'sequential-blue',

  // GROUP 4: Green Palettes -> sequential-green
  greenblue: 'sequential-green',
  'Sequential Green': 'sequential-green',

  // GROUP 5: Qualitative Palettes -> qualitative-standard
  qualitative1: 'qualitative-standard',
  qualitative2: 'qualitative-standard',
  qualitative3: 'qualitative-standard',
  qualitative4: 'qualitative-standard',
  colorblindsafe: 'qualitative-standard',
  'qualitative-bold': 'qualitative-standard',
  'qualitative-soft': 'qualitative-standard'
}

export const migrateChartPaletteName = (oldPaletteName: string): string => {
  // Try exact match first
  if (chartPaletteMigrationMap[oldPaletteName]) {
    return chartPaletteMigrationMap[oldPaletteName]
  }

  // Try case-insensitive match
  const lowerCaseName = oldPaletteName.toLowerCase()
  const matchingKey = Object.keys(chartPaletteMigrationMap).find(key => key.toLowerCase() === lowerCaseName)

  return matchingKey ? chartPaletteMigrationMap[matchingKey] : oldPaletteName
}
