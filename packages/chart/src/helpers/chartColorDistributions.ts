// Chart color distributions for v2 9-color sequential palettes to improve contrast
// Similar to map distributions but optimized for chart legends
export const v2ColorDistribution = {
  1: [4], // Middle color for single item
  2: [0, 4], // First and middle
  3: [0, 4, 8], // First, middle, last
  4: [0, 2, 6, 8], // Evenly spaced
  5: [0, 2, 4, 6, 8], // Well-distributed
  6: [0, 1, 3, 5, 7, 8], // Good spacing
  7: [0, 1, 2, 4, 6, 7, 8], // Skip middle-adjacent
  8: [0, 1, 2, 3, 5, 6, 7, 8], // Skip one in middle
  9: [0, 1, 2, 3, 4, 5, 6, 7, 8] // Use all colors
}