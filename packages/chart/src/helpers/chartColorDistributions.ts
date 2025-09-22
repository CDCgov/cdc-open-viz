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

// Color distribution optimized for colorblind-safe palette accessibility
// Maximizes perceptual differences for color vision deficiency
export const colorblindColorDistribution = {
  1: [0], // Start with strongest color
  2: [0, 4], // High contrast pair (orange, blue)
  3: [0, 2, 4], // Orange, green, blue - maximum differentiation
  4: [0, 1, 2, 4], // Add cyan for more separation
  5: [0, 1, 2, 4, 5], // Add dark blue for depth
  6: [0, 1, 2, 4, 5, 6], // Add pink for additional distinction
  7: [0, 1, 2, 4, 5, 6, 8], // Add brown, skip black temporarily
  8: [0, 1, 2, 4, 5, 6, 7, 8], // Add black for maximum contrast
  9: [0, 1, 2, 3, 4, 5, 6, 7, 8] // Use all colors
}
