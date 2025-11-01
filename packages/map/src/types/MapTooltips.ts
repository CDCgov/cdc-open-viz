/**
 * Map tooltip configuration
 * Controls how tooltips appear and behave when interacting with the map
 */
export type MapTooltips = {
  /** How tooltips are triggered */
  appearanceType: 'hover' | 'click'
  /** Label text for links in tooltips */
  linkLabel: string
  /** Opacity level for tooltip background (0-1) */
  opacity: number
}
