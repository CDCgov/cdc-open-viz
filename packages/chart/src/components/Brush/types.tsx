export type BrushRef = {
  reset: () => void
  state: {
    start: { x: number; y: number }
    end: { x: number; y: number }
    isBrushing: boolean
  }
}
