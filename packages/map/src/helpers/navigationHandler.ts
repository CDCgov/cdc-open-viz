export const navigationHandler = (
  navigationTarget: '_self' | '_blank',
  urlString: string,
  customNavigationHandler?: Function
): void => {
  // Call custom navigation method if passed
  if (customNavigationHandler) {
    customNavigationHandler(urlString)
    return
  }

  // Abort if urlString is not a valid string
  if (typeof urlString !== 'string' || urlString.trim().length === 0) {
    throw Error('Invalid or blank URL. Navigation aborted.')
  }

  const urlObj = new URL(urlString, window.location.origin)

  // Open constructed link in new tab/window
  window.open(urlObj.toString(), navigationTarget)
}
