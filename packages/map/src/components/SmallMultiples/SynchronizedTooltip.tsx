import React, { useState, useEffect, useRef, RefObject } from 'react'

interface SynchronizedTooltipProps {
  tileTooltipId: string
  opacity: number
  containerRef: RefObject<HTMLElement>
}

/**
 * Custom tooltip component for small multiples that responds to synthetic events
 * This bypasses react-tooltip's lazy initialization issues
 */
const SynchronizedTooltip: React.FC<SynchronizedTooltipProps> = ({ tileTooltipId, opacity, containerRef }) => {
  const [tooltipState, setTooltipState] = useState<{
    visible: boolean
    html: string
    x: number
    y: number
  }>({
    visible: false,
    html: '',
    x: 0,
    y: 0
  })

  const tooltipRef = useRef<HTMLDivElement>(null)
  const currentGeoRef = useRef<string | null>(null)

  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const tooltipId = target.getAttribute('data-tooltip-id')

      if (tooltipId === `tooltip__${tileTooltipId}`) {
        const tooltipHtml = target.getAttribute('data-tooltip-html')
        const geoId = target.getAttribute('data-geo-id') || ''

        // Don't show tooltip if there's no content
        if (!tooltipHtml || tooltipHtml === 'undefined' || tooltipHtml.trim() === '') {
          setTooltipState(prev => ({ ...prev, visible: false }))
          currentGeoRef.current = null
          return
        }

        // Only update if we're entering a different geography or showing for first time
        if (geoId !== currentGeoRef.current) {
          currentGeoRef.current = geoId

          // Position tooltip relative to the geography element's bounding box
          const rect = target.getBoundingClientRect()
          const x = rect.left + rect.width / 2
          const y = rect.top + rect.height / 2

          setTooltipState({
            visible: true,
            html: tooltipHtml,
            x,
            y
          })
        }
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const tooltipId = target.getAttribute('data-tooltip-id')

      if (tooltipId === `tooltip__${tileTooltipId}`) {
        setTooltipState(prev => ({ ...prev, visible: false }))
        currentGeoRef.current = null
      }
    }

    const container = containerRef.current
    if (!container) return

    container.addEventListener('mouseenter', handleMouseEnter, true)
    container.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter, true)
      container.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [tileTooltipId, containerRef])

  if (!tooltipState.visible) return null

  return (
    <div
      ref={tooltipRef}
      className='tooltip tooltip-test'
      style={{
        position: 'fixed',
        left: `${tooltipState.x + 10}px`,
        top: `${tooltipState.y + 10}px`,
        background: `rgba(255,255,255, ${opacity / 100})`,
        pointerEvents: 'none',
        zIndex: 9999
      }}
      dangerouslySetInnerHTML={{ __html: tooltipState.html }}
    />
  )
}

export default SynchronizedTooltip
