import { publishAnalyticsEvent } from '@cdc/core/helpers/metrics/helpers'
import { getVizTitle, getVizSubType } from '@cdc/core/helpers/metrics/utils'
import { hasTrackedHover, markHoverTracked } from '../utils/analyticsTracking'

type UseChartHoverAnalyticsParams = {
  config: any
  interactionLabel?: string
}

/**
 * Hook to track analytics when user enters the chart area
 * Fires once per visualization, persists across component remounts
 */
export const useChartHoverAnalytics = ({ config, interactionLabel = '' }: UseChartHoverAnalyticsParams) => {
  const handleChartMouseEnter = () => {
    // Only track if we have an interaction label
    if (!interactionLabel) return

    // Use unique ID to track per visualization
    const vizId = String(config.runtime.uniqueId)
    if (hasTrackedHover(vizId)) return

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
    markHoverTracked(vizId)
  }

  const handleChartMouseLeave = () => {
    // No-op: We no longer reset tracking on mouse leave
  }

  return {
    handleChartMouseEnter,
    handleChartMouseLeave
  }
}
