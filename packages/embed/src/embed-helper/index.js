/**
 * CDC COVE Embed Helper - Phase 2
 *
 * Standalone script that handles iframe resizing for embedded COVE visualizations.
 * Partners include this on their page along with the iframe(s).
 *
 * Usage:
 * <iframe src="..." data-cove-embed width="100%" height="400"></iframe>
 * <script src="https://www.cdc.gov/.../embed-helper.js"></script>
 */

;(function () {
  'use strict'

  // Find all COVE embed iframes
  const iframes = document.querySelectorAll('iframe[data-cove-embed]')

  if (iframes.length === 0) {
    console.warn('CDC COVE Embed Helper: No iframes found with data-cove-embed attribute.')
    return
  }

  // Assign unique IDs to each iframe
  iframes.forEach((iframe, index) => {
    const id = `cove-${index}`
    iframe.setAttribute('data-cove-id', id)

    // Send the ID to the iframe via postMessage after it loads
    iframe.addEventListener('load', () => {
      if (iframe.contentWindow) {
        iframe.contentWindow.postMessage(
          {
            type: 'cove:setId',
            id: id
          },
          '*'
        )
      }
    })
  })

  // Listen for resize messages from embedded visualizations
  window.addEventListener('message', function (event) {
    // Security: Only accept messages from cdc.gov (any subdomain or no subdomain) OR localhost (for dev)
    const isValidOrigin =
      event.origin.match(/^https:\/\/([a-z0-9-]+\.)?cdc\.gov$/) || event.origin.match(/^http:\/\/localhost(:\d+)?$/)

    if (!isValidOrigin) {
      console.warn('Embed Helper: Rejected message from invalid origin:', event.origin)
      return
    }

    // Handle resize events
    if (event.data && event.data.type === 'cove:resize') {
      const iframeId = event.data.id
      const height = event.data.height

      if (!height || typeof height !== 'number') {
        console.warn('CDC COVE Embed Helper: Invalid height received:', height)
        return
      }

      // Find the corresponding iframe
      const iframe = document.querySelector(`iframe[data-cove-id="${iframeId}"]`)

      if (iframe) {
        iframe.style.height = height + 'px'
      } else {
        console.warn(`[Embed Helper] ✗ Could not find iframe with id "${iframeId}"`)
      }
    }
  })
})()
