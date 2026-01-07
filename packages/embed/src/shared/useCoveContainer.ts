import { useEffect, RefObject } from 'react'
import { isValidConfigUrl } from './urlValidation'

/**
 * Shared hook for setting up a COVE container div
 * Used by both embed page and generator for consistent COVE rendering
 */
export function useCoveContainer(containerRef: RefObject<HTMLDivElement>, configUrl: string | null) {
  useEffect(() => {
    if (!containerRef.current || !configUrl) return

    if (!isValidConfigUrl(configUrl)) {
      console.error('Invalid configUrl: must be a relative URL', configUrl)
      return
    }

    // Set data attributes that COVE wrapper expects
    containerRef.current.setAttribute('class', 'wcms-viz-container')
    containerRef.current.setAttribute('data-language', 'en')
    containerRef.current.setAttribute('data-host', 'www.cdc.gov')
    containerRef.current.setAttribute('data-config-url', configUrl)
    containerRef.current.setAttribute('data-sid', '')

    // Trigger COVE to load the visualization
    // Check if CDC_Load_Viz function exists (from main.js)
    // If main.js hasn't loaded yet, it will auto-detect on DOMContentLoaded
    if (typeof (window as any).CDC_Load_Viz === 'function') {
      ;(window as any).CDC_Load_Viz()
    }
  }, [configUrl])
}
