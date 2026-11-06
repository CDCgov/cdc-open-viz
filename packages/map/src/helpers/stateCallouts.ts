// Offsets use map SVG units. Label widths are approximate at font size 13;
// keeping them here avoids measuring text or changing the existing labels.
export const stateCallouts: Record<string, { offset: [number, number]; labelWidth: number }> = {
  'US-VT': { offset: [53, -7], labelWidth: 17 },
  'US-NH': { offset: [38, 7], labelWidth: 19 },
  'US-MA': { offset: [34, -1], labelWidth: 21 },
  'US-RI': { offset: [29, 7], labelWidth: 13 },
  'US-CT': { offset: [43, 20], labelWidth: 17 },
  'US-NJ': { offset: [26, 7], labelWidth: 16 },
  'US-DE': { offset: [33, 0], labelWidth: 18 },
  'US-MD': { offset: [51, 16], labelWidth: 22 },
  'US-DC': { offset: [58, 42], labelWidth: 19 }
}

export const getStateCalloutPosition = (uid: string, centroid: [number, number] | null, fontSize = 13) => {
  const callout = stateCallouts[uid]
  if (!callout || !centroid?.every(Number.isFinite)) return null
  const lineEnd: [number, number] = [centroid[0] + callout.offset[0], centroid[1] + callout.offset[1]]
  // Text stays start-aligned at x=4. Scale only the estimated width and the
  // uppercase baseline correction so bubbles follow desktop/mobile label sizes.
  const labelWidth = (callout.labelWidth * fontSize) / 13
  const bubbleCenter: [number, number] = [lineEnd[0] + 4 + labelWidth / 2, lineEnd[1] - fontSize * 0.1]
  return { lineEnd, bubbleCenter }
}
