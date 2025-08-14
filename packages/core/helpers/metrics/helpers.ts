import { publish } from '../events'
import packageJson from '../../package.json'
import {
  COVE_VISUALIZATION_TYPES,
  ANALYTICS_EVENT_ACTIONS,
  ANALYTICS_EVENT_TYPES
} from './types'
import { GetLabelForEvent } from './getLabelForEvent'

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
 * Publishes an analytics event with the specified parameters.
 * @param {ANALYTICS_EVENT_TYPES} eventType - The type of the event
 * @param {ANALYTICS_EVENT_ACTIONS} [eventAction='unknown'] - The action associated with the event
 * @param {ANALYTICS_EVENT_LABEL} [eventLabel='unknown'] - The label for the event
 * @param {COVE_VISUALIZATION_TYPES} [visualizationType] - The type of visualization associated with the event
 * @param {Object} [additionalDetails] - Additional details to include in the event
 * @returns {void}
 * @description This function is used to publish analytics events for various user interactions and system states.
 */
export const publishAnalyticsEvent = <T extends ANALYTICS_EVENT_TYPES>(
  eventType: T,
  eventAction: ANALYTICS_EVENT_ACTIONS = 'unknown',
  eventLabel: GetLabelForEvent<T>,
  visualizationType?: COVE_VISUALIZATION_TYPES,
  additionalDetails?: Object
) => {
  // Added check if we ever need to disable analytics
  const ANALYTICS_POWERED_ON = true
  if (!ANALYTICS_POWERED_ON) return

  return publish('cove:analytics', {
    eventType,
    eventAction,
    eventLabel,
    component: visualizationType || 'unknown',
    version: getPackageVersion() || 'unknown',
    ...(additionalDetails || {})
  })
}
