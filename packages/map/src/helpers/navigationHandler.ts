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

  // Abort if value is blank
  if (0 === urlString.length) {
    throw Error('Blank string passed as URL. Navigation aborted.')
  }

  const urlObj = new URL(urlString, window.location.origin)

  // Open constructed link in new tab/window
  window.open(urlObj.toString(), navigationTarget)
}
