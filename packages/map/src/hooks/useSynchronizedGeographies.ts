import { useContext } from 'react'
import ConfigContext from '../context'
import { useProgrammaticMapTooltip } from './useProgrammaticMapTooltip'

/**
 * Hook to enable synchronized tooltips for map geographies in small multiples
 *
 * This abstracts all the small multiples synchronization logic so it can be
 * easily added to any map type (US, Region, SingleState, World, etc.)
 *
 */
export const useSynchronizedGeographies = () => {
  const { handleSmallMultipleHover, mapRefForSync, tooltipId } = useContext(ConfigContext)

  // Set up programmatic tooltip control for this map
  const { registerGeoElement, unregisterGeoElement } = useProgrammaticMapTooltip({
    mapRef: mapRefForSync || { current: null },
    tooltipId
  })

  /**
   * Returns props to spread onto geography elements for synchronized tooltip support
   * Includes ref for programmatic control and data-geo-id for tooltip tracking
   *
   * @param geoKey - Geography identifier (FIPS code, state abbreviation, etc.)
   */
  const getSyncProps = (geoKey: string) => ({
    ref: (el: SVGElement | null) => {
      if (el) {
        registerGeoElement(geoKey, el)
      } else {
        unregisterGeoElement(geoKey)
      }
    },
    'data-geo-id': geoKey
  })

  /**
   * Event handler helpers for synchronized tooltips
   * Call these inside your existing event handlers
   */
  const syncHandlers = {
    onMouseEnter: (geoKey: string, clientY: number) => {
      handleSmallMultipleHover?.(geoKey, clientY)
    },

    onMouseLeave: () => {
      handleSmallMultipleHover?.(null)
    }
  }

  return {
    getSyncProps,
    syncHandlers
  }
}
