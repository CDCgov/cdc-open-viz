// Calculate Waffle Chart Node Positions
export default function calculateNodePosition (shape, axis, index, width, spacer) {
  let mod = axis === 'x' ? 9 - (index % 10) : axis === 'y' ? Math.floor(index / 10) : null
  return shape === 'circle' ? (mod * (width + spacer)) + (width / 2) : mod * (width + spacer)
}
