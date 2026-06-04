export type BrushExtent = { x0: number; x1: number } | null | undefined

export type BrushInteractionTarget = 'left-handle' | 'right-handle' | 'selection' | 'outside'

export const classifyBrushInteraction = (
  x: number,
  extent: BrushExtent,
  handleHitWidth: number
): BrushInteractionTarget => {
  if (!extent || !isFinite(extent.x0) || !isFinite(extent.x1) || extent.x0 === -1 || extent.x1 === -1) {
    return 'outside'
  }

  const selectionStart = Math.min(extent.x0, extent.x1)
  const selectionEnd = Math.max(extent.x0, extent.x1)

  if (Math.abs(x - selectionStart) <= handleHitWidth) return 'left-handle'
  if (Math.abs(x - selectionEnd) <= handleHitWidth) return 'right-handle'
  if (x >= selectionStart && x <= selectionEnd) return 'selection'

  return 'outside'
}
