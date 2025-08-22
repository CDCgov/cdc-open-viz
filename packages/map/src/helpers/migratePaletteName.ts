// Palette migration dictionary from v1 to v2 (after 4.25.9 name updates)
export const paletteMigrationMap: Record<string, string> = {
  // Sequential Orange migrations (v1 -> v2)
  sequential_yellow_orange_red: 'sequential_orange',
  sequential_yellow_orange_brown: 'sequential_orange',
  sequential_orange_red: 'sequential_orange',
  sequential_orange_extended: 'sequential_orange',

  // Sequential Purple migrations (v1 -> v2)
  sequential_pink_purple: 'sequential_purple',
  divergent_yellow_purple: 'divergent_blue_purple',

  // Sequential Blue migrations (v1 -> v2)
  sequential_blue_green: 'sequential_blue',
  sequential_blue_extended: 'sequential_blue',

  // Sequential Teal migrations (v1 -> v2)
  sequential_green_blue: 'sequential_teal',

  // Sequential Green migrations (v1 -> v2)
  sequential_red: 'sequential_orange', // Red palette is actually red/orange colors

  // Qualitative migrations (v1 -> v2)
  qualitative1: 'qualitative',
  qualitative2: 'qualitative',
  qualitative3: 'qualitative',
  qualitative4: 'qualitative',
  qualitative_earth_tones: 'qualitative',
  colorblindsafe: 'qualitative'
}

// Helper function to migrate palette name
export const migratePaletteName = (oldPaletteName: string): string => {
  return paletteMigrationMap[oldPaletteName] || oldPaletteName
}
