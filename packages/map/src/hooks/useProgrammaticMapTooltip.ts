import { useRef, useImperativeHandle, ForwardedRef } from 'react'

/**
 * Interface for geography element refs exposed to parent components
 * Follows chart package pattern for consistency
 */
export interface MapRefInterface {
  /**
   * Programmatically trigger tooltip at a specific geography (data-centric approach)
   * @param geoId - Geography identifier (FIPS code, name, ISO code, etc.)
   * @param yCoordinate - Y coordinate for tooltip positioning (from source event)
   */
  triggerTooltipAtGeo: (geoId: string, yCoordinate: number) => void

  /**
   * Hide all tooltips for this map tile
   */
  hideTooltip: () => void
}

interface UseProgrammaticMapTooltipProps {
  mapRef: ForwardedRef<MapRefInterface>
  tooltipId: string
}

/**
 * Custom hook to provide programmatic tooltip control for small multiples synchronization
 *
 * This hook enables tooltips to be triggered programmatically on geography elements
 * using synthetic mouse events. It's designed to work with react-tooltip v5.
 *
 */
export const useProgrammaticMapTooltip = ({ mapRef, tooltipId }: UseProgrammaticMapTooltipProps) => {
  // Store refs to all geography elements in this map
  const geoElementRefs = useRef<Record<string, SVGElement>>({})

  /**
   * Register a geography element so it can be programmatically controlled
   * Call this in the ref callback of each geography element
   */
  const registerGeoElement = (geoId: string, element: SVGElement | null) => {
    if (element) {
      geoElementRefs.current[geoId] = element
    } else {
      delete geoElementRefs.current[geoId]
    }
  }

  const unregisterGeoElement = (geoId: string) => {
    delete geoElementRefs.current[geoId]
  }

  // Expose programmatic tooltip methods via ref
  useImperativeHandle(
    mapRef,
    () => ({
      /**
       * Trigger tooltip at specific geography
       */
      triggerTooltipAtGeo: (geoId: string, yCoordinate: number) => {
        const geoElement = geoElementRefs.current[geoId]
        if (!geoElement) {
          return
        }

        // Get the horizontal center of the geography element
        const rect = geoElement.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2

        // Create synthetic mouseenter event with coordinates
        const syntheticEvent = new MouseEvent('mouseenter', {
          bubbles: true,
          cancelable: true,
          clientX: centerX,
          clientY: yCoordinate,
          screenX: window.screenX + centerX,
          screenY: window.screenY + yCoordinate,
          view: window
        })

        Object.defineProperty(syntheticEvent, 'currentTarget', {
          value: geoElement,
          writable: false
        })

        Object.defineProperty(syntheticEvent, 'target', {
          value: geoElement,
          writable: false
        })

        geoElement.dispatchEvent(syntheticEvent)
      },

      hideTooltip: () => {
        Object.values(geoElementRefs.current).forEach(element => {
          const syntheticEvent = new MouseEvent('mouseleave', {
            bubbles: true,
            cancelable: true,
            view: window
          })

          element.dispatchEvent(syntheticEvent)
        })
      }
    }),
    [tooltipId]
  )

  return {
    registerGeoElement,
    unregisterGeoElement,
    geoElementRefs
  }
}
