import { calcInitialHeight, getOrientation } from '../sizeHelpers'
import { describe, expect, it } from 'vitest'
import { ChartOrientation, VisualizationType } from '../../types/ChartConfig'

describe('sizeHelpers', () => {
  describe('getOrientation', () => {
    it("should return 'vertical' when orientation is vertical", () => {
      const config = {
        orientation: 'vertical' as ChartOrientation,
        heights: { mobileVertical: 0, vertical: 0, horizontal: 0 },
        visualizationType: 'Bar' as VisualizationType
      }
      expect(getOrientation(config, 'md')).toBe('vertical')
    })

    it("should return 'horizontal' when orientation is horizontal", () => {
      const config = {
        orientation: 'horizontal' as ChartOrientation,
        heights: { mobileVertical: 0, vertical: 0, horizontal: 0 },
        visualizationType: 'Bar' as VisualizationType
      }
      expect(getOrientation(config, 'md')).toBe('horizontal')
    })
    it("should return 'vertical' when orientation is horizontal but visualizationType is 'Forest Plot'", () => {
      const config = {
        orientation: 'horizontal' as ChartOrientation,
        heights: { mobileVertical: 0, vertical: 0, horizontal: 0 },
        visualizationType: 'Forest Plot' as VisualizationType
      }
      expect(getOrientation(config, 'md')).toBe('vertical')
    })

    it('should return mobileVertical when viewport is mobile height', () => {
      const config = {
        orientation: 'vertical' as ChartOrientation,
        heights: { mobileVertical: 100, vertical: 0, horizontal: 0 },
        visualizationType: 'Bar' as VisualizationType
      }
      expect(getOrientation(config, 'xxs')).toBe('mobileVertical')
    })
  })
})

describe('calcInitialHeight', () => {
  it('should return 0 when no heights are provided', () => {
    const config = {
      heights: undefined,
      orientation: 'vertical' as ChartOrientation,
      visualizationType: 'Bar' as VisualizationType
    }
    expect(calcInitialHeight(config, 'md')).toBe(0)
  })

  it('should return vertical height when orientation is vertical', () => {
    const config = {
      orientation: 'vertical' as ChartOrientation,
      heights: { mobileVertical: 0, vertical: 100, horizontal: 0 },
      visualizationType: 'Bar' as VisualizationType
    }
    expect(calcInitialHeight(config, 'md')).toBe(100)
  })

  it('should return horizontal height when orientation is horizontal', () => {
    const config = {
      orientation: 'horizontal' as ChartOrientation,
      heights: { mobileVertical: 0, vertical: 0, horizontal: 100 },
      visualizationType: 'Bar' as VisualizationType
    }
    expect(calcInitialHeight(config, 'md')).toBe(100)
  })

  it('should return mobileVertical height when viewport is mobile height', () => {
    const config = {
      heights: { mobileVertical: 100, vertical: 0, horizontal: 0 },
      orientation: 'vertical' as ChartOrientation,
      visualizationType: 'Bar' as VisualizationType
    }
    expect(calcInitialHeight(config, 'xxs')).toBe(100)
  })
})
