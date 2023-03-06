export function subscribe(eventName, listener) {
  return document.addEventListener(eventName, listener)
}

export function unsubscribe(eventName, listener) {
  return document.removeEventListener(eventName, listener)
}

export function publish(eventName, data) {
  const event = new CustomEvent(eventName, { detail: data })
  return document.dispatchEvent(event)
}
