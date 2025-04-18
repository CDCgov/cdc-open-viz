/**
 * Gets the width of the specified text using a given font.
 * @param text The text to measure.
 * @param font The CSS font declaration to use, defaults to the body's font if not provided.
 * @returns The width of the text in pixels, or undefined if the context could not be obtained.
 */
export const getTextWidth = (text: string, font?: string): number | undefined => {
  // Create a canvas element
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  if (!context) {
    console.error('2D context not found')
    return
  }

  context.font = font || getComputedStyle(document.body).font
  return Math.ceil(context.measureText(text).width)
}
