/**
 * Line Chart Label Positioning Algorithm
 *
 * Implements quadrant-based label positioning to prevent overlaps with line segments.
 * Uses segment direction analysis and vertical position to determine optimal label placement.
 *
 * Quadrant System (Standard Cartesian):
 * - Q1 (0°-90°): upper-right
 * - Q2 (90°-180°): upper-left
 * - Q3 (180°-270°): lower-left
 * - Q4 (270°-360°): lower-right
 *
 * Angle System: Standard polar coordinates (0° = right/east, counterclockwise)
 * Note: In SVG coordinate space, Y increases downward, so angles are inverted
 *
 * Segment Constraints:
 * - Starting segments (left quadrants) should be in Q2 or Q3
 * - Ending segments (right quadrants) should be in Q1 or Q4
 */

// Constants
const VERTICAL_OFFSET = 9 // 0.5rem in pixels
const HORIZONTAL_OFFSET_SMALL = 4.5 // 0.25rem in pixels
const HORIZONTAL_OFFSET_LARGE = 9 // 0.5rem in pixels
const LOW_VALUE_THRESHOLD = 20 // pixels from x-axis

interface Point {
  x: number
  y: number
}

interface LabelOffset {
  dx: number // horizontal offset
  dy: number // vertical offset (negative = up, positive = down)
  textAnchor?: 'start' | 'middle' | 'end'
  verticalAnchor?: 'start' | 'middle' | 'end'
}

/**
 * Determine quadrant for an angle (1-4) using standard Cartesian plane
 * Q1 (0°-90°): upper-right
 * Q2 (90°-180°): upper-left
 * Q3 (180°-270°): lower-left
 * Q4 (270°-360°): lower-right
 */
function getQuadrant(angle: number): number {
  const normalized = ((angle % 360) + 360) % 360
  if (normalized >= 0 && normalized < 90) return 1
  if (normalized >= 90 && normalized < 180) return 2
  if (normalized >= 180 && normalized < 270) return 3
  if (normalized >= 270 && normalized < 360) return 4
  return 1 // Edge case: 360° maps to 0° → Q1
}

/**
 * Calculate the angle between two segments
 * Returns the absolute angular difference, normalized to 0°-180°
 */
function getAngleBetweenSegments(startAngle: number, endAngle: number): number {
  let diff = Math.abs(endAngle - startAngle)
  if (diff > 180) {
    diff = 360 - diff
  }
  return diff
}

/**
 * Check if a point is low-value (≤20px above x-axis)
 */
export function isLowValue(yPosition: number, xAxisY: number): boolean {
  const distanceFromXAxis = xAxisY - yPosition
  return distanceFromXAxis <= LOW_VALUE_THRESHOLD
}

/**
 * Calculate the angle in degrees between two points
 * Returns angle in range [0, 360) using standard polar coordinates:
 * - 0° = right (east)
 * - 90° = up (north in Cartesian, but note SVG y-axis is inverted)
 * - 180° = left (west)
 * - 270° = down (south in Cartesian)
 */
export function calculateAngle(fromPoint: Point, toPoint: Point): number {
  const dx = toPoint.x - fromPoint.x
  const dy = toPoint.y - fromPoint.y

  // atan2 returns angle in radians from -PI to PI
  // Negative dy because SVG y-axis is inverted (y increases downward)
  let angleRad = Math.atan2(-dy, dx)
  let angleDeg = angleRad * (180 / Math.PI)

  // Normalize to [0, 360)
  if (angleDeg < 0) {
    angleDeg += 360
  }

  return angleDeg
}

/**
 * Main label positioning function
 *
 * Calculates optimal label position based on segment directions and point position
 *
 * @param startingSegmentAngle - Angle from previous point to current (null for first point)
 * @param endingSegmentAngle - Angle from current point to next (null for last point)
 * @param pointY - Y coordinate of current point
 * @param xAxisY - Y coordinate of the x-axis
 * @param value - Optional data value for debugging purposes
 */
export function calculateLabelPosition(
  startingSegmentAngle: number | null,
  endingSegmentAngle: number | null,
  pointY: number,
  xAxisY: number,
  value?: string | number
): { offsetX: number; offsetY: number } {
  const isNearXAxis = isLowValue(pointY, xAxisY)
  const distanceFromXAxis = xAxisY - pointY

  // Debug logging
  const startQ = startingSegmentAngle !== null ? getQuadrant(startingSegmentAngle) : null
  const endQ = endingSegmentAngle !== null ? getQuadrant(endingSegmentAngle) : null
  const angleBetween =
    startingSegmentAngle !== null && endingSegmentAngle !== null
      ? getAngleBetweenSegments(startingSegmentAngle, endingSegmentAngle)
      : null

  const pointType = startingSegmentAngle === null ? 'FIRST' : endingSegmentAngle === null ? 'LAST' : 'MIDDLE'
  const valueStr = value !== undefined ? `Value=${value}` : 'Value=N/A'

  // console.log(
  //   `[${pointType}] ${valueStr} | PointY=${pointY.toFixed(1)} | Dist=${distanceFromXAxis.toFixed(1)}px | <20px=${isNearXAxis ? 'YES' : 'NO'} | ` +
  //   `Start=${startingSegmentAngle?.toFixed(1) || 'N/A'}° (Q${startQ || '-'}) | ` +
  //   `End=${endingSegmentAngle?.toFixed(1) || 'N/A'}° (Q${endQ || '-'}) | ` +
  //   `Between=${angleBetween?.toFixed(1) || 'N/A'}°`
  // )

  // ===== FIRST POINT (only ending segment: current → next) =====
  if (startingSegmentAngle === null && endingSegmentAngle !== null) {
    const quad = getQuadrant(endingSegmentAngle)

    // Position label 0.5rem / 9px above point when segment is in Quadrant 3
    if (quad === 3) {
      return { offsetX: 0, offsetY: -VERTICAL_OFFSET }
    }

    // If the point isn't near the x-axis, position label 0.5rem / 9px below point when segment is in Quadrant 1
    if (quad === 1 && !isNearXAxis) {
      return { offsetX: 0, offsetY: VERTICAL_OFFSET }
    }

    // If point is 20 pixels or less above x-axis (i.e., it's a low value and close to 0)
    // position label 0.5rem / 9px above and 0.25rem / 4.5px to the left of point
    if (quad === 1 && isNearXAxis) {
      return { offsetX: -HORIZONTAL_OFFSET_SMALL, offsetY: -VERTICAL_OFFSET }
    }

    // Default for Q2 and Q4: position above
    return { offsetX: 0, offsetY: -VERTICAL_OFFSET }
  }

  // ===== LAST POINT (only starting segment: previous → current) =====
  // Mirrors the first point logic
  if (startingSegmentAngle !== null && endingSegmentAngle === null) {
    const quad = getQuadrant(startingSegmentAngle)

    // Q4 mirrors first point Q3: position above
    // This also works for when last data point is near x-axis
    if (quad === 4) {
      return { offsetX: 0, offsetY: -VERTICAL_OFFSET }
    }

    // Q2 matches the quadrant.txt rules: below if high, above+right if low
    if (quad === 2) {
      if (!isNearXAxis) {
        // Point >20px above x-axis: position below
        return { offsetX: 0, offsetY: VERTICAL_OFFSET }
      } else {
        // Point ≤20px above x-axis: position above + 0.25rem right
        return { offsetX: HORIZONTAL_OFFSET_SMALL, offsetY: -VERTICAL_OFFSET }
      }
    }

    // Q1: mirror first point Q1 logic for symmetry in Q1 stories
    if (quad === 1) {
      if (!isNearXAxis) {
        // Point >20px above x-axis: position below
        return { offsetX: 0, offsetY: VERTICAL_OFFSET }
      } else {
        // Point ≤20px above x-axis: position above + 0.25rem right
        return { offsetX: HORIZONTAL_OFFSET_SMALL, offsetY: -VERTICAL_OFFSET }
      }
    }

    // Default for Q3: position above
    return { offsetX: 0, offsetY: -VERTICAL_OFFSET }
  }

  // ===== MIDDLE POINT (both segments) =====
  if (startingSegmentAngle !== null && endingSegmentAngle !== null) {
    const startQ = getQuadrant(startingSegmentAngle)
    const endQ = getQuadrant(endingSegmentAngle)
    const angleBetween = getAngleBetweenSegments(startingSegmentAngle, endingSegmentAngle)

    // Position label 0.5rem / 9px above point when starting segment is in Quadrant 3
    // and ending segment is in Quadrant 4 and the angle created is 0°–180°
    if (startQ === 3 && endQ === 4 && angleBetween >= 0 && angleBetween <= 180) {
      return { offsetX: 0, offsetY: -VERTICAL_OFFSET }
    }

    // If the point isn't near the x-axis, position label 0.5rem / 9px below it
    // when starting segment is in Quadrant 2 and ending segment is in Quadrant 1
    // and the angle created is 1°–179°
    if (startQ === 2 && endQ === 1 && angleBetween >= 1 && angleBetween <= 179 && !isNearXAxis) {
      return { offsetX: 0, offsetY: VERTICAL_OFFSET }
    }

    // If the point is 20 pixels or less above x-axis (i.e., it's a low value and close to 0)
    // and starting segment is in Quadrant 2 and ending segment is in Quadrant 1
    // then calculate the angle between the 2 segments:
    if (startQ === 2 && endQ === 1 && angleBetween >= 1 && angleBetween <= 179 && isNearXAxis) {
      // If it's 135°–180° then position the label 0.5rem / 9px above the point
      if (angleBetween >= 135 && angleBetween <= 180) {
        return { offsetX: 0, offsetY: -VERTICAL_OFFSET }
      }

      // If it's less than 135°, calculate the angle created by the ending segment
      if (angleBetween < 135) {
        // If it's 68° or more then position the label 0.5rem / 9px above and 0.5rem / 9px to the right of the point
        if (endingSegmentAngle >= 68) {
          return { offsetX: HORIZONTAL_OFFSET_LARGE, offsetY: -VERTICAL_OFFSET }
        }
        // Otherwise, position the label 0.5rem / 9px above and 0.5rem / 9px to the left of the point
        else {
          return { offsetX: -HORIZONTAL_OFFSET_LARGE, offsetY: -VERTICAL_OFFSET }
        }
      }
    }

    // Position the label 0.5rem / 9px above and 0.5rem / 9px to the left of the point
    // if starting segment is in Quadrant 3 and ending segment is in Quadrant 1
    // and the angle created is 92°–269°
    if (startQ === 3 && endQ === 1 && angleBetween >= 92 && angleBetween <= 269) {
      return { offsetX: -HORIZONTAL_OFFSET_LARGE, offsetY: -VERTICAL_OFFSET }
    }

    // Position the label 0.5rem / 9px above and 0.5rem / 9px to the right of the point
    // if starting segment is in Quadrant 2 and ending segment is in Quadrant 4
    // and the angle created is 92°–269°
    if (startQ === 2 && endQ === 4 && angleBetween >= 92 && angleBetween <= 269) {
      return { offsetX: HORIZONTAL_OFFSET_LARGE, offsetY: -VERTICAL_OFFSET }
    }
  }

  // Default fallback: position above
  return { offsetX: 0, offsetY: -VERTICAL_OFFSET }
}

/**
 * Get text anchor based on horizontal offset
 */
function getTextAnchor(offsetX: number): 'start' | 'middle' | 'end' {
  if (offsetX > 0) return 'start'
  if (offsetX < 0) return 'end'
  return 'middle'
}

/**
 * Get vertical anchor based on vertical offset
 */
function getVerticalAnchor(offsetY: number): 'start' | 'middle' | 'end' {
  if (offsetY > 0) return 'start' // Below point
  if (offsetY < 0) return 'end' // Above point
  return 'middle'
}

/**
 * Helper function to get label position for a data point in a series
 */
export function getLabelPositionForDataPoint(
  dataPoints: Point[],
  dataIndex: number,
  xAxisY: number,
  value?: string | number
): LabelOffset {
  const currentPoint = dataPoints[dataIndex]
  const prevPoint = dataPoints[dataIndex - 1]
  const nextPoint = dataPoints[dataIndex + 1]

  // Calculate angles for segments connected to this point
  // Starting segment: angle looking BACK at where we came from (current → previous)
  // This ensures starting segments are in left quadrants (Q2/Q3)
  const startingSegmentAngle = prevPoint ? calculateAngle(currentPoint, prevPoint) : null

  // Ending segment: angle looking FORWARD to where we're going (current → next)
  // This ensures ending segments are in right quadrants (Q1/Q4)
  const endingSegmentAngle = nextPoint ? calculateAngle(currentPoint, nextPoint) : null

  const position = calculateLabelPosition(startingSegmentAngle, endingSegmentAngle, currentPoint.y, xAxisY, value)

  return {
    dx: position.offsetX,
    dy: position.offsetY,
    textAnchor: getTextAnchor(position.offsetX),
    verticalAnchor: getVerticalAnchor(position.offsetY)
  }
}

/**
 * Legacy compatibility
 * @deprecated Use calculateLabelPosition instead
 */
export function calculateLabelOffset(
  pointIndex: number,
  pointY: number,
  startingSegmentAngle: number | null,
  endingSegmentAngle: number | null,
  xAxisY: number,
  value?: string | number
): { offsetX: number; offsetY: number } {
  return calculateLabelPosition(startingSegmentAngle, endingSegmentAngle, pointY, xAxisY, value)
}
