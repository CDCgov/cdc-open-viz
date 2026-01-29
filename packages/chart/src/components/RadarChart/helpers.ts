/**
 * Helper utilities for Radar Chart point generation
 * Following visx patterns for radar/spider chart calculations
 */

export type RadarPoint = {
  x: number
  y: number
}

/**
 * Generate angles for each axis, starting at 12 o'clock position
 * @param length - number of axes
 * @returns array of angle objects in degrees
 */
export const genAngles = (length: number): { angle: number }[] => {
  return [...new Array(length + 1)].map((_, i) => ({
    angle: i * (360 / length) - 90 // Start at 12 o'clock (-90 degrees)
  }))
}

/**
 * Generate points for polygon vertices at a given radius
 * @param length - number of vertices
 * @param radius - distance from center
 * @returns array of x,y coordinates
 */
export const genPoints = (length: number, radius: number): RadarPoint[] => {
  return [...new Array(length)].map((_, i) => {
    const angle = (i * 2 * Math.PI) / length - Math.PI / 2 // Start at 12 o'clock
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle)
    }
  })
}

/**
 * Generate polygon points from data values
 * @param dataArray - array of numeric values for each axis
 * @param scale - scale function to map values to radius
 * @returns array of x,y coordinates for the polygon
 */
export const genPolygonPoints = (
  dataArray: number[],
  scale: (n: number) => number
): RadarPoint[] => {
  return dataArray.map((value, i) => {
    const angle = (i * 2 * Math.PI) / dataArray.length - Math.PI / 2
    const scaledRadius = scale(value)
    return {
      x: scaledRadius * Math.cos(angle),
      y: scaledRadius * Math.sin(angle)
    }
  })
}

/**
 * Convert RadarPoint array to SVG polygon points string
 * @param points - array of RadarPoint objects
 * @returns string formatted for SVG polygon points attribute
 */
export const pointsToString = (points: RadarPoint[]): string => {
  return points.map(p => `${p.x},${p.y}`).join(' ')
}

/**
 * Calculate the optimal text anchor based on angle position
 * @param angle - angle in radians
 * @returns 'start' | 'middle' | 'end'
 */
export const getTextAnchor = (angle: number): 'start' | 'middle' | 'end' => {
  const degrees = (angle * 180) / Math.PI
  const normalizedDegrees = ((degrees % 360) + 360) % 360

  if (normalizedDegrees > 60 && normalizedDegrees < 120) {
    return 'middle'
  }
  if (normalizedDegrees > 240 && normalizedDegrees < 300) {
    return 'middle'
  }
  if (normalizedDegrees >= 120 && normalizedDegrees <= 240) {
    return 'end'
  }
  return 'start'
}

/**
 * Calculate vertical alignment adjustment for labels
 * @param angle - angle in radians
 * @returns dy value for SVG text element
 */
export const getVerticalAnchor = (angle: number): string => {
  const degrees = (angle * 180) / Math.PI
  const normalizedDegrees = ((degrees % 360) + 360) % 360

  if (normalizedDegrees > 45 && normalizedDegrees < 135) {
    return '0.35em' // top area
  }
  if (normalizedDegrees > 225 && normalizedDegrees < 315) {
    return '0.35em' // bottom area
  }
  return '0.35em'
}
