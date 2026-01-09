/**
 * Shared analytics tracking to ensure events only fire once per visualization
 * Tracks at module level to persist across component remounts
 */
const trackedHoverEvents = new Set<string>()

/**
 * Check if a hover event has been tracked for a given visualization ID
 */
export const hasTrackedHover = (vizId: string): boolean => {
  return trackedHoverEvents.has(vizId)
}

/**
 * Mark a visualization as having had its hover event tracked
 */
export const markHoverTracked = (vizId: string): void => {
  trackedHoverEvents.add(vizId)
}
