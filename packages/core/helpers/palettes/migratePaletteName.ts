// Chart palette migration map
export const chartPaletteMigrationMap: Record<string, string> = {
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
export const mapPaletteMigrationMap: Record<string, string> = {
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
  qualitative_earth_tonesreverse: 'qualitativereverse',
  'qualitative_bold': 'qualitative_standard',
  'qualitative_soft': 'qualitative_standard',
  'qualitative_boldreverse': 'qualitative_standardreverse',
  'qualitative_softreverse': 'qualitative_standardreverse',
  'qualitative1': 'qualitative_standard',
  'qualitative2': 'qualitative_standard',
  'qualitative3': 'qualitative_standard',
  'qualitative4': 'qualitative_standard',
  'colorblindsafe': 'qualitative_standard',
  'qualitative1reverse': 'qualitative_standardreverse',
  'qualitative2reverse': 'qualitative_standardreverse',
  'qualitative3reverse': 'qualitative_standardreverse',
  'qualitative4reverse': 'qualitative_standardreverse',
}

// Two-color palette migration map (v1 to v2)
export const twoColorPaletteMigrationMap: Record<string, string> = {
  // Monochrome palettes → divergent_blue_purple
  'monochrome-1': 'divergent_blue_purple',
  'monochrome-2': 'divergent_blue_purple', 
  'monochrome-3': 'divergent_blue_purple',
  'monochrome-4': 'divergent_blue_purple',
  
  // Warm palettes → divergent_green_orange
  'monochrome-5': 'divergent_green_orange',
  'warm-1': 'divergent_green_orange',
  
  // Cool palettes → divergent_blue_cyan
  'cool-1': 'divergent_blue_cyan',
  'cool-2': 'divergent_blue_cyan',
  'cool-3': 'divergent_blue_cyan', 
  'cool-4': 'divergent_blue_cyan',
  'cool-5': 'divergent_blue_cyan',
  
  // Complementary palettes → divergent_blue_orange
  'complementary-1': 'divergent_blue_orange',
  'complementary-2': 'divergent_blue_orange',
  'complementary-3': 'divergent_blue_orange',
  'complementary-4': 'divergent_blue_orange',
  'complementary-5': 'divergent_blue_orange',
  
  // Reverse palette migrations
  'monochrome-1reverse': 'divergent_blue_purplereverse',
  'monochrome-2reverse': 'divergent_blue_purplereverse',
  'monochrome-3reverse': 'divergent_blue_purplereverse', 
  'monochrome-4reverse': 'divergent_blue_purplereverse',
  'monochrome-5reverse': 'divergent_green_orangereverse',
  'warm-1reverse': 'divergent_green_orangereverse',
  'cool-1reverse': 'divergent_blue_cyanreverse',
  'cool-2reverse': 'divergent_blue_cyanreverse',
  'cool-3reverse': 'divergent_blue_cyanreverse',
  'cool-4reverse': 'divergent_blue_cyanreverse',
  'cool-5reverse': 'divergent_blue_cyanreverse',
  'complementary-1reverse': 'divergent_blue_orangereverse',
  'complementary-2reverse': 'divergent_blue_orangereverse',
  'complementary-3reverse': 'divergent_blue_orangereverse',
  'complementary-4reverse': 'divergent_blue_orangereverse',
  'complementary-5reverse': 'divergent_blue_orangereverse'
}

// Combined palette migration map for backward compatibility
export const paletteMigrationMap: Record<string, string> = {
  ...chartPaletteMigrationMap,
  ...mapPaletteMigrationMap,
  ...twoColorPaletteMigrationMap
}


