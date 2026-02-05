import React, { useEffect, useRef, useState } from 'react'
import { useCoveContainer } from '../shared/useCoveContainer'
import { getConfigUrlParam } from '@cdc/core/helpers/embed'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'
import { getVizSubType, getVizTitle } from '@cdc/core/helpers/metrics/utils'
import cdcLogo from '@cdc/core/assets/logo2.svg'

/**
 * EmbedRenderer
 *
 * Creates a COVE container div with proper data attributes.
 * The production main.js (loaded in HTML) will find this div and render the visualization.
 * Also sends resize events to parent window for iframe height adjustment.
 * Fires embed_loaded analytics event when visualization loads.
 */
const EmbedRenderer: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null) // Wrapper for height measurement (includes logo)
  const coveContainerRef = useRef<HTMLDivElement>(null) // Container for COVE visualization
  const [iframeId, setIframeId] = useState<string | null>(null)
  const iframeIdRef = useRef<string | null>(null)
  const lastHeightRef = useRef<number>(0) // Shared across all resize paths
  const [showLogo, setShowLogo] = useState(false) // Hide logo until chart loads

  // Analytics tracking refs - handle race condition between cove_loaded and setId message
  const embedPageUrlRef = useRef<string | null>(null) // URL of the page embedding this visualization
  const vizConfigRef = useRef<any>(null) // Config from cove_loaded event
  const embedLoadedFiredRef = useRef<boolean>(false) // Ensure we only fire embed_loaded once

  const configUrl = getConfigUrlParam()

  // Setup COVE container using shared hook
  useCoveContainer(coveContainerRef, configUrl)

  /**
   * Fire embed_loaded analytics event when we have both the embed page URL and viz config.
   * Handles race condition - either cove_loaded or setId message can arrive first.
   * Only fires once, even if dashboard has multiple child visualizations firing cove_loaded.
   */
  const tryFireEmbedLoadedEvent = () => {
    // Only fire once
    if (embedLoadedFiredRef.current) return

    // Need both pieces of info
    if (!embedPageUrlRef.current || !vizConfigRef.current) return

    const config = vizConfigRef.current
    publishAnalyticsEvent({
      vizType: config?.type || 'unknown',
      vizSubType: getVizSubType(config),
      vizTitle: getVizTitle(config),
      eventType: 'embed_loaded' as const,
      eventAction: 'load' as const,
      eventLabel: configUrl || undefined,
      specifics: `embedPageUrl: ${embedPageUrlRef.current}`
    })

    embedLoadedFiredRef.current = true
  }

  // Measure height and send resize message (with duplicate detection)
  const measureAndSend = (id: string) => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const height = Math.ceil(wrapper.getBoundingClientRect().height) + 20

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

  // Listen for cove_loaded - send resize if we have an ID, show logo, and fire analytics
  useEffect(() => {
    const handleCoveLoaded = (event: Event) => {
      setShowLogo(true)
      if (iframeIdRef.current) {
        measureAndSend(iframeIdRef.current)
      }

      // Store config from event for analytics (only on first cove_loaded)
      if (!vizConfigRef.current) {
        vizConfigRef.current = (event as CustomEvent).detail?.config || null
        tryFireEmbedLoadedEvent()
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

        // Store embed page URL for analytics (from parent page)
        if (event.data.embedPageUrl && !embedPageUrlRef.current) {
          embedPageUrlRef.current = event.data.embedPageUrl
          tryFireEmbedLoadedEvent()
        }
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

    if (wrapperRef.current) {
      resizeObserver.observe(wrapperRef.current)
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

  // Render the container div that COVE will populate, plus footer with disclaimer and CDC logo
  return (
    <div ref={wrapperRef}>
      <div ref={coveContainerRef} />
      {showLogo && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '1rem'
          }}
        >
          <p style={{ fontSize: '16px', marginBottom: '0' }}>
            Content provided and maintained by the{' '}
            <a href='https://www.cdc.gov/'>US Centers for Disease Control and Prevention</a> (CDC). Please see our
            system{' '}
            <a href='https://tools.cdc.gov/medialibrary/index.aspx#/usageguidelines/info'>
              usage guidelines and disclaimer
            </a>
            .
          </p>
          <a href='https://www.cdc.gov' target='_blank' rel='noopener noreferrer'>
            <img src={cdcLogo} alt='CDC Logo' style={{ height: '40px', width: 'auto', flexShrink: 0 }} />
          </a>
        </div>
      )}
    </div>
  )
}

export default EmbedRenderer
