import { publish } from "../events"
import packageJson from '../../package.json'

export type COVE_VISUALIZATION_TYPES = 'map' | 'chart' | 'data_table' | 'markup-include' | 'waffle-chart' | 'dashboard' | 'filtered-text' | 'data-bite' | 'unknown'
export type ANALYTICS_EVENT_ACTIONS = 'click' | 'toggle' | 'none' | 'keydown' | 'load' | 'unknown'
export type ANALYTICS_EVENT_LABEL = string
export type ANALYTICS_EVENT_TYPES =
    'visualization_loaded'
    | 'legend_item_toggled'
    | 'legend_reset'
    | 'image_downloaded'
    | 'csv_downloaded'

/**
 * Retrieves the version of the package from its package.json file.
 * @returns {string} The version of the package.
 */
export const getPackageVersion = () => {
    try {
        return packageJson.version
    } catch (e) {
        console.error('Error loading package version:', e)
        return 'unknown'
    }
}

/**
 * Formats the event label for analytics tracking.
 * @param config 
 * @returns {string} The formatted event label.
 */
export const formatEventLabel = (config) => {
    let dataFileName = config?.dataFileName || 'unknown'
    let title = config?.general?.title || 'unknown'

    if (config.type === 'data-bite') {
        title = config?.title || 'unknown'
    }

    if (config.type === 'markup-include') {
        title = config?.contentEditor?.title || 'unknown'
        dataFileName = config?.contentEditor?.srcUrl || 'unknown'
    }

    if (config.type === 'waffle-chart') {
        title = config?.title || 'unknown'
        dataFileName = config?.dataFileName || 'unknown'
    }

    return `${dataFileName}|${title}`
}

/**
 * Publishes a load event for a specific visualization type.
 * @param eventType - The type of event being tracked.
 * @param action - The action taken by the user.
 * @param visualizationType - The type of visualization being interacted with.
 * @param additionalDetails - Optional additional details to include in the event.
 */
export const publishAnalyticsEvent = (
    eventType: ANALYTICS_EVENT_TYPES,
    eventAction: ANALYTICS_EVENT_ACTIONS = 'unknown',
    eventLabel: ANALYTICS_EVENT_LABEL = 'unknown',
    visualizationType?: COVE_VISUALIZATION_TYPES,
    additionalDetails?: Object
) => {

    // Publish the analytics event
    return publish('cove:analytics', {
        eventType,
        eventAction,
        eventLabel,
        component: visualizationType || 'unknown',
        version: getPackageVersion() || 'unknown',
        ...additionalDetails || {}
    })
}

// _satellite.track('interaction', {
//     interactionType: "o",
//     interactionValue: "cove|csv_downloaded|clicked",
//     label: viz_dataFileName|viz_title,
// })
