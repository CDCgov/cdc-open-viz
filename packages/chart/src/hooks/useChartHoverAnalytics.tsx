import { useRef } from 'react'
import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'
import { getVizTitle, getVizSubType } from '@cdc/core/helpers/metrics/utils'

type UseChartHoverAnalyticsParams = {
  config: any
  interactionLabel?: string
}

/**
 * Hook to track analytics when user enters the chart area
 * Fires once per chart entry, not on every hover interaction
 */
export const useChartHoverAnalytics = ({ config, interactionLabel = '' }: UseChartHoverAnalyticsParams) => {
  const hasTrackedRef = useRef(false)

  const handleChartMouseEnter = () => {
    // Only track if we have an interaction label and haven't tracked yet
    if (!interactionLabel || hasTrackedRef.current) return

    // Publish the analytics event
    publishAnalyticsEvent({
      vizType: config?.type,
      vizSubType: getVizSubType(config),
      eventType: 'chart_hover',
      eventAction: 'hover',
      eventLabel: interactionLabel,
      vizTitle: getVizTitle(config)
    })

    // Mark as tracked so we don't fire again
    hasTrackedRef.current = true
  }

  const handleChartMouseLeave = () => {
    // Reset tracking when mouse leaves so next entry will track
    hasTrackedRef.current = false
  }

  return {
    handleChartMouseEnter,
    handleChartMouseLeave
  }
}
