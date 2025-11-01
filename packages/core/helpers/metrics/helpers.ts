import { publish } from '../events'
import packageJson from '../../package.json'
import {
  COVE_VISUALIZATION_TYPES,
  ANALYTICS_EVENT_ACTIONS,
  ANALYTICS_EVENT_TYPES,
  EventSpecifics
} from './types'

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
 * Format: APP|VIZTYPE_VIZSUBTYPE|VIZ_TITLE|INTERACTION_EVENT_NAME|INTERACTION_TYPE|SPECIFICS
 *
 * @param {Object} params - The parameters for the analytics event
 * @param {string} params.app - The application name (e.g., 'COVE')
 * @param {COVE_VISUALIZATION_TYPES} params.vizType - The visualization type (e.g., 'map', 'chart')
 * @param {string} [params.vizSubType] - The visualization subtype (e.g., 'county', 'state', 'bar', 'line')
 * @param {string} [params.vizTitle] - The title of the visualization
 * @param {ANALYTICS_EVENT_TYPES} params.eventType - The interaction event name
 * @param {ANALYTICS_EVENT_ACTIONS} [params.eventAction='unknown'] - The interaction type (e.g., 'click', 'hover')
 * @param {string} [params.eventLabel] - The event label (typically config URL or interaction label)
 * @param {string} [params.specifics] - Additional specifics about the event (structured as "key: value, key2: value2")
 * @param {string} [params.version] - The version of the package (defaults to package.json version)
 * @returns {void}
 * @description This function is used to publish analytics events for various user interactions and system states.
 */
export const publishAnalyticsEvent = <T extends ANALYTICS_EVENT_TYPES>({
  app = 'cove',
  vizType,
  vizSubType,
  vizTitle,
  eventType,
  eventAction = 'unknown',
  eventLabel,
  specifics,
  version,
  ...additionalDetails
}: {
  app?: string
  vizType: COVE_VISUALIZATION_TYPES
  vizSubType?: string
  vizTitle?: string
  eventType: T
  eventAction?: ANALYTICS_EVENT_ACTIONS
  eventLabel?: string
  specifics?: T extends keyof EventSpecifics ? EventSpecifics[T] : string
  version?: string
  [key: string]: any
}) => {
  // Added check if we ever need to disable analytics
  const ANALYTICS_POWERED_ON = true
  if (!ANALYTICS_POWERED_ON) return

  // Format: APP|VIZTYPE_VIZSUBTYPE|VIZ_TITLE|INTERACTION_EVENT_NAME|INTERACTION_TYPE|SPECIFICS
  const vizTypeSubType = vizSubType ? `${vizType}_${vizSubType}` : vizType
  const formattedEvent = `${app}|${vizTypeSubType}|${vizTitle || 'unknown'}|${eventType}|${eventAction}|${specifics || 'no details'}`
  return publish('cove:analytics', {
    formattedEvent,
    eventLabel
  })
}
