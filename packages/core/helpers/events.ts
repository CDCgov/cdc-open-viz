/**
 * Subscribes a listener function to a custom event on the document.
 * @param eventName - The name of the event to listen for.
 * @param listener - The callback function to invoke when the event is triggered.
 */
function subscribe(eventName: string, listener: EventListenerOrEventListenerObject): void {
  document.addEventListener(eventName, listener)
}

/**
 * Unsubscribes a listener function from a custom event on the document.
 * @param eventName - The name of the event to stop listening for.
 * @param listener - The callback function to remove.
 */
function unsubscribe(eventName: string, listener: EventListenerOrEventListenerObject): void {
  document.removeEventListener(eventName, listener)
}

/**
 * Publishes (dispatches) a custom event with optional data payload on the document.
 * @param eventName - The name of the event to dispatch.
 * @param data - Optional data to include in the event's detail property.
 */
function publish(eventName: string, data?: any): void {
  const event = new CustomEvent(eventName, { detail: data })
  document.dispatchEvent(event)
}

/**
 * Dispatches a custom 'querychange' event on the document to signal that URL query parameters have changed.
 * can be used with useQueryParamsListener hook.
 */
export const QUERY_CHANGE_EVENT = 'querychange'
function querychange() {
  document.dispatchEvent(new CustomEvent(QUERY_CHANGE_EVENT))
}

export { publish, subscribe, unsubscribe, querychange }
