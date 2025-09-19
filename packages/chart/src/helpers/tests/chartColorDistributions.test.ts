import { v2ColorDistribution, divergentColorDistribution, colorblindColorDistribution } from '../chartColorDistributions'

describe('Chart Color Distributions', () => {
  describe('v2ColorDistribution', () => {
    it('should have distribution mappings for 1-9 items', () => {
      for (let i = 1; i <= 9; i++) {
        expect(v2ColorDistribution[i]).toBeDefined()
        expect(Array.isArray(v2ColorDistribution[i])).toBe(true)
        expect(v2ColorDistribution[i].length).toBe(i)
      }
    })

    it('should have valid indices within 0-8 range', () => {
      Object.values(v2ColorDistribution).forEach(indices => {
        indices.forEach(index => {
          expect(index).toBeGreaterThanOrEqual(0)
          expect(index).toBeLessThanOrEqual(8)
        })
      })
    })
  })

  describe('divergentColorDistribution', () => {
    it('should have distribution mappings for 1-9 items', () => {
      for (let i = 1; i <= 9; i++) {
        expect(divergentColorDistribution[i]).toBeDefined()
        expect(Array.isArray(divergentColorDistribution[i])).toBe(true)
        expect(divergentColorDistribution[i].length).toBe(i)
      }
    })

    it('should prioritize extremes for better contrast in divergent palettes', () => {
      // For 2 items, should use strong contrast from each end
      expect(divergentColorDistribution[2]).toEqual([1, 7])

      // For 3 items, should use maximum endpoints plus neutral
      expect(divergentColorDistribution[3]).toEqual([0, 4, 8])

      // Should avoid the middle neutral area for better contrast
      expect(divergentColorDistribution[5]).toEqual([0, 1, 4, 7, 8])
    })

    it('should have valid indices within 0-8 range', () => {
      Object.values(divergentColorDistribution).forEach(indices => {
        indices.forEach(index => {
          expect(index).toBeGreaterThanOrEqual(0)
          expect(index).toBeLessThanOrEqual(8)
        })
      })
    })
  })

  describe('colorblindColorDistribution', () => {
    it('should have distribution mappings for 1-9 items', () => {
      for (let i = 1; i <= 9; i++) {
        expect(colorblindColorDistribution[i]).toBeDefined()
        expect(Array.isArray(colorblindColorDistribution[i])).toBe(true)
        expect(colorblindColorDistribution[i].length).toBe(i)
      }
    })

    it('should prioritize high contrast colors for accessibility', () => {
      // Should start with strongest contrasting colors
      expect(colorblindColorDistribution[1]).toEqual([0]) // Orange
      expect(colorblindColorDistribution[2]).toEqual([0, 4]) // Orange, Blue
      expect(colorblindColorDistribution[3]).toEqual([0, 2, 4]) // Orange, Green, Blue
    })

    it('should have valid indices within 0-8 range', () => {
      Object.values(colorblindColorDistribution).forEach(indices => {
        indices.forEach(index => {
          expect(index).toBeGreaterThanOrEqual(0)
          expect(index).toBeLessThanOrEqual(8)
        })
      })
    })

    it('should avoid black until higher counts for better visibility', () => {
      // Black (index 7) should not appear until later
      expect(colorblindColorDistribution[7]).not.toContain(7)
      expect(colorblindColorDistribution[8]).toContain(7)
    })
  })

  describe('All distributions', () => {
    it('should have unique indices in each distribution', () => {
      const distributions = [v2ColorDistribution, divergentColorDistribution, colorblindColorDistribution]

      distributions.forEach(distribution => {
        Object.values(distribution).forEach(indices => {
          const uniqueIndices = [...new Set(indices)]
          expect(uniqueIndices.length).toBe(indices.length)
        })
      })
    })

    it('should be in ascending order', () => {
      const distributions = [v2ColorDistribution, divergentColorDistribution, colorblindColorDistribution]

      distributions.forEach(distribution => {
        Object.values(distribution).forEach(indices => {
          const sorted = [...indices].sort((a, b) => a - b)
          expect(indices).toEqual(sorted)
        })
      })
    })
  })
})