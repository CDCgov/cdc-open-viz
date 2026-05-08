import { describe, expect, it } from 'vitest'
import { classifyBrushInteraction } from '../brushInteraction'

describe('classifyBrushInteraction', () => {
  const extent = { x0: 100, x1: 300 }
  const handleHitWidth = 24

  it('allows interactions inside the selection', () => {
    expect(classifyBrushInteraction(200, extent, handleHitWidth)).toBe('selection')
  })

  it('allows interactions within the left handle hit area', () => {
    expect(classifyBrushInteraction(82, extent, handleHitWidth)).toBe('left-handle')
    expect(classifyBrushInteraction(124, extent, handleHitWidth)).toBe('left-handle')
  })

  it('allows interactions within the right handle hit area', () => {
    expect(classifyBrushInteraction(276, extent, handleHitWidth)).toBe('right-handle')
    expect(classifyBrushInteraction(318, extent, handleHitWidth)).toBe('right-handle')
  })

  it('blocks interactions outside the selection and handle hit areas', () => {
    expect(classifyBrushInteraction(50, extent, handleHitWidth)).toBe('outside')
    expect(classifyBrushInteraction(350, extent, handleHitWidth)).toBe('outside')
  })

  it('handles reversed extents', () => {
    expect(classifyBrushInteraction(200, { x0: 300, x1: 100 }, handleHitWidth)).toBe('selection')
    expect(classifyBrushInteraction(82, { x0: 300, x1: 100 }, handleHitWidth)).toBe('left-handle')
    expect(classifyBrushInteraction(318, { x0: 300, x1: 100 }, handleHitWidth)).toBe('right-handle')
  })

  it('blocks interactions for uninitialized or invalid extents', () => {
    expect(classifyBrushInteraction(100, null, handleHitWidth)).toBe('outside')
    expect(classifyBrushInteraction(100, { x0: -1, x1: -1 }, handleHitWidth)).toBe('outside')
    expect(classifyBrushInteraction(100, { x0: Number.NaN, x1: 200 }, handleHitWidth)).toBe('outside')
  })
})
