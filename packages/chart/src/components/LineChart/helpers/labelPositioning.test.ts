import { describe, it, expect } from 'vitest'
import { calculateLabelPosition, calculateAngle, isLowValue } from './labelPositioning'

describe('labelPositioning', () => {
  const X_AXIS_Y = 450 // Bottom of chart
  const VERTICAL_OFFSET = 9
  const HORIZONTAL_OFFSET_SMALL = 4.5
  const HORIZONTAL_OFFSET_LARGE = 9

  describe('calculateAngle', () => {
    it('should calculate 0° for horizontal right', () => {
      const from = { x: 0, y: 100 }
      const to = { x: 100, y: 100 }
      expect(calculateAngle(from, to)).toBeCloseTo(0, 1)
    })

    it('should calculate 90° for vertical up', () => {
      const from = { x: 100, y: 100 }
      const to = { x: 100, y: 0 }
      expect(calculateAngle(from, to)).toBeCloseTo(90, 1)
    })

    it('should calculate 180° for horizontal left', () => {
      const from = { x: 100, y: 100 }
      const to = { x: 0, y: 100 }
      expect(calculateAngle(from, to)).toBeCloseTo(180, 1)
    })

    it('should calculate 270° for vertical down', () => {
      const from = { x: 100, y: 0 }
      const to = { x: 100, y: 100 }
      expect(calculateAngle(from, to)).toBeCloseTo(270, 1)
    })

    it('should calculate 45° for diagonal up-right', () => {
      const from = { x: 0, y: 100 }
      const to = { x: 100, y: 0 }
      expect(calculateAngle(from, to)).toBeCloseTo(45, 1)
    })

    it('should calculate 135° for diagonal up-left', () => {
      const from = { x: 100, y: 100 }
      const to = { x: 0, y: 0 }
      expect(calculateAngle(from, to)).toBeCloseTo(135, 1)
    })
  })

  describe('isLowValue', () => {
    it('should return true when point is ≤20px above x-axis', () => {
      expect(isLowValue(430, 450)).toBe(true) // 20px
      expect(isLowValue(440, 450)).toBe(true) // 10px
      expect(isLowValue(450, 450)).toBe(true) // 0px
    })

    it('should return false when point is >20px above x-axis', () => {
      expect(isLowValue(429, 450)).toBe(false) // 21px
      expect(isLowValue(400, 450)).toBe(false) // 50px
      expect(isLowValue(350, 450)).toBe(false) // 100px
    })
  })

  describe('calculateLabelPosition - First Point', () => {
    it('should position above when ending segment is in Q3', () => {
      const pointY = 100
      const endingAngle = 225 // Q3: downward-left
      const result = calculateLabelPosition(null, endingAngle, pointY, X_AXIS_Y)

      expect(result.offsetX).toBe(0)
      expect(result.offsetY).toBe(-VERTICAL_OFFSET)
    })

    it('should position below when ending segment is in Q1 and point is high', () => {
      const pointY = 100 // Far from x-axis
      const endingAngle = 45 // Q1: upward-right
      const result = calculateLabelPosition(null, endingAngle, pointY, X_AXIS_Y)

      expect(result.offsetX).toBe(0)
      expect(result.offsetY).toBe(VERTICAL_OFFSET)
    })

    it('should position above+left when ending segment is in Q1 and point is low', () => {
      const pointY = 440 // Near x-axis (10px)
      const endingAngle = 45 // Q1: upward-right
      const result = calculateLabelPosition(null, endingAngle, pointY, X_AXIS_Y)

      expect(result.offsetX).toBe(-HORIZONTAL_OFFSET_SMALL)
      expect(result.offsetY).toBe(-VERTICAL_OFFSET)
    })

    it('should position above when ending segment is in Q2 or Q4 (default)', () => {
      const pointY = 100
      const endingAngleQ2 = 135 // Q2
      const endingAngleQ4 = 315 // Q4

      const resultQ2 = calculateLabelPosition(null, endingAngleQ2, pointY, X_AXIS_Y)
      const resultQ4 = calculateLabelPosition(null, endingAngleQ4, pointY, X_AXIS_Y)

      expect(resultQ2.offsetX).toBe(0)
      expect(resultQ2.offsetY).toBe(-VERTICAL_OFFSET)
      expect(resultQ4.offsetX).toBe(0)
      expect(resultQ4.offsetY).toBe(-VERTICAL_OFFSET)
    })
  })

  describe('calculateLabelPosition - Last Point', () => {
    it('should position above when starting segment is in Q4', () => {
      const pointY = 100
      const startingAngle = 315 // Q4: downward-right (looking back)
      const result = calculateLabelPosition(startingAngle, null, pointY, X_AXIS_Y)

      expect(result.offsetX).toBe(0)
      expect(result.offsetY).toBe(-VERTICAL_OFFSET)
    })

    it('should position below when starting segment is in Q2 and point is high', () => {
      const pointY = 100 // Far from x-axis
      const startingAngle = 135 // Q2: upward-left (looking back)
      const result = calculateLabelPosition(startingAngle, null, pointY, X_AXIS_Y)

      expect(result.offsetX).toBe(0)
      expect(result.offsetY).toBe(VERTICAL_OFFSET)
    })

    it('should position above+right when starting segment is in Q2 and point is low', () => {
      const pointY = 440 // Near x-axis (10px)
      const startingAngle = 135 // Q2: upward-left (looking back)
      const result = calculateLabelPosition(startingAngle, null, pointY, X_AXIS_Y)

      expect(result.offsetX).toBe(HORIZONTAL_OFFSET_SMALL)
      expect(result.offsetY).toBe(-VERTICAL_OFFSET)
    })

    it('should position below when starting segment is in Q1 and point is high', () => {
      const pointY = 100 // Far from x-axis
      const startingAngle = 45 // Q1: upward-right (looking back)
      const result = calculateLabelPosition(startingAngle, null, pointY, X_AXIS_Y)

      expect(result.offsetX).toBe(0)
      expect(result.offsetY).toBe(VERTICAL_OFFSET)
    })

    it('should position above+right when starting segment is in Q1 and point is low', () => {
      const pointY = 440 // Near x-axis (10px)
      const startingAngle = 45 // Q1: upward-right (looking back)
      const result = calculateLabelPosition(startingAngle, null, pointY, X_AXIS_Y)

      expect(result.offsetX).toBe(HORIZONTAL_OFFSET_SMALL)
      expect(result.offsetY).toBe(-VERTICAL_OFFSET)
    })
  })

  describe('calculateLabelPosition - Middle Point', () => {
    it('should position above when start=Q3 and end=Q4 (valley bottom)', () => {
      const pointY = 100
      const startingAngle = 225 // Q3: looking back to upper-left
      const endingAngle = 315 // Q4: looking forward to lower-right
      const result = calculateLabelPosition(startingAngle, endingAngle, pointY, X_AXIS_Y)

      expect(result.offsetX).toBe(0)
      expect(result.offsetY).toBe(-VERTICAL_OFFSET)
    })

    it('should position below when start=Q2 and end=Q1 and point is high', () => {
      const pointY = 100 // Far from x-axis
      const startingAngle = 135 // Q2: looking back to upper-left
      const endingAngle = 45 // Q1: looking forward to upper-right
      const result = calculateLabelPosition(startingAngle, endingAngle, pointY, X_AXIS_Y)

      expect(result.offsetX).toBe(0)
      expect(result.offsetY).toBe(VERTICAL_OFFSET)
    })

    it('should position above when start=Q2, end=Q1, low-value, angle ≥135°', () => {
      const pointY = 440 // Near x-axis (10px)
      const startingAngle = 160 // Q2
      const endingAngle = 20 // Q1
      // Angle between = 140° (≥135°)
      const result = calculateLabelPosition(startingAngle, endingAngle, pointY, X_AXIS_Y)

      expect(result.offsetX).toBe(0)
      expect(result.offsetY).toBe(-VERTICAL_OFFSET)
    })

    it('should position above+right when start=Q2, end=Q1, low-value, angle <135°, ending ≥68°', () => {
      const pointY = 440 // Near x-axis (10px)
      const startingAngle = 100 // Q2
      const endingAngle = 70 // Q1 and ≥68°
      const result = calculateLabelPosition(startingAngle, endingAngle, pointY, X_AXIS_Y)

      expect(result.offsetX).toBe(HORIZONTAL_OFFSET_LARGE)
      expect(result.offsetY).toBe(-VERTICAL_OFFSET)
    })

    it('should position above+left when start=Q2, end=Q1, low-value, angle <135°, ending <68°', () => {
      const pointY = 440 // Near x-axis (10px)
      const startingAngle = 100 // Q2
      const endingAngle = 50 // Q1 and <68°
      const result = calculateLabelPosition(startingAngle, endingAngle, pointY, X_AXIS_Y)

      expect(result.offsetX).toBe(-HORIZONTAL_OFFSET_LARGE)
      expect(result.offsetY).toBe(-VERTICAL_OFFSET)
    })

    it('should position above+left when start=Q3 and end=Q1', () => {
      const pointY = 100
      const startingAngle = 225 // Q3
      const endingAngle = 45 // Q1
      const result = calculateLabelPosition(startingAngle, endingAngle, pointY, X_AXIS_Y)

      expect(result.offsetX).toBe(-HORIZONTAL_OFFSET_LARGE)
      expect(result.offsetY).toBe(-VERTICAL_OFFSET)
    })

    it('should position above+right when start=Q2 and end=Q4', () => {
      const pointY = 100
      const startingAngle = 135 // Q2
      const endingAngle = 315 // Q4
      const result = calculateLabelPosition(startingAngle, endingAngle, pointY, X_AXIS_Y)

      expect(result.offsetX).toBe(HORIZONTAL_OFFSET_LARGE)
      expect(result.offsetY).toBe(-VERTICAL_OFFSET)
    })
  })

  describe('Edge cases', () => {
    it('should handle point exactly at x-axis (value=0)', () => {
      const pointY = 450 // Exactly at x-axis
      const startingAngle = 135 // Q2
      const endingAngle = 45 // Q1
      const result = calculateLabelPosition(startingAngle, endingAngle, pointY, X_AXIS_Y)

      // Should still follow low-value rules
      expect(result.offsetY).toBe(-VERTICAL_OFFSET)
    })

    it('should return default position above when no specific rule matches', () => {
      const pointY = 100
      const startingAngle = 180 // Q3
      const endingAngle = 180 // Q3 (unusual but possible)
      const result = calculateLabelPosition(startingAngle, endingAngle, pointY, X_AXIS_Y)

      expect(result.offsetY).toBe(-VERTICAL_OFFSET)
    })
  })
})
