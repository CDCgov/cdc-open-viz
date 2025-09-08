import { publish } from '@cdc/core/helpers/events'
import { MapConfig } from '../types/MapConfig'
import MapActions from '../store/map.actions'
import { Dispatch } from 'react'

/**
 * Publishes 'cove_loaded' only after the map SVG is rendered in the DOM.
 * Checks immediately, then uses a MutationObserver as a fallback for async rendering.
 * Update the mapSvg ref if the map container changes.
 */
export const observeMapSvgLoaded = (
  mapSvgRef: React.RefObject<HTMLElement>,
  config: MapConfig,
  coveLoadedHasRan: boolean,
  dispatch: Dispatch<MapActions>
): (() => void) => {
  // Immediate check in case SVG is already present
  const svgEl = mapSvgRef.current?.querySelector('svg')
  if (svgEl && svgEl.childNodes.length > 0) {
    publish('cove_loaded', { config })
    dispatch({ type: 'SET_COVE_LOADED_HAS_RAN', payload: true })
    return () => {}
  }

  // Fallback to observer for async SVG rendering
  const observer = new MutationObserver(() => {
    const svgEl = mapSvgRef.current?.querySelector('svg')
    if (svgEl && svgEl.childNodes.length > 0) {
      publish('cove_loaded', { config })
      dispatch({ type: 'SET_COVE_LOADED_HAS_RAN', payload: true })
      observer.disconnect()
    }
  })

  if (mapSvgRef.current) {
    observer.observe(mapSvgRef.current, { childList: true, subtree: true })
  }

  return () => observer.disconnect()
}
