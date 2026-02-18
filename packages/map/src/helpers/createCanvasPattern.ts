/**
 * Creates Canvas-based patterns for map visualizations
 * Mimics the appearance of SVG patterns used in US State maps
 */

import { patternSizes } from '../components/UsaMap/helpers/patternSizes'

export type PatternSize = 'small' | 'medium' | 'large'
export type PatternType = 'circles' | 'waves' | 'lines'

/**
 * Creates a circle pattern for Canvas rendering
 * Equivalent to @visx/pattern PatternCircles
 */
export function createCirclePattern(color: string, size: PatternSize): CanvasPattern | null {
  const dimension = patternSizes[size]

  // Create offscreen canvas for pattern tile
  const canvas = document.createElement('canvas')
  canvas.width = dimension
  canvas.height = dimension
  const ctx = canvas.getContext('2d')

  if (!ctx) return null

  // Draw circle in center
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(dimension / 2, dimension / 2, 0.5, 0, Math.PI * 2)
  ctx.fill()

  return ctx.createPattern(canvas, 'repeat')
}

/**
 * Creates a wave pattern for Canvas rendering
 * Equivalent to @visx/pattern PatternWaves
 */
export function createWavePattern(color: string, size: PatternSize): CanvasPattern | null {
  const dimension = patternSizes[size]

  const canvas = document.createElement('canvas')
  canvas.width = dimension
  canvas.height = dimension
  const ctx = canvas.getContext('2d')

  if (!ctx) return null

  // Draw wave pattern
  ctx.strokeStyle = color
  ctx.lineWidth = 0.25
  ctx.beginPath()

  // Create sine wave across the tile
  const waveHeight = dimension / 4
  const waveLength = dimension

  for (let x = 0; x <= dimension; x++) {
    const y = dimension / 2 + Math.sin((x / waveLength) * Math.PI * 2) * waveHeight
    if (x === 0) {
      ctx.moveTo(x, y)
    } else {
      ctx.lineTo(x, y)
    }
  }

  ctx.stroke()

  return ctx.createPattern(canvas, 'repeat')
}

/**
 * Creates a diagonal line pattern for Canvas rendering
 * Equivalent to @visx/pattern PatternLines with diagonalRightToLeft orientation
 */
export function createLinePattern(color: string, size: PatternSize, strokeWidth: number = 0.75): CanvasPattern | null {
  const dimension = patternSizes[size]

  const canvas = document.createElement('canvas')
  canvas.width = dimension
  canvas.height = dimension
  const ctx = canvas.getContext('2d')

  if (!ctx) return null

  // Draw diagonal lines from top-right to bottom-left
  ctx.strokeStyle = color
  ctx.lineWidth = strokeWidth
  ctx.beginPath()

  // Draw multiple diagonal lines to ensure pattern continuity
  // Line 1: from top-right corner
  ctx.moveTo(dimension, 0)
  ctx.lineTo(0, dimension)

  // Line 2: from middle-right to ensure tiling
  ctx.moveTo(dimension, -dimension)
  ctx.lineTo(-dimension, dimension)

  // Line 3: from middle to ensure tiling
  ctx.moveTo(dimension * 2, 0)
  ctx.lineTo(0, dimension * 2)

  ctx.stroke()

  return ctx.createPattern(canvas, 'repeat')
}

/**
 * Creates a Canvas pattern based on pattern type
 */
export function createCanvasPattern(
  patternType: PatternType,
  color: string,
  size: PatternSize,
  strokeWidth?: number
): CanvasPattern | null {
  switch (patternType) {
    case 'circles':
      return createCirclePattern(color, size)
    case 'waves':
      return createWavePattern(color, size)
    case 'lines':
      return createLinePattern(color, size, strokeWidth)
    default:
      return null
  }
}
