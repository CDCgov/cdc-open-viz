import React, { useEffect, useRef, useState } from 'react'
import { useCoveContainer } from '../shared/useCoveContainer'
import { getConfigUrlParam } from '../shared/urlValidation'

/**
 * EmbedRenderer - Phase 1 & 2
 *
 * Creates a COVE container div with proper data attributes.
 * The production main.js (loaded in HTML) will find this div and render the visualization.
 * Also sends resize events to parent window for iframe height adjustment.
 */
const EmbedRenderer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [iframeId, setIframeId] = useState<string | null>(null)
  const iframeIdRef = useRef<string | null>(null)
  const lastHeightRef = useRef<number>(0) // Shared across all resize paths

  const configUrl = getConfigUrlParam()

  // Setup COVE container using shared hook
  useCoveContainer(containerRef, configUrl)

  // Measure height and send resize message (with duplicate detection)
  const measureAndSend = (id: string) => {
    const container = containerRef.current
    if (!container) return

    const height = Math.ceil(container.getBoundingClientRect().height) + 15

    if (height < 100) return

    // Check against shared lastHeight - prevents duplicates from any path
    if (Math.abs(height - lastHeightRef.current) <= 1) {
      return
    }

    lastHeightRef.current = height

    const message = {
      type: 'cove:resize',
      height: height,
      id: id
    }

    window.parent.postMessage(message, '*')
  }

  // Sync iframeIdRef with state
  useEffect(() => {
    iframeIdRef.current = iframeId
  }, [iframeId])

  // Listen for cove_loaded - send resize if we have an ID
  useEffect(() => {
    const handleCoveLoaded = () => {
      if (iframeIdRef.current) {
        measureAndSend(iframeIdRef.current)
      }
    }

    document.addEventListener('cove_loaded', handleCoveLoaded)

    return () => {
      document.removeEventListener('cove_loaded', handleCoveLoaded)
    }
  }, [])

  // Listen for ID assignment from parent embed-helper
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'cove:setId') {
        const newId = event.data.id
        setIframeId(newId)
      }
    }

    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  // Phase 2: Send resize messages via ResizeObserver
  // Only runs once we have an iframe ID
  useEffect(() => {
    if (!iframeId) {
      return
    }

    let resizeTimeout: number

    // Watch for content changes
    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(resizeTimeout)
      resizeTimeout = window.setTimeout(() => measureAndSend(iframeId), 10)
    })

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    // Send initial resize (in case content already rendered before ID arrived)
    measureAndSend(iframeId)

    return () => {
      resizeObserver.disconnect()
      clearTimeout(resizeTimeout)
    }
  }, [iframeId])

  // Show error if no valid config URL provided
  if (!configUrl) {
    return (
      <div
        style={{
          padding: '2rem',
          textAlign: 'center',
          color: '#d32f2f'
        }}
      >
        <h2>Invalid Configuration</h2>
        <p>
          The <code>configUrl</code> parameter is missing or invalid.
        </p>
        <p>
          <strong>Required:</strong> A relative URL must be provided.
        </p>
        <p>
          <strong>Example:</strong> <code>?configUrl=/path/to/config.json</code>
        </p>
      </div>
    )
  }

  // Render the container div that COVE will populate
  return <div ref={containerRef} />
}

export default EmbedRenderer
