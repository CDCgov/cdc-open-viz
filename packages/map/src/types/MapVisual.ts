import { EditorPanel_Visual } from '@cdc/core/types/EditorPanel_Visual'
import { E } from 'vitest/dist/chunks/environment.d.cL3nLXbE'

/**
 * Map-specific visual configuration.
 * Extends EditorPanel_Visual with map-specific visual properties for bubble maps,
 * city markers, and geographic styling.
 */
export interface MapVisual extends EditorPanel_Visual {
  /** Minimum Circle Size when the map has a type of bubble */
  minBubbleSize: number
  /** Maximum Circle Size when the map has a type of bubble */
  maxBubbleSize: number
  /** Bubble Maps > adds a white circle around the bubble to show contrast on other bubbles */
  extraBubbleBorder: boolean
  /** Visual indicator of cities on state maps */
  cityStyle: 'circle' | 'pin' | 'star' | 'diamond' | 'triangle' | 'square'
  /** Optional visual indicator of label on the Legend */
  cityStyleLabel: string
  /** Controls the size of the city style option (circle or pin) */
  geoCodeCircleSize: number
  /** Shows circles on maps when the data is provided even if it's a zero value */
  showBubbleZeros: boolean
  /** Shows Circle, Square, Triangle, Rhombus/Diamond, Star, Map Pin on maps when the additionalCityStyles is added */
  additionalCityStyles: [] | [{ label: string; column: string; value: string; shape: string }]
}
