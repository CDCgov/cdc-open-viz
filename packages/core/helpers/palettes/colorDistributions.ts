// Chart color distributions for v2 9-color sequential palettes to improve contrast
// Similar to map distributions but optimized for chart legends
export const v2ColorDistribution = {
  1: [4], // Middle color for single item
  2: [0, 8], // First and middle
  3: [0, 4, 8], // First, middle, last
  4: [0, 2, 6, 8], // Evenly spaced
  5: [0, 2, 4, 6, 8], // Well-distributed
  6: [0, 1, 3, 5, 7, 8], // Good spacing
  7: [0, 1, 2, 4, 6, 7, 8], // Skip middle-adjacent
  8: [0, 1, 2, 3, 5, 6, 7, 8], // Skip one in middle
  9: [0, 1, 2, 3, 4, 5, 6, 7, 8] // Use all colors
}

// Current chart sampling for sequential palettes. Maps retain v2ColorDistribution.
export const chartV2ColorDistribution = {
  ...v2ColorDistribution,
  2: [4, 8]
}

// Enhanced color distributions for divergent palettes to maximize contrast
// Prioritizes endpoints and avoids the neutral middle region
export const divergentColorDistribution = {
  1: [4], // Neutral middle for single item
  2: [1, 7], // Strong contrast from each end
  3: [0, 4, 8], // Maximum endpoints plus neutral
  4: [0, 2, 6, 8], // Well-spaced with emphasis on extremes
  5: [0, 1, 4, 7, 8], // Skip adjacent to middle, emphasize ends
  6: [0, 1, 3, 5, 7, 8], // Avoid immediate middle area
  7: [0, 1, 2, 4, 6, 7, 8], // Skip one middle-adjacent
  8: [0, 1, 2, 3, 5, 6, 7, 8], // Skip one in middle
  9: [0, 1, 2, 3, 4, 5, 6, 7, 8] // Use all colors
}

/**
 * Legacy chart distribution retained for released V2 chart rendering.
 *
 * These indices appear to have been designed around the original colorblindsafe
 * palette order, but released charts apply them to the V2 qualitative_standard
 * palette. Keep the indices unchanged so palette version 2.0 configs preserve
 * their historical colors.
 */
export const colorblindColorDistribution = {
  1: [0],
  2: [0, 4],
  3: [0, 2, 4],
  4: [0, 1, 2, 4],
  5: [0, 1, 2, 4, 5],
  6: [0, 1, 2, 4, 5, 6],
  7: [0, 1, 2, 4, 5, 6, 8],
  8: [0, 1, 2, 4, 5, 6, 7, 8],
  9: [0, 1, 2, 3, 4, 5, 6, 7, 8]
}

// Original colorblindsafe distribution translated to the v2 qualitative_standard palette order
export const qualitativeStandardColorDistribution = {
  1: [0], // Blue
  2: [0, 6], // Blue, orange
  3: [0, 4, 6], // Blue, green, orange
  4: [0, 2, 4, 6], // Add cyan
  5: [0, 2, 4, 6, 3], // Add red
  6: [0, 2, 4, 6, 3, 1], // Add purple
  7: [0, 2, 4, 6, 3, 1, 8], // Add brown
  8: [0, 2, 4, 6, 3, 1, 7, 8], // Add dark blue
  9: [0, 2, 4, 5, 6, 3, 1, 7, 8] // Add yellow
}

// Basic color distribution for map v1 compatibility
// Simple distribution pattern for any palette length up to 10 items
export const mapV1ColorDistribution = {
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
