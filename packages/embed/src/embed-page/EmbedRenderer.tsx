import React, { useEffect, useRef } from 'react'

/**
 * EmbedRenderer - Phase 1
 *
 * Creates a COVE container div with proper data attributes.
 * The production main.js (loaded in HTML) will find this div and render the visualization.
 */
const EmbedRenderer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const params = new URLSearchParams(window.location.search)
  const configUrl = params.get('configUrl')

  useEffect(() => {
    if (!containerRef.current) return
    if (!configUrl) return

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

  // Show error if no config URL provided
  if (!configUrl) {
    return (
      <div
        style={{
          padding: '2rem',
          textAlign: 'center',
          color: '#d32f2f'
        }}
      >
        <h2>Missing Configuration</h2>
        <p>
          No <code>configUrl</code> parameter provided.
        </p>
        <p>
          <strong>Usage:</strong> <code>?configUrl=/path/to/config.json</code>
        </p>
      </div>
    )
  }

  // Render the container div that COVE will populate
  return <div ref={containerRef} style={{ minHeight: '100vh' }} />
}

export default EmbedRenderer
